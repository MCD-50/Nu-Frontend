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
class DecodeComponent extends Component {
	constructor(params) {
		super(params);
		this.state = {
			decryptedData: "",
			visible: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				const filter = { decryptId: values.decryptId };
				this.props.appAction.decryptData(filter, this.handleResponse);
			}
		});
	}

	handleResponse(result) {
		if (result.error) {
			collection.showMessage(result.error && result.error.errors && result.error.errors.length > 0 && result.error.errors[0] || "Something went wrong", "error")
		} else if (result.value) {
			this.setState({ visible: true, decryptedData: result.value.decryptedData });
			collection.showMessage("Data decrypted and IPFS file hash has been shared on email.", "success")
		}
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
			<div className="wrapper">
				<div style={{ margin: "0 auto", width: 400 }}>
					<antd.Card>
						<div style={{ flex: 1, display: "flex", width: 400, flexDirection: "column" }}>
							<div className="header-header" style={{ textAlign: "center" }}>DECODE</div>
							<antd.Divider style={{ marginTop: 20, marginBottom: 20 }} />
							<antd.Alert message={<div style={{ textAlign: "center" }}>Paste IPFS file hash on IPFS file explore to view file.</div>} type="error" style={{ fontSize: 10, marginBottom: 20 }} />
							<antd.Form onSubmit={this.handleSubmit}>
								<antd.Form.Item style={{ width: 350 }}>
									{getFieldDecorator('decryptId', {
										initialValue: "",
										rules: [{ required: true, message: 'Please input your decryption ID' }],
									})(
										<antd.Input prefix={""} placeholder="Decrypt ID" />
									)}
								</antd.Form.Item>

								<antd.Form.Item style={{ width: 350 }}>
									<antd.Button type="primary" style={{ width: 350 }} htmlType="submit" className="login-form-button"> Continue </antd.Button>
								</antd.Form.Item>

							</antd.Form>

							<antd.Divider style={{ marginTop: 20, marginBottom: 20 }} />

							{
								this.state.visible && (
									<div>
										<antd.Timeline>
											<antd.Timeline.Item>DNA file url (IPFS file usually take 30 mins to appear) : <b>{this.state.decryptedData}</b></antd.Timeline.Item>
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


DecodeComponent.propTypes = propTypes;
export default antd.Form.create()(DecodeComponent);