import Image from "next/image";
import Link from "next/link";
import { build1, build2, hand1, hand2, people1, people2, person1, person2 } from "../../public/assests";

interface ServiceButtonProps {
  icon: string;
  title: string;
  to: string,
  img: string
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, title, to, img }) => {
  return (
    <Link href={to} className="gradient-hover items-center group flex gap-[10px] lg:w-[544px]  sm:w-[170px] h-[77px] md:h-[104px] border-2 rounded-lg p-[10px] border-[#4D6C4A] transition duration-300">
      <Image src={icon} alt="s" width={100} height={100}  className="md:w-auto w-[33px] h-[35px] md:h-auto block group-hover:hidden"/>
      <Image src={img} alt="s" width={100} height={100}  className="md:w-auto w-[33px] h-[35px] md:h-auto hidden group-hover:block"/>
      {title === "Post Incorporation Services" 
      ? <h3 className={`"text-black font-sans ${title === "Post Incorporation Services" ? "block md:hidden" : 'hidden'}  font-normal leading-5 md:leading-10 text-[18px] md:text-[34px] group-hover:text-primary"`}>post Inc. services</h3> 
      : null}
      <h3 className={`"text-black font-sans ${title === "Post Incorporation Services" ? "hidden md:block" : 'block'}  font-normal leading-5 md:leading-10 text-[16px] md:text-[34px] group-hover:text-primary"`}>{title}</h3>
    </Link>
  );
};

const Services = () => {
  const buildSrc = build1.src;
  const personSrc = person1.src;
  const peopleSrc = people1.src;
  const handSrc = hand1.src;
  const buildSrc2 = build2.src;
  const personSrc2 = person2.src;
  const peopleSrc2 = people2.src;
  const handSrc2 = hand2.src;
  return (
    <div className="grid grid-cols-2 gap-4  py-4">
      <ServiceButton
        to="/business"
        icon={buildSrc}
        img={buildSrc2}
        title="Company Registration"
      />
      <ServiceButton
        to="https://pre.cac.gov.ng"
        icon={personSrc}
        img={personSrc2}
        title="Business Name Registration"
      />
      <ServiceButton
        to="/tr"
        icon={peopleSrc}
        img={peopleSrc2}
        title="Incorporated Trustees"
      />
      <ServiceButton
        to="https://post.cac.gov.ng"
        icon={handSrc}
        img={handSrc2}
        title="Post Incorporation Services"
      />
    </div>
  );
};

export default Services;