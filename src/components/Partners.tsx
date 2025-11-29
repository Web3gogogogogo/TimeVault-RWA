import React from 'react';

export function Partners() {
  const partners = [
    "中国供销合作社",
    "江门新会陈皮产业园",
    "蚂蚁链 (AntChain)",
    "中国平安 (Ping An)",
    "Ethereum",
    "Polygon"
  ];

  return (
    <section className="py-24 bg-[#F2EFE9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
            {partners.map((p, i) => (
               <div key={i} className="text-xl font-bold text-stone-400 hover:text-stone-800 transition-colors cursor-default uppercase tracking-widest">
                  {p}
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
