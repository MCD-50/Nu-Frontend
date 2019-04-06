
//from system
import React, { Component } from "react";

import PropTypes from "prop-types";

//from antd
import antd from "antd";

const propTypes = {
	appAction: PropTypes.object.isRequired,
};

//from app
class FooterPartialComponent extends Component {
	constructor(params) {
		super(params);
	}

	render() {
		return (
			<div className="footer-container">
				<div className="footer-container-center">

					<div className="footer-column">
						<div className="footer-header" style={{ color: "#fff", }}>Genobank <sub>ALPHA</sub></div>
						<span> <antd.Tag color="green"><a href={`https://support@genobank.io/`}>{`support@genobank.io`}</a></antd.Tag> </span>
					</div>
					<div className="footer-column">
						<div className="footer-header" style={{ color: "#fff", }}>Product</div>
						<a className="footer-content" style={{ color: "#fff" }} target="_blank" href="/upload">Upload</a>
						<a className="footer-content" style={{ color: "#fff" }} target="_blank" href="/decode">Decode</a>
						<a className="footer-content" style={{ color: "#fff" }} target="_blank" href="/request">Request Access</a>
					</div>
					<div className="footer-column">
						<div className="footer-header" style={{ color: "#fff", }} >History</div>
						<a className="footer-content" style={{ color: "#fff" }} target="_blank" href="/uploadHistory">Uploads</a>
						<a className="footer-content" style={{ color: "#fff" }} target="_blank" href="/grantHistory">Grants</a>
					</div>
					<div className="footer-column">
						<div className="footer-header" style={{ color: "#fff", }} >Company</div>
						<a className="footer-content" style={{ color: "#fff" }} target="_blank" href="/about">About</a>
					</div>
					<div className="footer-column">
						<div className="footer-header" style={{ color: "#fff", }} >Social</div>
						<a className="footer-content" style={{ color: "#fff" }} href="https://support@genobank.io/" target="_blank">Facebook</a>
						<a className="footer-content" style={{ color: "#fff" }} href="https://support@genobank.io/" target="_blank">Twitter</a>
						<a className="footer-content" style={{ color: "#fff" }} href="https://support@genobank.io/" target="_blank">YouTube</a>
						<a className="footer-content" style={{ color: "#fff" }} href="https://support@genobank.io/" target="_blank">Medium</a>
					</div>
				</div>

				<div className="footer-container-center">
					<p style={{ color: "#7d8694", fontSize: 9 }}>
						To empower the world to upload FDA approved Saliva DNA extraction information on blockchain, stored on IPFS to enable an anonymous and encrypted way powered by NuChyper to interact with the World’s Genomic ecosystem with privacy & control.
					</p>
				</div>
			</div>
		);
	}
}

FooterPartialComponent.propTypes = propTypes;
export default FooterPartialComponent;