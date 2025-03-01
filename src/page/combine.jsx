import Aboutme from '../section/aboutme'
import Title from '../section/title'
import Experience from '../section/experience'
import '../sytle/combined.css'
import Footer from '../component/footer'
import FadeInOverlay from '../component/animatmatedsection'
import ScrollAnimation from 'react-animate-on-scroll';
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