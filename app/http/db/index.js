export const db = {
  data: {},
  set(key, value) {
    this.data[key] = value;
  },
  get(key) {
    return this.data[key];
  },
  push(key, value) {
    this.data[key] = this.data[key] || [];
    this.data[key].push(value);
  }
};
