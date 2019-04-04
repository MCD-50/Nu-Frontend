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
			<div style={{fontSize: 17}}>
                <div className="wrapper">
                    <div   style={{
                        height: '100%', width: '100%'
                       }}>
                        <div>
                            <div className="leftSide">
                                <img style={{ height: 30 }} src="https://genobank.io/wp-content/uploads/2019/02/gbbeta-logo.png"/>
                                <h2>First Anonymous DNA Saliva Kit with Blockchain.</h2>
                                <p>Contribute to Personalized Medicine and all the new Genomic discoveries with
                                    confidence
                                </p></div>
                            <div className="rightSide bannerImage">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
		);
	}
}

export default LandingComponent;