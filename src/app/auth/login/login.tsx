"use client"

import React from "react";
import { useRootStore } from "@/data/context/root-store-context";
import { observer } from "mobx-react-lite";

export const Login: React.FC = observer(() => {
    const { counter, setCounter } = useRootStore();

    return <>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </>
});
