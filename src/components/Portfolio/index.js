import Loader from 'react-loaders';
import Snowfall from 'react-snowfall';
import './index.scss'
import Butterfly from '../../assets/images/ProjectButterfly.png'
import Pokemon from '../../assets/images/ProjectPokemonEncounter.png'
import Prittle from '../../assets/images/ProjectPrittle.png'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
  
    const proj1 = ("Project Prittle");
    const proj2 = ("Project Butterfly");
    const proj3 = ("Project Pokemon Encounter");
    const proj1Array = proj1.split("");
    const proj2Array = proj2.split("");
    const proj3Array = proj3.split("");

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            idx={15}
                        />
                        </h1>
                    <ul>
                    <li>
                        <a href="https://github.com/changary1994/ProjectPrittle.git">
                            <img className='projectImage' src={Prittle} alt="Project Prittle"></img>
                        </a>
                        <h2> 
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={proj1Array}
                            idx={30}
                        />
                        </h2>
                        <p id="firstP"> Project Prittle is my capstone project for my Computer Science degree. It is a social media CRUD application where users can share an image or text post of the little things they are proud of accomplishing for the day. It is a work in progress as I will be graduating in December, and I hope to be able to share it with you soon!</p>
                        
                        <a className='endLink' href="https://github.com/changary1994/ProjectPrittle.git"> GitHub Link</a>
                    </li>
                    <li>
                        <a href="https://mysterioushatter.itch.io/project-butterfly-nights-into-dreams-inspired-game">
                            <img className='projectImage' src={Butterfly} alt="Project Butterfly"></img>
                        </a>
                        <h2> 
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={proj2Array}
                            idx={30}
                        />
                        </h2>
                        <p id="secondP"> Project Butterfly is a 2.5d adventure game where I worked as a Programmer using C# and Unity. There, I collaborated with a team of 10 talented individuals, including artists, sound designers, musicians to deliver a completed product during a one month hackathon. I participated in stand-ups, conducted code reviews, designed UI, integrated physics, and fixed merge conflicts.</p>
                        
                        <a className='endLink' href="https://mysterioushatter.itch.io/project-butterfly-nights-into-dreams-inspired-game"> Link </a>
                    </li>
                    <li>
                        <a href="https://github.com/changary1994/Lab4">
                            <img className='projectImage' src={Pokemon} alt="Project Pokemon"></img>
                        </a>
                        <h2> 
                            <AnimatedLetters
                            letterClass={letterClass}
                            strArray={proj3Array}
                            idx={30}
                        />
                        </h2>
                        <p id="thirdP"> A project for a web development course. The application fetches data from the public Pokemon API found <a href='https://pokeapi.co/'>here</a> to display data and images on the user's screen. </p>
                        
                        <a className='endLink' href="https://github.com/changary1994/Lab4"> GitHub Link </a>
                    </li>                   
                    </ul>
                </div>
            </div>
            <Loader type="ball-pulse-sync" />
            <Snowfall />
        </>
    )
};

export default Portfolio