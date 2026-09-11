<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>نظام فودافون - Vodafone System</title>
<style>
*{box-sizing:border-box;font-family:Tahoma,Segoe UI,Arial,sans-serif;-webkit-tap-highlight-color:transparent}
body{margin:0;background:#111;color:#1f2937;display:flex;justify-content:center;align-items:center;min-height:100vh}

/* App View Container */
.app-container{width:100%;max-width:420px;height:100vh;max-height:850px;background:#f8f9fa;border-radius:20px;box-shadow:0 0 25px rgba(230,0,0,0.4);overflow:hidden;display:flex;flex-direction:column;position:relative}

/* Vodafone Header */
.app-header{background:linear-gradient(135deg, #e60000, #990000);color:#fff;padding:20px 16px;display:flex;justify-content:space-between;align-items:center;box-shadow:0 3px 10px rgba(0,0,0,0.2)}
.app-title{font-size:18px;font-weight:bold;display:flex;align-items:center;gap:8px}
.logo-circle{background:#fff;color:#e60000;border-radius:50%;width:26px;height:26px;display:inline-flex;justify-content:center;align-items:center;font-size:16px;font-weight:900}
.dev-badge{font-size:11px;background:rgba(255,255,255,0.2);padding:4px 10px;border-radius:12px;color:#fff}

/* Main Content Area */
.app-content{flex:1;overflow-y:auto;padding:16px;padding-bottom:75px}
.app-content::-webkit-scrollbar{width:0px}

/* UI Cards */
.card{background:#fff;border-radius:16px;padding:16px;margin-bottom:14px;box-shadow:0 3px 10px rgba(0,0,0,0.05);border:1px solid #f1f3f5}
.card-title{color:#e60000;font-size:15px;font-weight:bold;margin-top:0;margin-bottom:12px;display:flex;align-items:center;gap:6px}
input{width:100%;padding:14px;border:1.5px solid #dee2e6;border-radius:12px;font-size:16px;direction:ltr;text-align:left;outline:none;transition:all 0.2s}
input:focus{border-color:#e60000;box-shadow:0 0 0 3px rgba(230,0,0,0.1)}
button{width:100%;margin-top:10px;padding:14px;border:0;border-radius:12px;background:#e60000;color:#fff;font-size:16px;font-weight:bold;cursor:pointer;transition:background 0.2s}
button:active{background:#b30000;transform:scale(0.98)}

.hidden{display:none}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.info-box{background:#fff5f5;border:1px solid #ffe3e3;border-radius:12px;padding:12px}
.info-label{font-size:11px;color:#6c757d;margin-bottom:4px}
.info-value{font-weight:bold;font-size:14px;color:#212529}

/* Tables */
.table-wrap{overflow-x:auto;border-radius:10px;border:1px solid #edf2f7;margin-top:8px}
table{width:100%;border-collapse:collapse;font-size:12px}
th,td{padding:10px;text-align:right;border-bottom:1px solid #edf2f7}
th{background:#f8f9fa;color:#495057}

/* Footer Navigation */
.bottom-nav{position:absolute;bottom:0;width:100%;background:#fff;display:flex;justify-content:space-around;padding:10px 0;border-top:1px solid #e9ecef}
.nav-item{display:flex;flex-direction:column;align-items:center;font-size:10px;color:#868e96;text-decoration:none;cursor:pointer}
.nav-item.active{color:#e60000;font-weight:bold}
.nav-icon{font-size:18px;margin-bottom:2px}

.support-link{display:block;text-align:center;margin-top:10px;background:#0088cc;color:#fff;text-decoration:none;padding:10px;border-radius:10px;font-size:12px;font-weight:bold}
</style>
</head>
<body>

<div class="app-container">
  <header class="app-header">
    <div class="app-title"><span class="logo-circle">V</span> سستم فودافون</div>
    <div class="dev-badge">تطوير: اكسوديا</div>
  </header>

  <main class="app-content">
    <div class="card">
      <div class="card-title">🔍 استعلام برقم الخط (010)</div>
      <input id="phone" maxlength="11" inputmode="numeric" placeholder="010XXXXXXXX">
      <button onclick="search()">فحص النظام</button>
      <a href="https://t.me/Aksodey_1" target="_blank" class="support-link">💬 التواصل مع الدعم الفني (اكسوديا)</a>
    </div>

    <div id="result" class="hidden"></div>
  </main>

  <nav class="bottom-nav">
    <div class="nav-item active"><div class="nav-icon">📱</div><span>السستم</span></div>
    <div class="nav-item"><div class="nav-icon">💸</div><span>كاش</span></div>
    <div class="nav-item"><div class="nav-icon">⚡</div><span>العروض</span></div>
    <div class="nav-item"><div class="nav-icon">⚙️</div><span>الإعدادات</span></div>
  </nav>
</div>

<script>
const firstNames=["أحمد","محمد","محمود","علي","حسن","إبراهيم","يوسف","عمر","سليم","كريم","سارة","مريم","نور","ملك","آية","حمزة","مصطفى","طارق","خالد","فاطمة"];
const lastNames=["محمد السيد","علي حسن","محمود إبراهيم","أحمد سالم","حسن عبدالله","إبراهيم محمود","سعيد محمد","عادل حسن","حسين مصطفى","عبدالرحمن علي"];
const cities=["القاهرة","الجيزة","الإسكندرية","المنصورة","طنطا","بني سويف","أسيوط","الفيوم","الشرقية","المنيا"];
const planTypes=["Vodafone RED","فليكس 45","فليكس 70","فليكس 100","كارت الكروت","Vodafone Enterprise"];

function seeded(seed){
  let n=0;
  for(let i=0;i<seed.length;i++) n=(n*31+seed.charCodeAt(i))>>>0;
  return ()=>{n=(n*1664525+1013904223)>>>0;return n/4294967296};
}

function generatePhone010(r){
  const seq = String(Math.floor(r()*89998999) + 10000000).padStart(8,"0");
  return "010" + seq;
}

function fakeVodafoneData(phone){
  const r=seeded(phone);
  const pick=a=>a[Math.floor(r()*a.length)];
  const ownerName=pick(firstNames)+" "+pick(lastNames);
  const count=1+Math.floor(r()*3);
  const linkedNumbers=[{name:ownerName,phone:phone,rel:"الخط الرئيسي",status:"نشط"}];
  
  for(let i=1;i<count;i++){
    linkedNumbers.push({
      name:pick(firstNames)+" "+pick(lastNames),
      phone:generatePhone010(r),
      rel:"خط عائلة",
      status:r()>.1?"نشط":"معطل"
    });
  }
  return {
    accountNo:"VF-"+String(Math.floor(r()*900000+100000)),
    ownerName, city:pick(cities), plan:pick(planTypes),
    status:"خط فودافون نشط", linkedNumbers,
    flexes:Math.floor(r()*2000+500)+" فليكس", cashBalance:Math.floor(r()*1500+50)+" ج.م",
    internet:Math.floor(r()*20+2)+" جيجابايت", points:Math.floor(r()*500+20)+" نقطة"
  };
}

const demoDB={
 "01012345678":{ownerName:"أحمد محمد السيد",city:"القاهرة",plan:"Vodafone RED",accountNo:"VF-847201",
 linkedNumbers:[
  {name:"أحمد محمد السيد",phone:"01012345678",rel:"الخط الرئيسي",status:"نشط"},
  {name:"فاطمة محمود الشريف",phone:"01020223456",rel:"خط تابع",status:"نشط"}],
 flexes:"4500 فليكس",cashBalance:"350 ج.م",internet:"25 GB",points:"120 نقطة",status:"خط فودافون نشط"}
};

function search(){
 const phone=document.getElementById("phone").value.trim();
 const box=document.getElementById("result");
 if(!/^010\d{8}$/.test(phone)){alert("برجاء إدخال رقم هاتف صحيح يبدأ بـ 010 (11 رقم).");return}
 const f=demoDB[phone]||fakeVodafoneData(phone);
 box.classList.remove("hidden");
 box.innerHTML=`
 <div class="card">
   <div class="card-title">👤 بيانات صاحب الخط</div>
   <div class="grid">
    <div class="info-box"><div class="info-label">رقم الحساب</div><div class="info-value">${f.accountNo}</div></div>
    <div class="info-box"><div class="info-label">الاسم</div><div class="info-value">${f.ownerName}</div></div>
    <div class="info-box"><div class="info-label">النظام</div><div class="info-value">${f.plan}</div></div>
    <div class="info-box"><div class="info-label">الفرع / المحافظة</div><div class="info-value">${f.city}</div></div>
   </div>
 </div>

 <div class="card">
   <div class="card-title">📊 الرصيد والباقات</div>
   <div class="grid">
    <div class="info-box"><div class="info-label">الفليكسات</div><div class="info-value" style="color:#e60000">${f.flexes}</div></div>
    <div class="info-box"><div class="info-label">فودافون كاش</div><div class="info-value" style="color:#2b8a3e">${f.cashBalance}</div></div>
    <div class="info-box"><div class="info-label">الإنترنت</div><div class="info-value">${f.internet}</div></div>
    <div class="info-box"><div class="info-label">نقاط شكراً</div><div class="info-value">${f.points}</div></div>
   </div>
 </div>

 <div class="card">
   <div class="card-title">🔗 الأرقام المرتبطة بالبطاقة (${f.linkedNumbers.length})</div>
   <div class="table-wrap">
     <table>
       <thead><tr><th>الاسم</th><th>الرقم</th><th>النوع</th></tr></thead>
       <tbody>${f.linkedNumbers.map(m=>`<tr><td><b>${m.name}</b></td><td dir="ltr">${m.phone}</td><td>${m.rel}</td></tr>`).join("")}</tbody>
     </table>
   </div>
 </div>`;
 box.scrollIntoView({behavior:"smooth"});
}
document.getElementById("phone").addEventListener("keydown",e=>{if(e.key==="Enter")search()});
</script>
</body>
</html>
