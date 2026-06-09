type BadgeProps = {
    children: string;
    className?: string;
};

export function Badge({ children, className = "" }: BadgeProps) {
    return (
        <span
            className={`inline-flex rounded-full px-4 py-2 text-sm font-bold uppercase tracking-wide ${className}`.trim()}
        >
            {children}
        </span>
    );
}
