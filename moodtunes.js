const answers = { q1: null, energy: 5, q3: null, q4: null };
let spotifyUrl = 'https://open.spotify.com';

const MOOD_DATA = {
  feliz: {
    label: '😊 Feliz y alegre',
    title: 'Tu vibra es pura alegría',
    desc: 'Estás en un gran momento. Estas canciones van a potenciar esa energía positiva.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC',
    songs: [
      { name: 'Happy', artist: 'Pharrell Williams', tag: 'Clásico del mood', emoji: '🟡' },
      { name: "Can't Stop the Feeling!", artist: 'Justin Timberlake', tag: 'Pop', emoji: '🟠' },
      { name: 'Good as Hell', artist: 'Lizzo', tag: 'Empoderamiento', emoji: '🟣' },
      { name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', tag: 'Hit eterno', emoji: '🔴' },
    ]
  },
  melancolico: {
    label: '😔 Melancólico',
    title: 'Música para el alma pensativa',
    desc: 'La nostalgia también tiene su belleza. Estas canciones te acompañan en ese viaje interior.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634',
    songs: [
      { name: 'The Night We Met', artist: 'Lord Huron', tag: 'Indie', emoji: '🔵' },
      { name: 'Someone Like You', artist: 'Adele', tag: 'Soul', emoji: '🟤' },
      { name: 'Vienna', artist: 'Billy Joel', tag: 'Clásico', emoji: '⚪' },
      { name: 'Motion Sickness', artist: 'Phoebe Bridgers', tag: 'Indie folk', emoji: '🟢' },
    ]
  },
  estresado: {
    label: '😰 Estresado',
    title: 'Música para soltar el estrés',
    desc: 'Respira. Estas canciones están pensadas para ayudarte a encontrar calma.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWXe9gFZP0gtP',
    songs: [
      { name: 'Weightless', artist: 'Marconi Union', tag: 'Relajación', emoji: '🔵' },
      { name: 'Breathe (2 AM)', artist: 'Anna Nalick', tag: 'Indie', emoji: '🟢' },
      { name: 'Stressed Out', artist: 'Twenty One Pilots', tag: 'Alt pop', emoji: '🔴' },
      { name: 'Let It Be', artist: 'The Beatles', tag: 'Clásico', emoji: '🟡' },
    ]
  },
  relajado: {
    label: '😌 Relajado',
    title: 'Ondas tranquilas para ti',
    desc: 'El arte de no hacer nada también tiene su soundtrack. Disfruta este momento de calma.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX4E3UdUs7fUx',
    songs: [
      { name: 'Coffee', artist: 'beabadoobee', tag: 'Lo-fi', emoji: '🟤' },
      { name: 'sunset lover', artist: 'Petit Biscuit', tag: 'Electrónica', emoji: '🟠' },
      { name: 'Dreams', artist: 'Fleetwood Mac', tag: 'Clásico', emoji: '🟣' },
      { name: 'Banana Pancakes', artist: 'Jack Johnson', tag: 'Acústico', emoji: '🟡' },
    ]
  },
  motivado: {
    label: '💪 Motivado',
    title: '¡Imparable hoy!',
    desc: 'Tienes todo para lograrlo. Estas canciones son el combustible para tu versión más poderosa.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX76Wlfdnj7AP',
    songs: [
      { name: 'Eye of the Tiger', artist: 'Survivor', tag: 'Rock clásico', emoji: '🔴' },
      { name: 'POWER', artist: 'Kanye West', tag: 'Hip-hop', emoji: '🟡' },
      { name: 'Run the World (Girls)', artist: 'Beyoncé', tag: 'Pop', emoji: '🟠' },
      { name: 'Till I Collapse', artist: 'Eminem', tag: 'Rap', emoji: '🔵' },
    ]
  },
  enamorado: {
    label: '💕 Enamorado',
    title: 'Soundtrack para el corazón',
    desc: 'El amor tiene su propia frecuencia. Estas canciones vibran con lo que sientes.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DWSb03RXMBdTw',
    songs: [
      { name: 'Thinking Out Loud', artist: 'Ed Sheeran', tag: 'Pop romance', emoji: '🔴' },
      { name: 'All of Me', artist: 'John Legend', tag: 'Soul', emoji: '🟣' },
      { name: 'XO', artist: 'Beyoncé', tag: 'R&B', emoji: '🟠' },
      { name: 'Perfect', artist: 'Ed Sheeran', tag: 'Balada', emoji: '🟡' },
    ]
  },
  frustrado: {
    label: '😤 Frustrado',
    title: 'Descarga esa tensión',
    desc: 'A veces necesitas música que entienda tu rabia. Deja ir lo que te pesa.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXa2PvUpywmrr',
    songs: [
      { name: 'Break Stuff', artist: 'Limp Bizkit', tag: 'Rock/Metal', emoji: '🔴' },
      { name: 'Given Up', artist: 'Linkin Park', tag: 'Nu-metal', emoji: '⚫' },
      { name: 'In the End', artist: 'Linkin Park', tag: 'Alt-rock', emoji: '🔵' },
      { name: 'Killing in the Name', artist: 'Rage Against the Machine', tag: 'Punk', emoji: '🟤' },
    ]
  },
  ansioso: {
    label: '😬 Ansioso',
    title: 'Música para calmar la mente',
    desc: 'Tu mente va rápido. Estas canciones pueden ayudarte a bajar las revoluciones.',
    spotify: 'https://open.spotify.com/playlist/37i9dQZF1DX3Ogo9pFvBkY',
    songs: [
      { name: 'Clair de Lune', artist: 'Claude Debussy', tag: 'Clásica', emoji: '⚪' },
      { name: "Everything's Not Lost", artist: 'Coldplay', tag: 'Alt-rock', emoji: '🔵' },
      { name: 'Be Still', artist: 'The Killers', tag: 'Indie', emoji: '🟡' },
      { name: '3 Rounds and a Sound', artist: 'Blind Pilot', tag: 'Folk', emoji: '🟢' },
    ]
  }
};

function scrollToSurvey() { document.getElementById('survey-anchor').scrollIntoView({ behavior: 'smooth' }); }
function scrollToFeatures() { document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' }); }

function selectOption(btn, question, value) {
  btn.closest('.options-grid').querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  answers[question] = value;
  if (question === 'q1') document.getElementById('btn-next-1').disabled = false;
  if (question === 'q3') document.getElementById('btn-next-3').disabled = false;
  if (question === 'q4') document.getElementById('btn-next-4').disabled = false;
}

function updateEnergy() {
  const v = document.getElementById('energy-slider').value;
  answers.energy = parseInt(v);
  document.getElementById('energy-value').textContent = v + ' / 10';
}

function nextQuestion(n) {
  document.querySelectorAll('.question-screen').forEach(s => s.classList.remove('active'));
  if (n <= 4) {
    document.getElementById('q' + n).classList.add('active');
    const pct = (n / 4) * 100;
    document.getElementById('progress-fill').style.width = pct + '%';
    for (let i = 1; i <= 4; i++) {
      const s = document.getElementById('step-' + i);
      s.className = 'step' + (i < n ? ' done' : i === n ? ' active' : '');
    }
    for (let i = 1; i <= 3; i++) {
      document.getElementById('line-' + i).className = 'step-line' + (i < n ? ' done' : '');
    }
  }
}

async function submitSurvey() {
  const overlay = document.getElementById('loading-overlay');
  overlay.classList.add('show');
  const moodKey = answers.q1 || 'feliz';
  const moodInfo = MOOD_DATA[moodKey];
  spotifyUrl = moodInfo.spotify;
  await new Promise(r => setTimeout(r, 1600));
  overlay.classList.remove('show');
  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('step-indicator').style.display = 'none';
  document.querySelectorAll('.question-screen').forEach(s => s.classList.remove('active'));
  const rs = document.getElementById('result-screen');
  rs.style.display = 'block';
  document.getElementById('result-mood-badge').textContent = '✦ ' + moodInfo.label;
  document.getElementById('result-title').textContent = moodInfo.title;
  document.getElementById('result-desc').textContent = moodInfo.desc;
  renderSongs(moodInfo.songs);
  callClaude(moodKey, answers.energy, answers.q3, answers.q4, moodInfo);
}

async function callClaude(mood, energy, context, genre, moodInfo) {
  const prompt = `Eres un DJ experto en psicología musical. Un usuario respondió una encuesta de estado de ánimo con estos datos:
- Emoción principal: ${mood}
- Nivel de energía: ${energy}/10
- Contexto actual: ${context || 'no especificado'}
- Género preferido: ${genre || 'sin preferencia'}

Escribe UN párrafo corto (máximo 55 palabras), personalizado y empático, dirigido directamente al usuario (usa "tú"), explicando por qué estas canciones son perfectas para su momento actual. Tono cálido y entusiasta. Solo el párrafo, sin saludos ni títulos.`;
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });
    const data = await res.json();
    const txt = data.content.map(b => b.text || '').join('');
    document.getElementById('ai-text').textContent = txt;
  } catch (e) {
    document.getElementById('ai-text').textContent = moodInfo.desc + ' Cada canción fue elegida para resonar con tu energía actual.';
  }
}

