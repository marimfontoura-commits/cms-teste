const state = {
  perfil: "admin",
  currentScreen: "geral",
  lastScreenBeforeTask: "geral",
  geralView: "fluxo",
  layoutTab: "pre",
  notifFilter: "all",
  quickFilter: "",
  currentTaskId: null,
  stampMode: false,
  pendingAnchor: null,
  activeCommentId: null,
  commentStatusFilter: "todos",
  commentTeamFilter: "todas",
  expandedComments: {},
  nextCommentId: 7,
  raizBlocks: [],
  raizNextBlockId: 1,
  activeRaizBlockId: null,
  raizPageBreakAlertActive: false,
  raizPageBreakAcknowledged: false,
  raizSafeBlocksSnapshot: [],
  raizSafeActiveBlockId: null,
  raizTexto: `Capitulo 1 - Ecossistemas\n\nA biodiversidade e formada por especies, genes e ecossistemas.\nEste texto e apenas uma simulacao para validar fluxo editorial no CMS.`,
  itens: [
    {
      projeto: "Colecao Ciencias 7",
      equipe: "Editorial",
      status: "Em andamento",
      prazo: "2026-06-03",
      prioridade: "Alta",
      selo: "SAE",
      segmento: "AI",
      parteLiberada: true,
    },
    {
      projeto: "Colecao Historia 8",
      equipe: "Diagramação",
      status: "Bloqueado",
      prazo: "2026-06-01",
      prioridade: "Emergencial",
      selo: "SPE",
      segmento: "AF",
      parteLiberada: false,
    },
    {
      projeto: "Colecao Matematica 6",
      equipe: "Digital",
      status: "Aguardando aprovação",
      prazo: "2026-06-10",
      prioridade: "Média",
      selo: "COC",
      segmento: "EI",
      parteLiberada: true,
    },
  ],
  notificacoes: [
    {
      tipo: "normal",
      texto: "Equipe Editorial recebeu nova solicitacao em Colecao Ciencias 7.",
      quando: "agora",
    },
    {
      tipo: "emergencial",
      texto: "Mudanca substancial detectada em Colecao Historia 8. Gestao acionada.",
      quando: "ha 5 min",
    },
  ],
  comentarios: [
    {
      id: 1,
      texto: "Ajustar o enquadramento da imagem principal para não cortar o título no impresso.",
      equipe: "Diagramação",
      prioridade: "Média",
      resolvido: false,
      quando: "agora",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado no preview Impresso e atribuído para Diagramação.",
          quando: "agora",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 68, y: 56 },
      alvo: "Impresso",
    },
    {
      id: 2,
      texto: "Revisar o termo técnico no primeiro parágrafo para manter o padrão editorial da coleção.",
      equipe: "Editorial",
      prioridade: "Média",
      resolvido: false,
      quando: "agora",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado no corpo do texto e enviado para Editorial.",
          quando: "agora",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 28, y: 43 },
      alvo: "Impresso",
    },
    {
      id: 3,
      texto: "Emergencial: título + box de imagem estouraram a dobra da página no impresso.",
      equipe: "Diagramação",
      prioridade: "Emergencial",
      resolvido: false,
      quando: "ha 8 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Alerta emergencial aberto para Diagramação por conflito de composição na página.",
          quando: "ha 8 min",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 52, y: 32 },
      alvo: "Impresso",
    },
    {
      id: 4,
      texto: "Padronizar a chamada da atividade com o glossário pedagógico da unidade.",
      equipe: "Editorial",
      prioridade: "Alta",
      resolvido: true,
      resolvidoPor: "Mariana Fontoura",
      dataResolucao: "Hoje, 09:12",
      quando: "ha 15 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado no título secundário e atribuído para Editorial.",
          quando: "Ontem, 17:42",
        },
        {
          tipo: "resolvido",
          descricao: "Resolvido por Mariana Fontoura.",
          quando: "Hoje, 09:12",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 24, y: 28 },
      alvo: "Impresso",
    },
    {
      id: 5,
      texto: "Confirmar impacto no cronograma após inclusão do box de imagem adicional.",
      equipe: "Gestão",
      prioridade: "Emergencial",
      resolvido: false,
      quando: "ha 20 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário escalado para Gestão com foco em prazo e retrabalho.",
          quando: "ha 20 min",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 44, y: 72 },
      alvo: "Impresso",
    },
    {
      id: 6,
      texto: "Uniformizar o estilo do card de imagem na versão digital para manter consistência visual.",
      equipe: "Diagramação",
      prioridade: "Alta",
      resolvido: true,
      resolvidoPor: "Carla Nunes",
      dataResolucao: "Ontem, 18:40",
      quando: "ha 35 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado na aba Digital e atribuído para Diagramação.",
          quando: "Ontem, 16:55",
        },
        {
          tipo: "devolvido",
          descricao: "Devolvido para Editorial para ajuste de origem.",
          quando: "Ontem, 17:20",
        },
        {
          tipo: "reatribuido",
          descricao: "Editorial reenviou para Diagramação após ajuste.",
          quando: "Ontem, 18:05",
        },
        {
          tipo: "resolvido",
          descricao: "Resolvido por Carla Nunes.",
          quando: "Ontem, 18:40",
        },
      ],
      anchor: { tipo: "layout", tab: "html", x: 58, y: 44 },
      alvo: "Digital",
    },
  ],
  layoutStamps: [],
  raizBaselineWords: 0,
  estruturaProjeto: {
    projeto: "PRE-UNI26",
    disciplinas: [
      { codigo: "MAT", nome: "Matematica" },
      { codigo: "POR", nome: "Portugues" },
      { codigo: "GEO", nome: "Geografia" },
    ],
    etapas: ["Edicao", "Revisao", "Diagramacao"],
  },
  fluxosEditoriais: ["Original", "Edição", "Revisão", "Diagramação", "Aprovação Final"],
  tarefasProjeto: [
    {
      id: 101,
      projeto: "PRE-UNI26",
      disciplina: "MAT",
      etapa: "Edicao",
      titulo: "MAT - Capitulo 3 (Edicao)",
      status: "Em andamento",
      prioridade: "Alta",
      selo: "SAE",
      segmento: "AI",
      prazo: "2026-06-08",
      sla: "48h",
      responsavel: "Ana Souza",
      equipe: "Editorial",
      progresso: 62,
      entregavel: "Texto base consolidado para revisão.",
      ultimaAtualizacao: "Hoje, 10:20",
      comentariosAbertos: 6,
      alertasEmergenciais: 1,
      bloqueio: "Aguardando validacao de exemplos visuais.",
      dependencias: ["Revisao tecnica de conteudo", "Aprovacao de referencias"],
      riscos: ["Atraso no prazo da revisao", "Ajuste de volume pode afetar diagramacao"],
    },
    {
      id: 102,
      projeto: "PRE-UNI26",
      disciplina: "MAT",
      etapa: "Revisao",
      titulo: "MAT - Capitulo 3 (Revisao)",
      status: "Aguardando aprovação",
      prioridade: "Média",
      selo: "SPE",
      segmento: "AI",
      prazo: "2026-06-10",
      sla: "72h",
      responsavel: "Bruno Lima",
      equipe: "Editorial",
      progresso: 38,
      entregavel: "Checklist de norma linguistica.",
      ultimaAtualizacao: "Hoje, 09:05",
      comentariosAbertos: 4,
      alertasEmergenciais: 0,
      bloqueio: "Sem bloqueio critico no momento.",
      dependencias: ["Conclusao da etapa de edicao"],
      riscos: ["Fila de aprovacoes pode atrasar liberacao"],
    },
    {
      id: 103,
      projeto: "PRE-UNI26",
      disciplina: "MAT",
      etapa: "Diagramacao",
      titulo: "MAT - Capitulo 3 (Diagramacao)",
      status: "Bloqueado",
      prioridade: "Emergencial",
      selo: "COC",
      segmento: "AF",
      prazo: "2026-06-06",
      sla: "24h",
      responsavel: "Carla Nunes",
      equipe: "Diagramação",
      progresso: 24,
      entregavel: "Paginas com grade final e testes de quebra.",
      ultimaAtualizacao: "Hoje, 11:30",
      comentariosAbertos: 9,
      alertasEmergenciais: 2,
      bloqueio: "Mudanca na raiz gerou viuva e quebra de pagina inesperada.",
      dependencias: ["Fechamento da revisao", "Ajuste de imagens finais"],
      riscos: ["Refluxo de layout para livro digital", "Risco de retrabalho em 8 paginas"],
    },
    {
      id: 201,
      projeto: "PRE-UNI26",
      disciplina: "POR",
      etapa: "Edicao",
      titulo: "POR - Unidade 2 (Edicao)",
      status: "Em andamento",
      prioridade: "Média",
      selo: "CQT",
      segmento: "EI",
      prazo: "2026-06-09",
      sla: "48h",
      responsavel: "Diego Rocha",
      equipe: "Editorial",
      progresso: 55,
      entregavel: "Texto raiz com ajustes de coesao.",
      ultimaAtualizacao: "Hoje, 08:40",
      comentariosAbertos: 3,
      alertasEmergenciais: 0,
      bloqueio: "Sem bloqueio critico no momento.",
      dependencias: ["Validacao pedagogica"],
      riscos: ["Mudanca de escopo de atividades"],
    },
    {
      id: 301,
      projeto: "PRE-UNI26",
      disciplina: "GEO",
      etapa: "Diagramacao",
      titulo: "GEO - Unidade 4 (Diagramacao)",
      status: "Em andamento",
      prioridade: "Alta",
      selo: "SAS",
      segmento: "AF",
      prazo: "2026-06-07",
      sla: "36h",
      responsavel: "Elaine Prado",
      equipe: "Diagramação",
      progresso: 71,
      entregavel: "Layout final para aprovacao de pagina dupla.",
      ultimaAtualizacao: "Hoje, 10:58",
      comentariosAbertos: 5,
      alertasEmergenciais: 1,
      bloqueio: "Aguardando substituicao de mapa em alta resolucao.",
      dependencias: ["Arquivo de imagem aprovado", "Conferencia de legenda"],
      riscos: ["Perda de alinhamento em exportacao HTML"],
    },
  ],
};

