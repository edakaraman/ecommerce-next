import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { Button } from "primereact/button";

const MySubmitButton = forwardRef(({ label, type, className,handleRefClick }, ref) => {
  const localRef = useRef(null);
  
  useImperativeHandle(ref, () => ({
    focus: () => {
      localRef.current.focus();
    },
    disable: () => {
      localRef.current.disabled = true;
      localRef.current.innerText="Disable Button";
    },
    enable: () => {
       localRef.current.disabled = false;
    }
  }));

  return (
    <Button
      label={label}
      ref={localRef}
      type={type}
      className={className}
      onClick={handleRefClick}
    />
  );
});

export default MySubmitButton;
