import React, { createContext, useContext, useReducer } from "react";

/*A data layer to provide data every other component-
    problem solved: props drilling
*/

export const DataLayerContext = createContext();
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);