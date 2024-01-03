"""REST api for items"""

import pathlib
import flask
import ecom


@ecom.app.route("/api/v1/item", methods=["GET"])
def get_items():
    """Return items."""

    context = {"name": "item1", "description": "item1 description", "price": 0}
    return flask.jsonify(**context)


@ecom.app.route("/api/v1/item/<int:itemid_url_slug>", methods=["GET"])
def get_item(itemid_url_slug):
    """Return items."""

    context = {"name": "item1", "description": "item1 description", "price": 0}
    return flask.jsonify(**context)
