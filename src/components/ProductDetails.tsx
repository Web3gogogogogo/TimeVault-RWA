import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Thermometer, QrCode, ShieldCheck } from 'lucide-react';

export function ProductDetails() {
  return (
    <section className="py-32 bg-[#F9F7F2] text-stone-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F2EFE9] to-transparent pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           {/* Image Grid */}
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                 <div className="h-64 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg">
                    <ImageWithFallback 
                       src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=1080" 
                       alt="Storage Warehouse"
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] hover:grayscale-0"
                    />
                 </div>
                 <div className="h-40 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg">
                    <ImageWithFallback 
                       src="https://images.unsplash.com/photo-1563366061-ce2d6829f3c8?auto=format&fit=crop&q=80&w=1080" 
                       alt="Tangerine Drying"
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] hover:grayscale-0"
                    />
                 </div>
              </div>
              <div className="space-y-4 pt-8">
                 <div className="h-40 rounded-2xl overflow-hidden border border-stone-200 group shadow-lg">
                    <ImageWithFallback 
                       src="https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=80&w=1080" 
                       alt="Macro Texture"
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[20%] hover:grayscale-0"
                    />
                 </div>
                 <div className="h-64 rounded-2xl overflow-hidden border border-stone-200 group relative bg-white flex items-center justify-center shadow-lg">
                    <div className="text-center">
                       <QrCode size={48} className="text-amber-600 mx-auto mb-2 opacity-80" />
                       <div className="font-mono text-xs text-stone-400">HASH: 0x8f...3a1</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Content */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
           >
              <div className="inline-flex items-center space-x-2 text-amber-600 mb-4">
                 <ShieldCheck size={16} />
                 <span className="text-sm tracking-wider uppercase font-bold">Asset backed NFT</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-stone-900">
                 每一枚 NFT，都对应<br/>一筐看得见的陈皮
              </h2>

              <div className="space-y-6 font-light text-stone-600 text-lg">
                 <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <span>产地</span>
                    <span className="text-stone-900 font-medium flex items-center"><MapPin size={16} className="mr-2 text-amber-600"/>新会核心产区（国家地理标志）</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <span>品种</span>
                    <span className="text-stone-900 font-medium">茶枝柑（正宗道地）</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <span>仓储</span>
                    <span className="text-stone-900 font-medium text-right">中国供销·江门新会陈皮产业园<br/><span className="text-xs text-stone-500">3.6 万㎡国资恒温仓</span></span>
                 </div>
                 <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <span>保险</span>
                    <span className="text-stone-900 font-medium">中国平安全额财产险</span>
                 </div>
                 <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <span>溯源</span>
                    <span className="text-stone-900 font-medium">蚂蚁链上链 + 数据产权证书</span>
                 </div>
                 <div className="flex items-center justify-between pt-2">
                    <span>仓储费用</span>
                    <span className="text-amber-600 font-bold">首 5 年免费</span>
                 </div>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
}
