import React from 'react';

interface InputProps {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  styleWrapper: string;
  styleInput: string;
  styleTitle: string;
}

export const InputComponent: React.FC<InputProps> = ({
  title,
  value,
  onChange,
  placeholder,
  styleInput,
  styleTitle,
  styleWrapper,
}) => {
  return (
    <div className={`${styleWrapper}`}>
      <label className={`${styleTitle}`} htmlFor={`${title}`}>
        {title}
      </label>
      <input
        className={`${styleInput}`}
        value={value}
        onChange={onChange}
        placeholder={`${placeholder}`}
        type='text'
      />
    </div>
  );
};
