'use client'

import { useState } from "react"

type Props = {
    songObj: {
        _id:string
        title:string
        artist:string
        length:string
    }
}

const Change = ({songObj}:Props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [length, setLength] = useState('')
    const changeSong = () => {
        fetch('/api', {
            method:'PUT',
            body:JSON.stringify({title, artist, length, id:songObj._id})
        })
    }
    return (
        <div key={songObj._id.toString()} style={{display: 'flex', flexDirection:'column', width:'240px', padding:'20px'}}>
            <h1 style={{width:'700px'}}>Title: {songObj.title}</h1>
            <h2 style={{width:'700px', fontSize:'20px'}}>Artist: {songObj.artist}</h2>
            <h3 style={{fontSize:'16px'}}>Length: {songObj.length}</h3>
            <input
                placeholder='Song title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <input
                placeholder='Artist'
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
            ></input>
            <input
                placeholder='Song length'
                value={length}
                onChange={(e) => setLength(e.target.value)}
            ></input>
            <button onClick={changeSong}>Change this song</button>
        </div>
    )
}

export default Change