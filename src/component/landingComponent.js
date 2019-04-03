//from system
import React, { Component } from "react";

import * as collection from "../helper/collection";
import * as constant from "../helper/constant"

//from antd
import antd from "antd";

//from app
class LandingComponent extends Component {
	render() {
		return (
			<div style={{ fontSize: 17 }}>
				<div className="wrapper">
					<div style={{ width: 400, margin: "0 auto", textAlign: "center" }}>
						<antd.Icon type="meh" theme="twoTone" style={{ fontSize: 150 }} />
						
						Landing page
					</div>
				</div>
				
			</div>
		);
	}
}

export default LandingComponent;