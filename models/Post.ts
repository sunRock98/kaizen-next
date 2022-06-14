import mongoose, { Types } from "mongoose";

const Schema = mongoose.Schema;
export type Vote = {
  userId: string;
  vote: {
    like: boolean;
    comment: string;
  };
};

export type PostType = {
  _id: string;
  todayState: string;
  proposal: string;
  date: Date;
  kaidzenArea: string[];
  uploads: string[];
  kaidzenPlace: string;
  author: string;
  coauthor: string;
  status: "new" | "old";
  voteResults: Vote[];
  voteDecision: string;
  voteDate: Date | string;
  additionalInfo: {
    name: string;
    workPlace: string;
  };
};

const postSchema = new Schema<PostType>({
  todayState: {
    type: String,
  },
  proposal: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  kaidzenArea: {
    type: [String],
  },

  kaidzenPlace: {
    type: String,
  },

  author: {
    type: String,
    required: true,
  },

  coauthor: {
    type: String,
  },

  uploads: {
    type: [String],
  },
  status: {
    type: String,
    default: "new",
  },

  voteResults: {
    type: [
      {
        userId: { type: String },
        vote: {
          like: { type: Boolean },
          comment: { type: String },
          // date: { type: Date, default: Date.now}
        },
      },
    ],
    default: [],
  },

  voteDecision: {
    type: String,
    default: "",
  },

  voteDate: {
    type: Date,
    default: "",
  },

  additionalInfo: {
    type: {
      name: { type: String },
      workPlace: { type: String },
    },
  },
});

export default mongoose.models.Posts || mongoose.model("Posts", postSchema);
