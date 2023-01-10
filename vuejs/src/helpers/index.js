export function serialize(obj) {
  let searchParams;

  for (let key in obj) {
    searchParams += `&${key}=${obj[key]}`;
  }

  return searchParams;
}

export function mapFields(options) {
  const object = {};

  for (let x = 0; x < options.fields.length; x++) {
    const fields = [options.fields[x]];
    object[fields] = {
      get() {
        return this.$store.state[options.base][fields];
      },
      set(value) {
        this.$store.commit(options.mutation, { [fields]: value });
      },
    };
  }
  return object;
}
