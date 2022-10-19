import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-g2.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
/* import Logo from './Logo'; */
import Snowfall from 'react-snowfall';
import Loader from 'react-loaders';

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
                <img src={ LogoTitle } alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray} 
                idx = {15} 
                />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray} 
                idx = {18}
                /> 
                </h1>
                <h2>JavaScript / CSS / Java / C#</h2>
                <Link to="/contact" className='flat-button'> CONTACT ME</Link>
            </div>
            {/* <Logo /> */}
        </div>
        <Loader type="ball-pulse-sync"/>
        </>
    )
}

export default Home