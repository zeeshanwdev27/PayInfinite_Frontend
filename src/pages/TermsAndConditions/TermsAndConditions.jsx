import React from "react";
import {
  FileText,
  CheckCircle2,
  ShieldCheck,
  Ban,
  User,
  Lock,
  AlertTriangle,
  Scale,
  Handshake,
  RefreshCw,
  Gavel,
  Power,
  Shuffle,
  Divide,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";



function TermsAndConditions() {
  return (
    <section className="relative min-h-screen pt-28 sm:pt-32 lg:pt-40 pb-16 overflow-hidden text-white">

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
            Terms &amp; Conditions
          </h1>
          <p className="text-sm sm:text-base text-white/70">
            These Terms of Use govern your access to and use of PayInfinite’s website and
            services. By using our Services, you agree to these Terms.
          </p>
        </div>

        {/* Content Card */}
        <div className="relative max-w-5xl mx-auto mt-10 sm:mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl p-5 sm:p-8 lg:p-10">
          <div className="absolute inset-0 rounded-2xl bg-black/10 pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-6">
            {/* Acceptance */}
            <div className="flex items-start gap-3">
              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Acceptance of Terms
                </h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  These Terms of Use constitute a legally binding agreement between you and
                  PayInfinite, governing your access to and use of our website, including all
                  content, functionality, and services offered through the website (collectively,
                  the “Services”).
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  By accessing or using our website, you agree to be bound by these Terms of Use
                  and all applicable laws and regulations. If you do not agree with any part of
                  these Terms, you must not access or use our Services.
                </p>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  PayInfinite reserves the right to revise or update these Terms at any time.
                  Changes become effective immediately upon posting. Continued use of the
                  Services after updates constitutes acceptance of those changes.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Use of Services */}
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-3 w-full">
                <h2 className="text-lg sm:text-xl font-semibold">Use of Services</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Our Services are intended for businesses seeking merchant account and payment
                  processing solutions.
                </p>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="font-semibold text-white mb-2">By using our Services, you represent and warrant that:</p>
                  <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                    <li>You are a business entity or authorized representative of a business</li>
                    <li>You have authority to enter into this agreement</li>
                    <li>Information submitted is accurate and lawful</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    By submitting information through our website, you consent to receive
                    communications from PayInfinite, including service updates and marketing
                    communications via email, SMS, or other permitted channels as described in our
                    Privacy Policy.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="font-semibold text-white mb-2">You agree not to:</p>
                  <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                    <li>Violate any applicable local, national, or international law</li>
                    <li>Engage in activities involving illegal or prohibited goods or services</li>
                    <li>Send spam, unsolicited promotions, or fraudulent communications</li>
                    <li>Impersonate PayInfinite or any affiliated entity</li>
                    <li>Interfere with or disrupt website functionality or security</li>
                    <li>Attempt unauthorized access to servers or databases</li>
                    <li>Launch denial-of-service attacks</li>
                    <li>Damage or impair platform performance</li>
                    <li>Interfere with other users’ access to Services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Intellectual Property */}
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Intellectual Property</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  All website content, including text, graphics, logos, images, software, and design
                  elements, are owned by PayInfinite or its licensors and are protected under
                  applicable intellectual property laws.
                </p>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4 mt-1">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    You may use the Services for legitimate business inquiry purposes only. You may
                    not copy, reproduce, or redistribute content; modify website materials; remove
                    copyright or proprietary notices; or use branding or materials without written
                    permission. Unauthorized use immediately terminates your right to use the Services.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* User Accounts */}
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">User Accounts</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  If account access is provided:
                </p>
                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                  <li>You must maintain accurate and current information</li>
                  <li>You are responsible for safeguarding login credentials</li>
                  <li>You must notify us immediately of unauthorized access</li>
                </ul>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Usernames must not infringe trademarks or contain offensive or misleading content.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Privacy */}
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Privacy</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Your use of our Services is governed by our Privacy Policy. By using our Services,
                  you consent to PayInfinite’s collection and use of information in accordance with
                  applicable privacy regulations including GDPR, CAN-SPAM Act, and CCPA.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Disclaimer */}
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Disclaimer of Warranties</h2>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">
                      TO THE FULLEST EXTENT PERMITTED BY LAW
                    </span>
                    , PAYINFINITE PROVIDES SERVICES ON AN “AS IS” AND “AS AVAILABLE” BASIS
                    WITHOUT WARRANTIES OF ANY KIND.
                  </p>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-2">
                    We do not guarantee uninterrupted access, accuracy, or availability of Services
                    and are not responsible for damages caused by viruses, cyberattacks, or technical
                    disruptions. Your use of the Services is at your own risk.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Limitation */}
            <div className="flex items-start gap-3">
              <Scale className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Limitation of Liability</h2>
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW
                    </span>
                    , PAYINFINITE AND ITS AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT,
                    INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM:
                  </p>
                  <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed mt-2">
                    <li>Use or inability to use Services</li>
                    <li>Website interruptions</li>
                    <li>Loss of data, revenue, or business opportunities</li>
                  </ul>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mt-2">
                    This limitation applies regardless of legal theory.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Indemnification */}
            <div className="flex items-start gap-3">
              <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Indemnification</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless PayInfinite, its affiliates,
                  employees, partners, and service providers from claims or liabilities arising from:
                </p>
                <ul className="list-disc pl-5 text-sm sm:text-base text-white/70 space-y-1 leading-relaxed">
                  <li>Violation of these Terms</li>
                  <li>Misuse of Services</li>
                  <li>Submission of inaccurate or unlawful information</li>
                </ul>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Modifications */}
            <div className="flex items-start gap-3">
              <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Modifications to Terms</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  PayInfinite reserves the right to modify these Terms at any time. Material updates
                  may be communicated through website notice. Continued use of Services constitutes
                  acceptance of revised Terms.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Governing Law */}
            <div className="flex items-start gap-3">
              <Gavel className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Governing Law</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  These Terms shall be governed and interpreted under the laws of the State of
                  Florida, United States, without regard to conflict of law principles.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Termination */}
            <div className="flex items-start gap-3">
              <Power className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Termination</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  We may suspend or terminate access to Services immediately, without notice, if
                  these Terms are violated. Termination does not affect provisions relating to
                  ownership, liability limitations, or indemnification.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Assignment */}
            <div className="flex items-start gap-3">
              <Shuffle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Assignment</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  You may not transfer these Terms without written consent from PayInfinite.
                  PayInfinite may assign these Terms at its discretion.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Severability */}
            <div className="flex items-start gap-3">
              <Divide className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Severability</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  If any provision of these Terms is deemed unenforceable, remaining provisions
                  will remain valid and enforceable.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Entire Agreement */}
            <div className="flex items-start gap-3">
              <ClipboardCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Entire Agreement</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  These Terms of Use, together with our Privacy Policy, constitute the complete
                  agreement between you and PayInfinite regarding the Services.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Waiver + Acknowledgment */}
            <div className="flex items-start gap-3">
              <Ban className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2">
                <h2 className="text-lg sm:text-xl font-semibold">Waiver</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  Failure by PayInfinite to enforce any provision shall not constitute waiver of
                  future enforcement rights.
                </p>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4 mt-1">
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    <span className="text-white font-semibold">
                      BY USING PAYINFINITE SERVICES
                    </span>
                    , YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO
                    THESE TERMS OF USE AND OUR PRIVACY POLICY.
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Contact Information */}
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mt-0.5 flex-shrink-0" />
              <div className="flex flex-col gap-2 w-full">
                <h2 className="text-lg sm:text-xl font-semibold">Contact Information</h2>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  For questions regarding these Terms of Use, please <a href="/contactus" className="text-blue-400 underline">Contact us</a>
                </p>



              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsAndConditions;