import React, { useState } from 'react';
import { LogOut, ChevronDown, ChevronRight } from 'lucide-react';

export default function Sidebar({ onLogout, user, activePage, onSelectPage }) {
  const [aiOpen, setAiOpen] = useState(true);

  const menuSections = [
    {
      section: 'main',
      items: [
        { id: 'sequences', name: 'Sequences', icon: '📋', path: '/sequences' },
        { id: 'quotes', name: 'Quotes and Invoices', icon: '🧾', path: '/quotes' },
        { id: 'mass-email', name: 'Mass email tracking', icon: '🚀', path: '/mass-email' },
        { id: 'home', name: 'Home', icon: '🏠', path: '/home'},
        { id: 'more', name: 'More', icon: '💬', path: '/more' },
      ],
    },
    {
      section: 'Workspace',
      workspaceName: 'CRM',
      items: [
        { id: 'contacts', name: 'Contacts', icon: '👥', path: '/contacts' },
        { id: 'deals', name: 'Deals', icon: '💰', path: '/deals' },
        { id: 'leads', name: 'Leads', icon: '🎯', path: '/leads' },
        { id: 'accounts', name: 'Accounts', icon: '🏢', path: '/accounts' },
        { id: 'client-projects', name: 'Client Projects', icon: '📊', path: '/client-projects' },
        { id: 'products-services', name: 'Products & Services', icon: '💼', path: '/products-services' },
        { id: 'activities', name: 'Activities', icon: '🗓️', path: '/activities' },
        { id: 'sales-dashboard', name: 'Sales Dashboard', icon: '📉', path: '/sales-dashboard' },
      ],
    },
  ];

  const canAccess = (item) => {
    if (!item.roles) return true;
    return item.roles.includes(user?.role);
  };

  const visibleSections = menuSections
    .map((section) => ({
      ...section,
      items: section.items.filter(canAccess),
    }))
    .filter((section) => section.items.length > 0);

  return (
    <aside className="w-72 bg-slate-950 text-slate-300 h-screen fixed left-0 top-0 flex flex-col justify-between border-r border-slate-800">
      <div>
        {/* Logo Section */}
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-bold">M</div>
          <span className="text-xl font-bold text-white tracking-wide">CRM SABB</span>
        </div>
        
        {/* Navigation Sections */}
        <nav className="p-4 space-y-6">
          {visibleSections.map((section) => (
            <div key={section.section} className="space-y-3">
              <div className="flex items-center justify-between px-3 text-xs uppercase tracking-[0.18em] text-slate-500 font-semibold">
                <span>{section.workspaceName || section.section}</span>
                {section.isCollapsible ? (
                  <button
                    type="button"
                    onClick={() => setAiOpen((open) => !open)}
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition"
                  >
                    {aiOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </button>
                ) : null}
              </div>

              {(!section.isCollapsible || aiOpen) && (
                <div className="space-y-1">
                  {section.items.map((item) => {
                    const isActive = activePage === item.id || item.isActive;
                    return (
                      <a
                        key={item.id}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          onSelectPage?.(item.id);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                          isActive
                            ? 'bg-indigo-600 text-white shadow-lg'
                            : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.name}</span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* User Quick Profile and Logout */}
      <div className="p-4 border-t border-slate-800 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold text-sm">
            {user?.fullName?.split(' ').map((part) => part[0]).join('')}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{user?.fullName || 'Guest User'}</p>
            <p className="text-xs text-slate-400">{user?.title || 'Member'}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-all"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}