import Banner from '../styled-components/Banner';
import A from '../styled-components/A';

const BannerComponent = () => (
  <Banner>
    <p className='text-upper'>Starbucks® Rewards</p>
    <A href='/' typeButton color='#fff'>Join in the app</A>
  </Banner>
);

export default BannerComponent;