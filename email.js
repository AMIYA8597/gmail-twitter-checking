function ValidateEmail(input) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.value.match(validRegex)) {
  
      alert("Valid email address!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Invalid email address!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }
function ValidateTwitter(input) {

    // let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // let validRegex = /(^|[^@\w])@(\w{1,15})\b/g;
    let validRegex = /(^|[^@\w])@(\w{1,15})\b/g;

    // let exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
    // text = text.replace(exp, "<a href='$1' target='_blank'>$1</a>");
    // exp = /(^|\s)#(\w+)/g;
    // text = text.replace(exp, "$1<a href='https://twitter.com/hashtag/$2?src=hash' target='_blank'>#$2</a>");
    // exp = /(^|\s)@(\w+)/g;
    // text = text.replace(exp, "$1<a href='http://www.twitter.com/$2' target='_blank'>@$2</a>");
  
    if (input.value.match(validRegex)) {
    // if (input.value.match(exp)) {
  
      alert("Valid twitter address!");
  
      document.form2.text2.focus();
  
    //   return "https://twitter.com" + input.replace("@", "");
      return true;
  
    } else {
  
      alert("Invalid twitter address!");
  
      document.form2.text2.focus();
  
      return false;
  
    }
  
  }



//   function getTwitterUrl(str) {
//     // Regular expression to match Twitter usernames
//     const regex = /^@?([A-Za-z0-9_]{1,15})$/;
    
//     // Use the test method of the regex object to check the input string
//     if (regex.test(str)) {
//       // If the input string is a valid Twitter username, add "https://" to the beginning
//       return "" + str.replace("@", "");
//     } else {
//       // If the input string is not a valid Twitter username, return null
//       return null;
//     }
  
