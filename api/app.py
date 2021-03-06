from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
from flask_cors import CORS
import os
import json

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app, resource={
  r"/*":{
    "origins":"*"
  }
})

bot = ChatBot(
  'Chatbot',
  storage_adapter='chatterbot.storage.SQLStorageAdapter',
  database_uri='sqlite:///chatbotDB.sqlite3'
)
trainer = ListTrainer(bot)

@app.route("/")
def home():
  return render_template("index.html")

@socketio.on('message')
def handle_message(data):
  botResponse = bot.get_response(data['message'])  
  emit('message', json.dumps({"message": str(botResponse)}))  

@app.route("/train", methods=['POST'])
def hello_world():
  if request.method == 'POST':
    f = request.files['file']
    f.save('./tmp/trainningFile.txt')
    fileContent = open('./tmp/trainningFile.txt').read()    

    trainninList = fileContent.split('\n')

    trainer.train(trainninList)    

    os.remove('./tmp/trainningFile.txt')
  return {
    "message": "ChatBot treinado com sucesso :D"
  }

if __name__ == '__main__':
  socketio.run(app)