'use client'
import React, { useState } from 'react';
import {
  Search,
  Building2,
  FileText,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  Shield,
  Award,
  Target,
  Landmark
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Business Registration",
      icon: <Building2 className="w-12 h-12 text-green-600" />,
      description: "Register your business or company quickly and efficiently"
    },
    {
      title: "Name Search",
      icon: <Search className="w-12 h-12 text-green-600" />,
      description: "Check availability of company names"
    },
    {
      title: "File Annual Returns",
      icon: <FileText className="w-12 h-12 text-green-600" />,
      description: "Submit your annual returns online"
    },
    {
      title: "Account Management",
      icon: <Users className="w-12 h-12 text-green-600" />,
      description: "Manage your business profile and documents"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* <div className="flex items-center space-x-3 animate-slide-in">
              <div className="relative hover-lift">
                <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center border-2 border-green-700">
                  <span className="text-green-700 text-xs font-bold">NG</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-800 block">CAC</span>
                <span className="text-sm text-gray-600 block">Nigeria</span>
              </div>
            </div> */}
             <Link href="/">
          <Image
            src="/images/logo.png"
            alt="CAC Logo"
            width={150}
            height={75}
            className="w-28 h-auto md:w-40 object-contain"
          />
        </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-green-700 hover-lift">Home</a>
              <a href="#" className="text-gray-600 hover:text-green-700 hover-lift">Services</a>
              <a href="#" className="text-gray-600 hover:text-green-700 hover-lift">About</a>
              <a href="#" className="text-gray-600 hover:text-green-700 hover-lift">Contact</a>
              <a
            href="https://reportgov.ng"
            className="text-white px-5 py-2 rounded-md text-sm bg-gradient-to-r from-secondary to-complimentary hover:bg-gradient-to-r hover:from-complimentary hover:to-secondary"
          >
            ReportGov.ng
          </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-green-700">Home</a>
                <a href="#" className="text-gray-600 hover:text-green-700">Services</a>
                <a href="#" className="text-gray-600 hover:text-green-700">About</a>
                <a href="#" className="text-gray-600 hover:text-green-700">Contact</a>
                <a
            href="https://reportgov.ng"
            className="text-white px-5 py-2 rounded-md text-sm bg-gradient-to-r from-secondary to-complimentary hover:bg-gradient-to-r hover:from-complimentary hover:to-secondary"
          >
            ReportGov.ng
          </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-900 pt-32 pb-20">
        <div className=" mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="md:w-1/2 text-white animate-fade-in">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover-lift">
                <img 
                src="/assests/cac1.png" 
                alt="Business Registration"
                className="rounded-lg shadow-xl hover-glow"
              />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">CAC Nigeria</h2>
                  <p className="text-green-100">Corporate Affairs Commission</p>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Register Your Business in Nigeria
              </h1>
              <p className="text-lg mb-8">
                Fast, secure, and efficient business registration process with the Corporate Affairs Commission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-sm md:text-base text-green-700 px-4 lg:px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition animated-button">
                  Start Your Application
                </button>
                <button className="border-2 text-sm md:text-base border-white text-white px-4  py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition animated-button">
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 animate-scale-in">
              <img 
                src="https://e8wm23is9ki.exactdn.com/wp-content/uploads/2024/05/cac-d.jpg?strip=all&lossy=1&ssl=1" 
                alt="Business Registration"
                className="rounded-lg shadow-xl hover-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-black mb-12 animate-fade-in">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition service-card animate-fade-in hover-glow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-green-700 font-medium flex items-center hover-lift">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center stagger-children">
            <div className="stat-card animate-fade-in">
              <div className="text-4xl font-bold text-green-700 mb-2">1M+</div>
              <div className="text-gray-600">Registered Businesses</div>
            </div>
            <div className="stat-card animate-fade-in">
              <div className="text-4xl font-bold text-green-700 mb-2">24/7</div>
              <div className="text-gray-600">Online Services</div>
            </div>
            <div className="stat-card animate-fade-in">
              <div className="text-4xl font-bold text-green-700 mb-2">48hrs</div>
              <div className="text-gray-600">Average Processing Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* About CAC Section */}
      <section className="bg-gradient-to-b from-white to-green-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl font-bold text-black mb-4">About CAC Nigeria</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The Corporate Affairs Commission (CAC) is Nigeria's premier regulatory body for company registration and business administration.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition service-card animate-fade-in hover-glow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 hover-lift">
                <Target className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To be a world-class companies registry providing excellent registration and regulatory services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition service-card animate-fade-in hover-glow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 hover-lift">
                <Award className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Our Values</h3>
              <p className="text-gray-600">
                Integrity, professionalism, innovation, and commitment to excellent service delivery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition service-card animate-fade-in hover-glow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 hover-lift">
                <Landmark className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-4">Our Mandate</h3>
              <p className="text-gray-600">
                Regulate and supervise the formation, incorporation, and registration of businesses in Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative hover-lift">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <img 
                src="/assests/cac1.png" 
                alt="Business Registration"
                className="rounded-lg shadow-xl hover-glow"
              />
                  </div>
                </div>
                <div>
                  <span className="text-xl font-bold block">CAC</span>
                  <span className="text-green-100 block">Nigeria</span>
                </div>
              </div>
              <p className="text-green-100">
                Corporate Affairs Commission of Nigeria - Your trusted partner in business registration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Home</a></li>
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">About Us</a></li>
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Services</a></li>
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Business Registration</a></li>
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Name Search</a></li>
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Annual Returns</a></li>
                <li><a href="#" className="text-green-100 hover:text-white hover-lift inline-block">Document Filing</a></li>
              </ul>
            </div>
            {/* <div> */}
              {/* <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
              <p className="text-green-100 mb-4">Subscribe to our newsletter for updates</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-4 py-2 rounded-l-lg flex-1 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="bg-white text-green-700 px-4 py-2 rounded-r-lg hover:bg-green-50 transition animated-button">
                  <ChevronRight />
                </button>
              </div>
            </div> */}
          </div>
          <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-100">
            <p>&copy; {new Date().getFullYear()} Corporate Affairs Commission. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;