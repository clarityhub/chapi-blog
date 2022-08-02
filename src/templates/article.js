import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import ArticleContent from '../components/ArticleContent';
import FeatureImage from '../components/FeatureImage';
import ArticleDetails from '../components/ArticleDetails';
import ArticlePublicationDate from '../components/ArticlePublicationDate';
import ArticleAuthors from '../components/ArticleAuthors';
import ArticleTitle from '../components/ArticleTitle';
import ArticleLead from '../components/ArticleLead';
import ArticleFooter from '../components/ArticleFooter';
import Article from '../components/Article';
import ArticleTags from '../components/ArticleTags';

// TODO provide an alt text to the Feature Image
export default ({ pathContext, location }) => {
	const post = pathContext.node;
	const site = pathContext.site;
	return (
		<Layout location={location}>
			<Helmet>
				<title>{post.frontmatter.title}</title>
				<meta name="description" content={post.excerpt} />
				<meta property="og:image" content={`${site.siteMetadata.siteUrl}${post.frontmatter.featureImage.childImageSharp.fixed.src}`} />
				<meta property="og:image:width" content={`${post.frontmatter.featureImage.childImageSharp.fixed.width}`} />
				<meta property="og:image:height" content={`${post.frontmatter.featureImage.childImageSharp.fixed.height}`} />
			</Helmet>
			<FeatureImage src={post.frontmatter.featureImage.childImageSharp.fluid} />

			<Article>
				<ArticleDetails>
					<ArticleAuthors
						authors={post.frontmatter.authors}
					/>

					<ArticleTitle>
						{post.frontmatter.title}
					</ArticleTitle>

					{post.frontmatter.lead && (
						<ArticleLead>
							{post.frontmatter.lead}
						</ArticleLead>
					)}

					<ArticleTags tags={post.frontmatter.tags} />
				</ArticleDetails>
				<ArticleContent htmlAst={post.htmlAst} />

				<ArticlePublicationDate date={post.frontmatter.date} />

				<ArticleFooter />
			</Article>
		</Layout>
	);
};
