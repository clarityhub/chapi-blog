import React from 'react';
import styled from '@emotion/styled';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import RequestInviteForm from './RequestInviteForm';

const Wrapper = styled.div`
    margin-bottom: 2rem;
`;

const SignUpForm = () => (
	<FlexGridContainer size="xsmall">
		<Wrapper>
			<Card>
				<CardBody>
					<RequestInviteForm />
				</CardBody>
			</Card>
		</Wrapper>
	</FlexGridContainer>
);

export default SignUpForm;
