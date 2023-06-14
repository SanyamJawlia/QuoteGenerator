import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>

            <form action="">
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required placeholder="Your Name" />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder="name@gmai.com" />
                </div>
                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder="Tell us you message...." />
                </div>

                <button type="submit">Send</button>
            </form>

        </main>
    </div>
  )
}

export default Contact
