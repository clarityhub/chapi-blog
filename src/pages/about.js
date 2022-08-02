import React from 'react';
import styled from '@emotion/styled';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Link from '@clarityhub/unity-web/lib/components/Link';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import Layout from '../components/Layout';
import ArticleFooter from '../components/ArticleFooter';

const Box = styled.div`
    margin-top: 3rem;
`;

export default ({ location }) => {
	return (
		<Layout location={location}>
			<Box>
				<FlexGridContainer size="small">
					<Typography type="h1">
                        Customer Discovery Made Easy
					</Typography>

					<Typography type="p">
                        We empower product teams to create amazing experiences for their customers. Through our articles
						on development, product processes, and our amazing product discovery platform, we provide teams with
						the information and tools they need to succeed.
						{' '}
						<Link variant="readable" href="https://twitter.com/hashtag/yesphx">
                            #yesphx
						</Link>
					</Typography>

					<Typography type="p">
						<Link variant="readable" href="https://www.clarityhub.io">
                            https://www.clarityhub.io
						</Link>
					</Typography>
					<ArticleFooter />
				</FlexGridContainer>
			</Box>

		</Layout>
	);
};
