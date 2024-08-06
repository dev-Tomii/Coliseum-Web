import { NextResponse } from "next/server";
import clans from "./clans.json";
import { writeFileSync } from "fs";

export async function GET() {
    return NextResponse.json(clans);
}

export async function POST(request: Request) {
    const data = await request.json();
    writeFileSync("./clans.json", data);
    return NextResponse.json(data);
}
