import validatejs from 'validate.js';
import moment from 'moment';

import validations from './validations.js';
import { Dimensions } from 'react-native';

validatejs.extend(validatejs.validators.datetime, {
  parse: function(value, options) {
    return +moment.utc(value, "DD/MM/YYYY");
  },
  format: function(value, options) {
    var format = options.dateOnly ? "DD/MM/YYYY" : "DD/MM/YYYY hh:mm:ss";
    return moment.utc(value).format(format);
  }
});

export const validate = (field, value) => {
  let formValues = {}
  let formFields = {}
  formValues[field] = value
  formFields[field] = validations[field]
  const result = validatejs(formValues, formFields)
  if (result) {
    return result[field][0]
  }
  return null
}

export const width = Dimensions.get('window').width;