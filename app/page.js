"use client"  
import Header from '../components/Header'
import Button from '../components/Button'
import Startbutton from '../components/Startbutton'
import { useState, useEffect } from 'react'


const Home = () => {
  // const [name, setName] = useState("")
  // const [loading, setLoading] = useState(true)
  // useEffect(() => {
  //     (async function() {
  //         const { text } = await (await fetch(`/api/todos`)).json();
  //         setName(text);
  //         setLoading(false);
  //     }())
  // }, [])
  return (
    <main className="">
      <Header/>
      <div className='flex justify-center mt-20'>
      <img src="81wyx1i3bds28ryu_image.gif " />
      <div className='mt-32'>
      <Startbutton/>
      </div>
      
      <img src="81wyx1i3bds28ryu_image.gif  " />
      </div>
    </main>
  )
}
export default Home
