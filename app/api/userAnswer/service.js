import Team from "./model";
import util from "../../../utils/util";
import commonService from "../../helpers/services/commonService";
import messages from "../../../localization/en";

/**
 * Finding documents with provided query params
 * @property {object} query - object containing params to prepare query.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {documents[]}
 */
async function find({ query, autoFormat = true }) {
  const res = await commonService.find({ Model: Team, query, autoFormat });
  return res;
}

/**
 * Finding document with id
 * @property {string} id - document id.
 * @property {string} errKey - key for which error object will be generated.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function findById({ id, errKey, autoFormat = true }) {
  const res = await commonService.findById({
    Model: Team,
    id,
    errKey,
    autoFormat,
  });
  return res;
}

/**
 * Finding document with reference
 * @property {object} reference - The reference object {feedSource: x, key:y}.
 * @property {string} excludedId - document id to be excluded.
 * @property {string} errKey - key for which error object will be generated.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function findByReference({
  reference,
  excludedId,
  errKey,
  autoFormat = true,
}) {
  const res = await commonService.findByReference({
    Model: Team,
    reference,
    excludedId,
    errKey,
    autoFormat,
  });
  return res;
}

/**
 * Checking if document exist with reference
 * @property {object} reference - The reference object {feedSource: x, key:y}.
 * @property {string} excludedId - document id to be excluded.
 * @property {string} errKey - key for which error object will be generated.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {boolean/document}
 */
async function checkDuplicate({
  reference,
  excludedId,
  errKey,
  autoFormat = true,
}) {
  const res = await commonService.checkDuplicate({
    Model: Team,
    reference,
    excludedId,
    errKey,
    autoFormat,
  });
  return res;
}

/**
 * Creating document
 * @property {object} data - document properties.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function create({ data, autoFormat = true }) {
  const res = await commonService.create({ Model: Team, data, autoFormat });
  return res;
}

/**
 * Updating document
 * @property {object} data - document properties.
 * @property {document} existingDoc - document which needs to be updated.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function updateExisting({ data, existingDoc, autoFormat = true }) {
  const res = await commonService.updateExisting({
    data,
    existingDoc,
    autoFormat,
  });
  return res;
}

/**
 * Updating document
 * @property {object} data - document properties.
 * @property {object} filterCriteria - criteria to fetch document to be updated.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function update({ data, filterCriteria, autoFormat = true }) {
  const res = await commonService.update({
    Model: Team,
    data,
    filterCriteria,
    autoFormat,
  });
  return res;
}

/**
 * Pseudo delete document
 * @property {string} id - document id to be removed.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function removeById({ id, autoFormat = true }) {
  const res = await commonService.removeById({ Model: Team, id, autoFormat });
  return res;
}

/**
 * Finding matches for team
 * @property {string} id - document id.
 * @property {string} errKey - key for which error object will be generated.
 * @property {boolean} autoFormat - false if formatted output not needed.
 * @returns {document}
 */
async function findMatches({ id, query, errKey, autoFormat = true }) {
  // Getting team with id
  const existingDoc = await Team.findOne({
    _id: id,
    status: "active",
  });

  // Returning doc if exist
  if (existingDoc !== null) {
    // Getting team json from Mongoose object
    const teamDoc = existingDoc.toJSON();

    const filterCriteria = {
      status: "active",
      $or: [{ teamAId: id }, { teamBId: id }],
    };

    const { liveStatus, tags } = query;

    if (tags) {
      filterCriteria.tags = { $in: tags };
    }

    if (liveStatus) {
      filterCriteria.liveStatus = { $in: liveStatus };
    }

    // Getting matches with team Id
    const matches = await Match.find(filterCriteria).sort("startDate");

    if (matches.length) {
      // Getting scorecard for ongoing and completed matches
      teamDoc.matches = await util.getScorecardForMatch(matches);
    }

    // Returning formatted response if autoFormat true
    if (autoFormat) {
      return {
        status: 200,
        data: teamDoc,
        message: messages.SUCCESSFULL,
      };
    }

    // Otherwise returned db object
    return teamDoc;
  }

  // Returning error obj if does not exist
  const errObj = {
    error: {
      status: 404,
      message: messages.NOT_FOUND,
    },
  };
  if (errKey) {
    errObj.error.data = [
      {
        [errKey]: messages.NOT_FOUND,
      },
    ];
  }
  return errObj;
}

export default {
  find,
  findById,
  findByReference,
  checkDuplicate,
  create,
  update,
  updateExisting,
  removeById,
  findMatches,
};
