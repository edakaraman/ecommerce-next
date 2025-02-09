"use client"
import React, { useContext, useMemo } from 'react';
import menuItems from "../../data/menuItems";
import { ThemeContext } from '../../context/ThemeContext';
import ThemeToggleButton from '../Theme/ThemeToggleButton ';
import Link from 'next/link';

export default function LeftMenu() {
  const { theme } = useContext(ThemeContext);

  const leftMenuClass = useMemo(() => {
    return theme === 'dark' ? 'leftMenu-dark' : 'leftMenu-light';
  }, [theme]);

  const handleClick = (action) => {
    if (action === 'showProTable') {
      setShowProTable();
    } else if (action === 'signUpModal') {
      openSignUpModal();
    }
  };

  return (
    <div className={leftMenuClass}>
      <div className="leftMenu-sub">
        <h2>EDAYOL</h2>
      </div>
      {menuItems.map((section, index) => (
        <div key={index} className="leftMenu-sub-header">
          <p className="dash-header">{section.title}</p>
          {section.items.map((item, id) => (
            <div key={id} className="dash-div">
              <i className={item.iconClass}></i>
              <h6>
                {item.route ? (
                  <Link  href={item.route}>
                    {item.label}
                  </Link>
                ) : (
                  <button onClick={() => handleClick(item.onClick)}>
                    {item.label}
                  </button>
                )}
              </h6>
            </div>           
          ))}
        </div>
      ))}
      <ThemeToggleButton />
    </div>
  );
}
