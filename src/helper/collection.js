import moment from "moment";
import * as constant from "./constant";
import { Modal, message, notification } from "antd";
import * as cookies from "sfcookies";
import { BigNumber } from "bignumber.js";

export const getKey = (date) => {
	return date.replace(/\s/g, "").replace(/:/g, "").replace(/-/g, "");
};

export const getBadgeTitleFromStatus = (status) => {
	if (status) {
		if (status == "pending" || status == "processing" || status == "active") {
			return "processing";
		} else if (status == "completed" || status == "won" || status == "closed" || status == "money_distributed") {
			return "success";
		} else if (status == "failed" || status == "lost") {
			return "error";
		}
	}
	return "default";
};


export const getBuyOrders = (items) => {
	const filler = 20 - items.length;
	const fillerItems = Array(filler).fill(0).map(() => {
		return {
			remainingQuantity: "--",
			price: "--",
			createdAt: "--"
		};
	});

	return items.slice().concat(fillerItems).slice();
};

export const getSellOrders = (items) => {
	const filler = 20 - items.length;
	const fillerItems = Array(filler).fill(0).map(() => {
		return {
			remainingQuantity: "--",
			price: "--",
			createdAt: "--"
		};
	});


	return fillerItems.concat(items.slice().reverse()).slice();
};

export const getTransactionHistory = (items) => {
	const filler = 20 - items.length;
	const fillerItems = Array(filler).fill(0).map(() => {
		return {
			dealtQuantity: "--",
			price: "--",
			createdAt: "--"
		};
	});

	return items.slice().concat(fillerItems).slice();
};


export const getToFixedPoint = (currencyType) => {
	if (constant.FIAT_CURRENCIES.includes(currencyType)) {
		return 8;
	}
	return 8;
};

export const getAvatar = (value) => {
	return null;
};

export const toFixed = (value, count = 8) => {

	if ((value == null || value == undefined) || isNaN(value) || (typeof (value) == "string" && value.length < 1)) {
		if (value == "--") return "--";
		return Number(0).toFixed(8);
	} else {
		try {
			return Number(value).toFixed(count);
		} catch (exe) {
			return Number(0).toFixed(8);
		}
	}
};

export const getAmountFromPercentOf = (amount, percent = 0) => {
	amount = safeParseFloat(amount);
	percent = safeParseFloat(percent);
	return safeParseFloat((amount * percent) / 100);
};

export const getPercentFromAmount = (value, total, precision = 8) => {
	value = safeParseFloat(value);
	total = safeParseFloat(total);
	if (total == 0) {
		return 0;
	}

	return safeParseFloat(((value / total) * 100), 0, precision);
};

export const safeParseFloat = (value, defaultValue = 0, precision = 8) => {
	if ((value == null || value == undefined) || isNaN(value) || (typeof (value) == "string" && value.length < 1)) {
		return defaultValue;
	} else {
		try {
			const parsedValue = new BigNumber(new BigNumber(value).toFixed(precision)).toNumber();
			if (parsedValue < 0 || isNaN(parsedValue)) {
				return 0;
			}
			return parsedValue;
		} catch (exe) {
			return 0;
		}
	}
};

export const safeParseInt = (value, defaultValue = 0) => {
	if ((value == null || value == undefined) || isNaN(value) || (typeof (value) == "string" && value.length < 1)) {
		return defaultValue;
	} else {
		try {
			const parsedValue = parseInt(value);
			return parsedValue;
		} catch (exe) {
			return 0;
		}
	}
};

export const safeAdd = (value1, value2, defaultValue = 0) => {
	if ((value1 == null || value1 == undefined) || isNaN(value1) || (typeof (value1) == "string" && value1.length < 1)
		|| (value2 == null || value2 == undefined) || isNaN(value2) || (typeof (value2) == "string" && value2.length < 1)) {
		return 0;
	} else {
		try {
			const parsedValue1 = safeParseFloat(value1);
			const parsedValue2 = safeParseFloat(value2);
			if (parsedValue1 < 0 || isNaN(parsedValue1) || parsedValue2 < 0 || isNaN(parsedValue2)) {
				return 0;
			}

			const resultantValue = parsedValue1 + parsedValue2;
			return safeParseFloat(resultantValue);
		} catch (exe) {
			return 0;
		}
	}
};

