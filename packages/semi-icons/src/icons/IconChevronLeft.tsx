import * as React from 'react';
import { convertIcon } from '../components/Icon';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            focusable={false}
            aria-hidden={true}
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2782 4.23933C16.864 4.82511 16.864 5.77486 16.2782 6.36065L10.6213 12.0175L16.2782 17.6744C16.864 18.2601 16.864 19.2099 16.2782 19.7957C15.6924 20.3815 14.7426 20.3815 14.1569 19.7957L7.43934 13.0782C6.85355 12.4924 6.85355 11.5426 7.43934 10.9568L14.1569 4.23933C14.7426 3.65354 15.6924 3.65354 16.2782 4.23933Z"
                fill="currentColor"
            />
        </svg>
    );
}

const IconComponent = convertIcon(SvgComponent, 'chevron_left');
export default IconComponent;