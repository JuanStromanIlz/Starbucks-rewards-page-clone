import Facebook from '../assets/media-icons/Facebook';
import Instagram from '../assets/media-icons/Instagram';
import Pinterest from '../assets/media-icons/Pinterest';
import Spotify from '../assets/media-icons/Spotify';
import Twitter from '../assets/media-icons/Twitter';
import Youtube from '../assets/media-icons/Youtube';
import FooterContainer from '../styled-components/FooterContainer';
import AcordionTab from './AcordionTab';

const about = {
  title: 'About Us',
  items: [
    {link: 'https://www.starbucks.com/about-us/company-information', text: 'Our Heritage'},
    {link: 'https://www.starbucks.com/coffee', text: 'Our Coffee'}, 
    {link: 'https://stories.starbucks.com/', text: 'Stories and News'}, 
    {link: 'https://investor.starbucks.com/', text: 'Investor Relations'},
    {link: 'https://www.starbucks.com/responsibility/global-report/policies', text: 'Policies and Standards'},
    {link: 'https://customerservice.starbucks.com/', text: 'Customer Service'}
  ]
};
const careers = {
  title: 'Careers',
  items: [
    {link: 'https://www.starbucks.com/careers/working-at-starbucks/culture-and-values', text: 'Culture and Values'}, 
    {link: 'https://stories.starbucks.com/stories/equity-inclusion/', text: 'Inclusion, Diversity, and Equity'}, 
    {link: 'https://www.starbucks.com/careers/working-at-starbucks/education', text: 'College Achievement Plan'},
    {link: 'https://www.starbucks.com/careers/', text: 'U.S. Careers'},
    {link: 'https://www.starbucks.com/careers/international-careers', text: 'International Careers'}
  ]
};
const socialImpact = {
  title: 'Social Impact',
  items: [
    {link: 'https://www.starbucks.com/responsibility/sourcing', text: 'Ethical Sourcing'}, 
    {link: 'https://www.starbucks.com/responsibility/environment', text: 'Leading in Sustainability'}, 
    {link: 'https://www.starbucks.com/responsibility/community', text: 'Strengthening Communities'},
    {link: 'https://www.starbucks.com/responsibility/community/opportunity-youth', text: 'Creating Opportunities'},
    {link: 'https://www.starbucks.com/responsibility/global-report', text: 'Global Social Impact Report'}
  ]
};
const business = {
  title: 'For Bussines Partners',
  items: [
    {link: 'https://www.starbucks.com/business/landlord-faq', text: 'Landlord Support Center'}, 
    {link: 'https://www.starbucks.com/business/suppliers', text: 'Suppliers'}, 
    {link: 'https://www.starbuckscardb2b.com/', text: 'Corporate Gift Card Sales'},
    {link: 'https://www.starbucks.com/business', text: 'Office and Foodservice Coffee'}
  ]
};
const orderAndPickup = {
  title: 'Order and Pickup',
  items: [
    {link: 'https://www.starbucks.com/rewards/mobile-apps', text: 'Order on the App'}, 
    {link: 'https://www.starbucks.com/menu', text: 'Order on the Web'}, 
    {link: 'https://delivery.starbucks.com/', text: 'Delivery'},
    {link: 'https://www.starbucks.com/ways-to-order', text: 'Order and Pickup Options'},
    {link: 'https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer', text: 'Explore and Find Coffee for Home'}
  ]
};

const Footer = () => {
  return (
    <FooterContainer>
      <div className='wrapper-padding'>
        <div className='acordion'>
          <AcordionTab 
            title={about.title}
            items={about.items}
          />
          <AcordionTab 
            title={careers.title}
            items={careers.items}
          />
          <AcordionTab 
            title={socialImpact.title}
            items={socialImpact.items}
          />
          <AcordionTab 
            title={business.title}
            items={business.items}
          />
          <AcordionTab 
            title={orderAndPickup.title}
            items={orderAndPickup.items}
          />
        </div>
        <hr />
        <ul className='social-media'>
          <li><a href='https://open.spotify.com/user/starbucks'><Spotify className='icon'/></a></li>
          <li><a href='https://facebook.com/starbucks'><Facebook className='icon'/></a></li>
          <li><a href='https://www.pinterest.com/starbucks/'><Pinterest className='icon'/></a></li>
          <li><a href='https://instagram.com/starbucks'><Instagram className='icon'/></a></li>
          <li><a href='https://www.youtube.com/starbucks'><Youtube className='icon'/></a></li>
          <li><a href='https://twitter.com/starbucks/'><Twitter className='icon'/></a></li>
        </ul>
        <ul className='footer-list'>
          <li><a href='https://www.starbucks.com/about-us/company-information/online-policies/privacy-policy'>Privacy Policy</a></li>
          <li><span>|</span><a href='https://www.starbucks.com/about-us/company-information/online-policies/terms-of-use'>Terms of Use</a></li>
          <li><span>|</span><a href='https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf'>CA Supply Chain Act</a></li>
          <li><span>|</span><a href='https://ideas.starbucks.com/'>Submit Your Idea</a></li>
          <li><span>|</span><a href='/'>Cookie Preferences</a></li>
        </ul>
        <p className='rights'>© 2021 Starbucks Coffee Company. All rights reserved.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;