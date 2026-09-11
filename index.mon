const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    console.log('امسح رمز الاستجابة السريعة التالي لتسجيل الدخول برقمك:');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('تم ربط البوت برقم الواتساب بنجاح وهو جاهز الآن! 🚀');
});

client.on('message', async (message) => {
    const text = message.body.trim();
    const targetPhone = "201277860563"; // رقم الهاتف الأساسي المراد ربطه

    // إذا طلب المستخدم كود الربط أو الباسورد
    if (text === '!ربط' || text === '!password' || text === 'باسورد') {
        await message.reply(`🔐 كود الربط الخاص بالرقم هو: *${targetPhone}*`);
        console.log(`تم إرسال كود الربط المطابق للرقم: ${targetPhone}`);
    }
});

client.initialize();
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
