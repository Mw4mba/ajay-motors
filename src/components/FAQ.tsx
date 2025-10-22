export default function FAQ() {
  const faqs = [
    {
      question: 'How do I apply for finance?',
      answer: 'You can apply for finance through our website, in person at our dealership, or by contacting us. We work with all major South African banks including ABSA, FNB, Nedbank, and Standard Bank to get you the best rates.',
    },
    {
      question: 'What documents do I need to buy a car?',
      answer: 'You\'ll need a valid SA ID or passport, proof of residence (utility bill or bank statement), latest payslip or bank statements, and a valid driver\'s license. For finance applications, 3 months\' bank statements are required.',
    },
    {
      question: 'Do you accept trade-ins?',
      answer: 'Yes! We accept trade-ins and offer competitive valuations. Our team can provide a free valuation of your vehicle and settle any outstanding finance. Get your instant valuation online or visit us in person.',
    },
    {
      question: 'What is your return policy?',
      answer: 'We offer a 7-day money-back guarantee on all vehicles. If you\'re not completely satisfied with your purchase, you can return it within 7 days for a full refund. Terms and conditions apply.',
    },
    {
      question: 'Do you offer warranties?',
      answer: 'All our vehicles come with a comprehensive warranty. We also offer extended warranty packages for additional peace of mind. Mechanical warranties range from 3 to 12 months depending on the vehicle.',
    },
    {
      question: 'Can I reserve a vehicle?',
      answer: 'Yes, you can reserve any vehicle with a refundable deposit. This holds the vehicle for 48 hours while you arrange finance or viewing. Contact us for more details on the reservation process.',
    },
    {
      question: 'Do you deliver nationwide?',
      answer: 'Yes, we offer nationwide delivery across all provinces in South Africa. Delivery costs vary depending on distance. We can also arrange for you to collect the vehicle from our showroom in Johannesburg.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept EFT, bank transfers, cash (up to legal limits), and all major credit cards. For financed purchases, the bank will handle the payment directly to us once approved.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3 animate-fade-in">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about buying from Ajay Motors
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    className="w-5 h-5 text-blue-600 shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-blue-50 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Contact our team.</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
