const express = require("express") // impor modul express
const app = express() // inisialisasi express
const port = 3000 // port

app.set('view engine', 'ejs'); 

// route /
app.get("/", (req, res) => {
    // res.send("Hello");
    // res.sendFile(__dirname + "/index.html");

    const berita = [
        {
            judul: "Berita 1",
            isi: "Isi berita 1"
        },
        {
            judul: "Berita 2",
            isi: "Isi berita 2"
        },
    ];
    res.render('index', {title: 'Halaman Home', berita});
});

// route /about
app.get("/about", (req, res) => {
    // res.send("About Us");
    // res.sendFile(__dirname + "/about.html");
    res.render('about');
});

// route /contact
app.get("/contact", (req, res) => {
    // res.send("Contact Us");
    // res.sendFile(__dirname + "/contact.html");
    res.render('contact');
});

// route /mahasiswa
app.get("/mahasiswa", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data mahasiswa",
        "data" : [
            {npm: 2226240001, nama: "ahmad"},
            {npm: 2226240002, nama: "ahmad 2"},
            {npm: 2226240003, nama: "ahmad 3"}
        ]
    })
});

// route /dosen
app.get("/dosen", (req, res) => {
    res.json({
        "status" : "success",
        "message" : "Data dosen",
        "data" : [
            {
                prodi: "Sistem Informasi", 
                dosen: ["Iis", "Faris", "Dafid"]
            },
            {
                prodi: "Informatika", 
                dosen: ["Derry", "Siska", "Yohannes"]
            },
        ]
    })
});

app.get("/prodi", (req, res) => {
   const prodi = [
        {
            nama: "Sistem Informasi",
            fakultas: "FIKR",
            singkatan: "SI"
        },
        {
            nama: "Informatika",
            fakultas: "FIKR",
            singkatan: "IF"
        }
    ];
    res.render('prodi', {title: 'Halaman Program Studi', prodi});
});

// handle route yang tidak terdaftar
app.use("/", (req, res) =>{
    res.send("<h1>404 Not Found</h1>");
});

// jalankan server 
app.listen(port, () => {
    console.log(`Server dapat diakses di http://localhost:${port}`);
});