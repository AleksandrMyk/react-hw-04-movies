import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import style from './Utils.module.css';

const Spinner = () => {
  return (
    <Loader
      className={style.spinner}
      type="ThreeDots"
      color="#7398ff"
      height={100}
      width={100}
    />
  );
};
export default Spinner;
