import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeartbeat,
  FaDumbbell,
  FaLaptopCode,
  FaGamepad,
} from "react-icons/fa";

const Home = () => (
  <div className="bg-black text-white font-grotesk tracking-tight overflow-hidden border border-[#2a2a2a] rounded-2xl mx-8 mb-8 mt-4">
    <div className="relative flex flex-col items-center mt-20 h-[100vh] px-6">
      <div className="text-center space-y-12 max-w-5xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 text-orange-400 text-sm font-medium hover:bg-orange-500/10 transition-all duration-500 cursor-default">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></span>
          AI-Powered Fitness Tracking
        </div>

        <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-orange-500 leading-none">
          FitEx
        </h1>
        <div className="space-y-6">
          <p className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Fitness for IT Professionals
          </p>
          <p className="text-xl  text-gray-400 max-w-4xl mx-auto leading-tight font-light">
            Transform your health with just 15 minutes a day. Boost your cardio,
            energy, and productivity with AI-powered pose detection and gamified
            workouts designed for busy developers.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            to="/signup"
            className="group px-10 py-4 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold text-white text-lg hover:scale-105 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center"
          >
            <FaDumbbell className="group-hover:rotate-12 transition-transform duration-300" />
            Get Started
          </Link>

          <Link
            to="/game"
            className="group px-10 py-4 border border-white/20 rounded-full font-semibold text-white hover:bg-white/5 hover:border-white/40 transition-all duration-300 flex items-center gap-3 min-w-[220px] justify-center hover:scale-105"
          >
            <FaGamepad className="group-hover:scale-110 transition-transform duration-300" />
            Try Demo
          </Link>

          <Link
            to="/login"
            className="group px-8 py-3 text-orange-400 hover:text-orange-300 font-semibold transition-colors duration-300 flex items-center gap-2"
          >
            <FaLaptopCode className="group-hover:scale-110 transition-transform duration-300" />
            Sign In
          </Link>
        </div>
      </div>
    </div>

    {/* Metrics Section */}
    <div className="relative py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="group space-y-2">
            <div className="text-5xl font-black text-orange-500 group-hover:scale-105 transition-transform duration-300 tracking-tight">
              15min
            </div>
            <div className="text-gray-400 text-lg font-medium tracking-wide">
              Daily commitment
            </div>
          </div>
          <div className="group space-y-2">
            <div className="text-5xl font-black text-orange-500 group-hover:scale-105 transition-transform duration-300 tracking-tight">
              AI
            </div>
            <div className="text-gray-400 text-lg font-medium tracking-wide">
              Pose detection
            </div>
          </div>
          <div className="group space-y-2">
            <div className="text-5xl font-black text-orange-500 group-hover:scale-105 transition-transform duration-300 tracking-tight">
              24/7
            </div>
            <div className="text-gray-400 text-lg font-medium tracking-wide">
              Progress tracking
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Why <span className="text-orange-500">FitEx</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Designed specifically for developers and tech professionals who want
            to stay healthy without disrupting their workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaHeartbeat className="text-orange-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Cardio Health
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                Short, effective workouts that improve heart health and stamina
                without requiring a gym membership.
              </p>
            </div>
          </div>

          <div className="group relative p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaDumbbell className="text-orange-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Strength & Posture
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                AI-powered tracking helps you maintain proper form and build
                strength to combat desk posture issues.
              </p>
            </div>
          </div>

          <div className="group relative p-10 rounded-3xl border border-white/10 bg-white/[0.02] hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-3xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative space-y-6">
              <div className="w-20 h-20 rounded-3xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FaGamepad className="text-orange-500 text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Gamified Experience
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light">
                Turn fitness into fun with interactive games and challenges that
                keep you motivated and engaged.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Process Section */}
    <div className="relative py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            How It <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light">
            Get started in minutes, not hours
          </p>
        </div>

        <div className="space-y-12">
          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform duration-300 tracking-tight">
              1
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Sign up and set your goals
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Create your account and tell us about your fitness objectives
                and schedule preferences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform duration-300 tracking-tight">
              2
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                AI tracks your progress
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Our advanced pose detection technology monitors your form and
                counts reps automatically.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform duration-300 tracking-tight">
              3
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Play and stay motivated
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Complete daily challenges, unlock achievements, and compete with
                other developers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform duration-300 tracking-tight">
              4
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Review and improve
              </h3>
              <p className="text-gray-400 text-lg font-light leading-relaxed">
                Analyze your progress with detailed stats and adjust your
                routine for maximum results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="relative py-24 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
          Ready to transform your health?
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Join thousands of developers who have already improved their fitness
          and productivity with FitEx.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/signup"
            className="group px-12 py-5 bg-orange-500 hover:bg-orange-600 rounded-full font-semibold text-white text-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
          >
            <FaDumbbell className="group-hover:rotate-12 transition-transform duration-300" />
            Start Your Journey
          </Link>
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="relative py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-500 text-base font-medium tracking-wide">
          &copy; {new Date().getFullYear()} FitEx. Stay fit, stay productive.
        </p>
      </div>
    </footer>
  </div>
);

export default Home;
