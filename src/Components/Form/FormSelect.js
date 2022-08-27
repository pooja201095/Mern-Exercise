import { useRef } from "react";

function FormSelect(props) {
    const {
      label,
      value, 
      name,
      onChange,
      users
    } = props;
  
    return (
        <div className='form-group'>
        <label>{label}  </label>
        <select
          ref={useRef('username')}
          className='form-control'
          value={value}
          name={name}
          onChange={onChange}
          required>
          {users.map((user) => {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
        </select>
      </div>
    )
  }

  export default FormSelect;