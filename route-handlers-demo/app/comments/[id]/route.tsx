import { comments } from "../data";
import { Comment } from "@/types/Comment";
import { redirect } from "next/navigation";

type CommentBody = Pick<Comment, "text">;
type Context = {
  params: {
    id: string;
  };
};

export async function GET(_req: Request, { params }: Context) {
  const id = +params.id;
  if (id > comments.length) {
    redirect("/comments");
  }

  const comment = comments.find(c => c.id === +params.id);

  return Response.json(comment);
}

export async function PATCH(req: Request, { params }: Context) {
  const { text }: CommentBody = await req.json();
  const id = +params.id;
  const idx = comments.findIndex(c => c.id === id);
  comments[idx].text = text;

  return Response.json(comments[idx]);
}

export async function DELETE(_req: Request, { params }: Context) {
  const id = +params.id;
  const idx = comments.findIndex(c => c.id === id);

  return Response.json(comments[idx]);
}
