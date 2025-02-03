import sqlite3

from flask import Flask, jsonify

app = Flask(__name__)

def get_data():
    d={
  "rests": {
    "N": "N Block",
    "P": "P Block",
    "Q": "Q Block"
  }
}
    return d
# API Route



@app.route('/data')
def api_data():
    data = get_data()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
