'use client'

import { useState } from "react"

// making Props from songObj to targte specific aspects
type Props = {
    songObj: {
        _id:string
        title:string
        artist:string
        length:string
    }
}

// using the DELETE method from the /api page (route.tsx) and removing the song from the database using onClick
const Delete = ({songObj}:Props) => {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [length, setLength] = useState('')
    const deleteSong = () => {
        fetch('/api', {
            method:'DELETE',
            body:JSON.stringify({title, artist, length, id:songObj._id})
        })
    }
    return (
        <button
            style={{backgroundColor:'maroon', color:'black', borderRadius:'4px', borderColor:'maroon', width:'160px', marginTop:'10px'}}
            onClick={deleteSong}
            >Delete this song
        </button>
    )
}

export default Delete