export type ColorPack = {
    background?: string;
    foreground?: string;
}

export enum ColorType {
    FOREGROUND,
    BACKGROUND,
}
export function toTailwindColor(color: string, type: ColorType) {
    let colorString;
    if (type === ColorType.BACKGROUND) colorString = `bg-${color}`
    else if (type === ColorType.FOREGROUND) colorString = `text-${color}`
    return colorString;
}