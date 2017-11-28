# -*- coding: utf-8 -*-

from flask import Blueprint
from flask import request
from moon.server import app, mongo
from flask import jsonify
from bson.json_util import dumps
from bson import ObjectId
import datetime
import math
from moon.app.util.wrapper import allow_cross_domain

article_bp = Blueprint('article_bp', __name__)

@article_bp.route('/', methods=['GET'])
@article_bp.route('/list/', methods=['GET'])
@allow_cross_domain
def list():
    pageIndex = int(request.args.get('pageIndex', 1))
    pageSize = int(request.args.get('pageSize', 5))
    articles = []
    for article in mongo.db.article.find({}).limit(pageSize).skip(pageSize * (pageIndex - 1)):
        articles.append(article)
    pageCount = math.ceil(mongo.db.article.find({}).count() / pageSize);
    return dumps({'status': 200, 'exception': None, 'data': articles, 'pageCount': pageCount})

@article_bp.route('/create', methods=['POST'])
@allow_cross_domain
def create():
    try:
        title = request.form.get('title', '')
        description = request.form.get('description', '')
        body = request.form.get('body', '')
        tags = request.form.get('tags', [])
        icon = request.files['icon']
        clicks = 0
        likes = 0
        now = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        create_date = now
        update_date = now
        article = {
            'title': title,
            'description': description,
            'body': body,
            'tags': tags,
            'icon': icon,
            'clicks': clicks,
            'likes': likes,
            'create_date': create_date,
            'update_date': update_date
        }
        mongo.db.article.insert_one(article)
    except Exception as e:
        return dumps({'status': 500, 'exception': str(e), 'data': None})
    return dumps({'status': 200, 'exception': None, 'data': article})

@article_bp.route('/edit', methods=['POST'])
@allow_cross_domain
def edit():
    try:
        id = request.args.get('title', '')
        title = request.args.get('title', '')
        description = request.args.get('description', '')
        body = request.args.get('body', '')
        tags = request.args.get('tags', [])
        icon = request.files['icon']
        update_date = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        article = {
            '_id': Object(id),
            'title': title,
            'description': description,
            'body': body,
            'tags': tags,
            'icon': icon,
            'update_date': update_date
        }
        mongo.db.article.update_one(article)
    except Exception as e:
        return dumps({'status': 500, 'exception': str(e), 'data': None})
    return dumps({'status': 200, 'exception': None, 'data': article})

@article_bp.route('/detail/<id>', methods=['GET'])
@allow_cross_domain
def detail(id=None):
    if id is None:
        return dumps({'status': 412, 'exception': None, 'data': article})
    article = mongo.db.article.find_one({'_id': ObjectId(id)})
    return dumps({'status': 200, 'exception': None, 'data': article})

