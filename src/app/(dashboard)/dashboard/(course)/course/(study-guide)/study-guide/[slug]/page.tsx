import { getNote } from "@/actions/courses";
import { ITopic } from "@/types/course";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import NoteViewer from "@components/note/note-viewer";
import NoteHeader from "@components/note/note-header";

export default async function StudyGuidePage({
  params,
}: {
  params: { slug: string };
}) {
  const topic: ITopic = await getNote(params.slug);
  const session = await getServerSession(authOptions);
  return (
    <section className={"w-full"}>
      <NoteHeader
        topic={topic}
        userName={session?.user.name as string}
      />
      <NoteViewer note={topic} />
    </section>
  );
}
