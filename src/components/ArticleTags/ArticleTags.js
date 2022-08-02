import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import slugify from 'slugify';
import Box from '@clarityhub/unity-web/lib/scaffolding/Box';
import Badge from '@clarityhub/unity-web/lib/components/Badge';

const ArticleTags = ({ tags }) => {
	if (!tags || tags.length === 0) {
		return null;
	}

	const sorted = [...tags].sort();

	return (
		<Box margin={{ top: 'small' }}>
			<div>
				{sorted.map(tag => (
					<Fragment>
						<Link key={tag} to={`/tags/${slugify(tag, { lower: true })}`}>
							<Badge>
								{tag}
							</Badge>
						</Link>
						{' '}
					</Fragment>
				))}
			</div>
		</Box>
	);
};

export default ArticleTags;
