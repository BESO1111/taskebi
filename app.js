answerAsk1 = () => {
  const firsanswer1 = document.getElementById("answer1").value;


  if (firsanswer1 === "" || firsanswer1 === null) {
    document.getElementById("shedegi1").innerHTML = "gtxovt sheavsot veli";


  }

  else if (firsanswer1 < 18) {
    document.getElementById("shedegi1").innerHTML = "samwuxarot tqven 18 welze naklebis xart ,ver gaivlit shemdeg kitxvebs";
  }

  else {
    document.getElementById("shedegi1").innerHTML = "tqven xart srulwlovani ,shemdegi kitxvistvis moemzadet"
    document.getElementById("content").style.display = "none";
    document.getElementById("content1").style.display = "block";


  }


}

answerAsk2 = () => {
  const twoanswer = document.getElementById("answer2").value;


  if (twoanswer === "tbilisi" || twoanswer === "batumi" || twoanswer === "kutaisi") {
    document.getElementById("shedegi2").innerHTML = "tqvens mier acheuli qalaqshi gvaqvs vakansia";
    document.getElementById("content").style.display = "none"
    document.getElementById("content1").style.display = "none"
    document.getElementById("content2").style.display = "block"

  }


  else if (twoanswer === "" || twoanswer === null) {
    document.getElementById("shedegi2").innerHTML = "gtxovt dawerot tqveni sacxovrebeli qalaqsi";
    document.getElementById("shedegi2").style.color = "red"
  }

  else {
    document.getElementById("shedegi2").innerHTML = "tqvens mier daweril qalaqshi ar gvaqvs vakansia an arasworad gaqvs dawerili sacxovrebeli qalaqi"
    document.getElementById("shedegi2").style.color = "red"
  }

}



answerAsk3 = () => {
  const threanswer = document.getElementById("answer3").value;


  if (threanswer === "" || threanswer === null) {
    document.getElementById("shedegi3").innerHTML = "gtxovt dawerot tqveni samushao adgili";


  }


  else if (threanswer === "bank" || threanswer === "glovo" || threanswer === "itcompany" || threanswer == "operator") {
    document.getElementById("shedegi3").innerHTML = "tqven mushaobs" + " " + threanswer + " " + "romelic ar sheesabameba chvens sferos";

  }

  else {
    document.getElementById("shedegi3").innerHTML = threanswer + " " + "tqven mushaobt iset adgilas romelic sheesabameba chvens sferos"
    document.getElementById("content2").style.display = "none";
    document.getElementById("content3").style.display = "block";
  }

}


answerAsk4 = () => {
  const fouranswer = document.getElementById("answer4").value;


  if (fouranswer === "" || fouranswer === null) {
    document.getElementById("shedegi4").innerHTML = "gtxovt dawerot motxovnili anazgaureba";
    document.getElementById("shedegi4").style.color = "red"


  }

  else if (fouranswer < 400) {
    document.getElementById("shedegi4").innerHTML = "minimaluri anazgaureba sheadgens 400 lars"
    document.getElementById("shedegi4").style.color = "red"
  }


  else if (fouranswer < 1200) {
    document.getElementById("shedegi4").innerHTML = "tkveni motxovnili saxelfaso anazgaureba sheadgens" + " " + fouranswer + " " + "lars romlis romelic isagebi aris chvens mier gamocxadebul vakansiaze"
    document.getElementById("shedegi4").style.color = "green"

    document.getElementById("content3").style.display = "none";
    document.getElementById("content4").style.display = "block";
  }

  else {
    document.getElementById("shedegi4").innerHTML = "tkveni motxovnili saxelfaso anazgaureba sheadgens" + " " + fouranswer + " " + "lars romelic agemateba chvens mier dadgenil anazgaurebas"
    // document.getElementById("content2").style.display="none";
    // document.getElementById("content3").style.display="block";
    document.getElementById("shedegi4").style.color = "red"

  }

}



answerAsk5 = () => {
  const fiveanswer = document.getElementById("answer5").value;


  if (fiveanswer === "" || fiveanswer === null) {
    document.getElementById("shedegi5").innerHTML = "gTxovT daweroT telefonis nomeri raTa dagikavSirdeT";
    document.getElementById("shedegi5").style.color = "red"


  }


  else if (fiveanswer.length > 9 || fiveanswer.length < 9) {
    document.getElementById("shedegi5").innerHTML = "tkveni telefonis nomeri" + " " + fiveanswer + " " + "ar emtxveva saqartvelos standartul nomers gtxovt dawerot tqveni telefon is nomeri";
    document.getElementById("shedegi5").style.color = "red"
  }

  else {
    document.getElementById("shedegi5").innerHTML = "migebulia tqveni monacemebi umokles vadashi dagikavshirdebit tqvens mier archeul nomerze"
    // document.getElementById("content2").style.display="none";
    // document.getElementById("content3").style.display="block";
    document.getElementById("shedegi5").style.color = "green"


  }

}
