 Objetivo: Automatizar a preparação de arquivos HTML estáticos para migração para o WordPress.

  Contexto: Estou no processo de migrar um site HTML estático para um tema WordPress. Preciso converter todos os links internos relativos (ex: href="about.html") para
  uma estrutura de permalink amigável ao WordPress (ex: href="/about/").

  Sua tarefa é criar uma cópia do meu site e executar uma operação de "buscar e substituir" em todos os arquivos HTML para atualizar esses links.

  Plano de Ação Detalhado:

   1. Identifique os Arquivos de Origem: Comece listando todos os arquivos no diretório de trabalho atual para ter uma visão geral do site. Preste atenção especial aos
      nomes dos arquivos .html.
   2. Crie um Diretório de Destino:
       * Crie uma nova pasta chamada site_convertido.
       * Importante: Todas as modificações devem ser feitas nos arquivos dentro desta nova pasta. Não altere os arquivos originais.
   3. Copie Todos os Arquivos: Copie todo o conteúdo do diretório atual (incluindo subpastas, arquivos .css, .js, imagens, etc.) para o novo diretório site_convertido.
   4. Execute a Busca e Substituição:
       * Agora, opere apenas dentro do diretório site_convertido.
       * Para cada arquivo .html dentro de site_convertido, execute as seguintes operações de busca e substituição para todos os atributos href:


  ┌───────────────────────┬──────────────────────────┐
  │ Buscar por (Exemplo)  │ Substituir por (Exemplo) │
  ├───────────────────────┼──────────────────────────┤
  │ href="index.html"     │ href="/"                 │
  │ href="about.html"     │ href="/about/"           │
  │ href="contact.html"   │ href="/contact/"         │
  │ href="portfolio.html" │ href="/portfolio/"       │
  └───────────────────────┴──────────────────────────┘


       * Continue este padrão para todos os arquivos .html que você encontrou no passo 1. O padrão geral é: href="[nome-da-pagina].html" se torna
         href="/[nome-da-pagina]/".

   5. Verificação Final:
       * Após concluir todas as substituições, informe que o processo foi finalizado.
       * Os arquivos resultantes na pasta site_convertido estarão prontos para que eu possa copiar seu conteúdo HTML e colá-lo no editor de páginas do WordPress, agora
         com os links já corretos.

  ---