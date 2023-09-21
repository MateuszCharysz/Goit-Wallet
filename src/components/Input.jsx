import TextField from '@mui/material/TextField';

const Input = ({ text }) => (
  <TextField
    style={{
      width: 280,
      '&:hover': {
        border: '#e0e0e0',
      },
    }}
    id='standard-basic'
    label={text}
    variant='standard'
  />
);

export default Input;
