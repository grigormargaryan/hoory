import React from 'react';

export const customInput = (props) => {
  const { input, meta, placeholder, type, className } = props;
  return (
    <>
      {
        <input type={type} {...input} placeholder={placeholder} className={className} />
        // <input {...input} type={props.type} value={defaultValue}  autoFocus={props.autoFocus}
        //        className='customInput'/>
      }
      {meta.error && meta.touched && !meta.active && (
        <div className="error-text">{meta.error}</div>
      )}
    </>
  );
};
