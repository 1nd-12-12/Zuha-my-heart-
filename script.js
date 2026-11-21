(() => {
  'use strict';

  const SPECIAL_DATE_ISO = '2025-02-14T00:00:00';
  const CHAPTER_ANIMATION_DURATION_MS = 6800;

  const PROGRESSIVE_LINES = [
    'Z💐',
    'ZU♥️',
    'ZUH💓',
    'ZUHA👾',
    'ZUHA I💞',
    'ZUHA I L✨',
    'ZUHA I LO❤️‍🩹',
    'ZUHA I LOV🫀',
    'ZUHA I LOVE🤍',
    'ZUHA I LOVE Y🖤',
    'ZUHA I LOVE YO🤎',
    'ZUHA I LOVE YOU 🫂',
    'ZUHA I LOVE YOU S💌',
    'ZUHA I LOVE YOU SO💝',
    'ZUHA I LOVE YOU SO M💟',
    'ZUHA I LOVE YOU SO MU🌸',
    'ZUHA I LOVE YOU SO MUC🥀',
    'ZUHA I LOVE YOU SO MUCH❣️'
  ];

  const FINAL_LOVE = 'I LOVE YOU SO MUCH';
  const FINAL_BACCHA = 'MERA BACCHA 💐✨';

  const CHAPTERS = [
    {
      roman: 'CHAPTER I',
      mood: 'THE BEGINNING OF MAGIC',
      title: 'Jahan Tum Ho, Wahin Sukoon Hai',
      image: 'Zuha1.jpg',
      audio: 'Zuha1.mp3',
      shayari:
        '“Teri ek muskurahat pe yeh dil haar baithe hain,\n' +
        'Har khushi apni tere naam waar baithe hain,\n' +
        'Log dhoondhte hain jannat aasmaanon mein kahin,\n' +
        'Aur hum teri aankhon mein apna jahan pa baithe hain.”',
      desc: 'Every time I look at you, Zuha, the noise of the entire world fades into silence.'
    },
    {
      roman: 'CHAPTER II',
      mood: 'UNSPOKEN BEAUTY',
      title: 'Chand Bhi Sharma Jaaye',
      image: 'Zuha2.jpg',
      audio: 'Zuha2.mp3',
      shayari:
        '“Teri saadgi mein bhi ek alag hi noor hai,\n' +
        'Tu paas ho toh har gham mujhse door hai,\n' +
        'Chaand bhi dekhe tujhe toh rashk kar baithe,\n' +
        'Meri Zuha toh khuda ki sabse haseen hoor hai.”',
      desc: 'Grace, warmth, and effortless magic — you make every frame unforgettable.'
    },
    {
      roman: 'CHAPTER III',
      mood: 'HEARTBEAT & SOUL',
      title: 'Meri Har Dua Ka Jawab Ho Tum',
      image: 'Zuha3.jpg',
      audio: 'Zuha3.mp3',
      shayari:
        '“Meri har dua mein tera hi zikr rehta hai,\n' +
        'Har pal bas tera hi fikr rehta hai,\n' +
        'Kaise bataun kitni mohabbat hai tumse,\n' +
        'Meri har dhadkan mein sirf Zuha naam behta hai.”',
      desc: 'In a world full of temporary things, you are the feeling I want to keep forever.'
    },
    {
      roman: 'CHAPTER IV',
      mood: 'DESTINY & DEVOTION',
      title: 'Tere Saath Har Safar Khoobsurat Hai',
      image: 'Zuha4.jpg',
      audio: 'Zuha4.mp3',
      shayari:
        '“Haath thaam lo mera toh safar aasaan ho jaaye,\n' +
        'Tere sang har mushkil bhi meherbaan ho jaaye,\n' +
        'Bas itni si khwahish hai is dil ki, Mera Baccha,\n' +
        'Meri har subah aur har shaam tere naam ho jaaye.”',
      desc: 'With you beside me, every ordinary moment feels like a scene from my favorite dream.'
    },
    {
      roman: 'CHAPTER V',
      mood: 'ETERNAL PROMISE',
      title: 'Mera Aaj, Mera Kal, Meri Zuha',
      image: 'Zuha5.jpg',
      audio: 'Zuha5.mp3',
      shayari:
        '“Na waqt badlega, na yeh pyaar kam hoga,\n' +
        'Har janam mein tera hi intezaar humko hoga,\n' +
        'Tu meri zindagi ki sabse khoobsurat kahani hai,\n' +
        'Mera aaj, mera kal, aur mera har pal sirf tera hoga.”',
      desc: 'Five chapters are only the prologue — our real love story lasts a lifetime.'
    }
  ];

  const LETTER_CONTENT =
    'Meri pyaari Zuha,\n\n' +
    'Jab tum muskurati ho, toh lagta hai jaise har uljhan apne aap sulajh jaaye. ' +
    'Tumhare saath bitaya har ek lamha mere liye kisi geet jaisa hai.\n\n' +
    'Chahe hum baatein karein ya bas khamosh saath baithein, tumhara hona hi kaafi hai ' +
    'mere dil ko sukoon dene ke liye. I love you so much, Mera Baccha.';

  const MILESTONES = [
    { step: '01', title: 'The First Spark', desc: 'A moment that quietly changed my heart forever.' },
    { step: '02', title: 'Your Name in My Thoughts', desc: 'Zuha became the sweetest word on my lips.' },
    { step: '03', title: 'Endless Talks', desc: 'Hours felt like seconds whenever we spoke.' },
    { step: '04', title: 'Peace in Your Presence', desc: 'Your voice always calmed my busiest days.' },
    { step: '05', title: 'Precious Memories', desc: 'Every photo and smile became a treasure.' },
    { step: '06', title: 'Understanding Each Other', desc: 'Growing closer through care and warmth.' },
    { step: '07', title: 'Dreaming Together', desc: 'Imagining peaceful tomorrows side by side.' },
    { step: '08', title: 'My Forever Zuha', desc: 'The chapter I want to keep forever.' }
  ];

  const HEART_QUOTES = [
    'You are my favourite person.',
    'My happiness starts with you.',
    'You make my world beautiful.'
  ];

  const audioPlayer = document.getElementById('audioPlayer');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const eqBars = document.getElementById('eqBars');
  const musicBtnLabel = document.getElementById('musicBtnLabel');
  const nowPlayingText = document.getElementById('nowPlayingText');
  const volumeSlider = document.getElementById('volumeSlider');
  const sfxBtn = document.getElementById('sfxBtn');
  const toast = document.getElementById('toast');

  let currentIndex = 0;
  let currentSrc = '';
  let pausedByUser = false;
  let sfxOn = true;
  let seqTimer = null;
  let typeTimer = null;
  let letterTimer = null;
  let chapterAdvanceTimer = null;
  let chapterBarInterval = null;
  let autoCycleStarted = false;
  let heartsSent = 0;
  let audioCtx = null;

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function chime(freq = 640) {
    if (!sfxOn) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtx) audioCtx = new AC();
      if (audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.12);
    } catch (_) {}
  }

  function setPlayingUI(playing) {
    eqBars.classList.toggle('active', playing);
    musicBtnLabel.textContent = playing ? 'PAUSE' : 'PLAY MUSIC';
  }

  function playSingleTrack(file) {
    nowPlayingText.textContent = file;
    if (currentSrc !== file) {
      audioPlayer.pause();
      try {
        audioPlayer.currentTime = 0;
      } catch (_) {}
      currentSrc = file;
      audioPlayer.src = file;
      audioPlayer.loop = true;
      audioPlayer.load();
    }
    audioPlayer.volume = parseFloat(volumeSlider.value);
    if (pausedByUser) {
      setPlayingUI(false);
      return;
    }
    const p = audioPlayer.play();
    if (p && typeof p.then === 'function') {
      p.then(() => setPlayingUI(true)).catch(() => {
        setPlayingUI(false);
        showToast('Tap PLAY MUSIC to start audio ♪');
      });
    }
  }

  audioPlayer.addEventListener('error', () => {
    setPlayingUI(false);
    if (currentSrc) showToast(`Add "${currentSrc}" to project folder`);
  });

  musicToggleBtn.addEventListener('click', () => {
    chime(580);
    if (audioPlayer.paused) {
      pausedByUser = false;
      const targetFile = currentSrc || CHAPTERS[currentIndex].audio;
      if (!audioPlayer.src || currentSrc !== targetFile) {
        currentSrc = targetFile;
        audioPlayer.src = targetFile;
        audioPlayer.loop = true;
      }
      audioPlayer.volume = parseFloat(volumeSlider.value);
      audioPlayer.play().then(() => setPlayingUI(true)).catch(() => showToast(`Missing ${targetFile}`));
    } else {
      pausedByUser = true;
      audioPlayer.pause();
      setPlayingUI(false);
    }
  });

  volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = parseFloat(volumeSlider.value);
  });

  sfxBtn.addEventListener('click', () => {
    sfxOn = !sfxOn;
    sfxBtn.textContent = sfxOn ? 'SFX ON' : 'SFX OFF';
  });

  // Counter
  const cDays = document.getElementById('cDays');
  const cHours = document.getElementById('cHours');
  const cMinutes = document.getElementById('cMinutes');
  const cSeconds = document.getElementById('cSeconds');
  const counterNote = document.getElementById('counterNote');

  function tickCounter() {
    const diff = Math.max(0, Date.now() - new Date(SPECIAL_DATE_ISO).getTime());
    const sec = Math.floor(diff / 1000);
    cDays.textContent = String(Math.floor(sec / 86400)).padStart(2, '0');
    cHours.textContent = String(Math.floor((sec % 86400) / 3600)).padStart(2, '0');
    cMinutes.textContent = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    cSeconds.textContent = String(sec % 60).padStart(2, '0');
    counterNote.textContent = `Counting every moment since ${new Date(SPECIAL_DATE_ISO).toDateString()}`;
  }
  tickCounter();
  setInterval(tickCounter, 1000);

  // Confession -> Automatically opens Chapter I surprise after animation finishes
  const progLine = document.getElementById('progLine');
  const progFill = document.getElementById('progFill');
  const typedLine1 = document.getElementById('typedLine1');
  const typedLine2 = document.getElementById('typedLine2');
  const autoAdvanceStatus = document.getElementById('autoAdvanceStatus');

  function startConfession(autoOpenNextPage = false) {
    clearInterval(seqTimer);
    clearInterval(typeTimer);
    typedLine1.textContent = '';
    typedLine2.textContent = '';
    progFill.style.width = '0%';
    autoAdvanceStatus.textContent = 'Love animation chal rahi hai...';

    let i = 0;
    const draw = () => {
      if (i < PROGRESSIVE_LINES.length) {
        progLine.textContent = PROGRESSIVE_LINES[i];
        progFill.style.width = `${Math.round(((i + 1) / PROGRESSIVE_LINES.length) * 100)}%`;
        i++;
      } else {
        clearInterval(seqTimer);
        const a = Array.from(FINAL_LOVE);
        const b = Array.from(FINAL_BACCHA);
        let x = 0;
        let y = 0;
        typeTimer = setInterval(() => {
          if (x < a.length) {
            typedLine1.textContent += a[x++];
          } else if (y < b.length) {
            typedLine2.textContent += b[y++];
          } else {
            clearInterval(typeTimer);
            autoAdvanceStatus.textContent = 'Agla surprise page khul raha hai...';
            if (autoOpenNextPage) {
              setTimeout(() => {
                loadChapter(0, true, true);
                document.getElementById('chaptersSection').scrollIntoView({ behavior: 'smooth' });
              }, 1100);
            }
          }
        }, 55);
      }
    };
    draw();
    seqTimer = setInterval(draw, 350);
  }
  startConfession(false);

  // Chapters -> Automatically opens next chapter page after each animation finishes
  const chapTabs = document.querySelectorAll('.chap-tab');
  const chapterStage = document.getElementById('chapterStage');
  const chapImg = document.getElementById('chapImg');
  const chapFallback = document.getElementById('chapFallback');
  const chapFallbackMsg = document.getElementById('chapFallbackMsg');
  const chapTag = document.getElementById('chapTag');
  const chapShayari = document.getElementById('chapShayari');
  const chapMood = document.getElementById('chapMood');
  const chapTitle = document.getElementById('chapTitle');
  const chapDesc = document.getElementById('chapDesc');
  const chapTrack = document.getElementById('chapTrack');
  const chapTimerFill = document.getElementById('chapTimerFill');
  const chapAutoHint = document.getElementById('chapAutoHint');

  function clearChapterTimers() {
    clearTimeout(chapterAdvanceTimer);
    clearInterval(chapterBarInterval);
  }

  function scheduleNextChapter(idx) {
    clearChapterTimers();
    const startTime = Date.now();
    chapTimerFill.style.width = '0%';
    chapAutoHint.textContent =
      idx < CHAPTERS.length - 1
        ? 'Animation khatam hone par agla chapter page apne aap khulega...'
        : 'Aakhiri chapter ke baad Secret Letter page apne aap khulega...';

    chapterBarInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / CHAPTER_ANIMATION_DURATION_MS) * 100);
      chapTimerFill.style.width = `${pct}%`;
    }, 100);

    chapterAdvanceTimer = setTimeout(() => {
      clearChapterTimers();
      chapTimerFill.style.width = '100%';

      if (idx < CHAPTERS.length - 1) {
        loadChapter(idx + 1, true, true);
      } else {
        openSecretLetterView();
        document.getElementById('letterSection').scrollIntoView({ behavior: 'smooth' });
      }
    }, CHAPTER_ANIMATION_DURATION_MS);
  }

  function loadChapter(idx, playSound = false, enableAutoAdvance = false) {
    currentIndex = idx;
    const ch = CHAPTERS[idx];
    chapTabs.forEach((t, n) => t.classList.toggle('active', n === idx));

    chapterStage.classList.add('fade-swap');
    setTimeout(() => chapterStage.classList.remove('fade-swap'), 260);

    chapFallback.classList.remove('show');
    chapImg.style.display = 'block';
    chapImg.onerror = () => {
      chapImg.style.display = 'none';
      chapFallbackMsg.textContent = `Add "${ch.image}" to project folder`;
      chapFallback.classList.add('show');
    };
    chapImg.src = ch.image;
    chapImg.alt = ch.title;

    chapTag.textContent = `${ch.roman} · ${ch.audio}`;
    chapShayari.textContent = ch.shayari;
    chapMood.textContent = ch.mood;
    chapTitle.textContent = ch.title;
    chapDesc.textContent = ch.desc;
    chapTrack.textContent = ch.audio;

    if (playSound) playSingleTrack(ch.audio);
    if (enableAutoAdvance) {
      scheduleNextChapter(idx);
    } else {
      clearChapterTimers();
      chapTimerFill.style.width = '0%';
    }
  }
  loadChapter(0, false, false);

  chapTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      chime(600);
      const targetIdx = parseInt(tab.dataset.index, 10);
      loadChapter(targetIdx, true, true);
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const fullViewBtn = document.getElementById('fullViewBtn');
  const closeLightbox = document.getElementById('closeLightbox');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('open');
  }

  fullViewBtn.addEventListener('click', () => {
    const ch = CHAPTERS[currentIndex];
    openLightbox(ch.image, `${ch.roman} — ${ch.title}`);
  });
  closeLightbox.addEventListener('click', () => lightbox.classList.remove('open'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.remove('open');
  });

  // Secret Letter -> Automatically scrolls to Love Story after letter typing completes
  const letterSealView = document.getElementById('letterSealView');
  const letterOpenView = document.getElementById('letterOpenView');
  const openLetterBtn = document.getElementById('openLetterBtn');
  const closeLetterBtn = document.getElementById('closeLetterBtn');
  const typedLetterText = document.getElementById('typedLetterText');

  function openSecretLetterView() {
    chime(700);
    letterSealView.classList.add('hide');
    letterOpenView.classList.add('show');
    clearInterval(letterTimer);
    typedLetterText.textContent = '';
    const chars = Array.from(LETTER_CONTENT);
    let k = 0;
    letterTimer = setInterval(() => {
      if (k < chars.length) {
        typedLetterText.textContent += chars[k++];
      } else {
        clearInterval(letterTimer);
        setTimeout(() => {
          document.getElementById('storySection').scrollIntoView({ behavior: 'smooth' });
        }, 1400);
      }
    }, 24);
  }

  openLetterBtn.addEventListener('click', openSecretLetterView);

  closeLetterBtn.addEventListener('click', () => {
    clearInterval(letterTimer);
    letterOpenView.classList.remove('show');
    letterSealView.classList.remove('hide');
  });

  // Timeline
  const timelineList = document.getElementById('timelineList');
  timelineList.innerHTML = MILESTONES.map(
    (m) => `
    <div class="t-item">
      <span class="t-heart">♥</span>
      <div class="t-card">
        <span class="t-step">MILESTONE ${m.step}</span>
        <h3 class="t-title">${m.title}</h3>
        <p class="t-desc">${m.desc}</p>
      </div>
    </div>`
  ).join('');

  // Heart
  const glowHeartBtn = document.getElementById('glowHeartBtn');
  const heartMsg = document.getElementById('heartMsg');
  const heartCount = document.getElementById('heartCount');

  glowHeartBtn.addEventListener('click', () => {
    chime(780);
    heartsSent++;
    heartMsg.textContent = HEART_QUOTES[(heartsSent - 1) % HEART_QUOTES.length];
    heartCount.textContent = `Hearts sent: ${heartsSent}`;
    glowHeartBtn.classList.add('burst');
    setTimeout(() => glowHeartBtn.classList.remove('burst'), 250);
    burst(25);
  });

  // Question
  const yesBtn = document.getElementById('yesBtn');
  const letsSeeBtn = document.getElementById('letsSeeBtn');
  const qAnswerBox = document.getElementById('qAnswerBox');
  const qAnswerText = document.getElementById('qAnswerText');

  yesBtn.addEventListener('click', () => {
    chime(820);
    qAnswerBox.classList.add('show');
    qAnswerText.textContent = 'Tumne mera dil khush kar diya, Zuha! Har yaad ko sambhal kar rakhunga ❤️✨';
    burst(35);
  });

  letsSeeBtn.addEventListener('click', () => {
    chime(650);
    qAnswerBox.classList.add('show');
    qAnswerText.textContent = 'Koi jaldi nahi hai, Zuha — bina kisi pressure ke, main yahin hoon 💗';
  });

  // Memory Wall
  const memoryWall = document.getElementById('memoryWall');
  memoryWall.innerHTML = CHAPTERS.map(
    (ch) => `
    <div class="wall-card" data-img="${ch.image}" data-cap="${ch.roman} · ${ch.title}">
      <img src="${ch.image}" alt="${ch.title}" />
      <div class="wall-cap">${ch.roman} · ${ch.image}</div>
    </div>`
  ).join('');

  memoryWall.querySelectorAll('.wall-card').forEach((card) => {
    card.addEventListener('click', () => {
      openLightbox(card.dataset.img, card.dataset.cap);
    });
  });

  // Secret Modal & Intro/Finale Actions
  const secretModal = document.getElementById('secretModal');
  const openSecretBtn = document.getElementById('openSecretBtn');
  const onlyForZuhaBtn = document.getElementById('onlyForZuhaBtn');
  const closeSecret = document.getElementById('closeSecret');
  const enterWorldBtn = document.getElementById('enterWorldBtn');
  const finaleBurstBtn = document.getElementById('finaleBurstBtn');

  const showSecret = () => {
    chime(750);
    secretModal.classList.add('open');
  };
  openSecretBtn.addEventListener('click', showSecret);
  onlyForZuhaBtn.addEventListener('click', showSecret);
  closeSecret.addEventListener('click', () => secretModal.classList.remove('open'));
  secretModal.addEventListener('click', (e) => {
    if (e.target === secretModal) secretModal.classList.remove('open');
  });

  enterWorldBtn.addEventListener('click', () => {
    chime(680);
    pausedByUser = false;
    autoCycleStarted = true;
    playSingleTrack(CHAPTERS[0].audio);
    burst(30);
    document.getElementById('confessionSection').scrollIntoView({ behavior: 'smooth' });
    startConfession(true);
  });

  // Auto-start chapter progression when user scrolls into Chapters section
  const chaptersSection = document.getElementById('chaptersSection');
  const chapObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !autoCycleStarted) {
          autoCycleStarted = true;
          loadChapter(currentIndex, false, true);
        }
      });
    },
    { threshold: 0.35 }
  );
  chapObserver.observe(chaptersSection);

  finaleBurstBtn.addEventListener('click', () => {
    chime(840);
    burst(55);
    showToast('ZUHA, YOU ARE MY FAVOURITE CHAPTER ❤️');
  });

  // Top & Scroll Progress
  const topBtn = document.getElementById('topBtn');
  const scrollProgress = document.getElementById('scrollProgress');
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  window.addEventListener(
    'scroll',
    () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.style.width = maxScroll > 0 ? `${(window.scrollY / maxScroll) * 100}%` : '0%';
    },
    { passive: true }
  );

  // Canvas Petals & Gold Dust
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let w = (canvas.width = window.innerWidth);
  let h = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  const list = Array.from({ length: 42 }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 4 + 2,
    vy: Math.random() * 0.7 + 0.3,
    vx: (Math.random() - 0.5) * 0.5
  }));

  function burst(n) {
    for (let i = 0; i < n; i++) {
      list.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 5 + 2.5,
        vy: Math.random() * 1.1 + 0.4,
        vx: (Math.random() - 0.5) * 1.2
      });
    }
    if (list.length > 120) list.splice(0, list.length - 120);
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of list) {
      p.y += p.vy;
      p.x += p.vx;
      if (p.y > h + 10) {
        p.y = -10;
        p.x = Math.random() * w;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245, 223, 184, 0.35)';
      ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  frame();
})();
