export function get(key: string) {
  return localStorage.getItem(key);
};

export function set(key: string, val: string) {
  return localStorage.setItem(key, val);
};

export function remove(key: string) {
  localStorage.removeItem(key)
};

export function clear() {
  return localStorage.clear();
};