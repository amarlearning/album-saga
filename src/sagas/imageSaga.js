import { takeEvery, select, call, put } from "redux-saga/effects";
import { fetchImages } from "../api";
import { IMAGES } from "../constants";
import { setImages, setError } from "../actions";

const getPage = (state) => state.nextPage;

function* handleImagesLoad() {
	try {
		const page = yield select(getPage);
		const images = yield call(fetchImages, page);
		yield put(setImages(images));
	} catch (error) {
		yield put(
			setError("Something went wrong, Please try after few minutes.")
		);
	}
}

function* watchImagesLoad() {
	yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default watchImagesLoad;
