import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Filter, 
  Briefcase, 
  Building2, 
  Calendar,
  ChevronRight
} from 'lucide-react';

interface InternshipSearchProps {
  userData: {
    name: string;
    year: string;
    department: string;
    governorate: string;
  } | null;
}

const DEPARTMENTS = [
  'هندسة الحاسبات', 'هندسة الميكانيكا', 'هندسة الكهرباء', 'هندسة المدني', 
  'علوم الحاسب', 'نظم المعلومات', 'كيمياء هندسية'
];

const INDUSTRIES = [
  'تصنيع إلكترونيات', 'صناعات غذائية', 'بناء وتشييد', 'طاقة متجددة', 'سيارات'
];

const GOVERNORATES = [
  'القاهرة', 'الجيزة', 'الإسكندرية', 'العاشر من رمضان', 'السادس من أكتوبر', 'برج العرب'
];

const MOCK_DATA = [
  {
    id: 1,
    title: 'تدريب مهندس ميكانيكا إنتاج',
    company: 'مصانع العربي',
    location: 'العاشر من رمضان',
    department: 'هندسة الميكانيكا',
    industry: 'صناعات إلكترونية',
    duration: '3 شهور',
    type: 'تدريب صيفي',
    logo: 'A'
  },
  {
    id: 2,
    title: 'مطور واجهات أمامية',
    company: 'ڤودافون مصر',
    location: 'الجيزة',
    department: 'علوم الحاسب',
    industry: 'اتصالات',
    duration: '2 شهر',
    type: 'عن بعد / حضوري',
    logo: 'V'
  },
  {
    id: 3,
    title: 'تدريب صيانة أنظمة كهربائية',
    company: 'السويدي للكابلات',
    location: 'العاشر من رمضان',
    department: 'هندسة الكهرباء',
    industry: 'طاقة',
    duration: '3 شهور',
    type: 'تدريب داخلي',
    logo: 'E'
  },
  {
    id: 4,
    title: 'تحليل بيانات صناعية',
    company: 'حديد عز',
    location: 'الإسكندرية',
    department: 'نظم المعلومات',
    industry: 'صناعات ثقيلة',
    duration: '6 شهور',
    type: 'برنامج خريجين',
    logo: 'I'
  }
];

export default function InternshipSearch({ userData }: InternshipSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState(userData?.department || 'الكل');
  const [selectedGov, setSelectedGov] = useState('الكل');
  const [selectedIndustry, setSelectedIndustry] = useState('الكل');

  const filteredData = MOCK_DATA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'الكل' || item.department === selectedDept;
    const matchesGov = selectedGov === 'الكل' || item.location.includes(selectedGov);
    const matchesIndustry = selectedIndustry === 'الكل' || item.industry === selectedIndustry;
    
    return matchesSearch && matchesDept && matchesGov && matchesIndustry;
  });

  return (
    <div className="space-y-6 pb-10">
      {/* Search Header */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="ابحث باسم الشركة أو الوظيفة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pr-10 pl-4 py-2.5 text-slate-800 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all text-sm"
            />
          </div>
          <button className="bg-indigo-600 text-white px-8 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 text-sm">
            تطبيق الفلاتر
          </button>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">التخصص المطلوب</label>
            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 outline-none focus:border-indigo-500 text-sm cursor-pointer"
            >
              <option value="الكل">جميع التخصصات</option>
              {DEPARTMENTS.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">المحافظة</label>
            <select 
              value={selectedGov}
              onChange={(e) => setSelectedGov(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 outline-none focus:border-indigo-500 text-sm cursor-pointer"
            >
              <option value="الكل">كل المحافظات</option>
              {GOVERNORATES.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">مجال الصناعة</label>
            <select 
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-700 outline-none focus:border-indigo-500 text-sm cursor-pointer"
            >
              <option value="الكل">كل المجالات</option>
              {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col shadow-sm hover:border-indigo-300 hover:shadow-md transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-lg font-bold font-mono text-indigo-600">
                      {item.logo}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm line-clamp-1">{item.title}</h3>
                      <p className="text-[11px] text-slate-400 flex items-center gap-1">
                        <Building2 size={12} /> {item.company}
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-600">
                    {item.type.split(' ')[0]}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                  فرصة تدريب مميزة في {item.company} لطلاب {item.department} تهدف لتطوير المهارات العملية.
                </p>

                <div className="mt-auto border-t border-slate-50 pt-4 flex flex-wrap gap-1.5">
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded flex items-center gap-1">
                    <MapPin size={10} /> {item.location}
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded flex items-center gap-1">
                    <Calendar size={10} /> {item.duration}
                  </span>
                  <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-1 rounded font-bold">
                    {item.department.split(' ')[1] || item.department}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-300">
                <Search size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">لا توجد نتائج</h3>
              <p className="text-sm text-slate-400">حاول تعديل خيارات البحث للعثور على فرص أخرى.</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
