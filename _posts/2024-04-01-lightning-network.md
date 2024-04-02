---
title: "Lajtning Mreža"
date: 2024-04-01T00:00:00-00:00
categories: [fintech]
tags: [finance, crypto]
classes: wide
excerpt: "Lajtning Mreža"
---

**[Lajtning Mreža](https://en.wikipedia.org/wiki/Lightning_Network){:target="_blank"} (LN) razvoj i slučaj upotrebe**<br>
Bitcoin Sloj 2 (L2) - [Tehnologija iza](https://medium.com/coinmonks/the-lightning-network-technology-behind-bitcoins-scaling-solution-915c07455ca8){:target="_blank"}

LANG(jezik):<br>
[Global](https://infopedia.io/lightning-network/) (en-us) / Local (sr-latn-ba)<br>

![bitcoin-future](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/lightning-model.jpg)

<center>QR Link</center>
![QR Link](https://quickchart.io/qr?text=https://infopedia.io/lightning-network/)

**Problemi Skaliranja**:  
* Bazni sloj Bitkoina i Blokčejn arhitektura uopšteno ne mogu se skalirati.
Da bi dugoročno ostao dovoljno decentralizovan, iz perspektive upravljanja, potrebna mu je čvrsta struktura i visoka redundantnost.  
Ovo postavlja praktična ograničenja za Bazu podataka kako bi omogućila mnoge distribuirane čvorove. Takođe ograničava broj transakcija u sekundi (TPS), kako bi se postiglo globalno stanje sinhronizacije za konsenzus.  
Čak i kada bi se Bitcoin 10 TPS nekako čudesno povećao za faktor 10 bez gubitka sigurnosti, ipak 100 TPS ne bi ništa promijenilo, jer za cijeli svijet nam treba najmanje 1 milion TPS.
* [**Blokčejn Trilema**](https://medium.com/@chainway_xyz/the-true-trilemma-for-bitcoin-layers-06855d535b95){:target="_blank"} <u>/\</u> (otpornost naspram efikasnosti):  
1.Decentralizacija, 2.Sigurnost, 3.Skalabilnost (br. 3 ostavljen za [**naredne slojeve**](https://www.minima.global/post/taking-blockchain-scalability-to-the-next-layer){:target="_blank"}).

-- Jedno od najperspektivnijih **Rješenja** je tzv [***Lajtning Mreža***](https://lightning.network/){:target="_blank"}.  
Radi preko kanala između čvorova i potrebne su mu osnovne transakcije samo za otvaranje, zatvaranje, ponovno balansiranje i rutiranje.  
Jedna jednostavna analogija je kada otvorite račun za pivo sa barmenom i na kraju noći se konačno riješi. Ali kada se jednom postavi, može podnijeti velike količine transakcija bez potrebe za redovnom vezom sa glavnom mrežnom.
Uz trenutnu propusnost transakcija mogli bismo vidjeti da se svake godine otvara do 100 000 novih kanala. 
Kasnije proces za uključivanje korisnika može se još više povećati uz [**Fabrike kanala**](https://bitcoinops.org/en/topics/channel-factories/){:target="_blank"} za [**skalabilnost**](https://bitcoin.stackexchange.com/questions/67158/what-are-channel-factories-and-how-do-they-work){:target="_blank"} i [**Zavjete**](https://bitbox.swiss/blog/what-are-bitcoin-covenants/){:target="_blank"} ([skaliranje iznad](https://www.rhinobitcoin.com/blog/bitcoin-covenants-can-we-scale-beyond-100m-users){:target="_blank"}).  
Ostale opcije još u razvoju uključuju: [priključni kanali](https://lightning.engineering/posts/2021-05-26-sidecar-channels/){:target="_blank"}, [naslijeđeni ID](https://github.com/JohnLaw2/btc-iids/blob/main/iids14.pdf){:target="_blank"}, and [lanci stanja](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39){:target="_blank"}.   
-- Kao takav ima potencijal preko [**1 milion**](https://cointelegraph.com/news/bitcoin-lightning-network-vs-visa-and-mastercard-how-do-they-stack-up){:target="_blank"} TPS, upravo odgovaraju'u broj, dok zadržava niske provizije.  
Ipak, treba napomenuti da ovo nije nužno konačno rješenje ([Izazovi](https://www.blockchain-council.org/blockchain/what-is-the-lightning-network/){:target="_blank"} & [Odgovori](https://murchandamus.medium.com/i-have-just-read-jonald-fyookballs-article-https-medium-com-jonaldfyookball-mathematical-fd112d13737a){:target="_blank"}).  
Ovi protokoli imaju za cilj da prošire funkcionalnost Bitcoina do određene tačke, dok održavaju osnovni sloj sigurnim i decentralizovanim ([**LN 2.0**](https://blog.theabacus.io/lightning-network-2-0-b878b9bb356e){:target="_blank"}).  
Takođe dodaje podršku za mili-Satošije subSat (1/1000), sa većom decimalnom preciznošću za mikrotransakcije i protočna plaćanja.
Postoji nekoliko [implementacija](https://medium.com/@fulgur.ventures/an-overview-of-lightning-network-implementations-d670255a6cfa){:target="_blank"} protokola, gdje spadaju:  
-***C-lightning*** razvio *Blockstream* u C jeziku  
-***Eclair***, francuski za *Lightning*, implementirano u Skali od ACINQ  
-***LND*** (*Lightning Network Daemon*) čvor od *Lightning Labs* u Go  

Tehničke poteškoće i rješenja:  
-pronalaženje održivih puteva -> *Pickhardt* rutiranje:
-propuštanje privatnosti -> PTLC-ovi (Ugovori sa zaključanim vremenom), trampolina rutiranje  
-prisilno zatvoren kanal -> rješava se s vremenom

-- Još jedna sporna stavka koje Lighting poboljšava je **Privatnost** jer transakcije nisu javno vidljive u lancu.  
Ovdje spomenimo [**Wasabi**](https://wasabiwallet.io/){:target="_blank"} novčanik koji planira omogućiti [Lightning sa CoinJoins](https://blog.wasabiwallet.io/what-lightning-network-enabled-wabisabi-coinjoins-might-look-like/){:target="_blank"}. 

-- Takođe vredi napomenuti da trenutno nije izvodljivo da svaka osoba na planeti ima potpuno privatni novčanik sa svojim sopstvenim čvorom.  
Osim toga, za većinu ljudi ovo je previše komplikovano, pa vjerovatno nije ni potrebno.  
Umjesto toga, realniji pristup je imati mnogo distribuiranih 'staratelja', na primjer kao što danas imamo *Wallet of Satoshi - WoS*.
-- U stvari, svaka banka bi mogla postati 'staratelja' i lajtning čvor.  
Povrh toga, možda će samo nekoliko procenata globalne populacije imati samozaštitu, sa potpuno ili djelimično bez posrednika implementacijom.  
Jedan primjer sa čvorovima koji ne usmjeravaju je [**Phonix**](https://phoenix.acinq.co/){:target="_blank"} novčanik koji ima čvor na mobilnom, ali se povezuje samo na [Acinq](https://acinq.co/){:target="_blank"} čvor. Pružaju usluge automatskog upravljanja kanalima i balansiranja likvidnosti. Phoenix je odličan novčanik u kojem držite svoje ključeve, ali je i dalje vrlo jednostavan za korištenje s modelom sa minimalnim povjerenjem.  
Zatim postoji opcija za čvorove sa federacijom kao što je [**FediMint**](https://fedimint.org/){:target="_blank"} koji koriste federalne modele za upravljanje.  

-- Dakle, u narednih 20+ godina, ako bi nekoliko milijardi ljudi počelo da ga koristi, mogli bismo očekivati oko 50 000 čvorova sa prosječno 100.000 korisnika.
Naravno, postojao bi mali broj onih sa milion korisnika i mnogo malih sa nekoliko stotina korisnika - Normalna Raspodjela u bankarstvu, a trenutno ima oko 25 000 [banki globalno](https://www.linkedin.com/pulse/how-many-banks-globally-david-gyori){:target="_blank"}. (Mega banke naspram [**Društvene banke**](https://www.extractable.com/insights/by-the-numbers-mega-banks-vs-community-banks/){:target="_blank"}.)  
-- Takođe se od velikih korporacija očekuje da imaju svoje čvorove i kanale sa dobavljačima za plaćanje, dok bi male kompanije koristile kastodi banke.  
Kao što velika preduzeća imaju svoj sektor računovodstva, tako i manja angažuju eksterne usluge iz računovodstvenih biroa.  

Bitkoin Lajtning novčanici - [**Pregled**](https://www.coinbureau.com/analysis/best-bitcoin-lightning-wallets/){:target="_blank"}  
![wallets](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/lightning-wallets.jpg)

Sopstveni kastodi lajtning novčanici - [**Poređenje**](https://www.coindesk.com/consensus-magazine/2024/01/26/which-is-the-best-self-custody-lightning-wallet/){:target="_blank"} (testirano u Africi):  
***Phoenix, Mutiny, Blixt, Green, Zeus, Wallet of Satoshi***.

U međuvremenu postoji zanimljiv slučaj upotrebe za 'stabilne Sats' (alternativa Stable koinima), poput dolara ili čak eura na vrhu Bitcoin mreže, npr. za ino doznake, a posebno na globalnom jugu gde su mnoge lokalne valute prilično nestabilne sa veoma visokom inflacijom. Novčanici sa mogućnosti stabilne valute karakteristikama:

| Novčanik | Stabilnost | Bazirano | Org/lokacija |
| -----  | ---------- | -------- | ------------- |
| [**Aqua**](https://aquawallet.io/){:target="_blank"}  | USDT | [Liquid (BlockStream)](https://liquid.net/){:target="_blank"} | [Jan3](https://jan3.com/){:target="_blank"} |
| [**Blink**](https://www.blink.sv/){:target="_blank"}  | Berza | ex Bitcoin Beach (BBW) | [Galloy](https://galoy.io/){:target="_blank"} |
| [**10101**](https://10101.finance/){:target="_blank"} | DLC (ne LN) | USDp - bolt | Australia |
| [**Mutiny**](https://www.mutinywallet.com/){:target="_blank"} | DLC Kanal | Web-app | Austin TX |

Mrežna [**Topologija**](https://appliednetsci.springeropen.com/articles/10.1007/s41109-023-00602-2){:target="_blank"} i [graf](https://lnrouter.app/graph){:target="_blank"} (distribucija nodova):  
![graph](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/lightning-graph.jpg)

[**Istraživački**](https://river.com/learn/files/river-lightning-report-2023.pdf){:target="_blank"} izvještaj od *River* (2023) and Analitički [Servis](https://1ml.com/){:target="_blank"}  
Ostali naučni papiri:  
[nakamotoinstitute/funding-of-micropayment-channel](https://nakamotoinstitute.org/static/docs/scalable-funding-of-bitcoin-micropayment-channel-networks.pdf){:target="_blank"}  
[lightning-pool-whitepaper](https://lightning.engineering/lightning-pool-whitepaper.pdf){:target="_blank"}  
[MA_EEMCS](https://essay.utwente.nl/80780/1/Wijburg_MA_EEMCS.pdf){:target="_blank"}  

YT za pregledati:  
-[Bitcoin's Lightning Network](https://www.youtube.com/watch?v=rrr_zPmEiME){:target="_blank"} (*Simply Explained*)  
-[Bitcoin Lightning Network: Šta treba znati](https://www.youtube.com/watch?v=J3cQNpOR_a0){:target="_blank"} (*Coin Bureau*)  
-[Šta je Lightning Network?](https://www.youtube.com/watch?v=pBh4DcM-0pg){:target="_blank"} (*99Bitcoins*)  
-[Šta je to? zašto da me zanima?](https://www.youtube.com/watch?v=AYAreuNzx58&t=39s){:target="_blank"} & [Tech Intro to LN - devs 2020](https://www.youtube.com/watch?v=E1n3sKKPD_k){:target="_blank"} (*Andreas Antonopoulos*)  
-[Lightning lako](https://www.youtube.com/watch?v=nusOl6wb1a4){:target="_blank"} & [LN wiht Phoenix](https://www.youtube.com/watch?v=9j_slmZ7Eyo) (*Bitcoin University*)  
-[Skaliranje Bitcoina sa Giacomo, John & Matt](https://www.youtube.com/watch?v=Iz81W-_X5gw){:target="_blank"} (*WBD - What Bitcoin Did*)  

Tabla info:  
-[mempool.space/lightning](https://mempool.space/lightning){:target="_blank"}  
-[clarkmoody.com/dashboard](https://bitcoin.clarkmoody.com/dashboard/){:target="_blank"}  
-[bitbo.io](https://bitbo.io/target="_blank")  

Prethodni Bit postovi:  
B1. [**(r)Evolucija Novca of**](https://infopedia.io/sr-latn/revolution-of-money/)  
B2. [**Bitkoin budućnost and makro izgled**](https://infopedia.io/sr-latn/bitcoin-future-macro-outlook/)  

PS  
Ako imate sopstevni posao ili pružate usluge razmislite o tome da počnete da prihvatate BTC (kružna ekonomija), naljepnica::  
(jedan lični primjer sa cijenama također denominiranim u bit-u - [codis.tech/efcorebulk](https://codis.tech/efcorebulk))  
![bit-acc](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/bit-acc.png)
Donacija za podršku: [BTC-LN](https://borisdj.net/donation/donate-btc.html){:target="_blank"}  
