import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Shield, Users, Clock, MapPin, 
  Phone, Mail, ChevronDown, Menu, X, CheckCircle, ArrowRight, 
  Star, Calendar, BookOpenCheck, MonitorPlay, HeartHandshake, Sun, Moon
} from 'lucide-react';

// ==========================================
// FIREBASE SETUP & CONFIGURATION
// ==========================================
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {
  apiKey: "mock-key", authDomain: "mock.firebaseapp.com", projectId: "mock-project"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';

// ==========================================
// KNOWLEDGE FIELDS ACADEMY DATA
// ==========================================
const SCHOOL_INFO = {
  name: "Knowledge Fields Academy",
  motto: "Strive for Excellence",
  email: "pathiousmabinda@gmail.com",
  phones: ["+260 974-674960", "+260 969-378670", "+260 978-542181"],
  address: "Along Kuku Road, Opposite Chawama Main SDA Church, Lusaka",
  hours: "07:00 to 19:00 Monday to Friday",
};

const NAV_LINKS = [
  { name: 'Home', id: 'home' },
  { name: 'About Us', id: 'about' },
  { name: 'Academics & Tuitions', id: 'academics' },
  { name: 'Admissions', id: 'admissions' },
  { name: 'Gallery', id: 'gallery' },
  { name: 'Contact', id: 'contact' },
];

const FEATURES = [
  { icon: HeartHandshake, title: 'Personalized Teaching', desc: 'Individual attention to ensure every child reaches their full potential.' },
  { icon: BookOpenCheck, title: 'Spacious Classrooms', desc: 'Modern, airy, and conducive learning environments for all grades.' },
  { icon: MonitorPlay, title: 'Computer Lessons', desc: 'Equipping students with essential digital skills for the modern world.' },
  { icon: Shield, title: 'Affordable Fees', desc: 'Premium quality education structured to be accessible to our community.' },
];

// Context-tailored asset path mapping with live hosted URLs
const IMAGES = {
  hero: 'https://i.postimg.cc/tgrPZvCG/file-00000000655c722f878a4d1a064af438.png',           
  studentsSmiling: 'https://i.postimg.cc/SQGXJtTS/file-00000000efe0722f8677f455b10ca4dc.png', 
  tuitionBanner: 'https://i.postimg.cc/QCKMM0Vf/file-00000000d318720abac0753f64768be3.png',  
  signboard: 'https://i.postimg.cc/pVc8X6cB/file-000000005198720aa2660219bd777744.png',      
  admissionFlyer: 'https://i.postimg.cc/gjcBmTJ6/Screenshot-20260506-090255-Lite.jpg',       
  logo: 'https://i.postimg.cc/Mpp3h442/Lite-(1).png'                                         
};

// ==========================================
// UI COMPONENTS
// ==========================================
const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const baseStyle = "inline-flex items-center justify-center font-bold rounded-full transition-all duration-300 ease-in-out shadow-md hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 px-8 py-4",
    secondary: "bg-yellow-500 text-blue-950 hover:bg-yellow-400 px-8 py-4",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4",
    white: "bg-white text-blue-950 hover:bg-gray-50 px-8 py-4",
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeading = ({ subtitle, title, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    <span className="text-yellow-500 font-extrabold tracking-wider uppercase text-sm mb-2 block">{subtitle}</span>
    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-950 leading-tight uppercase">{title}</h2>
    <div className={`w-24 h-1 bg-yellow-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

// ==========================================
// PAGE COMPONENTS
// ==========================================

const HomePage = ({ navigate }) => (
  <div className="flex flex-col">
    {/* HERO SECTION */}
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-950">
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.hero} alt="Knowledge Fields Academy Students" className="w-full h-full object-cover opacity-40 object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/85 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-block py-1.5 px-4 rounded-full bg-yellow-500/20 text-yellow-400 font-bold text-sm border border-yellow-500/50 backdrop-blur-sm uppercase tracking-wide">
                2025 Admissions Open
              </span>
              <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/20 text-green-400 font-bold text-sm border border-green-500/50 backdrop-blur-sm uppercase tracking-wide">
                Enrollment in Progress
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 uppercase">
              Knowledge Fields <br/><span className="text-yellow-400">Academy</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-200 mb-8 italic">
              "{SCHOOL_INFO.motto}"
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Offering premium Nursery and Primary School Education alongside specialized Evening Tuitions for Grades 7, 9, 12 & GCE Candidates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" className="text-lg" onClick={() => navigate('admissions')}>
                Apply Online <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="white" className="text-lg" onClick={() => navigate('academics')}>
                View Tuition Programs
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* QUICK INFO STRIP */}
    <section className="bg-yellow-500 py-6 relative z-20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-950 font-bold text-center md:text-left">
          <div className="flex items-center"><Clock className="w-6 h-6 mr-3" /> School Open: {SCHOOL_INFO.hours}</div>
          <div className="flex items-center"><MapPin className="w-6 h-6 mr-3" /> {SCHOOL_INFO.address}</div>
          <div className="flex items-center"><Phone className="w-6 h-6 mr-3" /> {SCHOOL_INFO.phones[0]}</div>
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US - BENEFITS */}
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading subtitle="Our Benefits" title="Why Choose Knowledge Fields?" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {FEATURES.map((feat, i) => (
            <FadeIn key={i} delay={i * 0.1} className="bg-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 border-b-4 border-yellow-500">
              <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-6">
                <feat.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-blue-950 mb-3 uppercase">{feat.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>

    {/* PROGRAMS PREVIEW */}
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <SectionHeading subtitle="What We Offer" title="Comprehensive Education Paths" centered={false} />
            <div className="space-y-8 mt-8">
              
              <div className="flex items-start bg-blue-50 p-6 rounded-2xl border border-blue-100">
                <div className="bg-blue-900 p-3 rounded-lg text-white mr-6 mt-1"><Sun className="w-6 h-6"/></div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-950 mb-2">Day School</h4>
                  <p className="text-gray-600 mb-2">Nursery & Primary School Education starting from Baby Class up to Grade 7.</p>
                  <span className="text-sm font-bold text-blue-900 bg-white px-3 py-1 rounded-full shadow-sm border border-blue-100">07:00 - 16:00 HRS</span>
                </div>
              </div>

              <div className="flex items-start bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                <div className="bg-yellow-500 p-3 rounded-lg text-blue-950 mr-6 mt-1"><Moon className="w-6 h-6"/></div>
                <div>
                  <h4 className="text-2xl font-bold text-blue-950 mb-2">Evening Tuitions</h4>
                  <p className="text-gray-600 mb-2">Rigorous, focused evening tuitions explicitly structured for senior examination preparation.</p>
                  <span className="text-sm font-bold text-yellow-800 bg-white px-3 py-1 rounded-full shadow-sm border border-yellow-200">17:00 - 19:00 HRS (Mon-Fri)</span>
                </div>
              </div>

            </div>
            <Button className="mt-10" onClick={() => navigate('academics')}>Explore All Programs</Button>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img src={IMAGES.studentsSmiling} alt="Happy children at Knowledge Fields" className="w-full h-64 object-cover rounded-3xl rounded-tr-none shadow-lg bg-gray-100" />
            <img src={IMAGES.signboard} alt="Knowledge Fields Academy Signboard" className="w-full h-64 object-cover rounded-3xl rounded-tl-none shadow-lg mt-8 bg-blue-900" />
          </div>
        </div>
      </div>
    </section>

    {/* CTA SECTION */}
    <section className="py-24 bg-blue-950 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-4xl mx-auto border-4 border-yellow-500 rounded-[3rem] p-12 md:p-20 bg-blue-900 shadow-2xl">
          <img src={IMAGES.logo} alt="Logo" className="w-24 h-24 mx-auto mb-6 drop-shadow-xl object-contain" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase">Enrollment in Progress</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto font-medium">
            Join Knowledge Fields Academy today. Secure your child's spot for the 2025 academic year.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button variant="secondary" className="text-lg py-4 px-10" onClick={() => navigate('admissions')}>
              Register Now
            </Button>
            <Button variant="outline" className="text-lg py-4 px-10 border-white text-white hover:bg-white/10" onClick={() => navigate('contact')}>
              Contact Us
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  </div>
);

const AcademicsPage = ({ navigate }) => (
  <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4">
      <SectionHeading subtitle="Our Curriculum" title="Academics & Tuitions" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
        {/* Day School Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="h-72 overflow-hidden relative">
              <img src={IMAGES.studentsSmiling} alt="Classroom environment" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-blue-900/60 flex flex-col items-center justify-center p-4 text-center">
                 <h3 className="text-4xl font-extrabold text-white uppercase tracking-wider mb-2">Nursery & Primary</h3>
                 <span className="bg-yellow-500 text-blue-950 font-bold px-4 py-1 rounded-full text-sm">Baby Class to Grade 7</span>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 mb-6 text-lg">Our day school setup provides a vibrant framework for early foundation and primary learning. We pair personalized attention with digital literacy modules.</p>
              <ul className="space-y-4 mb-4">
                {['Baby Class, Nursery & Pre-School', 'Interactive Computer Lessons', 'Spacious & Well-Ventilated Classrooms', 'Qualified & Attentive Educators'].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-950 font-medium">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-8 pt-0">
            <Button className="w-full py-4" onClick={() => navigate('admissions')}>Apply for Day School</Button>
          </div>
        </div>

        {/* Evening Tuitions Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="h-72 overflow-hidden relative bg-blue-950 flex flex-col items-center justify-center">
              <img src={IMAGES.tuitionBanner} alt="Official Evening Tuitions Program Flyer" className="w-full h-full object-contain p-2" />
            </div>
            <div className="p-8">
              <div className="inline-block bg-yellow-100 text-yellow-800 font-bold px-4 py-1 rounded-full text-sm mb-4">17:00 - 19:00 HRS (Mon - Fri)</div>
              <p className="text-gray-600 mb-6 text-lg">We host focused, high-impact evening revision sessions specifically calibrated to help students clear national standard milestones smoothly.</p>
              <ul className="space-y-4 mb-4">
                {['Grade 7 Examination Prep', 'Grade 9 Examination Prep', 'Grade 12 Strategic Tuitions', 'Comprehensive GCE Candidate Syllabus'].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-950 font-medium">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-8 pt-0">
            <Button variant="secondary" className="w-full py-4" onClick={() => navigate('contact')}>Inquire About Tuitions</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdmissionsPage = ({ user }) => {
  const [formData, setFormData] = useState({ parentName: '', childName: '', program: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setErrorMsg("Authentication error. Please refresh the page.");
      return;
    }
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'admissions'), {
        ...formData,
        submittedAt: serverTimestamp(),
      });
      setStatus('success');
      setFormData({ parentName: '', childName: '', program: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg("An error occurred. Please call us directly at " + SCHOOL_INFO.phones[0]);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading subtitle="Join Us" title="School Admission Registration" />
        
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Visual Side */}
          <div className="lg:w-1/3">
             <div className="sticky top-32">
                <img src={IMAGES.admissionFlyer} alt="2025 Admissions Flyer" className="w-full rounded-3xl shadow-xl border-4 border-white object-contain bg-black" />
                <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl mt-6">
                  <h3 className="text-xl font-bold mb-4 uppercase text-yellow-400">Need Help?</h3>
                  <p className="mb-4">Our admissions team is available to guide you through the process.</p>
                  <a href={`tel:${SCHOOL_INFO.phones[0].replace(/[^0-9+]/g, '')}`} className="flex items-center font-bold text-lg hover:text-yellow-400 transition-colors">
                     <Phone className="mr-3 w-5 h-5" /> {SCHOOL_INFO.phones[0]}
                  </a>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-yellow-500">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold text-blue-950 uppercase mb-2">Enroll Your Child</h2>
                <p className="text-gray-600">Please complete the form details below to initialize the registration process.</p>
              </div>

              {status === 'success' ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-green-50 text-green-800 p-8 rounded-2xl text-center border border-green-200">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Application Form Received!</h3>
                  <p className="text-lg">Thank you. Our admissions office team will contact you shortly.</p>
                  <Button className="mt-8" onClick={() => setStatus('idle')}>Submit Another Form</Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === 'error' && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl text-sm border border-red-200">{errorMsg}</div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-blue-950 mb-2">Parent/Guardian Full Name *</label>
                      <input required type="text" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-blue-950 mb-2">Student's Full Name *</label>
                      <input required type="text" value={formData.childName} onChange={(e) => setFormData({...formData, childName: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-blue-950 mb-2">Primary Phone Number *</label>
                      <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50" placeholder="e.g. +260 974..." />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-blue-950 mb-2">Email Address</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-blue-950 mb-2">Target Program/Grade *</label>
                    <select required value={formData.program} onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 outline-none bg-gray-50">
                      <option value="">Select an alternative...</option>
                      <optgroup label="Day School System">
                        <option value="Baby Class">Baby Class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Primary School">Primary School (Grades 1 - 7)</option>
                      </optgroup>
                      <optgroup label="Evening Revision Tuitions">
                        <option value="Tuition - Grade 7">Grade 7 Tuition</option>
                        <option value="Tuition - Grade 9">Grade 9 Tuition</option>
                        <option value="Tuition - Grade 12">Grade 12 Tuition</option>
                        <option value="Tuition - GCE">GCE Candidate Module</option>
                      </optgroup>
                    </select>
                  </div>

                  <Button type="submit" variant="primary" className="w-full py-4 text-lg" disabled={status === 'submitting' || !user}>
                    {status === 'submitting' ? 'Processing Alignment...' : 'Submit Admission Request'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ContactPage = ({ user }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;
    setStatus('submitting');
    try {
      await addDoc(collection(db, 'artifacts', appId, 'users', user.uid, 'contacts'), {
        ...formData,
        submittedAt: serverTimestamp(),
      });
      setStatus('success');
      setFormData({ name: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading subtitle="Get in Touch" title="Contact Us" />
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl shadow-md border-b-4 border-yellow-500 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-blue-950 mb-4 uppercase">Call Us</h3>
            {SCHOOL_INFO.phones.map((phone, idx) => (
              <a key={idx} href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="text-lg font-bold text-gray-700 hover:text-yellow-600 block mb-1">{phone}</a>
            ))}
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md border-b-4 border-yellow-500 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-blue-950 mb-4 uppercase">Email Us</h3>
            <a href={`mailto:${SCHOOL_INFO.email}`} className="text-lg font-bold text-gray-700 hover:text-yellow-600 break-all">{SCHOOL_INFO.email}</a>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-md border-b-4 border-yellow-500 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl text-blue-950 mb-4 uppercase">Location</h3>
            <p className="text-lg font-bold text-gray-700">{SCHOOL_INFO.address}</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
           <div className="md:w-1/2 bg-blue-950 p-12 text-white flex flex-col justify-center relative">
             <h3 className="text-3xl font-extrabold mb-6 uppercase text-yellow-400">Send a Message</h3>
             <p className="text-blue-100 mb-8 text-lg">Whether you have questions about entry evaluations, curriculum guidelines, or slot availabilities, fill out the form here.</p>
             <div className="mt-auto">
                <p className="font-bold mb-2">School Operating Hours:</p>
                <p className="text-yellow-400">{SCHOOL_INFO.hours}</p>
             </div>
           </div>
           
           <div className="md:w-1/2 p-8 md:p-12">
             <form onSubmit={handleSubmit} className="space-y-6">
                {status === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 font-bold rounded-lg mb-4 text-center">Message sent successfully!</div>
                )}
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 bg-gray-50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Phone Number</label>
                  <input required type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 bg-gray-50 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2">Message Description</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-500 bg-gray-50 outline-none"></textarea>
                </div>
                <Button type="submit" variant="secondary" className="w-full" disabled={status === 'submitting' || !user}>
                  {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                </Button>
             </form>
           </div>
        </div>

      </div>
    </div>
  );
};

const GalleryPage = () => {
  const images = [
    IMAGES.hero, 
    IMAGES.studentsSmiling, 
    IMAGES.admissionFlyer, 
    IMAGES.signboard, 
    IMAGES.tuitionBanner
  ];
  
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 text-center mb-12">
        <SectionHeading subtitle="Campus Life" title="School Gallery" />
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">A showcase tracking actual classroom operations, community events, and everyday excellence inside Knowledge Fields Academy.</p>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer aspect-square shadow-md border border-gray-100 flex items-center justify-center
                ${src === IMAGES.logo || src === IMAGES.tuitionBanner || src === IMAGES.admissionFlyer ? 'bg-blue-950 p-4' : 'bg-gray-200'}`}
            >
              <img src={src} alt={`Campus documentation image ${idx + 1}`} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 flex items-center justify-center">
                 <Star className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 w-12 h-12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SimpleTextPage = ({ title, content }) => (
  <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
    <div className="container mx-auto px-4 max-w-4xl">
      <SectionHeading subtitle="Discover" title={title} />
      <div className="bg-white p-10 rounded-3xl shadow-lg text-gray-700 leading-loose border-t-8 border-yellow-500 text-lg">
        {content}
      </div>
    </div>
  </div>
);

// ==========================================
// MAIN APP COMPONENT & LAYOUT
// ==========================================

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);

  // Firebase Authentication setup
  useEffect(() => {
    const initAuth = async () => {
      try {
        if (typeof __initial_auth_token !== 'undefined' && __initial_auth_token) {
          await signInWithCustomToken(auth, __initial_auth_token);
        } else {
          await signInAnonymously(auth);
        }
      } catch (err) {
        console.error("Auth error:", err);
      }
    };
    initAuth();
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);

  // Scroll effect for Navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage navigate={navigate} />;
      case 'admissions': return <AdmissionsPage user={user} />;
      case 'contact': return <ContactPage user={user} />;
      case 'gallery': return <GalleryPage />;
      case 'academics': return <AcademicsPage navigate={navigate} />;
      case 'about': return <SimpleTextPage title="About Us" content={<>
        <p className="mb-6 font-bold text-xl text-blue-950">Welcome to {SCHOOL_INFO.name}.</p>
        <p className="mb-6">We are a dedicated educational institution operating strategically in Lusaka along Kuku Road. Our collective institutional baseline remains defined clearly by our motto: <strong>"Strive for Excellence"</strong>.</p>
        <p className="mb-6">From Baby Class foundational care paths to standard primary grading steps, running through our structured Evening Tuitions for senior levels, we aim to harmonize supportive settings with functional instructional discipline.</p>
        <div className="mt-10 p-6 bg-blue-50 border-l-4 border-yellow-500 rounded-r-xl">
          <h3 className="text-xl font-bold text-blue-950 mb-2 uppercase">Our Commitment</h3>
          <p>To cultivate academic curiosity and character depth in a safe, modern, and engaging operational space.</p>
        </div>
      </>} />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-yellow-200 selection:text-blue-950">
      
      {/* HEADER / NAVBAR */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-950 shadow-lg py-3' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          
          {/* Authentic Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => navigate('home')}>
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-0.5 border-2 border-yellow-500 shadow-lg overflow-hidden">
               <img src={IMAGES.logo} alt="Knowledge Fields Academy Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-black leading-none text-white tracking-wide uppercase">Knowledge Fields</span>
              <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase mt-1">Academy</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-2">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.id} 
                onClick={() => navigate(link.id)}
                className={`px-4 py-2 rounded-full font-bold transition-all text-sm uppercase tracking-wider
                  ${currentPage === link.id 
                    ? 'bg-yellow-500 text-blue-950' 
                    : 'text-white hover:text-yellow-400'
                  }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-blue-950 pt-24 px-6 pb-6 overflow-y-auto"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => navigate(link.id)}
                  className={`text-left text-xl font-bold py-4 border-b border-blue-900 uppercase tracking-wider ${currentPage === link.id ? 'text-yellow-500' : 'text-white'}`}
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <Button variant="secondary" className="w-full py-4" onClick={() => navigate('admissions')}>Enroll Now</Button>
                <Button variant="outline" className="w-full py-4 border-white text-white" onClick={() => navigate('contact')}>Contact Us</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-grow flex flex-col"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white pt-20 pb-10 border-t-8 border-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center p-0.5 border-2 border-yellow-500 overflow-hidden">
                   <img src={IMAGES.logo} alt="Knowledge Fields Academy Logo" className="w-full h-full object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black leading-none text-white tracking-wide uppercase">Knowledge Fields</span>
                  <span className="text-xs font-bold tracking-widest text-yellow-400 uppercase mt-1">Academy</span>
                </div>
              </div>
              <p className="text-sm font-bold text-blue-200 italic">"{SCHOOL_INFO.motto}"</p>
            </div>

            <div>
              <h4 className="text-yellow-500 font-extrabold text-lg mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-3 font-medium">
                {NAV_LINKS.slice(0,5).map(link => (
                  <li key={link.id}>
                    <button onClick={() => navigate(link.id)} className="hover:text-yellow-400 transition-colors flex items-center">
                      <ChevronDown className="w-4 h-4 mr-2 -rotate-90 text-yellow-600" /> {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-yellow-500 font-extrabold text-lg mb-6 uppercase">Contact Information</h4>
              <ul className="space-y-4 font-medium text-blue-100">
                <li className="flex items-start"><MapPin className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0 mt-1"/> <span>{SCHOOL_INFO.address}</span></li>
                <li className="flex items-center"><Phone className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0"/> <span>{SCHOOL_INFO.phones.join(' / ')}</span></li>
                <li className="flex items-center"><Mail className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0"/> <span>{SCHOOL_INFO.email}</span></li>
                <li className="flex items-center"><Clock className="w-5 h-5 mr-3 text-yellow-500 flex-shrink-0"/> <span>{SCHOOL_INFO.hours}</span></li>
              </ul>
            </div>

          </div>
          
          <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300 font-medium">
            <p>&copy; {new Date().getFullYear()} Knowledge Fields Academy. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}