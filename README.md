# PataFeliz (nome provisório)

Loja de dropshipping de acessórios para cães (nicho de animais). Site estático em HTML/CSS/JS.

## Ver localmente
```
python3 -m http.server 8000
```
Abrir http://localhost:8000

## Shopify
`shopify-produtos.csv` está pronto para importar (Produtos → Importar). Todos os produtos ficam em
`draft`. Preços provisórios; trocar pelos reais depois de ver os custos no fornecedor e acrescentar
`Image Src` com as fotos do fornecedor/amostras.

## Por fazer antes de abrir
- [ ] Confirmar preços e prazos reais com o fornecedor (Spocket/BigBuy) e ajustar `PRODUCTS` em `app.js`
- [ ] Pedir amostras dos 3 produtos
- [ ] Trocar os emojis por fotos/vídeos reais (`emoji` → `image`)
- [ ] Ligar pagamentos (Shopify, Stripe, etc.) no botão "Finalizar compra"
- [ ] Completar `politicas.html` (dados da empresa, RGPD, Livro de Reclamações) e rever com quem perceba de lei
- [ ] Registar atividade nas Finanças
- [ ] Escolher o nome final da marca e verificar se está livre
