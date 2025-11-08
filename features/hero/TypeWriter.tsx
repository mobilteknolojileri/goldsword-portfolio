'use client'

import { TypeAnimation } from 'react-type-animation'

const TypeWriter = () => {
    return (
        <TypeAnimation
            sequence={[
                'Flutter Developer',
                2000,
                'Unity Game Developer',
                2000,
                'Python Developer',
                2000,
                'Full Stack Developer',
                2000,
                'Mobile Developer',
                2000,
                'Backend Developer',
                2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text"
        />
    )
}

export default TypeWriter