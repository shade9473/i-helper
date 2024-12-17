import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
    domains: ['cloudflare-ipfs.com', 'ai-resource-library.com'],
  },
  experimental: {
    mdxRs: true,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})

export default withMDX(nextConfig)
