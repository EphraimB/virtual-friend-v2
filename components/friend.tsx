import React from 'react';

export default function Friend() {
    return (
        <div className="canvas text-line w-80vmin h-80vmin absolute bottom-0 left-0 truncate">
            <div className="hair-back box-border absolute w-1/5 h-[30%] bg-line rounded-hair-back left-[52%] top-[5%] rotate-6"></div>
            <div className="ear-back"></div>
            <div className="arm arm-back"></div>
            <div className="body"></div>
            <div className="neck"></div>
            <div className="arm"></div>
            <div className="face box-border absolute top-[13%] left-2/4 w-2/5 h-2/4 bg-[#fca] border-1vmin rounded-face shadow-face-effect translate-x-[-50%] translate-y-0">
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