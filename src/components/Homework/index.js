import './index.scss'
import Loader from 'react-loaders';
import Snowfall from 'react-snowfall';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const Homework = () => {

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
                            strArray={['H', 'o', 'm', 'e', 'w', 'o', 'r', 'k', 's']}
                            idx={15}
                        />
                    </h1>
                    <p>This page is to provide links to homework assignments for CISC 3610 with Professor Goetz. If you are a recruiter, employer, or Jeff Bezos, please turn back now.</p>
                </div>
            </div>
        </>
    )
};

export default Homework