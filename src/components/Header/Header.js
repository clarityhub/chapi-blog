import React from 'react';
import styled from '@emotion/styled';
import Logo from '@clarityhub/unity-web/lib/components/svgs/Logo';
import colors from '@clarityhub/unity-core/lib/colors';
import Typography from '@clarityhub/unity-web/lib/components/Typography';

import Link from '../GatsbyLink';

// TODO Refactor magic numbers 
const Navbar = styled.nav`
    background: ${colors.gradient.default};
    color: ${colors.white.default};
    height: 95px;
    padding-top: 10px;
`;

const LogoWrapper = styled.div`
    vertical-align: middle;

    a {
        align-items: center;
        border: 0;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
        margin-right: 40px;
        text-align: center;
        width: auto;
        
        border: 0;
        text-decoration: none;

        &:visited {
            border: 0;
        }
    }

    span {
        font-size: 1.2rem;
        line-height: 2rem;
        margin-left: 15px;

       @media (max-width: 480px) {
           display: none;
       }
    }

    .h3 {
        font-size: 0.8rem;
    }

    img,
    svg  {
      height: 40px;
      width: auto;
    }
`;

const NavbarContent = styled.div`
    display: flex;
    margin: 20px auto 0;
    max-width: 850px;
    width: 100%;

    @media (max-width: ${850 + 40}px) {
        margin-left: 20px;
        margin-right: 20px;
        width: auto;
    }
`;

const NavItems = styled.ul`
    align-items: center;
    display: flex;
    flex: 3;
    justify-content: center;
`;

const NavItem = styled.li`
    display: inline-block;
    flex: 1;
    text-align: center;

    & + & {
        margin-left: 15px;
    }
`;

const Gutter = styled.div`
    flex: 3;
`;

const Header = () => (
	<Navbar>
		<NavbarContent>
			<LogoWrapper>
				<Link to="/" type="default">
					<Logo />
					<Typography variant="heading" color="white" component="span">Stellar Blog</Typography>
					<Typography className="h3" type="h3" noMargin noPadding color="white" component="span">by Clarity Hub</Typography>
				</Link>
			</LogoWrapper>
			<Gutter />
			<NavItems>
				<NavItem>
					<Link color="white" type="blockLink" variant="heading" to="/">Articles</Link>
				</NavItem>

				<NavItem>
					<Link color="white" type="blockLink" variant="heading" to="/tags">Tags</Link>
				</NavItem>

				{/* <NavItem>
                    <Link type="blockLink" variant="heading" to="/newsletter/">Newsletter</Link>
                </NavItem> */}

				<NavItem>
					<Link color="white" type="blockLink" variant="heading" to="/about/">About</Link>
				</NavItem>

			</NavItems>
		</NavbarContent>
	</Navbar>
);

export default Header;
