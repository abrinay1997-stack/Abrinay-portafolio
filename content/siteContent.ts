
import { Project, Credit } from '../types';

export const NAV_LINKS = [
  { name: 'Inicio', type: 'page', page: 'home', href: '#hero' },
  { name: 'Biografía', type: 'page', page: 'biography', href: '#bio' },
  { name: 'Catálogo', type: 'anchor', href: '#work' },
  { name: 'Sincronización', type: 'anchor', href: '#spotify-showcase' },
  { name: 'Prensa', type: 'anchor', href: '#press' },
  { name: 'Créditos', type: 'anchor', href: '#credits' },
  { name: 'Contacto', type: 'anchor', href: '#contact' },
];

export const HERO_CONTENT = {
  title: "ABRINAY",
  subtitle: "Diseño Sonoro & Composición para Cine y Medios Digitales",
  ctaPrimary: { text: "Solicitar Propuesta", href: "mailto:abrinay1997@gmail.com" },
  ctaSecondary: { text: "Escuchar Reel", href: "#work" },
  location: "Estudio Independiente / Bogotá - PTY"
};

export const PROJECTS: Project[] = [
  {
    id: 'f1',
    title: 'Peter: Ni soldado, ni civil, ni traidor',
    genre: 'Original Score / Documentary',
    description: 'Banda sonora original para el largometraje documental sobre la invasión a Panamá.',
    category: 'film',
    imageUrl: 'https://cdn.myportfolio.com/2d2135c2-cc3b-4c97-8e3e-ba235dd00230/d9b7d24a-cf34-4286-b101-42eb1b574dcd_rw_1200.png?h=2b603ec46503ef64d59885837fd0934b'
  },
  {
    id: 'f2',
    title: 'Cuando Florezcan los Guayacanes',
    genre: 'Film Score / Drama',
    description: 'Composición integral y diseño sonoro para la pieza cinematográfica panameña.',
    category: 'film',
    imageUrl: 'https://elsiglo.com.pa/binrepository/600x384/0c0/0d0/none/275766432/IHJJ/6132bf4a1adc1_ES24184296_MG281493175.jpg'
  },
  {
    id: 'f3',
    title: 'Memorial',
    genre: 'Original Score / Atmosphere',
    description: 'Pieza conmemorativa de profunda carga emocional y diseño sonoro inmersivo.',
    category: 'film',
    imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/d4/b5/33/d4b5335d-c79c-ac17-1e9d-f7c1dee67a96/199257827093_cover.jpg/600x600cc.webp'
  },
  {
    id: 'p1',
    title: 'Manda Tu Pista',
    genre: 'Urban / Winner Single',
    description: 'Producción ganadora de la primera temporada del reality de Telemetro.',
    category: 'prod',
    imageUrl: 'https://media.telemetro.com/p/7609770dd3515f41f77001a8d63d9b02/adjuntos/311/imagenes/016/603/0016603507/captura-pantalla-931png.png'
  },
  {
    id: 'p2',
    title: 'Dos Estaciones',
    genre: 'Ambient / Experimental',
    description: 'Paisajes sonoros de la obra "Diálogos entre el clima y la humanidad".',
    category: 'film',
    imageUrl: 'https://elsiglo.com.pa/binrepository/700x466/0c36/700d393/none/275766432/CFFD/danza1_181-11206189_20250905134932.jpg'
  },
  {
    id: 'p3',
    title: 'The Orchard Selection',
    genre: 'Production / Distribution',
    description: 'Curaduría y distribución global bajo el sello de Sony Music / The Orchard.',
    category: 'prod',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273676c89697960377045939221'
  }
];

