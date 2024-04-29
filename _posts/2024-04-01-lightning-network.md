---
title: "Lajtning Mreža"
date: 2024-04-01T00:00:00-00:00
categories: [fintech]
tags: [finance, crypto]
classes: wide
excerpt: "Lajtning Mreža"
---

**[LN](https://en.wikipedia.org/wiki/Lightning_Network){:target="_blank"} razvoj i upotreba**<br>
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
Radi preko [dvosmjernih kanala](https://bitcoinmagazine.com/technical/understanding-the-lightning-network-part-building-a-bidirectional-payment-channel-1464710791){:target="_blank"} između čvorova i potrebne su mu osnovne transakcije samo za otvaranje, zatvaranje, ponovno balansiranje i rutiranje. Ali kada se jednom uspostavi, može podnijeti velike količine transakcija bez potrebe za čestom konekcijom sa glavnom mrežom.  
Ovi protokoli imaju za cilj da prošire funkcionalnost Bitcoina do određene tačke, dok održavaju osnovni sloj sigurnim i decentralizovanim ([**LN 2.0**](https://blog.theabacus.io/lightning-network-2-0-b878b9bb356e){:target="_blank"}).  
-- Kao takav ima potencijal preko [**1 milion**](https://medium.com/@mnry.io/what-is-the-lightning-network-and-how-does-it-work-a9015096cc1c){:target="_blank"} TPS, upravo odgovarajuću broj, dok zadržava niske provizije. Ipak, treba napomenuti da ovo nije nužno konačno rješenje i da ima još izazova.  
-- Takođe vrijedi napomenuti da trenutno nije izvodljivo da svaka osoba na planeti ima potpuno privatni novčanik sa svojim sopstvenim čvorom. Uz trenutnu propusnost transakcija mogli bismo vidjeti da se svake godine otvara do 100 000 novih kanala, relativno sporo za globalnu populaciju. Umjesto toga, realniji pristup je imati mnogo distribuiranih 'staratelja' - čuvara bitcoin-a. 
-- U stvari, svaka banka bi mogla postati 'staratelj' i lajtning čvor (distribuirana i disperzovana mrežna arhitektura čvorišta). Povrh toga, možda će samo nekoliko procenata globalne populacije imati lično čuvanje, potpuno ili djelimičnom implementacijom bez posrednika. 

-- Dakle, u narednih 20+ godina, ako bi nekoliko milijardi ljudi počelo da ga koristi, mogli bismo očekivati oko 50 000 čvorova sa prosječno 100.000 korisnika. Naravno, postojao bi mali broj onih sa milion korisnika i mnogo malih sa nekoliko stotina korisnika - Normalna Raspodjela u bankarstvu, a trenutno globalno ima oko [25 000 banaka](https://www.linkedin.com/pulse/how-many-banks-globally-david-gyori){:target="_blank"}. ([Mega banke naspram Društvene banke](https://www.extractable.com/insights/by-the-numbers-mega-banks-vs-community-banks/){:target="_blank"}.)  
-- Takođe se od velikih korporacija očekuje da imaju svoje čvorove i kanale sa dobavljačima za plaćanje, dok bi male kompanije koristile kastodi banke. Kao što velika preduzeća imaju svoj sektor računovodstva, tako i manja angažuju eksterne usluge iz računovodstvenih biroa.

-- Za lakše razumjevanje jedna prosta analogija je kao kada otvorite račun za pivo sa barmenom i na kraju noći se konačno riješi. U praksi zahtjev za plaćanje se šalje od primaoca kao lajtning faktura, koji može biti sa definisanim iznosom, ili prazan i ostavljen da ga pošiljalac unese.
Osim toga, za većinu ljudi ovo je previše komplikovano, pa vjerovatno nije ni potrebno.  
-- Još jedna sporna stavka koju Lighting poboljšava je **Privatnost** jer transakcije nisu javno vidljive u lancu.  
LN takođe dodaje podršku za mili-Satošije subSat (1/1000), sa većom decimalnom preciznošću za mikrotransakcije i protočna plaćanja (Sats [simbol](https://bitcoinmagazine.com/culture/my-suggestion-for-the-bitcoin-sats-symbol){:target="_blank"}). 

Postoji nekoliko [implementacija](https://medium.com/@fulgur.ventures/an-overview-of-lightning-network-implementations-d670255a6cfa){:target="_blank"} protokola, gdje spadaju:  
-***C-lightning*** razvio *Blockstream* u C jeziku  
-***Eclair***, francuski za *Lightning*, implementirano u Skali od ACINQ  
-***LND*** (*Lightning Network Daemon*) čvor od *Lightning Labs* u Go  

Tehničke poteškoće i rješenja:  
-pronalaženje održivih puteva -> *Pickhardt* rutiranje  
-propuštanje privatnosti -> PTLC-ovi (Ugovori sa zaključanim vremenom), trampolina rutiranje  
-prisilno zatvoren kanal -> rješava se s vremenom  

[**Istraživački**](https://river.com/learn/files/river-lightning-report-2023.pdf){:target="_blank"} izvještaj od *River* (2023) i Analitički [Servis](https://1ml.com/){:target="_blank"}  

Bitkoin Lajtning novčanici:  
-[**Poređenje**](https://luxb.substack.com/p/usporedba-lightning-novcanika){:target="_blank"} (od *luxb* @substack)  
![wallets](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/lightning-wallets-all.jpg)

Sopstveni kastodi LN novčanici - [**Test**](https://anitaposch.com/lightning-wallet-test-2024){:target="_blank"} (od *Anita Posch* - testirano u Africi):  
***Phoenix, Mutiny, Blixt, Green, Zeus,** Wallet of Satoshi(kastodi)*.  
*Phoenix je bio na vrhu ljestvice zbog svojih ukupnih performansi i pouzdanosti, a slijedi ga Mutiny zbog njegove jednostavnosti za korištenje.*

Naredna tabela je sa odabranim novčanicima koji su potpuno mobilni.

| Novčanik | Github | Tim | Vid | Tag |
| -----  | ------ | ---- | --- | ---- |
| 1.**Kastodialni** | ------ | ---------- | --- | --------------- |
| [**Wallet of Satoshi**](https://www.walletofsatoshi.com/){:target="_blank"} | Nije OS | Daniel Alexiuc - Australia | [YT](https://www.youtube.com/watch?v=sXBwRO7ML7w){:target="_blank"} | jednostavan, bez provizija |
| [**Strike**](https://strike.me/){:target="_blank"} | Nije OS | Jack Mallers - US | [YT](https://www.youtube.com/watch?v=4-vJ7zZQ4wU){:target="_blank"} | - |
| [**Blink**](https://www.blink.sv/){:target="_blank"} | [Galoy](https://github.com/GaloyMoney/blinkbtc){:target="_blank"} | Nicolas Burtey - El.Sal. | [YT](https://www.youtube.com/watch?v=q3QwxCd1EZE) | [StableSats] |
| 2.**Ne-Kastodialni** | *------* | *----------* | *---* | *---------------* |
| [**Phoenix**](https://phoenix.acinq.co/){:target="_blank"} | [Acinq](https://github.com/ACINQ){:target="_blank"} | Pierre-Marie - Paris, FR | [YT](https://www.youtube.com/watch?v=hmmehTnV3ys){:target="_blank"}| [trust-minimized] |
| [**Breez**](https://breez.technology/mobile/){:target="_blank"} | [BreezMobile](https://github.com/breez/breezmobile){:target="_blank"}| Roy Sheinfeld - Israel | [YT](https://www.youtube.com/watch?v=lcBsn8e-oQ4&t=407s){:target="_blank"} | - |
| [**Mutiny**](https://www.mutinywallet.com/){:target="_blank"} | [MutinyWallet](https://github.com/MutinyWallet/mutiny-web){:target="_blank"} | Tony Giorgio - Austin, TX | [YT](https://www.youtube.com/watch?v=vHQ6wgT3S2I){:target="_blank"} | [Web], [Stables-DLC], [Nostr] |
| [**Blixt**](https://blixtwallet.github.io/){:target="_blank"} | [blixt-wallet](https://github.com/hsjoberg/blixt-wallet){:target="_blank"} | Hampus Sjöberg - Sweden | [YT](https://www.youtube.com/watch?v=5JyOAeaCN0o){:target="_blank"} | - |
| [**Zeus**](https://zeusln.com/){:target="_blank"} | [ZeusLN](https://github.com/ZeusLN/zeus){:target="_blank"} | Evan Kaloudis - NY, US | [YT](https://www.youtube.com/watch?v=hmmehTnV3ys&t=1106s){:target="_blank"} | - |
| 3.**Sa baznim slojem** | *------* | *----------* | *---* | *---------------* |
| [**Electrum**](https://electrum.org/){:target="_blank"} | [spesmilo](https://github.com/spesmilo/electrum){:target="_blank"} | Thomas Voegtlin - Berlin, DE | [YT](https://www.youtube.com/watch?v=pyylkpR4DDk){:target="_blank"} | [eksterni nod] |
| [**BlueWallet**](https://bluewallet.io/){:target="_blank"} | [BlueWallet](https://github.com/BlueWallet/BlueWallet){:target="_blank"} | Nuno Coelho - Barcelona, ES | [YT](https://www.youtube.com/watch?v=iVPNk2ZZ63w){:target="_blank"} | [eksterni nod] |
| [**Green**](https://github.com/Blockstream/green_android){:target="_blank"} | [Blockstream](https://github.com/Blockstream/green_android){:target="_blank"} | Adam Back - US | [YT](https://www.youtube.com/watch?v=DesN85bWmGA){:target="_blank"} | [eksterni nod] |
| [**Wasabi**](https://wasabiwallet.io/){:target="_blank"} | [zkSNACKs](https://github.com/zkSNACKs/WalletWasabi){:target="_blank"} | Max Hillebrand(DE) - Gibraltar | [YT](https://www.youtube.com/watch?v=ECQHAzSckK0){:target="_blank"} | plan za [LN with CoinJoins](https://blog.wasabiwallet.io/what-lightning-network-enabled-wabisabi-coinjoins-might-look-like/){:target="_blank"} |
| [**Sparrow**](https://sparrowwallet.com/){:target="_blank"} | [sparrowwallet](https://github.com/sparrowwallet/sparrow){:target="_blank"} | Craig Raw(ZA) - Cape Town | [YT](https://www.youtube.com/watch?v=qJ_SpQX_YKw){:target="_blank"} | [multisig](https://bitcoiner.guide/multisig/recover/){:target="_blank"} |


Mrežna [**Topologija**](https://appliednetsci.springeropen.com/articles/10.1007/s41109-023-00602-2){:target="_blank"} i [graf](https://lnrouter.app/graph){:target="_blank"} (distribucija nodova):  
![graph](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/lightning-graph.jpg)

--  Ukoliko se ukaže potreba, proces za uključivanje korisnika može se još više povećati uz [**Fabrike kanala**](https://bitcoinops.org/en/topics/channel-factories/){:target="_blank"} za [**skalabilnost**](https://bitcoin.stackexchange.com/questions/67158/what-are-channel-factories-and-how-do-they-work){:target="_blank"}.  
Ostale opcije još u razvoju uključuju: [priključni kanali](https://lightning.engineering/posts/2021-05-26-sidecar-channels/){:target="_blank"}, [naslijeđeni ID](https://github.com/JohnLaw2/btc-iids/blob/main/iids14.pdf){:target="_blank"}, and [lanci stanja](https://medium.com/@RubenSomsen/statechains-non-custodial-off-chain-bitcoin-transfer-1ae4845a4a39){:target="_blank"} i takođe CTV (Check Template Verify) prijedlog for [**Zavjete**](https://bitbox.swiss/blog/what-are-bitcoin-covenants/){:target="_blank"} ([skaliranje iznad](https://www.rhinobitcoin.com/blog/bitcoin-covenants-can-we-scale-beyond-100m-users){:target="_blank"}). Zatim postoji opcija za čvorove sa federacijom kao što je [**FediMint**](https://fedimint.org/){:target="_blank"} koji koriste federalne modele za upravljanje.  
-- U međuvremenu postoji zanimljiv slučaj upotrebe za 'stabilne Sats' (alternativa Stable koinima), poput dolara preko Bitcoin mreže, npr. za ino doznake. Posebno korisno na globalnom jugu gdje su mnoge lokalne valute prilično nestabilne sa veoma visokom inflacijom. Pored *Mutiny* još jedan novčanik sa ovom funkcijom je [10101](https://10101.finance/){:target="_blank"} (10-10-1) finansije.

YT za pregledati:  
-[Bitcoin's Lightning Network](https://www.youtube.com/watch?v=rrr_zPmEiME){:target="_blank"} (*Simply Explained*)  
-[Šta je Lightning Network?](https://www.youtube.com/watch?v=pBh4DcM-0pg){:target="_blank"} (*99Bitcoins*)  
-[Šta je to? zašto da me zanima?](https://www.youtube.com/watch?v=AYAreuNzx58&t=39s){:target="_blank"} & [Tech Intro to LN - devs 2020](https://www.youtube.com/watch?v=E1n3sKKPD_k){:target="_blank"} (*Andreas Antonopoulos*)  
-[Lightning lako](https://www.youtube.com/watch?v=nusOl6wb1a4){:target="_blank"} & [LN wiht Phoenix](https://www.youtube.com/watch?v=9j_slmZ7Eyo) (*Bitcoin University*)  
-[Skaliranje Bitcoina sa Giacomo, John & Matt](https://www.youtube.com/watch?v=Iz81W-_X5gw){:target="_blank"} (*WBD - What Bitcoin Did*)  

Ostali naučni papiri:  
-[nakamotoinstitute/funding-of-micropayment-channel](https://nakamotoinstitute.org/static/docs/scalable-funding-of-bitcoin-micropayment-channel-networks.pdf){:target="_blank"}  
-[lightning-pool-whitepaper](https://lightning.engineering/lightning-pool-whitepaper.pdf){:target="_blank"}  
-[MA_EEMCS](https://essay.utwente.nl/80780/1/Wijburg_MA_EEMCS.pdf){:target="_blank"}  

Tabla info:  
-[mempool.space/lightning](https://mempool.space/lightning){:target="_blank"}  
-[clarkmoody.com/dashboard](https://bitcoin.clarkmoody.com/dashboard/){:target="_blank"}  
-[bitbo.io](https://bitbo.io/target="_blank")  

Prethodni Bit postovi:  
B1. [**(r)Evolucija Novca of**](https://infopedia.io/sr-latn/revolution-of-money/)  
B2. [**Bitkoin budućnost and makro izgled**](https://infopedia.io/sr-latn/bitcoin-future-macro-outlook/)  

PS  
Ako imate sopstevni posao ili pružate usluge razmislite o tome da počnete da prihvatate Bitcoin (kružna ekonomija), naljepnica::  
(jedan lični primjer sa cijenama također denominiranim u BTC - [codis.tech/efcorebulk](https://codis.tech/efcorebulk))  
![bit-acc](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/lightning-network/bit-acc.png)
Donacija za podršku: [BTC-LN](https://borisdj.net/donation/donate-btc.html){:target="_blank"}  
(takođe za podršku programerima: [Donacije Portal](https://bitcoindevlist.com/){:target="_blank"})
