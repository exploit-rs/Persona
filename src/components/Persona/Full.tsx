import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons, fixedStyle } from '../../utils/font';
import { getImage, IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import Status from './Status';
import { Contact } from './Status/Contacts';
import { SkillProps } from './Status/Skill';

export interface PersonaFullProps {
    username: string,
    alias: string,
    bio: string,
    location?: string,
    org?: string,
    company?: string,
    education?: string,
    avatar: {
        childImageSharp: {
            fluid: IGatsbyImageData,
        }
    },
    contacts?: Contact[],
    skills?: SkillProps[],
}

const PersonaFull: React.FC<PersonaFullProps> = (props: PersonaFullProps) => {
    const p = props
    const avt = getImage(p.avatar.childImageSharp)
    const width = fixedStyle(10);

    return (
        <>
            <div className='w-full max-w-xl bg-wild-kingdom-front-green rounded-lg shadow m-auto opacity-80 demo-1'>
                <div className='flex flex-col items-center p-10 content'>
                    <div className='purple-shadow rounded-full mb-3'>
                        <div className='p-1 rounded-full bg-gradient-to-r from-wild-kingdom-gradation-green to-wild-kingdom-gradation-purple'>
                            <div className='w-28 h-28 rounded-full glitch'>
                                <GatsbyImage image={avt} className='' />
                            </div>
                        </div>
                    </div>
                    <div className=' justify-center'>
                        <div className='text-cy-blue-light mb-1 text-xl font-bold content__title'>{ p.alias }</div>
                    </div>
                    <h3 className='text-lg text-wild-kingdom-text-green mb-2'>{ `@${ p.username }` }</h3>
                    <div>
                        <h3 className='text-cy-blue-light text-lg content__text'>{ p.bio }</h3>
                    </div>
                    <div className='text-wild-kingdom-text-green mt-5'>
                        { p.location && (
                            <div className='flex'>
                                <FontAwesomeIcon icon={icons['location']} className='mr-2' style={ width } />
                                <h4 className='text-wild-kingdom-text-green leading-5'>{ p.location }</h4>
                            </div>
                        )}
                        { p.org && (
                            <h4 className='text-wild-kingdom-text-green'>{ p.org }</h4>
                        )}
                        { p.company && (
                            <h4 className='text-wild-kingdom-text-green'>{ p.company }</h4>
                        )}
                        { p.education && (
                            <div className='flex'>
                                <FontAwesomeIcon icon={icons['education']} className='mr-2' style={ fixedStyle } />
                                <h4 className='text-wild-kingdom-text-green leading-5'>{ p.education }</h4>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            { p.contacts && (
                <Status contacts={ p.contacts } skills={ p.skills } />
            )}
        </>
    )
} 

export default PersonaFull;