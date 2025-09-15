import { useState, useEffect, useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import texts from './text.js'

import unibologo from './assets/logos/unibologo.png'
import uplogo from './assets/logos/uplogo.png'
import urjclogo from './assets/logos/urjclogo.png'
import usclogo from './assets/logos/usclogo.png'
import react from './assets/languages/react.png'
import node from './assets/languages/node.png'
import mysql from './assets/languages/mysql.png'
import tailwind from './assets/languages/tailwind.png'
import python from './assets/languages/python.png'
import github from './assets/languages/github.png'


import unibologobn from './assets/logos/unibologobn.png'
import uplogobn from './assets/logos/uplogobn.png'
import urjclogobn from './assets/logos/urjclogobn.png'
import usclogobn from './assets/logos/usclogobn.png'
import reactbn from './assets/languages/reactlogobn.png'
import nodebn from './assets/languages/nodelogobn.png'
import mysqlbn from './assets/languages/mysqllogobn.png'
import tailwindbn from './assets/languages/tailwindlogobn.png'
import pythonbn from './assets/languages/pythonlogobn.png'
import githubbn from './assets/languages/github.png'

function App() {

  const [trueColors, setTrueColors]=useState(false)

  const [language,setLanguage]=useState('español')

  const handleLanguage=function(l){
        setLanguage(l)
  }

  const [text, setText]=useState(texts[language])


  


  const [showBars, setShowBars]=useState(false)
  const [showBody, setShowBody]=useState(false)

  let creditsPositionCoords=useRef(-400)
  let creditsPositionCoords2=useRef(-400-660)
  let creditsPositionCoords3=useRef(-400-660-660)

  let creditFilmCoords=useRef([0,300,600,900,1200,1500,1800,2100])
  

  const [creditsPosition, setCreditsPosition]=useState([
    `${creditsPositionCoords.current}px`,
  `${creditsPositionCoords2.current}px`,
`${creditsPositionCoords3.current}px`,
])

  const [filmPosition, setFilmPosition]=useState([
    `${creditFilmCoords.current[0]}px`,
  `${creditFilmCoords.current[1]}px`,
`${creditFilmCoords.current[2]}px`,
`${creditFilmCoords.current[3]}px`,
`${creditFilmCoords.current[4]}px`,
`${creditFilmCoords.current[5]}px`,
`${creditFilmCoords.current[6]}px`,
`${creditFilmCoords.current[7]}px`,
])

const [runFilm, setRunFilm]=useState(false)

const [showLanguages, setShowLanguages]=useState(false)

const languages=[react, node, mysql, tailwind, python, github]
const languagesbn=[reactbn, nodebn, mysqlbn, tailwindbn, pythonbn, githubbn]

const handleRunFilm=function(status){
  setRunFilm(status)
}
const handleShowLanguages=function(status){
  setShowLanguages(status)
}

let speed=useRef(0)

  const [unis,setUnis]=useState([

    {name:text.unis?.usc?.name,
      city:text.unis?.usc?.name,
      date:"2019-2024",
      title:text.unis?.usc?.title,
      skills:text.unis?.usc?.skills,
      image:"bg-[url(./assets/unis/uscfac.jpg)] bg-size-[740px] md:bg-size-[1100px] lg:bg-size-[800px]",
      imagebn:"bg-[url(./assets/unis/uscfacbn.jpg)] bg-size-[740px] md:bg-size-[1100px] lg:bg-size-[800px]",
      logo:usclogo,
      logobn:usclogobn
    
    },
    {name:text.unis?.upgrade?.name,
      city:text.unis?.upgrade?.city,
      date:"2024-2026",
      title:text.unis?.upgrade?.title,
      skills:text.unis?.upgrade?.skills,
      image:"bg-[url(./assets/unis/upgradehubgood.jpg)] bg-size-[1000px] lg:bg-size-[800px]",
      imagebn:"bg-[url(./assets/unis/upgradehubbn.jpg)] bg-size-[1000px] lg:bg-size-[800px]",
      logo:uplogo,
      logobn:uplogobn
    
    },
    {name:text.unis?.unibo?.name,
      city:text.unis?.unibo?.city,
      date:"2022",
      title:text.unis?.unibo?.title,
      skills:text.unis?.unibo?.skills,
      image:"bg-[url(./assets/unis/unibo.jpeg)] bg-size-[720px] md:bg-size-[1000px] lg:bg-size-[900px]",
      imagebn:"bg-[url(./assets/unis/unibobn.jpeg)] bg-size-[720px] md:bg-size-[1000px] lg:bg-size-[900px]",
      logo:unibologo,
      logobn:unibologobn
    
    },
    {name:text.unis?.urjc?.name,
      city:text.unis?.urjc?.city,
      date:"2024",
      title:text.unis?.urjc?.title,
      skills:text.unis?.urjc?.skills,
      image:"bg-[url(./assets/unis/urjc.jpg)] bg-size-[820px] md:bg-size-[1000px] lg:bg-size-[1300px]",
      imagebn:"bg-[url(./assets/unis/urjcbn.jpg)] bg-size-[820px] md:bg-size-[1000px] lg:bg-size-[1300px]",
      logo:urjclogo,
      logobn:urjclogobn
    
    }

  ])

  const [uni, setUni]=useState()

  const handleUnis=function(index){
    
    setUni(unis[index])
  }
  const [projects,setProjects]=useState([
    
    {name:text.projects?.gazeta?.name,
      description:text.projects?.gazeta?.description,
      date:"2025",
      link:"https://gazeta-chi.vercel.app/",
      skills:text.projects?.gazeta?.skills,
      image:"bg-[url(./assets/projects/gazeta.png)] bg-size-[690px] md:bg-size-[960px] lg:bg-size-[1100px]"    ,
      imagebn:"bg-[url(./assets/projects/gazetabn.png)] bg-size-[690px] md:bg-size-[960px] lg:bg-size-[1100px]"    
    },

    {name:text.projects?.terrana?.name,
      description:text.projects?.terrana?.name,
      date:"2025",
      link:"https://terrana-ecommerce-lavazza-clone.vercel.app/",
      skills:text.projects?.terrana?.skills,
      image:"bg-[url(./assets/projects/terrana.png)] bg-size-[750px] md:bg-size-[980px] lg:bg-size-[830px]" ,   
      imagebn:"bg-[url(./assets/projects/terranabn.png)] bg-size-[750px] md:bg-size-[980px] lg:bg-size-[830px]"    
    },
    {name:text.projects?.traductor?.name,
      description:text.projects?.traductor?.description,
      date:"2025",
      link:"https://translator-app-amber-nu.vercel.app/",
      skills:text.projects?.traductor?.skills,
      image:"bg-[url(./assets/projects/traductor.png)] bg-size-[740px] md:bg-size-[980px] lg:bg-size-[760px]"  ,  
      imagebn:"bg-[url(./assets/projects/traductorbn.png)] bg-size-[740px] md:bg-size-[980px] lg:bg-size-[760px]"    
    }

  ])

  

  const [project, setProject]=useState()

  const handleProjects=function(index){
    
    setProject(projects[index])
  }

  const [experiences,setExperiences]=useState([
  {
    company: "Ecoembes",
    year: "2025",
    role: text.experiences?.ecoembes?.role,
    location: "Madrid",
    image:"bg-[url(./assets/experience/ecoembes.jpg)] bg-center bg-no-repeat bg-size-[800px] sm:bg-size-[800px] md:bg-size-[1000px] lg:bg-size-[1400px]",
    imagebn:"bg-[url(./assets/experience/ecoembesbn.jpg)] bg-center bg-no-repeat bg-size-[800px] sm:bg-size-[800px] md:bg-size-[1000px] lg:bg-size-[1400px]",
    skills: text.experiences?.ecoembes?.skills
  },
  {
    company: "Kultur&Art",
    year: "2024",
    role: text.experiences?.kultur?.role,
    location: "Detmold, Alemania",
    image:"bg-[url(./assets/experience/isff.jpg)] bg-size-[700px] sm:bg-size-[1000px] md:bg-size-[1100px] lg:bg-size-[1400px] bg-center bg-no-repeat",
    imagebn:"bg-[url(./assets/experience/isffbn.jpg)] bg-size-[700px] sm:bg-size-[1000px] md:bg-size-[1100px] lg:bg-size-[1400px] bg-top bg-no-repeat",
    skills: text.experiences?.kultur?.skills
  },
  {
    company: "La Voz de Galicia",
    year: "2023",
    role: text.experiences?.voz?.role,
    location: "Vigo",
    image:"bg-[url(./assets/experience/voz.png)] bg-center bg-size-[480px] sm:bg-size-[480px] bg-no-repeat md:bg-size-[650px] lg:bg-size-[600px] bg-top",
    imagebn:"bg-[url(./assets/experience/vozbn.png)] bg-center bg-size-[480px] sm:bg-size-[480px] bg-no-repeat md:bg-size-[650px] lg:bg-size-[600px] bg-top",
    skills: text.experiences?.voz?.skills
  }
])


  const [experience, setExperience]=useState()

  const handleExperience=function(index){
    setExperience(experiences[index])
  }


  const [quiz, setQuiz]=useState(['','','',''])
  const [correctQuiz, setCorrectQuiz]=useState(false)
  const [goUp, setGoUp]=useState(false)
  
  const handleGoUp=function(){
    
      setGoUp(true)
    
   
  }

  useEffect(()=>{
    if(!goUp) return 
   
      window.scrollTo(0,0)
   

    
  },[goUp])

  const handleQuiz=function(arr){

    if(arr.some((r)=>{

      let numbers='0123456789'
      return !numbers.includes(r)
    })){return }

    if(quiz[0]=="1" && quiz[1]=="9" && quiz[2]=="3" && quiz[3]=="2"){return}
    if(arr[0]=="1" && arr[1]=="9" && arr[2]=="3" && arr[3]=="2"){ 
      document.activeElement.blur()
      setQuiz([arr[0], arr[1], arr[2], arr[3]])
      setCorrectQuiz(true)

      setTimeout(()=>{

        setTrueColors(true)
        setShowBars(false)
      },1500)
      setTimeout(()=>{

          handleGoUp()
          
      },6000)
      return}

      

      setQuiz([arr[0], arr[1], arr[2], arr[3]])

  }

  useEffect(
  ()=>{
    
    setText(texts[language])
   
   
  },[language]
)

useEffect(()=>{
  
 setProjects([
    
    {name:text.projects?.gazeta?.name,
      description:text.projects?.gazeta?.description,
      date:"2025",
      link:"https://gazeta-chi.vercel.app/",
      skills:text.projects?.gazeta?.skills,
      image:"bg-[url(./assets/projects/gazeta.png)] bg-size-[690px] md:bg-size-[960px] lg:bg-size-[1100px]"    ,
      imagebn:"bg-[url(./assets/projects/gazetabn.png)] bg-size-[690px] md:bg-size-[960px] lg:bg-size-[1100px]"    
    },

    {name:text.projects?.terrana?.name,
      description:text.projects?.terrana?.name,
      date:"2025",
      link:"https://terrana-ecommerce-lavazza-clone.vercel.app/",
      skills:text.projects?.terrana?.skills,
      image:"bg-[url(./assets/projects/terrana.png)] bg-size-[750px] md:bg-size-[980px] lg:bg-size-[830px]" ,   
      imagebn:"bg-[url(./assets/projects/terranabn.png)] bg-size-[750px] md:bg-size-[980px] lg:bg-size-[830px]"    
    },
    {name:text.projects?.traductor?.name,
      description:text.projects?.traductor?.description,
      date:"2025",
      link:"https://translator-app-amber-nu.vercel.app/",
      skills:text.projects?.traductor?.skills,
      image:"bg-[url(./assets/projects/traductor.png)] bg-size-[740px] md:bg-size-[980px] lg:bg-size-[760px]"  ,  
      imagebn:"bg-[url(./assets/projects/traductorbn.png)] bg-size-[740px] md:bg-size-[980px] lg:bg-size-[760px]"    
    }

  ])
    setExperiences([
  {
    company: "Ecoembes",
    year: "2025",
    role: text.experiences?.ecoembes?.role,
    location: "Madrid",
    image:"bg-[url(./assets/experience/ecoembes.jpg)] bg-center bg-no-repeat bg-size-[800px] sm:bg-size-[800px] md:bg-size-[1000px] lg:bg-size-[1400px]",
    imagebn:"bg-[url(./assets/experience/ecoembesbn.jpg)] bg-center bg-no-repeat bg-size-[800px] sm:bg-size-[800px] md:bg-size-[1000px] lg:bg-size-[1400px]",
    skills: text.experiences?.ecoembes?.skills
  },
  {
    company: "Kultur&Art",
    year: "2024",
    role: text.experiences?.kultur?.role,
    location: "Detmold, Alemania",
    image:"bg-[url(./assets/experience/isff.jpg)] bg-size-[700px] sm:bg-size-[1000px] md:bg-size-[1100px] lg:bg-size-[1400px] bg-center bg-no-repeat",
    imagebn:"bg-[url(./assets/experience/isffbn.jpg)] bg-size-[700px] sm:bg-size-[1000px] md:bg-size-[1100px] lg:bg-size-[1400px] bg-top bg-no-repeat",
    skills: text.experiences?.kultur?.skills
  },
  {
    company: "La Voz de Galicia",
    year: "2023",
    role: text.experiences?.voz?.role,
    location: "Vigo",
    image:"bg-[url(./assets/experience/voz.png)] bg-center bg-size-[480px] sm:bg-size-[480px] bg-no-repeat md:bg-size-[650px] lg:bg-size-[600px] bg-top",
    imagebn:"bg-[url(./assets/experience/vozbn.png)] bg-center bg-size-[480px] sm:bg-size-[480px] bg-no-repeat md:bg-size-[650px] lg:bg-size-[600px] bg-top",
    skills: text.experiences?.voz?.skills
  }
])

    setUnis([

    {name:text.unis?.usc?.name,
      city:text.unis?.usc?.name,
      date:"2019-2024",
      title:text.unis?.usc?.title,
      skills:text.unis?.usc?.skills,
      image:"bg-[url(./assets/unis/uscfac.jpg)] bg-size-[740px] md:bg-size-[1100px] lg:bg-size-[800px]",
      imagebn:"bg-[url(./assets/unis/uscfacbn.jpg)] bg-size-[740px] md:bg-size-[1100px] lg:bg-size-[800px]",
      logo:usclogo,
      logobn:usclogobn
    
    },
    {name:text.unis?.upgrade?.name,
      city:text.unis?.upgrade?.city,
      date:"2024-2026",
      title:text.unis?.upgrade?.title,
      skills:text.unis?.upgrade?.skills,
      image:"bg-[url(./assets/unis/upgradehubgood.jpg)] bg-size-[1000px] lg:bg-size-[800px]",
      imagebn:"bg-[url(./assets/unis/upgradehubbn.jpg)] bg-size-[1000px] lg:bg-size-[800px]",
      logo:uplogo,
      logobn:uplogobn
    
    },
    {name:text.unis?.unibo?.name,
      city:text.unis?.unibo?.city,
      date:"2022",
      title:text.unis?.unibo?.title,
      skills:text.unis?.unibo?.skills,
      image:"bg-[url(./assets/unis/unibo.jpeg)] bg-size-[720px] md:bg-size-[1000px] lg:bg-size-[900px]",
      imagebn:"bg-[url(./assets/unis/unibobn.jpeg)] bg-size-[720px] md:bg-size-[1000px] lg:bg-size-[900px]",
      logo:unibologo,
      logobn:unibologobn
    
    },
    {name:text.unis?.urjc?.name,
      city:text.unis?.urjc?.city,
      date:"2024",
      title:text.unis?.urjc?.title,
      skills:text.unis?.urjc?.skills,
      image:"bg-[url(./assets/unis/urjc.jpg)] bg-size-[820px] md:bg-size-[1000px] lg:bg-size-[1300px]",
      imagebn:"bg-[url(./assets/unis/urjcbn.jpg)] bg-size-[820px] md:bg-size-[1000px] lg:bg-size-[1300px]",
      logo:urjclogo,
      logobn:urjclogobn
    
    }
  ])

 
    
    
},[text])

useEffect(()=>{

handleUnis(0)
handleProjects(0)
handleExperience(0)

},[unis, projects, experiences])

useEffect(()=>{

  if(showBody){
  setTimeout(()=>{
    setCreditsPosition([
    `${creditsPositionCoords.current}px`,
  `${(creditsPositionCoords2.current)}px`,
`${(creditsPositionCoords3.current)}px`])

    creditsPositionCoords.current>660?creditsPositionCoords.current=-660:creditsPositionCoords.current++
    creditsPositionCoords2.current>660?creditsPositionCoords2.current=-660:creditsPositionCoords2.current++
    creditsPositionCoords3.current>660?creditsPositionCoords3.current=-660:creditsPositionCoords3.current++
  },5)
}


  



},[creditsPosition, showBody])
  

useEffect(()=>{

  
  if(runFilm){
    setShowLanguages(true)
   

    setTimeout(()=>{

      handleRunFilm(false)
    },10000)

   
  }


}, [runFilm])

useEffect(()=>{
  let filmInterval;
  
  if(!runFilm) return

      filmInterval=setInterval(()=>{
       
        setFilmPosition([
          `${creditFilmCoords.current[0]}px`,
          `${(creditFilmCoords.current[1])}px`,
          `${(creditFilmCoords.current[2])}px`,
          `${(creditFilmCoords.current[3])}px`,
          `${(creditFilmCoords.current[4])}px`,
          `${(creditFilmCoords.current[5])}px`,
          `${(creditFilmCoords.current[6])}px`,
          `${(creditFilmCoords.current[7])}px`,
        ])
        
        creditFilmCoords.current=creditFilmCoords.current.map((m)=>{
          return   m<=-260?1800+(m%260):m-40
          
        })
        
      },30)
      
      return ()=>{clearInterval(filmInterval)}
    },[runFilm])
   
   

  const handleShowBars=function(state){
    setShowBars(state)
  }
  const handleBody=function(state){
    setShowBody(state)
  }

  useEffect(()=>{
  
    handleShowBars(true)
    

  },[])

  useEffect(()=>{
  
    if(showBars){
      setTimeout(()=>{
      handleBody(true)
    }, 5000)
    }
    

  },[showBars])


  return <section    className={`w-full  `}>

  <div  className={`${trueColors?'':'hidden'} bg-gradient-to-b from-green-950 to-green-100 transition-all ease-in-out duration-[8s] w-full absolute z-30 top-0 pb-10 ${trueColors?'h-30':'h-0'} flex flex-row items-center justify-center gap-10`}>
    <i className='fa-solid fa-phone text-white text-xl sm:text-4xl'></i>
    <p className='text-white font-extrabold tracking-widest text-xl sm:text-4xl'>+34 671 96 64 66</p>
  </div>
  <div className={`bg-black transition-all ease-in-out duration-[5s] w-full sticky z-30 top-0  ${showBars?'h-20':'h-0'}`}></div>

  <div id='start'  className={`w-full  transition-all ease-in-out duration-[5s] overflow-y-hidden scroll-smooth  h-165 ${showBody?'':'max-h-130'} ${showBars?'bg-stone-200 h-auto min-h-165 pb-20 ':'bg-green-100 h-165'} ${(!showBars && showBody?'!h-auto pb-20':'')}`}>

{/*lo mantenemos en opacity-0 hasta que se llegue a ese scroll*/}
    <div   className={`${showBody?'h-165 opacity-100':'h-0 opacity-0'} font-['Kings']   relative overflow-y-hidden`}>

  {creditsPosition && creditsPosition.map((c)=>{

    return  <div  style={{bottom:c}} className={`w-full h-165 absolute flex flex-col gap-10 items-center  justify-center `}>
          <h2 className={` ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150  w-4/5 text-center font-extrabold text-4xl sm:text-4xl md:text-4xl lg:text-8xl tracking-widest`}>{text?.body?.credits?.title}</h2>
          <h2 className={` ${trueColors?'text-green-700':'text-stone-950'} transition-colors duration-300 w-3/5 text-center font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-widest`}>Vigo, 2001</h2>
          <h2 className={`${trueColors?'text-green-800':'text-stone-950'} transition-colors duration-100 w-4/5 md:w-3/5 text-center font-bold text-2xl sm:text-2xl md:text-2xl lg:text-4xl`}>{text?.body?.credits?.subtitle}</h2>
        </div>
  })}
        
    </div>

    <div className={`${showBody?'h-auto opacity-100':'h-0 opacity-0'}  overflow-hidden  w-full flex flex-row flex-wrap pt-35  justify-center h-150 relative`}>
      <div className={`absolute h-30 lg:h-150 w-full flex flex-row justify-between top-133 lg:top-60 px-10 lg:px-0 lg:flex-col lg:items-center gap-2  lg:gap-8 lg:justify-start pt-15 lg:pt-25 `}>
      {unis && unis.map((u, index)=>{
      
       return  <div onClick={()=>{
       handleUnis(index)
       }} className={`w-20 cursor-pointer h-20 rounded-full border-2 border-white object-cover flex items-center bg-white p-2`}>
        <img  src={trueColors?u.logo:u.logobn} alt="" />
        </div>
      
      })}

      </div>
      <div className={` ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-700 w-full mb-5 flex flex-row justify-start pl-5 gap-5 `}>
        <label className='font-[Saira] sm:text-xl text-lg' htmlFor="language">{text?.body?.selector?.title}</label>
        <select onChange={(e)=>{
          handleLanguage(e.target.value)
        }} className='font-[Saira] font-extrabold' name="language" id="language">
          <option value="español">{text?.body?.selector?.spanish}</option>
          <option value="gallego">{text?.body?.selector?.galician}</option>
          <option value="ingles">{text?.body?.selector?.english}</option>
          <option value="italiano">{text?.body?.selector?.italian}</option>
          <option value="frances">{text?.body?.selector?.french}</option>
          <option value="aleman">{text?.body?.selector?.german}</option>
          </select> </div>
      <h1 className={` ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-700 w-full mb-5 font-extrabold text-5xl text-center pb-5 `}>{text?.body?.formacion?.title}</h1>
      <div className={`w-full  lg:w-1/2 h-90 lg:h-150 bg-stone-400  bg-blend-multiply  bg-center  bg-no-repeat ${trueColors?uni?.image:uni?.imagebn}`}></div>
      <div className={`w-full lg:w-1/2 h-auto lg:h-150   flex flex-col p-15  items-center px-15 lg:px-10 lg:pl-20 gap-5  lg:items-start lg:justify-start`}>

      <h1 className={`font-[Saira] text-center lg:text-start font-extrabold tracking-widest ${trueColors?'text-green-800':'text-stone-800'} transition-colors duration-300 text-3xl `}>{uni?.name}</h1>
      <h1 className={`font-[Saira] text-center lg:text-start font-normal tracking-widest ${trueColors?'text-green-600':'text-stone-700'} transition-colors duration-150 text-md `}>{uni?.city} | {uni?.date}</h1>
      <h3 className={`font-[Saira] text-center lg:text-start font-normal tracking-widest ${trueColors?'text-green-700':'text-stone-600'} transition-colors duration-150 text-md `}>{uni?.title}</h3>
      <ul className={`pl-0 lg:pl-10 mt-8`}>

        {uni?.skills && uni.skills.map((s)=>{

        return   <li className={`font-[Saira] text-center lg:text-start font-bold text-lg text-black tracking-wide mb-3 `}> <i class={`fa-solid ${trueColors?'text-green-500':'text-stone-400'} transition-colors duration-[6s] fa-circle-check`}></i>{'   ' +s}</li>
           
        })}
      </ul>
      </div>
    </div>
    <div className={`${showBody?'h-auto opacity-100 mb-15':'h-0 opacity-0'}  overflow-hidden  w-full flex flex-row flex-wrap pt-35  justify-center h-150 relative`}>
      <div className={`absolute h-30 lg:h-150 w-full flex flex-row justify-between top-123 lg:top-60 px-10 lg:px-0 lg:flex-col lg:items-center  lg:gap-8 lg:justify-start pt-15 lg:pt-25 `}>
      {projects && projects.map((p, index)=>{
      
       return  <div onClick={()=>{
       handleProjects(index)
       }} className={`w-20 cursor-pointer h-20 rounded-full border-2 border-white object-cover flex justify-center items-center bg-white p-2`}>
          <p className={`font-[Saira] w-full text-center text-stone-800 font-extrabold text-2xl`}>{index+1}</p>
        </div>
      
      })}


      </div>
      <h1 className={`${trueColors?'text-green-500':'text-stone-950'} transition-colors duration-[15s] w-full mb-5 font-extrabold text-4xl sm:text-5xl text-center pb-5 `}>{text?.body?.projects?.title}</h1>
              <div className={`w-full lg:hidden inline-block  lg:w-1/2 h-90 lg:h-150 bg-stone-400  bg-blend-multiply  bg-center  bg-no-repeat ${trueColors?project?.image:project?.imagebn}`}></div>
      <div className={`w-full lg:w-1/2 h-auto lg:h-150   flex flex-col p-15  items-center px-15 lg:px-10 lg:pl-20 gap-5  lg:items-start lg:justify-start`}>

      <h1 className={` font-[Saira] text-center lg:text-start font-extrabold tracking-widest ${trueColors?'text-green-600':'text-stone-700'} transition-colors duration-[8s] text-3xl `}>{project?.name}</h1>
      <h1 className={`font-[Saira] text-center lg:text-start font-normal tracking-widest ${trueColors?'text-green-800':'text-stone-600'} transition-colors duration-150 text-md `}>{project?.date}</h1>
      <a href={project?.link} className={`font-[Saira] text-center lg:text-start font-normal tracking-widest ${trueColors?'text-green-800':'text-stone-600'} transition-colors duration-[7s] text-md `}>{text?.body?.projects?.link}

      </a>
      <h3 className={`font-[Saira] text-center lg:text-start font-normal tracking-widest ${trueColors?'text-green-800':'text-stone-600'} transition-colors duration-1000 text-md `}>{project?.description}</h3>
      <ul className={`pl-0 lg:pl-10 mt-8`}>

        {project?.skills && project.skills.map((s)=>{
          
          return   <li className={`font-[Saira] text-center lg:text-start font-bold text-md ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-1000 tracking-wide mb-3 `}> <i class={`fa-solid ${trueColors?'text-green-500':'text-stone-700'} transition-colors duration-150 fa-circle-check`}></i>{'   ' +s}</li>
          
        })}
      </ul>
      </div>
        <div className={`w-full hidden lg:inline-block  lg:w-1/2 h-90 lg:h-150 bg-stone-400  bg-blend-multiply  bg-center  bg-no-repeat ${trueColors?project?.image:project?.imagebn}`}></div>
    </div>
 {/*    <div className={`${showBody?'h-100 opacity-100' :'h-0 opacity-0'} transition-all ease-in-out duration-[1s] `}>hola</div>
    <div className={`${showBody?'h-100 opacity-100':'h-0 opacity-0'} transition-all ease-in-out duration-[1s] `}>hola</div>
    <div className={`${showBody?'h-100 opacity-100':'h-0 opacity-0'} transition-all ease-in-out duration-[1s] `}>hola</div>
    <div className={`${showBody?'h-100 opacity-100':'h-0 opacity-0'} transition-all ease-in-out duration-[1s] `}>hola</div>
    <div className={`${showBody?'h-100 opacity-100':'h-0 opacity-0'} transition-all ease-in-out duration-[1s] `}>hola</div>
    <div className={`${showBody?'h-100 opacity-100':'h-0 opacity-0'} transition-all ease-in-out duration-[1s] `}>hola</div> */}

      <div className={`${showBody?'h-auto opacity-100 ':'h-0 opacity-0'}  overflow-hidden  w-full flex flex-row flex-wrap pt-35  justify-center h-150 relative`}>

        <section  className={`w-[1900px] ${trueColors?'bg-amber-950 ':'bg-stone-950'} transition-colors duration-[10s] h-60 m-auto relative pt-8`}>
          <div className={`absolute top-3 border-t-8 border-dashed border-white w-full h-5`}></div>
          <div className={`absolute bottom-3 border-b-8 border-dashed border-white w-full h-5`}></div>
          <article className={`h-44 cursor-pointer  w-[1900px] relative `}>
            <div style={{left:filmPosition[0]}} className={` bg-stone-300 bg-blend-multiply rounded-lg h-44 w-60 ${trueColors?'bg-[url(./assets/filmstrip/davi1.jpeg)]':'bg-[url(./assets/filmstrip/davi1bn.jpeg)]'}  bg-cover bg-bottom top-0`}></div>
            <div style={{left:filmPosition[1]}} className={`bg-stone-300 bg-blend-multiply ${trueColors?'bg-[url(./assets/filmstrip/davi2.jpeg)]':'bg-[url(./assets/filmstrip/davi2bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute`}></div>
            <div style={{left:filmPosition[2]}} className={`bg-stone-300 bg-blend-multiply ${trueColors?'bg-[url(./assets/filmstrip/davi3.jpeg)]':'bg-[url(./assets/filmstrip/davi3bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute`}></div>
            <div style={{left:filmPosition[3]}} className={`bg-stone-300 bg-blend-multiply  ${trueColors?'bg-[url(./assets/filmstrip/davi1.jpeg)]':'bg-[url(./assets/filmstrip/davi1bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute `}></div>
            <div style={{left:filmPosition[4]}} className={`bg-stone-300 bg-blend-multiply  ${trueColors?'bg-[url(./assets/filmstrip/davi2.jpeg)]':'bg-[url(./assets/filmstrip/davi2bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute`}></div>
            <div style={{left:filmPosition[5]}} className={`bg-stone-300 bg-blend-multiply  ${trueColors?'bg-[url(./assets/filmstrip/davi3.jpeg)]':'bg-[url(./assets/filmstrip/davi3bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute`}></div>
            <div style={{left:filmPosition[6]}} className={`bg-stone-300 bg-blend-multiply ${trueColors?'bg-[url(./assets/filmstrip/davi1.jpeg)]':'bg-[url(./assets/filmstrip/davi1bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute`}></div>
            <div style={{left:filmPosition[7]}} className={`bg-stone-300 bg-blend-multiply  ${trueColors?'bg-[url(./assets/filmstrip/davi2.jpeg)]':'bg-[url(./assets/filmstrip/davi2bn.jpeg)]'} bg-cover bg-bottom rounded-lg h-44 w-60 top-0 absolute `}></div>
          </article>
        </section>

        </div>
      <div className={`${showBody?'h-auto opacity-100 mb-15':'h-0 opacity-0'}  overflow-hidden  w-full flex flex-row flex-wrap pt-5  justify-center h-150 relative`}>

        <section onClick={()=>{
            handleRunFilm(true)
          }}  className={`w-full ${trueColors?'bg-amber-950':'bg-stone-950'} cursor-pointer transition-colors duration-[15s] h-60 m-auto relative pt-8`}>
          <div className={`absolute top-3 border-t-8 border-dashed border-white w-full h-5`}></div>
          <div className={`absolute bottom-3  border-b-8 border-dashed border-white w-full h-5`}></div>
          <article className={`h-44   py-3 lg:py-0 w-full  px-5 flex gap-10 flex-wrap justify-center lg:gap-0 lg:flex lg:flex-row lg:items-center lg:justify-between relative `}>
            <div className={` ${runFilm?'!hidden':'flex'} z-0 absolute  w-full h-full  flex-row items-center justify-center`}> 
              <i className={`${showLanguages?'!hidden':'flex'} fa-solid fa-hand-pointer text-4xl sm:text-6xl text-white`}></i>
            </div>
           {(trueColors && languages) && languages.map((l)=>{

            return <div className=' relative min-w-15 max-h-15 sm:max-h-30 md:w-20 md:h-20 lg:w-30 lg:h-30'>
            <div className={`absolute left-0 transition-all duration-[5s] ease-in-out ${showLanguages?'opacity-100 translation-x-5 md:translation-x-7 lg:translate-x-10':'opacity-0 -translate-x-44 lg:-translate-x-20'} lg:top-5  object-contain w-12 h-12 md:w-15 md:h-15  lg:w-20 lg:h-20`}>
            <img className='object-contain' src={l} alt="" /></div>
            </div>
           })}
           {(!trueColors && languagesbn) && languagesbn.map((l)=>{

            return <div className=' relative min-w-15 max-h-15 sm:max-h-30 md:w-20 md:h-20 lg:w-30 lg:h-30'>
            <div className={`absolute left-0 transition-all duration-[5s] ease-in-out ${showLanguages?'opacity-100 translation-x-5 md:translation-x-7 lg:translate-x-10':'opacity-0 -translate-x-44 lg:-translate-x-20'} lg:top-5  object-contain w-12 h-12 md:w-15 md:h-15  lg:w-20 lg:h-20`}>
            <img className='object-contain brightness-150 ' src={l} alt="" /></div>
            </div>
           })}
          
          </article>
        </section>

        </div>

   <h1 className={`${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 w-full mb-5 font-extrabold text-4xl sm:text-5xl text-center pb-5 `}>{text?.body?.experience?.title}</h1>

      <div className={`${showBody?'h-auto opacity-100 mb-15':'h-0 opacity-0'}  overflow-hidden  w-full flex flex-row flex-wrap pt-5  justify-center h-150 relative`}>

        <section className={`h-80 w-full ${trueColors?experience?.image:experience?.imagebn}`}></section>
        <div className={` w-full h-auto pb-25 pt-15 ${trueColors?'bg-gradient-to-b from-green-900 to-green-100':' bg-gradient-to-b from-stone-800 to-stone-200'} `}>
  
          <div className='relative m-auto w-70 h-20'>
            <div className={`rounded-full w-70 h-70 -translate-y-50 ${trueColors?'bg-green-900':'bg-green-50'} transition-colors duration-150  flex flex-col items-center justify-center`}>
              <div onClick={()=>{
                handleExperience(2)
              }} className='flex cursor-pointer   items-center w-full h-1/3'>
              <p className={`w-full  text-3xl text-center `}><i className={`${(!trueColors && experience?.company=='La Voz de Galicia')?'!text-stone-900':''} ${(trueColors && experience?.company=='La Voz de Galicia')?'!text-green-400':''}  ${trueColors?'text-stone-50 hover:text-green-300':'text-stone-600 hover:text-stone-800'} transition-colors duration-150 fa-solid fa-pen-nib`}></i></p>
              </div>
              <div onClick={()=>{
                handleExperience(1)
              }}  className='flex cursor-pointer  items-center w-full h-1/3'>
              <p className={`w-full cursor-pointer text-3xl text-center `}><i class={`${(!trueColors && experience?.company=='Kultur&Art')?'!text-stone-900':''} ${(trueColors && experience?.company=='Kultur&Art')?'!text-green-400':''}  ${trueColors?'text-stone-50 hover:text-green-300':'text-stone-600 hover:text-stone-800'}  fa-solid fa-hashtag`}></i></p>
              </div>
              <div onClick={()=>{
                handleExperience(0)
              }}  className='flex cursor-pointer   items-center w-full h-1/3'>
              <p className={`w-full cursor-pointer text-3xl text-center `}><i class= {`${(!trueColors && experience?.company=='Ecoembes')?'!text-stone-900':''}  ${(trueColors && experience?.company=='Ecoembes')?'!text-green-400':''}  ${trueColors?'text-stone-50 hover:text-green-300':'text-stone-600 hover:text-stone-800'}  fa-solid  fa-leaf`}></i></p>
              </div>

              
            </div>
          </div>
          <div className='h-auto px-10 flex flex-col items-center justify-center gap-5 py-5'>
            <h1 className={`w-full text-center text-4xl font-[Saira] font-extrabold tracking-widest ${trueColors?'text-green-100':'text-stone-100'} transition-colors duration-[20s]  `}>{experience?.company}</h1>
            <h1 className={`text-xl font-thin tracking-widest ${trueColors?'text-green-200':'text-stone-200'} transition-colors duration-150 `}>{experience?.year}</h1>
            {experience && experience.skills.map((s)=>{
              return <h4 className={`w-full ${trueColors?'text-green-50':'text-stone-50'} transition-colors duration-150  text-center font-[Saira] text-lg font-semibold sm:text-xl text-md `}><i className={`fa-solid ${trueColors?'text-green-900':'text-stone-200'} transition-colors duration-150  fa-check`}></i>{'    '+s}</h4>
            })}
          </div>
        </div>
           
        
      </div>

      <div className={`${showBody?'h-auto opacity-100 mb-15':'h-0 opacity-0'}  overflow-hidden  w-full pt-5  relative`}>

        <section className={`grid grid-cols-3 w-full px-5 gap-5 `}>
              <article className={` col-span-3 lg:col-span-1 flex flex-col justify-start items-center`}>
                <div className={`p-5 w-full ${trueColors?'bg-green-700':'bg-stone-700'} transition-colors duration-150 `}>
                  <h1 className={`w-full text-center text-xl sm:text-2xl lg:text-4xl font-extrabold text-white font-[Saira] tracking-widest`}>{text?.body?.about?.languages?.title}</h1>
                </div>
                <div className={`p-5 w-full ${trueColors?'bg-green-300':'bg-stone-300'} transition-colors duration-150 flex flex-col items-center `}>
                  <h2 className={`w-auto text-center text-lg sm:text-xl lg:text-2xl mb-2 font-bold  transition-colors duration-150 font-[Saira] `}>
                    <span className={`${trueColors?'text-red-500':'text-stone-950'}`}>{text?.body?.about?.languages?.spanish}</span>
                    <span className={`${trueColors?'text-amber-500':'text-stone-950'}`}> ||| </span>
                    <span className={`${trueColors?'text-red-500':'text-stone-950'}`}>{text?.body?.about?.languages?.natif}</span>
                    
                    </h2>
                  <h2 className={`w-auto text-center text-lg sm:text-xl lg:text-2xl mb-4 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>
                           <span className={`${trueColors?'text-blue-500':'text-stone-950'}`}>{text?.body?.about?.languages?.galician}</span>
                    <span className={`${trueColors?'text-white':'text-stone-950'}`}> ||| </span>
                    <span className={`${trueColors?'text-blue-500':'text-stone-950'}`}>{text?.body?.about?.languages?.natif}</span>
                  </h2>
                  <h2 className={`w-auto text-center text-lg sm:text-xl lg:text-2xl mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>
                           <span className={`${trueColors?'text-red-500':'text-stone-950'}`}>{text?.body?.about?.languages?.english}</span>
                    <span className={`${trueColors?'text-blue-800':'text-stone-950'}`}> ||| </span>
                    <span className={`${trueColors?'text-stone-100':'text-stone-950'}`}>C1 (FCE)</span>
                  </h2>
                  <h2 className={`w-auto text-center text-lg sm:text-xl lg:text-2xl mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>
                           <span className={`${trueColors?'text-green-600':'text-stone-950'}`}>{text?.body?.about?.languages?.italian}</span>
                    <span className={`${trueColors?'text-white':'text-stone-950'}`}> ||| </span>
                    <span className={`${trueColors?'text-red-500':'text-stone-950'}`}>C1 (PLIDA)</span>
                  </h2>
                  <h2 className={`w-auto text-center text-lg sm:text-xl lg:text-2xl mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>
                           <span className={`${trueColors?'text-blue-600':'text-stone-950'}`}>{text?.body?.about?.languages?.french}</span>
                    <span className={`${trueColors?'text-white':'text-stone-950'}`}> ||| </span>
                    <span className={`${trueColors?'text-red-500':'text-stone-950'}`}>B1 (DELF)</span>
                  </h2>
                </div>
              </article>
              <article className={` col-span-3 lg:col-span-1 flex flex-col justify-start items-center`}>
                <div className={`p-5 w-full ${trueColors?'bg-green-700':'bg-stone-700'} transition-colors duration-150 `}>
                  <h1 className={`w-full text-center text-xl sm:text-2xl lg:text-4xl font-extrabold text-white font-[Saira] tracking-widest`}>{text?.body?.about?.contact?.title}</h1>
                </div>
                <div className={`p-5 w-full h-full ${trueColors?'bg-green-300':'bg-stone-300'} transition-colors duration-150  flex flex-col items-center gap-2`}>
                  <h2 className={`w-full text-center text-lg sm:text-xl lg:text-lg mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>davisanchezvigo@gmail.com</h2>
                  <a href='https://github.com/davi0217' className={`w-full text-center text-lg sm:text-lg lg:text-lg mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>Github</a>
                  <a href='https://es.linkedin.com/in/davidsanrod1420' className={`w-full text-center text-lg sm:text-xl lg:text-lg mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>LinkedIn</a>
                 
                </div>
              </article>
              <article className={` col-span-3  lg:col-span-1 flex flex-col justify-start items-center`}>
                <div className={`p-5 w-full  ${trueColors?'bg-green-700':'bg-stone-700'} transition-colors duration-150 `}>
                  <h1 className={`w-full text-center text-xl sm:text-2xl lg:text-4xl font-extrabold text-white font-[Saira] tracking-widest`}>{text?.body?.about?.more?.title}</h1>
                </div>
                <div className={`p-5 w-full h-full ${trueColors?'bg-green-300':'bg-stone-300'} transition-colors duration-150 `}>
                  <h2 className={`w-full text-center text-lg sm:text-xl lg:text-2xl mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150  font-[Saira] `}>{text?.body?.about?.more?.subtitle}</h2>
                  <h2 className={`w-full text-center text-lg sm:text-xl lg:text-2xl mb-2 font-bold ${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150 font-[Saira] `}>{text?.body?.about?.more?.subtitle2}</h2>
                </div>
              </article>



        </section>



      </div>
      <h1 className={`${trueColors?'text-green-900':'text-stone-950'} transition-colors duration-150  w-full px-3 mb-5 font-extrabold text-xl sm:text-4xl text-center pb-5 `}>{text?.body?.greetings?.title}</h1>
      <h2 className={` w-full px-3  ${trueColors?'text-green-900':'text-stone-700'} transition-colors duration-150  font-normal text-xl sm:text-2xl text-center pb-5 mb-10 tracking-widest `}>{text?.body?.greetings?.subtitle}</h2>
      <h2 className={` w-full px-3  ${trueColors?'text-green-900':'text-stone-700'} transition-colors duration-150   text-xl sm:text-2xl text-center pb-5 mb-5 font-bold tracking-widest italic underline-offset-8 underline  `}>{text?.body?.greetings?.question}</h2>


      <form className={`w-full  flex flex-row items-center justify-center gap-4 h-15 `}>
            <input onChange={(e)=>{
              
              let newQuiz=quiz.map((q,index)=>{
                return index==0?e.target.value:q
              })
        handleQuiz(newQuiz)

      }}  className={` p-2 h-2/3 w-10 sm:h-full text-xl sm:text-4xl font-extrabold text-center rounded-lg shadow-lg ${correctQuiz?'bg-green-500 text-white':'bg-white text-stone-800'}`} maxLength={1} type="text" min={0} max={9} maxLength={1} name='one' value={quiz[0]} />
            <input onChange={(e)=>{
        let newQuiz=quiz.map((q,index)=>{
                return index==1?e.target.value:q
              })
        handleQuiz(newQuiz)

      }} className={`p-2 h-2/3 w-10 sm:h-full text-xl sm:text-4xl font-extrabold text-center rounded-lg shadow-lg ${correctQuiz?'bg-green-500 text-white':'bg-white text-stone-800'}`} maxLength={1} type="text" min={0} max={9} name='two' value={quiz[1]} />
            <input onChange={(e)=>{
        let newQuiz=quiz.map((q,index)=>{
                return index==2?e.target.value:q
              })
        handleQuiz(newQuiz)

      }} className={` p-2 h-2/3 w-10 sm:h-full text-xl sm:text-4xl font-extrabold text-center rounded-lg shadow-lg ${correctQuiz?'bg-green-500 text-white':'bg-white text-stone-800'}`} maxLength={1} type="text" min={0} max={9} name='three' value={quiz[2]} />
            <input onChange={(e)=>{
        let newQuiz=quiz.map((q,index)=>{
                return index==3?e.target.value:q
              })
        handleQuiz(newQuiz)

      }} className={`p-2 h-2/3 w-10 sm:h-full text-xl sm:text-4xl font-extrabold text-center rounded-lg shadow-lg ${correctQuiz?'bg-green-500 text-white':'bg-white text-stone-800'}`} maxLength={1} type="text" min={0} max={9} name='four' value={quiz[3]} />


      </form>
      


  </div>
     
    
  <div className={`bg-black transition-all ease-in-out duration-[5s] w-full sticky bottom-0 z-30  ${showBars?'h-20':'h-0'}`}></div>
    
    
    
    
    </section>
  




}

export default App
