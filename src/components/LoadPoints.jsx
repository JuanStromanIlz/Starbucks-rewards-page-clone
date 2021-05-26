import Link from '../assets/icons/Link';
import A from '../styled-components/A';
import SimpleContainer from '../styled-components/SimpleContainer';
import PointsForm from './PointsForm';

const LoadPoints = () => (
  <SimpleContainer>
    <h2 className='title'>Star Codes</h2>
    <p className='sub'>Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
    <PointsForm />
    <p>Have a receipt but don't have a code?</p>
    <p>Go to <A href='/'>starbucks-stars.com</A><Link className='icon'/>  to upload your receipt and collect your Stars.</p>
  </SimpleContainer>
);

export default LoadPoints;