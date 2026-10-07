/* ============================= ICONS ============================= */
const ICONS = {
  drop: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2C12 2 5 11 5 15.5C5 19.6 8.1 23 12 23C15.9 23 19 19.6 19 15.5C19 11 12 2 12 2Z"/></svg>`,
  pin: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 21s7-7.4 7-12a7 7 0 1 0-14 0c0 4.6 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  clock: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`,
  sparkle: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></svg>`,
  bell: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>`,
  check: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 6 9 17l-5-5"/></svg>`,
  x: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  hospital: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M12 8v6M9 11h6"/><path d="M9 21v-3h6v3"/></svg>`,
  users: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="9" cy="8" r="3.2"/><path d="M2.5 20c0-3.6 2.9-6.2 6.5-6.2S15.5 16.4 15.5 20"/><circle cx="17.5" cy="8.5" r="2.5"/><path d="M15.6 13.9c2.9.3 5.4 2.6 5.4 6.1"/></svg>`,
  chart: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>`,
  nav: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m3 11 18-8-8 18-2-8-8-2Z"/></svg>`,
  phone: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.4 21 3 14.6 3 6a2 2 0 0 1 2-2Z"/></svg>`,
  arrow: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  shield: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3 4 6v6c0 4.8 3.4 8.6 8 9 4.6-.4 8-4.2 8-9V6l-8-3Z"/></svg>`,
  history: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5M12 7v5l4 2"/></svg>`,
  lock: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>`,
  alert: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3 2 20h20L12 3Z"/><path d="M12 10v4M12 17h.01"/></svg>`,
  target: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><circle cx="12" cy="12" r=".6" fill="currentColor"/></svg>`,
};

/* ============================= MOCK DATA ============================= */
const BLOOD_GROUPS = ["O+","O-","A+","A-","B+","B-","AB+","AB-"];

const COMPAT = { // donor group -> patient groups it can supply
  "O-":["O-","O+","A-","A+","B-","B+","AB-","AB+"],
  "O+":["O+","A+","B+","AB+"],
  "A-":["A-","A+","AB-","AB+"],
  "A+":["A+","AB+"],
  "B-":["B-","B+","AB-","AB+"],
  "B+":["B+","AB+"],
  "AB-":["AB-","AB+"],
  "AB+":["AB+"],
};

let donors = [
  {id:1,name:"Rahul Sharma",blood:"O+",distance:1.2,available:true,lastDonation:"2026-03-10",phone:"98765 43210",responseRate:0.92,age:28,area:"Banjara Hills"},
  {id:2,name:"Ananya Rao",blood:"O+",distance:2.8,available:true,lastDonation:"2026-01-22",phone:"91234 56789",responseRate:0.85,age:31,area:"Jubilee Hills"},
  {id:3,name:"Sneha Reddy",blood:"O+",distance:4.5,available:true,lastDonation:"2025-11-02",phone:"99887 66554",responseRate:0.78,age:26,area:"Kondapur"},
  {id:4,name:"Arjun Kumar",blood:"A+",distance:2.1,available:true,lastDonation:"2026-02-14",phone:"90909 12345",responseRate:0.88,age:34,area:"Madhapur"},
  {id:5,name:"Rohan Das",blood:"O+",distance:5.4,available:false,lastDonation:"2025-08-19",phone:"93456 78901",responseRate:0.60,age:29,area:"Gachibowli"},
  {id:6,name:"Priya Nair",blood:"O+",distance:3.6,available:true,lastDonation:"2025-12-05",phone:"97654 32109",responseRate:0.95,age:24,area:"Kukatpally"},
  {id:7,name:"Vikram Singh",blood:"B+",distance:1.8,available:true,lastDonation:"2026-01-30",phone:"98123 45670",responseRate:0.70,age:37,area:"Begumpet"},
  {id:8,name:"Fatima Sheikh",blood:"AB+",distance:3.1,available:true,lastDonation:"2025-10-11",phone:"96543 21098",responseRate:0.81,age:30,area:"Secunderabad"},
];

const hospitals = [
  {id:1,name:"Apollo Hospital",address:"Road No. 72, Jubilee Hills, Hyderabad",distance:0,phone:"040-2360 7777",bloodBank:true},
  {id:2,name:"Yashoda Hospitals",address:"Rajbhavan Road, Somajiguda, Hyderabad",distance:3.4,phone:"040-4567 4567",bloodBank:true},
  {id:3,name:"KIMS Hospital",address:"Kondapur Main Road, Hyderabad",distance:5.1,phone:"040-4488 5000",bloodBank:false},
  {id:4,name:"Care Hospitals",address:"Banjara Hills, Hyderabad",distance:1.9,phone:"040-3041 8888",bloodBank:true},
];

const bloodBanks = [
  {id:1,name:"Indian Red Cross Blood Bank",address:"Basheerbagh, Hyderabad",distance:2.9,phone:"040-2323 1652",groups:["O+","A+","B+","AB+","O-"]},
  {id:2,name:"Lions Blood Bank",address:"Punjagutta, Hyderabad",distance:4.2,phone:"040-2341 0987",groups:["O+","A+","B+"]},
  {id:3,name:"City Central Blood Bank",address:"Abids, Hyderabad",distance:5.8,phone:"040-2475 6321",groups:["O+","A-","B-","AB+"]},
];

// single active demo blood request, driving the end-to-end scenario
let activeRequest = null;

// donor-side incoming requests (preloaded demo + created dynamically)
let donorIncoming = [
  {id:101,patient:"Meera Iyer",blood:"O+",hospital:"Apollo Hospital",distance:2.1,level:"High",status:"pending",created:"Today, 9:12 AM"},
];

let donationHistory = [
  {hospital:"Apollo Hospital",blood:"O+",date:"2026-03-10",requestPatient:"Karthik N."},
  {hospital:"Yashoda Hospitals",blood:"O+",date:"2025-11-18",requestPatient:"Divya S."},
];

let currentDonorAvailable = true;

/* ============================= STATE ============================= */
let state = {
  view: "home",
  role: "guest",
  requestForm: { blood:"O+", units:1, hospital:"Apollo Hospital", level:"High", location:"", useGPS:false },
  searchStage: null, // null | 'loading' | 'done'
  searchRadiusReached: null,
  lastResults: [],
  locationDenied: false,
};

const NAV = {
  guest:   [["home","Home"],["about","About"],["login","Login"],["signup","Sign Up"]],
  patient: [["patient-dashboard","Dashboard"],["emergency-request","Emergency Request"],["nearby-hospitals","Nearby Hospitals"],["patient-profile","Profile"]],
  donor:   [["donor-dashboard","Dashboard"],["donor-requests","Emergency Requests"],["donation-history","Donation History"],["donor-profile","Profile"]],
  hospital:[["hospital-dashboard","Dashboard"],["hospital-requests","Blood Requests"],["hospital-donors","Donors"],["hospital-profile","Profile"]],
  admin:   [["admin-dashboard","Dashboard"],["admin-users","Users"],["admin-requests","Requests"],["admin-hospitals","Hospitals"],["admin-reports","Reports"]],
};

function setRole(role){
  state.role = role;
  const landing = {guest:"home",patient:"patient-dashboard",donor:"donor-dashboard",hospital:"hospital-dashboard",admin:"admin-dashboard"};
  navigate(landing[role]);
  toast(`Now viewing LifeLink as ${role === 'guest' ? 'a Guest' : capitalize(role)}.`);
}

function navigate(view){
  state.view = view;
  window.scrollTo({top:0,behavior:"smooth"});
  render();
}

function capitalize(s){return s.charAt(0).toUpperCase()+s.slice(1);}

/* ============================= TOASTS ============================= */
function toast(msg, icon){
  const wrap = document.getElementById('toastWrap');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = (icon||ICONS.check) + `<span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(()=>{ el.style.opacity='0'; el.style.transition='.3s'; setTimeout(()=>el.remove(),300); }, 3400);
}

