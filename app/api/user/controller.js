import util from "../../../utils/util";
import validator from "./validator";
import service from "./service";

/**
 * Get Team
 * @property {string} params.id - Team Id.
 * @property {string} params.feedSource - feed source for the team.
 * @property {string} params.key - key for feedSource for the team.
 * @returns {Object}
 */
async function authenticate(params) {
  console.log("params", params);
  // Validating param
  // const validParam = await validator.get.validate({ params });

  const { userName } = params;

  // Getting team details
  let existingDoc;
  if (userName) {
    existingDoc = await service.login(params);
    console.log("existing", existingDoc);
  }
  return existingDoc;
}

export default { authenticate };