const els = {
  perfil: document.querySelector("#perfil"),
  navBtns: document.querySelectorAll(".nav-btn"),
  currentScreenLabel: document.querySelector("#currentScreenLabel"),
  btnAjudaAtalhos: document.querySelector("#btnAjudaAtalhos"),
  screens: {
    geral: document.querySelector("#screen-geral"),
    edicao: document.querySelector("#screen-edicao"),
    notificacoes: document.querySelector("#screen-notificacoes"),
    tarefa: document.querySelector("#screen-tarefa"),
  },
  filtroBusca: document.querySelector("#filtroBusca"),
  filtroEquipe: document.querySelector("#filtroEquipe"),
  filtroStatus: document.querySelector("#filtroStatus"),
  filtroPrioridade: document.querySelector("#filtroPrioridade"),
  filtroSelo: document.querySelector("#filtroSelo"),
  filtroSegmento: document.querySelector("#filtroSegmento"),
  filtrosHint: document.querySelector("#filtrosHint"),
  viewTabs: document.querySelectorAll(".view-tab"),
  viewFluxo: document.querySelector("#view-fluxo"),
  viewOperacional: document.querySelector("#view-operacional"),
  dashCards: document.querySelectorAll(".dash-card[data-dash-action]"),
  tabelaItens: document.querySelector("#tabelaItens"),
  kpis: document.querySelector("#kpis"),
  dashAtrasadas: document.querySelector("#dashAtrasadas"),
  dashBloqueios: document.querySelector("#dashBloqueios"),
  dashComentarios: document.querySelector("#dashComentarios"),
  dashImpactos: document.querySelector("#dashImpactos"),
  fluxoResumo: document.querySelector("#fluxoResumo"),
  operacionalResumo: document.querySelector("#operacionalResumo"),
  fluxoScroll: document.querySelector("#fluxoScroll"),
  fluxoScrollPrev: document.querySelector("#fluxoScrollPrev"),
  fluxoScrollNext: document.querySelector("#fluxoScrollNext"),
  fluxoEtapas: document.querySelector("#fluxoEtapas"),
  listaNotificacoes: document.querySelector("#listaNotificacoes"),
  notificacoesSubtitulo: document.querySelector("#notificacoesSubtitulo"),
  notifBtns: document.querySelectorAll(".mini-btn[data-notif-filter]"),
  btnBellNotificacoes: document.querySelector("#btnBellNotificacoes"),
  btnVoltarTelaGeral: document.querySelector("#btnVoltarTelaGeral"),
  btnExportarRelatorio: document.querySelector("#btnExportarRelatorio"),
  estruturaProjeto: document.querySelector("#estruturaProjeto"),
  btnVoltarNotificacoes: document.querySelector("#btnVoltarNotificacoes"),
  tarefaBreadcrumb: document.querySelector("#tarefaBreadcrumb"),
  tarefaTitulo: document.querySelector("#tarefaTitulo"),
  tarefaSubtitulo: document.querySelector("#tarefaSubtitulo"),
  taskStatus: document.querySelector("#taskStatus"),
  taskPrioridade: document.querySelector("#taskPrioridade"),
  taskPrazo: document.querySelector("#taskPrazo"),
  taskSla: document.querySelector("#taskSla"),
  taskResponsavel: document.querySelector("#taskResponsavel"),
  taskEquipe: document.querySelector("#taskEquipe"),
  taskComentariosAbertos: document.querySelector("#taskComentariosAbertos"),
  taskAlertas: document.querySelector("#taskAlertas"),
  taskEntregavel: document.querySelector("#taskEntregavel"),
  taskProgressFill: document.querySelector("#taskProgressFill"),
  taskProgresso: document.querySelector("#taskProgresso"),
  taskUltimaAtualizacao: document.querySelector("#taskUltimaAtualizacao"),
  taskDependencias: document.querySelector("#taskDependencias"),
  taskBloqueio: document.querySelector("#taskBloqueio"),
  taskRiscos: document.querySelector("#taskRiscos"),
  taskAcoesPerfil: document.querySelector("#taskAcoesPerfil"),
  arquivoRaiz: document.querySelector("#arquivoRaiz"),
  btnRaizTitulo: document.querySelector("#btnRaizTitulo"),
  btnRaizCorpo: document.querySelector("#btnRaizCorpo"),
  btnRaizBold: document.querySelector("#btnRaizBold"),
  btnRaizImagem: document.querySelector("#btnRaizImagem"),
  raizVisualEditor: document.querySelector("#raizVisualEditor"),
  raizHint: document.querySelector("#raizHint"),
  raizImpactAlert: document.querySelector("#raizImpactAlert"),
  raizImpactMessage: document.querySelector("#raizImpactMessage"),
  btnRaizImpactSignal: document.querySelector("#btnRaizImpactSignal"),
  btnRaizImpactRevert: document.querySelector("#btnRaizImpactRevert"),
  layoutPreview: document.querySelector("#layoutPreview"),
  layoutHint: document.querySelector("#layoutHint"),
  tabBtns: document.querySelectorAll(".tab-btn"),
  btnStamp: document.querySelector("#btnStamp"),
  stampHint: document.querySelector("#stampHint"),
  btnHistorico: document.querySelector("#btnHistorico"),
  commentsDrawer: document.querySelector("#commentsDrawer"),
  commentsDrawerBackdrop: document.querySelector("#commentsDrawerBackdrop"),
  fecharHistorico: document.querySelector("#fecharHistorico"),
  filtroComentariosStatus: document.querySelector("#filtroComentariosStatus"),
  filtroComentariosEquipe: document.querySelector("#filtroComentariosEquipe"),
  comentarioModal: document.querySelector("#comentarioModal"),
  modalContexto: document.querySelector("#modalContexto"),
  cancelarComentario: document.querySelector("#cancelarComentario"),
  comentarioForm: document.querySelector("#comentarioForm"),
  comentarioTexto: document.querySelector("#comentarioTexto"),
  comentarioEquipe: document.querySelector("#comentarioEquipe"),
  comentarioPrioridade: document.querySelector("#comentarioPrioridade"),
  historicoComentarios: document.querySelector("#historicoComentarios"),
  btnEmergencial: document.querySelector("#btnEmergencial"),
  comentariosVisiveis: document.querySelector("#comentariosVisiveis"),
  comentariosTotais: document.querySelector("#comentariosTotais"),
  comentariosEmergenciais: document.querySelector("#comentariosEmergenciais"),
  visaoPerfilHint: document.querySelector("#visaoPerfilHint"),
  commentMap: document.querySelector("#commentMap"),
  commentDetailModal: document.querySelector("#commentDetailModal"),
  atalhosModal: document.querySelector("#atalhosModal"),
  btnFecharAtalhos: document.querySelector("#btnFecharAtalhos"),
  detailNumero: document.querySelector("#detailNumero"),
  detailPrioridade: document.querySelector("#detailPrioridade"),
  detailEquipe: document.querySelector("#detailEquipe"),
  detailStatus: document.querySelector("#detailStatus"),
  detailAlvo: document.querySelector("#detailAlvo"),
  detailTexto: document.querySelector("#detailTexto"),
  detailThreadList: document.querySelector("#detailThreadList"),
  detailThreadInput: document.querySelector("#detailThreadInput"),
  btnAdicionarThread: document.querySelector("#btnAdicionarThread"),
  detailResolutionMeta: document.querySelector("#detailResolutionMeta"),
  devolverEquipe: document.querySelector("#devolverEquipe"),
  btnDevolverArea: document.querySelector("#btnDevolverArea"),
  btnIrParaComentario: document.querySelector("#btnIrParaComentario"),
  btnResolverComentario: document.querySelector("#btnResolverComentario"),
  btnFecharComentario: document.querySelector("#btnFecharComentario"),
  snackbar: document.querySelector("#snackbar"),
};

let snackbarTimeoutId = null;
const RAIZ_PAGE_BREAK_MESSAGE = "Atenção: a alteracao na raiz causou alterações no layout";

function wordsCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function getActorByPerfil() {
  if (state.perfil === "admin") return "Admin/Gestor";
  if (state.perfil === "editor") return "Editor/Autor";
  return "Diagramador";
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function ensureThread(comment) {
  if (Array.isArray(comment.thread)) return comment.thread;

  const base = Array.isArray(comment.historico) ? comment.historico : [];
  const equipes = ["Editorial", "Diagramação", "Digital", "Gestão"];
  let equipeAtual = comment.equipe;

  comment.thread = base.map((ev) => {
    const texto = ev.texto || ev.descricao || "Atualização do comentário.";
    const tipoBase = ev.tipo || "mensagem";
    const tipo = (tipoBase === "devolvido" || tipoBase === "reatribuido") ? "handoff" : tipoBase;

    let equipeOrigem = ev.equipeOrigem || "";
    let equipeDestino = ev.equipeDestino || "";

    if (tipo === "handoff" && !equipeDestino) {
      equipeDestino = equipes.find((nome) => texto.includes(`para ${nome}`)) || "";
      equipeOrigem = equipeOrigem || equipeAtual;
    }

    if (tipo !== "handoff" && ev.equipe) {
      equipeAtual = ev.equipe;
    }
    if (equipeDestino) {
      equipeAtual = equipeDestino;
    }

    return {
      tipo,
      texto,
      autor: ev.autor || "Sistema",
      equipe: ev.equipe || equipeAtual,
      equipeOrigem,
      equipeDestino,
      quando: ev.quando || comment.quando || "agora",
    };
  });

  return comment.thread;
}

function threadSummary(comment) {
  const thread = ensureThread(comment);
  if (!thread.length) return "Sem interações registradas.";
  const last = thread[thread.length - 1];
  const label = thread.length === 1 ? "interação" : "interações";
  return `${thread.length} ${label} - ${last.autor}: ${last.texto}`;
}

function renderThreadItem(entry) {
  const route = entry.equipeOrigem && entry.equipeDestino
    ? `<span class="thread-route">${escapeHtml(entry.equipeOrigem)} -> ${escapeHtml(entry.equipeDestino)}</span>`
    : "";

  return `
    <li class="thread-msg ${entry.tipo}">
      <div class="thread-msg-head">
        <strong>${escapeHtml(entry.autor || "Sistema")}</strong>
        <small>${escapeHtml(entry.quando || "agora")}</small>
      </div>
      <p>${escapeHtml(entry.texto || "")}</p>
      <div class="thread-msg-meta">
        <span class="thread-type">${escapeHtml(entry.tipo || "mensagem")}</span>
        ${route}
      </div>
    </li>
  `;
}

function addNotificacao(tipo, texto) {
  state.notificacoes.unshift({ tipo, texto, quando: "agora" });
  renderNotificacoes();
}

function showSnackbar(message) {
  if (!els.snackbar) return;
  if (snackbarTimeoutId) {
    clearTimeout(snackbarTimeoutId);
  }

  els.snackbar.textContent = message;
  els.snackbar.classList.add("show");

  snackbarTimeoutId = setTimeout(() => {
    els.snackbar.classList.remove("show");
  }, 2800);
}

function cloneRaizBlocks(blocks) {
  return blocks.map((block) => ({ ...block }));
}

function captureStableRaizSnapshot() {
  if (state.raizBlocks.length > 2) return;
  state.raizSafeBlocksSnapshot = cloneRaizBlocks(state.raizBlocks);
  state.raizSafeActiveBlockId = state.activeRaizBlockId;
}

function updateRaizImpactAlert() {
  if (!els.raizImpactAlert) return;

  const shouldShow = state.raizPageBreakAlertActive;
  els.raizImpactAlert.classList.toggle("hidden", !shouldShow);

  const canEditRaiz = !els.arquivoRaiz.readOnly;
  if (els.btnRaizImpactSignal) {
    els.btnRaizImpactSignal.disabled = !canEditRaiz;
  }
  if (els.btnRaizImpactRevert) {
    els.btnRaizImpactRevert.disabled = !canEditRaiz;
  }
}

function signalRaizImpact() {
  if (els.arquivoRaiz.readOnly) return;

  addNotificacao(
    "emergencial",
    "Alteracao mantida na raiz e setor responsavel sinalizado para revisar quebra de pagina no layout.",
  );
  showSnackbar("Setor responsavel sinalizado com sucesso.");
  state.raizPageBreakAlertActive = false;
  state.raizPageBreakAcknowledged = true;
  updateRaizImpactAlert();
}

function revertRaizImpactChange() {
  if (els.arquivoRaiz.readOnly) return;
  if (!state.raizSafeBlocksSnapshot.length) {
    showSnackbar("Nao ha versao estavel para reverter neste momento.");
    return;
  }

  state.raizBlocks = cloneRaizBlocks(state.raizSafeBlocksSnapshot);
  const hasActiveSnapshot = state.raizBlocks.some((block) => block.id === state.raizSafeActiveBlockId);
  state.activeRaizBlockId = hasActiveSnapshot ? state.raizSafeActiveBlockId : state.raizBlocks[0]?.id || null;
  state.raizPageBreakAlertActive = false;
  state.raizPageBreakAcknowledged = false;

  syncRaizTextoFromBlocks({ rerenderEditor: true, skipImpact: true });
  addNotificacao("normal", "Alteracao na raiz foi revertida apos alerta de quebra de pagina.");
  showSnackbar("Alteracao revertida para a ultima versao estavel.");
  updateRaizImpactAlert();
}

function openScreen(screenKey) {
  state.currentScreen = screenKey;
  els.navBtns.forEach((b) => {
    const isTaskContext = screenKey === "tarefa" && b.dataset.screen === "notificacoes";
    b.classList.toggle("active", b.dataset.screen === screenKey || isTaskContext);
  });
  Object.entries(els.screens).forEach(([k, el]) => {
    el.classList.toggle("active", k === screenKey);
  });

  const labels = {
    geral: "Tela Geral",
    edicao: "Tela de Edição",
    notificacoes: "Notificações",
    tarefa: "Detalhe da tarefa",
  };

  const label = labels[screenKey] || "Tela";
  if (els.currentScreenLabel) {
    els.currentScreenLabel.textContent = label;
  }
  document.title = `CMS Editorial - ${label}`;
}

function normalizeLayoutTab(tab) {
  return tab === "html" ? "html" : "pre";
}

function parseRaizBlocks(texto) {
  const lines = String(texto || "").split(/\r?\n/);
  const blocks = [];
  let paragraphBuffer = [];

  const flushParagraph = () => {
    if (!paragraphBuffer.length) return;
    blocks.push({ tipo: "corpo", texto: paragraphBuffer.join(" ").trim() });
    paragraphBuffer = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushParagraph();
      return;
    }

    if (trimmed.startsWith("# ")) {
      flushParagraph();
      blocks.push({ tipo: "titulo", texto: trimmed.slice(2).trim() });
      return;
    }

    const imageMatch = trimmed.match(/^\[imagem:\s*(.+?)\s*\]$/i);
    if (imageMatch) {
      flushParagraph();
      blocks.push({ tipo: "imagem", texto: imageMatch[1].trim() || "Descrição da imagem" });
      return;
    }

    paragraphBuffer.push(trimmed);
  });

  flushParagraph();
  return blocks;
}

