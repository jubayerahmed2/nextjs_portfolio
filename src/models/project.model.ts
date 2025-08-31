import mongoose, { Document, Model, Schema } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  image: string;
  tagline: string;
  technologies: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema<IProject> = new Schema<IProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    technologies: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

// Export Model
const ProjectModel: Model<IProject> =
  mongoose.models?.Project ||
  mongoose.model<IProject>("Project", ProjectSchema);

export { ProjectModel };
