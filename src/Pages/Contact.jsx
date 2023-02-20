

const Contact = () => {
  return (
    <div className="section container">
      <div className="grid grid-two-col">
        <div className="Contact">
            <h2>Let's Have a Coffee</h2>
            <form action="/">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="email"/>
                <textarea name="message" id="msg" cols="30" rows="10" placeholder="Message"></textarea>
            </form>
        </div>
        <div className="Side_img">
            <img src="./images/Contact.gif" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact
