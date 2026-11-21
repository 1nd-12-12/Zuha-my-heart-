/* ==========================================================================
   ZUHA — MY FOREVER LOVE
   Interactive Cinematic Controller, Audio Engine & Particle System
   ========================================================================== */

(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     1. DATA CONFIGURATION (Exact Progressive Lines & Five Chapters)
     ------------------------------------------------------------------------ */
  const LOVE_SEQUENCE_LINES = [
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

  const CHAPTERS = [
    {
      roman: 'CHAPTER I',
      subtitle: 'THE BEGINNING OF MAGIC',
      title: 'Jahan Tum Ho, Wahin Sukoon Hai',
      image: 'zuha1.jpg',
      audio: 'zuha1.mp3',
      songLabel: 'Chapter I — zuha1.mp3',
      shayari:
        '“Teri ek muskurahat pe yeh dil haar baithe hain,\n' +
        'Har khushi apni tere naam waar baithe hain,\n' +
        'Log dhoondhte hain jannat aasmaanon mein kahin,\n' +
        'Aur hum teri aankhon mein apna jahan pa baithe hain.”',
      note:
        'Every time I look at you, Zuha, the noise of the entire world fades into silence.'
    },
    {
      roman: 'CHAPTER II',
      subtitle: 'UNSPOKEN BEAUTY',
      title: 'Chand Bhi Sharma Jaaye',
      image: 'zuha2.jpg',
      audio: 'zuha2.mp3',
      songLabel: 'Chapter II — zuha2.mp3',
      shayari:
        '“Teri saadgi mein bhi ek alag hi noor hai,\n' +
        'Tu paas ho toh har gham mujhse door hai,\n' +
        'Chaand bhi dekhe tujhe toh rashk kar baithe,\n' +
        'Meri Zuha toh khuda ki sabse haseen hoor hai.”',
      note:
        'Grace, warmth, and effortless magic — you make every frame unforgettable.'
    },
    {
      roman: 'CHAPTER III',
      subtitle: 'HEARTBEAT & SOUL',
      title: 'Meri Har Dua Ka Jawab Ho Tum',
      image: 'zuha3.jpg',
      audio: 'zuha3.mp3',
      songLabel: 'Chapter III — zuha3.mp3',
      shayari:
        '“Meri har dua mein tera hi zikr rehta hai,\n' +
        'Har pal bas tera hi fikr rehta hai,\n' +
        'Kaise bataun kitni mohabbat hai tumse,\n' +
        'Meri har dhadkan mein sirf Zuha naam behta hai.”',
      note:
        'In a world full of temporary things, you are the feeling I want to keep forever.'
    },
    {
      roman: 'CHAPTER IV',
      subtitle: 'DESTINY & DEVOTION',
      title: 'Tere Saath Har Safar Khoobsurat Hai',
      image: 'zuha4.jpg',
      audio: 'zuha4.mp3',
      songLabel: 'Chapter IV — zuha4.mp3',
      shayari:
        '“Haath thaam lo mera toh safar aasaan ho jaaye,\n' +
        'Tere sang har mushkil bhi meherbaan ho jaaye,\n' +
        'Bas itni si khwahish hai is dil ki, Mera Baccha,\n' +
        'Meri har subah aur har shaam tere naam ho jaaye.”',
      note:
        'With you beside me, every ordinary moment feels like a scene from my favorite dream.'
    },
    {
      roman: 'CHAPTER V',
      subtitle: 'ETERNAL PROMISE',
      title: 'Mera Aaj, Mera Kal, Meri Zuha',
      image: 'zuha5.jpg',
      audio: 'zuha5.mp3',
      songLabel: 'Chapter V — zuha5.mp3',
      shayari:
        '“Na waqt badlega, na yeh pyaar kam hoga,\n' +
        'Har janam mein tera hi intezaar humko hoga,\n' +
        'Tu meri zindagi ki sabse khoobsurat kahani hai,\n' +
        'Mera aaj, mera kal, aur mera har pal sirf tera hoga.”',
      note:
        'Five chapters are only the prologue — our real love story lasts a lifetime.'
    }
  ];

  /* ------------------------------------------------------------------------
     2. DOM REFERENCES
     ------------------------------------------------------------------------ */
  const screens = {
    opening: document.getElementById('openingScreen'),
    sequence: document.getElementById('loveSequenceScreen'),
    chapters: document.getElementById('chaptersScreen'),
    finale: document.getElementById('finaleScreen')
  };

  const audioPlayer = document.getElementById('bgAudioPlayer');
  const audioHud = document.getElementById('audioHud');
  const musicToggleBtn = document.getElementById('musicToggleBtn');
  const musicEqualizer = document.getElementById('musicEqualizer');
  const musicStatusText = document.getElementById('musicStatusText');
  const nowPlayingLabel = document.getElementById('nowPlayingLabel');
  const volumeSlider = document.getElementById('volumeSlider');
  const toastNotice = document.getElementById('toastNotice');

  const openSurpriseBtn = document.getElementById('openSurpriseBtn');
  const progressiveText = document.getElementById('progressiveText');
  const sequenceProgressBar = document.getElementById('sequenceProgressBar');
  const finalLoveBanner = document.getElementById('finalLoveBanner');
  const enterChaptersBtn = document.getElementById('enterChaptersBtn');

  const chapterImage = document.getElementById('chapterImage');
  const photoFallback = document.getElementById('photoFallback');
  const fallbackFileHint = document.getElementById('fallbackFileHint');
  const chapterRoman = document.getElementById('chapterRoman');
  const chapterSubtitle = document.getElementById('chapterSubtitle');
  const chapterTitle = document.getElementById('chapterTitle');
  const chapterShayari = document.getElementById('chapterShayari');
  const chapterNote = document.getElementById('chapterNote');
  const storyContent = document.getElementById('storyContent');
  const prevChapterBtn = document.getElementById('prevChapterBtn');
  const nextChapterBtn = document.getElementById('nextChapterBtn');
  const chapterDots = document.querySelectorAll('.chapter-dots .dot');

  const replayStoryBtn = document.getElementById('replayStoryBtn');
  const showerHeartsBtn = document.getElementById('showerHeartsBtn');

  /* ------------------------------------------------------------------------
     3. APPLICATION STATE
     ------------------------------------------------------------------------ */
  let currentChapterIndex = 0;
  let currentAudioSrc = '';
  let isUserMuted = false;
  let sequenceTimer = null;
  let toastTimeout = null;

  /* ------------------------------------------------------------------------
     4. UTILITY: TOAST & SCREEN NAVIGATION
     ------------------------------------------------------------------------ */
  function showToast(message) {
    toastNotice.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }

  function switchScreen(targetKey) {
    Object.entries(screens).forEach(([key, el]) => {
      if (key === targetKey) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  /* ------------------------------------------------------------------------
     5. SINGLE-TRACK AUDIO ENGINE (Zero Overlap, Autoplay-Safe)
     ------------------------------------------------------------------------ */
  function updateAudioHudUI(isPlaying) {
    if (isPlaying) {
      musicEqualizer.classList.add('playing');
      musicStatusText.textContent = 'PLAYING';
    } else {
      musicEqualizer.classList.remove('playing');
      musicStatusText.textContent = isUserMuted ? 'MUTED' : 'PAUSED';
    }
  }

  function stopCurrentAudio() {
    audioPlayer.pause();
    try {
      audioPlayer.currentTime = 0;
    } catch (_) {
      // Ignore seek errors if metadata not yet loaded
    }
    updateAudioHudUI(false);
  }

  function playTrack(src, label) {
    nowPlayingLabel.textContent = label;

    // Strictly stop any previously playing track before switching
    if (currentAudioSrc !== src) {
      stopCurrentAudio();
      currentAudioSrc = src;
      audioPlayer.src = src;
      audioPlayer.loop = true;
      audioPlayer.load();
    }

    audioPlayer.volume = parseFloat(volumeSlider.value);

    if (isUserMuted) {
      updateAudioHudUI(false);
      return;
    }

    const playPromise = audioPlayer.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          updateAudioHudUI(true);
        })
        .catch(() => {
          updateAudioHudUI(false);
          showToast('Tap "SOUND" at the top to enable music ✨');
        });
    }
  }

  // Graceful fallback if an MP3 file is missing from the folder
  audioPlayer.addEventListener('error', () => {
    updateAudioHudUI(false);
    if (currentAudioSrc) {
      showToast(`Audio file "${currentAudioSrc}" not found in folder`);
    }
  });

  musicToggleBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
      isUserMuted = false;
      audioPlayer
        .play()
        .then(() => updateAudioHudUI(true))
        .catch(() => showToast(`Add "${currentAudioSrc || 'zuha1.mp3'}" to play music`));
    } else {
      isUserMuted = true;
      audioPlayer.pause();
      updateAudioHudUI(false);
    }
  });

  volumeSlider.addEventListener('input', (e) => {
    const vol = parseFloat(e.target.value);
    audioPlayer.volume = vol;
    if (vol === 0) {
      isUserMuted = true;
      audioPlayer.pause();
      updateAudioHudUI(false);
    } else if (audioPlayer.paused && !isUserMuted) {
      audioPlayer.play().then(() => updateAudioHudUI(true)).catch(() => {});
    }
  });

  /* ------------------------------------------------------------------------
     6. STAGE 1: PROGRESSIVE LOVE MESSAGE ANIMATION
     ------------------------------------------------------------------------ */
  function startLoveMessageAnimation() {
    clearInterval(sequenceTimer);
    finalLoveBanner.classList.add('hidden');
    progressiveText.textContent = '';
    sequenceProgressBar.style.width = '0%';

    let step = 0;
    const total = LOVE_SEQUENCE_LINES.length;

    const renderStep = () => {
      if (step < total) {
        progressiveText.textContent = LOVE_SEQUENCE_LINES[step];
        progressiveText.classList.remove('pop');
        void progressiveText.offsetWidth; // Trigger reflow for smooth pop
        progressiveText.classList.add('pop');

        const percent = Math.round(((step + 1) / total) * 100);
        sequenceProgressBar.style.width = `${percent}%`;
        step++;
      } else {
        clearInterval(sequenceTimer);
        finalLoveBanner.classList.remove('hidden');
        burstParticles(28);
      }
    };

    renderStep();
    sequenceTimer = setInterval(renderStep, 480);
  }

  /* ------------------------------------------------------------------------
     7. STAGE 2: FIVE PHOTO CHAPTERS CONTROLLER
     ------------------------------------------------------------------------ */
  function renderChapter(index) {
    currentChapterIndex = index;
    const data = CHAPTERS[index];

    // Update Chapter Dots
    chapterDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    // Reset & load image with graceful fallback if missing
    photoFallback.classList.add('hidden');
    chapterImage.style.display = 'block';
    chapterImage.style.opacity = '0';

    chapterImage.onload = () => {
      chapterImage.style.opacity = '1';
    };

    chapterImage.onerror = () => {
      chapterImage.style.display = 'none';
      fallbackFileHint.textContent = `Add "${data.image}" to the same folder`;
      photoFallback.classList.remove('hidden');
    };

    chapterImage.src = data.image;
    chapterImage.alt = `Zuha — ${data.roman}`;

    // Re-trigger text entrance animation
    storyContent.classList.remove('animate-in');
    void storyContent.offsetWidth;
    storyContent.classList.add('animate-in');

    chapterRoman.textContent = data.roman;
    chapterSubtitle.textContent = data.subtitle;
    chapterTitle.textContent = data.title;
    chapterShayari.textContent = data.shayari;
    chapterNote.textContent = data.note;

    // Update Previous / Next button labels & state
    prevChapterBtn.disabled = index === 0;
    nextChapterBtn.textContent =
      index === CHAPTERS.length - 1 ? 'GRAND FINALE ❤️' : 'NEXT CHAPTER →';

    // Play the exclusive track for this chapter
    playTrack(data.audio, data.songLabel);
    burstParticles(14);
  }

  prevChapterBtn.addEventListener('click', () => {
    if (currentChapterIndex > 0) {
      renderChapter(currentChapterIndex - 1);
    }
  });

  nextChapterBtn.addEventListener('click', () => {
    if (currentChapterIndex < CHAPTERS.length - 1) {
      renderChapter(currentChapterIndex + 1);
    } else {
      // Transition to Grand Finale while keeping Chapter V romantic track playing
      switchScreen('finale');
      burstParticles(42);
    }
  });

  chapterDots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const targetIdx = parseInt(dot.dataset.index, 10);
      if (!Number.isNaN(targetIdx)) {
        renderChapter(targetIdx);
      }
    });
  });

  /* ------------------------------------------------------------------------
     8. MAIN USER FLOW EVENT LISTENERS
     ------------------------------------------------------------------------ */
  openSurpriseBtn.addEventListener('click', () => {
    // Unlock audio on user gesture & start Chapter 1 melody softly during confession
    audioHud.classList.remove('hidden');
    playTrack(CHAPTERS[0].audio, 'Zuha — Romantic Prelude');
    switchScreen('sequence');
    startLoveMessageAnimation();
    burstParticles(30);
  });

  enterChaptersBtn.addEventListener('click', () => {
    switchScreen('chapters');
    renderChapter(0);
  });

  replayStoryBtn.addEventListener('click', () => {
    switchScreen('chapters');
    renderChapter(0);
  });

  showerHeartsBtn.addEventListener('click', () => {
    burstParticles(50);
    showToast('I Love You So Much, Mera Baccha 💐✨');
  });

  /* ------------------------------------------------------------------------
     9. AMBIENT CANVAS: FLOATING ROSE PETALS, GOLDEN PARTICLES & HEARTS
     ------------------------------------------------------------------------ */
  const canvas = document.getElementById('ambientCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width = 0;
  let height = 0;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  function createParticle(isBurst = false) {
    const types = ['petal', 'gold', 'heart'];
    const weights = isBurst ? [0.45, 0.25, 0.3] : [0.45, 0.42, 0.13];
    const r = Math.random();
    let type = types[0];
    if (r > weights[0] + weights[1]) type = 'heart';
    else if (r > weights[0]) type = 'gold';

    return {
      type,
      x: Math.random() * width,
      y: isBurst ? height * (0.35 + Math.random() * 0.45) : Math.random() * height,
      size: type === 'gold' ? Math.random() * 2.4 + 1 : Math.random() * 7 + 5,
      speedY:
        type === 'heart'
          ? -(Math.random() * 0.9 + 0.4)
          : Math.random() * 0.85 + 0.35,
      speedX: (Math.random() - 0.5) * 0.7,
      rotation: Math.random() * Math.PI * 2,
      spin: (Math.random() - 0.5) * 0.025,
      opacity: Math.random() * 0.55 + 0.25,
      swayOffset: Math.random() * 100
    };
  }

  function initParticles() {
    const baseCount = width < 600 ? 34 : 58;
    particles = Array.from({ length: baseCount }, () => createParticle(false));
  }

  function burstParticles(count) {
    for (let i = 0; i < count; i++) {
      particles.push(createParticle(true));
    }
    if (particles.length > 140) {
      particles.splice(0, particles.length - 140);
    }
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.opacity;

    const grad = ctx.createRadialGradient(0, 0, 1, 0, 0, p.size);
    grad.addColorStop(0, '#c9184a');
    grad.addColorStop(1, '#4a0618');
    ctx.fillStyle = grad;

    ctx.beginPath();
    ctx.moveTo(0, -p.size);
    ctx.bezierCurveTo(p.size, -p.size * 0.6, p.size * 0.8, p.size, 0, p.size * 1.1);
    ctx.bezierCurveTo(-p.size * 0.8, p.size, -p.size, -p.size * 0.6, 0, -p.size);
    ctx.fill();
    ctx.restore();
  }

  function drawGoldDust(p) {
    ctx.save();
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = '#f6d5c1';
    ctx.shadowColor = '#e5b299';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function drawHeart(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.scale(p.size / 14, p.size / 14);
    ctx.globalAlpha = p.opacity;
    ctx.fillStyle = '#e5b299';
    ctx.shadowColor = '#a4133c';
    ctx.shadowBlur = 10;

    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.bezierCurveTo(0, 0, -8, -4, -8, 2);
    ctx.bezierCurveTo(-8, 8, 0, 12, 0, 15);
    ctx.bezierCurveTo(0, 12, 8, 8, 8, 2);
    ctx.bezierCurveTo(8, -4, 0, 0, 0, 4);
    ctx.fill();
    ctx.restore();
  }

  let frameTick = 0;
  function animateParticles() {
    frameTick += 0.015;
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(frameTick + p.swayOffset) * 0.28;
      p.rotation += p.spin;

      if (p.type === 'petal') drawPetal(p);
      else if (p.type === 'gold') drawGoldDust(p);
      else drawHeart(p);

      // Wrap around screen edges smoothly
      if (p.y > height + 20) {
        p.y = -15;
        p.x = Math.random() * width;
      } else if (p.y < -20) {
        p.y = height + 15;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -15;
      if (p.x < -20) p.x = width + 15;
    }

    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
})();
