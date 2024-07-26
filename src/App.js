import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function App() {
 // state for storing form data
  const [formData, setFormData] = useState({
    text: '',
    email: '',
    number: 1,
    password: ''
  });

 
  const [isFormDisabled, setFormDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);





  //  function to process input changes in the model
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'text') {
      setFormData({
        ...formData,
        // Trim text to a maximum of 10 characters
        [name]: value.substring(0, 10) 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

 // function to handle number field changes
  const handleNumberChange = (event) => {
    const value = Math.max(1, event.target.value); 
    setFormData({
      ...formData,


      number: value


    });
  };

  // function to process form submission
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFormDisabled(true); 
    console.log(formData);  

    
    setShowPopup(true);    
  };

  
  const closePopup = () => {
    setShowPopup(false); 
  };

  // Function to toggle password visibility....
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="app">
      <h1>نموذج التسجيل</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="text">اسم المستخدم:</label>
          <input
            type="text"
            id="text"
            name="text"
            value={formData.text}
            onChange={handleChange}
            maxLength="10"



            // Disable the field based on condition
            disabled={isFormDisabled}  
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني (فصل بين القيم بالفواصل):</label>
          <input
            type="text"  
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isFormDisabled} 
            placeholder="أدخل عناوين البريد الإلكتروني مفصولة بفواصل"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="number">الرقم:</label>
          <input
            type="number"
            id="number"
            name="number"

            value={formData.number}

            onChange={handleNumberChange}


            min="1"

            disabled={isFormDisabled} 


            required
          />
        </div>
        <div className="form-group">



          <label htmlFor="password">كلمة المرور:</label>



          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              disabled={isFormDisabled} 

              required
            />
            <span className="toggle-password" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
        </div>
        <button type="submit" className="submit-button">حفظ البيانات</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h2>تم حفظ البيانات بنجاح!</h2>
            <p>تم تسجيل البيانات بنجاح. يرجى التأكد من أن البيانات في الكونسول!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;