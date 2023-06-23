import React, {
  FormEvent,
  forwardRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import contactArrow from '../../assets/images/contactArrow.svg';
import { TranslationContextType } from '../../types/TranslationContextType';
import TranslationContext from '../../translationContext/TranslationContext';
import { FormErrors } from '../../types/FormError';
import { useValidation } from '../../hooks/validateField';
import { sendMessage } from '../../utils/sendMessageToBot';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';


const WhiteTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    '& fieldset': {
      borderColor: '#fff',
    },
    '&:hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.5)',
    '&.Mui-focused': {
      color: '#fff',
    },
  },
  '& .MuiInputBase-input': {
    color: '#fff',
    '&:-webkit-autofill': {
      '-webkit-box-shadow': '0 0 0 1000px black inset',
      '-webkit-text-fill-color': '#fff',
    },
  },
}));

const SlideTransition = (props: SlideProps) => {
  return <Slide {...props} direction="left" />;
};

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  shouldInputFocus: boolean;
};

const initialFormErrors: FormErrors = {
  fullname: null,
  phone: null,
  email: null,
  message: null,
};

export const ContactUsBlock = forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const { validateField } = useValidation();

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = () => {
      setOpenSnackbar(false);
    };

    const { getTranslation } = useContext(
      TranslationContext
    ) as TranslationContextType;
    const { shouldInputFocus } = props;

    const handleInputChange =
  (fieldName: keyof FormErrors) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;

      switch (fieldName) {
      case 'fullname':
        setFullName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
      }

      const error = validateField(fieldName, value);

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error,
      }));
    };

    const handleBlur = (fieldName: keyof FormErrors) => (
      event: React.FocusEvent<HTMLInputElement>
    ) => {
      const value = event.target.value;
      const error = validateField(fieldName, value);

      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [fieldName]: error,
      }));
    };

    const hasErrors = Object.values(formErrors).some(
      (errorMessage) => errorMessage !== null
    );

    useEffect(() => {
      if (shouldInputFocus) {
        const timeoutId = setTimeout(() => {
          const input = document.getElementById('fullname');

          if (input) {
            input.focus();
          }
        }, 800);

        return () => clearTimeout(timeoutId);
      }
    }, [shouldInputFocus]);

    const result = '';

    const resultMessage = result ? getTranslation('toastSuccess') : getTranslation('toastError');

    const handleSendMessage = async (event: FormEvent) => {
      event.preventDefault();

      if (!fullName && !email && !phone) {
        return;
      }

      // const formattedMessage = `${fullName}\n\n${email}\n\n${phone}\n\n${message}`.trim();

      // const result = await sendMessage(formattedMessage);

      // setFullName('');
      // setEmail('');
      // setPhone('');
      // setMessage('');

      // console.log(result);


      setOpenSnackbar(true);
      setSnackbarMessage(resultMessage);
    };

    return (
      <Box
        ref={ref}
        component="section"
        mb={{
          xs: 10,
          md: 0,
        }}
        sx={{ height: '100vh' }}
      >
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical:'top', horizontal: 'right' }} TransitionComponent={SlideTransition} sx={{
          mt: {
            xs: 0,
            lg: 9,
          }
        }}>
          <Alert onClose={handleSnackbarClose} severity={result ? 'success' : 'error'} variant='filled'>
            {snackbarMessage}
          </Alert>
        </Snackbar>

        <Grid
          container
          maxWidth={'1200px'}
          sx={{
            margin: '0 auto',
            pt: {
              xs: 9,
              sm: 10,
            },
            px: {
              xs: 3,
              sm: 4,
              md: 23,
              lg: 38,
            },
          }}
        >
          <Grid item xs={12} textAlign={'center'} pt={{
            xs: 2,
            md: 5,
          }} mb={3}>
            <Typography
              color={'custom.text'}
              fontSize={{
                xs: '34px',
                sm: '40px',
              }}
              fontWeight={700}
            >
              {getTranslation('contactUs')}
            </Typography>
          </Grid>

          <Grid
            container
            component={'form'}
            justifyContent={'center'}
            onSubmit={handleSendMessage}
          >
            <Grid item xs={12} mb={5}>
              <WhiteTextField
                required
                id="fullname"
                label={getTranslation('fullName')}
                fullWidth
                value={fullName}
                onChange={handleInputChange('fullname')}
                error={Boolean(formErrors.fullname)}
                helperText={formErrors.fullname}
                onBlur={handleBlur('fullname')}
              />
            </Grid>

            <Grid item xs={12} mb={5}>
              <WhiteTextField
                required
                id="phone"
                label={getTranslation('phone')}
                type="tel"
                fullWidth
                value={phone}
                onChange={handleInputChange('phone')}
                error={Boolean(formErrors.phone)}
                helperText={formErrors.phone}
                onBlur={handleBlur('phone')}
              />
            </Grid>

            <Grid item xs={12} mb={5}>
              <WhiteTextField
                required
                id="email"
                label={getTranslation('email')}
                type="email"
                fullWidth
                value={email}
                onChange={handleInputChange('email')}
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
                onBlur={handleBlur('email')}
              />
            </Grid>

            <Grid item xs={12} mb={{
              xs: 3,
              sm: 5,
            }}>
              <WhiteTextField
                multiline
                rows={4}
                id="message"
                placeholder={getTranslation('message')}
                fullWidth
                inputProps={{
                  maxLength: 200,
                }}
                value={message}
                onChange={handleInputChange('message')}
                error={Boolean(formErrors.message)}
                helperText={formErrors.message}
                onBlur={handleBlur('message')}
              />
            </Grid>

            <Grid item xs={12} textAlign={'end'}>
              {!hasErrors && (
                <Typography
                  component={'button'}
                  type="submit"
                  color={'custom.text'}
                  fontSize={'24px'}
                  lineHeight={'32px'}
                  position={'relative'}
                  px={2.5}
                  sx={{
                    border: '1px solid transparent',
                    borderRadius: '8px 3px 8px 8px',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s linear',
                    backgroundColor: 'transparent',
                    ':hover': {
                      borderColor: '#fff',
                    },
                  }}
                >
                  {getTranslation('sendButton')}
                  <Box
                    component={'img'}
                    src={contactArrow}
                    alt="arrow logo"
                    sx={{ position: 'absolute', top: 2, right: 2 }}
                  />
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }
);

ContactUsBlock.displayName = 'ContactUsBlock';
