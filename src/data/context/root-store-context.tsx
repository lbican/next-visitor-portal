"use client"

import React, {createContext, PropsWithChildren, useContext} from "react";
import {RootStore} from "@/data/stores/root-store";
import {useLocalObservable} from "mobx-react-lite";

const RootStoreContext = createContext<RootStore | null>(null);

export const RootStoreContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const rootStore = useLocalObservable(() => new RootStore());

    return <RootStoreContext.Provider value={rootStore}>{children}</RootStoreContext.Provider>
}

export const useRootStore = (): RootStore => {
    const context = useContext(RootStoreContext);

    if(!context){
        throw new Error("useRootStore must be used within the context");
    }

    return context;
}


