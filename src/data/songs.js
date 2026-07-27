import { parseSection } from '../utils/parseChords';

// Chords verified against jakzagrac.pl (guitar lesson site, full text+chords),
// cross-checked structurally against chords.pl. Standard tuning, no capo.
const agnieszka = {
  id: 'agnieszka',
  title: 'Agnieszka',
  artist: 'Łzy',
  key: 'F',
  capo: null,
  chordsUsed: ['F', 'C', 'Dm', 'Bb'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[F]Było ciepłe lato choć czasem [C]padało',
        '[Dm]Dużo wina się piło i mało się [Bb]spało',
        '[C]Tak zaczęła się wakacyjna [Dm]przygoda',
        '[Bb]Gdy on był jeszcze młody i ona była młoda',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[F]Zakochani przy świetle księżyca [C]nocami',
        '[Dm]Chodzili długimi, leśnymi [Bb]ścieżkami',
        '[C]Tak mijały tygodnie lecz rozstania nadszedł [Dm]czas',
        '[Bb]Zawsze mówił jedno zdanie „Moje śliczne ty kochanie”',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[F]Ostatniego dnia tych pamiętnych [C]wakacji',
        '[Dm]Kochali się namiętnie w męskiej [Bb]ubikacji',
        '[C]I przysięgli przed Bogiem miłość [Dm]wzajemną',
        '[Bb]Że za rok się spotkają i na zawsze ze sobą już [F]będą',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'F  Dm  C   x2',
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        '[F]Tęsknił za nią i pisał do niej listy [C]miłosne',
        '[Dm]W samotności przeżył jesień, zimę, [Bb]wiosnę',
        '[C]Nie wytrzymał do wakacji, postanowił ją [Dm]odwiedzić',
        '[Bb]Bo nie dostał już dawno od niej żadnej odpowiedzi',
      ]),
    },
    {
      label: 'Zwrotka 5',
      lines: parseSection([
        '[F]Gdy przyjechał do jej domu po dość długiej [C]podróży',
        '[Dm]Cieszył się, że ją zobaczy, w końcu tyle dla niej [Bb]znaczył',
        '[C]Lecz gdy ona go ujrzała, szybko się [Dm]schowała',
        '[Bb]Drzwi mu matka otworzyła i tak mu powiedziała',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection(['[F]Agnieszka [Dm]już [C]dawno [F]tutaj [Dm]nie [C]mieszka']),
    },
    {
      label: 'Zwrotka 6',
      lines: parseSection([
        '[F]Rozczarował się, bo takie są zawody [C]miłosne',
        '[Dm]Cierpiał całą jesień, zimę, no i [Bb]wiosnę',
        '[C]A gdy przeszło mu zupełnie, pojechał na [Dm]wakacje',
        '[Bb]W tamto miejsce, by zobaczyć tę pamiętną ubikację',
      ]),
    },
    {
      label: 'Zwrotka 7',
      lines: parseSection([
        '[F]Tak się stało, że przypadkiem ona też tam [C]była',
        '[Dm]Ucieszyła się ogromnie, gdy go tylko [Bb]zobaczyła',
        '[C]Zapytała się, czy w sercu jego jest jeszcze [Dm]Agnieszka',
        '[Bb]Odpowiedział jednym zdaniem „Moje śliczne ty kochanie”',
      ]),
    },
    {
      label: 'Refren (x4)',
      lines: parseSection(['[F]Agnieszka [Dm]już [C]dawno [F]tutaj [Dm]nie [C]mieszka']),
      repeat: 4,
    },
  ],
};

// Chords verified against zagrajnagitarze.pl (full text+chords, two-column layout).
const bylasDlaMnieWszystkim = {
  id: 'bylas-dla-mnie-wszystkim',
  title: 'Byłaś dla mnie wszystkim',
  artist: 'Poparzeni Kawą Trzy',
  key: 'Em',
  capo: null,
  chordsUsed: ['Em', 'Am', 'B7', 'D', 'G'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Em]Lekarstwem na zgagę',
        '[Am]Promocją w spożywczym',
        '[B7]Tramwajem na Pragę',
        '[Em]Napojem odżywczym',
        '[Em]Paczką papierosów',
        '[Am]Pasztetem kaliskim',
        '[B7]Prezentem od losu',
        '[B7]Byłaś dla mnie wszystkim!',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[Em]Byłaś dla mnie [Am]wszystkim',
        '[D]Co się w życiu [G]liczy',
        '[Em]Teraz gdy po [Am]wszystkim',
        '[B7]Wszystko jest już [Em]niczym',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Em]Pierwszą kawą z rana',
        '[Am]Krynicą mądrości',
        '[B7]Śniegiem po kolana',
        '[Em]Obiektem zazdrości',
        '[Em]Poezją, żelazkiem',
        '[Am]Danielem Olbrychskim',
        '[B7]I sielskim obrazkiem',
        '[B7]Byłaś dla mnie wszystkim!',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[Em]Byłaś dla mnie [Am]wszystkim',
        '[D]Co się w życiu [G]liczy',
        '[Em]Teraz gdy po [Am]wszystkim',
        '[B7]Wszystko jest już [Em]niczym',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[Em]Ligi mistrzów meczem',
        '[Am]Spacerem nad morzem',
        '[B7]Pamiątką po diecie',
        '[Em]Snem w technicolorze',
        '[Em]Codzienną zachętą',
        '[Am]Do pobudek niskich',
        '[B7]Dziwką oraz świętą',
        '[B7]Byłaś dla mnie wszystkim!',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[Em]Byłaś dla mnie [Am]wszystkim',
        '[D]Co się w życiu [G]liczy',
        '[Em]Teraz gdy po [Am]wszystkim',
        '[B7]Wszystko jest już [Em]niczym',
      ]),
    },
  ],
};

// Chords verified word-by-word against spiewnik.wywrota.pl (chord-tagged lyrics),
// full lyric text cross-checked against tekstowo.pl for completeness.
const klocki = {
  id: 'klocki',
  title: 'Klocki',
  artist: 'Kabanos',
  key: 'Gm',
  capo: null,
  chordsUsed: ['Gm', 'Bb', 'F', 'Cm'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Gm]Koleżanko cytrynowa',
        '[Bb]Nie masz rączek',
        '[F]Ale szkoda',
        '[Cm]Nie masz nóżek',
        '[Gm]Ale co tam',
        '[Bb]Razem [F]pobawmy [Gm]się',
        '[Gm]Hej kolego porzeczkowy',
        '[Bb]Jesteś kwaśny',
        '[F]Ale zdrowy',
        '[Cm]Pompuj piłkę',
        '[Gm]Wkładaj buty',
        '[Bb]Razem [F]pobawimy [Gm]się',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Gm]I nawet [Bb]jeśli [F]czarne [Gm]chmury',
        '[Cm]Wnet za[Bb]słonią [F]niebo [Gm]nam',
        '[Gm]I ktoś mi [Bb]schowa [F]wszystkie [Gm]klocki',
        '[Cm]I nawet [Bb]jeśli [F]zostanę [Gm]sam',
      ]),
    },
    {
      label: 'Bridge',
      lines: parseSection([
        '[Gm]I tak będę skakać po tapczanie',
        '[Bb]I nigdy szare [F]życie mnie nie złamie',
        '[Cm]Na podłodze leżą [Gm]klocki rozsypane',
        '[Bb]Ja pou[F]kładam [Gm]je',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Gm]Koleżanko malinowa',
        '[Bb]Cała jesteś',
        '[F]Owłosiona',
        '[Cm]Niech ci któryś',
        '[Gm]Naubliża',
        '[Bb]Walnę go w [F]pusty [Gm]łeb',
        '[Gm]Hej kolego truskawkowy',
        '[Bb]Jesteś taki',
        '[F]Przestraszony',
        '[Cm]Wyłaź z domu',
        '[Gm]Na powietrze',
        '[Bb]Z deszczem [F]oswoję [Gm]cię',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Gm]I nawet [Bb]jeśli [F]czarne [Gm]chmury',
        '[Cm]Wnet za[Bb]słonią [F]niebo [Gm]nam',
        '[Gm]I ktoś mi [Bb]schowa [F]wszystkie [Gm]klocki',
        '[Cm]I nawet [Bb]jeśli [F]zostanę [Gm]sam',
      ]),
    },
    {
      label: 'Bridge',
      lines: parseSection([
        '[Gm]I tak będę skakać po tapczanie',
        '[Bb]I nigdy szare [F]życie mnie nie złamie',
        '[Cm]Na podłodze leżą [Gm]klocki rozsypane',
        '[Bb]Ja pou[F]kładam [Gm]je',
      ]),
    },
    {
      label: 'Outro',
      lines: parseSection([
        '[Gm]I tak moich marzeń wam nie oddam',
        '[Bb]Póki w żyłach krew',
        '[F]Nigdy się nie poddam',
        '[Cm]Będzie trzeba to bałagan',
        '[Gm]Swój posprzątam',
        '[Bb]Ja pou[F]kładam [Gm]się',
      ]),
    },
    {
      label: 'Bridge',
      lines: parseSection([
        '[Gm]I tak będę skakać po tapczanie',
        '[Bb]I nigdy szare [F]życie mnie nie złamie',
        '[Cm]Na podłodze leżą [Gm]klocki rozsypane',
        '[Bb]Ja pou[F]kładam [Gm]je',
      ]),
    },
    {
      label: 'Outro',
      lines: parseSection([
        '[Gm]I tak moich marzeń wam nie oddam',
        '[Bb]Póki w żyłach krew',
        '[F]Nigdy się nie poddam',
        '[Cm]Będzie trzeba to bałagan',
        '[Gm]Swój posprzątam',
        '[Bb]Ja pou[F]kładam [Gm]się',
      ]),
    },
  ],
};

