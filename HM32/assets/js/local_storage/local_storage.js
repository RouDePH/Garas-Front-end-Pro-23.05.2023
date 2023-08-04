export default class LocalStorage {

    constructor(storageKey) {
        this.storageKey = storageKey;
    }

    readObjectsFromStorage() {
        const storedData = localStorage.getItem(this.storageKey);
        return storedData ? JSON.parse(storedData) : {};
    }

    saveObjectsToStorage(data) {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    addObject(id, jsonObject) {
        const data = this.readObjectsFromStorage();
        data[id] = jsonObject;
        this.saveObjectsToStorage(data);
    }

    deleteObject(id) {
        const data = this.readObjectsFromStorage();
        if (data.hasOwnProperty(id)) {
            delete data[id];
            this.saveObjectsToStorage(data);
        }
    }

}