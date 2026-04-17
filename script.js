const POSTOS = [
  { id:1, nome:"Auto Posto Esplanada de Indaiá", bandeira:"Rede P5", endereco:"Av. Eng. Fábio Roberto Barnabé", bairro:"Jardim Esplanada", telefone:"(19)99585-1771", horario:"24 horas", gasolina:5.79, etanol:3.99, diesel:6.19, avaliacao:4.8, comentario:"Estrutura completa, atendimento ágil e combustível de qualidade." },
  { id:2, nome:"Auto Posto Nova Suíça", bandeira:"Rede P5", endereco:"Av. Conceição, 3050", bairro:"Vila Areal", telefone:"(19)99585-1771", horario:"06h às 22h", gasolina:5.69, etanol:3.89, diesel:6.05, avaliacao:4.5, comentario:"Preços abaixo da média. Ótima opção para quem mora na região sul." },
  { id:3, nome:"Shell", bandeira:"Shell", endereco:"Rua Boa Vista, 320 — Vila Rica", bairro:"Vila Rica", telefone:"(19) 3300-1122", horario:"24 horas", gasolina:5.89, etanol:4.09, diesel:6.25, avaliacao:4.3, comentario:"Localização privilegiada. Estrutura completa justifica o preço." },
  { id:4, nome:"Distrito", bandeira:"Rede 7", endereco:"Av. Independência, 2.100 — Centro", bairro:"Centro", telefone:"(19) 3333-0055", horario:"05h às 23h", gasolina:5.74, etanol:3.95, diesel:6.10, avaliacao:4.6, comentario:"Confiável, filas curtas e combustível com certificação de qualidade." },
  { id:5, nome:"Posto Raízen Oeste", bandeira:"Shell / Raízen", endereco:"Rod. SP-075, km 3 — Dist. Industrial", bairro:"Distrito Industrial", telefone:"(19) 3310-9900", horario:"24 horas", gasolina:5.62, etanol:3.79, diesel:5.99, avaliacao:4.1, comentario:"Melhor preço de diesel e etanol da cidade. Referência para frotas." },
  { id:6, nome:"Posto Gontijo & Filhos", bandeira:"Bandeira Branca", endereco:"Rua Marechal Deodoro, 405 — Bela Vista", bairro:"Bela Vista", telefone:"(19) 3344-2200", horario:"06h às 21h", gasolina:5.67, etanol:3.93, diesel:6.08, avaliacao:4.2, comentario:"Posto familiar com décadas de tradição. Atendimento pessoal e preço justo." },
  { id:7, nome:"Posto Rede América", bandeira:"Bandeira Branca", endereco:"Av. Cônego Manoel Alves, 750 — Morada das Flores", bairro:"Morada das Flores", telefone:"(19) 3321-8855", horario:"05h30 às 23h30", gasolina:5.71, etanol:3.91, diesel:6.07, avaliacao:4.0, comentario:"Boa localização no norte da cidade. Atende bem nos horários de pico." },
  { id:8, nome:"Posto Santos Dumont", bandeira:"Ale", endereco:"Rua Antônio Leme, 93 — Jardim Morada do Sol", bairro:"Jardim Morada do Sol", telefone:"(19) 3355-6677", horario:"24 horas", gasolina:5.75, etanol:3.97, diesel:6.14, avaliacao:4.4, comentario:"Estrutura nova e bem cuidada. A lavagem completa é referência na cidade." },
  { id:9, nome:"Posto Cidade Nova", bandeira:"Ipiranga", endereco:"Rua das Palmeiras, 815 — Cidade Nova", bairro:"Cidade Nova", telefone:"(19) 3388-1100", horario:"06h às 23h", gasolina:5.72, etanol:3.94, diesel:6.09, avaliacao:4.3, comentario:"Posto bem localizado, fácil acesso e preços competitivos na região." },
  { id:10, nome:"Posto BR Estrada Real", bandeira:"Petrobras BR", endereco:"Rod. Dom Pedro I, km 77 — Acesso Sul", bairro:"Acesso Sul", telefone:"(19) 3390-5544", horario:"24 horas", gasolina:5.65, etanol:3.85, diesel:6.02, avaliacao:4.2, comentario:"Ideal para viagens. Estrutura de estrada completa com restaurante e descanso." },
  { id:11, nome:"Posto Verde Vale", bandeira:"Posto Verde", endereco:"Av. das Nações, 300 — Jardim Europa", bairro:"Jardim Europa", telefone:"(19) 3376-2233", horario:"07h às 22h", gasolina:5.66, etanol:3.88, diesel:6.03, avaliacao:4.4, comentario:"Atendimento diferenciado e preços honestos. Um dos melhores do bairro." },
  { id:12, nome:"Posto FastFuel 24h", bandeira:"Bandeira Branca", endereco:"Av. João Pessoa, 1.500 — Vila Operária", bairro:"Vila Operária", telefone:"(19) 3361-9988", horario:"24 horas", gasolina:5.70, etanol:3.90, diesel:6.06, avaliacao:4.1, comentario:"Aberto 24 horas, sempre movimentado. Ótima opção para viajantes noturnos." }
];

