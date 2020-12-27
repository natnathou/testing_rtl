import React from 'react';

const Input = () => {
  const [value, setValue] = React.useState('');
  return (
    <form>
      <label htmlFor='text'>Enter your text:</label>
      <input
        type='text'
        id='text'
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
    </form>
  );
};

export default Input;
