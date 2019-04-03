/* eslint-disable */
import * as constant from "../../helper/constant";
import * as collection from "../../helper/collection";

const initialState = {
	currentRouteIndex: 0,
	
	allGrant: [],
	allUpload: [],
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case constant.CURRENT_ROUTE:
			return {
				...state,
				currentRouteIndex: action.payload.currentRouteIndex
			};

		case constant.FETCH_ALL_UPLOAD_DISPATCH:
			
			return {
				...state,
				allUpload: action.payload.slice() || []
			};

		case constant.FETCH_ALL_GRANT_DISPATCH:
			return {
				...state,
				allGrant: action.payload.slice() || []
			};

		default:
			return state;
	}
};

export default appReducer;