const AVALIACOES = [
  { autor:"Carlos M.", inicial:"C", cidade:"Motorista, Indaiatuba/SP", postoNome:"Auto Posto Ipiranga Nova Estrela", nota:5, data:"há 2 dias", texto:"Abasteci lá três vezes essa semana. Combustível de qualidade, bomba rápida e a loja tem de tudo. Recomendo!" },
  { autor:"Fernanda R.", inicial:"F", cidade:"Pedagoga, Salto/SP", postoNome:"Posto São Lucas", nota:5, data:"há 4 dias", texto:"Sempre abasteço no São Lucas. Preço bom, atendimento simpático e nunca tive problema com o combustível." },
  { autor:"Ricardo B.", inicial:"R", cidade:"Caminhoneiro, Itu/SP", postoNome:"Posto Raízen Oeste", nota:4, data:"há 1 semana", texto:"Melhor diesel da região para frota. Estrutura boa para caminhão, fácil de entrar e sair. Recomendo!" },
  { autor:"Juliana C.", inicial:"J", cidade:"Professora, Indaiatuba/SP", postoNome:"Petrobras Posto Central", nota:5, data:"há 5 dias", texto:"Preço justo, a bomba bateu certinho e o atendente foi muito prestativo. Já virei cliente fixa." },
  { autor:"Marcos A.", inicial:"M", cidade:"Empreendedor, Campinas/SP", postoNome:"Posto Shell Viaducto", nota:4, data:"há 3 dias", texto:"Paga-se um pouco mais, mas a localização no centro salva quando estou com pressa. Restaurante com comida boa." },
  { autor:"Ana Paula T.", inicial:"A", cidade:"Enfermeira, Indaiatuba/SP", postoNome:"Posto Gontijo & Filhos", nota:4, data:"há 2 semanas", texto:"Posto familiar que mantém a qualidade há anos. Preço honesto e nunca tive surpresa na bomba." }
];

var ordenacaoAtual = 'avaliacao';

function fmt(v) {
  return 'R$ ' + v.toFixed(2);
}

function stars(n) {
  var resultado = '';
  var nota = Math.round(n);

  for (var i = 0; i < 5; i++) {
    if (i < nota) {
      resultado += "★";
    } else {
      resultado += "☆";
    }
  }
  return resultado;
}

function getLista() {
  var lista = POSTOS.slice();

  lista.sort(function(a, b) {
    if (ordenacaoAtual === 'avaliacao') {
      return b.avaliacao - a.avaliacao;
    }

    if (ordenacaoAtual === 'nome') {
      if (a.nome > b.nome) return 1;
      if (a.nome < b.nome) return -1;
      return 0;
    }
    return a[ordenacaoAtual] - b[ordenacaoAtual];
  });
  return lista;
}