export const safeMultiply = (value1, value2, defaultValue = 0) => {
	if ((value1 == null || value1 == undefined) || isNaN(value1) || (typeof (value1) == "string" && value1.length < 1)
		|| (value2 == null || value2 == undefined) || isNaN(value2) || (typeof (value2) == "string" && value2.length < 1)) {
		return 0;
	} else {
		try {
			const parsedValue1 = safeParseFloat(value1);
			const parsedValue2 = safeParseFloat(value2);
			if (parsedValue1 < 0 || isNaN(parsedValue1) || parsedValue2 < 0 || isNaN(parsedValue2)) {
				return 0;
			}

			const resultantValue = parsedValue1 * parsedValue2;
			return safeParseFloat(resultantValue);
		} catch (exe) {
			return 0;
		}
	}
};

export const safeSubtract = (value1, value2, defaultValue = 0) => {
	if ((value1 == null || value1 == undefined) || isNaN(value1) || (typeof (value1) == "string" && value1.length < 1)
		|| (value2 == null || value2 == undefined) || isNaN(value2) || (typeof (value2) == "string" && value2.length < 1)) {
		return 0;
	} else {
		try {
			const parsedValue1 = safeParseFloat(value1);
			const parsedValue2 = safeParseFloat(value2);
			if (parsedValue1 < 0 || isNaN(parsedValue1) || parsedValue2 < 0 || isNaN(parsedValue2)) {
				return 0;
			}

			if (parsedValue1 > parsedValue2) {
				return safeParseFloat(parsedValue1 - parsedValue2);
			} else {
				return safeParseFloat(parsedValue2 - parsedValue1);
			}
		} catch (exe) {
			return 0;
		}
	}
};

export const safeDivide = (value1, value2, defaultValue = 0) => {
	if ((value1 == null || value1 == undefined) || isNaN(value1) || (typeof (value1) == "string" && value1.length < 1)
		|| (value2 == null || value2 == undefined) || isNaN(value2) || (typeof (value2) == "string" && value2.length < 1)) {
		return 0;
	} else {
		try {
			const parsedValue1 = safeParseFloat(value1);
			const parsedValue2 = safeParseFloat(value2);
			if (parsedValue1 < 0 || isNaN(parsedValue1) || parsedValue2 < 0 || isNaN(parsedValue2)) {
				return 0;
			}

			if (parsedValue2 > 0) {
				return safeParseFloat(parsedValue1 / parsedValue2);
			} else {
				return 0;
			}
		} catch (exe) {
			return 0;
		}
	}
};


export const getNotificationIcon = (type) => {
	if (type) {
		if (type.includes("failed")) {
			return "close";
		} else if (type.includes("convert")) {
			return "swap";
		} else if (type.includes("deposit")) {
			return "arrow-down";
		} else if (type.includes("withdraw")) {
			return "arrow-up";
		} else if (type.includes("prediction")) {
			return "pay-circle-o";
		}
	}
	return "swap";
};

export const getReverseMap = (currentMap) => {
	if (currentMap) {
		return Object.keys(currentMap).reduce((result, key) => {
			const value = currentMap[key];
			result[value] = key;
			return result;
		}, {});
	}
	return {};
};

export const normalizeCamelCase = (key) => {
	key = String(key);
	if (key) {
		return key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
	}
	return "Unknown";
};


export const capitalize = (str, defaultValue = "Unknown") => {
	str = String(str);
	if (str) {
		str = normalizeCamelCase(str);
		let pieces = str.split(/_| /);
		for (let i = 0; i < pieces.length; i++) {
			const j = pieces[i].charAt(0).toUpperCase();
			pieces[i] = j + pieces[i].substr(1);
		}
		return pieces.join(" ").trim();
	}
	return defaultValue;
};

export const upperCase = (str, defaultValue = "Unknown") => {
	if (str) {
		return str.toUpperCase();
	}
	return defaultValue;
};

