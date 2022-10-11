export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOG_OUT = 'LOG_OUT';
export const CHANGE_REDIRECTION = 'CHANGE_REDIRECTION';

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
  });
  
  export const logout = () => ({
    type: LOG_OUT,
  });

  export const changeRedirection = (redirection) => ({
    type: CHANGE_REDIRECTION,
    redirection: redirection
  })