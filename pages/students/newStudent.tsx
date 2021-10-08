import type { NextPage } from 'next';
import React from 'react';
import AddNewStudent from '../../components/AddNewStudent';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <AddNewStudent />
    </React.Fragment>
  );
};

export default Home;