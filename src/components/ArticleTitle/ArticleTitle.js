import React from 'react';

import Typography from '@clarityhub/unity-web/lib/components/Typography';

const ArticleTitle = ({ children }) => (
	<Typography type="h1" color="dark" noMargin>{children}</Typography>
);

export default ArticleTitle;
