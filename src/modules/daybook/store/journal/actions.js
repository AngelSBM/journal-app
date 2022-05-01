
// export const myAction = async ({ commit }) => {

    import journalApi from "@/api/journalApi"


    // }
    
    export const loadEntries = async ({ commit }) => {
        const { data } = await journalApi.get('/entries.json');
        const entries = [];
        for (const id of Object.keys(data)) {
            entries.push({
                id,
                ...data[id]
            })
        }
        console.log(data);
        commit('setEntries', entries)
    }
    
    export const updateEntry = async (/*{ commit }*/) => {
    
    }
    
    
    export const createEntry = async (/*{ commit }*/) => {
    
    }
    