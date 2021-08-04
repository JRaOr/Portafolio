import React from 'react'
import {ResumeContainer, ResumeTitle, ResumeSubtitle, ResumeP, ResumeItem, ResumeC1, ResumeC2, ResumeH2, BarSkill, ResumeTitleSkill} from './ResumeElements'
const Resume = () => {
    return (
        <ResumeContainer>
            <ResumeItem>
                <ResumeC1>
                    <ResumeH2>EDUCATION</ResumeH2>
                </ResumeC1>
                <ResumeC2>
                    <ResumeTitle>Instituto Tecnologico de Toluca</ResumeTitle>
                    <ResumeSubtitle>Bachelor's Degree, Electronic Engineering • July 2018</ResumeSubtitle>
                    <ResumeP>Descripcion de carrera</ResumeP>
                </ResumeC2>
            </ResumeItem>
            <ResumeItem>
                <ResumeC1>
                    <ResumeH2>WORK</ResumeH2>
                </ResumeC1>
                <ResumeC2>
                    <ResumeTitle>Moldex y Exhibidores S.A de C.V</ResumeTitle>
                    <ResumeSubtitle>Hardware Engineer</ResumeSubtitle>
                    <ResumeP>Current Job</ResumeP>
                </ResumeC2>
            </ResumeItem>
            <ResumeItem>
                <ResumeC1>
                    <ResumeH2>SKILLS</ResumeH2>
                </ResumeC1>
                <ResumeC2>
                    <ResumeP>My Programming Language Proficiency</ResumeP>
                    <ResumeTitleSkill>Matlab</ResumeTitleSkill>
                    <BarSkill>
                        <div className='bar-skill' style={{width: '85%'}}></div>
                    </BarSkill>
                    <ResumeTitleSkill>React</ResumeTitleSkill>
                    <BarSkill>
                        <div className='bar-skill' style={{width: '50%'}}></div>
                    </BarSkill>
                    <ResumeTitleSkill>Python</ResumeTitleSkill>
                    <BarSkill>
                        <div className='bar-skill' style={{width: '90%'}}></div>
                    </BarSkill>
                    <ResumeTitleSkill>Microcontrollers</ResumeTitleSkill>
                    <BarSkill>
                        <div className='bar-skill' style={{width: '95%'}}></div>
                    </BarSkill>
                    <ResumeTitleSkill>AWS</ResumeTitleSkill>
                    <BarSkill>
                        <div className='bar-skill' style={{width: '70%'}}></div>
                    </BarSkill>
                    <ResumeTitleSkill>Embedded applications</ResumeTitleSkill>
                    <BarSkill>
                        <div className='bar-skill' style={{width: '100%'}}></div>
                    </BarSkill>
                </ResumeC2>
            </ResumeItem>
        </ResumeContainer>
    )
}

export default Resume
