import connect from '@/utils/startMongo'
import { ObjectId } from 'mongodb'
import { NextResponse } from 'next/server'

// using the GET function to receive all of the data from the specific collection 'songs' and returning as an array
export async function GET(request: Request) {
    const client = await connect
    const cursor = await client.db('test').collection('songs').find()
    const songs = await cursor.toArray()
    return NextResponse.json(songs)
}

// using the POST function with insertOne to add a new entry to the database
export async function POST(request: Request) {
    const client = await connect
    const body = await request.json()
    await client.db('test').collection('songs').insertOne({title: body.title, artist: body.artist, length: body.length})
    return NextResponse.json({message:'sucessfully added song'})
}

// using the PUT function with updateOne to change an entry in the database
export async function PUT(request: Request) {
    const client = await connect
    const body = await request.json()
    const id = new ObjectId(body.id)
    await client.db('test').collection('songs').updateOne({_id:id}, {$set: {title:body.title, artist:body.artist, length:body.length}})
    return NextResponse.json({message:'successfully updated song'})
}

// using the DELETE function with deleteOne to remove an entry from the database
export async function DELETE(request: Request) {
    const client = await connect
    const body = await request.json()
    const id = new ObjectId(body.id)
    await client.db('test').collection('songs').deleteOne({_id:id})
    return NextResponse.json({message:'successfully deleted song'})
}