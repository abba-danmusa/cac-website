import Image from "next/image";
import Link from "next/link";
  
interface ServiceButtonProps {
  icon: string;
  title: string;
  to: string,
  img: string
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, title, to, img }) => {
  return (
    <Link href={to} className="gradient-hover items-center group flex gap-[10px] lg:w-[544px] hover:border-none  sm:w-auto h-[77px] md:h-[104px] border-2 rounded-lg p-[10px] border-[#4D6C4A] transition duration-300">
      <Image src={icon} alt="s" width={100} height={100}  className="md:w-auto w-[33px] h-[35px] md:h-auto block group-hover:hidden"/>
      <Image src={img} alt="s" width={100} height={100}  className="md:w-auto w-[33px] h-[35px] md:h-auto hidden group-hover:block"/>
      {title === "Post Incorporation Services" 
      ? <h3 className={`"text-black font-merriweather  ${title === "Post Incorporation Services" ? "block lg:hidden" : 'hidden'}  font-normal md:leading-[45px]  text-[18px] md:text-[30px] group-hover:text-primary"`}>post Inc. services</h3> 
      : null}
      <h3 className={`"text-black font-merriweather  ${title === "Post Incorporation Services" ? "hidden lg:block" : 'block'}  font-normal md:leading-[45px]  text-[16px] md:text-[30px] group-hover:text-primary"`}>{title}</h3>
    </Link>
  );
};

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-4  py-4">
      <ServiceButton
        to="/business"
        icon={'/assests/build1.svg'}
        img={'/assests/biuld2.svg'}
        title="Company Registration"
      />
      <ServiceButton
        to="https://pre.cac.gov.ng"
        icon={'/assests/person1.svg'}
        img={'/assests/person2.svg'}
        title="Business Name Registration"
      />
      <ServiceButton
        to="/tr"
        icon={'/assests/people1.svg'}
        img={'/assests/people2.svg'}
        title="Incorporated Trustees"
      />
      <ServiceButton
        to="https://post.cac.gov.ng"
        icon={'/assests/hand1.svg'}
        img={'/assests/hand2.svg'}
        title="Post Incorporation Services"
      />
    </div>
  );
};

export default Services;