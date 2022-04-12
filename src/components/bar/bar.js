import { Bar, BarIDValue } from "./style_bar.js"
import React, { useState, useEffect, useRef, createRef } from 'react'

export function calcHeightBar(value, step) {
    console.log("calcHeightBar")
    // console.log("CALC-->VALUE:", value)
    const height = (Math.log(value) * step / 2);      //in 2 Hälften auf Teilen um negativ und postiv zu ermöglichen 
    if (height === 0) { return ((Math.log(2) / 2) + 0.2) * step / 2 }// Um den Wert für  1 offset gut zu setzen 
    else { return height; }
}
// Definition 
export function setStyleBar(value, index, marked, compare, finish, step) {
    console.log("setStyleBar")

    //KONTROLLE OB INDEX passt es !
    //console.log("index:", index)
    //console.log("list.index:", list[index].id)
    // Defint
    let barType;
    let tempvalue;
    if (value === 0) {
        barType = "ZeroBar";
        tempvalue = 1;
    }
    else if (value > 0) {
        barType = "PosBar";
        tempvalue = Math.abs(value);
    }
    else {
        barType = "NegBar";
        tempvalue = Math.abs(value)
    }
    const height = calcHeightBar(tempvalue, step)
    const bar = (
        <Bar barType={barType} key={index.toString()} ref={React.createRef()} height={height} left={0} marked={marked} compare={compare} finish={finish}>
            <BarIDValue barId={barType} padding={465.12 / height} marked={marked} compare={compare} finish={finish}>{value} </BarIDValue>
        </Bar>

    );
    return bar;
}

export function createBarList(list) {
    console.log("createBarList")
    console.log(list)
    const step = (100 / Math.log(999)) //999==max value --> Prozess nicht optimiert um nicht jedes mal neu zu ermitteln 
    // Ref für BarRefs vorbeirtungen 
    ///if (barRefs.current.length > list.length) {
    //}

    //createRefs for Elements  
    // Ertstellung barlist
    // Erstellung User 
    // TODO über arbeiten in einer funktion auslagern 
    return list.map((value, index) => setStyleBar(value.value, value.id, value.marked, value.compare, value.finish, step))
}

/// rausnehmen später 
