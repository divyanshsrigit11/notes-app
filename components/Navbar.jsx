import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded-2xl">
      <Link className="text-white font-bold" href={"/"}>NoteApp</Link>
      <Link className="bg-black p-2 rounded-2xl" href={"/addNote"}>Add Note</Link>
    </nav>
  );
}