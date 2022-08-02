import React from 'react';
import styled from '@emotion/styled';
import colors from '@clarityhub/unity-core/lib/colors';
import BackToTop from '@clarityhub/unity-web/lib/components/BackToTop';
// import LeaveNewsletterModal from '@clarityhub/unity-marketing/lib/components/LeaveNewsletterModal';

import Metadata from '../Metadata';
import Header from '../Header';
import Footer from '../Footer';

const LayoutWrapper = styled.div`
    background-color: ${colors.dove.default};
`;

const Content = styled.div`
    width: 100%;
`;

const Layout = ({ children, location: { pathname } }) => (
	<LayoutWrapper>
		<Metadata pathname={pathname} />
		<Header />
		{/* <LeaveNewsletterModal /> */}

		<Content>
			{children}
		</Content>

		<BackToTop style={{ zIndex: '2' }} />

		<Footer />
	</LayoutWrapper>
);

export default Layout;
