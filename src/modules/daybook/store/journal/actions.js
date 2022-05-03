
// export const myAction = async ({ commit }) => {

    import journalApi from "@/api/journalApi"


    // }
    
    export const loadEntries = async ({ commit }) => {
        const { data } = await journalApi.get('/entries.json');
        if( !data ){
            commit('setEntries', [])
        }
        const entries = [];
        for (const id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id]
            })
        }
        commit('setEntries', entries)
    }
    
    export const updateEntry = async ({commit}, entry) => {
        const { date, text, picture, id } = entry;
        const request = {
            date,
            text,
            picture
        }
        const response = await journalApi.put(`/entries/${id}.json`, request);
        commit('updateEntry', {id, ...response.data});

    }
    
    
    export const createEntry = async ({ commit }, entry) => {        

        const { data } = await journalApi.post('/entries.json', entry);

        const newEntry = {
            id: data.name,
            ...entry
        }
 
        commit('addEntry', newEntry)
        return newEntry;

    }
    

    export const deleteEntryFB = async ({commit}, id) => {
        await journalApi.delete(`/entries/${id}.json`);
        commit('deleteEntry', id);
    }