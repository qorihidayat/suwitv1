// alert("ini alert");
// confirm("ini confirm");
// prompt("ini prompt");
alert("hallo selamat datang di suwit jawa");



//program bot
var bot = Math.round(Math.random() * 11 + 1);
if (bot >= 1 && bot <= 3) {
  bot = "gajah";
}else if (bot >= 4 && bot <= 7) {
 bot = "semut";
}else {
  bot = "orang";
}

//program human
var human = prompt("Masukan : Gajah, Semut, Orang");
if (human == bot) {
  hasil = 'seri';
}else if (human == "gajah") {
  if (bot == "semut") {
    hasil = 'kalah';
  }else {
    hasil = 'menang';
  }
}else if (human == "semut") {
  if (bot == "gajah") {
    hasil = 'menang';
  }else {
    hasil = 'kalah';
  }
}else if (human == "orang") {
  if (bot == "gajah") {
    hasil = 'kalah';
  }else {
  hasil = 'menang';
  }
}else {
  alert("Input yang kamu masukan Salah!!");
}

alert("Kamu memiilih : " + human + "dan komputer memilih " + bot + "\n Hasilnya kamu : " + hasil);

var tryy = confirm("Coba Lagi??");
if (tryy == true) {
  window.location.reload();
}
