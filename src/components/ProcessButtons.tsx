import { JSX } from "react";
import Image from "next/image";

interface ServiceButtonProps {
  icon: JSX.Element;
  title: string;
}

const ServiceButton: React.FC<ServiceButtonProps> = ({ icon, title }) => {
  return (
    <div className="flex items-center space-x-4 border-2 border-secondary p-4 rounded-lg hover:bg-secondary hover:text-primary hover:cursor-pointer transition duration-300">
      {icon}
      <h3 className="text-black font-sans font-semibold text-[13px] md:text-base hover:text-primary">{title}</h3>
    </div>
  );
};

const Services = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-8 py-8">
      <ServiceButton
        icon={<Image className="bg-primary hover:text-primary" src="/svg/company-registration.svg" alt="Company Registration" width={40} height={40} />}
        title="Company Registration"
      />
      <ServiceButton
        icon={<Image className="bg-primary hover:text-primary" src="/svg/business-name-registration.svg" alt="Business Name" width={40} height={40} />}
        title="Business Name Registration"
      />
      <ServiceButton
        icon={<Image className="bg-primary hover:text-primary" src="/svg/incorporated-trustees.svg" alt="Incorporated Trustees" width={40} height={40} />}
        title="Incorporated Trustees"
      />
      <ServiceButton
        icon={<Image className="bg-primary hover:text-primary" src="/svg/post-incorporation.svg" alt="Post Incorporation" width={40} height={40} />}
        title="Post Incorporation Services"
      />
    </div>
  );
};

export default Services;