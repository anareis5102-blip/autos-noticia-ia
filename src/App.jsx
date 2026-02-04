import React from 'react';
import { 
  FileText, 
  BrainCircuit, 
  FileCheck, 
  Video, 
  ExternalLink, 
  GraduationCap 
} from 'lucide-react';
/**
 * Reusable Section Component for consistent styling
 */
const Section = ({ title, id, children, bg = "bg-white", icon }) => (
  <section id={id} className={`py-16 md:py-24 ${bg} border-b border-slate-200`}>
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="flex items-center gap-3 mb-8">
        {icon && <div className="text-slate-700">{icon}</div>}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
          {title}
        </h2>
      </div>
      <div className="text-slate-600 leading-relaxed text-lg">
        {children}
      </div>
    </div>
  </section>
);
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Cabeçalho */}
   <header className="bg-blue-900 text-white py-12 px-6 shadow-md">
  <div className="container mx-auto max-w-5xl text-center md:text-left">
    <div className="flex flex-col md:flex-row items-center gap-6">

      {/* Logótipo da Instituição */}
      <div className="bg-white p-3 rounded-lg shadow-sm">
        <img
          src="https://drive.google.com/thumbnail?id=1qbX5UL8_LH9OSqY-0qGxBC9C5oGAwi5s&sz=w600"
          alt="CCDR Algarve"
          className="h-16 w-auto"
        />
      </div>

      <div>
                <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
          Sistema de Análise de Autos de Notícia com Inteligência Artificial<br className="hidden md:block" />
      </h1>
      </div>

    </div>
  </div>
</header> 
      <main className="flex-grow">
        {/* 2. Sobre o Projeto */}
        <Section title="Sobre o Projeto" id="sobre" icon={<FileText size={28} />}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <p>
                Este projeto nasce da necessidade de modernizar e conferir maior rigor jurídico ao processamento de autos de notícia. A redação manual de documentos legais está frequentemente sujeita a pequenos lapsos que podem comprometer a validade do processo.
              </p>
              <p>
                O sistema utiliza algoritmos avançados de Processamento de Linguagem Natural (PLN) para auditar, em tempo real, a conformidade legal e formal de cada documento submetido, garantindo que todos os campos obrigatórios e requisitos normativos sejam cumpridos.
              </p>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3">Objetivos Principais:</h4>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Redução de nulidades processuais.</li>
                <li>Uniformização de critérios de redação.</li>
                <li>Apoio à decisão de agentes de autoridade.</li>
                <li>Otimização do fluxo administrativo judicial.</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* 3. Preencher Auto de Notícia */}
        <Section title="Preencher Autos de Notícia" id="formulario" bg="bg-blue-50" icon={<FileCheck size={28} />}>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
            <p>
              Para submeter um novo auto para análise, utilize o nosso formulário oficial. Os dados inseridos serão processados pelo nosso motor de IA para uma pré-validação instantânea.
            </p>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfJoss_tB25k_Bo0Q0XiwAX33QVNmlbzdZOfiiX7hZwLeKELQ/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg shadow-md transition-all transform hover:-translate-y-1"
            >
              Aceder ao Formulário Online
              <ExternalLink size={18} />
            </a>
            <p className="text-sm text-slate-400 italic">
              * Nota: Este link aponta para um protótipo em ambiente controlado.
            </p>
          </div>
        </Section>

        {/* 4. Análise por IA */}
        <Section title="Análise por IA" id="ia" icon={<BrainCircuit size={28} />}>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12">
              <p className="mb-6">
                O papel do agente de Inteligência Artificial é atuar como uma camada de supervisão técnica incansável. Ao contrário da análise humana, que pode ser afetada pela fadiga ou volume de trabalho, a nossa IA analisa:
              </p>
              <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '32px'
  }}
>
              <div>
              <div style={{ marginBottom: '24px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#EFF6FF',
        color: '#2563EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}
    >
      1
    </div>
    <h5 style={{ fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
      Erros Formais
    </h5>
  </div>
  <p style={{ fontSize: '0.9rem', color: '#334155', marginTop: '8px' }}>
    Identificação de omissões de datas, locais ou identificações obrigatórias segundo o Código de Processo Penal.
  </p>
<div>
                <div style={{ marginBottom: '24px' }}>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#EFF6FF',
        color: '#2563EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}
    >
      2
    </div>
    <h5 style={{ fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
      Coerência Narrativa
    </h5>
  </div>
  <p style={{ fontSize: '0.9rem', color: '#334155', marginTop: '8px' }}>
    Deteção de contradições lógicas na descrição dos factos que possam levar a impugnações futuras.
  </p>
</div>
                <div>
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <div
      style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#EFF6FF',
        color: '#2563EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}
    >
      3
    </div>
    <h5 style={{ fontWeight: 'bold', color: '#1E293B', margin: 0 }}>
      Enquadramento
    </h5>
  </div>
  <p style={{ fontSize: '0.9rem', color: '#334155', marginTop: '8px' }}>
    Sugestão de artigos legais pertinentes com base na descrição qualitativa do evento reportado.
  </p>
</div>
</div>
              </div>
            </div>
          </div>
        </Section>

        {/* 5. Relatório de Análise */}
        <Section title="Relatório de Análise" id="relatorio" bg="bg-blue-50" icon={<FileText size={28} />}>
          <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-white border border-slate-200 rounded-xl">
            <div className="mb-6 md:mb-0">
              <h4 className="text-xl font-bold text-slate-800 mb-2">Relatório Técnico Detalhado</h4>
              <p className="text-slate-500">Documento PDF com os resultados estatísticos e metodológicos do projeto.</p>
            </div>
            <a 
              href="https://drive.google.com/uc?id=1G-9DjWkP6P6XGEBazMDeibR2lVoKVp51" 
              className="flex items-center gap-3 text-blue-600 font-bold border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <FileText size={20} />
              Descarregar PDF (Exemplo)
            </a>
          </div>
        </Section>

        {/* 6. Vídeo Explicativo */}
        <Section title="Vídeo Explicativo" id="video" icon={<Video size={28} />}>
  <a
    href="https://app.heygen.com/videos/5adc004b083f447a9794d1dd88405c5a"
    target="_blank"
    rel="noopener noreferrer"
    className="block aspect-video bg-slate-200 rounded-2xl flex items-center justify-center shadow-inner relative group cursor-pointer overflow-hidden border border-slate-300"
  >
    <img
      src="https://drive.google.com/thumbnail?id=13HxA2EKSUa8dLdkNMV4o7lHrz-GgkU6M&sz=w1200"
      alt="Vídeo explicativo do sistema"
      className="absolute inset-0 w-full h-full object-cover opacity-40 transition-opacity group-hover:opacity-30"
    />

    <div className="relative z-10 flex flex-col items-center">
      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-blue-600 border-b-[12px] border-b-transparent ml-1"></div>
      </div>
      <p className="mt-4 font-semibold text-slate-800 bg-white/80 backdrop-blur px-4 py-1 rounded-full">
        Abrir vídeo demonstrativo
      </p>
    </div>
  </a>
</Section>
      </main>

      {/* 7. Rodapé */}
      <footer className="bg-blue-900 text-slate-400 py-12">
  <div className="container mx-auto px-6 max-w-5xl text-center">
    <h3 className="text-white font-bold text-lg mb-2">
      Sistema de Análise de Autos de Notícia com Inteligência Artificial
    </h3>
    <p className="text-sm">
      Projeto desenvolvido com recurso a tecnologias de Inteligência Artificial.
    </p>
  </div>
</footer>
    </div>
  );
};

export default App;