export const SPOTIFY_LINKS: Record<string, string> = {
  'f1': 'https://open.spotify.com/intl-es/album/3ro7kOlve8NELlySdBVpIR',
  'f2': 'https://open.spotify.com/intl-es/album/45oY2EKuZvN0uujVbckYkw',
  'f3': 'https://music.apple.com/pa/album/memorial-single/1792578270',
  'p1': 'https://open.spotify.com/intl-es/track/1y9mnArBtexJx9WUuoVKKK',
  'p2': 'https://elsiglo.com.pa/farandula/dos-estaciones-dialogos-entre-el-clima-y-la-humanidad-MK15792259',
  'p3': 'https://open.spotify.com/intl-es/track/5tuxq8IrJspC0eCeB3aOTm'
};

export const SPOTIFY_TRACKS = [
    { id: "5tuxq8IrJspC0eCeB3aOTm", artist: "RichardLove / Prod. Abrinay" },
    { id: "1y9mnArBtexJx9WUuoVKKK", artist: "Avalon Davies / Prod. Abrinay" },
    { id: "6jnSWHSPerX58A6Rs7U7tJ", artist: "RichardLove / Sync. Abrinay" },
    { id: "14anQ0yuu7PLwakdzleVsh", artist: "Abrinay Studios" },
    { id: "6oykdY0Ra3JsgSQjsytYpn", artist: "Abrinay - Original Master" },
    { id: "7exDUiOuHPt51xdldD5Eql", artist: "Abrinay - Atmospheric" },
    { id: "4sfCjMiXfz29zzA9Vdcnvc", artist: "Urban Archives" },
    { id: "42YcC0seZbUwcejQu0166M", artist: "Production Selection" },
    { id: "1Ej6ek0BCh8lmLVrldyGXf", artist: "Independent Works" },
    { id: "6twwPRrrY6L20ifK0zi8hm", artist: "BukoFlow Sessions" },
    { id: "0x8FCr0F2ariTYXvh8UlYN", artist: "The Orchard Master" },
    { id: "42kyjeRgca5cVN6y36SVUA", artist: "Sync Library" },
    { id: "1v1imOjDTa0fW9CTVpLG9k", artist: "High Fidelity Archives" },
    { id: "1IgaDmiim7i6eKSyJsdz7e", artist: "Abrinay - Ending" }
];

export const PRESS_ITEMS = [
  {
    source: 'MEDIUM',
    title: 'PETER: NI SOLDADO, NI CIVIL, NI TRAIDOR: UN CORTO QUE REVIVE LA MEMORIA DEL 20 DE DICIEMBRE',
    date: 'MEMORIA HISTÓRICA',
    url: 'https://medium.com/@Culturizandote/peter-ni-soldado-ni-civil-ni-traidor-un-corto-que-revive-la-memoria-del-20-de-diciembre-95f91dd06108',
    image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*SI6Yg7z7wYeX_xHvT5axSg.jpeg'
  },
  {
    source: 'METRO LIBRE',
    title: 'ASAMBLEA RINDE HOMENAJE A LAS VÍCTIMAS DEL 20 DE DICIEMBRE',
    date: 'NOTICIA / CINE',
    url: 'https://www.metrolibre.com/nacionales/asamblea-rinde-homenaje-a-las-victimas-del-20-de-diciembre-MM18502538',
    image: 'https://www.metrolibre.com/binrepository/855x570/0c0/855d550/none/83989904/QFYX/img-20251219-wa0012_101-12130895_20251219173811.jpg'
  },
  {
    source: 'TELEMETRO',
    title: 'GANADOR MANDA TU PISTA: PRIMERA TEMPORADA',
    date: 'RECONOCIMIENTO',
    url: 'https://www.telemetro.com/manda-tu-pista/programas/manda-tu-pista-abrinay-es-el-ganador-la-1era-temporda-n5336498',
    image: 'https://media.telemetro.com/p/7609770dd3515f41f77001a8d63d9b02/adjuntos/311/imagenes/016/603/0016603507/captura-pantalla-931png.png'
  },
  {
    source: 'TELEMETRO',
    title: 'PERFIL: 100% DEDICADO A LA MÚSICA',
    date: 'ENTREVISTA',
    url: 'https://www.telemetro.com/manda-tu-pista/programas/manda-tu-pista-abrinay-100-dedicado-la-musica-n5266487',
    image: 'https://media.telemetro.com/p/177113a49019670cdbc4ac328086c69f/adjuntos/311/imagenes/014/456/0014456882/210548699_917136485516520_1723299160106766237_n-1jpg.jpg'
  },
  {
    source: 'EL SIGLO',
    title: 'DOS ESTACIONES: DIÁLOGOS ENTRE EL CLIMA Y LA HUMANIDAD',
    date: 'REPORTAJE',
    url: 'https://elsiglo.com.pa/farandula/dos-estaciones-dialogos-entre-el-clima-y-la-humanidad-MK15792259',
    image: 'https://elsiglo.com.pa/binrepository/700x466/0c36/700d393/none/275766432/CFFD/danza1_181-11206189_20250905134932.jpg'
  }
];

