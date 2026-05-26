import React, { useState } from 'react';
import Aside from './components/Sidebar';
import Topbar from './components/Topbar';
import CRMTable from './components/CRMTable';
import StatCard from './components/StatCard';
import ContactsPage from './components/ContactsPage';
import DealsPage from './components/DealsPage';
import LeadsPage from './components/LeadsPage';
import AccountsPage from './components/AccountsPage';
import ClientProjectsPage from './components/ClientProjectsPage';
import ProductsServicesPage from './components/ProductsServicesPage';
import ActivitiesPage from './components/ActivitiesPage';
import SalesDashboardPage from './components/SalesDashboardPage';
import QuotesAndInvoicesPage from './components/QuotesAndInvoices';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPage, setSelectedPage] = useState('sales-dashboard');
  const [user] = useState({
    fullName: 'CRM Admin',
    title: 'Admin Pro',
    role: 'admin',
  });

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Show Login page if not logged in
  if (!isLoggedIn) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  // Show Dashboard if logged in
  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased">
      {/* 1. Sidebar Component (Fixed) */}
      <Aside onLogout={handleLogout} user={user} activePage={selectedPage} onSelectPage={setSelectedPage} />

      {/* Container สำหรับเนื้อหาฝั่งขวา เพื่อไม่ให้โดน Aside ทับ */}
      <div className="ml-72 min-h-screen">
        {/* 2. Topbar Component */}
        <Topbar user={user} onLogout={handleLogout} />

        {/* 3. Main Content Area */}
        <main className="p-8 w-full space-y-8">
          {selectedPage === 'contacts' ? (
            <ContactsPage />
          ) : selectedPage === 'deals' ? (
            <DealsPage />
          ) : selectedPage === 'leads' ? (
            <LeadsPage />
          ) : selectedPage === 'accounts' ? (
            <AccountsPage />
          ) : selectedPage === 'client-projects' ? (
            <ClientProjectsPage />  
          ) : selectedPage === 'products-services' ? (
            <ProductsServicesPage />
          ) : selectedPage === 'activities' ? (
            <ActivitiesPage />
          ) : selectedPage === 'sales-dashboard' ? (
            <SalesDashboardPage />
          ) : selectedPage === 'quotes' ? (
            <QuotesAndInvoicesPage />
          ) : (
            <>
              {/* Section: สรุปภาพรวม (Dashboard Cards) */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                  title="Total Pipeline Value" 
                  value="$88,700" 
                  icon="💰" 
                  change="12.4%" 
                  isPositive={true} 
                />
                <StatCard 
                  title="Conversion Rate"
                  value="24.3%" 
                  icon="📈" 
                  change="2.1%" 
                  isPositive={true} 
                />
                <StatCard 
                  title="Lost Deals" 
                  value="3 Accounts" 
                  icon="❌" 
                  change="0.5%" 
                  isPositive={false} 
                />
              </section>

              {/* Section: ตารางข้อมูลหลัก (CRM Table) */}
              <section>
                <CRMTable />
              </section>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
