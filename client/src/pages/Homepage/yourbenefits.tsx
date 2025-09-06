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
import { AnimatedSection, FadeUpSection } from "../../components/AnimatedSection";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Cutting-Edge Technology",
      description:
        "Access to the latest and most advanced automation solutions, ensuring your operations remain at the forefront of industry standards.",
      icon: <IconCpu size={50}  />,
    },
    {
      title: "Streamlined Processes",
      description:
        "Our automation solutions optimize production processes, reducing manual labor, minimizing downtime, and leading to significant cost savings.",
      icon: <IconSettingsAutomation size={50}   />,
    },
    {
      title: "Versatile Expertise",
      description:
        "Benefit from the vast expertise of our skilled professionals, covering diverse industries and applications, from medical disposables to food processing.",
      icon: <IconUsers size={50}   />,
    },
    {
      title: "Faster Time-to-Market",
      description: "Our rapid prototyping capabilities and efficient manufacturing process accelerate the development and launch of your products.",
      icon: <IconRocket size={50}   />,
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of the competition with our state-of-the-art technology and streamlined automation solutions, setting new standards in your industry.",
      icon: <IconTrendingUp size={50}   />,
    },
    {
      title: "Comprehensive Support",
      description:
        "Our team provides end-to-end support, from initial consultation and 3D design services to installation, training, and lifetime technical assistance.",
      icon: <IconAdjustmentsBolt size={50}   />,
    },
    {
      title: "Reliable Performance",
      description:
        "Count on our machines' precision, durability, and reliability, backed by our stringent quality assurance measures.",
      icon: <IconShieldCheck size={50}   />,
    },
    {
      title: "Transformative Ideas",
      description: "Leverage our expertise to turn your innovative ideas into reality, empowering you to scale up and achieve your business goals.",
      icon: <IconBulb size={50}   />,
    },
  ];
  return (
    <div id="your-benefits" className="bg-[#ffe7b6] ">
      <FadeUpSection>
        <h2 className="bg-gradient-to-bl from-orange-600 via-black to-orange-600 bg-clip-text text-transparent text-4xl lg:text-[5.2rem] xl:text-[4.2rem] 2xl:text-[5.2rem] font-bold sm:font-semibold text-center pt-8 sm:pt-10 md:pt-12 mb-2 px-4 sm:px-6 md:px-0">From Human to Hybrid: <br className="block sm:hidden" />  Your Gains</h2>
      </FadeUpSection>
      <AnimatedSection
        customAnimation={{ y: 30, opacity: 0, duration: 0.8, delay: 0.2 }}
      >
        <p className="text-black font-semibold leading-tight mt-5 text-lg lg:text-3xl xl:text-2xl 2xl:text-3xl text-center mb-5 px-4 sm:px-6 md:px-0">
        Epic Automations delivers smart robotics that merge physical precision  <br className="hidden sm:block" /> with adaptive digital intelligence.
        </p>
      </AnimatedSection>
      <AnimatedSection 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 relative z-10 py-6 sm:py-8 md:py-10 max-w-full px-4 sm:px-6 md:px-10 xl:px-16 2xl:px-10"
        customAnimation={{ y: 50, opacity: 0, duration: 1, delay: 0.4, stagger: 0.1 }}
      >
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </AnimatedSection>
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
      data-animate-child
      className={cn(
        "flex flex-col lg:border-r max-w-full py-6 sm:py-8 md:py-10 relative group/feature border-neutral-600",
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
      <div className="mb-4 relative z-10 px-0 sm:px-6 md:px-10 group-hover/feature:scale-110 transition duration-200 group-hover/feature:text-orange-600 ">
        <div className="scale-85 sm:scale-90 md:scale-100">
          {icon}
        </div>
      </div>
      <div className="text-2xl lg:text-[1.7rem] font-bold mb-2 relative z-10 px-4 sm:px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-7 sm:h-5 md:h-6 group-hover/feature:h-10 sm:group-hover/feature:h-7 md:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-black group-hover/feature:bg-orange-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 mb-5 transition duration-200 inline-block group-hover/feature:text-transparent group-hover/feature:bg-clip-text group-hover/feature:bg-gradient-to-tr from-orange-600 via-black to-orange-600 text-black">
          {title}
        </span>
      </div>
      <p className="text-lg leading-tight lg:text-[1.2rem] font-semibold text-neutral-800 max-w-sm relative z-10 px-4 sm:px-6 md:px-10">
        {description}
      </p>
    </div>
  );
};
