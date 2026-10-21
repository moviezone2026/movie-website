/*
  MovieZone Collections data

  Fields:
    t    = title
    y    = year
    g    = genre line shown on the card
    c    = filter categories (space separated)
    p    = poster. Local file name (e.g. 'nosferatu-poster.jpg') or full image URL.
           Leave '' to show a styled placeholder.
    w    = Wikipedia / details link
    src  = Internet Archive item identifier  -> plays in the page via archive.org/embed/ID
    yt   = YouTube video ID (11 characters)   -> plays in the page via YouTube embed
    q    = YouTube search text, used for the Trailer button when no 'yt' ID is set yet
    sec  = 'classic' | 'horror' | 'tv'

  To add a new item, copy one block, change the values, and keep the comma between blocks.
*/

window.COLLECTIONS = [

/* =========================
   CLASSIC / PUBLIC DOMAIN
========================= */

{
  t: 'The Great Train Robbery',
  y: 1903,
  g: 'Western / Short',
  c: 'Classic Western',
  p: 'https://archive.org/services/img/TheGreatTrainRobbery_555',
  w: 'https://en.wikipedia.org/wiki/The_Great_Train_Robbery_(1903_film)',
  src: 'TheGreatTrainRobbery_555',
  sec: 'classic'
},

{
  t: 'Popeye the Sailor Meets Sindbad the Sailor',
  y: 1936,
  g: 'Animation / Short',
  c: 'Classic Animation',
  p: 'https://archive.org/services/img/POPEYEMeetsSindbadTheSailor1936',
  w: 'https://en.wikipedia.org/wiki/Popeye_the_Sailor_Meets_Sindbad_the_Sailor',
  src: 'POPEYEMeetsSindbadTheSailor1936',
  sec: 'classic'
},

{
  t: 'A Trip to the Moon',
  y: 1902,
  g: 'Science Fiction / Fantasy',
  c: 'Classic Science Fiction Adventure',
  p: 'https://archive.org/services/img/ATripToTheMoonGeorgeMelies',
  w: 'https://en.wikipedia.org/wiki/A_Trip_to_the_Moon',
  src: 'ATripToTheMoonGeorgeMelies',
  sec: 'classic'
},

{
  t: 'The Cabinet of Dr. Caligari',
  y: 1920,
  g: 'Horror / Silent',
  c: 'Classic Horror',
  p: 'https://archive.org/services/img/DasKabinettdesDoktorCaligariTheCabinetofDrCaligari',
  w: 'https://en.wikipedia.org/wiki/The_Cabinet_of_Dr._Caligari',
  src: 'DasKabinettdesDoktorCaligariTheCabinetofDrCaligari',
  sec: 'classic'
},

{
  t: 'The Kid',
  y: 1921,
  g: 'Comedy / Drama',
  c: 'Classic Drama Comedy',
  p: 'https://archive.org/services/img/Brzdac1921',
  w: 'https://en.wikipedia.org/wiki/The_Kid_(1921_film)',
  src: 'Brzdac1921',
  sec: 'classic'
},

{
  t: 'Nosferatu',
  y: 1922,
  g: 'Horror / Silent',
  c: 'Classic Horror',
  p: 'https://archive.org/services/img/Nosferatu_most_complete_version_93_mins.',
  w: 'https://en.wikipedia.org/wiki/Nosferatu',
  src: 'Nosferatu_most_complete_version_93_mins.',
  sec: 'classic'
},

{
  t: 'The Phantom of the Opera',
  y: 1925,
  g: 'Horror / Silent',
  c: 'Classic Horror',
  p: 'https://archive.org/services/img/ThePhantomoftheOpera',
  w: 'https://en.wikipedia.org/wiki/The_Phantom_of_the_Opera_(1925_film)',
  src: 'ThePhantomoftheOpera',
  sec: 'classic'
},

{
  t: 'The General',
  y: 1926,
  g: 'Comedy / Action',
  c: 'Classic Action Comedy',
  p: 'https://archive.org/services/img/TheGeneral1926',
  w: 'https://en.wikipedia.org/wiki/The_General_(1926_film)',
  src: 'TheGeneral1926',
  sec: 'classic'
},

{
  t: 'Metropolis',
  y: 1927,
  g: 'Science Fiction / Drama',
  c: 'Classic Science Fiction Drama',
  p: 'https://archive.org/services/img/metropolis-1927-english-titles',
  w: 'https://en.wikipedia.org/wiki/Metropolis_(1927_film)',
  src: 'metropolis-1927-english-titles',
  sec: 'classic'
},

{
  t: 'His Girl Friday',
  y: 1940,
  g: 'Comedy / Romance',
  c: 'Classic Comedy',
  p: 'https://archive.org/services/img/his_girl_friday',
  w: 'https://en.wikipedia.org/wiki/His_Girl_Friday',
  src: 'his_girl_friday',
  sec: 'classic'
},

{
  t: 'Plan 9 from Outer Space',
  y: 1957,
  g: 'Science Fiction / Horror',
  c: 'Classic Science Fiction Horror',
  p: 'https://archive.org/services/img/plan-9-from-outer-space',
  w: 'https://en.wikipedia.org/wiki/Plan_9_from_Outer_Space',
  src: 'plan-9-from-outer-space',
  sec: 'classic'
},

{
  t: 'Carnival of Souls',
  y: 1962,
  g: 'Horror / Mystery',
  c: 'Classic Horror',
  p: 'https://archive.org/services/img/CarnivalofSouls',
  w: 'https://en.wikipedia.org/wiki/Carnival_of_Souls',
  src: 'CarnivalofSouls',
  sec: 'classic'
},

{
  t: 'Charade',
  y: 1963,
  g: 'Romance / Thriller',
  c: 'Classic Thriller Romance',
  p: 'https://archive.org/services/img/charade-1963-cary-grant-audrey-hepburn-comedy-mystery-romance-thriller-full-movie',
  w: 'https://en.wikipedia.org/wiki/Charade_(1963_film)',
  src: 'charade-1963-cary-grant-audrey-hepburn-comedy-mystery-romance-thriller-full-movie',
  sec: 'classic'
},

{
  t: 'Night of the Living Dead',
  y: 1968,
  g: 'Horror',
  c: 'Classic Horror',
  p: 'https://archive.org/services/img/night_of_the_living_dead_dvd',
  w: 'https://en.wikipedia.org/wiki/Night_of_the_Living_Dead',
  src: 'night_of_the_living_dead_dvd',
  sec: 'classic'
},


/* =========================
   HORROR SERIES
   (add the YouTube video ID in yt: '' to enable the in-page trailer)
========================= */

{
  t: 'Stranger Things',
  y: 2016,
  g: 'Horror / Sci-Fi / Mystery',
  c: 'Horror Science Fiction',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Stranger_Things',
  yt: '',
  q: 'Stranger Things official trailer',
  sec: 'horror'
},

{
  t: 'Wednesday',
  y: 2022,
  g: 'Horror / Comedy / Mystery',
  c: 'Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Wednesday_(TV_series)',
  yt: '',
  q: 'Wednesday Netflix official trailer',
  sec: 'horror'
},

{
  t: 'The Haunting of Hill House',
  y: 2018,
  g: 'Horror / Drama',
  c: 'Horror Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/The_Haunting_of_Hill_House_(TV_series)',
  yt: '',
  q: 'The Haunting of Hill House official trailer',
  sec: 'horror'
},

{
  t: 'Midnight Mass',
  y: 2021,
  g: 'Horror / Drama',
  c: 'Horror Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Midnight_Mass_(miniseries)',
  yt: '',
  q: 'Midnight Mass official trailer',
  sec: 'horror'
},

{
  t: 'Supernatural',
  y: 2005,
  g: 'Horror / Fantasy',
  c: 'Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Supernatural_(American_TV_series)',
  yt: '',
  q: 'Supernatural official trailer',
  sec: 'horror'
},

{
  t: 'American Horror Story',
  y: 2011,
  g: 'Horror / Anthology',
  c: 'Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/American_Horror_Story',
  yt: '',
  q: 'American Horror Story official trailer',
  sec: 'horror'
},

{
  t: 'The Walking Dead',
  y: 2010,
  g: 'Horror / Drama',
  c: 'Horror Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/The_Walking_Dead_(TV_series)',
  yt: '',
  q: 'The Walking Dead official trailer',
  sec: 'horror'
},

{
  t: 'Penny Dreadful',
  y: 2014,
  g: 'Horror / Fantasy',
  c: 'Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Penny_Dreadful_(TV_series)',
  yt: '',
  q: 'Penny Dreadful official trailer',
  sec: 'horror'
},

{
  t: 'Hannibal',
  y: 2013,
  g: 'Horror / Thriller',
  c: 'Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Hannibal_(TV_series)',
  yt: '',
  q: 'Hannibal TV series official trailer',
  sec: 'horror'
},

{
  t: 'The Twilight Zone',
  y: 1959,
  g: 'Anthology / Sci-Fi / Horror',
  c: 'Horror Science Fiction',
  p: '',
  w: 'https://en.wikipedia.org/wiki/The_Twilight_Zone_(1959_TV_series)',
  yt: '',
  q: 'The Twilight Zone 1959 official',
  sec: 'horror'
},


/* =========================
   TV SHOWS
========================= */

{
  t: 'Breaking Bad',
  y: 2008,
  g: 'Crime / Drama',
  c: 'Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Breaking_Bad',
  yt: '',
  q: 'Breaking Bad official trailer',
  sec: 'tv'
},

{
  t: 'Game of Thrones',
  y: 2011,
  g: 'Fantasy / Drama',
  c: 'Drama Adventure',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Game_of_Thrones',
  yt: '',
  q: 'Game of Thrones official trailer',
  sec: 'tv'
},

{
  t: 'Money Heist',
  y: 2017,
  g: 'Crime / Thriller',
  c: 'Action Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Money_Heist',
  yt: '',
  q: 'Money Heist official trailer',
  sec: 'tv'
},

{
  t: 'Squid Game',
  y: 2021,
  g: 'Thriller / Drama',
  c: 'Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Squid_Game',
  yt: '',
  q: 'Squid Game official trailer',
  sec: 'tv'
},

{
  t: 'Sherlock',
  y: 2010,
  g: 'Crime / Mystery',
  c: 'Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Sherlock_(TV_series)',
  yt: '',
  q: 'Sherlock BBC official trailer',
  sec: 'tv'
},

{
  t: 'Peaky Blinders',
  y: 2013,
  g: 'Crime / Drama',
  c: 'Drama',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)',
  yt: '',
  q: 'Peaky Blinders official trailer',
  sec: 'tv'
},

