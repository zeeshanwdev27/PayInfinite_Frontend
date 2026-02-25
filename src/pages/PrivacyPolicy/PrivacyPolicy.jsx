import React from "react";
import {
  ShieldCheck,
  Lock,
  ClipboardList,
  Globe,
  Cookie,
  Link2,
  Users,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function PrivacyPolicy() {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 lg:pt-40 pb-16 overflow-hidden text-white bg-black">
      {/* ✅ Background Glow (behind everything) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* TOP RIGHT */}
        <div
          className="
            absolute -top-40 -right-40
            w-[520px] h-[520px] sm:w-[620px] sm:h-[620px] lg:w-[760px] lg:h-[760px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_72%)]
            blur-[120px] opacity-80
          "
        />
        {/* BOTTOM LEFT */}
        <div
          className="
            absolute -bottom-48 -left-48
            w-[560px] h-[560px] sm:w-[680px] sm:h-[680px] lg:w-[860px] lg:h-[520px]
            rounded-full
            bg-[radial-gradient(circle_at_center,#1E40FF_0%,#032C9D_35%,#021B5A_60%,transparent_72%)]
            blur-[150px] opacity-80
          "
        />

        {/* ✅ Soft fade so it blends nicely */}
        <div
          className="absolute inset-0"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 18%, black 82%, transparent 100%)",
          }}
        />
      </div>

      {/* ✅ Page Content */}
      <div className="relative z-10 px-4 sm:px-[6%] lg:px-[10%]">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-3 sm:gap-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-white/70">
            At PayInfinite, we place the highest priority on protecting your
            privacy and ensuring the security of the limited information we
            collect.
          </p>
        </div>

        {/* Content Card */}
        <div className="relative max-w-5xl mx-auto mt-10 sm:mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-8 lg:p-10">
          {/* subtle inner tint for readability */}
          <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            {/* Introduction */}
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Introduction</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  At PayInfinite, we place the highest priority on protecting
                  your privacy and ensuring the security of the limited
                  information we collect. We understand that trust is the
                  foundation of every business relationship, especially when
                  connecting businesses with secure payment processing and
                  merchant account solutions.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  This Privacy Policy explains how PayInfinite collects, uses,
                  protects, and shares information when you use our website or
                  submit information through our merchant account application
                  forms (collectively referred to as our “Services”).
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  By submitting information through our website, you provide
                  consent for PayInfinite to collect and use your information as
                  described in this policy, including consent to receive
                  communications via email, text messages, and other channels
                  where permitted by law.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  This policy is designed to comply with applicable privacy
                  regulations including GDPR, CAN-SPAM Act, and CCPA. By
                  accessing or using our Services, you acknowledge that you have
                  read, understood, and agree to the practices described in this
                  Privacy Policy.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Information We Collect */}
            <div className="flex items-start gap-3">
              <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-3 w-full">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Information We Collect
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  To maintain data privacy and minimize unnecessary collection,
                  we gather only essential information required to connect you
                  with appropriate merchant account services.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    {
                      title: "Business Name",
                      desc: "To identify the business requesting services",
                    },
                    {
                      title: "Business Owner Name",
                      desc: "For communication and application purposes",
                    },
                    {
                      title: "Business Owner Phone Number",
                      desc: "To contact you regarding your inquiry",
                    },
                    {
                      title: "Business Owner Email Address",
                      desc: "For application updates and service communication",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/10 bg-black/30 p-4"
                    >
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-white/70 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    We do{" "}
                    <span className="text-white font-semibold">not</span>{" "}
                    collect sensitive financial information such as Social
                    Security Numbers, bank account credentials, or credit card
                    details through our website forms.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Information Collected Automatically */}
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Information Collected Automatically
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Like most websites, we automatically collect certain
                  non-personal information, including:
                </p>

                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1">
                  <li>Browser type</li>
                  <li>Date and time of visit</li>
                  <li>Pages viewed on our website</li>
                </ul>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  This information is collected through cookies and similar
                  technologies to improve website performance and user
                  experience.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* How We Use Your Information */}
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  How We Use Your Information
                </h2>

                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                  <li>Processing merchant account inquiries</li>
                  <li>Communicating regarding applications and services</li>
                  <li>
                    Connecting businesses with suitable payment processing
                    partners
                  </li>
                  <li>Improving website functionality and services</li>
                  <li>Sending service updates and promotional communications</li>
                  <li>Analyzing usage trends to enhance user experience</li>
                </ul>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4 mt-2">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    When you submit information through our forms, you may
                    receive email communications and updates, promotional offers
                    or service announcements, and information related to
                    merchant account solutions.
                  </p>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-2">
                    PayInfinite does{" "}
                    <span className="text-white font-semibold">not</span> sell or
                    rent personal information to third parties for marketing
                    purposes. You may opt out of marketing communications at any
                    time through unsubscribe links or direct contact requests.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Sharing */}
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Sharing of Your Information
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We may share submitted information with trusted third-party
                  merchant service providers strictly for the purpose of:
                </p>
                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                  <li>Evaluating eligibility for merchant services</li>
                  <li>Contacting you to complete onboarding</li>
                  <li>Providing payment processing solutions</li>
                </ul>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We do not sell your personal information.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Rights */}
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Your Rights</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  You have the following rights regarding your personal
                  information:
                </p>
                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                  <li>Right to Access your data</li>
                  <li>Right to Correct inaccurate information</li>
                  <li>Right to Request Deletion</li>
                  <li>Right to Restrict Processing</li>
                  <li>Right to Object to processing</li>
                  <li>Right to Opt-Out of marketing communications</li>
                </ul>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  You may exercise these rights by contacting us using the
                  details listed in the Contact section below. Requests will be
                  processed in accordance with GDPR, CAN-SPAM Act, and CCPA
                  regulations.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Data Retention */}
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Data Retention
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We retain submitted information only as long as necessary to
                  fulfill service purposes or comply with legal obligations.
                  Typically, application information is retained for up to one
                  (1) year after initial inquiry unless further engagement
                  occurs. After this period, information may be securely deleted
                  or anonymized.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Security */}
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Security</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  PayInfinite implements industry-standard security measures
                  including encrypted data transmission, secure servers with
                  restricted access, routine security monitoring, and staff
                  privacy and security training. While we take reasonable steps
                  to protect information, no online transmission or storage
                  method is completely secure.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Cookies */}
            <div className="flex items-start gap-3">
              <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Our website uses cookies to enhance user experience and
                  website functionality. Types of cookies used include:
                </p>
                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                  <li>Essential Cookies</li>
                  <li>Performance &amp; Analytics Cookies</li>
                  <li>Functionality Cookies</li>
                </ul>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Users may control cookie settings through their browser
                  preferences.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Third-Party Links */}
            <div className="flex items-start gap-3">
              <Link2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Third-Party Links
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Our website may contain links to third-party websites.
                  PayInfinite is not responsible for the privacy practices or
                  content of external websites.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Children */}
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Children’s Privacy
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Our Services are not intended for individuals under the age of
                  13. We do not knowingly collect personal information from
                  children.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Changes */}
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  PayInfinite may update this Privacy Policy periodically to
                  reflect operational, legal, or regulatory changes. Updates
                  will be reflected by revising the Updated Date at the top of
                  this policy. We encourage users to review this page regularly.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Contact */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg sm:text-xl font-semibold">Contact Us</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  If you have questions regarding this Privacy Policy or wish to
                  exercise your data rights, please <a href="/contactus" className="text-blue-400 underline">Contact us</a>
                </p>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-4">
                  By using our Services, you acknowledge that you have read and
                  agreed to this Privacy Policy. Thank you for trusting
                  PayInfinite.
                </p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;