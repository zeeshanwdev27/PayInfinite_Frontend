import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const SENDMAIL_URL = "https://payinfinite.net/sendmail.php"; // ✅ change to your real URL

function HeroSection() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const bottomContainerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
    },
  };

  const bottomGridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const submitHeroEmail = async (e) => {
    e.preventDefault();
    if (sending) return;

    const clean = email.trim();

    if (!clean) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address.",
      });
      return;
    }

    setSending(true);
    try {
      const fd = new FormData();
      fd.append("form_type", "hero");
      fd.append("email", clean);

      const res = await fetch(SENDMAIL_URL, {
        method: "POST",
        body: fd,
      });

      const text = (await res.text()).trim();

      if (text === "success") {
        Swal.fire({
          icon: "success",
          title: "Submitted!",
          text: "Thanks! We’ll contact you shortly.",
        });
        setEmail("");
      } else if (text === "invalid_email") {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: "Please enter a valid email address.",
        });
      } else if (text === "forbidden_origin") {
        Swal.fire({
          icon: "error",
          title: "Blocked",
          text: "Your domain is not allowed in CORS. Add it in sendmail.php.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Could not submit. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen pt-50 sm:pt-28 lg:pt-32 overflow-hidden">
      <div className="px-4 sm:px-[6%] lg:px-[10%] rounded-4xl py-8 sm:py-10 lg:p-12 backdrop-blur-[14.4px]">
        <div className="grid lg:grid-cols-[2fr_1.5fr] gap-8 sm:gap-0">
          {/* left */}
          <div className="bg-black/50 rounded-2xl h-[260px] sm:h-[360px] lg:h-125 overflow-hidden">
            <video
              src="/HeroSection/signvideo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* right */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-2xl flex flex-col gap-5 sm:gap-6 lg:gap-7"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
            >
              Reliable Merchant Accounts for Secure Payment Processing
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm sm:text-base text-white/70">
              Accept payments seamlessly with merchant account solutions designed
              for businesses that need secure, stable, and uninterrupted payment
              processing. PayInfinite provides specialized merchant accounts
              that allow businesses to process credit cards, debit cards, online
              payments, recurring transactions, and bank transfers through
              trusted payment networks — even for industries that face approval
              challenges with traditional providers.
            </motion.p>

            {/* ✅ HERO EMAIL FORM */}
            <motion.form
              onSubmit={submitHeroEmail}
              variants={itemVariants}
              className="flex flex-col sm:flex-row w-full gap-3 sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your email"
                className="text-black flex-1 bg-white rounded-xl sm:rounded-l-xl sm:rounded-r-none border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: sending ? 1 : 1.05 }}
                whileTap={{ scale: sending ? 1 : 0.95 }}
                className="rounded-xl sm:rounded-l-none sm:rounded-r-xl primary-btn text-white px-6 py-3 font-semibold hover:opacity-90 transition cursor-pointer w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? "Sending..." : "Connect With Us"}
              </motion.button>
            </motion.form>

            <motion.div
              variants={itemVariants}
              className="hidden md:flex flex-col sm:flex-row gap-3 sm:gap-5 mt-4 sm:mt-6 lg:mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (window.LiveChatWidget) window.LiveChatWidget.call("maximize");
                }}
                className="p-2 px-5 rounded-xl text-white border bg-primary border-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-black w-full sm:w-auto"
              >
                Get Started
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+8886519042"
                className="p-2 px-5 rounded-xl border cursor-pointer transition-all duration-300 flex gap-3 items-center justify-center primary-btn hover:opacity-90 w-full sm:w-auto"
              >
                888-651-9042
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="hidden lg:block w-full max-w-8xl rounded-4xl border border-gray-800 px-4 sm:px-8 lg:px-10 py-5 bg-primary/50 mt-8 sm:mt-10 mx-auto"
          variants={bottomContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="flex flex-col gap-3 text-white">
            <motion.h1 variants={itemVariants} className="text-center font-semibold text-3xl">
              Why Businesses Struggle With Traditional Payment Providers
            </motion.h1>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 lg:gap-10 justify-items-center"
              variants={bottomGridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {[
                {
                  title: "Limited Payment Options",
                  p1: "Businesses often struggle to accept",
                  p2: "multiple payment methods due to restricted merchant account capabilities.",
                },
                {
                  title: "Processing Limits & Fund Holds",
                  p1: "Increasing transaction volume can",
                  p2: "lead to rolling reserves, payout delays, or unexpected fund holds.",
                },
                {
                  title: "Integration Difficulties",
                  p1: "Complex payment gateway setups and",
                  p2: "compatibility issues can delay business operations.",
                },
                {
                  title: "Lack of Reliable Support",
                  p1: "Many merchants face slow responses",
                  p2: "or limited assistance when payment issues directly impact revenue flow.",
                },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="py-3 rounded-t-xl cursor-pointer"
                >
                  <div className="flex flex-col gap-2 items-center text-white text-center">
                    <div className="flex flex-col gap-2">
                      <h2 className="font-semibold text-sm sm:text-base lg:text-md">
                        {card.title}
                      </h2>
                      <p className="text-[10px] sm:text-xs">
                        <span className="block">{card.p1}</span>
                        <span className="block">{card.p2}</span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;