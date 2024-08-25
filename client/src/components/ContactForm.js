import React, { useState } from 'react';

export const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic
    const errors = {};
    if (!fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    }
    if (!phone.trim()) {
      errors.phone = 'Phone is required';
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      setLoading(true);
      try {
        const response = await fetch('https://api.restful-api.dev/objects', { // Replace with your backend URL
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName,
            email,
            phone,
            company,
            message,
          }),
        });

        const result = await response.json();
        if (response.ok) {
          setSuccessMessage('Message sent successfully!');
          // Clear form fields after a successful submission
          setFullName('');
          setEmail('');
          setPhone('');
          setCompany('');
          setMessage('');
        } else {
          // Handle server errors
          setErrors({ form: result.error || 'Something went wrong' });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ form: 'Failed to send message. Please try again.' });
      } finally {
        setLoading(false);
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000);
      }
    }
  };

  const isValidEmail = (email) => {
    // Email validation regex pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-lg-6 mb-4'>
            <div className='form-group'>
              <label className='input-label'>Full Name</label>
              <input
                type='text'
                placeholder='john david'
                className='form-control'
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && <span className='error-message'>{errors.fullName}</span>}
            </div>
          </div>
          <div className='col-lg-6 mb-4'>
            <div className='form-group'>
              <label className='input-label'>Email</label>
              <input
                type='text'
                placeholder='consult@mail.com'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className='error-message'>{errors.email}</span>}
            </div>
          </div>
          <div className='col-lg-6 mb-4'>
            <div className='form-group'>
              <label className='input-label'>Phone</label>
              <input
                type='text'
                placeholder='+008 654 231'
                className='form-control'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className='error-message'>{errors.phone}</span>}
            </div>
          </div>
          <div className='col-lg-6 mb-4'>
            <div className='form-group'>
              <label className='input-label'>Property Name</label>
              <input
                type='text'
                placeholder='yourcompany.com'
                className='form-control'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
          </div>
          <div className='col-lg-12 mb-4'>
            <div className='form-group'>
              <label className='input-label'>Message</label>
              <textarea
                placeholder='Briefly tell us about your project and your current goals. How can we help you?'
                className='form-control'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <span className='error-message'>{errors.message}</span>}
            </div>
          </div>
          <div className='col-lg-12'>
            <div className='form-group d-flex align-items-center'>
              <button type='submit' className='btn btn-primary' disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {successMessage && <div className='success-message text-success'>{successMessage}</div>}
              {errors.form && <div className='error-message'>{errors.form}</div>}
            </div>
          </div>
        </div> 
      </form>
    </>
  );
};
