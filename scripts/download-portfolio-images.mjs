import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')
const outDir = path.join(rootDir, 'public', 'images')
const source = fs.readFileSync(path.join(rootDir, 'ref-latest.js'), 'utf8')

const re = /https:\/\/readdy\.ai\/api\/search-image\?[^'"`\\]+/g
const urls = [...new Set(source.match(re) ?? [])]

/** @type {{ filename: string; url: string }[]} */
const images = [
  { seq: 'port-01', filename: 'portfolio-01.jpg' },
  { seq: 'port-02', filename: 'portfolio-02.jpg' },
  { seq: 'port-03', filename: 'portfolio-03.jpg' },
  { seq: 'port-04', filename: 'portfolio-04.jpg' },
  { seq: 'port-05', filename: 'portfolio-05.jpg' },
  { seq: 'port-06', filename: 'portfolio-06.jpg' },
  { seq: 'detail-01', filename: 'portfolio-01-hero.jpg' },
  { seq: 'detail-02', filename: 'portfolio-02-hero.jpg' },
  { seq: 'detail-03', filename: 'portfolio-03-hero.jpg' },
  { seq: 'detail-04', filename: 'portfolio-04-hero.jpg' },
  { seq: 'detail-05', filename: 'portfolio-05-hero.jpg' },
  { seq: 'detail-06', filename: 'portfolio-06-hero.jpg' },
].map(({ seq, filename }) => ({
  filename,
  url: urls.find((u) => u.includes(`seq=${seq}`)),
}))

async function downloadImage(filename, url) {
  if (!url) throw new Error(`URL not found for ${filename}`)

  const dest = path.join(outDir, filename)
  console.log(`Downloading ${filename}...`)

  const res = await fetch(url, {
    redirect: 'follow',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      Referer: 'https://readdy.cc/',
    },
  })

  if (!res.ok) {
    throw new Error(`Failed ${filename}: ${res.status} ${res.statusText}`)
  }

  const buffer = Buffer.from(await res.arrayBuffer())
  if (buffer.length < 5000) {
    throw new Error(`Failed ${filename}: file too small (${buffer.length} bytes)`)
  }

  fs.writeFileSync(dest, buffer)
  console.log(`  OK ${dest} (${(buffer.length / 1024).toFixed(1)} KB)`)
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
