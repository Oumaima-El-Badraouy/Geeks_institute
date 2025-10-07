import React from 'react'
import {Context} from './App.jsx';
import { useContext } from 'react';
export default function Ex1() {
    const {Mode, setMode} = useContext(Context);

    function handleClick(e) {
        e.preventDefault();
        setMode({ backgroundColor: "black", color: "white" });
    }
    return (
        <div>
            <button onClick={handleClick} style={Mode}>Light Mode</button>
        </div>
    )
}