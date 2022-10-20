
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import authMiddleware from '../middlewares/authMiddleware';
import getConsultantByIdMiddleware from '../middlewares/getConsultantByIdMiddleware';
import getConsultantMiddleware from '../middlewares/getConsultantMiddleware';
import manageConsultantMiddleware from '../middlewares/manageConsultantMiddleware';
import manageMeetingPointMiddleware from '../middlewares/manageMeetingPointMiddleware';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    authMiddleware,
    getConsultantByIdMiddleware,
    getConsultantMiddleware,
    manageConsultantMiddleware,
    // manageMeetingPointMiddleware
  ),
);

const store = createStore(reducer, enhancers);

export default store;