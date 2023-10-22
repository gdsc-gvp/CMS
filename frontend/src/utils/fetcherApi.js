import { BASE_API_URL } from "./constant";

/**
 * Options for customizing an HTTP request.
 *
 * @typedef {Object} RequestOptions
 * @property {Object} headers - Custom headers to include in the request.
 * @property {string} method - The HTTP request method (e.g., GET, POST, PUT, DELETE).
 * @property {Object} body - The request body data, which will be JSON-stringified.
 * @property {...} otherOptions - Other Fetch API options may be included as well.
 */

/**
 * Utility function for making HTTP requests to a specified API endpoint.
 *
 * @param {Object} options - The options for making the HTTP request.
 * @param {string} options.path - The API endpoint path.
 * @param {RequestOptions} [options.options] - Additional options for customizing the request.
 * @param {string} [options.token] - An authentication token to include in the request headers.
 * @returns {Object} An object with response data and error details.
 */

const fetcher = async ({ path, options, token }) => {
  const url = BASE_API_URL + path;
  const response = { data: null, error: { data: null, statusCode: null } };

  options = {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    ...options,
  };

  if (token) options.headers["Authorization"] = `Bearer ${token}`;

  if (options.body) options.body = JSON.stringify(options.body);

  try {
    const res = await fetch(url, options);

    if (res.status >= 400) throw res;

    response.data = await res.json();

    return response;
  } catch (err) {
    response.error.statusCode = err.status;
    response.error.data = err.statusText;

    return response;
  }
};

export default fetcher;
