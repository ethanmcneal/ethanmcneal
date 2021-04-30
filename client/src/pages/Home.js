import kayak from '../images/kayak.jpg'
import code from '../images/code.jpg'
import linkedinpfp from '../images/linkedinpfp.jpg'
import '../stylesheets/home.css'


const Home = () => (
    <>
    <h1>Ethan McNeal</h1>
    <div className='image-container'>
        <img src={kayak} />
        <img src={linkedinpfp}/>
        <img src={code}/>
        
    </div>
    </>
)

export default Home