//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//child container
import AccountComponent from '../component/accountComponent';

//from app
import * as appAction from '../store/action/appAction';

const propTypes = {
	appAction: PropTypes.object.isRequired,
};

//pure component
class AccountContainer extends Component {
	render() {
		return (
			<div>
				<AccountComponent {...this.props} />
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

AccountContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(AccountContainer);