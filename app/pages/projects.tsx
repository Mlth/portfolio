import PageBlock from "~/components/pageBlock";
import { ColorType, toTailwindColor, type ColorPack } from "~/utility/colorUtils";

type Project = {
    colors: ColorPack;
    image: string;
    title: string;
    description: string;
    link: string;
}

export default function Projects() {
    const projects: Project[] = [
        {
            colors: {
                foreground: toTailwindColor('almenroffwhite', ColorType.FOREGROUND),
                background: toTailwindColor('almenrorange', ColorType.BACKGROUND),
            },
            description: 'THIS IS A DESCRIPTION',
            title: 'Almenr online platform',
            image: 'no image :/',
            link: 'https://almenr.dk/u'
        }
    ]

    //Switch sides based on index
    return projects.map((p, i) => {

        const imageElement = (
            <div></div>
        )
        const textElement = (
            <div>
                <div>{p.title}</div>
                <div>{p.description}</div>
            </div>
        )
        const textLeft = i % 2 === 0;

        return <PageBlock
            colors={p.colors}
            key={p.title}
        >
            {textLeft ? (
                <> 
                    {textElement}
                    {imageElement}
                </>
            ) : (
                <>
                    {imageElement}
                    {textElement}
                </>
            )}
        </PageBlock>
    })
}