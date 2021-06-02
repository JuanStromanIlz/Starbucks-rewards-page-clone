import { useRef } from 'react';
import DropDown from '../assets/icons/DropDown';
import Acordion from '../styled-components/Acordion';

const AcordionTab = ({title, items}) => {
  const button = useRef(null);
  const content = useRef(null);
  function openTab() {
    button.current.classList.toggle('icon--active');
    content.current.classList.toggle('content--active');
  }
  return (
    <Acordion contentHeight={`${45 * items.length}px`}>
      <div className='small-view'>
        <div className='header'>
          <h3>{title}</h3>
          <button ref={button} onClick={() => openTab()}><DropDown className='icon'/></button>
        </div>
        <div ref={content} className='content'>
          <div>
            <ul>
              {items.map(item => (
                <li key={item.id}><a href={item.link}>{item.text}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className='big-view'>
        <h3>{title}</h3>
        <ul>
          {items.map(item => (
            <li><a href={item.link}>{item.text}</a></li>
          ))}
        </ul>
      </div>
    </Acordion>
  );
};

export default AcordionTab;