import React, {useState, useEffect} from 'react'
import {ResumeContainer, ResumeTitle, ResumeSubtitle, ResumeP, ResumeItem, ResumeC1, ResumeC2, ResumeH2, BarSkill, ResumeTitleSkill, EducationContainer, ElectricIconsContainer, ElectronicIcon} from './ResumeElements'
import eagle from '../../Image/icons/eagle.jpg'
import arduino from '../../Image/icons/arduino.png'
import mplab from '../../Image/icons/mplab.png'
import nvidia from '../../Image/icons/nvidia.png'
import proteus from '../../Image/icons/proteus.png'
import raspberry from '../../Image/icons/raspberry.png'
import atmel from '../../Image/icons/atmel.png'
import microchip from '../../Image/icons/microchip.png'
import mplabCode from '../../Image/icons/mplab-code.png'
import labview from '../../Image/icons/labview.png'
import matlab from '../../Image/icons/matlab.png'
import {BsArrowBarRight} from 'react-icons/bs'

import aws from '../../Image/icons/web/aws.png'
import css from '../../Image/icons/web/css.svg'
import flask from '../../Image/icons/web/flask.png'
import html from '../../Image/icons/web/html.png'
import node from '../../Image/icons/web/node.png'
import react from '../../Image/icons/web/react.png'
import python from '../../Image/icons/web/python.png'
import next from '../../Image/icons/web/next.png'
import nginx from '../../Image/icons/web/nginx.png'
import fanuc from '../../Image/icons/industrial/fanuc.png'
import siemens from '../../Image/icons/industrial/siemens.png'
import solid from '../../Image/icons/industrial/solid.png'
import rock from '../../Image/icons/industrial/rock.png'
import java from '../../Image/icons/java.png'
import cpp from '../../Image/icons/c.png'
import national from '../../Image/icons/national.png'
import vhdl from '../../Image/icons/vhdl.png'
import autocad from '../../Image/icons/industrial/autocad.png'
import adobe from '../../Image/icons/industrial/adobe.jpg'

