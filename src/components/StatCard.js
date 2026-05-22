import React from 'react';

export default function StatCard({ title, value, icon, change, isPositive }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
      <div className="space-y-1">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <h4 className="text-2xl font-bold text-slate-800">{value}</h4>
        <p className={`text-xs font-medium ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
          {isPositive ? '▲' : '▼'} {change} <span className="text-slate-400 font-normal">vs last month</span>
        </p>
      </div>
      <div className="text-2xl p-3 bg-slate-50 rounded-lg border border-slate-100">
        {icon}
      </div>
    </div>
  );
}