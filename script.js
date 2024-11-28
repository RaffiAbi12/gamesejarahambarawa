const questions = [
    { q: "Di manakah terjadinya Pertempuran Ambarawa?", options: ["Bandung", "Semarang", "Ambarawa"], answer: 2 },
    { q: "Pada tahun berapakah Pertempuran Ambarawa terjadi?", options: ["1947", "1946", "1945"], answer: 2 },
    { q: "Pertempuran Ambarawa melibatkan tentara Indonesia melawan tentara...", options: ["Jepang", "Belanda", "Sekutu"], answer: 2 },
    { q: "Siapakah panglima yang memimpin pasukan Indonesia dalam Pertempuran Ambarawa?", options: ["Jenderal Sudirman", "Bung Tomo", "Soeharto"], answer: 0 },
    { q: "Pertempuran Ambarawa dimulai setelah tentara Sekutu berusaha membebaskan...", options: ["Tahanan perang Belanda", "Kota Ambarawa", "Rakyat Indonesia"], answer: 0 },
    { q: "Taktik apa yang digunakan Jenderal Sudirman dalam Pertempuran Ambarawa?", options: ["Serangan langsung", "Gerilya", "Supit Urang"], answer: 2 },
    { q: "Tanggal berapakah kemenangan Indonesia dalam Pertempuran Ambarawa dirayakan?", options: ["15 Desember", "10 November", "17 Agustus"], answer: 0 },
    { q: "Apa nama monumen yang didirikan untuk mengenang Pertempuran Ambarawa?", options: ["Monumen Tugu Muda", "Monumen Palagan Ambarawa", "Monumen Sudirman"], answer: 1 },
    { q: "Pertempuran Ambarawa berlangsung selama...", options: ["3 hari", "4 hari", "5 hari"], answer: 1 },
    { q: "Siapakah presiden Indonesia saat Pertempuran Ambarawa terjadi?", options: ["Soeharto", "Soekarno", "Gus Dur"], answer: 1 },
    { q: "Apa latar belakang terjadinya Perang Ambarawa?", options: ["Perebutan wilayah antara Indonesia dan Inggris", "Kecurangan dalam perjanjian antara Indonesia dan Sekutu", "Kedatangan pasukan Sekutu yang membantu membebaskan tawanan Belanda"], answer: 3 },
    { q: "Kapan Perang Ambarawa terjadi?", options: ["Oktober 1945","November-Desember 1945","Januari 1946"], answer: 2 },
    { q: "Apa taktik yang digunakan Jenderal Soedirman dalam Perang Ambarawa?", options: ["Perang Gerilya","Taktik Supit Urang","Blokade Wilayah"], answer: 2 },
    { q: "Siapa yang memimpin pasukan Sekutu dalam Perang Ambarawa?", options: ["Brigadir Bethell", "Jenderal Mallaby", "Lord Mountbatten"], answer: 1 },
    { q: "Di mana markas besar pasukan Indonesia saat Perang Ambarawa?", options: ["Magelang", "Banyubiru", "Ungaran"], answer: 2 }
];

let currentQuestion = 0;
let coins = 0;
let lives = 3;

function loadQuestion() {
    if (currentQuestion >= questions.length || lives <= 0) {
        alert("Quiz selesai!");
        return;
    }
    
    const questionData = questions[currentQuestion];
    document.getElementById("question").innerText = questionData.q;
    document.querySelectorAll(".option").forEach((option, index) => {
        option.innerText = questionData.options[index];
    });
}

function selectAnswer(selectedIndex) {
    const questionData = questions[currentQuestion];
    if (selectedIndex === questionData.answer) {
        coins += 5;
        document.getElementById("coins").innerText = coins;
        alert("Benar! Kamu mendapat 5 koin.");
    } else {
        lives -= 1;
        updateHearts();
        alert("Salah! Kehilangan 1 hati.");
    }
    currentQuestion++;
    loadQuestion();
}

function updateHearts() {
    const heartsElement = document.getElementById("hearts");
    heartsElement.innerText = "❤️".repeat(lives);
}

loadQuestion();
