import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const RegionRussia: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[size:40px_40px] bg-grid-pattern bg-bg-main">
      <div className="sticky top-0 z-50 flex items-center bg-bg-main/90 backdrop-blur-xl p-4 pb-3 justify-between border-b border-border-dim shadow-md">
        <button onClick={() => navigate(-1)} className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
          <span className="material-symbols-outlined text-xl group-hover:-translate-x-1 transition-transform duration-300">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <span className="text-[10px] text-primary font-mono tracking-widest leading-none mb-1 drop-shadow-neon">LOCATION</span>
          <h2 className="text-white text-lg font-display font-bold tracking-[0.1em] uppercase leading-none">Россия</h2>
        </div>
        <button className="flex size-10 items-center justify-center border border-white/10 bg-surface hover:border-primary hover:text-primary hover:shadow-neon transition-all duration-300 group rounded-sm active:scale-95">
          <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform duration-300">ios_share</span>
        </button>
      </div>

      <div className="w-full p-0">
        <div className="relative w-full h-[520px] flex flex-col justify-end border-b border-primary/20 group">
          <div className="absolute inset-0 bg-cover bg-center z-0 filter grayscale-[20%] contrast-125 group-hover:grayscale-0 transition-all duration-700" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCEo1bf4NkTzMkMwG2PjROOi415jZKHhKEsa9sx1EKDd5z6l8cLmGkhtsLaOwfmcDPsGTwj3X45M13QqtS85S5n5wwrpTG76e6I2W3VtbujRIdH1eDU-HIJhnatOEUWxMBNXX5fsSL_DkOOr_cJP48lGIiTyXv3xDjn3HYhx9_ndPKdpHOx_ecnuZ_2b--VzmZxTkfzaNDzW0suJ58piLpz1ieiNjo7OyoEcGC_144ji1mKG1LmCVYVggrw69mgtASdzTK6mN4t6Y3")' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/60 to-transparent z-10"></div>
          
          <div className="relative z-20 px-5 pb-10 flex flex-col gap-5 items-start">
            <div className="inline-flex items-center gap-2 border border-primary bg-black/80 backdrop-blur-md px-3 py-1.5 shadow-neon">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary shadow-neon"></span>
              </div>
              <span className="text-primary text-xs font-display font-bold tracking-widest uppercase drop-shadow-neon">Топ Направление</span>
            </div>
            <div>
              <h1 className="text-white text-6xl font-display font-bold tracking-tighter uppercase drop-shadow-lg">
                Россия<span className="text-primary drop-shadow-neon">.</span>
              </h1>
              <div className="flex items-center gap-1 mt-3">
                <div className="h-1.5 w-10 bg-primary shadow-neon"></div>
                <div className="h-1.5 w-2 bg-gray-600"></div>
                <div className="h-1.5 w-2 bg-gray-800"></div>
                <div className="h-1.5 w-32 bg-gradient-to-r from-primary/50 to-transparent"></div>
              </div>
            </div>
            <p className="text-gray-200 text-sm font-light leading-relaxed max-w-[90%] border-l-2 border-primary/50 pl-4 bg-black/40 backdrop-blur-md py-3 pr-2">
              Оптимальные зоны для инвестиций. <br/>
              <span className="text-primary font-bold drop-shadow-neon">&gt;&gt;</span> Черноморские курорты<br/>
              <span className="text-primary font-bold drop-shadow-neon">&gt;&gt;</span> Столичные небоскребы
            </p>
            <Link to="/city/anapa" className="group relative mt-2 flex items-center justify-center bg-primary text-black h-12 px-8 font-display font-bold tracking-wider hover:bg-white hover:text-primary transition-all clip-corner shadow-neon hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] border border-primary z-30">
              <span className="uppercase">Подробнее</span>
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1 font-bold">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-10 border-b border-border-dim flex items-center justify-between px-4 bg-bg-main relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5"></div>
        <div className="relative flex gap-0.5 z-10">
          <div className="w-1 h-3 bg-primary shadow-neon"></div>
          <div className="w-1 h-2 bg-gray-700"></div>
          <div className="w-1 h-4 bg-gray-600"></div>
          <div className="w-1 h-2 bg-gray-800"></div>
        </div>
        <div className="relative text-[10px] text-primary font-mono tracking-widest z-10 drop-shadow-neon">SEC_01 // REGIONAL_DATA</div>
      </div>

      <div className="flex flex-col pt-8 pb-4 px-4">
        <div className="flex items-end justify-between">
          <h3 className="text-white text-xl font-display font-bold uppercase tracking-wide flex items-center gap-2">
            <span className="text-primary text-lg drop-shadow-neon">///</span>
            <span>Популярные регионы</span>
          </h3>
          <button className="text-primary text-xs font-mono uppercase border-b border-primary/30 pb-0.5 hover:border-primary hover:drop-shadow-neon transition-all">показать все</button>
        </div>
      </div>

      <div className="flex flex-col gap-6 px-4 pb-24">
        {/* Sochi Card */}
        <Link to="/city/anapa" className="group relative bg-surface border border-border-dim p-0 hover:border-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 clip-corner">
          <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden z-0 clip-corner">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlqf3Ff5709PzCkpoObpR8bpWSxZUuBogDrti0UMyGpQ0Tl-qFoBMOLzNz_XxfhKMQOyV1FGj5zh6wnDQrw0Fnm3WnSFf74FKjk85rFbs91F0UsrhJYt7UzcWEJrWa7058GlL4nsffeI8xS1KK7KtBEwFyfWXdsVltPfLqIVVEIc0genKRL6Fm87va4fnSrKbREwY8398v95K2D1hk2HBJEc34uOsm0ggBR8c37Oa-eIjPHBTyruX3gd_ZmfmtGKk5eGABbMeuy9cn")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 pr-[40%]">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[10px] text-primary font-mono bg-primary/10 px-1.5 py-0.5 border border-primary/50 shadow-neon">SCH-01</div>
            </div>
            <h4 className="text-white text-3xl font-display font-bold uppercase mb-2 drop-shadow-md group-hover:text-primary transition-all duration-300">Сочи</h4>
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-lg">apartment</span>
              <span className="text-gray-400 text-sm font-mono tracking-tight group-hover:text-gray-200">125 ОБЪЕКТОВ</span>
            </div>
            <div className="inline-flex items-center text-primary text-xs font-bold font-mono transition-all cursor-pointer bg-transparent px-3 py-1.5 border border-primary/30 group-hover:bg-primary group-hover:text-black group-hover:border-primary group-hover:shadow-neon">
              <span className="uppercase tracking-wider">ДАННЫЕ</span>
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </div>
          </div>
        </Link>

        {/* Anapa Card */}
        <Link to="/city/anapa" className="group relative bg-surface border border-border-dim p-0 hover:border-primary hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 clip-corner">
          <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden z-0 clip-corner">
            <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqalaM3n2FYThygYeayzyy6zpbZba9MGRH75yb_yzfMEwxNuiyEh-s1fGpaC-FuVprKmhwj8q4pTWkFJ5r6YD1VGMeHeQFzQS3Ee4GMlQmwFf8jVYOfMl16DhntcER8roQK_Vxd_tZpMEyj0hYyRMwWbbxZYk7GwjdL_usK9Qf6F_aG9GqfMu-yXgPq_0s_votf7lvoPXOaR7NXkl96m3jpRm8WWCXkoBnhX5TD63UflD3mPMie08E_gJ7iocwhw8hr9aOSsccd0fr")' }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent"></div>
          </div>
          <div className="relative z-10 p-6 pr-[40%]">
            <div className="flex items-center gap-2 mb-3">
              <div className="text-[10px] text-primary font-mono bg-primary/10 px-1.5 py-0.5 border border-primary/50 shadow-neon">ANA-23</div>
            </div>
            <h4 className="text-white text-3xl font-display font-bold uppercase mb-2 drop-shadow-md group-hover:text-primary transition-all duration-300">Анапа</h4>
            <div className="flex items-center gap-2 mb-5">
              <span className="material-symbols-outlined text-gray-500 group-hover:text-primary transition-colors text-lg">beach_access</span>
              <span className="text-gray-400 text-sm font-mono tracking-tight group-hover:text-gray-200">84 ОБЪЕКТА</span>
            </div>
            <div className="inline-flex items-center text-primary text-xs font-bold font-mono transition-all cursor-pointer bg-transparent px-3 py-1.5 border border-primary/30 group-hover:bg-primary group-hover:text-black group-hover:border-primary group-hover:shadow-neon">
              <span className="uppercase tracking-wider">ДАННЫЕ</span>
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </div>
          </div>
        </Link>
      </div>
      <BottomNav />
    </div>
  );
};

export default RegionRussia;