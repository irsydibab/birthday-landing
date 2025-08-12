// Efek mengetik kata romantis panjang
const text = `Selamat ulang tahun cintaku ❤️

Semoga di usiamu yang sekarang ini, Allah selalu melimpahkan rahmat dan kasih sayang-Nya kepadamu.
Semoga panjang umur, sehat selalu, dimudahkan rezekinya, dan semua cita-citamu dapat tercapai.
Aku berdoa agar kita selalu bersama, saling mendukung, dan saling mencintai sampai akhir hayat.
Terima kasih sudah menjadi bagian terindah dalam hidupku. Aku mencintaimu hari ini, besok, dan selamanya. 💕`;

let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 40);
  }
}
window.onload = typeWriter;

function showMessage() {
  const messages = [
    "Semoga kamu selalu bahagia ❤️",
    "Kamu adalah anugerah terindah 😘",
    "Selamat ulang tahun sayangku 💕",
    "Aku akan selalu bersamamu selamanya 💖",
  ];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  Swal.fire({
    title: "💌 Pesan Cinta 💌",
    text: randomMessage,
    icon: "info",
    confirmButtonText: "❤️",
    width: "280px",
    padding: "1em",
    customClass: {
      popup: "swal-custom",
      title: "swal-title",
      confirmButton: "swal-button",
    },
  });
}
