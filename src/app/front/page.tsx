'use client'

import { useState } from "react"

// creating a useState for all three components of the data, using a fetch POST method and stringifying info that's given
export default function Add() {
    const [title, setTitle] = useState('')
    const [artist, setArtist] = useState('')
    const [length, setLength] = useState('')
    const saveSong = () => {
        fetch('/api', {
            method:'POST',
            body:JSON.stringify({title, artist, length})
        })
    }

    // creating input fields for each component, with their value set, and a submit button
    return (
        <>
        <div>
            <input placeholder='Song title' value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input placeholder='Artist' value={artist} onChange={(e) => setArtist(e.target.value)}/>
            <input placeholder='Song length' value={length} onChange={(e) => setLength(e.target.value)}/>
            <button onClick={saveSong}>Submit my song</button>
        </div>
        </>
    )
}