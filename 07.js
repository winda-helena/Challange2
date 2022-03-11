//7
const dataPenjualanPakALdi = [
    {
        namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan : 760000,
        kategori : "Sepatu Sport",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan : 960000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 37,
    },
    {
        namaProduct : 'Sepatu Warrior Tristan Browm Higj - Original',
        hargaSatuan : 360000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
    {
        namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy - [BINB] Original',
        hargaSatuan : 120000,
        kategori : "Sepatu Sneaker",
        totalTerjual : 90,
    },
];

function hitungTotalPenjualan(dataPenjualan) {
    var jumlahTerjual = 0
    dataPenjualan.map((value , index) => {
        jumlahTerjual += value.hargaSatuan
    });
    return jumlahTerjual
}

console.log(hitungTotalPenjualan(dataPenjualanPakALdi));

//end 7