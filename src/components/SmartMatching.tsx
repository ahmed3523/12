import { BrainCircuit, Sparkles, Target } from 'lucide-react';

export default function SmartMatching() {
  return (
    <div className="space-y-8 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="relative">
        <div className="absolute inset-0 bg-indigo-600/5 blur-[80px]" />
        <div className="w-16 h-16 rounded-xl bg-indigo-600 text-white flex items-center justify-center relative z-10 shadow-lg shadow-indigo-200">
          <BrainCircuit size={32} />
        </div>
      </div>
      
      <div className="max-w-md space-y-3">
        <h2 className="text-2xl font-bold text-slate-800">المطابقة <span className="text-indigo-600">الذكية</span></h2>
        <p className="text-sm text-slate-500">
          محرك الذكاء الاصطناعي يقوم الآن بتحليل مهاراتك وتخصصك لترشيح أفضل الفرص التدريبية لك بدقة عالية.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl px-4">
        <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 text-right shadow-sm">
          <Target className="text-indigo-600 shrink-0" size={24} />
          <div>
            <h4 className="text-sm font-bold text-slate-800">تحليل المهارات</h4>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">مقارنة مع متطلبات السوق</p>
          </div>
        </div>
        <div className="bg-white border border-slate-200 p-5 rounded-xl flex items-center gap-4 text-right opacity-60 shadow-sm">
          <Sparkles className="text-blue-500 shrink-0" size={24} />
          <div>
            <h4 className="text-sm font-bold text-slate-800">توليد الترشيحات</h4>
            <p className="text-[11px] text-slate-400 uppercase tracking-wider">معالجة البيانات الضخمة</p>
          </div>
        </div>
      </div>

      <button className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all text-sm">
        ابدأ التحليل الآن
      </button>
    </div>
  );
}
