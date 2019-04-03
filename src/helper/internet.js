import axios from "axios";
import * as collection from "./collection";
import * as constant from "./constant";

export const makeRequest = (endpoint, method = null, token = null, data = null) => {
	const url = constant.config.BASE_URL + endpoint;
	const options = collection.getOption(url, method, token, data);
	return new Promise((resolve, reject) => {
		if (constant.config.MAINTENANCE) {
			return resolve({ error: "Under maintenance. Please try after some time." });
		}

		axios(options)
			.then((res) => resolve({ value: res })).catch((err) => resolve({ error: err }));
	});
};

export const makeFormRequest = (endpoint, data) => {
	const url = constant.config.BASE_URL + endpoint;
	const options = collection.getFormOption(url, data);
	return new Promise((resolve, reject) => {
		if (constant.config.MAINTENANCE) {
			return resolve({ error: "Under maintenance. Please try after some time." });
		}

		axios(options)
			.then((res) => resolve({ value: res })).catch((err) => resolve({ error: err }));
	});
};