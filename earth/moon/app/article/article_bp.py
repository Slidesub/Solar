from flask import Blueprint
from moon.server import mongo
from flask import jsonify
from bson.json_util import dumps

article_bp = Blueprint('article_bp', __name__)

@article_bp.route('/')
@article_bp.route('/list')
def list():
    articles = []
    for article in mongo.db.article.find({}):
        articles.append(article)
    return dumps(articles)