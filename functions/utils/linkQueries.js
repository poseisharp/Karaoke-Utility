const GET_EMOTES_URL = `
    query{
        allEmotes{data{
            url
        }}
    }`;

const GET_EMOTES = `
    query{
        allEmotes{data{
            _id
            name
        }}
    }`;

const DELETE_EMOTE = `
    mutation($id: ID!) {
            deleteEmotes(id: $id) {
                name
            }
        }
`;

const ADD_EMOTE = `
    mutation($name: String!, $url: String!) {
        createEmotes( data: { name:$name, url: $url }) {
            name
        }
    }
`;
module.exports = {
  GET_EMOTES,
  GET_EMOTES_URL,
  DELETE_EMOTE,
  ADD_EMOTE,
};
