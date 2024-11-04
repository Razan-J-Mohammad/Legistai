from flask import Flask, request, jsonify
import pyodbc
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

connection_string = (
    "Driver={ODBC Driver 18 for SQL Server};"
    "Server=tcp:legistai-test.database.windows.net,1433;"
    "Database=legistai-test;"
    "UID=legistaitest;"
    "PWD=admin@123;"
    "Encrypt=yes;"
    "TrustServerCertificate=yes;"
    "Connection Timeout=30;"
)

conn = pyodbc.connect(connection_string)

@app.route('/')
def home():
    return "Welcome to the API! Use /api/register to register a user."

@app.route('/api/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        name = data.get('name')
        phone = data.get('phone')
        email = data.get('email')
        location = data.get('location')
        description = data.get('description')
        rating = data.get('rating')

        standardized_name = name.replace(" ", "").lower()

        cursor = conn.cursor()
        cursor.execute("SELECT name FROM users")
        existing_names = [row[0].replace(" ", "").lower() for row in cursor.fetchall()]

        if standardized_name in existing_names:
            return jsonify({"error": f"User with name `{name}` already exists."}), 400

        cursor.execute(
            "INSERT INTO users (name, phone_number, email, location, description, rating) VALUES (?, ?, ?, ?, ?, ?)",
            (name, phone, email, location, description, rating)
        )
        conn.commit()

        cursor.execute("SELECT @@IDENTITY AS id")
        user_id_row = cursor.fetchone()

        if user_id_row:
            user_id = user_id_row[0]
            return jsonify({"message": "User registered successfully!", "user_id": user_id}), 201
        else:
            return jsonify({"error": "Failed to retrieve user ID."}), 500

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/getProfileById/<int:user_id>', methods=['GET'])
def get_profile(user_id):
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()

    if user:
        return jsonify({
            "id": user.id,
            "name": user.name,
            "phone": user.phone_number,
            "email": user.email,
            "location": user.location,
            "description": user.description,
            "rating": user.rating,
        }), 200

    return jsonify({"error": "User not found."}), 404

if __name__ == '__main__':
    app.run(debug=True)
