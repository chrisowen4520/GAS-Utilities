/*

Created By: Chris Owen
Initial Version Created On: Jan 6 2024

This function accepts a Google form ID and returns an array containing
three elements listed below all from the last form submission

formData[0] = Ticketing type brick of Q&A text information
formData[1] = an array only containing the answers to questions
formData[2] = an array containing metadata about submission 

*/

// TODO implement IIFE pattern
function getLastGoogFormResponse(formId,responseNum) {
    /* 
    formID is the unique ID of a Google Form
    responseNum is the response number to be returned
      this will be 1 for the latest response 2 sor the second
      latest and so on
    */
  
    // will be used to hold the submission metadata
    var submission_info = [];
    // will hold an array of form response answers
    var form_response_array = [];
    // holding area for a ticketing style of Q&A from data
    var form_response_brick = [];
  
    // Get the response as dictated by the responseNum
    var form = FormApp.openById(formId);
    var formResponses = form.getResponses();
    var formCount = formResponses.length;
    var lastResponse = formResponses[formCount - responseNum];
  
    // Get the questions, answers, timestamp of response and
    // respondant email
    var itemResponses = lastResponse.getItemResponses();
    var rawResponseTime = lastResponse.getTimestamp();
    var responseTimestamp = Utilities.formatDate(rawResponseTime,"GMT","yyyy-MM-dd HH:mm:ss");
    var filedBy = formResponse.getRespondentEmail();
    submission_info.push(filedBy, responseTimestamp)
    
    // Loop answers into an array
    // Loop the response questions and answers into text brick
    for(var j = 0; j< itemResponses.length; j++) {
      var itemResponse = itemResponses[j];
        var question = itemResponse.getItem.getTitle();
        var answer = itemResponse.getResponse();
  
        Array.isArray(answer)
        ? answer.join(", ")
        : answer
  
        form_response_brick.push(question + "\n");
        form_response_brick.push(answer + "\n\n");
  
        form_response_array.push(answer);
  
    }
  
    formData = [
      form_response_brick.join(""),
      form_response_array,
      submission_info
    ];
  
    return formData;
    
  }
  