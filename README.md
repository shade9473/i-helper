# AI Resource Library

A modern, SEO-optimized resource library built with Next.js 13+, focusing on AI-related content with robust Server-Side Rendering (SSR) and automated page generation.

## Features

- 🚀 Built with Next.js 13+ App Router
- 💨 Tailwind CSS for styling
- 📝 MDX for content management
- 🔍 SEO optimized
- 📱 Fully responsive
- 🌓 Dark mode support (coming soon)
- 🔄 Automated page generation
- 📊 Analytics integration (coming soon)

## Tech Stack

- **Framework:** Next.js 13+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** MDX
- **Deployment:** Vercel (recommended)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ai-resource-library.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # App router directory
├── components/            # Reusable UI components
│   ├── layout/           # Layout components
│   └── ui/              # UI components
├── content/              # MDX content files
├── lib/                  # Utility functions and helpers
├── types/               # TypeScript type definitions
└── styles/              # Global styles
```

## Content Management

Content is managed through MDX files located in the `content` directory. Each content type (guides, prompts, techniques) has its own subdirectory.

### Adding New Content

1. Create a new MDX file in the appropriate content directory
2. Add frontmatter with required metadata
3. Write your content using MDX
4. The page will be automatically generated based on the file structure

Example frontmatter:
```yaml
---
title: Getting Started with AI
description: A comprehensive guide to getting started with AI development
category: guides
tags: [beginner, introduction, ai-basics]
---
```

## Development

- **Components:** Create reusable components in the `components` directory
- **Styling:** Use Tailwind CSS for styling components
- **Content:** Add MDX files to the `content` directory
- **Routes:** Pages are automatically generated based on the file structure

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for the deployment platform
- All contributors who help improve this project
