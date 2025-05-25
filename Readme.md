# Pizza Dashboard

**Author:** [Ansh Kumar Singh]

---

## Overview

Pizza Dashboard is a modern, responsive web application built with Next.js, Tailwind CSS, and NextAuth.js (Google OAuth).  
It allows users to securely sign in with Google, view a personalized dashboard, and manage pizza orders with sorting and filtering.  
The dashboard and orders pages are protected and only accessible to authenticated users.

---

## Live Demo

- **Live App:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
- **GitHub Repo:** [https://github.com/Ansh13579/Pizza-Dashboard](https://github.com/yourusername/pizza-dashboard)

---

## Features

- **Google OAuth authentication** (NextAuth.js)
- **Protected dashboard and pizza orders pages**
- **Logout functionality**
- **Visually appealing, modern, and responsive UI** (Tailwind CSS)
- **Mock pizza orders table** with sorting and filtering
- **Loading and error states** for authentication
- **Toast notifications** for user feedback
- **Clear, intuitive navigation**

---

## Getting Started

### 1. Clone the repository
git clone https://github.com/Ansh13579/Pizza-Dashboard


### 2. Install dependencies
npm install


### 3. Configure environment variables
Create a `.env.local` file in the root directory with the following:
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret


- **Do NOT commit this file to GitHub.**  
- Obtain Google credentials from [Google Cloud Console](https://console.cloud.google.com/).  
- Generate `NEXTAUTH_SECRET` with `openssl rand -base64 32` or use an online generator.

### 4. Run locally
npm run dev

Visit [http://localhost:3000](http://localhost:3000).

---

## Deployment

This app is ready for Vercel:

1. **Push your code to GitHub** (see Version Control below).
2. **Import the repository in Vercel** ([vercel.com](https://vercel.com/)).
3. **Add your environment variables** in the Vercel dashboard (same as `.env.local`).
4. **Deploy!**
5. After deployment, your app will be live at `https://your-vercel-url.vercel.app`.

---

## Version Control

- The project uses Git for version control.
- The commit history is clean and meaningful, reflecting the development process.
- The repository is publicly available at [https://github.com/yourusername/pizza-dashboard](https://github.com/yourusername/pizza-dashboard).
- **.env.local** and other secrets are excluded via `.gitignore`.

---


---

## Assumptions & Challenges

- Uses mock data for pizza orders (no backend/database).
- Google OAuth is required for all dashboard pages.
- Protected routes are enforced via Next.js middleware.
- Focused on clean UI, responsive design, and user experience.
- Loading and error states are handled for authentication.
- Toast notifications provide user feedback for login/logout and errors.

---

## Third-Party Libraries Used

- [NextAuth.js](https://next-auth.js.org/) (Google OAuth authentication)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [react-hot-toast](https://react-hot-toast.com/) (toast notifications)
- [date-fns](https://date-fns.org/) (date formatting, if used)
- (Add any others you used beyond Next.js, NextAuth.js, and Tailwind CSS)

---

## How to Set Up Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Go to **APIs & Services > Credentials**.
4. Click **Create Credentials > OAuth client ID**.
5. Set **Authorized JavaScript origins** to `http://localhost:3000` (and your Vercel URL for production).
6. Set **Authorized redirect URIs** to `http://localhost:3000/api/auth/callback/google` (and your Vercel URL for production).
7. Copy your **Client ID** and **Client Secret** to your `.env.local` (do NOT commit this file).

---

## Submission

- **Public GitHub Repo:** [https://github.com/Ansh13579/Pizza-Dashboard](https://github.com/yourusername/pizza-dashboard)
- **Live Vercel App:** [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

---









