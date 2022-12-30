const API_URL = process.env.API_URL || "http://localhost:3000";

const get = (endPoint, urlParam, requestInit = {}) => {
  return fetch(
    API_URL + "/" + endPoint + "?" + new URLSearchParams(urlParam).toString(),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      ...requestInit,
    }
  );
};

const post = (endPoint, body, requestInit = {}) => {
  return fetch(API_URL + "/" + endPoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const put = (endPoint, body, requestInit = {}) => {
  return fetch(API_URL + "/" + endPoint, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const patch = (endPoint, body, requestInit = {}) => {
  return fetch(API_URL + "/" + endPoint, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...requestInit,
  });
};

const deleteMethod = (endPoint, requestInit = {}) => {
  return fetch(API_URL + "/" + endPoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    ...requestInit,
  });
};

(async () => {
  const data = await deleteMethod("users/999");
  const json = await data.json();
  console.log(json);
})();
