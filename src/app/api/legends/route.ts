import { NextResponse } from 'next/server'
import legends from './legends.json'

export async function GET() {
    return NextResponse.json(legends) 
}