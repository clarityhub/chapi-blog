import React from 'react';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';

import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import ArticlePreview from '../components/ArticlePreview';
import SignUpForm from '../components/SignUpForm';
import WebsiteContainer from '../components/WebsiteContainer';

export default ({ location, pageContext }) => {
	const { tag, nodes } = pageContext;

	return (
		<Layout location={location}>
			<WebsiteContainer>
				<Box margin={{ top: 'large'}}>
					<Typography type="h1">
						Browsing Tag: {tag}
					</Typography>
				</Box>
			</WebsiteContainer>
			<ArticleList
				items={nodes}
				itemRenderer={({ item, ...props }) => (
					<ArticlePreview
						{...props}
						title={item.frontmatter.title}
						date={item.frontmatter.date}
						featureImage={item.frontmatter.featureImage}
						excerpt={item.frontmatter.lead || item.excerpt}
						link={item.fields.slug}
					/>
				)}
			/>

			<SignUpForm />
		</Layout>
	);
};
