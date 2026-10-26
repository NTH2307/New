# Como pôr o agente a atender chamadas reais (Portugal)

Data: 2026-10-26. Fontes: documentação da ElevenLabs, páginas da Telnyx e da Twilio, ajuda da MEO e do fórum da NOS. Valores em euros, aproximados (1 $ ≈ 0,9 €). **Não testei nada disto ainda.**

## Estado
- Portão 1 aprovado: 10 de 10 cenários e voz avaliada por 5 pessoas (4 deram 5 e 1 deu 4, segundo o utilizador).
- O agente só funciona dentro do ecrã (Pré-visualização). Falta um número de telefone.

## Como se liga um número à ElevenLabs
- No painel dos agentes, em **Phone Numbers**, há duas maneiras:
  1. **Twilio (integração nativa):** importar um número da Twilio, com o SID e o token da conta Twilio (esses dados são do utilizador e escrevem-se na ElevenLabs, nunca no chat).
  2. **SIP trunk:** ligar um número que já se tenha a outro fornecedor.
- Depois, atribui-se o agente a esse número.

## Número português (+351)
- A **Telnyx** vende números locais portugueses. A Twilio cobra chamadas para Portugal a partir de ≈ 0,012 €/min.
- **Requisitos da Telnyx para números locais em Portugal:** uso empresarial (não é permitido uso privado), nome de um representante autorizado, **NIF**, **certidão de registo comercial** e número de registo, e **comprovativo de morada com menos de 3 meses**.
- Ou seja: **para ter um número português, é preciso ter uma atividade ou empresa registada.** Falar com um contabilista (abrir atividade ou criar empresa).
- Custo de um número: cerca de 1 €/mês em geral (o preço exato para Portugal não verifiquei).

## O dono da empresa desvia as chamadas
- Na MEO e na NOS há **reencaminhamento de chamadas** que se ativa no teclado do telefone, por exemplo para **chamadas não atendidas** ou **quando está ocupado**. Na MEO, para "ocupado" é `*67*número#` (desativar `#67#`).
- O desvio funciona para qualquer número fixo ou móvel, e **o custo depende do tarifário do dono**. Por isso o número do assistente deve ser português.

## Custos de um piloto (estimativa)
- Número: ~1 a 3 €/mês. Minutos de linha: ~0,01 €/min. Minutos do agente: ver plano da ElevenLabs (o plano grátis só tem 15 minutos; planos pagos a partir de ≈ 5 €/mês com 75 minutos, a confirmar).

## Plano
1. **Não comprar nada ainda.** Primeiro, falar com empresas (10 chamadas) e mostrar um **vídeo de 60 segundos** do assistente a funcionar.
2. Só quando **2 empresas aceitarem um piloto**: tratar da atividade/NIF com o contabilista, comprar o número e ligar à ElevenLabs.
3. O dono ativa o desvio de chamadas não atendidas para o número do assistente.
