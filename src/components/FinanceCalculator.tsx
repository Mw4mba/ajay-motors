'use client';

import { useState, useMemo } from 'react';
import FinancialPartners from './FinancialPartners';

export default function FinanceCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(850000);
  const [deposit, setDeposit] = useState(85000);
  const [tradeIn, setTradeIn] = useState(0);
  const [loanTerm, setLoanTerm] = useState(60);
  const [interestRate, setInterestRate] = useState(10.5);

  const calculateMonthlyPayment = () => {
    const principal = vehiclePrice - deposit - tradeIn;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;
    
    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                          (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return isNaN(monthlyPayment) ? 0 : monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const totalRepayment = monthlyPayment * loanTerm;
  const principal = vehiclePrice - deposit - tradeIn;
  const totalInterest = totalRepayment - principal;

  // Pie chart data
  const pieData = useMemo(() => {
    const principalPercent = (principal / totalRepayment) * 100;
    const interestPercent = (totalInterest / totalRepayment) * 100;
    return {
      principal: isNaN(principalPercent) ? 0 : principalPercent,
      interest: isNaN(interestPercent) ? 0 : interestPercent,
    };
  }, [principal, totalInterest, totalRepayment]);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[450px_1fr] gap-6 lg:gap-12">
            {/* Financial Partners - Left side on desktop, top on mobile */}
            <div className="order-2 lg:order-1">
              <FinancialPartners />
            </div>

            {/* Calculator - Right side on desktop, bottom on mobile */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 animate-scale-in">
                {/* Title inside card */}
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    Finance Calculator
                  </h2>
                  <p className="text-gray-600 text-base md:text-lg">
                    Calculate your estimated monthly payments
                  </p>
                </div>

                {/* Pie Chart Section */}
                <div className="mb-8 bg-blue-50 rounded-xl p-4 md:p-6">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    {/* Pie Chart */}
                    <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0">
                      <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        {/* Interest slice */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#dc2626"
                          strokeWidth="20"
                          strokeDasharray={`${pieData.interest * 2.513} 251.3`}
                          className="transition-all duration-500"
                        />
                        {/* Principal slice */}
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="20"
                          strokeDasharray={`${pieData.principal * 2.513} 251.3`}
                          strokeDashoffset={`${-pieData.interest * 2.513}`}
                          className="transition-all duration-500"
                        />
                      </svg>
                      {/* Center text */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="text-xl md:text-2xl font-bold text-gray-900">
                          R {Math.round(monthlyPayment).toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-600">per month</div>
                      </div>
                    </div>

                    {/* Legend and Summary */}
                    <div className="flex-1 w-full space-y-3 md:space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 bg-blue-600 rounded"></div>
                          <span className="font-semibold text-gray-900 text-sm md:text-base">Principal</span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-blue-600">
                          R {Math.round(principal).toLocaleString()}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">{pieData.principal.toFixed(1)}% of total</div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-4 h-4 bg-red-600 rounded"></div>
                          <span className="font-semibold text-gray-900 text-sm md:text-base">Interest</span>
                        </div>
                        <div className="text-xl md:text-2xl font-bold text-red-600">
                          R {Math.round(totalInterest).toLocaleString()}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600">{pieData.interest.toFixed(1)}% of total</div>
                      </div>
                      <div className="pt-3 md:pt-4 border-t border-gray-200">
                        <div className="text-xs md:text-sm text-gray-600 mb-1">Total Repayment</div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">
                          R {Math.round(totalRepayment).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Calculator Fields in Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {/* Vehicle Price */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Vehicle Price
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500 font-medium">R</span>
                      <input
                        type="number"
                        value={vehiclePrice}
                        onChange={(e) => setVehiclePrice(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Deposit Amount */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Deposit: R {deposit.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={vehiclePrice}
                      step="1000"
                      value={deposit}
                      onChange={(e) => setDeposit(Number(e.target.value))}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>R 0</span>
                      <span>R {vehiclePrice.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Trade-in Value */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Trade-in Value
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-gray-500 font-medium">R</span>
                      <input
                        type="number"
                        value={tradeIn}
                        onChange={(e) => setTradeIn(Number(e.target.value))}
                        className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none font-semibold transition-all"
                      />
                    </div>
                  </div>

                  {/* Loan Term */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Loan Term: {loanTerm} months
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="72"
                      step="6"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>12 months</span>
                      <span>72 months</span>
                    </div>
                  </div>

                  {/* Interest Rate */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Interest Rate: {interestRate}%
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="0.5"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full accent-red-600"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>5% (Excellent)</span>
                      <span>10.5% (Good)</span>
                      <span>20% (Poor)</span>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-6 md:mt-8">
                  <button className="w-full bg-red-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02]">
                    Apply for Finance
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
