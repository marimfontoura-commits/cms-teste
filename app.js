const state = {
  perfil: "admin",
  layoutTab: "pre",
  notifFilter: "all",
  currentTaskId: null,
  stampMode: false,
  pendingAnchor: null,
  activeCommentId: null,
  commentStatusFilter: "todos",
  commentTeamFilter: "todas",
  expandedComments: {},
  nextCommentId: 7,
  raizTexto: `Capitulo 1 - Ecossistemas\n\nA biodiversidade e formada por especies, genes e ecossistemas.\nEste texto e apenas uma simulacao para validar fluxo editorial no CMS.`,
  itens: [
    {
      projeto: "Colecao Ciencias 7",
      equipe: "Editorial",
      status: "Em andamento",
      prazo: "2026-06-03",
      prioridade: "Alta",
      parteLiberada: true,
    },
    {
      projeto: "Colecao Historia 8",
      equipe: "Diagramação",
      status: "Bloqueado",
      prazo: "2026-06-01",
      prioridade: "Emergencial",
      parteLiberada: false,
    },
    {
      projeto: "Colecao Matematica 6",
      equipe: "Digital",
      status: "Aguardando aprovação",
      prazo: "2026-06-10",
      prioridade: "Média",
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
      texto: "Trocar imagem da abertura para evitar corte no rodape.",
      equipe: "Diagramação",
      prioridade: "Média",
      resolvido: false,
      quando: "agora",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado e atribuído para Diagramação.",
          quando: "agora",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 72, y: 28 },
      alvo: "Layout pre",
    },
    {
      id: 2,
      texto: "Ajustar o termo tecnico no paragrafo 2 para padrao editorial.",
      equipe: "Editorial",
      prioridade: "Média",
      resolvido: false,
      quando: "agora",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado em Edição e enviado para Editorial.",
          quando: "agora",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 44, y: 64 },
      alvo: "Layout pre",
    },
    {
      id: 3,
      texto: "Emergencial: quebra de pagina gerou viuva e precisa de ajuste imediato.",
      equipe: "Diagramação",
      prioridade: "Emergencial",
      resolvido: false,
      quando: "ha 8 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário emergencial criado para Diagramação.",
          quando: "ha 8 min",
        },
      ],
      anchor: { tipo: "layout", tab: "diag", x: 42, y: 52 },
      alvo: "Layout diag",
    },
    {
      id: 4,
      texto: "Revisar chamada de atividade para consistencia com o guia pedagogico.",
      equipe: "Editorial",
      prioridade: "Alta",
      resolvido: true,
      resolvidoPor: "Mariana Fontoura",
      dataResolucao: "Hoje, 09:12",
      quando: "ha 15 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado em Edição e atribuído para Editorial.",
          quando: "Ontem, 17:42",
        },
        {
          tipo: "resolvido",
          descricao: "Resolvido por Mariana Fontoura.",
          quando: "Hoje, 09:12",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 18, y: 42 },
      alvo: "Layout pre",
    },
    {
      id: 5,
      texto: "Validar impacto de prazo com alteracao nao prevista no fluxo.",
      equipe: "Gestão",
      prioridade: "Emergencial",
      resolvido: false,
      quando: "ha 20 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado e escalado para Gestão.",
          quando: "ha 20 min",
        },
      ],
      anchor: { tipo: "layout", tab: "pre", x: 30, y: 66 },
      alvo: "Layout pre",
    },
    {
      id: 6,
      texto: "Uniformizar estilo do box complementar na versao digital.",
      equipe: "Diagramação",
      prioridade: "Alta",
      resolvido: true,
      resolvidoPor: "Carla Nunes",
      dataResolucao: "Ontem, 18:40",
      quando: "ha 35 min",
      historico: [
        {
          tipo: "criado",
          descricao: "Comentário criado e atribuído para Diagramação.",
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
      anchor: { tipo: "layout", tab: "html", x: 55, y: 40 },
      alvo: "Layout html",
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
  tarefasProjeto: [
    {
      id: 101,
      projeto: "PRE-UNI26",
      disciplina: "MAT",
      etapa: "Edicao",
      titulo: "MAT - Capitulo 3 (Edicao)",
      status: "Em andamento",
      prioridade: "Alta",
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
  tabelaItens: document.querySelector("#tabelaItens"),
  kpis: document.querySelector("#kpis"),
  listaNotificacoes: document.querySelector("#listaNotificacoes"),
  notifBtns: document.querySelectorAll(".mini-btn"),
  btnAbrirNotificacoes: document.querySelector("#btnAbrirNotificacoes"),
  resumoNormais: document.querySelector("#resumoNormais"),
  resumoEmergenciais: document.querySelector("#resumoEmergenciais"),
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
  raizHint: document.querySelector("#raizHint"),
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
};

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

function openScreen(screenKey) {
  els.navBtns.forEach((b) => {
    const isTaskContext = screenKey === "tarefa" && b.dataset.screen === "notificacoes";
    b.classList.toggle("active", b.dataset.screen === screenKey || isTaskContext);
  });
  Object.entries(els.screens).forEach(([k, el]) => {
    el.classList.toggle("active", k === screenKey);
  });
}

function statusBadgeClass(status) {
  const statusClass = {
    "Em andamento": "success",
    Bloqueado: "danger",
    "Aguardando aprovação": "warning",
    "Concluído": "alert",
  };
  return statusClass[status] || "";
}

function getTaskById(taskId) {
  return state.tarefasProjeto.find((t) => t.id === taskId);
}

function getTaskByDisciplinaEtapa(disciplina, etapa) {
  return state.tarefasProjeto.find((t) => t.disciplina === disciplina && t.etapa === etapa);
}

function renderKpis(itensFiltrados = state.itens) {
  const atrasados = itensFiltrados.filter((i) => i.prazo < "2026-06-02").length;
  const bloqueados = itensFiltrados.filter((i) => i.status === "Bloqueado").length;
  const emergenciais = state.notificacoes.filter((n) => n.tipo === "emergencial").length;
  const liberados = itensFiltrados.filter((i) => i.parteLiberada).length;

  els.kpis.innerHTML = `
    <div class="kpi"><small>Partes liberadas</small><strong>${liberados}</strong></div>
    <div class="kpi"><small>Atrasados</small><strong>${atrasados}</strong></div>
    <div class="kpi"><small>Bloqueios</small><strong>${bloqueados}</strong></div>
    <div class="kpi"><small>Alertas emergenciais</small><strong>${emergenciais}</strong></div>
  `;
}

function getItensFiltrados() {
  const busca = els.filtroBusca.value.toLowerCase().trim();
  const equipe = els.filtroEquipe.value;
  const status = els.filtroStatus.value;
  const prioridade = els.filtroPrioridade.value;

  return state.itens.filter((item) => {
    if (busca && !item.projeto.toLowerCase().includes(busca)) return false;
    if (equipe && item.equipe !== equipe) return false;
    if (status && item.status !== status) return false;
    if (prioridade && item.prioridade !== prioridade) return false;
    return true;
  });
}

function renderTabela() {
  const itens = getItensFiltrados();
  renderKpis(itens);

  els.tabelaItens.innerHTML = itens
    .map(
      (i) => `
      <tr>
        <td>${i.projeto}</td>
        <td>${i.equipe}</td>
        <td><span class="badge ${statusBadgeClass(i.status)}">${i.status}</span></td>
        <td>${i.prazo}</td>
        <td>${i.parteLiberada ? "Sim" : "Nao"}</td>
        <td>
          <button class="mini-btn" onclick="abrirEdicao('${i.projeto.replace(/'/g, "")}')">Abrir edicao</button>
        </td>
      </tr>
    `,
    )
    .join("");
}

function renderNotificacoes() {
  const lista = state.notificacoes.filter((n) => {
    if (state.notifFilter === "all") return true;
    return n.tipo === state.notifFilter;
  });

  els.listaNotificacoes.innerHTML = lista
    .map(
      (n) => `
      <li class="${n.tipo}">
        <strong>${n.tipo === "emergencial" ? "Emergencial" : "Notificacao"}</strong>
        <p>${n.texto}</p>
        <small>${n.quando}</small>
      </li>
    `,
    )
    .join("");

  const totalEmergenciais = state.notificacoes.filter((n) => n.tipo === "emergencial").length;
  els.resumoEmergenciais.textContent = String(totalEmergenciais);
  els.resumoNormais.textContent = String(state.notificacoes.length - totalEmergenciais);
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
  const blocos = state.raizTexto
    .split("\n\n")
    .map((b) => b.trim())
    .filter(Boolean);
  const titulo = blocos[0] || "Capitulo";
  const corpo = blocos[1] || state.raizTexto;
  const resumo = corpo.slice(0, 170);

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
          <h1>${titulo}</h1>
          <p>${resumo}...</p>
          <div class="html-callout">
            <strong>Box multimidia</strong>
            <p>Componente reaproveitado para versao digital com destaque e navegacao lateral.</p>
          </div>
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
            <h1>${titulo}</h1>
            <p class="lead">${resumo}...</p>
            <div class="figure-card">
              <div class="figure-thumb"></div>
              <div>
                <strong>Imagem principal</strong>
                <p>Legenda diagramada com hierarquia visual e area para observacoes do time.</p>
              </div>
            </div>
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
      <article class="layout-sheet pre-sheet">
        <div class="pre-topbar">
          <small>visao pre-diagramacao</small>
          <div class="pre-tools">
            <span class="badge">texto raiz</span>
            <span class="badge alert">layout espelhado</span>
          </div>
        </div>
        <div class="hero-block">
          <div>
            <small class="eyebrow">capitulo em desenvolvimento</small>
            <h1>${titulo}</h1>
            <p>${corpo}</p>
          </div>
          <div class="hero-preview-card">
            <div class="hero-lines"></div>
            <div class="hero-lines short"></div>
            <div class="hero-chip">imagem + chamada</div>
          </div>
        </div>
        <div class="content-rail">
          <div class="text-card">
            <strong>Bloco principal</strong>
            <p>${resumo}...</p>
          </div>
          <div class="text-card muted-card">
            <strong>Observação de layout</strong>
            <p>Previsão de box lateral, chamada e legenda técnica aplicada ao template.</p>
          </div>
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
  els.raizHint.textContent = canEditRaiz
    ? "Voce pode editar o arquivo raiz. Mudancas atualizam o layout." 
    : "Somente leitura: este perfil nao pode editar o arquivo raiz.";

  els.layoutHint.textContent = canEditLayout
    ? "Diagramador pode editar layout (simulado no MVP)."
    : "Layout bloqueado para este perfil; apenas visualizacao.";

  renderEstruturaProjeto();
  renderComentarios();
  renderPreview();
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
}

function toggleCommentHistory(commentId) {
  state.expandedComments[commentId] = !state.expandedComments[commentId];
  renderComentarios();
}

function renderLayoutStamps() {
  els.layoutPreview.querySelectorAll(".layout-stamp").forEach((n) => n.remove());
  const stamps = getVisibleComentarios().filter(
    (c) => c.anchor?.tipo === "layout" && c.anchor.tab === state.layoutTab && !c.resolvido,
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
}

function highlightTarget(node) {
  node.classList.add("jump-highlight");
  setTimeout(() => node.classList.remove("jump-highlight"), 1200);
}

function goToComment(commentId) {
  const comment = getVisibleComentarios().find((c) => c.id === commentId);
  if (!comment) return;

  state.layoutTab = comment.anchor.tab;
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
    alert("Comentario e atribuicao de equipe sao obrigatorios.");
    return false;
  }

  if (!state.pendingAnchor) {
    alert("Escolha primeiro um alvo no layout.");
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
  return true;
}

function evaluateSubstantialChange(newText) {
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

function init() {
  state.raizBaselineWords = wordsCount(state.raizTexto);
  els.arquivoRaiz.value = state.raizTexto;

  els.navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      openScreen(btn.dataset.screen);
    });
  });

  els.btnAbrirNotificacoes.addEventListener("click", () => {
    openScreen("notificacoes");
  });

  els.btnVoltarNotificacoes.addEventListener("click", () => {
    openScreen("notificacoes");
  });

  els.perfil.addEventListener("change", (e) => {
    state.perfil = e.target.value;
    applyPermissions();
  });

  [els.filtroBusca, els.filtroEquipe, els.filtroStatus, els.filtroPrioridade].forEach((f) =>
    f.addEventListener("input", renderTabela),
  );

  els.notifBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.notifBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.notifFilter = btn.dataset.notifFilter;
      renderNotificacoes();
    });
  });

  els.estruturaProjeto.addEventListener("click", (e) => {
    const btn = e.target.closest(".task-link");
    if (!btn) return;
    renderTaskDetail(Number(btn.dataset.taskId));
  });

  els.tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      els.tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.layoutTab = btn.dataset.layoutTab;
      renderPreview();
    });
  });

  els.arquivoRaiz.addEventListener("input", (e) => {
    state.raizTexto = e.target.value;
    renderPreview();
    evaluateSubstantialChange(state.raizTexto);
  });

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

  els.commentMap.addEventListener("click", (e) => {
    const btn = e.target.closest(".open-comment");
    if (!btn) return;
    openCommentDetail(Number(btn.dataset.commentId));
  });

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
  renderPreview();
  renderComentarios();
  renderCommentOverview();
}

init();
