from flask import Flask, jsonify
    
app = Flask(__name__)

@app.route('/data')
def get_data():
    return jsonify({'message': 'Data from Python backend'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)