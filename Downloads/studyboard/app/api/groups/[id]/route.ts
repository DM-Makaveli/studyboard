import { NextRequest, NextResponse } from "next/server";
import { getGroupById, updateGroup, deleteGroup } from "@/lib/data";

type Params = { params: Promise<{ id: string }> };

// GET /api/groups/:id
export async function GET(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const group = getGroupById(id);
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }
  return NextResponse.json(group);
}

// PATCH /api/groups/:id
export async function PATCH(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json();

  const updates: { name?: string; subject?: string; memberCount?: number } = {};
  if (body.name !== undefined) updates.name = body.name;
  if (body.subject !== undefined) updates.subject = body.subject;
  if (body.memberCount !== undefined) updates.memberCount = body.memberCount;

  const group = updateGroup(id, updates);
  if (!group) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }
  return NextResponse.json(group);
}

// DELETE /api/groups/:id
export async function DELETE(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const success = deleteGroup(id);
  if (!success) {
    return NextResponse.json({ error: "Group not found" }, { status: 404 });
  }
  return NextResponse.json({ message: "Group deleted" });
}