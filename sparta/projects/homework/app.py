from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.oqwac.mongodb.net/myCluster0?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/homework", methods=["POST"])
def homework_post():
    nickname_receive = request.form['nickname_give']
    comment_receive = request.form['comment_give']

    doc = {
        'nickname': nickname_receive,
        'comment': comment_receive
    }
    db.visit.insert_one(doc)

    return jsonify({'msg':'등록 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    all_visit = list(db.visit.find({}, {'_id': False}))
    return jsonify({'visitor':all_visit})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)