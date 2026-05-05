import React, { useState } from "react";
import PageHeader from "../components/PageHeader";

// Generate 30 Data JSON untuk Orders
const initialOrders = Array.from({ length: 30 }, (_, i) => {
    const statuses = ["Pending", "Completed", "Cancelled"];
    return {
        orderId: `ORD-${String(i + 1).padStart(3, "0")}`,
        customerName: `Customer Name ${i + 1}`,
        status: statuses[i % 3],
        totalPrice: Math.floor(Math.random() * 500000) + 50000,
        orderDate: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
    };
});

export default function Orders() {
    const [orders] = useState(initialOrders);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-10">
            <PageHeader title="Order List" breadcrumb={["Dashboard", "Orders"]}>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-lg shadow-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
                >
                    + Add Orders
                </button>
            </PageHeader>

            <main className="p-6">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                                    <th className="px-6 py-4 font-semibold">Order ID</th>
                                    <th className="px-6 py-4 font-semibold">Customer Name</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Total Price</th>
                                    <th className="px-6 py-4 font-semibold">Order Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {orders.map((order, index) => (
                                    <tr key={index} className="border-b border-slate-100 hover:bg-slate-50/80 transition-colors last:border-0">
                                        <td className="px-6 py-4 font-semibold text-slate-800">{order.orderId}</td>
                                        <td className="px-6 py-4 text-slate-600 font-medium">{order.customerName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                                                order.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 
                                                order.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 
                                                'bg-rose-100 text-rose-700'
                                            }`}>
                                                <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                                                    order.status === 'Completed' ? 'bg-emerald-500' : 
                                                    order.status === 'Pending' ? 'bg-amber-500' : 
                                                    'bg-rose-500'
                                                }`}></span>
                                                {order.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-700 font-medium">Rp {order.totalPrice.toLocaleString('id-ID')}</td>
                                        <td className="px-6 py-4 text-slate-500">{order.orderDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Modal Form Tetap Sama */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold text-slate-800 mb-5">Add New Order</h2>
                        <form className="space-y-4">
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Order ID</label><input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Customer Name</label><input type="text" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" /></div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                                <select className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all">
                                    <option>Pending</option><option>Completed</option><option>Cancelled</option>
                                </select>
                            </div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Total Price</label><input type="number" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" /></div>
                            <div><label className="block text-sm font-medium text-slate-700 mb-1">Order Date</label><input type="date" className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all" /></div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">Cancel</button>
                                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 font-medium text-white bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-colors">Save Order</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}