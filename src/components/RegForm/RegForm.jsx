import { useState } from 'react';
import { useFormik } from 'formik';
import {
  FormTitile,
  SignupForm,
  FormWrapper,
  InputUserInfo,
  CheckBox,
} from './RegForm.styled';
import { Button, RadioGroup, FormControlLabel } from '@mui/material';

import { schemaSignUp } from 'utils/validationSchema';
import { Container } from 'components/Container/Container';
import YellowButton from 'components/Button/Button';
import { postUser } from 'services/usersAPI';
import SuccessModal from 'components/SuccsessModal/SuccessModal';

const RegForm = ({ setSuccessfulSubmit, setIsLoading }) => {
  const [open, setOpen] = useState(false);

  const rebuildData = values => {
    let formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
    return formData;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 0,
      photo: null,
    },
    validationSchema: schemaSignUp,
    onSubmit: async ({ values }, { setSubmitting }) => {
      setIsLoading(true);
      const data = rebuildData(values);

      try {
        await postUser(data);
      } catch (error) {
        console.error(error);
      }
      setSuccessfulSubmit(true);
      setIsLoading(false);
      setSubmitting(false);
      setOpen(true);
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <FormTitile id="sign-up-form">Working with POST request</FormTitile>
      <SignupForm>
        <FormWrapper
          noValidate
          component="form"
          autoComplete="off"
          onSubmit={handleOpen}
          // onSubmit={formik.handleSubmit}
        >
          <InputUserInfo
            name="name"
            fullWidth
            id="name"
            label="Your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <InputUserInfo
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <InputUserInfo
            fullWidth
            name="phone"
            label="Phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={
              formik.touched.phone
                ? formik.errors.phone
                : '+38 (XXX) XXX - XX - XX'
            }
          />

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={1}
            name="radio-buttons-group"
          >
            <FormControlLabel
              name="position_id"
              id="position_id"
              value={1}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="Frontend developer"
            />
            <FormControlLabel
              name="position_id"
              id="position_id"
              value={2}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="Backend developer"
            />
            <FormControlLabel
              name="position_id"
              id="position_id"
              value={3}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="Designer"
            />
            <FormControlLabel
              name="position_id"
              id="position_id"
              value={4}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="QA"
            />
          </RadioGroup>

          {/* <Button variant="contained" component="label">
            <input type="file" placeholder="xxx" />
          </Button> */}

          <YellowButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            children={'Sign up'}
            style={{ margin: '50px auto 0 auto' }}
          />
        </FormWrapper>
      </SignupForm>
      <SuccessModal open={open} handleClose={handleClose} />
    </Container>
  );
};
export default RegForm;
