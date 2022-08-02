const path = require('path');
const slugify = require('slugify');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require('gatsby-paginate');

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions;

	if (node.internal.type === 'MarkdownRemark') {
		const slug = createFilePath({ node, getNode, basePath: 'pages' });
		console.log('slug', slug);
		createNodeField({
			node,
			name: 'slug',
			value: `/articles${slug}`,
		});
	}
};

const createTaggedResults = ({ result, createPage }) => {
	const tags = {};

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		(node.frontmatter.tags || []).forEach((tag) => {
			if (!tags[tag]) {
				tags[tag] = [];
			}

			tags[tag].push(node);
		});
	});

    
	Object.keys(tags).forEach(tag => {
		const slug = `/tags/${slugify(tag, { lower: true })}/`;

		createPage({
			path: slug,
			component: path.resolve(`./src/templates/tag.js`),
			context: {
				tag,
				slug,
				site: result.data.site,
				nodes: tags[tag],
			},
		});
	});
};

const createArticles = ({ graphql, actions }) => {
	const { createPage } = actions;

	return graphql(`
        {
            site {
                siteMetadata {
                    siteUrl
                }
            }
            allMarkdownRemark(filter: {
                frontmatter: {
                    draft: {
                        ne: true
                    }
                }
            }, sort: {
                fields: [frontmatter___date],
                order: DESC
            }) {
                edges {
                    node {
                        id
                        htmlAst
                        excerpt
                        frontmatter {
                            title
                            lead
                            date(formatString: "DD MMMM, YYYY")
                            authors
                            tags
                            featureImage {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 1025) {
                                        base64
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                    fixed(width: 1025){
                                        src
                                        width
                                        height
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                        
                    }
                }
            }
        }
    `).then(async result => {
		createPaginatedPages({
			edges: result.data.allMarkdownRemark.edges,
			createPage: createPage,
			pageTemplate: 'src/templates/index.js',
			pageLength: 9, // This is optional and defaults to 10 if not used
			pathPrefix: '', // This is optional and defaults to an empty string if not used
			context: {}, // This is optional and defaults to an empty object if not used
		});
        
		await createTaggedResults({ result, createPage });

		return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/article.js`),
				context: {
					site: result.data.site,
					node,
				},
			});
		});
	});
};

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return Promise.all([
		// createHomePage({ graphql, actions }),
		createArticles({ graphql, actions }),
	]);
};
