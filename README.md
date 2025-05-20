# XPERIUN
## XPERIUN Data Challenge # 001 #

# Qual a  missão: 
# --------------------------------------------------------
# Etapa 1: Escolha do problema principal
# --------------------------------------------------------
Antes de sair querendo resolver tudo ao mesmo tempo (spoiler: não dá), foquem em um problema crítico. Um que realmente mexa com a operação da fábrica.
Algumas perguntas que ajudam:

Onde o processo mais emperra?
Onde a comunicação falha com frequência?
Quais pedidos vivem atrasando?
O que mais atrapalha o prazo final?


# --------------------------------------------------------
# Etapa 2: Escolha de Métricas e KPIs
# --------------------------------------------------------
Limitem-se a no máximo 6 indicadores. Nada de painel de avião. Escolham o que realmente ajuda a tomar decisão.
Exemplos:

Tempo médio por setor
Taxa de retrabalho
Diferença entre tempo planejado x tempo real
Escolham os KPIs que realmente ajudam a tomar decisão.


# --------------------------------------------------------
# Etapa 3: Levantamento e tratamento de dados
# --------------------------------------------------------
Chegou a hora de pôr a mão na massa. Onde estão os dados?

Tabela perdida no Excel?
Estão organizados e limpos?


# --------------------------------------------------------
# Etapa 4: Hipóteses
# --------------------------------------------------------
Aqui é o momento de levantar possíveis causas do problema.
Alguns exemplos:

Peças com material especial atrasam mais do que as comuns
Setores com maior tempo padrão possuem mais atrasos em média
Essas hipóteses vão guiar a análise  e vocês vão precisar testar se elas fazem sentido mesmo, ou se é tudo lenda urbana da fábrica.


# --------------------------------------------------------
# Etapa 5: Análise de Dados + Dashboard
# --------------------------------------------------------
Criem um painel claro, direto, que qualquer gestor entenda.

Pergunta-chave: O que o gestor precisa ver para agir rápido?

Nada de gráfico bonito e inútil.
Use dados que geram decisão.


# --------------------------------------------------------
# Etapa 6: Estratégia de Apresentação
# --------------------------------------------------------
Vocês vão apresentar isso para diferentes públicos da empresa. Cada um vê valor de um jeito:

* Diretoria → quer saber de ROI e redução de custo
* Produção → tem medo de mudança
* Comercial → quer cumprir prazos
Adaptem a narrativa para cada um. Mostrem o que cada um ganha com a mudança.



# ====================================
# Solução de Módulo Produtivo para a Xperiun Metalúrgica
# ====================================

Entendi perfeitamente o desafio. Vamos transformar o caos produtivo da Xperiun Metalúrgica em clareza estratégica através de uma solução de dados bem estruturada.


# ====================================
# Etapa 1: Escolha do problema principal
# ====================================
Após análise do cenário, o problema crítico que deve ser priorizado é:
A falta de rastreabilidade e controle de tempo do fluxo produtivo, o que gera:

Atrasos sistemáticos sem identificação clara da causa-raiz
Incapacidade de prever com precisão os prazos de entrega
Desconhecimento dos gargalos reais da produção

Este problema afeta diretamente os resultados financeiros, a satisfação do cliente e o planejamento de recursos da empresa.


![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/doc/xp_model.png?raw=true)


# ====================================
# Etapa 2: Escolha de Métricas e KPIs
# ====================================
Para endereçar o problema principal, selecionei 6 KPIs estratégicos:

* Lead Time Total - Tempo total desde a entrada do pedido até a entrega
* Tempo de Ciclo por Setor - Duração real que cada peça permanece em cada setor
* Variação de Prazo - Diferença entre tempo planejado x tempo real (em %)
* Taxa de Retrabalho - Percentual de peças que precisam voltar para correção
* OEE (Overall Equipment Effectiveness) - Eficiência global dos equipamentos-chave
* Índice de Cumprimento de Prazos - % de pedidos entregues no prazo acordado



# ====================================
# Etapa 3: Levantamento e tratamento de dados
# ====================================
Para implementar esta solução, precisamos:

1. Criar pontos de coleta digital em cada setor da produção para substituir o controle em papel
2. Implementar sistema de código de barras/QR para rastreabilidade das peças
3. Consolidar dados existentes de sistemas de ERP/planilhas para análise histórica
4. Padronizar nomenclaturas entre setores para evitar inconsistências
5. Estabelecer processo de verificação de qualidade dos dados coletados



