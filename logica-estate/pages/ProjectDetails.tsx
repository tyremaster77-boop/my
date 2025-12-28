import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center w-full bg-bg-main font-display antialiased text-white">
        {/* Main Container: No fixed height, let the body scroll. Max-width for mobile look. */}
        <div className="relative w-full max-w-[480px] flex flex-col bg-bg-main shadow-2xl min-h-screen border-x border-gray-800 pb-24">
            
            {/* Header - Fixed Overlay */}
            {/* 'fixed' takes it out of flow, so it sits ON TOP of the Hero Image. 
                'left-0 right-0 mx-auto max-w-[480px]' keeps it centered within our mobile layout. */}
            <div className="fixed top-0 left-0 right-0 mx-auto w-full max-w-[480px] z-50 p-4 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent pt-6 transition-all pointer-events-none">
                {/* Pointer events auto on buttons to ensure they are clickable even with gradient overlay */}
                <button onClick={() => navigate(-1)} className="pointer-events-auto flex size-10 items-center justify-center border border-white/10 bg-black/20 backdrop-blur-md hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-full active:scale-95">
                    <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
                </button>
                <div className="flex gap-3 pointer-events-auto">
                    <button className="flex size-10 items-center justify-center border border-accent-red/50 bg-black/20 backdrop-blur-md text-accent-red shadow-[0_0_10px_rgba(239,68,68,0.2)] hover:bg-accent-red/10 transition-all duration-300 rounded-full active:scale-95">
                        <span className="material-symbols-outlined text-[20px]">favorite</span>
                    </button>
                    <button className="flex size-10 items-center justify-center border border-primary/30 bg-black/20 backdrop-blur-md text-primary shadow-neon hover:border-primary transition-all duration-300 rounded-full active:scale-95">
                        <span className="material-symbols-outlined text-[20px]">ios_share</span>
                    </button>
                </div>
            </div>

            {/* Hero Image - Full height start */}
            <div className="relative w-full h-[60vh] bg-surface group shrink-0">
                <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP0Y55VhL7RwE75bra7xMkM8zhgyyRa4-YqjUBR699jnl1qeI0lHekZ4DJzMGTmEaMFJqhgcFXdJJO8cXFLySYp4qBtJAdn466fPUUZ14ZOuUgEJ8vl_llNpyrjTD2zQSuEuhltPCutcVWrUlEpzg7i8s0d0v4X49xjzM5q3v99DO_PeQFWBs2ZQk4_ovxi2i87vMBpEr3kcR6oEhW4mIOxdm9wO1ztXRnQXF5IQhxpefjwi1zD1G8St7mH_5jPxA5BasFpWaBO0Tz")'}}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/20 to-transparent"></div>
                
                {/* Dots indicator */}
                <div className="absolute bottom-10 left-6 flex gap-1 z-20">
                    <div className="h-1 w-8 bg-primary shadow-neon"></div>
                    <div className="h-1 w-4 bg-white/40 backdrop-blur-sm"></div>
                    <div className="h-1 w-4 bg-white/40 backdrop-blur-sm"></div>
                </div>
            </div>

            {/* Content Body - Pull up over the image slightly */}
            <div className="relative -mt-10 rounded-t-[30px] border-t border-white/10 bg-bg-main px-0 flex flex-col gap-8 z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.8)]">
                {/* Decorator line */}
                <div className="absolute left-1/2 -translate-x-1/2 top-3 w-12 h-1 bg-white/20 rounded-full"></div>
                
                {/* Header Info */}
                <div className="flex flex-col gap-4 px-6 pt-8">
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="inline-block px-3 py-1 text-[10px] font-bold text-black bg-primary uppercase tracking-widest shadow-neon rounded-sm">Хай-тек Вилла</span>
                                <span className="inline-block px-3 py-1 text-[10px] font-bold text-primary border border-primary/50 uppercase tracking-widest shadow-[0_0_8px_rgba(0,240,255,0.2)] rounded-sm">Проект №892</span>
                            </div>
                            <h1 className="text-4xl font-bold uppercase tracking-wide text-white leading-[0.9] drop-shadow-neon">Azure Sky <br/><span className="text-text-dim font-light shadow-none text-3xl">Villas</span></h1>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-1 text-primary drop-shadow-neon bg-surface-highlight px-2 py-1 rounded-md border border-white/5">
                                <span className="material-symbols-outlined text-[18px] filled">star</span>
                                <span className="text-lg font-bold">4.9</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-text-dim border-l-2 border-primary/50 pl-4 py-1">
                        <span className="material-symbols-outlined text-[20px] text-primary drop-shadow-neon">location_on</span>
                        <p className="text-sm font-medium uppercase tracking-wide">Пхукет, Банг Тао, Таиланд</p>
                    </div>
                </div>

                {/* Rooms Scroll */}
                <div className="pl-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-4 opacity-80">Галерея</h3>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 pr-6">
                         {[
                             { title: "Гостиная", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVEJTdhgZWZmNmKEGKhdIpOVEFNmFHrBqdBTP4_O6hB97twK5XDq3hjpXehAuWFfgZfz1sOdZu9hCcZN7hipg1PqS6DDwbxM1vHmgVzT-rPqsqjN4XWr0E5iVCh6sviVkGKonCxnc-MSw6vEJpIKsQcnrSzsQTEMS1M1MTPya3yZurJnPEKxbbmim2R26nLzHCUCaWcyE7rffbwG-RgXOT0qh7zKVbY90BeleD1yAPPaAObVd4KpC7O96TTUe9He-JHtxXjhhjuRIY" },
                             { title: "Спальня", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiKYYhMyLRUgry1gyCGpr6nDCxN1NYTioyne1wJhyPC-nGwxBOuPAh_2-YZLni9FyInEZLp5FxCBkZZxKpr3KHVblW687av_ehowDc4rPZ5xNt1cFdClYSYI-ZmPs6LRliLviTXmt44qRyTFSfFvj9buMZ4IjcrNMFlTdPADa1LP_yM1j4L64K8l-jWgqRBwfwuA26JOXVjyR6MIHI_UypcHC_WVuoSj-0ovcn707IqSaDMRYX9FElIF_kZo7vxuO13qJLXslA4q8K" },
                             { title: "Кухня", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-zbZ59YPxhVQs6CSv-JsggQpIs8nVyqSxGO-gtj4rMLFoU8pUIGHoY0hyWDkWblWleFDiynlN8Pbx6_QJuJbeWncvCYNXDUftL22BWkibrl3j6q_HQ7cYj-ifiLf9Iyag2h3sRdqCGNHQ4gk_w2jbZpi0-anSizlwgvTPWGSuOAYoZtSBhP4XaP3Sqo9PaIQyEdjfZS4o3LQt6NZidN-SY4m0VxD_ExqfoVZtBBhb3VP2mmxb-iRAtwrHJP4mufr8pD7hhfRsEMn4" },
                             { title: "Бассейн", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvckOSt1v_Ky_KsbSA9rdF5gxNVolD9HKbKrqBsM2Mk6eYWHD6DLuVLheMymfGdK2kzK7QEB_YRiq5p5XrnRYr-xGFCVhqA7Oe-9FoGvyYcKjLCI4RJfbYhFKNCs251kQejdL2WTwlC88VFRXHirXhvu0jBZbQMv3gzzoZCRigG1MQONJlV3Ivte4UkrVCQRaYFxRaNPE7_yjKmaIiNrQWorHkoocAGq8HQYwfkuHIjYxas3i1DpTrs7WO4VBbkG91t9D_PeW-Bfm8" },
                         ].map((room, idx) => (
                             <div key={idx} className="group flex flex-col gap-3 min-w-[120px] cursor-pointer">
                                <div className={`relative h-[120px] rounded-2xl overflow-hidden border transition-all ${idx === 0 ? 'border-primary shadow-neon' : 'border-white/10 hover:border-primary'}`}>
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{backgroundImage: `url("${room.img}")`}}></div>
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <span className={`text-[11px] font-bold uppercase tracking-wider text-center ${idx === 0 ? 'text-primary drop-shadow-neon' : 'text-text-dim group-hover:text-primary transition-colors'}`}>{room.title}</span>
                             </div>
                         ))}
                    </div>
                </div>

                {/* Specs */}
                <div className="px-6">
                    <div className="flex items-center justify-between mb-5 border-b border-white/10 pb-2">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-white">Характеристики</h2>
                        <span className="text-[10px] font-mono text-primary">TECH_SPECS_V2</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                         {[
                             { icon: 'payments', label: 'Стоимость', val: 'от $350k' },
                             { icon: 'square_foot', label: 'Площадь', val: '120 м²' },
                             { icon: 'layers', label: 'Этаж', val: '2 / 5' },
                             { icon: 'panorama', label: 'Вид', val: 'На море' },
                         ].map((spec, i) => (
                            <div key={i} className="relative flex flex-col justify-center p-4 bg-surface rounded-xl border border-white/5 hover:border-primary/40 hover:bg-surface-highlight transition-all group">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="material-symbols-outlined text-[22px] text-primary group-hover:scale-110 transition-transform">{spec.icon}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-text-dim">{spec.label}</span>
                                </div>
                                <p className="text-lg font-bold text-white tracking-tight pl-1">{spec.val}</p>
                            </div>
                         ))}
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col gap-3 px-6">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">Описание проекта</h2>
                    <div className="relative p-5 rounded-xl bg-surface border border-white/5">
                        <p className="text-sm leading-7 text-gray-300 font-light text-justify">
                            <span className="text-primary font-bold">Azure Sky Villas</span> — уникальный жилой комплекс сочетает в себе инновационный дизайн и гармонию с природой. Панорамное остекление, системы "умный дом" и премиальные отделочные материалы создают атмосферу будущего. 
                        </p>
                        <button className="mt-4 w-full py-3 border border-white/10 text-xs font-bold text-primary uppercase tracking-widest hover:bg-primary hover:text-black transition-all rounded-lg flex items-center justify-center gap-2 group">
                             Читать полное описание <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_downward</span>
                        </button>
                    </div>
                </div>

                {/* Map */}
                <div className="flex flex-col gap-3 px-6 pb-4">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-white border-b border-white/10 pb-2">Расположение</h2>
                    <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-surface border border-white/10 group shadow-lg">
                        <div className="absolute inset-0 bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9D-wGwp_SPMiWrEWIGxEb7qLxjek26gclTpNTIFYf3oAwzDxQ_BqXEyS258aWlnkRy5T0Irsj8dTZrvp_GBbmuoc4G2oOrZZY280XKprPYgZGgQwGom5ADwxtrF6vxOmB8PwrZ0-Bw_blSNCzi7W9isj9rz_scBIWpudzTgETuC1VcPQIHh7wW4NtXJfo3SQAJbqMT5bpXRh1UpFvu2IVcKudsOBY69s3jCImDbMBlEazcHnH0m3R1L1nnuizZz2_soIktWWUcub9")'}}></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-primary text-primary px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-all shadow-neon hover:scale-105">
                                <span className="material-symbols-outlined text-[18px]">map</span>
                                Открыть карту
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Actions - Fixed relative to viewport but centered */}
            <div className="fixed bottom-0 left-0 right-0 z-40 mx-auto max-w-[480px] w-full px-4 py-4 pb-8 bg-gradient-to-t from-bg-main via-bg-main/95 to-transparent pointer-events-none">
                <div className="flex gap-3 pointer-events-auto">
                    <button className="flex h-14 w-16 shrink-0 items-center justify-center rounded-xl border border-primary/50 bg-bg-main/80 backdrop-blur-md text-primary shadow-neon hover:bg-primary/10 transition-all active:scale-95">
                        <span className="material-symbols-outlined">chat_bubble</span>
                    </button>
                    <button className="group relative flex h-14 flex-1 items-center justify-center overflow-hidden rounded-xl bg-primary text-sm font-bold text-black uppercase tracking-wider shadow-neon hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all active:scale-[0.98]">
                        <span className="relative z-10 flex items-center gap-2">
                            Запросить цену
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </span>
                        <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ProjectDetails;