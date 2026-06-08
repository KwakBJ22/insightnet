import fs from 'fs'

const s = fs.readFileSync('ref-latest.js', 'utf8')

function sliceFrom(marker, len = 8000) {
  const i = s.indexOf(marker)
  if (i < 0) return null
  return s.slice(i, i + len)
}

const out = {
  blogMeta: sliceFrom('Ss={title:', 200),
  blogCategories: sliceFrom('Cs=[{id:', 500),
  blogPosts: sliceFrom('ws=[{id:1', 5500),
  faqMeta: sliceFrom('Ds={title:', 200),
  faqCategories: sliceFrom('Os=[{id:', 400),
  faqItems: sliceFrom('question:`프로젝트는 보통', 4500),
  aboutUs: sliceFrom('us={title:', 2500),
  aboutVision: sliceFrom('ds={vision:', 1200),
  aboutTimeline: sliceFrom('fs=[{year:', 3500),
  aboutValues: sliceFrom('ps=[{icon:', 2500),
  privacy: sliceFrom('Ns={title:', 3500),
  terms: sliceFrom('Fs={title:', 3500),
  portfolio1: sliceFrom('1:{id:1,title:', 3500),
  portfolio2: sliceFrom('2:{id:2,title:', 3500),
}

for (const [k, v] of Object.entries(out)) {
  if (v) fs.writeFileSync(`scripts/extracted/${k}.txt`, v)
  else console.log('MISSING:', k)
}

console.log('done')
