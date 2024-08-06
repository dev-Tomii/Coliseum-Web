import { NextResponse } from 'next/server'
import clans from './clans.json'

export async function GET() {
    return NextResponse.json(clans) 
}