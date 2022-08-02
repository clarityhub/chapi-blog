import React from 'react';
import styled from '@emotion/styled';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';

import Link from '../components/GatsbyLink';
import Layout from '../components/Layout';

const Box = styled.div`
    margin-bottom: 3rem;
    margin-top: 3rem;
    min-height: 50vh;
`;

export default ({ location }) => {
	return (
		<Layout location={location}>
			<Box>
				<FlexGridContainer size="small">
					<Typography type="h1">
                        404 Not Found
					</Typography>

					<Typography type="p">
                        Bummer, we couldn't find the page you were looking for.
					</Typography>

					<Typography type="p">
						<Link variant="readable" to="/">
                            Go Home &raquo;
						</Link>
					</Typography>
				</FlexGridContainer>
			</Box>

		</Layout>
	);
};
