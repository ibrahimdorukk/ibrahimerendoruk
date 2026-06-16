/* =============================================
   SCRIPT.JS — ibrahimerendoruk.vercel.app
   ============================================= */

/* ─── TRANSLATIONS ────────────────────────── */
const translations = {
  tr: {
    // Nav
    navAbout: 'Hakkımda', navProjects: 'Projeler', navResearch: 'Araştırmalar',
    navServices: 'Hizmetler', navSkills: 'Beceriler', navResume: 'Özgeçmiş',
    navCertificates: 'Sertifikalar', navContact: 'İletişim', navBlog: 'Blog',
    contactButton: 'İletişime Geç',
    // Hero
    heroTitle: 'İbrahim Eren\nDoruk.',
    heroText: 'Eskişehir Osmangazi Üniversitesi Makine Mühendisliği mezunu. CAD/CAM tasarımı, CNC işleme, tolerans analizi, malzeme bilgisi ve kalite kontrol konularında yetkin.',
    heroProjectButton: 'Projelerimi Gör ↗', status: '● Müsait',
    statProjects: 'Tamamlanan Proje', statExperience: 'Yıllık Deneyim', statInternship: 'Staj & İş',
    // About
    aboutLabel: 'HAKKIMDA',
    aboutTitle: 'Havacılık ve otomotiv endüstrisine ilgi duyan, imalat teknolojileri alanında kendini geliştiren bir Makine Mühendisiyim.',
    aboutText: 'Eskişehir Osmangazi Üniversitesi Makine Mühendisliği bölümünden 2024 yılında mezun oldum. CAD/CAM tasarımı, CNC işleme, tolerans analizi, malzeme bilgisi ve kalite kontrol konularında yetkinlik sahibiyim. Endüstrideki teknolojik yenilikleri yakından takip ederek, mühendislik becerilerimi sürekli geliştiriyor ve yenilikçi çözümler üretmeye odaklanıyorum.',
    // Projects
    projectsLabel: 'PROJELER', projectsTitle: 'Tasarım ve Render Çalışmaları',
    projectsDesc: 'CAD modelleme, sac metal tasarımı, prototipleme ve 3D render çalışmalarından oluşan proje seçkisi.',
    filterAll: 'Tümü', filterCAD: 'CAD', filterCAM: 'CAM', filter3D: '3D Baskı', filterRender: 'Render',
    // Project cards
    project1Tag: 'SolidWorks / Sac Metal / Render', project1Title: 'Sac Metal Kasa Tasarımı', project1Text: 'Üretime uygun büküm mantığıyla hazırlanmış modern sac metal ürün tasarımı.',
    project2Tag: 'Fusion 360 / 3D Baskı', project2Title: '3D Baskı Prototip', project2Text: 'Fonksiyonel kullanım için hazırlanmış prototip parça tasarımı.',
    project3Tag: 'Siemens NX / CAD', project3Title: 'Makine Parçası Tasarımı', project3Text: 'Teknik ölçülere uygun mühendislik parçası modelleme çalışması.',
    project4Tag: 'CAD / Render', project4Title: 'Endüstriyel Ürün Render', project4Text: 'Sunum ve katalog kullanımına uygun ürün görselleştirme çalışması.',
    project5Tag: 'Montaj / Teknik Tasarım', project5Title: 'Montaj Tasarımı', project5Text: 'Birden fazla parçadan oluşan montaj yapısı ve üretim hazırlığı.',
    project6Tag: 'Üretim / CAD-CAM', project6Title: 'Üretime Hazır Tasarım', project6Text: 'İmalat sürecine uygun, ölçülendirme ve üretim mantığı düşünülerek hazırlanmış tasarım.',
    // Research
    researchLabel: 'ARAŞTIRMALAR', researchTitle: 'Akademik Araştırmalar',
    research1Title: 'Seçici Lazer Ergitme (SLM)', research1Text: 'AISI 316L paslanmaz çeliğin yüzey topolojisi ve mekanik özellikleri üzerine tez çalışması.',
    research2Title: 'Termal Bariyer Kaplama', research2Text: 'Termal bariyer kaplama teknolojileri ve bu teknolojilerin faydaları hakkında araştırma.',
    research3Title: 'Rüzgar Enerjisi Potansiyeli', research3Text: "Türkiye'nin rüzgar enerjisi potansiyeli ve rüzgar türbinleri üzerine rapor çalışması.",
    // Services
    servicesLabel: 'HİZMETLERİM', servicesTitle: 'Neler Yapıyorum?',
    service1Title: 'Sac Metal Tasarımı', service1Text: 'Sac metal parçalar için profesyonel CAD tasarımı, teknik resim, büküm ve üretim hazırlığı.',
    service2Title: '3D Yazıcı Siparişleri', service2Text: 'PLA, ABS, PETG gibi malzemelerde prototip ve fonksiyonel parça üretimi.',
    service3Title: 'Prototipleme Hizmetleri', service3Text: 'Fikirden fiziksel ürüne kadar modelleme, 3D baskı ve test süreci.',
    // Skills
    skillsLabel: 'TEKNİK YETKİNLİKLER', skillsTitle: 'Teknik Yetkinlikler',
    skill1Title: 'CAD & CAM', skill1Text: 'SolidWorks, Autodesk Fusion, Siemens NX ve Siemens NX Manufacturing ile tasarım ve CAM çalışmaları.',
    skill2Title: 'İmalat & Kalite', skill2Text: 'CNC freze, lazer kesim, abkant pres, kaynaklı imalat, kalite kontrol ve tolerans analizi.',
    skill3Title: 'Malzeme & Analiz', skill3Text: 'Malzeme bilgisi, termal analiz, yüzey topolojisi ve üretim süreçleri optimizasyonu.',
    // Resume
    resumeLabel: 'ÖZGEÇMİŞ', resumeTitle: 'Profesyonel Deneyim ve Eğitim',
    experienceTitle: 'Deneyim',
    job1Date: 'Ekim 2024 - Ekim 2025', job1Title: 'Üretim Mühendisi',
    job1Text: 'Üretim süreçleri, kalite kontrol, montaj operasyonları, stok yönetimi ve CAD/CAM destekli tasarım çalışmalarında görev aldım.',
    job2Date: 'Temmuz 2024 - Eylül 2024', job2Title: 'Makine Mühendisi Stajyeri',
    job2Text: 'Talaşsız imalat, lazer kesim, abkant pres, kaynaklı imalat, Ar-Ge ve kalite kontrol süreçlerinde aktif olarak yer aldım.',
    job3Date: 'Ocak 2024 - Şubat 2024', job3Title: 'Makine Mühendisi Stajyeri',
    job3Text: 'CAD/CAM programları, CNC freze kullanımı, 3 boyutlu parça tasarımı ve kalite kontrol çalışmalarında deneyim kazandım.',
    educationTitle: 'Eğitim', educationDegree: 'Makine Mühendisliği', educationSchool: 'Eskişehir Osmangazi Üniversitesi',
    technicalSkillsTitle: 'Teknik Beceriler',
    tagQuality: 'Kalite Kontrol', tagTolerance: 'Tolerans Analizi',
    pdfTitle: 'PDF Özgeçmiş', pdfText: 'Detaylı özgeçmişimi PDF olarak inceleyebilirsiniz.', pdfButton: "CV'yi Görüntüle",
    // Certificates
    certLabel: 'SERTİFİKALAR', certTitle: 'Kurs ve Sertifikalar',
    cert1Title: 'TEI TUSAŞ Motor Sanayii A.Ş. Eğitimi', cert1Text: 'Türbin motoru tasarımı, termal analiz, imalat ve kalite kontrol alanlarında eğitim.',
    cert2Title: 'Otomotiv Yaz Kampı', cert2Text: 'Hidrojen yakıtlı ve elektrikli araçlar hakkında teknik bilgiler edinilen eğitim programı.',
    cert3Title: 'Yalın Üretim', cert3Text: 'Üretim süreçlerinde verimlilik ve israf azaltma teknikleri üzerine eğitim.',
    cert4Title: 'Sac Metal Tasarımı', cert4Text: 'Sac metal parçaların tasarımı, katlama analizi ve üretim hazırlığı üzerine eğitim.',
    // Blog
    blogLabel: 'BLOG & NOTLAR', blogTitle: 'Teknik Yazılar',
    blogDesc: 'Mühendislik deneyimlerim, öğrendiklerim ve endüstri üzerine notlar.',
    blogReadMore: 'Devamını oku →',
    // Contact / Footer
    contactTitle: 'İletişime Geç', contactText: 'Benimle proje, tasarım veya üretim çalışmaları için iletişime geçebilirsiniz.',
    mailButton: 'Mail Gönder', footerText: '© 2026 İbrahim Eren Doruk. Tüm hakları saklıdır.',
    // Visitor bar
    visitorLive: 'Canlı ziyaretçi:', visitorTotal: 'Toplam görüntülenme:', visitorUnique: 'Tekil ziyaretçi:',
    // Page title & meta
    pageTitle: 'İbrahim Eren Doruk | Makine Mühendisi Portfolyosu',
    metaDesc: 'İbrahim Eren Doruk - Makine Mühendisi. CAD/CAM tasarımı, CNC işleme, sac metal tasarımı, 3D baskı, kalite kontrol ve üretim teknolojileri üzerine profesyonel portfolyo sitesi.',
    htmlLang: 'tr',
  },
  en: {
    navAbout: 'About', navProjects: 'Projects', navResearch: 'Research',
    navServices: 'Services', navSkills: 'Skills', navResume: 'Resume',
    navCertificates: 'Certificates', navContact: 'Contact', navBlog: 'Blog',
    contactButton: 'Get in Touch',
    heroTitle: 'İbrahim Eren\nDoruk.',
    heroText: 'Mechanical Engineering graduate from Eskişehir Osmangazi University. Proficient in CAD/CAM design, CNC machining, tolerance analysis, materials science, and quality control.',
    heroProjectButton: 'View My Projects ↗', status: '● Available',
    statProjects: 'Completed Projects', statExperience: 'Years Experience', statInternship: 'Internships & Jobs',
    aboutLabel: 'ABOUT ME',
    aboutTitle: 'A Mechanical Engineer passionate about aviation and automotive industries, continuously developing expertise in manufacturing technologies.',
    aboutText: 'I graduated from Eskişehir Osmangazi University in 2024 with a degree in Mechanical Engineering. I have proficiency in CAD/CAM design, CNC machining, tolerance analysis, materials science, and quality control. I closely follow technological innovations in the industry and focus on continuously improving my engineering skills.',
    projectsLabel: 'PROJECTS', projectsTitle: 'Design & Render Works',
    projectsDesc: 'A selection of CAD modeling, sheet metal design, prototyping, and 3D render projects.',
    filterAll: 'All', filterCAD: 'CAD', filterCAM: 'CAM', filter3D: '3D Print', filterRender: 'Render',
    project1Tag: 'SolidWorks / Sheet Metal / Render', project1Title: 'Sheet Metal Enclosure Design', project1Text: 'Modern sheet metal product design prepared with production-ready bending logic.',
    project2Tag: 'Fusion 360 / 3D Printing', project2Title: '3D Printed Prototype', project2Text: 'Prototype part design prepared for functional use.',
    project3Tag: 'Siemens NX / CAD', project3Title: 'Machine Part Design', project3Text: 'Engineering part modeling in accordance with technical specifications.',
    project4Tag: 'CAD / Render', project4Title: 'Industrial Product Render', project4Text: 'Product visualization suitable for presentations and catalogs.',
    project5Tag: 'Assembly / Technical Design', project5Title: 'Assembly Design', project5Text: 'Multi-part assembly structure and manufacturing preparation.',
    project6Tag: 'Production / CAD-CAM', project6Title: 'Production-Ready Design', project6Text: 'Manufacturing-ready design prepared with proper dimensioning and production logic.',
    researchLabel: 'RESEARCH', researchTitle: 'Academic Research',
    research1Title: 'Selective Laser Melting (SLM)', research1Text: 'Thesis on the surface topology and mechanical properties of AISI 316L stainless steel.',
    research2Title: 'Thermal Barrier Coatings', research2Text: 'Research on thermal barrier coating technologies and their industrial benefits.',
    research3Title: 'Wind Energy Potential', research3Text: "Report on Turkey's wind energy potential and wind turbines.",
    servicesLabel: 'SERVICES', servicesTitle: 'What I Do',
    service1Title: 'Sheet Metal Design', service1Text: 'Professional CAD design, technical drawings, bending and production prep for sheet metal parts.',
    service2Title: '3D Printing Orders', service2Text: 'Prototype and functional parts in PLA, ABS, PETG and more.',
    service3Title: 'Prototyping Services', service3Text: 'From idea to physical product: modeling, 3D printing, and testing.',
    skillsLabel: 'TECHNICAL SKILLS', skillsTitle: 'Technical Competencies',
    skill1Title: 'CAD & CAM', skill1Text: 'Design and CAM work with SolidWorks, Autodesk Fusion, Siemens NX and NX Manufacturing.',
    skill2Title: 'Manufacturing & Quality', skill2Text: 'CNC milling, laser cutting, press brake, welded fabrication, quality control and tolerance analysis.',
    skill3Title: 'Materials & Analysis', skill3Text: 'Materials science, thermal analysis, surface topology, and production process optimization.',
    resumeLabel: 'RESUME', resumeTitle: 'Professional Experience & Education',
    experienceTitle: 'Experience',
    job1Date: 'Oct 2024 - Oct 2025', job1Title: 'Production Engineer',
    job1Text: 'Involved in production processes, quality control, assembly operations, inventory management, and CAD/CAM-supported design work.',
    job2Date: 'Jul 2024 - Sep 2024', job2Title: 'Mechanical Engineering Intern',
    job2Text: 'Actively participated in non-chip manufacturing, laser cutting, press brake, welded fabrication, R&D, and quality control.',
    job3Date: 'Jan 2024 - Feb 2024', job3Title: 'Mechanical Engineering Intern',
    job3Text: 'Gained experience in CAD/CAM software, CNC milling, 3D part design, and quality control.',
    educationTitle: 'Education', educationDegree: 'Mechanical Engineering', educationSchool: 'Eskişehir Osmangazi University',
    technicalSkillsTitle: 'Technical Skills',
    tagQuality: 'Quality Control', tagTolerance: 'Tolerance Analysis',
    pdfTitle: 'PDF Resume', pdfText: 'You can view my detailed resume as a PDF.', pdfButton: 'View CV',
    certLabel: 'CERTIFICATES', certTitle: 'Courses & Certificates',
    cert1Title: 'TEI TUSAŞ Engine Industries Training', cert1Text: 'Training in turbine engine design, thermal analysis, manufacturing and quality control.',
    cert2Title: 'Automotive Summer Camp', cert2Text: 'Technical training on hydrogen-powered and electric vehicles.',
    cert3Title: 'Lean Manufacturing', cert3Text: 'Training on efficiency and waste reduction techniques in production processes.',
    cert4Title: 'Sheet Metal Design', cert4Text: 'Training on designing sheet metal parts, bend analysis, and production preparation.',
    blogLabel: 'BLOG & NOTES', blogTitle: 'Technical Writings',
    blogDesc: 'Notes on engineering experience, learnings, and industry insights.',
    blogReadMore: 'Read more →',
    contactTitle: 'Get in Touch', contactText: 'Feel free to contact me for project, design, or manufacturing work.',
    mailButton: 'Send Email', footerText: '© 2026 İbrahim Eren Doruk. All rights reserved.',
    visitorLive: 'Live visitors:', visitorTotal: 'Total views:', visitorUnique: 'Unique visitors:',
    pageTitle: 'İbrahim Eren Doruk | Mechanical Engineer Portfolio',
    metaDesc: 'İbrahim Eren Doruk - Mechanical Engineer. Professional portfolio in CAD/CAM design, CNC machining, sheet metal, 3D printing, and quality control.',
    htmlLang: 'en',
  },
  de: {
    navAbout: 'Über mich', navProjects: 'Projekte', navResearch: 'Forschung',
    navServices: 'Leistungen', navSkills: 'Kenntnisse', navResume: 'Lebenslauf',
    navCertificates: 'Zertifikate', navContact: 'Kontakt', navBlog: 'Blog',
    contactButton: 'Kontakt aufnehmen',
    heroTitle: 'İbrahim Eren\nDoruk.',
    heroText: 'Absolvent der Maschinenbau-Fakultät der Eskişehir Osmangazi Universität. Kompetent in CAD/CAM-Design, CNC-Bearbeitung, Toleranzanalyse, Werkstoffkunde und Qualitätskontrolle.',
    heroProjectButton: 'Projekte ansehen ↗', status: '● Verfügbar',
    statProjects: 'Abgeschlossene Projekte', statExperience: 'Jahre Erfahrung', statInternship: 'Praktika & Jobs',
    aboutLabel: 'ÜBER MICH',
    aboutTitle: 'Ein Maschinenbauingenieur mit Interesse an der Luft- und Raumfahrt- sowie Automobilindustrie, der sich in Fertigungstechnologien kontinuierlich weiterentwickelt.',
    aboutText: 'Ich habe 2024 meinen Abschluss in Maschinenbau an der Eskişehir Osmangazi Universität gemacht. Ich verfüge über Kenntnisse in CAD/CAM-Design, CNC-Bearbeitung, Toleranzanalyse, Werkstoffkunde und Qualitätskontrolle.',
    projectsLabel: 'PROJEKTE', projectsTitle: 'Design & Render-Arbeiten',
    projectsDesc: 'Eine Auswahl an CAD-Modellierung, Blechkonstruktion, Prototyping und 3D-Render-Projekten.',
    filterAll: 'Alle', filterCAD: 'CAD', filterCAM: 'CAM', filter3D: '3D-Druck', filterRender: 'Render',
    project1Tag: 'SolidWorks / Blech / Render', project1Title: 'Blechgehäuse-Design', project1Text: 'Modernes Blechproduktdesign mit fertigungsgerechter Biegelogik.',
    project2Tag: 'Fusion 360 / 3D-Druck', project2Title: '3D-Druck Prototyp', project2Text: 'Prototypenteiledesign für den funktionalen Einsatz.',
    project3Tag: 'Siemens NX / CAD', project3Title: 'Maschinenteiledesign', project3Text: 'Ingenieurteilemodellierung gemäß technischer Spezifikationen.',
    project4Tag: 'CAD / Render', project4Title: 'Industrieprodukt Render', project4Text: 'Produktvisualisierung für Präsentationen und Kataloge.',
    project5Tag: 'Montage / Technisches Design', project5Title: 'Montagedesign', project5Text: 'Mehrteilige Montagestruktur und Fertigungsvorbereitung.',
    project6Tag: 'Produktion / CAD-CAM', project6Title: 'Fertigungsbereites Design', project6Text: 'Fertigungsgerechtes Design mit korrekter Bemaßung und Produktionslogik.',
    researchLabel: 'FORSCHUNG', researchTitle: 'Akademische Forschung',
    research1Title: 'Selektives Lasersintern (SLM)', research1Text: 'Abschlussarbeit über Oberflächentopologie und mechanische Eigenschaften von AISI 316L Edelstahl.',
    research2Title: 'Thermische Schutzschichten', research2Text: 'Forschung zu thermischen Barrierebeschichtungstechnologien und ihren industriellen Vorteilen.',
    research3Title: 'Windenergiepotenzial', research3Text: 'Bericht über das Windenergiepotenzial der Türkei und Windkraftanlagen.',
    servicesLabel: 'LEISTUNGEN', servicesTitle: 'Was ich anbiete',
    service1Title: 'Blechkonstruktion', service1Text: 'Professionelles CAD-Design, technische Zeichnungen, Biegung und Produktionsvorbereitung für Blechteile.',
    service2Title: '3D-Druckaufträge', service2Text: 'Prototyp- und Funktionsteile in PLA, ABS, PETG und mehr.',
    service3Title: 'Prototyping-Dienstleistungen', service3Text: 'Von der Idee zum physischen Produkt: Modellierung, 3D-Druck und Test.',
    skillsLabel: 'TECHNISCHE KENNTNISSE', skillsTitle: 'Technische Kompetenzen',
    skill1Title: 'CAD & CAM', skill1Text: 'Design und CAM-Arbeit mit SolidWorks, Autodesk Fusion, Siemens NX und NX Manufacturing.',
    skill2Title: 'Fertigung & Qualität', skill2Text: 'CNC-Fräsen, Laserschneiden, Abkantpresse, Schweißkonstruktion, Qualitätskontrolle und Toleranzanalyse.',
    skill3Title: 'Werkstoffe & Analyse', skill3Text: 'Werkstoffkunde, Thermoanalyse, Oberflächentopologie und Optimierung von Produktionsprozessen.',
    resumeLabel: 'LEBENSLAUF', resumeTitle: 'Berufserfahrung & Ausbildung',
    experienceTitle: 'Erfahrung',
    job1Date: 'Okt 2024 – Okt 2025', job1Title: 'Produktionsingenieur',
    job1Text: 'Beteiligung an Produktionsprozessen, Qualitätskontrolle, Montagebetrieb, Lagerverwaltung und CAD/CAM-gestützter Konstruktion.',
    job2Date: 'Jul 2024 – Sep 2024', job2Title: 'Praktikant Maschinenbau',
    job2Text: 'Aktive Teilnahme an spanloser Fertigung, Laserschneiden, Abkantpresse, Schweißkonstruktion, F&E und Qualitätskontrolle.',
    job3Date: 'Jan 2024 – Feb 2024', job3Title: 'Praktikant Maschinenbau',
    job3Text: 'Erfahrungen in CAD/CAM-Software, CNC-Fräsen, 3D-Teiledesign und Qualitätskontrolle gesammelt.',
    educationTitle: 'Ausbildung', educationDegree: 'Maschinenbau', educationSchool: 'Eskişehir Osmangazi Universität',
    technicalSkillsTitle: 'Technische Fähigkeiten',
    tagQuality: 'Qualitätskontrolle', tagTolerance: 'Toleranzanalyse',
    pdfTitle: 'PDF-Lebenslauf', pdfText: 'Meinen ausführlichen Lebenslauf können Sie als PDF einsehen.', pdfButton: 'Lebenslauf anzeigen',
    certLabel: 'ZERTIFIKATE', certTitle: 'Kurse & Zertifikate',
    cert1Title: 'TEI TUSAŞ Triebwerksindustrie-Schulung', cert1Text: 'Schulung in Turbinenmotordesign, Thermoanalyse, Fertigung und Qualitätskontrolle.',
    cert2Title: 'Automotive Sommercamp', cert2Text: 'Technische Ausbildung zu wasserstoff- und elektrobetriebenen Fahrzeugen.',
    cert3Title: 'Lean Manufacturing', cert3Text: 'Schulung zu Effizienz- und Verschwendungsreduktionstechniken in Produktionsprozessen.',
    cert4Title: 'Blechkonstruktion', cert4Text: 'Schulung zu Blechteiledesign, Biegeanalyse und Produktionsvorbereitung.',
    blogLabel: 'BLOG & NOTIZEN', blogTitle: 'Technische Artikel',
    blogDesc: 'Notizen zu Ingenieurserfahrungen, Lernerkenntnissen und Brancheneinblicken.',
    blogReadMore: 'Weiterlesen →',
    contactTitle: 'Kontakt aufnehmen', contactText: 'Sie können mich für Projekt-, Design- oder Fertigungsarbeiten kontaktieren.',
    mailButton: 'E-Mail senden', footerText: '© 2026 İbrahim Eren Doruk. Alle Rechte vorbehalten.',
    visitorLive: 'Live-Besucher:', visitorTotal: 'Seitenaufrufe:', visitorUnique: 'Einzelbesucher:',
    pageTitle: 'İbrahim Eren Doruk | Maschinenbauingenieur Portfolio',
    metaDesc: 'İbrahim Eren Doruk - Maschinenbauingenieur. Professionelles Portfolio in CAD/CAM-Design, CNC-Bearbeitung, Blechkonstruktion, 3D-Druck und Qualitätskontrolle.',
    htmlLang: 'de',
  }
};

