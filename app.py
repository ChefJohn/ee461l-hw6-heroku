from flask import Flask, jsonify
from flask.helpers import send_from_directory

#from flask_cors import CORS

app = Flask(__name__)
#CORS(app)

app = Flask(__name__, static_folder="client/build", static_url_path="")

@app.route("/toggle_button/<button_state>", methods=["GET"])
def toggle_button(button_state: str):
    output = ""
    if button_state == "Johnny":
        output = "Do"
    else:
        output = "User not found"

    button = output
    return jsonify(button)

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0")