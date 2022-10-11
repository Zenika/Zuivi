
import { combineReducers } from 'redux';
import consultantReducer from './consultant';
import manageConsultantReducer from './manageConsultant';
import manageMeetingPointReducer from './manageMeetingPoint';
import typeOfMeetingReducer from './typeOfMeeting';
import userReducer from './user';


const rootReducer = combineReducers({
  consultant: consultantReducer,
  manageConsultant: manageConsultantReducer,
  // manageMeetingPoint: manageMeetingPointReducer,
  typeOfMeeting: typeOfMeetingReducer,
  user: userReducer

});

export default rootReducer;