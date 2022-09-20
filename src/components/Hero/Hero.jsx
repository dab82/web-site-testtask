import { Container } from 'components/Container/Container';
import { HeroTitle, HeroWrapper, MainHero, HeroContent } from './Hero.styled';
import YellowButton from 'components/Button/Button';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

const Hero = () => {
  return (
    <MainHero>
      <Container>
        <HeroWrapper>
          <HeroTitle>Test assignment for front-end developer</HeroTitle>
          <HeroContent>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </HeroContent>
          <AnchorLink href="#sign-up-form">
            <YellowButton type="button" children={'Sign up'} />
          </AnchorLink>
        </HeroWrapper>
      </Container>
    </MainHero>
  );
};

export default Hero;
