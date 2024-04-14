import { comments } from "./data";
import { Comment } from "@/types/Comment";

type CommentBody = Pick<Comment, "text">;

export async function GET() {
  return Response.json(comments);
}

export async function POST(req: Request) {
  const comment: CommentBody = await req.json();
  const newComment: Comment = {
    id: comments.length + 1,
    text: comment.text,
  };

  comments.push(newComment);

  return Response.json({ newComment }, { status: 201 });
}
