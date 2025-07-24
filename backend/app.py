from flask import Flask, jsonify, request

app = Flask(__name__)

# 模擬鞋子商品資料
shoes = [
    {"id": 1, "name": "Nike Air Max", "price": 3500, "stock": 10},
    {"id": 2, "name": "Adidas UltraBoost", "price": 4200, "stock": 8},
    {"id": 3, "name": "Puma RS-X", "price": 2800, "stock": 15}
]

orders = []

@app.route('/shoes', methods=['GET'])
def get_shoes():
    return jsonify(shoes)

@app.route('/buy', methods=['POST'])
def buy_shoe():
    data = request.json
    shoe_id = data.get('shoe_id')
    quantity = data.get('quantity', 1)
    for shoe in shoes:
        if shoe['id'] == shoe_id and shoe['stock'] >= quantity:
            shoe['stock'] -= quantity
            order = {
                "order_id": len(orders) + 1,
                "shoe_id": shoe_id,
                "quantity": quantity,
                "total": shoe['price'] * quantity
            }
            orders.append(order)
            return jsonify({"message": "購買成功", "order": order}), 201
    return jsonify({"message": "庫存不足或商品不存在"}), 400

@app.route('/orders', methods=['GET'])
def get_orders():
    return jsonify(orders)

if __name__ == '__main__':
    app.run(debug=True)
