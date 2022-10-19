import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-g2.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
/* import Logo from './Logo'; */
import Snowfall from 'react-snowfall';
import Loader from 'react-loaders';
import Josh from '../../assets/images/photos/Josh.jpg';
import Daniel from '../../assets/images/photos/Daniel.jpg';
import Family from '../../assets/images/photos/Family.jpg';
import SuzPhoebe from '../../assets/images/photos/SuzPhoebe.jpg';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const myName = ("ary");
    const myJob = ("Software Engineer");
    const nameArray = myName.split("");
    const jobArray = myJob.split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <Snowfall />
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={jobArray}
                            idx={18}
                        />
                    </h1>
                    <h2>JavaScript / CSS / Java / C#</h2>
                    <Link to="/contact" className='flat-button'> CONTACT ME</Link>
                </div>
                <div className='photo-container'>
                    <div className='photo-zone'>
                        
                        <p> These are the people who motivate me.</p>
                        
                        <div className='face1'>
                            <img className='photoImage' src={Josh} alt="Project Butterfly"></img>
                        </div>
                        <div className='face2'>
                            <img className='photoImage' src={Family} alt="Project Butterfly"></img>
                        </div>
                        <div className='face3'>
                            <img className='photoImage' src={SuzPhoebe} alt="Project Butterfly"></img>
                        </div>
                        <div className='face4'>
                            <img className='photoImage' src={Daniel} alt="Project Butterfly"></img>
                        </div>
                    </div>
                </div>
                {/* <Logo /> */}
            </div>
            <Loader type="ball-pulse-sync" />
        </>
    )
}

export default Home