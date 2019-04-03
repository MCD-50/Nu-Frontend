
//from system
import React, { Component } from "react";


//from antd
import antd from "antd";

const propTypes = {

};

class HeaderPartialComponent extends Component {
	constructor(params) {
		super(params);
		this.state = {
			size: "upload",
			history: "grantHistory"
		}

		this.handleSizeChange = this.handleSizeChange.bind(this);
	}

	handleSizeChange(e, key) {
		this.setState({ [key]: e.target.value });
		this.props.history.push(`/${e.target.value}`)
	}

	render() {
		return (
			<div className="header-container">
				<div className="header-container-center">
					<div style={{ display: "flex", flex: 0.2 }}>
						GenoBank DNA Wallet
					</div>

					<div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
						<div style={{ marginRight: 20 }}>
							<antd.Radio.Button onClick={() => this.props.history.push(`/account`)}>Create Account</antd.Radio.Button>
						</div>

						<div style={{ marginRight: 20 }}>
							<antd.Radio.Group value={this.state.history} onChange={(e) => this.handleSizeChange(e, "history")}>
								<antd.Radio.Button value="grantHistory" >Grant History</antd.Radio.Button>
								<antd.Radio.Button value="uploadHistory">Upload History</antd.Radio.Button>
							</antd.Radio.Group>
						</div>

						<div>
							<antd.Radio.Group value={this.state.size} onChange={(e) => this.handleSizeChange(e, "size")}>
								<antd.Radio.Button value="upload" >Upload</antd.Radio.Button>
								<antd.Radio.Button value="request">Request Access</antd.Radio.Button>
								<antd.Radio.Button value="decode">Decode</antd.Radio.Button>
							</antd.Radio.Group>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

HeaderPartialComponent.propTypes = propTypes;
export default HeaderPartialComponent;