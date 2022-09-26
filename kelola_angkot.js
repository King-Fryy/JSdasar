// Membuat Object Angkot
function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;
      //Keyword this adalah object pemilik suatu baris code yang sedang dieksekusi.
        
    // Method penumpang maik
    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    //Method Penumpang turun
    this.penumpangTurun = function (namaPenumpang, bayar){
        if (this.penumpang.length == 0) {
            alert("angkot masih kosong");
            return false;
        }
        //angkot udah ada isinya
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }       
        }
    }
}

// Proses intstasiasi
var angkot1 = new Angkot("Yanto", ["cibeunying kaler", "cibeunying kidul"], [], 0);
var angkot2 = new Angkot("Yeni", ["megar sari", "ujung berung"], [], 0);