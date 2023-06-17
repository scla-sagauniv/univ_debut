"use client"  
import Header from '../components/Header'
import Button from '../components/Button'
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
      <Button/>
    </main>
  )
}
export default Home
