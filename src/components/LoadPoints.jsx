import Link from '../assets/icons/Link';
import SimpleContainer from '../styled-components/SimpleContainer';
import PointsForm from './PointsForm';

const LoadPoints = () => (
  <SimpleContainer>
    <div className='wrapper'>
      <h2 className='title'>Star Codes</h2>
      <p className='sub'>Yesssss. You’ve got Stars in your hand. Enter your code here and we’ll add Stars to your account.</p>
      <PointsForm />
      <p>Have a receipt but don't have a code?</p>
      <p>Go to <a href='/'>starbucks-stars.com</a><Link className='icon'/>  to upload your receipt and collect your Stars.</p>
    </div>
  </SimpleContainer>
);

export default LoadPoints;