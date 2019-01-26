/** @jsx jsx */
// HACK: to prevent ts compiler error :/
// tslint:disable-next-line
jsx;

import { css, jsx } from '@emotion/core';
import { Link } from 'gatsby';

import GatsbyLogo from '../images/gatsby-icon.png';
import { ThemeProps } from './layout';

interface HeaderProps {
	siteTitle: string;
}

const Header: React.FunctionComponent<HeaderProps> = () => (
	<div
		css={(theme: ThemeProps) =>
			css`
				background: ${theme.colorPrimary};
				img {
					margin-bottom: 0;
				}
			`
		}
	>
		<div
			css={css`
				margin: 0 auto;
				max-width: 96rem;
				padding: 1rem;
			`}
		>
			<h1
				css={css`
					margin: 0;
				`}
			>
				<Link
					to='/'
					css={css`
						color: white;
						text-decoration: none;
					`}
				>
					<img height='100' src={GatsbyLogo} alt='Gatsby Logo' />
				</Link>
			</h1>
		</div>
	</div>
);

export default Header;
