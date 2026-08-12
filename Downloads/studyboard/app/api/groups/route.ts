import { NextRequest, NextResponse } from "next/server";
import { getGroups, createGroup } from "@/lib/data";

// GET /api/groups — return all groups
export async function GET() {
  return NextResponse.json(getGroups());
}

// POST /api/groups — create a group
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (typeof body.name !== "string" || body.name.trim() === "") {
    return NextResponse.json(
      { error: "name is required and must be a non-empty string" },
      { status: 400 }
    );
  }
  if (typeof body.subject !== "string" || body.subject.trim() === "") {
    return NextResponse.json(
      { error: "subject is required and must be a non-empty string" },
      { status: 400 }
    );
  }

  const group = createGroup({
    name: body.name,
    subject: body.subject,
    memberCount: typeof body.memberCount === "number" ? body.memberCount : undefined,
  });

  return NextResponse.json(group, { status: 201 });
}