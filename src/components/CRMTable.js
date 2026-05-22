import React from 'react';

export default function CRMTable() {
  const leads = [
    { id: 1, name: 'Acme Corp', contact: 'John Doe', value: '$12,500', status: 'In Progress', statusColor: 'bg-amber-100 text-amber-800' },
    { id: 2, name: 'Nova Tech', contact: 'Sarah Connor', value: '$45,000', status: 'Won', statusColor: 'bg-emerald-100 text-emerald-800' },
    { id: 3, name: 'Delta Inc', contact: 'Bruce Wayne', value: '$8,200', status: 'Lost', statusColor: 'bg-rose-100 text-rose-800' },
    { id: 4, name: 'Cyberdyne Systems', contact: 'Miles Dyson', value: '$23,000', status: 'New Lead', statusColor: 'bg-blue-100 text-blue-800' },
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex justify-between items-center">
        <h3 className="font-semibold text-slate-800 text-base">Active Deals</h3>
        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">Total: 4 Accounts</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider border-b border-slate-200">
              <th className="px-6 py-3.5">Company Name</th>
              <th className="px-6 py-3.5">Contact Person</th>
              <th className="px-6 py-3.5">Deal Value</th>
              <th className="px-6 py-3.5 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{lead.name}</td>
                <td className="px-6 py-4">{lead.contact}</td>
                <td className="px-6 py-4 font-mono font-medium">{lead.value}</td>
                <td className="px-6 py-4 text-center">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold w-24 ${lead.statusColor}`}>
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}