from flask import Flask, jsonify, request, session
from flask_cors import CORS
from pymongo_get_database import get_database
from bson import ObjectId

app= Flask(__name__)
cors= CORS(app, origins="*")


dbname = get_database() 
table_userInfo = dbname["userInfo"]
table_journalEntries = dbname["journalEntries"]


@app.route("/api/login", methods= ['POST'])
def receive_dataLogin():
   data = request.json
   print(data)
   loginUser = data.get('username', "")
   password=data.get('password', "")
   return login_response(loginUser, password)


def login_response(loginUser, loginPassword):

   if loginUser=="":
      return jsonify({"message": "No user logged in"})

   rows = table_userInfo.find()

   for row in rows:
      print("username: " +  row.get("username") +" vs " + loginUser)
      print("password: " + row.get("password") + " vs " + loginPassword)
      if (row.get('username')==loginUser and row.get("password")==loginPassword):
         return jsonify({"message": "found", "username": loginUser})
      elif(row.get('username')==loginUser and row.get("password")!=loginPassword):
         return jsonify({"message": "incorrect username or password, try again"})

   return jsonify({"message": "not found"})


      
@app.route("/api/register", methods= ['POST'])
def register():
   data = request.json
   rows = table_userInfo.find()
   for row in rows:
      if (row.get('username')==data.get('username')):
         return {"message": "username already exists"}

   table_userInfo.insert_one({"firstName":data.get("firstName"), "lastName": data.get("lastName"), "username": data.get("username"), "password": data.get("password")}) 
   return {"message": "success"}



@app.route("/api/entry/<username>", methods= ['POST']) 
def entry(username):
    try:
        data = request.json

        if not data or 'journalEntry' not in data or 'today' not in data:
            return jsonify({"error": "Invalid input"}), 400

        table_journalEntries.insert_one({
            "username": username,
            "date": data.get("today"),
            "entry": data.get("journalEntry")
        })

        return jsonify({"message": f"Entry added successfully for {username}"}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "An error occurred"}), 500
    

@app.route("/api/allEntries/<date>/<username>", methods= ['GET'])  
def dateEntries(date,username):
   if not username:
      return jsonify({"message": "No user logged in"}), 400

   rows = list(table_journalEntries.find({"username": username, "date": date},{ "_id": 0}))
   print(rows)

   return jsonify(rows), 200
    
    

@app.route("/api/allEntries/<username>", methods= ['GET'])  
def allEntries(username):
   if not username:
      return jsonify({"message": "No user logged in"}), 400

   rows = list(table_journalEntries.find())
   json_serializable_rows = convert_to_json_serializable(rows)
   for row in rows:
      row['_id'] = str(row['_id'])

   return jsonify(rows), 200
    

#for object id jsonify
def convert_to_json_serializable(document):
    if isinstance(document, list):
        return [convert_to_json_serializable(item) for item in document]
    elif isinstance(document, dict):
        return {key: convert_to_json_serializable(value) for key, value in document.items()}
    elif isinstance(document, ObjectId):
        return str(document)
    else:
        return document



if __name__ == "__main__":
        app.run(debug=True, port=8000)

