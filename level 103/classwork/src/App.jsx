import React, { useState } from 'react';

function Contact() {
   let authorized = false;
   return(
    <>
      <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
    </>
   )
}

export default Contact;