function formatInlineRaiz(text) {
  const escaped = escapeHtml(text || "");
  return escaped.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

function extractBoldMarkers(text) {
  let hasBold = false;
  const cleaned = String(text || "").replace(/\*\*(.+?)\*\*/g, (_, content) => {
    hasBold = true;
    return content;
  });
  return { text: cleaned, bold: hasBold };
}

function hydrateRaizBlocksFromText(text) {
  const parsed = parseRaizBlocks(text);
  const blocks = parsed.map((block) => {
    if (block.tipo === "imagem") {
      return {
        id: state.raizNextBlockId++,
        tipo: "imagem",
        texto: block.texto || "Descrição da imagem",
        bold: false,
      };
    }

    const { text: cleanedText, bold } = extractBoldMarkers(block.texto);
    return {
      id: state.raizNextBlockId++,
      tipo: block.tipo,
      texto: cleanedText || (block.tipo === "titulo" ? "Novo título" : "Novo parágrafo"),
      bold,
    };
  });

  if (!blocks.length) {
    blocks.push({ id: state.raizNextBlockId++, tipo: "corpo", texto: "Novo parágrafo", bold: false });
  }

  const hasTitle = blocks.some((block) => block.tipo === "titulo");
  if (!hasTitle) {
    const firstBody = blocks.find((block) => block.tipo === "corpo");
    if (firstBody) {
      firstBody.tipo = "titulo";
    }
  }

  return blocks;
}

function serializeRaizBlocksToText() {
  return state.raizBlocks
    .map((block) => {
      const text = String(block.texto || "").trim();
      if (!text) return "";

      if (block.tipo === "imagem") {
        return `[imagem: ${text}]`;
      }

      const content = block.bold ? `**${text}**` : text;
      if (block.tipo === "titulo") {
        return `# ${content}`;
      }
      return content;
    })
    .filter(Boolean)
    .join("\n\n");
}

function getActiveRaizBlockIndex() {
  const idx = state.raizBlocks.findIndex((block) => block.id === state.activeRaizBlockId);
  return idx >= 0 ? idx : state.raizBlocks.length - 1;
}

function syncRaizTextoFromBlocks(options = {}) {
  const { skipImpact = false, rerenderEditor = false } = options;
  state.raizTexto = serializeRaizBlocksToText();
  if (els.arquivoRaiz) {
    els.arquivoRaiz.value = state.raizTexto;
  }

  if (rerenderEditor) {
    renderRaizVisualEditor();
  }

  renderPreview();
  captureStableRaizSnapshot();
  if (!skipImpact) {
    evaluateSubstantialChange(state.raizTexto);
  } else {
    updateRaizImpactAlert();
  }
}

function renderRaizVisualEditor() {
  if (!els.raizVisualEditor) return;

  els.raizVisualEditor.innerHTML = state.raizBlocks
    .map((block, index) => {
      const activeClass = block.id === state.activeRaizBlockId ? "active" : "";
      const boldClass = block.bold ? "block-bold" : "";
      const typeLabel = block.tipo === "titulo" ? "Título" : block.tipo === "imagem" ? "Box de imagem" : "Corpo";

      return `
        <article class="raiz-block ${activeClass}" data-block-id="${block.id}">
          <header class="raiz-block-head">
            <span class="raiz-block-index">${index + 1}</span>
            <select class="raiz-block-type" data-role="type">
              <option value="titulo" ${block.tipo === "titulo" ? "selected" : ""}>Título</option>
              <option value="corpo" ${block.tipo === "corpo" ? "selected" : ""}>Corpo</option>
              <option value="imagem" ${block.tipo === "imagem" ? "selected" : ""}>Box de imagem</option>
            </select>
            <span class="raiz-block-kind">${typeLabel}</span>
            <button type="button" class="mini-btn" data-action="up" aria-label="Mover bloco para cima">↑</button>
            <button type="button" class="mini-btn" data-action="down" aria-label="Mover bloco para baixo">↓</button>
            <button type="button" class="mini-btn" data-action="remove" aria-label="Excluir bloco">Excluir</button>
          </header>
          ${block.tipo === "imagem"
            ? `<input class="raiz-block-input" data-role="text" type="text" value="${escapeHtml(block.texto)}" placeholder="Descreva o box de imagem" />`
            : `<div class="raiz-block-input ${boldClass}" data-role="text" contenteditable="true" spellcheck="true">${escapeHtml(block.texto)}</div>`}
        </article>
      `;
    })
    .join("");

  const canEdit = !els.arquivoRaiz.readOnly;
  els.raizVisualEditor.querySelectorAll(".raiz-block-input[contenteditable]").forEach((node) => {
    node.setAttribute("contenteditable", String(canEdit));
  });
  els.raizVisualEditor.querySelectorAll("input, select, button").forEach((node) => {
    node.disabled = !canEdit;
  });
  paintActiveRaizBlock();
}

function paintActiveRaizBlock() {
  if (!els.raizVisualEditor) return;
  els.raizVisualEditor.querySelectorAll(".raiz-block").forEach((node) => {
    const blockId = Number(node.dataset.blockId);
    node.classList.toggle("active", blockId === state.activeRaizBlockId);
  });
}

function syncRaizFromTextarea() {
  state.raizBlocks = hydrateRaizBlocksFromText(els.arquivoRaiz.value);
  state.activeRaizBlockId = state.raizBlocks[0]?.id || null;
  syncRaizTextoFromBlocks({ rerenderEditor: true });
}

function addRaizBlock(tipo) {
  if (els.arquivoRaiz.readOnly) return;
  const newBlock = {
    id: state.raizNextBlockId++,
    tipo,
    texto: tipo === "titulo" ? "Novo título" : tipo === "imagem" ? "Descreva a imagem esperada" : "Novo parágrafo do conteúdo.",
    bold: false,
  };

  const index = getActiveRaizBlockIndex();
  state.raizBlocks.splice(index + 1, 0, newBlock);
  state.activeRaizBlockId = newBlock.id;
  syncRaizTextoFromBlocks({ rerenderEditor: true });
}

function applyRaizBold() {
  if (els.arquivoRaiz.readOnly) return;
  const idx = getActiveRaizBlockIndex();
  const block = state.raizBlocks[idx];

  if (!block || block.tipo === "imagem") {
    showSnackbar("Selecione um bloco de texto para aplicar negrito.");
    return;
  }

  block.bold = !block.bold;
  syncRaizTextoFromBlocks({ rerenderEditor: true });
}

function moveRaizBlock(blockId, direction) {
  const index = state.raizBlocks.findIndex((block) => block.id === blockId);
  if (index < 0) return;
  const target = index + direction;
  if (target < 0 || target >= state.raizBlocks.length) return;
  const [block] = state.raizBlocks.splice(index, 1);
  state.raizBlocks.splice(target, 0, block);
  state.activeRaizBlockId = block.id;
  syncRaizTextoFromBlocks({ rerenderEditor: true });
}

function removeRaizBlock(blockId) {
  if (state.raizBlocks.length <= 1) {
    showSnackbar("O documento precisa ter pelo menos um bloco.");
    return;
  }
  state.raizBlocks = state.raizBlocks.filter((block) => block.id !== blockId);
  state.activeRaizBlockId = state.raizBlocks[0]?.id || null;
  syncRaizTextoFromBlocks({ rerenderEditor: true });
}

function statusBadgeClass(status) {
  const statusClass = {
    Atrasado: "danger",
    "Em andamento": "success",
    Bloqueado: "danger",
    "Aguardando aprovação": "warning",
    "Concluído": "alert",
  };
  return statusClass[status] || "";
}

function isTaskOverdue(task) {
  const hoje = "2026-06-02";
  return task.prazo < hoje && task.status !== "Concluído";
}

function hasRaizImpact(task) {
  const texto = `${task.bloqueio || ""} ${(task.riscos || []).join(" ")}`.toLowerCase();
  return texto.includes("raiz");
}

function hasActiveBlocking(task) {
  return task.status === "Bloqueado" || !String(task.bloqueio || "").toLowerCase().includes("sem bloqueio");
}

function clearQuickFilters() {
  state.quickFilter = "";
}

function clearAllFilters() {
  els.filtroBusca.value = "";
  els.filtroEquipe.value = "";
  els.filtroStatus.value = "";
  els.filtroPrioridade.value = "";
  els.filtroSelo.value = "";
  els.filtroSegmento.value = "";
  clearQuickFilters();
  renderTabela();
  renderDashboardGeral();
  showSnackbar("Filtros limpos. Exibindo visão completa.");
}

function updateFiltersHint() {
  if (!els.filtrosHint) return;

  const active = [];
  if (els.filtroBusca.value.trim()) active.push(`busca: ${els.filtroBusca.value.trim()}`);
  if (els.filtroEquipe.value) active.push(`equipe: ${els.filtroEquipe.value}`);
  if (els.filtroStatus.value) active.push(`status: ${els.filtroStatus.value}`);
  if (els.filtroPrioridade.value) active.push(`prioridade: ${els.filtroPrioridade.value}`);
  if (els.filtroSelo.value) active.push(`selo: ${els.filtroSelo.value}`);
  if (els.filtroSegmento.value) active.push(`segmento: ${els.filtroSegmento.value}`);
  if (state.quickFilter === "bloqueio-ativo") active.push("bloqueio ativo");
  if (state.quickFilter === "impacto-raiz") active.push("impacto na raiz");

  if (!active.length) {
    els.filtrosHint.textContent = "Sem filtros ativos: visão completa do fluxo editorial.";
    return;
  }

  els.filtrosHint.textContent = `Filtros ativos (${active.length}): ${active.join(" | ")}.`;
}

function openAtalhosModal() {
  if (!els.atalhosModal) return;
  els.atalhosModal.classList.remove("hidden");
}

function closeAtalhosModal() {
  if (!els.atalhosModal) return;
  els.atalhosModal.classList.add("hidden");
}

function isTypingContext(target) {
  if (!target) return false;
  return target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.tagName === "SELECT" || target.isContentEditable;
}

function handleGlobalShortcuts(event) {
  const key = event.key;
  const typing = isTypingContext(event.target);

  if (!typing && key === "?") {
    event.preventDefault();
    openAtalhosModal();
    return;
  }

  if (key === "Escape") {
    if (els.atalhosModal && !els.atalhosModal.classList.contains("hidden")) {
      closeAtalhosModal();
      return;
    }
    if (!els.commentDetailModal.classList.contains("hidden")) {
      closeCommentDetail();
      return;
    }
    if (!els.comentarioModal.classList.contains("hidden")) {
      closeComentarioModal();
      return;
    }
    if (!els.commentsDrawer.classList.contains("hidden")) {
      closeCommentsDrawer();
      return;
    }
    if (state.stampMode) {
      setStampMode(false);
      showSnackbar("Modo stamp desativado.");
    }
    return;
  }

  if (typing) return;

  if (key === "/") {
    event.preventDefault();
    openScreen("geral");
    els.filtroBusca.focus();
    els.filtroBusca.select();
    return;
  }

  if (event.altKey && key === "1") {
    event.preventDefault();
    openScreen("geral");
    return;
  }

  if (event.altKey && key === "2") {
    event.preventDefault();
    openScreen("edicao");
    return;
  }

  if (event.altKey && key === "3") {
    event.preventDefault();
    openNotificacoesFeed();
  }
}

function openNotificacoesFeed() {
  state.notifFilter = "all";
  els.notifBtns.forEach((btn) => btn.classList.toggle("active", btn.dataset.notifFilter === "all"));
  openScreen("notificacoes");
  renderNotificacoes();
}

function applyDashboardAction(action) {
  if (action === "comentarios") {
    openNotificacoesFeed();
    return;
  }

  openScreen("geral");
  clearQuickFilters();

  if (action === "atrasadas") {
    els.filtroStatus.value = "Atrasado";
  } else if (action === "bloqueios") {
    state.quickFilter = "bloqueio-ativo";
    els.filtroStatus.value = "";
    setGeralView("operacional");
  } else if (action === "impactos") {
    state.quickFilter = "impacto-raiz";
    els.filtroStatus.value = "";
    setGeralView("operacional");
  }

  renderTabela();
  renderDashboardGeral();
}

function normalizeEtapa(etapa) {
  return (etapa || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getTaskById(taskId) {
  return state.tarefasProjeto.find((t) => t.id === taskId);
}

function getTaskByDisciplinaEtapa(disciplina, etapa) {
  return state.tarefasProjeto.find((t) => t.disciplina === disciplina && t.etapa === etapa);
}

function renderKpis(tarefasFiltradas = state.tarefasProjeto) {
  const hoje = "2026-06-02";
  const emAndamento = tarefasFiltradas.filter((t) => t.status === "Em andamento").length;
  const bloqueados = tarefasFiltradas.filter((t) => t.status === "Bloqueado").length;
  const atrasados = tarefasFiltradas.filter((t) => t.prazo < hoje && t.status !== "Concluído").length;
  const alertas = tarefasFiltradas.reduce((acc, t) => acc + (Number(t.alertasEmergenciais) || 0), 0);

  els.kpis.innerHTML = `
    <div class="kpi"><small>Em andamento</small><strong>${emAndamento}</strong></div>
    <div class="kpi"><small>Atrasados</small><strong>${atrasados}</strong></div>
    <div class="kpi"><small>Bloqueios</small><strong>${bloqueados}</strong></div>
    <div class="kpi"><small>Alertas emergenciais</small><strong>${alertas}</strong></div>
  `;
}

function renderDashboardGeral() {
  if (!els.dashAtrasadas || !els.fluxoEtapas) return;

  const tarefasFiltradas = getTarefasFiltradas();
  const tarefasAtrasadas = tarefasFiltradas.filter((t) => isTaskOverdue(t)).length;
  const bloqueiosAtivos = tarefasFiltradas.filter((t) => hasActiveBlocking(t)).length;
  const comentariosAbertos = state.comentarios.filter((c) => !c.resolvido).length;
  const impactosLayout = tarefasFiltradas.filter((t) => hasRaizImpact(t)).length;

  els.dashAtrasadas.textContent = String(tarefasAtrasadas);
  els.dashBloqueios.textContent = String(bloqueiosAtivos);
  els.dashComentarios.textContent = String(comentariosAbertos);
  els.dashImpactos.textContent = String(impactosLayout);

  if (els.fluxoResumo) {
    els.fluxoResumo.textContent = `${tarefasFiltradas.length} tarefa(s) encontradas, ${tarefasAtrasadas} atrasada(s), ${bloqueiosAtivos} com bloqueio ativo.`;
  }
  if (els.operacionalResumo) {
    els.operacionalResumo.textContent = `${tarefasFiltradas.length} tarefa(s) no detalhamento operacional com os filtros atuais.`;
  }
  if (els.filtrosHint) {
    updateFiltersHint();
  }

  els.fluxoEtapas.innerHTML = state.fluxosEditoriais
    .map((etapaNome) => {
      const etapaNorm = normalizeEtapa(etapaNome);
      const totalEtapa = tarefasFiltradas.filter((t) => normalizeEtapa(t.etapa) === etapaNorm).length;
      const concluidasEtapa = tarefasFiltradas.filter(
        (t) => normalizeEtapa(t.etapa) === etapaNorm && t.status === "Concluído",
      ).length;

      return `
        <article class="etapa-item">
          <div class="etapa-top">
            <strong>${etapaNome}</strong>
            <span class="badge">${concluidasEtapa}/${totalEtapa || 0}</span>
          </div>
          <small class="etapa-meta">${totalEtapa || 0} tarefa(s) vinculada(s)</small>
          <div class="etapa-placeholder" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <p class="etapa-hint">Espaço reservado para subitens em formato sanfona.</p>
        </article>
      `;
    })
    .join("");

  updateFluxoScrollControls();
}

function getItensFiltrados() {
  const busca = els.filtroBusca.value.toLowerCase().trim();
  const equipe = els.filtroEquipe.value;
  const status = els.filtroStatus.value;
  const prioridade = els.filtroPrioridade.value;
  const selo = els.filtroSelo.value;
  const segmento = els.filtroSegmento.value;

  return state.itens.filter((item) => {
    if (busca && !item.projeto.toLowerCase().includes(busca)) return false;
    if (equipe && item.equipe !== equipe) return false;
    if (status && item.status !== status) return false;
    if (prioridade && item.prioridade !== prioridade) return false;
    if (selo && item.selo !== selo) return false;
    if (segmento && item.segmento !== segmento) return false;
    return true;
  });
}

function getTarefasFiltradas() {
  const busca = els.filtroBusca.value.toLowerCase().trim();
  const equipe = els.filtroEquipe.value;
  const status = els.filtroStatus.value;
  const prioridade = els.filtroPrioridade.value;
  const selo = els.filtroSelo.value;
  const segmento = els.filtroSegmento.value;

  return state.tarefasProjeto.filter((task) => {
    const alvoBusca = `${task.projeto} ${task.disciplina} ${task.titulo} ${task.selo} ${task.segmento}`.toLowerCase();
    if (busca && !alvoBusca.includes(busca)) return false;
    if (equipe && task.equipe !== equipe) return false;
    if (status === "Atrasado" && !isTaskOverdue(task)) return false;
    if (status && status !== "Atrasado" && task.status !== status) return false;
    if (prioridade && task.prioridade !== prioridade) return false;
    if (selo && task.selo !== selo) return false;
    if (segmento && task.segmento !== segmento) return false;
    if (state.quickFilter === "bloqueio-ativo" && !hasActiveBlocking(task)) return false;
    if (state.quickFilter === "impacto-raiz" && !hasRaizImpact(task)) return false;
    return true;
  });
}

function setGeralView(viewKey) {
  state.geralView = viewKey;
  const fluxoAtivo = viewKey === "fluxo";

  els.viewFluxo.classList.toggle("active", fluxoAtivo);
  els.viewOperacional.classList.toggle("active", !fluxoAtivo);
  els.viewFluxo.setAttribute("aria-hidden", String(!fluxoAtivo));
  els.viewOperacional.setAttribute("aria-hidden", String(fluxoAtivo));

  els.viewTabs.forEach((btn) => {
    const ativo = btn.dataset.view === viewKey;
    btn.classList.toggle("active", ativo);
    btn.setAttribute("aria-selected", String(ativo));
  });

  updateFluxoScrollControls();
}

function updateFluxoScrollControls() {
  if (!els.fluxoScroll || !els.fluxoScrollPrev || !els.fluxoScrollNext) return;

  const canScroll = els.fluxoScroll.scrollWidth > els.fluxoScroll.clientWidth + 2;
  const atStart = els.fluxoScroll.scrollLeft <= 2;
  const atEnd = els.fluxoScroll.scrollLeft + els.fluxoScroll.clientWidth >= els.fluxoScroll.scrollWidth - 2;

  els.fluxoScrollPrev.disabled = !canScroll || atStart;
  els.fluxoScrollNext.disabled = !canScroll || atEnd;
}

function scrollFluxoEtapas(direction) {
  if (!els.fluxoScroll) return;
  const step = Math.max(220, Math.round(els.fluxoScroll.clientWidth * 0.8));
  els.fluxoScroll.scrollBy({ left: step * direction, behavior: "smooth" });
}

function renderTabela() {
  const tarefas = getTarefasFiltradas();
  updateFiltersHint();
  renderKpis(tarefas);

  if (!tarefas.length) {
    els.tabelaItens.innerHTML = `
      <tr>
        <td colspan="8" class="empty-row">
          <strong>Nenhuma tarefa encontrada com os filtros atuais.</strong>
          <span>Limpe os filtros para voltar à visão completa do fluxo.</span>
          <button type="button" class="mini-btn empty-action" data-empty-action="limpar-filtros">Limpar filtros</button>
        </td>
      </tr>
    `;
    return;
  }

  els.tabelaItens.innerHTML = tarefas
    .map(
      (t) => {
        const statusVisual = isTaskOverdue(t) ? "Atrasado" : t.status;
        const mostrarTagBloqueio = hasActiveBlocking(t) && statusVisual !== "Bloqueado";

        return `
      <tr>
        <td>${t.titulo}</td>
        <td>${t.equipe}</td>
        <td>
          <div class="status-badges">
            <span class="badge ${statusBadgeClass(statusVisual)}">${statusVisual}</span>
            ${mostrarTagBloqueio ? '<span class="badge warning">Com bloqueio</span>' : ""}
          </div>
        </td>
        <td>${t.prazo}</td>
        <td>${t.etapa}</td>
        <td>${t.selo || "-"}</td>
        <td>${t.segmento || "-"}</td>
        <td>
          <button class="mini-btn" onclick="abrirTarefa('${t.id}')">Abrir tarefa</button>
        </td>
      </tr>
    `;
      },
    )
    .join("");
}

function renderNotificacoes() {
  const isGestorArte = state.perfil === "admin";
  const isDiagramador = state.perfil === "diagramador";

  let comentarios = state.comentarios.filter((c) => {
    if (isGestorArte) {
      return c.equipe === "Diagramação";
    }

    if (isDiagramador) {
      return c.equipe === "Diagramação" && ensureThread(c).length > 1;
    }

    return c.equipe === "Editorial";
  });

  if (state.notifFilter === "normal") {
    comentarios = comentarios.filter((c) => c.prioridade !== "Emergencial");
  } else if (state.notifFilter === "emergencial") {
    comentarios = comentarios.filter((c) => c.prioridade === "Emergencial");
  }

  comentarios.sort((a, b) => b.id - a.id);

  const grouped = comentarios.reduce((acc, c) => {
    const projeto = c.projeto || state.estruturaProjeto.projeto;
    if (!acc[projeto]) acc[projeto] = [];
    acc[projeto].push(c);
    return acc;
  }, {});

  const html = Object.entries(grouped)
    .map(([projeto, itens]) => {
      const cards = itens
        .map(
          (c) => `
          <li class="${c.prioridade === "Emergencial" ? "emergencial" : ""}">
            <button type="button" class="notif-item" data-comment-id="${c.id}" aria-label="Abrir comentário ${c.id} no material">
              <strong>${c.prioridade === "Emergencial" ? "Comentário emergencial" : "Comentário"}</strong>
              <p>${c.texto}</p>
              <small>${c.equipe} - ${c.alvo} - ${c.quando}</small>
            </button>
          </li>
        `,
        )
        .join("");

      return `<li class="notif-group-title">Projeto ${projeto}</li>${cards}`;
    })
    .join("");

  els.listaNotificacoes.innerHTML = html || `
    <li class="empty-notif">
      <strong>Sem notificações para esta combinação de perfil e filtro.</strong>
      <p>Você pode voltar para a lista completa com um clique.</p>
      <button type="button" class="mini-btn" data-notif-empty-action="show-all">Ver todas</button>
    </li>
  `;

  const basePerfil = state.comentarios.filter((c) => {
    if (isGestorArte) return c.equipe === "Diagramação";
    if (isDiagramador) return c.equipe === "Diagramação" && ensureThread(c).length > 1;
    return c.equipe === "Editorial";
  });
  if (els.notificacoesSubtitulo) {
    if (isGestorArte) {
      els.notificacoesSubtitulo.textContent = "Gestão de arte: comentários da equipe de Diagramação, segmentados por projeto.";
    } else if (isDiagramador) {
      els.notificacoesSubtitulo.textContent = "Diagramador: apenas comentários com atualização de thread nos seus projetos.";
    } else {
      els.notificacoesSubtitulo.textContent = "Editorial: comentários vinculados à equipe Editorial, segmentados por projeto.";
    }
  }
}

function openComentarioViaNotificacao(commentId) {
  const comment = state.comentarios.find((c) => c.id === commentId);
  if (!comment) return;

  closeComentarioModal();
  setStampMode(false);
  openScreen("edicao");
  goToComment(commentId);
}

function etapasPorPerfil() {
  if (state.perfil === "editor") {
    return state.estruturaProjeto.etapas.map((e) => ({
      nome: e,
      destaque: e === "Edicao" || e === "Revisao",
      leitura: e === "Diagramacao",
    }));
  }

  if (state.perfil === "diagramador") {
    return state.estruturaProjeto.etapas.map((e) => ({
      nome: e,
      destaque: e === "Diagramacao",
      leitura: e !== "Diagramacao",
    }));
  }

  return state.estruturaProjeto.etapas.map((e) => ({
    nome: e,
    destaque: false,
    leitura: false,
  }));
}

function renderEstruturaProjeto() {
  if (!els.estruturaProjeto) return;

  const etapas = etapasPorPerfil();
  const disciplinaPreferencial = state.perfil === "diagramador" ? "MAT" : null;

  els.estruturaProjeto.innerHTML = state.estruturaProjeto.disciplinas
    .map((d) => {
      const badge = disciplinaPreferencial === d.codigo ? "<span class=\"badge alert\">prioritaria</span>" : "";
      const etapasHtml = etapas
        .map((etapa) => {
          const task = getTaskByDisciplinaEtapa(d.codigo, etapa.nome);
          const taskBadge = task
            ? `<span class="badge ${statusBadgeClass(task.status)}">${task.status}</span>`
            : "<span class=\"badge\">Sem tarefa</span>";
          const classe = etapa.destaque ? "badge success" : etapa.leitura ? "badge warning" : "badge";
          const legenda = etapa.leitura ? "<span class=\"stage-muted\">somente leitura</span>" : "";
          const action = task
            ? `<button type="button" class="task-link" data-task-id="${task.id}">Abrir tarefa</button>`
            : "";
          return `
            <li>
              <div class="stage-row">
                <span class="${classe}">${etapa.nome}</span>
                ${taskBadge}
              </div>
              <div class="stage-row">
                ${legenda}
                ${action}
              </div>
            </li>
          `;
        })
        .join("");

      return `
        <li>
          <div class="project-node">
            <strong>${d.codigo}</strong>
            ${badge}
          </div>
          <ul class="stages">${etapasHtml}</ul>
        </li>
      `;
    })
    .join("");
}

function perfilActions(task) {
  if (state.perfil === "editor") {
    return [
      `Revisar texto raiz da etapa ${task.etapa}`,
      "Responder comentários atribuídos à Editorial",
      "Solicitar ajuste de layout com impacto de texto",
    ];
  }

  if (state.perfil === "diagramador") {
    return [
      "Validar quebra de página e viúvas/órfãs",
      "Consolidar pendências de layout para aprovação",
      "Atualizar status de diagramação e bloqueios visuais",
    ];
  }

  return [
    "Repriorizar tarefa e realocar responsável",
    "Escalonar bloqueios com impacto de prazo",
    "Acompanhar SLA, risco e volume de comentários",
  ];
}

function renderTaskDetail(taskId) {
  const task = getTaskById(taskId);
  if (!task) return;

  if (state.currentScreen !== "tarefa") {
    state.lastScreenBeforeTask = state.currentScreen || "geral";
  }

  state.currentTaskId = taskId;
  els.tarefaBreadcrumb.textContent = `${task.projeto} > ${task.disciplina} > ${task.etapa}`;
  els.tarefaTitulo.textContent = task.titulo;
  els.tarefaSubtitulo.textContent = `Visão ${state.perfil} com dados macro da tarefa.`;

  els.taskStatus.innerHTML = `<span class="badge ${statusBadgeClass(task.status)}">${task.status}</span>`;
  els.taskPrioridade.innerHTML = `<span class="badge ${task.prioridade === "Emergencial" ? "danger" : task.prioridade === "Alta" ? "warning" : ""}">${task.prioridade}</span>`;
  els.taskPrazo.textContent = task.prazo;
  els.taskSla.textContent = task.sla;
  els.taskResponsavel.textContent = task.responsavel;
  els.taskEquipe.textContent = task.equipe;
  els.taskComentariosAbertos.textContent = String(task.comentariosAbertos);
  els.taskAlertas.textContent = String(task.alertasEmergenciais);

  els.taskEntregavel.textContent = task.entregavel;
  els.taskProgressFill.style.width = `${task.progresso}%`;
  els.taskProgresso.textContent = `${task.progresso}%`;
  els.taskUltimaAtualizacao.textContent = `Última atualização: ${task.ultimaAtualizacao}`;

  els.taskDependencias.innerHTML = task.dependencias.map((d) => `<li>${d}</li>`).join("");
  els.taskBloqueio.textContent = task.bloqueio;
  els.taskRiscos.innerHTML = task.riscos.map((r) => `<li>${r}</li>`).join("");
  els.taskAcoesPerfil.innerHTML = perfilActions(task).map((a) => `<li>${a}</li>`).join("");

  openScreen("tarefa");
}

function renderPreview() {
  const blocks = state.raizBlocks.length ? state.raizBlocks : hydrateRaizBlocksFromText(state.raizTexto);
  const tituloBlock = blocks.find((b) => b.tipo === "titulo");
  const corpoBlocks = blocks.filter((b) => b.tipo === "corpo");
  const imagemBlocks = blocks.filter((b) => b.tipo === "imagem");

  const titulo = tituloBlock?.texto || corpoBlocks[0]?.texto || "Capitulo";
  const corpoCompleto = corpoBlocks.map((b) => b.texto).join(" ").trim() || state.raizTexto;
  const resumo = (corpoCompleto || "").slice(0, 170);
  const resumoTemBold = Boolean(corpoBlocks[0]?.bold);
  const resumoHtml = resumoTemBold ? `<strong>${escapeHtml(resumo || "Texto em edição.")}</strong>` : formatInlineRaiz(resumo || "Texto em edição.");
  const tituloRender = tituloBlock?.bold ? `<strong>${escapeHtml(titulo)}</strong>` : escapeHtml(titulo);

  let corpoIndexVisual = 0;
  const preLayoutFlow = blocks
    .map((block) => {
      if (block.tipo === "titulo") {
        return `
          <h2 class="pre-doc-heading ${corpoIndexVisual === 0 ? "lead" : "section"}">${block.bold ? `<strong>${escapeHtml(block.texto)}</strong>` : escapeHtml(block.texto)}</h2>
        `;
      }

      if (block.tipo === "imagem") {
        return `
          <article class="pre-doc-image-card" aria-label="Box de imagem">
            <span class="material-symbols-rounded" aria-hidden="true">menu_book</span>
            <div>
              <strong>Mock Imagem: ${escapeHtml(block.texto)}</strong>
              <small>Aprovado</small>
            </div>
          </article>
        `;
      }

      const isFirstBody = corpoIndexVisual === 0;
      corpoIndexVisual += 1;
      const content = block.bold ? `<strong>${escapeHtml(block.texto)}</strong>` : formatInlineRaiz(block.texto);
      return `
        <p class="pre-doc-paragraph ${isFirstBody ? "dropcap" : ""}">${content}</p>
      `;
    })
    .join("");

  const imagemBoxes = imagemBlocks.length
    ? imagemBlocks
      .map(
        (img, idx) => `
          <div class="raiz-image-box" aria-label="Box de imagem ${idx + 1}">
            <span>Imagem ${idx + 1}</span>
            <strong>${escapeHtml(img.texto)}</strong>
          </div>
        `,
      )
      .join("")
    : `
      <div class="raiz-image-box muted" aria-label="Box de imagem sugerido">
        <span>Imagem sugerida</span>
        <strong>Use [imagem: descricao] no arquivo raiz para reservar boxes no layout.</strong>
      </div>
    `;

  if (state.layoutTab === "html") {
    els.layoutPreview.innerHTML = `
      <article class="layout-sheet html-sheet">
        <div class="layout-code-head">
          <span class="layout-dot"></span>
          <span class="layout-dot"></span>
          <span class="layout-dot"></span>
          <small>preview html do livro digital</small>
        </div>
        <div class="html-frame">
          <span class="html-chip">article.lesson</span>
          <h1>${tituloRender}</h1>
          <p>${resumoHtml}...</p>
          <div class="html-callout">
            <strong>Box multimidia</strong>
            <p>Componente reaproveitado para versao digital com destaque e navegacao lateral.</p>
          </div>
          <div class="raiz-image-list">${imagemBoxes}</div>
          <div class="html-meta">
            <span>leitura guiada</span>
            <span>glossario</span>
            <span>atividade interativa</span>
          </div>
        </div>
      </article>
    `;
  } else if (state.layoutTab === "diag") {
    els.layoutPreview.innerHTML = `
      <article class="layout-sheet diag-sheet">
        <div class="diag-header">
          <small>abertura de unidade</small>
          <span class="badge warning">em fechamento</span>
        </div>
        <div class="diag-columns">
          <section>
            <h1>${tituloRender}</h1>
            <p class="lead">${resumoHtml}...</p>
            <div class="figure-card">
              <div class="figure-thumb"></div>
              <div>
                <strong>Imagem principal</strong>
                <p>Legenda diagramada com hierarquia visual e area para observacoes do time.</p>
              </div>
            </div>
            <div class="raiz-image-list">${imagemBoxes}</div>
          </section>
          <aside>
            <div class="side-note">
              <small>box lateral</small>
              <strong>Conexão com a prática</strong>
              <p>Area reservada para destaque pedagógico e chamada de atividade.</p>
            </div>
            <div class="mini-grid">
              <span>titulo</span>
              <span>imagem</span>
              <span>legenda</span>
              <span>atividade</span>
            </div>
          </aside>
        </div>
      </article>
    `;
  } else {
    els.layoutPreview.innerHTML = `
      <article class="layout-sheet pre-sheet editorial-preview">
        <div class="pre-doc-head">
          <small>SEÇÃO: ABERTURA</small>
          <small>PÁGINA 2</small>
        </div>
        <div class="pre-doc-body">
          ${preLayoutFlow}
        </div>
      </article>
    `;
  }

  els.layoutPreview.className = `preview ${state.layoutTab}`;
  if (state.stampMode) {
    els.layoutPreview.classList.add("stamp-enabled");
  }
  renderLayoutStamps();
}

function getVisibleComentarios() {
  let comentarios = state.comentarios;

  if (state.perfil === "editor") {
    comentarios = comentarios.filter((c) => c.equipe === "Editorial");
  } else if (state.perfil === "diagramador") {
    comentarios = comentarios.filter((c) => c.equipe === "Diagramação");
  }

  if (state.commentStatusFilter === "aberto") {
    comentarios = comentarios.filter((c) => !c.resolvido);
  } else if (state.commentStatusFilter === "resolvido") {
    comentarios = comentarios.filter((c) => c.resolvido);
  }

  if (state.commentTeamFilter !== "todas") {
    comentarios = comentarios.filter((c) => c.equipe === state.commentTeamFilter);
  }

  return comentarios;
}

function applyPermissions() {
  const perfil = state.perfil;
  const canEditRaiz = perfil === "admin" || perfil === "editor";
  const canEditLayout = perfil === "diagramador";

  els.arquivoRaiz.readOnly = !canEditRaiz;
  [els.btnRaizTitulo, els.btnRaizCorpo, els.btnRaizBold, els.btnRaizImagem].forEach((btn) => {
    if (btn) btn.disabled = !canEditRaiz;
  });
  els.raizHint.textContent = canEditRaiz
    ? "Edite em blocos como no Word: escolha o tipo (titulo, corpo ou box de imagem) e veja o pre-layout responder em tempo real."
    : "Somente leitura: este perfil nao pode editar o arquivo raiz.";

  els.layoutHint.textContent = canEditLayout
    ? "Diagramador pode editar layout (simulado no MVP)."
    : "Layout bloqueado para este perfil; apenas visualizacao.";

  renderEstruturaProjeto();
  renderComentarios();
  renderRaizVisualEditor();
  renderPreview();
  updateRaizImpactAlert();
}

function renderComentarios() {
  const visiveis = getVisibleComentarios();
  els.historicoComentarios.innerHTML = visiveis
    .map((c, idx) => {
      const thread = ensureThread(c);
      return `
      <li class="${c.prioridade === "Emergencial" ? "emergencial" : ""} ${c.resolvido ? "resolvido" : ""}">
        <div class="comment-head comment-summary-toggle" data-comment-id="${c.id}">
          <div class="comment-head-left">
            <button type="button" class="comment-chevron ${state.expandedComments[c.id] ? "expanded" : ""}" data-comment-id="${c.id}" aria-label="Expandir histórico">
              ▸
            </button>
            <strong>#${idx + 1}</strong>
          </div>
          <div class="comment-tags">
            <span class="tag-priority ${
              c.prioridade === "Emergencial"
                ? "danger"
                : c.prioridade === "Alta"
                  ? "warning"
                  : "default"
            }">${c.prioridade}</span>
            <span class="tag-team">${c.equipe}</span>
            <span class="tag-priority ${c.resolvido ? "success" : "default"}">${c.resolvido ? "Resolvido" : "Aberto"}</span>
          </div>
        </div>
        <p><small>${c.alvo}</small></p>
        <p>${c.texto}</p>
        <div class="comment-row">
          <div class="comment-meta">
            <small>Recebido: ${c.quando}</small>
            <small>${c.resolvido ? `Resolvido por ${c.resolvidoPor || "-"} em ${c.dataResolucao || "-"}` : "Em aberto"}</small>
            <small>${threadSummary(c)}</small>
          </div>
          <button type="button" class="mini-btn open-comment" data-comment-id="${c.id}">Gerenciar comentário</button>
        </div>
        <div class="comment-history ${state.expandedComments[c.id] ? "expanded" : ""}">
          <ul class="comment-history-list thread-list">
            ${thread.map((entry) => renderThreadItem(entry)).join("")}
          </ul>
        </div>
      </li>
    `;
    })
    .join("");

  renderCommentOverview();
  renderDashboardGeral();
}

function toggleCommentHistory(commentId) {
  state.expandedComments[commentId] = !state.expandedComments[commentId];
  renderComentarios();
}

function renderLayoutStamps() {
  els.layoutPreview.querySelectorAll(".layout-stamp").forEach((n) => n.remove());
  const stamps = getVisibleComentarios().filter(
    (c) => c.anchor?.tipo === "layout" && normalizeLayoutTab(c.anchor.tab) === state.layoutTab && !c.resolvido,
  );

  stamps.forEach((c, idx) => {
    const node = document.createElement("span");
    node.className = "layout-stamp";
    node.dataset.commentId = String(c.id);
    node.style.left = `${c.anchor.x}%`;
    node.style.top = `${c.anchor.y}%`;
    node.textContent = String(idx + 1);
    els.layoutPreview.appendChild(node);
  });
}

function setStampMode(active) {
  state.stampMode = active;
  els.btnStamp.classList.toggle("stamp-on", active);
  els.btnStamp.textContent = active ? "Modo stamp ativo" : "Adicionar comentário (stamp)";
  els.stampHint.textContent = active
    ? "Clique no layout para abrir o popup de comentário."
    : "Ative o modo stamp para marcar no layout.";
  renderPreview();
}

function openComentarioModal(anchor) {
  state.pendingAnchor = anchor;
  els.comentarioModal.classList.remove("hidden");
  els.modalContexto.textContent = `Alvo: Layout (${anchor.tab}) em ${anchor.x.toFixed(1)}%, ${anchor.y.toFixed(1)}%`;
  els.comentarioTexto.focus();
}

function closeComentarioModal() {
  els.comentarioModal.classList.add("hidden");
  state.pendingAnchor = null;
  els.comentarioTexto.value = "";
  els.comentarioEquipe.value = "";
  els.comentarioPrioridade.value = "Média";
}

function renderCommentOverview() {
  if (!els.comentariosVisiveis || !els.comentariosTotais || !els.comentariosEmergenciais || !els.commentMap || !els.visaoPerfilHint) {
    return;
  }

  const visiveis = getVisibleComentarios();
  const emergenciais = visiveis.filter((c) => c.prioridade === "Emergencial").length;

  els.comentariosVisiveis.textContent = String(visiveis.length);
  els.comentariosTotais.textContent = String(state.comentarios.length);
  els.comentariosEmergenciais.textContent = String(emergenciais);

  const perfilLabel = {
    admin: "Admin: visualiza todos os comentários recebidos pelas equipes.",
    editor: "Editor: visualiza apenas comentários atribuídos ao time Editorial.",
    diagramador: "Diagramador: visualiza apenas comentários atribuídos ao time de Diagramação.",
  };
  els.visaoPerfilHint.textContent = perfilLabel[state.perfil] || "";

  if (!visiveis.length) {
    els.commentMap.innerHTML = "<li class=\"empty-map\">Nenhum comentário visível para este perfil.</li>";
    return;
  }

  els.commentMap.innerHTML = visiveis
    .map(
      (c, idx) => `
      <li class="${c.prioridade === "Emergencial" ? "emergencial" : ""}">
        <button type="button" class="open-comment" data-comment-id="${c.id}">
          #${idx + 1} ${c.alvo} - ${c.equipe}
        </button>
      </li>
    `,
    )
    .join("");
}

function prioridadeTagClass(prioridade) {
  if (prioridade === "Emergencial") return "danger";
  if (prioridade === "Alta") return "warning";
  return "default";
}

function renderDetailThread(comment) {
  const thread = ensureThread(comment);
  if (!thread.length) {
    els.detailThreadList.innerHTML = "<li class=\"thread-empty\">Sem mensagens neste thread.</li>";
    return;
  }
  els.detailThreadList.innerHTML = thread.map((entry) => renderThreadItem(entry)).join("");
}

function addThreadMessage() {
  const comment = state.comentarios.find((c) => c.id === state.activeCommentId);
  if (!comment) return;
  const texto = els.detailThreadInput.value.trim();
  if (!texto) return;

  const thread = ensureThread(comment);
  thread.push({
    tipo: "demanda",
    texto,
    autor: getActorByPerfil(),
    equipe: comment.equipe,
    quando: "agora",
  });
  comment.quando = "agora";
  els.detailThreadInput.value = "";

  renderComentarios();
  renderDetailThread(comment);
}

function openCommentDetail(commentId) {
  const visiveis = getVisibleComentarios();
  const comment = visiveis.find((c) => c.id === commentId);
  if (!comment) return;

  const order = visiveis.findIndex((c) => c.id === commentId) + 1;
  state.activeCommentId = commentId;

  els.detailNumero.textContent = `#${order}`;
  els.detailPrioridade.className = `tag-priority ${prioridadeTagClass(comment.prioridade)}`;
  els.detailPrioridade.textContent = comment.prioridade;
  els.detailEquipe.textContent = comment.equipe;
  els.detailStatus.className = `tag-priority ${comment.resolvido ? "success" : "default"}`;
  els.detailStatus.textContent = comment.resolvido ? "Resolvido" : "Aberto";
  els.detailAlvo.textContent = comment.alvo;
  els.detailTexto.textContent = comment.texto;
  els.detailResolutionMeta.textContent = comment.resolvido
    ? `Resolvido por ${comment.resolvidoPor || "-"} em ${comment.dataResolucao || "-"}`
    : "Comentário ainda em aberto.";
  renderDetailThread(comment);
  els.detailThreadInput.value = "";
  els.devolverEquipe.value = comment.equipe;

  els.btnResolverComentario.disabled = comment.resolvido;
  els.commentDetailModal.classList.remove("hidden");
}

function closeCommentDetail() {
  els.commentDetailModal.classList.add("hidden");
  state.activeCommentId = null;
  els.detailThreadInput.value = "";
}

function openCommentsDrawer() {
  state.commentStatusFilter = "todos";
  state.commentTeamFilter = "todas";
  if (els.filtroComentariosStatus) {
    els.filtroComentariosStatus.value = "todos";
  }
  if (els.filtroComentariosEquipe) {
    els.filtroComentariosEquipe.value = "todas";
  }
  renderComentarios();
  renderPreview();
  els.commentsDrawer.classList.remove("hidden");
}

function closeCommentsDrawer() {
  els.commentsDrawer.classList.add("hidden");
}

function resolveActiveComment() {
  const comment = state.comentarios.find((c) => c.id === state.activeCommentId);
  if (!comment || comment.resolvido) return;
  comment.resolvido = true;
  comment.quando = "agora";
  comment.resolvidoPor = getActorByPerfil();
  comment.dataResolucao = "agora";
  const thread = ensureThread(comment);
  const nota = els.detailThreadInput.value.trim();
  thread.push({
    tipo: "resolvido",
    texto: nota || "Comentário resolvido e encerrado.",
    autor: comment.resolvidoPor,
    equipe: comment.equipe,
    quando: "agora",
  });
  els.detailThreadInput.value = "";
  renderComentarios();
  renderPreview();
  openCommentDetail(comment.id);
  showSnackbar("Comentário resolvido com sucesso.");
}

function returnActiveCommentToArea() {
  const comment = state.comentarios.find((c) => c.id === state.activeCommentId);
  if (!comment) return;
  const novaEquipe = els.devolverEquipe.value;
  if (!novaEquipe || novaEquipe === comment.equipe) return;

  const equipeAnterior = comment.equipe;
  comment.equipe = novaEquipe;
  comment.resolvido = false;
  comment.quando = "agora";
  comment.resolvidoPor = "";
  comment.dataResolucao = "";
  const thread = ensureThread(comment);
  const nota = els.detailThreadInput.value.trim();
  thread.push({
    tipo: "handoff",
    texto: nota || `Demanda redirecionada para ${novaEquipe}.`,
    autor: getActorByPerfil(),
    equipeOrigem: equipeAnterior,
    equipeDestino: novaEquipe,
    quando: "agora",
  });
  els.detailThreadInput.value = "";
  addNotificacao("normal", `${novaEquipe} recebeu devolutiva de comentário no ${comment.alvo}.`);

  renderComentarios();
  renderPreview();
  closeCommentDetail();
  showSnackbar(`Comentário devolvido para ${novaEquipe}.`);
}

function highlightTarget(node) {
  node.classList.add("jump-highlight");
  setTimeout(() => node.classList.remove("jump-highlight"), 1200);
}

function goToComment(commentId) {
  const comment = getVisibleComentarios().find((c) => c.id === commentId);
  if (!comment) return;

  state.layoutTab = normalizeLayoutTab(comment.anchor.tab);
  els.tabBtns.forEach((b) => b.classList.toggle("active", b.dataset.layoutTab === state.layoutTab));
  renderPreview();
  const marker = els.layoutPreview.querySelector(`[data-comment-id=\"${commentId}\"]`);
  if (marker) highlightTarget(marker);
  els.layoutPreview.scrollIntoView({ behavior: "smooth", block: "center" });
}

function saveComentario(forceEmergencial = false) {
  const texto = els.comentarioTexto.value.trim();
  const equipe = els.comentarioEquipe.value;
  const prioridade = forceEmergencial ? "Emergencial" : els.comentarioPrioridade.value;

  if (!texto || !equipe) {
    showSnackbar("Comentário e atribuição de equipe são obrigatórios.");
    return false;
  }

  if (!state.pendingAnchor) {
    showSnackbar("Escolha primeiro um alvo no layout.");
    return false;
  }

  const alvo = `Layout ${state.pendingAnchor.tab}`;

  state.comentarios.unshift({
    id: state.nextCommentId++,
    texto,
    equipe,
    prioridade,
    resolvido: false,
    quando: "agora",
    thread: [
      {
        tipo: "demanda",
        texto: `Comentário criado e atribuído para ${equipe}.`,
        autor: getActorByPerfil(),
        equipe,
        quando: "agora",
      },
    ],
    anchor: { ...state.pendingAnchor },
    alvo,
  });

  renderComentarios();
  renderPreview();

  addNotificacao(
    prioridade === "Emergencial" ? "emergencial" : "normal",
    `${equipe} recebeu uma solicitacao: ${texto.slice(0, 72)}${texto.length > 72 ? "..." : ""}`,
  );

  if (prioridade === "Emergencial") {
    addNotificacao(
      "emergencial",
      "Evento nao previsto no fluxo com potencial de mudanca estrutural no arquivo raiz. Gestores notificados.",
    );
  }

  closeComentarioModal();
  setStampMode(false);
  showSnackbar(prioridade === "Emergencial" ? "Comentário emergencial enviado." : "Comentário salvo e enviado para a equipe.");
  return true;
}

function evaluateSubstantialChange(newText) {
  const hasPageBreakImpact = state.raizBlocks.length > 2;

  if (hasPageBreakImpact && !state.raizPageBreakAlertActive && !state.raizPageBreakAcknowledged) {
    addNotificacao("emergencial", RAIZ_PAGE_BREAK_MESSAGE);
    showSnackbar(RAIZ_PAGE_BREAK_MESSAGE);
    state.raizPageBreakAlertActive = true;
  }

  if (!hasPageBreakImpact) {
    state.raizPageBreakAlertActive = false;
    state.raizPageBreakAcknowledged = false;
  }

  if (els.raizImpactMessage) {
    els.raizImpactMessage.textContent = RAIZ_PAGE_BREAK_MESSAGE;
  }
  updateRaizImpactAlert();

  const baseline = state.raizBaselineWords || wordsCount(newText);
  const now = wordsCount(newText);
  const delta = Math.abs(now - baseline) / Math.max(baseline, 1);

  if (delta >= 0.2) {
    addNotificacao(
      "emergencial",
      "Alteracao substancial no arquivo raiz com potencial impacto de diagramacao (viuva/orfa/quebra de pagina).",
    );
    state.raizBaselineWords = now;
  }
}

function abrirEdicao(projeto) {
  openScreen("edicao");
  addNotificacao("normal", `Tela de edicao aberta para ${projeto}.`);
}

window.abrirEdicao = abrirEdicao;

function abrirTarefa(taskId) {
  renderTaskDetail(Number(taskId));
}

window.abrirTarefa = abrirTarefa;

function init() {
  openScreen(state.currentScreen);
  state.raizBaselineWords = wordsCount(state.raizTexto);
  state.layoutTab = normalizeLayoutTab(state.layoutTab);
  state.raizBlocks = hydrateRaizBlocksFromText(state.raizTexto);
  state.activeRaizBlockId = state.raizBlocks[0]?.id || null;
  captureStableRaizSnapshot();
  els.arquivoRaiz.value = state.raizTexto;
  renderRaizVisualEditor();

  els.navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openScreen(btn.dataset.screen);
    });
  });

  if (els.btnBellNotificacoes) {
    els.btnBellNotificacoes.addEventListener("click", () => {
      openNotificacoesFeed();
    });
  }

  els.btnExportarRelatorio.addEventListener("click", () => {
    addNotificacao("normal", "Exportação de relatório solicitada no painel de inteligência editorial.");
    showSnackbar("Exportação iniciada. Você receberá atualização nas notificações.");
  });

  els.btnVoltarNotificacoes.addEventListener("click", () => {
    openScreen(state.lastScreenBeforeTask || "geral");
  });

  if (els.btnVoltarTelaGeral) {
    els.btnVoltarTelaGeral.addEventListener("click", () => {
      openScreen("geral");
    });
  }

  els.perfil.addEventListener("change", (e) => {
    state.perfil = e.target.value;
    applyPermissions();
  });

  [els.filtroBusca, els.filtroEquipe, els.filtroStatus, els.filtroPrioridade, els.filtroSelo, els.filtroSegmento].forEach((f) =>
    f.addEventListener("input", () => {
      if (state.quickFilter === "impacto-raiz") {
        state.quickFilter = "";
      }
      renderTabela();
      renderDashboardGeral();
    }),
  );

  els.dashCards.forEach((card) => {
    const action = card.dataset.dashAction;
    card.addEventListener("click", () => applyDashboardAction(action));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        applyDashboardAction(action);
      }
    });
  });

  els.viewTabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      setGeralView(btn.dataset.view);
    });
  });

  if (els.fluxoScrollPrev && els.fluxoScrollNext && els.fluxoScroll) {
    els.fluxoScrollPrev.addEventListener("click", () => scrollFluxoEtapas(-1));
    els.fluxoScrollNext.addEventListener("click", () => scrollFluxoEtapas(1));
    els.fluxoScroll.addEventListener("scroll", updateFluxoScrollControls, { passive: true });
    window.addEventListener("resize", updateFluxoScrollControls);
  }

  els.notifBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.notifBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.notifFilter = btn.dataset.notifFilter;
      renderNotificacoes();
    });
  });

  els.listaNotificacoes.addEventListener("click", (e) => {
    const emptyActionBtn = e.target.closest("[data-notif-empty-action='show-all']");
    if (emptyActionBtn) {
      state.notifFilter = "all";
      els.notifBtns.forEach((btn) => btn.classList.toggle("active", btn.dataset.notifFilter === "all"));
      renderNotificacoes();
      return;
    }

    const btn = e.target.closest(".notif-item");
    if (!btn) return;
    openComentarioViaNotificacao(Number(btn.dataset.commentId));
  });

  els.tabelaItens.addEventListener("click", (e) => {
    const actionBtn = e.target.closest("[data-empty-action='limpar-filtros']");
    if (!actionBtn) return;
    clearAllFilters();
  });

  if (els.estruturaProjeto) {
    els.estruturaProjeto.addEventListener("click", (e) => {
      const btn = e.target.closest(".task-link");
      if (!btn) return;
      renderTaskDetail(Number(btn.dataset.taskId));
    });
  }

  els.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.layoutTab = normalizeLayoutTab(btn.dataset.layoutTab);
      renderPreview();
    });
  });

  els.arquivoRaiz.addEventListener("input", (e) => {
    syncRaizFromTextarea();
  });

  if (els.btnRaizTitulo) {
    els.btnRaizTitulo.addEventListener("click", () => {
      addRaizBlock("titulo");
    });
  }

  if (els.btnRaizCorpo) {
    els.btnRaizCorpo.addEventListener("click", () => {
      addRaizBlock("corpo");
    });
  }

  if (els.btnRaizBold) {
    els.btnRaizBold.addEventListener("click", applyRaizBold);
  }

  if (els.btnRaizImagem) {
    els.btnRaizImagem.addEventListener("click", () => {
      addRaizBlock("imagem");
    });
  }

  if (els.btnRaizImpactSignal) {
    els.btnRaizImpactSignal.addEventListener("click", signalRaizImpact);
  }

  if (els.btnRaizImpactRevert) {
    els.btnRaizImpactRevert.addEventListener("click", revertRaizImpactChange);
  }

  if (els.raizVisualEditor) {
    els.raizVisualEditor.addEventListener("focusin", (e) => {
      const block = e.target.closest(".raiz-block");
      if (!block) return;
      state.activeRaizBlockId = Number(block.dataset.blockId);
      paintActiveRaizBlock();
    });

    els.raizVisualEditor.addEventListener("input", (e) => {
      const blockEl = e.target.closest(".raiz-block");
      if (!blockEl) return;
      const blockId = Number(blockEl.dataset.blockId);
      const block = state.raizBlocks.find((item) => item.id === blockId);
      if (!block) return;
      const isTextInput = e.target.matches(".raiz-block-input");
      if (!isTextInput) return;
      block.texto = e.target.isContentEditable ? e.target.textContent.trim() : e.target.value.trim();
      state.activeRaizBlockId = blockId;
      syncRaizTextoFromBlocks();
    });

    els.raizVisualEditor.addEventListener("change", (e) => {
      if (!e.target.matches(".raiz-block-type")) return;
      const blockEl = e.target.closest(".raiz-block");
      if (!blockEl) return;
      const blockId = Number(blockEl.dataset.blockId);
      const block = state.raizBlocks.find((item) => item.id === blockId);
      if (!block) return;
      block.tipo = e.target.value;
      if (block.tipo === "imagem") {
        block.bold = false;
      }
      state.activeRaizBlockId = blockId;
      syncRaizTextoFromBlocks({ rerenderEditor: true });
    });

    els.raizVisualEditor.addEventListener("click", (e) => {
      const blockEl = e.target.closest(".raiz-block");
      if (!blockEl) return;
      const blockId = Number(blockEl.dataset.blockId);
      state.activeRaizBlockId = blockId;

      const actionBtn = e.target.closest("button[data-action]");
      if (!actionBtn) {
        paintActiveRaizBlock();
        return;
      }

      const action = actionBtn.dataset.action;
      if (action === "up") moveRaizBlock(blockId, -1);
      if (action === "down") moveRaizBlock(blockId, 1);
      if (action === "remove") removeRaizBlock(blockId);
    });
  }

  els.btnStamp.addEventListener("click", () => {
    setStampMode(!state.stampMode);
  });

  els.btnHistorico.addEventListener("click", () => {
    openCommentsDrawer();
  });

  els.fecharHistorico.addEventListener("click", () => {
    closeCommentsDrawer();
  });

  els.commentsDrawerBackdrop.addEventListener("click", closeCommentsDrawer);

  els.filtroComentariosStatus.addEventListener("change", (e) => {
    state.commentStatusFilter = e.target.value;
    renderComentarios();
    renderPreview();
  });

  els.filtroComentariosEquipe.addEventListener("change", (e) => {
    state.commentTeamFilter = e.target.value;
    renderComentarios();
    renderPreview();
  });

  els.cancelarComentario.addEventListener("click", closeComentarioModal);
  els.btnFecharComentario.addEventListener("click", closeCommentDetail);
  els.btnAdicionarThread.addEventListener("click", addThreadMessage);
  els.btnResolverComentario.addEventListener("click", resolveActiveComment);
  els.btnDevolverArea.addEventListener("click", returnActiveCommentToArea);
  els.btnIrParaComentario.addEventListener("click", () => {
    if (!state.activeCommentId) return;
    goToComment(state.activeCommentId);
  });

  els.comentarioModal.addEventListener("click", (e) => {
    if (e.target === els.comentarioModal) closeComentarioModal();
  });

  els.commentDetailModal.addEventListener("click", (e) => {
    if (e.target === els.commentDetailModal) closeCommentDetail();
  });

  if (els.atalhosModal) {
    els.atalhosModal.addEventListener("click", (e) => {
      if (e.target === els.atalhosModal) closeAtalhosModal();
    });
  }

  if (els.btnAjudaAtalhos) {
    els.btnAjudaAtalhos.addEventListener("click", openAtalhosModal);
  }

  if (els.btnFecharAtalhos) {
    els.btnFecharAtalhos.addEventListener("click", closeAtalhosModal);
  }

  window.addEventListener("keydown", handleGlobalShortcuts);

  els.layoutPreview.addEventListener("click", (e) => {
    const marker = e.target.closest(".layout-stamp");
    if (marker && !state.stampMode) {
      openCommentDetail(Number(marker.dataset.commentId));
      return;
    }

    if (!state.stampMode) return;
    const rect = els.layoutPreview.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    openComentarioModal({ tipo: "layout", tab: state.layoutTab, x, y });
  });

  els.comentarioForm.addEventListener("submit", (e) => {
    e.preventDefault();
    saveComentario(false);
  });

  els.btnEmergencial.addEventListener("click", () => {
    saveComentario(true);
  });

  if (els.commentMap) {
    els.commentMap.addEventListener("click", (e) => {
      const btn = e.target.closest(".open-comment");
      if (!btn) return;
      openCommentDetail(Number(btn.dataset.commentId));
    });
  }

  els.historicoComentarios.addEventListener("click", (e) => {
    const chevron = e.target.closest(".comment-chevron");
    if (chevron) {
      toggleCommentHistory(Number(chevron.dataset.commentId));
      return;
    }

    const summary = e.target.closest(".comment-summary-toggle");
    if (summary && !e.target.closest(".open-comment")) {
      toggleCommentHistory(Number(summary.dataset.commentId));
      return;
    }

    const btn = e.target.closest(".open-comment");
    if (!btn) return;
    openCommentDetail(Number(btn.dataset.commentId));
  });

  applyPermissions();
  renderTabela();
  renderNotificacoes();
  renderEstruturaProjeto();
  renderDashboardGeral();
  setGeralView(state.geralView);
  renderPreview();
  renderComentarios();
  renderCommentOverview();
}

