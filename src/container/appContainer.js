//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//from app
import * as appAction from '../store/action/appAction';

import HeaderPartialComponent from '../partialComponent/headerPartialComponent';
import FooterPartialComponent from '../partialComponent/footerPartialComponent';

const propTypes = {
	children: PropTypes.object.isRequired,
	appAction: PropTypes.object.isRequired,
};

class AppContainer extends Component {
	constructor(params) {
		super(params);

		this.getHeight = this.getHeight.bind(this);
	}


	getHeight() {
		let windowHeight = window.innerHeight;
		windowHeight = windowHeight - 285 // remove the footer height if any
		return windowHeight;
	}

	render() {
		return (
			<div>
				<HeaderPartialComponent {...this.props} />
				<div style={{ minHeight: this.getHeight(), paddingTop: 56, background: "#fafafa", paddingBottom: 32 }}>
					{this.props.children}
				</div>
				<FooterPartialComponent {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
	appAction: bindActionCreators(appAction, dispatch)
});

AppContainer.propTypes = propTypes;
export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(AppContainer));