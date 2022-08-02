import React from 'react';
import { Link } from 'gatsby';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

const GatsbyLink = ({ children, variant = 'text', color, type, ...props }) => (
	<Typography
		type={type ? type : 'link'}
		variant={variant}
		color={color}
		component={Link}
		{...props}
	>
		{children}
	</Typography>
);

export default GatsbyLink;
