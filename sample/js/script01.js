$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
  })

  $("#button01").on("click",function(){
    /*console.log("クリックされた")*/
    /*console.log(students[0],students.length);*/
    $("#content").text("最初のメンバーは" + students[0] + "/人数は" + students.length + "人");
  })

  $("#button02").on("click",function(){
    $("#content").text(students[2]);
  })
 
  $("#button03").on("click",function(){
    /*$("content").text(students[4])*/
    $("#content").text(students[students.length-1]);
  })

  $("#button04").on("click",function(){
    /*students[5] = "山下"*/
    /*students[students.length] = "山下"*/
    /* "練習問題6-4" students.push("山下")*/
    if(students[students.length-1]!="山下"){
      students.push("山下")
    }
  })

  $("#button05").on("click",function(){
    students = students.reverse()
  })

  /*$("#button06").on("click",function(){
    students[];
  })*/

})