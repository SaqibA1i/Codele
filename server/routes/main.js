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
  let id = 0;
  let maxCount = 0;
  // Checking if user exists
  CodeData.findOne({ Id: "123456789" }).then((response) => {
    maxCount = parseInt(response.data);
    id = ((parseInt(req.params.uid) + 6) % maxCount) + 1;

    CodeData.findOne({ Id: id.toString() })
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
});

main.get("/post/:uid", (req, res) => {
  console.log("REE");
  let countTillSuccess = parseInt(req.params.uid);
  let arr = [];
  CodeData.findOne({ Id: "223456789" })
    .then((response) => {
      arr = JSON.parse(response.data);
      arr.push(countTillSuccess);
      let successes = parseInt(response.displayName);

      CodeData.findOneAndUpdate(
        {
          Id: "223456789",
        },
        {
          data: JSON.stringify(arr),
          displayName: (successes + 1).toString(),
        }
      ).then(() => {
        res.status(200).json({});
      });
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
