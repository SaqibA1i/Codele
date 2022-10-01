const express = require("express");
const { update } = require("../schema/codeSchema");
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

function changeTimeZone(date, timeZone) {
  if (typeof date === "string") {
    return new Date(
      new Date(date).toLocaleString("en-US", {
        timeZone,
      })
    );
  }

  return new Date(
    date.toLocaleString("en-US", {
      timeZone,
    })
  );
}
console.log(changeTimeZone(new Date(), "America/Toronto").toString());

const updateGuessCount = (countTillSuccess) => {
  let arr = [];
  CodeData.findOne({ Id: "223456789" })
    .then((response) => {
      const date = new Date();
      let offset = -300; //Timezone offset for EST in minutes.
      let estDate = new Date(
        date.getTime() + offset * 60 * 1000
      ).toLocaleDateString();

      arr = JSON.parse(response.data);
      if (arr[estDate] == undefined) {
        arr[estDate] = [];
      }
      arr[estDate].push(countTillSuccess);

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
        return {};
      });
    })
    .catch((err) => {
      console.log(err);
      return {
        displayName: "Error",
        data: "BACKEND_ERROR",
      };
    });
};

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

main.post("/post", (req, res) => {
  const name = req.body.name;
  const guesses = parseInt(req.body.guesses);

  let top7 = [];
  console.log(req.body);
  CodeData.findOne({ Id: "top7" })
    .then((response) => {
      top7 = JSON.parse(response.data);
      if (top7.length < 7) {
        if (name != "" && name != undefined) {
          top7.push(name);
        }
        console.log(top7, name);
        CodeData.findOneAndUpdate(
          { Id: "top7" },
          {
            data: JSON.stringify(top7),
          }
        ).then(() => {
          updateGuessCount(guesses);
          res.status(200).json({ top7 });
        });
      } else {
        updateGuessCount(guesses);
        res.status(200).json({ top7 });
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

// [1,2,1,3,1,4,4,3,3,3,3,1,2,1,1,4]
main.get("/post/:uid", (req, res) => {
  let countTillSuccess = parseInt(req.params.uid);
  updateGuessCount(countTillSuccess);
  res.status(200).json({});
});

main.get("/names", (req, res) => {
  CodeData.findOne({ Id: "top7" })
    .then((response) => {
      res.status(200).json({ data: JSON.parse(response.data) });
    })
    .catch((err) => {
      console.log(err);
      res.status(404).json({
        displayName: "Error",
        data: "BACKEND_ERROR",
      });
    });
});

main.get("/metrics", (req, res) => {
  CodeData.findOne({ Id: "223456789" })
    .then((response) => {
      res.status(200).json({
        totalCount: parseInt(response.displayName),
        data: JSON.parse(response.data),
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
