(() => {
  const form = document.querySelector('.contact-form');
  const feedback = document.querySelector('.form-feedback');
  const revealElements = document.querySelectorAll('section, .info-card, .quality-panel, .contact-form, .contact-details');
  const languageSelect = document.getElementById('languageSelect');

  const translations = {
    cz: {
      nav_home: 'Hlavní stránka',
      nav_about: 'O nás',
      nav_quality: 'Kvalita',
      nav_contact: 'Kontakt',
      hero_eyebrow: 'Farmaceutický velkoobchod',
      hero_title: 'Jednoduchá spolupráce. <span>Stálá kvalita.</span>',
      hero_lead: 'Zajišťujeme profesionální skladové a logistické služby v souladu s právními předpisy a zásadami GDP. Zaměřujeme se na bezpečnost pacienta, transparentnost dodávek a dlouhodobou spolupráci.',
      hero_cta_contact: 'Kontaktujte nás',
      hero_cta_standards: 'Naše standardy',
      stat_gdp: 'Soulad s praxí',
      stat_control: 'Kontrola řetězce',
      stat_market: 'Domácí i mezinárodní trh',
      hero_card_title: 'Profesionální servis ve farmacii',
      hero_card_text: 'Dodáváme výhradně produkty od oprávněných a kvalifikovaných dodavatelů, které zůstávají v legálním dodavatelském řetězci od příjmu přes skladování až po dopravu k odběrateli.',
      hero_li_1: 'Kvalifikovaní partneři',
      hero_li_2: 'Monitorované skladování a přeprava',
      hero_li_3: 'Stabilní provozní standardy',
      about_eyebrow: 'O společnosti',
      about_title: 'Spolehlivý partner pro zdravotnický sektor',
      about_card_1_title: 'Bezpečnost pacienta',
      about_card_1_text: 'Každý krok v distribuci je pod kontrolou a navržen pro maximální bezpečnost léčiv.',
      about_card_2_title: 'Spolupráce',
      about_card_2_text: 'Budujeme dlouhodobé vztahy s dodavateli i zákazníky a přizpůsobujeme se potřebám zařízení.',
      about_card_3_title: 'Stálá kvalita služeb',
      about_card_3_text: 'Udržujeme vysoký standard práce ve skladu i dopravě s důrazem na konzistentní výsledky.',
      quality_eyebrow: 'Standardy',
      quality_title: 'Správná distribuční praxe (GDP)',
      quality_text: 'Jednáme v souladu s právními požadavky a GDP. Kontrolujeme podmínky skladování i přepravy, aby byl dodavatelský řetězec bezpečný od skladu až ke dveřím zařízení.',
      quality_li_1: 'Auditovatelné procesy',
      quality_li_2: 'Řízené podmínky skladování',
      quality_li_3: 'Monitorovaná doprava',
      quality_li_4: 'Plná provozní dokumentace',
      quality_panel_text: 'Adresu skladu a kontakty držíme transparentně a snadno dostupné.',
      label_warehouse: 'Adresa skladu',
      label_email: 'E-mail',
      label_phones: 'Telefony',
      contact_eyebrow: 'Kontakt',
      contact_title: 'Zavolejte, napište nebo pošlete krátkou zprávu',
      form_name: 'Jméno a příjmení',
      form_email: 'E-mail',
      form_message: 'Zpráva',
      ph_name: 'Vaše jméno',
      ph_email: 'vas@email.cz',
      ph_message: 'Napište nám, s čím vám můžeme pomoci',
      form_note: 'Odezva co nejrychleji v pracovních dnech.',
      form_submit: 'Odeslat zprávu',
      contact_lang: 'EN/PL, CZ/PL/EN',
      contact_hours: 'Po-Pá 8:00-16:00',
      footer_copy: '© 2026 ABC Pharma s.r.o. Všechna práva vyhrazena.',
      footer_top: 'Zpět nahoru <i class="bi bi-arrow-up-right"></i>',
      form_error: 'Prosím vyplňte všechna povinná pole.',
      form_success: 'Děkujeme, vaše zpráva byla přijata.',
      click_for_more: 'Klikněte pro více',
      modal_patient_eyebrow: 'Bezpečnost a spolupráce',
      modal_patient_title: 'Bezpečnost pacienta a partnerská spolupráce',
      modal_patient_text_1: 'V ABC Pharma klademe maximální důraz na bezpečnost pacientů. Každý krok v našem distribučním řetězci je pečlivě kontrolován a navržen tak, aby zajistil maximální bezpečnost léčiv od výrobce až k pacientovi.',
      modal_patient_feat_1_title: 'Kontrola kvality',
      modal_patient_feat_1_text: 'Pravidelné audity a kontroly všech partnerů v dodavatelském řetězci.',
      modal_patient_feat_2_title: 'Teplotní monitoring',
      modal_patient_feat_2_text: 'Nepřetržité sledování teploty skladování a přepravy léčiv.',
      modal_patient_feat_3_title: 'Dlouhodobá spolupráce',
      modal_patient_feat_3_text: 'Budujeme trvalé vztahy s dodavateli i zákazníky založené na důvěře.',
      modal_consistency_eyebrow: 'Kvalita služeb',
      modal_consistency_title: 'Stálá kvalita služeb',
      modal_consistency_text_1: 'Udržujeme vysoký standard práce ve skladu i dopravě s důrazem na konzistentní a spolehlivé výsledky. Naše služby jsou navrženy tak, aby splňovaly nejvyšší požadavky farmaceutického průmyslu.',
      modal_consistency_feat_1_title: 'Standardy GDP',
      modal_consistency_feat_1_text: 'Plná shoda s požadavky Správné distribuční praxe (GDP).',
      modal_consistency_feat_2_title: 'Auditovatelné procesy',
      modal_consistency_feat_2_text: 'Transparentní a zdokumentované procesy připravené na jakýkoliv audit.',
      modal_consistency_feat_3_title: 'Spolehlivá logistika',
      modal_consistency_feat_3_text: 'Rychlé a bezpečné dodávky díky modernímu vozovému parku.',
      modal_collaboration_eyebrow: 'Spolupráce',
      modal_collaboration_title: 'Partnerská spolupráce',
      modal_collaboration_text_1: 'Budujeme dlouhodobé vztahy s dodavateli i zákazníky založené na důvěře, transparentnosti a vzájemné spolupráci. Naše partnerství je klíčem k úspěchu v oblasti farmaceutické distribuce.',
      modal_collaboration_feat_1_title: 'Důvěra a spolehlivost',
      modal_collaboration_feat_1_text: 'Vztahy založené na poctivosti, transparentnosti a spolehlivosti v každém kroku spolupráce.',
      modal_collaboration_feat_2_title: 'Flexibilní partnerství',
      modal_collaboration_feat_2_text: 'Přizpůsobujeme se individuálním potřebám každého zařízení a partnera.',
      modal_collaboration_feat_3_title: 'Společný růst',
      modal_collaboration_feat_3_text: 'Podporujeme rozvoj našich partnerů prostřednictvím sdílení znalostí a zkušeností.'
    },
    en: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_quality: 'Quality',
      nav_contact: 'Contact',
      hero_eyebrow: 'Pharmaceutical wholesale',
      hero_title: 'Simple collaboration. <span>Consistent quality.</span>',
      hero_lead: 'We provide professional warehousing and logistics services in line with legal regulations and GDP principles. Our focus is patient safety, transparent supply, and long-term partnerships.',
      hero_cta_contact: 'Contact us',
      hero_cta_standards: 'Our standards',
      stat_gdp: 'GDP compliance',
      stat_control: 'Chain control',
      stat_market: 'Domestic and international market',
      hero_card_title: 'Professional pharmaceutical service',
      hero_card_text: 'We deliver only products from authorized and qualified suppliers, kept in the legal supply chain from intake through storage to final transport.',
      hero_li_1: 'Qualified partners',
      hero_li_2: 'Monitored storage and transport',
      hero_li_3: 'Stable operational standards',
      about_eyebrow: 'About company',
      about_title: 'Reliable partner for the healthcare sector',
      about_card_1_title: 'Patient safety',
      about_card_1_text: 'Each distribution step is controlled and designed for maximum medicine safety.',
      about_card_2_title: 'Collaboration',
      about_card_2_text: 'We build long-term relationships with suppliers and customers and adapt to facility needs.',
      about_card_3_title: 'Service consistency',
      about_card_3_text: 'We maintain high standards in warehousing and transport with focus on predictable results.',
      quality_eyebrow: 'Standards',
      quality_title: 'Good Distribution Practice (GDP)',
      quality_text: 'We operate in compliance with legal requirements and GDP. Storage and transport conditions are controlled to keep the supply chain safe from warehouse to delivery point.',
      quality_li_1: 'Auditable processes',
      quality_li_2: 'Controlled storage conditions',
      quality_li_3: 'Monitored transport',
      quality_li_4: 'Complete operational documentation',
      quality_panel_text: 'Warehouse address and contacts are kept transparent and easily available.',
      label_warehouse: 'Warehouse address',
      label_email: 'Email',
      label_phones: 'Phones',
      contact_eyebrow: 'Contact',
      contact_title: 'Call, write, or send a short message',
      form_name: 'Full name',
      form_email: 'Email',
      form_message: 'Message',
      ph_name: 'Your name',
      ph_email: 'you@email.com',
      ph_message: 'Tell us how we can help you',
      form_note: 'Fast response during working days.',
      form_submit: 'Send message',
      contact_lang: 'EN/PL, CZ/PL/EN',
      contact_hours: 'Mon-Fri 8:00-16:00',
      footer_copy: '© 2026 ABC Pharma s.r.o. All rights reserved.',
      footer_top: 'Back to top <i class="bi bi-arrow-up-right"></i>',
      form_error: 'Please fill in all required fields.',
      form_success: 'Thank you, your message has been received.',
      click_for_more: 'Click for more',
      modal_patient_eyebrow: 'Safety and collaboration',
      modal_patient_title: 'Patient safety and partner collaboration',
      modal_patient_text_1: 'At ABC Pharma, we place maximum emphasis on patient safety. Every step in our distribution chain is carefully controlled and designed to ensure maximum medicine safety from manufacturer to patient.',
      modal_patient_feat_1_title: 'Quality control',
      modal_patient_feat_1_text: 'Regular audits and checks of all partners in the supply chain.',
      modal_patient_feat_2_title: 'Temperature monitoring',
      modal_patient_feat_2_text: 'Continuous monitoring of storage and transport temperature for medicines.',
      modal_patient_feat_3_title: 'Long-term cooperation',
      modal_patient_feat_3_text: 'We build lasting relationships with suppliers and customers based on trust.',
      modal_consistency_eyebrow: 'Service quality',
      modal_consistency_title: 'Service consistency',
      modal_consistency_text_1: 'We maintain high standards in warehousing and transport with focus on predictable results. Our services are designed to meet the highest requirements of the pharmaceutical industry.',
      modal_consistency_feat_1_title: 'GDP standards',
      modal_consistency_feat_1_text: 'Full compliance with Good Distribution Practice (GDP) requirements.',
      modal_consistency_feat_2_title: 'Auditable processes',
      modal_consistency_feat_2_text: 'Transparent and documented processes ready for any audit.',
      modal_consistency_feat_3_title: 'Reliable logistics',
      modal_consistency_feat_3_text: 'Fast and safe deliveries thanks to a modern fleet.',
      modal_collaboration_eyebrow: 'Collaboration',
      modal_collaboration_title: 'Partner collaboration',
      modal_collaboration_text_1: 'We build long-term relationships with suppliers and customers based on trust, transparency, and mutual cooperation. Our partnerships are key to success in pharmaceutical distribution.',
      modal_collaboration_feat_1_title: 'Trust and reliability',
      modal_collaboration_feat_1_text: 'Relationships based on honesty, transparency, and reliability at every step of cooperation.',
      modal_collaboration_feat_2_title: 'Flexible partnership',
      modal_collaboration_feat_2_text: 'We adapt to the individual needs of each facility and partner.',
      modal_collaboration_feat_3_title: 'Joint growth',
      modal_collaboration_feat_3_text: 'We support the development of our partners through knowledge and experience sharing.'
    },
    // pl: {
    //   nav_home: 'Strona główna',
    //   nav_about: 'O nas',
    //   nav_quality: 'Jakość',
    //   nav_contact: 'Kontakt',
    //   hero_eyebrow: 'Hurt farmaceutyczny',
    //   hero_title: 'Prosta współpraca. <span>Stała jakość.</span>',
    //   hero_lead: 'Zapewniamy profesjonalne usługi magazynowe i logistyczne zgodnie z przepisami prawa oraz zasadami GDP. Skupiamy się na bezpieczeństwie pacjenta, przejrzystych dostawach i długoterminowej współpracy.',
    //   hero_cta_contact: 'Skontaktuj się z nami',
    //   hero_cta_standards: 'Nasze standardy',
    //   stat_gdp: 'Zgodność z GDP',
    //   stat_control: 'Kontrola łańcucha',
    //   stat_market: 'Rynek krajowy i międzynarodowy',
    //   hero_card_title: 'Profesjonalna obsługa w farmacji',
    //   hero_card_text: 'Dostarczamy wyłącznie produkty od uprawnionych i kwalifikowanych dostawców, które pozostają w legalnym łańcuchu dostaw od przyjęcia przez magazynowanie aż po transport.',
    //   hero_li_1: 'Kwalifikowani partnerzy',
    //   hero_li_2: 'Monitorowane magazynowanie i transport',
    //   hero_li_3: 'Stabilne standardy operacyjne',
    //   about_eyebrow: 'O firmie',
    //   about_title: 'Rzetelny partner dla sektora ochrony zdrowia',
    //   about_card_1_title: 'Bezpieczeństwo pacjenta',
    //   about_card_1_text: 'Każdy etap dystrybucji jest kontrolowany i zaprojektowany dla maksymalnego bezpieczeństwa leków.',
    //   about_card_2_title: 'Współpraca',
    //   about_card_2_text: 'Budujemy długoterminowe relacje z dostawcami i klientami oraz dopasowujemy się do potrzeb placówek.',
    //   about_card_3_title: 'Stała jakość usług',
    //   about_card_3_text: 'Utrzymujemy wysoki standard pracy w magazynie i transporcie z naciskiem na powtarzalne wyniki.',
    //   quality_eyebrow: 'Standardy',
    //   quality_title: 'Dobra Praktyka Dystrybucyjna (GDP)',
    //   quality_text: 'Działamy zgodnie z wymaganiami prawnymi i GDP. Kontrolujemy warunki magazynowania i transportu, aby łańcuch dostaw był bezpieczny od magazynu do odbiorcy.',
    //   quality_li_1: 'Procesy możliwe do audytu',
    //   quality_li_2: 'Kontrolowane warunki magazynowe',
    //   quality_li_3: 'Monitorowany transport',
    //   quality_li_4: 'Pełna dokumentacja operacyjna',
    //   quality_panel_text: 'Adres magazynu i kontakty są transparentne i łatwo dostępne.',
    //   label_warehouse: 'Adres magazynu',
    //   label_email: 'E-mail',
    //   label_phones: 'Telefony',
    //   contact_eyebrow: 'Kontakt',
    //   contact_title: 'Zadzwoń, napisz lub wyślij krótką wiadomość',
    //   form_name: 'Imię i nazwisko',
    //   form_email: 'E-mail',
    //   form_message: 'Wiadomość',
    //   ph_name: 'Twoje imię',
    //   ph_email: 'twoj@email.com',
    //   ph_message: 'Napisz, w czym możemy pomóc',
    //   form_note: 'Szybka odpowiedź w dni robocze.',
    //   form_submit: 'Wyślij wiadomość',
    //   contact_lang: 'EN/PL, CZ/PL/EN',
    //   contact_hours: 'Pon-Pt 8:00-16:00',
    //   footer_copy: '© 2026 ABC Pharma s.r.o. Wszelkie prawa zastrzeżone.',
    //   footer_top: 'Powrót na górę <i class="bi bi-arrow-up-right"></i>',
    //   form_error: 'Proszę uzupełnić wszystkie wymagane pola.',
    //   form_success: 'Dziękujemy, Twoja wiadomość została odebrana.',
    //   click_for_more: 'Kliknij, aby zobaczyć więcej',
    //   modal_patient_eyebrow: 'Bezpieczeństwo i współpraca',
    //   modal_patient_title: 'Bezpieczeństwo pacjenta i partnerska współpraca',
    //   modal_patient_text_1: 'W ABC Pharma kładziemy maksymalny nacisk na bezpieczeństwo pacjentów. Każdy krok w naszym łańcuchu dystrybucji jest starannie kontrolowany i zaprojektowany tak, aby zapewnić maksymalne bezpieczeństwo leków od producenta do pacjenta.',
    //   modal_patient_feat_1_title: 'Kontrola jakości',
    //   modal_patient_feat_1_text: 'Regularne audyty i kontrole wszystkich partnerów w łańcuchu dostaw.',
    //   modal_patient_feat_2_title: 'Monitorowanie temperatury',
    //   modal_patient_feat_2_text: 'Ciągłe monitorowanie temperatury przechowywania i transportu leków.',
    //   modal_patient_feat_3_title: 'Długoterminowa współpraca',
    //   modal_patient_feat_3_text: 'Budujemy trwałe relacje z dostawcami i klientami oparte na zaufaniu.',
    //   modal_consistency_eyebrow: 'Jakość usług',
    //   modal_consistency_title: 'Stała jakość usług',
    //   modal_consistency_text_1: 'Utrzymujemy wysoki standard pracy w magazynie i transporcie z naciskiem na przewidywalne rezultaty. Nasze usługi są zaprojektowane tak, aby spełniać najwyższe wymagania przemysłu farmaceutycznego.',
    //   modal_consistency_feat_1_title: 'Standardy GDP',
    //   modal_consistency_feat_1_text: 'Pełna zgodność z wymaganiami Dobrej Praktyki Dystrybucyjnej (GDP).',
    //   modal_consistency_feat_2_title: 'Procesy możliwe do audytu',
    //   modal_consistency_feat_2_text: 'Przejrzyste i udokumentowane procesy gotowe na każdy audyt.',
    //   modal_consistency_feat_3_title: 'Niezawodna logistyka',
    //   modal_consistency_feat_3_text: 'Szybkie i bezpieczne dostawy dzięki nowoczesnej flocie.',
    //   modal_collaboration_eyebrow: 'Współpraca',
    //   modal_collaboration_title: 'Partnerska współpraca',
    //   modal_collaboration_text_1: 'Budujemy długoterminowe relacje z dostawcami i klientami oparte na zaufaniu, przejrzystości i wzajemnej współpracy. Nasze partnerstwo jest kluczem do sukcesu w dystrybucji farmaceutycznej.',
    //   modal_collaboration_feat_1_title: 'Zaufanie i niezawodność',
    //   modal_collaboration_feat_1_text: 'Relacje oparte na uczciwości, przejrzystości i niezawodności na każdym etapie współpracy.',
    //   modal_collaboration_feat_2_title: 'Elastyczne partnerstwo',
    //   modal_collaboration_feat_2_text: 'Dostosowujemy się do indywidualnych potrzeb każdej placówki i partnera.',
    //   modal_collaboration_feat_3_title: 'Wspólny rozwój',
    //   modal_collaboration_feat_3_text: 'Wspieramy rozwój naszych partnerów poprzez dzielenie się wiedzą i doświadczeniem.'
    // }
    en: {
  nav_home: 'Home',
  nav_about: 'About Us',
  nav_quality: 'Quality',
  nav_contact: 'Contact',

  hero_eyebrow: 'Pharmaceutical wholesaler',
  hero_title: 'Simple cooperation. <span>Consistent quality.</span>',
  hero_lead: 'We provide professional warehousing and logistics services in compliance with legal regulations and GDP principles. We focus on patient safety, transparent deliveries, and long-term cooperation.',
  hero_cta_contact: 'Contact us',
  hero_cta_standards: 'Our standards',

  stat_gdp: 'GDP Compliance',
  stat_control: 'Supply Chain Control',
  stat_market: 'Domestic and International Market',

  hero_card_title: 'Professional pharmaceutical service',
  hero_card_text: 'We supply only products from authorized and qualified suppliers that remain within the legal supply chain from receipt through storage to transportation.',
  hero_li_1: 'Qualified partners',
  hero_li_2: 'Monitored storage and transport',
  hero_li_3: 'Stable operational standards',

  about_eyebrow: 'About the Company',
  about_title: 'A reliable partner for the healthcare sector',
  about_card_1_title: 'Patient Safety',
  about_card_1_text: 'Every stage of distribution is controlled and designed for maximum medicine safety.',
  about_card_2_title: 'Cooperation',
  about_card_2_text: 'We build long-term relationships with suppliers and clients and adapt to the needs of healthcare facilities.',
  about_card_3_title: 'Consistent Service Quality',
  about_card_3_text: 'We maintain high standards in warehousing and transport with a focus on repeatable results.',

  quality_eyebrow: 'Standards',
  quality_title: 'Good Distribution Practice (GDP)',
  quality_text: 'We operate in accordance with legal requirements and GDP standards. We control storage and transportation conditions to ensure a safe supply chain from warehouse to recipient.',
  quality_li_1: 'Auditable processes',
  quality_li_2: 'Controlled storage conditions',
  quality_li_3: 'Monitored transport',
  quality_li_4: 'Full operational documentation',
  quality_panel_text: 'Warehouse address and contact details are transparent and easily accessible.',

  label_warehouse: 'Warehouse Address',
  label_email: 'Email',
  label_phones: 'Phone Numbers',

  contact_eyebrow: 'Contact',
  contact_title: 'Call, write or send a short message',
  form_name: 'Full Name',
  form_email: 'Email',
  form_message: 'Message',
  ph_name: 'Your name',
  ph_email: 'your@email.com',
  ph_message: 'Write how we can help you',
  form_note: 'Quick response on business days.',
  form_submit: 'Send message',

  contact_lang: 'EN/PL, CZ/PL/EN',
  contact_hours: 'Mon–Fri 8:00–16:00',

  footer_copy: '© 2026 ABC Pharma s.r.o. All rights reserved.',
  footer_top: 'Back to top <i class="bi bi-arrow-up-right"></i>',

  form_error: 'Please fill in all required fields.',
  form_success: 'Thank you, your message has been received.',
  click_for_more: 'Click to see more',

  modal_patient_eyebrow: 'Safety and Cooperation',
  modal_patient_title: 'Patient Safety and Partnership',
  modal_patient_text_1: 'At ABC Pharma, we place maximum emphasis on patient safety. Every step in our distribution chain is carefully controlled and designed to ensure maximum medicine safety from manufacturer to patient.',
  modal_patient_feat_1_title: 'Quality Control',
  modal_patient_feat_1_text: 'Regular audits and inspections of all supply chain partners.',
  modal_patient_feat_2_title: 'Temperature Monitoring',
  modal_patient_feat_2_text: 'Continuous monitoring of medicine storage and transport temperatures.',
  modal_patient_feat_3_title: 'Long-term Cooperation',
  modal_patient_feat_3_text: 'We build lasting relationships with suppliers and clients based on trust.',

  modal_consistency_eyebrow: 'Service Quality',
  modal_consistency_title: 'Consistent Service Quality',
  modal_consistency_text_1: 'We maintain high standards in warehousing and transport with a focus on predictable results. Our services are designed to meet the highest requirements of the pharmaceutical industry.',
  modal_consistency_feat_1_title: 'GDP Standards',
  modal_consistency_feat_1_text: 'Full compliance with Good Distribution Practice (GDP) requirements.',
  modal_consistency_feat_2_title: 'Auditable Processes',
  modal_consistency_feat_2_text: 'Transparent and documented processes ready for any audit.',
  modal_consistency_feat_3_title: 'Reliable Logistics',
  modal_consistency_feat_3_text: 'Fast and secure deliveries thanks to a modern fleet.',

  modal_collaboration_eyebrow: 'Cooperation',
  modal_collaboration_title: 'Partnership Cooperation',
  modal_collaboration_text_1: 'We build long-term relationships with suppliers and clients based on trust, transparency, and mutual cooperation. Our partnership is the key to success in pharmaceutical distribution.',
  modal_collaboration_feat_1_title: 'Trust and Reliability',
  modal_collaboration_feat_1_text: 'Relationships based on honesty, transparency, and reliability at every stage of cooperation.',
  modal_collaboration_feat_2_title: 'Flexible Partnership',
  modal_collaboration_feat_2_text: 'We adapt to the individual needs of each facility and partner.',
  modal_collaboration_feat_3_title: 'Shared Growth',
  modal_collaboration_feat_3_text: 'We support our partners’ growth by sharing knowledge and experience.'
}
  };
document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("detailModal");
  const closeBtn = document.querySelector(".modal-close");

  // Open modal when card is clicked
  document.querySelectorAll(".info-card").forEach(card => {
    card.addEventListener("click", function () {

      const pageName = this.getAttribute("data-modal-open");

      // Show modal
      modal.classList.add("active");

      // Hide all pages
      document.querySelectorAll(".modal-page").forEach(page => {
        page.classList.remove("active");
      });

      // Show selected page
      const activePage = document.querySelector(
        `.modal-page[data-page="${pageName}"]`
      );

      if (activePage) {
        activePage.classList.add("active");
      }
    });
  });

  // Close modal
  closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
  });

  // Close when clicking outside container
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

});
  const applyTranslations = (lang) => {
    const dict = translations[lang] || translations.cz;
    document.documentElement.lang = lang === 'cz' ? 'cs' : lang;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      if (dict[key]) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    const footerTop = document.querySelector('[data-i18n="footer_top"]');
    if (footerTop && dict.footer_top) {
      footerTop.innerHTML = dict.footer_top;
    }

    localStorage.setItem('siteLang', lang);
  };

  const initialLang = localStorage.getItem('siteLang') || 'cz';
  if (languageSelect) {
    languageSelect.value = translations[initialLang] ? initialLang : 'cz';
    applyTranslations(languageSelect.value);
    languageSelect.addEventListener('change', (event) => applyTranslations(event.target.value));
  }

  revealElements.forEach((el) => el.classList.add('reveal'));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => io.observe(el));

  if (form && feedback) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');
      const activeLang = localStorage.getItem('siteLang') || 'cz';
      const dict = translations[activeLang] || translations.cz;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        feedback.textContent = dict.form_error;
        feedback.style.color = '#b14235';
        return;
      }

      feedback.textContent = dict.form_success;
      feedback.style.color = '#0a5a89';
      form.reset();
    });
  }

  // Modal functionality for detailed pages
  const modal = document.getElementById('detailModal');
  const modalCards = document.querySelectorAll('[data-modal-open]');
  const modalCloseBtn = document.querySelector('.modal-close');
  const modalPages = document.querySelectorAll('.modal-page');

  // Debug logging
  console.log('Modal element:', modal);
  console.log('Modal cards:', modalCards);
  console.log('Modal pages:', modalPages);

  const openModal = (pageName) => {
    console.log('Opening modal for:', pageName);
    if (!modal) {
      console.error('Modal element not found!');
      return;
    }
    
    // Hide all pages first
    modalPages.forEach(page => {
      page.style.display = 'none';
    });
    
    // Show the requested page
    const targetPage = modal.querySelector(`.modal-page[data-page="${pageName}"]`);
    console.log('Target page:', targetPage);
    if (targetPage) {
      targetPage.style.display = 'block';
    }
    
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    console.log('Modal should be visible now');
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Add click handlers to cards with data-modal-open attribute
  modalCards.forEach(card => {
    // Debug: log each card
    console.log('Card found:', card, 'data-modal-open:', card.getAttribute('data-modal-open'));
    
card.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log('Card clicked!');
      const modalName = card.getAttribute('data-modal-open');
      console.log('Modal name:', modalName);
      if (modalName) {
        openModal(modalName);
      }
    });
    
    // Add keyboard support for Enter key
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        console.log('Card Enter pressed!');
        const modalName = card.getAttribute('data-modal-open');
        if (modalName) {
          openModal(modalName);
        }
      }
    });
  });

  // Close button handler
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  // Close on backdrop click
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
})();
