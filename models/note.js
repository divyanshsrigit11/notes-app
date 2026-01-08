import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: String,
    content: String,
  },
  {
    timestamps: true, // This automatically handles 'createdAt' and 'updatedAt'
  }
);

const Note = mongoose.models.Note || mongoose.model("Note", noteSchema);

export default Note;