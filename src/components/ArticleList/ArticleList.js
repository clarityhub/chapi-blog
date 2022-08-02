import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import breakpoints from '@clarityhub/unity-web/lib/theme/breakpoints';

const ArticleListWrapper = styled.div`
    box-sizing: border-box;
	display: flex;
	flex: 0 1 auto;
	flex-direction: row;
	flex-wrap: wrap;
    margin: 4rem auto 0;
    max-width: ${breakpoints.smallMaxWidth}px;
    width: 100%;

    @media (max-width: ${breakpoints.smallMaxWidth + 40}px) {
        flex-direction: column;
        margin: 4rem 20px;
        width: auto;
    }
`;

const ArticleList = ({ items, itemRenderer }) => {
	return (
		<ArticleListWrapper>
			{items.map((item, i) => {
				return (
					<Fragment key={i}>
						{itemRenderer({
							item,
							full: i % 3 === 0,
						})}
					</Fragment>
				);
			})}
		</ArticleListWrapper>
	);
};

export default ArticleList;
