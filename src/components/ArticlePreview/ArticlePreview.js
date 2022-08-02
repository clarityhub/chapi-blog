import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import colors from '@clarityhub/unity-core/lib/colors';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

import FeatureImage from '../FeatureImage';
import ArticleTitle from '../ArticleTitle';
import ArticleLead from '../ArticleLead';
import Link from '../GatsbyLink';

const ArticlePreviewWrapper = styled.div`
    ${({ full }) => (
		full ? css`
            border-bottom: 2px solid ${colors.gray.default};
            padding-bottom: 3rem;
            margin-bottom: 3rem;
            width: 100%;
        `: css`
            width: calc(50% - 1.5rem);

            & + & {
                padding-left: 3rem;
                width: calc(50% + 1.5rem);
            }
        `
	)}

    @media (max-width: ${breakpoints.smallMaxWidth + 40}px) {
        border-bottom: 2px solid ${colors.gray.default};
        padding-bottom: 3rem;
        margin-bottom: 3rem;
        width: auto;

        & + & {
            border-bottom: 0;
            padding-left: 0;
            width: auto;
        }
    }
`;

const ArticlePreviewLayout = styled.div`
    ${({ full }) => (
		full ? css`
            display: flex;

            @media (max-width: ${breakpoints.smallMaxWidth + 40}px) {
                display: block;
            }
        `: ''
	)}
`;

const ArticlePreviewLeft = styled.div`
    ${({ full }) => (
		full ? css`
            flex: 2;
            padding-right: 3rem;

            @media (max-width: ${breakpoints.smallMaxWidth + 40}px) {
                padding-bottom: 2rem;
                padding-right: 0;
            }
        `: css`
            padding-bottom: 2rem;
        `
	)}
`;

const ArticlePreviewRight = styled.div`
    ${({ full }) => (
		full ? css`
            flex: 1;
        `: ''
	)}
`;

const ArticleLeadWrapper = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const linkStyle = css`
    color: inherit;
    text-decoration: none;
`;

const ArticlePreview = ({ featureImage, title, date, excerpt, link, full }) => (
	<ArticlePreviewWrapper full={full}>
		<Link to={link} type="p" css={linkStyle}>
			<ArticlePreviewLayout full={full}>
				<ArticlePreviewLeft full={full}>
					<FeatureImage src={featureImage.childImageSharp.fluid} alt={title} />
				</ArticlePreviewLeft>
				<ArticlePreviewRight full={full}>
					<ArticleTitle>
						{title}
					</ArticleTitle>

					{excerpt && (
						<ArticleLeadWrapper>
							<ArticleLead>
								{excerpt}
							</ArticleLead>
						</ArticleLeadWrapper>
					)}
				</ArticlePreviewRight>

			</ArticlePreviewLayout>
		</Link>
	</ArticlePreviewWrapper>
);

export default ArticlePreview;
