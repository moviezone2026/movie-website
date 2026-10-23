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
    sec  = 'classic' | 'horror' | 'south' | 'tv'
 
  To add a new item, copy one block, change the values, and keep the comma between blocks.
*/
 
window.COLLECTIONS = [
 
/* =========================
   CLASSIC / PUBLIC DOMAIN
========================= */
 
{
  t: 'The Great Train Robbery',
  d: 'the-great-train-robbery-1903.html',
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
  d: 'popeye-the-sailor-meets-sindbad-the-sailor-1936.html',
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
  d: 'a-trip-to-the-moon-1902.html',
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
  d: 'the-cabinet-of-dr-caligari-1920.html',
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
  d: 'the-kid-1921.html',
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
  d: 'nosferatu-1922.html',
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
  d: 'the-phantom-of-the-opera-1925.html',
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
  d: 'the-general-1926.html',
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
  d: 'metropolis-1927.html',
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
  d: 'his-girl-friday-1940.html',
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
  d: 'plan-9-from-outer-space-1957.html',
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
  d: 'carnival-of-souls-1962.html',
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
  d: 'charade-1963.html',
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
  d: 'night-of-the-living-dead-1968.html',
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
  d: 'stranger-things-2016.html',
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
  d: 'wednesday-2022.html',
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
  d: 'the-haunting-of-hill-house-2018.html',
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
  d: 'midnight-mass-2021.html',
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
  d: 'supernatural-2005.html',
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
  d: 'american-horror-story-2011.html',
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
  d: 'the-walking-dead-2010.html',
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
  d: 'penny-dreadful-2014.html',
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
  d: 'hannibal-2013.html',
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
  d: 'the-twilight-zone-1959.html',
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
   SOUTH HORROR MOVIES
   (trailers & details only - add poster in p: and YouTube ID in yt: when you have them)
========================= */
 
{
  t: 'Manichitrathazhu',
  d: 'manichitrathazhu-1993.html',
  y: 1993,
  g: 'Malayalam / Psychological Horror',
  c: 'Horror South Malayalam Horror',
  p: 'manichitrathazhu-1993.jpg',
  w: 'https://en.wikipedia.org/wiki/Manichitrathazhu',
  yt: 'D5SSyk_jaSE',
  q: 'Manichitrathazhu 1993 official trailer',
  sec: 'south'
},
 
{
  t: 'Chandramukhi',
  d: 'chandramukhi-2005.html',
  y: 2005,
  g: 'Tamil / Horror Comedy',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Chandramukhi',
  yt: '',
  q: 'Chandramukhi 2005 trailer',
  sec: 'south'
},
 
{
  t: 'Arundhati',
  d: 'arundhati-2009.html',
  y: 2009,
  g: 'Telugu / Supernatural Horror',
  c: 'Horror South Telugu Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Arundhati_(2009_film)',
  yt: '',
  q: 'Arundhati 2009 trailer',
  sec: 'south'
},
 
{
  t: 'Kanchana (Muni 2)',
  d: 'kanchana-muni-2-2011.html',
  y: 2011,
  g: 'Tamil / Horror Comedy',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Kanchana_(2011_film)',
  yt: '',
  q: 'Kanchana Muni 2 official trailer',
  sec: 'south'
},
 
{
  t: 'Pizza',
  d: 'pizza-2012.html',
  y: 2012,
  g: 'Tamil / Horror Thriller',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Pizza_(2012_film)',
  yt: '',
  q: 'Pizza 2012 Tamil official trailer',
  sec: 'south'
},
 
{
  t: 'Pisaasu',
  d: 'pisaasu-2014.html',
  y: 2014,
  g: 'Tamil / Horror Drama',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Pisaasu',
  yt: '',
  q: 'Pisaasu official trailer',
  sec: 'south'
},
 
{
  t: 'Aranmanai',
  d: 'aranmanai-2014.html',
  y: 2014,
  g: 'Tamil / Horror Comedy',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/w/index.php?search=Aranmanai+2014+film',
  yt: '',
  q: 'Aranmanai 2014 official trailer',
  sec: 'south'
},
 
{
  t: 'Demonte Colony',
  d: 'demonte-colony-2015.html',
  y: 2015,
  g: 'Tamil / Horror Thriller',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Demonte_Colony',
  yt: '',
  q: 'Demonte Colony official trailer',
  sec: 'south'
},
 
{
  t: 'Maya',
  d: 'maya-2015.html',
  y: 2015,
  g: 'Tamil / Horror Thriller',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/w/index.php?search=Maya+2015+Tamil+film',
  yt: '',
  q: 'Maya 2015 Tamil official trailer',
  sec: 'south'
},
 
{
  t: 'Raju Gari Gadhi',
  d: 'raju-gari-gadhi-2015.html',
  y: 2015,
  g: 'Telugu / Horror Comedy',
  c: 'Horror South Telugu Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Raju_Gari_Gadhi',
  yt: '',
  q: 'Raju Gari Gadhi official trailer',
  sec: 'south'
},
 
{
  t: 'Pretham',
  d: 'pretham-2016.html',
  y: 2016,
  g: 'Malayalam / Horror Comedy',
  c: 'Horror South Malayalam Horror',
  p: '',
  w: 'https://en.wikipedia.org/w/index.php?search=Pretham+2016+Malayalam+film',
  yt: '',
  q: 'Pretham 2016 official trailer',
  sec: 'south'
},
 
{
  t: 'Ezra',
  d: 'ezra-2017.html',
  y: 2017,
  g: 'Malayalam / Supernatural Horror',
  c: 'Horror South Malayalam Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Ezra_(film)',
  yt: '',
  q: 'Ezra Malayalam official trailer',
  sec: 'south'
},
 
{
  t: 'Aval',
  d: 'aval-2017.html',
  y: 2017,
  g: 'Tamil / Horror Thriller',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/w/index.php?search=Aval+2017+film',
  yt: '',
  q: 'Aval 2017 Tamil official trailer',
  sec: 'south'
},
 
{
  t: 'Anando Brahma',
  d: 'anando-brahma-2017.html',
  y: 2017,
  g: 'Telugu / Horror Comedy',
  c: 'Horror South Telugu Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Anando_Brahma',
  yt: '',
  q: 'Anando Brahma official trailer',
  sec: 'south'
},
 
{
  t: 'Bhoothakaalam',
  d: 'bhoothakaalam-2022.html',
  y: 2022,
  g: 'Malayalam / Psychological Horror',
  c: 'Horror South Malayalam Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Bhoothakaalam',
  yt: '',
  q: 'Bhoothakaalam official trailer',
  sec: 'south'
},
 
{
  t: 'Bramayugam',
  d: 'bramayugam-2024.html',
  y: 2024,
  g: 'Malayalam / Horror Thriller',
  c: 'Horror South Malayalam Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Bramayugam',
  yt: '',
  q: 'Bramayugam official trailer',
  sec: 'south'
},
 
{
  t: 'Aranmanai 4',
  d: 'aranmanai-4-2024.html',
  y: 2024,
  g: 'Tamil / Horror Comedy',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Aranmanai_4',
  yt: '',
  q: 'Aranmanai 4 official trailer',
  sec: 'south'
},
 
{
  t: 'Demonte Colony 2',
  d: 'demonte-colony-2-2024.html',
  y: 2024,
  g: 'Tamil / Horror Thriller',
  c: 'Horror South Tamil Horror',
  p: '',
  w: 'https://en.wikipedia.org/wiki/Demonte_Colony_2',
  yt: '',
  q: 'Demonte Colony 2 official trailer',
  sec: 'south'
},
 
/* =========================
   TV SHOWS
========================= */
 
{
  t: 'Breaking Bad',
  d: 'breaking-bad-2008.html',
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
  d: 'game-of-thrones-2011.html',
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
  d: 'money-heist-2017.html',
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
  d: 'squid-game-2021.html',
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
  d: 'sherlock-2010.html',
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
  d: 'peaky-blinders-2013.html',
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
  d: 'friends-1994.html',
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
  d: 'the-office-us-2005.html',
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
  d: 'doctor-who-1963.html',
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
  d: 'mr-bean-1990.html',
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
  d: 'planet-earth-2006.html',
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
