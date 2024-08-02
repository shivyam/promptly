from pymongo import MongoClient


def get_database():
 
   # Provide the mongodb atlas url to connect python to mongodb using pymongo
   CONNECTION_STRING = 'mongodb+srv://shivyamehta1:kWMvB5gh4RIazzBp@cluster0.m3hzriw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
   # Create a connection using MongoClient. You can import MongoClient or use pymongo.MongoClient
   client = MongoClient(CONNECTION_STRING)
 
   # Create the database for our example (we will use the same database throughout the tutorial
   return client['userInfo']
  
