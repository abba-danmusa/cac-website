import SectionHeader from "./ProcessHeader";
import Services from "./ProcessButtons";

const ProcessSection = () => {
  return (
    <div className="bg-transparent mx-12">
      <SectionHeader/>
      <div className="grid md:mt-14 bg-transparent md:mx-[4rem] gap-8">
        <div className="md:col-span-2  z-10">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection