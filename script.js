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
            <img src="ph11.png" alt="Creative Design">
            <img src="mv11.png" alt="Video Editing">
            <img src="wr11.png" alt="Content Writing">
          </div>
          <p>We're delighted to have you here! Explore a range of creative services tailored to meet your needs with the highest level of professionalism. Whether you're looking for stunning video editing, eye-catching Photoshop designs, elegant presentations, or expertly written content — we're here to make a difference.</p>
        </div>
        <div class="featured-services">
          <h2>Our Popular Services</h2>
          <div class="service-cards">
            <div class="service-card">
              <img src="ph11.png" alt="Photoshop">
              <h3>Photoshop</h3>
              <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="mv11.png" alt="Video Editing">
              <h3>Video Editing</h3>
              <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="ppt11.png" alt="PowerPoint">
              <h3>PowerPoint</h3>
              <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
            </div>
          </div>
        </div>
      `,
      about: "<h1>About Us</h1><p>We are a team driven by creativity and excellence, offering integrated services in video editing, graphic design, presentation creation, and content writing — with a level of professionalism that ensures outstanding results.</p>",
      work: "<h1>Our Work</h1><p>Our portfolio is coming soon.</p>",
    },
    details: {
      photoshop: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Photoshop</h1>
            <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ph11.png" alt="Photoshop">
            <img src="ph12.png" alt="Photoshop">
          </div>
          <p>Stand out with a unique visual identity through creative Photoshop designs — from photo editing to designing ads and banners. We give your visuals a professional touch that reflects your quality and grabs attention instantly.</p>
        </div>
      `,
      video: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Video Editing</h1>
            <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="mv11.png" alt="Video Editing">
            <img src="mv12.png" alt="Video Editing">
          </div>
          <p>Transform your ordinary footage into stunning videos that captivate your audience! We offer creative video editing services including cutting, effects, music, and professional voiceovers tailored to all tastes and industries.</p>
        </div>
      `,
      ppt: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>PowerPoint</h1>
            <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ppt11.png" alt="PowerPoint">
            <img src="ppt12.png" alt="PowerPoint">
          </div>
          <p>Have a great idea and want to present it professionally? We create elegant and impactful PowerPoint presentations with focused content and a clear message — perfect for business, training, or marketing purposes.</p>
        </div>
      `,
      social: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Social Media</h1>
            <button class="favorite-btn" onclick="toggleFavorite('social')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="cs11.png" alt="Social Media">
            <img src="cs12.png" alt="Social Media">
          </div>
          <p>
Professional social media design that reflects your brand and boosts audience engagement.
We create modern posts, stories, and covers that grab attention and achieve your marketing goals.

