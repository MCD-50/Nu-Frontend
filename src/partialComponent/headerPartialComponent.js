
//from system
import React, { Component } from "react";


//from antd
import antd from "antd";

const propTypes = {

};

class HeaderPartialComponent extends Component {
	constructor(params) {
		super(params);
	}

	render() {
		return (
			<div className="header-container">
				<div className="header-container-center">
					<div style={{ display: 'flex', flex: 1 }}>
						<a onClick={() => this.props.history.push(`/`)}><img style={{ height: 30 }} src="https://genobank.io/wp-content/uploads/2019/02/gbbeta-logo.png" /></a>
					</div>

					<div>
						<div style={{ marginRight: 20 }}>
							<antd.Button style={{ marginRight: 10 }} onClick={() => this.props.history.push(`/account`)}>Create Account</antd.Button>
							<antd.Button style={{ marginRight: 10 }} onClick={() => this.props.history.push(`/upload`)}>Upload Data</antd.Button>
							<antd.Button style={{ marginRight: 10 }} onClick={() => this.props.history.push(`/uploadHistory`)}>Upload History</antd.Button>
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}

HeaderPartialComponent.propTypes = propTypes;
export default HeaderPartialComponent;