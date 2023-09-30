import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = ({ isVisible = true }) => {
  return (
    <Oval
      height={100}
      width={100}
      color="#ff6596"
      wrapperClass={css.loader}
      visible={isVisible}
      ariaLabel="oval-loading"
      secondaryColor="#ff6596"
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  );
};

Loader.propTypes = {
  isVisible: PropTypes.bool,
};

export default Loader;
