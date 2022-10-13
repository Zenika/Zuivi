import { CHANGE_LOGIN_FIELD, CHANGE_REDIRECTION, CLEAN_AUTH_FIELD, SAVE_USER_DATA } from "../actions/authentication";
import { CHANGE_REGISTER_FIELD } from "../actions/register";


  
  export const initialState = {
    email: '',
    password: '',
    passwordVerification: '',
    redirection: null,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_LOGIN_FIELD:
          return {
            ...state,
            [action.fieldIdentifier]: action.value,
          };

        case SAVE_USER_DATA:
        return {
            ...state,
            connectedUser: action.user.user,
        };

        case CHANGE_REDIRECTION:
          return {
            ...state,
            redirection: action.redirection
          }

        case CLEAN_AUTH_FIELD:
          return {
            ...state,
            email: '',
            password: '',
            passwordVerification: ''
          }
        
        case CHANGE_REGISTER_FIELD:
            return {
              ...state,
              [action.fieldIdentifier]: action.value,
            }

      default:
        return state;

    }
  };
  
  export default reducer;