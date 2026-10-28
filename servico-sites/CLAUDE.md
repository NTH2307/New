# CLAUDE.md: serviço de sites para barbearias e cabeleireiros

Lê o `PRD.md` desta pasta antes de qualquer trabalho.

## Regras
- Responde sempre em português de Portugal (pt-PT), incluindo o texto dos sites.
- Stack simples: HTML, CSS e JavaScript estáticos, sem frameworks nem build. Deve abrir com `python3 -m http.server`.
- Cada cliente tem uma pasta própria em `clientes/<nome>/` com um `dados.json` (nome, serviços, preços, horário, morada, WhatsApp, fotos). O template lê estes dados e não se edita HTML à mão por cliente.
- Mobile primeiro: quase todos os visitantes vêm do telemóvel.
- Rápido e acessível: imagens otimizadas, contraste legível, botão de WhatsApp sempre visível.
- Não inventes dados do cliente (preços, horários, avaliações). Se faltar informação, deixa um marcador claro.
- Uma funcionalidade de cada vez. Mostra o resultado antes de avançar.
- Não faças commit nem push sem eu pedir.

## Fora de âmbito
Não mexas na loja PataFeliz (ficheiros na raiz do repositório).
