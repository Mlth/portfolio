import PageBlock from "~/components/pageBlock";
import { almenrGreen, almenrOffGreen, almenrOffOrange, almenrOffWhite, almenrOrange, type ColorPack } from "~/utility/colorUtils";
import almenr from '~/resources/almenr.gif'

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
                foreground: 'white',
                middleground: almenrOrange,
                background: almenrOffOrange,
            },
            description: 'THIS IS A DESCRIPTION',
            title: 'Almenr online platform',
            image: './../resources/almenr.gif',
            link: 'https://almenr.dk/u'
        },
        {
            colors: {
                foreground: 'white',
                middleground: almenrGreen,
                background: almenrOffGreen,
            },
            description: 'Gammalstorp is a cool fritidslandsby',
            title: 'Gammalstorp booking system',
            image: 'nop :(',
            link: 'https://almenr.dk/gammalstorp'
        }
    ]

    //Switch sides based on index
    return projects.map((p, i) => {
        const textLeft = i % 2 === 0;

        const imageElement = (
            <div className="overflow-hidden flex justify-center">
                <img 
                    key={almenr} src={almenr} alt="loading..." 
                    className={`block shrink w-auto h-auto
                        ${textLeft ? 'rounded-r-4xl' : 'rounded-l-4xl'}    
                    `} 
                />
            </div>
            
        )
        const textElement = (
            <div className="p-5">
                <h1 className="font-bungee text-4xl">{p.title}</h1>
                <p className="mt-1">{p.description}</p>
            </div>
        )

        return <PageBlock
            colors={{ background: p.colors.background }}
            key={p.title}
        >
            <div
                className="w-full min-h-full rounded-4xl grid grid-cols-2"
                style={{ backgroundColor: p.colors.middleground, color: p.colors.foreground }}
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
            </div>
        </PageBlock>
    })
}