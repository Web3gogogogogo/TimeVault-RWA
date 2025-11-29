import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function Comparison() {
  return (
    <section className="py-32 bg-[#F2EFE9] text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-stone-900">
            陈皮，是东方最硬的<br/><span className="text-amber-600">「软黄金」</span>
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
             2010 年陈皮现价 2 万/斤 · 1987 年老皮已超 188 万/50 克<br/>
             <span className="text-stone-400 text-sm mt-2 block">—— 历史证明，时间从不辜负陈皮</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 items-center">
           {/* Traditional */}
           <div className="bg-white p-8 rounded-3xl lg:rounded-r-none lg:pr-12 border border-stone-200 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-2xl font-bold text-stone-400 mb-8 text-center">传统资产</h3>
              <div className="space-y-6">
                 <Item negative text="流动性差" />
                 <Item negative text="真假难辨" />
                 <Item negative text="动辄几十万起" />
                 <Item negative text="价值靠情绪" />
                 <Item negative text="只能自己存" />
              </div>
           </div>

           {/* RWA */}
           <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-[#FAF9F6] p-10 rounded-3xl border-2 border-amber-500/20 shadow-[0_0_40px_rgba(217,119,6,0.08)] z-10 relative -my-4 lg:my-0"
           >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                 New Era
              </div>
              <h3 className="text-3xl font-bold text-stone-900 mb-10 text-center">新会陈皮 RWA</h3>
              <div className="space-y-8">
                 <Item positive text="7×24 小时全球交易" />
                 <Item positive text="全链溯源 + 蚂蚁链数据产权证书" />
                 <Item positive text="88 USDT 即可拥有 1 斤真实资产" />
                 <Item positive text="时间越久，价值越高（自然复利）" />
                 <Item positive text="5 年免费国资恒温仓 + 平安全额承保" />
              </div>
           </motion.div>

           <div className="hidden lg:block bg-white p-8 h-[80%] rounded-r-3xl border-r border-y border-stone-200 shadow-sm opacity-60 pointer-events-none">
              {/* Visual balance filler */}
           </div>
        </div>
      </div>
    </section>
  );
}

function Item({ text, positive, negative }: { text: string, positive?: boolean, negative?: boolean }) {
   return (
      <div className="flex items-start space-x-4">
         <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${positive ? 'bg-amber-100 text-amber-600' : 'bg-stone-100 text-stone-400'}`}>
            {positive ? <Check size={12} /> : <X size={12} />}
         </div>
         <span className={`text-lg ${positive ? 'text-stone-900 font-medium' : 'text-stone-400'}`}>{text}</span>
      </div>
   )
}
