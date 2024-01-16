import EditSong from "../components/editSong"
import Add from "../front/page"

// using props to target specific aspects of the data
type Song = {
    _id:string
    title:string
    artist:string
    length:string
}

// using a function to fetch the data and display it, as well as incorporating the other functions (Add, mapping songs and EditSong)
export default async function Back() {
    const baseUrl = process.env.BASE_URL
    console.log(baseUrl)
    const response = await fetch(`${baseUrl}/api`, {cache:'no-store', headers:{'content-type':'application/json'}})
    const songs: Song[] = await response.json()
    return (
        <div style={{padding:'20px'}}>
            <Add></Add>
            {songs.map(songObj =>
            <EditSong songObj={songObj} key={songObj._id.toString()}></EditSong>
            )}
        </div>
    )
}