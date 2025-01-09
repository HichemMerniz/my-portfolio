// ../ui/icon.tsx

import React from 'react'

interface IconProps {
    as: React.ComponentType<React.SVGProps<SVGSVGElement>>
    className?: string
    // Add more props as needed
}

export const Icon: React.FC<IconProps> = ({ as: IconComponent, className, ...rest }) => {
    return (
        <IconComponent className={`fill-current ${className}`} {...rest} />
    )
}