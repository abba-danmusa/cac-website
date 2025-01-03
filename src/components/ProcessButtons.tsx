import Image from "next/image";
import Link from "next/link";
import { build1, build2, hand1, hand2, people1, people2, person1, person2 } from "@/assests";

interface ServiceButtonProps {
  icon: {src: string};
  title: string;
  to: string,
  img: {src: string}
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, title, to, img }) => {
  return (
    <Link href={to} className="gradient-hover items-center group flex gap-[10px] lg:w-[544px]  sm:w-[170px] h-[77px] md:h-[104px] border-2 rounded-lg p-[10px] border-[#4D6C4A] transition duration-300">
      <Image src={icon.src} alt="s" width={100} height={100}  className="md:w-auto w-[33px] h-[35px] md:h-auto block group-hover:hidden"/>
      <Image src={img.src} alt="s" width={100} height={100}  className="md:w-auto w-[33px] h-[35px] md:h-auto hidden group-hover:block"/>
      {title === "Post Incorporation Services" 
      ? <h3 className={`"text-black font-sans ${title === "Post Incorporation Services" ? "block md:hidden" : 'hidden'}  font-normal leading-5 md:leading-10 text-[18px] md:text-[34px] group-hover:text-primary"`}>post Inc. services</h3> 
      : null}
      <h3 className={`"text-black font-sans ${title === "Post Incorporation Services" ? "hidden md:block" : 'block'}  font-normal leading-5 md:leading-10 text-[16px] md:text-[34px] group-hover:text-primary"`}>{title}</h3>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-4  py-4">
      <ServiceButton
        to="/business"
        icon={build1}
        img={build2}
        title="Company Registration"
      />
      <ServiceButton
        to="https://pre.cac.gov.ng"
        icon={person1}
        img={person2}
        title="Business Name Registration"
      />
      <ServiceButton
        to="/tr"
        icon={people1}
        img={people2}
        title="Incorporated Trustees"
      />
      <ServiceButton
        to="https://post.cac.gov.ng"
        icon={hand1}
        img={hand2}
        title="Post Incorporation Services"
      />
    </div>
  );
};

export default Services;