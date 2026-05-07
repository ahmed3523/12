import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Calendar, BookOpen, MapPin, Sparkles } from 'lucide-react';

interface RegistrationProps {
  onRegister: (data: {
    name: string;
    year: string;
    department: string;
    governorate: string;
  }) => void;
}

const GOVERNORATES = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'القليوبية', 'الدقهلية', 'المنوفية', 
  'الشرقية', 'الغربية', 'البحيرة', 'كفر الشيخ', 'دمياط', 'بورسعيد', 
  'الإسماعيلية', 'السويس', 'شمال سيناء', 'جنوب سيناء', 'بني سويف', 
  'المنيا', 'أسيوط', 'سوهاج', 'قنا', 'الأقصر', 'أسوان', 'البحر الأحمر', 
  'الوادي الجديد', 'مطروح', 'الفيوم'
];

const DEPARTMENTS = [
  'هندسة الحاسبات', 'هندسة الميكانيكا', 'هندسة الكهرباء', 'هندسة المدني', 
  'علوم الحاسب', 'نظم المعلومات', 'التجارة', 'الحقوق', 'الطب', 'الصيدلة'
];

const ACADEMIC_YEARS = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'];

export default function Registration({ onRegister }: RegistrationProps) {
  const [formData, setFormData] = useState({
    name: '',
    year: 'الأولى',
    department: 'هندسة الحاسبات',
    governorate: 'القاهرة'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim()) {
      onRegister(formData);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card w-full max-w-md p-8 rounded-xl bg-white shadow-xl shadow-slate-200/50"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-600 text-white mb-4">
            <Sparkles size={24} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">انضم إلينا</h2>
          <p className="text-sm text-slate-500">ابدأ رحلتك المهنية الآن في مركز تدريب الطلاب</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <User size={14} className="text-indigo-600" /> الاسم الكامل
            </label>
            <input 
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-right text-sm"
              placeholder="مثال: أحمد محمد علي"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <Calendar size={14} className="text-indigo-600" /> السنة الدراسية
              </label>
              <select 
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-right text-sm cursor-pointer"
              >
                {ACADEMIC_YEARS.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <MapPin size={14} className="text-indigo-600" /> المحافظة
              </label>
              <select 
                value={formData.governorate}
                onChange={(e) => setFormData({ ...formData, governorate: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-right text-sm cursor-pointer"
              >
                {GOVERNORATES.map(g => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <BookOpen size={14} className="text-indigo-600" /> القسم الدراسي
            </label>
            <select 
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-right text-sm cursor-pointer"
            >
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mt-4 shadow-lg shadow-indigo-100"
          >
            <span>دخول للمنصة</span>
            <Sparkles size={18} />
          </button>
        </form>

        <p className="mt-8 text-center text-[10px] text-slate-400 uppercase tracking-[0.2em] font-mono">
          System Secure & Authenticated
        </p>
      </motion.div>
    </div>
  );
}
