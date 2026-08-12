import { NextRequest, NextResponse } from "next/server";
import { updateTask, deleteTask } from "@/lib/data";

type Params = { params: Promise<{ id: string; taskId: string }> };

// PATCH /api/groups/:id/tasks/:taskId
export async function PATCH(request: NextRequest, { params }: Params) {
  const { id, taskId } = await params;
  const body = await request.json();

  const updates: { title?: string; done?: boolean } = {};
  if (body.title !== undefined) updates.title = body.title;
  if (body.done !== undefined) updates.done = body.done;

  const task = updateTask(id, taskId, updates);
  if (!task) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  return NextResponse.json(task);
}

// DELETE /api/groups/:id/tasks/:taskId
export async function DELETE(request: NextRequest, { params }: Params) {
  const { id, taskId } = await params;
  const success = deleteTask(id, taskId);
  if (!success) {
    return NextResponse.json({ error: "Task not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Task deleted" });
}