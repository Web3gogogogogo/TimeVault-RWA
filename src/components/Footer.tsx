import React from 'react';
import { Twitter, Github, Send, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#F9F7F2] text-stone-900 border-t border-stone-200 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Section */}
        <div className="text-center mb-32">
           <h2 className="text-5xl md:text-7xl font-bold mb-8 text-stone-900">
              66,660 枚，卖完即止
           </h2>
           <p className="text-xl text-stone-500 mb-12 font-light">
              把 2025 年的时间，装进你的钱包
           </p>
           <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-12 py-5 bg-stone-900 text-white font-bold rounded-full hover:bg-stone-800 transition-colors text-lg w-full sm:w-auto shadow-lg hover:shadow-xl">
                 立即铸造 (88 USDT)
              </button>
           </div>
           <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-stone-500 uppercase tracking-wider">
              <a href="#" className="hover:text-stone-900 transition-colors">查看白皮书</a>
              <span className="text-stone-300">|</span>
              <a href="#" className="hover:text-stone-900 transition-colors">加入社区</a>
              <span className="text-stone-300">|</span>
              <a href="#" className="hover:text-stone-900 transition-colors">实时仓库监控</a>
           </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-stone-200">
           <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Send size={20} /></a>
              <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors"><Mail size={20} /></a>
           </div>
           <div className="text-center md:text-right space-y-2">
              <div className="text-stone-500 text-sm">
                 © 2025 陈皮纪元. All rights reserved.
              </div>
              <div className="text-stone-400 text-xs max-w-md ml-auto">
                 陈皮创岁纪元 NFT 并非证券，仅为真实资产数字所有权凭证<br/>
                 风险提示：资产价格受市场波动影响，请理性参与
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
}
