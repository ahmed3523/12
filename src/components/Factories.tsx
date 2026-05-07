import { Factory as FactoryIcon, Shield, Globe, Award } from 'lucide-react';

export default function Factories() {
  const partners = [
    { name: 'مجموعة شركات العربي', field: 'صناعات إلكترونية', partners: 12, rating: 'Gold' },
    { name: 'بافاريا مصر', field: 'صناعة إطفاء الحرائق', partners: 8, rating: 'Silver' },
    { name: 'حديد عز', field: 'صناعات ثقيلة', partners: 20, rating: 'Platinum' },
    { name: 'سيمنز مصر', field: 'طاقة وتكنولوجيا', partners: 15, rating: 'Diamond' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold text-slate-800">شركاء <span className="text-indigo-600">الصناعة</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {partners.map((partner, i) => (
              <div key={i} className="bg-white border border-slate-200 p-4 rounded-xl flex items-center gap-4 hover:border-indigo-300 transition-all shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center text-indigo-600">
                  <FactoryIcon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">{partner.name}</h4>
                  <p className="text-[11px] text-slate-400">{partner.field}</p>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-bold text-indigo-600 mb-0.5 uppercase">{partner.rating}</div>
                  <div className="text-[10px] text-slate-400 font-mono">{partner.partners}+ فرصة</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-indigo-100 p-6 rounded-xl shadow-sm">
          <h3 className="text-base font-bold text-slate-800 mb-5 pb-3 border-b border-slate-50">احصائيات المصانع</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center text-green-600"><Shield size={18} /></div>
              <div>
                <p className="text-xs font-bold text-slate-800">100+ بيئة آمنة</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">معايير السلامة المهنية</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-amber-50 flex items-center justify-center text-amber-600"><Award size={18} /></div>
              <div>
                <p className="text-xs font-bold text-slate-800">شهادات معتمدة</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">معتمدة من وزارة الصناعة</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600"><Globe size={18} /></div>
              <div>
                <p className="text-xs font-bold text-slate-800">انتشار واسع</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">كافة الأقاليم الصناعية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
