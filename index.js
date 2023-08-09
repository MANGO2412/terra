import app from "./src/app.js";
import "./src/database.js";

app.listen(app.get("port"))
console.log(`Server is running on port ${app.get("port")}`);