init();

// ─── Chatbot Assistente ─────────────────────────────────────────────

(function initChat() {
  const fab = document.getElementById("chatFab");
  const panel = document.getElementById("chatPanel");
  const closeBtn = document.getElementById("chatClose");
  const messagesEl = document.getElementById("chatMessages");
  const chipsEl = document.getElementById("chatChips");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");

  let chatOpen = false;
  let greeted = false;

  // ── Intents & respostas ──────────────────────────────────────────

  const CHIPS_INICIAL = [
    "Ver bloqueios ativos",
    "Tarefas atrasadas",
    "Comentários pendentes",
    "Como navegar no painel",
    "O que é esse protótipo?",
  ];

  const CHIPS_FOLLOWUP = [
    "Ver bloqueios ativos",
    "Tarefas atrasadas",
    "Exportar relatório",
    "Como funciona o fluxo",
  ];

  function getBotReply(text) {
    const t = text.toLowerCase();

    if (/(o que|pra que|prototipo|protótipo|demonstracao|demonstração|demo|objetivo|função|funcao|serve)/.test(t)) {
      return {
        html: `Este é um <strong>protótipo funcional de demonstração</strong> do CMS Editorial.<br><br>
O objetivo é simular a inteligência operacional de um sistema editorial real: <em>rastrear o fluxo de produção, identificar gargalos antes que virem bloqueios, centralizar comentários entre equipes e dar ao gestor de arte uma visão clara do estado de cada projeto</em> — tudo em tempo real e num único lugar.<br><br>
Nada aqui é dado de produção, mas tudo funciona como funcionaria no sistema final. Explore à vontade! 🔭`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(bloqueio|bloqueado|travado|impedimento)/.test(t)) {
      const bloqueados = state.itens.filter((i) => i.status === "Bloqueado");
      if (bloqueados.length === 0) {
        return { html: "Ótima notícia: <strong>nenhum projeto está bloqueado</strong> no momento. Continue monitorando o painel para agir rápido caso isso mude.", chips: CHIPS_FOLLOWUP };
      }
      const lista = bloqueados.map((i) => `<li><strong>${i.projeto}</strong> — ${i.equipe} · Prazo: ${formatDate(i.prazo)}</li>`).join("");
      return {
        html: `Encontrei <strong>${bloqueados.length} projeto(s) com bloqueio ativo</strong>:<br><ul>${lista}</ul>Para desbloqueá-los, verifique se há comentários abertos ou dependências entre equipes. Você pode clicar no cartão de <em>"Bloqueios ativos"</em> no painel para filtrar direto.`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(atrasad|prazo|deadline|vencid|urgente|emergencial)/.test(t)) {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      const atrasados = state.itens.filter((i) => {
        const d = new Date(i.prazo + "T00:00:00");
        return d < hoje && i.status !== "Concluído";
      });
      if (atrasados.length === 0) {
        return { html: "Nenhum projeto está com prazo vencido no momento. Mas fique de olho: dois projetos vencem nos próximos dias!", chips: CHIPS_FOLLOWUP };
      }
      const lista = atrasados.map((i) => `<li><strong>${i.projeto}</strong> — venceu em ${formatDate(i.prazo)}</li>`).join("");
      return {
        html: `<strong>${atrasados.length} projeto(s) com prazo vencido:</strong><ul>${lista}</ul>Recomendo escalar para o gestor e registrar um comentário de emergência se necessário.`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(comentar|pendente|aberto|thread|feedback)/.test(t)) {
      const abertos = state.comentarios.filter((c) => !c.resolvido);
      if (abertos.length === 0) {
        return { html: "Todos os comentários estão resolvidos. O fluxo está limpo! ✅", chips: CHIPS_FOLLOWUP };
      }
      const lista = abertos.map((c) => `<li>#${c.id} — ${c.texto.substring(0, 60)}… <em>(${c.equipe})</em></li>`).join("");
      return {
        html: `Há <strong>${abertos.length} comentário(s) aberto(s)</strong>:<ul>${lista}</ul>Acesse o painel de comentários pelo botão <em>"Comentários abertos"</em> no dashboard ou pelo ícone de histórico.`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(exportar|relatorio|relatório|csv|download)/.test(t)) {
      return {
        html: `Para exportar, clique no botão <strong>"Exportar relatório"</strong> no topo da tela geral. No protótipo atual isso simula a ação com uma notificação — em produção geraria um CSV/PDF com os dados filtrados visíveis.`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(navegar|tela|ir para|como usar|atalho|menu|tab)/.test(t)) {
      return {
        html: `Aqui vai um mapa rápido:<br><br>
<strong>Tela Geral</strong> → painel de inteligência com dashboards e fluxo editorial.<br>
<strong>Tela de Edição</strong> → editor de texto da obra com preview impresso e digital.<br><br>
Use o menu no topo para trocar de tela. Também há <strong>atalhos de teclado</strong> — clique em "Atalhos" no canto superior direito para ver todos.<br><br>
Você pode mudar de perfil (Gestor, Editor, Diagramador) para ver como cada papel enxerga o sistema.`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(fluxo|etapa|processo|editorial|ciclo|produção|producao)/.test(t)) {
      return {
        html: `O <strong>fluxo editorial</strong> deste CMS passa por estas etapas principais:<br><ul>
<li>📝 <strong>Autoria</strong> — texto bruto entra no editor</li>
<li>✏️ <strong>Edição/Revisão</strong> — comentários e ajustes por equipe</li>
<li>🖨️ <strong>Diagramação</strong> — layout impresso e digital</li>
<li>✅ <strong>Aprovação</strong> — gestor libera a parte para produção</li>
</ul>O painel mostra em qual etapa cada projeto está e onde estão os gargalos.`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(gargalo|gargalos|problema|critico|crítico|risco)/.test(t)) {
      const bloqueados = state.itens.filter((i) => i.status === "Bloqueado").length;
      const urgentes = state.itens.filter((i) => i.prioridade === "Emergencial").length;
      const abertos = state.comentarios.filter((c) => !c.resolvido).length;
      return {
        html: `Analisando o estado atual do fluxo:<br><ul>
<li>🔴 <strong>${bloqueados} bloqueio(s) ativo(s)</strong> — projetos parados por dependência</li>
<li>⚡ <strong>${urgentes} item(ns) emergencial(is)</strong> — exigem ação imediata</li>
<li>💬 <strong>${abertos} comentário(s) em aberto</strong> — pendências sem resolução</li>
</ul>${bloqueados + urgentes > 0 ? "Há gargalos críticos. Recomendo resolver os bloqueios antes de qualquer nova tarefa." : "Situação relativamente estável. Continue monitorando!"}`,
        chips: CHIPS_FOLLOWUP,
      };
    }

    if (/(oi|olá|ola|boa|hey|hi|tudo)/.test(t)) {
      return {
        html: `Olá! Estou aqui para ajudar com o <strong>CMS Editorial</strong>. Pode me perguntar sobre bloqueios, prazos, comentários pendentes, como navegar pelo sistema ou o que quiser! 😊`,
        chips: CHIPS_INICIAL,
      };
    }

    return {
      html: `Não encontrei uma resposta específica para isso, mas posso te ajudar com:<br><ul>
<li>Identificar bloqueios e gargalos</li>
<li>Ver prazos e tarefas atrasadas</li>
<li>Verificar comentários pendentes</li>
<li>Explicar como navegar no painel</li>
</ul>Pode reformular a pergunta ou usar os atalhos abaixo. 👇`,
      chips: CHIPS_INICIAL,
    };
  }

  function formatDate(str) {
    if (!str) return "—";
    const [y, m, d] = str.split("-");
    return `${d}/${m}/${y}`;
  }

  // ── Renderização ────────────────────────────────────────────────

  function appendBubble(html, role) {
    const el = document.createElement("div");
    el.className = `chat-bubble ${role}`;
    el.innerHTML = html;
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
    return el;
  }

  function showTyping() {
    const el = document.createElement("div");
    el.className = "chat-typing";
    el.id = "chatTyping";
    el.innerHTML = "<span></span><span></span><span></span>";
    messagesEl.appendChild(el);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById("chatTyping");
    if (el) el.remove();
  }

  function setChips(chips) {
    chipsEl.innerHTML = "";
    chips.forEach((label) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chat-chip";
      btn.textContent = label;
      btn.addEventListener("click", () => handleUserMessage(label));
      chipsEl.appendChild(btn);
    });
  }

  function handleUserMessage(text) {
    if (!text.trim()) return;
    appendBubble(text, "user");
    setChips([]);
    input.value = "";

    showTyping();
    setTimeout(() => {
      removeTyping();
      const { html, chips } = getBotReply(text);
      appendBubble(html, "bot");
      setChips(chips || CHIPS_FOLLOWUP);
    }, 600 + Math.random() * 400);
  }

  function openChat() {
    chatOpen = true;
    panel.classList.remove("hidden");
    fab.querySelector(".chat-fab-icon").classList.add("hidden");
    fab.querySelector(".chat-fab-close").classList.remove("hidden");
    fab.setAttribute("aria-label", "Fechar assistente");

    if (!greeted) {
      greeted = true;
      setTimeout(() => {
        appendBubble(
          `Oi! Sou o <strong>Assistente Editorial</strong> — ainda em modo de demonstração, mas já consigo te ajudar a entender o que está acontecendo no fluxo. 🧭<br><br>
Posso identificar <strong>gargalos</strong>, mostrar <strong>bloqueios ativos</strong>, prazos em risco e te orientar pelo painel. Por onde quer começar?`,
          "bot"
        );
        setChips(CHIPS_INICIAL);
      }, 300);
    }

    setTimeout(() => input.focus(), 350);
  }

  function closeChat() {
    chatOpen = false;
    panel.classList.add("hidden");
    fab.querySelector(".chat-fab-icon").classList.remove("hidden");
    fab.querySelector(".chat-fab-close").classList.add("hidden");
    fab.setAttribute("aria-label", "Abrir assistente");
    fab.focus();
  }

  // ── Eventos ─────────────────────────────────────────────────────

  fab.addEventListener("click", () => (chatOpen ? closeChat() : openChat()));
  closeBtn.addEventListener("click", closeChat);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleUserMessage(input.value.trim());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && chatOpen) closeChat();
  });
})();
