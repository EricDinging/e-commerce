"""Util func for price."""

def get_price(itemid: int, quantity: int = 1):
    return (itemid + 1) * 10 * quantity