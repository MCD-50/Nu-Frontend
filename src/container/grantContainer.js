//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//child container
import GrantComponent from '../component/grantComponent';

//from app
import * as appAction from '../store/action/appAction';

const propTypes = {
	appAction: PropTypes.object.isRequired,
};

//pure component
class GrantContainer extends Component {
	render() {
		return (
			<div>
				<GrantComponent {...this.props} />
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

GrantContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(GrantContainer);