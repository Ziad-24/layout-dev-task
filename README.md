# 🧠 AI Research Assistant

This project is a simple backend service for an AI-powered research assistant that:
- Takes a research query from a user
- Searches the web using the **Brave Search API**
- Summarizes the top results using the **Google Gemini API**
- Returns a structured JSON response and displays it in a minimal frontend

---

## ⚙️ Setup

### 1. Clone and Install
```bash
git clone https://github.com/Ziad-24/layout-dev-task.git
cd ai-research-agent
npm install
```

### 2. Environment Variables
Create a `.env` file in the root folder with the following values:
```
PORT=5000
BRAVE_API_KEY=BRAVE_API_KEY
GEMINI_API_KEY=GEMINI_API_KEY
```

> Get your API keys from:
> - Brave API: https://brave.com/search/api/
> - Gemini API: https://aistudio.google.com/welcome

---

## ▶️ Run the App

```bash
npm run build && npm start
```

Server will run on:
```
http://localhost:5000
```

---

## 🧠 API Usage

**POST /api/research**

Example request:
```json
{ "query": "latest research on quantum computing" }
```

Example response:
```json
{
  "query": "quantum computing",
  "summary": "Quantum computing is...",
  "sources": [
    {
      "title": "Quantum Computing 101",
      "url": "https://example.com",
      "snippet": "This article explains..."
    }
  ]
}
```

---

## 💻 Frontend
A simple test UI is available at the root route `/`.  
You can open it in your browser to test the API visually.

---

## 📁 Project Structure

```
src/
├── app.ts
├── server.ts
├── routes/
│   ├── researchRoutes.ts
├── controllers/
│   ├── researchController.ts
├── services/
│   ├── braveService.ts
│   ├── geminiService.ts
│   └── researchService.ts
├── config/
│   └── env.ts
└── views/
    └── index.html
```

---

## 🧩 Notes
- Brave API is used for fetching web search results.
- Gemini API (`gemini-2.5-flash`) is used for summarization.
- Responses are structured and easy to integrate with any frontend.