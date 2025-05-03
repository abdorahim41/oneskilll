// كائن المحتوى متعدد اللغات
const content = {
  en: {
    nav: { home: "Home", about: "About Us", work: "Our Work", favorites: "Favorites" },
    contact: "Contact Us",
    servicesTitle: "Our Services",
    services: {
      photoshop: "Photoshop",
      video: "Video Editing",
      ppt: "PowerPoint",
      social: "Social Media Design",
      content: "Content Writing",
    },
    form: { name: "Your Name", msg: "Your Message", send: "Send Message" },
    sections: {
      home: `
        <div class="home-hero">
          <h1>Welcome to a World of Creativity and Professionalism</h1>
          <div class="hero-images">
            <img src="ph11.png" alt="Creative Design" loading="lazy">
            <img src="mv11.png" alt="Video Editing" loading="lazy">
            <img src="wr11.png" alt="Content Writing" loading="lazy">
          </div>
          <p>We're delighted to have you here! Explore our creative services...</p>
        </div>
        <div class="featured-services">
          <h2>Our Popular Services</h2>
          <div class="service-cards">
            <div class="service-card">
              <img src="ph11.png" alt="Photoshop" loading="lazy">
              <h3>Photoshop</h3>
              <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="mv11.png" alt="Video Editing" loading="lazy">
              <h3>Video Editing</h3>
              <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="ppt11.png" alt="PowerPoint" loading="lazy">
              <h3>PowerPoint</h3>
              <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
            </div>
          </div>
        </div>
      `,
      about: "<h1>About Us</h1><p>We are a creative team offering professional services...</p>",
      work: "<h1>Our Work</h1><p>Portfolio coming soon.</p>"
    },
    details: {
      photoshop: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Photoshop</h1>
            <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ph11.png" alt="Photoshop" loading="lazy">
            <img src="ph12.png" alt="Photoshop" loading="lazy">
          </div>
          <p>Professional Photoshop designs...</p>
        </div>
      `,
      // باقي الخدمات بنفس الهيكل
    }
  },
  ar: {
    // محتوى عربي بنفس الهيكل
  },
  fr: {
    // محتوى فرنسي بنفس الهيكل
  }
};

// متغيرات التطبيق
let currentLang = "en";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// دوال التطبيق الرئيسية
function updateFavCount() {
  document.getElementById('favCount').textContent = favorites.length;
}

function toggleFavorite(service) {
  const index = favorites.indexOf(service);
  if (index === -1) {
    favorites.push(service);
  } else {
    favorites.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  updateFavCount();
  
  const hearts = document.querySelectorAll(`.favorite-btn[onclick="toggleFavorite('${service}')"] i`);
  hearts.forEach(heart => {
    heart.classList.toggle('far');
    heart.classList.toggle('fas');
  });
}

function showFavorites() {
  let html = `<h1>${currentLang === 'en' ? 'Your Favorites' : currentLang === 'ar' ? 'المفضلة' : 'Favoris'}</h1>`;
  
  if (favorites.length === 0) {
    html += `<p>${currentLang === 'en' ? 'No favorites yet' : currentLang === 'ar' ? 'لا يوجد مفضلات' : 'Aucun favori'}</p>`;
  } else {
    html += '<div class="favorites-grid">';
    favorites.forEach(fav => {
      html += `
        <div class="favorite-item">
          <h3>${content[currentLang].services[fav]}</h3>
          <button onclick="showService('${fav}')">
            ${currentLang === 'en' ? 'View' : currentLang === 'ar' ? 'عرض' : 'Voir'}
          </button>
        </div>
      `;
    });
    html += '</div>';
  }
  document.getElementById("mainContent").innerHTML = html;
}

function changeLanguage(lang) {
  currentLang = lang;
  const t = content[lang];

  // تحديث العناصر النصية
  document.getElementById("nav-home").textContent = t.nav.home;
  document.getElementById("nav-about").textContent = t.nav.about;
  document.getElementById("nav-work").textContent = t.nav.work;
  document.getElementById("nav-favorites").innerHTML = `${t.nav.favorites} <span id="favCount">${favorites.length}</span>`;
  document.getElementById("contactBtn").textContent = t.contact;
  document.getElementById("servicesTitle").textContent = t.servicesTitle;
  
  // تحديث قائمة الخدمات
  for (const key in t.services) {
    document.getElementById(`service-${key}`).textContent = t.services[key];
  }
  
  // تحديث المحتوى الحالي
  const currentSection = document.getElementById("mainContent").getAttribute('data-current') || 'home';
  if (currentSection === 'favorites') {
    showFavorites();
  } else if (currentSection.startsWith('service-')) {
    showService(currentSection.split('-')[1]);
  } else {
    showSection(currentSection);
  }
}

function showSection(section) {
  document.getElementById("mainContent").innerHTML = content[currentLang].sections[section];
  document.getElementById("mainContent").setAttribute('data-current', section);
  updateHeartIcons();
}

function showService(service) {
  document.getElementById("mainContent").innerHTML = content[currentLang].details[service];
  document.getElementById("mainContent").setAttribute('data-current', `service-${service}`);
  updateHeartIcons();
}

function updateHeartIcons() {
  document.querySelectorAll('.favorite-btn i').forEach(icon => {
    const service = icon.parentElement.getAttribute('onclick').match(/'([^']+)'/)[1];
    icon.classList.toggle('far', !favorites.includes(service));
    icon.classList.toggle('fas', favorites.includes(service));
  });
}

function toggleContact() {
  const popup = document.getElementById("contactPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// تهيئة الموقع
document.getElementById("themeToggle").onclick = function() {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem('theme', document.body.classList.contains("dark") ? 'dark' : 'light');
};

// تحميل أولي
window.onload = () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    document.getElementById("themeToggle").textContent = "☀️";
  }
  
  changeLanguage('en');
  updateFavCount();
  showSection('home');
  
  // تحسينات للجوال
  document.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('focus', () => {
      window.scrollTo(0, 0);
      document.body.style.zoom = "1.0";
    });
  });
};
