import { v4 as uuidv4 } from "uuid";

import React from "react";

// SEPARATE THIS INTO A FUNCTION THAT RETURNS SURAH AUDIO LIST AND A FUNCTION THAT, GIVEN A SURAH< RETURNS THE COVER PHOTO AND COLORS (ONLY CALLED FOR ACTIVE SURAH)
const surahNames =
  "Al-Fatihah (The Opening),Al-Baqarah (The Cow),Al-'Imran (The Family of Amran),An-Nisa' (The Women),Al-Ma'idah (The Food),Al-An'am (The Cattle),Al-A'raf (The Elevated Places),Al-Anfal (Voluntary Gifts),Al-Bara'at / At-Taubah(The Immunity),Yunus (Jonah),Hud (Hud),Yusuf (Joseph),Ar-Ra'd (The Thunder),Ibrahim (Abraham),Al-Hijr (The Rock),An-Nahl (The Bee),Bani Isra'il (The Israelites),Al-Kahf (The Cave),Maryam (Mary),Ta Ha (Ta Ha),Al-Anbiya' (The Prophets),Al-Hajj (The Pilgrimage),Al-Mu'minun (The Believers),An-Nur (The Light),Al-Furqan (The Discrimination),Ash-Shu'ara' (The Poets),An-Naml (The Naml),Al-Qasas (The Narrative),Al-'Ankabut (The Spider),Ar-Rum (The Romans),Luqman (Luqman),As-Sajdah (The Adoration),Al-Ahzab (The Allies),Al-Saba' (The Saba'),Al-Fatir (The Originator),Ya Sin (Ya Sin),As-Saffat (Those Ranging in Ranks),Sad (Sad),Az-Zumar (The Companies),Al-Mu'min (The Believer),Ha Mim (Ha Mim),Ash-Shura (Counsel),Az-Zukhruf (Gold),Ad-Dukhan (The Drought),Al-Jathiyah (The Kneeling),Al-Ahqaf (The Sandhills),Muhammad (Muhammad),Al-Fath (The Victory),Al-Hujurat (The Apartments),Qaf (Qaf),Ad-Dhariyat (The Scatterers),At-Tur (The Mountain),An-Najm (The Star),Al-Qamar (The Moon),Ar-Rahman (The Beneficent),Al-Waqi'ah (The Event),Al-Hadid (Iron),Al-Mujadilah (The Pleading Woman),Al-Hashr (The Banishment),Al-Mumtahanah (The Woman who is Examined),As-Saff (The Ranks),Al-Jumu'ah (The Congregation),Al-Munafiqun (The Hypocrites),At-Taghabun (The Manifestation of Losses),At-Talaq (Divorce),At-Tahrim (The Prohibition),Al-Mulk (The Kingdom),Al-Qalam (The Pen),Al-Haqqah (The Sure Truth),Al-Ma'arij (The Ways of Ascent),Nuh (Noah),Al-Jinn (The Jinn),Al-Muzzammil (The One Covering Himself),Al-Muddaththir (The One Wrapping Himself Up),Al-Qiyamah (The Resurrection),Al-Insan (The Man),Al-Mursalat (Those Sent Forth),An-Naba' (The Announcement),An-Nazi'at (Those Who Yearn),'Abasa (He Frowned),At-Takwir (The Folding Up),Al-Infitar (The Cleaving),At-Tatfif (Default in Duty),Al-Inshiqaq (The Bursting Asunder),Al-Buruj (The Stars),At-Tariq (The Comer by Night),Al-A'la (The Most High),Al-Ghashiyah (The Overwhelming Event),Al-Fajr (The Daybreak),Al-Balad (The City),Ash-Shams (The Sun),Al-Lail (The Night),Ad-Duha (The Brightness of the Day),Al-Inshirah (The Expansion),At-Tin (The Fig),Al-'Alaq (The Clot),Al-Qadr (The Majesty),Al-Bayyinah (The Clear Evidence),Al-Zilzal (The Shaking),Al-'Adiyat (The Assaulters),Al-Qari'ah (The Calamity),At-Takathur (The Abundance of Wealth),Al-'Asr (The Time),Al-Humazah (The Slanderer),Al-Fil (The Elephant),Al-Quraish (The Quraish),Al-Ma'un (Acts of Kindness),Al-Kauthar (The Abundance of Good),Al-Kafirun (The Disbelievers),An-Nasr (The Help),Al-Lahab (The Flame),Al-Ikhlas (The Unity),Al-Falaq (The Dawn),An-Nas (The Men)";
