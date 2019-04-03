//from system
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


//child container
import UploadHistoryComponent from '../component/uploadHistoryComponent';

//from app
import * as appAction from '../store/action/appAction';

const propTypes = {
	allUpload: PropTypes.array.isRequired,
	appAction: PropTypes.object.isRequired,
};

//pure component
class UploadHistoryContainer extends Component {
	render() {
		return (
			<div>
				<UploadHistoryComponent {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentRouteIndex: state.appReducer.currentRouteIndex,
	allUpload: state.appReducer.allUpload,
});

const mapDispatchToProps = dispatch => ({
	appAction: bindActionCreators(appAction, dispatch)
});

UploadHistoryContainer.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(UploadHistoryContainer);