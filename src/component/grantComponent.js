//from system
import React, { Component } from "react";

import PropTypes from "prop-types";

import * as collection from "../helper/collection";
import * as constant from "../helper/constant"

//from antd
import antd from "antd";

const propTypes = {
	appAction: PropTypes.object.isRequired,
};

//from app
class GrantComponent extends Component {
	constructor(params) {
		super(params);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const filter = { walletAddress: values.walletAddress, password: values.password, capsuleId: values.capsuleId };
				this.props.appAction.createGrant(filter, this.handleResponse);
			}
		});
	}

	handleResponse(result) {
		if (result.error) {
			collection.showMessage(result.error && result.error.errors && result.error.errors.length > 0 && result.error.errors[0] || "Something went wrong", "error")
		} else if (result.value) {
			collection.showMessage("Request sent to data uploader", "success")
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div className="wrapper">
				<div style={{ margin: "0 auto", width: 400 }}>
					<antd.Card>
						<div style={{ flex: 1, display: "flex", width: 400, flexDirection: "column" }}>
							<div className="header-header" style={{ textAlign: "center" }}>REQUEST ACCESS</div>
							<antd.Divider style={{ marginTop: 20, marginBottom: 20 }} />
							<antd.Form onSubmit={this.handleSubmit}>
								<antd.Form.Item style={{ width: 350 }}>
									{getFieldDecorator('walletAddress', {
										initialValue: "",
										rules: [{ required: true, message: 'Please input your account address' }],
									})(
										<antd.Input prefix={""} placeholder="Account Address" />
									)}
								</antd.Form.Item>

								<div style={{ display: "flex", flex: 1, flexDirection: "column", width: 350 }}>
									<antd.Form.Item style={{ width: 350 }}>
										{getFieldDecorator('password', {
											initialValue: "",
											rules: [{ required: true, min: 8, max: 25, message: 'Please input your valid password' }],
										})(
											<antd.Input prefix={""} type={"password"} placeholder="Password" />
										)}
									</antd.Form.Item>
								</div>

								<div style={{ display: "flex", flex: 1, flexDirection: "column", width: 350 }}>
									<antd.Form.Item style={{ width: 350 }}>
										{getFieldDecorator('capsuleId', {
											initialValue: "",
											rules: [{ required: true, message: 'Please input document capsule id' }],
										})(
											<antd.Input prefix={""} placeholder="Capsule Id" />
										)}
									</antd.Form.Item>
								</div>

								<antd.Form.Item style={{ width: 350 }}>
									<antd.Button type="primary" style={{ width: 350 }} htmlType="submit" className="login-form-button"> Continue </antd.Button>
								</antd.Form.Item>

							</antd.Form>
						</div>
					</antd.Card>
				</div>
			</div>
		);
	}
}


GrantComponent.propTypes = propTypes;
export default antd.Form.create()(GrantComponent);