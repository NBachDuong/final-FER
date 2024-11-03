import React from 'react';
import anh1 from './images/cat-item1.jpg';
import anh2 from './images/cat-item2.jpg';
import anh3 from './images/cat-item3.jpg';


function Home() {
  return (
    <>
    <div>
      <section className="hero-section text-center bg-secondary text-white py-5">
        <div className=" text-center">
          <h1>Welcome to Kaira</h1>
          <a href="/about" className="btn btn-light mt-3">About Us</a>
        </div>
      </section>  
    </div>
    
    <section className="hero-section text-center  py-5">
        <div className=" text-center">
          <h1>New Collections</h1>
        </div>

        <div class="container text-center hero-section">
          <div class="row align-items-start">
            <div class="col">
              <div class="card" style={{width: 18 + 'em'}}>
              <img src={anh1} class="product-item" alt="quang cao"/>
              <div class="card-body">
                <h3 class="product-item">Shop For Men</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/productGrid" class="discover-button">More infomation</a>
              </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{width: 18 + 'em'}}>
              <img src={anh2} class="product-item" alt="quang cao"/>
              <div class="card-body">
                <h3 class="product-item">Shop For Women</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/productGrid" class="discover-button">More infomation</a>
              </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{width: 18 + 'em'}}>
              <img src={anh3} class="product-item" alt="quang cao"/>
              <div class="card-body">
                <h3 class="product-item">Shop Accessories</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/productGrid" class="discover-button">More infomation</a>
              </div>
              </div>
            </div>
            <div class="col">
              <div class="card" style={{width: 18 + 'em'}}>
              <img src={anh3} class="product-item" alt="quang cao"/>
              <div class="card-body">
                <h3 class="product-item">Shop Accessories</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/productGrid" class="discover-button">More infomation</a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    <section className="features py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in">
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"/></svg>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Book An Appointment</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in">
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Pick Up In Store</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in">
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128l-1.3 0-72 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40l-72 0-1.3 0 34.8-59.2C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40zM32 288l0 176c0 26.5 21.5 48 48 48l144 0 0-224L32 288zM288 512l144 0c26.5 0 48-21.5 48-48l0-176-192 0 0 224z"/></svg>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Special Packaging</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                    <div className="col-md-3 text-center aos-init aos-animate" data-aos="fade-in">
                        <div className="py-5">
                            <svg width="38" height="38" viewBox="0 0 24 24">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 352 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l111.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1L16 432c0 17.7 14.3 32 32 32s32-14.3 32-32l0-35.1 17.6 17.5c0 0 0 0 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.8c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352l34.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48.4 288c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z"/></svg>
                            </svg>
                            <h4 className="element-title text-capitalize my-3">Free Global Returns</h4>
                            <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Home;
