import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';

// Note we are composing all reducers. Web, native, whatever. Of course we can
// pass platform specific reducers in configureStore, but there is no reason to
// do that, until app is really large.
import device from '../device/reducer';
import fields from '../fields/reducer';
import intl from '../intl/reducer';

const appReducer = combineReducers({
  device,
  fields,
  intl,
  routing
});

export default appReducer;
