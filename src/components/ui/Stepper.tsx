import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaRegPaperPlane,
  FaCoffee,
  FaUtensils,
  FaShoppingBag,
  FaConciergeBell,
  FaStarHalf,
} from "react-icons/fa";

// Memoized Step Icon to prevent unnecessary re-renders
const StepIcon = React.memo(({ icon, active }: { icon: JSX.Element, active: boolean }) => (
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: active ? 1 : 1 }}
    transition={{ type: "spring", stiffness: 300 }}
    className={`relative h-8 w-8 flex items-center justify-center text-xl ${
      active ? "bg-[#dc0e2a] text-white rounded-full shadow-lg" : "p-0"
    }`}
  >
    {icon}
  </motion.div>
));

const Stepper: React.FC<{ onStepChange: (index: number) => void }> = ({
  onStepChange,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const stepperRef = useRef<HTMLDivElement>(null);

  const steps = [
    { name: "All paper Products", icon: <FaRegPaperPlane /> },
    { name: "Paper cup machines", icon: <FaCoffee /> },
    { name: "Paper bowl machines", icon: <FaUtensils /> },
    { name: "Paper bag machines", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
    { name: "Paper straw machines", icon: <FaStarHalf /> },
    { name: "Paper wrap machines", icon: <FaRegPaperPlane /> },
    { name: "Napkin machines", icon: <FaCoffee /> },
    { name: "Tissue machines", icon: <FaUtensils /> },
    { name: "New products", icon: <FaShoppingBag /> },
    { name: "Other products", icon: <FaShoppingBag /> },
    { name: "Paper plate machines", icon: <FaConciergeBell /> },
  ];

  const handleClick = (index: number) => {
    setActiveStep(index);
    onStepChange(index);
  };

  const [scrolling, setScrolling] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const navTop = navRef.current?.getBoundingClientRect().top || 0;
      setScrolling(navTop <= 56);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  return (
    <div
      ref={navRef}
      className={`sticky top-14 max-w-screen-2xl left-0 w-full z-40 ${
        scrolling ? "bg-white border-t-[0.5px]" : "bg-[#f2f2f2]"
      }`}
    >
      <div className="relative flex items-center justify-center w-full h-20 mx-auto lg:h-20">
        <div className="w-screen">
          <div
            className="relative flex items-center max-w-screen-2xl justify-start overflow-x-scroll scrollbar-hide w-full"
            ref={stepperRef}
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex items-center pt-1 ${index === 0 ? "pl-[4%]" : ""} ${
                  index === steps.length - 1 ? "pr-[6%]" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <StepIcon icon={step.icon} active={index === activeStep} />
                <span className="text-xs text-black lg:text-xs font-regular mt-2 font-poppins text-center w-20 lg:w-20">
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className="h-1 border-t-2 w-4 lg:w-10"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
