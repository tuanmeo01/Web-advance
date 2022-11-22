import { takeLatest, put } from 'redux-saga/effects';
import { useAction } from './index';
import axios from 'axios';
// Sử lý dữ liệu khi post

function* loginUser(action) {
  try {
    const repo = yield axios.post('https://ttvnapi.com/v1/login', {
      username: action.payload.username,
      password: action.payload.password,
    });
    console.log(repo);

    yield put(
      useAction.loginSuccess({
        username: action.payload.username,
        password: action.payload.password,
        id: repo.data.data.id,
      }),
    );
    yield put(action.logout);
  } catch (error) {
    yield put(useAction.loginFail());
  }
}

// Root saga
export default function* useUserFromSaga() {
  yield takeLatest(useAction.login.type, loginUser);
}
