import Aboutme from '../section/aboutme'
import Title from '../section/title'
import Experience from '../section/experience'
import '../sytle/combined.css'

function Combined(){
    return(
        <div className='combined'>
             <Title/>
             <Aboutme/>
             <Experience/>
        </div>
    )
}
export default Combined