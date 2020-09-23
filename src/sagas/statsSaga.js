import { call, fork, put, take } from "redux-saga/effects";
import { IMAGES } from "../constants";
import { fetchImageStats } from "../api";
import { loadImageStats, setErrorStats, setImageStats } from "../actions";

function* handleStatsRequest(id) {
	for (let i = 0; i < 3; i++) {
		try {
			yield put(loadImageStats(id));
			const stats = yield call(fetchImageStats, id);
			yield put(setImageStats(id, stats.downloads.total));
			return true;
		} catch (e) {}
	}

	yield put(setErrorStats(id));
}

export default function* watchImageSuccessForStats() {
	while (true) {
		const { images } = yield take(IMAGES.LOAD_SUCCESS);

		for (let i = 0; i < images.length; i++) {
			yield fork(handleStatsRequest, images[i].id);
		}
	}
}
