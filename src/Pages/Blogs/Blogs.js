import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <h1>This is blog</h1>
            <h3>Authentication</h3>
            <p>Authentication verifies who the user is.	</p>
            <p>Authentication is visible to and partially changeable by the user</p>
            <p>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</p>

            <h3>Authorization</h3>
            <p>Authorization determines what resources a user can access.</p>
            <p>Authorization isn’t visible to or changeable by the user.</p>
            <p>Authorization works through settings that are implemented and maintained by the organization.
            </p>

            <h3>Why are you using firebase</h3>
            <p>1. Incredibly Built-In Analytics</p>
            <p>2. App Development Made Easy</p>
            <p>3. Growth and User Engagement</p>

             <h3>What other options do you have to implement authentication</h3>
             <p>OneLogin</p>   
             <p>Microsoft Azure Active Directory.</p>   
             <p>Auth0</p>   
             <p>Rippling</p>   

             <h3>What other services does firebase provide other than authentication</h3>
             <p>Cloud Firestore.</p>
             <p>Cloud Functions.</p>
             <p>Hosting</p>
             <p>Cloud Storage.</p>
             <p>Cloud Messaging.</p>
             <p>Google Analytics.
</p>

        </div>
    );
};

export default Blogs;