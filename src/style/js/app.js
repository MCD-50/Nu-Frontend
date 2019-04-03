export const appStyle = {
	parentTitle: {
		fontSize: 30,
		color: "#333333",
	},
	parentTitleZ: {
		fontSize: 32,
		color: "#333333",
	},
	radioStyle: {
		display: "flex",
		height: 40,
		alignItems: "center",
		fontSize: 20
	},
	gridStyle: {
		width: "33.33%",
		pointer: "cursor",
		height: 400,
		float: "let"
	},
	gridSmallStyle: {
		width: "20%",
		pointer: "cursor",
		height: 250,
		float: "left"
	},
	gridSmallHomeStyle: {
		width: "33.33%",
		pointer: "cursor",
		height: 100,
		float: "left"
	},
	title: {
		color: "rgba(0,0,0,.85)",
		fontSize: 14,
		marginBottom: 5,
	},
	titleBig: {
		color: "rgba(0,0,0,.85)",
		fontSize: 18,
		marginBottom: 5,
	},
	titleWhite: {
		color: "#fff",
		fontSize: 14,
		marginBottom: 5,
		textAlign: "left"
	},
	subTitleBig: {
		color: "rgba(0,0,0,.35)",
		fontSize: 17,
	},
	subTitle: {
		fontSize: 13,
		color: "rgba(0,0,0,.45)"
	},
	smallSubTitle: {
		fontSize: 11,
		color: "rgba(0,0,0,.45)"
	},
	dividerStyle: {
		background: "#D8D8D8",
		height: 1,
	},
	iconStyle: {
		fontSize: 18,
		color: "#D8D8D8",
		marginLeft: 20,
	},
	parentHeading: {
		fontSize: 96,
		color: "#FFF",
		marginLeft: 215,
	},
	parentSubHeading: {
		fontSize: 20,
		color: "#697b8c",
	},
	paragraphStyle: {
		fontSize: 16,
		color: "rgba(0,0,0,0.85)",
		display: "block",
		marginBottom: 16,
	},
	successIcon: {
		fontSize: 17,
		background: "#01aa78",
		borderRadius: "50%",
		color: "#fff",
		height: 16, 
		width: 16,
		textAlign: "center"
	},
	alertIcon: {
		fontSize: 17,
		background: "#ffbf00",
		borderRadius: "50%",
		color: "#fff",
		height: 16, 
		width:16,
		textAlign: "center"
	},
	pirmarySectionHeading: {
		fontSize: 28,
		color: "#314659",
		letterSpacing: 0.6,
		fontWeight: 300,
		marginBottom: 20,
		marginTop: 20,
		display: "flex",
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	featureHeading: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		color: "#222",
		fontSize: 20,
		marginTop: 20,
	},
	featureSubHeading: {
		display: "flex",
		flex: 1,
		justifyContent: "center",
		color: "#222",
		fontSize: 12,
		marginTop: 10,
	},
	featureIcon: {
		width: 40,
		height: 40,
		borderRadius: 40,
		marginTop: 100,
	},
	customPanelStyle: {
		background: "#f7f7f7",
		borderRadius: 4,
		marginBottom: 24,
		border: 0,
		overflow: "hidden",
	}
};


export const chatStyle = {
	chatPanel: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
		overflow: "hidden",
	},
	chatHistory: {
		overflow: "auto"
	},
	chatbubbleWrapper: {
		marginTop: 10,
		marginBottom: 10,
		overflow: "auto",
		position: "relative",
	},
	img: {
		borderRadius: 100,
		bottom: 0,
		left: 0,
		position: "absolute",
		width: 36,
		zIndex: 100,
	},
};

export const chatBubbleStyle = {
	chatbubbleWrapper: {
		overflow: "hidden",
	},
	chatbubble: {
		backgroundColor: "#1890ff",
		borderRadius: 0,
		marginTop: 1,
		marginRight: "auto",
		marginBottom: 1,
		marginLeft: "auto",
		maxWidth: 190,
		padding: 5,
		width: "-webkit-fit-content",
	},
	chatbubbleOrientationNormal: {
		float: "right",
	},
	recipientChatbubble: {
		backgroundColor: "#c7c7c7",
	},
	recipientChatbubbleOrientationNormal: {
		float: "left",
	},
	p: {
		color: "#fff",
		marginBottom: 0,
		margin: 0,
		fontSize: 12
	},
};

export const chatBubbleGroupStyle = {
	chatbubbleWrapper: {
		marginTop: 5,
		marginBottom: 5,
		overflow: "auto",
		position: "relative",
	},
	bubbleGroupHeader: {
		margin: 0,
		fontSize: 12,
		color: "#000",
	},
};

export const chatInputStyle = {
	chatInput: {
		flex: 1,
		background: "#fff",
		height: 50,
	},
	comment: {
		flex: 1,
		background: "#fafafa",
		maxHeight: 100,
		display: "flex",
		padding: 8,
		borderRadius: 15,
		marginBottom: 8
	},
	commentInput: {
		flex: 1,
		background: "#fafafa",
		marginTop: 10,
		height: 40,
		borderWidth: 1,
		borderColor: "#ddd",
		borderStyle: "solid",
	},
	amountInput: {
		flex: 1,
		background: "#fafafa",
		marginTop: 10,
		height: 40,
		borderWidth: 1,
		borderColor: "#ddd",
		borderStyle: "solid",
	},

	inputStyle: {
		border: "none",
		borderTopWidth: 1,
		borderTopStyle: "solid",
		borderTopColor: "#ddd",
		fontSize: 16,
		outline: "none",
		padding: 30,
		width: "100%",
	},
};