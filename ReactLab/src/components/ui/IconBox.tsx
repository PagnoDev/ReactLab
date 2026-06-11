import type { ComponentType, SVGProps } from "react";

interface IconBoxProps {
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    boxClassName?: string;
    iconClassName?: string;
}


export function IconBox({
    Icon,
    boxClassName = "bg-slate-100 text-slate-700",
    iconClassName = "size-8",
}: IconBoxProps) {
    return (
        <div className={`flex size-16 items-center justify-center rounded-2xl ${boxClassName}`.trim()}>
            <Icon className={iconClassName} />
        </div>
    );
}
