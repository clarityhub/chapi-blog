import React from 'react';

import { FlexGridContainer } from '@clarityhub/unity-web/lib/scaffolding/FlexGrid';

const Article = ({ children }) => (
	<FlexGridContainer size="small">{children}</FlexGridContainer>
);

export default Article;
