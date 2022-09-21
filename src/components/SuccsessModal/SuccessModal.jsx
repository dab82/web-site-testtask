import { Modal } from '@mui/material';
import { ModalWrapper, ModalTitile, ModalImg } from './SuccessModal.styled';
import Successful from '../../assets/img/success-image.svg';

const SuccessModal = ({ openModal, handleClose }) => {
  return (
    <>
      <Modal open={openModal} onClose={handleClose}>
        <ModalWrapper>
          <ModalTitile>User successfully registered</ModalTitile>
          <ModalImg alt="success" src={Successful} />
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default SuccessModal;
