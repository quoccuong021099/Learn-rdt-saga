import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { increment, incrementSaga, incrementSagaSuccess } from './counterSlice';

// export function* log(action: PayloadAction) {
//   console.log('log', action);
// }

export function* handleIncrementSaga(action: PayloadAction<number>) {
  console.log('waiting for 1s');
  yield delay(1000);
  yield put(incrementSagaSuccess(action.payload));
}

export default function* counterSaga() {
  console.log('counterSaga');
  // yield takeEvery(increment().type, log); // bất cứ action nào được dispatch thì function log sẽ chạy
  yield takeLatest(incrementSaga.toString(), handleIncrementSaga);
}
