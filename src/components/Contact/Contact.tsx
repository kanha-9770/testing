import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { SignupFormDemo } from "./SignupFormDemo";
import { IoClose } from "react-icons/io5"; // Import the close icon
import Link from "next/link";

interface ContactFormProps {
  isContactFormVisible: boolean;
  setContactFormVisible: (visible: boolean) => void;
  setIsFlagOpen: (flag: boolean) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  isContactFormVisible,
  setContactFormVisible,
  setIsFlagOpen,
}) => {
  const contactRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const pathname = usePathname() || "";
  const countryCode = pathname.split("/")[1]?.toLowerCase();

  // Show form when mouse enters the button or the form itself
  const handleMouseEnter = () => {
    setContactFormVisible(true);
    setIsFlagOpen(false);
  };

  // Hide form when the mouse leaves both the button and the form
  const handleMouseLeave = (event: React.MouseEvent) => {
    if (
      contactRef.current &&
      !contactRef.current.contains(event.relatedTarget as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.relatedTarget as Node)
    ) {
      setContactFormVisible(false);
    }
  };

  useEffect(() => {
    const contactElement = contactRef.current;
    const buttonElement = buttonRef.current;

    // Native event listeners require a DOM-compatible event handler
    const handleMouseLeaveNative = (event: MouseEvent) => {
      if (
        contactRef.current &&
        !contactRef.current.contains(event.relatedTarget as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.relatedTarget as Node)
      ) {
        setContactFormVisible(false);
      }
    };

    // Add event listeners for mouse leave
    contactElement?.addEventListener("mouseleave", handleMouseLeaveNative);
    buttonElement?.addEventListener("mouseleave", handleMouseLeaveNative);

    // Cleanup event listeners
    return () => {
      contactElement?.removeEventListener("mouseleave", handleMouseLeaveNative);
      buttonElement?.removeEventListener("mouseleave", handleMouseLeaveNative);
    };
  }, []);

  const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
  };

  return (
    <div className="">
       <button
        type="button"
        className="cursor-pointer font-poppins text-sm font-regular rounded-full  bg-clip-padding  custom-gradient-border overflow-hidden transition-all duration-300 group"
        onMouseEnter={handleMouseEnter} // Open on hover
        onFocus={handleMouseEnter} // Open on focus for accessibility
      >
        <div className="bg-gradient-to-r from-[#483d73] to-red-700 group-hover:bg-gradient-r group-hover:from-white w-20 group-hover:to-white py-1">
          <Link
            className="text-white group-hover:bg-gradient-to-r group-hover:from-[#483d73] group-hover:to-red-700 group-hover:text-transparent group-hover:bg-clip-text  w-full group-hover:font-semibold"
            href={`/${countryCode}/contact`}
          >
            Enquire
          </Link>
        </div>
      </button>

      <AnimatePresence>
        {isContactFormVisible && (
          <motion.div
            ref={contactRef}
            className="fixed top-14 right-0 z-50 mr-8 mt-0 w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] bg-white rounded-lg overflow-hidden"
            initial={{ y: "-100%", height: 0, opacity: 0 }}
            animate={{ y: 0, height: "35rem", opacity: 1 }}
            exit={{ y: "-100%", height: 0, opacity: 0 }}
            transition={transition}
            onMouseEnter={handleMouseEnter} // Keep form visible when entering it
            onMouseLeave={handleMouseLeave} // Hide form when leaving it
          >
            {/* Header with text and close icon */}
            <div className="flex justify-between items-center p-4">
              <h2 className="font-montserrat text-xl text-neutral-800 dark:text-neutral-200">
                GET IN TOUCH WITH US
              </h2>
              <button
                onClick={() => setContactFormVisible(false)}
                aria-label="Close contact form"
                className="text-gray-600 hover:text-gray-800"
              >
                <IoClose size={24} />
              </button>
            </div>

            {/* Content */}
            <SignupFormDemo />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
