export default class Storage {
  static set(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, String(value));
      }
    } catch (err) {}
  }

  static get(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        return window.localStorage.getItem(key) || undefined;
      }
    } catch (err) {
      return undefined;
    }
  }

  static setObject(key, value) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      //console.error(err)
    }
  }

  static getObject(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const state = window.localStorage.getItem(key);
        if (state === null) {
          return undefined;
        }
        return JSON.parse(state);
      }
    } catch (err) {
      return undefined;
    }
  }
  static clear() {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.clear();
        window.localStorage.clear();
      }
    } catch (err) {}
  }
  static remove(key) {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (err) {}
  }
}
