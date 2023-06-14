import React from 'react'
import vg from "../assets/graphics.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,} from "react-icons/ai"

const home = () => {
  return (
    <>
    <div className="home" id="home">
      <main>
        <h1>TechyStar</h1>
        <p>Solution to all your problem</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problems you face every day.
                We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id="about">
      <div>
        <h1>Who we are?</h1>
        <p>Lorem ipsum dolor, sit sa exercitationem porro praesentium sint, delectus ut! Sequi provident ut cupiditate sint natus aliquam autem ipsum suscipit. Eligendi sint sequi cumque voluptatum aliquid quia non explicabo! Ipsa itaque, asperiores error magni at rem sit, iure nesciunt, labore incidunt expedita delectus earum! Voluptatibus iste magnam soluta, nobis laudantium, nemo commodi id ad ullam fugiat unde quam in odit. Quae, repudiandae minus, cumque, assumenda numquam vero veritatis iure ut minima provident ab fuga ullam molestiae odio possimus beatae repellat maiores. Eaque.</p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay: "0.3s",
          }}>
            <AiFillGoogleCircle />
            <p>Google</p>

          </div>
          <div style={{
            animationDelay: "0.5s",
          }}>
            <AiFillAmazonCircle />
            <p>Amazon</p>

          </div>
          <div style={{
            animationDelay: "0.7s",
          }}>
            <AiFillYoutube />
            <p>Youtube</p>

          </div>
          <div style={{
            animationDelay: "0.9s",
          }}>
            <AiFillInstagram />
            <p>Instagram</p>

          </div>
        </article>
      </div>
    </div>

    </>
  )
}

export default home
