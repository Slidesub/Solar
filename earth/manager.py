#-*- coding: utf-8 -*-
from flask_script import Manager, Server
import application

manager = Manager(application.app)
manager.add_command("server", Server())

@manager.shell
def make_shell_context():
    return dict(app=application.app)

if __name__ == "__main__":
    manager.run()



