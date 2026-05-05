import PageHeader from "../components/PageHeader";

export default function NotFound() {
  return (
    <>
      {/* Injeksi custom keyframes agar bisa langsung copy-paste 
        tanpa perlu repot mengatur tailwind.config.js 
      */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-float { 
          animation: float 6s ease-in-out infinite; 
        }
        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite; 
        }
        .animate-blob { 
          animation: blob 7s infinite; 
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>

      <div className="min-h-screen flex flex-col bg-black text-white font-sans relative overflow-hidden">
        
        {/* Header (Gelap) */}
        <PageHeader />

        {/* Efek Cahaya Latar Belakang yang Bergerak */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-cyan-600/30 blur-[128px] animate-blob mix-blend-screen"></div>
          <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-purple-600/30 blur-[128px] animate-blob animation-delay-2000 mix-blend-screen"></div>
          <div className="absolute -bottom-8 left-1/2 h-96 w-96 rounded-full bg-pink-600/30 blur-[128px] animate-blob animation-delay-4000 mix-blend-screen"></div>
        </div>

        {/* Konten Utama 404 */}
        <main className="grow flex flex-col items-center justify-center px-6 text-center z-10 relative">
          
          {/* Kontainer 404 dengan Efek Melayang (Float) */}
          <div className="relative animate-float">
            
            {/* Angka 404 dengan Gradien Bergerak */}
            <h1 className="text-9xl md:text-[14rem] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-indigo-500 to-pink-500 tracking-tighter drop-shadow-[0_0_35px_rgba(34,211,238,0.7)] select-none animate-gradient-x">
              404
            </h1>
            
            {/* Lencana yang Ikut Melayang dengan Rotasi Berbeda */}
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 rotate-[-8deg] bg-black/80 backdrop-blur-sm border border-cyan-500/50 px-4 py-1.5 text-sm md:text-base rounded-lg text-cyan-200 shadow-[0_0_15px_rgba(34,211,238,0.4)] whitespace-nowrap">
              Halaman Tidak Ditemukan
            </div>
          </div>

          {/* Pesan Kesalahan */}
          <h2 className="mt-12 text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Oops! Anda Tersesat
          </h2>

          <p className="mt-6 text-slate-300 max-w-2xl mx-auto text-lg md:text-xl">
            Maaf, halaman yang Anda cari mungkin telah dihapus, namanya diubah, atau sementara tidak tersedia.
          </p>

          {/* Tombol Kembali dengan Efek Cahaya Interaktif */}
          <div className="mt-14 relative group">
            {/* Cahaya di belakang tombol yang membesar saat di-hover */}
            <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 via-indigo-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            <a
              href="/"
              className="relative inline-flex items-center justify-center px-10 py-4 text-lg font-semibold text-white transition-all duration-300 bg-black border border-indigo-500/50 rounded-full hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-black hover:-translate-y-1"
            >
              <svg 
                className="w-6 h-6 mr-3 -ml-1 text-cyan-400 group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              Kembali ke Beranda
            </a>
          </div>

        </main>
      </div>
    </>
  );
}