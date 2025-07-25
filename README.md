# Cookie Scanner

A web application that helps website owners ensure their cookie banners comply with privacy regulations by scanning and analyzing cookie banners on websites.

## Features

### Frontend
- 🎨 Modern UI with smooth animations and transitions
- 🔍 Real-time cookie banner scanning
- 📊 Interactive scan results display
- ⚡ Fast and responsive user experience
- 🎯 Card spotlight effects and reveal animations

### Backend
- 🔍 Cookie banner extraction and analysis
- 📝 Detailed compliance checking
- 🔄 Multiple extraction methods for better accuracy
- 📊 Structured output generation

## Tech Stack

### Frontend
- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom components with modern effects

### Backend
- **Language**: Python
- **Framework**: Flask
- **Web Scraping**: 
  - Selenium 
  - BeautifulSoup4
- **Text Processing**: 
  - SentenceTransformer (all-MiniLM-L6-v2)
  - Natural Language Processing for similarity matching
- **HTTP Client**: Requests
- **CORS Support**: Flask-CORS

## Project Structure

```
cookie-scanner/
├── frontend/                # Next.js frontend application
│   ├── src/
│   │   ├── app/            # Next.js app directory
│   │   ├── components/     # Reusable components
│   │   │   ├── ui/        # UI components
│   │   │   └── layout/    # Layout components
│   │   └── styles/        # Global styles
│   └── public/            # Static assets
│
└── backend/                # Python backend application
    ├── app.py             # Main Flask application
    ├── extractor.py       # Cookie banner extractor
    └── outputs/           # Generated output files
```

## Getting Started

```bash
pip install -r requirements.txt
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
python app.py
```

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server

### Backend
- `python app.py` - Start the Flask server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


