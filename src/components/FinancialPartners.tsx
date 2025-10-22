import Image from 'next/image';

export default function FinancialPartners() {
  const partners = [
    {
      name: 'ABSA',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Absa_Group_Limited_Logo.svg/320px-Absa_Group_Limited_Logo.svg.png',
      description: 'Competitive rates from 10.5%',
    },
    {
      name: 'FNB',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/FNB_Logo.svg/320px-FNB_Logo.svg.png',
      description: 'Fast approval process',
    },
    {
      name: 'Nedbank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Nedbank_logo.svg/320px-Nedbank_logo.svg.png',
      description: 'Flexible payment terms',
    },
    {
      name: 'Standard Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Standard_Bank_Logo.svg/320px-Standard_Bank_Logo.svg.png',
      description: 'Pre-approved solutions',
    },
    {
      name: 'Wesbank',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/77/WesBank_logo.svg/320px-WesBank_logo.svg.png',
      description: 'Specialized vehicle finance',
    },
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Quick Approval',
      description: 'Get approved in as little as 24 hours',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Best Rates',
      description: 'We compare offers to get you the lowest rate',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Simple Process',
      description: 'Minimal paperwork, maximum convenience',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Flexible Terms',
      description: 'Payment plans from 12 to 72 months',
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 animate-fade-in">
          Our Financial Partners
        </h3>
        <p className="text-gray-600 text-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
          We've partnered with South Africa's most trusted financial institutions to help you secure the best vehicle finance rates and terms.
        </p>
      </div>

      {/* Partners Grid - No card styling */}
      <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">
          Trusted Partners
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="shrink-0 w-24 h-14 relative flex items-center justify-center bg-white rounded">
                <Image 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  width={96}
                  height={56}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-gray-900 text-base mb-1">
                  {partner.name}
                </div>
                <div className="text-sm text-gray-600">
                  {partner.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="space-y-4 grow">
        <h4 className="font-semibold text-gray-900 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          How We Help You
        </h4>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex gap-3 animate-fade-in"
            style={{ animationDelay: `${0.4 + index * 0.05}s` }}
          >
            <div className="text-blue-600 shrink-0 mt-1">
              {benefit.icon}
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-1">
                {benefit.title}
              </h5>
              <p className="text-sm text-gray-600">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200 animate-fade-in" style={{ animationDelay: '0.7s' }}>
        <p className="text-sm text-gray-700 mb-3">
          <strong className="text-red-600">Need help?</strong> Our finance specialists are ready to assist you in finding the perfect financing solution.
        </p>
        <button className="w-full bg-red-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm">
          Speak to a Finance Specialist
        </button>
      </div>
    </div>
  );
}
