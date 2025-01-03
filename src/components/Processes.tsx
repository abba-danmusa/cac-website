import SectionHeader from "./ProcessHeader";
import Services from "./ProcessButtons";

const ProcessSection = () => {
  return (
    <div className="bg-transparent">
      <SectionHeader/>
      <div className="grid bg-transparent  gap-8 ">
        <div className="md:col-span-2  z-10 mx-4   lg:mx-[7rem] ">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection