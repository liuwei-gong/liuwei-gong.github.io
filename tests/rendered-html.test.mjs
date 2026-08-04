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
  assert.match(html, /The \(local\) geometry of oscillatory integrals/);
  assert.match(html, /Invited talks/);
  assert.match(html, /Math 250/);
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
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.doesNotMatch(page, /_sites-preview|SkeletonPreview/);
  assert.doesNotMatch(layout, /codex-preview|Starter Project/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
