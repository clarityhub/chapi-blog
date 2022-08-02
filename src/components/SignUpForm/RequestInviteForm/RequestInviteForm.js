import React, { Component, Fragment } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { bool, func } from 'prop-types';

import Form from './Form';
import { URL } from './config';

const HeaderWrapper = styled.div`
    margin-bottom: 2rem;
`;

class RequestInviteForm extends Component {
    static propTypes = {
    	children: func,
    	simple: bool,
    }

    render() {
    	const { children, simple } = this.props;

    	if (children) {
    		return (
    			<MailchimpSubscribe
    				url={URL}
    				render={({ subscribe, status, message }) => (
    					<Fragment>
    						{children && children({
    							subscribe, status, message, Form: ({ children, ...rest }) => (
    								<Form
    									{...{ subscribe, status, message, simple }}
    									{...rest}
    									children={children}
    								/>
    							),
    						})}
    					</Fragment>
    				)}
    			/>
    		);
    	}

    	return (
    		<MailchimpSubscribe
    			url={URL}
    			render={({ subscribe, status, message }) => (
    				<Fragment>
    					{status !== 'success' && !simple && (
    						<Fragment>
    							<HeaderWrapper>
    								<Typography center type="h2" noMargin noPadding>
    									Get Access
    								</Typography>
    							</HeaderWrapper>
    							<Typography center type="text">
    								Get Access to all of the features Clarity Hub
									has to offer: rich note taking, recording, and
									automatic transcripts. 
    							</Typography>
    						</Fragment>
    					)}
    					<Form {...{ subscribe, status, message, simple }} />
    				</Fragment>
    			)}
    		/>
    	);
    }
}

export default RequestInviteForm;
