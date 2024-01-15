'use client'
import Change from "./components/editSong"
import Add from "./front/page"

export default function Both() {
  return (
    <>
      <Add></Add>
      <Change songObj={{
        _id: "",
        title: "",
        artist: "",
        length: ""
      }}></Change>
    </>
  )
}