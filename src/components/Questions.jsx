import SimpleContainer from '../styled-components/SimpleContainer';
import Link from '../assets/icons/Link';

const Questions = () => (
  <SimpleContainer>
    <div className='wrapper'>
      <h2 className='title'>Questions ?</h2>
      <p>We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions <a href='/'>right over here <Link className='icon'/></a>.</p>
    </div>
  </SimpleContainer>
);

export default Questions;