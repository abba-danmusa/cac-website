import React from 'react'

interface Props {
    bottom?: string | '',
    left?: string | '',
}

const DoubleCycles: React.FC<Props> = ({bottom, left}) => {
  return (
    <div className={`absolute top-[-5.5rem] bottom-[${bottom}] left-[${left}] right-[-6rem]`}>
        <div className="relative ">
            <div className="rounded-full bg-accent w-[267px] h-[254px]"/>
            <div className=" absolute top-[-3.5rem] right-[-2.5rem] rounded-full bg-transparent border border-gray-400 w-[173px] h-[174px] "></div>
        </div>
    </div>
  )
}

export default DoubleCycles