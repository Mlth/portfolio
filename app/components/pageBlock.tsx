import type { ReactNode } from "react";
import type { ColorPack } from "~/utility/colorUtils";

interface PageBlockProps {
    colors: ColorPack;
    children: ReactNode;
}

export default function PageBlock({ colors, children }: PageBlockProps) {

    return (
        <div 
            className={`min-h-dvh px-50 py-30 flex`}
            style={{ backgroundColor: colors.background }}
        >
            {children}
        </div>
    )
}