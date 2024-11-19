'use client';
import { useEffect } from "react";
import Dashboard from "./dashboard/page"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
    })
  }, [])
  return (
    <div>
      <Dashboard />
    </div>
  )
}