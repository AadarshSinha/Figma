import "../css/screen3.css"
import bottle1 from "../images/bottle1.svg"
import bottle2 from "../images/bottle2.svg"
import bottle3 from "../images/bottle3.svg"
import bottle4 from "../images/bottle4.svg"
import bottlebackground from "../images/bottlebackground.svg"

const Screen3 = () => {
    return(
        <>
        <div className="items">
          <div className="background"><img src={bottlebackground}/></div>
          <div className="bottle1"><img src={bottle1}/></div>
          <div className="bottle2"><img src={bottle2}/></div>
          <div className="bottle3"><img src={bottle3}/></div>
          <div className="bottle4"><img src={bottle4}/></div>
          <div className="bottle-text">A smart way to sip</div>
        </div>
        </>
    )
}
export default Screen3;