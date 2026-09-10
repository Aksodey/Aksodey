<div align="center" style="background: #121b22; padding: 20px; border-radius: 10px; color: white;">

### 🎵 بوت طلبات الأغاني عبر الواتساب

<p style="font-size: 14px; color: #8696a0;">اكتب اسم الأغنية التي تريدها واضغط إرسال لتصلني عبر الواتساب فوراً!</p>

<table style="width: 100%; max-width: 400px; background: #202c33; border-radius: 8px; padding: 15px; text-align: right;">
  <tr>
    <td>
      <input type="text" id="songName" placeholder="اكتب اسم الأغنية هنا..." style="width: 100%; padding: 10px; border-radius: 5px; border: none; outline: none; background: #2a3942; color: white; font-size: 14px; box-sizing: border-box;" />
    </td>
  </tr>
  <tr>
    <td style="padding-top: 10px; text-align: center;">
      <a id="whatsappBtn" href="https://wa.me/201277860563?text=مرحباً،%20أريد%20طلب%20أغنية:" target="_blank" style="display: inline-block; background: #00a884; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; width: 100%; box-sizing: border-box;">
        🎧 اطلب الأغنية الآن
      </a>
    </td>
  </tr>
</table>

</div>

<script>
  // تحديث رابط الواتساب تلقائياً حسب الأغنية التي يكتبها المستخدم
  const input = document.getElementById('songName');
  const btn = document.getElementById('whatsappBtn');
  
  input.addEventListener('input', function() {
    const song = encodeURIComponent(input.value);
    if(input.value.trim() !== "") {
      btn.href = "https://wa.me/201277860563?text=" + encodeURIComponent("مرحباً، أريد طلب الأغنية التالية: " + input.value);
    } else {
      btn.href = "https://wa.me/201277860563?text=" + encodeURIComponent("مرحباً، أريد طلب أغنية.");
    }
  });
</script>
</a>

</div>
