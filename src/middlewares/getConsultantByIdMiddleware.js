import axios from 'axios';
// import ACTION et/ou action from 'files'

const getConsultantMiddleware = (store) => (next) => (action) => {

//   switch (action.type) {
//       case ACTION: {
//         axios.get/post/delete(endpoint, config)
//             .then((response) => {
//                 store.dispatch(action(response.ladata));
//             });
//         break;
//     }
//     default:  
//   }

  next(action);
};

export default getConsultantMiddleware;