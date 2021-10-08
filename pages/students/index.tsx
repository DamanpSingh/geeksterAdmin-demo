import type { NextPage } from 'next';
import React from 'react';
import StudentListing from '../../components/StudentListing';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <StudentListing />
    </React.Fragment>
  );
};

export default Home;