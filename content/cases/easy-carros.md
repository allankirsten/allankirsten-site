---
type: case
slug: easy-carros
title: Easy Carros
tagline: "De reativo a proativo, sem parar a operação."
company: Easy Carros
role: "Head of Product"
period: "2023-2024"
category: "Product Leadership"
order: 3
featured: true
status: archived
summary: >
  Head of Product da maior plataforma de gestão para locadoras do Brasil,
  350 clientes e 130 mil veículos. Estruturei produto do zero e virei uma
  operação waterfall em produto orientado a dados: itens simultâneos de
  195 para 13, deploy de 1 para 8 por mês.
metrics:
  - label: "Trabalho em andamento"
    value: "195 para 13 itens"
  - label: "Lead time"
    value: "22 para 9 dias"
  - label: "Deploy"
    value: "1 para 8 por mês"
  - label: "Escala"
    value: "350 clientes, 130 mil veículos"
tags: [saas, b2b, fleet, product-ops]
---

# Easy Carros

Não tinha área de produto. Sem processo, sem papel claro, sem orientação a dado. O sistema principal rodava em ASP Clássico, tecnologia que a Microsoft estava descontinuando, com 195 itens em desenvolvimento ao mesmo tempo e entrega mensal.

Decisão de produto era feeling.

A Easy Carros é a maior plataforma de gestão para locadoras do Brasil: 350 clientes, 130 mil veículos, cobertura nacional. Entrei como Head of Product.

## O impacto primeiro

Trabalho em andamento de 195 para 13 itens. Lead time de 22 para 9 dias. Cycle time de 14 para 3 dias. Frequência de deploy de 1 para 8 vezes por mês. Migração para AWS concluída. Dois produtos novos lançados, Easy Pay e a vertical de Seminovos.

## O diagnóstico que virou a chave

Mapeei a raiz do problema num loop que batizei de Ciclo de Desconhecimento. Quem abre o chamado não conhece a plataforma o suficiente. Por desconhecimento, pede o que acredita precisar. Esse pedido gera impacto inesperado na experiência. Resultado: o produto se afasta da necessidade real da base.

A conclusão foi desconfortável e necessária: seguir cegamente as solicitações degradava o produto.

Esse insight justificou a virada inteira, de um modelo reativo e waterfall para produto proativo, orientado a discovery, dado e priorização por valor de base.

## Como estruturei a função

Defini OKRs em três pilares, pessoas, processos e ferramentas. Criei job descriptions, implantei Jira com WIP e controle de fluxo, e estabeleci discovery com duplo diamante. Separei o trabalho em dois trilhos: oportunidades, cerca de 80%, vindas de pesquisa e dado, e expedites, cerca de 20%, vindas de chamado, com triagem que agrupava duplicados.

Uma regra prática mudou a cultura: nenhum card podia ter nome de cliente. Isso forçava pensar na base inteira, não no caso isolado. Melhoria é o que serve pra toda a base. Customização é pedido de um cliente sem validação, cara de manter e aceita só por exceção.

## Pesquisa que estruturou o roadmap

Lancei "Conhecendo nosso cliente" logo na entrada, cruzando quatro fontes: CX, dados de produto, NPS e entrevista com cliente estratégico. Os achados eram diretos. "É o sistema mais unfriendly que já vi na vida, tenho que anotar o passo a passo no caderno." Um cliente estimou +30% de lucratividade se resolvêssemos conciliação bancária e flutuação de preços. Cadastro de veículo levava 15 minutos por carro.

Esses achados viraram How Might We específicos e estruturaram o roadmap inteiro do semestre.

## Modernização sem downtime

Em vez de uma reescrita arriscada, defini a estratégia de Strangler Pattern: um frontend novo em React convivendo com o legado e substituindo módulo a módulo. Mapeei o escopo completo, 20 módulos, 140 funcionalidades, 2.605 pontos de função. Em paralelo, apliquei melhorias visuais imediatas via CSS padronizado, aproximando o legado do novo design system sem custo relevante de engenharia. A saúde do time era medida pela distribuição de esforço, saindo de apagar incêndio para roadmap.

## Novos produtos

Easy Pay, pagamento de débitos veiculares, com teste de usabilidade em que 100% concluíram a missão sem ajuda e deram nota 9. Vertical de Seminovos, o elo que fecha a rentabilidade da locadora, com pesquisa de mercado em 7 locadoras e meta operacional definida.

## Reflexão

O trabalho não foi só produto, foi percepção. Parte dele era desvincular a Easy da imagem de "empresa que promete e não entrega", com resposta operacional, ciclos menores, e narrativa, posicionar a plataforma como a XP das locadoras. Cada produto novo não era feature isolada, era expansão do ciclo de valor capturado por cliente.
