from flask import Flask, render_template, request
import requests


app = Flask(__name__)


@app.route('/')
def main():
    myname = "sparta"
    return render_template("index.html", name=myname)

# url에 '<>'을 사용하여 변수를 전달할 수 있다.


@app.route('/detail/<keyword>')
def detail(keyword):
    r = requests.get("fhttps://owlbot.info/api/v4/dictionary/{keyword}", headers={
                     "Authorization": "Token a37cc06a6d40cc42c2f20874deea1e17f6f8cc6b"})
    result = r.json()
    print(result)
    word_receive = request.args.get('word_give')
    print(word_receive)
    return render_template("detail.html", word=keyword)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
