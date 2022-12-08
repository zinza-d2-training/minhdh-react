const saveLocalStorage = <T>(key: string, data: T) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeStoreItem = (key: string) => {
  localStorage.removeItem(key);
};

export { saveLocalStorage, removeStoreItem };
