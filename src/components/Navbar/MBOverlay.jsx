import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { PhoneCall, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function MbOverlay({ isOpen, setIsOpen }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/aboutus" },
    {
      text: "Services",
      submenu: [
        { text: "High-Risk", path: "/highrisk" },
        { text: "Low-Risk", path: "/lowrisk" },
      ],
    },
    { text: "Contact Us", path: "/contactus" },
  ];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="absolute top-0 right-0 w-full h-full bg-black text-white flex flex-col"
          >
            {/* Header */}
            <div className="flex justify-end p-4 border-b border-white/10">
              <button
                onClick={handleClose}
                className="p-3 rounded-2xl bg-blue-400/10 border border-blue-400/30 hover:bg-blue-400/20 transition"
              >
                <X className="w-5 h-5 text-blue-400" />
              </button>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2">

              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-white/10">

                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === item.text ? null : item.text
                          )
                        }
                        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold hover:text-blue-400 transition"
                      >
                        {item.text}
                        <ChevronRight
                          className={`transition-transform ${
                            activeSubmenu === item.text
                              ? "rotate-90 text-blue-400"
                              : "text-white/60"
                          }`}
                        />
                      </button>

                      {activeSubmenu === item.text && (
                        <div className="pb-4 space-y-3">
                          {item.submenu.map((sub, i) => (
                            <NavLink
                              key={i}
                              to={sub.path}
                              onClick={handleClose}
                              className={({ isActive }) =>
                                `block py-3 px-4 rounded-xl transition ${
                                  isActive
                                    ? "bg-blue-400/15 text-blue-400 border border-blue-400/30"
                                    : "text-white/80 hover:bg-white/5 hover:text-blue-400"
                                }`
                              }
                            >
                              {sub.text}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={handleClose}
                      className={({ isActive }) =>
                        `block py-5 text-lg font-semibold transition ${
                          isActive
                            ? "text-blue-400"
                            : "text-white hover:text-blue-400"
                        }`
                      }
                    >
                      {item.text}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="p-6 border-t border-white/10">
              <a
                href="tel:+8886519042"
                onClick={handleClose}
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-blue-400 text-blue-400 rounded-xl font-semibold hover:bg-blue-400/10 transition"
              >
                <PhoneCall className="w-5 h-5" />
                888-651-9042
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MbOverlay;