import React, { Component, Fragment } from 'react';
import styled from '@emotion/styled';
import Button from '@clarityhub/unity-web/lib/components/Buttons';
import Dismissable from '@clarityhub/unity-web/lib/interactions/Dismissable';
import Notification from '@clarityhub/unity-web/lib/components/Notification';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import InputGroup from '@clarityhub/unity-web/lib/forms/InputGroup';
import LabelledInput from '@clarityhub/unity-web/lib/forms/LabelledInput';
import { bool, func, node, string } from 'prop-types';

import { Redirect } from '@reach/router';

const FormWrapper = styled.div`
	padding-top: 2rem;
	padding-bottom: 2rem;
`;

class Form extends Component {
    static propTypes = {
    	children: node,
    	simple: bool,
    	status: string,
    	subscribe: func.isRequired,
    	variant: string,
    }

    state = {
    	email: '',
    	company: '',
    }

    handleSubmit = e => {
    	e.preventDefault();
    	const { subscribe } = this.props;

    	const form = e.target;

    	const formData = {
    		EMAIL: form.email.value,
    		COMPANY: form.company.value,
    		REASON: 'Persato',
    	};

    	subscribe(formData);
    }

    render() {
    	const { children, status, message, simple, variant } = this.props;

    	return (
    		<FormWrapper>
    			<form onSubmit={this.handleSubmit}>

    				{status === 'success' ? (
    					<Redirect to="/signup/success" noThrow />
    				) : (
    					<Fragment>
    						{(status === "error") && (
    							<InputGroup>
    								{status === "error" && (
    									<Dismissable>
    										{({ Dismiss }) => (
    											<Notification type="danger" variant="thin">
    												<Dismiss />
    												<Typography color="white" dangerouslySetInnerHTML={{ __html: message }} />
    											</Notification>
    										)}
    									</Dismissable>
    								)}
    							</InputGroup>
    						)}

    						<InputGroup>
    							<LabelledInput
    								variant={variant}
    								label="Email"
    								name="email"
    								type="email"
    								onChange={e => this.setState({ email: e.target.value })}
    								value={this.state.email}
    								required
    							/>
    						</InputGroup>
    						<InputGroup>
    							<LabelledInput
    								variant={variant}
    								label="Company Name"
    								name="company"
    								type="text"
    								onChange={e => this.setState({ company: e.target.value })}
    								value={this.state.company}
    								required
    							/>
    						</InputGroup>
    						{!simple && (
    							<InputGroup>
    								<Button
    									block
    									type="primary"
    									buttonType="submit"
    									loading={status === "sending"}
    									disabled={status === "sending"}
    								>
    									Get Started
    								</Button>
    							</InputGroup>
    						)}

    						{children}
    					</Fragment>
    				)}

    			</form>
    		</FormWrapper>
    	);
    }
}

export default Form;
