# Grad Zee MVP Build Plan (Step-by-Step)

---

## **Setup & Initialization**

### 1. **Initialize Next.js App with App Router**

* **Start**: Run `npx create-next-app@latest grad-zee --app`
* **End**: `app/page.tsx` renders “Hello Grad Zee!”

### 2. **Set Up TailwindCSS**

* **Start**: Install Tailwind and dependencies
* **End**: Confirm Tailwind classes render correctly in `app/page.tsx`

### 3. **Set Up Firebase Auth**

* **Start**: Install Firebase SDK + `lib/firebase.ts`
* **End**: Initialize Firebase, export `auth` object

### 4. **Set Up Neon (PostgreSQL) + Prisma**

* **Start**: Install Prisma, configure `DATABASE_URL` in `.env`
* **End**: Run `npx prisma init`, create empty schema, test `npx prisma db push`

---

## **Auth Flow**

### 5. **Create Auth Context + Hook**

* **Start**: Create `hooks/useAuth.ts`
* **End**: Can retrieve current user and sign out via context

### 6. **Implement Signup Page UI**

* **Start**: Create `app/auth/signup/page.tsx` with input fields
* **End**: Form renders and captures values on submit

### 7. **Connect Signup Page to Firebase**

* **Start**: Call `createUserWithEmailAndPassword`
* **End**: Firebase returns user object and redirects to dashboard

### 8. **Implement Login Page UI**

* **Start**: Create `app/auth/login/page.tsx` with input fields
* **End**: Form renders and captures values on submit

### 9. **Connect Login Page to Firebase**

* **Start**: Call `signInWithEmailAndPassword`
* **End**: Firebase returns user object and redirects to dashboard

### 10. **Protect Dashboard Routes**

* **Start**: Create layout wrapper in `app/dashboard/layout.tsx`
* **End**: Redirect unauthenticated users to login page

---

## **Dashboard Shell**

### 11. **Create Dashboard Home Page**

* **Start**: Scaffold `app/dashboard/page.tsx`
* **End**: Render “Welcome, \[User]” from context

### 12. **Build Dashboard Navigation Header**

* **Start**: Create `components/Header.tsx`
* **End**: Header with links to Essays, Resume, Timeline, LOR

---

## **Essays: Inline AI Assistance**

### 13. **Create Essay Writing Page**

* **Start**: Scaffold `app/dashboard/essays/page.tsx`
* **End**: Renders a textarea input

### 14. **Build `AITextEnhancer` Component**

* **Start**: Create `components/AITextEnhancer.tsx`
* **End**: Textarea with debounce + character count

### 15. **Create `/api/suggest-text` Route**

* **Start**: Scaffold `app/api/suggest-text/route.ts`
* **End**: Returns mock AI suggestions based on prompt

### 16. **Connect AITextEnhancer to `/api/suggest-text`**

* **Start**: Add debounce + POST call to API
* **End**: Suggestions show below text input after 2 seconds idle

---

## **Resume Storytelling Enhancer**

### 17. **Create Resume Page UI**

* **Start**: Scaffold `app/dashboard/resume/page.tsx`
* **End**: Shows static fields: experience, role, summary

### 18. **Build `ResumeStoryEnhancer` Component**

* **Start**: Create `components/ResumeStoryEnhancer.tsx`
* **End**: Fields + "Enhance" button

### 19. **Create `/api/enhance-resume` Route**

* **Start**: Scaffold API route
* **End**: Returns mocked enhanced story version of experience

### 20. **Connect Enhancer to API**

* **Start**: Call API with field values
* **End**: Show enhanced version under original entry

---

## **Document Upload + Analysis**

### 21. **Create `FileUploader` Component**

* **Start**: Create `components/FileUploader.tsx`
* **End**: Accepts `.pdf`, `.docx`, `.txt`, shows upload preview

### 22. **Configure Firebase Storage in `firebase.ts`**

* **Start**: Import and export Firebase Storage object
* **End**: Can upload test file to Firebase bucket

### 23. **Create Document Upload UI on Essays Page**

* **Start**: Add `FileUploader` to `essays/page.tsx`
* **End**: File preview appears, uploads to Firebase

### 24. **Create `/api/analyze-doc` Route**

* **Start**: Create API route that accepts file URL
* **End**: Returns mock clarity feedback

### 25. **Connect FileUploader to `/api/analyze-doc`**

* **Start**: After upload, call API with file path
* **End**: Display returned feedback under upload box

---

## **Dynamic Timeline**

### 26. **Create Timeline Page UI**

* **Start**: Scaffold `app/dashboard/timeline/page.tsx`
* **End**: Show "No events yet" state

### 27. **Build `TimelineCalendar` Component**

* **Start**: Render calendar view with “Add Milestone” button
* **End**: Can add and view static timeline items

### 28. **Create `timeline` table with Prisma**

* **Start**: Add schema for events with `userId`, `title`, `dueDate`
* **End**: Run `prisma migrate dev` successfully

### 29. **Build `/api/timeline-sync` API**

* **Start**: Accept `POST` to save timeline event
* **End**: Writes to Neon and returns event list

### 30. **Connect TimelineCalendar to API**

* **Start**: Form submits to `/api/timeline-sync`
* **End**: New events persist and render after reload

---

## **Wrap-Up + Polish**

### 31. **Deploy to Vercel**

* **Start**: Push to GitHub + connect to Vercel
* **End**: App accessible via `gradzee.vercel.app`

### 32. **Add Mobile Responsiveness**

* **Start**: Add responsive Tailwind classes
* **End**: All views usable on mobile screens

### 33. **Test Auth Persistence on Refresh**

* **Start**: Reload while logged in
* **End**: Remain logged in and land on dashboard

### 34. **Run Lighthouse Audit for Performance & Accessibility**

* **Start**: Run audit on dashboard page
* **End**: Score above 90 on all categories
