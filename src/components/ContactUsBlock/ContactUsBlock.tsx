import React, { forwardRef, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import contactArrow from '../../assets/images/contactArrow.svg';

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
  },
}));

type Props = {
  ref: React.RefObject<HTMLDivElement>;
  shouldInputFocus: boolean;
}

export const ContactUsBlock = forwardRef<HTMLDivElement, Props>((props, ref) => {

  return (
    <Box
      ref={ref}
      component="section"
      sx={{ height: '100vh'}}
      bgcolor={'#000'}
    >
      <Grid container maxWidth={'1200px'} sx={{
        margin: '0 auto',
        pt: {
          xs: 9,
          sm: 10,
        },
        px: {
          xs: 3, sm: 4,  md: 23, lg: 38,
        },
      }}>
        <Grid item xs={12} textAlign={'center'} pt={5} mb={3}>
          <Typography color={'custom.text'} fontSize={'40px'} fontWeight={700}>
            Contact Us
          </Typography>
        </Grid>

        <Grid container component={'form'} noValidate justifyContent={'center'}>
          <Grid item xs={12} mb={5}>
            <WhiteTextField
              required
              id="fullname"
              label="Full Name"
              inputProps={{
                pattern: '^[A-Za-zА-Яа-яІіЇїЄєҐґ ]+$',
                title: 'Enter a valid full name without numbers',
              }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mb={5}>
            <WhiteTextField
              required
              id="phone"
              label="Phone"
              type='tel'
              fullWidth
              inputProps={{
                pattern: '^[0-9]+$',
                title: 'Enter a valid phone number without letters',
              }}
            />
          </Grid>

          <Grid item xs={12} mb={5}>
            <WhiteTextField
              required
              id="email"
              label="Email"
              type='email'
              fullWidth
            />
          </Grid>

          <Grid item xs={12} mb={5}>
            <WhiteTextField
              multiline
              rows={4}
              required
              id="message"
              placeholder="Describe your task here so we can tell you
              approximate price"
              fullWidth
              inputProps={{
                maxLength: 200,
              }}
            />
          </Grid>

          <Grid item xs={12} textAlign={'end'}>
            <Typography component={'button'} type='submit' color={'custom.text'} fontSize={'24px'} lineHeight={'32px'} position={'relative'} px={2.5} sx={{
              border: '1px solid transparent',
              borderRadius: '8px 3px 8px 8px',
              cursor: 'pointer',
              transition: 'border-color 0.3s linear',
              backgroundColor: 'transparent',
              ':hover': {
                borderColor: '#fff',
              },
            }}>
              Send
              <Box
                component={'img'}
                src={contactArrow}
                alt='arrow logo'
                sx={{ position: 'absolute', top: 2, right: 2}}
              />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
});

ContactUsBlock.displayName = 'ContactUsBlock';
