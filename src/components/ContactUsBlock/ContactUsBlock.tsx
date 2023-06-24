import React, {
  useState,
  useEffect,
  useContext,
  forwardRef,
  FormEvent,
} from 'react';
import { useValidation } from '../../hooks/validateField';
import { sendMessage } from '../../utils/sendMessageToBot';
import { FormErrors } from '../../types/FormError';
import { TranslationContextType } from '../../types/TranslationContextType';
import TranslationContext from '../../translationContext/TranslationContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { WhiteTextField } from '../../utils/WhiteTextField';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import contactArrow from '../../assets/images/contactArrow.svg';

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
    const { shouldInputFocus } = props;

    const [formErrors, setFormErrors] = useState(initialFormErrors);

    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<
      AlertColor | undefined
    >(undefined);

    const { getTranslation } = useContext(
      TranslationContext
    ) as TranslationContextType;

    const { validateField } = useValidation();

    const hasFormErrors = Object.values(formErrors).some(
      (errorMessage) => errorMessage !== null
    );

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

    const handleBlur =
      (fieldName: keyof FormErrors) =>
        (event: React.FocusEvent<HTMLInputElement>) => {
          const value = event.target.value;
          const error = validateField(fieldName, value);

          setFormErrors((prevErrors) => ({
            ...prevErrors,
            [fieldName]: error,
          }));
        };

    const handleSendMessage = async (event: FormEvent) => {
      event.preventDefault();

      if (!fullName && !email && !phone) {
        return;
      }

      const formattedMessage =
        `${fullName}\n\n${email}\n\n${phone}\n\n${message}`.trim();

      const result = await sendMessage(formattedMessage);

      const resultMessage = result.ok
        ? getTranslation('toastSuccess')
        : getTranslation('toastError');
      const snackBarSeverity = result.ok ? 'success' : 'error';

      setOpenSnackbar(true);
      setSnackbarSeverity(snackBarSeverity);
      setSnackbarMessage(resultMessage);

      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    };

    const handleSnackbarClose = () => {
      setOpenSnackbar(false);
    };

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

    return (
      <Box
        component="section"
        ref={ref}
        mb={{
          xs: 10,
          md: 0,
        }}
        sx={{ height: '100vh' }}
      >
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          TransitionComponent={SlideTransition}
          sx={{
            mt: {
              xs: 0,
              md: 7,
              lg: 9,
            },
          }}
          onClose={handleSnackbarClose}
        >
          <Alert
            variant="filled"
            severity={snackbarSeverity}
            onClose={handleSnackbarClose}
          >
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
          <Grid
            item
            xs={12}
            textAlign={'center'}
            pt={{
              xs: 2,
              md: 5,
            }}
            mb={3}
          >
            <Typography
              fontWeight={700}
              fontSize={{
                xs: '34px',
                sm: '40px',
              }}
              color={'custom.text'}
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
                onBlur={handleBlur('fullname')}
                error={Boolean(formErrors.fullname)}
                helperText={formErrors.fullname}
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
                onBlur={handleBlur('phone')}
                error={Boolean(formErrors.phone)}
                helperText={formErrors.phone}
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
                onBlur={handleBlur('email')}
                error={Boolean(formErrors.email)}
                helperText={formErrors.email}
              />
            </Grid>

            <Grid
              item
              xs={12}
              mb={{
                xs: 3,
                sm: 5,
              }}
            >
              <WhiteTextField
                id="message"
                multiline
                rows={4}
                placeholder={getTranslation('message')}
                fullWidth
                inputProps={{
                  maxLength: 200,
                }}
                value={message}
                onChange={handleInputChange('message')}
                onBlur={handleBlur('message')}
                error={Boolean(formErrors.message)}
                helperText={formErrors.message}
              />
            </Grid>

            <Grid item xs={12} textAlign={'end'}>
              {!hasFormErrors && (
                <Typography
                  component={'button'}
                  type="submit"
                  position={'relative'}
                  px={2.5}
                  fontSize={'24px'}
                  lineHeight={'32px'}
                  color={'custom.text'}
                  sx={{
                    backgroundColor: 'transparent',
                    border: '1px solid transparent',
                    borderRadius: '8px 3px 8px 8px',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s linear',
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
