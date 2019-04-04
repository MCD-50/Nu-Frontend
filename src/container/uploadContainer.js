//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//child container
import UploadComponent from '../component/uploadComponent';

//from app
import * as appAction from '../store/action/appAction';

const propTypes = {
	appAction: PropTypes.object.isRequired,
};

//pure component
class UploadContainer extends Component {
	render() {
		return (
			<div>
				<UploadComponent {...this.props} />
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

UploadContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(UploadContainer);