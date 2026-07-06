import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import http from 'http';

const __dirname = path.resolve();
const DIST_STATIC = path.join(__dirname, 'static-unzipped');

// List of all neighborhoods (copied from src/lib/bairros.ts for standalone execution)
const BAIRROS = [
  { slug: "adalgisa", nome: "Adalgisa", avenidaPrincipal: "Avenida Adalgisa", pontoReferencia: "São Francisco Golf Club", caracteristicaObra: "reformas residenciais e acabamentos de alto padrão" },
  { slug: "alianca", nome: "Aliança", avenidaPrincipal: "Avenida Getúlio Vargas", pontoReferencia: "UBS local do Aliança", caracteristicaObra: "reformas e ampliações de moradias" },
  { slug: "ayrosa", nome: "Ayrosa", avenidaPrincipal: "Avenida São José", pontoReferencia: "Ribeirão Carapicuíba", caracteristicaObra: "pequenas reformas residenciais e lajes" },
  { slug: "bandeiras", nome: "Bandeiras", avenidaPrincipal: "Avenida João de Andrade", pontoReferencia: "Praça das Bandeiras", caracteristicaObra: "construções residenciais e reformas rápidas" },
  { slug: "baronesa", nome: "Baronesa", avenidaPrincipal: "Avenida Presidente Médici", pontoReferencia: "Parque do Baronesa", caracteristicaObra: "reformas residenciais e concretagem de lajes" },
  { slug: "bela-vista", nome: "Bela Vista", avenidaPrincipal: "Avenida Santo Antônio", pontoReferencia: "Praça do Bela Vista", caracteristicaObra: "novas verticais e reformas de sobrados" },
  { slug: "bonanca", nome: "Bonança", avenidaPrincipal: "Avenida Juscelino Kubitschek de Oliveira", pontoReferencia: "UBS Bonança", caracteristicaObra: "construções novas e ampliações de casas" },
  { slug: "bonfim", nome: "Bonfim", avenidaPrincipal: "Avenida das Nações Unidas", pontoReferencia: "Estação Osasco da CPTM", caracteristicaObra: "reformas comerciais e expansão de galpões" },
  { slug: "bussocaba", nome: "Bussocaba", avenidaPrincipal: "Avenida Bussocaba", pontoReferencia: "Viaduto Reinaldo de Oliveira", caracteristicaObra: "reformas residenciais e lajes" },
  { slug: "castelo-branco", nome: "Castelo Branco", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Acesso à Rodovia Castelo Branco", caracteristicaObra: "galpões logísticos e reformas comerciais" },
  { slug: "centro", nome: "Centro", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Calçadão da Antônio Agú", caracteristicaObra: "reformas de lojas comerciais e expansões" },
  { slug: "cidade-das-flores", nome: "Cidade das Flores", avenidaPrincipal: "Avenida dos Flamboyants", pontoReferencia: "Estação Quitaúna", caracteristicaObra: "sobrados residenciais e reformas rápidas" },
  { slug: "cidade-de-deus", nome: "Cidade de Deus", avenidaPrincipal: "Avenida Bussocaba", pontoReferencia: "Fundação Bradesco", caracteristicaObra: "acabamentos e reformas de escritórios" },
  { slug: "cipava", nome: "Cipava", avenidaPrincipal: "Avenida Antônio Carlos Costa", pontoReferencia: "Parque de Lazer Antônio Temporim", caracteristicaObra: "reformas residenciais de sobrados" },
  { slug: "city-bussocaba", nome: "City Bussocaba", avenidaPrincipal: "Avenida Prefeito Hirant Sanazar", pontoReferencia: "Parque Municipal Chico Mendes", caracteristicaObra: "acabamentos residenciais de alto padrão" },
  { slug: "conceicao", nome: "Conceição", avenidaPrincipal: "Avenida Clóvis Assaf", pontoReferencia: "Parque de Lazer do Jardim Conceição", caracteristicaObra: "construções residenciais e ampliações de casas" },
  { slug: "helena-maria", nome: "Helena Maria", avenidaPrincipal: "Avenida João de Andrade", pontoReferencia: "Centro Comercial do Helena Maria", caracteristicaObra: "concretagem de lajes e reformas comerciais" },
  { slug: "iapi", nome: "IAPI", avenidaPrincipal: "Avenida Getúlio Vargas", pontoReferencia: "Praça do IAPI", caracteristicaObra: "reformas de sobrados residenciais e muros" },
  { slug: "industrial-altino", nome: "Altino", avenidaPrincipal: "Avenida Henry Ford", pontoReferencia: "Estação Presidente Altino da CPTM", caracteristicaObra: "reformas industriais e novos galpões" },
  { slug: "industrial-anhanguera", nome: "Anhanguera", avenidaPrincipal: "Avenida Anhanguera", pontoReferencia: "Acesso à Rodovia Anhanguera", caracteristicaObra: "reformas comerciais de galpões e garagens" },
  { slug: "industrial-autonomistas", nome: "Autonomistas", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Shopping União de Osasco", caracteristicaObra: "reformas de lojas comerciais e show rooms" },
  { slug: "industrial-centro", nome: "Centro Industrial", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Calçadão de Osasco", caracteristicaObra: "galpões comerciais e expansões corporativas" },
  { slug: "industrial-mazzei", nome: "Mazzei", avenidaPrincipal: "Avenida São José", pontoReferencia: "UBS do Mazzei", caracteristicaObra: "reformas residenciais e estruturais rápidas" },
  { slug: "industrial-remedios", nome: "Remédios Industrial", avenidaPrincipal: "Avenida dos Remédios", pontoReferencia: "Ponte dos Remédios", caracteristicaObra: "reformas de depósitos e comércios locais" },
  { slug: "jaguaribe", nome: "Jaguaribe", avenidaPrincipal: "Avenida Flora", pontoReferencia: "Parque Antônio Temporim", caracteristicaObra: "sobrados residenciais e reformas gerais" },
  { slug: "jardim-dabril", nome: "Jardim D'Abril", avenidaPrincipal: "Avenida Prestes Maia", pontoReferencia: "Divisa com Butantã", caracteristicaObra: "reformas residenciais e muros de contenção" },
  { slug: "jardim-das-flores", nome: "Jardim das Flores", avenidaPrincipal: "Avenida das Flores", pontoReferencia: "Estação Jardim das Flores", caracteristicaObra: "sobrados residenciais e acabamentos finos" },
  { slug: "jardim-elvira", nome: "Jardim Elvira", avenidaPrincipal: "Avenida Presidente Médici", pontoReferencia: "Praça do Jardim Elvira", caracteristicaObra: "lajes residenciais e muros de divisa" },
  { slug: "jardim-novo-osasco", nome: "Jardim Novo Osasco", avenidaPrincipal: "Avenida Novo Osasco", pontoReferencia: "Terminal Novo Osasco", caracteristicaObra: "ampliação de residências e reformas de calçadas" },
  { slug: "jardim-roberto", nome: "Jardim Roberto", avenidaPrincipal: "Avenida João de Andrade", pontoReferencia: "UBS Jardim Roberto", caracteristicaObra: "pequenas reformas e lajes residenciais" },
  { slug: "km-18", nome: "Km 18", avenidaPrincipal: "Avenida Hildebrando de Lima", pontoReferencia: "Estação Comandante Sampaio CPTM", caracteristicaObra: "sobrados de médio padrão e calçadas" },
  { slug: "metalurgicos", nome: "Metalúrgicos", avenidaPrincipal: "Avenida Sarah Veloso", pontoReferencia: "Praça dos Metalúrgicos", caracteristicaObra: "moradias residenciais e ampliações de garagens" },
  { slug: "munhoz-junior", nome: "Munhoz Júnior", avenidaPrincipal: "Avenida Mutinga", pontoReferencia: "Ponto Final do Munhoz", caracteristicaObra: "construções populares e lajes" },
  { slug: "mutinga", nome: "Mutinga", avenidaPrincipal: "Avenida Mutinga", pontoReferencia: "Parque do Jardim Mutinga", caracteristicaObra: "reformas residenciais e calçadas de concreto" },
  { slug: "padroeira", nome: "Padroeira", avenidaPrincipal: "Avenida Benedito Alves Turíbio", pontoReferencia: "Supermercado local do Padroeira", caracteristicaObra: "lajes residenciais e muros de contenção" },
  { slug: "paiva-ramos", nome: "Paiva Ramos", avenidaPrincipal: "Avenida Sarah Veloso", pontoReferencia: "UBS do Paiva Ramos", caracteristicaObra: "reformas residenciais e muros de divisa" },
  { slug: "parque-continental", nome: "Parque Continental", avenidaPrincipal: "Avenida Corifeu de Azevedo Marques", pontoReferencia: "Divisa com Continental São Paulo", caracteristicaObra: "acabamentos finos e construções de alto padrão" },
  { slug: "pestana", nome: "Pestana", avenidaPrincipal: "Avenida Antônio Carlos Costa", pontoReferencia: "Parque Pestana", caracteristicaObra: "reformas de sobrados e lajes" },
  { slug: "piratininga", nome: "Piratininga", avenidaPrincipal: "Avenida Edmundo Amaral", pontoReferencia: "Borboletário de Osasco", caracteristicaObra: "reformas comerciais e galpões de pequeno porte" },
  { slug: "platina", nome: "Platina", avenidaPrincipal: "Avenida Getúlio Vargas", pontoReferencia: "UBS local do Platina", caracteristicaObra: "reformas residenciais rápidas e muros" },
  { slug: "portal-doeste", nome: "Portal D'Oeste", avenidaPrincipal: "Avenida Presidente Médici", pontoReferencia: "CEU Portal D'Oeste", caracteristicaObra: "pequenas construções e lajes residenciais" },
  { slug: "presidente-altino", nome: "Presidente Altino", avenidaPrincipal: "Avenida Henry Ford", pontoReferencia: "Estação CPTM Presidente Altino", caracteristicaObra: "reformas residenciais e verticais em expansão" },
  { slug: "quitauna", nome: "Quitaúna", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Estação Quitaúna da CPTM", caracteristicaObra: "novos edifícios residenciais e reformas rápidas" },
  { slug: "raposo-tavares", nome: "Raposo Tavares", avenidaPrincipal: "Rodovia Raposo Tavares", pontoReferencia: "Acesso ao Rodoanel", caracteristicaObra: "expansão de condomínios residenciais" },
  { slug: "remedios", nome: "Remédios", avenidaPrincipal: "Avenida dos Remédios", pontoReferencia: "Ponte dos Remédios e Divisa SP", caracteristicaObra: "reformas de sobrados residenciais e lojas" },
  { slug: "rochdale", nome: "Rochdale", avenidaPrincipal: "Avenida Brasil", pontoReferencia: "Parque do Rochdale", caracteristicaObra: "lajes residenciais e reformas comerciais rápidas" },
  { slug: "santa-fe", nome: "Santa Fé", avenidaPrincipal: "Avenida Mutinga", pontoReferencia: "UBS do Santa Fé", caracteristicaObra: "reformas residenciais e ampliações de garagens" },
  { slug: "santa-maria", nome: "Santa Maria", avenidaPrincipal: "Avenida Victor Civita", pontoReferencia: "Rodoanel Osasco", caracteristicaObra: "reformas em condomínios e casas residenciais" },
  { slug: "santo-antonio", nome: "Santo Antônio", avenidaPrincipal: "Avenida João de Andrade", pontoReferencia: "Igreja de Santo Antônio", caracteristicaObra: "sobrados residenciais e comércio de bairro" },
  { slug: "sao-pedro", nome: "São Pedro", avenidaPrincipal: "Avenida Pedro Pinho", pontoReferencia: "Praça do São Pedro", caracteristicaObra: "reformas rápidas e lajes residenciais" },
  { slug: "setor-militar", nome: "Setor Militar", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Quartel de Quitaúna", caracteristicaObra: "pequenas reformas e calçadas institucionais" },
  { slug: "tres-montanhas", nome: "Três Montanhas", avenidaPrincipal: "Avenida das Três Montanhas", pontoReferencia: "Lago das Três Montanhas", caracteristicaObra: "acabamentos finos e construções de alto padrão" },
  { slug: "umuarama", nome: "Umuarama", avenidaPrincipal: "Avenida Antônio Carlos Costa", pontoReferencia: "Fundação Bradesco Umuarama", caracteristicaObra: "reformas residenciais e sobrados" },
  { slug: "veloso", nome: "Veloso", avenidaPrincipal: "Avenida Sarah Veloso", pontoReferencia: "UBS do Veloso", caracteristicaObra: "lajes residenciais e ampliações populares" },
  { slug: "vila-campesina", nome: "Vila Campesina", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Prefeitura Municipal de Osasco", caracteristicaObra: "edifícios corporativos e acabamentos finos" },
  { slug: "vila-menck", nome: "Vila Menck", avenidaPrincipal: "Avenida Mutinga", pontoReferencia: "Parque da Vila Menck", caracteristicaObra: "reformas residenciais de sobrados" },
  { slug: "vila-militar", nome: "Vila Militar", avenidaPrincipal: "Avenida dos Autonomistas", pontoReferencia: "Área Militar de Quitaúna", caracteristicaObra: "acabamentos e pequenas reformas" },
  { slug: "vila-osasco", nome: "Vila Osasco", avenidaPrincipal: "Avenida Santo Antônio", pontoReferencia: "Catedral Santo Antônio", caracteristicaObra: "sobrados residenciais e reformas finas" },
  { slug: "vila-yara", nome: "Vila Yara", avenidaPrincipal: "Avenida Yara", pontoReferencia: "Shopping União de Osasco", caracteristicaObra: "acabamentos finos e reformas de lojas" },
  { slug: "vila-yolanda", nome: "Vila Yolanda", avenidaPrincipal: "Avenida Sarah Veloso", pontoReferencia: "Praça do Yolanda", caracteristicaObra: "reformas residenciais de sobrados" },
  { slug: "primeiro-de-maio", nome: "Primeiro de Maio", avenidaPrincipal: "Avenida João de Andrade", pontoReferencia: "UBS Primeiro de Maio", caracteristicaObra: "construções e lajes populares residenciais" },
  { slug: "fazendinha", nome: "Fazendinha", avenidaPrincipal: "Avenida Mutinga", pontoReferencia: "UBS local da Fazendinha", caracteristicaObra: "pequenas reformas e ampliações de casas" }
];

const PAGES = [
  { path: '/', out: 'index.html' },
  { path: '/comprar-betoneira', out: 'comprar-betoneira/index.html' },
  { path: '/servicos', out: 'servicos/index.html' },
  { path: '/sobre', out: 'sobre/index.html' },
  { path: '/contato', out: 'contato/index.html' },
  { path: '/termos', out: 'termos/index.html' },
  { path: '/privacidade', out: 'privacidade/index.html' },
  { path: '/locacao-de-betoneiras', out: 'locacao-de-betoneiras/index.html' },
  { path: '/locacao-caminhao-betoneira', out: 'locacao-caminhao-betoneira/index.html' },
  { path: '/entrega-e-retirada-de-betoneira', out: 'entrega-e-retirada-de-betoneira/index.html' },
  { path: '/blog', out: 'blog/index.html' },
  { path: '/blog/melhores-marcas-de-betoneira', out: 'blog/melhores-marcas-de-betoneira/index.html' },
  { path: '/betoneira-120l', out: 'betoneira-120l/index.html' },
  { path: '/betoneira-150l', out: 'betoneira-150l/index.html' },
  { path: '/betoneira-250l', out: 'betoneira-250l/index.html' },
  { path: '/betoneira-400l-eletrica', out: 'betoneira-400l-eletrica/index.html' },
  { path: '/betoneira-400l-gasolina', out: 'betoneira-400l-gasolina/index.html' },
  { path: '/caminhao-betoneira', out: 'caminhao-betoneira/index.html' }
];

const XML_PAGES = [
  { path: '/sitemap.xml', out: 'sitemap.xml' },
  { path: '/post-sitemap.xml', out: 'post-sitemap.xml' },
  { path: '/page-sitemap.xml', out: 'page-sitemap.xml' },
  { path: '/local-sitemap.xml', out: 'local-sitemap.xml' }
];

// Add neighborhood pages
BAIRROS.forEach(b => {
  PAGES.push({
    path: `/alugar-betoneira-em-${b.slug}`,
    out: `alugar-betoneira-em-${b.slug}/index.html`
  });
});

async function main() {
  console.log('⚡ Starting static site generator...');

  // 1. Create structure
  if (!fs.existsSync(DIST_STATIC)) {
    fs.mkdirSync(DIST_STATIC, { recursive: true });
  }
  if (!fs.existsSync(path.join(DIST_STATIC, 'assets'))) {
    fs.mkdirSync(path.join(DIST_STATIC, 'assets'), { recursive: true });
  }
  if (!fs.existsSync(path.join(DIST_STATIC, 'blog'))) {
    fs.mkdirSync(path.join(DIST_STATIC, 'blog'), { recursive: true });
  }

  // 2. Identify and copy CSS
  const assetsDir = path.join(__dirname, 'dist', 'client', 'assets');
  let cssFile = '';
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css')) || '';
    if (cssFile) {
      console.log(`🎨 Found CSS stylesheet: ${cssFile}`);
      fs.copyFileSync(path.join(assetsDir, cssFile), path.join(DIST_STATIC, 'assets', 'styles.css'));
    } else {
      console.error('❌ Could not find styles-*.css in dist/client/assets. Make sure you ran npm run build first.');
      process.exit(1);
    }

    // Copy webp images and other images from client assets
    console.log('🖼️ Copying webp images from build...');
    files.forEach(file => {
      if (file.endsWith('.webp')) {
        fs.copyFileSync(path.join(assetsDir, file), path.join(DIST_STATIC, 'assets', file));
      }
    });
  } else {
    console.error('❌ Build directory dist/client/assets does not exist. Run npm run build first.');
    process.exit(1);
  }

  // 3. Copy all files from public folder (manifest, robots, sitemaps, etc.)
  const publicDir = path.join(__dirname, 'public');
  if (fs.existsSync(publicDir)) {
    console.log('📁 Copying all files from public folder...');
    const copyRecursive = (src, dest) => {
      if (fs.statSync(src).isDirectory()) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(child => copyRecursive(path.join(src, child), path.join(dest, child)));
      } else {
        fs.copyFileSync(src, dest);
      }
    };
    fs.readdirSync(publicDir).forEach(item => {
      copyRecursive(path.join(publicDir, item), path.join(DIST_STATIC, item));
    });
  }

  // Copy extra root files to match the example template
  ['README.md', '.assetsignore'].forEach(file => {
    const srcPath = path.join(__dirname, file);
    if (fs.existsSync(srcPath)) {
      console.log(`📄 Copying ${file} to root...`);
      fs.copyFileSync(srcPath, path.join(DIST_STATIC, file));
    }
  });

  // 4. Start the dev server in the background
  console.log('🚀 Spawning dev server...');
  const env = { ...process.env, PORT: '5199' };
  const serverProc = spawn('npm', ['run', 'dev', '--', '--port', '5199'], {
    cwd: __dirname,
    env,
    shell: true
  });

  serverProc.stdout.on('data', (data) => {
    console.log(`[Vinxi stdout] ${data}`);
  });

  serverProc.stderr.on('data', (data) => {
    console.error(`[Vinxi stderr] ${data}`);
  });

  // Helper to check if server is listening
  const pingServer = () => {
    return new Promise((resolve) => {
      const req = http.request({
        host: '127.0.0.1',
        port: 5199,
        path: '/',
        method: 'GET',
        timeout: 1000
      }, (res) => {
        resolve(res.statusCode === 200);
      });
      req.on('error', () => resolve(false));
      req.end();
    });
  };

  // Wait for server to respond
  console.log('⏳ Waiting for dev server to start on port 5199...');
  let connected = false;
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 1000));
    connected = await pingServer();
    if (connected) {
      console.log('✅ Connected to dev server on port 5199!');
      break;
    }
  }

  if (!connected) {
    console.error('❌ Failed to connect to local dev server. Exiting.');
    serverProc.kill();
    process.exit(1);
  }

  // 5. Fetch all pages and post-process
  console.log(`🌐 Crawling ${PAGES.length} pages...`);

  // Define static header replacements to implement clean, state-free responsive header with standard vanilla dropdown toggles.
  const staticHeader = `
  <header class="sticky top-0 z-40 w-full border-b-2 border-[var(--brand-ink)] bg-background/95 backdrop-blur transition-[height,box-shadow] duration-200" id="site-header">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 h-16 transition-[height] duration-200" id="header-container">
      <a href="/" class="flex items-center gap-1.5 sm:gap-2">
        <img src="/assets/logo-betoneira-osasco.webp" alt="Betoneira Osasco" width="56" height="56" class="h-10 w-10 sm:h-14 sm:w-14 object-contain">
        <span class="font-display text-base sm:text-lg md:text-xl tracking-tight text-[var(--brand-ink)]">
          Betoneira <span class="text-[var(--brand-navy)]">Osasco</span>
        </span>
      </a>
      <nav class="hidden items-center gap-7 text-sm font-medium uppercase tracking-wider md:flex">
        <a href="/" class="nav-link">Início</a>
        <div class="relative group">
          <a href="/servicos" class="nav-link flex items-center gap-1">
            Serviços
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
          </a>
          <div class="absolute top-full left-0 pt-2 w-56 hidden group-hover:block z-50">
            <div class="flex flex-col bg-white border-2 border-[var(--brand-ink)] hard-shadow">
              <a href="/locacao-de-betoneiras" class="px-4 py-3 hover:bg-[var(--brand-concrete)] hover:text-[var(--brand-navy)] border-b border-[var(--brand-ink)]/10 text-xs font-bold transition-colors">Locação de Betoneiras</a>
              <a href="/locacao-caminhao-betoneira" class="px-4 py-3 hover:bg-[var(--brand-concrete)] hover:text-[var(--brand-navy)] border-b border-[var(--brand-ink)]/10 text-xs font-bold transition-colors">Caminhão Betoneira</a>
              <a href="/entrega-e-retirada-de-betoneira" class="px-4 py-3 hover:bg-[var(--brand-concrete)] hover:text-[var(--brand-navy)] text-xs font-bold transition-colors">Entrega e Retirada</a>
            </div>
          </div>
        </div>
        <a href="/comprar-betoneira" class="nav-link">Comprar</a>
        <a href="/sobre" class="nav-link">Sobre</a>
        <a href="/contato" class="nav-link">Contato</a>
        <a href="/blog" class="nav-link">Blog</a>
      </nav>
      <div class="flex items-center gap-2 sm:gap-4">
        <a href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento" target="_blank" rel="noopener" class="inline-flex border-2 border-[var(--brand-ink)] bg-[#25D366] text-white hover:bg-[#128C7E] px-2 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_0_rgba(0,0,0,1)] md:hard-shadow items-center gap-1.5 transition-all">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 32 32"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.2 7.9L0 32l8.4-2.2c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.9-2l-.5-.3-5 1.3 1.3-4.8-.3-.5C3.2 20.4 2.5 18.2 2.5 16 2.5 8.6 8.6 2.5 16 2.5c3.6 0 7 1.4 9.5 4 2.5 2.5 4 5.9 4 9.5 0 7.4-6.1 13.3-13.5 13.3zm7.6-10c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.6-5-.4-.7.4-.7 1.2-2.3.1-.3.1-.5 0-.7-.1-.2-1-2.3-1.3-3.2-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5s-1.5 1.5-1.5 3.6 1.5 4.2 1.7 4.5c.2.3 3 4.6 7.3 6.4 1 .5 1.8.7 2.5.9 1 .3 2 .3 2.8.2 1.1-.2 2.4-1 2.7-1.9.3-.9.3-1.8.2-1.9 0-.2-.4-.3-.8-.5z"/></svg>
          <span>(11) 97546-5766</span>
        </a>
        <button type="button" class="flex h-10 w-10 items-center justify-center border-2 border-[var(--brand-ink)] bg-[var(--brand-yellow)] text-[var(--brand-ink)] shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-[0px_0px_0_0_rgba(0,0,0,1)] md:hidden transition-all" id="mobile-menu-btn" aria-label="Abrir menu">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" id="mobile-menu-icon-open">
            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
          </svg>
          <svg class="w-5 h-5 fill-current hidden" viewBox="0 0 24 24" id="mobile-menu-icon-close">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile Menu Panel (Hidden by default, controlled via JS toggles) -->
    <nav class="border-t-2 border-[var(--brand-ink)] bg-background py-4 px-4 hidden flex-col gap-3 md:hidden animate-fade-in" id="mobile-menu-panel">
      <a href="/" class="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Início</a>
      <div class="flex flex-col border-b border-[var(--brand-ink)]/10">
        <button type="button" class="flex items-center justify-between py-2 text-base font-bold uppercase tracking-wider hover:text-[var(--brand-navy)] transition-colors text-left w-full" id="mobile-services-toggle">
          <span>Serviços</span>
          <svg class="w-5 h-5 text-[var(--brand-ink)] transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="mobile-services-chevron">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="hidden flex-col pl-4 pb-3 pt-1 gap-3 border-l-2 border-[var(--brand-yellow)] ml-1 animate-fade-in" id="mobile-services-panel">
          <a href="/servicos" class="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Visão Geral</a>
          <a href="/locacao-de-betoneiras" class="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Locação de Betoneiras</a>
          <a href="/locacao-caminhao-betoneira" class="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Caminhão Betoneira</a>
          <a href="/entrega-e-retirada-de-betoneira" class="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-[var(--brand-navy)] transition-colors">Entrega e Retirada</a>
        </div>
      </div>
      <a href="/comprar-betoneira" class="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Comprar</a>
      <a href="/sobre" class="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Sobre</a>
      <a href="/contato" class="text-base font-bold uppercase tracking-wider py-2 border-b border-[var(--brand-ink)]/10 hover:text-[var(--brand-navy)] transition-colors">Contato</a>
      <a href="/blog" class="text-base font-bold uppercase tracking-wider py-2 hover:text-[var(--brand-navy)] transition-colors">Blog</a>
      <div class="mt-2 pt-2 border-t border-[var(--brand-ink)]/10">
        <a href="https://wa.me/5511975465766?text=Vim%20do%20site%20gostaria%20de%20fazer%20or%C3%A7amento" target="_blank" rel="noopener" class="flex border-2 border-[var(--brand-ink)] bg-[#25D366] text-white hover:bg-[#128C7E] px-4 py-3 text-sm font-bold uppercase tracking-wider shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] items-center justify-center gap-2 transition-all">
          <svg class="w-5 h-5 fill-current" viewBox="0 0 32 32"><path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.8 5.5 2.2 7.9L0 32l8.4-2.2c2.3 1.3 4.9 2 7.6 2 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.4c-2.4 0-4.8-.7-6.9-2l-.5-.3-5 1.3 1.3-4.8-.3-.5C3.2 20.4 2.5 18.2 2.5 16 2.5 8.6 8.6 2.5 16 2.5c3.6 0 7 1.4 9.5 4 2.5 2.5 4 5.9 4 9.5 0 7.4-6.1 13.3-13.5 13.3zm7.6-10c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.7-.2-1 .2-.3.4-1.1 1.3-1.3 1.6-.2.3-.5.3-.9.1-2.4-1.2-4-2.2-5.6-5-.4-.7.4-.7 1.2-2.3.1-.3.1-.5 0-.7-.1-.2-1-2.3-1.3-3.2-.3-.8-.7-.7-1-.7h-.8c-.3 0-.7.1-1.1.5s-1.5 1.5-1.5 3.6 1.5 4.2 1.7 4.5c.2.3 3 4.6 7.3 6.4 1 .5 1.8.7 2.5.9 1 .3 2 .3 2.8.2 1.1-.2 2.4-1 2.7-1.9.3-.9.3-1.8.2-1.9 0-.2-.4-.3-.8-.5z"/></svg>
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </nav>
  </header>
  `;

  // Define vanilla JS to handle animations, toggles, header size and reveal animations.
  const vanillaScripts = `
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Mobile Menu Toggles
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenuPanel = document.getElementById('mobile-menu-panel');
      const openIcon = document.getElementById('mobile-menu-icon-open');
      const closeIcon = document.getElementById('mobile-menu-icon-close');

      if (mobileMenuBtn && mobileMenuPanel) {
        mobileMenuBtn.addEventListener('click', () => {
          const isOpen = !mobileMenuPanel.classList.contains('hidden');
          if (isOpen) {
            mobileMenuPanel.classList.add('hidden');
            mobileMenuPanel.classList.remove('flex');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
          } else {
            mobileMenuPanel.classList.remove('hidden');
            mobileMenuPanel.classList.add('flex');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
          }
        });
      }

      const mobileServicesToggle = document.getElementById('mobile-services-toggle');
      const mobileServicesPanel = document.getElementById('mobile-services-panel');
      const mobileServicesChevron = document.getElementById('mobile-services-chevron');

      if (mobileServicesToggle && mobileServicesPanel) {
        mobileServicesToggle.addEventListener('click', () => {
          const isPanelHidden = mobileServicesPanel.classList.contains('hidden');
          if (isPanelHidden) {
            mobileServicesPanel.classList.remove('hidden');
            mobileServicesPanel.classList.add('flex');
            if (mobileServicesChevron) mobileServicesChevron.classList.add('rotate-180');
          } else {
            mobileServicesPanel.classList.add('hidden');
            mobileServicesPanel.classList.remove('flex');
            if (mobileServicesChevron) mobileServicesChevron.classList.remove('rotate-180');
          }
        });
      }

      // 2. Sticky Header and Height Reduction on Scroll
      const header = document.getElementById('site-header');
      const headerContainer = document.getElementById('header-container');
      if (header && headerContainer) {
        const onScroll = () => {
          if (window.scrollY > 12) {
            header.classList.add('shadow-[0_4px_0_0_var(--brand-yellow)]');
            headerContainer.classList.remove('h-16');
            headerContainer.classList.add('h-14');
          } else {
            header.classList.remove('shadow-[0_4px_0_0_var(--brand-yellow)]');
            headerContainer.classList.remove('h-14');
            headerContainer.classList.add('h-16');
          }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }

      // 3. Scroll Reveal Observer
      const reveals = document.querySelectorAll('.reveal');
      if (reveals.length > 0) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
            }
          });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => observer.observe(el));
      }

      // 4. Highlight Active Navigation Links dynamically
      const currentPath = window.location.pathname;
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
          // Match index.html or exact matching path
          if (
            (currentPath === '/' && (href === '/')) ||
            (currentPath !== '/' && href !== '/' && currentPath.includes(href))
          ) {
            link.setAttribute('data-active', 'true');
          }
        }
      });
    });
  </script>
  `;

  for (const page of PAGES) {
    const url = `http://127.0.0.1:5199${page.path}`;
    try {
      const html = await new Promise((resolve, reject) => {
        http.get(url, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });

      console.log(`🌐 Crawled: ${page.path} -> ${page.out}`);

      const depth = page.out.split('/').length - 1;
      const rel = depth === 0 ? './' : '../'.repeat(depth);

      // 1. Strip ALL client hydration scripts (React/Vite/TanStack runtime)
      let processed = html
        // Remove <script type="module"> with src
        .replace(/<script\s+type="module"[^>]*src="[^"]*"[^>]*><\/script>/gi, '')
        // Remove <script type="module"> with inline content (react-refresh, etc.)
        .replace(/<script\s+type="module"[\s\S]*?<\/script>/gi, '')
        // Remove Vinxi scripts
        .replace(/<script[^>]*src="\/_vinxi[^"]*"[^>]*><\/script>/gi, '')
        // Remove @vite scripts
        .replace(/<script[^>]*src="\/@vite[^"]*"[^>]*><\/script>/gi, '')
        // Remove TanStack router stream scripts (class="$tsr")
        .replace(/<script[^>]*class="\$tsr"[^>]*>[\s\S]*?<\/script>/gi, '')
        // Remove TanStack scroll restoration inline scripts
        .replace(/<script>\(function\(t\)\{let s;try\{s=JSON[\.\s\S]*?<\/script>/gi, '')
        // Remove any script containing $_TSR or $R assignment (TanStack hydration)
        .replace(/<script[^>]*>[\s\S]*?\$_TSR[\s\S]*?<\/script>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?\$R\["tsr"\][\s\S]*?<\/script>/gi, '')
        // Remove vite preamble script
        .replace(/<script[^>]*>window\.__vite_plugin_react_preamble_installed__[^<]*<\/script>/gi, '')
        // Remove speculationrules script
        .replace(/<script type="speculationrules">[\s\S]*?<\/script>/gi, '');

      // 2. Inject static header
      const headerRegex = /<header[^>]*>([\s\S]*?)<\/header>/i;
      const relativeHeader = staticHeader
        .replace(/href="\/"/g, `href="${rel}"`)
        .replace(/href="\/([^"]+)"/g, (m, p) => `href="${rel}${p.replace(/\/$/, '')}/"`);
      processed = processed.replace(headerRegex, relativeHeader);

      // 3. Fix ALL absolute paths in one pass
      // Assets
      processed = processed.replace(/(href|src)="\/assets\/([^"]*)"/g, `$1="${rel}assets/$2"`);
      processed = processed.replace(/(href|src)="\/_slug-assets\/([^"]+)"/g, `$1="${rel}assets/$2"`);
      processed = processed.replace(/(href|src)="\/[^"]*assets\/([^"]+\.webp)"/g, `$1="${rel}assets/$2"`);
      // Favicons
      processed = processed.replace(/href="\/favicon\.(png|ico)"/g, `href="${rel}favicon.$1"`);
      processed = processed.replace(/content="\/favicon/g, `content="${rel}favicon`);
      // CSS - remove ONLY local/Vite hashed stylesheets (NOT Google Fonts or other external links)
      processed = processed.replace(/<link[^>]*rel="stylesheet"[^>]*href="(?!https?:\/\/)[^"]*"[^>]*>/gi, `<link rel="stylesheet" href="${rel}assets/styles.css">\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Archivo+Black&family=IBM+Plex+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap">`);
      // Internal navigation
      processed = processed.replace(/href="(\/(?!\/)(?![^"]*:)[^"#?]*)"/g, (match, p1) => {
        let normalized = p1.replace(/^\//, '');
        if (normalized === '') return `href="${rel}"`;
        if (!normalized.endsWith('/') && !normalized.includes('.')) normalized += '/';
        return `href="${rel}${normalized}"`;
      });

      // 4. Inject Clarity and vanilla JS
      const clarityScript = `\n<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "wvfpw6mx5c");</script>\n</head>`;
      processed = processed.replace('</head>', clarityScript);
      processed = processed.replace('</body>', `${vanillaScripts}\n</body>`);

      // Removed base tag because it breaks relative paths when used with relative prefixes

      // 5. Write to file
      const outPath = path.join(DIST_STATIC, page.out);
      const outDir = path.dirname(outPath);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }
      fs.writeFileSync(outPath, processed, 'utf8');

    } catch (err) {
      console.error(`❌ Error crawling ${page.path}: ${err.message}`);
    }
  }

  // Fetch XML sitemaps
  console.log(`🌐 Fetching ${XML_PAGES.length} XML sitemaps...`);
  for (const page of XML_PAGES) {
    const url = `http://127.0.0.1:5199${page.path}`;
    try {
      const xml = await new Promise((resolve, reject) => {
        http.get(url, (res) => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(data));
        }).on('error', reject);
      });

      console.log(`🌐 Crawled XML: ${page.path} -> ${page.out}`);
      const outPath = path.join(DIST_STATIC, page.out);
      fs.writeFileSync(outPath, xml, 'utf8');
    } catch (err) {
      console.error(`❌ Error crawling ${page.path}: ${err.message}`);
    }
  }

  // 6. Tear down dev server
  console.log('🔌 Stopping dev server...');
  serverProc.kill();

  console.log('🎉 Static site successfully compiled in dist-static/!');
}

main().catch(err => {
  console.error('❌ Critical error in static generation:', err);
  process.exit(1);
});
