import React from 'react';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import { graphql, Link } from 'gatsby';
import Card, { CardBody } from '@clarityhub/unity-web/lib/components/Card';
import slugify from 'slugify';

import Layout from '../components/Layout';
import ArticleFooter from '../components/ArticleFooter';


export default ({ location, data }) => {
	const tags = {};

	data.allMarkdownRemark.edges.forEach(({ node }) => {
		(node.frontmatter.tags || []).forEach((tag) => {
			if (!tags[tag]) {
				tags[tag] = [];
			}

			tags[tag].push(node);
		});
	});

	const sorted = Object.keys(tags).sort();

	return (
		<Layout location={location}>
			<Box>
				<FlexGridContainer size="small">
					<Typography type="h1">
                        Browsing Tags
					</Typography>

					<Box gap="small" direction="column">
						{sorted.map(t => {
							const slug = slugify(t, { lower: true });

							return (
								<Box>
									<Card as={Link} to={`/tags/${slug}`} style={{ textDecoration: 'none' }}>
										<CardBody>
											<Typography type="h3">{t} </Typography>
											<Typography>{tags[t].length} article{tags[t].length > 1 ? 's' : ''}</Typography>
										</CardBody>
									</Card>
								</Box>
							);
						})}
					</Box>
					
					<ArticleFooter />
				</FlexGridContainer>
			</Box>

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
            frontmatter {
                tags
            }
        }
      }
    }
  }
`;

