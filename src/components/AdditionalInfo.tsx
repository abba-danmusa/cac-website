import Image from "next/image"

const AdditionalInfo = () => {
  return (
    <div className="flex flex-row justify-around space-y-16 px-8 py-8 relative">
      <div className="flex flex-row absolute right-0 top-0">
        <Image src="/svg/additional-info-1.svg" alt="info" width={250} height={100} />
        <Image src="/svg/additional-info-2.svg" alt="info" width={250} height={100} />
      </div>
      <div className="flex flex-col justify-between items-center border-2 border-secondary p-4 w-48 h-72 rounded-md hover:bg-secondary hover:text-primary hover:cursor-pointer transition duration-300">
        <h3 className="text-xl font-sans font-bold text-black hover:text-primary">Additional Information</h3>
        <p>
          Have some questions? {" "}
          <br/>
          see if the additional  information helps
        </p>
      </div>
      <div className="bg-primary flex flex-col space-y-4 z-10 w-96 h-72 p-4">
        <ul className="list-disc pl-5 py-10 space-y-8">
          <li className="flex justify-between items-center gap-4">
            Our Revised Service Timelines <span>→</span>
          </li>
          <li className="flex justify-between items-center">
            Summary of Our Service Fees <span>→</span>
          </li>
          <li className="flex justify-between items-center">
            How to Use Our Company Registration Portal <span>→</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdditionalInfo