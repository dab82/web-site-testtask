import { SuccessTitile, SuccessImg } from './SuccessBlock.styled';
import Successful from '../../assets/img/success-image.svg';
import { Container } from 'components/Container/Container';

const SuccessBlock = () => {
  return (
    <>
      <Container>
        <SuccessTitile>User successfully registered</SuccessTitile>
        <SuccessImg alt="success" src={Successful} />
      </Container>
    </>
  );
};

export default SuccessBlock;
