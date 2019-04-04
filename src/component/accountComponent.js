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
class AccountComponent extends Component {
	constructor(params) {
		super(params);
		this.state = {
			accountAddress: "",
			email: "",
			publicKey: "",
			privateKey: "",
			visible: false,
			loading: false
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const filter = { email: values.email, password: values.password };
				
				this.setState({ loading: true })
				this.props.appAction.createAccount(filter, this.handleResponse);
			}
		});
	}


	handleResponse(result) {
		this.setState({ loading: false, })
		if (result.error) {
			collection.showMessage(result.error && result.error.errors && result.error.errors.length > 0 && result.error.errors[0] || "Something went wrong", "error")
		} else if (result.value) {
			this.setState({ visible: true, accountAddress: result.value.accountAddress, email: result.value.email, publicKey: result.value.publicKey, privateKey: result.value.privateKey });
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div className="wrapper">
				<div style={{ margin: "0 auto", width: 400 }}>
					<antd.Card>
						<div style={{ flex: 1, display: "flex", width: 400, flexDirection: "column" }}>
							<div className="header-header" style={{ textAlign: "center" }}>CREATE ACCOUNT</div>
							<antd.Divider style={{ marginTop: 20, marginBottom: 20 }} />
							<antd.Alert message={<div style={{ textAlign: "center" }}>Please copy Account Address and Password. We do not have any ways to recover it.</div>} type="error" style={{ fontSize: 10, marginBottom: 20 }} />
							<antd.Form onSubmit={this.handleSubmit}>
								<antd.Form.Item style={{ width: 350 }}>
									{getFieldDecorator('email', {
										initialValue: "",
										rules: [{ required: true, message: 'Please input email address' }],
									})(
										<antd.Input prefix={""} placeholder="Email" />
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

								<antd.Form.Item style={{ width: 350 }}>
									<antd.Button type="primary" style={{ width: 350 }} htmlType="submit" className="login-form-button"> Continue </antd.Button>
								</antd.Form.Item>


							</antd.Form>


							<antd.Divider style={{ marginTop: 20, marginBottom: 20 }} />

							<div style={{ textAlign: "center" }}>
								{ this.state.loading && !this.state.visible && <antd.Button shape="circle" loading /> }
							</div>


							{
								this.state.visible && (
									<div>
										<antd.Timeline>
											<antd.Timeline.Item>Address : <b>{this.state.accountAddress}</b></antd.Timeline.Item>
											<antd.Timeline.Item>Email : <b>{this.state.email}</b></antd.Timeline.Item>
											<antd.Timeline.Item>Public Key : <b>{this.state.publicKey}</b></antd.Timeline.Item>
											<antd.Timeline.Item>Private Key : <b>{this.state.privateKey}</b></antd.Timeline.Item>
										</antd.Timeline>
									</div>
								)
							}
						</div>
					</antd.Card>
				</div>
			</div>
		);
	}
}


AccountComponent.propTypes = propTypes;
export default antd.Form.create()(AccountComponent);