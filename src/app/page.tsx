'use client'

import Link from "next/link"

// using the Link component from next js to navigate to the back page
export default function Both() {
  return (
    <div style={{padding:'20px'}}>
      <h1>Hi, please enjoy my song database!</h1>
      <br/>
      <button style={{width:'160px', height: '40px', borderRadius:'8px', cursor:'grab'}}><Link href='/back'>Click here to try it out</Link></button>
    </div>
  )
}