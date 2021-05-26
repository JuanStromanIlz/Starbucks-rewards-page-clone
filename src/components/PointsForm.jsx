import react from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../assets/icons/Error';
import Warning from '../assets/icons/Warning';
import Form from '../styled-components/Form';

const validateCode = Yup.object().shape({
  code: Yup.string()
    .required()
});
const PointsForm = () => {
  function focusInput() {
    // document.getElementById('input-wrapper').classList.toggle('active');
    // document.getElementById('star-points').focus();
    // document.getElementById('error-field').classList.toggle('is-error');
  }
  return (
    <div>
      <Formik
       initialValues={{
         code: ''
       }}
       validationSchema={validateCode}
       onSubmit={values => {
         console.log(values);
       }}
     >
       { formik => (
        <Form onSubmit={formik.handleSubmit}>
          <div className='wrapper'>
            <div className='input-wrapper'>
              <label onClick={()=> focusInput()}>Enter your Star Code</label>
              <input 
                type='text'
                id='star-points'
                name= 'code'
                onClick={()=> focusInput()}
                onChange={formik.handleChange}
                value={formik.values.code}
                touchedField={formik.touched.code}
                error={formik.errors.code}
              />
              <button type='submit'>Submit</button>
              {formik.errors.code && formik.touched.code ?
                <Warning className='warning-icon'/> : null
              }
              {formik.touched.code && 'touched'}
            </div>
            <div className='error-wrapper'>
              {/* <div>
                <Error className='error-icon'/>
                <span id='error-message'>Please enter a Star code.</span>
              </div> */}
            </div>
          </div>
        </Form>
       )}
     </Formik>
    </div>
  );
};

export default PointsForm;