// Chords/lyrics supplied by the user (surowe-piosenki/doda dzaga.txt), verified
// against Polish chord-notation music theory (h=Bm, fis=F#m, H=B, B=Bb — all
// diatonic to the stated key of D, and to E after the whole-step modulation).
const dzaga = {
  id: 'dzaga',
  title: 'Dżaga',
  artist: 'Doda',
  key: 'D (modulacja do E)',
  capo: null,
  chordsUsed: ['D', 'A', 'Bm', 'G', 'F#m', 'Bb', 'C', 'E', 'B', 'C#m'],
  sections: [
    {
      label: 'Wstęp (instr.)',
      instrumental: 'D A Bm A G  /  D A G A  /  D A Bm F#m G  /  D A G A',
    },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[D]Mówią [A]mi jesteś [Bm]kimś,',
        'Możesz [G]mieć każdego [D]bo,',
        'Fajna [A]dżaga z ciebie [Bm]jest.[G]',
        '[D]Ale [A]ja jedno [Bm]chcę,',
        'I nikt [G]nie zrozumie, [D]że,',
        'Dla mnie [A]liczy się ko[Bm]chanie.[G]',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'D A Bm F#m G  /  D A G A',
    },
    {
      label: 'Zwrotka 1 (c.d.)',
      lines: parseSection([
        '[D]Mówią [A]mi skała [Bm]jest,',
        'Mówi „[G]kocham” myśli „[D]precz”,',
        'Chce wy[A]kończyć jego [Bm]też.[G]',
        '[D]Ale [A]to jest mój [Bm]świat,',
        'I jak [G]kocham to na [D]bank,',
        'Mogę [A]nienawidzić [Bm]też.[G]',
      ]),
    },
    {
      label: 'Przejście',
      lines: parseSection([
        '[A]Więc mogę [G]męczyć,',
        '[A]I cię za[Bb]dręczyć [C]lecz...',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[D]Chociaż [A]świat, ludzie [Bm]źli,',
        'Nie poz[G]wolą nam być, [D]tak,',
        'U[A]kradnę [Bm]cię.[G]',
        'Jest też [D]coś, ja to [A]wiem,',
        'Że nie [Bm]boję życia [G]się,',
        'I dla[D]tego [A]mam to [Bm]gdzieś.[G]',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[D]Mówią [A]mi „olej [Bm]go”,',
        'Obudź [G]się i przestań [D]śnić,',
        'Że wy[A]leczy kiedyś [Bm]się.[G]',
        '[D]Mówię [A]wam, tak ma [Bm]być,',
        'Nie o[G]budzisz mnie za [D]nic,',
        'Bo ja [A]też chcę chora [Bm]być.[G]',
      ]),
    },
    {
      label: 'Zwrotka 2 (c.d.)',
      lines: parseSection([
        '[D]Chora na [A]wrzaski, chora na [Bm]słowa,',
        'Chora [G]aż mnie boli [D]głowa,',
        'Jest za [A]mała na ten [Bm]jazz.[G]',
        '[D]Chora na [A]zazdrość, chora na [Bm]chwile,',
        'To mło[G]dości są mo[D]tyle,',
        'I dla [A]bogów jasne [Bm]jest.[G]',
      ]),
    },
    {
      label: 'Przejście',
      lines: parseSection([
        '[A]Wiem, że mnie [G]męczysz,',
        '[A]Wiem, że mnie [Bb]dręczysz [C]lecz...',
      ]),
    },
    {
      label: 'Refren (powtórka)',
      lines: parseSection([
        '[D]Chociaż [A]świat, ludzie [Bm]źli,',
        'Nie poz[G]wolą nam być, [D]tak,',
        'U[A]kradnę [Bm]cię.[G]',
        'Jest też [D]coś, ja to [A]wiem,',
        'Że nie [Bm]boję życia [G]się,',
        'I dla[D]tego [A]mam to [Bm]gdzieś.',
      ]),
    },
    {
      label: 'Refren (modulacja, x2)',
      repeat: 2,
      lines: parseSection([
        'Chociaż [E]świat, ludzie [B]źli,',
        'Nie poz[C#m]wolą razem [A]być,',
        'To i [E]tak u[B]kradnę [C#m]cię.[A]',
        'Jest też [E]coś, ja to [B]wiem,',
        'Że nie [C#m]boję życia [A]się,',
        'I dla[E]tego [B]mam to [C#m]gdzieś.[A]',
      ]),
    },
    {
      label: 'Akord końcowy',
      instrumental: 'E',
    },
  ],
};

// Chords/lyrics supplied by the user (surowe-piosenki/facet to swinia big cyc.txt).
// Chord letters were spliced directly into the words at the change point (e.g.
// "Gaezetę" = chord e inserted inside "Gazetę"); reconstructed against the real
// Polish lyrics. All chords (G,C,D,Em,Am,Bm) are diatonic to the key of G.
const facetToSwinia = {
  id: 'facet-to-swinia',
  title: 'Facet to świnia',
  artist: 'Big Cyc',
  key: 'G',
  capo: null,
  chordsUsed: ['G', 'C', 'D', 'Em', 'Am', 'Bm'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        'Jak [G]zwykle znów nie robisz nic',
        'Ga[Em]zetę czytasz cały dzień',
        'Łas[Am]kawie czasem obiad zjesz',
        'Po [D]domu snujesz się jak cień',
        'Ty z [G]kolegami wolisz pić',
        'Niż z [Em]moją mamą ciasto piec',
        'I [Am]zamiast dzieckiem zająć się',
        'Musia[D]łeś znowu wyjść na mecz',
      ]),
    },
    {
      label: 'Przedrefren',
      lines: parseSection([
        '[Bm]To nie jest miłość, lecz [Em]ja kocham Cię',
        'Nie [Am]jestem świnią, [C]choć ty tego [D]chcesz.',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Facet to świnia[G]',
        'Mówisz, że ty o [Em]tym wiesz',
        'Choć ja się [Am]staram jak mogę',
        '[C]Przez całe życie słyszę ten [D]tekst',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        'Ty w [G]telewizor gapisz się',
        'A [Em]do kościoła chodzisz sam',
        'I ni[Am]gdy nie przytulisz mnie',
        'W łazi[D]ence znowu cieknie kran',
        'Gdy[G] w nocy czujesz się jak lew',
        'To [Em]obręcz ściska moją skroń',
        'No ki[Am]edy wreszcie puścisz mnie',
        'Migre[D]na to najlepsza broń',
      ]),
    },
    {
      label: 'Przedrefren',
      lines: parseSection([
        '[Bm]To nie jest miłość, lecz [Em]ja kocham Cię',
        'Nie [Am]jestem świnią, [C]choć ty tego [D]chcesz.',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Facet to świnia[G]',
        'Mówisz, że ty o [Em]tym wiesz',
        'Choć ja się [Am]staram jak mogę',
        '[C]Przez całe życie słyszę ten [D]tekst',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        'O sam[G]ochodach mówisz wciąż',
        'Do dzie[Em]wczyn ślinisz się jak pies',
        'Ty ży[Am]cie zmarnowałeś mi',
        'Od ko[D]go jest ten SMS?',
        'I cho[G]ciaż oszukujesz mnie',
        'Ja lu[Em]bię twój szelmowski śmiech',
        'Bez cie[Am]bie nudny byłby świat',
        'Bo fa[D]cet to jest dobra rzecz',
      ]),
    },
    {
      label: 'Przedrefren',
      lines: parseSection([
        '[Bm]To nie jest miłość, lecz [Em]ja kocham Cię',
        'Nie [Am]jestem świnią, [C]choć ty tego [D]chcesz.',
      ]),
    },
    {
      label: 'Refren (x3)',
      repeat: 3,
      lines: parseSection([
        'Facet to świnia[G]',
        'Mówisz, że ty o [Em]tym wiesz',
        'Choć ja się [Am]staram jak mogę',
        '[C]Przez całe życie słyszę ten [D]tekst',
      ]),
    },
  ],
};

// Chords/lyrics supplied by the user (surowe-piosenki/t love i love you.txt).
// Simple I-V-IV progression (G-D-C) in the stated key of G, no minors used.
const iLoveYou = {
  id: 'i-love-you',
  title: 'I Love You',
  artist: 'T.Love',
  key: 'G',
  capo: null,
  chordsUsed: ['G', 'D', 'C'],
  sections: [
    {
      label: 'Wstęp (instr.)',
      instrumental: 'G G G D  /  C C C C  /  G G G D  /  C C C C',
    },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[G]Olewam rząd, mandaty dro[D]gowe,',
        'Di[C]lerów, maklerów, warty honorowe.',
        'I [G]jeszcze wąsacza olewam na [D]zdrowie,',
        'Pry[C]masa w lampasach, komuchy nie lubię.',
        '[G]Tylko na tobie naprawdę mi za[D]leży,',
        '[C]Tylko Ciebie naprawdę potrzebuję.',
        'I [G]kiedy znikasz, kiedy Ciebie [D]nie ma,',
        'W po[C]wietrzu czuję, czegoś mi brakuje.',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'G G G D  /  C C C C',
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[G]Ludzie mówią, że jestem pi[D]jakiem,',
        '[C]Chodnikowym, równym chłopakiem.',
        '[G]Ludzie mówią, że nie trzymam to[D]nacji,',
        'Nie [C]ćwiczę gam - nowej demokracji.',
        '[G]Ale ja mam w sobie mor[D]dercę,',
        '[C]Wojownika, chcę zjeść Twoje serce.',
        '[G]Chcę mieć w Tobie przyja[D]ciela,',
        '[C]Poczuć coś, poczuć coś, coś Ci dać!',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[G]Oh yeah chcę Ci po[D]wiedzieć - I [C]love you, I love you, I love you, I love you,',
        '[G]Oh yeah nie jestem [D]mądry - I [C]love you, I love you, I love you.',
        '[G]Oh yeah nie jestem [D]dobry - I [C]love you, I love you, I love you, I love you,',
        '[G]Oh yeah chcę Ci po[D]wiedzieć - I [C]love you, I love you, I love you.',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'G G G D  /  C C C C',
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[G]Pozytywnego coś, pozytyw[D]nego coś,',
        '[C]Bardzo chciałbym dać dziś Tobie.',
        '[G]Pozytywnego coś, pozytyw[D]nego,',
        '[C]To nie jest łatwe, to nie jest modne.',
        '[G]Ale ja nie lubię latać [D]nisko,',
        '[C]Uwierz mi, uwierz mi, chcę być blisko.',
        '[G]Telepatycznie, telefo[D]nicznie,',
        '[C]Wiem o czym myślisz, wiem czego chcesz.',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'G G G D  /  C C C C',
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        '[G]Olewam złączonych w organi[D]zacjach,',
        'Szpry[C]cerów olewam na kolejowych stacjach.',
        '[G]I tych co robią po uszy w biz[D]nesie,',
        'W skor[C]pionach białych - olewam kolesi.',
        '[G]Tylko na tobie naprawdę mi za[D]leży,',
        '[C]Tylko Ciebie naprawdę potrzebuję.',
        '[G]I kiedy znikasz, kiedy Ciebie [D]nie ma,',
        'W po[C]wietrzu czuję, czegoś mi brakuje:',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'G G G D  /  C C C C',
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[G]Oh yeah chcę Ci po[D]wiedzieć - I [C]love you, I love you, I love you, I love you,',
        '[G]Oh yeah nie jestem [D]mądry - I [C]love you, I love you, I love you.',
        '[G]Oh yeah nie jestem [D]dobry - I [C]love you, I love you, I love you, I love you,',
        '[G]Oh yeah chcę Ci po[D]wiedzieć - I [C]love you, I love you, I love you.',
      ]),
    },
    {
      label: 'Przejście (instr.)',
      instrumental: 'G G G D  /  C C C C',
    },
    {
      label: 'Zwrotka 5 (outro)',
      lines: parseSection([
        '[G]W moim śmietniku obgryzłem wszystkie [D]kości,',
        'Bo [C]ja chciałbym żyć - w mieście miłości.',
        '[G]W moim śmietniku pogryzłem kilku [D]gości,',
        'Bo [C]ja chciałbym żyć w mieście miłości',
        '[G]I love you, I love you, I [D]love you,',
        'I [C]love you, I love you, I love you.',
        'I [G]love you, I love you, I love you, I [D]love you,',
        'I [C]love you, I love you, I love you, I...',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[G]Oh yeah chcę Ci po[D]wiedzieć - I [C]love you, I love you, I love you, I love you,',
        '[G]Oh yeah nie jestem [D]mądry - I [C]love you, I love you, I love you.',
        '[G]Oh yeah nie jestem [D]dobry - I [C]love you, I love you, I love you, I love you,',
        '[G]Oh yeah chcę Ci po[D]wiedzieć - I [C]love you, I love you, I love you.',
      ]),
    },
    {
      label: 'Akord końcowy',
      instrumental: 'G',
    },
  ],
};

