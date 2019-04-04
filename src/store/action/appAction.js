import * as constant from "../../helper/constant";
import * as collection from "../../helper/collection";
import * as internetHelper from "../../helper/internet";


// local dispatch
export const setCurrentRouteIndex = (currentRouteIndex) => ((dispatch) => dispatch(collection.dispatchAction(constant.CURRENT_ROUTE, { currentRouteIndex })));


// item create
export const createAccount = (payload, notify = null) => {
	return async (dispatch, getState) => {
		const axiosData = await internetHelper.makeRequest(constant.CREATE_ACCOUNT_URL, "POST", null, payload);
		await dispatchEngine(axiosData, constant.CREATE_ACCOUNT_DISPATCH, dispatch, notify);
	};
};

export const createUpload = (payload, notify = null) => {
	return async (dispatch, getState) => {
		const axiosData = await internetHelper.makeFormRequest(constant.CREATE_UPLOAD_URL, payload);
		await dispatchEngine(axiosData, constant.CREATE_UPLOAD_DISPATCH, dispatch, notify);
	};
};

export const createGrant = (payload, notify = null) => {
	return async (dispatch, getState) => {
		const axiosData = await internetHelper.makeRequest(constant.CREATE_GRANT_URL, "POST", null, payload);
		await dispatchEngine(axiosData, constant.CREATE_GRANT_DISPATCH, dispatch, notify);
	};
};

// get all fetches
export const fetchAllUpload = (payload, notify = null) => {
	return async (dispatch, getState) => {
		const axiosData = await internetHelper.makeRequest(constant.FETCH_ALL_UPLOAD_URL, "POST", null, payload);
		await dispatchEngine(axiosData, constant.FETCH_ALL_UPLOAD_DISPATCH, dispatch, notify);
	};
};

export const fetchAllGrant = (payload, notify = null) => {
	return async (dispatch, getState) => {
		const axiosData = await internetHelper.makeRequest(constant.FETCH_ALL_GRANT_URL, "POST", null, payload);
		await dispatchEngine(axiosData, constant.FETCH_ALL_GRANT_DISPATCH, dispatch, notify);
	};
};

// utils dispatch
export const decryptData = (payload, notify = null) => {
	return async (dispatch, getState) => {
		const axiosData = await internetHelper.makeRequest(constant.DECRYPT_DATA, "POST", null, payload);
		await dispatchEngine(axiosData, constant.DECRYPT_DATA_DISPATCH, dispatch, notify);
	};
};

// dispatch resolver
const dispatchEngine = (axiosData, reduxDispatchEnum, dispatch, notify, errorReduxDispatchEnum = constant.ERROR_DISPATCH) => {
	return new Promise(async () => {
		if (axiosData && axiosData.value && axiosData.value.status >= 200 && axiosData.value.status <= 204) {
			const dispatchPayload = collection.getDispatchResult(axiosData);
			if (dispatchPayload) {
				notify && notify({ value: dispatchPayload });
				return dispatch(collection.dispatchAction(reduxDispatchEnum, dispatchPayload));
			} else {
				notify && notify({ error: "Something went wrong" });
				return dispatch(collection.dispatchAction(errorReduxDispatchEnum));
			}
		} else if (axiosData && axiosData.error) {
			if (typeof axiosData.error == "string") {
				notify && notify({ error: axiosData.error });
			} else {
				const errorResponse = axiosData.error && axiosData.error.response && axiosData.error.response || "Something went wrong";
				if (errorResponse && errorResponse.status == 499) {
					// check type of error is it related to api freeze
					return dispatch(collection.dispatchAction(constant.API_FREEZE_DISPATCH));
				} else {
					if (axiosData.error.message && axiosData.error.message == "Network Error") {
						collection.showMessage("Network Error. Please try after some time.", "error");
					}
					dispatch(collection.dispatchAction(errorReduxDispatchEnum));
				}

				notify && notify({ error: errorResponse.data });
				if (errorResponse && errorResponse.status == 401) {
					collection.deleteAllCookie();
					collection.showNotification("Unable to access data.", "error");
				}
			}
		} else {
			notify && notify({ error: "Something went wrong" });
			dispatch(collection.dispatchAction(errorReduxDispatchEnum));
		}
	});
};