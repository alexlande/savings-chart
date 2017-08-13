import React from 'react';

import './field.css';

const Field = props => (
  <div>
    <label
      className='block bold caps mb1 h5'
      htmlFor={props.id}>{props.children}
    </label>

    <input
      className='block h3 p2 field__input col-12'
      id={props.id}
      onChange={props.onChange}
      value={props.value}
      type={props.type}
    />
  </div>
);

export default Field;
