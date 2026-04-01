import { CheckCircle, ArrowRight, FileText, Calendar, UserCheck, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';

const admissionSteps = [
  { 
    title: 'Inquiry', 
    desc: 'Submit an online inquiry form or visit the school campus to learn more about our programs.',
    icon: <HelpCircle className="text-orange-500" />
  },
  { 
    title: 'Registration', 
    desc: 'Register your child for the admission process by filling out the registration form and paying the fee.',
    icon: <FileText className="text-orange-500" />
  },
  { 
    title: 'Interaction/Test', 
    desc: 'Attend an interaction session or entrance test (for higher grades) to assess the child\'s readiness.',
    icon: <UserCheck className="text-orange-500" />
  },
  { 
    title: 'Admission Confirmation', 
    desc: 'Upon successful assessment, complete the admission formalities and secure your child\'s seat.',
    icon: <CheckCircle className="text-orange-500" />
  },
];

const eligibilityCriteria = [
  { grade: 'Nursery', age: '3+ Years as on 31st March' },
  { grade: 'LKG', age: '4+ Years as on 31st March' },
  { grade: 'UKG', age: '5+ Years as on 31st March' },
  { grade: 'Grade I', age: '6+ Years as on 31st March' },
];

const requiredDocuments = [
  'Birth Certificate (Original & Photocopy)',
  'Transfer Certificate (Original, if applicable)',
  'Previous Year Report Card (Photocopy)',
  'Passport Size Photographs (6 copies)',
  'Aadhar Card of Student & Parents',
  'Address Proof (Electricity Bill/Voter ID/Passport)',
];

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    grade: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your inquiry! We will get back to you soon.');
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-blue-900 py-20 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full -ml-32 -mb-32" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Admissions Open 2026-27
          </motion.h1>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Join the Sharda Gurukul family and secure your child's future with excellence and values.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Admission Process</h2>
            <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-shadow text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {idx + 1}
                </div>
                <div className="mb-6 mt-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Eligibility Criteria */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
                <Calendar className="mr-3 text-orange-500" />
                Eligibility Criteria
              </h2>
              <div className="space-y-4">
                {eligibilityCriteria.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="font-bold text-blue-900">{item.grade}</span>
                    <span className="text-gray-600 text-sm">{item.age}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-500 italic">
                * Age criteria for higher grades will be based on the Transfer Certificate from the previous school.
              </p>
            </div>

            {/* Required Documents */}
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-8 flex items-center">
                <FileText className="mr-3 text-orange-500" />
                Required Documents
              </h2>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm font-medium text-gray-700">
                    <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-24 bg-white" id="inquiry-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Admission Inquiry</h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Have questions about our programs or the admission process? Fill out the form, and our admissions team will get back to you within 24 hours.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-medium text-blue-100">Personalized Campus Tour</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-medium text-blue-100">Interaction with Faculty</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={20} />
                  </div>
                  <span className="font-medium text-blue-100">Fee Structure Guidance</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Student Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter Name" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Enter Phone" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Enter Email" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-blue-900 mb-2">Grade for Admission</label>
                    <select 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    >
                      <option value="">Select Grade</option>
                      <option value="Nursery">Nursery</option>
                      <option value="LKG">LKG</option>
                      <option value="UKG">UKG</option>
                      <option value="Grade I">Grade I</option>
                      <option value="Grade II">Grade II</option>
                      <option value="Grade III">Grade III</option>
                      <option value="Grade IV">Grade IV</option>
                      <option value="Grade V">Grade V</option>
                      <option value="Grade VI">Grade VI</option>
                      <option value="Grade VII">Grade VII</option>
                      <option value="Grade VIII">Grade VIII</option>
                      <option value="Grade IX">Grade IX</option>
                      <option value="Grade X">Grade X</option>
                      <option value="Grade XI">Grade XI</option>
                      <option value="Grade XII">Grade XII</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-blue-900 mb-2">Message (Optional)</label>
                  <textarea 
                    rows={4} 
                    placeholder="Any specific questions?" 
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl hover:bg-orange-600 transition-all shadow-xl flex items-center justify-center group"
                >
                  Submit Inquiry
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
