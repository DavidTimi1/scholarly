# Grad Zee: Fullstack Architecture Overview

**Goal:**
To build an AI-powered platform that simplifies and guides Gen Z applicants through the graduate school application process using contextual, embedded AI (no chat box), timeline tools, document analysis, and storytelling enhancement.

---

## 1. **Tech Stack Overview**

| Layer          | Technology           |
| -------------- | -------------------- |
| Frontend       | Next.js (App Router) |
| Authentication | Firebase Auth        |
| Database       | Neon (PostgreSQL)    |
| AI Services    | Google GenAI API     |
| Storage (docs) | Firebase Storage     |
| Hosting        | Vercel (Frontend)    |

---

## 2. **Folder + File Structure (Next.js App Router)**

```
grad-zee/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── timeline/
│   │   │   └── page.tsx
│   │   ├── essays/
│   │   │   └── page.tsx
│   │   ├── resume/
│   │   │   └── page.tsx
│   │   ├── lor-tracker/
│   │   │   └── page.tsx
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   └── api/
│       ├── analyze-doc/route.ts
│       ├── suggest-text/route.ts
│       └── timeline-sync/route.ts
├── components/
│   ├── AITextEnhancer.tsx
│   ├── EssayOutliner.tsx
│   ├── ResumeStoryEnhancer.tsx
│   ├── TimelineCalendar.tsx
│   ├── FileUploader.tsx
│   └── Header.tsx
├── hooks/
│   └── useAuth.ts
│   └── useUserData.ts
├── lib/
│   ├── firebase.ts
│   ├── neonClient.ts
│   ├── genai.ts
│   └── timelineUtils.ts
├── services/
│   ├── essayService.ts
│   ├── resumeService.ts
│   ├── docAnalysisService.ts
│   └── timelineService.ts
├── types/
│   └── user.ts
│   └── essay.ts
│   └── timeline.ts
├── styles/
│   └── globals.css
├── public/
│   └── logo.svg
├── .env.local
└── next.config.js
```

---

## 3. **Module Responsibilities**

### **Frontend (app/, components/)**

* `app/`:

  * **Routing + Page-level Layouts** using App Router.
  * Handles authenticated vs unauthenticated routing.
  * Pages like `/dashboard/essays`, `/dashboard/timeline`, etc.

* `components/`:

  * **Smart components with embedded AI**:

    * `AITextEnhancer`: Inline suggestions while typing.
    * `EssayOutliner`: Topic generator + structured outline builder.
    * `ResumeStoryEnhancer`: Enhances resume with narrative prompts.
    * `TimelineCalendar`: Tracks deadlines, progress.
    * `FileUploader`: Uploads docs to Firebase.

* `hooks/`:

  * Custom React hooks for authentication (`useAuth`) and user-specific data access (`useUserData`).

---

### **Backend API Routes (app/api/)**

| Route           | Purpose                                                |
| --------------- | ------------------------------------------------------ |
| `analyze-doc`   | Sends doc to GenAI + returns clarity/suggestion report |
| `suggest-text`  | Contextual suggestions embedded in writing flow        |
| `timeline-sync` | Saves dynamic timeline events, reminders               |

---

### **Services Layer (services/)**

These files abstract logic for interacting with APIs and the database.

* `essayService.ts`:

  * Create, update, and enhance SOPs using GenAI.
* `resumeService.ts`:

  * Uses GenAI to convert resumes into compelling academic stories.
* `docAnalysisService.ts`:

  * Calls GenAI with uploaded documents for feedback.
* `timelineService.ts`:

  * Tracks deadlines, dynamically updates based on user progress.

---

### **Utility & Client Layer (lib/)**

* `firebase.ts`:

  * Sets up Firebase Auth and Firebase Storage.

* `neonClient.ts`:

  * Prisma/PostgreSQL (Neon) client config.

* `genai.ts`:

  * Wraps calls to Google GenAI API with standard headers, safety settings.

* `timelineUtils.ts`:

  * Functions for calculating and formatting deadline data.

---

## 4. **State Management**

| State Scope       | Tool                                 | Description                           |
| ----------------- | ------------------------------------ | ------------------------------------- |
| Global Auth       | `useAuth` hook + Context API         | Tracks current user, auth state       |
| Local App State   | React State / Context                | Essay drafts, timeline events         |
| Server State      | Neon PostgreSQL via Prisma           | Saved timelines, essays, resume edits |
| AI Response Cache | In-memory (SWR/React Query optional) | Debounced GenAI suggestions           |
| File Upload State | Firebase Storage Metadata            | Tracks uploaded documents             |

---

## 5. **How Services Connect**

* **Frontend**:

  * Calls internal **API routes** (`/api/analyze-doc`) via `fetch`.
  * Submits essays/resumes/timeline data via services (e.g., `essayService.submit()`).

* **Internal API Routes**:

  * Sanitize and parse data.
  * Call GenAI API through `lib/genai.ts`.
  * Interact with Neon DB via `lib/neonClient.ts`.

* **Firebase Auth**:

  * Protects routes using `useAuth`.
  * Provides UID for fetching and storing personalized data in PostgreSQL.

* **Document Uploads**:

  * Handled by Firebase Storage.
  * Metadata stored in Neon DB to connect uploads with the right user and use case.

---

## 6. **AI Interaction Flows**

### Inline AI Assistance

1. User types SOP text in `<AITextEnhancer />`
2. Debounced input is sent to `/api/suggest-text`
3. GenAI API returns context-aware suggestions
4. Suggestions appear as inline highlights and tooltips

### Document Upload & Analysis

1. User uploads SOP/Resume using `<FileUploader />`
2. File is stored in Firebase Storage
3. Metadata + file reference sent to `/api/analyze-doc`
4. GenAI returns improvement suggestions
5. Displayed as annotation-style feedback in UI

### Timeline Management

1. App deadlines + user milestones rendered in `<TimelineCalendar />`
2. Events saved to Neon DB via `timelineService.ts`
3. Changes sync with `/api/timeline-sync`
4. Adjustments auto-reflected on user dashboard

---

## 7. **Security + Deployment**

* **Auth Guards** for all dashboard routes using `useAuth`
* **Environment Variables** in `.env.local`:

  * `GENAI_API_KEY`
  * `NEXT_PUBLIC_FIREBASE_CONFIG`
  * `DATABASE_URL` (Neon)
* **Deployment**:

  * Vercel for hosting (auto-deploy from GitHub)
  * Neon for DB (PostgreSQL)
  * Firebase for auth and storage

---

## 8. **Scalability Notes**

* Can easily modularize services to switch to LangChain or Anthropic in the future.
* GenAI usage abstracted via `lib/genai.ts` for API flexibility.
* Timeline and essay services are schema-agnostic—new features like mock interviews or LOR scoring can be added easily.
