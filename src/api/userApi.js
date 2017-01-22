import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

/**
 * Get users form API
 * @return {*}
 */
export function getUsers() {
  return get('users');
}

export function deleteUser(id) {
  return del(`users/${id}`);
}

///////////////////////

const baseUrl = getBaseUrl();

/**
 * Precess users using Fetch
 * @param url
 * @return {Promise.<TResult>}
 */
function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url) {
  const request = new Request(baseUrl + url, { method: "DELETE" });
  return fetch(request).then(onSuccess, onError);
}

/**
 * Convert response to json
 * @param response
 * @return {*}
 */
function onSuccess(response) {
  return response.json();
}

/**
 * Write error to console
 * @param error
 */
function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
