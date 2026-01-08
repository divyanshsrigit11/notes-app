import Link from "next/link";
import RemoveBtn from "./RemoveBtn";

const getNotes = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/notes", {
      cache: "no-store", // Ensure dynamic data fetching
    });
    if (!res.ok) throw new Error("Failed to fetch notes");
    return res.json();
  } catch (error) {
    console.log("Error loading notes: ", error);
  }
};

export default async function NotesList() {
  const { notes } = (await getNotes()) || { notes: [] };

  return (
    <>
      {notes.map((t) => (
        <div key={t._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.content}</div>
            <div className="text-xs text-slate-500 mt-2">
                Created: {new Date(t.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/editNote/${t._id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </>
  );
}