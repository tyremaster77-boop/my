import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const NewsFeed: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-main font-body text-text-main antialiased selection:bg-primary selection:text-black min-h-screen flex flex-col">
        {/* Header */}
        <header className="sticky top-0 z-40 bg-bg-main/95 backdrop-blur-sm border-b border-border-dim transition-all duration-300">
            <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center border border-primary/30 bg-surface text-primary shadow-neon rounded-sm">
                        <span className="material-symbols-outlined text-[20px]">newspaper</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold leading-none tracking-tight text-white uppercase font-mono drop-shadow-neon">Logica</h1>
                        <div className="flex items-center gap-1.5 mt-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse shadow-[0_0_8px_rgba(10,255,10,0.8)]"></span>
                            <p className="text-[10px] font-bold tracking-[0.2em] text-text-dim uppercase">ОБЗОР РЫНКА</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => navigate('/')} className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
                    <span className="material-symbols-outlined text-xl group-hover:rotate-90 transition-transform duration-300">close</span>
                </button>
            </div>
            {/* Filters */}
            <div className="w-full pb-4">
                <div className="flex gap-3 px-6 overflow-x-auto no-scrollbar scroll-smooth snap-x">
                    <button className="snap-start shrink-0 flex items-center gap-2 rounded-sm bg-primary/10 border border-primary px-5 py-2 text-[11px] font-bold uppercase tracking-wide text-primary shadow-neon transition-transform active:scale-95">
                        Все
                    </button>
                    {['Таиланд', 'Бали', 'Россия'].map((f) => (
                        <button key={f} className="snap-start shrink-0 flex items-center gap-2 rounded-sm bg-transparent border border-border-dim px-5 py-2 text-[11px] font-bold uppercase tracking-wide text-text-dim hover:border-white hover:text-white transition-all active:scale-95">
                            {f}
                        </button>
                    ))}
                </div>
            </div>
        </header>

        {/* Feed */}
        <main className="flex-1 w-full max-w-md mx-auto px-6 py-6 pb-28 flex flex-col gap-6">
            
            {/* Article 1 */}
            <article className="group relative flex flex-col bg-surface p-5 border border-border-dim shadow-lg hover:border-accent-green hover:shadow-[0_0_15px_rgba(10,255,10,0.15)] transition-all duration-300 rounded-sm cursor-pointer">
                <div className="flex gap-4">
                    <div className="flex flex-1 flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center border border-primary/50 bg-primary/5 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary rounded-sm shadow-neon">Таиланд</span>
                                <span className="text-[10px] font-mono font-medium text-text-dim uppercase tracking-wide">2 ч. назад</span>
                            </div>
                            <h3 className="text-[15px] font-bold leading-snug text-white line-clamp-3 mb-2 tracking-tight group-hover:text-accent-green group-hover:drop-shadow-[0_0_3px_rgba(10,255,10,0.5)] transition-colors duration-300">
                                Инвестиционный прогноз Таиланда 2024: Почему Пхукет растет
                            </h3>
                        </div>
                    </div>
                    <div className="w-20 h-20 shrink-0 overflow-hidden border border-border-dim order-last rounded-sm group-hover:border-accent-green/50 transition-colors duration-300">
                        <div className="h-full w-full bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj7CI3GXhA0jygcTeEeCNAzBrLnbOXYQWyclx5Drp68wKhfpYD0SRne9FC1vJUyqG8v036Jae0Cqcns2xjAtkO_5zVQ8XVuR8MKUf-F-x1BVK8hBXgeOq49kNz64kH1wQvuPSf_HPfjoWm61lFdBPfq0uOxiyi962kQl_fYbgcH2URLTwQLS4ngnnVyQXYTYWuWgxrLoJJLuB1l4toctHLs3U_4nBlKCdRuFAk-aC0aDIeNBm9dWpc9kdmj-nDq6MyyyOMvWEdkPBM")'}}></div>
                    </div>
                </div>
                <div className="w-full h-px bg-border-dim my-3 group-hover:bg-accent-green/30 transition-colors"></div>
                <p className="text-xs leading-relaxed text-text-dim line-clamp-2 mb-4 font-normal group-hover:text-gray-400">
                    Глубокий анализ текущего экономического климата и причин интереса инвесторов к островной недвижимости...
                </p>
                <button className="flex w-full items-center justify-between px-4 py-3 bg-black/40 border border-border-dim text-[10px] font-bold text-text-main uppercase tracking-widest transition-all hover:bg-accent-green/10 hover:text-accent-green hover:border-accent-green hover:shadow-[0_0_10px_rgba(10,255,10,0.3)] active:scale-[0.99] rounded-sm">
                    <span>Читать в Telegram</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </article>

            {/* Article 2 */}
            <article className="group relative flex flex-col bg-surface p-5 border border-border-dim shadow-lg hover:border-accent-purple hover:shadow-[0_0_15px_rgba(188,19,254,0.15)] transition-all duration-300 rounded-sm cursor-pointer">
                <div className="flex gap-4">
                    <div className="flex flex-1 flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center border border-primary/50 bg-primary/5 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary rounded-sm shadow-neon">Бали</span>
                                <span className="text-[10px] font-mono font-medium text-text-dim uppercase tracking-wide">5 ч. назад</span>
                            </div>
                            <h3 className="text-[15px] font-bold leading-snug text-white line-clamp-3 mb-2 tracking-tight group-hover:text-accent-purple group-hover:drop-shadow-[0_0_3px_rgba(188,19,254,0.5)] transition-colors duration-300">
                                Новые визовые правила на Бали: Все, что нужно знать
                            </h3>
                        </div>
                    </div>
                    <div className="w-20 h-20 shrink-0 overflow-hidden border border-border-dim order-last rounded-sm group-hover:border-accent-purple/50 transition-colors duration-300">
                        <div className="h-full w-full bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDgprBAcPZoPjjF_0fy30PGBYnoqtOddTiyQp7G6hC4Ge9-0AgwdAPTSLs6KxNYJsMbrkHGRwtXXVUvCPDvuL8iBx19PsdpPD9okDQ3-d0NQ_sCOb-loZqY_GG7kRHFe8VDuRNZLDE7VSKLA3H20XcD9PB-qDQ6tfr6mv1ebnLe8NJigM1gceCXuF-PYFEQnV0IfsaQtAgt8NGXRwoFqPsr_fpnYLibayFk9UZLjoCYmj-9pS4SgN7Ub0RJaWcwCNPMpRXd9kmWyY63")'}}></div>
                    </div>
                </div>
                <div className="w-full h-px bg-border-dim my-3 group-hover:bg-accent-purple/30 transition-colors"></div>
                <p className="text-xs leading-relaxed text-text-dim line-clamp-2 mb-4 font-normal group-hover:text-gray-400">
                    Правительство объявило о новых правилах золотой визы, которые могут повлиять на долгосрочное пребывание...
                </p>
                <button className="flex w-full items-center justify-between px-4 py-3 bg-black/40 border border-border-dim text-[10px] font-bold text-text-main uppercase tracking-widest transition-all hover:bg-accent-purple/10 hover:text-accent-purple hover:border-accent-purple hover:shadow-[0_0_10px_rgba(188,19,254,0.3)] active:scale-[0.99] rounded-sm">
                    <span>Читать в Telegram</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </article>

            {/* Article 3 */}
            <article className="group relative flex flex-col bg-surface p-5 border border-border-dim shadow-lg hover:border-primary hover:shadow-[0_0_15px_rgba(0,243,255,0.15)] transition-all duration-300 rounded-sm cursor-pointer">
                <div className="flex gap-4">
                    <div className="flex flex-1 flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-flex items-center border border-primary/50 bg-primary/5 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary rounded-sm shadow-neon">Россия</span>
                                <span className="text-[10px] font-mono font-medium text-text-dim uppercase tracking-wide">1 д. назад</span>
                            </div>
                            <h3 className="text-[15px] font-bold leading-snug text-white line-clamp-3 mb-2 tracking-tight group-hover:text-primary group-hover:drop-shadow-[0_0_3px_rgba(0,243,255,0.5)] transition-colors duration-300">
                                Элитная недвижимость Москвы: Отчет за 3 квартал
                            </h3>
                        </div>
                    </div>
                    <div className="w-20 h-20 shrink-0 overflow-hidden border border-border-dim order-last rounded-sm group-hover:border-primary/50 transition-colors duration-300">
                        <div className="h-full w-full bg-cover bg-center grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDaKYr7uUn2DcuLmXWsuj394Wlh4lvPG8KGuR9pOe0AwKyYfac3ltqVnSZe7Ml4hxbxoOf1Ebr9PHf6Fp0Sl51uQVhoDF2xgTl12k-1c173pxMIarISxNPjAw2I23CEC329iCbDt6pEDUBYQ3zHjKdhATjOCpXMmEgkhMHZhlq093JBHZQ-SaqE8Udpby_EVh9-npt6ErB9xZ5ySzHPja9_b7OMC_yCbmqT5uDA2UrXP8uRrdY_kvjKAaXIf_loC2aEqNV2RZVKc3uW")'}}></div>
                    </div>
                </div>
                <div className="w-full h-px bg-border-dim my-3 group-hover:bg-primary/30 transition-colors"></div>
                <p className="text-xs leading-relaxed text-text-dim line-clamp-2 mb-4 font-normal group-hover:text-gray-400">
                    Цены стабилизируются, спрос на премиальные апартаменты в центре города незначительно растет...
                </p>
                <button className="flex w-full items-center justify-between px-4 py-3 bg-black/40 border border-border-dim text-[10px] font-bold text-text-main uppercase tracking-widest transition-all hover:bg-primary/10 hover:text-primary hover:border-primary hover:shadow-[0_0_10px_rgba(0,243,255,0.3)] active:scale-[0.99] rounded-sm">
                    <span>Читать в Telegram</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </article>

        </main>
        <BottomNav />
    </div>
  );
};

export default NewsFeed;