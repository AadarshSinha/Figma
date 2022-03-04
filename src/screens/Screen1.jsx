import "../css/screen1.css"
import letter1 from "../images/Vector1.svg"
import letter2 from "../images/Vector2.svg"
import letter3 from "../images/Vector3.svg"
import letter4 from "../images/Vector4.svg"
import ring from "../images/ring.svg"
import bottle from "../images/bottle.svg"
import cap from "../images/cap.svg"
import loginBackground from "../images/login.svg"
const Screen1 = () => {
  return(
      <>
      <div className="container">

         <div className="navbar">
           <div className="brand">
             <div className="letter1"><img src={letter1}/></div>
             <div className="letter2"><img src={letter2}/></div>
             <div className="letter3"><img src={letter3}/></div>
             <div className="letter4"><img src={letter4}/></div>
           </div>
           <div className="navbar-options">
              <div className="home" id="options">Home</div>
              <div className="about" id="options">About</div>
              <div className="bottles" id="options">Bottles</div>
              <div className="contact" id="options">Contact</div>
              <div className="login">
                <div className="login-background"><img src={loginBackground}/></div>
                <div className="login-text">Login</div>
              </div>
           </div>
         </div>
         <div className="content">
             <div className="text-background"><img src={ring}/></div>
             <div className="text1">Self Cleaning bottle In 60 Seconds</div>
             <div className="text2">Hit refresh with the intelligently clean bottle built for adventure.</div>
             <div className="image2"><img src={bottle}/></div>
             <div className="image1"><img src={cap}/></div>
         </div>
      </div>
      </>
  )
}
export default Screen1;