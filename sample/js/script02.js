$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

  /*let txt = ""*/

  $("#button01").on("click",function(){
    let txt = ""
    for(let i=0; i<students.length; i++){
      txt +=students[i]
      /*$("#content").text(students[i]);*/
      /*$("#content").append(students[i]);*/
    }
    $("#content").text(txt);

  })

  $("#button02").on("click",function(){
    let txt = ""
    for(let i=0; i<students.length; i++){
      txt +="<div class='student_name' id='student"+i+"'>" + students[i] + "</div>"
      /*txt +="<div>" + students[i] + "</div>"*/
    }

    $("#content").html(txt);

  })

})