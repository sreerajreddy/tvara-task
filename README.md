# Tvara DevOps Assignment

This repository contains my submission for the **Tvara DevOps Interview Challenge**.
The assignment includes two main parts:

1. **Task A** – Automating merges from the `dev` branch into `main` using GitHub Actions
2. **Task B** – Building a simple backend service that connects to the Gemini 2.0 Flash API

I have kept the implementation straightforward, readable, and easy for reviewers to follow.

---

## **📌 Task A – Auto Merge: dev → main**

I created a GitHub Actions workflow that automatically merges the `dev` branch into `main` whenever new commits are pushed to `dev`.

### **Workflow Behavior**

* Triggered on `push` events to the `dev` branch
* Checks out the repository with full depth
* Merges `dev` into `main` automatically
* Pushes changes using `GITHUB_TOKEN`
* Provides clean logs
* Handles the “unrelated histories” case for initial setup
* Fails gracefully if there is a merge conflict

### **Testing the Workflow**

To verify the automation, I created two simple text files:

* **test2.txt**
* **test3.txt**

These files were committed to the `dev` branch to confirm that the workflow automatically merges them into `main`.

Workflow file:

```
.github/workflows/auto-merge-dev-to-main.yml
```

---

## **📌 Task B – Backend API (Gemini Integration)**

The backend is a minimal **Node.js + Express** API that exposes:

```
POST /api/ask-gemini
```

### **Features**

* Accepts a prompt from the request body
* Forwards it to the **Gemini 2.0 Flash** API
* Returns clean JSON output
* Handles failures gracefully
* Keeps API key in environment variables (not committed)

Located under:

```
backend/
```

---

## **📁 Project Structure**

```
tvara-assignment/
├── .github/
│   └── workflows/
│       └── auto-merge-dev-to-main.yml
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   │   └── gemini.js
│   ├── .env.example
│   └── README.md
├── test2.txt         # test files used for merge workflow validation
└── test3.txt
```

---

## **🚀 Running the Backend Locally**

1. Navigate to backend:

   ```
   cd backend
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create `.env`:

   ```
   cp .env.example .env
   ```

4. Add your Gemini API key:

   ```
   GEMINI_API_KEY=your_key_here
   PORT=8080
   ```

5. Start the server:

   ```
   npm start
   ```

6. Test the endpoint:

   ```
   curl -X POST http://localhost:8080/api/ask-gemini \
     -H "Content-Type: application/json" \
     -d '{"prompt":"Hello Gemini"}'
   ```

---


