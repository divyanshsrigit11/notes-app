import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  // ⬇️ FIX: Await params here
  const { id } = await params;
  
  const { newTitle: title, newContent: content } = await request.json();
  await connectMongoDB();
  await Note.findByIdAndUpdate(id, { title, content });
  return NextResponse.json({ message: "Note updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  // ⬇️ FIX: Await params here
  const { id } = await params;
  
  await connectMongoDB();
  const note = await Note.findOne({ _id: id });
  return NextResponse.json({ note }, { status: 200 });
}