// // Banner.js
// import React, { useEffect, useState } from 'react';
// import './Styles/Banner.css'; // Importing the CSS styles

// const Banner = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setIsVisible(true); // Set to true after 100ms for the fade-in effect
//         }, 100);
        
//         return () => clearTimeout(timer); // Cleanup the timer
//     }, []);

//     return (
//         <section className="banner">
//             <div className={`banner-content ${isVisible ? 'fade-in' : ''}`}>
//                 <h1>New Collections</h1>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Saepe voluptas ut dolorum consequuntur, adipisci repellat! Evinet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum, quibusdam ex repellat eaque!</p>
//             </div>
//         </section>
//     );
// };

// export default Banner;