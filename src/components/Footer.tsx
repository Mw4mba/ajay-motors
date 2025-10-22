export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Ajay Motors</h3>
                <p className="text-xs text-gray-400 italic">Connecting you with cars you love</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in finding the perfect luxury vehicle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#inventory" className="hover:text-white transition-colors">Inventory</a></li>
              <li><a href="#sell" className="hover:text-white transition-colors">Sell With Us</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Brands */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold mb-4">Brands</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Mercedes-Benz</a></li>
              <li><a href="#" className="hover:text-white transition-colors">BMW</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audi</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Jan Smuts Avenue</li>
              <li>Johannesburg, Gauteng 2196</li>
              <li>Mobile: +27 82 123 4567</li>
              <li>Email: info@ajaymotors.co.za</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ajay Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
