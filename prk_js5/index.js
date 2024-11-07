// ada sebuah antrian pembeli yaitu ray, fiki, fadhilla, farah
// datang 1 pembeli yaitu nabila
// datang 2 pembeli yaitu maza dan elsi
// antrian terakhir tidak jadi antri dan pulang ke rumah
// antrian pertama sudah mendapatkan belanjaannya
// antrian kedua juga sudah mendapatkan belanjaannya
// datang pembeli baru yang nyerobot antrian yaitu tomi
// maka hasil akhirnya yaitu ...

// Inisialisasi antrian dengan pembeli awal
let antrian = ['ray', 'fiki', 'fadhilla', 'farah'];

// masukkan nabila ke dalam antrian
antrian.push('nabila');

// masukkan maza dan elsi ke dalam antrian
antrian.push('maza', 'elsi');

// Hapus pembeli terakhir dari antrian
antrian.pop();

// Hapus dua pembeli pertama yang sudah mendapatkan belanjaan
antrian.shift(); // Hapus ray
antrian.shift(); // Hapus fiki

// masukkan tomi ke awal antrian
antrian.unshift('tomi');
console.log(antrian);
