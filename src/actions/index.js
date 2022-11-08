const BASE_URL = 'https://wagon-chat.herokuapp.com';

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export function fetchMessages(selectedChannel) {
  const url = `${BASE_URL}/${selectedChannel}/messages`;
  const promise = fetch(url).then(response => response.json);

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function postMessage(currentUser, selectedChannel, content) {
  const url = `${BASE_URL}/${selectedChannel}/messages`;
  const body = { author: currentUser, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: POST_MESSAGE,
    payload: promise
  };
}
