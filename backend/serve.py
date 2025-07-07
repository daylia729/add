from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def add(num1, num2):
    return num1 + num2

@app.route("/api/add", methods=["POST"])
def UsingAddFunction():
    data = request.get_json()
    num1 = data.get("num1")
    num2 = data.get("num2")
    
    if not num1 or not num2:
        return jsonify({"error": "Please enter number"}), 400
    
    try:
        num1 = float(num1)
        num2 = float(num2)
    except ValueError:
        return jsonify({"error": "Invalid number"}), 400
    
    result = add(num1, num2)
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)