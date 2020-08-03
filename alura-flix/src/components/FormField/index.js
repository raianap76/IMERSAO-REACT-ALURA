import React from 'react';
import PropTypes from 'prop-types';

function FormField({ values, onChange, type, name, label }) {
    const fieldId=`id_${name}`;
    console.log(type);

    return (
        <div>

            {/*State*/}
            <label
            htmlFor={fieldId}
            >
                {label} :
                <input
                
                    type={type}
                    value={values}
                    name={name}
                    onChange={onChange} />
            </label>
        </div>

    );
}

FormField.defaultProps = {
    type:'text'
}
FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
 //   values, 
   // onChange, 
  //  name
    
}
export default FormField;