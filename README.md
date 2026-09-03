# Portafolio web

Sitio personal construido con **Astro + TypeScript + Tailwind CSS**. Genera HTML
estático: carga rápido, es gratis de hostear y no necesita servidor.

## Cómo trabajar en él

```bash
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio en dist/
npm run preview  # revisa dist/ como quedará en producción
```

## Dónde editar el contenido

Casi todo vive en **un solo archivo**:

```
src/data/perfil.ts
```

Ahí cambias tu nombre, tu claim, proyectos, experiencia, stack y formación.
No necesitas tocar componentes para actualizar el contenido.

### Estructura

```
src/
├─ data/perfil.ts              ← TU CONTENIDO (edita aquí)
├─ layouts/Layout.astro        ← <head>, SEO, tema claro/oscuro
├─ components/
│  ├─ Nav.astro                ← barra superior + botón de tema
│  ├─ Hero.astro               ← nombre, claim, botones
│  ├─ SobreMi.astro
│  ├─ Proyectos.astro          ← tarjetas de proyectos
│  ├─ Stack.astro
│  ├─ Experiencia.astro        ← timeline + formación
│  ├─ Contacto.astro
│  └─ Footer.astro
├─ pages/
│  ├─ index.astro              ← página principal
│  └─ proyectos/[slug].astro   ← una página por proyecto, generada automáticamente
└─ styles/global.css           ← colores y tokens de diseño
```

## Pendientes antes de publicar

- [ ] Editar `src/data/perfil.ts` con tus datos reales
- [ ] Poner tu CV en `public/cv.pdf`
- [ ] Cambiar `site:` en `astro.config.mjs` por tu dominio real
- [ ] Cambiar la URL del sitemap en `public/robots.txt`
- [ ] Rellenar `repo` y `demo` de cada proyecto (los enlaces se ocultan si están vacíos)
- [ ] Cambiar los colores en `src/styles/global.css` (variable `--accent`)

## Publicar en Vercel (gratis)

1. Sube el proyecto a GitHub:
   ```bash
   git add .
   git commit -m "Portafolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/portafolio.git
   git push -u origin main
   ```
2. Entra a [vercel.com](https://vercel.com), inicia sesión con GitHub e importa el repo.
3. Vercel detecta Astro solo. Deploy.
4. Desde ahí, cada `git push` a `main` republica el sitio automáticamente.

Alternativas equivalentes: **Netlify** o **Cloudflare Pages**.

## Añadir un proyecto nuevo

Agrega un objeto al array `proyectos` en `src/data/perfil.ts`. Su página de detalle
en `/proyectos/<slug>` se genera sola.

Escribe cada proyecto con esta estructura, es la que convence a quien contrata:

- **problema** — qué dolía antes, en concreto
- **solucion** — qué construiste tú y con qué
- **resultado** — el número: horas ahorradas, % de mejora, usuarios activos
