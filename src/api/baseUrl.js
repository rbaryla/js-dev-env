/**
 * Created by rbaryla on 22.01.2017.
 */

/**
 * Geturn API base URL
 * @return {string}
 */
export default function getBaseUrl() {
  return getQuryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

//////////

/**
 * Check if parameter is in url
 * @param name Parameter name
 * @param url URL
 * @return {*}
 */
function getQuryStringParameterByName(name, url) {
  if (!url) url = window.location.href;

  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
