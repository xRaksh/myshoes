

const Footer = () => {
  return (
    <div className="section footer">
        <div className="grid grid-two-col">
            <div className="contact">
                <h2>Contact</h2>
                <div className="contact_data">
                <div className="add">
                    <span><ion-icon name="home"></ion-icon></span>
                    <h3>123XYZ</h3>
                </div>
                <div className="call">
                    <span><ion-icon name="call"></ion-icon></span>
                    <h3>0123456789</h3>
                </div>
                <div className="email">
                    <span><ion-icon name="mail"></ion-icon></span>
                    <h3>xyz.gmail.com</h3>
                </div>
                </div>
            </div>
            <div className="newsletter">
                <h2>Newsletter</h2>
                <input type="text" placeholder="email"/>
                <a href="/" className="btn">Subscribe</a>
            </div>
        </div>
        <div className="social_media">
                <span><ion-icon name="logo-facebook"></ion-icon></span>
                <span><ion-icon name="logo-instagram"></ion-icon></span>
                <span><ion-icon name="logo-twitter"></ion-icon></span>
            </div>
    </div>
  )
}

export default Footer
