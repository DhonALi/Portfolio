import React, { useRef } from 'react';
import './CSS/Headers.css';
import './CSS/Tools.css';
import './CSS/Education.css'
import supaBase from './image/supaBase.png'; 
import react from './image/react.png'; 
import gimp from './image/gimp.png'; 
import figma from './image/figma.png'; 
import Avater from './image/avatarHalf.png'; 


function App() {
  const toolsSection = useRef(null);
  function goToToolsSection() {
    window.scrollTo({
      top: toolsSection.current.offsetTop,
      behavior: 'smooth'
    })
  }
  const educationSection = useRef(null);
  function goToEducationSection() {
    window.scrollTo({
      top: educationSection.current.offsetTop,
      behavior: 'smooth'
    })
  }
  const contactSection = useRef(null);
  function goToContactSection() {
    window.scrollTo({
      top: contactSection.current.offsetTop,
      behavior: 'smooth'
    })
  }
  return (
    <div>
      {/* Header */}
      <div className='Headers'>
            <div className='NavBar'>
                <div className='NavBarBox1'>
                    <h1 className='NavBarh1t1'>HI</h1>
                    <h1 className='NavBarh1t2'>_</h1>
                </div>
                <div className='NavBarBox2'>
                    <h3 className='NavBarh3' onClick={goToToolsSection}>Tools</h3>
                    <h3 className='NavBarh3' onClick={goToEducationSection}>Education</h3>
                    <h3 className='NavBarh3' onClick={goToContactSection}>Contact</h3>
                </div>
            </div>
            <div className='Landing'>
                <div className='LandingBox01'>
                    <h1 className='Landingh1t1'>Hi!</h1>
                    <h1 className='Landingh1t1'>I am Hassan Iyan.</h1>
                    
                    <div className='wrapper'>
                        <h1 className='staticText'>I am a</h1>
                        <ul className='dynamicText'>
                            <li><span>Web Developer  💻</span></li>
                            <li><span>Front End Developer  🖥</span></li>
                            <li><span>App Developer  📱</span></li>
                            <li><span>Photo Editor  📸</span></li>
                        </ul>
                    </div>

                    <div className='Landingbtnt1' onClick={goToToolsSection}>Wanna know about me more</div>
                </div>
                <div className='LandingBox02'>
                    <img src={Avater} className='LandingImage01' alt='avater' />
                </div>
            </div>
        </div>
        {/* Tools */}
        <div className='Tools' ref={toolsSection}>
            <div className='Tools-Inner'>
                <h1 className='toolsHeading'>Tools I Use</h1>
                <div className='ImageTable'>
                    <div className='ToolImageContainer1'>
                        <img src={supaBase} className='ToolsImage01' alt='avater' />
                    </div>
                    <div className='ToolImageContainer2'>
                        <img src={react} className='ToolsImage01' alt='avater' />
                    </div>
                    <div className='ToolImageContainer1'>
                        <img src={gimp} className='ToolsImage01' alt='avater' />
                    </div>
                    <div className='ToolImageContainer2'>
                        <img src={figma} className='ToolsImage01' alt='avater' />
                    </div>
                </div>
                <h3 className='toolsParag' style={{color: '#000'}}>reactJS - reactNative - supaBase - GIMP - FIGMA</h3>
                <h3 className='toolsParag'>Apart from these tools and frameworks i am now learning electronJs, nextJs etc... Also i am always eager to learn and educate my self with new frameworks, technologies and languages to be advanced in this industry.</h3>
            </div>
        </div>
        {/* Education */}
        <div className='Education' ref={educationSection}>
            <h1 style={{fontSize: 64, marginTop: 30, marginBottom: 30}}>Education</h1>
            <div className='EducationInner'>
                <div className='EducationRow'>
                    <h2 style={{color: '#2E88F1'}}>GCE O' Level</h2>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1}}>
                            <h3>Computer Science</h3>
                            <h3>Business Studies</h3>
                            <h3>Economics</h3>
                            <h3>Principles of Account</h3>
                            <h3>English</h3>
                            <h3>Mathematics</h3>
                            <h3>Dhivehi</h3>
                            <h3>Islam</h3>
                        </div>
                        <div>
                            <h3 style={{color: '#00ff00'}}>A</h3>
                            <h3 style={{color: '#00ff00'}}>B</h3>
                            <h3 style={{color: '#00ff00'}}>A</h3>
                            <h3 style={{color: '#00ff00'}}>B</h3>
                            <h3 style={{color: '#00ff00'}}>C</h3>
                            <h3 style={{color: '#ff3300'}}>D</h3>
                            <h3 style={{color: '#00ff00'}}>B</h3>
                            <h3 style={{color: '#00ff00'}}>B</h3>
                        </div>
                    </div>
                </div>
                <div className='EducationRow'>
                    <h2 style={{color: '#2E88F1'}}>GCE O' Level</h2>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1}}>
                            <h3>Computer Concepts</h3>
                            <h3>English</h3>
                            <h3>Programming</h3>
                            <h3>Mathematics</h3>
                            <h3>Information Systems</h3>
                            <h3>Multimedia Technology</h3>
                            <h3>Application Development</h3>
                            <h3>Introduction to Management</h3>
                        </div>
                        <div>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                            <h3 style={{color: '#00ff00'}}>PASS</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='EducationInner'>
                <div className='EducationRow'>
                    <h2 style={{color: '#2E88F1'}}>Bachelors(HON's) Computer science</h2>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{flex: 1}}>
                            <h3>OO System Dev</h3>
                            <h3>Intro to AI</h3>
                            <h3>Computer and Network Systems</h3>
                            <h3>Principles of Computing</h3>
                        </div>
                        <div>
                            <h3 style={{color: '#00ff00'}}>Distinction</h3>
                            <h3 style={{color: '#00ff00'}}>Distinction</h3>
                            <h3 style={{color: '#00ff00'}}>Pass</h3>
                            <h3 style={{color: '#00ff00'}}>Distinction</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Footer */}
        <div ref={contactSection} style={{
            backgroundColor: '#244270',
            paddingTop: 75,
            paddingBottom: 75,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '75%'
            }}>
                <div style={{flex: 1}}>
                    <h1 style={{color: '#FFF', fontSize: 18}}>Phone / Viber / Signal / Telegram : +960 963-6634</h1>
                    <h1 style={{color: '#FFF', fontSize: 18}}>Email : hassan.iyan.l@gmail.com</h1>
                    <h1 style={{color: '#FFF', fontSize: 18}}>GitHub : HassanIyan</h1>
                </div>
                <div>
                    <h1 style={{color: '#FFF', fontSize: 18}}>Created With: reactJS</h1>
                </div>
            </div>
            <h1 style={{color: '#FFF', fontSize: 18}}>@2021</h1>
        </div>
    </div>
  )
}

export default App
