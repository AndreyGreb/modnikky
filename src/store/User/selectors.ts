import Tstate from '../rootType';

const getUserIsAuth = (state: Tstate) => state.user.isAuth;

export default getUserIsAuth;
