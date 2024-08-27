'use client';
//
import InputControl from '@/components/InputControl';
import Sprite from '../components/Sprite';
import React from 'react';

export default function Home() {
  //
  type Input = {
    'first-name': string;
    'last-name': string;
    gender: 'male' | 'female';
    active: boolean;
  };
  //
  const [input, setInput] = React.useState<Input>({
    'first-name': '',
    'last-name': '',
    gender: 'male',
    active: false
  });
  //
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: type === 'checked' ? checked : value }));
  }
  //
  return (
    <main>
      <p>Website Dev mode is working.</p>
      <Sprite name="plus" style={{ stroke: 'var(--primary)', color: 'var(--background)' }} />
      <Sprite name="trash" style={{ stroke: 'var(--primary)', color: 'var(--background)' }} />
	<p>Entry Form</p>	
      <form className="max-w-sm w-full mx-auto border border-black rounded-md p-2">
        <div>
          <InputControl
            label="First name"
            id="first-name"
            type="text"
            value={input['first-name']}
            onChange={handleChange}
          />
          <InputControl
            label="Last name"
            id="last-name"
            type="text"
            value={input['last-name']}
            onChange={handleChange}
          />
          <fieldset className="border border-black rounded my-2 flex justify-center justify-items-center">
            <legend className="mx-auto bg-black text-white px-8 rounded">Gender</legend>
            <InputControl
              label="Male"
              id="gender"
              type="radio"
              checked={input.gender === 'male'}
              value="male"
              onChange={handleChange}
            />
            <InputControl
              label="Female"
              id="gender"
              type="radio"
              checked={input.gender === 'female'}
              value="female"
              onChange={handleChange}
            />
          </fieldset>
          <InputControl label="Active" id="active" type="checkbox" checked={input.active} onChange={handleChange} />
        </div>
        <button type="submit" className="bg-blue-500 text-white w-full h-12 rounded text-base">
          Submit
        </button>
      </form>
    </main>
  );
}
