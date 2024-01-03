"""REST api for items"""

import pathlib
import flask
import ecom


@ecom.app.route("/api/v1/item", methods=["GET"])
def get_items():
    """Return items."""
    results = []

    # hardcode 10 items
    for i in range(10):
        results.append({
            "id": i,
            "url": str(pathlib.Path(flask.request.path) / str(i))
        })
    context = {"results": results}
    return flask.jsonify(**context)


@ecom.app.route("/api/v1/item/<int:itemid_url_slug>", methods=["GET"])
def get_item(itemid_url_slug):
    """Return items."""

    context = {
        "id": itemid_url_slug,
        "name": f"item{itemid_url_slug}", 
        "description": f"item{itemid_url_slug} description", 
        "price": int(itemid_url_slug) * 10 + 10
    }
    return flask.jsonify(**context)
