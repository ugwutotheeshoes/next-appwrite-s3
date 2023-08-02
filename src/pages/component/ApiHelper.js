import { Client, Storage } from "appwrite";
const client = new Client();
export const storage = new Storage(client);
client
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("64c9d67cd0ed8210066c"); // Your project ID
