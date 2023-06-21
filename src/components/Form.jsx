import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const Form = ({ addColorList }) => {
  const [color, setColor] = useState('');
  const handleInputColor = (e) => {
    setColor(e.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    addColorList(color);
  };
  return (
    <form
      className='form_container'
      onSubmit={submitForm}
    >
      <label
        htmlFor='color'
        className='label_color'
      >
        Color Generator
      </label>
      <input
        type='color'
        className='input_color'
        value={color}
        onChange={handleInputColor}
      />
      <input
        type='text'
        value={color}
        id='color'
        name='color'
        placeholder='#e70d0d'
        className='input_text'
        onChange={handleInputColor}
      />
      <button
        type='submit'
        style={{ backgroundColor: `${color}` }}
        className='btn'
      >
        Submit
      </button>
    </form>
  );
};
export default Form;
