import React from 'react';

import currencyFormatter from './currency-formatter';

const HighlightLabel = ({ amount, year }) => (
  <p
    role='status'
    className='bold center pt3 pb2 md-pb0'
  >
    <span className='block h1'>
      {currencyFormatter.format(amount)}
    </span>

    {`in ${year.getFullYear()}`}
  </p>
);

export default HighlightLabel;
