import { NextResponse } from "next/server";
import legends from "./legends.json";
import { writeFileSync } from "fs";

export async function GET() {
    return NextResponse.json(legends);
}

export async function POST(request: Request) {
    const data = await request.json();
    writeFileSync("./legends.json", JSON.stringify(data));
    return NextResponse.json(data);
}
