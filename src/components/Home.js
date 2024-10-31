import React from 'react';

function Home() {
  return (
    <div>
      <section className="hero-section text-center bg-primary text-white py-5">
        <div className="container">
          <h1>Welcome to Kaira</h1>
          <p className="lead">A beautiful and responsive React website.</p>
          <a href="#about" className="btn btn-light mt-3">Learn More</a>
        </div>
      </section>

      <section className="features py-5">
        <div className="container text-center">
          <h2>Our Features</h2>
          <p className="lead">Here's a quick look at what we offer.</p>
          <div className="row">
            <div className="col-lg-4">
              <h3>Feature 1</h3>
              <p>Some feature description.</p>
            </div>
            <div className="col-lg-4">
              <h3>Feature 2</h3>
              <p>Some feature description.</p>
            </div>
            <div className="col-lg-4">
              <h3>Feature 3</h3>
              <p>Some feature description.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