// Lyrics only (user knows the chords by heart) — surowe-piosenki/buraki kabanos.txt
const buraki = {
  id: 'buraki',
  title: 'Buraki',
  artist: 'Kabanos',
  key: null,
  capo: null,
  chordsUsed: [],
  sections: [
    {
      lines: parseSection([
        'Wiatr niesie zapach kwiatów',
        'I orzeźwia mnie.',
        'Słońce chowa szare barwy',
        'Bym rozchmurzył się.',
        'Wszystkie muszki i kwiatuszki',
        'Przyjacielem mi.',
        'Tylko ludzie jacyś dziwni',
        'Jakby byli źli.',
      ]),
    },
    {
      lines: parseSection([
        'Burakom nie podoba się',
        'Co to jest? Ale co?',
        'O czym to? Nie ma, że.',
        'To nie tak. Nie ma co.',
        'Ale nie. Ale źle.',
        'Jak to ty? Kiedy to?',
        'Na co to? Ale jak?',
        'Ale on. Ale ty.',
        'Musisz tak. Musisz śmak.',
      ]),
    },
    {
      lines: parseSection([
        'Chamidła, prymitywy',
        'Jełopy, troglodyci',
        'Tępaki, patafiany',
        'Dureń i młot',
      ]),
    },
    {
      lines: parseSection([
        'Gdy wszystko gra',
        'Zawsze znajdzie się',
        'Burak, albo dwa',
        'Którzy mądrzą się.',
        'Najgorsze, że',
        'Burak mało wie,',
        'Ale będzie piał',
        'Bo on bystry jest.',
      ]),
    },
    {
      lines: parseSection([
        'Gdy osiągniesz cel',
        'I cieszysz się,',
        'Gdy dotarłeś tam,',
        'Gdzie nie dało się,',
        'Już słychać go,',
        'Burak dobrze wie,',
        'Gdzie szpilę wbić,',
        'By bolało cię.',
      ]),
    },
    {
      lines: parseSection([
        'Nie walczę z wiatrakami,',
        'Nie wytępię ciemnoty.',
        'Usiądę tam, gdzie odnajdę święty spokój.',
      ]),
    },
    {
      lines: parseSection([
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
      ]),
    },
    {
      lines: parseSection([
        'Buraki wszędzie znajdą się.',
        'Za co to? Po co to?',
        'Ile dał? Ile miał?',
        'Albo tak. Albo nie',
        'Ale jak? Ale nie',
        'Albo on. Albo ty',
        'Nie ma jak. Nie ma tak.',
        'Ten to nie. Ten to źle.',
        'Bo on tak. Bo on śmak.',
      ]),
    },
    {
      lines: parseSection([
        'Tumany i kołtuny',
        'Mądrale, ignoranci',
        'Naburmuszone ćwoki',
        'Kretyn i głąb.',
      ]),
    },
    {
      lines: parseSection([
        'Gdy pęknie słój,',
        'Burak wtrąci się.',
        'Będzie głośno piał,',
        'Bo on wiedział, że',
        'To, co ze szkła,',
        'Kiedyś stłucze się.',
        'Burak wiedział to,',
        'Nie pomylił się.',
      ]),
    },
    {
      lines: parseSection([
        'Gdy spadnie deszcz',
        'I przemoczysz się,',
        'Burak wrzeszczy już,',
        'By pouczyć cię.',
        'To tępy buc,',
        'Takich pełno jest.',
        'Marchewkom tak,',
        'A burakom nie',
      ]),
    },
    {
      lines: parseSection([
        'Nie walczę z wiatrakami.',
        'Nie wytępię ciemnoty.',
        'Usiądę tam, gdzie odnajdę święty spokój.',
      ]),
    },
    {
      lines: parseSection([
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
        'Mam na to wszystko wyjebane.',
      ]),
    },
    {
      lines: parseSection([
        'I jeszcze jedno dodam',
        'Bo to ważna rzecz.',
        'Chciałbym podziękować wszystkim',
        'Sprawiającym, że',
        'Moje życie jest namiastką cudownego snu.',
        'Burak niech się żółcią krztusi',
        'No i dobrze mu.',
      ]),
    },
  ],
};

// Chords glued into words (Polish notation: a=Am, uppercase=major) —
// surowe-piosenki/Oooo konczy sie juz noc bracia figot fagot.txt
const oooKonczySieJuzNoc = {
  id: 'ooo-konczy-sie-juz-noc',
  title: 'Ooooo kończy się już noc',
  artist: 'Bracia Figo Fagot',
  key: 'Am',
  capo: null,
  chordsUsed: ['Am', 'C', 'F', 'G'],
  sections: [
    {
      label: 'Refren',
      lines: parseSection([
        '[Am]Ooooo [C]kończy się już [F]noc',
        'Ja mam w dupie [G]to!',
        '[Am]Ooooo [C]jutro będzie [F]kac',
        'Ale jebać [G]to!',
      ]),
    },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Am]Jestem zwykłym chłopem',
        '[C]Lubię wypić piwo',
        'Lubię [F]też wódeczkę',
        'I [G]kocham dziewczynki',
        '[Am]Wychodzę na parkiet',
        'I [C]dęsem świruję',
        '[F]Łapię przypadkiem',
        'Za [G]cycki, za dupę!',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Am]Najebany na parkiecie [C]kręcę się',
        'Już ze [F]cztery w ryj mi dały,',
        '[G]Próbuje dalej.',
        '[Am]Czy w tej trzodzie na parkiecie dzisiaj [C]znajdę cię?',
        '[F]I na tyłach [G]dyskoteki...',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Am]Ooooo [C]kończy się już [F]noc',
        'Ja mam w dupie [G]to!',
        '[Am]Ooooo [C]jutro będzie [F]kac',
        'Ale jebać [G]to!',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[Am]W nocy szef napisał:',
        '[C]„Jutro bądź na ósmą”',
        'Czy go [F]pojebało - [G]sporo żem już chlusnął?',
        '[Am]Na balkonie z chłopakami',
        '[C]Żerujemy litra żyta,',
        'Potem [F]niewiele pamiętam,',
        'Aż tu [G]nagle świta wryta!',
      ]),
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        '[Am]Najebany na balkonie',
        '[C]Mordę drę,',
        '[F]Raz straż miejska upomniała,',
        '[G]Drę dalej,',
        '[Am]Policja uspokaja',
        'A ja [C]olałem to,',
        'I na [F]tyłach [G]radiowozu...',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Am]Ooooo [C]kończy się już [F]noc',
        'Ja mam w dupie [G]to!',
        '[Am]Ooooo [C]jutro będzie [F]kac',
        'Ale jebać [G]to!',
      ]),
    },
    {
      label: 'Wołanie',
      lines: parseSection([
        '[Am]Przysięgam od [C]jutra!',
        'Od jutra...',
        '[F]Nie będę [G]pił!',
        'Będę pił...',
        '[Am]Więc skoro to ostatni [C]raz.',
        'Ostatni...',
        'To [F]dzisiaj [G]walę w opór!',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Am]Ooooo [C]kończy się już [F]noc',
        'Ja mam w dupie [G]to!',
        '[Am]Ooooo [C]jutro będzie [F]kac',
        'Ale jebać [G]to!',
      ]),
    },
  ],
};

// Chords glued into words (d=Dm, g=Gm, C=major) — surowe-piosenki/balkanica piersi.txt
const balkanica = {
  id: 'balkanica',
  title: 'Bałkanica',
  artist: 'Piersi',
  key: 'Dm',
  capo: null,
  chordsUsed: ['Dm', 'Gm', 'C'],
  sections: [
    { label: 'Wstęp (instr.)', instrumental: 'Dm' },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Dm]Bałkańska w żyłach płynie krew,',
        '[Dm]Kobiety, wino, taniec, śpiew.',
        '[Gm]Zasady proste w życiu mam,',
        '[Dm]Nie rób drugiemu tego,',
        '[Dm]Czego ty nie chcesz sam!',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Dm' },
    {
      label: 'Zwrotka 1 (c.d.)',
      lines: parseSection([
        '[Dm]Muzyka, przyjaźń, radość, śmiech,',
        '[Dm]Życie łatwiejsze staje się.',
        '[Gm]Przynieście dla mnie wina dzban,',
        '[Dm]Potem ruszamy razem w tan.',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[Dm]Będzie! Będzie zabawa!',
        'Będzie się [C]działo!',
        'I znowu [C]nocy będzie mało.',
        'Będzie [Dm]głośno, będzie radośnie,',
        'Znów przetań[C]czymy razem całą [Dm]noc.',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Dm' },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Dm]Orkiestra nie oszczędza sił,',
        '[Dm]Już trochę im brakuje tchu.',
        '[Gm]Polejcie wina również im,',
        '[Dm]Znów na parkiecie będzie dym.',
        '[Dm]Bałkańskie rytmy, Polska moc!',
        '[Dm]Znów przetańczymy całą noc.',
        '[Gm]I jeszcze jeden malutki wina dzban,',
        '[Dm]I znów ruszymy razem w tan!',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Dm Dm C C  /  Dm Dm C Dm' },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[Dm]Będzie! Będzie zabawa!',
        'Będzie się [C]działo!',
        'I znowu [C]nocy będzie mało.',
        'Będzie [Dm]głośno, będzie radośnie,',
        'Znów przetań[C]czymy razem całą [Dm]noc.',
      ]),
    },
  ],
};

// Chords glued into words (C/F/G major, "a" = Am) — surowe-piosenki/big cyc makumba.txt
const makumba = {
  id: 'makumba',
  title: 'Makumba',
  artist: 'Big Cyc',
  key: 'C',
  capo: null,
  chordsUsed: ['C', 'F', 'G', 'Am', 'F#', 'E'],
  sections: [
    { label: 'Wstęp (instr.)', instrumental: 'G F# F' },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[C]Mój ojciec Makumba [F]być królem [G]wioski.',
        '[C]Ja mieszkać w Afryka, przy[F]jechać do [G]Polski,',
        '[C]żeby studiować w Waszym [F]pięknym [G]kraju.',
        '[C]Skinheadzi jednak mi tu [F]żyć nie [G]dają.',
        '[C]Ja uczyć się ciężko [F]Waszego ję[G]zyka.',
        '[C]I dostać w zęby, gdy [F]iść po u[G]licach.',
        '[C]Polacy rasiści, [F]każdy to [G]powie.',
        '[C]I nikt tu nie lubić [F]czarny [G]człowiek.',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[F]Makumba, Makumba, [G]Makumba-ska.',
        '[C]Polska - Afryka, Af[Am]ryka - Polska.',
        '[F]Makumba, Makumba, [G]Makumba-ska.',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[C]Ja chcieć uciekać, szy[F]kować do [G]drogi.',
        '[C]Lecz poznać dziewczyna, co [F]ma piękne [G]nogi.',
        '[C]Ja pałać uczuciem i [F]pałać sza[G]lenie.',
        '[C]I tak się Makumba za[F]kochać w [G]Helenie.',
        '[C]My szybko wziąć ślub i [F]mieć dużo [G]dzieci.',
        '[C]Rodzice z Afryka przy[F]syłać pre[G]zenty.',
        '[C]Ja ciągle studiować i [F]uczyć do [G]rana.',
        '[C]Hela się cieszyć z na[F]szego miesz[G]kania.',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[F]Makumba, Makumba, [G]Makumba-ska.',
        '[C]Polska - Afryka, Af[Am]ryka - Polska.',
        '[F]Makumba, Makumba, [G]Makumba-ska.',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[C]Ja dużo pracować i [F]wiele [G]potrafić.',
        '[C]Polska teściowa się [F]o mnie [G]martwić,',
        '[C]Ona się ciągle [F]modlić do [G]Boga,',
        '„Boże jedyny, Ma[F]kumbę za[G]chowaj!”',
      ]),
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        '[C]Ja kończyć studia i [F]robić kari[G]erę.',
        '[C]My mieć samochód i [F]bulte[G]riera.',
        '[C]Ja mieszkać tu długo i [F]nie wiedzieć [G]czemu,',
        '[C]Nie chcą mnie przyjąć do [F]KP[G]N-u.',
      ]),
    },
    {
      label: 'Refren (finał)',
      lines: parseSection([
        '[F]Makumba, Makumba, [G]Makumba-ska.',
        '[C]Polska - Afryka, Af[Am]ryka - Polska.',
        '[F]Makumba, Makumba, [G]Makumba-ska.',
        '[C]Polska - Afryka, Af[Am]ryka - Polska.',
        '[F]Makumba, Makumba, [G]ało le, le, le.',
        '[C]Makumba, Makumba, ało le, le, le.',
        '[F]Makumba, Makumba, [G]Makumba-ska.',
        '[C]Polska - Afryka, Af[Am]ryka - Polska.',
        '[F]Makumba, Makumba, [G]Makumba-ska.[E]',
      ]),
    },
  ],
};

