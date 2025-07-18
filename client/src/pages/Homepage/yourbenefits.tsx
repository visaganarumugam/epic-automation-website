import { cn } from "../../lib/utils";
import {
  IconAdjustmentsBolt,
  IconRocket,
  IconShieldCheck,
  IconBulb,
  IconCpu,
  IconSettingsAutomation,
  IconUsers,
  IconTrendingUp,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Cutting-Edge Technology",
      description:
        "Access to the latest and most advanced automation solutions, ensuring your operations remain at the forefront of industry standards.",
      icon: <IconCpu size={40} color="black"  />,
    },
    {
      title: "Streamlined Processes",
      description:
        "Our automation solutions optimize production processes, reducing manual labor, minimizing downtime, and leading to significant cost savings.",
      icon: <IconSettingsAutomation size={40} color="black"  />,
    },
    {
      title: "Versatile Expertise",
      description:
        "Benefit from the vast expertise of our skilled professionals, covering diverse industries and applications, from medical disposables to food processing.",
      icon: <IconUsers size={40} color="black"  />,
    },
    {
      title: "Faster Time-to-Market",
      description: "Our rapid prototyping capabilities and efficient manufacturing process accelerate the development and launch of your products.",
      icon: <IconRocket size={40} color="black"  />,
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with our state-of-the-art technology and streamlined automation solutions, setting new standards in your industry.",
      icon: <IconTrendingUp size={40} color="black"  />,
    },
    {
      title: "Comprehensive Support",
      description:
        "Our team provides end-to-end support, from initial consultation and 3D design services to installation, training, and lifetime technical assistance.",
      icon: <IconAdjustmentsBolt size={40} color="black"  />,
    },
    {
      title: "Reliable Performance",
      description:
        "Count on our machines' precision, durability, and reliability, backed by our stringent quality assurance measures.",
      icon: <IconShieldCheck size={40} color="black"   />,
    },
    {
      title: "Transformative Ideas",
      description: "Leverage our expertise to turn your innovative ideas into reality, empowering you to scale up and achieve your business goals.",
      icon: <IconBulb size={40} color="black"   />,
    },
  ];
  return (
    <div className="bg-gradient-to-tr from-[#FEB130] via-[#fcd48f] to-[#fbe6bf] ">
        <h2 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-3xl md:text-[5.2rem] font-semibold text-center pt-12 mb-2">From Human to Hybrid: Your Gains</h2>
          <p className="text-gray-700 text-base md:text-3xl text-center mt-3 mb-5">
          Epic Automations delivers smart robotics that merge physical precision  <br /> with adaptive digital intelligence.
          </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-full px-10 ">
      
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r max-w-full  py-10 relative group/feature border-neutral-600",
        (index === 0 || index === 4) && "lg:border-l border-neutral-600",
        index < 4 && "lg:border-b border-neutral-600"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/25 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/25 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 ">
        {icon}
      </div>
      <div className="text-[1.7rem] font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-black group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 ">
          {title}
        </span>
      </div>
      <p className="text-[1.2rem] font-mono text-neutral-800 d max-w-sm relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