function renderSongs(songs) {
  const list = document.getElementById('song-list');
  list.innerHTML = '';
  songs.forEach((s, i) => {
    setTimeout(() => {
      const c = document.createElement('div');
      c.className = 'song-card';
      c.onclick = () => window.open('https://open.spotify.com/search/' + encodeURIComponent(s.name + ' ' + s.artist), '_blank');
      c.innerHTML = `
        <div class="song-cover">${s.emoji}</div>
        <div class="song-info">
          <div class="song-name">${s.name}</div>
          <div class="song-artist">${s.artist}</div>
        </div>
        <span class="song-tag">${s.tag}</span>
        <div class="play-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
      `;
      list.appendChild(c);
    }, i * 140);
  });
}

function openSpotify() { window.open(spotifyUrl, '_blank'); }

function restartSurvey() {
  answers.q1 = null; answers.energy = 5; answers.q3 = null; answers.q4 = null;
  document.getElementById('result-screen').style.display = 'none';
  document.getElementById('step-indicator').style.display = 'flex';
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  document.getElementById('energy-slider').value = 5;
  document.getElementById('energy-value').textContent = '5 / 10';
  ['btn-next-1','btn-next-3','btn-next-4'].forEach(id => document.getElementById(id).disabled = true);
  document.getElementById('ai-text').innerHTML = '<div class="loading-dots"><span></span><span></span><span></span></div>&nbsp; Analizando tu estado de ánimo...';
  document.getElementById('song-list').innerHTML = '';
  nextQuestion(1);
  scrollToSurvey();
}