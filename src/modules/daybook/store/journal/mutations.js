
// export const myAction = ( state ) => {

// }

export const setEntries = (state, entries) => {
    // state.entries = [...state.entries, ...entries];
    state.entries = entries;
    state.isLoading = false; 
}   


export const updateEntry = ( state, updatedEntry ) => {
    const idx = state.entries.findIndex(entry => entry.id === updatedEntry.id);
    state.entries[idx] = updatedEntry;

}

export const addEntry = ( state, newEntry ) => {
    state.entries.unshift(newEntry);
}

export const deleteEntry = (state, deletedEntry) => {
    state.entries = state.entries.filter(entry => entry.id !== deletedEntry );
}