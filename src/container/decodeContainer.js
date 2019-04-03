//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//child container
import DecodeComponent from '../component/decodeComponent';

//from app
import * as appAction from '../store/action/appAction';

const propTypes = {
	appAction: PropTypes.object.isRequired,
};

//pure component
class DecodeContainer extends Component {
	render() {
		return (
			<div>
				<DecodeComponent {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentRouteIndex: state.appReducer.currentRouteIndex,
});

const mapDispatchToProps = dispatch => ({
	appAction: bindActionCreators(appAction, dispatch)
});

DecodeContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(DecodeContainer);