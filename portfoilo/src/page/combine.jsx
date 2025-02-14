import Aboutme from '../section/aboutme'
import Title from '../section/title'
import Experience from '../section/experience'
import '../sytle/combined.css'
import Footer from '../component/footer'
function Combined(){
    return(
        <div className='combined'>
             <Title/>
             <Aboutme/>
             <Experience/>
             <Footer/>
        </div>
    )
}
export default Combined