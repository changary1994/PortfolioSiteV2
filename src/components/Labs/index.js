import './index.scss'
import Loader from 'react-loaders';
import Snowfall from 'react-snowfall';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Labs = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <Snowfall />
            <Loader type="ball-pulse-sync" />
            <div className='container homework-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['L','a', 'b', 's']}
                            idx={15}
                        />
                    </h1>
                    <p id="firstP">This page is to provide links to lab assignments for CISC 3610 with Professor Goetz. If you are a recruiter, employer, or Jeff Bezos, please turn back now.</p>
                    <ul>
                        <li>
                            <a href="https://changary1994.github.io/CartoonHW/">JSON Lab</a>  
                        </li>
                        <li>
                            <a href="https://changary1994.github.io/CartoonHW/">Audio Lab</a>  
                        </li>
                        <li>
                            <a href="https://changary1994.github.io/CartoonHW/">Resume Lab</a>  
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Labs