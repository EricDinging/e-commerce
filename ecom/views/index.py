"""
ecom index (main) view.

URLs include:
/
"""
import pathlib
import os
import flask
import ecom
from ecom.api.cart import clear_cart 

@ecom.app.route("/")
def show_index():
    """Display / route."""
    clear_cart()
    context = {
    }
    return flask.render_template("index.html", **context)


@ecom.app.route("/static/<path:path>")
def serve_static_file(path):
    """Fetch static file."""
    return flask.send_from_directory("static", path)