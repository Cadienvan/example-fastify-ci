export const generate = (payload) => {
  const keys = Object.keys(payload);
  const values = Object.values(payload);
  const unencoded = keys
    .map((key, index) => `${key}:${values[index]}`)
    .join('|');
  console.log(unencoded);
  const encoded = btoa(unencoded);
  return encoded;
};

export const parse = (lockKey) => {
  const decoded = atob(lockKey);
  const pairs = decoded.split('|');
  const payload = {};
  pairs.forEach((pair) => {
    const [key, value] = pair.split(':');
    payload[key] = value;
  });
  return payload;
};

export const verify = (lockKey, payload) => {
  return lockKey === generate(payload);
};