export const CREDITS: Credit[] = [
  { year: 2025, role: 'Score Original', project: '"Peter: ni soldado, ni civil, ni traidor" (Largometraje)' },
  { year: 2024, role: 'Score / Diseño Sonoro', project: '"Cuando Florezcan los Guayacanes" (Cine)' },
  { year: 2024, role: 'Sync & Distribution', project: 'Sony Music / The Orchard (Global Catalog)' },
  { year: 2024, role: 'Catalog Management', project: 'Symphonic Distribution (Master Records)' },
  { year: 2024, role: 'Paisajes Sonoros', project: '"Dos Estaciones" (Documental)' },
  { year: 2022, role: 'Ganador / Productor', project: 'Manda tu Pista (Reality Telemetro)' },
];

export const LEGAL_TEXTS: Record<string, { title: string, content: string }> = {
  legal: {
    title: "Aviso Legal",
    content: "Abrinay Studios es una marca de producción independiente con operaciones en Bogotá y Panamá. Todo el material sonoro y visual aquí presentado está protegido por derechos de autor internacionales."
  },
  privacy: {
    title: "Política de Privacidad",
    content: "No recolectamos datos personales más allá de los necesarios para la comunicación profesional directa vía abrinay1997@gmail.com."
  },
  index: {
    title: "Índice de Master 2026",
    content: "Registro de Obras: Peter Doc Score, Cuando Florezcan OST, Catálogo Sony Orchard, Distribución Symphonic."
  }
};

export const BIOGRAPHY_CONTENT = {
  name: "ABRINAY",
  role: "Productor & Diseñador Sonoro",
  authIndex: "AUTH_INDEX: AB_2009_BOG",
  paragraphs: [
    "Brian Joel Carvajal Mahecha (Abrinay) es el arquitecto sonoro detrás de una visión que fusiona el rap, la poesía y el diseño de audio para cine. Su carrera despegó en 2009 en Bogotá, evolucionando rápidamente hacia la independencia técnica absoluta.",
    "En 2014 fundó BukoFlow, especializándose en el licenciamiento de música para proyectos comerciales y cine, alcanzando un impacto de más de 90,000 descargas globales.",
    "Desde 2022, su alianza con The Orchard (Sony Music) y Symphonic Distribution ha consolidado su posición como una pieza clave en la distribución y producción de audio de alta fidelidad."
  ],
  stats: [
    { label: "Establecimiento", value: "EST_2011" },
    { label: "Audiencia Global", value: "+90K_STRM" }
  ],
  milestones: [
    { year: "2014", title: "BukoFlow Records", description: "Estructuración de licencias comerciales y sync licensing para medios digitales." },
    { year: "2022", title: "Sony Music / Orchard", description: "Expansión de catálogo maestro y sincronización global de obras originales." },
    { year: "2024", title: "Peter (Cine)", description: "Composición original para el largometraje documental sobre la soberanía." }
  ]
};
