import React from 'react';
import { Blocks } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = ({ isVisible = true }) => {
  return (
    <Blocks
      visible={isVisible}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
