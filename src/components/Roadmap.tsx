import React from 'react';
import { motion } from 'motion/react';

const steps = [
  { year: '2025', title: '创岁纪元首发', desc: '66,660 枚 Genesis NFT 发售' },
  { year: '2026', title: 'DAO 上线', desc: '积分通证化 & 社区治理开启' },
  { year: '2027', title: '金融层解锁', desc: '质押借贷、文旅合作生态打通' },
  { year: '2028+', title: '全球生态', desc: '50+ 城市节点 + 药食同源 RWA 生态' },
];

export function Roadmap() {
  return (
    <section className="py-32 bg-[#FDFCF9] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <h2 className="text-4xl font-bold sticky top-32 text-stone-900">路线图</h2>
            </div>
            
            <div className="lg:col-span-8 relative border-l border-stone-200 pl-8 md:pl-16 space-y-20">
               {steps.map((step, index) => (
                  <motion.div 
                     key={index}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.1 }}
                     className="relative"
                  >
                     <div className="absolute -left-[39px] md:-left-[71px] top-2 w-5 h-5 rounded-full bg-[#FDFCF9] border-4 border-amber-600"></div>
                     <div className="text-amber-600 font-mono text-lg mb-2">{step.year}</div>
                     <h3 className="text-2xl font-bold text-stone-900 mb-2">{step.title}</h3>
                     <p className="text-stone-500">{step.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
    </section>
  );
}
