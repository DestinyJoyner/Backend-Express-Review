function checkName(req, res, next) {
  const name = req.body.name;
  // "dEstIny j" -> " DestinyJ"
  if (typeof name === "string") {
    // split(" ") -> ["dEstIny", "j"]
    const nameArr = name.split(" ");

    const firstName = nameArr[0];

    const lastName = nameArr[1].toUpperCase();

    //  arr[0] = "dEstIny".charAt(0) -> "d".toUpperCase() -> "D"
    const firstLetterFirstName = firstName.charAt(0).toUpperCase();

    // arr[0] -> "dEstIny".slice(1) -> "EstIny".toLowerCase() -> "estiny"
    const restOfFirstName = firstName.slice(1).toLowerCase();

    const convertedFirstName = firstLetterFirstName + restOfFirstName;

    req.body.name = `${convertedFirstName} ${lastName}`;

    next();
    /* 
        const obj {

        }
        obj color ="pink"

        obj = {
            color = "pink"
        }
    */

    // const convertedFirstName = `${firstLetterFirstName}${restOfFirstName}`
  } else {
    res.status(404).json({
      Error: "name must be a string!",
    });
  }
}

module.exports = {
    checkName
}
