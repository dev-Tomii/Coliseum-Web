import { NextResponse } from 'next/server'
import players from './players.json'
export async function GET() {
    return NextResponse.json(players) 
}