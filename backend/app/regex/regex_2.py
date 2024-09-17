import re
from flask import Blueprint

router = Blueprint('regex_2', __name__)

@router.route('/')
def library():
    return "Hello World!"