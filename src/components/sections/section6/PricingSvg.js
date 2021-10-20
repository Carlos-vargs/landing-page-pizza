import React from 'react';

export default function PricingSvg({price, fillValue}) {
    return (
        <svg viewBox="0 0 360 220" width="100%">
            <path
                fill={fillValue}
                d="M.732 193.75s29.706 28.572 43.736-4.512c12.976-30.599 37.005-27.589 44.983-7.061 8.09 20.815 22.83 41.034 48.324 27.781 21.875-11.372 46.499 4.066 49.155 5.591 6.242 3.586 28.729 7.626 38.246-14.243s27.202-37.185 46.917-8.488c19.715 28.693 38.687 13.116 46.502 4.832 7.817-8.282 27.386-15.906 41.405 6.294V0H.48l.252 193.75z"
            />
            <text
                transform="translate(100.726 116.269)"
                fill="#fff"
                fontSize={78.449}
            >
                ${price}
            </text>
        </svg>
    );
}