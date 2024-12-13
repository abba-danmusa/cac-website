import SectionHeader from "./ProcessHeader";
import Services from "./ProcessButtons";

const ProcessSection = () => {
  return (
    <div className="bg-primary">
      <SectionHeader/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-8">
        <div className="md:col-span-2 container md:mx-44">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default ProcessSection