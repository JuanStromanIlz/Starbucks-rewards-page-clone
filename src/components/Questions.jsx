import SimpleContainer from '../styled-components/SimpleContainer';
import Link from '../assets/icons/Link';
import A from '../styled-components/A';

const Questions = () => (
  <SimpleContainer>
    <h2>Questions ?</h2>
    <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <A href='/'>right over here</A><Link className='icon'/></p>
  </SimpleContainer>
);

export default Questions;