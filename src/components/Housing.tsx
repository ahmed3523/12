import { Hotel, MapPin, ShieldCheck, Wifi } from 'lucide-react';

export default function Housing() {
  const accommodations = [
    { name: 'سكن الطلبة المتميز', location: 'القاهرة - مدينة نصر', price: '1500 ج.م', rating: '4.8' },
    { name: 'واحة المغتربين', location: 'الجيزة - الدقي', price: '1200 ج.م', rating: '4.5' },
    { name: 'سكن النجوم', location: 'العاشر من رمضان', price: '900 ج.م', rating: '4.2' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">خيارات <span className="text-indigo-600">السكن</span></h2>
          <p className="text-sm text-slate-500">سكن آمن ومريح بالقرب من تدريبك</p>
        </div>
        <button className="text-indigo-600 text-[11px] font-bold uppercase tracking-wider hover:underline">مشاهدة الكل</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accommodations.map((item, i) => (
          <div key={i} className="bg-white border border-border-main rounded-xl overflow-hidden group shadow-sm hover:border-indigo-200 transition-all">
            <div className="h-32 bg-slate-100 relative flex items-center justify-center">
              <Hotel size={48} className="text-slate-300" />
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-100 text-amber-700 text-[10px] font-bold">
                {item.rating} ★
              </div>
            </div>
            <div className="p-4 space-y-3">
              <h3 className="font-bold text-slate-800 group-hover:text-indigo-600 transition-colors text-sm">{item.name}</h3>
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin size={12} />
                {item.location}
              </div>
              <div className="flex gap-3 pt-3 border-t border-slate-50">
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                  <ShieldCheck size={12} className="text-green-500" /> آمن
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 font-bold uppercase">
                  <Wifi size={12} className="text-blue-500" /> واي فاي
                </div>
              </div>
              <div className="flex justify-between items-center pt-1">
                <span className="text-slate-800 font-mono font-bold text-sm">{item.price} <span className="text-[10px] text-slate-400">/ شهر</span></span>
                <button className="px-4 py-1.5 bg-slate-50 hover:bg-indigo-600 hover:text-white rounded text-[11px] font-bold border border-slate-200 transition-all uppercase">
                  حجز
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
