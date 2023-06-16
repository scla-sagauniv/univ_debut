"use client"  
import Header from '../components/Header'
import { useState, useEffect } from 'react'


const Home = () => {
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      (async function() {
          const { text } = await (await fetch(`/api/todos`)).json();
          setName(text);
          setLoading(false);
      }())
  }, [])
  return (
    <main className="">
      <Header/>
      <h1>aaa:{name}</h1>
    </main>
  )
}
export default Home
