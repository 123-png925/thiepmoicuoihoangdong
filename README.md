<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thiệp Mời Đám Cưới</title>
<style>
body {
  font-family: "Segoe UI", Arial, sans-serif;
  background: #f7e6ee;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  margin: 0;
  padding: 20px 0;
}
.card-outer {
  width: 100%;
  max-width: 420px;
  background: #d6002f;
  position: relative;
  margin-top: 32px;
  clip-path: polygon(50% 0, 100% 4%, 100% 100%, 0 100%, 0 4%);
  box-shadow: 0 8px 32px rgba(130,38,89,0.25);
  padding: 10px;
}
.card {
  width: 100%;
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}
.cover {
  width: 100%;
  background: #fff;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease;
}
.cover.hide {
  max-height: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
}
.cover-content {
  width: 95%;
  margin: 0 auto;
  background: #fff;
  border-radius: 6px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cover-title {
  font-size: 24px;
  font-family: 'Segoe Script', cursive;
  color: #d6002f;
  margin-bottom: 12px;
  margin-top: 8px;
  font-weight: bold;
  text-align: center;
}
.cover .date {
  font-size: 16px;
  color: #d6002f;
  margin-bottom: 8px;
  text-align: center;
  font-weight: bold;
}
.cover .names {
  font-size: 18px;
  color: #d6002f;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
}
.cover .invite-to {
  font-size: 15px;
  color: #b21c5c;
  margin-bottom: 15px;
  text-align: center;
}
.btn-open {
  margin: 20px 0;
  padding: 12px 30px;
  background: #b21c5c;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(178,28,92,0.3);
  transition: all 0.3s;
}
.btn-open:hover {
  background: #d6002f;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(178,28,92,0.4);
}
.cover-photo {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 0 4px 12px rgba(130,38,89,0.15);
  object-fit: cover;
}
.inside {
  width: 100%;
  background: #fff;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: all 0.8s ease;
}
.inside.show {
  max-height: 5000px;
  opacity: 1;
  padding: 20px 10px;
}
.inside-content {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  text-align: center;
}
.inside h2 {
  font-size: 20px;
  color: #d6002f;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
}
.inside .highlight {
  font-weight: bold;
  color: #b21c5c;
  font-size: 18px;
  margin: 12px 0;
  text-align: center;
}
.inside p, .inside div {
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
  color: #333;
}
.divider {
  width: 60%;
  margin: 20px auto;
  border: 0;
  border-top: 2px solid #d6002f;
}
.qr-image {
  width: 200px;
  height: 200px;
  border-radius: 12px;
  border: 2px solid #d6002f;
  box-shadow: 0 4px 12px rgba(130,38,89,0.2);
  margin: 15px auto 10px auto;
  display: block;
}
.bank-info {
  margin-top: 10px;
  padding: 15px;
  background: #fff6fa;
  border-radius: 8px;
  border: 1px solid #f3c6d2;
  font-size: 14px;
  line-height: 1.8;
}
@media (max-width: 600px) {
  .card-outer {
    max-width: 95vw;
    margin-top: 10px;
  }
  .cover-title {
    font-size: 20px;
  }
  .cover .names {
    font-size: 16px;
  }
  .btn-open {
    padding: 10px 20px;
    font-size: 14px;
  }
  .inside h2 {
    font-size: 18px;
  }
  .inside .highlight {
    font-size: 16px;
  }
  .qr-image {
    width: 180px;
    height: 180px;
  }
}
</style>
</head>
<body>
<div class="card-outer">
  <div class="card" id="weddingCard">
    <div class="cover" id="coverSection">
      <div class="cover-content">
        <div class="cover-title">💕 Thiệp Mời Cưới 💕</div>
        <div class="date">28 - 04 - 2024</div>
        <div class="names">VĂN ĐÔNG & HÀ THU</div>
        <div class="invite-to">Trân trọng kính mời:<br>...................................</div>
        <button class="btn-open" onclick="openCard()">💌 Bấm vào đây để mở thiệp</button>
        <!-- CÁCH 1: Nếu ảnh cùng thư mục với file HTML, đặt tên ảnh là 'couple.jpg' -->
        <img src="couple.jpg" alt="Cô dâu chú rể" class="cover-photo" onerror="this.src='https://via.placeholder.com/300x400/d6002f/ffffff?text=Co+Dau+Chu+Re'">
        <!-- CÁCH 2: Hoặc upload ảnh lên imgur.com rồi thay link vào đây -->
        <!-- <img src="https://i.imgur.com/YOUR_IMAGE_ID.jpg" alt="Cô dâu chú rể" class="cover-photo"> -->
      </div>
    </div>
    <div class="inside" id="insideSection">
      <div class="inside-content">
        <h2>🌸 Lễ Thành Hôn 🌸</h2>
        <div style="margin-bottom:12px;">
          Ông bà <b>bùi văn đích</b> & <b>bạch thị hoà</b><br>
          Bà con trai <b>bùi thị nghĩa</b> & <b>bùi đức khiên</b>
        </div>
        <div>Trân trọng báo tin lễ thành hôn của con chúng tôi:</div>
        <div class="highlight">VĂN ĐÔNG & HÀ THU</div>
        <div>Hôn lễ được cử hành tại tư gia<br><b>09h00, ngày 25/10/2024</b></div>
        <hr class="divider">
        <h2>🎉 Tiệc Cưới 🎉</h2>
        <div>Trân trọng kính mời đến dự buổi tiệc chung vui cùng gia đình chúng tôi tại:</div>
        <div class="highlight">Hội Trường Esto<br>132 Hùng Vương, Tân Hưng, Quận 7, HCM</div>
        <div>Vào lúc: <b>09h00, Thứ Sáu 25/10/2024</b></div>
        <div>Đón khách: 11h00 • Khai tiệc: 12h00</div>
        <hr class="divider">
        <h2>🎁 Chuyển khoản mừng cưới 🎁</h2>
        <div style="margin-bottom:10px; font-size:14px;">Quét mã QR bên dưới để chuyển khoản nhanh:</div>
        <img src="https://img.vietqr.io/image/VCB-1048034865-compact.png" alt="QR chuyển khoản" class="qr-image">
        <div class="bank-info">
          <b>Ngân hàng:</b> Vietcombank<br>
          <b>Số tài khoản:</b> 1048034865<br>
          <b>Chủ tài khoản:</b> BUI VAN DONG
        </div>
      </div>
    </div>
  </div>
</div>
<script>
function openCard() {
  const coverSection = document.getElementById("coverSection");
  const insideSection = document.getElementById("insideSection");
  
  coverSection.classList.add("hide");
  insideSection.classList.add("show");
}
</script>
</body>
</html>
