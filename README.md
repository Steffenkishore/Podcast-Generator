# 🎙️ AI Podcast Generator

An AI-powered podcast generation platform that transforms any topic into a complete podcast episode using Large Language Models (LLMs) and Text-to-Speech (TTS). The application automatically generates a podcast script, converts it into natural-sounding speech, and provides an audio file that users can listen to or download.

---

## 🚀 Features

- 📝 Generate podcast scripts from any topic using AI
- 🎤 Convert scripts into realistic speech using Murf AI
- 🎧 Listen to generated podcasts directly in the browser
- ⚡ Fast and responsive React frontend
- 🔒 Secure backend API using Express.js
- 📱 Responsive UI for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- TypeScript
- Axios
- dotenv
- CORS

### AI Services
- Google Gemini API (Script Generation)
- Murf AI API (Text-to-Speech)

---

## 📂 Project Structure

```
AI-Podcast-Generator/
│
├── client/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── app.ts
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-podcast-generator.git
```

```bash
cd ai-podcast-generator
```

---

### 2. Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **server** directory.

```env
PORT=5000

GEMINI_API_KEY=your_google_gemini_api_key

MURF_API_KEY=your_murf_api_key
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd server
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## 📡 API Endpoint

### Generate Podcast

**POST**

```
/api/podcast/generate
```

### Request Body

```json
{
  "topic": "The Future of Artificial Intelligence"
}
```

### Response

```json
{
  "success": true,
  "script": "Generated podcast script...",
  "audioUrl": "https://..."
}
```

---

## 💡 How It Works

1. User enters a podcast topic.
2. The frontend sends the topic to the Express backend.
3. Google Gemini generates a podcast script.
4. The script is sent to the Murf AI API.
5. Murf AI converts the script into speech.
6. The backend returns the generated audio URL.
7. The frontend plays the generated podcast.

---

## 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
├── home.png
├── generating.png
└── result.png
```

---

## 🔮 Future Improvements

- Podcast voice selection
- Multiple languages
- Script editing before generation
- Podcast history
- User authentication
- Download generated podcasts
- Background music support
- Streaming audio generation
- Podcast transcript download

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Steffen Kishore**

- GitHub: https://github.com/Steffenkishore
- LinkedIn: https://www.linkedin.com/in/steffen-kishore/

---

⭐ If you found this project helpful, consider giving it a star!