export const surahNamesList = surahNames.split(",");
export const reciters = {
  "abdullaah_3awwaad_al-juhaynee": "Sheikh Abdullah Awad Al-Juhany",
  "abu_bakr_ash-shatri_tarawee7": "Sheikh Abu Bakr Ash-Shatri",
  "abdurrahmaan_as-sudays": "Sheikh Abdul Rahman Al-Sudais",
  "mahmood_khaleel_al-husaree_iza3a": "Sheikh Mahmoud Khalil Al Hussary",
  "yasser_ad-dussary": "Sheikh Yasser Al-Dosari",
  "sa3d_al-ghaamidi/complete": "Sheikh Saad al Ghamdi",
  "Sheikh Ahmed Ragab": "Sheikh Ahmed Ragab",
  abdurrashid_sufi: "Sheikh Abulrashid Sufi",
  muhammad_ayyoob: "Sheikh Muhammad Ayyub",
  "Sheikh Ayman Suwayd": "Sheikh Ayman Suwayd",
  "maher_almu3aiqly/year1440": "Sheikh Maher al Muaiqali",
  maher_256: "Sheikh Maher al Muaiqali (taraweeh)",
  "muhammad_jibreel/complete": "Sheikh Muhammad Jibreel",
  idrees_akbar: "Sheikh Idrees Abkar",
};

const Loading = () => <div>Loading...</div>;
const Loaded = () => <div>Loaded!</div>;
const getColor = () => {
  return Math.floor(Math.random() * 100) + 150;
};

export function getSurahs(reciter = "abdullaah_3awwaad_al-juhaynee") {
  let audioList = [];
  let collectionID = 401930;

  for (let i = 1; i < 115; i++) {
    let randomImageIndex = Math.floor(Math.random() * 1000);
    let colors = [];
    for (let x = 0; x < 7; x++) {
      colors.push(getColor());
    }

    let coverURL = `https://source.unsplash.com/collection/${collectionID}/480x480/?sig=${randomImageIndex}`;
    let s = i.toString();
    s = s.padStart(3, "0");

    let audio = `https://download.quranicaudio.com/quran/${reciter}/${s}.mp3`;

    const bespokeLinks = {
      "Sheikh Ahmed Ragab": `https://quran.islamway.net//quran3/245/${s}.mp3`,
      "Sheikh Ayman Suwayd": `https://ia600508.us.archive.org/22/items/rabieaaa2019_yahoo_002458947/${s}.mp3`,
    };

    if (reciter in bespokeLinks) {
      audio = bespokeLinks[reciter];
    }

    audioList.push({
      reciter: reciters[reciter],
      name: surahNamesList[i - 1],
      audio: audio,
      id: uuidv4(),
      active: false,
      color: colors,
      cover: coverURL,
    });
  }

  //   audioList[0].active = true;
  audioList[0].cover =
    "https://images.unsplash.com/photo-1526897498656-6dc773408c52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80";

  return audioList;
}

// function PalettePlayer() {
//   let coverURL =
//     "https://source.unsplash.com/collection/401930/480x480/?sig=500";
//   return (
//     <Palette
//       src={coverURL}
//       crossOrigin="anonymous"
//       format="hex"
//       colorCount={2}
//       quality={1000}
//     >
//       {({ data, loading }) => {
//         if (loading) {
//           return;
//         } else {
//           console.log(data);
//           return (
//             <div>
//               <img src={coverURL} />
//               Palette:
//               <ul>
//                 {data.map((color, index) => (
//                   <li key={index} style={{ color: color }}>
//                     <strong>{color}</strong>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           );
//         }
//       }}
//     </Palette>
//   );
// }

// export default PalettePlayer;
