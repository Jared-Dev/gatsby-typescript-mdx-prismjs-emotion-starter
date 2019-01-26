/** @jsx jsx */
// HACK: to prevent ts compiler error :/
// tslint:disable-next-line
jsx;

import { css, jsx, Global } from '@emotion/core';
import { Fragment } from 'react';
import Helmet from 'react-helmet';
import { RouterProps } from '@reach/router';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'emotion-theming';

import Header from './header';
import globalCss from './layoutStyles';
import { LayoutQueryData } from '../interfaces/LayoutQuery.interface';

export interface ThemeProps {
	colorPrimary: string;
}

const theme: ThemeProps = {
	colorPrimary: '#663399',
};

type LayoutProps = React.ReactNode & RouterProps;

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						# change siteMetaData in 'gatsby-config.js'
						title
						description
						keywords
					}
				}
			}
		`}
		render={({ site }: LayoutQueryData) => {
			const { title, description, keywords } = site.siteMetadata;

			return (
				<ThemeProvider theme={theme}>
					<Fragment>
						<Global styles={globalCss} />
						<Helmet
							title={title}
							meta={
								[
									{ name: 'description', content: description },
									{ name: 'keywords', content: keywords || 'keywords' },
								] as Array<React.MetaHTMLAttributes<HTMLMetaElement>>
							}
						>
							<html lang='en' />
						</Helmet>
						<Header siteTitle={title} />
						<main
							css={css`
								max-width: 90%;
								margin: 1rem auto;
								display: grid;
								grid-template-columns: 3fr 1fr;
								grid-gap: 4rem;
							`}
						>
							<div>{children}</div>
						</main>
					</Fragment>
				</ThemeProvider>
			);
		}}
	/>
);

export default Layout;
