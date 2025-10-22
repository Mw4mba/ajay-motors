'use client';

import { useState } from 'react';

interface ConnectFormProps {
  onClose: () => void;
  availableModels: string[];
}

export default function ConnectForm({ onClose, availableModels }: ConnectFormProps) {
  const [selectedModel, setSelectedModel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showRequestForm, setShowRequestForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedModel && !availableModels.includes(selectedModel)) {
      setShowRequestForm(true);
    } else {
      // Handle successful connection
      alert(`Thank you ${name}! We'll connect you with your ${selectedModel} soon.`);
      onClose();
    }
  };

  const handleMakeRequest = () => {
    alert(`Request submitted for ${selectedModel}! We'll contact you at ${email} or ${phone}.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
        
        {!showRequestForm ? (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Let us connect you</h2>
            <p className="text-gray-600 mb-6">Find your perfect car today</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  placeholder="+27 82 123 4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Prospective Car Model
                </label>
                <input
                  type="text"
                  required
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  placeholder="e.g., Mercedes C-Class, BMW 3 Series"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Connect Me
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Make a Request</h2>
            <p className="text-gray-600 mb-6">
              The <span className="font-semibold text-red-600">{selectedModel}</span> is currently unavailable, but we'd love to help you find it!
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-sm text-blue-800">
                We'll search our network and contact you as soon as we find your dream car.
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              <p className="text-sm text-gray-700"><strong>Name:</strong> {name}</p>
              <p className="text-sm text-gray-700"><strong>Email:</strong> {email}</p>
              <p className="text-sm text-gray-700"><strong>Mobile:</strong> {phone}</p>
              <p className="text-sm text-gray-700"><strong>Requested Model:</strong> {selectedModel}</p>
            </div>
            
            <button
              onClick={handleMakeRequest}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Submit Request
            </button>
          </>
        )}
      </div>
    </div>
  );
}
