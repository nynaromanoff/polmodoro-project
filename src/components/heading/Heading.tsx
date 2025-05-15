import type React from "react"

type HeadingProps = {
    children: React.ReactNode;
};

export  function Heading ({children} : HeadingProps) {
    return <h1 className='heading'>{children}</h1>
}