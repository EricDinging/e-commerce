"""REST api for cart"""

import pathlib
import flask
import ecom
from ecom.util import get_price

user_cart = {}  # key: id, value: quantity


def clear_cart():
    user_cart.clear()


@ecom.app.route("/api/v1/cart/update/", methods=["POST"])
def update_cart_item():
    data = flask.request.get_json()
    itemid = int(data["itemid"])
    quantity = int(data["quantity"])

    if quantity == 0:
        user_cart.pop(itemid, None)
    else:
        user_cart[itemid] = quantity

    print(user_cart)

    return flask.jsonify({})


@ecom.app.route("/api/v1/cart/total/", methods={"GET"})
def get_cart_total():
    """Return items."""
    total = 0
    for key, value in user_cart.items():
        total += get_price(key, value)
    context = {"total": total}
    print(total)
    return flask.jsonify(**context)


@ecom.app.route("/api/v1/cart/checkout/", methods={"POST"})
def checkout():
    """Checkout."""
    data = flask.request.get_json()
    clear_cart()
    response_data = {
        "message": "Checkout successful!",
    }
    return flask.jsonify(response_data)
