import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormDate(props) {
    const {
      label,
      value, 
      name,
      onChange
    } = props;
  
    return (
        <div className='form-group'>
          <label>{label} </label>
          <div>
            <DatePicker
                name={name}
              selected={value}
              onChange={onChange}></DatePicker>
          </div>
        </div>
    )
  }

  export default FormDate;