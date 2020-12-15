import React, { useEffect } from 'react';
import { getByEndPoint } from '../api';

export default () => {
  useEffect(() => {
    const getOrders = async () => {
      await getByEndPoint('/orders');
    };

    getOrders();
  }, []);
  return (
    <div>
      <h1>Order List</h1>
    </div>
  );
};
