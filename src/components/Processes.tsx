import SectionHeader from "./ProcessHeader";
import Services from "./ProcessButtons";

const ProcessSection = () => {
  return (
    <div className="bg-primary">
      <SectionHeader/>
      <div className="grid grid-cols-3 gap-8 px-8">
        <div className="col-span-2 container mx-44">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection