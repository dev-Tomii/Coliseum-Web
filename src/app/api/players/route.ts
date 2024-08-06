import { NextResponse } from "next/server";
import players from "./players.json";
import { writeFileSync } from "fs";

export async function GET() {
    return NextResponse.json(players);
}

export async function POST(request: Request) {
    const data = await request.json();
    writeFileSync("./players.json", data);
    return NextResponse.json(data);
}
