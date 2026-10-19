import { Project } from '@/types';

const projectImages = {
  web: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  code: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  desktop: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

const galleries = {
  mobile: [projectImages.desktop, projectImages.code, projectImages.web],
  web: [projectImages.web, projectImages.desktop, projectImages.code],
  code: [projectImages.code, projectImages.web, projectImages.desktop],
};

export const projects: Project[] = [
  {
    slug: 'boveda-gestion-de-tomos',
    title: 'Bóveda - Gestión de Tomos',
    description: 'Sistema de escritorio para organizar y consultar tomos de la Notaría Torres Zevallos.',
    image: '/projects/boveda/gestion-tomos.png',
    images: [
      '/projects/boveda/inicio-sesion.png',
      '/projects/boveda/gestion-tomos.png',
      '/projects/boveda/gestion-documental.png',
    ],
    imageFit: 'cover',
    technologies: ['React', 'TypeScript', 'Tauri'],
    githubUrl: 'https://github.com/carodev02/Boveda-Sistema-Gesti-n-de-Tomos-Notaria-Torres-Zevallos',
    featured: true,
  },
  {
    slug: 'laboratorio-11-12-multiplataformas',
    title: 'Warehouse Pro',
    description: 'Desarrollé una app multiplataforma con diseño Cupertino para gestionar productos, inventario, stock bajo, reportes y proveedores.',
    image: '/projects/lab11-12/warehouse-login.webp',
    images: [
      '/projects/lab11-12/warehouse-login.webp',
      '/projects/lab11-12/add-product.webp',
      '/projects/lab11-12/inventory.webp',
    ],
    technologies: ['Flutter', 'Dart', 'Cupertino'],
    githubUrl: 'https://github.com/carodev02/Laboratorio-11-12-Multiplataformas',
    featured: true,
  },
  {
    slug: 'innova-admin-pretesis',
    title: 'Innova Admin - Gestión Empresarial',
    description: 'Sistema web para gestionar inventario, ventas, reportes y operaciones multisede de Innova.',
    image: '/projects/innova/inicio-sesion.png',
    images: [
      '/projects/innova/inicio-sesion.png',
      '/projects/innova/productos.png',
      '/projects/innova/ventas.png',
    ],
    imageFit: 'cover',
    technologies: ['React', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com/carodev02/Innvoa-Admiin-PreTesis',
    featured: true,
  },

  {
    slug: 'laboratorio-14-Firebase con SwiftUI',
    title: 'Laboratorio 14 - Firebase con SwiftUI',
    description: 'Implementé una app de mensajería en SwiftUI con autenticación de Firebase y sincronización de mensajes en tiempo real mediante Cloud Firestore.',
    image: '/projects/lab14/firebase-console.webp',
    images: [
      '/projects/lab14/swiftui-app.webp',
      '/projects/lab14/firebase-console.webp',
      '/projects/lab14/cloud-firestore.webp',
    ],
    technologies: ['SwiftUI', 'Firebase Auth', 'Cloud Firestore'],
    githubUrl: 'https://github.com/carodev02/Laboratorio-14---Programaci-nM-vilesAvanzada',
    featured: false,
  },
  {
    slug: 'laboratorio-13-web-avanzada',
    title: 'Laboratorio 13 - Web Avanzada',
    description: 'Implementé autenticación segura con NextAuth.js, Google y GitHub, contraseñas cifradas con bcrypt, rutas privadas y bloqueo tras intentos fallidos.',
    image: '/projects/lab13/google-oauth.webp',
    images: [
      '/projects/lab13/lila-auth-login.webp',
      '/projects/lab13/google-oauth.webp',
      '/projects/lab13/protected-dashboard.webp',
    ],
    technologies: ['NextAuth.js', 'bcrypt', 'OAuth'],
    demoUrl: 'https://laboratorio-13-web-avanzada.vercel.app',
    githubUrl: 'https://github.com/carodev02/Laboratorio-13-Web-Avanzada',
    featured: false,
  },
  {
    slug: 'connect-red-social',
    title: 'Connect - Red Social',
    description: 'Plataforma social con publicaciones, mensajes, historias, búsqueda y gestión de amistades.',
    image: projectImages.desktop,
    images: galleries.web,
    technologies: ['Django', 'Python', 'PostgreSQL'],
    githubUrl: 'https://github.com/betuelarones/Connect',
    featured: false,
  },
 
];

export const personalInfo = {
  name: 'Ximena',
  title: 'Desarrolladora Full Stack',
  description: 'Creo experiencias web y móviles claras, funcionales y pensadas para las personas.',
  email: 'ximena.carolina.02.06@gmail.com',
  github: 'https://github.com/carodev02',
  linkedin: 'https://www.linkedin.com/in/ximena-carolina-chumbirayco-pelayo-54905a333/',
  siteUrl: 'https://my-portfolio-one-ivory-54.vercel.app',
  avatar: '/ximena-profile.webp',
};

export const skills = [
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React & Next.js', category: 'Frontend' },
  { name: 'Node.js & Express', category: 'Backend' },
  { name: 'MongoDB', category: 'Datos' },
  { name: 'Dart', category: 'Móvil' },
  { name: 'Tailwind CSS', category: 'UI' },
  { name: 'Git & GitHub', category: 'Herramientas' },
];
