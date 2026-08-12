import { NextRequest, NextResponse } from "next/server";
import { getGroupById, getTasksByGroupId, createTask } from "@/lib/data";

type Params = { params: Promise<{ id: string }> };

// GET /api/groups/:id/tasks
export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }
  return NextResponse.json(getTasksByGroupId(id));
}

// POST /api/groups/:id/tasks
export async function POST(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }

  const body = await request.json();
  if (typeof body.title !== "string" || body.title.trim() === "") {
    return NextResponse.json(
      { error: "title is required and must be a non-empty string" },
      { status: 400 }
    );
  }

  const task = createTask(id, body.title);
  return NextResponse.json(task, { status: 201 });
}