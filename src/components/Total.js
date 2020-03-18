import React from 'react';

const Total = props => {
  console.log('PROPS (in Total): ', props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
