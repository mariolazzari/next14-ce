import { NextRequest } from "next/server";
import { comments } from "./data";
import { Comment } from "@/types/Comment";

type CommentBody = Pick<Comment, "text">;

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const query = searchParams.get("query");
  if (query) {
    const filtered = comments.filter(c => c.text.toLowerCase().includes(query));
    return Response.json(filtered);
  }

  return Response.json(comments);
}

export async function POST(req: Request) {
  const comment: CommentBody = await req.json();
  const newComment: Comment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return Response.json(newComment, { status: 201 });
}
