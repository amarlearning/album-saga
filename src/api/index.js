const URL = "https://api.unsplash.com/photos";
const KEY = "?client_id=klneqXHbVcwGI8OGYfxaL3v86FGnBj8UFsXC_rIiCUM";

const fetchImages = async (page) => {
	const response = await fetch(`${URL}${KEY}&per_page=4&page=${page}`);
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
