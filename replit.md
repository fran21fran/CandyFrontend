# CandyWeb Frontend

## Overview

CandyWeb is a language learning platform frontend built with React, TypeScript, and Vite. The application provides an interactive and gamified approach to learning multiple languages (French, Italian, Portuguese, English, and Russian) through various educational games and exercises. The platform features a comprehensive game-based learning system with 10 different educational games, user authentication, premium subscriptions, and progress tracking.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Technology Stack
- **Framework**: React 18 with TypeScript for type safety and modern component development
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom design system and animated backgrounds
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible interface
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod resolvers for form validation
- **Animations**: Framer Motion for smooth transitions and Canvas Confetti for game celebrations

### Component Architecture
- **Page Components**: Route-level components handling full page layouts
- **Game Components**: Modular game implementations for each of the 10 educational games
- **UI Components**: Reusable interface components following atomic design principles
- **Layout Components**: Navigation, background animations, and structural elements

### Game System Architecture
The platform implements 10 distinct educational games:
1. **Football Words**: Vocabulary matching with sports theme
2. **Vacation Routine**: Text completion exercises
3. **Image Association**: Visual-word matching games
4. **Snoopy Path**: Math problems with directional navigation
5. **Fashion Shopping**: Conversational language practice
6. **Maria Shopping**: Store and product vocabulary
7. **Spiderman Train**: Direction words with spelling traps
8. **Treasure Hunt**: Map-based directional instructions
9. **Word Soup**: Cultural vocabulary word search
10. **Plant Care**: Time and care instruction comprehension

### Authentication System
- JWT-based session management with HTTP-only cookies
- User registration and login with form validation
- Premium subscription system with payment integration
- Role-based access control for premium games

### Language Learning Features
- **Multi-language Support**: Comprehensive data for 5 languages with native content
- **Progressive Difficulty**: Beginner, Intermediate, and Advanced levels
- **Speech Practice**: Web Speech API integration for pronunciation practice
- **Dictionary Search**: Interactive vocabulary lookup with cultural notes
- **Alphabet Learning**: Language-specific alphabet and pronunciation guides

### Data Architecture
- **Language Data**: Structured grammar, vocabulary, and cultural information for each language
- **Game Data**: Configurable content for each game type and difficulty level
- **User Progress**: Score tracking, leaderboards, and achievement systems

### Deployment Architecture
- **Platform**: Vercel for frontend hosting with automatic deployments
- **Environment Configuration**: Environment variables for backend API integration
- **Build Optimization**: Asset optimization, code splitting, and caching strategies
- **Security Headers**: Content security policies and security headers configuration

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives for modals, dropdowns, navigation
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Consistent icon library for interface elements
- **Framer Motion**: Animation library for smooth transitions and micro-interactions

### Development and Build Tools
- **Vite**: Modern build tool with hot module replacement
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind integration

### Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management and validation
- **Hookform Resolvers**: Form validation integration

### Game and Interactive Features
- **Canvas Confetti**: Celebration animations for game completion
- **Web Speech API**: Browser-based speech recognition and synthesis
- **Date-fns**: Date manipulation for time-based features

### Backend Integration
- **Backend API**: RESTful API integration for user management, scores, and content
- **Payment Processing**: Mercado Pago integration for premium subscriptions
- **CORS Configuration**: Cross-origin resource sharing for API communication