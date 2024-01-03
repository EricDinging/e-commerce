"""Base REST API file."""
import flask
import ecom


@ecom.app.route("/api/v1/")
def return_services():
    """Return API resource URLs."""
    context = {
        "items": "/api/v1/items/",
        "url": "/api/v1/",
    }

    return flask.jsonify(**context)
