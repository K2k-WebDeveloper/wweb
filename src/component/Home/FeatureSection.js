import { features } from "./constants";

const FeatureSection = () => {
  return (
    <div className="px-5 relative mt-20 border-b  ">
      <div className="text-center">
        
        <h2 className="text-3xl sm:text-5xl lg:text-2xl font-bold mt-10 lg:mt-20 tracking-wide">
        Premium Cannabis Products for Every Lifestyle
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-[#6ab33c] justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;