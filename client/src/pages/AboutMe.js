
import hawaii from '../images/hawaii.JPG'
import kayak from '../images/kayak.jpg'

const AboutMe = () => {


    return(
        <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img src={hawaii} alt='zipline.png' style={{width: '500px', height: '300px', margin: '0 3em'}}/>
                    <div style={{margin: '0 3em 3em 0', fontSize: '22px', textAlign: 'left'}}>
                        <h1 style={{margin: '0 2em', textAlign: 'left'}}>My Stack</h1>
                        <p>My name is Ethan McNeal, I have recently finished studying full stack development at the University of Utah's full stack web development cohort. Going in I had intentions to become a fully backend developer, using ruby and ruby on rails, but during the course I fell in love with the React frame work and decided that a front end job using react is what I really want to do. I am curious about cloud computing and testing automation as well. but for now I am diligently studying and polishing my React/JavaScript skills in hopes to find a job. </p>
                    </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div style={{margin: '0 0 3em 3em', fontSize: '22px', textAlign: 'right'}}>
                    <h1 style={{margin: '0', textAlign: 'right'}}>Hobbies</h1>
                    <p>
                        I was raised in the outdoors, my first memories are of me with a fishing rod in my hand, I love the rocky mountain region, Montana and Utah in particular, other than that I play guitar and in my free time I play PC games.
                    </p>  
                </div>
                <img src={kayak} alt='kayak.png' style={{height: '400px', margin: '0 3em 2em'}}/>  
            </div>
        </div>
    )
}
export default AboutMe