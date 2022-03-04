import "../css/screen2.css"
import fullbottle from "../images/fullbottle.svg"
import cap from "../images/cap.svg"
import background from "../images/background.svg"

const Screen2 = () => {
    return(
        <>
        <div className="screen2-container">
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
        </div>
        </>
    )
}
export default Screen2;