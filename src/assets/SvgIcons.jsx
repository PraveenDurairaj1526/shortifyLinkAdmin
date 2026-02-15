import React from "react"
export const LinkIcon = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 1000 1000"
            fill="none"
            stroke="currentColor"
            strokeWidth="90"
            strokeLinecap="round"
            strokeMiterlimit="10"
            className={className}
        >
            <path d="M584.77,365.58H687.48c73.93,0,134.42,60.49,134.42,134.42A134.83,134.83,0,0,1,687.48,634.42H584.77" />
            <path d="M415.23,634.42H312.52c-73.93,0-134.42-60.49-134.42-134.42A134.83,134.83,0,0,1,312.52,365.58H415.23" />
            <line x1="351.1" y1="500" x2="648.9" y2="500" />
        </svg>

    )
}

export const ClickCountIcon = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 -0.08 20 20"
            fill="currentColor"
            className={className}
        >
            <path d="M15.51,14.21,12,11.85,13.6,9.49a.38.38,0,0,0-.34-.58l-5,.38A.37.37,0,0,0,8,9.45a.36.36,0,0,0-.05.33l1.56,4.79a.37.37,0,0,0,.3.26h.05a.34.34,0,0,0,.31-.17l1.47-2.19,3.48,2.36a.36.36,0,0,0,.2.06.4.4,0,0,0,.32-.16A.37.37,0,0,0,15.51,14.21ZM10,13.6,8.79,10l3.76-.28Z" />
            <path d="M6.46,11.18l-1.62.24a.37.37,0,0,0-.32.42.38.38,0,0,0,.37.32h.05l1.62-.23a.38.38,0,0,0,.32-.43A.38.38,0,0,0,6.46,11.18Z" />
            <path d="M6.1,8.41a.36.36,0,0,0,.32-.18.38.38,0,0,0-.13-.52l-1.4-.83A.38.38,0,0,0,4.37,7a.38.38,0,0,0,.13.51l1.41.84A.45.45,0,0,0,6.1,8.41Z" />
            <path d="M9.19,7a.36.36,0,0,0,.36.29h.08a.37.37,0,0,0,.29-.45l-.34-1.6A.38.38,0,0,0,9.14,5a.38.38,0,0,0-.29.45Z" />
        </svg>

    )
}

export const ArrowUpDownIcon = ({ className }) => {
    return (
        <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className={className}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
        </svg>
    );
};

export const LogoutIcon = ({ className }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="currentColor"
            className={className}
        >
            <path d="M6,30H18a2.0023,2.0023,0,0,0,2-2V25H18v3H6V4H18V7h2V4a2.0023,2.0023,0,0,0-2-2H6A2.0023,2.0023,0,0,0,4,4V28A2.0023,2.0023,0,0,0,6,30Z" />
            <polygon points="20.586 20.586 24.172 17 10 17 10 15 24.172 15 20.586 11.414 22 10 28 16 22 22 20.586 20.586" />
        </svg>
    )
}

export const GlobeIcon = ({ className }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            className={className}
        >
            <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
            <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
            <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
            <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
            <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
            <line x1="32" y1="6.99" x2="32" y2="56.7" />
            <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
            <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
            <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
        </svg>
    );
};



