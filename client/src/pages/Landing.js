import landing from '../images/landing2.JPG'
import FadeIn from '../styleComponents/FadeIn'

const Landing = () => {
    return(
        <FadeIn>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white'}}>
            <div style={{textAlign: 'center', position: 'absolute', marginTop: '22%'}}>
            <h1 className='landing-name' style={{color:'white'}}>
           I HATE BENTLEY HOLLEY
            </h1>
            <p style={{color: 'red', position: 'absolute', top: '-20%', right: '33%'}}>Lame -{'>'}</p>
            <h2>Fake friend + car cleaner + 4/6 + car soccer + predator</h2>
            <h3 >IP: 70.197.72.115</h3>
            <h3 >Subnet: 70.200.72.115:2888</h3>
            <h3 >842 Wellington Drive</h3>
            <h3 >Kaysville Utah 84037</h3>
            <p>watch out kiddo my dad is microsoft, you know, the guy who made pc and i will tell him to give me your mac adress oh wait nevermind here it is already 192.168.1.15 yea that's what i thought kiddo now let us see how you like to be doxxed oh what, your all sad now you want me to stop and your sorry to well two bad because docking is bad and if you like when doxxers dox people then you should be doxxed yourself because doxxing is no laughing matter unlike what you may think it is actually really serious and really bad so that's why it's bad and people should not support it or people should not do it either because it can ruin someones life and make all they're private information become not private information anymore and it will be available to every one on the internet which includes 4chan the hacker and hes a really bad guy who you don't want to mess with so if he gets someones private information thats no longer private and is now available to everyone including the hacker named 4chan its gonna be bad and the person who you thought was so funny to be doxxed is now dead because of this thing you think is very funny and good when it's not and it's actually not funny or good and very dangerous and bad so your a really bad person if you think doxxing is good and i hope you get doxxed because of it. watch out kiddo</p>
            </div>
            <img src={landing} alt='montana mountains' style={{width: window.innerWidth, height: window.innerHeight, display: 'block', objectFit: 'cover'}}/>
            
        </div>
        </FadeIn>
    )
}

export default Landing

// import { Link } from 'react-router-dom'
// import landing from '../images/landing2.JPG'
// import FadeIn from '../styleComponents/FadeIn'

// const Landing = () => {
//     return(
//         <FadeIn>
//         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white'}}>
//             <div style={{textAlign: 'center', position: 'absolute', marginTop: '22%'}}>
//             <Link to='/ethanmcneal' style={{color: '#363837'}} className='landing-link'>
//             <h1 className='landing-name'>
//             Ethan McNeal
//             </h1>
//             </Link>
//             <h2>Full Stack Developer</h2>
//             <h3 >| | React | | React Native | | JavaScript | | Ruby on Rails | | SQL | |</h3>
            
//             </div>
//             <img src={landing2} alt='montana mountains' style={{width: window.innerWidth, height: window.innerHeight, display: 'block', objectFit: 'cover'}}/>
            
//         </div>
//         </FadeIn>
//     )
// }

// export default Landing