// Chord-above-line format, modulates G -> A for the final verse/chorus —
// surowe-piosenki/enej tak smakuje zycie.txt
const takSmakujeZycie = {
  id: 'tak-smakuje-zycie',
  title: 'Tak smakuje życie',
  artist: 'Enej',
  key: 'G (modulacja do A)',
  capo: null,
  chordsUsed: ['G', 'C', 'D', 'Em', 'A', 'E', 'F#m'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[G]Ty masz to w sobie[C][D]',
        '[G]Życia smak na co dzień[C][D]',
        '[G]Ale poddasz się na pewno[C][D]',
        '[G]Zakochaniu chwilą jedną[C][D]',
        '[Em]Taką chwilą, co wie[C][D]',
        '[G]Kiedy nocą słońce jest',
        '[Em]Kiedy sen to [C]rzeczywistość',
        '[D]Co pozwoli ci na wszystko',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[G]Booo, [C]tak [D]smakuje [G]życie[C]',
        '[D]Na chwilę być na [G]szczycie[C]',
        '[D]Bo chwilą [G]warto [C]żyć[D]',
        '[G]Booo, [C]tak [D]smakuje [G]życie[C]',
        '[D]Na chwilę być na [G]szczycie[C][D]',
        '[Em]Bo chwilą warto [C]żyć[D]',
        '[G]Bo z chwilą warto [C]być[D]',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[G]Teraz twoja kolej[C][D]',
        '[G]By zapalić ogień[C][D]',
        '[G]Co ogrzeje to [C]uczucie',
        '[D]Radzą [G]zakochani [C]ludzie[D]',
        '[Em]I powiedzą, że ta[C][D]',
        '[G]Że ta chwila wiecznie trwa',
        '[Em]Że na nowo się [C]odradza',
        '[D]Kiedy człowiek do niej znowu wraca',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[G]Booo, [C]tak [D]smakuje [G]życie[C]',
        '[D]Na chwilę być na [G]szczycie[C]',
        '[D]Bo chwilą [G]warto [C]żyć[D]',
        '[G]Booo, [C]tak [D]smakuje [G]życie[C]',
        '[D]Na chwilę być na [G]szczycie[C][D]',
        '[Em]Bo chwilą warto [C]żyć[D]',
        '[G]Bo z chwilą warto [C]być[D]',
      ]),
    },
    {
      label: 'Zwrotka 3 (modulacja do A)',
      lines: parseSection([
        '[A]Na życiowym torze[D][E]',
        '[A]Wybierz swoją drogę[D][E]',
        '[A]Ale ufaj swej [D]fantazji',
        '[E]Daj się ponieść [A]wyobraźni[D]',
        '[E]Wtedy każdy twój [F#m]dzień[D][E]',
        '[A]Stanie się słonecznym dniem',
        '[F#m]A minuta to jak [D]wieczność',
        '[E]W której każda chwila to szaleństwo',
      ]),
    },
    {
      label: 'Refren (A)',
      lines: parseSection([
        '[A]Booo, [D]tak [E]smakuje [A]życie[D]',
        '[E]Na chwilę być na [A]szczycie[D]',
        '[E]Bo chwilą [A]warto [D]żyć[E]',
        '[A]Booo, [D]tak [E]smakuje [A]życie[D]',
        '[E]Na chwilę być na [A]szczycie[D]',
        '[E]Bo chwilą warto [F#m]żyć[D][E]',
        '[A]Bo z chwilą warto [D]być[E]',
        '[F#m]Bo chwilą warto [D]żyć[E]',
        '[A]Bo z chwilą warto być',
      ]),
    },
  ],
};

// Chord-above-line format (Am Em F G), standard notation — surowe-piosenki/grubson na szczycie.txt
const naSzczycie = {
  id: 'na-szczycie',
  title: 'Na szczycie',
  artist: 'Grubson',
  key: 'Am',
  capo: null,
  chordsUsed: ['Am', 'Em', 'F', 'G'],
  sections: [
    {
      label: 'Wstęp (śpiewany)',
      lines: parseSection([
        '[Am]Że gdzieś na [Em]szczycie góry, [F]wszyscy razem [G]spotkamy się[Am]',
        '[Am]Mimo świata [Em]który, kocha i [F]rani nas dzień w [G]dzień[Am]',
        '[Am]Gdzieś na [Em]szczycie góry, [F]wszyscy razem [G]spotkamy się[Am]',
      ]),
    },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Am]Się porobiło czeka to też [Em]nas',
        '[F]Ziemia, coraz więcej pragnie ciała ludzkich [G]mas',
        '[Am]Nikt nam nie powiedział, jak długo będziemy [Em]żyć',
        '[F]Do jakich rozmiarów ciągnęła się będzie życia [G]nić',
        '[Am]Nikt nam nie powiedział, kiedy mamy się po[Em]żegnać',
        '[F]I ile mamy czekać aby znowu się po[G]jednać',
        '[Am]Ramię w ramię nawzajem siebie [Em]wspierać',
        '[F]Rodzimy się by żyć, żyjemy by u[G]mierać',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Am]Aniele śmierci proszę powiedz mi [Em]czemu',
        '[F]W stosunku do nas jesteś obo[G]jętny',
        '[Am]Najlepsze są dla ciebie młode [Em]ofiary',
        '[F]Nigdy nic Ci nie zrobiły a traktujesz je jak [G]psy',
        '[Am]Zobacz! Ile miłości w każdym [Em]człowieku',
        '[F]Nie jeden by chciał przeżyć choć pół [G]wieku',
        '[Am]Nie jednemu od wielu lat najbliższych ziomów [Em]brak',
        '[F]Ciężko pogodzić się z tym, ale mimo tego ja i [G]tak',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Am]Jestem tego [Em]pewny, w głębi [F]duszy o tym [G]wiem[Am]',
        '[Am]Że gdzieś na [Em]szczycie góry, [F]wszyscy razem [G]spotkamy się[Am]',
        '[Am]Mimo świata [Em]który, kocha i [F]rani nas dzień w [G]dzień[Am]',
        '[Am]Gdzieś na [Em]szczycie góry, [F]wszyscy razem [G]spotkamy się[Am]',
        '[Am]Spotkamy się, [Em]spotkamy się, [F]spotkamy się, [G]spotkamy się[Am]',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Em F G' },
    {
      label: 'Bridge',
      lines: parseSection([
        '[Am]Gdzieś daleko i bardzo [Em]wysoko',
        '[F]Gdzie zwykły śmiertelnik nie stąpa tam [G]nogą',
        '[Am]Gdzie spokój, harmonia i natury [Em]zew',
        '[F]Gdzie słychać szum drzew i ptaków [G]śpiew',
        '[Am]Wschód słońca pada na [Em]twarz',
        '[F]Wypełnia twą duszę, którą ciągle [G]masz',
        '[Am]Wydaje się tobie że te uczucie już [Em]znasz, ale',
        '[F]Ono wcale nie jest ci [G]znane',
        '[Am]Chociaż było pisane i pisane też jest [Em]nam',
        '[F]Tak że wszyscy się spotkamy, więc nie będziesz już [G]sam',
        '[Am]Spotkasz ludzi których tak bardzo ko[Em]chałeś',
        '[F]Choć lata nie widziałeś nadal kochać nie prze[G]stałeś (Yo!)',
        '[Am]Teraz leżysz na plecach, spoglądasz na [Em]błękitne [F]niebo',
        '[G]Serce dotyka serca,',
        '[Am]Nie ma szczęścia, nie ma [Em]pecha',
        '[F]Nikt się nie złości, nikt nie do[G]cieka',
        '[Am]Człowiek obok człowieka z nurtem płyną jak [Em]rzeka',
        '[F]Połączeni w jedną całość na samym szczycie góry, ([G]Mekka)[Am]',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Em F G' },
    {
      label: 'Refren (x3)',
      repeat: 3,
      lines: parseSection([
        '[Am]Jestem tego [Em]pewny, w głębi [F]duszy o tym [G]wiem[Am]',
        '[Am]Że gdzieś na [Em]szczycie góry, [F]wszyscy razem [G]spotkamy się[Am]',
        '[Am]Mimo świata [Em]który, kocha i [F]rani nas dzień w [G]dzień[Am]',
        '[Am]Gdzieś na [Em]szczycie góry, [F]wszyscy razem [G]spotkamy się[Am]',
      ]),
    },
  ],
};

// Chord-above-line format, standard notation, tab diagram in bridge skipped —
// surowe-piosenki/ivan i delfin czarne oczy.txt
const czarneOczy = {
  id: 'czarne-oczy',
  title: 'Czarne oczy',
  artist: 'Ivan i Delfin',
  key: 'C#m',
  capo: null,
  chordsUsed: ['C#m', 'E', 'B', 'A', 'F#m', 'G#m', 'F#m7', 'G#m7'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[C#m]Złe [E]kilometry [B]dzielą nas, [C#m]lato [E]umiera jesieni [B]czas',
        '[C#m]W [E]blaszany daszek [B]tłucze deszcz, [C#m]a w [E]mojej głowie [B]wciąż ktoś jest',
        '[F#m]Więc gdy [G#m]wspomnienia męczą cię, [C#m]wracają [F#m7]myśli [G#m7]krótkie [C#m]dnie [E]aa-aa',
        '[F#m]Zobaczyć jeszcze [G#m7]raz',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Jej piękne [C#m]czarne oczy, śnią się [E]czarne oczy',
        'Ich [B]nie przeoczysz wiem, [A]że nie',
        'Jej piękne [C#m]czarne oczy, widzę [E]czarne oczy',
        'To [B]za mną kroczy, [A]ze mną jest',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[C#m]Takie to [E]życie dziwne jest, [B]miłość tęsknota [C#m]ścigają się[E]',
        '[C#m]Możesz uciekać [E]możesz nie, [B]jedno i drugie [C#m]dopadnie [E]cię',
        '[F#m]Więc gdy [G#m]wspomnienia męczą cię, [C#m]wracają [F#m7]myśli [G#m7]krótkie [C#m]dnie [E]aa-aa',
        '[F#m]Zobaczyć jeszcze [G#m7]raz',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Jej piękne [C#m]czarne oczy, śnią się [E]czarne oczy',
        'Ich [B]nie przeoczysz wiem, [A]że nie',
        'Jej piękne [C#m]czarne oczy, widzę [E]czarne oczy',
        'To [B]za mną kroczy, [A]ze mną jest',
      ]),
    },
    {
      label: 'Bridge',
      lines: parseSection([
        '[F#m]Więc gdy [G#m]wspomnienia męczą cię, [C#m]wracają [F#m7]myśli [G#m7]krótkie [C#m]dnie',
        '[F#m]Zobaczyć jeszcze [G#m7]raz jej piękne, czarne, oczy...',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Jej piękne [C#m]czarne oczy, śnią się [E]czarne oczy',
        'Ich [B]nie przeoczysz wiem, [A]że nie',
        'Jej piękne [C#m]czarne oczy, widzę [E]czarne oczy',
        'To [B]za mną kroczy, [A]ze mną jest',
      ]),
    },
  ],
};

// Chords glued into words, major-only, tempo gag song — surowe-piosenki/jaki tu spokoj.txt
const jakiTuSpokoj = {
  id: 'jaki-tu-spokoj',
  title: 'Jaki tu spokój',
  artist: 'Stauros',
  key: 'C',
  capo: null,
  chordsUsed: ['C', 'G', 'D', 'A', 'E', 'B'],
  sections: [
    {
      label: 'Zwrotka (normalnie)',
      lines: parseSection([
        'Jaki tu spokój, na na [G]na',
        'Nic się nie dzieje, na na na [C]na',
        'Nikt się nie bawi, na na [G]na',
        'Wszyscy się nudzą, na na na [C]na',
      ]),
    },
    {
      label: 'Zwrotka (szybciej)',
      lines: parseSection([
        'Jaki tu spokój, na na [G]na',
        'Nic się nie dzieje, na na na [C]na',
        'Nikt się nie bawi, na na [G]na',
        'Wszyscy się nudzą, na na na [C]na',
      ]),
    },
    {
      label: 'Zwrotka (jeszcze szybciej) — JEDZIEMY!',
      lines: parseSection([
        'Jaki tu spokój, na na [G]na',
        'Nic się nie dzieje, na na na [C]na',
        'Nikt się nie bawi, na na [G]na',
        'Wszyscy się nudzą, na na na [C]na',
      ]),
    },
    {
      label: 'Zwrotka (i jeszcze szybciej)',
      lines: parseSection([
        'Jaki tu [D]spokój, na na [A]na',
        'Nic się nie dzieje, na na na [D]na',
        'Nikt się nie bawi, na na [A]na',
        'Wszyscy się nudzą, na na na [D]na',
      ]),
    },
    {
      label: 'Zwrotka (a teraz wolno)',
      lines: parseSection([
        'Jaki tu [C]spokój, na na [G]na',
        'Nic się nie dzieje, na na na [C]na',
        'Nikt się nie bawi, na na [G]na',
        'Wszyscy się nudzą, na na na [C]na',
      ]),
    },
    {
      label: 'Zwrotka (i b. szybko)',
      lines: parseSection([
        'Jaki tu spokój, na na [G]na',
        'Nic się nie dzieje, na na na [C]na',
        'Nikt się nie bawi, na na [G]na',
        'Wszyscy się nudzą, na na na [C]na',
      ]),
    },
    {
      label: 'Zwrotka (i szybciej)',
      lines: parseSection([
        'Jaki tu [D]spokój, na na [A]na',
        'Nic się nie dzieje, na na na [D]na',
        'Nikt się nie bawi, na na [A]na',
        'Wszyscy się nudzą, na na na [D]na',
      ]),
    },
    {
      label: 'Zwrotka (w tym samym tempie)',
      lines: parseSection([
        'Jaki tu [E]spokój, na na [B]na',
        'Nic się nie dzieje, na na na [E]na',
        'Nikt się nie bawi, na na [B]na',
        'Wszyscy się nudzą, na na na [E]na',
        'na na na [B]na na na na [E]na na na na [B]na na na na [E]na na na na [B]na na na na [E]na!',
      ]),
    },
  ],
};

// Chords glued into words — surowe-piosenki/krzysztof krawczyk moj przyjacielu.txt
const mojPrzyjacielu = {
  id: 'moj-przyjacielu',
  title: 'Mój przyjacielu',
  artist: 'Krzysztof Krawczyk',
  key: 'C',
  capo: null,
  chordsUsed: ['Am', 'E', 'C', 'G', 'F'],
  sections: [
    { lines: parseSection(['(Dam gitarę dam samochód żony nie dam nie)']) },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        'Mój przyjac[Am]ielu byłeś m[E]i naprawdę b[Am]liski',
        'Mój przyjac[C]ielu, wiesz, że b[G]yłeś mi jak br[C]at',
        'Dałem ci w[F]iarę, dałem ci sp[C]okój',
        'Dałem gita[F]rę, dałem sam[C]ochód',
        'I dach nad gł[E]ową, a do sypialni wszedłeś sa[Am]m',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        'Mój przyjac[Am]ielu przyprowadz[E]iłem cię z u[Am]licy',
        'Nakarmi[C]łem i ubr[G]ałem cię jak b[C]rat',
        'Dałem ci w[F]iarę, dałem ci s[C]pokój',
        'Dałem gi[F]tarę, dałem sam[C]ochód',
        'Żony nie d[E]ałem, żonę wziąłeś sobie sa[Am]m',
      ]),
    },
    { lines: parseSection(['(Dam gitarę dam samochód żony nie dam nie)']) },
    {
      label: 'Refren',
      lines: parseSection([
        'Teraz p[G]ijesz wino, pi[F]jesz aż do dn[C]a',
        'Późna ju[G]ż godzina, pr[F]óżno czekasz dni[C]a',
        'Chciałbyś si[G]ę rozpłynąć, u[F]ciec gdzie się d[C]a',
        'Proszę z[E]ostań na noc, przyjaźń swoje prawa m[Am]a',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        'Mój przyjac[Am]ielu, jak wyr[E]azić to co c[Am]zuję',
        'Jak wytłum[C]aczyć czym jest dl[G]a mnie przyjaźń tw[C]a',
        'Dał[F]em ci wiarę, dałem[C] ci spokój',
        'D[F]ałem gitarę, d[C]ałem samochód',
        'Ż[E]ony nie dałem, żonę w[Am]ziąłeś sobie sam',
      ]),
    },
    { lines: parseSection(['(Dam gitarę dam samochód żony nie dam nie)']) },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Teraz p[G]ijesz wino, pi[F]jesz aż do dn[C]a',
        'Późna ju[G]ż godzina, pr[F]óżno czekasz dni[C]a',
        'Chciałbyś si[G]ę rozpłynąć, u[F]ciec gdzie się d[C]a',
        'Proszę z[E]ostań na noc, przyjaźń swoje prawa m[Am]a',
      ]),
    },
  ],
};

