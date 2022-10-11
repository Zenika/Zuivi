export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

export const changeLoginField = (value, fieldIdentifier) => ({
    type: CHANGE_LOGIN_FIELD,
    value: value,
    fieldIdentifier: fieldIdentifier,
  });
  
  export const logIn = () => ({
    type: LOG_IN,
  });

  export const saveUserData = (user) => ({
    type: SAVE_USER_DATA,
    user: user
  })