const data = [
    {id: 0, logo: eagle, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 1, logo: nvidia, name : 'Nvidia', category: 0, info: 'Informacion'},
    {id: 2, logo: raspberry, name : 'Raspberry', category: 0, info: 'Informacion'},
    {id: 3, logo: proteus, name : 'Proteus', category: 0, info: 'Informacion'},
    {id: 4, logo: mplab, name : 'Mplab X', category: 0, info: 'Informacion'},
    {id: 5, logo: arduino, name : 'Arduino', category: 0, info: 'Informacion'},
    {id: 6, logo: atmel, name : 'Atmel', category: 0, info: 'Informacion'},
    {id: 7, logo: microchip, name : 'Microchip', category: 0, info: 'Informacion'},
    {id: 8, logo: mplabCode, name : 'Mplab Code', category: 0, info: 'Informacion'},
    {id: 9, logo: labview, name : 'LabVIEW', category: 0, info: 'Informacion'},
    {id: 10, logo: matlab, name : 'Matlab', category: 0, info: 'Informacion'},    
    {id: 24, logo: java, name : 'Matlab', category: 0, info: 'Informacion'},    
    {id: 25, logo: cpp, name : 'Matlab', category: 0, info: 'Informacion'},    
    {id: 27, logo: national, name : 'Matlab', category: 0, info: 'Informacion'},    
    {id: 28, logo: vhdl, name : 'Matlab', category: 0, info: 'Informacion'},    
    
]
const webtools = [
    {id: 11, logo: aws, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 12, logo: css, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 13, logo: flask, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 14, logo: html, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 15, logo: node, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 16, logo: react, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 17, logo: python, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 18, logo: next, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 19, logo: nginx, name : 'Eagle', category: 0, info: 'Informacion'},
]
const industrialtools = [
    {id: 20, logo: siemens, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 21, logo: rock, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 22, logo: solid, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 23, logo: fanuc, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 26, logo: autocad, name : 'Eagle', category: 0, info: 'Informacion'},
    {id: 29, logo: adobe, name : 'Eagle', category: 0, info: 'Informacion'},

]
const Resume = ({english}) => {
    const [icon, setIcon] = useState(null)
    const [selectedIcon, setSelectedIcon] = useState(null)
    const [eTools, showETools] = useState(false)
    const [wTools, showWTools] = useState(false)
    const [iTools, showITools] = useState(false)
    useEffect(() => {
        console.log('Icon: ', icon, 'Selected Icon: ', selectedIcon)
        if(icon != null){
            if(selectedIcon != icon && selectedIcon != null){
                const element = document.querySelector('#icon-' + selectedIcon)
                element.className = 'electronic-icon'
                const element2 = document.querySelector('#icon-' + icon)
                element2.className = 'icon-selected'
                setSelectedIcon(icon)
            }else{
                const element = document.querySelector('#icon-' + icon)
                console.log(element)
                element.className = 'icon-selected'
                setSelectedIcon(icon)
            }
        }
    }, [icon])
    return (
        <ResumeContainer id='resume'>
            <ResumeItem>
                <ResumeC1 bgLine={'green'}>
                    <ResumeH2 >{english?'EDUCATION':'EDUCACIÓN'}</ResumeH2>
                </ResumeC1>
                <EducationContainer>
                    <ResumeC2>
                        <ResumeTitle>Instituto Tecnológico de Toluca</ResumeTitle>
                        <ResumeSubtitle>{english? "Bachelor's Degree, Electronic Engineering • July 2018": "Licenciatura, Ingeniería Electrónica • Julio de 2018"}</ResumeSubtitle>
                        {/* <ResumeP>Descripcion de carrera</ResumeP> */}
                    </ResumeC2>
                    <ResumeC2>
                        <ResumeTitle>Instituto Nacional de Investigaciones Nucleares</ResumeTitle>
                        <ResumeSubtitle>{english? 'Scolarship • 2016':'Becario • 2016'}</ResumeSubtitle>
                        {/* <ResumeP>{english? '':''}Descripcion de carrera</ResumeP> */}
                    </ResumeC2>
                </EducationContainer>
            </ResumeItem>
            <ResumeItem>
                <ResumeC1 bgLine={'pink'}>
                    <ResumeH2>{english?'WORK':'TRABAJO'}</ResumeH2>
                </ResumeC1>
                <ResumeC2>
                    <ResumeTitle>Moldex y Exhibidores S.A de C.V</ResumeTitle>
                    <ResumeSubtitle>{english? 'Hardware Engineer • Current Job':'Ingeniero de Hardware • Trabajo actual'}</ResumeSubtitle>
                    <ResumeP></ResumeP>
                    <ResumeTitle>FCA Mexico</ResumeTitle>
                    <ResumeSubtitle>{english? 'Industrial Maintenance • 2017-2019':'Mantenimiento Industrial • 2017-2019'}</ResumeSubtitle>
                    <ResumeP></ResumeP>
                </ResumeC2>
            </ResumeItem>
            <ResumeItem>
                <ResumeC1 bgLine={'red'}>
                    <ResumeH2>{english?'SKILLS':'HABILIDADES'}</ResumeH2>
                </ResumeC1>
                <ResumeC2>
                    <div className='more-container'>
                        <ResumeTitle>{english? 'Electronic Design Tools':'Herramientas de Diseño Electrónico'}</ResumeTitle>
                        <div onClick={()=>showETools(!eTools)} className={'more-electronic-tools ' + (eTools ? 'more-electronic-tools-rotate':'')}><BsArrowBarRight/></div>
                    </div>
                    <ElectricIconsContainer showtools={eTools}>
                        {
                            data.map((item, index)=>(
                                <ElectronicIcon>
                                    <img onClick={()=>setIcon(item.id)} id={'icon-' + item.id} src={item.logo} className='electronic-icon '/>
                                </ElectronicIcon>
                            ))
                        }
                    </ElectricIconsContainer>
                    <div className='more-container'>
                        <ResumeTitle>{english? 'Web Development Tools':'Herramientas de Desarrollo Web'}</ResumeTitle>
                        <div onClick={()=>showWTools(!wTools)} className={'more-electronic-tools ' + (wTools ? 'more-electronic-tools-rotate':'')}><BsArrowBarRight/></div>
                    </div>
                    <ElectricIconsContainer showtools={wTools}>
                        {
                            webtools.map((item, index)=>(
                                <ElectronicIcon>
                                    <img onClick={()=>setIcon(item.id)} id={'icon-' + item.id} src={item.logo} className='electronic-icon '/>
                                </ElectronicIcon>
                            ))
                        }
                    </ElectricIconsContainer>
                    <div className='more-container'>
                        <ResumeTitle>{english? 'Industrial and Design Tools':'Herramientas de Industria y Diseño'}</ResumeTitle>
                        <div onClick={()=>showITools(!iTools)} className={'more-electronic-tools ' + (iTools ? 'more-electronic-tools-rotate':'')}><BsArrowBarRight/></div>
                    </div>
                    <ElectricIconsContainer showtools={iTools}>
                        {
                            industrialtools.map((item, index)=>(
                                <ElectronicIcon>
                                    <img onClick={()=>setIcon(item.id)} id={'icon-' + item.id} src={item.logo} className='electronic-icon '/>
                                </ElectronicIcon>
                            ))
                        }
                    </ElectricIconsContainer>
                    
                </ResumeC2>
            </ResumeItem>
        </ResumeContainer>
    )
}

export default Resume
