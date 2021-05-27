import { useEffect, useRef, useState } from 'react';
import Error from '../assets/icons/Error';
import Warning from '../assets/icons/Warning';
import Form from '../styled-components/Form';

const PointsForm = () => {
  const [code, setCode] = useState('');
  const [focus, setFocus] = useState(false);
  const label = useRef(null);
  const input = useRef(null);
  const errorMessage = useRef(null);

  function inputValue(e) {
    setFocus(true);
    setCode(e.target.value);
  }
  function focusInput() {
    input.current.classList.add('input-wrapper--active');
    label.current.classList.add('label--isActive');
    document.getElementById('star-points').focus();
  }

  useEffect(() => {
    if (!code.length > 0 && focus) {
      label.current.classList.remove('label--isActive');
      input.current.classList.add('input-wrapper--error');
      errorMessage.current.classList.add('error-wrapper--active');
    }
    if (code.length > 0 && focus) {
      /* remove errors styles */
      input.current.classList.remove('input-wrapper--error');
      errorMessage.current.classList.remove('error-wrapper--active');
      /* add active input styles */
      input.current.classList.add('input-wrapper--active');
      label.current.classList.add('label--isActive');
    }
    else{
      /* default style */
      input.current.classList.remove('input-wrapper--active');
    }
  }, [code, focus]);
  
  return (
    <Form onSubmit={(e) => console.log(e)}>
      <div className='footer-wrapper'>
        <div ref={input} className='input-wrapper'>
          <label ref={label} onClick={()=> focusInput()}>Enter your Star Code</label>
          <input 
            type='text'
            id='star-points'
            name= 'code'
            value={code}
            onChange={(e) => inputValue(e)}
            onBlur={() => setFocus(false)}
            onClick={()=> focusInput()}
          />
          <button type='submit'>Submit</button>
          {!code.length > 0 && focus && <Warning className='warning-icon'/> }
        </div>
        <div ref={errorMessage} className='error-wrapper'>
          <div>
            <span>
              <span id='error-message'>
                <Error className='error-icon'/>
                <span>Please enter a Star code.</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default PointsForm;