// Chords glued into words — surowe-piosenki/milosc w zakopanem.txt
const miloscWZakopanem = {
  id: 'milosc-w-zakopanem',
  title: 'Miłość w Zakopanem',
  artist: 'Sławomir',
  key: 'F',
  capo: null,
  chordsUsed: ['Dm', 'Gm', 'C', 'F', 'A7', 'Bb'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        'Teraz już [Dm]wszystko wiem',
        'Bawiłem grubo się i w A[Gm]meryce, (USA)',
        'Gdzieś pod [C]palmami raj, mówili jedź, bo tam',
        'podobno [F]życie (oo[A7]h)',
        'To był przedpiękny czas, życie tętniło w nas,',
        'pamiętasz [Gm]miła?',
        'Lecz to w [Bb]ojczyźnie właśnie nam się przyda[A7]rzyła',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'Miłość, Miłość w Zako[Dm]panem',
        'Polewamy się szam[Gm]panem',
        'Rycerzem [C]jestem ja, a ty królową [F]nocy [A7]',
        'Miłość żarzy w twoje [Dm]oczy',
        'Rozpędzona jak mo[Gm]tocykl',
        'Hej wypi[Bb]jemy syćkie drinki aż do [A7]dna',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        'Cekiny [Dm]błyszczą twe',
        'Uśmiechem kusisz mnie DJ przy[Gm]grywa',
        'Splecione [C]ciała dwa, tak piękni: ty i ja',
        'szczęście nad[F]pływa (oo[A7]h)',
        'Choć na par[Dm]kiecie tłum tu dzisiaj oprócz nas',
        'nikogo [Gm]nie ma! (nie ma nas, nie ma nas, nie ma nas)',
        'Cześć tu Sła[Bb]womir a w mych ramionach Magda[A7]lena',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'Miłość, Miłość w Zako[Dm]panem',
        'Polewamy się szam[Gm]panem',
        'Rycerzem [C]jestem ja, a ty królową [F]nocy [A7]',
        'Miłość żarzy w twoje [Dm]oczy',
        'Rozpędzona jak mo[Gm]tocykl',
        'Hej wypi[Bb]jemy syćkie drinki aż do [A7]dna',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        'Poranek, [Dm]jasny świt',
        'Głowy leciutkie, bo to przecież [Gm]góry',
        'Na niebie [C]słońce lśni, Ty jesteś dzisiaj nim',
        'przeganiasz [F]chmury (oo[A7]h)',
        'Buzi mi [Dm]teraz daj, a potem więcej, gdy',
        'będziemy [Gm]sami (nie ma nas, nie ma nas, nie ma nas)',
        'Bo od wie[Bb]czora, bejbe, znowu zacy[A7]namy',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Miłość, Miłość w Zako[Dm]panem',
        'Polewamy się szam[Gm]panem',
        'Rycerzem [C]jestem ja, a ty królową [F]nocy [A7]',
        'Miłość żarzy w twoje [Dm]oczy',
        'Rozpędzona jak mo[Gm]tocykl',
        'Hej wypi[Bb]jemy syćkie drinki aż do [A7]dna (aż do dna)',
      ]),
    },
  ],
};

// Chords glued into words — surowe-piosenki/ona by tak chciala.txt
const onaByTakChciala = {
  id: 'ona-by-tak-chciala',
  title: 'Ona by tak chciała',
  artist: 'Ronnie Ferrari',
  key: 'Am',
  capo: null,
  chordsUsed: ['Am', 'Dm', 'G', 'F'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Am]Jestem na dworze sam',
        '[Dm]Deszcz pada mi na głowę',
        '[G]Gibona w łapie mam,',
        '[Am]A zgasić go nie mogę',
        '[Am]Odchodzę w ciemny las',
        '[Dm]Oświetlam fonem drogę',
        '[G]I wiedzę jedna z dam, [Am]przy której tracę mowę',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Am]I wracam i wracam',
        '[Dm]I wracam se na chatę',
        '[G]Zaparzę se herbatę',
        '[Am]Nie kur* żadne latte',
        '[Am]I puka i puka',
        '[Dm]I puka ktoś do drzwi',
        '[G]I widzę panią c[Am]o skradła serce mi',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Ona by tak [Am]chciała być tu z[F]e mną',
        'Kręcić b[G]lanty po czym liczyć[Am] bankroll',
        'Ona by tak [Am]chciała tańczyć [F]ze mną',
        'Późną n[G]ocą, kiedy gwiazdy [Am]wzejdą',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[Am]Siada na kanapie i p[F]atrzy prosto w oczy',
        '[Dm]Ja patrzę jej na dupę',
        'Bo[G] po coś przyszła w nocy',
        '[Am]Widzi tam coś we mnie',
        '[F]Może ten napis z boku',
        '[Dm]Że napierd* we dnie',
        '[G]Choć wolimy po zmroku',
      ]),
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        '[Am]Płyniemy jak rakieta',
        'Posy[F]pana mocna feta',
        'Wiatr [Dm]ciągle wieje w żagle',
        'A na [G]horyzoncie Kreta',
        'Ka[Am]pitan tego statku',
        'Co [F]prowadzi się jak beta',
        'P[Dm]odbija nowe lądy i p[G]odaje baty w przekaz',
        '[Am]Pod pokładem mamy składy ga[F]zowanego nektaru',
        'Którym [Dm]ludzie za Uralem leczy[G]li siebie z udarów',
        '[Am]99% tyle i[F]le mam problemów',
        '[Dm]Każdy znika po butelce wtedy',
        '[G]Nikt nie trzyma steru',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Ona by tak [Am]chciała być tu z[F]e mną',
        'Kręcić b[G]lanty po czym liczyć[Am] bankroll',
        'Ona by tak [Am]chciała tańczyć [F]ze mną',
        'Późną n[G]ocą, kiedy gwiazdy [Am]wzejdą',
      ]),
    },
    {
      label: 'Wołanie (x2)',
      repeat: 2,
      lines: parseSection([
        '[Am]Nap* w gdańsku',
        '[F]Nap* w wawce',
        '[Dm]Nap* w łodzi',
        '[G]Nap* zawsze',
        '[Am]Napierd* w białym',
        '[F]Napierd* w Wrocku',
        '[Dm]Napierd* w Stanach',
        '[G]Napierd* w Płocku',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'Ona by tak [Am]chciała być tu z[F]e mną',
        'Kręcić b[G]lanty po czym liczyć[Am] bankroll',
        'Ona by tak [Am]chciała tańczyć [F]ze mną',
        'Późną n[G]ocą, kiedy gwiazdy [Am]wzejdą',
      ]),
    },
  ],
};

