const URL = "https://api.unsplash.com/photos";
const KEY = "?client_id=WatIbCnsXxt0mAS6Y3cXgnwIrZ5uCzNfeiyjXvGxqFc";

const fetchImages = async (page) => {
	const response = await fetch(`${URL}${KEY}&per_page=4&page=${page}aa`);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error(data.errors);
	}

	return data;
};

const fetchImageStats = async (id) => {
	const response = await fetch(`${URL}/${id}/statistics${KEY}`);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error(data.errors);
	}

	return data;
};

export { fetchImages, fetchImageStats };
