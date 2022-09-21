import { useState } from 'react';
import { useFormik } from 'formik';
import {
  FormTitile,
  SignupForm,
  FormWrapper,
  InputUserInfo,
  CheckBox,
  UploadWrapper,
  UploadInput,
  UploadButton,
  UploadPlaceholder,
  CheckBoxLabel,
} from './RegForm.styled';
import { RadioGroup } from '@mui/material';
import { schemaSignUp } from 'utils/validationSchema';
import { Container } from 'components/Container/Container';
import YellowButton from 'components/Button/Button';
import { postUser } from 'services/usersAPI';
import SuccessModal from 'components/SuccsessModal/SuccessModal';

const RegForm = ({ setSuccessfulSubmit, setIsLoading }) => {
  const [openModal, setOpenModal] = useState(false);

  const userData = values => {
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
      position_id: 1,
      photo: null,
    },
    validationSchema: schemaSignUp,
    onSubmit: async ({ values }, { setSubmitting }) => {
      setIsLoading(true);
      const data = userData(values);
      try {
        await postUser(data);
      } catch (error) {
        console.error(error);
      }
      setSuccessfulSubmit(true);
      setIsLoading(false);
      setSubmitting(false);
      setOpenModal(true);
    },
  });

  const handleClose = () => {
    setOpenModal(false);
  };
  const fileName = !formik.values.photo ? null : formik.values.photo?.name;

  return (
    <Container>
      <FormTitile id="sign-up-form">Working with POST request</FormTitile>
      <SignupForm>
        <FormWrapper
          noValidate
          component="form"
          autoComplete="off"
          onSubmit={formik.handleSubmit}
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
            sx={{ my: '45px' }}
          >
            <CheckBoxLabel
              name="position_id"
              id="Frontend developer"
              value={1}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="Frontend developer"
            />
            <CheckBoxLabel
              name="position_id"
              id="Backend developer"
              value={2}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="Backend developer"
            />
            <CheckBoxLabel
              name="position_id"
              id="Designer"
              value={3}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="Designer"
            />
            <CheckBoxLabel
              name="position_id"
              id="QA"
              value={4}
              onClick={formik.handleChange}
              onBlur={formik.handleBlur}
              control={<CheckBox />}
              label="QA"
            />
          </RadioGroup>
          <UploadWrapper>
            <UploadButton component="label">
              Upload
              <input
                name="photo"
                id="photo"
                type="file"
                accept=".jpg, .jpeg"
                onChange={event => {
                  formik.setFieldValue('photo', event.currentTarget.files[0]);
                }}
                hidden

                // error={formik.touched.photo && Boolean(formik.errors.photo)}
              />
            </UploadButton>
            <UploadInput>
              {!fileName ? (
                <UploadPlaceholder children="Upload your photo" />
              ) : (
                fileName
              )}
            </UploadInput>
          </UploadWrapper>
          <YellowButton
            type="submit"
            disabled={!(formik.isValid && formik.dirty)}
            children={'Sign up'}
            style={{ margin: '50px auto 0 auto' }}
          />
        </FormWrapper>
      </SignupForm>
      <SuccessModal openModal={openModal} handleClose={handleClose} />
    </Container>
  );
};
export default RegForm;
