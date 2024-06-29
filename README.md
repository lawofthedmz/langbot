# Language Learning Bot

## Overview

Language Learning Bot is a web application designed to help users practice and improve their language skills through interactive conversations and adaptive reviews. The project integrates a React frontend with a Flask backend that utilizes OpenAI's GPT-3.5-turbo model to provide conversational AI functionalities.

## Current Status

**Note:** This project is not fully functional. Only the frontend is operational at the moment. The backend is set up but not fully integrated or tested.

## Features

- **Interactive Conversations**: Users can engage in conversations with an AI assistant to practice their language skills.
- **Adaptive Reviews**: The app provides personalized review sessions based on the user's progress.

## Technologies Used

- **Frontend**: React, Styled Components, Axios
- **Backend**: Flask, Flask-CORS, OpenAI API

## Installation

### Prerequisites

- Node.js and npm
- Python 3
- OpenAI API Key

### Frontend Setup

1. Clone the repository and navigate to the `frontend` directory:
   ```bash
   git clone https://github.com/your-username/language-learning-bot.git
   cd language-learning-bot/frontend
   ```
2. Install the dependencies:    
```
npm install
```
3. Start the development server:
```bash
npm start
```
### Backend Setup

1. Navigate to the backend directory:
```bash
cd ../backend
```
2. Create a virtual environment:
```bash
python -m venv venv
```
3. Activate the virtual environment:
On macOS/Linux:
```bash
source venv/bin/activate
```
On Windows:
```bash
    venv\Scripts\activate
```
4. Install the dependencies:
```bash
pip install -r requirements.txt```
5. Set your OpenAI API key directly in app.py:
```python
openai.api_key = "your_openai_api_key_here"
```
6. Run the Flask application:
```bash
python app.py
```
## Project Structure
```
language-learning-bot/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── AdaptiveReview.jsx
    │   │   ├── InteractiveConversation.jsx
    │   │   └── ...
    │   ├── pages/
    │   │   ├── Lesson.jsx
    │   │   ├── Courses.jsx
    │   │   ├── Home.jsx
    │   │   ├── HowItWorks.jsx
    │   │   ├── Languages.jsx
    │   │   └── More.jsx
    │   ├── App.js
    │   └── ...
    ├── package.json
    └── ...
```
## Usage

    Navigate to the frontend URL provided by your development server (typically http://localhost:3000).
    Explore the different sections of the app, such as Home, Courses, How It Works, and More.

## Issues

As of now, the backend is not fully integrated or tested. Only the frontend is functional. Users can navigate through the frontend interface, but interactions with the AI and adaptive review features are not working.
Contribution

Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or improvements.
License

This project is licensed under the MIT License.
Contact

For any questions or suggestions, feel free to reach out:

    GitHub: your-username
    Email: your-email@example.com




Replace `your-username` and `your-email@example.com` with your actual GitHub username and email address. This README provides an overview of the project, its current status, and instructions for setting up and running the frontend and backend.

