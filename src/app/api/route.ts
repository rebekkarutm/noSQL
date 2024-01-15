import connect from '@/utils/startMongo'
import { ObjectId } from 'mongodb'

export async function GET(request: Request) {
    const client = await connect
    const cursor = await client.db('test').collection('songs').find()
    const songs = await cursor.toArray()
    return Response.json(songs)
}

export async function POST(request: Request) {
    const client = await connect
    const body = await request.json()
    await client.db('test').collection('songs').insertOne({title: body.title, artist: body.artist, length: body.length})
    return Response.json({message:'sucessfully added song'})
}

export async function PUT(request: Request) {
    const client = await connect
    const body = await request.json()
    const id = new ObjectId(body.id)
    await client.db('test').collection('songs').updateOne({_id:id}, {$set: {title:body.title, artist:body.artist, length:body.length}})
    return Response.json({message:'successfully updated song'})
}

export async function DELETE(request: Request) {
    const client = await connect
    const body = await request.json()
    const id = new ObjectId(body.id)
    await client.db('test').collection('songs').deleteOne({_id:id})
    return Response.json({message:'successfully deleted song'})
}