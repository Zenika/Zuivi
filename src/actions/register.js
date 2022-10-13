export const CHANGE_REGISTER_FIELD = 'CHANGE_REGISTER_FIELD';
export const REGISTER = 'REGISTER';

export const changeRegisterField = (value, fieldIdentifier) => ({
    type: CHANGE_REGISTER_FIELD,
    value: value,
    fieldIdentifier: fieldIdentifier,
  });
  
export const register = () => ({
    type: REGISTER,
});