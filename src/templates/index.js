import React from 'react';
import Pagination from '@clarityhub/unity-web/lib/components/Pagination';
import Link from '../components/GatsbyLink';

import Layout from '../components/Layout';
import ArticleList from '../components/ArticleList';
import ArticlePreview from '../components/ArticlePreview';
import SignUpForm from '../components/SignUpForm';

export default ({ location, pageContext }) => {
	const { group, index, pageCount } = pageContext;

	return (
		<Layout location={location}>
			<ArticleList
				items={group}
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
			<Pagination
				index={index}
				pageCount={pageCount}

				nextRenderer={({ index }) => {
					const nextUrl = (index + 1).toString();

					return (
						<Link to={`/${nextUrl}`}>
                            &raquo;
						</Link>
					);
				}}
				previousRenderer={({ index, disabled }) => {
					const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();

					return (
						<Link to={`/${previousUrl}`}>
                            &laquo;
						</Link>
					);
				}}
				pageRenderer={({ page }) => {
					const url = page === 1 ? '' : page;

					return (
						<Link to={`/${url}`}>
							{page}
						</Link>
					);
				}}
			/>

			<SignUpForm />
		</Layout>
	);
};