/* ============================= MATCH SCORE ============================= */
function daysSince(dateStr){
  const d = new Date(dateStr);
  const now = new Date("2026-08-23");
  return Math.floor((now-d)/(1000*60*60*24));
}
function eligibilityScore(donor){
  const days = daysSince(donor.lastDonation);
  return Math.max(0, Math.min(1, days/90));
}
function matchScore(donor){
  const distanceScore = Math.max(0, 1 - donor.distance/6);
  const availabilityScore = donor.available ? 1 : 0;
  const eligScore = eligibilityScore(donor);
  const responseScore = donor.responseRate;
  const raw = 0.4*distanceScore + 0.3*availabilityScore + 0.2*eligScore + 0.1*responseScore;
  return Math.round(raw*100);
}
function isCompatible(donorBlood, patientBlood){
  return (COMPAT[donorBlood]||[]).includes(patientBlood);
}

/* ============================= RENDER ROOT ============================= */
function render(){
  // nav
  const navlinks = document.getElementById('navlinks');
  navlinks.innerHTML = NAV[state.role].map(([id,label])=>
    `<button class="${state.view===id?'active':''}" onclick="navigate('${id}')">${label}</button>`
  ).join('');
  document.getElementById('roleSelect').value = state.role;

  const app = document.getElementById('app');
  const renderer = VIEWS[state.view] || VIEWS['home'];
  app.innerHTML = renderer();
  afterRender();
}

function afterRender(){
  if(state.view === 'radar-demo-hook'){} // noop placeholder
  buildHomeRadar();
}

/* ============================= HOME RADAR (decorative demo) ============================= */
function buildHomeRadar(){
  const el = document.getElementById('homeRadar');
  if(!el) return;
  const radii = [26,42,58,74]; // percentages-ish of half width, purely decorative
  let html = '';
  radii.forEach((r,i)=>{
    html += `<div class="radar-ring" style="width:${r*2}%;height:${r*2}%;"></div>`;
  });
  html += `<div class="radar-sweep"></div><div class="radar-center"></div>`;
  const pins = [
    {top:"32%",left:"64%",match:true},
    {top:"58%",left:"30%",match:true},
    {top:"70%",left:"66%",match:false},
    {top:"24%",left:"40%",match:false},
  ];
  pins.forEach((p,i)=>{
    html += `<div class="radar-pin ${p.match?'match':''}" style="top:${p.top};left:${p.left};animation-delay:${0.3+i*0.25}s;"></div>`;
  });
  el.innerHTML = html;
}

/* ============================= VIEWS ============================= */
const VIEWS = {};

VIEWS['home'] = () => `
  <section class="hero">
    <div class="grid g2" style="align-items:center;gap:48px;">
      <div>
        <div class="eyebrow">${ICONS.sparkle} AI-assisted donor matching</div>
        <h1>Find Blood. Find a Donor. Save a Life.</h1>
        <p class="lead">LifeLink connects patients with nearby eligible blood donors during emergencies using intelligent matching and location-based services.</p>
        <div class="hero-ctas">
          <button class="btn btn-primary" onclick="navigate('login'); setTimeout(()=>{document.getElementById('loginRoleHint')?.scrollIntoView()},0)">${ICONS.drop} Need Blood</button>
          <button class="btn btn-ghost" onclick="navigate('signup')">${ICONS.users} Become a Donor</button>
        </div>
        <div style="margin-top:28px;display:flex;gap:22px;flex-wrap:wrap;">
          <div class="mono" style="font-size:13px;color:var(--ink-soft);">${ICONS.pin} 3–6 km search radius</div>
          <div class="mono" style="font-size:13px;color:var(--ink-soft);">${ICONS.clock} Real-time availability</div>
        </div>
      </div>
      <div class="radar-wrap" id="homeRadar"></div>
    </div>
  </section>

  <section class="section" style="padding-top:8px;">
    <div class="grid g3">
      <div class="card pad">
        <div style="width:42px;height:42px;border-radius:12px;background:var(--red-soft);display:flex;align-items:center;justify-content:center;color:var(--red);margin-bottom:14px;">${ICONS.pin}</div>
        <h3 style="margin:0 0 8px;font-size:18px;">GPS-Based Donor Matching</h3>
        <p style="color:var(--ink-soft);font-size:14.5px;line-height:1.55;margin:0;">Locates eligible donors within a 3–6&nbsp;km radius of the hospital, expanding the search automatically until a match is found.</p>
      </div>
      <div class="card pad">
        <div style="width:42px;height:42px;border-radius:12px;background:var(--teal-soft);display:flex;align-items:center;justify-content:center;color:var(--teal);margin-bottom:14px;">${ICONS.sparkle}</div>
        <h3 style="margin:0 0 8px;font-size:18px;">AI-Assisted Donor Ranking</h3>
        <p style="color:var(--ink-soft);font-size:14.5px;line-height:1.55;margin:0;">A transparent score — distance, availability, eligibility and response history — ranks already-compatible donors. It never makes medical decisions.</p>
      </div>
      <div class="card pad">
        <div style="width:42px;height:42px;border-radius:12px;background:var(--amber-soft);display:flex;align-items:center;justify-content:center;color:var(--amber);margin-bottom:14px;">${ICONS.bell}</div>
        <h3 style="margin:0 0 8px;font-size:18px;">Emergency Notifications</h3>
        <p style="color:var(--ink-soft);font-size:14.5px;line-height:1.55;margin:0;">Donors receive an in-app emergency alert instantly and can accept or decline in one tap.</p>
      </div>
    </div>
  </section>

  <section class="section" style="padding-top:0;">
    <div class="card pad" style="padding:36px;">
      <h2 style="margin:0 0 28px;font-size:24px;">How it works</h2>
      <div class="grid g4">
        ${[["01","Request Blood","Patient submits an emergency request with blood group, hospital and urgency."],
           ["02","Find Nearby Donors","LifeLink searches within 3–6 km for compatible, available donors."],
           ["03","Donor Responds","The best-ranked donor gets an alert and accepts or declines."],
           ["04","Reach Hospital","Patient sees the confirmed donor; donor gets directions to the hospital."]]
           .map(([n,t,d])=>`
          <div>
            <div class="mono" style="color:var(--red);font-weight:600;font-size:13px;margin-bottom:8px;">${n}</div>
            <h3 style="font-size:16px;margin:0 0 6px;">${t}</h3>
            <p style="font-size:13.5px;color:var(--ink-soft);line-height:1.5;margin:0;">${d}</p>
          </div>`).join('')}
      </div>
    </div>
  </section>
`;

