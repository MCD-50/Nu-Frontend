//urls

import * as configFrontend from "../../configFrontend";
export const config = configFrontend;

// paddings
export const CONTENT_PADDING = 100;

//colors
export const FOOTER_COLOR = "#222";
export const SUB_TITLE_COLOR = "#D8D8D8";
export const SIDEBAR_GRAY_COLOR = "#ECECEC";
export const SIDEBAR_GRAY_COLOR_TWO = "#F7F7F7";
export const SIDEBAR_LINUX_COLOR = "#333333";
export const DETAIL_LINUX_COLOR = "#FFF";
export const BLACK_LINUX_COLOR = "#000";
export const PRICOLOR = "#4280f1";
export const ACCENTCOLOR = "#4280f1";
export const TEXTGRAYSECCOLOR = "#8a8a8a";
export const CARROT = "#e67e22";
export const PETER_RIVER = "#4280f1";
export const WISTERIA = "#8e44ad";
export const ALIZARIN = "#e74c3c";
export const TURQUOISE = "#70a800";
export const MIDNIGHT_BLUE = "#2c3e50";
export const INDIANRED = "#ea0070";
export const TEAL = "#008080";
export const NAVY = "#000080";
export const PURPLE = "#003569";

export const PRIMARY_COLOR = "#4280f1";

export const INSTA_DIVIDER = "#003569";
export const INSTA_BASE = "#fafafa";
export const INSTA_BORDER = "#d9d9d9";

// app constant
export const APP_NAME = "GenoBank";
export const COOKIE_TOKEN = "cookie_auth_hash";
export const COOKIE_CUSTOMER_ID = "cookie_customer_id";
export const CHAT_FONT_SIZE = 12;

// item create
export const CREATE_ACCOUNT_URL = "createAccount";
export const CREATE_UPLOAD_URL = "createUpload";
export const CREATE_GRANT_URL = "createGrant";

// item fetch
export const GET_ACCOUNT_URL = "getAccount";
export const GET_UPLOAD_URL = "getUpload";
export const GET_GRANT_URL = "getGrant";

// list fetches
export const FETCH_ALL_UPLOAD_URL = "getUploads";
export const FETCH_ALL_GRANT_URL = "getGrants";

// utils
export const DECRYPT_DATA = "decryptData";


/* 
	Dispatches
*/

//redux action constant
export const CURRENT_ROUTE = "CURRENT_ROUTE";


// item create dispatch
export const CREATE_ACCOUNT_DISPATCH = "CREATE_ACCOUNT_DISPATCH";
export const CREATE_GRANT_DISPATCH = "CREATE_GRANT_DISPATCH";
export const CREATE_UPLOAD_DISPATCH = "CREATE_UPLOAD_DISPATCH";

// item fetch dispatch
export const GET_ACCOUNT_DISPATCH = "GET_ACCOUNT_DISPATCH";
export const GET_GRANT_DISPATCH = "GET_GRANT_DISPATCH";
export const GET_UPLOAD_DISPATCH = "GET_UPLOAD_DISPATCH";

export const FETCH_ALL_UPLOAD_DISPATCH = "FETCH_ALL_UPLOAD_DISPATCH";
export const FETCH_ALL_GRANT_DISPATCH = "FETCH_ALL_GRANT_DISPATCH";

// utils dispatch
export const DECRYPT_DATA_DISPATCH = "DECRYPT_DATA_DISPATCH";

export const ERROR_DISPATCH = "ERROR_DISPATCH";