</p>
        </div>
      `,
      content: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Content Writing</h1>
            <button class="favorite-btn" onclick="toggleFavorite('content')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="wr11.png" alt="Content Writing">
            <img src="wr12.png" alt="Content Writing">
          </div>
          <p>Your words deserve to be expressed persuasively! We offer creative and marketing content writing that grabs attention, convinces your audience, and enhances visibility with optimized phrasing — in multiple languages!</p>
        </div>
      `
    }
  },
  ar: {
    nav: { home: "الرئيسية", about: "من نحن", work: "أعمالنا", favorites: "المفضلة" },
    contact: "تواصل معنا",
    servicesTitle: "خدماتنا",
    services: {
      photoshop: "فوتوشوب",
      video: "تعديل فيديو",
      ppt: "عروض تقديمية",
      social: "تصميم سوشيال ميديا",
      content: "كتابة محتوى",
    },
    form: { name: "الاسم", msg: "الرسالة", send: "إرسال" },
    sections: {
      home: `
        <div class="home-hero">
          <h1>مرحبًا بك في عالم الإبداع والاحتراف</h1>
          <div class="hero-images">
            <img src="ph11.png" alt="تصميم إبداعي">
            <img src="mv11.png" alt="مونتاج فيديو">
            <img src="wr11.png" alt="كتابة محتوى">
          </div>
          <p>سعدنا زيارتك لموقعنا حيث نضع بين يديك مجموعة من الخدمات الإبداعية المصممة لتلبي احتياجاتك بكل احترافية. سواء كنت تبحث عن مونتاج مبهر، تصاميم فوتوشوب ملفتة، عروض تقديمية أنيقة، أو محتوى مكتوب بإتقان — نحن هنا لنصنع لك الفرق</p>
        </div>
        <div class="featured-services">
          <h2>خدماتنا الشائعة</h2>
          <div class="service-cards">
            <div class="service-card">
              <img src="ph11.png" alt="فوتوشوب">
              <h3>فوتوشوب</h3>
              <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="mv11.png" alt="تعديل فيديو">
              <h3>تعديل فيديو</h3>
              <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="ppt11.png" alt="عروض تقديمية">
              <h3>عروض تقديمية</h3>
              <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
            </div>
          </div>
        </div>
      `,
      about: "<h1>من نحن</h1><p>نحن فريق شغوف بالإبداع والتميز، نقدم خدمات متكاملة تشمل المونتاج، التصميم، العروض التقديمية، وكتابة المحتوى، بخبرة واحترافية تضمن لك نتائج تفوق التوقعات.</p>",
      work: "<h1>أعمالنا</h1><p>سيتم إضافة معرض أعمال قريباً.</p>",
    },
    details: {
      photoshop: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>فوتوشوب</h1>
            <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ph11.png" alt="فوتوشوب">
            <img src="ph12.png" alt="فوتوشوب">
          </div>
          <p>تميز بهويتك البصرية مع تصاميم فوتوشوب مبتكرة، من تعديل الصور إلى تصميم الإعلانات والبنرات. نمنح صورك لمسة احترافية تعكس جودتك وتشد الانتباه فوراً.</p>
        </div>
      `,
      video: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>تعديل فيديو</h1>
            <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="mv11.png" alt="تعديل فيديو">
            <img src="mv12.png" alt="تعديل فيديو">
          </div>
          <p>حوّل لقطاتك العادية إلى فيديوهات مذهلة تبهر جمهورك! نقدم خدمات مونتاج إبداعية تشمل تقطيع، مؤثرات، موسيقى وتعليق صوتي باحترافية عالية تناسب كل الأذواق والمجالات</p>
        </div>
      `,
      ppt: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>عروض تقديمية</h1>
            <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ppt11.png" alt="عروض تقديمية">
            <img src="ppt12.png" alt="عروض تقديمية">
          </div>
          <p>هل لديك فكرة رائعة وتحتاج لتقديمها بشكل مبهر؟ نحن نعد لك عروض PowerPoint تنطق بالاحترافية! تصميم أنيق، محتوى مركز، ورسالة تصل مباشرة</p>
        </div>
      `,
      social: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>سوشيال ميديا</h1>
            <button class="favorite-btn" onclick="toggleFavorite('social')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="cs11.png" alt="سوشيال ميديا">
            <img src="cs12.png" alt="سوشيال ميديا">
          </div>
          <p>تصميم احترافي لمحتوى منصات التواصل الاجتماعي يعكس هوية علامتك ويزيد من تفاعل جمهورك.
نصمم منشورات، قصص، وأغلفة بأسلوب عصري يجذب الانتباه ويحقق أهدافك التسويقية.</p>
        </div>
      `,
      content: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>كتابة محتوى</h1>
            <button class="favorite-btn" onclick="toggleFavorite('content')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="wr11.png" alt="كتابة محتوى">
            <img src="wr12.png" alt="كتابة محتوى">
          </div>
          <p>كلماتك تستحق أن تُقال بأسلوب مقنع! نقدم خدمة كتابة محتوى تسويقي وإبداعي يشد الانتباه ويقنع جمهورك، مع تحسين الجمل لزيادة الظهور. دعنا نعبر عن فكرتك بأفضل طريقة ممكنة و بعدة لغات</p>
        </div>
      `
    }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", work: "Nos Réalisations", favorites: "Favoris" },
    contact: "Contactez-nous",
    servicesTitle: "Nos Services",
    services: {
      photoshop: "Photoshop",
      video: "Montage Vidéo",
      ppt: "Présentation",
      social: "Design Réseaux Sociaux",
      content: "Rédaction de Contenu",
    },
    form: { name: "Nom", msg: "Message", send: "Envoyer" },
    sections: {
      home: `
        <div class="home-hero">
          <h1>Bienvenue dans un monde de créativité et de professionnalisme</h1>
          <div class="hero-images">
            <img src="ph11.png" alt="Design Créatif">
            <img src="mv11.png" alt="Montage Vidéo">
            <img src="wr11.png" alt="Rédaction de Contenu">
          </div>
          <p>Nous sommes ravis de vous accueillir ! Découvrez une gamme de services créatifs conçus pour répondre à vos besoins avec un haut niveau de professionnalisme. Que vous recherchiez un montage vidéo impressionnant, des designs Photoshop percutants, des présentations élégantes ou du contenu rédigé avec soin — nous sommes là pour faire la différence.</p>
        </div>
        <div class="featured-services">
          <h2>Nos Services Populaires</h2>
          <div class="service-cards">
            <div class="service-card">
              <img src="ph11.png" alt="Photoshop">
              <h3>Photoshop</h3>
              <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="mv11.png" alt="Montage Vidéo">
              <h3>Montage Vidéo</h3>
              <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
            </div>
            <div class="service-card">
              <img src="ppt11.png" alt="Présentation">
              <h3>Présentation</h3>
              <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
            </div>
          </div>
        </div>
      `,
      about: "<h1>À propos</h1><p>Nous sommes une équipe passionnée par la créativité et l'excellence, proposant des services complets en montage vidéo, design graphique, création de présentations et rédaction de contenu — avec un professionnalisme garantissant des résultats remarquables.</p>",
      work: "<h1>Nos Réalisations</h1><p>Portfolio bientôt disponible.</p>",
    },
    details: {
      photoshop: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Photoshop</h1>
            <button class="favorite-btn" onclick="toggleFavorite('photoshop')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ph11.png" alt="Photoshop">
            <img src="ph12.png" alt="Photoshop">
          </div>
          <p>Affirmez votre identité visuelle avec des créations Photoshop originales — de la retouche photo à la conception de publicités et bannières. Nous donnons à vos visuels une touche professionnelle qui reflète votre qualité et attire l'attention dès le premier regard.</p>
        </div>
      `,
      video: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Montage Vidéo</h1>
            <button class="favorite-btn" onclick="toggleFavorite('video')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="mv11.png" alt="Montage Vidéo">
            <img src="mv12.png" alt="Montage Vidéo">
          </div>
          <p>Transformez vos séquences ordinaires en vidéos époustouflantes qui captivent votre audience ! Nous proposons un montage créatif avec découpage, effets, musique et voix off professionnelle adaptés à tous les styles et secteurs.</p>
        </div>
      `,
      ppt: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Présentation</h1>
            <button class="favorite-btn" onclick="toggleFavorite('ppt')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="ppt11.png" alt="Présentation">
            <img src="ppt12.png" alt="Présentation">
          </div>
          <p>Vous avez une idée brillante à présenter ? Nous concevons des présentations PowerPoint élégantes et percutantes, avec un contenu clair et une mise en page professionnelle — idéales pour les affaires, la formation ou le marketing.</p>
        </div>
      `,
      social: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Réseaux Sociaux</h1>
            <button class="favorite-btn" onclick="toggleFavorite('social')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="cs11.png" alt="Réseaux Sociaux">
            <img src="cs12.png" alt="Réseaux Sociaux">
          </div>
          <p>
Conception graphique professionnelle pour les réseaux sociaux, reflétant votre marque et augmentant l'engagement.
Nous créons des publications, stories et couvertures modernes qui attirent l’attention et soutiennent vos objectifs marketing.</p>
        </div>
      `,
      content: `
        <div class="service-detail">
          <div class="detail-header">
            <h1>Rédaction</h1>
            <button class="favorite-btn" onclick="toggleFavorite('content')"><i class="far fa-heart"></i></button>
          </div>
          <div class="detail-images">
            <img src="wr11.png" alt="Rédaction">
            <img src="wr12.png" alt="Rédaction">
          </div>
          <p>Vos idées méritent d'être exprimées avec impact ! Nous rédigeons du contenu créatif et marketing qui attire l'attention, convainc votre public, et améliore la visibilité grâce à des textes optimisés — disponibles en plusieurs langues !</p>
        </div>
      `
    }
  }
};
let currentLang = "en";
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
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
   // Update heart icons on the current page
  const hearts = document.querySelectorAll(`.favorite-btn[onclick="toggleFavorite('${service}')"] i`);
  hearts.forEach(heart => {
    if (favorites.includes(service)) {
      heart.classList.remove('far');
      heart.classList.add('fas');
    } else {
      heart.classList.remove('fas');
      heart.classList.add('far');
    }
  });
}
function showFavorites() {
  let html = '<h1>' + (currentLang === 'en' ? 'Your Favorite Services' : 
                currentLang === 'ar' ? 'خدماتك المفضلة' : 'Vos Services Favoris') + '</h1>';
    if (favorites.length === 0) {
    html += '<p>' + (currentLang === 'en' ? 'You have no favorites yet. Click the heart icon on services to add them here.' : 
                    currentLang === 'ar' ? 'لا توجد عناصر مفضلة حتى الآن. انقر على أيقونة القلب على الخدمات لإضافتها هنا.' : 
                    'Vous n\'avez aucun favori pour le moment. Cliquez sur l\'icône cœur des services pour les ajouter ici.') + '</p>';
  } else {
    html += '<div class="favorites-grid">';
    favorites.forEach(fav => {
      html += `
        <div class="favorite-item">
          <h3>${content[currentLang].services[fav]}</h3>
          <button onclick="showService('${fav}')">${currentLang === 'en' ? 'View Details' : 
                                              currentLang === 'ar' ? 'عرض التفاصيل' : 
                                              'Voir les Détails'}</button>
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
  // Update navigation
  document.getElementById("nav-home").textContent = t.nav.home;
  document.getElementById("nav-about").textContent = t.nav.about;
  document.getElementById("nav-work").textContent = t.nav.work;
  document.getElementById("nav-favorites").innerHTML = t.nav.favorites + ' <span id="favCount">' + favorites.length + '</span>';
    // Update contact button
  document.getElementById("contactBtn").textContent = t.contact;
    // Update services title
  document.getElementById("servicesTitle").textContent = t.servicesTitle;
    // Update services list
  for (let key in t.services) {
    document.getElementById(`service-${key}`).textContent = t.services[key];
  }
    // Update contact form
  document.getElementById("contactTitle").textContent = t.contact;
  document.getElementById("formName").placeholder = t.form.name;
  document.getElementById("formMsg").placeholder = t.form.msg;
  document.getElementById("formSendBtn").textContent = t.form.send;
    // Update current content
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
    // Update heart icons based on favorites
  updateHeartIcons();
}
function showService(service) {
  document.getElementById("mainContent").innerHTML = content[currentLang].details[service];
  document.getElementById("mainContent").setAttribute('data-current', `service-${service}`);
    // Update heart icon for this service
  const heartIcon = document.querySelector(`.service-detail .favorite-btn i`);
  if (heartIcon) {
    if (favorites.includes(service)) {
      heartIcon.classList.remove('far');
      heartIcon.classList.add('fas');
    } else {
      heartIcon.classList.remove('fas');
      heartIcon.classList.add('far');
    }
  }
}
function updateHeartIcons() {
  // Update heart icons in service cards
  document.querySelectorAll('.service-card .favorite-btn i').forEach(icon => {
    const service = icon.parentElement.getAttribute('onclick').match(/'([^']+)'/)[1];
    if (favorites.includes(service)) {
      icon.classList.remove('far');
      icon.classList.add('fas');
    } else {
      icon.classList.remove('fas');
      icon.classList.add('far');
    }
  });
}

function toggleContact() {
  const popup = document.getElementById("contactPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}

document.getElementById("themeToggle").onclick = function () {
  document.body.classList.toggle("dark");
  this.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem('theme', document.body.classList.contains("dark") ? 'dark' : 'light');
};
// Initialize
window.onload = () => {
  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.getElementById("themeToggle").textContent = "☀️";
  }
    // Load language
  changeLanguage('en');
    // Load favorites count
  updateFavCount();
    // Show home section by default
  showSection('home');
};
// منع zoom على حقول الإدخال في الجوال
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('input, textarea, select').forEach(el => {
    el.addEventListener('focus', function() {
      window.scrollTo(0, 0);
      document.body.style.zoom = "1.0";
    });
  });
    // تحسين تجربة اللمس
  document.querySelectorAll('a, button, [onclick]').forEach(el => {
    el.style.touchAction = 'manipulation';
  });
});
