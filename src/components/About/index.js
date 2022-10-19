import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJsSquare, faReact, faUnity } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Snowfall from 'react-snowfall'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
         return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                </h1>
                <p>I am a senior CS student who is looking to start his career in Software Engineering or Game Programming. As I approach my graduation with a B.S. from Brooklyn College in Computer Science, I am seeking an internship or junior/associate position in the field that will allow me to nurture skills and gain experience that I can use to continue to enrich the lives of others. I hope to find myself a part of a friendly and positive environment that shares my love for coding, diversity, and community.</p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faUnity} color="#e6e6e6" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faGithub} color="white" />
                    </div>
                </div>
            </div>
        </div>
        <Loader type="ball-pulse-sync"/>
        <Snowfall />
        </>
    )
}

export default About