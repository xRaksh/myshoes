

const Home = () => {
  return (
    <div className="section container">

      <div className="slider_conatiner">
      <div className="slide">
        <img src="./images/s1.jpg" alt="" className="img" />
        <img src="./images/s2.jpg" alt="" className="img" />
        <img src="./images/s3.jpg" alt="" className="img" />
        <img src="./images/s4.jpg" alt="" className="img" />
      </div>
      </div>

      <div className="hero grid grid-two-col">
        <div className="data">
          <h2>New Bolt Sneakers</h2>
          <h1>MEET SHOT</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum a praesentium aperiam. Tenetur velit distinctio temporibus dolor modi architecto quibusdam perspiciatis, quia dignissimos perferendis quaerat!</p>
          <div className="hero_btn">
            <a href="/" className="btn">Shop</a>
          </div>
        </div>
        <div className="Bsvg">
          <img src="./images/svgb.svg" alt="" className="bsvg" />
          <img src="./images/home.png" alt="" className="svg" />
        </div>
      </div>

      <div className="product section">
        <h2>Trending Product</h2>

        <div className="carts">
          <div class="card">
            <div class="card-img">
              <img src="./images/s5.jpg" alt="" className="cimg" />
            </div>
            <div class="card-info">
              <h3 class="text-title">Product title </h3>
              <p class="text-body">Product description and details</p>
            </div>
            <div class="card-footer">
              <span class="text-title">$499.49</span>
              <div class="card-button">
                <span className="svg-icon"><ion-icon name="cart-outline"></ion-icon></span>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-img">
              <img src="./images/s5.jpg" alt="" className="cimg" />
            </div>
            <div class="card-info">
              <h3 class="text-title">Product title </h3>
              <p class="text-body">Product description and details</p>
            </div>
            <div class="card-footer">
              <span class="text-title">$499.49</span>
              <div class="card-button">
                <span className="svg-icon"><ion-icon name="cart-outline"></ion-icon></span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="./images/s5.jpg" alt="" className="cimg" />
            </div>
            <div class="card-info">
              <h3 class="text-title">Product title </h3>
              <p class="text-body">Product description and details</p>
            </div>
            <div class="card-footer">
              <span class="text-title">$499.49</span>
              <div class="card-button">
                <span className="svg-icon"><ion-icon name="cart-outline"></ion-icon></span>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-img">
              <img src="./images/s5.jpg" alt="" className="cimg" />
            </div>
            <div class="card-info">
              <h3 class="text-title">Product title </h3>
              <p class="text-body">Product description and details</p>
            </div>
            <div class="card-footer">
              <span class="text-title">$499.49</span>
              <div class="card-button">
                <span className="svg-icon"><ion-icon name="cart-outline"></ion-icon></span>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="product r_view section">
          <h2>Customer Reviews</h2>
        <div className="r_container">
          <div className="r_card">
            <div className="Rimg">
              <img src="./images/r1.jpg" alt="userimage" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laboriosam.</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="r_card">
            <div className="Rimg">
              <img src="./images/r2.jpg" alt="userimage" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laboriosam.</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
          <div className="r_card">
            <div className="Rimg">
              <img src="./images/r3.jpg" alt="userimage" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laboriosam.</p>
            <span className="star">⭐⭐⭐⭐⭐</span>
          </div>
          <div className="r_card">
            <div className="Rimg">
              <img src="./images/r3.jpg" alt="userimage" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laboriosam.</p>
            <span className="star">⭐⭐⭐⭐⭐</span>
          </div>
        </div>
      </div>

      <div className="services product section">
        <h2>Our Services</h2>
        <div className="s_conatiner">
          <div className="s_cards">
          <span><img src="./images/delivery.png" alt="" /></span>
          <h3>Fast delivery</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="s_cards">
          <span><img src="./images/left.png" alt="" /></span>
          <h3>7 Days Replacement</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="s_cards">
          <span><img src="./images/customer.png" alt="" /></span>
          <h3>24 X 7 Support</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
