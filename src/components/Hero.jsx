import Hero from '../styled-components/Hero';

const HeroComponent = () => {
  return (
    <Hero>
      <div className='small-view'>
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
              <a href='/' className='type-button'>Join in the app</a>
              <div>
                <a href='/' className='hero-link'>Or join online</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='big-view'>
        <div className='max-width'>
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
                <a href='/' className='type-button'>Join now</a>
                <div>
                  <span>Or <a href='/' className='hero-link'>join in the app</a> for the best experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Hero>
  );
}

export default HeroComponent;