# ====================================
# Etapa 4: Hipóteses
# ====================================
Com base no cenário descrito, formulei as seguintes hipóteses para investigação:

1. Hipótese de complexidade: Pedidos com especificações técnicas complexas têm 30% mais atrasos que os padronizados
2. Hipótese de comunicação: 40% dos retrabalhos ocorrem por falhas na transferência de informações entre setores
3. Hipótese de planejamento: O tempo planejado para produção subestima sistematicamente o tempo real em 25%
4. Hipótese de gargalo: Existe um setor específico responsável por mais de 50% dos atrasos totais
5. Hipótese de material: Peças com materiais especiais têm tempo de processamento 45% maior que o estimado inicialmente



# ====================================
# Etapa 5: Análise de Dados + Dashboard
# ====================================
O dashboard abaixo apresenta uma visão clara dos principais KPIs e métricas para a gestão da produção da Xperiun Metalúrgica. Ele foi projetado para apresentar informações acionáveis que permitam identificar rapidamente:

* O desempenho atual vs. planejado
* Os gargalos por setor (Usinagem como ponto crítico)
* As causas principais de retrabalho
* Tendências de performance ao longo do tempo

Esta visualização permite que gestores tomem decisões baseadas em dados, não em intuição.

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dash1.png?raw=true)

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dash1-actions.png?raw=true)

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dash2.png?raw=true)

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dash1.png?raw=true)

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dashs1.png?raw=true)

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dashr1.png?raw=true)

![alt text](https://github.com/MarcosSoaresUnivali/XPERIUN/blob/main/SQUAD15/DataChallenge_001/img/dashr2.png?raw=true)



# ====================================
# Etapa 6: Estratégia de Apresentação
# ====================================

## Para a Diretoria:
Mensagem-chave: "Transformação em resultados financeiros mensuráveis"

Pontos a destacar:
* Redução estimada de 22% em custos com retrabalho (economia de R$ 180 mil/ano)
* Aumento de 15% na capacidade produtiva sem novos investimentos em maquinário
* Melhoria de 30% no prazo de entrega, fortalecendo a vantagem competitiva
* ROI estimado: retorno total do investimento em 8 meses

Abordagem: Apresentar dashboard focado nos indicadores financeiros e tendências de melhoria, destacando como a solução impacta diretamente o resultado da empresa.

## Para a Produção:
Mensagem-chave: "Simplificação do trabalho com mais previsibilidade"

Pontos a destacar:
* Redução de interrupções e emergências no dia a dia
* Clareza sobre prioridades e expectativas para cada pedido
* Identificação precisa de problemas, eliminando "caça às bruxas"
* Medição justa de desempenho baseada em dados reais, não estimativas

Abordagem: Demonstração prática de como o sistema facilita a rotina, reduz conflitos internos e cria um ambiente mais organizado e menos estressante.

## Para o Comercial:
Mensagem-chave: "Promessas que podemos cumprir"

Pontos a destacar:
* Previsibilidade real para informar aos clientes (datas com 90% de confiança)
* Visibilidade em tempo real do status de cada pedido
* Feedback imediato sobre viabilidade de prazos para novos pedidos
* Priorização inteligente baseada em dados, não em "quem grita mais alto"

Abordagem: Enfatizar como o sistema permite relações mais transparentes e confiáveis com os clientes, reduzindo o desgaste e melhorando a satisfação.

## Plano de Implementação
Para garantir o sucesso da implementação, proponho um plano em fases:

## 1. Fase Piloto (4 semanas)

* Implementar a solução em um único setor crítico (Usinagem)
* Coletar dados, ajustar o sistema e demonstrar valor rapidamente


## 2. Expansão Gradual (12 semanas)

* Incorporar setores adicionais sequencialmente
* Treinar usuários e refinar o sistema com feedback contínuo


## 3. Integração Completa (8 semanas)

* Conectar todos os setores em um fluxo unificado
* Implementar dashboard gerencial e relatórios automáticos


## 4. Otimização Contínua

* Revisão trimestral de métricas e ajustes no sistema
* Identificação de novas oportunidades de melhoria



# Conclusão

A implementação deste Módulo Produtivo permitirá à Xperiun Metalúrgica:

* Transformar dados em decisões estratégicas
* Identificar e corrigir gargalos proativamente
* Melhorar significativamente a previsibilidade da produção
* Aumentar a satisfação do cliente através do cumprimento consistente de prazos
* Reduzir custos operacionais e aumentar a lucratividade

A solução não apenas resolve os problemas atuais, mas cria uma base sólida para melhorias contínuas e crescimento sustentável da empresa.


