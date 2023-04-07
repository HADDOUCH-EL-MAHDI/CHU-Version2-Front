// third-party
import { combineReducers } from 'redux';

// project import
import menu from './menu';
import { signInApi } from 'services/signingApi';
import authSlice from 'store/slices/authSlice';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
    menu,
    auth: authSlice,
    [signInApi.reducerPath]: signInApi.reducer,
});

export default reducers;
