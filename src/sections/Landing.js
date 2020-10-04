import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Image } from 'rebass/styled-components';
import { SectionLink } from 'react-scroll-section';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import MouseIcon from '../components/MouseIcon';
import Triangle from '../components/Triangle';
import Developer from '../components/Logo/me.svg';



const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home" Background={Background}>
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
                <Image
                    src={Developer}
                    width={['0vw', '0vw', '0vw','25vw']}
                    display="inline-block"
                    alt="Me coding"
                    display="inline-block"
                    marginLeft={0}
                    marginRight={[0, 0, 0, 30]}
                  />
                <Box>
                  <Heading
                    textAlign="right"
                    as="h1"
                    color="primary"
                    fontSize={[5, 6]}
                    marginBottom={1}
                  >
                    {`Hi there! I'm ${name}!`}
                  </Heading>

                  <Heading
                    textAlign="right"
                    as="h2"
                    color="secondary"
                    fontSize={[4, 5]}
                    marginBottom={4}
                  >
                    {`An enthusiastic Software Engineer from Italy`}
                  </Heading>

                  <Flex alignItems="center" justifyContent="flex-end" flexWrap="wrap" >
                    {socialLinks.map(({ id, ...rest }) => (
                      <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                        <SocialLink {...rest} />
                      </Box>
                    ))}
                  </Flex>
                </Box>
            </Flex>
            <SectionLink section="about">
                    {({ onClick }) => <MouseIcon onClick={onClick} />}
            </SectionLink>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
