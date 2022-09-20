import { Modal, Box, Typography } from '@mui/material';
import Successful from '../../assets/img/success-image.svg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //   width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 10,
};

const SuccessModal = ({ open, handleClose }) => {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" variant="h4" sx={{ mb: 4 }}>
            User successfully registered
          </Typography>
          <img alt="success" src={Successful} />
        </Box>
      </Modal>
    </>
  );
};

export default SuccessModal;
