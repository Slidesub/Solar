# -*- coding: utf-8 -*-

from functools import wraps
from flask import make_response

def allow_cross_domain(func):
    @wraps(func)
    def wrapper_func(*args, **kwargs):
        resp = make_response(func(*args, ** kwargs))
        resp.headers['Access-Control-Allow-Origin'] = '*'
        resp.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,DELETE'
        resp.headers['Access-Control-Allow-Headers'] = "Referer,Accept,Origin,User-Agent"
        return resp
    return wrapper_func