import { ReactNode } from 'react';

type BoxProps = {
    children: ReactNode;
    extraClasses?: string;
};

export function Box({ children, extraClasses = "" }: BoxProps) {
    return (
        <article className={`${extraClasses}`}>
            {children}
        </article>
    );
}