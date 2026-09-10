<div align="center" style="background: #111b21; padding: 25px; border-radius: 12px; color: white;">

### 🤖 لوحة تحكم بوت الأوامر (خدمات الواتساب)

<p style="font-size: 14px; color: #8696a0;">اختر الأمر المناسب أو اطلب أغنيتك وسيتواصل معك البوت عبر الواتساب فوراً!</p>

<table style="width: 100%; max-width: 420px; background: #202c33; border-radius: 10px; padding: 15px; text-align: right; border-spacing: 10px;">
  <tr>
    <td>
      <a href="https://wa.me/201277860563?text=⚡%20أمر:%20طلب%20تشغيل%20أغنية" target="_blank" style="display: block; background: #005c4b; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;">
        🎵 طلب وتشغيل أغنية
      </a>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 10px;">
      <input type="text" id="customCommand" placeholder="اكتب اسم الأغنية أو الأمر هنا..." style="width: 100%; padding: 12px; border-radius: 8px; border: none; outline: none; background: #2a3942; color: white; font-size: 14px; box-sizing: border-box;" />
    </td>
  </tr>
  <tr>
    <td>
      <a id="sendCustomBtn" href="https://wa.me/201277860563?text=⚡%20أمر:%20مرحباً" target="_blank" style="display: block; background: #00a884; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;">
        🚀 إرسال الطلب إلى الواتساب
      </a>
    </td>
  </tr>
</table>

</div>

<script>
  const customInput = document.getElementById('customCommand');
  const sendBtn = document.getElementById('sendCustomBtn');
  
  customInput.addEventListener('input', function() {
    if(customInput.value.trim() !== "") {
      sendBtn.href = "https://wa.me/201277860563?text=" + encodeURIComponent("🎵 طلب أغنية من الموقع: " + customInput.value);
    } else {
      sendBtn.href = "https://wa.me/201277860563?text=" + encodeURIComponent("⚡ أمر: مرحباً");
    }
  });
</script>
        👨‍💻 2. معلومات عن المطور
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://wa.me/201277860563?text=⚡%20أمر:%20تواصل%20مع%20الدعم" target="_blank" style="display: block; background: #005c4b; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;">
        💬 3. تواصل مباشر مع الدعم
      </a>
    </td>
  </tr>
  <tr>
    <td style="padding-top: 10px;">
      <input type="text" id="customCommand" placeholder="أو اكتب أمرًا مخصصاً هنا..." style="width: 100%; padding: 12px; border-radius: 8px; border: none; outline: none; background: #2a3942; color: white; font-size: 14px; box-sizing: border-box;" />
    </td>
  </tr>
  <tr>
    <td>
      <a id="sendCustomBtn" href="https://wa.me/201277860563?text=⚡%20أمر:%20مرحباً" target="_blank" style="display: block; background: #00a884; color: white; padding: 12px; border-radius: 8px; text-decoration: none; font-weight: bold; text-align: center;">
        🚀 تنفيذ الأمر عبر الواتساب
      </a>
    </td>
  </tr>
</table>

</div>

<script>
  const customInput = document.getElementById('customCommand');
  const sendBtn = document.getElementById('sendCustomBtn');
  
  customInput.addEventListener('input', function() {
    if(customInput.value.trim() !== "") {
      sendBtn.href = "https://wa.me/201277860563?text=" + encodeURIComponent("⚡ أمر مخصص من الموقع: " + customInput.value);
    } else {
      sendBtn.href = "https://wa.me/201277860563?text=" + encodeURIComponent("⚡ أمر: مرحباً");
    }
  });
</script>
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
