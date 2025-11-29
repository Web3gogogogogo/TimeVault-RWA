import React from 'react';
import { motion } from 'motion/react';
import { Truck, TrendingUp, Vote, Coins, Star, Percent } from 'lucide-react';

const rights = [
  {
    icon: Truck,
    title: '实物提取',
    desc: '随时全球发货到家'
  },
  {
    icon: TrendingUp,
    title: '自然增值',
    desc: '越存越值，坐享复利'
  },
  {
    icon: Vote,
    title: 'DAO 治理',
    desc: '创世会员 1.5× 投票权'
  },
  {
    icon: Coins,
    title: '积分空投',
    desc: '每持有 1 枚每月 +6 积分'
  },
  {
    icon: Star,
    title: '优先认购',
    desc: '未来所有 RWA 项目白名单'
  },
  {
    icon: Percent,
    title: '终身折扣',
    desc: '六真陈皮全线产品 8 折起'
  }
];

export function Rights() {
  return (
    <section className="py-32 bg-[#F9F7F2] text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
        >
           <h2 className="text-4xl md:text-6xl font-bold mb-6 text-stone-900">
              买的不是 NFT<br/>是<span className="text-amber-600">时间的所有权</span>
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {rights.map((right, index) => (
              <motion.div
                 key={index}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 whileHover={{ y: -5, backgroundColor: '#FFFFFF' }}
                 className="bg-[#F2EFE9] p-8 rounded-2xl border border-stone-200 text-left group transition-all hover:shadow-md"
              >
                 <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform border border-stone-100 shadow-sm">
                    <right.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold text-stone-900 mb-2">{right.title}</h3>
                 <p className="text-stone-500 text-sm">{right.desc}</p>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
