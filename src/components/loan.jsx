import React, { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";

const PastLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    const dummyLoans = [
      {
        lender: "Jane Smith",
        amount: 5000,
        interestRate: 6.5,
        startDate: "2024-01-01",
        dueDate: "2024-06-01",
        paidDate: "2024-05-28",
      },
      {
        lender: "John Doe",
        amount: 10000,
        interestRate: 8,
        startDate: "2023-09-15",
        dueDate: "2024-03-15",
        paidDate: "2024-03-10",
      },
      {
        lender: "Alice Johnson",
        amount: 7500,
        interestRate: 7.2,
        startDate: "2023-04-01",
        dueDate: "2023-10-01",
        paidDate: null,
      },
    ];

    setLoans(dummyLoans);
  }, []);

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
        📜 Past Loan History
      </h2>

      {loans.length === 0 ? (
        <p className="text-gray-500 text-sm">No past loans to display.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {loans.map((loan, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-5 bg-gray-50 hover:shadow-md transition duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-indigo-700">
                  {loan.lender}
                </h3>
                {loan.paidDate ? (
                  <span className="text-green-600 text-sm flex items-center">
                    <BadgeCheck className="w-4 h-4 mr-1" /> Paid
                  </span>
                ) : (
                  <span className="text-red-500 text-sm font-medium">
                    Not Paid Yet
                  </span>
                )}
              </div>

              <div className="space-y-2 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Amount:</span> ₹{loan.amount}
                </p>
                <p>
                  <span className="font-medium">Interest Rate:</span>{" "}
                  {loan.interestRate}%
                </p>
                <p>
                  <span className="font-medium">Start Date:</span>{" "}
                  {loan.startDate}
                </p>
                <p>
                  <span className="font-medium">Due Date:</span> {loan.dueDate}
                </p>
                <p>
                  <span className="font-medium">Paid Date:</span>{" "}
                  {loan.paidDate || "—"}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastLoans;
