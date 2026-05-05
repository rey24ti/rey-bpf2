import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

// 1. Generate 30 Data JSON untuk Customers
const initialCustomers = Array.from({ length: 30 }, (_, i) => {
    const loyalties = ["Bronze", "Silver", "Gold"];
    return {
        customerId: `CUST-${String(i + 1).padStart(3, "0")}`,
        customerName: `Customer Name ${i + 1}`,
        email: `customer${i + 1}@example.com`,
        phone: `081234567${String(i).padStart(3, "0")}`,
        loyalty: loyalties[i % 3], // Rotasi loyalty
    };
});

export default function Customers() {
    const [customers, setCustomers] = useState(initialCustomers);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-10">
            {/* Page Header dengan Tombol Add */}
            <PageHeader title="Customer List" breadcrumb={["Dashboard", "Customers"]}>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    + Add Customer
                </button>
            </PageHeader>

            <main className="p-6">
                {/* Tabel Data Customers */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 text-slate-600 border-b border-slate-200">
                                    <th className="p-4 font-semibold text-sm">Customer ID</th>
                                    <th className="p-4 font-semibold text-sm">Customer Name</th>
                                    <th className="p-4 font-semibold text-sm">Email</th>
                                    <th className="p-4 font-semibold text-sm">Phone</th>
                                    <th className="p-4 font-semibold text-sm">Loyalty</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm text-slate-700">
                                {customers.map((customer, index) => (
                                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-4 font-medium text-slate-900">{customer.customerId}</td>
                                        <td className="p-4">{customer.customerName}</td>
                                        <td className="p-4">{customer.email}</td>
                                        <td className="p-4">{customer.phone}</td>
                                        <td className="p-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                                customer.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' : 
                                                customer.loyalty === 'Silver' ? 'bg-slate-200 text-slate-600' : 
                                                'bg-orange-100 text-orange-700'
                                            }`}>
                                                {customer.loyalty}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Modal Form Add Customer */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Add New Customer</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Customer ID</label>
                                <input type="text" placeholder="e.g. CUST-031" className="mt-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Customer Name</label>
                                <input type="text" placeholder="Jane Doe" className="mt-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Email</label>
                                <input type="email" placeholder="jane@example.com" className="mt-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Phone</label>
                                <input type="tel" placeholder="0812xxx" className="mt-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700">Loyalty</label>
                                <select className="mt-1 w-full p-2 border border-slate-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                                    <option>Bronze</option>
                                    <option>Silver</option>
                                    <option>Gold</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg">Cancel</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">Save Customer</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}