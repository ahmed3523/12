/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home as HomeIcon, 
  Search, 
  BrainCircuit, 
  Hotel, 
  Factory, 
  UserCircle 
} from 'lucide-react';

// Components
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import InternshipSearch from './components/InternshipSearch';
import SmartMatching from './components/SmartMatching';
import Housing from './components/Housing';
import Factories from './components/Factories';

type Page = 'registration' | 'home' | 'search' | 'matching' | 'housing' | 'factories';

interface UserData {
  name: string;
  year: string;
  department: string;
  governorate: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('registration');
  const [userData, setUserData] = useState<UserData | null>(null);

  // Auto-redirect if user data exists (simulating persistence or session)
  useEffect(() => {
    if (userData && currentPage === 'registration') {
      setCurrentPage('home');
    }
  }, [userData]);

  const handleRegister = (data: UserData) => {
    setUserData(data);
    setCurrentPage('home');
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: HomeIcon },
    { id: 'search', label: 'البحث عن تدريب', icon: Search },
    { id: 'matching', label: 'المطابقه الذكية', icon: BrainCircuit },
    { id: 'housing', label: 'السكن', icon: Hotel },
    { id: 'factories', label: 'المصانع', icon: Factory },
  ];

  return (
    <div dir="rtl" className="min-h-screen font-sans">
      <AnimatePresence mode="wait">
        {currentPage === 'registration' ? (
          <motion.div
            key="registration"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Registration onRegister={handleRegister} />
          </motion.div>
        ) : (
          <motion.div
            key="app-shell"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row min-h-screen"
          >
            {/* Sidebar / Navigation */}
            <aside className="w-full md:w-64 bg-slate-900 text-slate-300 md:h-screen sticky bottom-0 md:top-0 z-50 flex flex-col border-l border-slate-800">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-8 px-2 hidden md:flex">
                  <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
                  <h1 className="text-white font-bold text-lg leading-tight">مركز تدريب<br/><span className="text-indigo-400">الطلاب</span></h1>
                </div>

                <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentPage(item.id as Page)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 whitespace-nowrap text-sm ${
                        currentPage === item.id
                          ? 'bg-indigo-600 text-white'
                          : 'hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <item.icon size={18} />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  ))}
                </nav>
              </div>

              <div className="mt-auto p-4 border-t border-slate-800 hidden md:block">
                <div className="bg-slate-800 rounded-lg p-3">
                  <p className="text-[10px] text-slate-400 mb-1 uppercase font-bold tracking-wider">المستخدم المسجل</p>
                  <p className="text-sm text-white font-medium truncate">
                    {userData?.name || 'أحمد محمد علي'}
                  </p>
                  <p className="text-[10px] text-slate-500 italic">
                    {userData?.department || 'هندسة ميكانيكية'} • السنة {userData?.year || 'الثالثة'}
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden">
              {/* Header */}
              <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0">
                <h2 className="text-lg font-bold text-slate-800">
                  {navItems.find(i => i.id === currentPage)?.label}
                </h2>
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block">
                    <span className="bg-green-100 text-green-700 text-[11px] font-bold px-2 py-1 rounded">نشط الآن</span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors">
                    <UserCircle size={20} />
                  </button>
                </div>
              </header>

              <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentPage === 'home' && <Dashboard userData={userData} />}
                  {currentPage === 'search' && <InternshipSearch userData={userData} />}
                  {currentPage === 'matching' && <SmartMatching />}
                  {currentPage === 'housing' && <Housing />}
                  {currentPage === 'factories' && <Factories />}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
