
import { combineReducers } from 'redux';
import consultantReducer from './consultant';
import manageConsultantReducer from './manageConsultant';
import manageMeetingPointReducer from './manageMeetingPoint';
import typeOfMeetingReducer from './typeOfMeeting';


const rootReducer = combineReducers({
  consultant: consultantReducer,
  // manageConsultant: manageConsultantReducer,
  // manageMeetingPoint: manageMeetingPointReducer,
  typeOfMeeting: typeOfMeetingReducer,

});

export default rootReducer;