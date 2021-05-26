import Container from '../styled-components/Container';
import A from '../styled-components/A';

const GettingStarted = () => (
  <Container>
    <div>
      <div className='title'>
        <h2>Getting started is easy</h2>
        <p>Earn Stars and get rewarded in a few easy steps.</p>
      </div>
      <div className='list'>
        <div className='list-item'>
          <div className='image'>
            <img src='https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg' alt='Step 1' width='48'/>
          </div>
          <div className='text-container'>
            <h2>Download the Starbucks® app</h2>
            <p><A href='/' color={props => props.theme.colors.lightMain}>Join in the app</A> to get access to the full range of Starbucks® Rewards benefits. You can also <A href='/' color={props => props.theme.colors.lightMain}>join online.</A></p>
          </div>
        </div>
        <div className='list-item'>
          <div className='image'>
            <img src='https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg' alt='Step 2' width='48'/>
          </div>
          <div className='text-container'>
            <h2>Order and pay how you’d like</h2>
            <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. <A href='/' color={props => props.theme.colors.lightMain}>Learn how</A></p>
          </div>
        </div>
        <div className='list-item'>
          <div className='image'>
            <img src='https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg' alt='Step 3' width='48'/>
          </div>
          <div className='text-container'>
            <h2>Earn Stars, get Rewards</h2>
            <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default GettingStarted;