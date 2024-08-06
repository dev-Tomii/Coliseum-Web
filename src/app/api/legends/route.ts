import { NextResponse } from "next/server";
import legends from "./legends.json";

export async function GET() {
    return NextResponse.json(legends);
}

export async function POST(request: Request) {
    const data = await request.json();
    return NextResponse.json(data);
}
