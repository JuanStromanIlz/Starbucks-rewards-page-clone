import Link from '../assets/icons/Link';
import A from '../styled-components/A';
import BigContainer from '../styled-components/BigContainer';

const Points = () => (
  <BigContainer>
    <div className='title'>
      <h2>Cash or card, you earn Stars</h2>
      <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
    </div>
    <div className='grid'>
      <div className='grid-title'>
        <p>1<span>★</span> per dollar</p>
        <p>Pay as you go</p>
      </div>
      <div className='grid-item'>
        <div>
          <img src='https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png' alt='' width='112' />
        </div>
        <div className='item-text'>
          <h3>Scan and pay separately</h3>
          <p>Use cash or credit/debit card at the register.</p>
        </div>
      </div>
      <div className='grid-item'>
        <div>
          <img src='https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png' alt='' width='112' />
        </div>
        <div className='item-text'>
          <h3>Save payment in the app</h3>
          <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
        </div>
      </div>
      <hr/>
      <div className='grid-title'>
        <p>2<span>★</span> per dollar</p>
        <p>Add funds in the app</p>
      </div>
      <div className='grid-item'>
        <div>
          <img src='https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png' alt='' width='112' />
        </div>
        <div className='item-text'>
          <h3>Preload</h3>
          <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
        </div>
      </div>
      <div className='grid-item'>
        <div>
          <img src='https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png' alt='' width='112' />
        </div>
        <div className='item-text'>
          <h3>Register your gift card</h3>
          <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
        </div>
      </div>
      <hr/>
      <div className='grid-title'>
        <p>Up to 3<span>★</span> per dollar</p>
        <p>With Starbucks® Rewards Visa® Card</p>
      </div>
      <div className='grid-item'>
        <div>
          <img src='https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png' alt='' width='112' />
        </div>
        <div className='item-text'>
          <h3>Earn Stars even faster</h3>
          <p>Earn Stars on all purchases you make with our <A href='/'>credit card</A><Link className='icon'/> in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</p>
        </div>
      </div>
    </div>
  </BigContainer>
);

export default Points;