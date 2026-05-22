import React from 'react';
import { User, LogOut } from 'lucide-react';

export default function Topbar({ user, onLogout }) {
  return (
    <header className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-8 sticky top-0 z-10">
      {/* Left side: Workspace Title */}
      <div className="flex items-center gap-2">
        <span className="text-slate-400 text-sm">Workspace /</span>
        <h1 className="text-lg font-semibold text-slate-800">Sales Pipeline 2026</h1>
      </div>

      {/* Right side: Search & Actions */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <span className="absolute left-3 top-2.5 text-slate-400">🔍</span>
          <input
            type="text"
            placeholder="Search leads, deals..."
            className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 transition-all"
          />
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
          + Add New Lead
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 bg-slate-50">
            <User size={18} className="text-slate-500" />
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-800">{user?.fullName || 'Guest'}</div>
              <div className="text-xs text-slate-500">{user?.title || 'Member'}</div>
            </div>
          </div>
          <button
            type="button"
            onClick={onLogout}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}