import "../css/screen3.css"
import { useNavigate } from 'react-router-dom';
import bottle1 from "../images/bottle1.svg"
import bottle2 from "../images/bottle2.svg"
import bottle3 from "../images/bottle3.svg"
import bottle4 from "../images/bottle4.svg"
import back from "../images/back.svg"
import bottlebackground from "../images/bottlebackground.svg"
import {motion} from "framer-motion"

const Screen3 = () => {
  const nav = useNavigate();
  const screen2 = () => {
      nav("/screen2")
  }
    return(
        <motion.div className="items" initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}}>
          <div className="background"><img src={bottlebackground}/></div>
          <div className="bottle1"><img src={bottle1}/></div>
          <div className="bottle2"><img src={bottle2}/></div>
          <div className="bottle3"><img src={bottle3}/></div>
          <div className="bottle4"><img src={bottle4}/></div>
          <div className="bottle-text">A smart way to sip</div>
          <button className="screen2-page3" onClick={screen2}><img src={back}/></button>
        </motion.div>
    )
}
export default Screen3;