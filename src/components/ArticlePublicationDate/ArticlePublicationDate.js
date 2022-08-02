import React from 'react';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const Box = styled.div`
    margin-top: 2rem;
`;

const ArticlePublicationDate = ({ date }) => (
	<Box>
		<Typography type="subtext">
            Published {date}
		</Typography>
	</Box>
);

export default ArticlePublicationDate;
