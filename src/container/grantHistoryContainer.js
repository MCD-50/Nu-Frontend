//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//child container
import GrantHistoryComponent from '../component/grantHistoryComponent';

//from app
import * as appAction from '../store/action/appAction';

const propTypes = {
	allGrant: PropTypes.array.isRequired,
	appAction: PropTypes.object.isRequired,
};

//pure component
class GrantHistoryContainer extends Component {
	render() {
		return (
			<div>
				<GrantHistoryComponent {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentRouteIndex: state.appReducer.currentRouteIndex,
	allGrant: state.appReducer.allGrant,
});

const mapDispatchToProps = dispatch => ({
	appAction: bindActionCreators(appAction, dispatch)
});

GrantHistoryContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(GrantHistoryContainer);