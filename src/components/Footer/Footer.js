import React, { Fragment } from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import MarketingFooter from '@clarityhub/unity-marketing/lib/components/Footer';

import Link from '../GatsbyLink';

const Footer = () => (
	<StaticQuery
		query={graphql`
            query FooterSiteMetadata {
                site {
                    siteMetadata {
                        siteUrl
                        title
                        phoneNumber
                        email
                        facebookUsername
                        twitterUsername
                        mediumUsername
                        linkedinUsername
                    }
                }
            }
        `}
		render={({
			site: {
				siteMetadata: {
					title,
					phoneNumber,
					email,
					facebookUsername,
					twitterUsername,
					mediumUsername,
					linkedinUsername,
				},
			},
		}) => (
			<MarketingFooter
				title={title}
				phoneNumber={phoneNumber}
				email={email}
				facebookUsername={facebookUsername}
				twitterUsername={twitterUsername}
				mediumUsername={mediumUsername}
				linkedinUsername={linkedinUsername}
				privacyLink="/terms/privacy"
				termsLink="/terms/"
				extraColumns={[
					<Fragment>
						<Typography noPadding type="h3" color="white">About</Typography>

						<ul>
							<li><Link to="/about">About Us</Link></li>
						</ul>
					</Fragment>,
				]}
			/>
		)}
	/>
);

export default Footer;
