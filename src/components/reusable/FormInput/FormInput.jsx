import React, { useState } from 'react';
import './FormInput.css';
const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...Ip } = props;
  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className='FormInput w-full mb-5 lg:mb-0'>
      <label>{label}</label>
      <input
        className='text-sm md:text-base mb-5 w-full px-4 py-2 text-gray-700 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent'
        {...Ip}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() => Ip.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()}
      />
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
