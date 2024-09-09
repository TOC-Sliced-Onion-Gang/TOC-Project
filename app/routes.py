from app import app

@app.route("/member")
def member():
    return {"members": ["Member1", "Member2", "Member3"]}

