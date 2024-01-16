import EditSong from "../components/editSong"
import Add from "../front/page"

type Song = {
    _id:string
    title:string
    artist:string
    length:string
}

export default async function Back() {
    const baseUrl = process.env.BASE_URL
    console.log(baseUrl)
    const response = await fetch(`${baseUrl}/api`, {cache:'no-store', headers:{'content-type':'application/json'}})
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