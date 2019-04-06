//from system
import React, { Component } from "react";

import PropTypes from "prop-types";

import * as collection from "../helper/collection";
import * as constant from "../helper/constant"

//from antd
import antd from "antd";

const propTypes = {
	allGrant: PropTypes.array.isRequired,
	appAction: PropTypes.object.isRequired,
};

class GrantHistoryComponent extends Component {
	constructor(params) {
		super(params);
		this.state = {
			loading: true,
		}

		this.fetchItem = this.fetchItem.bind(this);
		this.handleResponse = this.handleResponse.bind(this);
		this.replicateData = this.replicateData.bind(this);
		this.getGrantColumns = this.getGrantColumns.bind(this);
	}

	componentDidMount() {
		// make api call
		this.fetchItem();
	}

	fetchItem() {
		this.setState({ loading: true });
		this.props.appAction.fetchAllGrant({ filter: {}, paging: {} }, this.handleResponse);
	}

	handleResponse(result) {
		this.setState({ loading: false });
		if (result.error) {
			collection.showMessage(result.error && result.error.errors && result.error.errors.length > 0 && result.error.errors[0] || "Something went wrong", "error")
		}
	}

	replicateData() {
		const { allGrant } = this.props;
		if (allGrant) {
			return { data: allGrant, count: allGrant.length };
		}
		return { data: [], count: 0 };
	}

	getGrantColumns() {
		return ["accountAddress", "capsuleId", "count"].map(key => {
			return {
				title: key == "capsuleId" ? "salivaId" : key,
				dataIndex: key,
				key: key,
				render: (text, record) => key == "transactionHash" ? <a target="_blank" href={`http://35.200.190.101:10003/#/transaction/${text}`}>{text}</a> : <p>{text} </p>
			};
		});
	}

	render() {
		let { data, count } = this.replicateData();
		const { loading } = this.state;
		const columns = this.getGrantColumns();

		// push keys
		data = data.map((x, index) => {
			return {
				...x,
				key: index
			};
		});

		return (
			<div style={{ maxWidth: 1200, margin: "0 auto" }}>
				<div style={{ flex: 1, marginTop: 20 }}>
					<antd.Card title={"GRANTS"}>
						<antd.Table
							size="small"
							dataSource={data}
							loading={loading}
							columns={columns}
						/>
					</antd.Card>
				</div>
			</div>
		);
	}
}

GrantHistoryComponent.propTypes = propTypes;
export default GrantHistoryComponent;