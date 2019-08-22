import React from 'react'
import FormRow from './FormRow'
import FieldError from './FieldError'

const labelStyle = {
  display: 'block',
  marginBottom: '8px'
}

const fieldStyle = {
  width: '100%',
  height: '36px',
  border: '1px solid #999',
  fontSize: '1rem',
  paddingLeft: '8px'
}

const fieldErrStyle = {
  ...fieldStyle,
  borderColor: 'red'
}

const Field = ({ error, label, required, touched, ...rest }) => (
  <FormRow>
    <label style={labelStyle}>
      {label} {required && <span>*</span>}
    </label>

    <input
      type="text"
      {...rest}
      style={touched && error ? fieldErrStyle : fieldStyle}
    />
    {touched && error && <FieldError />}
  </FormRow>
)

Field.displayName = 'Field'

export default Field
