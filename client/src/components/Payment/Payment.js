import React from 'react';
import { useForm } from 'react-hook-form';

const normalizeCardNumber = (value) => {
  return (
    value
      .replace(/\s/g, '')
      .match(/.{1,4}/g)
      ?.join(' ')
      .substr(0, 19) || ''
  );
};

const Payment = () => {
  const { register, handleSubmit } = useForm();

  const handleCardNumberChange = (e) => {
    e.target.value = normalizeCardNumber(e.target.value);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="cardNumber">
          Card number:
          <input
            id="cardNumber"
            type="tel"
            name="cardNumber"
            ref={register}
            placeholder="0000 0000 0000 0000"
            onChange={handleCardNumberChange}
          />
        </label>
      </div>
    </form>
  );
};

export default Payment;