VIEWS['about'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.shield} About LifeLink</div>
    <h2 style="font-size:32px;max-width:640px;">A prototype for faster emergency blood matching</h2>
    <div class="grid g2" style="margin-top:32px;">
      <div class="card pad">
        <h3 style="margin-top:0;">What LifeLink is</h3>
        <p style="color:var(--ink-soft);line-height:1.6;">LifeLink is a college project prototype demonstrating how location data and a transparent scoring model could help hospitals and patients reach nearby eligible donors faster during an emergency.</p>
      </div>
      <div class="card pad">
        <h3 style="margin-top:0;">What LifeLink is not</h3>
        <p style="color:var(--ink-soft);line-height:1.6;">LifeLink is not a medical device and does not make clinical decisions. It is not a replacement for hospitals, doctors, or emergency medical services. In a real emergency, contact a hospital directly.</p>
      </div>
    </div>
    <div class="card pad" style="margin-top:20px;">
      <h3 style="margin-top:0;">How the AI match score works</h3>
      <p style="color:var(--ink-soft);line-height:1.6;">Blood-group compatibility and basic donor eligibility are decided first, using fixed medical rules — the AI ranking only ever orders donors who are already compatible and eligible. The score is a weighted blend:</p>
      <div class="grid g4" style="margin-top:16px;">
        ${[["40%","Distance"],["30%","Availability"],["20%","Donation eligibility"],["10%","Response history"]].map(([p,l])=>`
        <div style="text-align:center;background:var(--surface);border-radius:12px;padding:16px;">
          <div class="mono" style="font-size:22px;font-weight:600;color:var(--red);">${p}</div>
          <div style="font-size:12.5px;color:var(--ink-soft);margin-top:4px;">${l}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>
`;

VIEWS['login'] = () => `
  <section class="section" style="max-width:420px;margin:0 auto;">
    <h2 style="text-align:center;font-size:28px;">Log in to LifeLink</h2>
    <p style="text-align:center;color:var(--ink-soft);margin-bottom:28px;">Sample-data prototype — choose a role below to explore that dashboard.</p>
    <div class="card pad">
      <div class="field"><label>Email or phone</label><input type="text" placeholder="you@example.com"></div>
      <div class="field"><label>Password</label><input type="password" placeholder="••••••••"></div>
      <div class="field" id="loginRoleHint">
        <label>Continue as</label>
        <select id="loginRole">
          <option value="patient">Patient</option>
          <option value="donor">Donor</option>
          <option value="hospital">Hospital</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button class="btn btn-primary btn-block" onclick="doLogin()">Log In</button>
      <p style="text-align:center;font-size:13px;color:var(--ink-soft);margin-top:16px;">New to LifeLink? <a href="#" onclick="navigate('signup');return false;" style="color:var(--red);font-weight:600;">Create an account</a></p>
    </div>
  </section>
`;
function doLogin(){
  const role = document.getElementById('loginRole').value;
  setRole(role);
}

VIEWS['signup'] = () => `
  <section class="section" style="max-width:520px;margin:0 auto;">
    <h2 style="text-align:center;font-size:28px;">Create your LifeLink account</h2>
    <p style="text-align:center;color:var(--ink-soft);margin-bottom:28px;">Sign up as a patient, donor, or hospital.</p>
    <div class="card pad">
      <div class="field"><label>I am signing up as</label>
        <select id="signupRole" onchange="renderSignupExtra()">
          <option value="patient">Patient</option>
          <option value="donor">Blood Donor</option>
          <option value="hospital">Hospital</option>
        </select>
      </div>
      <div class="grid g2">
        <div class="field"><label>Full name</label><input type="text" placeholder="e.g. Meera Iyer"></div>
        <div class="field"><label>Phone</label><input type="text" placeholder="98xxxxxxxx"></div>
      </div>
      <div class="field"><label>Email</label><input type="email" placeholder="you@example.com"></div>
      <div id="signupExtra"></div>
      <button class="btn btn-primary btn-block" onclick="doSignup()">Create Account</button>
    </div>
  </section>
`;
function renderSignupExtra(){
  const role = document.getElementById('signupRole').value;
  const el = document.getElementById('signupExtra');
  if(role==='donor'){
    el.innerHTML = `<div class="grid g2">
      <div class="field"><label>Blood group</label><select>${BLOOD_GROUPS.map(b=>`<option>${b}</option>`).join('')}</select></div>
      <div class="field"><label>Date of birth</label><input type="date"></div>
    </div>
    <div class="field"><label>Current location</label><input type="text" placeholder="Area, city"></div>
    <div class="field"><label>Availability</label><select><option>Available</option><option>Unavailable</option></select></div>`;
  } else if(role==='hospital'){
    el.innerHTML = `<div class="field"><label>Hospital name</label><input type="text" placeholder="e.g. Apollo Hospital"></div>
    <div class="field"><label>Address</label><input type="text" placeholder="Street, area, city"></div>`;
  } else {
    el.innerHTML = `<div class="field"><label>Location</label><input type="text" placeholder="Area, city"></div>`;
  }
}
function doSignup(){
  const role = document.getElementById('signupRole').value === 'donor' ? 'donor' : document.getElementById('signupRole').value;
  toast("Account created. Welcome to LifeLink!");
  setRole(role);
}
setTimeout(()=>{ if(document.getElementById('signupExtra')) renderSignupExtra(); },0);

/* ---------- PATIENT ---------- */
VIEWS['patient-dashboard'] = () => `
  <section class="section">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:28px;">
      <div>
        <div class="eyebrow">${ICONS.drop} Patient dashboard</div>
        <h2 style="margin:0;font-size:28px;">Welcome back, Meera</h2>
      </div>
      <button class="btn btn-primary" onclick="navigate('emergency-request')">${ICONS.alert} New Emergency Request</button>
    </div>

    <div class="grid g3" style="margin-bottom:28px;">
      <div class="stat-card"><div class="stat-num mono">${activeRequest && activeRequest.status!=='confirmed' ? 1:0}</div><div class="stat-label">Active requests</div></div>
      <div class="stat-card"><div class="stat-num mono">${activeRequest && activeRequest.status==='confirmed' ? 1:0}</div><div class="stat-label">Confirmed donors</div></div>
      <div class="stat-card"><div class="stat-num mono">O+</div><div class="stat-label">Your saved blood group</div></div>
    </div>

    <h3 style="font-size:18px;">Your active request</h3>
    ${activeRequest ? patientRequestCard() : `
      <div class="card empty-state">
        ${ICONS.drop.replace('class="icon"','class="icon" style="width:40px;height:40px;color:var(--ink-soft);"')}
        <h3>No active emergency requests</h3>
        <p>When you submit a request, its live status will appear here.</p>
        <button class="btn btn-primary" style="margin-top:14px;" onclick="navigate('emergency-request')">Create a Request</button>
      </div>`}
  </section>
`;

function patientRequestCard(){
  const r = activeRequest;
  const statusBadge = r.status==='confirmed' ? `<span class="badge badge-teal">${ICONS.check} Donor Confirmed</span>`
    : r.status==='searching' ? `<span class="badge badge-amber">Searching</span>`
    : `<span class="badge badge-red">Awaiting Response</span>`;
  return `
  <div class="card pad">
    <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;align-items:center;">
      <div>
        <div style="font-weight:700;font-size:16px;">${r.blood} · ${r.units} unit(s) needed</div>
        <div style="color:var(--ink-soft);font-size:13.5px;margin-top:4px;">${ICONS.hospital} ${r.hospital} · ${ICONS.clock} ${r.level} priority</div>
      </div>
      ${statusBadge}
    </div>
    ${r.status==='confirmed' ? `
      <div class="divider"></div>
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-weight:700;">${r.acceptedDonor.name}</div>
          <div style="font-size:13px;color:var(--ink-soft);">${r.acceptedDonor.distance} km away · AI Match ${matchScore(r.acceptedDonor)}%</div>
        </div>
        <button class="btn btn-teal btn-sm" onclick="navigate('nearby-donors')">${ICONS.nav} View Directions</button>
      </div>` : `
      <div class="divider"></div>
      <button class="btn btn-ghost btn-sm" onclick="navigate('nearby-donors')">View matched donors</button>
    `}
  </div>`;
}

VIEWS['emergency-request'] = () => `
  <section class="section" style="max-width:640px;margin:0 auto;">
    <div class="eyebrow">${ICONS.alert} Emergency blood request</div>
    <h2 style="margin:0 0 6px;font-size:28px;">Request blood now</h2>
    <p style="color:var(--ink-soft);margin-bottom:28px;">Fill in the details below — LifeLink will search for compatible, available donors near the hospital.</p>

    <div class="card pad">
      <div class="grid g2">
        <div class="field"><label>Patient name</label><input id="f_name" type="text" value="Meera Iyer"></div>
        <div class="field"><label>Required blood group</label>
          <select id="f_blood">${BLOOD_GROUPS.map(b=>`<option ${b==='O+'?'selected':''}>${b}</option>`).join('')}</select>
        </div>
      </div>
      <div class="grid g2">
        <div class="field"><label>Units required</label><input id="f_units" type="number" min="1" max="6" value="1"></div>
        <div class="field"><label>Emergency priority</label>
          <select id="f_level"><option>Critical</option><option selected>High</option><option>Medium</option></select>
        </div>
      </div>
      <div class="field"><label>Hospital</label>
        <select id="f_hospital">${hospitals.map(h=>`<option>${h.name}</option>`).join('')}</select>
      </div>
      <div class="field">
        <label>Hospital location</label>
        <div style="display:flex;gap:8px;">
          <input id="f_location" type="text" placeholder="e.g. Jubilee Hills, Hyderabad" style="flex:1;">
          <button type="button" class="btn btn-ghost btn-sm" onclick="useMyLocation()">${ICONS.pin} Use My Location</button>
        </div>
        <div class="field-hint" id="locationHint"></div>
      </div>
      <button class="btn btn-primary btn-block" onclick="submitRequest()">${ICONS.drop} Find Nearby Donors</button>
    </div>
  </section>
`;

function useMyLocation(){
  // simulate geolocation with a small chance of "permission denied" to demonstrate the error state
  const hint = document.getElementById('locationHint');
  hint.innerHTML = "Detecting your location…";
  setTimeout(()=>{
    if(state.locationDenied){
      hint.innerHTML = `<span style="color:var(--red);">${ICONS.alert} Location permission denied. Please enter the hospital location manually.</span>`;
    } else {
      document.getElementById('f_location').value = "Jubilee Hills, Hyderabad";
      hint.innerHTML = `<span style="color:var(--teal);">${ICONS.check} Location detected</span>`;
    }
  }, 700);
}

function submitRequest(){
  const name = document.getElementById('f_name').value || "Patient";
  const blood = document.getElementById('f_blood').value;
  const units = document.getElementById('f_units').value;
  const level = document.getElementById('f_level').value;
  const hospital = document.getElementById('f_hospital').value;
  const location = document.getElementById('f_location').value || "Jubilee Hills, Hyderabad";

  activeRequest = {
    id: Date.now(), patient:name, blood, units, level, hospital, location,
    status:"searching", createdAt:"Just now", acceptedDonor:null,
  };
  navigate('donor-search-loading');
}

VIEWS['donor-search-loading'] = () => {
  runSearchSequence();
  return `
  <section class="section" style="max-width:560px;margin:0 auto;">
    <div class="card loading-panel">
      <div class="radar-wrap" style="max-width:260px;" id="loadingRadar"></div>
      <h3 style="margin:20px 0 4px;">Searching for compatible donors near you…</h3>
      <div class="status-line" id="searchStatus" class="mono">Starting search at 3 km radius</div>
      <div class="progress-track" style="margin-top:18px;"><div class="progress-fill" id="searchProgress" style="width:8%;"></div></div>
    </div>
  </section>
`;};

function runSearchSequence(){
  setTimeout(()=>{
    const radarEl = document.getElementById('loadingRadar');
    if(radarEl){
      radarEl.innerHTML = `<div class="radar-ring" style="width:40%;height:40%;"></div><div class="radar-ring" style="width:70%;height:70%;"></div><div class="radar-ring" style="width:100%;height:100%;"></div><div class="radar-sweep"></div><div class="radar-center"></div>`;
    }
  },10);

  const req = activeRequest;
  const compatibleAvailable = donors.filter(d => isCompatible(d.blood, req.blood));
  const steps = [3,4,5,6];
  let found = [];
  let stepIndex = 0;

  function step(){
    if(stepIndex >= steps.length){
      finishSearch(found);
      return;
    }
    const radius = steps[stepIndex];
    const statusEl = document.getElementById('searchStatus');
    const progEl = document.getElementById('searchProgress');
    if(!statusEl) return; // view changed
    found = compatibleAvailable.filter(d => d.available && d.distance <= radius);
    statusEl.textContent = found.length
      ? `Found ${found.length} donor(s) within ${radius} km`
      : `Searching within ${radius} km… no donor yet`;
    if(progEl) progEl.style.width = `${20 + stepIndex*25}%`;
    if(found.length > 0){
      finishSearch(found, radius);
      return;
    }
    stepIndex++;
    setTimeout(step, 750);
  }
  setTimeout(step, 500);
}

function finishSearch(found, radiusUsed){
  state.lastResults = found.slice().sort((a,b)=>matchScore(b)-matchScore(a));
  state.searchRadiusReached = radiusUsed || 6;
  setTimeout(()=>{
    if(activeRequest) activeRequest.status = found.length ? "matched" : "unmatched";
    navigate('nearby-donors');
  }, 500);
}

VIEWS['nearby-donors'] = () => {
  const results = state.lastResults;
  const req = activeRequest;
  return `
  <section class="section">
    <div class="eyebrow">${ICONS.target} ${req ? req.blood + ' compatible donors' : 'Donor search'}</div>
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:8px;">
      <h2 style="margin:0;font-size:26px;">Nearby donors ${req ? 'for ' + req.hospital : ''}</h2>
      ${req ? `<span class="badge badge-grey">Search radius: ${state.searchRadiusReached || 6} km</span>` : ''}
    </div>
    <p style="color:var(--ink-soft);margin-bottom:24px;">Sorted by AI Match score — a transparent blend of distance, availability, eligibility and response history.</p>

    ${req && req.status==='confirmed' ? confirmedBanner() : ''}

    ${results.length ? `
      <div class="grid g3">
        ${results.map(d=>donorCard(d)).join('')}
      </div>
    ` : `
      <div class="card empty-state">
        ${ICONS.pin.replace('class="icon"','class="icon" style="width:40px;height:40px;color:var(--ink-soft);"')}
        <h3>No compatible donor found nearby</h3>
        <p>We searched up to a 6 km radius and couldn't find an available match right now.</p>
        <button class="btn btn-primary" style="margin-top:14px;" onclick="navigate('nearby-hospitals')">Try Nearby Blood Banks and Hospitals</button>
      </div>
    `}
  </section>
`;};

function confirmedBanner(){
  const d = activeRequest.acceptedDonor;
  return `
  <div class="card pad" style="border-color:var(--teal);background:var(--teal-soft);margin-bottom:24px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:14px;">
    <div style="display:flex;align-items:center;gap:14px;">
      <div style="width:44px;height:44px;border-radius:50%;background:var(--teal);color:#fff;display:flex;align-items:center;justify-content:center;">${ICONS.check}</div>
      <div>
        <div style="font-weight:700;">${d.name} confirmed as your donor</div>
        <div style="font-size:13px;color:var(--ink-soft);">${activeRequest.hospital} · ${d.distance} km away</div>
      </div>
    </div>
    <button class="btn btn-teal btn-sm" onclick="toast('Opening directions to '+activeRequestHospitalName())">${ICONS.nav} Get Directions</button>
  </div>`;
}
function activeRequestHospitalName(){ return activeRequest ? activeRequest.hospital : ''; }

function donorCard(d){
  const score = matchScore(d);
  const requested = activeRequest && activeRequest.requestedDonorId === d.id;
  const confirmed = activeRequest && activeRequest.status==='confirmed' && activeRequest.acceptedDonor && activeRequest.acceptedDonor.id===d.id;
  const ringColor = score>=90 ? 'var(--teal)' : score>=75 ? 'var(--amber)' : 'var(--ink-soft)';
  const circumference = 2*Math.PI*20;
  const offset = circumference - (score/100)*circumference;
  return `
  <div class="donor-card">
    <div class="donor-top">
      <div style="display:flex;gap:12px;">
        <div class="avatar">${d.name.split(' ').map(w=>w[0]).join('')}</div>
        <div>
          <div style="font-weight:700;font-size:15.5px;">${d.name}</div>
          <div class="badge badge-red" style="margin-top:5px;">${d.blood}</div>
        </div>
      </div>
      <svg class="match-ring" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="var(--surface-2)" stroke-width="4"/>
        <circle cx="24" cy="24" r="20" fill="none" stroke="${ringColor}" stroke-width="4" stroke-linecap="round"
          stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" transform="rotate(-90 24 24)"/>
        <text x="24" y="28" text-anchor="middle" font-size="12" font-family="IBM Plex Mono, monospace" font-weight="600" fill="var(--ink)">${score}%</text>
      </svg>
    </div>
    <div class="donor-meta">
      <span>${ICONS.pin} ${d.distance} km away</span>
      <span>${d.available? ICONS.check+' Available' : ICONS.x+' Unavailable'}</span>
    </div>
    <div class="mono" style="font-size:12px;color:var(--ink-soft);">AI Match: ${score}%</div>
    ${confirmed ? `<span class="badge badge-teal" style="justify-content:center;">${ICONS.check} Confirmed donor</span>`
      : requested ? `<button class="btn btn-ghost btn-sm btn-block" disabled>Request sent — awaiting response</button>`
      : `<button class="btn btn-primary btn-sm btn-block" onclick="requestDonor(${d.id})">Request Donor</button>`}
  </div>`;
}

function requestDonor(id){
  const donor = donors.find(d=>d.id===id);
  if(!activeRequest) return;
  activeRequest.requestedDonorId = id;
  activeRequest.status = "requested";
  toast(`Emergency request sent to ${donor.name}.`);

  // push into donor's incoming requests
  donorIncoming.unshift({
    id: Date.now(), patient: activeRequest.patient, blood: activeRequest.blood,
    hospital: activeRequest.hospital, distance: donor.distance, level: activeRequest.level,
    status: "pending", created: "Just now", linkedRequestId: activeRequest.id, donorId: id,
  });
  render();

  // simulate the donor accepting after a short delay for the demo
  setTimeout(()=>{
    const inc = donorIncoming.find(r=>r.linkedRequestId === activeRequest.id);
    if(inc && inc.status === 'pending'){
      acceptDonorRequest(inc.id, true);
    }
  }, 3200);
}

/* ---------- DONOR ---------- */
VIEWS['donor-dashboard'] = () => `
  <section class="section">
    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;margin-bottom:24px;">
      <div>
        <div class="eyebrow">${ICONS.drop} Donor dashboard</div>
        <h2 style="margin:0;font-size:28px;">Welcome back, Rahul</h2>
      </div>
      <div class="card" style="padding:10px 16px;display:flex;align-items:center;gap:10px;">
        <span style="font-weight:600;font-size:14px;">Availability</span>
        <label style="position:relative;display:inline-block;width:42px;height:24px;">
          <input type="checkbox" ${currentDonorAvailable?'checked':''} onchange="toggleAvailability(this)" style="opacity:0;width:0;height:0;">
          <span onclick="toggleAvailability(document.querySelector('#app input[type=checkbox]'))" style="position:absolute;cursor:pointer;inset:0;background:${currentDonorAvailable?'var(--teal)':'var(--surface-2)'};border-radius:999px;transition:.2s;"></span>
          <span style="position:absolute;top:3px;left:${currentDonorAvailable?'21px':'3px'};width:18px;height:18px;background:#fff;border-radius:50%;transition:.2s;box-shadow:0 1px 3px rgba(0,0,0,.3);pointer-events:none;"></span>
        </label>
        <span class="badge ${currentDonorAvailable?'badge-teal':'badge-grey'}">${currentDonorAvailable?'Available':'Unavailable'}</span>
      </div>
    </div>

    <div class="grid g3" style="margin-bottom:28px;">
      <div class="stat-card"><div class="stat-num mono">${donorIncoming.filter(r=>r.status==='pending').length}</div><div class="stat-label">Pending requests</div></div>
      <div class="stat-card"><div class="stat-num mono">${donationHistory.length}</div><div class="stat-label">Lifetime donations</div></div>
      <div class="stat-card"><div class="stat-num mono">O+</div><div class="stat-label">Your blood group</div></div>
    </div>

    <h3 style="font-size:18px;">Emergency requests</h3>
    ${donorRequestsList()}
  </section>
`;

VIEWS['donor-requests'] = VIEWS['donor-dashboard'];

function donorRequestsList(){
  if(!donorIncoming.length){
    return `<div class="card empty-state">
      ${ICONS.bell.replace('class="icon"','class="icon" style="width:40px;height:40px;color:var(--ink-soft);"')}
      <h3>No emergency requests right now</h3><p>You'll see new alerts here as soon as a nearby patient needs your blood group.</p>
    </div>`;
  }
  return `<div style="display:flex;flex-direction:column;gap:14px;">
    ${donorIncoming.map(r=>{
      const critical = r.level === 'Critical' || r.level === 'High';
      const levelBadge = r.level==='Critical' ? 'badge-red' : r.level==='High' ? 'badge-red' : 'badge-amber';
      return `
      <div class="notif-card ${critical?'critical':''}">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;">
          <div>
            <div style="font-weight:700;font-size:15.5px;">${ICONS.alert.replace('class="icon"','class="icon" style="color:var(--red);width:17px;height:17px;vertical-align:-3px;"')} Emergency Blood Request</div>
            <div style="margin-top:8px;font-size:14px;color:var(--ink-soft);line-height:1.7;">
              Patient: <strong style="color:var(--ink);">${r.patient}</strong><br>
              Blood group needed: <strong style="color:var(--ink);">${r.blood}</strong><br>
              Hospital: <strong style="color:var(--ink);">${r.hospital}</strong><br>
              Distance: <strong style="color:var(--ink);">${r.distance} km</strong>
            </div>
          </div>
          <span class="badge ${levelBadge}">${r.level} priority</span>
        </div>
        <div class="divider"></div>
        ${r.status==='pending' ? `
          <div style="display:flex;gap:10px;">
            <button class="btn btn-teal btn-sm" onclick="acceptDonorRequest(${r.id})">${ICONS.check} Accept Request</button>
            <button class="btn btn-ghost btn-sm" onclick="declineDonorRequest(${r.id})">${ICONS.x} Decline</button>
          </div>` :
        r.status==='accepted' ? `
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;">
            <span class="badge badge-teal">${ICONS.check} Accepted</span>
            <button class="btn btn-dark btn-sm" onclick="toast('Opening directions to ${r.hospital}')">${ICONS.nav} Get Directions</button>
          </div>` :
          `<span class="badge badge-grey">Declined</span>`}
      </div>`;
    }).join('')}
  </div>`;
}

function toggleAvailability(checkbox){
  currentDonorAvailable = checkbox.checked;
  const meDonor = donors.find(d=>d.id===1);
  if(meDonor) meDonor.available = currentDonorAvailable;
  toast(`You're now marked as ${currentDonorAvailable?'Available':'Unavailable'}.`);
  render();
}

function acceptDonorRequest(id, silent){
  const r = donorIncoming.find(x=>x.id===id);
  if(!r || r.status!=='pending') return;
  r.status = 'accepted';
  if(r.linkedRequestId && activeRequest && activeRequest.id === r.linkedRequestId){
    const donor = donors.find(d=>d.id === r.donorId) || donors[0];
    activeRequest.status = 'confirmed';
    activeRequest.acceptedDonor = donor;
    donationHistory.unshift({hospital:activeRequest.hospital, blood:activeRequest.blood, date:"2026-08-23", requestPatient:activeRequest.patient});
  }
  if(!silent) toast("Request accepted. Hospital details shared.");
  else toast(`${donors.find(d=>d.id===r.donorId)?.name || 'Donor'} accepted the request!`, ICONS.check);
  render();
}
function declineDonorRequest(id){
  const r = donorIncoming.find(x=>x.id===id);
  if(!r) return;
  r.status = 'declined';
  toast("Request declined. Next best-matched donor will be notified.");
  render();
}

VIEWS['donor-profile'] = () => `
  <section class="section" style="max-width:640px;margin:0 auto;">
    <div class="eyebrow">${ICONS.users} Donor profile</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Your details</h2>
    <div class="card pad">
      <div class="grid g2">
        <div class="field"><label>Full name</label><input value="Rahul Sharma"></div>
        <div class="field"><label>Blood group</label><select><option selected>O+</option></select></div>
        <div class="field"><label>Phone</label><input value="98765 43210"></div>
        <div class="field"><label>Email</label><input value="rahul.sharma@example.com"></div>
        <div class="field"><label>Date of birth</label><input value="1998-04-12"></div>
        <div class="field"><label>Last donation date</label><input value="2026-03-10"></div>
      </div>
      <div class="field"><label>Current location</label><input value="Banjara Hills, Hyderabad"></div>
      <div class="field"><label>Notifications</label>
        <select><option>Enabled</option><option>Disabled</option></select>
      </div>
      <button class="btn btn-primary" onclick="toast('Profile updated.')">Save Changes</button>
    </div>
  </section>
`;

VIEWS['donation-history'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.history} Donation history</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Your donations</h2>
    ${donationHistory.length ? `
    <div class="card pad">
      <table class="table-simple">
        <thead><tr><th>Hospital</th><th>Blood Group</th><th>Date</th><th>For</th></tr></thead>
        <tbody>
        ${donationHistory.map(h=>`<tr><td>${h.hospital}</td><td><span class="badge badge-red">${h.blood}</span></td><td class="mono">${h.date}</td><td>${h.requestPatient}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>` : `
    <div class="card empty-state"><h3>No donation history yet</h3><p>Completed donations will appear here.</p></div>
    `}
  </section>
`;

/* ---------- HOSPITAL ---------- */
VIEWS['hospital-dashboard'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.hospital} Hospital dashboard</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Apollo Hospital</h2>
    <div class="grid g4" style="margin-bottom:28px;">
      <div class="stat-card"><div class="stat-num mono">${activeRequest?1:3}</div><div class="stat-label">Active requests</div></div>
      <div class="stat-card"><div class="stat-num mono">${donors.filter(d=>d.available).length}</div><div class="stat-label">Compatible donors nearby</div></div>
      <div class="stat-card"><div class="stat-num mono">${donationHistory.length}</div><div class="stat-label">Successful donations</div></div>
      <div class="stat-card"><div class="stat-num mono">O+</div><div class="stat-label">Most requested group</div></div>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <h3 style="font-size:18px;margin:0;">Active blood requests</h3>
      <button class="btn btn-primary btn-sm" onclick="navigate('emergency-request')">${ICONS.alert} New Request</button>
    </div>
    ${hospitalRequestsTable()}
  </section>
`;
VIEWS['hospital-requests'] = VIEWS['hospital-dashboard'];

function hospitalRequestsTable(){
  const rows = [
    activeRequest,
    {patient:"Karthik N.",blood:"A+",units:2,level:"Medium",status:"confirmed"},
    {patient:"Divya S.",blood:"B+",units:1,level:"High",status:"searching"},
  ].filter(Boolean);
  return `<div class="card pad">
    <table class="table-simple">
      <thead><tr><th>Patient</th><th>Blood Group</th><th>Units</th><th>Priority</th><th>Status</th></tr></thead>
      <tbody>
      ${rows.map(r=>`<tr>
        <td>${r.patient}</td><td><span class="badge badge-red">${r.blood}</span></td><td>${r.units}</td>
        <td><span class="badge ${r.level==='Critical'||r.level==='High'?'badge-red':'badge-amber'}">${r.level}</span></td>
        <td><span class="badge ${r.status==='confirmed'?'badge-teal':r.status==='searching'?'badge-amber':'badge-grey'}">${capitalize(r.status)}</span></td>
      </tr>`).join('')}
      </tbody>
    </table>
  </div>`;
}

VIEWS['hospital-donors'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.users} Nearby compatible donors</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Donors near Apollo Hospital</h2>
    <div class="grid g3">
      ${donors.slice().sort((a,b)=>matchScore(b)-matchScore(a)).map(d=>donorCard(d)).join('')}
    </div>
  </section>
`;

VIEWS['hospital-profile'] = () => `
  <section class="section" style="max-width:640px;margin:0 auto;">
    <div class="eyebrow">${ICONS.hospital} Hospital profile</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Hospital details</h2>
    <div class="card pad">
      <div class="field"><label>Hospital name</label><input value="Apollo Hospital"></div>
      <div class="field"><label>Address</label><input value="Road No. 72, Jubilee Hills, Hyderabad"></div>
      <div class="field"><label>Phone</label><input value="040-2360 7777"></div>
      <div class="grid g2">
        <div class="field"><label>Verified</label><select><option selected>Yes</option><option>No</option></select></div>
        <div class="field"><label>Blood bank on-site</label><select><option selected>Yes</option><option>No</option></select></div>
      </div>
      <button class="btn btn-primary" onclick="toast('Hospital profile updated.')">Save Changes</button>
    </div>
  </section>
`;

/* ---------- ADMIN ---------- */
VIEWS['admin-dashboard'] = () => {
  const groupCounts = BLOOD_GROUPS.map(g=>({g, n: donors.filter(d=>d.blood===g).length + Math.floor(Math.random()*4)}));
  const maxN = Math.max(...groupCounts.map(x=>x.n),1);
  return `
  <section class="section">
    <div class="eyebrow">${ICONS.chart} Admin dashboard</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Platform overview</h2>
    <div class="grid g4" style="margin-bottom:28px;">
      <div class="stat-card"><div class="stat-num mono">${donors.length + 214}</div><div class="stat-label">Registered donors</div></div>
      <div class="stat-card"><div class="stat-num mono">${donors.filter(d=>d.available).length + 58}</div><div class="stat-label">Active donors</div></div>
      <div class="stat-card"><div class="stat-num mono">${donorIncoming.length + 12}</div><div class="stat-label">Emergency requests</div></div>
      <div class="stat-card"><div class="stat-num mono">${donationHistory.length + 76}</div><div class="stat-label">Successful donations</div></div>
      <div class="stat-card"><div class="stat-num mono">${hospitals.length + 9}</div><div class="stat-label">Registered hospitals</div></div>
      <div class="stat-card"><div class="stat-num mono">${bloodBanks.length + 5}</div><div class="stat-label">Registered blood banks</div></div>
      <div class="stat-card"><div class="stat-num mono">96%</div><div class="stat-label">Avg. match score</div></div>
      <div class="stat-card"><div class="stat-num mono">4.1 km</div><div class="stat-label">Avg. donor distance</div></div>
    </div>
    <div class="card pad">
      <h3 style="margin-top:0;font-size:17px;">Blood group statistics</h3>
      <div style="display:flex;flex-direction:column;gap:12px;margin-top:16px;">
        ${groupCounts.map(x=>`
        <div style="display:flex;align-items:center;gap:14px;">
          <div class="mono" style="width:38px;font-weight:600;">${x.g}</div>
          <div class="progress-track" style="flex:1;"><div class="progress-fill" style="width:${(x.n/maxN)*100}%;background:var(--red);"></div></div>
          <div class="mono" style="width:24px;text-align:right;color:var(--ink-soft);font-size:13px;">${x.n}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>
`;};

VIEWS['admin-users'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.users} Users</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Registered donors</h2>
    <div class="card pad">
      <table class="table-simple">
        <thead><tr><th>Name</th><th>Blood Group</th><th>Area</th><th>Availability</th><th>Response rate</th></tr></thead>
        <tbody>
        ${donors.map(d=>`<tr>
          <td>${d.name}</td><td><span class="badge badge-red">${d.blood}</span></td><td>${d.area}</td>
          <td><span class="badge ${d.available?'badge-teal':'badge-grey'}">${d.available?'Available':'Unavailable'}</span></td>
          <td class="mono">${Math.round(d.responseRate*100)}%</td>
        </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>
`;

VIEWS['admin-requests'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.alert} Requests</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Emergency requests</h2>
    ${hospitalRequestsTable()}
  </section>
`;

VIEWS['admin-hospitals'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.hospital} Hospitals</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Registered hospitals</h2>
    <div class="card pad">
      <table class="table-simple">
        <thead><tr><th>Name</th><th>Address</th><th>Phone</th><th>Blood bank</th></tr></thead>
        <tbody>
        ${hospitals.map(h=>`<tr><td>${h.name}</td><td>${h.address}</td><td class="mono">${h.phone}</td><td><span class="badge ${h.bloodBank?'badge-teal':'badge-grey'}">${h.bloodBank?'Yes':'No'}</span></td></tr>`).join('')}
        </tbody>
      </table>
    </div>
  </section>
`;

VIEWS['admin-reports'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.chart} Reports</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Monthly summary</h2>
    <div class="grid g2">
      <div class="card pad">
        <h3 style="margin-top:0;">Requests fulfilled within radius</h3>
        <div class="grid g4" style="margin-top:14px;">
          ${[["3 km","38%"],["4 km","61%"],["5 km","84%"],["6 km","93%"]].map(([k,v])=>`
          <div style="text-align:center;background:var(--surface);border-radius:12px;padding:14px;">
            <div class="mono" style="font-size:18px;font-weight:600;">${v}</div>
            <div style="font-size:12px;color:var(--ink-soft);margin-top:4px;">within ${k}</div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card pad">
        <h3 style="margin-top:0;">Average donor response time</h3>
        <div class="stat-num mono" style="font-size:40px;margin-top:8px;">4m 12s</div>
        <div class="stat-label">from request sent to accepted</div>
      </div>
    </div>
  </section>
`;

/* ---------- HOSPITALS / BLOOD BANKS LOCATOR ---------- */
VIEWS['nearby-hospitals'] = () => `
  <section class="section">
    <div class="eyebrow">${ICONS.hospital} Nearby hospitals &amp; blood banks</div>
    <h2 style="margin:0 0 8px;font-size:28px;">Hospitals and blood banks near you</h2>
    <p style="color:var(--ink-soft);margin-bottom:28px;">Use these as an alternative if no donor is available within range.</p>

    <h3 style="font-size:17px;">Hospitals</h3>
    <div class="grid g3" style="margin-bottom:32px;">
      ${hospitals.map(h=>`
      <div class="card pad">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;">
          <div>
            <div style="font-weight:700;">${h.name}</div>
            <div style="font-size:13px;color:var(--ink-soft);margin-top:4px;">${h.address}</div>
          </div>
          ${h.bloodBank ? '<span class="badge badge-teal">Blood Bank</span>' : ''}
        </div>
        <div class="divider"></div>
        <div class="donor-meta" style="margin-bottom:10px;">
          <span>${ICONS.pin} ${h.distance} km away</span>
          <span>${ICONS.phone} ${h.phone}</span>
        </div>
        <button class="btn btn-ghost btn-sm btn-block" onclick="toast('Opening directions to ${h.name}')">${ICONS.nav} Get Directions</button>
      </div>`).join('')}
    </div>

    <h3 style="font-size:17px;">Blood banks</h3>
    <div class="grid g3">
      ${bloodBanks.map(b=>`
      <div class="card pad">
        <div style="font-weight:700;">${b.name}</div>
        <div style="font-size:13px;color:var(--ink-soft);margin-top:4px;">${b.address}</div>
        <div class="divider"></div>
        <div class="donor-meta" style="margin-bottom:10px;">
          <span>${ICONS.pin} ${b.distance} km away</span>
          <span>${ICONS.phone} ${b.phone}</span>
        </div>
        <div class="tag-row" style="margin-bottom:12px;">
          ${b.groups.map(g=>`<span class="badge badge-red">${g}</span>`).join('')}
        </div>
        <button class="btn btn-ghost btn-sm btn-block" onclick="toast('Opening directions to ${b.name}')">${ICONS.nav} Get Directions</button>
      </div>`).join('')}
    </div>
  </section>
`;

VIEWS['patient-profile'] = () => `
  <section class="section" style="max-width:640px;margin:0 auto;">
    <div class="eyebrow">${ICONS.users} Patient profile</div>
    <h2 style="margin:0 0 24px;font-size:28px;">Your details</h2>
    <div class="card pad">
      <div class="grid g2">
        <div class="field"><label>Full name</label><input value="Meera Iyer"></div>
        <div class="field"><label>Saved blood group</label><select><option selected>O+</option></select></div>
        <div class="field"><label>Phone</label><input value="90000 11223"></div>
        <div class="field"><label>Email</label><input value="meera.iyer@example.com"></div>
      </div>
      <div class="field"><label>Default location</label><input value="Jubilee Hills, Hyderabad"></div>
      <button class="btn btn-primary" onclick="toast('Profile updated.')">Save Changes</button>
    </div>
  </section>
`;

/* ============================= INIT ============================= */
render();