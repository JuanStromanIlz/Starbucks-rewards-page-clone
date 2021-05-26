import A from '../styled-components/A';
import Hero from '../styled-components/Hero';

const HeroComponent = () => {
  return (
    <Hero>
      <div className='text-wrapper'>
        <div className='text-block'>
          <h1>
            FREE COFFEE
            <br/>
            IS A TAP AWAY
          </h1>
          <div className='subtitle'>
            <p>
              <span>Join now to start earning Rewards.</span>
            </p>
          </div>
          <div className='join'>
            <A href='/' typeButton color='#fff' back={props => props.theme.colors.lightMain}>Join in the app</A>
            <div>
              <A href='/' color={props => props.theme.colors.black}>Or join online</A>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default HeroComponent;