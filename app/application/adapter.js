import DS from 'ember-data';
import host from 'karir/utils/host';
import { MODEL_PREFIX } from 'karir/utils/properties';
// import FirebaseAdapter from 'emberfire/adapters/firebase';

// export default FirebaseAdapter.extend({
// });

export default DS.RESTAdapter.extend({
    // namespace: 'api',
    // host: 'http://localhost:82',
    // host: 'http://127.0.0.1:5000',
    // primaryKey:'PersonID',

    // createRecord(store, type, snapshot){
    //     let data = {};
    //     let serializer = store.serializerFor(type.modelName);
    //     const url = `${this.host}/api/data/post`;
        
    //     serializer.serializeIntoHash(data, type, snapshot);

    //     // snapshot.rollbackAttributes();

    //     return this.ajax(url, "POST", { data: data})
    // },

    urlForFindAll(modelName) {
        return host(`${this._removePrefix(modelName)}.search`);
    },

    urlForCreateRecord(modelName) {
        return host(`${this._removePrefix(modelName)}.create`);
    },

    urlForFindRecord(id, modelName) {
        return host(`${this._removePrefix(modelName)}.find`).replace(/:id/, id);
    },

    urlForUpdateRecord(id, modelName){
        const url = host(`${this._removePrefix(modelName)}.update`) + `/${id}`;
        return url
    },

    _removePrefix(name) {
        return name.replace(`${MODEL_PREFIX}/`, '').replace(/\//g, '.');
    },

    // findAll(store, type, sinceToken, snapshotRecordArray){
    //     let query = this.buildQuery(snapshotRecordArray);
    //     let url = `${this.host}/api/data/list`;
    
    //     if (sinceToken) {
    //       query.since = sinceToken;
    //     }
    
    //     return this.ajax(url, 'GET', { data: query });
    // },

    // findRecord(store, type, id, snapshot) {
    //     // let url = this.buildURL(type.modelName, id, snapshot, 'findRecord');
    //     let url = `${this.host}/api/job/get/${id}`;
    //     let query = this.buildQuery(snapshot);
    
    //     return this.ajax(url, 'GET', { data: query });
    // },
    
    // updateRecord(store, type, snapshot){
    //     let id = snapshot.id;
    //     let data = {};
    //     let serializer = store.serializerFor(type.modelName);
    //     const url = host(`${this._removePrefix(type.modelName)}.update`) + `/${id}`;

    //     serializer.serializeIntoHash(data, type, snapshot);
    //     console.log(data)
    //     return this.ajax(url, "PUT", { data: data});
    // },

    // deleteRecord(store, type, snapshot){
    //     let id = snapshot.id;
    //     const url = `${this.host}/api/data/delete/${id}`

    //     return this.ajax(url, "DELETE");
    // },
    
    query(store, type, query) {
        
        // return new Promise((resolve, reject) => {
        //     this.findAll(store, type).then((data, ...args) => {
                
        //         resolve(data.filter((item) => {
        //             let isMatch = true;

        //             // for(let prop in query) {
        //             //     isMatch = isMatch && item[prop] === query[prop];
        //             // }

        //             return isMatch;
        //         }), ...args);

        //     }).catch(() => reject(...arguments));
        // });

        return new Promise((resolve, reject) => {
            this.findAll(store, type).then((payload, ...success) => {

                payload.datas = payload.datas.filter((item) => {
                    let isMatch = true;

                    for(let prop in query) {
                        isMatch = isMatch && item[prop].toLowerCase().match(query[prop].toLowerCase());
                    }

                    return isMatch;
                });

                resolve(payload, ...success);

            }).catch((...error) => reject(...error));
        });
    }   
    // query(store, type, query) {
    //     let url = this.buildURL(type.modelName, null, null, 'query', query);
    
    //     if (this.sortQueryParams) {
    //       query = this.sortQueryParams(query);
    //     }
    
    //     return this.ajax(url, 'GET', { data: query });
    // }

    //     // let url = this.buildURL(type.modelName, null, null, 'query', query);
        

    //     // if (this.sortQueryParams) {
    //     // query = this.sortQueryParams(query);
    //     // }

    //     // return this.ajax(url, 'GET', { data: query });
    // },
    
    // // createRecord(store, type, snapshot){
    // //     // let data = {};
    // //     // let serializer = store.serializerFor(type.modelName);
    // //     // let url = this.buildURL('/assets/content/Article.json');

    // //     // serializer.serializeIntoHash(data, type, snapshot, { includeId: true });

    // //     // return this.ajax(url, 'POST', { data: data });

    // //     // return new Promise((resolve, reject) => {

    // //     // });
    // // },

    // queryRecord() {
    //     return this._super(...arguments);
    // },

    // findRecord() {
    //     return this._super(...arguments);
    // },

    // urlForFindAll() {
    //     return '/assets/content/Article.json';
    // }

    // findAll() {
    //     const rslt = this._super(...arguments);
    //     console.log(rslt);
    //     return rslt;
    // }

});
