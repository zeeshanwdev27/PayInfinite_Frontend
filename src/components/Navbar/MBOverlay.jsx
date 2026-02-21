import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {  
  PhoneCall,
  X,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function MbOverlay({ isOpen, setIsOpen }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { 
      text: "Home", 
      path: "/"
    },
    { 
      text: "Industries", 
      submenu: [
        { text: "Call Centers", path: "/callcenters" },
        { text: "Resturants Business", path: "/restaurants" },
        { text: "Outbound Product Selling", path: "/outbound" },
        { text: "Medical Related Campaigns", path: "/medical" },
        { text: "Digital Books", path: "/digitalbooks" },
        { text: "Tech Support", path: "/techsupport" },
        { text: "Groceries", path: "/groceries" },
        { text: "E-commerce Websites", path: "/ecommerce-websites" },
        { text: "Travel", path: "/travel" },
        { text: "Vape", path: "/vape" },
        { text: "Web Design & Marketing", path: "/web-design" },
      ]
    },
    { 
      text: "Solutions", 
      submenu: [
        { text: "Merchant Services", path: "/merchant-services" },
        { text: "ACH", path: "/ach" },
        { text: "Chargeback Management", path: "/chargeback-management" },
        { text: "High-Risk Merchant Account", path: "/high-risk-merchant-account" },
        { text: "3D Secure", path: "/3d-secure" },
        { text: "Fraud Prevention", path: "/fraud-prevention" },
        { text: "Payment Gateway", path: "/payment-gateway" },
        { text: "MOTO Processing", path: "/moto-processing" },
        { text: "Level 2 & 3 Processing", path: "/level-2-and-3-credit-card-processing" },
        { text: "Recurring Payments", path: "/recurring-payment" },
        { text: "Mobile Payments", path: "/mobile-payments" },
        { text: "Virtual Terminal", path: "/virtual-terminal" },
        { text: "Online Payments", path: "/online-payment" },
        { text: "B2B Payments", path: "/b2b-payments" },
        
      ]
    },
    { 
      text: "Resources", 
      submenu: [
        { text: "Developer", path: "/developer" },
        { text: "Partner", path: "/partner" },
      ]
    },
    { 
      text: "Blogs", 
      path: "/blogs"
    },
  ];

  // Animation variants
  const overlayVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  // Close overlay when clicking escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  const handleSubmenuToggle = (itemText) => {
    setActiveSubmenu(activeSubmenu === itemText ? null : itemText);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
      setActiveSubmenu(null);
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-[60] lg:hidden"
          onClick={handleBackdropClick}
          initial="closed"
          animate="open"
          exit="closed"
          variants={backdropVariants}
        >
          {/* Menu Panel - Full screen without blur */}
          <motion.div 
            className="absolute top-0 left-0 right-0 bottom-0 bg-white flex flex-col w-full h-full overflow-hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            
            {/* Header */}
            <div className="flex-shrink-0 flex items-center justify-end p-3 border-b border-gray-100">
              <button
                onClick={handleLinkClick}
                className="mt-1 p-3 rounded-2xl bg-amber-500 hover:from-indigo-50 hover:to-purple-50/30 border border-gray-200/60 hover:border-indigo-200 transition-all duration-300 active:scale-95 mr-2"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Main Menu Items - Scrollable area */}
            <div className="flex-1 overflow-y-auto w-full">
              <div className="p-4 space-y-1 w-full">
                {menuItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 w-full">
                    {item.submenu ? (
                      // Menu item with submenu
                      <>
                        <button
                          onClick={() => handleSubmenuToggle(item.text)}
                          className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
                        >
                          <span className="text-gray-800 group-hover:text-indigo-700 font-semibold text-base whitespace-nowrap overflow-hidden text-ellipsis">
                            {item.text}
                          </span>
                          <ChevronRight className={`w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-transform duration-300 flex-shrink-0 ${
                            activeSubmenu === item.text ? 'rotate-90' : ''
                          }`} />
                        </button>

                        {/* Submenu */}
                        {activeSubmenu === item.text && (
                          <div className="pl-4 pr-4 pb-3 space-y-2 w-full">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.path}
                                onClick={handleLinkClick}
                                className="block p-3 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-100 hover:border-orange-200 transition-all duration-300 group w-full"
                              >
                                <span className="text-black group-hover:text-orange-700 font-medium text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                  {subItem.text}
                                </span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      // Regular menu item without submenu
                      <Link
                        to={item.path}
                        onClick={handleLinkClick}
                        className="flex items-center justify-between w-full p-4 rounded-xl hover:bg-indigo-50 transition-all duration-300 group"
                      >
                        <span className="text-gray-800 group-hover:text-indigo-700 font-semibold text-base whitespace-nowrap overflow-hidden text-ellipsis">
                          {item.text}
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Optional: Call to Action Buttons */}
            <div className="flex-shrink-0 p-4 border-t border-gray-100 space-y-3 w-full md:max-w-2xl md:mx-auto">
              <Link
                 to="tel:+8886519042"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-3 text-lg w-full p-4 border-2 border-amber-500 text-amber-500 hover:bg-indigo-50 rounded-xl font-semibold transition-all duration-300 active:scale-95"
              >
                <PhoneCall className="w-5 h-5" strokeWidth={3} />
                888-651-9042
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MbOverlay;