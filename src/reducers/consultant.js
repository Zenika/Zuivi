
//  import les actions from 'le fichier correspondant'

  
  export const initialState = {
  // le state initial
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case CHANGE_REDIRECTION:
        return {
          ...state,
          redirection: action.redirection,
        };
    // case ACTION :
    //  return {
    //      ...state,
    //      nomaction : action.nomaction
    // }
      default:
        return state;
    }
  };
  
  export default reducer;