{
  t: 'Friends',
  y: 1994,
  g: 'Comedy / Sitcom',
  c: 'Comedy',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Friends',
  yt: '',
  q: 'Friends official promo',
  sec: 'tv'
},

{
  t: 'The Office (US)',
  y: 2005,
  g: 'Comedy / Mockumentary',
  c: 'Comedy',
  p: '',
  w: 'https://en.wikipedia.org/wiki/The_Office_(American_TV_series)',
  yt: '',
  q: 'The Office US official trailer',
  sec: 'tv'
},

{
  t: 'Doctor Who',
  y: 1963,
  g: 'Science Fiction / Adventure',
  c: 'Science Fiction Adventure',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Doctor_Who',
  yt: '',
  q: 'Doctor Who official trailer',
  sec: 'tv'
},

{
  t: 'Mr. Bean',
  y: 1990,
  g: 'Comedy / Family',
  c: 'Comedy',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Mr._Bean',
  yt: '',
  q: 'Mr Bean official channel',
  sec: 'tv'
},

{
  t: 'Planet Earth',
  y: 2006,
  g: 'Documentary / Nature',
  c: 'Documentary Adventure',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Planet_Earth_(TV_series)',
  yt: '',
  q: 'Planet Earth BBC Earth official',
  sec: 'tv'
}

];
