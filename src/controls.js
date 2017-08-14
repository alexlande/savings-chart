import React from 'react';

import Field from './field';

const UpdatingField = ({
  children,
  name,
  value,
  handleUpdate
}) => (
  <Field id={name}
    onChange={ev => handleUpdate({
      name,
      value: ev.target.value
    })}
    value={value}
    type='number'
  >
    {children}
  </Field>
);

const columns = 'col-12 md-col-6';
const right = 'md-pl2';
const left = 'md-pr2';

const Controls = ({
  initialSavings,
  annualSavings,
  years,
  interest,
  handleUpdate
}) => (
  <div className='topBorder bg-black p2 md-p4'>
    <form className='flex flex-wrap max-width-4 mx-auto'>
      <div className={`${columns} ${left} pb3`}>
        <UpdatingField
          handleUpdate={handleUpdate}
          name='initialSavings'
          value={initialSavings}
        >
          Initial Savings
        </UpdatingField>
      </div>

      <div className={`${columns} ${right} pb3`}>
        <UpdatingField
          handleUpdate={handleUpdate}
          name='annualSavings'
          value={annualSavings}
        >
          Annual Savings
        </UpdatingField>
      </div>

      <div className={`${columns} ${left} pb3 md-pb0`}>
        <UpdatingField
          handleUpdate={handleUpdate}
          name='years'
          value={years}
        >
          Years to save
        </UpdatingField>
      </div>

      <div className={`${columns} ${right}`}>
        <UpdatingField
          handleUpdate={handleUpdate}
          name='interest'
          value={interest}
        >
          Interest rate (%)
        </UpdatingField>
      </div>
    </form>
  </div>
);

export default Controls;