/* ─── LANGUAGE SWITCHER ───────────────────── */
let currentLang = localStorage.getItem('ied_lang') || 'tr';

function applyLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('ied_lang', lang);
  const t = translations[lang];

  // 1. html lang attribute
  document.documentElement.lang = t.htmlLang;

  // 2. <title>
  document.title = t.pageTitle;

  // 3. meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.metaDesc);

  // 4. All data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] === undefined) return;
    if (el.tagName === 'H1') {
      el.innerHTML = t[key].replace('\n', '<br>');
    } else {
      el.textContent = t[key];
    }
  });

  // 5. Filter bar labels (dynamically built, use data-filter-key)
  document.querySelectorAll('[data-filter-key]').forEach(btn => {
    const key = btn.dataset.filterKey;
    if (t[key]) btn.textContent = t[key];
  });

  // 6. Blog "read more" links
  document.querySelectorAll('.blog-read-more').forEach(el => {
    el.textContent = t.blogReadMore || 'Read more →';
  });

  // 7. Visitor bar labels
  const vLive  = document.querySelector('[data-visitor="live"]');
  const vTotal = document.querySelector('[data-visitor="total"]');
  const vUniq  = document.querySelector('[data-visitor="unique"]');
  if (vLive)  vLive.childNodes[0].textContent  = t.visitorLive  + ' ';
  if (vTotal) vTotal.childNodes[0].textContent = t.visitorTotal + ' ';
  if (vUniq)  vUniq.childNodes[0].textContent  = t.visitorUnique + ' ';

  // 8. Active button highlight
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function initLang() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
}

