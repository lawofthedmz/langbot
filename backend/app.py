from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
import openai
from dotenv import load_dotenv
import os
from openai import OpenAI

# Load environment variables from the .env file
load_dotenv()
client = OpenAI()
app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
CORS(app)


def start_chat(model):
    """
    Starts a chat with the OpenAI model.

    Args:
        model (str): The ID of the OpenAI model to use.

    Returns:
        str: The content of the initial message from the assistant.
    """
    response = openai.Completion.create(
        model=model,
        prompt="You are a language learning assistant. Your goal is to help users learn new languages through conversation practice.",
    )
    return response.choices[0].text.strip()

def get_response(message, model):
    """
    Gets a response from the OpenAI model.

    Args:
        message (str): The message from the user.
        model (str): The ID of the OpenAI model to use.

    Returns:
        str: The response from the assistant.
    """
    try:
        response = openai.Completion.create(
            model=model,
            prompt=f"You are a language learning assistant. The user said: '{message}'. Respond in a way that helps them practice their language skills.",
        )
        return response.choices[0].text.strip()
    except Exception as e:
        return f"An error occurred: {e}"
    

"""Routing Endpoints"""
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    model ="gpt-3.5-turbo"
    bot_reply = get_response(user_message, model)
    return jsonify({"reply": bot_reply})

@app.route('/start_chat', methods=['GET'])
def start_chat_route():
    model = "gpt-3.5-turbo"
    response = start_chat(model)
    return jsonify({'reply': response})

if __name__ == '__main__':
    app.run(debug=True)