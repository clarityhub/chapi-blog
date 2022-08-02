import React from 'react';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const ImageContainer = styled.div`
    margin: 0 auto;
    max-width: 1025px;
`;

const FeatureImage = ({ src }) => (
	<ImageContainer>
		<Img fluid={src} />
	</ImageContainer>
);

export default FeatureImage;
