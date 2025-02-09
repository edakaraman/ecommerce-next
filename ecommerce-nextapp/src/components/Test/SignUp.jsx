"use client"
import React, { useRef, useState } from "react";
import { Dialog } from "primereact/dialog";
import MyInputField from "./myInputField";
import MyRadioGroup from "./myRadioGroup";
import MySelectInput from "./mySelectInput";
import MyDateInput from "./myDateInput";
import MySubmitButton from "./mySubmitButton";

import cities from "../../data/cities";

const SignUp = () => {  
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(true); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    personalId: "",
    gender: "",
    city: "",
    startDate: null,
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      startDate: e.value,
    });
  };

  const handleRefClick = () => {
    if (btnRef.current) {
      btnRef.current.focus();
      setTimeout(() => {
        btnRef.current.disable();
      },[2000])
    }
  };

  return (
    <Dialog
      header="User Form"
      visible={visible}
      onHide={() => setVisible(false)} 
      style={{ width: "30vw" }}
      
    >
      <MyInputField
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        label="Username"
      />
      <MyInputField
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        label="Email"
      />
      <MyInputField
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        label="Phone Number"
        placeholder="5XX XXX XX XX"
      />
      <MyInputField
        id="personalId"
        name="personalId"
        value={formData.personalId}
        onChange={handleInputChange}
        label="ID"
        type="number"
        className="w-full"
      />
      <MyRadioGroup
        name="Gender"
        value={formData.gender}
        onChange={(e) => handleInputChange("gender", e.value)}
        options={[
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ]}
      />
      <MySelectInput
        id="city"
        name="city"
        label={"City"}
        value={formData.city}
        options={cities}
        onChange={(e) => handleInputChange("city", e.value)}
        placeholder="Select a city"
      />
      <MyDateInput
        id="start"
        name="startDate"
        label={"Date"}
        value={formData.startDate}
        onChange={handleDateChange}
        dateFormat="yy-mm"
      />
      <MySubmitButton
        label={"Submit"}
        ref={btnRef}
        handleRefClick={handleRefClick}
        type={"button"}
        className={"submit-btn"}
      />
    </Dialog>
  );
};

export default SignUp;