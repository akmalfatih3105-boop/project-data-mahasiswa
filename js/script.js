function tambahMahasiswa() {
    const nama = document.getElementById("nama").value;
    const nim = document.getElementById("nim").value;

    if (nama === "" || nim === "") {
        alert("Nama dan NIM harus diisi!");
        return;
    }

    const daftar = document.getElementById("daftarMahasiswa");

    const data = document.createElement("li");
    data.textContent = nama + " - " + nim;

    daftar.appendChild(data);

    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
}
