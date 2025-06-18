# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
Walras-Research company website - a professional site for a crypto quant trading firm focused on high profit and stable returns for customers. Built with Next.js, TypeScript, and Tailwind CSS. Deployed on Netlify.

## Development Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build for production (static export)
- `npm run lint` - Run ESLint
- `npm run export` - Export static files (included in build)

## Architecture
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Structure**: 
  - `/src/app` - Next.js app router pages
  - `/src/components` - React components
  - `/src/lib` - Utility functions and data
  - `/src/types` - TypeScript type definitions

## Key Features
- Responsive design with dark/light theme toggle
- Interactive performance charts with real trading data
- Animated sections with Framer Motion
- Contact form with validation
- SEO optimized with proper metadata

## Deployment
- Platform: Netlify
- Build command: `npm run build`
- Publish directory: `out`
- Static export configured for optimal performance
- Security headers configured in netlify.toml