const axios = require("axios");
require("dotenv").config();

exports.handler = async (e) => {
  const GET_EMOTES = `
    query{
        allEmotes{data{
            _id
            name
        }}
    }`;

  const { data } = await axios({
    url: "https://graphql.fauna.com/graphql",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`,
    },
    data: {
      query: GET_EMOTES,
      variables: {},
    },
  });
  console.log(data);
  return { statusCode: 200, body: JSON.stringify(data) };
};
