import React from 'react';
import rehypeReact from 'rehype-react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Typography from '@clarityhub/unity-web/lib/components/Typography';
import Card from '@clarityhub/unity-web/lib/components/Card';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';
import colors from '@clarityhub/unity-core/lib/colors';

const Section = styled.section`
    margin-top: 3rem;
    max-width: ${breakpoints.smallMaxWidth}px;

    img {
        display: block;
        margin: 0 auto;
    }
`;

const Text = ({ type }) => {
	return ({ children }) => (
		<Typography type={type} component={type}>
			{children}
		</Typography>
	);
};

const Blockqoute = styled.blockquote`
    border-left: 4px solid ${colors.dark.default};
    padding-left: calc(2rem - 4px);
    font-style: italic;
    margin-left: -2rem;

    p + & {
        margin-top: 1.6rem;
    }

    & + p {
        margin-top: 1.6rem;
    }
`;

const UL = styled.ul`
    list-style: disc;
    margin-left: 20px;
    margin-top: 20px;

    li {
        padding-left: 20px;
    }
`;

const OL = styled.ol`
    list-style: decimal;
    margin-left: 1.6rem;
    margin-top: 1.6rem;

    li {
        padding-left: 1.6rem;
    }
`;

const LI = ({ children }) => (<Typography type="p" component="li">{children}</Typography>);

const ImageLeft = styled.div(css`
    float: left;
    max-width: 400px;
    width: 100%;
    padding: 2rem;
    text-align: center;
    margin-left: -8rem;

    @media (max-width: 1024px) {
        margin-left: 0;
        max-width: 100%;
        float: none;
    }

    p {
        font-size: 1rem;
    }
`, ({ width }) => width && css`
    max-width: ${width};
`);

const ImageSet = styled(Card)(css`
    padding: 2rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    text-align: center;

    @media (max-width: 1024px) {
        margin-left: 0;
        max-width: 100%;
        float: none;
    }

    p {
        font-size: 1rem;
    }
`, ({ width }) => width && css`
    max-width: ${width};
`);

const Strong = styled.strong`
    font-weight: 800;
`;

const Italic = styled.i`
    font-style: italic;
`;

const renderAst = new rehypeReact({
	createElement: React.createElement,
	components: {
		p: Text({ type: 'p' }),
		h1: Text({ type: 'h1' }),
		h2: Text({ type: 'h2' }),
		h3: Text({ type: 'h3' }),
		h4: Text({ type: 'h4' }),
		h5: Text({ type: 'h5' }),
		ul: UL,
		ol: OL,
		li: LI,
		strong: Strong,
		i: Italic,
		em: Italic,
		blockquote: Blockqoute,
		'image-left': ImageLeft,
		'image-set': ImageSet,
	},
}).Compiler;

const ArticleContent = ({ htmlAst }) => (
	<Section>
		{renderAst(htmlAst)}
	</Section>
);

export default ArticleContent;
