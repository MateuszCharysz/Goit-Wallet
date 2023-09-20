import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import email from '../images/email.svg';

const Input = ({ text }) => (
  <TextField
    style={{
      width: 280,
      color: '#e0e0e0',
      fontSize: 18,
    }}
    id='standard-basic'
    label={text}
    variant='standard'
  />
);

export default Input;

// const Adorment = () => <img src={email} alt='email'></img>;

// const Input = ({ text }) => (
//   <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
//     <Adorment
//       sx={{ color: 'action.active', mr: 1, my: 0.5 }}
//     />
//     <TextField
//       id='input-with-sx'
//       label={text}
//       variant='standard'
//     />
//   </Box>
// );

// export default Input;
