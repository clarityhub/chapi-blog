import React from 'react';
import { StaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import clarityhubIcon from '../../assets/clarityhub-icon.png';

const Metadata = ({ pathname }) => (
	<StaticQuery
		query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
            description
            twitterUsername
          }
        }
      }
    `}
		render={({
			site: {
				siteMetadata: { siteUrl, title, description, twitterUsername },
			},
		}) => (
			<Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
				<html lang="en" />
				<link rel="canonical" href={`${siteUrl}${pathname}`} />
				<meta name="docsearch:version" content="2.0" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
				/>
				<meta name="description" content={description} />

				<meta property="og:url" content={siteUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:locale" content="en" />
				<meta property="og:site_name" content={title} />
				<meta property="og:image" content={`${clarityhubIcon}`} />
				<meta property="og:image:width" content="512" />
				<meta property="og:image:height" content="512" />

				<meta name="twitter:card" content="summary" />
				<meta name="twitter:site" content={`@${twitterUsername}`} />
			</Helmet>
		)}
	/>
);

export default Metadata;