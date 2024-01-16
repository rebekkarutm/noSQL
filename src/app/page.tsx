'use client'
import Link from "next/link"
import Back from "./back/page"

export default function Both() {
  return (
    <>
    <h1>Hi, please enjoy my song database!</h1>
    <Link href='/back'>Click here to try it out</Link>
    </>
  )
}