// Chord sequence given per line (not word-glued); distributed proportionally
// across each line's words — surowe-piosenki/kukiz caluj mnie.txt
const calujMnie = {
  id: 'caluj-mnie',
  title: 'Całuj mnie',
  artist: 'Kukiz',
  key: 'D',
  capo: null,
  chordsUsed: ['D', 'A', 'Bm', 'G'],
  sections: [
    {
      label: 'Zwrotka',
      lines: parseSection([
        '[D]Kupiłem sobie [A]dżiny, buty, [Bm]czapkę i [G]pas',
        '[D]Opuszczam [A]Amerykę - byłem [Bm]tam pięć [G]lat',
        '[D]Lecz tęsknię już tak bardzo, [G]że',
        '[D]nie mogę spać nie [G]mogę jeść',
        '[D]marzeniem moim [G]twarz zobaczyć [A]twoją jest.',
        '[G]Wiozę torby z [A]darami,',
        '[G]W aucie z [A]alufelgami,',
        '[G]Portfel cały [A]wypchany dolarami,[G]',
        'A ty...[A]',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[D]A ty całuj mnie [A]- to taka [Bm]piękna [G]gra',
        '[D]Całuj mnie - ja [A]ci to [Bm]wszystko [G]dam',
        '[D]Podjadę pod okienko twe [A]- zastukam [Bm]co [G]sił',
        '[D]Nie będę stukał długo, [A]bo szybę [Bm]bym [G]zbił',
        '[D]A ty mi zaraz [G]otworzysz,',
        '[D]Jestem bogaty więc [G]możesz',
        '[D]Twój ojciec, co w polu [G]orze nie będzie mnie [A]bił',
        '[G]Dam Ci torby z [A]darami',
        '[G]Auto z [A]alufelgami',
        '[G]Portfel cały [A]wypchany dolarami[G]',
        'A ty...[A]',
      ]),
    },
  ],
};

// Chords glued into words — surowe-piosenki/t love ajrisz.txt
const ajrisz = {
  id: 'ajrisz',
  title: 'Ajrisz',
  artist: 'T.Love',
  key: 'D',
  capo: null,
  chordsUsed: ['D', 'A', 'G', 'Bm'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        'Za[D]bieram cię do baru',
        'Będzie [A]8:0 dla mnie',
        'Zakła[G]damy się',
        'że [G]Polska [A]pokona [D]Anglię',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[D]Drugi strong trzeci strong',
        '[D]Rozmawiamy [G]bez wytchnienia',
        '[D]O uczuciu które jest',
        'naj[G]lepsze [A]bez w[D]ątpienia',
      ]),
    },
    {
      label: 'Przedrefren',
      lines: parseSection([
        '[D]Ty mnie chyba nie znasz',
        'i [A]nie rozumiesz nic',
        'bo ty [G]nie wiesz jak się tutaj pije',
        'ko[G]lejnej [A]wiosny [D]łyk',
        'ko[D]lejnej wiosny łyk',
        'ko[D]lejnej wiosny [G]łyk',
        'ty [D]nie wiesz jak się tutaj pije',
        'ko[G]lejnej wiosny [D]łyk',
        'ko[G]lejnej [A]wiosny [D]łyk',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[D]Czwarty strong piąty strong',
        '[D]Coraz bliżej [G]twego ciała',
        '[D]Oczy moje lewitują',
        'o[G]dległość [A]jest już [D]mała',
      ]),
    },
    {
      label: 'Zwrotka 3 (c.d.)',
      lines: parseSection([
        '[D]Dotknij mojej dłoni',
        'i na [A]zewnątrz wyjdźmy stąd',
        'ten s[G]pacer przeznaczeniem naszym',
        '[G]Mocno [A]czuję [D]to',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[D]Prostych słów się [G]boi',
        '[D]Największy nawet t[A]wardziel',
        '[D]Proste słowa z [G]gardła',
        'nie c[G]hcą wy[A]jść[D] najbardziej',
        '[Bm]Mówią że mnie [G]kochasz',
        'i że [D]mną nie [A]wzgardzisz',
        'praw[Bm]dziwa moja [G]miłość',
        'na[G]zywa [A]się [D]Ajrisz',
        'na[G]zywa [A]się [D]Ajrisz',
      ]),
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        'już [D]powinniśmy skończyć',
        'do [A]domu już czas',
        'bo tak [G]lubię z tobą pić',
        'ko[G]lej[A]ny [D]raz',
      ]),
    },
    {
      label: 'Zwrotka 5',
      lines: parseSection([
        '[D]Szósty strong siódmy strong',
        '[D]Rozmawiamy [G]bez wytchnienia',
        '[D]O uczuciu które jest',
        'naj[G]lepsze [A]bez wąt[D]pienia',
      ]),
    },
    {
      label: 'Zwrotka 5 (c.d.)',
      lines: parseSection([
        '[D]Czujesz jak tu pachnie',
        'tak wyg[A]ląda chyba raj',
        'naj[G]lepsze miesiące to',
        '[G]kwiecień [A]czerwiec [D]maj',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        '[D]Prostych słów się [G]boi',
        '[D]Największy nawet t[A]wardziel',
        '[D]Proste słowa z [G]gardła',
        'nie c[G]hcą wy[A]jść[D] najbardziej',
        '[Bm]Mówią że mnie [G]kochasz',
        'i że [D]mną nie [A]wzgardzisz',
        'praw[Bm]dziwa moja [G]miłość',
        'na[G]zywa [A]się [D]Ajrisz',
        'na[G]zywa [A]się [D]Ajrisz',
      ]),
    },
  ],
};

// Chords glued into words — surowe-piosenki/urszula konik na biegunach.txt
const konikNaBiegunach = {
  id: 'konik-na-biegunach',
  title: 'Konik na biegunach',
  artist: 'Urszula',
  key: 'A',
  capo: null,
  chordsUsed: ['A', 'E', 'E7', 'A7', 'B7'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        'Za [A]rok, może dwa schodami na strych',
        'odejdą z ołowiu żoł[E]nierze',
        'Prze[E7]minie jak wiatr uśmiechów twych świat',
        'kolory marzeniom od[A]bierze',
        'Za rok, może dwa schodami na strych',
        'za [A7]misiem kudłatym podczłapią',
        'Beztroskie te dni i zo[A]baczysz,',
        'że [B7]jednak wspaniały był [E]on',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[A]Konik - z drzewa koń na bie[E]gunach',
        'Zwykła zabawka [E7]mała huśtawka',
        'A rozkołysze, roz[A]bawi',
        'Konik - z drzewa koń na bie[E]gunach',
        'Przyjaciel wiosny, [E7]uśmiech radosny',
        'każdy powinien go [A]mieć',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        'Kło[A]potów masz sto i zmartwień masz sto',
        'Bez przerwy to trwa, karu[E]zela',
        'Nie [E7]lalka, co łka, ni piłka, co gra',
        'Bez reszty twój czas dziś za[A]biera',
        'Ulica szeroka, wystawa - to tu',
        'Na [A7]chwilę przystajesz zdumiony',
        'Uśmiechnij się więc i za[A]wołaj',
        'Jak [B7]wtedy, gdy na grzbiecie cię [E]niósł',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[A]Konik - z drzewa koń na bie[E]gunach',
        'Zwykła zabawka [E7]mała huśtawka',
        'A rozkołysze, roz[A]bawi',
        'Konik - z drzewa koń na bie[E]gunach',
        'Przyjaciel wiosny, [E7]uśmiech radosny',
        'każdy powinien go [A]mieć',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        'Ra[A]dosny to dzień, wspaniały to dzień',
        'Wracają z ołowiu żoł[E]nierze',
        'Ze [E7]strychu znów w dół, schodami aż tu',
        'Wracają, lecz już nie do [A]ciebie',
        'By ktoś, tak jak ty radosne miał dni',
        'Po[A7]wrócił przyjaciel ten z wiosny',
        'Dlaczego, to każdy już [A]powie',
        'Na [B7]plecach przyniosłeś go [E]tu',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[A]Konik - z drzewa koń na bie[E]gunach',
        'Zwykła zabawka [E7]mała huśtawka',
        'A rozkołysze, roz[A]bawi',
        'Konik - z drzewa koń na bie[E]gunach',
        'Przyjaciel wiosny, [E7]uśmiech radosny',
        'każdy powinien go [A]mieć',
      ]),
    },
  ],
};

// Chord-above-line format; verses ride a repeating Em-C vamp, chorus/bridge
// placed per-line — surowe-piosenki/pidzama porno kotow kat ma oczy zielone.txt
const kotowKat = {
  id: 'kotow-kat',
  title: 'Kotów kat ma oczy zielone',
  artist: 'Pidżama Porno',
  key: 'Em',
  capo: null,
  chordsUsed: ['Em', 'C', 'G', 'Cadd9'],
  sections: [
    {
      label: 'Zwrotka',
      lines: parseSection([
        '[Em]Chciałabyś to [C]wiedzieć',
        '[Em]Ja [C]wiem',
        '[Em]Wyrzucić już to z [C]siebie',
        '[Em]Ja [C]też',
        '',
        '[Em]Ciężkie słowa, ciężko [C]mówić',
        '',
        '[Em]Nauczyć się [C]żałować?',
        '[Em]Za późno chyba [C]jest',
        '',
        '[Em]Całuję Ciebie w twoje [C]okulary',
        '[Em]Tam całują Ci, którym ciężko się [C]odnaleźć',
        '[Em]Bruno Stroszek - zbędny [C]paproszek',
        '[Em]Rozjechany jeż nocą na [C]autostradzie',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Em]Chcesz [C]więcej',
        '[G]Chcesz więcej, niż dziś mogę [C]Tobie dać',
        '[Em]Pieprzone [C]więcej!',
        '[Em]Powiem [C]więcej:',
        '[Em]Więcej nie [C]mam',
      ]),
    },
    {
      label: 'Zwrotka',
      lines: parseSection([
        '[Em]Chciałabyś to [C]wiedzieć',
        '[Em]Ja [C]wiem',
        '[Em]Wyrzucić już to z [C]siebie',
        '[Em]Ja [C]też',
        '',
        '[Em]Ciężkie słowa ciężko [C]mówić',
        '',
        '[Em]Nauczyć się [C]żałować?',
        '[Em]Za późno chyba [C]jest',
        '',
        '[Em]Koszulka INRI nie przyniosła mi [C]szczęścia',
        '[Em]Stare biedy i siedem [C]boleści',
        '[Em]W tamtą grudniową noc królowie [C]trzej',
        '[Em]Przyszli i nic nie [C]znaleźli',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Em]Chcesz [C]więcej',
        '[G]Chcesz więcej niż ja mogę [C]tobie dać',
        '[Em]Pieprzone [C]więcej!',
        '[Em]Powiem [C]więcej:',
        '[Em]Więcej nie [C]mam',
      ]),
    },
    {
      label: 'Bridge',
      lines: parseSection([
        '[Em]Kotów kat ma oczy [C]zielone',
        '[Em]Ja pazurami trzymam się za życia [C]brzeg',
        '[Em]Moje dni mam już [C]policzone',
        '[Em]Czekam, aż świat zazieleni się na [C]śmierć',
      ]),
    },
    {
      label: 'Zwrotka',
      lines: parseSection([
        '[Em]Chciałabyś to [C]wiedzieć',
        '[Em]Ja [C]wiem',
        '[Em]Wyrzucić już to z [C]siebie',
        '[Em]Ja [C]też',
        '',
        '[Em]Chciałabyś to [C]wiedzieć',
        '[Em]Ja [C]wiem',
        '[Em]Wyrzucić już to z [C]siebie',
        '[Em]Ja też, ja też, ja [C]też',
      ]),
    },
    {
      label: 'Outro',
      lines: parseSection([
        '[Em]Kotów kat ma oczy [C]zielone',
        '[Em]Ja pazurami trzymam się za życia [C]brzeg',
        '[Em]Moje dni mam już [C]policzone',
        '[Em]Czekam, aż świat zazieleni się na [C]śmierć',
        '',
        '[Em]Kotów kat ma oczy [C]zielone',
        '[Em]Kot pazurami trzyma się za życia [C]brzeg',
        '[Em]W moim pokoju okna są [C]uchylone',
        '[Em]Nie wie, że świat zazielenił się już na [C]śmierć',
      ]),
    },
  ],
};

