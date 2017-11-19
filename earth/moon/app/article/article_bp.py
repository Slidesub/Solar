from flask import Blueprint
from moon.server import mongo
from flask import jsonify

article_bp = Blueprint('article_bp', __name__)

@article_bp.route('/')
@article_bp.route('/list')
def list():
    users = mongo.db.system.users.find().count()
    return jsonify(users)