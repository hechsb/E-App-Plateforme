const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./Database/index");
const classRouter = require("./routes/class");
const UserRouter = require("./routes/user");
const courseRouter = require("./routes/course");
require("dotenv").config();
const { OpenAI ,  OpenAIApi } = require("openai");


app.use(cors());
app.use(express.json());
app.use("/files", express.static(__dirname + "/files"));
app.use(express.urlencoded({ extended: true }));

app.use("/classess", classRouter);
app.use("/User", UserRouter);
app.use("/courses", courseRouter);

// console.log(process.env.API_Key)
//Aiii 


// const openai = new OpenAI({
//   apiKey: process.env.API_Key,
// });

// app.post("/chat", async (req, res) => {
//   try {
//     const chatCompletion = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [{ "role": "user", "content": "Hello!" }],
//     });
//     console.log(chatCompletion.choices[0].message);

//     return res.status(200).json({
//       message: "working",
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       error: "An error occurred",
//     });
//   }
// });
//////
app.listen(3000, () => {
  console.log("listen on port 3000 ");
});
