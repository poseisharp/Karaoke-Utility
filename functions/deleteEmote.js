const axios = require("axios");
require("dotenv").config();
const { DELETE_EMOTE } = require("./utils/linkQueries");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  if (event.httpMethod !== "DELETE") {
    return formattedResponse(405, { err: "Method not supported" });
  }

  const { id } = JSON.parse(event.body);
  const variables = { id };
  try {
    const { deleteEmotes: deletedEmote } = await sendQuery(
      DELETE_EMOTE,
      variables
    );

    return formattedResponse(200, deletedEmote);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
