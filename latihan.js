//latihan 1
var angka1 = 5;
var angka2 = 8;

var penjumlahan = angka1+angka2;
var pengurangan = angka1-angka2;
var perkalian = angka1*angka2;
var pembagian = angka1/angka2;

console.log(penjumlahan);
console.log(pengurangan);
console.log(perkalian);
console.log(pembagian);

//latihan 2
var nama = "John";
var umur = 25;

var informasi = "Nama" + nama + "Umur" + umur;

console.log(informasi);

//latihan 3
var nilai = 75;
if (nilai >= 70) {
    console.log("Lulus");
} else {
    console.log("Tidak Lulus");
}

//latihan 4
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }  

//latihan 5
function hitungLuasPersegiPanjang() {
    var panjang = 5;
    var lebar = 10;
    var hasil = panjang*lebar;

    console.log(hasil);
}
hitungLuasPersegiPanjang();

//latihan 6
var buah = ["Apel", "mangga", "jeruk"];

for (var i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

//latihan 7
var mahasiswa = {
    nama: "John Doe",
    jurusan: "Informatika",
    nilai: 80
  };
  
  console.log("Nama Mahasiswa: " + mahasiswa.nama);
  console.log("Jurusan: " + mahasiswa.jurusan);
  console.log("Nilai Mahasiswa: " + mahasiswa.nilai);
  
