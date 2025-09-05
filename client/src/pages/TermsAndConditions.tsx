import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

export default function TermsAndConditions() {
  const [activeTab, setActiveTab] = useState('terms');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['terms', 'privacy', 'license'].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const tabs = [
    { id: 'terms', label: 'Terms' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'license', label: 'License' }
  ];

  const termsContent = {
    overview: {
      title: "Overview",
      content: "Epic Automations  provides detailed Terms and Conditions and Privacy Policy on its website, outlining user responsibilities, data handling, and rights according to standards like the GDPR and Swiss law."
    },
    terms: {
      title: "Terms and Conditions",
      items: [ 
        "By accessing Epic Automation's services or purchasing a subscription, a legally binding agreement is formed between you (the Client) and Epic Automations .",
        "Subscription tiers, software usage, payments, account creation, support, content moderation, intellectual property, and data hosting responsibilities are all described in detail.",
        "Users are responsible for account security, data accuracy, and compliance with local laws.",
        "Liability is limited to the total fees paid within three months before an incident; indirect or consequential damages are generally excluded except where the law mandates.",
        "Both parties agree to follow dispute resolution processes before legal action and respect privacy and confidentiality obligations in case of security breaches.",
        "Governing law is Swiss jurisdiction, and the scope, waivers, severability, and definitions are rigorously specified."
      ]
    }
  };

  const privacyContent = {
    title: "Privacy Policy",
    items: [
      "Epic Automations does not sell user data or use it for third-party advertising.",
      "Data (including name, IP address, any connected productivity tools, and email correspondence) is collected to provide, improve, and personalize services and support, consistent with GDPR, Swiss FADP, and state laws like VCDPA.",
      "Data protection standards include cryptographic safeguarding, limited internal access, rights to deletion/correction/access, and transparent business practices.",
      "Cookies (essential, functional, analytical) are used, but privacy rights (CCPA, GDPR, VCDPA) are respected, including opt-out processes.",
      "Data retention complies with legal requirements; children's data (under 16) is not knowingly collected.",
      "Disputes and requests regarding privacy may be directed to privacy@epicautomations. Swiss/EU representatives for data protection."
    ]
  };

  const licenseContent = {
    title: "License",
    content: "License information and terms will be available here. Please contact us for specific licensing details."
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
          <div className="space-y-6 sm:space-y-8">
            {/* Overview Section */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">{termsContent.overview.title}</h2>
              <p className="text-gray-700 text-lg sm:text-2xl leading-relaxed">{termsContent.overview.content}</p>
            </div>

            {/* Terms Section */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{termsContent.terms.title}</h2>
              <ul className="space-y-3 sm:space-y-4">
                {termsContent.terms.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0 w-1 h-6 bg-[#ff4f0f] mt-2"></div>
                    <p className="text-gray-700 text-lg sm:text-2xl leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'privacy':
        return (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{privacyContent.title}</h2>
              <ul className="space-y-3 sm:space-y-4">
                {privacyContent.items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="flex-shrink-0 w-1 h-6 bg-[#ff4f0f] mt-2"></div>
                    <p className="text-gray-700 text-lg sm:text-2xl leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'license':
        return (
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{licenseContent.title}</h2>
              <p className="text-gray-700 text-lg sm:text-2xl leading-relaxed">{licenseContent.content}</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#ffe7b6] ">
      <div className="max-w-full mx-4 sm:mx-15 px-4 sm:px-6 pt-20 sm:pt-30 py-8 sm:py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-6 sm:mb-8">Terms of Service</h1>
          
          {/* Navigation Tabs */}
          <div className="flex space-x-4 sm:space-x-8 border-b border-black/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 sm:pb-4 px-1 text-lg sm:text-2xl font-semibold transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-gray-800 border-b-2 border-[#ff4f0f]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 sm:mt-8"
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
}