import { SERVER_ERROR_CODE } from './api-constants';

export const options = (method = 'GET', body = null) => {
  let data = {
    method,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };

  if (body) {
    data.body = JSON.stringify(body);
  }

  return data;
};

export const apiCall = (url, apiOptions) =>
  fetch(url, apiOptions)
    .then(res => {
      if (res.status >= 200 && res.status < 300) {
        return res
          .json()
          .then(response => ({
            payload: response
          }))
          .catch(error => ({
            error
          }));
      } else {
        // Fail if status code is above 300
        return res.text().then(response => ({
          error: response
        }));
      }
    })
    .then(response => {
      if (response.payload && !response.error) {
        return response.payload
      } else {
        // if response contains error, that means we got error
        let errorResponse = {
          message: response.error,
          code: SERVER_ERROR_CODE
        };
        throw new Error(JSON.stringify(errorResponse));
      }
    })

    .catch(error => {
      // we don't want to throw JavaScript with simple message
      let errorResponse = {
        message: error.message,
        code: SERVER_ERROR_CODE
      };
      throw new Error(JSON.stringify(errorResponse));
    });
