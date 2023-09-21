import TextField from '@mui/material/TextField';

const Input = ({ text, value }) => (
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
    value={value}
  />
);

export default Input;
