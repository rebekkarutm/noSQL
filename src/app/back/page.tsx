import EditSong from "../components/editSong"
import Add from "../front/page"

type Song = {
    _id:string
    title:string
    artist:string
    length:string
}

export default async function Back() {
    const baseUrl = 'http://localhost:3000'
    const response = await fetch(`${baseUrl}/api`, {cache:'no-store'})
    const songs: Song[] = await response.json()
    return (
        <div>
            <Add></Add>
            {songs.map(songObj =>
            <EditSong songObj={songObj} key={songObj._id.toString()}></EditSong>
            )}
        </div>
    )
}