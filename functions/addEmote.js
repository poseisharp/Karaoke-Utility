const axios = require("axios");
require("dotenv").config();
const { ADD_EMOTE } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");
exports.handler = async (event) => {
  const { name, url } = JSON.parse(event.body);
  const variables = { name, url };
  console.log(variables);
  try {
    const { createEmotes: createdEmote } = await sendQuery(
      ADD_EMOTE,
      variables
    );

    return formattedResponse(200, createdEmote);
  } catch (err) {
    console.error(err);
    return formattedResponse(500, { err: "Something went wrong" });
  }
};
