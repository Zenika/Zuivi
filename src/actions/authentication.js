export const LOG_OUT = 'LOG_OUT';
export const CHANGE_REDIRECTION = 'CHANGE_REDIRECTION';

  
  export const logout = () => ({
    type: LOG_OUT,
  });

  export const changeRedirection = (redirection) => ({
    type: CHANGE_REDIRECTION,
    redirection: redirection
  });