import React from 'react';
import styled from '@emotion/styled';
import Break from '@clarityhub/unity-web/lib/components/Break';

import SignUpForm from '../SignUpForm';

const FooterWrapper = styled.div`
    padding-bottom: 4rem;
`;

const SignUpFormWrapper = styled.div`
    padding-top: 4rem;
`;

const ArticleFooter = () => (
	<FooterWrapper>
		<Break />

		<SignUpFormWrapper>
			<SignUpForm />
		</SignUpFormWrapper>
	</FooterWrapper>
);

export default ArticleFooter;
