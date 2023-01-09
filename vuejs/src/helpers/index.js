export function serialize(obj) {
  let searchParams;

  for (let key in obj) {
    searchParams += `&${key}=${obj[key]}`;
  }

  return searchParams;
}
