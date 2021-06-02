import Banner from '../styled-components/Banner';

const BannerComponent = () => (
  <Banner>
    <div className='banner-wrapper'>
      <p className='text-upper'>Starbucks® Rewards</p>
      <a href='/'>Join in the app</a>
    </div>
  </Banner>
);

export default BannerComponent;