import React from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
   { name: '2025 (新皮)', price: 600, label: '600' },
   { name: '2019 (5年)', price: 3900, label: '3.9k' },
   { name: '2015 (10年)', price: 5500, label: '5.5k' },
   { name: '2010 (15年)', price: 20000, label: '20k' },
   { name: '1987 (38年)', price: 3760000, label: '3.76M' },
];

export function ValueCurve() {
  return (
    <section className="py-32 bg-[#FDFCF9] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
           >
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-stone-900">
                 时间，<br/>就是收益率
              </h2>
              <p className="text-xl text-stone-500 font-light leading-relaxed mb-12">
                 陈皮的价值不靠炒作，靠分子结构随时间自我优化。<br/>
                 <span className="text-sm mt-4 block text-stone-400">（挥发油、黄酮含量逐年提升，香气与药效更醇）</span>
              </p>

              <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
                 <div className="text-4xl font-bold text-amber-600 mb-2">18.7%</div>
                 <div className="text-stone-500 text-sm">过去 15 年平均年化增长</div>
                 <div className="mt-4 text-xs text-stone-400">
                    且越老越稀缺，曲线只会更陡
                 </div>
              </div>
           </motion.div>

           <div className="relative h-[400px] lg:h-auto">
              <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={chartData}>
                    <defs>
                       <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D97706" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
                       </linearGradient>
                    </defs>
                    <XAxis 
                       dataKey="name" 
                       stroke="#A8A29E" 
                       tick={{fill: '#78716C', fontSize: 12}}
                       tickLine={false}
                       axisLine={false}
                    />
                    <Tooltip 
                       contentStyle={{backgroundColor: '#FFFFFF', border: '1px solid #E7E5E4', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}}
                       itemStyle={{color: '#D97706'}}
                    />
                    <Area 
                       type="monotone" 
                       dataKey="price" 
                       stroke="#D97706" 
                       strokeWidth={3}
                       fillOpacity={1} 
                       fill="url(#colorPrice)" 
                    />
                 </AreaChart>
              </ResponsiveContainer>
              
              {/* Overlay Stats */}
              <div className="absolute top-10 right-10 text-right hidden sm:block">
                 <div className="text-amber-600 font-mono text-sm">1987 VINTAGE</div>
                 <div className="text-stone-900 font-bold text-xl">¥3,760,000 / 50g</div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
