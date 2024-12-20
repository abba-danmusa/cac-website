import Image from "next/image"
import Link from "next/link";

const AdditionalInfo = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around space-y-16 px-8 py-8 relative">
      <div className="flex flex-row absolute right-0 top-0">
        <Image src="/svg/additional-info-1.svg" alt="info" className="hidden md:block" width={250} height={100} />
        <Image src="/svg/additional-info-2.svg" alt="info" className="hidden md:block" width={250} height={100} />
      </div>
      <div className="flex flex-col w-full justify-between items-center border-2 border-secondary p-4 md:w-48 h-72 rounded-md hover:bg-secondary hover:text-primary hover:cursor-pointer transition duration-300">
        <h3 className="text-xl font-sans font-bold text-black hover:text-primary">Additional Information</h3>
        <p className="text-black">
          Have some questions? {" "}
          <br/>
          see if the additional  information helps
        </p>
      </div>
      <div className="bg-primary flex flex-col space-y-4 z-10 md:w-96 h-72 p-3 md:p-4">
        <ul className="list-disc  md:pl-5 py-10 space-y-8 text-black">
          <Link href='/revised' className="flex cursor-pointer text-[16px] justify-between items-center ">
            <div className="h-4 w-4 rounded-full  mr-4 bg-secondary"/>
            Our Revised Service Timelines <span>→</span>
          </Link>
          <Link href='/fees' className="flex cursor-pointer text-[16px] justify-between items-center">
          <div className="h-4 w-4 rounded-full mr-4 bg-secondary"/>
            Summary of Our Service Fees <span>→</span>
          </Link>
          <Link href='/reg' className="flex cursor-pointer text-[16px] justify-between items-center">
          <div className="h-4 w-4 rounded-full mr-4 bg-secondary"/>
            How to Use Our Company <br /> Registration Portal <span>→</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo