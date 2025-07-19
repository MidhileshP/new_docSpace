import React from 'react';
import { ArrowRight, Edit3, Users, MessageCircle, Lightbulb, Star, Github } from 'lucide-react';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Edit3 className="w-8 h-8 text-stone-800" />
              <span className="text-2xl font-bold text-stone-800">Aura Editor</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-stone-600 hover:text-stone-800 transition-colors">Features</a>
              <a href="#benefits" className="text-stone-600 hover:text-stone-800 transition-colors">Benefits</a>
              <a href="#tutorials" className="text-stone-600 hover:text-stone-800 transition-colors">Tutorials</a>
              <button 
                onClick={onGetStarted}
                className="bg-stone-800 text-white px-6 py-2 rounded-full hover:bg-stone-700 transition-colors"
              >
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-stone-800 leading-tight">
                  Make your design shine with{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-800">
                    aura
                  </span>
                </h1>
                <p className="text-xl text-stone-600 leading-relaxed">
                  Use these tricks to make your website design pop off the page. 
                  Collaborate with your team using advanced commenting and suggestion features.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={onGetStarted}
                  className="bg-stone-800 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get full access</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full hover:border-stone-400 transition-colors">
                  Learn more
                </button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-stone-600">4.9/5 rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-stone-600" />
                  <span className="text-stone-600">10k+ users</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/images/WhatsApp Image 2025-07-17 at 16.27.27.jpeg" 
                  alt="Design showcase" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-stone-800 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Live Collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">
              Powerful Features for Modern Design
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Everything you need to create, collaborate, and iterate on your designs with your team.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Real-time Comments</h3>
              <p className="text-stone-600">
                Add contextual comments directly on your designs. Discuss changes, provide feedback, 
                and keep all conversations organized in one place.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Smart Suggestions</h3>
              <p className="text-stone-600">
                Get intelligent suggestions for improvements. Our AI-powered system helps you 
                optimize your designs for better user experience.
              </p>
            </div>

            <div className="bg-stone-50 p-8 rounded-2xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-stone-800 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Team Collaboration</h3>
              <p className="text-stone-600">
                Work together seamlessly with your team. Share designs, assign tasks, 
                and track progress all in one collaborative workspace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="py-20 bg-gradient-to-r from-stone-100 to-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/WhatsApp Image 2025-07-17 at 16.27.29.jpeg" 
                alt="Color palette design" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-stone-800">
                Perfect Color Harmony
              </h2>
              <p className="text-xl text-stone-600">
                Create stunning color palettes with our advanced color theory tools. 
                Get suggestions for complementary colors and ensure accessibility compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-stone-300 rounded-full"></div>
                  <span className="text-stone-700">Pale Sand #D8C9AE</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-stone-600 rounded-full"></div>
                  <span className="text-stone-700">Charcoal Gray #575757</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to transform your design workflow?
          </h2>
          <p className="text-xl text-stone-300 mb-8">
            Join thousands of designers who are already using Aura Editor to create amazing experiences.
          </p>
          <button 
            onClick={onGetStarted}
            className="bg-white text-stone-800 px-8 py-4 rounded-full hover:bg-stone-100 transition-colors font-semibold text-lg"
          >
            Start designing now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Edit3 className="w-6 h-6 text-stone-800" />
              <span className="text-xl font-bold text-stone-800">Aura Editor</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-stone-600 hover:text-stone-800 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <span className="text-stone-500">© 2025 Aura Editor. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;