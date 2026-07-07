/* ==========================================================================
   Lakshit Retro Macintosh PortfolioOS JavaScript Logic
   ========================================================================== */

// 1. Projects Database mapped with "Project Icons" and "Preview Image" from PDF
const PROJECTS = {
    longform: [
        {
            id: 'netflix-india',
            name: 'Netflix India',
            role: 'Online Editor',
            links: ['https://www.youtube.com/watch?v=qD1S_pEa6v0'],
            softwares: ['Premiere'],
            desc: 'Collaborative promotional review and comedy edit series featuring Tanmay Bhat. Synced multi-cam setup with fast pacing and dialogue accents.',
            logo: 'assets/netflix_logo.png', // netflix.png
            thumbnail: 'assets/extracted_img_p5_2.jpeg', // netflix.jpg
            class: 'brand-netflix',
            char: 'N'
        },
        {
            id: 'imdb',
            name: 'IMDb',
            role: 'Video Editor',
            links: ['https://www.youtube.com/playlist?list=PLfXmncuKJOf8'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Edited celebrity talk-shows, behind-the-scenes segments, and interview promos. Synced clean multi-source audio stems.',
            logo: 'assets/imdb.png', // imdb.png
            thumbnail: 'assets/extracted_img_p6_8.jpeg', // Imdb.jpg
            class: 'brand-imdb',
            char: 'IMDb'
        },
        {
            id: 'amazon-prime',
            name: 'Amazon Prime',
            role: 'Video Editor',
            links: ['https://www.youtube.com/watch?v=g6pLqDeeUsM'],
            softwares: ['Premiere'],
            desc: 'Promotional comedy features for Prime Mates series, cutting highlight segments with audio timing cues.',
            logo: 'assets/extracted_img_p1_2.png', // apv.png
            thumbnail: 'assets/prime.png', // prime.jpg
            class: 'brand-amazon',
            char: 'amzn'
        },
        {
            id: 'jesser',
            name: 'Jesser',
            role: 'Video Editor',
            links: ['https://www.youtube.com/playlist?list=PLErlt-n2-Umo'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'High-retention storytelling style edit, focusing on snappy typography overlays, micro-sound design, and relatable pacing highlights.',
            logo: 'assets/jesser.png', // jesser logo.jpg
            thumbnail: 'assets/extracted_img_p2_1.jpeg', // Jesser.jpg
            class: 'brand-generic',
            char: 'Jsr'
        },
        {
            id: 'vyre-long',
            name: 'VYRE',
            role: 'Editor / Content Strategist',
            links: ['https://youtube.com/playlist?list=PLeS6iBxWp8ck&si=a7SVDCzCWWXEcn5y'],
            softwares: ['Premiere', 'After Effects', 'Davinci Resolve'],
            desc: 'End-to-end long-form YouTube editing. Crafted deep explainers (like the Labubu Craze) with organic stock animations.',
            logo: 'assets/extracted_img_p1_4.png', // vyre logo white blue.png
            thumbnail: 'assets/extracted_img_p3_7.jpeg', // Labubu.jpg
            class: 'brand-vyre',
            char: 'Vyre'
        },
        {
            id: 'masters-union',
            name: 'Masters\' Union',
            role: 'Video Editor',
            links: ['https://www.youtube.com/c/MastersUnion'],
            softwares: ['Premiere', 'After Effects', 'Davinci Resolve'],
            desc: 'Corporate academic explainers and student highlight features. Polished sound tracks and clean corporate LUT color profiles.',
            logo: 'assets/extracted_img_p1_5.png', // mu.png
            thumbnail: 'assets/extracted_img_p8_8.jpeg', // mu.png
            class: 'brand-generic',
            char: 'MU'
        },
        {
            id: 'mesa-long',
            name: 'Mesa Business',
            role: 'Video Editor',
            links: ['https://www.youtube.com/playlist?list=PLOOG84MPf3LA'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Interactive business case studies explainers, focusing on Groww beating Zerodha and Souled Store business model.',
            logo: 'assets/extracted_img_p8_1.jpeg', // mesa-shcool.jpg
            thumbnail: 'assets/extracted_img_p8_9.jpeg', // Mesa.jpg
            class: 'brand-generic',
            char: 'Mesa'
        },
        {
            id: 'solar-square',
            name: 'Solar Square',
            role: 'Motion Artist',
            links: ['https://www.youtube.com/playlist?list=PLZVpx5yo4mnw'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Explainer videos detailing solar pricing models, combining animated physical solar models with dynamic screen trackers.',
            logo: 'assets/extracted_img_p10_1.jpeg', // solar sq.png
            thumbnail: 'assets/extracted_img_p10_8.jpeg', // solar.jpg
            class: 'brand-generic',
            char: 'Solar'
        },
        {
            id: 'endgame-ai',
            name: 'Endgame AI',
            role: 'Colorist',
            links: ['https://www.instagram.com/reel/DVrXEy0EwB2/'],
            softwares: ['Davinci Resolve'],
            desc: 'Lead colorist grading promotional reels. Created moody dark blues and high-contrast skin tones for AI-themed clips.',
            logo: 'assets/endgame_logo.png', // Endgame ai.png
            thumbnail: 'assets/extracted_img_p10_9.jpeg', // Hans.jpg
            class: 'brand-ai',
            char: 'Eng'
        },
        {
            id: 's8ul-long',
            name: 'S8UL Gaming',
            role: 'Video Editor',
            links: ['https://www.youtube.com/watch?si=G1QLQ4Wj3dJqZMnv&v=t_3iE69pSq0&feature=youtu.be'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'High-energy esports reaction logs, syncing custom game overlays, zoom keyframes, and soundboard effects.',
            logo: 'assets/s8ul_logo.png', // s8.png
            thumbnail: 'assets/extracted_img_p14_4.jpeg', // s8ul.jpg
            class: 'brand-gaming',
            char: 'S8UL'
        },
        {
            id: 'tribe-gaming',
            name: 'Tribe Gaming',
            role: 'Video Editor',
            links: ['https://www.youtube.com/watch?si=GI8tD5rf05-ffYfE&v=dLGkI12BI_U&feature=youtu.be'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Fast-paced gaming commentary logs, balancing game audio feeds, vocal stems, and comedic zoom edits.',
            logo: 'assets/tribe.png', // tribe.png
            thumbnail: 'assets/extracted_img_p15_2.jpeg', // tribe thumb.jpg
            class: 'brand-gaming',
            char: 'Trb'
        },
        {
            id: 'snax-long',
            name: 'Snax Gaming',
            role: 'Video Editor',
            links: ['https://youtube.com/watch?si=3ixVGyz3ViQSoBDC&v=bm2dnWVSLIo&feature=youtu.be'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Esports travel vlogs and tournament digests, matching clean audio transitions with documentary pacing.',
            logo: 'assets/extracted_img_p12_1.jpeg', // snax pfp.jpg
            thumbnail: 'assets/snax pfp.png', // snax thumb.jpg
            class: 'brand-gaming',
            char: 'Snx'
        },
        {
            id: '8bit-mamba',
            name: '8bit Mamba',
            role: 'Video Editor',
            links: ['https://www.youtube.com/watch?v=-tfN2hugZ9c'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Syncing pizza challenge vlogs, multi-camera audio levels, highlight cards, and fast soundboard effects.',
            logo: 'assets/mamba pfp.png', // mamba pfp.jpeg
            thumbnail: 'assets/extracted_img_p14_2.jpeg', // mamba thumb.jpg
            class: 'brand-gaming',
            char: '8bit'
        },
        {
            id: 'fing-long',
            name: 'Fing',
            role: 'Video Editor',
            links: ['https://www.youtube.com/playlist?list=PLV8qWVSBr7m4'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Mystery and dark narrative documentary reviews, combining suspenseful score swells, low lighting color LUTs, and typography headers.',
            logo: 'assets/fing pfp.png', // fing pfp.jpg
            thumbnail: 'assets/extracted_img_p15_3.jpeg', // fing pfp.jpg
            class: 'brand-creative',
            char: 'Fing'
        },
        {
            id: 'adit-long',
            name: 'Adit Minocha',
            role: 'Video Editor',
            links: ['https://www.youtube.com/playlist?list=PLwjLif3y8Kn8PgEEPX0h1BgrZ5U6Juvdv'],
            softwares: ['Premiere'],
            desc: 'Synced dialogue edits for comedy commentary reels, integrating highlight title graphics and pop-ups.',
            logo: 'assets/adit pfp.png', // adit pfp.jpg
            thumbnail: 'assets/extracted_img_p15_4.jpeg', // adit thumbnail.jpg
            class: 'brand-creative',
            char: 'Adit'
        },
        {
            id: 'tech-burner',
            name: 'Tech Burner',
            role: 'Motion Artist',
            links: ['https://drive.google.com/file/d/11M1icHw_yBUNQ1sbS1O2sTWN354nP4ez/view?usp=sharing'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Created customized composition motion tracks, dynamic logo swipes, and screen overlay assets for tech channels.',
            logo: 'assets/extracted_img_p13_1.jpeg', // tech pfp.jpg
            thumbnail: 'assets/extracted_img_p13_8.jpeg', // techburner thumn.jpg
            class: 'brand-creative',
            char: 'TB'
        },
        {
            id: 'stop-motion',
            name: 'Stop Motion',
            role: 'VFX Artist',
            links: ['https://drive.google.com/file/d/1b6mTD5dz24V3l6ztG2IybVqSYf1GUFHO/view?usp=drive_link'],
            softwares: ['After Effects'],
            desc: 'Handled VFX tracking, stabilization, and asset compositing for a stop-motion paper-animation short film.',
            logo: 'assets/extracted_img_p18_1.jpeg', // voicenote.png
            thumbnail: 'assets/extracted_img_p18_2.jpeg', // voicenote.png
            class: 'brand-film',
            char: 'Stop'
        },
        {
            id: 'ifp-film',
            name: 'IFP Film',
            role: 'Editor / Sound Designer',
            links: ['https://www.instagram.com/reel/DBBqyKHKM4W/'],
            softwares: ['Premiere', 'After Effects', 'Davinci Resolve'],
            desc: 'Edited "Mere Pyaare Imroz" within the strict 50-hour window. Synced dual-system dialogues, ambient noise filtering, and custom LUT color profiles.',
            logo: 'assets/extracted_img_p18_2.jpeg', // mere.png
            thumbnail: 'assets/extracted_img_p18_2.jpeg', // mere.png
            class: 'brand-film',
            char: 'IFP'
        },
        {
            id: 'marathi-film',
            name: 'Marathi Film',
            role: 'Editor / Colorist',
            links: ['https://youtu.be/Rtthsi3wTgg'],
            softwares: ['Premiere', 'After Effects', 'Davinci Resolve'],
            desc: 'Full length student movie assembly. Developed film-stock color LUTs, and audio tracks synchronization.',
            logo: 'assets/extracted_img_p16_1.jpeg', // Ravi mi.png
            thumbnail: 'assets/extracted_img_p16_3.jpeg', // Ravi mi.png
            class: 'brand-film',
            char: 'Film'
        }
    ],
    
    shortform: [
        {
            id: 'samay-raina',
            name: 'Samay Raina',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DQ1l1YwkiVV/'],
            softwares: ['Premiere', 'Davinci Resolve'],
            desc: 'High-speed vertical chess stream digests. Synced reaction highlights, soundboards, and dynamic auto-captions.',
            logo: 'assets/extracted_img_p11_1.jpeg', // samay.jpg
            thumbnail: 'assets/extracted_img_p11_4.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'SmR'
        },
        {
            id: 'youtube-india',
            name: 'Youtube India',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DR4OyFEEWzC/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Official short-form promotional edits. Implemented kinetic typography grids, slick transition swipes, and sound effects.',
            logo: 'assets/extracted_img_p1_7.png', // yt.jpg
            thumbnail: 'assets/extracted_img_p11_5.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'YT'
        },
        {
            id: 'nykaaman',
            name: 'Nykaaman',
            role: 'Editor / Motion Artist',
            links: [
                'https://www.instagram.com/p/DW3rQ4HkpdP/',
                'https://www.instagram.com/p/DXMfjkqjMu4/',
                'https://www.instagram.com/p/DXb51HpDKez/',
                'https://www.instagram.com/p/DV8lgxPDF8B/'
            ],
            softwares: ['Premiere', 'After Effects', 'Davinci Resolve'],
            desc: 'Men\'s grooming aesthetic promotional campaign. Balanced high-fashion pacing edits, tracking overlays, and glowing color LUTs.',
            logo: 'assets/extracted_img_p7_1.jpeg', // nykaaman.webp
            thumbnail: 'assets/extracted_img_p7_7.jpeg', // iyd thumb.jpg
            class: 'brand-netflix',
            char: 'Nyk'
        },
        {
            id: 'slayy-point',
            name: 'Slayy Point',
            role: 'Video Editor',
            links: ['https://drive.google.com/drive/u/2/folders/1WqJ0VdlxLdsrkZwkwse9BWqUUN4iEtlX'],
            softwares: ['Premiere'],
            desc: 'Slick comedy reaction reels, focusing on zoom accents, punchline pacing, and text animations.',
            logo: 'assets/slayy_logo.png', // slayy.jpg
            thumbnail: 'assets/extracted_img_p11_2.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'SP'
        },
        {
            id: 'iyd',
            name: 'IYD',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DL69cGKzq3l/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Aesthetic street-fashion highlight reels. Handled color grade matching and visual sound sweeps.',
            logo: 'assets/iyd_logo.jpg', // Iyd.jpeg
            thumbnail: 'assets/extracted_img_p7_7.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'IYD'
        },
        {
            id: 'aspora',
            name: 'Aspora',
            role: 'Video Editor',
            links: ['https://www.instagram.com/reel/DLz8W5ayqjn/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Fast-paced corporate interview reels, balancing clean subtitles, focus-switches, and corporate scoring.',
            logo: 'assets/aspora_logo.png', // images.png
            thumbnail: 'assets/extracted_img_p7_8.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'Asp'
        },
        {
            id: 'mesa-short',
            name: 'Mesa Business',
            role: 'Editor / Motion Artist',
            links: ['https://www.youtube.com/playlist?list=PLJt5pozGYGK4'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'FinTech short case studies reels, combining custom financial charts and motion graphs.',
            logo: 'assets/extracted_img_p8_2.jpeg', // mesa-shcool.jpg
            thumbnail: 'assets/extracted_img_p8_9.jpeg', // iyd thumb.jpg
            class: 'brand-generic',
            char: 'Mesa'
        },
        {
            id: 'gcl',
            name: 'GCL',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DSkHMbNEUT-/'],
            softwares: ['Davinci Resolve'],
            desc: 'Promotional real estate clip color grades. Balanced outdoor sunlight shadows and saturated highlight detail.',
            logo: 'assets/extracted_img_p10_3.jpeg', // gcl.jpeg
            thumbnail: 'assets/extracted_img_p10_9.jpeg', // iyd thumb.jpg
            class: 'brand-generic',
            char: 'GCL'
        },
        {
            id: 'rj-dheeraj',
            name: 'Rj Dheeraj',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DRR4yPMCOJj/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Radio talk show visual summaries, matching audio waveforms with custom subtitle typography.',
            logo: 'assets/extracted_img_p13_2.jpeg', // rj dheeraj.jpeg
            thumbnail: 'assets/extracted_img_p13_7.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'RJD'
        },
        {
            id: 'darshan',
            name: 'Darshan',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DMz_wHcJpsH/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'High-tempo music concert recap cut, syncing key frame lens flares and bass drop transitions.',
            logo: 'assets/extracted_img_p13_3.jpeg', // darshan.jpg
            thumbnail: 'assets/extracted_img_p13_9.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'Drn'
        },
        {
            id: 'vyre-short',
            name: 'VYRE',
            role: 'Editor / Motion Artist',
            links: ['https://www.youtube.com/playlist?list=PLPNsbSZnF3-M'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'VYRE mobile-first explanation reels, focusing on dopamine loop marketing and consumer psychology.',
            logo: 'assets/extracted_img_p3_2.jpeg', // vyre logo white blue.png
            thumbnail: 'assets/extracted_img_p3_7.jpeg', // iyd thumb.jpg
            class: 'brand-vyre',
            char: 'Vyre'
        },
        {
            id: 'scout-short',
            name: 'Scout',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/C8EVy06MNeQ/'],
            softwares: ['Premiere'],
            desc: 'Vlog snippets and stream updates for Scout (S8UL), optimizing audio peaks and comedic zoom inserts.',
            logo: 'assets/extracted_img_p12_5.jpeg', // scout.jpeg
            thumbnail: 'assets/extracted_img_p12_5.jpeg', // iyd thumb.jpg
            class: 'brand-gaming',
            char: 'Sct'
        },
        {
            id: 'z47-moments',
            name: 'Z47 Moments',
            role: 'Editor / Motion Artist',
            links: ['https://drive.google.com/drive/folders/1Cor415ygr59aIkQTU5ysxs7yDoExpmFT?usp=drive_link'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Matrix Moments interview reels, detailing startup investments with animated title slides.',
            logo: 'assets/extracted_img_p13_4.jpeg', // z47.png
            thumbnail: 'assets/color_after.png', // iyd thumb.jpg
            class: 'brand-gaming',
            char: 'Z47'
        },
        {
            id: 'agastya-short',
            name: 'Agastya Shah',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/DFNWjp9tXEm/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Lifestyle vlog shorts, balancing quick dialogue transitions, voice levelling, and color grades.',
            logo: 'assets/extracted_img_p11_3.jpeg', // agasthya shah.jpeg
            thumbnail: 'assets/extracted_img_p11_3.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'Agst'
        },
        {
            id: 'ayush-short',
            name: 'Ayush Wadhwa',
            role: 'Video Editor',
            links: ['https://www.instagram.com/p/C9cHbBgvgjw/'],
            softwares: ['Premiere', 'After Effects'],
            desc: 'Podcast highlights shorts, using keyframe screen overlays and auto-captions layout.',
            logo: 'assets/extracted_img_p12_2.jpeg', // ayush.jpeg
            thumbnail: 'assets/extracted_img_p12_2.jpeg', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'Ayh'
        },
        {
            id: 'theorist',
            name: 'Theorist',
            role: 'Editor / Motion Artist',
            links: ['https://www.instagram.com/p/DRUU_gIk089/'],
            softwares: ['Premiere', 'After Effects', 'Davinci Resolve'],
            desc: 'Explainer reels detailing scientific paradoxes, matching motion paths graphics with flat color grades.',
            logo: 'assets/extracted_img_p12_3.jpeg', // theorist.jpg
            thumbnail: 'assets/color_after.png', // iyd thumb.jpg
            class: 'brand-creative',
            char: 'Theo'
        }
    ]
};

// Error Messages for Software Crashes
const CRASH_ERRORS = {
    'Premiere Pro': {
        title: 'Premiere Pro has crashed',
        msg: "I don't wanna work right now"
    },
    'After Effects': {
        title: 'After effects has crashed',
        msg: "Install more ram right now, 128gb isn't enough!!"
    },
    'Davinci Resolve': {
        title: 'Davinci Resolve has crashed',
        msg: 'Too many nodes!!'
    }
};

// Inline SVGs for software crash reports
const SOFTWARE_LOGOS = {
    'Premiere Pro': `
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#391a4d" stroke="#000" stroke-width="2"/>
            <rect x="3" y="3" width="26" height="26" rx="2" stroke="#cc66ff" stroke-width="1.5"/>
            <text x="16" y="22" font-family="Outfit, sans-serif" font-weight="900" font-size="14" fill="#cc66ff" text-anchor="middle">Pr</text>
        </svg>
    `,
    'After Effects': `
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#001c3d" stroke="#000" stroke-width="2"/>
            <rect x="3" y="3" width="26" height="26" rx="2" stroke="#00d2ff" stroke-width="1.5"/>
            <text x="16" y="22" font-family="Outfit, sans-serif" font-weight="900" font-size="14" fill="#00d2ff" text-anchor="middle">Ae</text>
        </svg>
    `,
    'Davinci Resolve': `
        <svg width="44" height="44" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="4" fill="#1e272e" stroke="#000" stroke-width="2"/>
            <circle cx="16" cy="11" r="5" fill="#ff4d4d" style="mix-blend-mode: screen;"/>
            <circle cx="11" cy="19" r="5" fill="#2ecc71" style="mix-blend-mode: screen;"/>
            <circle cx="21" cy="19" r="5" fill="#3498db" style="mix-blend-mode: screen;"/>
        </svg>
    `
};

// State Variables
let currentMode = 'longform';
let activeProject = null;
let activeZIndex = 200;
let dinoGameInstance = null;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
    initClock();
    initWindowManagement();
    initColorGradingSlider();
    initAfterEffectsComp();
    initTerminalShell();
    
    // Set Initial Mode
    switchMode('longform');
});

// ==========================================================================
// 2. macOS Top Status Bar Clock
// ==========================================================================
function initClock() {
    const clockElement = document.getElementById('top-bar-clock');
    if (!clockElement) return;
    
    function updateClock() {
        const now = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        
        const day = days[now.getDay()];
        const month = months[now.getMonth()];
        const date = now.getDate();
        
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        
        clockElement.textContent = `${day} ${month} ${date} ${hours}:${minutes} ${ampm}`;
    }
    
    updateClock();
    setInterval(updateClock, 30000);
}

// ==========================================================================
// 3. UI Mode Switching (Longform vs Shortform)
// ==========================================================================
function switchMode(mode) {
    currentMode = mode;
    
    // Highlight folder icons
    document.querySelectorAll('.mode-folder').forEach(f => f.classList.remove('active-mode'));
    const activeFolder = document.getElementById(`folder-${mode}`);
    if (activeFolder) activeFolder.classList.add('active-mode');
    
    // Update top bar tag
    const modeTag = document.getElementById('system-mode-tag');
    if (modeTag) modeTag.textContent = `Mode: ${mode.toUpperCase()}`;
    
    // Redraw scattered icons on desktop
    drawScatteredDesktopIcons();
}

// ==========================================================================
// 4. Grid-Based Non-Overlapping Icon Scattering
// ==========================================================================
function drawScatteredDesktopIcons() {
    const container = document.getElementById('scattered-projects-container');
    if (!container) return;
    
    container.innerHTML = ''; // Clear existing
    
    const projectsList = PROJECTS[currentMode];
    
    // Grid Setup
    const cols = 5;
    const rows = 4;
    const cellIndices = [];
    for (let i = 0; i < cols * rows; i++) {
        cellIndices.push(i);
    }
    
    // Shuffle grid cells
    for (let i = cellIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cellIndices[i], cellIndices[j]] = [cellIndices[j], cellIndices[i]];
    }
    
    // Desktop icons that must be scaled up to stand out immediately
    const largeProjects = ['netflix-india', 'amazon-prime', 'imdb', 'youtube-india', 'samay-raina', 'slayy-point', 'nykaaman', 'tech-burner'];
    
    projectsList.forEach((proj, idx) => {
        if (idx >= cellIndices.length) return;
        
        const cellIdx = cellIndices[idx];
        const cellCol = cellIdx % cols;
        const cellRow = Math.floor(cellIdx / cols);
        
        const baseLeft = (cellCol / cols) * 90 + 5;
        const baseTop = (cellRow / rows) * 85 + 5;
        
        const jitterLeft = (Math.random() * 6) - 3;
        const jitterTop = (Math.random() * 6) - 3;
        
        const finalLeft = baseLeft + jitterLeft;
        const finalTop = baseTop + jitterTop;
        
        const iconDiv = document.createElement('div');
        iconDiv.className = 'desktop-icon project-scatter-file';
        iconDiv.style.left = `${finalLeft}%`;
        iconDiv.style.top = `${finalTop}%`;
        iconDiv.style.transform = `scale(0)`;
        
        // Mark as large if it is a featured project
        if (largeProjects.includes(proj.id)) {
            iconDiv.classList.add('large-desktop-icon');
        }
        
        iconDiv.onclick = () => {
            openProjectDetails(proj.id);
        };
        
        iconDiv.innerHTML = `
            <div class="brand-icon-wrapper ${proj.class || 'brand-generic'}">
                <img src="${proj.logo}" alt="${proj.name}" class="desktop-brand-logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <span class="fallback-char" style="display:none;">${proj.char || proj.name[0]}</span>
            </div>
            <span class="icon-label">${proj.name}</span>
        `;
        
        container.appendChild(iconDiv);
        
        setTimeout(() => {
            // Apply proper scaling on animation trigger
            if (largeProjects.includes(proj.id)) {
                iconDiv.style.transform = `scale(1.22)`;
            } else {
                iconDiv.style.transform = `scale(1)`;
            }
        }, idx * 25);
    });
}

// ==========================================================================
// 5. Project Details View (Dynamic Widescreen and 9:16 Vertical Preview)
// ==========================================================================
function openProjectDetails(projId) {
    const projList = PROJECTS[currentMode];
    const proj = projList.find(p => p.id === projId);
    if (!proj) return;
    
    activeProject = proj;
    const win = document.getElementById('window-project-details');
    if (!win) return;
    
    const isShort = (currentMode === 'shortform');
    
    // Size window dynamically based on format
    if (isShort) {
        win.style.width = '350px';
        win.style.height = '600px';
        win.style.left = 'calc(50% - 175px)';
        win.style.top = '60px';
    } else {
        win.style.width = '680px';
        win.style.height = '430px';
        win.style.left = 'calc(50% - 340px)';
        win.style.top = '100px';
    }
    
    // Set Title
    document.getElementById('project-details-title').textContent = `Preview — ${proj.name}`;
    
    // Draw layout
    const container = document.getElementById('project-details-content-container');
    
    if (isShort) {
        // Vertical 9:16 content
        container.className = 'project-details-layout vertical-layout scrollable';
        container.innerHTML = `
            <div class="vertical-monitor-wrapper">
                <div class="video-mock-container vertical-monitor clickable-monitor-thumbnail" onclick="playActiveProject()">
                    <img src="${proj.thumbnail}" alt="${proj.name}" class="monitor-thumbnail-img" onerror="this.src='assets/color_after.png';">
                    <div class="play-icon-overlay-badge"><i class="fa-solid fa-play"></i></div>
                </div>
            </div>
            <div class="vertical-meta-wrapper">
                <h3 class="proj-title">${proj.name}</h3>
                <div class="video-badge" style="margin-bottom:8px;"><span class="role-text">${proj.role}</span></div>
                <p class="proj-desc">${proj.desc}</p>
                <div class="links-grid" id="project-multi-links" style="display:flex; flex-direction:column; gap:6px; margin-top:10px;">
                    <!-- Loaded below -->
                </div>
            </div>
        `;
    } else {
        // Horizontal 16:9 widescreen content
        container.className = 'project-details-layout horizontal-layout';
        container.innerHTML = `
            <div class="horizontal-meta-wrapper">
                <h3 class="proj-title">${proj.name}</h3>
                <div class="video-badge" style="margin-bottom:12px;"><span class="role-text">${proj.role}</span></div>
                <p class="proj-desc" style="max-height:170px; overflow-y:auto; font-size:11.5px; line-height:1.4;">${proj.desc}</p>
                <div class="links-grid" id="project-multi-links" style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
                    <!-- Loaded below -->
                </div>
            </div>
            <div class="horizontal-monitor-wrapper">
                <div class="video-mock-container horizontal-monitor clickable-monitor-thumbnail" onclick="playActiveProject()">
                    <img src="${proj.thumbnail}" alt="${proj.name}" class="monitor-thumbnail-img" onerror="this.src='assets/color_after.png';">
                    <div class="play-icon-overlay-badge"><i class="fa-solid fa-play"></i></div>
                </div>
            </div>
        `;
    }
    
    // Load links
    const linksContainer = document.getElementById('project-multi-links');
    proj.links.forEach((url, index) => {
        const a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.className = 'video-link-btn';
        
        let label = 'Play Clip';
        if (url.includes('instagram.com')) label = 'Watch Reel';
        else if (url.includes('drive.google.com')) label = 'View Drive File';
        
        if (proj.links.length > 1) {
            label = `Play Clip ${index + 1}`;
        }
        
        a.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${label}`;
        linksContainer.appendChild(a);
    });
    
    openWindow('window-project-details');
}

function playActiveProject() {
    if (!activeProject) return;
    
    // Direct link redirection
    if (activeProject.links.length === 1) {
        window.open(activeProject.links[0], '_blank');
    } else {
        // Multi links popup fallback
        const modal = document.getElementById('video-player-modal');
        if (!modal) return;
        
        document.getElementById('video-modal-title').textContent = activeProject.name;
        document.getElementById('cinema-header-title').textContent = activeProject.name;
        document.getElementById('cinema-client').textContent = `Role: ${activeProject.role}`;
        document.getElementById('cinema-role').textContent = activeProject.softwares.join(' + ');
        document.getElementById('cinema-desc').textContent = activeProject.desc;
        
        const linksContainer = document.getElementById('cinema-links-badge-grid');
        linksContainer.innerHTML = '';
        activeProject.links.forEach((url, index) => {
            const a = document.createElement('a');
            a.href = url;
            a.target = '_blank';
            a.className = 'video-link-btn';
            
            let label = `Play Clip ${index + 1}`;
            a.innerHTML = `<i class="fa-solid fa-arrow-up-right-from-square"></i> ${label}`;
            linksContainer.appendChild(a);
        });
        
        modal.style.display = 'flex';
    }
}

function closeVideoModal() {
    const modal = document.getElementById('video-player-modal');
    if (modal) modal.style.display = 'none';
}

// ==========================================================================
// 6. Software Crash Alerts with software logos dynamically loaded
// ==========================================================================
function openCrashAlert(softName) {
    const alertData = CRASH_ERRORS[softName];
    if (!alertData) return;
    
    const win = document.getElementById('window-crash-alert');
    if (!win) return;
    
    document.getElementById('crash-alert-title').textContent = `${softName} alert`;
    document.getElementById('crash-alert-headline').textContent = alertData.title;
    document.getElementById('crash-alert-desc').textContent = alertData.msg;
    
    // Load logo SVG dynamically
    const logoContainer = document.getElementById('crash-alert-logo-container');
    if (logoContainer && SOFTWARE_LOGOS[softName]) {
        logoContainer.innerHTML = SOFTWARE_LOGOS[softName];
    } else if (logoContainer) {
        logoContainer.innerHTML = `<i class="fa-solid fa-bomb" style="font-size: 32px;"></i>`;
    }
    
    win.style.display = 'flex';
    activeZIndex += 1;
    win.style.zIndex = activeZIndex;
}

// ==========================================================================
// 7. Wifi Dinosaur Runner Game
// ==========================================================================
class DinoRunner {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        this.gravity = 0.55;
        this.dino = {
            x: 40,
            y: this.height - 35,
            width: 22,
            height: 25,
            vy: 0,
            isJumping: false,
            jumpForce: -8.0
        };
        
        this.obstacles = [];
        this.obstacleSpeed = 3.2;
        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('dino_highscore') || '0', 10);
        this.isPlaying = false;
        this.gameOver = false;
        this.spawnTimer = 0;
        
        // Listeners
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleTouch = this.handleTouch.bind(this);
        
        window.addEventListener('keydown', this.handleKeyDown);
        this.canvas.addEventListener('click', this.handleTouch);
        this.canvas.addEventListener('touchstart', this.handleTouch, { passive: true });
        
        this.reset();
        this.draw();
    }
    
    reset() {
        this.dino.y = this.height - 35;
        this.dino.vy = 0;
        this.dino.isJumping = false;
        this.obstacles = [];
        this.score = 0;
        this.gameOver = false;
        this.spawnTimer = 0;
        this.obstacleSpeed = 3.2;
    }
    
    start() {
        if (this.isPlaying) return;
        this.isPlaying = true;
        this.reset();
        this.loop();
    }
    
    stop() {
        this.isPlaying = false;
    }
    
    handleKeyDown(e) {
        if (e.key === ' ' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.jump();
        }
    }
    
    handleTouch(e) {
        e.preventDefault();
        this.jump();
    }
    
    jump() {
        if (this.gameOver) {
            this.start();
            return;
        }
        if (!this.isPlaying) {
            this.start();
            return;
        }
        if (!this.dino.isJumping) {
            this.dino.vy = this.dino.jumpForce;
            this.dino.isJumping = true;
        }
    }
    
    spawnObstacle() {
        this.obstacles.push({
            x: this.width,
            y: this.height - 30 - 20,
            width: 14,
            height: 20
        });
    }
    
    loop() {
        if (!this.isPlaying) return;
        
        this.update();
        this.draw();
        
        if (!this.gameOver) {
            requestAnimationFrame(() => this.loop());
        }
    }
    
    update() {
        this.dino.vy += this.gravity;
        this.dino.y += this.dino.vy;
        
        const groundY = this.height - 30 - this.dino.height;
        if (this.dino.y > groundY) {
            this.dino.y = groundY;
            this.dino.vy = 0;
            this.dino.isJumping = false;
        }
        
        this.spawnTimer++;
        if (this.spawnTimer > 90 + Math.random() * 60) {
            this.spawnObstacle();
            this.spawnTimer = 0;
        }
        
        for (let i = this.obstacles.length - 1; i >= 0; i--) {
            const obs = this.obstacles[i];
            obs.x -= this.obstacleSpeed;
            
            if (
                this.dino.x < obs.x + obs.width &&
                this.dino.x + this.dino.width > obs.x &&
                this.dino.y < obs.y + obs.height &&
                this.dino.y + this.dino.height > obs.y
            ) {
                this.triggerGameOver();
            }
            
            if (obs.x + obs.width < 0) {
                this.obstacles.splice(i, 1);
                this.score += 10;
                if (this.score % 60 === 0) {
                    this.obstacleSpeed += 0.3;
                }
            }
        }
    }
    
    triggerGameOver() {
        this.gameOver = true;
        this.isPlaying = false;
        if (this.score > this.highScore) {
            this.highScore = this.score;
            localStorage.setItem('dino_highscore', this.highScore.toString());
        }
    }
    
    draw() {
        const ctx = this.ctx;
        ctx.fillStyle = '#eae5df';
        ctx.fillRect(0, 0, this.width, this.height);
        
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, this.height - 30);
        ctx.lineTo(this.width, this.height - 30);
        ctx.stroke();
        
        ctx.fillStyle = '#000';
        ctx.fillRect(this.dino.x + 6, this.dino.y, 14, 10);
        ctx.fillRect(this.dino.x, this.dino.y + 10, 16, 12);
        ctx.fillRect(this.dino.x + 3, this.dino.y + 22, 3, 3);
        ctx.fillRect(this.dino.x + 10, this.dino.y + 22, 3, 3);
        ctx.fillStyle = '#eae5df';
        ctx.fillRect(this.dino.x + 14, this.dino.y + 2, 2, 2);
        
        ctx.fillStyle = '#000';
        this.obstacles.forEach(obs => {
            ctx.fillRect(obs.x + 4, obs.y, obs.width - 8, obs.height);
            ctx.fillRect(obs.x, obs.y + 4, 4, obs.height / 2);
            ctx.fillRect(obs.x, obs.y + 4, obs.width / 2, 4);
            ctx.fillRect(obs.x + obs.width - 4, obs.y + 8, 4, obs.height / 2.5);
            ctx.fillRect(obs.x + obs.width / 2, obs.y + 8, obs.width / 2, 4);
        });
        
        ctx.fillStyle = '#000';
        ctx.font = 'bold 9px monospace';
        ctx.fillText(`SCORE: ${this.score}`, 10, 15);
        ctx.fillText(`HI: ${this.highScore}`, this.width - 70, 15);
        
        if (this.gameOver) {
            ctx.fillStyle = 'rgba(234, 229, 223, 0.85)';
            ctx.fillRect(0, 0, this.width, this.height);
            
            ctx.fillStyle = '#000';
            ctx.font = 'bold 11px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText("GAME OVER", this.width / 2, this.height / 2 - 15);
            ctx.font = '9px sans-serif';
            ctx.fillText(`Score: ${this.score} | Best: ${this.highScore}`, this.width / 2, this.height / 2);
            ctx.fillText("Tap screen or Press Space to Restart", this.width / 2, this.height / 2 + 18);
            ctx.textAlign = 'start';
        } else if (!this.isPlaying) {
            ctx.fillStyle = 'rgba(234, 229, 223, 0.8)';
            ctx.fillRect(0, 0, this.width, this.height);
            ctx.fillStyle = '#000';
            ctx.font = 'bold 10px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText("Press Space or Click to Jump & Play", this.width / 2, this.height / 2);
            ctx.textAlign = 'start';
        }
    }
}

function openWifiGame() {
    openWindow('window-wifi-dino');
    if (!dinoGameInstance) {
        dinoGameInstance = new DinoRunner('dino-canvas');
    } else {
        dinoGameInstance.reset();
        dinoGameInstance.draw();
    }
}

// ==========================================================================
// 8. Dump of Ideas Bin Dialogs
// ==========================================================================
function openBinText(title, content) {
    const win = document.getElementById('window-notepad');
    if (!win) return;
    
    document.getElementById('notepad-title').textContent = title;
    document.getElementById('notepad-body').textContent = content;
    
    win.style.display = 'block';
    activeZIndex += 2;
    win.style.zIndex = activeZIndex;
}

// ==========================================================================
// 9. Window Management (Drag, Maximize, Minimize, zIndex)
// ==========================================================================
function initWindowManagement() {
    const windows = document.querySelectorAll('.window');
    
    windows.forEach(win => {
        win.addEventListener('mousedown', () => focusWindow(win));
        win.addEventListener('touchstart', () => focusWindow(win), { passive: true });
        
        const header = win.querySelector('.window-header');
        if (header) setupDragging(win, header);
    });
}

function focusWindow(win) {
    if (win.classList.contains('active-window')) return;
    
    document.querySelectorAll('.window').forEach(w => w.classList.remove('active-window'));
    activeZIndex += 1;
    win.style.zIndex = activeZIndex;
    win.classList.add('active-window');
}

function openWindow(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;
    
    win.style.display = 'flex';
    focusWindow(win);
    
    const dot = document.getElementById(`dot-${windowId}`);
    if (dot) dot.classList.add('open-app');
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;
    win.style.display = 'none';
    
    const dot = document.getElementById(`dot-${windowId}`);
    if (dot) dot.classList.remove('open-app');
    
    if (windowId === 'window-wifi-dino' && dinoGameInstance) {
        dinoGameInstance.stop();
    }
}

function minimizeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) win.style.display = 'none';
}

function toggleMaximize(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;
    
    if (win.dataset.maximized === 'true') {
        win.style.top = win.dataset.prevTop || '100px';
        win.style.left = win.dataset.prevLeft || '100px';
        win.style.width = win.dataset.prevWidth || '600px';
        win.style.height = win.dataset.prevHeight || '400px';
        win.dataset.maximized = 'false';
    } else {
        win.dataset.prevTop = win.style.top;
        win.dataset.prevLeft = win.style.left;
        win.dataset.prevWidth = win.style.width;
        win.dataset.prevHeight = win.style.height;
        
        win.style.top = '26px';
        win.style.left = '0px';
        win.style.width = '100%';
        win.style.height = 'calc(100vh - 100px)';
        win.dataset.maximized = 'true';
    }
}

function setupDragging(win, header) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
    header.onmousedown = dragMouseDown;
    header.ontouchstart = dragTouchStart;
    
    function dragMouseDown(e) {
        if (e.target.classList.contains('control')) return;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        focusWindow(win);
    }
    
    function dragTouchStart(e) {
        if (e.target.classList.contains('control')) return;
        const touch = e.touches[0];
        pos3 = touch.clientX;
        pos4 = touch.clientY;
        document.ontouchend = closeDragElement;
        document.ontouchmove = elementTouchDrag;
        focusWindow(win);
    }
    
    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        
        let newTop = win.offsetTop - pos2;
        let newLeft = win.offsetLeft - pos1;
        
        if (newTop < 26) newTop = 26;
        if (newTop > window.innerHeight - 80) newTop = window.innerHeight - 80;
        
        win.style.top = `${newTop}px`;
        win.style.left = `${newLeft}px`;
    }
    
    function elementTouchDrag(e) {
        const touch = e.touches[0];
        pos1 = pos3 - touch.clientX;
        pos2 = pos4 - touch.clientY;
        pos3 = touch.clientX;
        pos4 = touch.clientY;
        
        let newTop = win.offsetTop - pos2;
        let newLeft = win.offsetLeft - pos1;
        
        if (newTop < 26) newTop = 26;
        if (newTop > window.innerHeight - 80) newTop = window.innerHeight - 80;
        
        win.style.top = `${newTop}px`;
        win.style.left = `${newLeft}px`;
    }
    
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.ontouchmove = null;
    }
}

// Dock click helper for about window
const dockAboutItem = document.querySelector('.dock-item[data-window="window-about"]');
if (dockAboutItem) {
    dockAboutItem.addEventListener('click', () => {
        const win = document.getElementById('window-about');
        if (win.style.display === 'flex' && win.classList.contains('active-window')) {
            minimizeWindow('window-about');
        } else {
            openWindow('window-about');
        }
    });
}

// ==========================================================================
// 10. Empty placeholders for other elements
// ==========================================================================
function initColorGradingSlider() {}
function initAfterEffectsComp() {}
function initTerminalShell() {}
