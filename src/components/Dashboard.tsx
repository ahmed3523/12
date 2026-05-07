import { motion } from 'motion/react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';

interface DashboardProps {
  userData: {
    name: string;
    year: string;
    department: string;
    governorate: string;
  } | null;
}

export default function Dashboard({ userData }: DashboardProps) {
  const stats = [
    { title: 'فرص متاحة', value: '124', icon: Zap, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'طلاب مسجلين', value: '2,840', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'نسبة النجاح', value: '%98', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-1 leading-tight">
            أهلاً بك يا <span className="text-indigo-600">{userData?.name.split(' ')[0] || 'أحمد'}</span> في عالمك المهني
          </h2>
          <p className="text-sm text-slate-500 max-w-lg">
            نحن هنا لنساعدك في العثور على أفضل الفرص التدريبية التي تناسب تخصصك في <span className="text-indigo-600 font-bold">{userData?.department || 'هندسة الميكانيكا'}</span>.
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-5 rounded-xl transition-all group hover:border-indigo-300"
          >
            <div className="flex justify-between items-start mb-3">
              <div className={`p-2 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <ArrowUpRight className="text-slate-300 group-hover:text-indigo-600 transition-colors" size={18} />
            </div>
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-slate-800 font-mono">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 rounded-xl relative group overflow-hidden border-indigo-100">
          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-600" />
          <h3 className="text-lg font-bold text-slate-800 mb-3">توصية ذكية لك</h3>
          <p className="text-sm text-slate-500 mb-5">
            بناءً على تخصصك، نقترح عليك البدء في استكشاف فرص تدريب شركة "سيمنز" في مجال الأنظمة المدمجة هذا الشهر.
          </p>
          <button className="text-sm font-bold text-indigo-600 flex items-center gap-2 hover:gap-3 transition-all">
            التفاصيل الكاملة <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="glass-card p-6 rounded-xl border-dashed border-slate-300 bg-slate-50/50 flex flex-col items-center justify-center text-center">
          <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-3">
            <Zap className="text-indigo-600" size={24} />
          </div>
          <h3 className="text-base font-bold text-slate-800 mb-1">أكمل ملفك الشخصي</h3>
          <p className="text-[11px] text-slate-400 mb-4 uppercase tracking-wider">
            ارفع سيرتك الذاتية لزيادة فرص قبولك بنسبة %40
          </p>
          <button className="px-5 py-2 bg-indigo-600 text-white text-sm font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100">
            رفع ملفات
          </button>
        </div>
      </div>
    </div>
  );
}
