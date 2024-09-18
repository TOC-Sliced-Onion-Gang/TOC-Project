from flask import Blueprint


router = Blueprint('router', __name__)


@router.route('/member')
def member():
    return {"members": ["Member1", "Member2", "Member3"]}


