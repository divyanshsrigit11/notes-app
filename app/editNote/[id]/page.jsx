import EditNoteForm from "@/components/EditNoteForm";

const getNoteById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/notes/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch note");
    }

    return res.json();
  } catch (error) {
    console.log(error);
    return { note: null }; // Return null safely if error
  }
};

export default async function EditNote({ params }) {
  // ⬇️ FIX: Await the params object here
  const { id } = await params; 
  
  const { note } = await getNoteById(id);

  // Safety check in case note is not found
  if (!note) {
    return <div>Note not found</div>;
  }

  const { title, content } = note;

  return <EditNoteForm id={id} title={title} content={content} />;
}