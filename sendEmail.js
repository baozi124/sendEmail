function checkSheet(){
  var sheet = SpreadsheetApp.getActiveSheet() //get current sheet
  var startRow = 2 //assuming the first row is a header
  var numRows = sheet.getLastRow() -1
  var numColumns = sheet.getLastColumn()
  var dataRange = sheet.getRange(startRow, 1, numRows, numColumns)
  var data = dataRange.getValues()

  var subject = "Insert Subject Here"
  var message = "Insert Message Here"

  for (var i = 0; i < data.length; ++i){
    var row = data[i]
	//you could alternatively configure the message here so that it's personalized to each recipient
    var emailAddress = row[0] //the column number that has the emails

    MailApp.sendEmail(emailAddress, subject, message)
    console.log("Sent to " + emailAddress)
  }
  console.log("Remaining daily email quota:" + MailApp.getRemainingDailyQuota())
}