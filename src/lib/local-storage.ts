export interface IStorage<T> {
  save: (key: string, value: T) => void;
  get: (key: string) => T | null;
  remove: (key: string) => void;
  clear: () => void;
}

class LocalStorage<T> implements IStorage<T> {
  constructor() {
    // if (typeof window === "undefined") {
    //   throw new Error("LocalStorage is only available in the browser");
    // }
  }

  save(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

export default LocalStorage;
