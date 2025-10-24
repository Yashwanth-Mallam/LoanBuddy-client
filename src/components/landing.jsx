import { motion } from "framer-motion";
import {
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Lock,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  const handlegetstarted = () => {
    navigate("/signup");
  };

  const handleLearnMore = () => {
    // Scroll smoothly to the "How It Works" section
    const section = document.getElementById("how-it-works");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Peer-to-Peer Lending{" "}
                <span className="text-teal-400">Made Simple</span>
              </h1>
              <p className="text-xl sm:text-2xl text-indigo-100 mb-10 leading-relaxed">
                Borrow or invest directly with people — no banks, no hidden
                fees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={handlegetstarted}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-900 transition-all duration-300"
                  onClick={handleLearnMore}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">
                          Direct Connection
                        </p>
                        <p className="text-indigo-200 text-sm">
                          Lender → Borrower
                        </p>
                      </div>
                    </div>
                    <div className="text-teal-400 font-bold text-2xl">
                      $5,000
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-indigo-100">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                      <span>No intermediary fees</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-100">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                      <span>Instant approval process</span>
                    </div>
                    <div className="flex items-center gap-2 text-indigo-100">
                      <CheckCircle className="w-5 h-5 text-teal-400" />
                      <span>Fully encrypted & secure</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Choose LoanBuddy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience lending and borrowing the way it should be
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Direct Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect directly with verified lenders or borrowers. Build trust
                through transparent communication and fair terms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Secure & Transparent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                All transactions and user data are fully encrypted and verified.
                Your financial safety is our top priority.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Smarter Returns
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Earn more than traditional banks with minimal effort. Get
                competitive rates and flexible terms that work for you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-teal-200 to-blue-200 transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-3 gap-12 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center shadow-xl relative z-10">
                    <span className="text-white text-3xl font-bold">1</span>
                  </div>
                  <div className="absolute inset-0 bg-indigo-400 rounded-full blur-xl opacity-50"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Create Your Account
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Sign up in minutes with secure verification. Your identity and
                  data are protected with bank-level encryption.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-xl relative z-10">
                    <span className="text-white text-3xl font-bold">2</span>
                  </div>
                  <div className="absolute inset-0 bg-teal-400 rounded-full blur-xl opacity-50"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Choose Your Path
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Decide whether you want to lend and earn returns, or borrow
                  funds for your needs. Switch anytime.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl relative z-10">
                    <span className="text-white text-3xl font-bold">3</span>
                  </div>
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-xl opacity-50"></div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  Start Your Journey
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Connect with the right people, agree on terms, and complete
                  transactions securely through our platform.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from real users
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-teal-500 text-teal-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "LoanBuddy helped me fund my startup in just 3 days! The process
                was smooth, transparent, and the rates were better than any
                bank."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white font-bold text-lg">
                  RS
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Rahul Sharma</p>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-teal-500 text-teal-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "As a lender, I'm earning 2x what my savings account offered.
                The platform is secure, and I love supporting real people."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg">
                  PK
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Priya Kapoor</p>
                  <p className="text-sm text-gray-600">Investor</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-teal-500 text-teal-500"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "Finally, a lending platform that puts people first. No hidden
                fees, no bureaucracy. Just simple, honest lending."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg">
                  AM
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Arjun Mehta</p>
                  <p className="text-sm text-gray-600">Small Business Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gradient-to-br from-indigo-900 via-indigo-800 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Join thousands of users growing together on LoanBuddy
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
              Start your journey today with zero commitment and see why we're
              trusted by over 10,000+ users
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-600 text-white px-10 py-5 rounded-lg text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center gap-2"
            >
              Create Your Free Account
              <ArrowRight className="w-6 h-6" />
            </motion.button>

            <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-indigo-100">
                <Lock className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100">
                <Shield className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">
                  Bank-Level Encryption
                </span>
              </div>
              <div className="flex items-center gap-2 text-indigo-100">
                <Zap className="w-5 h-5 text-teal-400" />
                <span className="text-sm font-medium">
                  Trusted by 10,000+ Users
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">LoanBuddy</h3>
              <p className="text-gray-400">Peer-to-peer lending made simple</p>
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end items-center">
              <a href="#" className="hover:text-white transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 LoanBuddy. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;