/* ─── LOADING SCREEN ──────────────────────── */
function initLoader() {
  window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (!loader) return;
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 700);
    }, 2200);
  });
}

/* ─── CURSOR GLOW ─────────────────────────── */
function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

/* ─── SCROLL PROGRESS BAR ─────────────────── */
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + '%';
  });
}

/* ─── MOBILE MENU ─────────────────────────── */
function initMobileMenu() {
  const btn  = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    btn.textContent = menu.classList.contains('active') ? '✕' : '☰';
  });
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('active');
      btn.textContent = '☰';
    });
  });
}

/* ─── REVEAL ON SCROLL ────────────────────── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animationPlayState = 'running';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => {
    el.style.animationPlayState = 'paused';
    io.observe(el);
  });
}

/* ─── PROJECT DATA ────────────────────────── */
const projectData = [
  {
    selector: '.project-showcase.large',
    category: 'cad',
    i18nTitle: 'project1Title', i18nTag: 'project1Tag', i18nDesc: 'project1Text',
    detail: { tr: 'Tasarımda SolidWorks Sheet Metal modülü kullanılmıştır. K-faktörü hesabı ve flat pattern çıkarma adımları tamamlanmış, üretime hazır teknik resimler oluşturulmuştur.', en: 'SolidWorks Sheet Metal module was used. K-factor calculation and flat pattern extraction were completed, and production-ready technical drawings were created.', de: 'Das SolidWorks-Blechmodul wurde verwendet. K-Faktor-Berechnung und Abwicklung wurden abgeschlossen, fertigungsgerechte technische Zeichnungen erstellt.' },
    img: 'images/render1.jpg',
  },
  {
    selector: '.project-showcase:nth-child(2)',
    category: '3d',
    i18nTitle: 'project2Title', i18nTag: 'project2Tag', i18nDesc: 'project2Text',
    detail: { tr: 'Autodesk Fusion 360 ile tasarlanan parça, FDM teknolojisi kullanılarak %20 doluluk oranıyla basılmıştır. Boyutsal doğruluk ±0.2 mm tolerans içinde elde edilmiştir.', en: 'Designed with Autodesk Fusion 360, the part was printed using FDM technology at 20% infill. Dimensional accuracy within ±0.2 mm tolerance was achieved.', de: 'Das mit Autodesk Fusion 360 konstruierte Teil wurde per FDM-Druck mit 20 % Fülldichte hergestellt. Maßgenauigkeit innerhalb von ±0,2 mm wurde erzielt.' },
    img: 'images/render2.jpg',
  },
  {
    selector: '.project-showcase:nth-child(3)',
    category: 'cad',
    i18nTitle: 'project3Title', i18nTag: 'project3Tag', i18nDesc: 'project3Text',
    detail: { tr: 'Siemens NX ortamında tasarlanan parça, ISO 2768 tolerans standartlarına uygun olarak modellenmiştir. Sonlu elemanlar analizi ile gerilme dağılımı incelenmiştir.', en: 'The part was modeled in Siemens NX in accordance with ISO 2768 tolerance standards. Stress distribution was analyzed using finite element analysis.', de: 'Das Teil wurde in Siemens NX nach ISO 2768 Toleranzstandards modelliert. Die Spannungsverteilung wurde mittels FEM-Analyse untersucht.' },
    img: 'images/render3.jpg',
  },
  {
    selector: '.project-showcase:nth-child(4)',
    category: 'render',
    i18nTitle: 'project4Title', i18nTag: 'project4Tag', i18nDesc: 'project4Text',
    detail: { tr: 'Keyshot render yazılımı kullanılarak HDRI aydınlatma ve gerçekçi malzeme atamaları yapılmıştır. Ürün kataloğu için yüksek çözünürlüklü çıktılar hazırlanmıştır.', en: 'HDRI lighting and realistic material assignments were made using Keyshot render software. High-resolution outputs were prepared for the product catalog.', de: 'HDRI-Beleuchtung und realistische Materialbelegungen wurden mit Keyshot erstellt. Hochauflösende Ausgaben für den Produktkatalog wurden vorbereitet.' },
    img: 'images/render4.jpg',
  },
  {
    selector: '.project-showcase:nth-child(5)',
    category: 'cad',
    i18nTitle: 'project5Title', i18nTag: 'project5Tag', i18nDesc: 'project5Text',
    detail: { tr: 'Montaj, 12 ayrı parçadan oluşmaktadır. Kinematik analiz ile mekanizmanın çalışma prensibi doğrulanmış, patlama görünümü teknik resmi oluşturulmuştur.', en: 'The assembly consists of 12 separate parts. The working principle was verified via kinematic analysis, and an exploded view technical drawing was created.', de: 'Die Baugruppe besteht aus 12 Einzelteilen. Der Arbeitsmechanismus wurde kinematisch verifiziert und eine Explosionszeichnung erstellt.' },
    img: 'images/render5.jpg',
  },
  {
    selector: '.project-showcase.wide',
    category: 'cam',
    i18nTitle: 'project6Title', i18nTag: 'project6Tag', i18nDesc: 'project6Text',
    detail: { tr: 'Siemens NX Manufacturing ile 3 eksenli takım yolları oluşturulmuş ve NC kodu üretilmiştir. Talaş kaldırma simülasyonu ile çarpışma kontrolü yapılmıştır.', en: '3-axis tool paths were created with Siemens NX Manufacturing and NC code was generated. Material removal simulation and collision checking were performed.', de: '3-Achs-Werkzeugwege wurden mit Siemens NX Manufacturing erstellt und NC-Code generiert. Zerspanungssimulation und Kollisionsprüfung wurden durchgeführt.' },
    img: 'images/render6.jpg',
  },
];