function renderPostos() {
  var grid = document.getElementById('postosGrid');
  var lista = getLista();
  var html = '';

  if (lista.length === 0) {
    grid.innerHTML = 'Nenhum posto encontrado';
    return;
  }

  for (var i = 0; i < lista.length; i++) {
    var p = lista[i];

    html += "<div class='posto-card'>";
    html += "<h3>" + p.nome + "</h3>";
    html += "<p><strong>Bandeira:</strong> " + p.bandeira + "</p>";
    html += "<p><strong>Gasolina:</strong> " + fmt(p.gasolina) + "</p>";
    html += "<p><strong>Etanol:</strong> " + fmt(p.etanol) + "</p>";
    html += "<p><strong>Diesel:</strong> " + fmt(p.diesel) + "</p>";
    html += "<p><strong>Avaliação:</strong> " + stars(p.avaliacao) + "</p>";
    html += "<br>";
    html += "<p><strong>Endereço:</strong> " + p.endereco + "</p>";
    html += "<div>";
    html += "<p><strong>Bairro:</strong> " + p.bairro + "</p>";
    html += "<p><strong>Horário:</strong> " + p.horario + "</p>";
    html += "<p><strong>Telefone:</strong> " + p.telefone + "</p>";
    html += "<br>";
    html += "<p>" + p.comentario + "</p>";
    html += "</div>";
    html += "</div>";
  }
  grid.innerHTML = html;
}

function renderAvaliacoes() {
  var grid = document.getElementById('avaliacoesGrid');
  var html = '';

  for (var i = AVALIACOES.length - 1; i >= 0; i--) {
    var a = AVALIACOES[i];

    html += "<div class='aval-card'>";
    html += "<strong>" + a.autor + "</strong>";
    html += "<p>" + a.texto + "</p>";
    html += "<p>Nota: " + stars(a.nota) + "</p>";
    html += "<p>" + a.postoNome + "</p>";
    html += "</div>";
  }
  grid.innerHTML = html;
}

function initOrdenacao() {
  document.getElementById('ordenar').addEventListener('change', function(e) {
    ordenacaoAtual = e.target.value;
    renderPostos();
  });
}

function initForm() {
  document.getElementById('sugestaoForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var posto = document.getElementById('posto').value;
    var msg = document.getElementById('mensagem').value;

    if (!nome || !posto || !msg) {
      alert('Preencha todos os campos');
      return;
    }

    AVALIACOES.push({
      autor: nome,
      nota: 5,
      texto: msg,
      postoNome: posto
    });

    renderAvaliacoes();
    this.reset();
  });
}

function initComparador() {
  var selects = [
    document.getElementById('comp1'),
    document.getElementById('comp2'),
    document.getElementById('comp3')
  ];

  for (var i = 0; i < selects.length; i++) {
    var select = selects[i];

    for (var j = 0; j < POSTOS.length; j++) {
      var p = POSTOS[j];
      var opt = document.createElement('option');
      opt.value = p.id;
      opt.textContent = p.nome;
      select.appendChild(opt);
    }
  }

  document.getElementById('btnComparar').addEventListener('click', function() {
    var ids = selects.map(function(s) { return s.value; }).filter(Boolean);

    if (ids.length < 2) {
      alert('Selecione pelo menos 2 postos');
      return;
    }

    var escolhidos = POSTOS.filter(function(p) {
      return ids.includes(String(p.id));
    });

    var html = "<div class='comparador-resultado' style='display:flex; gap:20px; flex-wrap:wrap;'>";

    for (var i = 0; i < escolhidos.length; i++) {
      var p = escolhidos[i];

      html += "<div class='comp-card'>";
      html += "<h3>" + p.nome + "</h3>";
      html += "<p>Gasolina: " + fmt(p.gasolina) + "</p>";
      html += "<p>Etanol: " + fmt(p.etanol) + "</p>";
      html += "<p>Diesel: " + fmt(p.diesel) + "</p>";
      html += "<p>Avaliação: " + stars(p.avaliacao) + "</p>";
      html += "</div>";
    }
    html += "</div>";
    document.getElementById('compResultado').innerHTML = html;
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderPostos();
  renderAvaliacoes();
  initOrdenacao();
  initForm();
  initComparador();
});
