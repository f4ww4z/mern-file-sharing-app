import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    secureUrl: {
      type: String,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    sizeInBytes: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

interface IFile extends Document {
  filename: string;
  secureUrl: string;
  sizeInBytes: string;
  format: string;
  sender?: string;
  receiver?: string;
}

export default mongoose.model<IFile>("File", fileSchema);
