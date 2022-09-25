const express = require("express");
const CodeData = require("../schema/codeSchema");
const main = express();

/*
  Description: Updates data. Any modifications to terms, courses
                assignments, etc. go through this route!
  INPUT -> Request body : {
    data:[{"2A":[...]}]
  }
  jwt_token from cookie
  
  OUTPUT -> Response body : {
    msg : ....
    data: [{"2A":[...]}]
  }
*/
main.get("/get/:uid", (req, res) => {
  let id = req.params.uid;
  // Checking if user exists
  CodeData.findOne({ Id: ((id % 6) + 1).toString() })
    .then((response) => {
      if (response) {
        console.log("[Success] Data received)" + response);
        //   let newData = new CodeData({
        //     Id: "1",
        //     data: "Yo I am cool",
        //     displayName: "BinarySearch",
        //   });
        //   newData.save();
        res.status(200).json({
          displayName: response.displayName,
          data: response.data,
        });
      } else {
        res.status(404).json({
          displayName: "Error",
          data: "BACKEND_ERROR",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        displayName: "Error",
        data: "BACKEND_ERROR",
      });
    });
});

module.exports = main;
