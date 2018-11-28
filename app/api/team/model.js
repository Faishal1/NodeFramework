import mongoose from "mongoose";
import constants from "../../helpers/constants";

const referenceSchema = new mongoose.Schema(
  {
    feedSource: {
      type: String,
      enum: constants.feedSourceTypes,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const modelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shortName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    activeFeedSource: {
      type: String,
      enum: constants.feedSourceTypes,
      default: "cricketapi",
    },
    references: {
      type: [referenceSchema],
      required: true,
    },
    frozen: {
      type: Boolean,
      default: false,
    },
    approvalStatus: {
      type: String,
      enum: constants.approvalStatusTypes,
      default: "approved",
    },
    avatar: {
      type: String,
    },
    image: {
      type: String,
    },
    color: {
      type: String,
    },
    yearJoined: {
      type: Number,
    },
    coach: {
      type: String,
    },
    captain: {
      type: String,
    },
    testRanking: {
      type: Number,
    },
    odiRanking: {
      type: Number,
    },
    t20Ranking: {
      type: Number,
    },
    tags: {
      type: [
        {
          type: String,
          enum: constants.teamTags,
          default: "international",
        },
      ],
      required: true,
    },
    status: {
      type: String,
      enum: constants.statusTypes,
      default: "active",
    },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  },
);

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
modelSchema.method({});

/**
 * Statics
 */
modelSchema.statics = {};
/**
 * @typedef Team
 */
export default mongoose.model("Team", modelSchema);
export const teamSchema = modelSchema;
