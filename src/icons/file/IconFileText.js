// @flow
import * as React from 'react';

import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconFileText = ({ className = '', height = 32, title, width = 32 }: Props) => (
    <AccessibleSVG
        className={`icon-file-text ${className}`}
        height={height}
        title={title}
        viewBox="0 0 32 32"
        width={width}
    >
        <path
            clipRule="evenodd"
            d="M24.5,27.5h-17c-0.6,0-1-0.4-1-1v-21c0-0.6,0.4-1,1-1h12l6,6v16
                C25.5,27.1,25.1,27.5,24.5,27.5z"
            fill="#3464AF"
            fillRule="evenodd"
        />
        <path
            clipRule="evenodd"
            d="M24,26.5H8c-0.3,0-0.5-0.2-0.5-0.5V6c0-0.3,0.2-0.5,0.5-0.5h11.5
                l5,5V26C24.5,26.3,24.3,26.5,24,26.5z"
            fill="#FFFFFF"
            fillRule="evenodd"
        />
        <path clipRule="evenodd" d="M19.5,4.5l6,6h-5c-0.6,0-1-0.4-1-1V4.5z" fill="#3464AF" fillRule="evenodd" />
        <rect clipRule="evenodd" fill="#3464AF" fillRule="evenodd" height="1" width="11" x="10.5" y="14.5" />
        <rect clipRule="evenodd" fill="#3464AF" fillRule="evenodd" height="1" width="11" x="10.5" y="17.5" />
        <rect clipRule="evenodd" fill="#3464AF" fillRule="evenodd" height="1" width="8" x="10.5" y="20.5" />
    </AccessibleSVG>
);

export default IconFileText;
