# AceSports Website

## Visão geral

Este projeto é um site institucional desenvolvido em **Next.js** com **TypeScript** e **Tailwind CSS** para o clube esportivo **AceSports**.

### Objetivo
Criar uma landing page moderna, responsiva e acessível que apresente os serviços principais do clube:

- Quadras e aulas de **tênis**, **beach tennis**, **futevôlei** e **pickleball**
- Aulas de **pilates**
- **Academia completa**
- **Massagem** sob consulta (pagamento separado)

## Estrutura da página

A página principal (`app/page.tsx`) inclui:

1. `Header` / `Navigation`
2. `Hero`
3. `About`
4. `Services`
5. `Pricing`
6. `ContactForm`
7. `Footer`

## Paleta de cores

A paleta usa tons verdes naturais e contrastes neutros para reforçar o posicionamento esportivo e premium do clube.

### Cores principais

- `#a1cca5` — accent
- `#8fb996` — secondary
- `#709775` — primary
- `#415d43` — black-soft
- `#111d13` — black

### Tema claro

- `--background`: `#f8fbf4`
- `--foreground`: `#111d13`
- `--card`: `#eef4e2`
- `--primary`: `#709775`
- `--secondary`: `#8fb996`
- `--accent`: `#a1cca5`
- `--border`: `#c8d6be`

### Tema escuro

- `--background`: `#111d13`
- `--foreground`: `#a1cca5`
- `--card`: `#415d43`
- `--primary`: `#a1cca5`
- `--secondary`: `#8fb996`
- `--accent`: `#709775`
- `--border`: `#2b3e31`

## Imagens utilizadas

Foram usadas imagens do Unsplash para reforçar cada serviço e o posicionamento do clube.

- Sobre o clube: `https://images.unsplash.com/photo-1632755898125-36cd72575dde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
- Aula de Tênis: `https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&q=80`
- Beach Tennis: `https://images.unsplash.com/photo-1519046947096-f43d6481532b?w=600&q=80`
- Futevôlei: `https://images.unsplash.com/photo-1684266370915-382b2329278c?w=600&q=80`
- Pickleball: `https://images.unsplash.com/photo-1693142518820-78d7a05f1546?w=600&q=80`
- Pilates: `https://images.unsplash.com/photo-1591258370814-01609b341790?w=600&q=80`
- Academia Completa: `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80`
- Massagem: `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80`

## Arquitetura e organização

### Diretórios principais

- `app/` — entrada do Next.js e layout da aplicação
- `components/` — componentes de UI reutilizáveis
- `hooks/` — lógica reutilizável do cliente
- `lib/constants/` — dados de serviços e tipagens
- `lib/utils/` — utilitários auxiliares

### Componentes-chave

- `Navigation` — barra fixa com menu desktop/mobile e toggle de tema
- `Hero` — seção de destaque inicial
- `About` — seção institucional do clube
- `Services` — seção de atividades e ofertas
- `Pricing` — seção de preços
- `ContactForm` — formulário de contato
- `Footer` — rodapé

### Componentes de suporte

- `Section` — wrapper padronizado para seções
- `SectionHeader` — título e texto de introdução de seção
- `ServiceCard` — cartão individual de serviço
- `ImageWithLoading` — imagem com skeleton e fallback
- `Button` — componente de botão variantes
- `ThemeProvider` — provedor de temas claro/escuro

### Camadas de dados e lógica

- `lib/constants/services.ts` — lista de serviços com categoria e imagem
- `hooks/use-services.ts` — hook para filtragem e exposição de serviços
- `lib/utils/icons.ts` — mapeamento de ícones Phosphor por nome

## Padrões adotados

### SOLID

- **S**: componentes com responsabilidade única
- **O**: fácil extensão de componentes sem modificar lógica existente
- **L**: uso de tipos e props que podem ser substituídos sem quebrar
- **I**: interfaces específicas para cada componente
- **D**: dependências injetadas de forma desacoplada

### Design Patterns

- **Factory Pattern**: `getIconComponent()` fornece ícone dinamicamente
- **Custom Hook Pattern**: `useServices()` centraliza lógica de dados
- **Compound Component Pattern**: `Section` + `SectionHeader`
- **Container/Presentational Pattern**: separação entre UI e dados

### Clean Code

- Nomes descritivos e consistentes
- Funções e componentes pequenos
- Arquitetura modular e reutilizável
- Menos acoplamento entre camadas

## Melhorias de UI/UX

### Acessibilidade

- Navegação com `aria-label`
- Foco visível em botões e links
- Uso semântico de `nav`, `article` e `section`
- Menu mobile acessível

### Performance

- Imagens otimizadas com `next/image`
- Skeletons de carregamento
- Lazy loading de imagens secundárias
- Smooth scroll nas âncoras

### Experiência do usuário

- Design responsivo mobile/desktop
- Cartões de serviço com hover e transição suave
- Tema claro/escuro presente e consistente
- Texto claro sobre os serviços oferecidos

## Conteúdo do clube

O site contempla explicitamente:

- **Quadras e aulas** para `Tênis`, `Beach Tennis`, `Futevôlei` e `Pickleball`
- **Aulas de Pilates** para fortalecimento, equilíbrio e flexibilidade
- **Academia completa** com equipamentos modernos
- **Massagem** como serviço adicional, pago separadamente e sob consulta

## Como rodar o projeto

```bash
pnpm dev
# ou
npm run dev
```

Abra `http://localhost:3000` para ver o site.

## Sugestões de evolução

- Adicionar testes unitários para hooks e componentes
- Incluir Storybook para documentar UI
- Transformar serviços em conteúdo dinâmico via CMS
- Implementar mais micro-interações e animações suaves
- Adicionar PWA e suporte offline

