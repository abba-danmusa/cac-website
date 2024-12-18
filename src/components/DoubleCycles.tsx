import React from 'react'

interface Props {
    bottom?: string | '',
    left?: string | '',
}

const DoubleCycles: React.FC<Props> = ({bottom, left}) => {
  return (
    <div className={`absolute md:top-[-5.5rem] top-[-4rem]  bottom-[${bottom}] left-[${left}] right-[-6rem]`}>
        <div className="relative ">
            <div className="rounded-full bg-accent w-[167px] h-[154px] md:w-[267px] md:h-[254px]"/>
            <div className=" absolute top-[-1rem] md:top-[-3.5rem] right-[-1rem] md:right-[-2.5rem] rounded-full bg-transparent border border-gray-400 w-[120px] h-[120px] md:w-[173px] md:h-[174px] "></div>
        </div>
    </div>
  )
}

export default DoubleCycles