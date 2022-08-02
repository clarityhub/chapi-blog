import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';

const Section = styled.section`
    border-bottom: ${colors.brand.default} 4px solid;
    padding-top: 4rem;
    padding-bottom: 3rem;
`;

const ArticleDetails = ({ children }) => (
	<Section>{children}</Section>
);

export default ArticleDetails;