// Chord-above-line format, two guitar-tab interludes skipped —
// surowe-piosenki/poparzeni kawa3 do tanca kawalek.txt
const doTancaKawalek = {
  id: 'do-tanca-kawalek',
  title: 'Do tańca kawałek',
  artist: 'Poparzeni Kawą 3',
  key: 'Dm',
  capo: null,
  chordsUsed: ['Dm', 'Gm', 'A'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Dm]Jeszcze [Gm]trochę do [A]północy',
        '[Dm]Drink jak [Gm]zagubiony [A]pocisk',
        '[Gm]Strzelił mocno mi do [Dm]głowy',
        '[Gm]Coraz trudniej się [A]wysłowić',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Dm]Pić niezdrowo, [Gm]więc „na [A]zdrowie”!',
        '[Dm]Bliższy się [Gm]wydaje [A]człowiek',
        '[Gm]Serce mi z tęsknoty [Dm]pęka',
        '[Gm]Ty przy barze [A]taka piękna',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'To jest [Dm]do tańca [Gm]kawałek[A]',
        'Więc zrób [Dm]coś ze swym [Gm]ciałem[A]',
        'Ja się do [Dm]ciebie [Gm]uczepię[A]',
        '[Gm]I może będzie nam [A]lepiej',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Dm Gm A' },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[Dm]Melancholia, [Gm]bar, [A]papieros',
        '[Dm]Dobrze, że [Gm]jestem [A]hetero',
        '[Gm]Cały wieczór mnie [Dm]pociągasz',
        '[Gm]Więc nie mówmy o [A]poglądach',
      ]),
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        '[Dm]Nie wspominaj o [Gm]chłopaku[A]',
        '[Dm]Dziś Warszawa, [Gm]jutro [A]Kraków',
        '[Gm]Zagubieni w zmysłów [Dm]sieci',
        '[Gm]Gdy z głośników przebój [A]leci',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'To jest [Dm]do tańca [Gm]kawałek[A]',
        'Więc zrób [Dm]coś ze swym [Gm]ciałem[A]',
        'Ja się do [Dm]ciebie [Gm]uczepię[A]',
        '[Gm]I może będzie nam [A]lepiej',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Dm Gm A  x7  /  Gm A (cisza)' },
    {
      label: 'Zwrotka 5',
      lines: parseSection([
        '[Dm]Gdy do tańca [Gm]ciebie [A]proszę',
        '[Dm]Parkiet staje się [Gm]kosmosem[A]',
        '[Gm]Trwa rytmiczna gra [Dm]przedwstępna',
        '[Gm]Ciężko kroki [A]zapamiętać',
      ]),
    },
    {
      label: 'Zwrotka 6',
      lines: parseSection([
        '[Dm]Opętani [Gm]drżymy w [A]transie',
        '[Dm]Trzeba wykorzystać [Gm]szansę[A]',
        '[Gm]By zatracić się tej [Dm]nocy',
        '[Gm]I pokusom dać się [A]stoczyć',
      ]),
    },
    {
      label: 'Refren (x2)',
      repeat: 2,
      lines: parseSection([
        'To jest [Dm]do tańca [Gm]kawałek[A]',
        'Więc zrób [Dm]coś ze swym [Gm]ciałem[A]',
        'Ja się do [Dm]ciebie [Gm]uczepię[A]',
        '[Gm]I może będzie nam [A]lepiej',
      ]),
    },
  ],
};

// Chord-above-line format, guitar-tab licks skipped, final chorus modulates
// down (C#m-based -> C-based) — surowe-piosenki/stachursky typ niepokorny.txt
const typNiepokorny = {
  id: 'typ-niepokorny',
  title: 'Typ niepokorny',
  artist: 'Stachursky',
  key: 'C#m (finał w C)',
  capo: null,
  chordsUsed: ['C#m', 'B', 'A', 'G#m', 'F#m', 'Em', 'D', 'C', 'Bm', 'Am7', 'G', 'E', 'Dm', 'Bb', 'F'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[C#m]Biegnę, [B]muszę cię [A]zatrzymać, [G#m]muszę ci [F#m]powiedzieć',
        '[E]Jak wiele ty i [F#m]twoje słowa znaczą dla mnie',
        '[Em]Skamlę, choć [D]wiem, że nie [C]przystoi, lecz [Bm]tu tak bardzo [Am7]boli',
        '[G]Więc nie mów mi, [C]że świat to [D]tylko głupi, [E]prosty żart',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[B]To ja - [C#m]typ niepokorny, [A]nikt nie [C#m]wie, co we [B]mnie [E]tkwi',
        '[B]Ten sam, [C#m]choć niepodobny, [A]kochanie, [C#m]proszę, [B]wybacz mi',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[C#m]Wierzę, wierzę w to, co [B]czuję, [A]wierzę w to, co [G#m]śpie[F#m]wam',
        '[E]I w słowa, które płyną z moich [F#m]ust do ciebie',
        '[Em]W trasie, na [D]scenie czy w [C]hotelu, tak jak [Bm]jeden z [Am7]wielu',
        '[G]Zabijam się, [C]by żyć i [D]dać ci to, co [E]mogę dać',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[B]To ja - [C#m]typ niepokorny, [A]nikt nie [C#m]wie, co we [B]mnie [E]tkwi',
        '[B]Ten sam, [C#m]choć niepodobny, [A]kochanie, [C#m]proszę, [B]wybacz mi',
      ]),
    },
    {
      label: 'Bridge',
      lines: parseSection([
        '[D]Nieważne teraz, jak i gdzie, [Bm]nieważne za jaką cenę',
        '[C]Choć czas powoli posuwa mnie, [Am7]ja pewnie się nie zmienię',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[Em]Skamlę, choć [D]wiem, że nie [C]przystoi, lecz [Bm]tu tak bardzo [Am7]boli',
        '[G]Więc nie mów mi, [C]że świat to [D]tylko głupi, [E]prosty żart',
      ]),
    },
    { label: 'Solo (instr.)', instrumental: 'E B C#m A C#m B E B C#m A C#m B F' },
    {
      label: 'Refren (finał, x2)',
      repeat: 2,
      lines: parseSection([
        '[C]To ja - [Dm]typ niepokorny, [Bb]nikt nie [Dm]wie, co we [C]mnie [F]tkwi',
        '[C]Ten sam, [Dm]choć niepodobny, [Bb]kochanie, [Dm]proszę, [C]wybacz mi[F]',
      ]),
    },
  ],
};

// Chords glued into words, modulates C -> D -> E across the song —
// surowe-piosenki/elektryczne gitary co ty tutaj robisz.txt
const coTyTutajRobisz = {
  id: 'co-ty-tutaj-robisz',
  title: 'Co ty tutaj robisz',
  artist: 'Elektryczne Gitary',
  key: 'C (modulacja C→D→E)',
  capo: null,
  chordsUsed: ['C', 'Em', 'F', 'G', 'Dm', 'D', 'A', 'F#m', 'D7', 'Gm', 'E', 'G#m', 'B'],
  sections: [
    { label: 'Wstęp (instr.)', instrumental: 'C Em F C G  x2' },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        'I co ja [C]robię tu / u-u / co ty tutaj rob[Em]isz',
        'Dwanaście [F]ciężkich',
        'Szczerozłotych [C]koron moją głowę [G]zdobi',
        'Jest tyle [C]różnych dróg / u-u / co ty tutaj [Em]robisz',
        'Kolejny [F]piękny',
        'Marmurowy [C]pomnik koło domu [G]stoi',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'Już [Dm]każdy po[F]wiedział to co [G]wiedział',
        'Trzy[Dm] razy wy[F]słuchał dobrze [G]mnie',
        '[C]Wszyscy zgadzają się ze [Em]sobą',
        'A będzie [F]nadal tak jak [G]jest',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        'I co ja[C] robię tu / u-u / co ty tutaj [Em]robisz',
        'Są takie [F]rzeczy',
        'Że nikt nie za[C]przeczy po co tu się [G]głowić',
        'Z daleka[C] słychać szum / u-u / co ty tutaj [Em]robisz',
        'Dla wielkich [F]oraz osłów',
        'By się [C]rzucić z mostu no i [G]łowić',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'Już [Dm]każdy po[F]wiedział to co [G]wiedział',
        'Trzy[Dm] razy wy[F]słuchał dobrze [G]mnie',
        '[C]Wszyscy zgadzają się ze [Em]sobą',
        'A będzie [F]nadal tak jak [G]jest',
      ]),
    },
    {
      label: 'Zwrotka 3 (modulacja do D)',
      lines: parseSection([
        'I co ja [D]robię tu / u-u / co ty tutaj [F#m]robisz',
        'Mieć te prze[G]strzenie',
        'Na jedno ski[D]nienie wiele wyna[A]grodzi',
        'Nie trzeba [D]tęgich głów / u-u / co ty tutaj [F#m]robisz',
        'Takie o[G]kazje',
        'Bale i lo[D]kale chcą bym się na[A]rodził',
      ]),
    },
    {
      label: 'Refren (D)',
      lines: parseSection([
        'Już [Em]każdy po[G]wiedział to co [A]wiedział',
        'Trzy [Em]razy wy[G]słuchał dobrze [A]mnie',
        '[D]Wszyscy zgadzają się ze [F#m]sobą',
        'A będzie [G]nadal tak jak [A]jest',
      ]),
    },
    { label: 'Solo (instr.)', instrumental: 'D D7 G Gm A  x2' },
    {
      label: 'Zwrotka 4 (modulacja do E)',
      lines: parseSection([
        'I co ja [E]robię tu / u-u / co ty tutaj [G#m]robisz',
        'Dwanaście [A]ciężkich',
        'Szczerozłotych [E]koron moją głowę [B]zdobi',
        'Jest tyle [E]różnych dróg / u-u / co ty tutaj [G#m]robisz',
        'Kolejny [A]piękny',
        'Marmurowy [E]pomnik koło domu [B]stoi',
      ]),
    },
    {
      label: 'Refren (E)',
      lines: parseSection([
        'Już [F#m]każdy po[A]wiedział to co [B]wiedział',
        'Trzy [F#m]razy wy[A]słuchał dobrze [B]mnie',
        '[E]Wszyscy zgadzają się ze [G#m]sobą',
        'A będzie [A]nadal tak jak [B]jest',
      ]),
    },
    {
      label: 'Zakończenie',
      lines: parseSection([
        'I co ja [E]robię tu [G#m] [A] [B]',
        'Co ty [E]tutaj robisz[G#m] [A] [B]',
      ]),
    },
  ],
};

