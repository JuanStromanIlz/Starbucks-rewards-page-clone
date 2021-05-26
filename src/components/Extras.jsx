import Container from '../styled-components/Container';

const Extras = () => (
  <Container>
    <div>
      <div className='title'>
        <h2>Endless Extras</h2>
        <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>        
      </div>
      <div className='list'>
        <div className='list-item'>
          <div className='image'>
            <img src='https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg' alt='presentation'  width='112'/>
          </div>
          <div className='text-container'>
            <h2>Fun freebies</h2>
            <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className='list-item'>
          <div className='image'>
            <img src='https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg' alt='presentation'  width='112'/>
          </div>
          <div className='text-container'>
            <h2>Order & pay ahead</h2>
            <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
            <button>Learn more</button>
          </div>
        </div>
        <div className='list-item'>
          <div className='image'>
            <img src='https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg' alt='presentation'  width='112'/>
          </div>
          <div className='text-container'>
            <h2>Get to free faster</h2>
            <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Extras;