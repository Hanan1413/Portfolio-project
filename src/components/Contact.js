import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <main className="contact">
      <h1 className="lg-heading">
        Contact
        <span className="text-secondary">Me</span>
      </h1>
      <h2 className="sm-heading">This is how you can reach me...</h2>
      <div className="boxes-contact">
        <div>
          <span>
          
            <span className="text-secondary">Email: </span>
          </span> ihanan977@gmail.com        
          </div>
        <div>
          <span className="text-secondary">Phone: </span>
           0569382756
        </div>
        <div>
          <span className="text-secondary"> Address: </span>
          KSA, Riyadh  
        </div>
      </div>
    </main>
  );
};


export default Contact;
