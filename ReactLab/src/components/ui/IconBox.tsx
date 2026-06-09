type IconBoxProps = {
    iconSrc?: string;
    iconAlt?: string;
    boxClassName?: string;
    iconClassName?: string;
    children?: React.ReactNode;
};

export function IconBox({
    iconSrc,
    iconAlt = "",
    boxClassName = "bg-slate-100 text-slate-700",
    iconClassName = "size-8",
    children,
}: IconBoxProps) {
    return (
        <div className={`flex size-16 items-center justify-center rounded-2xl ${boxClassName}`.trim()}>
            {iconSrc ? (
                <img src={iconSrc} alt={iconAlt} aria-hidden={iconAlt ? undefined : true} className={iconClassName} />
            ) : (
                children
            )}
        </div>
    );
}
