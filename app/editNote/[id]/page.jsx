import EditNoteForm from "@/components/EditNoteForm";

const getNoteById = async (id) => {
  try {
    const res = await fetch(`https://notes-app-zeta-drab.vercel.app/api/notes/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch note");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return { note: null }; 
  }
};

export default async function EditNote({ params }) {
  const { id } = await params; 
  
  const { note } = await getNoteById(id);

  // if note is not found.. :)
  if (!note) {
    return <div>Note not found</div>;
  }

  const { title, content } = note;

  return <EditNoteForm id={id} title={title} content={content} />;
}