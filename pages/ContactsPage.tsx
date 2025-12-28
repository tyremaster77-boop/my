import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const ContactsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-bg-main min-h-screen flex flex-col font-display text-white bg-grid-pattern">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-white/10 bg-bg-main/90 backdrop-blur-md sticky top-0 z-50">
         <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
            <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
         </button>
         <h1 className="text-xl font-bold uppercase tracking-widest text-accent-yellow drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Контакты</h1>
         <div className="size-10"></div>
      </div>

      <div className="flex-1 p-6 flex flex-col gap-8 pb-24">
        {/* Intro */}
        <div>
            <h2 className="text-4xl font-bold uppercase leading-none mb-2">Свяжитесь <br/>с нами</h2>
            <div className="h-1 w-20 bg-accent-yellow shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
            <p className="mt-4 text-text-dim font-mono text-sm border-l border-accent-yellow/30 pl-4">
                Готовы ответить на вопросы 24/7. <br/>ESTABLISH_CONNECTION_SECURE
            </p>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4">
            <div className="bg-surface border border-white/10 p-5 flex items-center gap-4 hover:border-accent-yellow transition-colors group">
                <div className="size-12 bg-accent-yellow/10 border border-accent-yellow flex items-center justify-center text-accent-yellow shadow-[0_0_10px_rgba(250,204,21,0.2)] group-hover:bg-accent-yellow group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                    <p className="text-[10px] text-text-dim font-mono uppercase tracking-widest">Телефон</p>
                    <p className="text-lg font-bold tracking-wide">+7 (999) 123-45-67</p>
                </div>
            </div>

            <div className="bg-surface border border-white/10 p-5 flex items-center gap-4 hover:border-accent-yellow transition-colors group">
                <div className="size-12 bg-accent-yellow/10 border border-accent-yellow flex items-center justify-center text-accent-yellow shadow-[0_0_10px_rgba(250,204,21,0.2)] group-hover:bg-accent-yellow group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                    <p className="text-[10px] text-text-dim font-mono uppercase tracking-widest">Email</p>
                    <p className="text-lg font-bold tracking-wide">info@logica.estate</p>
                </div>
            </div>

            <div className="bg-surface border border-white/10 p-5 flex items-center gap-4 hover:border-accent-yellow transition-colors group">
                <div className="size-12 bg-accent-yellow/10 border border-accent-yellow flex items-center justify-center text-accent-yellow shadow-[0_0_10px_rgba(250,204,21,0.2)] group-hover:bg-accent-yellow group-hover:text-black transition-all">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                    <p className="text-[10px] text-text-dim font-mono uppercase tracking-widest">Офис</p>
                    <p className="text-lg font-bold tracking-wide">Москва, Сити, Башня Федерация</p>
                </div>
            </div>
        </div>
        
        {/* Map Placeholder */}
        <div className="w-full h-48 bg-surface border border-white/10 relative overflow-hidden group cursor-pointer hover:border-accent-yellow transition-colors">
             <div className="absolute inset-0 bg-cover bg-center grayscale opacity-50 group-hover:grayscale-0 transition-all" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9D-wGwp_SPMiWrEWIGxEb7qLxjek26gclTpNTIFYf3oAwzDxQ_BqXEyS258aWlnkRy5T0Irsj8dTZrvp_GBbmuoc4G2oOrZZY280XKprPYgZGgQwGom5ADwxtrF6vxOmB8PwrZ0-Bw_blSNCzi7W9isj9rz_scBIWpudzTgETuC1VcPQIHh7wW4NtXJfo3SQAJbqMT5bpXRh1UpFvu2IVcKudsOBY69s3jCImDbMBlEazcHnH0m3R1L1nnuizZz2_soIktWWUcub9")'}}></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-black/80 text-accent-yellow border border-accent-yellow px-4 py-2 font-bold uppercase tracking-widest text-xs hover:bg-accent-yellow hover:text-black transition-colors shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                    Открыть карту
                </button>
             </div>
        </div>

      </div>
      <BottomNav />
    </div>
  );
};

export default ContactsPage;