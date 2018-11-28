import Joi from "joi";
import constants from "../../helpers/constants";
import commonValidator from "../../helpers/validators/commonValidator";

export default {
  // GET /api/teams/:id
  get: Joi.object({
    params: Joi.object({
      id: commonValidator.validMongoId,
      feedSource: Joi.any().valid(constants.feedSourceTypes),
      key: Joi.string(),
    })
      .xor("id", "feedSource")
      .and("feedSource", "key"),
  }),

  // GET /api/teams
  list: Joi.object({
    query: Joi.object({
      sortBy: Joi.array().items(Joi.any().valid(constants.sortByKeys)),
      limit: Joi.number().integer(),
      skip: Joi.number().integer(),
      tags: Joi.array().items(
        Joi.any()
          .valid(constants.teamTags)
          .required(),
      ),
      approvalStatus: Joi.array().items(
        Joi.any()
          .valid(constants.approvalStatusTypes)
          .required(),
      ),
    }),
  }),

  // POST /api/teams
  create: Joi.object({
    body: Joi.object({
      name: commonValidator.normalStr.required(),
      shortName: commonValidator.shortStr.required(),
      displayName: commonValidator.normalStr.required(),
      tags: Joi.array().items(
        Joi.any()
          .valid(constants.teamTags)
          .required(),
      ),
      activeFeedSource: Joi.any()
        .valid(constants.feedSourceTypes)
        .required(),
      reference: commonValidator.feedReference.required(),
      frozen: Joi.boolean(),
      approvalStatus: Joi.any().valid(constants.approvalStatusTypes),
      avatar: commonValidator.veryLongStr,
      image: commonValidator.veryLongStr,
      color: commonValidator.shortStr,
      yearJoined: Joi.number().integer(),
      odiRanking: Joi.number().integer(),
      testRanking: Joi.number().integer(),
      t20Ranking: Joi.number().integer(),
      coach: commonValidator.normalStr,
      captain: commonValidator.normalStr,
    }),
  }),

  // PUT /api/teams/:id
  update: Joi.object({
    params: Joi.object({
      id: commonValidator.validMongoId.required(),
    }),
    body: Joi.object({
      name: commonValidator.normalStr,
      shortName: commonValidator.shortStr,
      displayName: commonValidator.normalStr,
      tags: Joi.array().items(
        Joi.any()
          .valid(constants.teamTags)
          .required(),
      ),
      activeFeedSource: Joi.any().valid(constants.feedSourceTypes),
      reference: commonValidator.feedReference,
      frozen: Joi.boolean(),
      approvalStatus: Joi.any().valid(constants.approvalStatusTypes),
      avatar: commonValidator.veryLongStr,
      image: commonValidator.veryLongStr,
      color: commonValidator.shortStr,
      yearJoined: Joi.number().integer(),
      odiRanking: Joi.number().integer(),
      testRanking: Joi.number().integer(),
      t20Ranking: Joi.number().integer(),
      coach: commonValidator.normalStr,
      captain: commonValidator.normalStr,
    }),
  }),

  // DELETE /api/teams/:id
  remove: Joi.object({
    params: Joi.object({
      id: commonValidator.validMongoId.required(),
    }),
  }),

  // GET /api/teams/:id/matches
  getTeamMatches: Joi.object({
    params: Joi.object({
      id: commonValidator.validMongoId,
    }),
    query: Joi.object({
      tags: Joi.array().items(
        Joi.any()
          .valid(constants.teamTags)
          .required(),
      ),
      liveStatus: Joi.array()
        .items(
          Joi.any()
            .valid(constants.matchLiveStatusTypes)
            .required(),
        )
        .default(["ongoing", "upcoming"]),
    }),
  }),
};
