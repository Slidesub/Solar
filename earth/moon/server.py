from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__, instance_relative_config=True)
app.config.from_pyfile('application.cfg', silent=True)
mongo = PyMongo(app)

from moon.app import article_bp

app.register_blueprint(article_bp, url_prefix='/article')

if __name__ == "__main__":
    app.run(app.config['DEBUG'])