import { useState } from 'react';
import TableContent from '../styled-components/TableContent';

const TableView = () => {
  const [view, setView] = useState(0);

  const selectView = (viewNumber) => {
    setView(viewNumber);
  }
  return (
    <TableContent viewSelected={view}>
      <div className='wrapper'>
        <div className='title'>
          <h2>Get your favorites for free</h2>
        </div>
        <div className='table'>
          <div className='table-options'>
            <button onClick={() => selectView(0)}>
              <h3>25
                <span className="star">★</span>
              </h3>
              <div className='slider'></div>
            </button>
            <button onClick={() => selectView(1)}>
              <h3>50
                <span className="star">★</span>
              </h3>
            </button>
            <button onClick={() => selectView(2)}>
              <h3>150
                <span className="star">★</span>
              </h3>
            </button>
            <button onClick={() => selectView(3)}>
              <h3>200
                <span className="star">★</span>
              </h3>
            </button>
            <button onClick={() => selectView(4)}>
              <h3>400
                <span className="star">★</span>
              </h3>
            </button>
          </div>
          <div className='table-content'>
            <div className={`table-view ${view === 0 ? 'active' : 'inactive'}`}>
              <div className='image-field'>
                <div>
                  <div className='size-of-box'></div>
                  <div className='absolute'>
                    <img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png' alt='image for tab 1'/>
                  </div>
                </div>
              </div>
              <div className='text-field'>
                <h4>Customize your drink</h4>
                <p>Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.</p>
              </div>
            </div>
            <div className={`table-view ${view === 1 ? 'active' : 'inactive'}`}>
              <div className='image-field'>
                <div>
                  <div className='size-of-box'></div>
                  <div className='absolute'>
                    <img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/050.png' alt='image for tab 1'/>
                  </div>
                </div>
              </div>
              <div className='text-field'>
                <h4>Brewed hot coffee, bakery item or hot tea</h4>
                <p>Pair coffee cake or an almond croissant with your fresh cup of hot brew.</p>
              </div>
            </div>
            <div className={`table-view ${view === 2 ? 'active' : 'inactive'}`}>
              <div className='image-field'>
                <div>
                  <div className='size-of-box'></div>
                  <div className='absolute'>
                    <img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/150.png' alt='image for tab 1'/>
                  </div>
                </div>
              </div>
              <div className='text-field'>
                <h4>Handcrafted drink, hot breakfast or parfait</h4>
                <p>Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.</p>
              </div>
            </div>
            <div className={`table-view ${view === 3 ? 'active' : 'inactive'}`}>
              <div className='image-field'>
                <div>
                  <div className='size-of-box'></div>
                  <div className='absolute'>
                    <img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png' alt='image for tab 1'/>
                  </div>
                </div>
              </div>
              <div className='text-field'>
                <h4>Salad, sandwich or protein box</h4>
                <p>Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.</p>
              </div>
            </div>
            <div className={`table-view ${view === 4 ? 'active' : 'inactive'}`}>
              <div className='image-field'>
                <div>
                  <div className='size-of-box'></div>
                  <div className='absolute'>
                    <img src='https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png' alt='image for tab 1'/>
                  </div>
                </div>
              </div>
              <div className='text-field'>
                <h4>Select merchandise or at-home coffee</h4>
                <p>Take home a signature cup, a bag of coffee or your choice of select coffee accessories.</p>
              </div>
            </div>            
          </div>
        </div>
      </div>
    </TableContent>
  );
}

export default TableView;