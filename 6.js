function modifyExecute(execute) {
  valid = true;

  return function () {
    if (!valid)
      return { error: "Calls after an error are not allowed." };

    execute(function (error, result) {
      if (error) {
        valid = false;
        return { error: error };
      }
      else {
        return { result: result };
      }
    });
  };
};

//For testing purposes (do not submit uncommented):
var errorExec = modifyExecute(function (callback) {
 callback("Error", null);
});
//var resultExec = modifyExecute(function (callback) {
//  callback(null, "Result");
//});
errorExec().error;
resultExec().result;


