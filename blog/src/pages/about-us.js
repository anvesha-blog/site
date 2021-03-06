import React, { Component } from 'react';
import Section from '@components/Section';
import SEO from '@components/SEO';
import Layout from '@components/Layout';
import styled from '@emotion/styled';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';
import { FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaWordpress } from 'react-icons/fa';
import mediaqueries from '@styles/media';
import Subscription from '@components/Subscription';

const Hero = styled.div`
  color: ${(p) => p.theme.colors.primary};
  margin-top: 52px;
  padding-top: 20px;
  .author {
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    padding: 0.5rem 0.75rem;
    &__logo {
      display: flex;
      border-radius: 10%;
      width: 60px;
      height: 60px;
      margin-bottom: 2em;
      justify-content: center;
    }
    &__intro {
      opacity: 0.8;
      margin-top: 1em;
      margin-bottom: 2em;
    }
    &__site-title {
      font-size: 1.8em;
      font-weight: 400;
    }
  }
`;

const LocalContainer = styled.div`
  padding: 0 6rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
  color: ${(p) => p.theme.colors.primary};
  .large-font {
    font-size: large;
    font-weight: 600;
  }
  h2,
  h3 {
    font-size: 2.8rem;
    font-family: 'Merriweather';
	 padding-bottom: 10px;
    line-height: 1.3;
    font-weight: 600;
  }
  h3 {
    font-size: 2rem;
    font-weight: 600;
  }
  p {
    font-size: 1.8rem;
    font-family: Inter;
    color: ${(p) => p.theme.colors.paracolor};
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  details,
  summary {
    font-size: 1.8rem;
    font-family: Inter;
    color: ${(p) => p.theme.colors.paracolor};
    display: block;
  }
  a {
    color: ${p => p.theme.colors.hyperlink};

    &:hover {
    color: ${p => p.theme.colors.linkhover};
    }
  }

  ${mediaqueries.desktop`
	 padding: 0 6rem;
  `}

  ${mediaqueries.tablet`
	 padding: 0 1rem;
  h2,
  h3 {
    font-size: 2.2rem;
    font-family: 'Merriweather';
	 padding-bottom: 10px;
    line-height: 1.3;
    font-weight: 600;
  }
  h3 {
    font-size: 2.0rem;
    font-weight: 500;
  }
  p {
    font-size: 1.8rem;
    font-family: Inter;
    color: ${(p) => p.theme.colors.paracolor};
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  details,
  summary {
    font-size: 1.8rem;
    font-family: Inter;
    color: ${(p) => p.theme.colors.paracolor};
    display: block;
  }
  `};

  ${mediaqueries.phablet`
	 padding: 0 0.1rem;
  h2,
  h3 {
    font-size: 2.0rem;
    font-family: 'Merriweather';
	 padding-bottom: 10px;
    line-height: 1.3;
    font-weight: 600;
  }
  h3 {
    font-size: 1.7rem;
    font-weight: 500;
  }
  p {
    font-size: 1.6rem;
    font-family: Inter;
    color: ${(p) => p.theme.colors.paracolor};
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  details,
  summary {
    font-size: 1.6rem;
    font-family: Inter;
    color: ${(p) => p.theme.colors.paracolor};
    display: block;
  }
  `};
`;

const Paragraph = styled.p`
  line-height: 1.756;
  font-size: 18px;
  color: ${(p) => p.theme.colors.articleText};
  font-family: ${(p) => p.theme.fonts.sansSerif};
  transition: ${(p) => p.theme.colorModeTransition};
  margin: 0 auto 25px;
  width: 100%;
  max-width: 980px;

  b {
    font-weight: 800;
  }

  ${mediaqueries.desktop`
    max-width: 807px;
  `}

  ${mediaqueries.tablet`
    max-width: 526px;
    margin: 0 auto 5px;
  `};

  ${mediaqueries.phablet`
    padding: 20px;
  `};
`;

export default class ClientFetchingExample extends Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Hero>
          <div className="author">
            <h1 className="author__site-title">About us</h1>
          </div>
        </Hero>
        <br />
        <br />
        <Section narrow>
          <LocalContainer>
            <p>
              Greetings! Welcome to Anvesha, the official science club of <a href="http://www.iisertvm.ac.in">IISER
              Thiruvananthapuram</a>. In research institutes such as IISER, it is
              paramount to have a platform where a free exchange of ideas is
              possible; a platform that delves into the depths of the scientific
              method. Thus, the Anvesha blog was created!
            </p>

            <p>
              We also have a monthly science newsletter called <a href="/newsletters/">‘Exhibit A’</a>               where we bring to you the latest in science! Our goal has always
              been to make these platforms as collaborative as possible; we
              would love to share your content! Send your submissions to <a href="mailto:anveshacontent@gmail.com">anveshacontent@gmail.com</a> (external submissions are more than
              welcome.)
            </p>

            <p>So, what are you waiting for?</p>
            <br />
            <h2>Our Team</h2>
            <hr
              style={{
                height: '1px',
                'border-width': '0',
                color: 'gray',
                'background-color': 'gray',
                margin: '0 auto',
              }}
            />
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Ira Zibbu</h2>
                <h3>Editor-in-Chief, Batch '19</h3>
                <p>
		A biologist-in-training who is secretly in love with mathematics, Ira is an outgoing introvert. These days, she funnels her passion for writing into science communication and wants to further examine the world of science and academia through the lens of social justice. Ira has a soft spot for reptiles and frogs, and likes to go on long walks by herself. She also enjoys fashion, dyeing her hair, cooking, cycling, coding and cleaning her room.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/CHq7tWD.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://www.instagram.com/ira_zibbu/">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:irazibbu19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Balaram Vishnu Subramani</h2>
                <h3>Founder, Batch '17</h3>
                <p>
                  A small-town boy from Vellore and shampoo connoisseur, Vishnu grows out his hair just to avoid eye-contact with people. His interests include mathematics, social activism and falling asleep before being able to make coherent lists.
		          </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/fkDvGJ5.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p style={{ 'margin-top': '0' }}>
              <details>
                <summary
                  style={{ color: '#555', 'text-decoration': 'underline' }}
                >
                  {' '}
                  Read more{' '}
                </summary>
                He loves sharing and exploring different musical styles, and
                often dabbles in song-writing as a guitarist/vocalist; there's a
                100% chance he’s going to judge your music taste and make you a
                custom playlist before he bothers to learn your name. When he’s
                not headbanging to Led Zeppelin’s ungodly jams, he’s most
                probably attending a protest or pursuing his hedonistic dreams.
                His talent in FPS games as Mr. Bayangrasamy has earned him quite
                a notorious title in IISER and neighbouring colleges. He likes
                to live his life by a quote from his favourite comedian, John
                Cleese, who said, “You do realise as you grow older that almost
                nobody knows what they are talking about.” After graduating,
                Vishnu would like to pursue a PhD in mathematical biology and
                further explore science journalism.
              </details>
              <br />
              Contact: &nbsp;
              <a href="https://www.facebook.com/balaram.vishnu">
                <FaFacebook />
              </a>
              &nbsp; &nbsp;
              <a href="https://www.linkedin.com/in/balaram-vishnu-subramani-444842163">
                <FaLinkedin />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:balaram.vishnu17@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />

            <Flex>
              <Box flex="1 1 auto">
                <h2>Shreya Venkatesan</h2>
                <h3>Editor, Batch '19</h3>
                <p>
                  An avid reader who’s always on the hunt for the next great
                  book, Shreya never quite got over the disappointment of not
                  getting a Hogwarts letter. Fortunately, her magical talents in
                  writing poetry and short stories make up for that loss! Her
                  love for the arts is beautifully portrayed through her ethnic
                  dancing and singing. A passionate biologist, she wishes to
                  make a real difference in the world with her research.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/oKSwrbG.jpg?2'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="mailto:shreyavenkatesan19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Akshita Mittal</h2>
                <h3>Editor, Batch '19</h3>
                <p>
                  A proud Punjabi, Akshita has an entire list of quirky habits:
                  reading plots before watching shows, brushing teeth with the
                  non-dominant hand, and humming self-made and often displeasing
                  tunes while studying.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/Y9BwmDsb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p style={{ 'margin-top': '0' }}>
              <details>
                <summary
                  style={{ color: '#555', 'text-decoration': 'underline' }}
                >
                  {' '}
                  Read more{' '}
                </summary>
                Much to her friends' annoyance, she relishes making bad jokes
                and laughing at them until she turns red. Here's a guide to
                getting on her nerves: Honking, buttinskies, half-assing,
                tartuffes, token supporting and lip service, 'coaching culture',
                fashion trends and spam mails. She enjoys reading surreal
                fiction, fastidiously tidying and organising, spending hours
                admiring powerful women, and breaking her head over puzzles.
                Something that recently brought her joy was finding new
                sustainable methods to adopt, and listening to Noise Making by
                Hozier.
              </details>
              <br />
              Contact: &nbsp;
              <a href="https://www.instagram.com/potaetopotahhto/">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:akshita19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Ananya Aravind</h2>
                <h3>Content Creator, Batch '19</h3>
                <p>
                  An ambitious and bubbling personality from TN, Ananya never
                  fails to amaze you with her drawings, dancing and singing.
                  These talents are brought alive by her fascination towards
                  Indian mythology and historical dramas. She is keen on
                  pursuing genetics as her primary research interest.{' '}
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/urWmG1xb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://www.facebook.com/ananya.aravind.31/">
                <FaFacebook />
              </a>
              &nbsp; &nbsp;
              <a href="https://www.instagram.com/ananyaravind19/">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:ananyaravind19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Ravikiran Hegde</h2>
                <h3>Content Creator, Batch '19</h3>
                <p>
                  An aspiring physicist and an avid learner from Karnataka,
                  Ravikiran is just the man for you if you want something sorted
                  out! He enjoys math and coding, and has a particular interest
                  in fusion music such as the Indo-western genre.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/ZRuJiqMb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://www.instagram.com/__.ravikiran.__/">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:ravikiran19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Vishwathiga Jayasankar</h2>
                <h3>Content Creator, Batch '19</h3>
                <p>
                  A plant and ecology enthusiast like none other, Vishwa will
                  dazzle you with her vast knowledge of flora. Don’t be
                  surprised if she can identify and name (even the scientific
                  name) of every plant on campus! Her love for Carnatic music is
                  elegantly displayed by her Veena skills, and she also loves
                  writing poems and articles.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/CEj18qwb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://instagram.com/lorax_pudica/">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:vishwathigasankar@gmail.com">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Ashley Roby</h2>
                <h3>Content Creator, Batch '18</h3>
                <p>
		          As a voracious reader, Ashley prays everyday that her favourite authors don't run out of creative ideas. In the meanwhile she hopes to become an author and a science writer (who said you can't be both?) When not lost in daydreams, you can find her obsessing over Wes Anderson, Zadie Smith, Ann Patchett, Arundhati Roy and BTS (not necessarily in the same order).</p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/MoIA5mF.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
				<br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Aiswarya PS</h2>
                <h3>Content Creator, Batch '18</h3>
                <p>
                  An aspiring creative scientist, Aiswarya is interested in
                  physics, neuroscience, and everything in between! Truly a
                  nomad flitting between Mumbai and Kerala, she exhibits her
                  flair for the arts through her favourite modes of
                  self-expression: photography, art, dancing and writing.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/TvcOoRvb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://www.instagram.com/human_e_rror/">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:aiswarya18@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Rithika Ganesan</h2>
                <h3>Content Creator, Batch '19</h3>
                <p>
					 A chamomile tea addict, Rithika aspires to Frusciante-level guitar playing, Atwood-level writing, and Babish-level cooking. She is passionate about social justice, intersectional feminism, and environment conservation. She enjoys coding and hobby electronics, and would like to pursue physics. 
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/WgGvc2D.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="mailto:rithikag19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Nikhil Alex Verghese</h2>
                <h3>Newsletter and Social Media Designer, Batch '17</h3>
                <p>Existential crisis-ist&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p> 
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/VarvTrMb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://www.facebook.com/nikhilalex.verghese">
                <FaFacebook />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:nikhil.alexv17@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Abhay Hegde</h2>
                <h3>Website Designer, Batch '16</h3>
                <p>
                  A Kannadiga from a tiny town with lofty ambitions. He loves
                  traveling in trains, passionately plays simulation games, and
                  enjoys designing in his free time. Beaches are amongst his
                  favorite destinations. He considers himself a student forever,
                  and is always open to meaningful conversations.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/QKGHnBj.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="https://twitter.com/abhay__hegde">
                <FaTwitter />
              </a>
              &nbsp; &nbsp;
              <a href="https://instagram.com/abhay__hegde">
                <FaInstagram />
              </a>
              &nbsp; &nbsp;
              <a href="mailto:abhayhegde16@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Shubham Chury</h2>
                <h3>Website Designer, Batch '19</h3>
                <p>
                  Shubham likes to play around with origami and other crafts in
                  his free time. It usually centers around making WWII replicas.
                  He is also currently working on expanding his NatGeo magazine
                  collection.
                </p>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/uILMSDEb.jpg'}
                  width={128}
                  height={128}
                  variant="avatar"
                  sx={{
                    minWidth: '128px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <p>
              Contact: &nbsp;
              <a href="mailto:shubhamchury19@iisertvm.ac.in">
                <FaEnvelope />
              </a>
            </p>
            <br />
				<br />
            <br />
            <h2>Former Members</h2>
            <hr
              style={{
                height: '1px',
                'border-width': '0',
                color: 'gray',
                'background-color': 'gray',
                margin: '0 auto',
              }}
            />
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Hari Krishnan</h2>
                <h3>Editor, IPhD Batch '18</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/fJvHnW7.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Yashas Ramakrishna</h2>
                <h3>Editor, Batch '16</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '100px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/kVPoJtdb.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Hemamshu Ratnakaram</h2>
                <h3>Editor, Batch '17</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '100px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/zaY8Q24.jpg?2'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Nikitha Srinivas</h2>
                <h3>Content Creator, Batch '17</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '100px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/evWEayjb.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Megha</h2>
                <h3>Content Creator, Batch '19</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '100px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/wVBmum5b.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Kratika Mazde</h2>
                <h3>Content Creator, Batch '18</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '100px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/95vejl4b.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Subrabalan Muragesan</h2>
                <h3>Content Creator, Batch '17</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/7XFY22kb.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Adarsh Karekkat</h2>
                <h3>Content Creator, Batch '17</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '130px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/WZ4YRExb.jpg'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
            <br />
            <Flex>
              <Box flex="1 1 auto">
                <h2>Gokul Prabhu</h2>
                <h3>Content Creator, Batch '17</h3>
              </Box>
              <Box
                p={3}
                sx={{
                  position: 'relative',
                  display: 'grid',
                  minWidth: '100px',
                }}
              >
                <Image
                  src={'https://i.imgur.com/2Se0Icy.jpg?1'}
                  width={100}
                  height={100}
                  variant="avatar"
                  sx={{
                    minWidth: '100px',
                    borderRadius: 100,
                    maxWidth: '100%',
                  }}
                />
              </Box>
            </Flex>
				<br />
				{<Subscription />}
          </LocalContainer>
        </Section>
      </Layout>
    );
  }
}
