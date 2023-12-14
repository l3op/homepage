import {SocialButton} from 'components/buttons';
import {
  GithubIcon,
  InstagramIcon,
  SpotifyIcon,
  TwitterIcon
} from 'components/icons';
import BaseGrid from '..';

export const SocialNetworks = () => {
  return (
    <BaseGrid name="social-networks">
      <SocialButton name="Github" href="https://github.com/pauchiner">
        <GithubIcon />
      </SocialButton>
      <SocialButton name="Twitter" href="https://twitter.com/pauchiner">
        <TwitterIcon />
      </SocialButton>
      <SocialButton name="Instagram" href="https://instagram.com/pauchiner">
        <InstagramIcon />
      </SocialButton>
      <SocialButton
        name="Spotify"
        href="https://open.spotify.com/user/21ow4mvhafre3t3w6b6mjuzsq?si=92dbff60a317442f">
        <SpotifyIcon />
      </SocialButton>
    </BaseGrid>
  );
};

export default SocialNetworks;
