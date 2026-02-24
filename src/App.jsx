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

      <div style={{ textAlign: 'center' }}>
  <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">
    Sistema de Análise de Autos de Notícia com Inteligência Artificial
  </h1>

  <p
    style={{
      marginTop: '8px',
      fontSize: '0.95rem',
      color: '#E0E7FF',
      fontStyle: 'italic'
    }}
  >
    Conforme Artigo 46.º da Lei n.º 50/2006
  </p>
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
  <div style={{ background: '#fff', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
    <div style={{ padding: '32px' }}>
      <p style={{ marginBottom: '24px', color: '#475569' }}>
        O papel do agente de Inteligência Artificial é atuar como uma camada de supervisão técnica incansável.
        Ao contrário da análise humana, que pode ser afetada pela fadiga ou volume de trabalho, a nossa IA analisa:
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}
      >
        {/* Bloco 1 */}
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
              1
            </div>
            <h5 style={{ margin: 0, fontWeight: 'bold', color: '#1E293B' }}>
              Erros Formais
            </h5>
          </div>
          <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#334155' }}>
            Identificação de omissões de datas, locais ou identificações obrigatórias segundo o Código de Processo Penal.
          </p>
        </div>

        {/* Bloco 2 */}
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
              2
            </div>
            <h5 style={{ margin: 0, fontWeight: 'bold', color: '#1E293B' }}>
              Coerência Narrativa
            </h5>
          </div>
          <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#334155' }}>
            Deteção de contradições lógicas na descrição dos factos que possam levar a impugnações futuras.
          </p>
        </div>

        {/* Bloco 3 */}
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
            <h5 style={{ margin: 0, fontWeight: 'bold', color: '#1E293B' }}>
              Enquadramento
            </h5>
          </div>
          <p style={{ marginTop: '8px', fontSize: '0.9rem', color: '#334155' }}>
            Sugestão de artigos legais pertinentes com base na descrição qualitativa do evento reportado.
          </p>
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
           <section className="p-8 bg-blue-50 rounded-xl">
  <h4 className="text-xl font-bold text-slate-800 mb-4">
    Relatório de Análise
  </h4>

  {/* Área para colar análise do IA */}
  <div
    id="relatorio"
    contentEditable={true}
    className="p-6 mb-6 bg-white border border-slate-200 rounded-lg min-h-[200px] text-slate-700 whitespace-pre-wrap"
    placeholder="Cole aqui a análise do Agente IA..."
  >
    {/* Cole aqui o texto do IA */}
    RELATÓRIO DE ERROS E INCOERÊNCIAS — AUTOS DE NOTÍCIA
1. Erros Formais Detetados
AUTO 1

Campo “Documento de Identificação” contém apenas “Cartão de Cidadão n.º 14567890”, mas não há data de validade nem entidade emissora (caso o formulário exija).
Alguns campos de identificação do autuado parecem existir mas permanecem vazios (ex.: contactos, NIF), embora não seja possível confirmar se eram obrigatórios.
Na secção final existem vários campos totalmente vazios após a data 2026/01/14 — possível ausência de registos obrigatórios.

AUTO 2

“Pessoa Coletiva ou Equiparada” selecionada, mas campos de identificação da entidade começam vazios até à linha com “Terrasol – Construções Rurais, Lda.” — indica possível desalinhamento ou erro de formatação.
Campo de identificação dos representantes (“Pedro Luís Almeida — Almancil e Sofia Martins Costa — Loulé”) usa caracteres especiais (travessão) e estrutura pouco padronizada.
Campos após a última data (2026/01/30) aparecem vazios — possível incumprimento de campos obrigatórios.

AUTO 3

Endereço do autuado indicado apenas como “Monchique” — potencial insuficiência se o formulário exigir morada completa.
Dois nomes diferentes para a técnica: “Helena Ramos” e “Helena Sofia Ramos”.
Tal como nos anteriores, campos finais encontram-se em branco.

AUTO 4

“Inspetor Ambiental” surge duplicado: no campo da função e no campo do nome/título técnico — possível preenchimento automático incorreto ou campo trocado.
Representante da pessoa coletiva aparece apenas como “Ricardo Nunes Silva — Tavira”, com estrutura informal.
Campos finais vazios após 2026/02/18.

AUTO 5

Documento de identificação do autuado: “Cartão de Cidadão n.º 15678903” sem dados complementares.
Função da técnica aparece duas vezes (“Técnica de Fiscalização Municipal” duplicado).
Campos posteriores à data final estão vazios.


AUTOS CLARAMENTE INCOMPLETOS OU COM ERROS GRAVES
AUTO 6

Texto composto por cadeias de caracteres sem sentido (“sdgj”, “adfhsf”).
Campos essenciais ausentes: identificação do autuado, NIF, representante, descrição factual coerente.
Estrutura do auto não segue qualquer padrão do formulário.
Auto manifestamente incompleto.

AUTO 7

Conteúdo composto maioritariamente por texto sem sentido ou caracteres aleatórios (“rpékjfgljrekgçl”, “jlsdbfgvlkdfjlk”).
Identificação do autuado ilegível (“gkºtçlhkºtç”, “´+erog´peohg”).
Morada e restantes campos essenciais incompletos ou sem coerência.
Auto não contém dados válidos.

AUTO 8

Título da infração e descrição (“gdfhfg”, “srgtryurt”) não apresentam significado.
Número “354587” surge isolado — não está claro se é NIF, CC ou outro identificador.
Campos finais apresentam combinações de caracteres aleatórios (“3w5r435”, “tuytuu”, “etuy7”).
Preenchimento incorreto e não conforme.

AUTO 9

Data da infração (2026/02/24) é posterior à data de deteção pela técnica (2026/02/23), o que cria incoerência temporal.
Campo do “autuante” apresenta dois nomes diferentes no mesmo bloco (Ana Reis — Engenheira ambiental / Ana Viegas), podendo indicar troca de campos ou autorias duplicadas.
O campo do NIF/identificação da empresa está vazio após “456789”.


2. Observações de Clareza e Redação

Em vários autos surgem descrições claras mas sem uniformidade — algumas muito completas, outras extremamente curtas ou inexistentes (especialmente autos 6–8).
A utilização de travessões longos (—) para separar nomes de localidades poderá causar problemas ao integrar dados em sistemas automáticos.
Em vários autos não é possível perceber se os campos vazios são permitidos ou resultam de erro no preenchimento.
Nos autos com texto aleatório (6, 7, 8), o conteúdo impede qualquer interpretação segura do facto ou dos intervenientes.
Alguns autos utilizam maiúsculas inconsistentes (“Despejo Ilegal de Resíduos”) — não é erro jurídico, mas compromete uniformidade de registos.


3. Nota de Limitação da IA
Este relatório analisa apenas erros formais, incoerências e ambiguidades de preenchimento, sem qualquer apreciação jurídica ou avaliação do mérito das infrações. A análise baseia‑se exclusivamente no texto fornecido, podendo existir regras internas de formulário não visíveis que influenciem a interpretação.
  </div>

  {/* Botão para gerar PDF */}
  <button
    onClick={() => {
      const conteudo = document.getElementById("relatorio").innerText;
      if (!conteudo.trim()) {
        alert("Cole a análise do IA antes de gerar o PDF!");
        return;
      }

      const pdf = new jsPDF();
      const linhas = conteudo.split(/\r?\n/);
      let y = 10;

      // Adiciona data no topo
      const dataAtual = new Date();
      const dataFormatada = dataAtual.toLocaleString();
      pdf.setFontSize(10);
      pdf.text(`Data do Relatório: ${dataFormatada}`, 10, y);
      y += 10;

      pdf.setFontSize(12);

      linhas.forEach((linha) => {
        const textoQuebrado = pdf.splitTextToSize(linha, 180);
        textoQuebrado.forEach((t) => {
          pdf.text(t, 10, y);
          y += 10;
          if (y > 280) {
            pdf.addPage();
            y = 10;
          }
        });
      });

      pdf.save("relatorio.pdf");
    }}
    className="flex items-center gap-3 text-blue-600 font-bold border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
  >
    <FileText size={20} />
    Descarregar PDF
  </button>
</section>
          </div>
        </Section>

         {/* 6. Vídeo Explicativo */}
<Section id="video" title="Vídeo Explicativo" icon={<Video size={28} />}>
  <a
    href="https://app.heygen.com/videos/5adc004b083f447a9794d1dd88405c5a"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      position: 'relative',
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      aspectRatio: '16 / 9',
      borderRadius: '16px',
      overflow: 'hidden',
      border: '1px solid #CBD5E1',
      textDecoration: 'none'
    }}
  >
    <img
      src="https://drive.google.com/thumbnail?id=13HxA2EKSUa8dLdkNMV4o7lHrz-GgkU6M&sz=w1600"
      alt="Vídeo explicativo do sistema"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.75
      }}
    />

    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        background: 'rgba(0,0,0,0.25)'
      }}
    >
      <div
        style={{
          width: '90px',
          height: '90px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: '16px solid transparent',
            borderBottom: '16px solid transparent',
            borderLeft: '26px solid #2563EB',
            marginLeft: '4px'
          }}
        />
      </div>

      <span
        style={{
          backgroundColor: 'rgba(255,255,255,0.9)',
          padding: '6px 16px',
          borderRadius: '999px',
          fontWeight: 600,
          color: '#1E293B'
        }}
      >
        Abrir vídeo demonstrativo
      </span>
    </div>
  </a>
</Section>
      </main>

      {/* 7. Rodapé */}
      <footer
  style={{
    backgroundColor: '#1E3A8A',
    color: '#CBD5E1',
    padding: '48px 24px',
    textAlign: 'center'
  }}
>
  <div style={{ maxWidth: '800px', margin: '0 auto' }}>
    <h3
      style={{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        marginBottom: '8px'
      }}
    >
      Sistema de Análise de Autos de Notícia com Inteligência Artificial
    </h3>
    <p style={{ fontSize: '0.9rem', margin: 0 }}>
      Projeto desenvolvido com recurso a tecnologias de Inteligência Artificial.
    </p>
  </div>
</footer>
    </div>
  );
};

export default App;

