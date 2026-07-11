# Skill2Income

An AI-powered Economic Mobility Platform for Nigerians and all African countries to help users transition from unemployment or underemployment to sustainable income.

## Vision

To democratize economic opportunity by providing personalized AI-driven guidance into employment, freelancing, entrepreneurship, vocational trades, agriculture, and digital work.

## 🎯 Key Features

### 1. **AI-Powered Onboarding & Assessment**
- Comprehensive profile creation (10 minutes)
- AI Income Readiness Score (0-100) with detailed breakdown
- Personalized Income Blueprint generation
- Multi-language support (English, Hausa, Yoruba, Igbo)

### 2. **Career Path Modules**
- **Jobs**: Smart search, AI matching, salary prediction, skill match
- **Learning**: Courses, videos, certificates, AI explanations
- **BusinessAI**: Business idea generation, planning, financial projections
- **FreelanceAI**: Portfolio builder, proposal generator, gig finder
- **FinanceAI**: Budget planning, expense tracking, income forecasting
- **Opportunity Engine**: Jobs, scholarships, grants, competitions, NYSC

### 3. **AI Chat Assistant**
- ChatGPT-style interface with context memory
- Career, business, financial, and interview coaching
- Voice input/output support
- Multi-language capabilities

### 4. **Dashboard & Analytics**
- Income Readiness Score tracking
- Roadmap progress visualization
- Daily tasks and recommendations
- Income growth analytics
- Achievement badges and gamification

### 5. **Gamification & Engagement**
- XP points and levels
- Badges and achievements
- Streak tracking
- Leaderboards

## 🏗️ Tech Stack

### Frontend
- **Framework**: Next.js 14+ (React, TypeScript)
- **Styling**: Tailwind CSS + Shadcn/ui
- **State Management**: Zustand
- **Real-time**: Socket.io
- **Voice**: Web Audio API + Whisper.js
- **Offline**: Service Workers + IndexedDB
- **Charts**: Recharts
- **Form**: React Hook Form + Zod

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Database**: PostgreSQL (primary) + Redis (cache)
- **ORM**: Prisma
- **Authentication**: NextAuth.js + JWT
- **AI/ML**: OpenAI API, Anthropic Claude
- **Job Queue**: Bull/BullMQ
- **File Storage**: AWS S3 / Cloudinary
- **Monitoring**: Sentry, Datadog

### DevOps & Infrastructure
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **CI/CD**: GitHub Actions
- **Cloud**: AWS (EC2, RDS, S3, CloudFront)
- **API**: REST + GraphQL
- **Analytics**: Mixpanel / Amplitude

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL 14+
- Redis 7+
- Docker & Docker Compose

### Installation

```bash
# Clone repository
git clone https://github.com/Aisinwaka/Skil2incomee.git
cd Skil2incomee

# Setup with Docker
docker-compose up -d

# Install dependencies
cd frontend && npm install
cd ../backend && npm install

# Setup environment variables
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env.local

# Run database migrations
cd backend && npm run db:migrate

# Start development servers
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev
```

### Access Points
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:4000/api
- **API Documentation**: http://localhost:4000/api/docs
- **Database Admin (PgAdmin)**: http://localhost:5050
  - Email: admin@skill2income.com
  - Password: admin

## 🎨 Design System

### Color Palette
- **Primary**: Emerald Green (#16A34A)
- **Secondary**: Blue (#2563EB)
- **Accent**: Orange (#F97316)
- **Neutral**: White (#FFFFFF), Gray (#6B7280), Black (#111827)

### Design Principles
- Mobile-First: Optimized for mobile devices
- Accessible: WCAG 2.2 compliance
- Performant: Fast load times, optimized assets
- Responsive: Works on all screen sizes
- Dark/Light Mode: Full theme support
- Inclusive: Multi-language, culturally relevant

## 📊 Project Structure

```
Skill2Income/
├── frontend/                  # Next.js frontend
│   ├── app/                  # App router
│   ├── components/           # Reusable components
│   ├── modules/              # Feature modules
│   ├── hooks/                # Custom hooks
│   ├── utils/                # Utilities
│   ├── styles/               # Global styles
│   └── public/               # Static assets
├── backend/                   # Express.js backend
│   ├── src/
│   │   ├── routes/          # API routes
│   │   ├── controllers/      # Route controllers
│   │   ├── services/         # Business logic
│   │   ├── middleware/       # Custom middleware
│   │   ├── models/           # Database models
│   │   ├── utils/            # Utilities
│   │   ├── ai/               # AI integrations
│   │   └── server.ts         # Entry point
│   ├── prisma/               # Database schema
│   └── package.json
├── docker-compose.yml        # Local development
├── kubernetes/               # K8s configs
├── .github/
│   └── workflows/            # CI/CD pipelines
├── docs/                     # Documentation
├── .gitignore
└── package.json
```

## 📚 Documentation

- [Architecture](./docs/ARCHITECTURE.md) - System design and infrastructure
- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [Features](./docs/FEATURES.md) - Complete feature documentation
- [Contributing](./docs/CONTRIBUTING.md) - Contribution guidelines

## 🔐 Security

- JWT tokens with refresh mechanism
- OAuth2.0 integration (Google)
- OTP for phone verification
- HTTPS/TLS encryption
- Data encryption at rest
- GDPR compliance
- Rate limiting and CORS
- SQL injection prevention (Prisma ORM)
- XSS and CSRF protection

## ⚡ Performance Targets

- Page load: < 3 seconds
- API response: < 200ms (p95)
- Database query: < 100ms
- Chat response: < 2 seconds
- Availability: 99.9%
- Mobile optimization: Core Web Vitals (Excellent)

## 🔄 Development Commands

### Backend
```bash
cd backend
npm run dev          # Development
npm run build        # Build
npm run start        # Production
npm run lint         # Linting
npm run test         # Testing
npm run db:migrate   # Database migrations
npm run db:seed      # Seed database
npm run db:studio    # Prisma Studio
```

### Frontend
```bash
cd frontend
npm run dev          # Development
npm run build        # Build
npm run start        # Production
npm run lint         # Linting
npm run type-check   # Type checking
npm run test         # Testing
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

### Steps
1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m 'feat: add feature'`
4. Push: `git push origin feature/your-feature`
5. Create Pull Request

## 📄 License

MIT - See LICENSE file for details

## 📞 Support

- **Email**: support@skill2income.com
- **GitHub Issues**: [Report bugs or request features](https://github.com/Aisinwaka/Skil2incomee/issues)
- **Documentation**: [Full docs](./docs/)

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Express.js Guide](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)

## 🗺️ Roadmap

### Phase 1 (MVP)
- [x] Project setup and architecture
- [ ] Landing page with hero section
- [ ] User authentication (email, phone, Google OAuth)
- [ ] AI onboarding assessment
- [ ] Income Readiness Score calculation
- [ ] Personal Income Blueprint generation
- [ ] Basic dashboard

### Phase 2
- [ ] Jobs module with AI matching
- [ ] Learning module with courses
- [ ] Business AI module
- [ ] Freelance AI module

### Phase 3
- [ ] Finance AI module
- [ ] Opportunity Engine
- [ ] CV Builder and Interview Coach
- [ ] Advanced gamification

### Phase 4
- [ ] Mobile apps (iOS/Android)
- [ ] Marketplace features
- [ ] Community and mentorship
- [ ] Expansion to other African countries

## 👥 Team

- **Project Lead**: Aisinwaka
- **Contributors**: Community

---

**Built with ❤️ to empower Africans to achieve economic mobility through AI-driven guidance and skill development.**
