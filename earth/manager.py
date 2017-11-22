# -*- coding: utf-8 -*-
from flask_script import Manager, Server
from moon.server import app

manager = Manager(app)
manager.add_command('runserver', Server(app.config['HOST'], app.config['PORT']))

@manager.shell
def make_shell_context():
    return dict(app=app)

if __name__ == '__main__':
    manager.run()