// Chords only loosely tied to line-pairs in the source (not word-exact); guitar
// tab riff skipped per instructions; most later verses have no chords marked
// at all in the source — surowe-piosenki/bugarskie centrum hujozy pidzama porno.txt
const bulgarskieCentrumHujozy = {
  id: 'bulgarskie-centrum-hujozy',
  title: 'Bułgarskie Centrum Hujozy',
  artist: 'Pidżama Porno',
  key: 'Am',
  capo: null,
  chordsUsed: ['Am', 'Em', 'C', 'D', 'B'],
  sections: [
    { label: 'Wstęp (instr.)', instrumental: 'Am (riff)  x4' },
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Am]Pewnie nie wiesz ale mam to po [Em]komunie',
        '[Am]Gawiedziowstręt - źle się [Em]czuję w tłumie',
        '[Am]Źle się czuję wśród tych co [Em]otwarte już drzwi',
        'Chcą wyważyć',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        'Wszyscy śpiewają wszyscy klaszczą w dłonie',
        'Andy Warhol, orzeł w koronie',
        'Mówisz mi kim mam być',
        'W czym najlepiej mi jest do twarzy',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Am]Same [B]chujowe [C]słowa[D]',
        '[Am]Jak prze[B]żeniony [C]towar[D]',
        'Same chore słowa',
        'Po których puchnie głowa',
        'Siedzę w Bułgarskim Centrum...',
        'Centrum Hujozy jest tu',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        'Tomasz Wata o końcu świata mówi',
        'Głodne kawałki dla najedzonych żółwi',
        'Ten jego przebiegły żydowski spisek',
        'Ja zmaczam pissem',
      ]),
    },
    {
      label: 'Zwrotka 4',
      lines: parseSection([
        'Poniżej pasa - twa sztuczka nieczysta',
        'To do lisiej pipki z tutejszego Aktivista',
        'Wiadro żółci ma twa wątroba snoba',
        'Że aż zapachniało linczem',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection(['[Am]Same [B]chujowe [C]słowa[D]']),
    },
    {
      label: 'Zwrotka 5',
      lines: parseSection([
        'Podziemna scena z lotu ptaka',
        'Fajnie wygląda na plakatach',
        'Za trumną w kondukcie po cichu człapią',
        'Baby kulawe',
      ]),
    },
    {
      label: 'Zwrotka 6',
      lines: parseSection([
        'Miał Kozakiewicz na łokciu zgięcie',
        'Tu prawa Mendla, tam zapałka na zakręcie',
        'Schowaj synku swój biedny środkowy palec',
        'Bo zaraz sobie nim zamieszam kawę',
      ]),
    },
  ],
};

// Chords glued into words, modulates a whole step+ up (Em -> Gm) for the last
// third of the song — surowe-piosenki/pedza konie po betonie golec uorkiestra.txt
const pedzaKonie = {
  id: 'pedza-konie',
  title: 'Pędzą konie po betonie',
  artist: 'Golec uOrkiestra',
  key: 'Em (modulacja do Gm)',
  capo: null,
  chordsUsed: ['Em', 'B7', 'Am', 'B', 'F#', 'D', 'G', 'C', 'Gm', 'A', 'D7', 'F', 'Bb', 'Cm', 'D#'],
  sections: [
    {
      label: 'Zwrotka 1',
      lines: parseSection([
        '[Em]Tam, gdzie wielka niewia[B7]doma',
        '[Em]Tam, skąd płyną do nas [B7]dni',
        '[Em]Jak w rydwanie zaprzę[B7]żeni',
        '[Am]Gnamy razem ja i [B]Ty',
        '[Em]Wóz po dziurach się ko[B7]łacze',
        '[Em]Los niepewny dla mnie [B7]masz',
        '[Em]Lecz nic na to nie po[B7]radzę',
        '[Am]Pierwsze skrzypce w sercu [B]grasz',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Em]Pędzą konie [F#]po betonie [B]w szarej [B7]mgle',
        '[Em]Chociaż czasem [F#]jest nam dobrze, [B]czasem [B7]źle',
        '[Em]Jesteś dla mnie [D]wielką damą',
        '[G]Tą jedyną, [Am]tą wybraną',
        '[Em]I jak [C]nikt na całym świecie',
        '[Em]Ko[C]cham [B]Cię',
      ]),
    },
    {
      label: 'Zwrotka 2',
      lines: parseSection([
        '[Em]Tyś na wojnie się nie [B7]bała',
        '[Em]Od armatnich ginąć [B7]kul',
        '[Em]Jak narkotyk poma[B7]gałaś',
        '[Am]Najtrudniejszy znosić [B]ból',
        '[Em]Choć nie mogę Cię zo[B7]baczyć',
        '[Em]Bo przede mną chowasz [B7]twarz',
        '[Em]Mocno czuję jak co[B7]dziennie',
        '[Am]Przy mym boku wiernie [B]trwasz',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        '[Em]Pędzą konie [F#]po betonie [B]w szarej [B7]mgle',
        '[Em]Chociaż czasem [F#]jest nam dobrze, [B]czasem [B7]źle',
        '[Em]Jesteś dla mnie [D]wielką damą',
        '[G]Tą jedyną, [Am]tą wybraną',
        '[Em]I jak [C]nikt na całym świecie',
        '[Em]Ko[C]cham [B]Cię',
      ]),
    },
    {
      label: 'Zwrotka 3',
      lines: parseSection([
        '[Em]Ty do nieba żywcem [B7]bierzesz',
        '[Em]Tych, co wierni Tobie [B7]są',
        '[Em]Wszyscy Twoi oblu[B7]bieńcy',
        '[Am]Na Twych piersiach słodko [B]śpią',
        '[Em]Decybeli nie ża[B7]łujesz',
        '[Em]Gdy rozgrzany skacze [B7]tłum',
        '[Gm]Dobrze bawi się, gdy [D7]jesteś  (tu zmiana tonacji +3)',
        '[Cm]Jak z kałasza bum, bum, [D]bum',
      ]),
    },
    {
      label: 'Refren (modulacja, x2)',
      repeat: 2,
      lines: parseSection([
        '[Gm]Pędzą konie [A]po betonie [D]w szarej [D7]mgle',
        '[Gm]Chociaż czasem [A]jest nam dobrze, [D]czasem [D7]źle',
        '[Gm]Jesteś dla mnie [F]wielką damą',
        '[Bb]Tą jedyną, [Cm]tą wybraną',
        '[Gm]I jak [D#]nikt na całym świecie',
        '[Gm]Ko[D#]cham [D]Cię',
      ]),
    },
    { label: 'Przejście (instr.)', instrumental: 'Gm D7 Gm D7 Gm D7 Cm D  x2' },
    {
      label: 'Refren (modulacja)',
      lines: parseSection([
        '[Gm]Pędzą konie [A]po betonie [D]w szarej [D7]mgle',
        '[Gm]Chociaż czasem [A]jest nam dobrze, [D]czasem [D7]źle',
        '[Gm]Jesteś dla mnie [F]wielką damą',
        '[Bb]Tą jedyną, [Cm]tą wybraną',
        '[Gm]I jak [D#]nikt na całym świecie',
        '[Gm]Ko[D#]cham [D]Cię',
      ]),
    },
    {
      label: 'Refren (modulacja, skrócony)',
      lines: parseSection([
        '[Gm]Pędzą konie [A]po betonie [D]w szarej [D7]mgle',
        '[Gm]Chociaż czasem [A]jest nam dobrze, [D]czasem [D7]źle',
        '[Gm]Jesteś dla mnie [F]wielką damą',
        '[Bb]Tą jedyną, [Cm]tą wybraną',
      ]),
    },
    {
      label: 'Zakończenie',
      lines: parseSection(['Hej muzyczko, moja miła', '[Gm]Ko[D#]cham [D]Cię']),
    },
  ],
};

// Source gives only an overall chord outline at the very end, not tied to
// specific words — shown as a reference note only, per user's choice. Lyrics
// are complete and exact — surowe-piosenki/w kinie w lublinie kochaj mnie.txt
const wKinieWLublinie = {
  id: 'w-kinie-w-lublinie',
  title: 'W kinie w Lublinie – kochaj mnie',
  artist: 'Wykonawca nieznany',
  key: null,
  capo: null,
  chordsUsed: [],
  sections: [
    {
      label: 'Ogólny przebieg akordów (nie przypisany do słów)',
      instrumental:
        'zwrotka: Em - F#7 - B - Em  x2   /   F#m - G#7 - C#m - F#m  x2   /   [Refren]: G - D - Em - F# - C   /   G - Am - B - Em - D',
    },
    {
      lines: parseSection([
        'O świcie i o zmroku',
        'O świcie i o zmroku',
        'W południe, w nocy o świcie',
        'W Skarżysku i w Sanoku',
        'W Skarżysku i w Sanoku',
        'Ty mnie pokochaj nad życie',
      ]),
    },
    {
      lines: parseSection([
        'W berecie, w czapce, chustce',
        'W berecie, w czapce, chustce',
        'W czapce od stryjka ze Lwowa',
        'Na falochronie w Ustce',
        'Na falochronie w Ustce',
        'Ty mnie pokochaj od nowa',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'W kinie, w Lublinie – kochaj mnie',
        'W Kłaju, w tramwaju – kochaj mnie',
        'Nie marudź, nie szlochaj',
        'Ale z całej siły kochaj',
        'W gminie, w Kętrzynie – kochaj mnie',
        'W metrze i w swetrze – kochaj mnie',
        'Czy miasto czy wiocha ty mnie z całej siły kochaj',
      ]),
    },
    {
      lines: parseSection([
        'W radości no i w smutku',
        'W radości no i w smutku',
        'W radości z ciepłego lata',
        'Na piasku plaży, w Gródku',
        'Na piasku plaży, w Gródku',
        'Kochaj mnie do końca świata',
      ]),
    },
    {
      lines: parseSection([
        'W spokoju oraz w gniewie',
        'W spokoju oraz w gniewie',
        'W spokoju palmowych niedziel',
        'W Marwałdzie i w Gętlewie',
        'W Marwałdzie i w Gętlewie',
        'Kochaj w bogactwie i w biedzie',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'W kinie, w Lublinie – kochaj mnie',
        'W Kłaju, w tramwaju – kochaj mnie',
        'Nie marudź, nie szlochaj',
        'Ale z całej siły kochaj',
        'W gminie, w Kętrzynie – kochaj mnie',
        'W metrze i w swetrze – kochaj mnie',
        'Czy miasto czy wiocha ty mnie z całej siły kochaj',
      ]),
    },
    {
      lines: parseSection([
        'Jak młody ułan dzielnie',
        'Jak młody ułan dzielnie',
        'Jak wartki na wiosnę strumień',
        'Na nartach wodnych w Mielnie',
        'Na nartach wodnych w Mielnie',
        'Kochaj najmocniej jak umiesz',
      ]),
    },
    {
      lines: parseSection([
        'Latem w przydrożnym rowie',
        'Latem w przydrożnym rowie',
        'Zimą na sankach i nartach',
        'Najmocniej zaś w Krakowie',
        'Najmocniej zaś w Krakowie',
        'Kochaj bom tego jest warta',
      ]),
    },
    {
      label: 'Refren',
      lines: parseSection([
        'W kinie, w Lublinie – kochaj mnie',
        'W Kłaju, w tramwaju – kochaj mnie',
        'Nie marudź, nie szlochaj',
        'Ale z całej siły kochaj',
        'W gminie, w Kętrzynie – kochaj mnie',
        'W metrze i w swetrze – kochaj mnie',
        'Czy miasto czy wiocha ty mnie z całej siły kochaj!',
      ]),
    },
  ],
};

export const songs = [
  agnieszka,
  bylasDlaMnieWszystkim,
  klocki,
  dzaga,
  facetToSwinia,
  iLoveYou,
  buraki,
  oooKonczySieJuzNoc,
  balkanica,
  makumba,
  takSmakujeZycie,
  naSzczycie,
  czarneOczy,
  jakiTuSpokoj,
  mojPrzyjacielu,
  miloscWZakopanem,
  onaByTakChciala,
  calujMnie,
  ajrisz,
  konikNaBiegunach,
  kotowKat,
  doTancaKawalek,
  typNiepokorny,
  coTyTutajRobisz,
  bulgarskieCentrumHujozy,
  pedzaKonie,
  wKinieWLublinie,
].sort((a, b) => a.title.localeCompare(b.title, 'pl'));

export function getSongById(id) {
  return songs.find((s) => s.id === id);
}
