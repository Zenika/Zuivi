import axios from "axios";
import { GET_TYPE_OF_MEETING, saveTypeOfMeeting } from "../actions/getTypeOfMeeting";

const getTypeOfMeetingMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case GET_TYPE_OF_MEETING: {
          axios.get('http://localhost:3000/typeOfMeeting')
            .then((response) => {
                // console.log(response.data);
              store.dispatch(saveTypeOfMeeting(response.data));
            });
    
          break;
        }
    
        default:
      }

    next(action);

    
}

export default getTypeOfMeetingMiddleware;