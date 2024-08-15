import React from 'react';

type Props = {
  label: string;
  id: string;
  type: 'text' | 'checkbox' | 'radio';
  value?: string;
  checked?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputControl({ label, id, type, value, checked, onChange }: Props) {
  return (
    <>
      {type === 'checkbox' ? (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type="checkbox"
            id={id}
            name={id}
            onChange={onChange}
            checked={checked}
            className="inline-block mx-2"
          />
        </>
      ) : type === 'radio' ? (
        <div className="h-8">
          <label htmlFor={id} className="mr-2">
            {label}
          </label>
          <input type="radio" id={id} name={id} onChange={onChange} checked={checked} value={value} className="mr-2" />
        </div>
      ) : (
        <>
          <label htmlFor={id} className="block my-2">
            {label}
          </label>
          <input
            type="text"
            id={id}
            name={id}
            className="block h-12 w-full border border-neutral-200 rounded"
            onChange={onChange}
            value={value}
          />
        </>
      )}
    </>
  );
}
