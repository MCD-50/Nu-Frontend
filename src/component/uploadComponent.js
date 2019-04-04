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
class UploadComponent extends Component {
	constructor(params) {
		super(params);

		this.state = {
			capsuleId: "",
			visible: false,
			loading: false
		}

		this.file = null;

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
		this.beforeUpload = this.beforeUpload.bind(this);
	}


	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				let filter = { walletAddress: values.walletAddress, password: values.password, detail: values.detail, file: this.file };
				this.setState({ loading: true })
				this.props.appAction.createUpload(filter, this.handleResponse);
			}
		});
	}

	handleResponse(result) {
		this.setState({ loading: false })
		if (result.error) {
			collection.showMessage(result.error && result.error.errors && result.error.errors.length > 0 && result.error.errors[0] || "Something went wrong", "error")
		} else if (result.value) {
			this.setState({ visible: true, capsuleId: result.value.capsuleId, transactionHash: result.value.transactionHash });
		}
	}


	beforeUpload(file) {
		this.file = file;
	}


	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div className="wrapper">
				<div style={{ margin: "0 auto", width: 400 }}>
					<antd.Card>
						<div>
							<div className="header-header" style={{ textAlign: "center" }}>UPLOAD</div>
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

								<antd.Form.Item style={{ width: 350 }}>
									{getFieldDecorator('detail', {
										initialValue: "",
										rules: [{ required: true, message: 'Please input DNA details' }],
									})(
										<antd.Input prefix={""} placeholder="Detail" />
									)}
								</antd.Form.Item>

								<div style={{ display: "flex", flex: 1, flexDirection: "column", width: 350, marginBottom: 20 }}>
									<antd.Upload beforeUpload={this.beforeUpload}>
										<antd.Button> <antd.Icon type="upload" /> Click to upload</antd.Button>
									</antd.Upload>
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
											<antd.Timeline.Item>Capsule Id : <b>{this.state.capsuleId}</b></antd.Timeline.Item>
											<antd.Timeline.Item>Tx Hash : <b>{this.state.transactionHash}</b></antd.Timeline.Item>
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


UploadComponent.propTypes = propTypes;
export default antd.Form.create()(UploadComponent);