export const lowerCase = (str, defaultValue = "Unknown") => {
	if (str) {
		return str.toLowerCase();
	}
	return defaultValue;
};

export const getLimitedText = (text, length = 300) => {
	if (text && text.length > length) {
		return text.slice(0, length) + "...";
	}
	return text;
};

export const getDispatchResult = (axiosData) => {
	if (axiosData.value.data && axiosData.value.data.result) {
		return axiosData.value.data.result;
	}
	return null;
};

export const validateEmail = (email) => {
	if (!email) {
		return false;
	}
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}
	return false;
};

export const validatePan = (panId) => {
	if (!panId) return false;
	if (/^\w{10}$/.test(panId)) {
		return true;
	}
	return false;
};

export const validatePassport = (passportId) => {
	if (!passportId) return false;
	if (/^\d{9}$/.test(passportId)) {
		return true;
	}
	return false;
};

export const getOption = (url, method, token, data) => {
	let options = {
		method: method || "GET",
		url: url,
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json",
			// "Access-Control-Allow-Origin": "*",
			// "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
		}
	};

	if (token != null) {
		options.headers["Authorization"] = token;
	}

	if (data) {
		const payload = data;
		options["method"] = method || "POST";
		options["data"] = payload;
	}

	return options;
};

export const getFormOption = (url, data) => {
	let bodyFormData = new FormData();
	bodyFormData.append("walletAddress", data["walletAddress"]);
	bodyFormData.append("password", data["password"]);
	bodyFormData.append("detail", data["detail"]);
	bodyFormData.append("file", data["file"]);


	console.log(bodyFormData);

	let options = {
		method: "POST",
		url: url,
		data: bodyFormData,
		headers: {
			"Accept": "application/json",
			"Content-Type": "multipart/form-data",
		},
	};

	return options;
};

export const getSanitizedPayload = (payload, seperateKey = ["_id"]) => {
	const seperatedKeys = [];
	seperateKey.map(key => {
		if (payload[key]) {
			seperatedKeys.push(payload[key]);
			delete payload[key];
		}
	});

	return { seperatedKeys, payload };
};

export const getTextColor = (str) => {
	if (!str) {
		return constant.WISTERIA;
	}
	const array = [constant.CARROT, constant.PETER_RIVER, constant.WISTERIA, constant.ALIZARIN, constant.TURQUOISE, constant.MIDNIGHT_BLUE, constant.INDIANRED, constant.TEAL, constant.NAVY, constant.PURPLE];
	return array[str.length % array.length];
};

export const getCookie = (key) => {
	return cookies.read_cookie(key);
};

export const deleteCookie = (key) => {
	return cookies.delete_cookie(key);
};

export const deleteAllCookie = () => {
	cookies.delete_cookie(constant.COOKIE_TOKEN);
	cookies.delete_cookie(constant.COOKIE_CUSTOMER_ID);
	return 1;
};

export const setCookie = (key, value) => {
	return cookies.bake_cookie(key, value);
};

export const getDateTime = (createdAt, format = "DD/MM/YY HH:mm:ss") => {
	return moment(createdAt).format(format);
};

const parseTime = (hh, mm, ss) => {
	if (hh.toString().length < 2)
		hh = "0" + hh;
	if (mm.toString().length < 2)
		mm = "0" + mm;
	if (ss.toString().length < 2)
		ss = "0" + ss;
	return hh + ":" + mm + ":" + ss;
};

export const showPopupMessage = (title, type = "success", message = "") => {
	Modal[type]({
		title: title,
		content: message,
	});
};

export const showMessage = (title, type = "success", duration = 2) => {
	if (type == "error") duration = 5;
	message[type](title, duration);
};

export const showNotification = (title, type = "success", message = "", duration = 2) => {
	if (type == "error") duration = 5;
	notification[type]({ message: title, description: message, duration });
};


const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export const getCreatedOn = (createdOn) => {
	createdOn = moment(createdOn).format("LLL");
	return createdOn;
};

export const dispatchAction = (type, payload = null) => (payload != null ? { type, payload } : { type });