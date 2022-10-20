
import { combineReducers } from 'redux';
import consultantReducer from './consultant';
import manageConsultantReducer from './manageConsultant';
import manageMeetingPointReducer from './manageMeetingPoint';
import userReducer from './user';


const rootReducer = combineReducers({
  consultant: consultantReducer,
  manageConsultant: manageConsultantReducer,
  // manageMeetingPoint: manageMeetingPointReducer,
  user: userReducer

});

export default rootReducer;