import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(() => ({
  color: 'white',
  width: 280,
  height: 50,
  borderRadius: 20,
  backgroundColor: '#24cca7',
  '&:hover': {
    backgroundColor: '#24cca7',
  },
}));

const ButtonMain = ({ text }) => (
  <>
    <ColorButton variant='contained'>{text}</ColorButton>
  </>
);

export default ButtonMain;
