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
                    <p id="firstP">This page is to provide links to homework assignments for CISC 3610 with Professor Goetz. If you are a recruiter, employer, or Jeff Bezos, please turn back now.</p>
                    <ul>
                        <li><p>
                            <a href="https://changary1994.github.io/CartoonHW/">Cartoon Drawing</a>
                            </p>
                        </li>
                        <li>
                            <p id="firstP">Animation HW - For this assignment, I implemented the spinning cube in my About page using the techniques taught in class. I used @keyframes in CSS, and using imported images, move their position over the course of the animation, which will reset and loop endlessly. </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/FormsHW/">Text Form</a>
                            </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/Speech-Recognition-HW/">Speech Recognition</a>
                            </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/DataVisualization/">Data Visualization</a>
                            </p>
                        </li>
                        <li>
                            <p>
                            <a href="https://changary1994.github.io/AnimationHW/">Video Animation</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Homework