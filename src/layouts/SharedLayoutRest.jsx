import React, {Suspense} from 'react'
import { Link, Outlet } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
import ButtonSecondary from '../components/ButtonSecondary';

const SharedLayoutRestricted = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
        <Link to="dashboard">
          <ButtonSecondary text="DEV BUTTON skip login and go to DASHBOARD" />
        </Link>
      </Suspense>
    </>
  );
  }

export default SharedLayoutRestricted