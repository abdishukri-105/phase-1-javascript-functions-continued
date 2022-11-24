
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork("watch world cup")

function wrapAdjective(flair = `*`){
   return function(adj = `a hard worker`){
    return `You are ${flair}${adj}${flair}!`
   }
}
















// function outer(greeting, msg = "It's a fine day to learn") {
//     // 2
//     const innerFunction = function (name, lang = "Python") {
//       // 3
//       return `${greeting}, ${name}! ${msg} ${lang}`; // 4
//     };
//     return innerFunction; // 5
    
//   }
  
  



















  // function outer(greeting, msg = "It's a fine day to learn"){
  //    return function  (name, lang = "python"){
  //     return `${greeting}, ${name}! ${msg} ${lang}`
  //    }
  // }

  // console.log(outer("Hello")("student", "javaScript"))

