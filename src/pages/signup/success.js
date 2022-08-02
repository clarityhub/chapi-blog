import React from 'react';
import styled from '@emotion/styled';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Button, { ButtonSet } from '@clarityhub/unity-web/lib/components/Buttons';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';

import Layout from '../../components/Layout';


const LandingCalloutText = styled.div`
    margin: auto;
    max-width: 500px;
`;

export default ({ location }) => {
	return (
		<Layout location={location}>
			<Box margin={{ top: 'large' }}>
				<FlexGridContainer size="small">
					<Typography type="h1" center>
						<b>You're In!</b>
					</Typography>

					<LandingCalloutText>
						<Typography center>
                                Thank you for joining the Clarity Hub open beta!<br />
                                We'll let you know as soon as it's ready.
						</Typography>
					</LandingCalloutText>

					<Box margin={{ top: 'xlarge' }} style={{ textAlign: 'center' }}>
						<Card>
							<CardBody>
								<Typography type="h2" noMargin noPadding>
                                        Don't keep it a secret. Spread the word!
								</Typography>

								<Box margin={{ top: 'large', bottom: 'small' }}>

									<ButtonSet>
										<Button
											component="a"
											type="primary"
											href="https://www.facebook.com/sharer/sharer.php?u=clarityhub.io" target="_blank" rel="noopener noreferrer">
                                                Share on Facebook
										</Button>
										<Button
											component="a"
											type="primary"
											href="https://twitter.com/intent/tweet?url=clarityhub.io&status=Get access to the Clarity Hub open beta. Streamline customer interviews and make product decisions as a team: https://clarityhub.io #productmanagement #openbeta #producttools" target="_blank" rel="noopener noreferrer">
                                                Tweet
										</Button>

										<Button
											component="a"
											type="primary"
											href="https://www.linkedin.com/shareArticle?mini=true&url=clarityhub.io&title=&summary=Get access to the Clarity Hub open beta. Streamline customer interviews and make product decisions as a team: https://clarityhub.io #productmanagement #openbeta #producttools&source=" target="_blank" rel="noopener noreferrer">
                                                Post to LinkedIn
										</Button>
										<Button
											component="a"
											type="white"
											href="mailto:info@example.com?&subject=&body=clarityhub.io Get access to the Clarity Hub open beta. Streamline customer interviews and make product decisions as a team: https://clarityhub.io #productmanagement #openbeta #producttools" target="_blank" rel="noopener noreferrer">
                                                Email
										</Button>
									</ButtonSet>
								</Box>
							</CardBody>

						</Card>
					</Box>

					<Box margin="large"></Box>
				</FlexGridContainer>
			</Box>
		</Layout>
	);
};

