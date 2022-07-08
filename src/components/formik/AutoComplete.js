import React from 'react';

import { TextField, Checkbox } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { handleAutoCompleteChange } from 'components/formik/helpers';

function FormikAutoComplete({
  label,
  name,
  formik,
  isDisabled = false,
  options = [],
  fullWidth = false,
  style = {},
  sx = {},
  groupBy = (el) => '',
  multiple = false,
}) {
  return (
    <Autocomplete
      freeSolo={multiple && formik.values[name].length >= 3 ? false : true}
      getOptionDisabled={(options) =>
        multiple && multiple && formik.values[name].length >= 3 ? true : false
      }
      multiple={multiple}
      groupBy={groupBy}
      style={style}
      disablePortal
      id={name}
      options={options}
      value={formik.values[name] || ''}
      disabled={isDisabled}
      onChange={(e, val) => handleAutoCompleteChange(e, val, name, formik)}
      getOptionLabel={(el) => el.name || el}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      onBlur={formik.handleBlur}
      renderInput={(params) => (
        <TextField name={name} {...params} label={label} style={style} />
      )}
      sx={sx}
      fullWidth={fullWidth}
    />
  );
}

export default FormikAutoComplete;
