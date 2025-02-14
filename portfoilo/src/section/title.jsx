import '../sytle/title.css'
import Jemo from '../assets/jemo.png'
function Title(){
    return(
        <div className='titlediv'>
           <div className='titletext'>
            <img className='titleimg' src={Jemo} alt="" />
            <h3 className='title'>Jemo's</h3>
            <h1 className='port'>Portfolio</h1>
            <p className='quote'>They tried to rig the game, but you can't fake influence.</p>
            </div>
        </div>
    )
}
export default Title