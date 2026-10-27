"use client";
import { useEffect } from "react";

const data={dividas:{title:'Qual é a composição do passivo?',text:'O valor total é apenas o começo. Natureza, vencimento e documentação das obrigações também orientam as escolhas.',items:['Contratos, saldos e encargos precisam ser conferidos.','Débitos fiscais exigem tratamento próprio.','Obrigações de empresas distintas precisam ser individualizadas.']},credores:{title:'Quem precisa participar da negociação?',text:'A concentração do passivo e a importância de cada relação comercial ajudam a definir os interlocutores e a condução das tratativas.',items:['Bancos, fornecedores e demais credores podem demandar abordagens diferentes.','O alcance de cada acordo precisa estar expresso.','Fornecedores essenciais exigem atenção à continuidade das entregas.']},garantias:{title:'Quais bens e pessoas estão vinculados?',text:'As garantias influenciam os riscos e o alcance dos instrumentos disponíveis. A posição dos sócios também precisa ser compreendida.',items:['Avais e fianças exigem análise individual.','Bens e recebíveis vinculados podem ter tratamento jurídico específico.','A liberação de garantias não decorre automaticamente de um acordo da empresa.']},operacao:{title:'O que a atividade precisa preservar?',text:'A negociação deve considerar os recursos e as relações necessários à operação, com base em informações financeiras confiáveis.',items:['Despesas operacionais e compromissos essenciais precisam ser mapeados.','Sazonalidade e geração de caixa influenciam a capacidade de pagamento.','A execução dos acordos precisa ser acompanhada.']}};

export function PerimeterInteractions() {
  useEffect(() => {
const tabs = [...document.querySelectorAll<HTMLButtonElement>('.lp [role=tab]')];
    const panel = document.getElementById('painel');
    if (!panel) return;
    function selectTab(tab: HTMLButtonElement) {
      if (!panel) return;
      tabs.forEach(t => { t.setAttribute('aria-selected', String(t === tab)); t.tabIndex = t === tab ? 0 : -1; });
      const d = data[tab.dataset.key as keyof typeof data];
      panel.setAttribute('aria-labelledby', tab.id);
      panel.innerHTML = '<div><h3>' + d.title + '</h3><p class="muted">' + d.text + '</p></div><ul>' + d.items.map(i => '<li>' + i + '</li>').join('') + '</ul>';
    }
    tabs.forEach((tab, i) => {
      tab.onclick = () => selectTab(tab);
      tab.onkeydown = e => {
        let n: number | undefined;
        if (e.key === 'ArrowRight') n = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') n = (i + tabs.length - 1) % tabs.length;
        if (e.key === 'Home') n = 0;
        if (e.key === 'End') n = tabs.length - 1;
        if (n !== undefined) { e.preventDefault(); selectTab(tabs[n]); tabs[n].focus(); }
      };
    });
    return () => { tabs.forEach(tab => { tab.onclick = null; tab.onkeydown = null; }); };

  }, []);
  return null;
}
