import React from 'react';

export default function Friend() {
    return (
        <div className="canvas text-line w-80vmin h-80vmin absolute bottom-0 left-0 truncate">
            <div className="hair-back"></div>
            <div className="ear-back"></div>
            <div className="arm arm-back"></div>
            <div className="body"></div>
            <div className="neck"></div>
            <div className="arm"></div>
            <div className="face absolute top-[13%] left-2/4 w-2/5 h-2/4 bg-[#fca] border-1vmin rounded-face">
                <div className="hair-side"></div>
                <div className="hair-top"></div>
                <div className="ear"></div>
                <div className="mouth"></div>
                <div className="nose"></div>
                <div className="eyebrow"></div>
                <div className="eyebrow"></div>
                <div className="eye"></div>
                <div className="eye"></div>
            </div>
        </div>

    )
}