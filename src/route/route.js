//from system
import React from 'react';
import { Route, Switch } from 'react-router-dom';

//form app
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
// import znCN from 'antd/lib/locale-provider/zh_CN';

// import moment from 'moment';
// import 'moment/locale/zh-cn';

// moment.locale('zh-cn');

// basic pages
import AppContainer from '../container/appContainer';

// auth pages
import AccountContainer from '../container/accountContainer';
import UploadContainer from '../container/uploadContainer';
import GrantContainer from '../container/grantContainer';
import DecodeContainer from '../container/decodeContainer';

import GrantHistoryContainer from "../container/grantHistoryContainer";
import UploadHistoryContainer from "../container/uploadHistoryContainer";

// other pages
import NotFoundComponent from '../component/notFoundComponent';
import LandingComponent from "../component/landingComponent";
import AboutComponent from "../component/aboutComponent";

/* components */
export default (
	<LocaleProvider locale={enUS}>
		<AppContainer>
			<Switch>

				<Route exact path="/" component={LandingComponent}/>

				<Route exact path="/account" component={AccountContainer} />
				<Route exact path="/upload" component={UploadContainer} />
				<Route exact path="/request/:capsuleId?" component={GrantContainer} />
				<Route exact path="/decode" component={DecodeContainer} />
				<Route exact path="/grantHistory" component={GrantHistoryContainer} />
				<Route exact path="/uploadHistory" component={UploadHistoryContainer} />

				<Route exact path="/about" component={AboutComponent} />
				<Route path="*" component={NotFoundComponent} />
			</Switch>
		</AppContainer>
	</LocaleProvider>
);
