function FormInput(props) {
    const {
      label,
      value, 
      name,
      onChange
    } = props;
  
    return (
        <div className='form-group'>
          <label>{label} </label>
          <input
            type='text'
            className='form-control'
            placeholder={label}
            name={name}
            value={value}
            onChange={onChange}
            required
          />
        </div>
    )
  }

  export default FormInput;