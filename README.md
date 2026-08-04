# Liuwei Gong — academic homepage

Source for [liuwei-gong.github.io](https://liuwei-gong.github.io/), a responsive academic homepage for Liuwei Gong.

## Content

- Academic profile and research interests
- Articles and preprints with journal and arXiv links
- Invited talks and teaching history
- Self-hosted portrait and curriculum vitae

## Local development

```bash
npm ci
npm run dev
```

The GitHub Pages build uses Next.js static export:

```bash
npm run build:github
```

The deploy workflow publishes the generated `out` directory through GitHub Pages whenever `main` is updated. In the repository settings, choose **GitHub Actions** as the Pages source.
