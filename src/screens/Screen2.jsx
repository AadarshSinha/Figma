import "../css/screen2.css"
import fullbottle from "../images/fullbottle.svg"
import cap from "../images/cap.svg"
import front from "../images/front.svg"
import back from "../images/back.svg"
import background from "../images/background.svg"
import { useNavigate } from 'react-router-dom';
import {motion} from "framer-motion"

const Screen2 = () => {
    const nav = useNavigate();
    const screen1 = () => {
        nav("/screen1")
    }
    const screen3 = () => {
        nav("/screen3")
    }
    return(
        <motion.div className="screen2-container" initial={{opacity:0}} exit={{opacity:0}} animate={{opacity:1}}>
            <div className="image">
               <div className="bottle"><img src={fullbottle}/></div>
               <div className="cap"><img src={cap}/></div>
            </div>
            <div className="desc">
                <div className="background"><img src={background}/></div>
                <div className="text-1">LARQ Bottle PureVis</div>
                <div className="text-2">Brilliantly clean water</div>
                <div className="text-3">Neutralizes up to 99%* of bacteria such as E.coli using PureVis technology. Learn more.</div>
                <div className="text-4">Self-cleaning & worry-free</div>
                <div className="text-5">Intelligently activates every 2 hours to keep your water and bottle stink-free.</div>
            </div>
            <button className="screen1" onClick={screen1}><img src={back}/></button>
            <button className="screen3" onClick={screen3}><img src={front}/></button>
        </motion.div>
    )
}
export default Screen2;