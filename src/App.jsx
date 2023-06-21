import './Sass/App.scss';
import Values from 'values.js';
import React, { useState } from 'react';
import Form from './components/Form';
import ColorsContainer from './components/ColorsContainer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const colorListDefaul = new Values('#e70d0d').all(10);

  const [colorList, setColorList] = useState(colorListDefaul);
  const addColorList = (color) => {
    try {
      const newColorList = new Values(color).all(10);
      setColorList(newColorList);
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <React.Fragment>
      <Form addColorList={addColorList} />
      <ColorsContainer
        colorList={colorList}
        toast={toast}
      />
      <ToastContainer />
    </React.Fragment>
  );
}

export default App;
