import React, { memo } from 'react';
import Heading from '../../components/Heading';
import Table from '../../components/Table';

export default memo(function Home(props) {
  console.log('Home Component Rendered');
  return (
    <>
      <Heading {...props} />
      <Table {...props} />
    </>
  );
});