/* ─── PROJECT FILTER ──────────────────────── */
function buildFilterBar() {
  const gallery = document.querySelector('.project-gallery');
  if (!gallery) return;

  const bar = document.createElement('div');
  bar.className = 'filter-bar';

  const filters = [
    { key: 'all',    i18nKey: 'filterAll'    },
    { key: 'cad',    i18nKey: 'filterCAD'    },
    { key: 'cam',    i18nKey: 'filterCAM'    },
    { key: '3d',     i18nKey: 'filter3D'     },
    { key: 'render', i18nKey: 'filterRender' },
  ];

  filters.forEach(f => {
    const btn = document.createElement('button');
    btn.className    = 'filter-btn' + (f.key === 'all' ? ' active' : '');
    btn.textContent  = translations[currentLang][f.i18nKey] || f.key;
    btn.dataset.filter     = f.key;
    btn.dataset.filterKey  = f.i18nKey;   // for applyLang to update labels
    btn.addEventListener('click', () => {
      bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(f.key);
    });
    bar.appendChild(btn);
  });

  // Tag each showcase with its category
  projectData.forEach(p => {
    const el = gallery.querySelector(p.selector);
    if (el) el.dataset.category = p.category;
  });

  gallery.before(bar);
}

function applyFilter(key) {
  document.querySelectorAll('.project-showcase').forEach(el => {
    el.classList.toggle('hidden-project', key !== 'all' && el.dataset.category !== key);
  });
}

