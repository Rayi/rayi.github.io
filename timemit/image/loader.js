'use client'

// export default function cloudflareLoader({ src, width, quality }) {
//   const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
//   return `https://example.com/cdn-cgi/image/${params.join(',')}/${src}`
// }

export default function qiniuLoader({ src, width, quality }) {
  const filePath = src.replace('https://timit.quanzi.io/', '')
  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto']
  return `https://timit.quanzi.io/${filePath}`
}
