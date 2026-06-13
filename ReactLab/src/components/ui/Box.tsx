import type { ReactNode } from 'react';

type BoxProps = {
    children: ReactNode;
    extraClasses?: string;
};

export function Box({ children, extraClasses = "" }: BoxProps) {
    return (
        <article className={`${extraClasses} gap-x-4 gap-y-4 border border-slate-200 rounded-3xl p-4`}>
            {children}
        </article>
    );
}