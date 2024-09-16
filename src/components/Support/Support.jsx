import React from 'react';
import './Support.css';

const FAQ = () => {
  return (
    <div className="faq-item">
      <h3>General Inquiry</h3>
<p>Please contact our support team for any general inquiries.</p>

    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact-info">
      <h2>Contact Us</h2>
      <p>If you have any further questions or issues, please feel free to contact us:</p>
      <ul>
        <li>Email: support@example.com</li>
        <li>Phone: 123-456-7890</li>
        <li>Address: 123 Main Street, City, Country</li>
      </ul>
    </div>
  );
};

const Support = () => {
  return (
    <div className="support-container">
      <header>
        <h1>Support Page</h1>
      </header>
      <main>
        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <FAQ />
          <FAQ />
          {/* Add more FAQ components as needed */}
        </section>
        <section className="contact-section">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Support;
