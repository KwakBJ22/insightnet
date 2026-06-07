/**
 * 사이트 이미지를 public/images/ 로 다운로드합니다.
 * Readdy.ai API는 hash 만료(400)로 사용 불가 → picsum.photos에서 다운로드
 *
 * 사용: npm run download-images
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outDir = path.join(rootDir, 'public', 'images')

/** @type {{ filename: string; url: string }[]} */
const images = [
  { filename: 'hero-bg.jpg', url: 'https://picsum.photos/id/180/1920/1080' },
  { filename: 'stats-bg.jpg', url: 'https://picsum.photos/id/267/1920/1080' },
  { filename: 'service-web-app.jpg', url: 'https://picsum.photos/id/119/800/600' },
  { filename: 'service-ai.jpg', url: 'https://picsum.photos/id/60/800/600' },
  { filename: 'service-o2o.jpg', url: 'https://picsum.photos/id/48/800/600' },
  { filename: 'service-dx.jpg', url: 'https://picsum.photos/id/326/800/600' },
  { filename: 'portfolio-01.jpg', url: 'https://picsum.photos/id/201/1200/800' },
  { filename: 'portfolio-02.jpg', url: 'https://picsum.photos/id/63/1200/800' },
  { filename: 'portfolio-03.jpg', url: 'https://picsum.photos/id/160/1200/800' },
  { filename: 'portfolio-04.jpg', url: 'https://picsum.photos/id/1080/1200/800' },
  { filename: 'portfolio-05.jpg', url: 'https://picsum.photos/id/146/1200/800' },
  { filename: 'portfolio-06.jpg', url: 'https://picsum.photos/id/366/1200/800' },
  { filename: 'about-hero-bg.jpg', url: 'https://picsum.photos/id/283/1920/800' },
  { filename: 'blog-hero-bg.jpg', url: 'https://picsum.photos/id/373/1920/600' },
  { filename: 'faq-hero-bg.jpg', url: 'https://picsum.photos/id/312/1920/500' },
  { filename: 'blog-01.jpg', url: 'https://picsum.photos/id/60/800/500' },
  { filename: 'blog-02.jpg', url: 'https://picsum.photos/id/201/800/500' },
  { filename: 'blog-03.jpg', url: 'https://picsum.photos/id/1080/800/500' },
  { filename: 'blog-04.jpg', url: 'https://picsum.photos/id/119/800/500' },
  { filename: 'blog-05.jpg', url: 'https://picsum.photos/id/326/800/500' },
  { filename: 'blog-06.jpg', url: 'https://picsum.photos/id/146/800/500' },
  { filename: 'blog-07.jpg', url: 'https://picsum.photos/id/48/800/500' },
  { filename: 'blog-08.jpg', url: 'https://picsum.photos/id/160/800/500' },
]

async function downloadImage(filename, url) {
  const dest = path.join(outDir, filename)
  console.log(`Downloading ${filename}...`)

  const res = await fetch(url, {
    redirect: 'follow',
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; InsightNet/1.0)' },
  })

  if (!res.ok) {
    throw new Error(`Failed ${filename}: ${res.status} ${res.statusText}`)
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  if (buffer.length < 5000) {
    throw new Error(`Failed ${filename}: file too small (${buffer.length} bytes)`)
  }

  fs.writeFileSync(dest, buffer)
  console.log(`  ✓ ${dest} (${(buffer.length / 1024).toFixed(1)} KB)`)
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true })

  for (const { filename, url } of images) {
    await downloadImage(filename, url)
  }

  console.log(`\nDone! ${images.length} images saved to public/images/`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
