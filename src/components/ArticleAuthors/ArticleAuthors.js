import React from 'react';

import Typography from '@clarityhub/unity-web/lib/components/Typography';

const ArticleAuthors = ({ authors }) => (
	<ul>
		{authors.map((author, i) => (
			<li key={i}>
				<Typography type="h2" color="darkGray">
					{author}
				</Typography>
			</li>
		))}
	</ul>
);

export default ArticleAuthors;
