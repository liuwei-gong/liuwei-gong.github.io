import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports a complete academic homepage", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<title>Liuwei Gong · Mathematics<\/title>/i);
  assert.match(html, /Liuwei Gong/);
  assert.match(html, /巩刘伟/);
  assert.match(html, /Articles &amp; preprints/i);
  assert.match(html, /A counterexample to a strong maximum principle for the sixth-order GJMS operator/);
  assert.match(html, /arxiv\.org\/abs\/2608\.24148/);
  assert.match(html, /limingxiangmath\.github\.io/);
  assert.match(html, /The \(local\) geometry of oscillatory integrals/);
  assert.match(html, /Invited talks/);
  assert.match(html, /MATH 250/i);
  assert.match(html, /MATH 4030/);
  assert.match(html, /Differential Geometry/);
  assert.match(html, /Fall 2026/);
  assert.match(html, /mailto:lwgong@math\.cuhk\.edu\.hk/);
  assert.match(html, /scholar\.google\.com\/citations\?user=tzpMVewAAAAJ&amp;hl=en/);
  assert.doesNotMatch(html, /<figcaption|Research areas|Nonlinear · Harmonic · Geometric/i);
  assert.equal((html.match(/id="about"/g) ?? []).length, 1);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("ships the portrait and CV with the static export", async () => {
  await Promise.all([
    access(new URL("../out/liuwei-gong.jpg", import.meta.url)),
    access(new URL("../out/liuwei-gong-cv.pdf", import.meta.url)),
    access(new URL("../out/og.png", import.meta.url)),
  ]);
});

test("keeps the site source free of starter preview artifacts", async () => {
  const [page, layout, styles, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /className="name-latin">Liuwei Gong<\/span>/);
  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview|hero__pattern|course-card/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
  assert.doesNotMatch(styles, /portrait-card::before|rotate\(/);
  assert.doesNotMatch(styles, /\.publication:hover|Songti SC|SimSun|--rust/);
  const fontFamilies = [...styles.matchAll(/font-family:\s*([^;]+);/g)].map((match) => match[1].trim());
  assert.deepEqual(new Set(fontFamilies), new Set(["var(--sans)", "var(--serif)"]));
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
