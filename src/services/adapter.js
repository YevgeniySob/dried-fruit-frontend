const API_URL = `http://localhost:3000/`;

const headers = {
	Accepts: 'application/json',
	'Content-Type': 'application/json'
};

const createTweet = tweet => {
	return fetch(`${API_URL}/tweets`, {
		method: 'POST',
		headers,
		body: JSON.stringify(tweet)
	}).then(res => res.json());
};

const fetchFeed = feedId => {
	return fetch(`${API_URL}/feeds/${feedId}`).then(res => res.json());
};

const createMessage = messageParams => {
	return fetch(`${API_URL}/messages`, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			messageParams
		})
	})
};

export default { createTweet, fetchFeed, createLike };
