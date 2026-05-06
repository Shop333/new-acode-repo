import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About",
            services: "Services",
            barbers: "Barbers",
            reviews: "Reviews",
            contact: "Contact",
            book_now: "BOOK NOW",
            book_appointment: "BOOK APPOINTMENT"
          },
          hero: {
            subtitle: "EXPERIENCE THE FINEST TRADITION",
            tagline: "Where classic American craftsmanship meets modern style. Step into tradition and leave with confidence.",
            book_btn: "BOOK APPOINTMENT",
            services_btn: "VIEW SERVICES",
            stats: {
              exp: "Years Experience",
              clients: "Happy Clients",
              rating: "Rating Score"
            }
          },
          about: {
            label: "OUR STORY",
            heading_line1: "A CUT ABOVE",
            heading_line2: "THE REST",
            description1: "Since 2009, Gentleman's Blade has been the cornerstone of classic American barbering. We believe that a great haircut is more than just a service—it's an experience that builds confidence and community.",
            description2: "Our master barbers combine time-honored techniques with modern sensibilities, ensuring every client leaves looking and feeling their absolute best.",
            features: {
              award: { title: "Award Winning", desc: "Recognized excellence" },
              clock: { title: "Since 2009", desc: "15 years of tradition" },
              sparkles: { title: "Premium Products", desc: "Only the finest" },
              heart: { title: "Satisfaction", desc: "Guaranteed service" }
            },
            poster: {
              years_text: "YEARS OF EXCELLENCE",
              item1: "Classic Cuts",
              item2: "Straight Razor Shaves",
              item3: "Beard Trimming",
              item4: "Hot Towel Treatments",
              quote: "Where every cut tells a story"
            }
          },
          services: {
  label: "SERVICES & PRICING",
  heading: "OUR SERVICES",
  description: "Choose from our carefully curated selection of classic barbershop services, each delivered with precision and care.",
  book_btn: "BOOK THIS SERVICE",
  footer_text: "Not sure which service is right for you?",
  footer_btn: "SCHEDULE A CONSULTATION",
  list: {
    classic_cut: { name: "Classic Cut", desc: "Timeless precision haircut with scissor over comb technique.", price: "$40", duration: "45 min" },
    grooming: { name: "The Gentleman's Grooming", desc: "Full service including haircut, beard trim, and hot towel treatment.", price: "$65", duration: "75 min" },
    beard: { name: "Beard Trim & Shape", desc: "Expert beard sculpting with straight razor finish.", price: "$25", duration: "30 min" },
    shave: { name: "Hot Towel Shave", desc: "Traditional straight razor shave with premium creams.", price: "$55", duration: "50 min" }
  }
},
barbers: {
  label: "THE MASTERS",
  heading: "MEET THE ARTISTS",
  description: "Our team of skilled barbers brings decades of combined experience and a passion for the craft to every cut.",
  join: {
    title: "WANT TO JOIN OUR TEAM?",
    subtitle: "We're always looking for talented barbers who share our passion.",
    btn: "APPLY NOW"
  },
  list: {
    barber1: { name: 'John "The Craftsman" Smith', specialty: "Classic Cuts & Straight Razor", experience: "18 Years", bio: "Master of the traditional scissor over comb technique. Trained in London and Milan." },
    barber2: { name: 'Mike "The Artist" Johnson', specialty: "Beard Design & Modern Styles", experience: "12 Years", bio: "Award-winning beard sculptor known for precision fades and creative designs." },
    barber3: { name: 'Alex "The Innovator" Green', specialty: "Contemporary & Trend Cuts", experience: "10 Years", bio: "Bringing fresh perspectives from New York Fashion Week to Main Street." }
  }
},
testimonials: {
  label: "TESTIMONIALS",
  heading: "VOICES OF STYLE",
  stats: {
    clients: "Happy Clients",
    rating: "Average Rating",
    exp: "Years Experience",
    return: "Return Rate"
  },
  list: {
    client1: { role: "Business Executive", quote: "Best haircut I have had in years. The attention to detail and the atmosphere make this place special." },
    client2: { role: "Creative Director", quote: "John is a true artist. He understands hair and takes the time to get it right. Worth every penny." },
    client3: { role: "Local Business Owner", quote: "Been coming here for 5 years. The consistency and quality keep me coming back. My beard has never looked better." }
  }
},
contact: {
  label: "GET IN TOUCH",
  heading: "BOOK YOUR VISIT",
  form: {
    title: "SEND US A MESSAGE",
    name_label: "Your Name",
    email_label: "Email Address",
    phone_label: "Phone Number",
    message_label: "Your Message",
    message_placeholder: "Tell us about your desired service or any questions...",
    btn_send: "SEND MESSAGE",
    btn_submitting: "SENDING...",
    alert_success: "Thank you for your message! We will get back to you soon."
  },
  info: {
    visit: { label: "Visit Us", value: "123 Main Street, Downtown" },
    call: { label: "Call Us", value: "(555) 123-BLADE" },
    email: { label: "Email Us", value: "hello@gentlemansblade.com" },
    hours: { label: "Hours", value: "Mon-Sat: 9AM - 7PM" },
    map_hint: "Click for directions"
  },
  cta: {
    title: "PREFER TO CALL?",
    subtitle: "Our friendly staff is ready to schedule your appointment."
  }
},
footer: {
  brand_desc: "Where tradition meets modern style. Since 2009, we've been the cornerstone of classic American barbering.",
  links_title: "QUICK LINKS",
  contact_title: "CONTACT",
  hours_detailed: "Mon - Sat: 9AM - 7PM\nSunday: 10AM - 4PM",
  rights: "All rights reserved.",
  privacy: "Privacy Policy",
  terms: "Terms of Service"
}



        

        }
      },
      id: {
        translation: {
          nav: {
            home: "Beranda",
            about: "Tentang",
            services: "Layanan",
            barbers: "Barber",
            reviews: "Ulasan",
            contact: "Kontak",
            book_now: "PESAN SEKARANG",
            book_appointment: "BUAT JANJI TEMU"
          },
          hero: {
            subtitle: "RASAKAN TRADISI TERBAIK",
            tagline: "Di mana keahlian klasik Amerika bertemu dengan gaya modern. Melangkah ke dalam tradisi dan pulang dengan percaya diri.",
            book_btn: "BUAT JANJI TEMU",
            services_btn: "LIHAT LAYANAN",
            stats: {
              exp: "Tahun Pengalaman",
              clients: "Klien Puas",
              rating: "Skor Rating"
            }
          },
          about: {
            label: "CERITA KAMI",
            heading_line1: "LEBIH DARI",
            heading_line2: "SEKADAR CUKUR",
            description1: "Sejak 2009, Gentleman's Blade telah menjadi pilar pangkas rambut klasik Amerika. Kami percaya bahwa potongan rambut yang bagus lebih dari sekadar layanan—ini adalah pengalaman yang membangun kepercayaan diri dan komunitas.",
            description2: "Barber ahli kami menggabungkan teknik tradisional dengan kepekaan modern, memastikan setiap klien pulang dengan penampilan dan perasaan terbaik.",
            features: {
              award: { title: "Pemenang Penghargaan", desc: "Keunggulan yang diakui" },
              clock: { title: "Sejak 2009", desc: "15 tahun tradisi" },
              sparkles: { title: "Produk Premium", desc: "Hanya yang terbaik" },
              heart: { title: "Kepuasan", desc: "Layanan terjamin" }
            },
            poster: {
              years_text: "TAHUN KEUNGGULAN",
              item1: "Potongan Klasik",
              item2: "Cukur Pisau Lipat",
              item3: "Merapikan Janggut",
              item4: "Perawatan Handuk Hangat",
              quote: "Di mana setiap potongan menceritakan sebuah kisah"
            }
          },
          services: {
             label: "LAYANAN & HARGA",
                  heading: "LAYANAN KAMI",
                 description: "Pilih dari pilihan layanan pangkas rambut klasik kami yang dikurasi dengan cermat, masing-masing diberikan dengan presisi.",
              book_btn: "PESAN LAYANAN INI",
              footer_text: "Tidak yakin layanan mana yang tepat untuk Anda?",
            footer_btn: "JADWALKAN KONSULTASI",
           list: {
            classic_cut: { name: "Potongan Klasik", desc: "Potongan rambut presisi abadi dengan teknik gunting di atas sisir.", price: "Rp 40rb", duration: "45 mnt" },
           grooming: { name: "Gentleman's Grooming", desc: "Layanan lengkap termasuk potong rambut, merapikan janggut, dan handuk hangat.", price: "Rp 65rb", duration: "75 mnt" },
             beard: { name: "Cukur & Bentuk Janggut", desc: "Pembentukan janggut ahli dengan sentuhan akhir pisau cukur.", price: "Rp 25rb", duration: "30 mnt" },
            shave: { name: "Cukur Handuk Hangat", desc: "Cukur pisau cukur tradisional dengan krim premium.", price: "Rp 55rb", duration: "50 mnt" }
             }
           },
           barbers: {
  label: "PARA MAESTRO",
  heading: "KENALI PARA ARTIS KAMI",
  description: "Tim barber ahli kami membawa pengalaman gabungan selama puluhan tahun dan dedikasi penuh pada seni cukur.",
  join: {
    title: "INGIN BERGABUNG DENGAN TIM KAMI?",
    subtitle: "Kami selalu mencari barber berbakat yang memiliki semangat yang sama.",
    btn: "LAMAR SEKARANG"
  },
  list: {
    barber1: { name: 'John "Si Pengrajin" Smith', specialty: "Potongan Klasik & Pisau Cukur", experience: "18 Tahun", bio: "Ahli teknik gunting tradisional di atas sisir. Terlatih di London dan Milan." },
    barber2: { name: 'Mike "Si Seniman" Johnson', specialty: "Desain Janggut & Gaya Modern", experience: "12 Tahun", bio: "Pemenang penghargaan pemahat janggut yang dikenal dengan gradasi presisi." },
    barber3: { name: 'Alex "Si Inovator" Green', specialty: "Potongan Kontemporer & Tren", experience: "10 Tahun", bio: "Membawa perspektif segar dari New York Fashion Week ke jalan utama." }
  }
},
testimonials: {
  label: "TESTIMONI",
  heading: "SUARA GAYA",
  stats: {
    clients: "Klien Puas",
    rating: "Rating Rata-rata",
    exp: "Tahun Pengalaman",
    return: "Tingkat Kembali"
  },
  list: {
    client1: { role: "Eksekutif Bisnis", quote: "Potongan rambut terbaik selama bertahun-tahun. Perhatian pada detail dan suasananya membuat tempat ini istimewa." },
    client2: { role: "Direktur Kreatif", quote: "John adalah seniman sejati. Dia memahami rambut dan meluangkan waktu untuk melakukannya dengan benar." },
    client3: { role: "Pemilik Bisnis Lokal", quote: "Sudah datang ke sini selama 5 tahun. Konsistensi dan kualitas membuat saya terus kembali." }
  }
},
contact: {
  label: "HUBUNGI KAMI",
  heading: "RESERVASI KUNJUNGAN",
  form: {
    title: "KIRIM PESAN",
    name_label: "Nama Anda",
    email_label: "Alamat Email",
    phone_label: "Nomor Telepon",
    message_label: "Pesan Anda",
    message_placeholder: "Beri tahu kami tentang layanan yang diinginkan atau pertanyaan...",
    btn_send: "KIRIM PESAN",
    btn_submitting: "MENGIRIM...",
    alert_success: "Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda."
  },
  info: {
    visit: { label: "Kunjungi Kami", value: "Jl. Utama No. 123, Pusat Kota" },
    call: { label: "Hubungi Kami", value: "(555) 123-BLADE" },
    email: { label: "Email Kami", value: "hello@gentlemansblade.com" },
    hours: { label: "Jam Operasional", value: "Sen-Sab: 09:00 - 19:00" },
    map_hint: "Klik untuk petunjuk arah"
  },
  cta: {
    title: "LEBIH SUKA MENELEPON?",
    subtitle: "Staf kami yang ramah siap menjadwalkan janji temu Anda."
  }
},
footer: {
  brand_desc: "Di mana tradisi bertemu gaya modern. Sejak 2009, kami telah menjadi pilar pangkas rambut klasik Amerika.",
  links_title: "TAUTAN CEPAT",
  contact_title: "KONTAK",
  hours_detailed: "Sen - Sab: 09:00 - 19:00\nMinggu: 10:00 - 16:00",
  rights: "Hak cipta dilindungi undang-undang.",
  privacy: "Kebijakan Privasi",
  terms: "Syarat & Ketentuan"
}



        }
      },
      jp: {
        translation: {
          nav: {
            home: "ホーム",
            about: "概要",
            services: "サービス",
            barbers: "理容師",
            reviews: "レビュー",
            contact: "連絡先",
            book_now: "今すぐ予約",
            book_appointment: "予約する"
          },
          hero: {
            subtitle: "最高の伝統を体験する",
            tagline: "アメリカの伝統的な職人技と現代的なスタイルが融合する場所。伝統に足を踏み入れ、自信を持って帰りましょう。",
            book_btn: "予約する",
            services_btn: "サービスを見る",
            stats: {
              exp: "年間の経験",
              clients: "満足した顧客",
              rating: "評価スコア"
            }
          },
          about: {
            label: "ストーリー",
            heading_line1: "最高級の",
            heading_line2: "技術",
            description1: "2009年以来、Gentleman's Bladeはアメリカンクラシックな理容の礎となってきました。素晴らしいカットは単なるサービスではなく、自信とコミュニティを築く体験であると信じています。",
            description2: "私たちのマスターバーバーは、時代を超越した技術と現代的な感覚を組み合わせ、すべてのお客様が最高の状態で退店できるようにします。",
            features: {
              award: { title: "受賞歴あり", desc: "認められた卓越性" },
              clock: { title: "2009年創業", desc: "15年の伝統" },
              sparkles: { title: "高級製品", desc: "最高級のみを使用" },
              heart: { title: "満足保証", desc: "確かなサービス" }
            },
            poster: {
              years_text: "卓越した15年",
              item1: "クラシックカット",
              item2: "カミソリシェービング",
              item3: "ひげトリミング",
              item4: "ホットタオルケア",
              quote: "すべてのカットに物語がある"
            }
          },
          services: {
  label: "サービス & 料金",
  heading: "提供サービス",
  description: "伝統的な技術と丁寧なケアを融合させた、厳選されたバーバーメニューからお選びください。",
  book_btn: "このサービスを予約する",
  footer_text: "どのメニューが最適かお悩みですか？",
  footer_btn: "コンサルティングを予約する",
  list: {
    classic_cut: { 
      name: "クラシックカット", 
      desc: "櫛とハサミの伝統的な技術による、時代を超越した精密なヘアカット。", 
      price: "¥4,500", 
      duration: "45 分" 
    },
    grooming: { 
      name: "ジェントルマングルーミング", 
      desc: "カット、ひげ手入れ、ホットタオル、スタイリングを含むフルサービス。", 
      price: "¥7,500", 
      duration: "75 分" 
    },
    beard: { 
      name: "シェイプ & ビアードトリム", 
      desc: "カミソリ仕上げによるプロのひげスタイリングとトリミング。", 
      price: "¥2,800", 
      duration: "30 分" 
    },
    shave: { 
      name: "ホットタオルシェービング", 
      desc: "高級クリームとホットタオルを使用した、伝統的な直刃カミソリでのシェービング。", 
      price: "¥6,000", 
      duration: "50 分" 
    }
  }
},
barbers: {
  label: "マスターたち",
  heading: "アーティスト紹介",
  description: "当店の熟練したバーバーチームは、数十年の経験と職人技への情熱をすべてのカットに注いでいます。",
  join: {
    title: "チームに参加しませんか？",
    subtitle: "私たちは常に、情熱を共有できる才能あるバーバーを探しています。",
    btn: "今すぐ応募"
  },
  list: {
    barber1: { name: 'ジョン "ザ・クラフトマン" スミス', specialty: "クラシックカット & カミソリ", experience: "経験18年", bio: "伝統的なシザーオーバーコーム技術の達人。ロンドンとミラノで修行。" },
    barber2: { name: 'マイク "ザ・アーティスト" ジョンソン', specialty: "ひげデザイン & モダンスタイル", experience: "経験12年", bio: "精密なフェードとクリエイティブなデザインで知られる、受賞歴のあるひげ彫刻師。" },
    barber3: { name: 'アレックス "ザ・イノベーター" グリーン', specialty: "コンテンポラリー & トレンドカット", experience: "経験10年", bio: "ニューヨーク・ファッションウィークからの新鮮な視点をメインストリートに提供。" }
  }
},
testimonials: {
  label: "お客様の声",
  heading: "スタイルの評価",
  stats: {
    clients: "満足した顧客",
    rating: "平均評価",
    exp: "経験年数",
    return: "リピート率"
  },
  list: {
    client1: { role: "ビジネスエグゼクティブ", quote: "ここ数年で最高のカットです。細部へのこだわりと雰囲気がこの場所を特別なものにしています。" },
    client2: { role: "クリエイティブディレクター", quote: "ジョンは真のアーティストです。彼は髪を理解し、時間をかけて正しく仕上げてくれます。" },
    client3: { role: "地元事業主", quote: "5年間通い続けています。一貫性と品質のおかげで戻ってきます。ひげの調子も最高です。" }
  }
},
contact: {
  label: "お問い合わせ",
  heading: "ご予約はこちら",
  form: {
    title: "メッセージを送る",
    name_label: "お名前",
    email_label: "メールアドレス",
    phone_label: "電話番号",
    message_label: "メッセージ",
    message_placeholder: "ご希望のサービスやご質問をご記入ください...",
    btn_send: "メッセージを送信",
    btn_submitting: "送信中...",
    alert_success: "お問い合わせありがとうございます。近日中に返信いたします。"
  },
  info: {
    visit: { label: "アクセス", value: "ダウンタウン メインストリート123番地" },
    call: { label: "電話番号", value: "(555) 123-BLADE" },
    email: { label: "メール", value: "hello@gentlemansblade.com" },
    hours: { label: "営業時間", value: "月-土: 9:00 - 19:00" },
    map_hint: "クリックしてルートを表示"
  },
  cta: {
    title: "お電話でのご予約",
    subtitle: "スタッフが丁寧に対応し、予約を承ります。"
  }
},
footer: {
  brand_desc: "伝統とモダンなスタイルが融合する場所。2009年以来、私たちはアメリカの伝統的な理容の礎を築いてきました。",
  links_title: "クイックリンク",
  contact_title: "お問い合わせ",
  hours_detailed: "月 - 土: 9:00 - 19:00\n日曜日: 10:00 - 16:00",
  rights: "無断複写・転載を禁じます。",
  privacy: "プライバシーポリシー",
  terms: "利用規約"
}





        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
