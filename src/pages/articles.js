import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import ArticlePreview from '../components/ArticlePreview';

export default ({ data, location }) => {
	return (
		<Layout location={location}>
			<ArticleList
				items={data.allMarkdownRemark.edges}
				itemRenderer={({ item, ...props }) => (
					<ArticlePreview
						{...props}
						title={item.node.frontmatter.title}
						date={item.node.frontmatter.date}
						featureImage={item.node.frontmatter.featureImage}
						excerpt={item.node.frontmatter.lead || item.node.excerpt}
						link={item.node.fields.slug}
					/>
				)}
			/>
		</Layout>
	);
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: {
        fields: [frontmatter___date],
        order: DESC
    }) {
      totalCount
      edges {
        node {
            id
            frontmatter {
                title
                lead
                date(formatString: "DD MMMM, YYYY")
                featureImage {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 1025) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            fields {
                slug
            }
            excerpt
        }
      }
    }
  }
`;
