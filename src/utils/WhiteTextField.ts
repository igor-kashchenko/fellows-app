import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';

export const WhiteTextField = styled(TextField)(() => ({
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
