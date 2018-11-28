import jwt from "jsonwebtoken";
import models from "database";
// import util from "../../../utils/util";
// import commonService from "../../helpers/services/commonService";
// import messages from "../../../localization/en";
import conf from "../../../config/development";

/**
 * User Login
 */
async function login(data) {
  let res = "";

  const result = await models.user.findOne({ where: data });
  if (!result) {
    res = {
      success: false,
      message: "Authentication failed. User not found.",
    };
  } else if (result) {
    if (result.password !== data.password) {
      res = {
        success: false,
        message: "Authentication failed. Wrong password.",
      };
    } else {
      const payload = {
        admin: result.admin,
      };
      const token = jwt.sign(data, conf.jwt.secret, {
        expiresIn: 1440, // expires in 24 hours
      });
      // return the information including token as JSON
      res = {
        success: true,
        message: "Enjoy your token!",
        token,
      };
    }
  }
  return res;
}

export default {
  login,
};