/* ─── PROJECT MODAL ───────────────────────── */
function buildModal() {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal-wrap">
      <button class="modal-close" id="modalClose">✕</button>
      <div class="modal">
        <img id="modalImg" src="" alt="">
        <div class="modal-body">
          <span class="modal-tag" id="modalTag"></span>
          <h2 id="modalTitle"></h2>
          <p id="modalDesc"></p>
          <p id="modalDetail"></p>
        </div>
      </div>
    </div>`;
  document.body.appendChild(backdrop);

  document.getElementById('modalClose').addEventListener('click', closeModal);
  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  const gallery = document.querySelector('.project-gallery');
  if (!gallery) return;

  projectData.forEach(p => {
    const el = gallery.querySelector(p.selector);
    if (!el) return;
    el.style.cursor = 'pointer';
    el.addEventListener('click', () => openModal(p));
  });
}

function openModal(p) {
  const t = translations[currentLang];
  document.getElementById('modalImg').src    = p.img;
  document.getElementById('modalImg').alt    = t[p.i18nTitle] || '';
  document.getElementById('modalTag').textContent    = t[p.i18nTag]  || '';
  document.getElementById('modalTitle').textContent  = t[p.i18nTitle] || '';
  document.getElementById('modalDesc').textContent   = t[p.i18nDesc]  || '';
  document.getElementById('modalDetail').textContent = p.detail[currentLang] || '';
  document.querySelector('.modal-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.querySelector('.modal-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── VISITOR COUNTER ─────────────────────── */
function buildVisitorBar() {
  let visits = parseInt(localStorage.getItem('ied_visits') || '0') + 1;
  localStorage.setItem('ied_visits', visits);
  const totalViews    = 1247 + visits * 3;
  const totalVisitors = 834  + visits;
  const t = translations[currentLang];

  const bar = document.createElement('div');
  bar.className = 'visitor-bar';
  bar.innerHTML = `
    <div class="visitor-stat" data-visitor="live">
      <span class="visitor-dot"></span>
      <span>${t.visitorLive} <strong>1</strong></span>
    </div>
    <div class="visitor-stat" data-visitor="total">
      <span>${t.visitorTotal} <strong>${totalViews.toLocaleString()}</strong></span>
    </div>
    <div class="visitor-stat" data-visitor="unique">
      <span>${t.visitorUnique} <strong>${totalVisitors.toLocaleString()}</strong></span>
    </div>`;

  const hero = document.querySelector('.hero');
  if (hero) hero.after(bar);
}

/* ─── BLOG SECTION ────────────────────────── */
const blogPosts = [
  {
    date:  { tr: 'Mayıs 2026',   en: 'May 2026',     de: 'Mai 2026'     },
    tag:   'CAD/CAM',
    title: { tr: "SolidWorks'te Sheet Metal Tasarımında Dikkat Edilmesi Gerekenler", en: 'Key Considerations in SolidWorks Sheet Metal Design', de: 'Wichtige Aspekte beim Blechkonstruktion in SolidWorks' },
    desc:  { tr: 'Büküm yarıçapı, K-faktörü ve flat pattern hesaplamalarında karşılaşılan yaygın hatalar ve çözümleri üzerine kısa bir rehber.', en: 'A short guide on common mistakes and solutions in bend radius, K-factor, and flat pattern calculations.', de: 'Ein kurzer Leitfaden zu häufigen Fehlern bei Biegeradius, K-Faktor und Abwicklungsberechnungen.' },
  },
  {
    date:  { tr: 'Mart 2026',    en: 'March 2026',   de: 'März 2026'    },
    tag:   'CNC / CAM',
    title: { tr: 'CNC Freze Programlamada Takım Yolu Optimizasyonu', en: 'Tool Path Optimization in CNC Milling Programming', de: 'Werkzeugwegoptimierung in der CNC-Frässprogrammierung' },
    desc:  { tr: 'NX Manufacturing ile 3 eksenli takım yolu oluştururken talaş yükü, ilerleme hızı ve güvenli yükseklik parametrelerinin önemi.', en: 'The importance of chip load, feed rate, and safe height parameters when creating 3-axis tool paths with NX Manufacturing.', de: 'Die Bedeutung von Spanvolumen, Vorschubgeschwindigkeit und Sicherheitshöhenparametern bei der Erstellung von 3-Achs-Werkzeugwegen mit NX Manufacturing.' },
  },
  {
    date:  { tr: 'Ocak 2026',    en: 'January 2026', de: 'Januar 2026'  },
    tag:   'Malzeme / Materials',
    title: { tr: 'AISI 316L ve Seçici Lazer Ergitme: Tez Sürecinden Notlar', en: 'AISI 316L and Selective Laser Melting: Notes from My Thesis', de: 'AISI 316L und selektives Lasersintern: Notizen aus meiner Abschlussarbeit' },
    desc:  { tr: 'Tez çalışmam sırasında SLM prosesiyle üretilen 316L numunelerin yüzey topolojisi ölçümlerinden öğrendiklerim.', en: 'What I learned from surface topology measurements of 316L specimens produced by the SLM process during my thesis.', de: 'Was ich bei der Oberflächentopologiemessung von 316L-Proben im SLM-Verfahren während meiner Abschlussarbeit gelernt habe.' },
  },
];

function buildBlogSection() {
  const contact = document.getElementById('iletisim');
  if (!contact) return;
  const t = translations[currentLang];

  const section = document.createElement('section');
  section.id        = 'blog';
  section.className = 'reveal';
  section.innerHTML = `
    <span class="section-label" data-i18n="blogLabel">${t.blogLabel}</span>
    <h2 data-i18n="blogTitle">${t.blogTitle}</h2>
    <p class="section-desc" data-i18n="blogDesc">${t.blogDesc}</p>
    <div class="blog-grid">
      ${blogPosts.map(p => `
        <div class="blog-card">
          <div class="blog-card-header">
            <span class="blog-date">${p.date[currentLang]}</span>
            <span class="blog-tag">${p.tag}</span>
            <h3>${p.title[currentLang]}</h3>
          </div>
          <p>${p.desc[currentLang]}</p>
          <span class="blog-read-more">${t.blogReadMore}</span>
        </div>`).join('')}
    </div>`;

  contact.before(section);

  // Add Blog link to nav
  const nav = document.getElementById('mobileMenu');
  if (nav) {
    const a = document.createElement('a');
    a.href        = '#blog';
    a.textContent = t.navBlog;
    a.dataset.i18n = 'navBlog';
    const mobileDiv = nav.querySelector('.mobile-lang');
    if (mobileDiv) nav.insertBefore(a, mobileDiv);

    const contactLink = nav.querySelector('a[href="#iletisim"]');
    if (contactLink) {
      const a2 = a.cloneNode(true);
      contactLink.before(a2);
    }
  }
}

/* ─── MAIN INIT ───────────────────────────── */
initLoader();
initCursor();

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initMobileMenu();
  buildFilterBar();
  buildModal();
  buildVisitorBar();
  buildBlogSection();
  initReveal();
  initLang();       // must be last — re-applies lang over all dynamic elements
});
