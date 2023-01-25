import { Container, ImageContainer } from './style';
import { Logo } from 'assets';
import Image from 'next/image';
import { CustomText } from 'styles/globalComponents';

export default function Login() {
  return (
    <Container>
      <ImageContainer>
        <Image src={Logo} alt="" />
      </ImageContainer>
      <CustomText bold white size="40px" margin="20px 0">
        NextJS Boilerplate
      </CustomText>
      <CustomText regular white secondary>
        Made with <strong>&lt; &#x0002F; &gt;</strong> and{' '}
        <strong>&hearts;</strong> by CITi
      </CustomText>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: {}
  };
}
