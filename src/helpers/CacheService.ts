
  export const CACHE_SERVICE_ENGINES = {
    LOCAL_STORAGE: "localStorage",
    SESSION_STORAGE:"sessionStorage",
  }
  
  
  export class CacheService {
    storageEngine;
  
    constructor(engine) {
      this.storageEngine = window[engine];
    }
  
    setItem(key, value){
      this.storageEngine.setItem(key, JSON.stringify(value));
    }
  
    getItem(key){
      const data = this.storageEngine.getItem(key);
      return data ? JSON.parse(data) : null;
    }
  }
  
  export const cacheService = new CacheService(CACHE_SERVICE_ENGINES.LOCAL_STORAGE);
  