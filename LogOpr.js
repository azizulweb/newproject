//  Jika ujian bernilai 90 atau lebih
// Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
function ujianCheker(ujian){
  let result;

  if (ujian >= 90) {
  result = 'Selamat Anda Mendapatkan Nilai A';
} else if (ujian >= 80 && ujian <= 90) {
  result = 'Selamat Anda Mendapatkan Nilai B';
} else if (ujian >= 70 && ujian <= 80) {
  result = 'Selamat Anda Mendapatkan Nilai C';
}  else if (ujian >= 60 && ujian <= 70) {
  result = 'Selamat Anda Mendapatkan Nilai D'; 
} else if (ujian  <= 60 ) {
  result = 'Selamat Anda Mendapatkan Nilai E'; 
}

return result;
}
console.log(ujianCheker(90));
console.log(ujianCheker(80));
console.log(ujianCheker(70));
console.log(ujianCheker(60));
