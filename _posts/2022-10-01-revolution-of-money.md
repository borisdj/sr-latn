---
title: "(r)Evolucija Novca"
date: 2022-10-01T00:00:00-00:00
categories: [fintech]
tags: [finance, bitcoin]
classes: wide
excerpt: "Uspon Bitcoin-a sa pričom o kripto industriji"
---

(*Novac i platni sistem sutrašnjice - reforma i evolucija*)<br>
Uspon **Bitcoin-a** sa pričom o kripto industriji

LANG(jezik):<br>
[Globalni](https://infopedia.io/revolution-of-money) (en-us) / Lokalni (sr-latn-ba)

Verzije: [*Pdf*](https://drive.google.com/file/d/12lGUrL5EpSs_hvQen56rGP6xnWZ80omu/view){:target="_blank"}<br>

![evolution-of-money](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/evolution-of-money.jpg)

<center>QR Link</center>
![QR Link](https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=https://infopedia.io/revolution-of-money/)


**Sadržaj [C]**
{% raw %}
<p>
Klik <BUTTON id="buttonLike" TYPE="button" 
style="border:none; background:url('https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/applause.png')no-repeat" 
ONCLICK="fetch(counterUrl + 'post');
document.getElementById('counterCell').innerHTML=likesCounter+1; document.getElementById('buttonLike').disabled=true; 
document.getElementById('buttonLike').style.backgroundImage='url(https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/applauseGrey.png)';
alert('Lajk:) dodan, Hvala!');">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</BUTTON>
ako vam se sviđa tekst
[<a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRylKpaTqDluVsX1bgonHR74mApXbnrr7bCr6_z-UaH4fDlD3i6v51tITUbCbbRHl-MfvdS9VNUtDQU/pubhtml?gid=0" target="_blank">brojač:</a> <b id="counterCell">N</b>]
</p>
<script>
  var likesCounter = 0;
  var counterUrl = 'https://script.google.com/macros/s/AKfycbzZHMD7Y8gp04hSipbZqj0K8ThiV7fxHf0jZboXcfvU1saESYdk5PjyN6XNwMMCj8uv/exec?type=';
  document.addEventListener("DOMContentLoaded", function() {
    fetch(counterUrl + 'get').then(res => res.json()).then(out => document.getElementById('counterCell').innerHTML=likesCounter=out);
  });
</script>
{% endraw %}
| [Uvod](#toc) |
| ------------------------------------- |
| [**1. Monetarne hronike**](#monetary-chronicles) |
| [1.1 Početak novca](#beginning-of-money) |
| [1.2 Skorija istorija](#recent-history) |
| [1.3 Moderno doba](#modern-age) |
| [1.4 Dosadašnji sažetak](#sum-it-so-far) |
| [**2. Bitkoin objašnjenje**](#bitcoin-explanation) |
| [2.1 Kako je sve počelo](#how-it-all-started) |
| [2.2 Tehnička pozadina](#technical-background) |
| [2.3 Prošireni opis](#extended-description) |
| [**3. Komparativna prednost**](#comparative-advantage) |
| [3.1 SWOT analiza](#swot-analysis) |
| [3.2 Deflacija](#deflation) |
| [3.3 Ostale kripto valute](#other-cryptos) |
| [3.4 Dokaz o radu/ulogu (PoW/PoS)](#pow-vs-pos) |
| [**4. Globalni efekti**](#global-effects) |
| [4.1 Ekonomski uticaj](#economic-impact) |
| [4.2 Političke implikacije](#political-implications) |
| [4.3 Socijalna komponenta](#social-component) |
| [**5. Pogled u budućnosti**](#looking-forward) |
| [5.1 Budući razvoj](#future-development) |
| [5.2 Šta dalje](#what-lies-ahead) |
| [5.3 Praktični pristup](#practical-approach) |
| [5.4 Rekapitulacija](#recapitulation) |

## Uvod
{: #introduction }
-- U tekstu koji slijedi govori se o novčanim sistemima prošlosti, postojećim u sadašnjosti, ali i budućoj perspektivi i mogućnostima. U futurističkom kontekstu, prva riječ koju treba spomenuti je [***Bitcoin***](https://bitcoin.org/sr/) (Bitkoin), ili kratko **BTC (₿)**. Da bismo ga objasnili, postoji fraza koja kaže: *To je odgovor, a da vidimo sada šta je pitanje*. Za bolje razumijevanje moramo prvo da shvatimo istoriju novca i trenutne monetarne sisteme, radi budućeg razvoja.<br>
-- Diskusija je poduža kao i priroda tematike, pa je podijeljena na segmente radi lakšeg razumijevanja. Nemojte se obeshrabriti ako vam materijal izgleda stran. Pošto obiluje različitim informacijama preporuka je da tekst čitate u segmentima i rasporedite na više dana, prespavate ga. Vjerovatno će vam se pojaviti nova pitanja. Mnogi termini i događaji linkovani su na druge članke, blogove, forume i YT kanale / podkaste. Na taj način možete pročitati više o tematici koja vas zanima, a takođe možete ostaviti komentar ili pitanje na dnu.

-- Svrha ovog teksta jeste da se shvati ideja i osnove, i kako im pristupiti. Za one koji želje dublje da se upute u materiju i da znaju više tehničkih detalja, tu je [100 sati učenja](https://crypto--telegraphs-com.translate.goog/2022/06/22/100-hours-of-study-needed-to-understand-how-bitcoin-works/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([100 sati analize](https://hannahdo.medium.com/a-summary-from-my-100-hours-of-learning-about-bitcoin-9d6da7b8feea){:target="_blank"}) da bi se uronilo u ovu stvar.<br>
Jer što više znate, više želite da saznate, takozvano *'Pad niz (Bitcoin) Zečju rupu'* (metafora za avanturu u nepoznato iz *Alise u zemlji čuda*). To će vas natjerati na razmišljanje, ali istovremeno i proširiti vaše vidike.<br>

Jedan komičar je čak rekao:<br>
*"To je sve što ne razumijete o novcu u kombinaciji sa svime što ne razumijete o računarima".*<br>
Ali kako počnete da učite, posljedično ćete steći znanje o ekonomiji, informatici, matematici, filozofiji, politici, istoriji, pa čak i fizici.<br>
PS<br>
Konačno formatiranje i refaktorisanje teksta kontinualno traje.

## <ins>1 Monetarne hronike</ins>
{: #monetary-chronicles }
### 1.1 Početak novca [[C](#toc)]
{: #beginning-of-money }
-- Kada su ljudi prešli sa lovaca-sakupljača na poljoprivredu i stočarstvo prije otprilike 10.000 godina, to je dovelo do specijalizacije u radu, veće produktivnosti i akumulacije viška proizvoda. Ovo je omogućilo stvaranje većih naselja, gradova i na kraju država. To je takođe značilo da su ljudi mogli razmjenjivati (trampa) višak stvari koje su nabavili ili napravili, na primjer žitarice ili životinje, ali nije bilo lako odrediti vrijednost svakog predmeta niti ga podijeliti. Kredit je vjerovatno bio najstarije sredstvo trgovine, a trampa se razvila kasnije. Veće zajednice značile su da morate trgovati sa strancima i bila je potrebna neka osnova za povjerenje ([Dunbarov broj](https://sr.wikipedia.org/sr-el/%D0%94%D0%B0%D0%BD%D0%B1%D0%B0%D1%80%D0%BE%D0%B2_%D0%B1%D1%80%D0%BE%D1%98){:target="_blank"} - može se održavati samo oko 150 bliskih veza). Trebao im je sistem koji bi olakšao trgovinu. Zato je novac izmišljen i kako je nastao.<br>
-- U ranim danima koristile su se brojne stvari kao što su školjke posebnog izgleda, rijetko kamenje, itd. Postoji zanimljiva priča o [afričkoj trgovini staklenim perlama](https://www-africanodyssey-co-uk.translate.goog/blog/a-brief-history-of-glass-beads-in-africa?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([zloupotreba hiperinflacije za trgovinu robljem](https://www-afrikapital-org.translate.goog/p/akori-beads-hyper-inflation-and-ancient?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) i još jedna o velikom kamenju ([Rai kamenju](https://medium.com/crypto-hunters-official/blockchains-predecessor-rai-stones-45bca17f10d5){:target="_blank"}) [Jap naroda](https://www-npr-org.translate.goog/sections/money/2011/02/15/131934618/the-island-of-stone-money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=sr&_x_tr_pto=wapp){:target="_blank"}. Kamenje je bio primitivni kreditni sistem. Kasnije su došli metali i metalne kovanice, od bronze, srebra ili zlata. Ako se neko pita zašto su ovi materijali odabrani, najbolje je prvo definisati osobine novca ([Projekat novca](https://money-visualcapitalist-com.translate.goog/infographic-the-properties-of-money/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) pošto je **apstraktan koncept**:

| № | FUNKCIJA          | Opis                                               |
| - | ----------------- | -------------------------------------------------- |
| 1 | Sredstvo razmjene | prihvaćeni način plaćanja za robu i usluge         |
| 2 | Jedinica obračuna | mjera vrijednosti                                  |
| 3 | Čuvar vrijednosti | zadržati vrijednost tokom dužeg vremenskog perioda |

Primjeri funkcija:<br>
1-Društvo koristi određene predmete kao što je biser za razmjenu za drugu robu<br>
2-Cijene stanova u Japanu se mogu porediti koristeći Jen kao obračunsku jedinicu<br>
3-Unca zlata mogla je kupiti odoru u rimsko doba, ali i danas može kupiti lijepo odijelo<br>

| № | KARAKTERISTIKE | Opis                                                |
| - | -------------- | --------------------------------------------------- |
| 1 | Izdržljiv      | sposoban da izdrži višekratnu upotrebu              |
| 2 | Djeljiv        | može se podijeliti na manje jedinice                |
| 3 | Prijenosan     | lako se prenosi i transportuje                      |
| 4 | Prihvatljiv    | univerzalno prepoznatljiv                           |
| 5 | Ograničena kol.| rijetkost (oskudica) održava stabilnu vrijednost    |
| 6 | Uniforman      | jedinice sposobne za međusobnu zamjenu (zamjenljiv) |
 
-- Očigledno **Zlato** je imalo kvalitete da ispuni većinu ovih uloga, ali nije savršeno, samo najbolje u tom trenutku, ili takoreći najmanje loše. Neki od nedostataka su bili: nije lako za nošenje - skup transport (niska prenosivost), teško se dijeli (potrebno istopiti) i opasnost od krađe i pljačke.<br>
-- Zbog toga su neki trgovci, kasnije privatne banke pa centralne banke počele držati zlato za ljude a davali im **sertifikate** koliko zlata imaju. Ljudi su zatim koristili za trgovanje te potvrde, kao vid potraživanje za robu. Tako je nastao **papirni novac** odnosno **novčanice** (mjenice - [IOU](https://www-investopedia-com.translate.goog/terms/i/iou.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} akronim od *'I owe you' - Dugujem ti*) ili kolokvijalno **gotovina**. Ali loša strana je bila uvođenje posrednika kojima treba vjerovati. A istorija je puna primjera gdje je to povjerenje iskorišćavano iz raznih razloga, obično stvaranjem više novčanica / banknota nego što je bilo zlata za pokriće. To je dovodilo do bankrota privatnih banaka ili hiperinflacije od strane centralnih banaka, što se u oba slučaja završavalo istim ishodom, ljudi su izgubili svoju štednju i kupovnu moć. Banke mogu biti sa punim rezervama ili sa frakcionim rezervama. Jedna od prvih centralnih banaka bila je [Banka Amsterdama](https://en-wikipedia-org.translate.goog/wiki/Bank_of_Amsterdam?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*'Amsterdamsche Wisselbank'*) koja je osnovana davne 1609. godine. Na kraju je većina zemalja preuzela potpunu monetarnu kontrolu i dalji razvoj novca je zaustavljen.<br>

-- **Novac** je jezik, lingvistički i društveni konstrukt, koji se koristi kao sredstvo komunikacije vrijednosti među ljudima. To je takođe kolektivna i donekle izmišljena priča o vrijednosti, uz saglasnost većine. Dakle, nije inherentno vrijedan, mi (subjektivno) odlučujemo da mu damo zasluge. Ljudski rad se još uvijek obično mjeri radnim vremenom, tako da je novac takođe [Vrijeme, najvrjednija valuta](https://drtownsend-com.translate.goog/time-valuable-currency/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (jedna izgubljena sekunda ne može se otkupiti).<br>
-- Prema [Informacionoj teoriji novca](https://medium.com/the-bitcoin-times/information-theory-of-money-36247aebdfe1){:target="_blank"} cijene i tržište su zamršeno isprepleteni. Cijene odražavaju informacije, dok je novac mjerni štap, a informacije su decentralizovane. Dakle, centralizovani sistemi imaju nerješiv problem podataka zbog nedostatka svih potrebnih znanja cijelo vrijeme, što za rezultat ima ogromnu pogrešnu alokaciju kapitala.

[YT - Finance: The History of Money](https://www.youtube.com/watch?v=YCN2aTlocOw){:target="_blank"}
  
### 1.2 Skorija istorija [[C](#toc)]
{: #recent-history }
-- Sve do 19. vijeka srebrne kovanice su se uglavnom koristile kao lokalna valuta, dok se zlato koristilo samo za velike vrijednosti ili međunarodne transakcije. Definicija **Valute**: Mjera u određeno vrijeme i mjesto, sredstvo razmjene i zakonsko sredstvo plaćanja (mora biti prihvaćeno za odloženo plaćanje duga) sa jakim mrežnim efektom. Oko 1870. godine došlo je do prelaska na zlato jer je srebra postalo u izobilju, a kada nije rijetko ne može biti dobar novac. Tako je nastao takozvani ***'zlatni standard'*** u kojem su papirne novčanice bile pokrivene fizičkim zlatom. To je bio jedan od najstabilnijih i [prosperitetnih perioda](https://www-forbes-com.translate.goog/sites/nathanlewis/2013/01/03/the-1870-1914-gold-standard-the-most-perfect-one-ever-created/?sh=175b993e4a6a?_x_tr_sl%3Den&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>
-- Privremeno je suspendovan tokom Prvog svjetskog rata kada su zemlje, da bi finansirale ratne napore, morale da štampaju više novca od dozvoljenog. Takođe, bilo je izuzetaka od toga tokom Velike depresije. Vrijedno je pomenuti da su SAD (Sjedinjene Američke Države) [1933. godine zaplijenile sve zlatne](https://theconversation-com.translate.goog/how-the-us-government-seized-all-citizens-gold-in-1930s-138467?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} poluge i novčiće svojih građana i primorale da ih prodaju ispod tržišne cijene.
Opet, tokom Drugog svjetskog rata novac je prekomjerno štampan i zlatni standard je napušten. Zatim 1944. godine, malo prije kraja rata, napravljen je [Bretton Woods sporazum](https://www-investopedia-com.translate.goog/terms/b/brettonwoodsagreement.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} gdje su se 44 savezničke zemlje složile da koriste **USD dolar (USD - $)** kao svjetsku rezervnu valutu i za međunarodnu trgovinu i poravnanje. Razlog zašto je to bio američki dolar je taj što su SAD bile dominantna sila u to vrijeme, kako ekonomski tako i vojno, što je značilo da su imale najveći uticaj na svijet. Imali su i najveće rezerve zlata, svoje i od savezničkih zemalja, koje je tamo otpremano tokom Drugog svjetskog rata na čuvanje. Ipak, [Keynes je zagovarao](https://www.theguardian.com/commentisfree/2008/nov/18/lord-keynes-international-monetary-fund){:target="_blank"}, u ime Velike Britanije, [BanCor](https://en.wikipedia.org/wiki/Bancor){:target="_blank"} [nadnacionalni sistem](https://journals.sagepub.com/doi/10.1177/09749284211068165?icid=int.sj-full-text.similar-articles.2){:target="_blank"} ali su SAD insistirale na dolaru, iako je to dugoročno bilo loše i za njih same, vidjeti [Triffinova dilema/paradoks](https://en.wikipedia.org/wiki/Triffin_dilemma){:target="_blank"}.  
-- Kasnije su SAD skliznule u ogroman budžetski deficit, uzrokovan prekomjernom domaćom potrošnjom i ratom u Vijetnamu, pa je najlakše rješenje bilo štampati više novca nego što je bilo zlata da bi se to podržalo. To je konačno dovelo do 1971. kada je američka vlada s *Richard Nixon*-om kao predsjednikom odlučila [napustiti zlatni standard](https://www-theguardian-com.translate.goog/business/2021/aug/15/rise-of-cryptocurrencies-can-be-traced-to-nixon-abandoning-gold-in-1971?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, što је značilo da se dolari ne mogu zamijeniti za zlato iz američkih rezervi. Nakon toga 1975. SAD su sklopile dogovor sa zemljama koje su glavni proizvođači **Nafte**, [dogovor sa Saudijskom Arabijom](https://www.bloomberg.com/news/features/2016-05-30/the-untold-story-behind-saudi-arabia-s-41-year-u-s-debt-secret){:target="_blank"} na prvom mjestu, da prodaju primarnu energetsku robu u američkim dolarima. Zauzvrat, SAD će im pružiti vojnu zaštitu i osigurati da morski putevi budu sigurni za tankere, uz pomoć mornarice. Tako je nastao pojam **Petrodolari**, nezvanični sistem ili jednostavno globalna praksa u kojoj su dolari bili poželjni jer su se lako mogli zamijeniti za prijeko potrebne barele nafte. Neki bi rekli da su dolari podržani sirovom naftom, najvažnijim resursom 20. vijeka. U narednim decenijama SAD su [izvozile inflaciju](https://whatismoney.info/exporting-inflation/){:target="_blank"} u ostatak svijeta dok su uvozile stvarnu robu.<br>
 
### 1.3 Moderno doba [[C](#toc)]
{: #modern-age }
-- U savremenom dobu novac je postao digitalniji, u suštini samo broj u računarima privatnih i centralnih banaka, kao i u **Svjetskoj banci** i **MMF** (*Međunarodnom monetarnom fondu*). Prva stvar je da se <ins>većina novca danas kreira kao **Dug**</ins> ([*Kreditna teorija novca*](https://en-wikipedia-org.translate.goog/wiki/Credit_theory_of_money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} - *Kreiranje kredita*). U suštini, kad god neko dobije kredit od banke za automobil ili kuću ili bilo šta drugo, banka samo ukuca taj iznos u kompjuter i stvara se novi novac dok se cjelokupna novčana masa povećava. Ipak, kada se dug otplati, taj novac se uništava ili u izvjesnom smislu briše.<br>
-- Dakle, u teoriji ovo bi moglo biti stabilno, tako da se ekonomska proizvodnja jedne zemlje mapira sa potražnjom za kreditima, dok se ponuda novca ispravno balansira. Međutim, u praksi nikada ne bude tako, već vještačko guranje kredita, tržišta novca, vladine agende, itd. ga čine nestabilnim i podložnim korupciji i krizama sa jedinim rješenjem uvijek da se naduva/poveća novčana masa. Iskušenje da se koristi štampač novca je jednostavno neodoljivo.<br>
-- Čak i u [rimsko doba](https://www-worldhistory-org.translate.goog/Roman_Coinage/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} zlatni i srebrni novčići su, na zahtjev careva, povremeno obezvrijeđivani topljenjem i ostavljanjem manjih količina plemenitog metala. Na kraju bi novčići postali potpuno bezvrijedni, a [finansijska dekadencija](https://www-visualcapitalist-com.translate.goog/currency-and-the-collapse-of-the-roman-empire/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} bila je jedan od razloga zbog kojih se imperija urušila. Takođe, kovanice su se ponekad sjekle i grebale od strane lopova. Kako bi se spriječilo [odsjecanje](https://historyhouse-co-uk.translate.goog/articles/coin_clipping.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, savremene kovanice obično imaju rebraste ivice (usječene linije po obodu), što je praksa protiv falsifikovanja osmišljena od strane Isak Njutna (*Isaac Newton*) koji je u to vrijeme bio upravnik Kraljevske kovnice.<br>

**Primjeri krize:**<br>
&nbsp;**1.** Nedavni događaj koji je izazvao preštampavanje bila je [<ins>Ekonomska kriza 2008.</ins>](https://www-thebalancemoney-com.translate.goog/2008-financial-crisis-3305679#toc-how-it-could-happen-again?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koju su djelimično [kreirale banke](https://www-thebalancemoney-com.translate.goog/what-caused-2008-global-financial-crisis-3306176?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} dajući previše rizičnih kredita za nekretnine pokrivene samo hipotekama. A kada se sve srušilo, vlada je samo doštampala još novca da to pokrije. Izgovor je bio da bi puštanje svih tih banaka u propast urušilo cijelu ekonomiju i SADa i ostatka svijeta. Ali ako je nešto preveliko da propadne, onda je preveliko da postoji u startu. Ipak su svi ljudi platili za loše ponašanje banke, dok su menadžeri tih banaka u isto vrijeme dobili [ogromne bonuse](https://www-nytimes-com.translate.goog/2009/07/31/business/31pay.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Korupcija na Wall Streetu je razotkrivena sa Plaćanjem za tok naloga ([*Payment for Order Flow*](https://a16z-com.translate.goog/2021/02/17/payment-for-order-flow/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) ispod pulta i [šortanjem](https://www-investopedia-com.translate.goog/terms/s/shortselling.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u sivoj zoni - [*Short and Distort*](https://www-investopedia-com.translate.goog/articles/analyst/030102.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (Hedž fondovi [pod istragom](https://news-bloomberglaw-com.translate.goog/securities-law/hedge-funds-ensnared-in-expansive-doj-probe-into-short-selling?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}).<br>
Postoje zanimljivi filmovi o ovoj temi i vezi sa *Wall Street*-om kao što su: *Opklada vijeka* ([*The Big Short*](https://www-imdb-com.translate.goog/title/tt1596363/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) - ([*Investor who lost $9 Billion*](https://www.youtube.com/watch?v=ft4KnBKDoT0){:target="_blank"}) i *Poziv za marginu* ([*Margin Call*](https://www-imdb-com.translate.goog/title/tt1615147/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}). Oni objašnjavaju derivate kao što su [**CDO**](https://corporatefinanceinstitute-com.translate.goog/resources/knowledge/trading-investing/collateralized-debt-obligation-cdo/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Collateralized Debt Obligation* - Obveza sa zalogom duga) i [sintetičke](https://www-investopedia-com.translate.goog/terms/s/syntheticcdo.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} vrste, složeno strukturiran finansijski proizvod, sa obveznicama drugorazrednih hipoteka (rizični stambeni krediti dati pojedincima sa lošom ili nikakvom kreditnom istorijom) koji su korišćeni za klađenje.<br>
&nbsp;**2.** Drugi još veći primjer bila je <ins>Pandemija Covid-19</ins> tokom 2020/2021. godine koja je za rezult dovela do štampanja novog dodatnog [40% ukupnog novca](https://techstartups-com.translate.goog/2021/05/22/40-us-dollars-existence-printed-last-12-months-america-repeating-mistake-1921-weimar-germany/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koji postoji. Kao rezultat toga, sada se suočavamo s prijetnjom [Stagflacije](https://www-cnbc-com.translate.goog/2022/06/21/what-stagflation-is-and-how-to-prepare-for-it.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){: target="_blank"}, stopa inflacije raste, a ekonomski rast i zaposlenost opadaju.<br>

-- U suštini postoje 2 vrste novca: zasnovanog na robi i zasnovanog na kreditu. **Fiducijarni medij** je novac koji izdaje treće lice, na primjer neka banka, i to je oblik kredita.<br>
-- Gotovo sav novac danas je [FIAT](https://www-britannica-com.translate.goog/topic/fiat-money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, proglašen vladinim dekretom (uredbom) i nije podržan fizičkom robom. Određuje ga autoritet, stvoren da bude zakonsko sredstvo plaćanja (sa njim se plaćaju porezi kao vrsta duga), a nameće se silom (Politika -> Policija). Moglo bi se reći da je Fiat podržan implicitnom prijetnjom nasiljem. Zasnovano na **Povjerenju** koje je često izdano i podržano samo obećanjem, ponekad se naziva Fiat prevara. Fiat je vještački novac iz 'čekovne knjižice' koji takođe ograničava stvarnu proizvodnju ([Ekonomija bez radosti](https://underconsumed.medium.com/the-joyless-economy-1976-tibor-scitovsky-17da683764ee){:target="_blank"}).<br>
-- Neki smatraju da je štampanje novca ([*'fiat rudarenje'*](https://bitcoininfoqus.com/fiat-mining/){:target="_blank"}) [**UBI**](https://en-wikipedia-org.translate.goog/wiki/Universal_basic_income?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Univerzalni osnovni prihod*) ali za bogate. Pošto je novi novac rutinski prvo dostupan ljudima bliskim onima na vlasti ([Cantillon efekat](https://whatismoney-info.translate.goog/cantillon-effect-bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) i onima koji ga već imaju jer mogu uzeti velike kredite i posjedovati imovinu osim gotovine koja je više otporna na inflaciju.<br>
-- Način na koji zemlja može dobiti više novca za budžetsku potrošnju je da Trezor izdaje obveznice, a **Centralna banka** (*CB*) štampa tu količinu novca i kupuje te obveznice. U američkom slučaju to je [**FED**](https://www-federalreserve-gov.translate.goog/aboutthefed/structure-federal-reserve-system.htm?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Sistem federalnih rezervi* - [istorija](https://www-federalreserveeducation-org.translate.goog/about-the-fed/archive-history/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), čije [osnivanje](https://www-stlouisfed-org.translate.goog/open-vault/2020/july/how-hamilton-laid-foundation-for-federal-reserve?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je postavio [Alexandar Hamilton](https://www-history-com.translate.goog/topics/american-revolution/alexander-hamilton?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Danas većina novca nije u obliku papirne gotovine već je digitalni. Stvaranje novog novca je jednostavno upisivanje cifara na računarima banaka koje se čuvaju u bazi podataka.<br>

-- Takođe, monetarni alati i sistemi su veoma složeni. Neki tvrde da je namjerno kako bi ga zamaglili i učinili manje transparentnim i nejasnim da bi što manje ljudi prigovaralo na sam sistemu. Jedan od mehanizama za štampanje je Kvantitativno popuštanje ([**QE-Quantitative Easing**](https://www-forbes-com.translate.goog/advisor/investing/quantitative-easing-qe/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), gdje banke imaju pravo na izdavanje kredita, odnosno štampanje novca, na osnovu depozita koje imaju, u omjeru 1:10 ili čak i više (Bankarstvo s frakcionim rezervama - [Fractional Reserve Banking](https://www-investopedia-com.translate.goog/terms/f/fractionalreservebanking.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}). Suprotna politika poznata je kao **Kvantitativno zatezanje**. Dok Fiat sistem CB-a stvara masivne produžene kredite sa užasnim posljedicama, frakcionalno bankarstvo je različito i nije nužno loše. Definišimo i termin 'bazna tačka' (*base point*) koja iznosi 1/100 dio procenta ili 0,01 %, koji se često koristi kada se navode kamatne stope CBa.<br>
-- Nije samo centralna banka ta koja štampa novac već i komercijalne širom svijeta. Uvedimo sada pojam 'eurodolara' ([**Eurodollar**](https://www-investopedia-com.translate.goog/terms/e/eurodollar.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) - depozit u dolarima u stranim bankama ili filijalama američkih banaka izvan SAD (uglavnom u Evropi). Zaslužuju pažnju jer ne podliježu propisima niti obaveznim rezervama. U tom smislu, teško je čak i tačno znati ukupnu količinu novca koja postoji ([sav novac svijeta](https://www.visualcapitalist.com/all-of-the-worlds-money-i-tržišta-u-jednom-vizualizacija-2020/){:target="_blank"}).<br>
-- Osim toga, postoje različiti slojevi novca:<br>
-M1 = osnovni novac (gotovina u opticaju, tekući i štedni računi, čekovi)<br>
-M2 = M1 + fondovi tržišta novca<br>
-M3 = M2 + ostali finansijski instrumenti<br>

**Povjerenje**<br>
je pouzdan odnos s nepoznatim, društveni ljepak koji premošćuje jaz:<br>
`Poznato` <---> POVJERENJE <---> `Nepoznato`<br>
To je valuta interakcija.<br>
Način da se izgradi više povjerenja je da budete transparentniji i s vremenom postanete vjerodostojni (imati reputacijski kapital).<br>
U posljednje vrijeme mogli smo primijetiti [kršenje povjerenja](https://www.youtube.com/watch?v=GqGksNRYu8s){:target="_blank"} (objasnila [*Rachel Botsman*](https://rachelbotsman-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) u mnogim oblastima kao što su:<br>
&nbsp;1. [Hakovanje telefona News International](https://en-wikipedia-org.translate.goog/wiki/News_International_phone_hacking_scandal?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
&nbsp;2. [Globalna finansijska kriza dovela do zatvaranja samo jednog bankara](https://features-marketplace-org.translate.goog/why-no-ceo-went-jail-after-financial-crisis/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
&nbsp;3. [Skandal s emisijom Volkswagen-a](https://hbr-org.translate.goog/2015/09/what-vw-didnt-understand-about-trust?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
&nbsp;4. [Panamski dokumenti koji pokazuju kako moćni političari iskorištavaju offshore poreski režim](https://www-dw-com.translate.goog/en/panama-papers-reveal-how-the-rich-hide-money-offshore/a-19161658?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"<br>
&nbsp;5. [Corona Covid-19 pandemija: vakcina i pravila o zaključavanju](https://gh-bmj-com.translate.goog/content/7/5/e008684?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
Očigledno institucionalno povjerenje (naslijeđeni sistem) više ne funkcioniše, jer nije dizajniran za digitalno doba.<br>

| N | INSTITUCIONALAN | DISTRIBUIRAN    |
| - | --------------- | --------------- |
| 1 | Neprovidan      | Transparentan   |
| 2 | Zatvoren        | Uključiv        |
| 3 | Centralizovan   | Decentralizovan |
| 4 | Licenciran      | Odgovoran       |
| 5 | Od vrha nadole  | Od dna ka gore  |

### 1.4 Dosadašnji sažetak [[C](#toc)]
{: #sum-it-so-far }
-- Zemlje imaju potpunu kontrolu nad novcem i mogu ga naduvati iz različitih razloga uz pomoć nekoliko ekonomskih alata. Ta moć je često zloupotrebljavana od strane političkih elita i korporacija dok jure za profitom (pomalo pohlepno), što rezultuje visokom inflacijom ili u nekim slučajevima čak hiperinflacijom. Moralni hazard ove vrste inflacije je praktično dodatni skriveni ([regresivni](https://www-lemonde-fr.translate.goog/en/economy/article/2022/06/27/inflation-is-the-most-regressive-tax-of-all_5988059_19.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) porez stanovništvu za koji [niko nije glasao](https://www-johnlocke-org.translate.goog/inflation-is-a-tax-nobody-voted-for/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Moglo bi se reći da je to krađa u određenom smislu ili finansijska pljačka. Time se polako presipa bogatstvo od prosječne osobe ka politički dobro povezanim. I dok cijene svih dobara samo rastu, plate ne rastu uvijek da prate u korak, umjesto toga radnici moraju eksplicitno tražiti povišice od poslodavaca. Dakle, malo povećanje plata ne znači veću kupovnu moć, već samo da se drži korak s inflacijom.<br>
(*"Inflacija je jedini oblik oporezivanja koji se može nametnuti bez zakona"* - M. Friedman)<br>
-- Državne institucije obično mjere inflaciju kao skalar, samo 1 broj, [CPI](https://www-investopedia-com.translate.goog/terms/c/consumerpriceindex.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (Indeks potrošačkih cijena) koji obuhvata samo korpu osnovnih dobara. Međutim, to je zapravo vektor jer ne trebaju, ne žele i ne kupuju svi iste stvari, tako da je u suštini indeks uglavnom lažan. Osim preživljavanja, u stvarnom svijetu ljudi takođe žele nekretnine, putovanja, akcije, umjetnost itd. Umjesto samo ciljanih [2 posto](https://qz-com.translate.goog/2022696/where-did-the-feds-2-percent-inflation-target-come-from/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} prema CPI, stvarna inflacija je bila oko 6 do 7 %. A u posljednje vrijeme čak i za [CPI je 10 %](https://www-cnbc-com.translate.goog/2022/08/17/uk-cpi-inflation-july-2022.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ili više. Dobro je naučiti računicu procenata i kamata, u skladu sa citatom: *"Složena kamata je osmo svjetsko čudo
Ko to razumije, zarađuje, ko ne, plaća je."*, koja se često pripisuje Albertu Ajnštajnu, ali nema dokaza da je on to rekao. U cijeloj [istoriji kamatnih stopa](https://www-visualcapitalist-com.translate.goog/the-history-of-interest-rates-over-670-years/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} tokom 6 vijekova, fluktuirao je od 0 do 15 %, s dominacijom prvo Holanđana, zatim Britanaca, i na kraju Amerikanaca.<br>

-- Do nedavno, berze su bile jedan od načina zaštite od inflacije, ali i to je bilo samo za malu manjinu (samo oko 10% ljudi ima značajnu štednju u akcijama). A sada se i Bitcoin, smatra još jednim načinom zaštite / osiguranja od pada valute ([protivotrov za inflaciju](https://www-bitira-com.translate.goog/bitcoin-antidote-inflation/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), i bolji u određenim aspektima. Takođe, vremenski je zahtjevno pratiti sve informacije o berzama, i obični ljudi teško mogu biti u toku sa raznim finansijskim instrumentima koje koriste profesionalni investitori.<br>
-- Zlato je bilo još jedno sigurno utočište, a neki su i danas zagovornici istog, takozvane 'zlatne bube', uprkos njegovim nesavršenim karakteristikama. Tokom 2000-ih postojali su čak i elektronski sistemi zlata, poput ['e-zlata'](https://en-wikipedia-org.translate.goog/wiki/E-gold?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, ali su bili centralizovani i na kraju zabranjeni od strane vlade. Zbog toga se BTC smatra **Digitalnim zlatom** ili **Zlatom 2.0** jer ima mnogo dobrih osobina zlata, ali istovremeno popravlja one loše. Zato je Bitcoin bio <ins>inovativno **Rješenje** problema</ins> kako imati **tvrd ili [zvučan novac](https://www.hardmoneyhistory.com/what-is-sound-money/){:target="_blank"}** koji se ne može preštampati i koji je takođe praktičan za upotrebu (termin [Zvučan](https://www.fff.org/explore-freedom/article/forgotten-meaning-sound-money-coming-back/){:target="_blank"} nastao od melodične zvonjave kada metalni novčić padne na tvrdi pod). Programiran je da oponaša stabilnu stopu inflacije zlata. Baš kao što se zlato ne mijenja mnogo, mreža bi trebala raditi nekoliko decenija bez suštinskih promjena.<br>
-- Priznati austrijski ekonomista [**Ludwig von Mises**](https://mises-org.translate.goog/profile/ludwig-von-mises?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u svojoj knjizi *"Teorija novca i kredita " (1912.)* argumentuje da [**zdrav novac**](https://oll-libertyfund-org.translate.goog/quote/ludwig-von-mises-argues-that-sound-money-is-an-instrument-for-the-protection-of-civil-liberties-and-a-means-of-limiting-government-power-1912?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je: *"instrument za zaštitu građanskih sloboda i sredstvo ograničavanje moći vlade. Takođe je uobičajeno korišćeno sredstvo razmjene i metoda za sprječavanje sklonosti vlade da se miješa u valutni sistem.*" Detaljnije objašnjenje možete pronaći u članku [Bitcoin i teorija novca](https://mises-org.translate.goog/wire/bitcoin-and-theory-money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>

-- Drugo pitanje je cenzura koju vlade i banke mogu sprovesti. To se moglo primijetiti u nekim autokratskim ili autoritarnim zemljama za opoziciju, ali i u demokratskim. Na primjer [kanadske kamiondžije](https://www-nasdaq-com.translate.goog/articles/frozen-bitcoin-tied-to-canadian-protests-lands-at-coinbase-crypto.com?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} čiji bankovni računi su zamrznuti zbog protesta protiv pandemije, (politički korektan) način da se ućutka opozicija. **(Samo) Bitcoin** rješava i ovo jer može raditi bez posrednika (bez povjerenja) i ne zahtijeva stranu od povjerenja (***Novac ne treba da se naoruža, nikada!***). Pored toga, omogućava besprijekorne transakcije preko granica. Sa liberalnim pogledom na svijet i djelimično [libertarijanskom filozofijom](https://www-coindesk-com.translate.goog/tech/2021/02/04/crypto-is-the-libertarian-cheat-code-in-the-final-battle-over-state-coercion/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (eliminisati državnu prinudu) dio njegove misije je **razdvajanje novca i države**. Nikada nećemo imati pristojan novac prije nego što vladi oduzmemo monopol (učiniti vladu manjom, a ljude većima).<br>
-- Fiat je omogućio državama da vode rat sve dok im ne ponestane svo bogatstvo građana. Prije papirnih valuta, vlade bi ubrzo ostale bez borbenih kapaciteta jer bi se stanovništvo pobunilo protiv poreza zbog nepopularnih ratova. Ima onih koji smatraju da su razlozi zbog kojih je "mali rat u srednjoj Evropi" 1914. eksplodirao u "prvi globalni rat u ljudskoj istoriji" bili dijelom monetarni, a ne samo geopolitički ([Od fiat-a do kripta](https://link-springer-com.translate.goog/chapter/10.1007/978-3-030-71400-0_1?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}).<br>
-- Sve u svemu, upravljanje novcem i intervencije od strane države u većini slučajeva su urađene na pogrešan način.<br>
Čak i oni s dobrim namjerama često su imali loše rezultate:<br>
&nbsp;-Pokušaju da se učini dobro, nesavršeno i često stvore više štete nego koristi<br>
&nbsp;&nbsp;(*"Vladno rješenje problema obično je jednako loše kao i problem"* - M. Friedman)<br>
&nbsp;-Kada je plaćano inflacijom, nenamjerno uruši valutu<br>
&nbsp;-Pogrešno odmjere obim monetarne politike dok podcijene troškove<br>
 
## <ins>2. Bitcoin objašnjenje</ins>
{: #bitcoin-explanation }
### 2.1 Kako je sve počelo [[C](#toc)]
{: #how-it-all-started } 
-- Sa početkom interneta, razmjena informacija putem foruma i mejlova omogućila je i globalno širenje ideja. Važan pokret u tom pogledu bio je [*Kripto-anarhizam*](https://sr.wikipedia.org/sr-el/Kriptoanarhizam){:target="_blank"} kao politička ideologija ([ideološko porijeklo](https://fee-org.translate.goog/articles/the-ideological-origins-of-bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) sa fokusom na zaštitu privatnosti, političke i ekonomske slobode.<br>
-- [*'The Crypto Anarchist Manifesto'*](https://nakamotoinstitute.org/authors/timothy-c-may/){:target="_blank"} je bio jedan od prvih pisanih radova koji je artikulisao ovu ideju, koji je napisao [*Timothy C. May*](https://nakamotoinstitute-org.translate.goog/authors/timothy-c-may/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} 1988. i objavio na kripto konferenciji (*'Ustani, nemaš šta da izgubiš..'*). Dokument je uveo osnovne principe kriptoanarhizma, šifrovane razmjene koje osiguravaju potpunu anonimnost, apsolutnu slobodu govora i punu slobodu trgovine. Drugi sličan rad u to vrijeme bio je [*'A Cypherpunk's Manifesto'*](https://www-activism-net.translate.goog/cypherpunk/manifesto.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} za privatnost od strane matematičara [*Erica Hughesa* ](https://academy-bit2me-com.translate.goog/en/quien-es-eric-hughes/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ('cypher' izvedeno iz CYber i ciPHER). Kasnije 1992. godine pokrenuta je posebna mail grupa pod nazivom ***'Cypherpunks Mailing List'*** koja je do 1994. imala oko 1000 članova. Razmišljali su o korištenju **kriptografije** za stvaranje digitalnog (virtuelnog) **decentralizovanog** novca.<br>
-- Američke obavještajne službe poput NSA (*National Security Agency* - Agencija za nacionalnu sigurnost), zbog svojih špijunskih programa, čak su pokušale da ograniče upotrebu i izvoz kriptografskih alata. Ti pokušaji su bili poznati kao [Kripto ratovi](https://en-wikipedia-org.translate.goog/wiki/Crypto_Wars?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, čemu su se zagovornici privatnosti protivili sa pravima na slobodu govora.<br>
NSA još uvijek ima sisteme poput [PRISM](https://www-theverge-com.translate.goog/2013/7/17/4517480/nsa-spying-prism-surveillance-cheat-sheet?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([bijeg iz prizme](https://prism-break.org/sr/){:target="_blank"}), svjetski program za nadzor, koji je razotkrio uzbunjivač (zviždač) [*Edward Snowden*](https://www-whistleblowers-org.translate.goog/whistleblowers/edward-snowden/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Čak je i [*Julian Assange*](https://theconversation-com.translate.goog/a-new-book-argues-julian-assange-is-being-tortured-will-our-new-pm-do-anything-about-it-183622?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, osnivač WikiLeak-sa, ranije upozoravao na takva praćenja. Obojica su postali najtraženiji uzbunjivači od strane američke vlade.<br>
-- Baš kao što su postojale torrent (niz podataka) mreže za P2P *Peer-to-Peer* dijeljenje datoteka (muzika, filmovi npr. [Napster](https://en-wikipedia-org.translate.goog/wiki/Napster?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank "}, [BitTorrent](https://sr.wikipedia.org/wiki/BitTorrent){:target="_blank"}) ovo je zamišljeno kao mreža za digitalnu vrijednost. Vodeće velike tehnološke kompanije su takođe i mreže: Google - informaciona; Facebook - društvena; Postoji i pretraživač za privatnost pod nazivom [TOR](https://www-torproject-org.translate.goog/download/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} skraćenica od [The Onion Router](https://en.wikipedia.org/wiki/Tor_(mreža)){:target="_blank"}.<br>

-- Dva izuzetna ekonomista, oba dobitnika Nobelove nagrade, čak su i predvidjeli uspon Bitkoina:<br>
&nbsp;1. [**Friedrich A. Hayek**](https://sr.wikipedia.org/sr-el/Fridrih_Hajek){:target="_blank"} u svojoj knjizi [*'Denacionalizacija Novca'*](https://www.sothebys.com/en/articles/the-economist-who-predicted-bitcoin){:target="_blank"} *(1976)* se zalagao za kraj vladinog monopola na valutu, a u jednom [intervju](https://www.youtube.com/watch?v=EYhEDxFwFRU&t=1118s){:target="_blank"} (prve 3 minute) 1984. je rekao:<br>
*"Vlade uglavnom zloupotrebljavaju novac i zaustavljaju njegovo poboljšanje, a monetarna politika je uglavnom škodila. Ne možemo ga nasilno uzeti iz ruku vlasti. Sve što možemo je da na neki lukav, zaobilazni način uvedemo nešto što oni ne mogu zaustaviti."*<br>
-Bio je zagovornik [Austrijske škole](https://sr.wikipedia.org/sr-el/Austrijska_%C5%A1kola){:target="_blank"} ekonomske misli (više slobodnog tržišta, manje kontrole vlade).<br>
-Na [suprotnoj strani](https://www-nytimes-com.translate.goog/2011/10/23/business/keynes-hayek-views-origins-of-an-economics-debate-review.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je bio [John Maynard Keynes](https://en-wikipedia-org.translate.goog/wiki/John_Maynard_Keynes?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koji je zagovarao snažne vladine intervencije na tržištima. Njegov stav su naširoko pratile mnoge zemlje tokom 20. vijeka ([kejnzijanska ekonomija](https://www-imf-org.translate.goog/external/pubs/ft/fandd/2014/09/basics.htm?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}).<br>
&nbsp;2. [**Milton Friedman**](https://en-wikipedia-org.translate.goog/wiki/Milton_Friedman?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je 1999. [rekao](https://www.youtube.com/watch?v=j2mdYX1nF_Y){:target="_blank"}:<br>
*"Internet će biti jedna od glavnih sila za smanjenje uloge vlade. Jedina stvar koja nedostaje, a koja će uskoro biti razvijena, je pouzdan e-keš"*.<br>

-- Jedan od pionira u ovoj oblasti i izvanredan kriptograf je [*David Chaum*](https://chaum-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, koji se smatra kumom kripta. On je bio prvi koji je predložio protokol sličan blokčejnu u svojoj disertaciji iz 1982. godine *'Kompjuterski sistemi uspostavljeni, održavani i kojima vjeruju međusobno nepovjerljive grupe'*. Godine 1995. njegova kompanija DigiCash stvorila je prvi elektronski ***'eCash'*** sistem. DigiCash je na kraju propao jer je ušao na tržište prije nego što je e-trgovina u potpunosti integrisana sa internetom. Neki ga ipak smatraju djelimičnim prethodnikom kriptovaluta.<br>
-- Relevantna osoba koju treba spomenuti je [*Nick Szabo*](https://learn.saylor.org/mod/book/view.php?id=30735&chapterid=6704){:target="_blank"}, računarski inženjer i pravnik. Godine 1998. dizajnirao je mehanizam za decentralizovanu digitalnu valutu koju je nazvao ***'BitGold'*** *(BitZlato)*. Nikada nije implementirana, ali je nazvana *'direktnim prethodnikom Bitkoin arhitekture'* jer je bio jedan od najranijih pokušaja stvaranja decentralizovane virtuelne valute. U [*Bit Gold*](https://coincentral-com.translate.goog/what-is-bit-gold-the-brainchild-of-blockchain-pioneer-nick-szabo/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} arhitekturi, učesnik bi posvetio kompjutersku snagu za rješavanje kriptografskih zagonetki. Takođe je zaslužan za prvi koncept **Pametnih ugovora**.<br>
-- Krajem 2008. anonimna osoba pod pseudonimom ***Satoši Nakamoto*** ([anagram imena](https://medium.com/illumination-curated/bitcoin-founder-satoshi-nakamotos-identity-might-have-been-revealed-093cf511217c){:target="_blank"}) objavila je bijeli rad (bijeli papir) pod nazivom: [**BITCOIN: Peer-To-Peer E-Cache System**](https://bitcoin.org/bitcoin.pdf){:target="_blank"} koji je dizajnirao. Definicija pojma **Bijeli rad**: izveštaj ili vodič koji na sažet način čitaoce informiše o složenom pitanju i predstavlja filozofiju po tom pitanju tijela koje ga objavilo. Sam rad referencira nekoliko drugih radova napisanih decenijama prije njega, a prvobitno je poslat na sajfer mailing listu.<br>

-- U isto vrijeme domen [*'bitcoin.org'*](https://bitcoin.org/sr/){:target="_blank"} je registrovan preko [*'anonymousspeech.com'*](https://www-businessinsider-com.translate.goog/swiss-software-developer-bitcoin-2014-4?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koristeći pripejd karticu koja se može kupiti gotovinom u bilo kojoj lokalnoj prodavnici tako da joj se ne može ući u trag. Odluka da se koristi pseudonim i sakrije identitet donesena je kako bi ostao nepoznat vladi, ali i vjerovatno da bi mreža bila decentralizovana, što znači da nema jednog osnivača. Većina uključenih ljudi smatra da je nedostatak lidera karakteristika, a ne greška, jer je glavna svrha mreže da bude decentralizovana.<br>
--2009. godine je objavljen post na forumu P2P fondacije sa dodatnim objašnjenjem sistema. Iste godine [**Open Source**](https://www-redhat-com.translate.goog/en/topics/open-source/what-is-open-source?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} implementacija protokola je napravljena, napisana u [C++](https://www-w3schools-com.translate.goog/cpp/cpp_intro.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} programskom jeziku, a izvorni kod se trenutno nalazi na [**GitHub**](https://github.com/bitcoin/bitcoin){:target="_blank"} repozitorijumu. Ovi događaji su se odigrali neposredno nakon [ekonomske krize 2008.](https://www-businessinsider-com.translate.goog/personal-finance/what-caused-the-great-recession?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, koja je izgleda bila okidač. U prvom/geneza bloku nalazi se kodirana referenca na članak časopisa london Times:<br>
*"[The Times 03/Jan/2009](https://cdn.codeforgeek.com/wp-content/uploads/image_01_01.jpeg.webp){:target="_blank"} - [Kancelar na rubu drugog spasa za banke](https://www-cityam-com.translate.goog/chancellor-on-the-brink-its-not-what-you-think/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}".*<br>

| BTC [logo](https://cointelegraph.com/news/the-btc-origin-story-who-designed-the-bitcoin-logo){:target="_blank"} |
![bitcoin_logo](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images//revolution-of-money/bitcoin_logo32.png) |

-- Primalac prve BTC transakcije, koji je i doprinio mreži, bio je kompjuterski naučnik po imenu [*Hal Finney*](https://academy-bit2me-com.translate.goog/en/quien-es-hal-finney/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. On je bio američki programer koji je radio za [**PGP**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy){:target="_blank"} (*Pretty Good Privacy*, Prilično Dobra Privatnost) sa Phil Zimmermann ([**OpenPGP**](https://www.openpgp.org){:target="_blank"}) - prva besplatna implementacija enkripcije sa javno-privatnim ključem za (e-mail) komunikaciju. Takođe je vodio prvi kriptografski baziran anonimni re-mailer i bio je uključen u sajferpank mail listu (HRF je napravila '[Finney nagradu slobode](https://bitcoinnews.com/culture/hrf-hal-finney-freedom-prize/){:target="_blank"}'). Među značajnim kriptografima i programerima čiji je rad citiran u BTC dokumentu bili su [*Wei Dai*](https://www-weidai-com.translate.goog/?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([***B-money***](https://www-investopedia-com.translate.goog/terms/b/bmoney.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) i britanac [*Adam Back*](https://www-cypherspace-org.translate.goog/adam/?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}  ([***Hashcash***](https://www-hashcash-org.translate.goog/?_x_tr_sch=http&_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) koji je danas izvršni direktor [**Blockstream**](https://blockstream.com){:target="_blank"}. Svi oni su bili dio [Sajferpank](https://nakamoto-com.translate.goog/the-cypherpunks/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} zajednice i [pokreta](https://www-horizen-io.translate.goog/blockchain-academy/history/the-cypherpunk-movement/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} i istaknuti članovi mail liste, ali i rani saradnici Bitkoin projekta (Len Sassaman and a [Cypherpunk History](https://evanhatch.medium.com/len-sassaman-and-satoshi-e483c85c2b10){:target="_blank"}).<br>
-- Dakle, Satoši može biti bilo ko od njih ili neko drugi, možda čak i više osoba, mali tim. To bi uvijek mogla [ostati misterija](https://academy-bit2me-com.translate.goog/en/quien-ha-creado-bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ali na kraju nije ni bitno, važna stvar je rezultat i sama mreža. Početne dorade prve web stranice uradio je [*Martti Malmi*](https://academy-bit2me-com.translate.goog/en/who-is-martti-malmi/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, [student iz Finske](https://www-theverge-com.translate.goog/2015/6/10/8751933/the-shy-college-student-who-helped-build-bitcoin-into-a-global?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank" }.
U narednim godinama nekoliko osoba je pogrešno sumnjičeno ili su lažno tvrdili da su Satoši.<br>
-- Kreator BTCa Satoši, krajem 2010. godine, objavio je poslednji post gdje je rekao: *Postoji još posla...*. i od tada nije uspostavio nikakav poznati kontakt. Danas vidimo da se projekat nastavio i postao revolucionarni proizvod na globalnom nivou. U međuvremenu, saradnik *Gavin Andresen* postao je vodeći programer do 2014. godine kada je *Wladimir van der Laan* iz Amsterdama došao na tu poziciju.<br>
-- Jedna neobična napomena: Prva stvarna Btc transakcija je bila u maju 2010. za [2 velike pice plaćene 10.000 BTC](https://www.startupdaily.net/topic/cryptocurrency/the-story-behind-the-day-bitcoin-made-pizza-the-najskuplji-obrok-na-svijetu/){:target="_blank"} (uzmite u obzir trenutnu vrijednost toga - stotine miliona dolara)<br>

[Istorija Sajferpanka](https://www-coindesk-com.translate.goog/markets/2016/04/09/bitcoin-and-the-rise-of-the-cypherpunks/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp)<br>
![cypherpunks](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/cypherpunks.jpg)

### 2.2 Prošireni opis [[C](#toc)]
{: #technical-background }
-- Sa inženjerskog aspekta, Bitcoin protokol je softversko remek djelo. Mogli smo vidjeti da je ubjedljiva ideja kružila neko vrijeme i da je nekoliko komponenti već postojalo. Ali ipak, integrisanje svega u funkcionalnu cjelinu je urađeno genijalno. Kapa dole Satošiju, ko god on/ona ili oni bili, za prvu potpunu implementaciju ideje, kao istinskom vizionaru. Takođe, tajming je bio odgovarajući. Prvo, internet i kriptografija su bili dovoljno razvijeni. Drugo, i politička i ekonomska situacija je bila plodna, inspiracija je došla iz revolta. Takođe, da definišemo riječ **Bit** (binarna cifra) - najmanja jedinica podataka koju računar može obraditi i pohraniti, čija vrijednost može biti 0 ili 1.<br>
-- Pređimo na stvar:<br>
Bitkoin ima **Dnevnik** transakcija, što je lista uskladištena u bazi podataka koja nije centralizovana na jednom serveru, već se distribuira širom svijeta na mnogo računara koji se nazivaju **Čvorovi**. Dnevnik ili glavna knjiga u suštini omogućava pouzdanu tabelu sa bilansima. To je kao nepromjenjiva ploča koja se ne može falsifikovati. Nove transakcije (~7 tps) se u prosjeku svakih 10 minuta grupišu u **Blok** veličine 1 MB koji se dodaje u knjigu. Svaki blok je povezan sa prethodnim pomoću heš koda koji nije lako pronaći. Zato se ova struktura naziva **Blokčejn**, više blokova povezanih u niz kao lanac, i to je ono što podupire sistem. Može se koristiti i za [rješavanje drugih problema](https://101blockchains-com.translate.goog/problems-blockchain-solve/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>
![Blockchain](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/blockchain.jpg)

| OSOBINE        | BLOCKCHAIN-a (tip DLT - Tehnologija Distribuiranog Dnevnika)   |
| -------------- | -------------------------------------------------------------- |
| Programabilno  | npr. Pametni ugovori                                           |
| Sigurno        | svi zapisi su pojedinačno šifrovani                            |
| Anonimono      | identitet učesnika je nepoznat, ili potpuno ili pseudo skriven |
| Jednoglasno    | većina učesnika mreže slaže se sa validnošću svakog od zapisa  |
| Distribuirano  | svi učesnici imaju kopiju knjige za potpunu transparentnost    |
| Nepromjenljivo | svi potvrđeni zapisi su nepovratni i ne mogu se mijenjati      |
| Vremenski žig  | vremenska oznaka transakcije je zabilježena u bloku           |

Sa funkcionalnog stanovišta može se definisati kao Veliki lanac sigurnosti o stvarima.
3 stuba *Blockchain* tehnologije su: decentralizacija, transparentnost (auditabilnost), nepromjenjivost.

-- [**Heš (Hash)**](https://en-wikipedia-org.translate.goog/wiki/Hash_function?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je kriptografska funkcija koja pretvara duži tekst u relativno jedinstveni kod (*Message Digest* - sažetak poruke) fiksne dužine, ali obrnuto se ne može uraditi u praktičnom vremenskom periodu. Ova karakteristika se koristi za takozvano **Rudarenje (Majning)**, virtuelno naravno, termin preuzet iz industrije zlata. Taj posao se sastoji od pokušaja ogromnog broja kombinacija kako bi se pronašla ona gdje Heš počinje s nekoliko [vodećih nula](https://www-investopedia-com.translate.goog/tech/how-does-bitcoin-mining-work/#toc-the-mining-process?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (000...). Neki vole da prave analogiju sa [Sudoku puzlama](https://steemit-com.translate.goog/bitcoin/@abhi3700/crypto-thoughts-ct-5-bitcoin-mining-analogy-sudoku-puzzle?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Svi rudari se takmiče da pronađu heš, a kada jedan to uradi, novi blok je završen i bude sinhronizovan preko mreže. Taj rudar zatim dobija nagradu u određenoj količini novonastalih koina.<br>
-- Dugoročno na osnovu statistike, svaki rudar treba dobiti približno jednak iznos, dok je s druge strane potrošio električnu energiju. Na osnovu broja učesnika, algoritam prilagođava nivo težine da period kreiranja bloka uvijek bude oko 10 minuta. To je učinjeno na način da kada ima više rudara što dovodi do veće snage heša, povećava se i teškoća čime se otežava pronalaženje rješenja. Ovaj proces se zove **PoW *(Proof of Work)* - Dokaz o Radu**, termin je razumljiv sam po sebi, i sastoji se od definisanih pravila. [**Nakamoto konsenzus**](https://medium-com.translate.goog/nakamo-to/nakamoto-consensus-21cd304f96ff?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je skup pravila koja provjeravaju autentičnost blokčejn mreže. Koristi kombinaciju dokaza rada [konsenzus algoritam](https://coinmarketcap-com.translate.goog/alexandria/article/what-is-the-nakamoto-consensus?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (pravila konsenzusa) na [**BFT**](https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft){:target="_blank"} peer-to-peer mreži (BFT - *Byzantine Fault Tolerance* koja rješava *Problem vizantijskih generala*, situaciju u kojoj se većina aktera mora složiti oko koordinisane strategije).<br>
-- Još jedna važna stvar koju treba razjasniti je [**PKI**](https://www.keyfactor.com/resources/what-is-pki){:target="_blank"} (*Public Key Infrastructure* - Infrastruktura javnog ključa), koji se ovdje koristi za potpisivanje digitalnih informacija. Potpisivanje se radi sa privatnim ključem kako bi drugi mogli da potvrde potpis pomoću javnog ključa, obično upakovanog u [**Digitalni certifikat**](https://infopedia.io/assets/images/revolution-of-money/DigitalCertificates_OpenSourceCA_by_BorisDjurdjevic_2012.pdf){:target="_blank"}. Osigurava da niko ne može potrošiti novčiće koji im ne pripadaju ako nemaju odgovarajuću šifru tj. privatni ključ. PKI obično koristi [***RSA* algoritam**](https://www-geeksforgeeks-org.translate.goog/rsa-algorithm-cryptography/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koji je zasnovan na matematičkoj nemogućnosti faktorizacije velikih brojeva, za efikasno pronalaženje faktora sa prostim brojevima. RSA se može koristiti za digitalno šifrovanje (skriveni podaci) ili za digitalni potpis (osigurava integritet podataka, autentifikaciju i neporicanje). Drugi algoritmi uključuju *SHA-256*, *Diffie-Hellman* i *Eliptička kriva (ECDSA)* ([problem diskretnog logaritma](https://www-researchgate-net.translate.goog/publication/220784858_The_Elliptic_Curve_Discrete_Logarithm_Problem_State_of_the_Art?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}).<br>
![PKI](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/pki.png)

-- Kombinacija ovih elemenata čini cijeli proces prilično intrigantnim i istovremeno daje nekoliko pozitivnih posljedica:<br>
&nbsp;1. Sprječava dvostruku potrošnju - Digitalna rijetkost po prvi put<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (original u virtuelnoj stvarnosti koji se ne može kopirati, revolucionarna inovacija)<br>
&nbsp;2. Garantuje integritet i sigurnost<br>
&nbsp;3. Daje odgovarajuće ekonomske podsticaje ljudima koji koriste i održavaju mrežu<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Pozitivna povratna sprega: viša cijena, više pažnje, veća potražnja)<br>
-- Takođe ima dobru distribuciju tokom vremena sa opadajućom inflacijom, pošto se nagrada generisana rudarenjem prepolovi svake 4 godine. Maksimalan broj novčića je ograničen na [**21 milion**](https://decrypt-co.translate.goog/34876/why-is-bitcoins-supply-limit-set-to-21-million?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank "} (gornji limit) koji bi prema procjenama bio dostignut u **2140. godini**. Trenutno, 2022. već je kreirano skoro 19 miliona, oko 90%. Kada se nagrada za nove koine smanji, naknada za transakcije će ostati za rudare. Neki koini u ranom periodu nastajanja su izgubljeni zbog [vlasnika koji su izgubili ključ](https://www-businessinsider-com.translate.goog/james-howells-threw-away-bitcoin-dump-masterplan-get-back-2022-7?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){: target="_blank"} i takođe sam Satoši je iskopao skoro 1 milion koina koji nikada nisu premješteni sa početne adrese. Jedna procjena je da su vlasnici zagubili skoro 20% svih postojećih tokena, što ih čini još nijim. Neki su se pitali zašto je za maksimalan broj izabran upravo 21 milion (šala za 42 kao odgovor na sve, pa Bitcoin sa [21 rješava pola svega](https://www.reddit.com/r/Bitcoin/comments/tg7azn/the_answer_to_everything_in_the_universe_is_42/){: target="_blank"}). Nominalna količina nije toliko bitna sve dok je definisana i fiksirana. Pošto je djeljiv, trenutno do 8 decimala, i 1 BTC ima 100 miliona satošija (sats) kao najmanju jedinicu.<br>

-- Svi bi trebali biti svjesni da bitkoin nije anoniman, već je *Pseudo-Anoniman*, što znači da je transakcija javna, ali ima samo vlasnički broj. Međutim, ako neko ikada poveže taj broj sa osobom onda se može pratiti. Načini da se izbjegne praćenje su navedeni u odlomcima ispod.<br>
-- Koini se mogu pohraniti van mreže u digitalnom novčaniku ili na kripto mjenjačnici. Novčanik je aplikacija zaštićena lozinkom na mobilnom uređaju ili računaru, s tajnim kodom za otključavanje koji je sačuvan na drugoj lokaciji u digitalnom obliku ili napisan na papiru. Omogućava potpuni **Sopstveni Nadzor**, u skladu sa izrazom: ***Nisu vaši ključevi, nisu vaši novčići!*** Ne treba bježati od odgovornosti, zato **Preuzmite starateljstvo** nad svojim koinima. Vrijedni pomena su *Cold Storage* (Hladno skladište) kao offline novčanik i [hardverski novčanici](https://www.cryptovantage.com/news/ask-cryptovantage-do-i-really-need-a-hardware-wallet-to-store-bitcoin /){:target="_blank"} za one koji žele [dodatnu sigurnost](https://safehodl-github-io.translate.goog/hardware-wallets/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (preporučuje se kada se ima velika vrijednost).<br>

-- Blok informacije:<br>
[BlockExplorer](https://blockexplorer-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}; | [BlockStream](https://blockstream.info){:target="_blank"};<br>
BlockChain: [grafikoni](https://blockchain.com/charts){:target="_blank"} & [blokovi](https://blockchain.com/btc/blocks){:target="_blank"}; | [balans](https://bitref-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"};

### 2.3 Prošireni opis [[C](#toc)]
{: #extended-description }
-- Kao novi internet protokol [Bitkoin](https://en.wikipedia.org/wiki/Bitcoin){:target="_blank"} omogućava prijenos vrijednosti preko komunikacijskog kanala. Ostali raniji protokoli aplikacija uključuju *https* (web stranice), *ftp* (datoteke), *smtp* (email), itd. Sa najnovijim možete u osnovi slati koin poput e-pošte, bilo koju vrijednost bilo gdje u svijetu skoro odmah. Bez da ga iko može zaustaviti ili imati kontrolu, on je **otporan na cenzuru** i ne može se lako konfiskovati.<br>
To je prvi slučaj u kojem su se pohlepa i altruistički podsticaji uskladili. Sada možete donijeti najsebičniju odluku i doprinijeti većoj jednakosti u svijetu u poređenju sa fiat sistemom. Kao takva, vrlo je korisna tehnološka inovacija koja omogućava distribuirani konsenzus, ali se takođe može posmatrati iz različitih uglova. Kada se pokušava u potpunosti razumjeti, potrebno je shvatiti ***mnoštvo aspekata*** (interdisciplinarno):<br>
&nbsp;1. **Ekonomski** (Monetarna politika) - unaprijed definisana i ograničena količina (relativno fiksna ponuda)<br>
&nbsp;2. **Tehnički** (Umrežavanje) - decentralizacija<br>
&nbsp;3. **Politički** - smanjenje državne monetarne kontrole<br>
&nbsp;4. **Ideološki** - osnovne vrijednosti<br>
&nbsp;5. **Društveni**<br>

-- YT videi:<br>
[Šta je Bitcoin](https://www.youtube.com/watch?v=Gc2en3nHxA4&t=34s){:target="_blank"}; | [Jednostavno objašnjenje](https://www.youtube.com/watch?v=41JCpzvnn_0&t=1s){:target="_blank"};<br>
[Kako bitkoin radi](https://www.youtube.com/watch?v=bBC-nXj3Ng4&t=8s){:target="_blank"}; | [Kako blokčejn radi](https://www.youtube.com/watch?v=SSo_EIwHSd4){:target="_blank"};<br>
TED govori:<br>
-[Blokčejn mijenja novac i poslovanje](https://www.youtube.com/watch?v=Pl8OlkkwRpc&t=37s){:target="_blank"} (*Don Tapscott*)<br>
-[Blokčejn transformiše ekonomiju](https://www.youtube.com/watch?v=RplnSVTzvnU&t=1s){:target="_blank"} (*Bettina Warburg*)<br>
-[Budućnost novca](https://www.youtube.com/watch?v=pPgd7Hj3ABQ){:target="_blank"} (*Neha Narula*)<br>

[Bikcoin Upravljanje](https://stanford-jblp.pubpub.org/pub/bitcoin-governance/release/2){:target="_blank"} slično sa 3 (tradicionalna) nivoa razdvajanja vlasti.<br>
[3 grane Blokčejn Upravljanja](https://medium.com/digitalassetresearch/the-three-branches-of-blockchain-governance-75a29bf98880){:target="_blank"} (doktrina *podjele vlasti*)

| **VLAST**      | **BIT**      | Opis                                |
| -------------- | ------------ |------------------------------------ |
| 1. Sudska      | Puni čvorovi | mogu staviti veto na rudare         |
| 2. Izvršna     | Rudari       | mogu staviti veto na programere     |
| 3. Zakonodavna | Programeri   | mogu pomaći drugima da zaobiđu veto |

Zakonodavni dio takođe uključuje kompanije i infrastrukturu analogno Parlamentu (zastupnicima), dok su Programeri kao Senat, a rudari se ponašaju kao unajmljeno obezbeđenje. Krajnji korisnici su kao građani sa pravom glasa ili kao akcionari firme, pri čemu svako slobodno može da postane i čvor. U poređenju sa preduzećima, najbolje paralele mogu se povući sa IT kompanijama (Informacione tehnologije).  
-- Proizvod je globalna monetarna valuta i sistem plaćanja, a u isto vrijeme koin predstavlja vlasnike ili akcionare. S druge strane su programeri i rudari, zajedno sa čvorovima, poput vrlo širokog odbora direktora, upravnog i nadzornog.<br>

**Pravila bitkoina:**<br>
&nbsp;1. Bez konfiskacije<br>
&nbsp;2. Bez cenzure<br>
&nbsp;3. Bez inflacije<br>
&nbsp;4. Svako može provjeriti pravila 1-3<br>
-- Ova pravila su izvedena iz karakteristika protokola zbog kojih postoji u **uskom prostoru dizajna strukture**, njegovoj maloj niši. Delikatna ravnoteža znači da čak i mala izmjena jednog od kodiranih parametara može značajno narušiti neke druge važne karakteristike. Može se uporediti sa gravitacionom konstantom koja je ograničena na uski pojas, gde bi čak i mala promena poremetila cio univerzum. Ovo objašnjava neke kritike da razvoj ide sporo (osnovni lanac mora biti malo konzervativan). Nema puno prostora za bazne promjene, samo poboljšanje finog podešavanja i nadogradnja. Ipak, nema razloga da bitkoin ne bi mogao da usvoji bilo koje bolje tehnološko unapređenje koje zadržava njegove osnovne vrijednosti.<br>
-- Bilo je pokušaja da se nametnu neke rizične suštinske promjene, ali ti pokušaji su propali - [**Veličina Bloka ratovi**](https://www.bitrawr.com/bitcoin-block-size-debate-explained){:target ="_blank"}. Jedan od prijedloga je bio da se jednostavno poveća veličina bloka na 2, 4 ili čak 8 MB, što je odbijeno jer ne rješava dugoročnu skalabilnost za cijeli svijet. U isto vrijeme, imalo bi loše efekte na decentralizaciju jer bi drastično povećalo zahtjeve za memorijom čvorova.
S druge strane ažuriranja koja su prošla kao što su [SegWit](https://www.investopedia.com/terms/s/segwit-segregated-witness.asp#toc-what-is-segregated-witness-segwit){:target="_blank"} (*Segregated Witness* - Izdvojeni svjedok) i [Taproot](https://cointelegraph.com/bitcoin-for-beginners/a-beginners-guide-to-the-bitcoin-taproot-upgrade){:target="_blank" } (sa [*Schnorr* potpisom](https://cointelegraph.com/news/unpacking-schnorr-signatures-blockstreams-musig-to-improve-bitcoin-transactions){:target="_blank"}) bili su više u skladu sa vizijom i donijeli samo poboljšanja čineći ga bržim, efikasnijim i privatnijim. Ali prvo ih je trebalo razviti, a zatim je 95% rudara (ogromna većina) moralo dati signal za podršku da ga aktiviraju. Zovu se [BIP](https://cointelegraph.com/explained/what-are-bitcoin-improvement-proposals-bips-and-how-do-they-work){:target="_blank"} ([*Bitcoin Improvement Proposal* - Bitcoin Prijedlog za poboljšanje](https://river.com/learn/what-is-a-bitcoin-improvement-proposal-bip/){:target="_blank"}). Nepostojanje centralne komande predstavlja značajne logističke izazove, ali ta prepoznatljiva karakteristika osigurava da nema centralne tačke rizika.<br>

-- Bitcoin u cjelini predstavlja [promjenu paradigme](https://www.nasdaq.com/articles/bitcoin-is-the-ultimate-paradigm-shift-2021-10-02){:target="_blank" } za [Otjelovljenje kapitala](https://www.barrons.com/articles/cryptocurrency-and-the-21st-century-paradigm-shift-51635556355){:target="_blank"} koji se mijenjao svakog vijeka:<br>
&nbsp;18. - obradiva zemljišta (poljoprivredno doba)<br>
&nbsp;19. - fabrike, mašine, obveznice (industrijsko doba)<br>
&nbsp;20. - urbane nekretnine, akcije (informaciono doba)<br>
&nbsp;21. - virtuelna imovina (digitalno i distribuirano doba)<br>
&nbsp; - takođe se naziva [Eksponencijalno doba](https://www.reddit.com/r/Bitcoin/comments/tuoh5f/im_all_in_bitcoin_the_exponential_age/){:target="_blank"}<br>
&nbsp;&nbsp;&nbsp; (Tehnologija se razvija u svijetu brže nego ikada prije)<br>
&nbsp; - Jednostavno rečeno, svijet se kreće brzinom svjetlosti<br>

**Dodatne neformale definicije:**<br>
* 1 Čvrsta imovina (minimizovano povjerenje)
  - premium roba (vještački materijal)
  - neotuđiva digitalna svojina<br>
* 2 Novac za budućnost (internet izvorni)
  - najzastupljenija i sveprisutna kriptovaluta<br>
* 3 Distribuiran univerzalni dnevnik
  - otvoreni standard i API (Aplikacioni Programski Interfejs)
  - konsenzualno podijeljena i sinhronizovana baza podataka, jedan izvor istine/validacije<br>
* 4 Programirana monetarna politika, programabilni novac
  - uska ali moćna vještačka inteligencija, finansijska singularnost, nezaustavljiva mašina
* 5 Prvi projektovani monetarni sistem u istoriji ljudske rase
  - monetarna tehnokratija u digitalnom dobu
  - jedinstveni finansijski izum, novi fenomen sa posebnim svojstvima (reinvencija novca)
* 6 [Trojno knjigovodstvo](https://medium.com/uclcbt/is-bitcoin-really-triple-entry-accounting-df14e26ae3e7){:target="_blank"} - informacije pohranjene kod mnogih trećih strana
  - analogija iz [Dvostruko računovodstvo](https://en-wikipedia-org.translate.goog/wiki/Double-entry_bookkeeping?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
(2 jednaka unosa na suprotnim stranama: Duguje i Potražuje; računi [Obveza i Potraživanja](https://www-netsuite-com.translate.goog/portal/resource/articles/accounting/accounts-payable-accounts-receivable.shtml?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target ="_blank"})
* 7 Superiorna monetarna mreža - interoperabilni protokol za transportovanje vrijednosti
  - praktičan način plaćanja putem interneta
  - rješava problem ekonomske kalkulacije kontinuiranim i trenutnim tržišnim cijenama
* 8 Diverzifikovani indeks cjelokupne svjetske ekonomije
* 9 Produktivna moždana snaga programera (projekat otvorenog koda)
* 10 Mirni otpor devalvaciji valuta (smanjenju vrijednosti)
* 11 Moderna deklaracija (monetarne) nezavisnosti / Denacionalizacija
  - omogućava individualni suverenitet (samostalne zajednice)
  - napustiti korumpirani fiat sistem (tiha revolucija)
* 12 tehnologija i alat finansijske slobode
  - javni novac bez države i bez dozvole
  - daje moć nad novcem i konačnu slobodu da se živi pod sopstvenim uslovima
* 13 Novi [Društveni ugovor](https://iep-utm-edu.translate.goog/soc-cont/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (Novi oblik ustanove, [BTC-Social-Contract](https://medium.com/s/story/bitcoins-social-contract-1f8b05ee24a9){:target="_blank"})
  - složen sociotehnički sistem
  - eliminiše potrebu za velikim institucijama
* 14 Pilot projekat kako voditi društvo na manje centralizovan način
* 15 Decentralizovani monetarni sistem u mrežnoj topologiji ali i filozofiji
  - alternativa hijerarhijskoj strukturi ([Bitcoin je ubio kralja](https://www-nfx-com.translate.goog/post/network-effects-bitcoin?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"})
  - novi model sa internim provjerama i ravnotežama (mudrost gomile)
* 16 Novi globalni finansijski sistem
  - neutralan oblik novca (koji niko ne kontroliše)
  - novi operativni sistem privrede
* 17 Monetarna / Ekonomska energija
  - iz [Prvi principi](https://fs-blog.translate.goog/first-principles/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} Novac je razmjena energije (Ekon 101) - Henri Ford [energetska valuta](https://www.reddit.com/r/Bitcoin/comments/12fkc8h/henry_fords_bitcoin_energy_currency_full_article/){:target="_blank"}
  - smanjenje entropije ([Bitkoin Informaciona Teorija B.I.T.](https://bitcoinmagazine-com.translate.goog/culture/bitcoin-information-theory-bit?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"})
* 18 Oružje za [mir, a ne rat](https://inbitcoinwetrust-substack-com.translate.goog/p/a-weapon-for-peace-not-war-bitcoin?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (izlazna strategija za ljude)
  - [ratno odvraćanje](https://www.trustnodes.com/2021/08/14/bitcoin-is-a-war-deterrent-and-in-the-interest-of-us-national-security-says-space-force-engineer){:target="_blank"} - mijenja ratovanje iz kinetičke u električnu energiju (i [kritika](https://blog.lopp.net/critique-softwar-concepts/){:target="_blank"})
  - budući cilj ratnog aparata će biti [najveća stopa isporuke energije](https://bitcoinmagazine-com.translate.goog/culture/bitcoin-and-teslas-peaceful-energy-vision?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
(Nikola Tesla je zamislio mirnu energiju)
* 19 Obrazovno vozilo, novčana radoznalost
  - prevazilazi čisti novac
* 20 *Fin-tech* za siromašne (Instrument ekonomskog osnaživanja)
  - tehnološki most ka bogatijoj budućnosti
* 21 Fascinantan [intelektualni eksperiment](https://www-ccn-com.translate.goog/bitcoins-patient-zero-crypto-is-an-intellectual-experiment-that-may-fail-but-probably-wont/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target= "_blank"} (radikalna misao) da čovjek ne bude zadužen za novac
  - uvjerljiva ideja koja mijenja um
  - ljudi su inspirisani da razmišljaju/govore/pišu (blog kao dokaz)

## <ins>3. Komparativna prednost</ins>
{: #comparative-advantage }
### 3.1 SWOT analysis [[C](#toc)]
{: #swot-analysis }
Većina **Snaga i Prilika (*Strengths & Opportunities*)** koje donosi su već navedene.<br>
Pogledajmo određene **Slabosti i Prijetnje (*Weaknesses & Threat*)** i njihova objašnjenja:<br>

**Kritike** (neke su neutemeljene):
* 1 Protokol se može kopirati pošto je otvorenog koda
  - Mrežni efekat drži BTC na vrhu, a rudarenje otežava dupliranje hardvera i infrastrukture
  - Postoji mnogo kopija i verzija, sa većim ili manjim izmjenama, ali imaju malu ili nikakvu vrijednost i manju likvidnost
* 2 Nije podržano ničim
  - Podržano kodom i matematikom
  - Osigurano električnom snagom (usidren u stvarni svijet pomoću energije)
  - Novac kao apstraktni pojam djelimično zavisi od vjerovanja (svojstvena vrijednost od ljudi koji ga koriste)<br>
(sporazum među ljudima koji misle da je vrijedno)
* 3 [Ponzi šema](https://constantinecannon-com.translate.goog/practice/whistleblower/whistleblower-types/financial-investment-fraud/ponzi-schemes/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (još jedna [tulip manija](https://www-history-com.translate.goog/news/tulip-mania-financial-crash-holland?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"})
  - Zapravo je Anti-Ponzi, nema piramidalne strukture i nema procenta za 'dovođenje' drugih
  - Svako slobodno odlučuje da se pridruži
  - Ne 'obećava' visoke niti bilo kakve povrate
  - Imao je špekulativne talase, ali nije prazan balon, dodata vrijednost je digitalni transport vrijednosti
* 4 Koristi se za kriminalne aktivnosti
  - Vrlo mali procenat transakcija su nelegalne
  - Gotovina se koristi u iste svrhe
  - Nije posao novca brinuti se kako se koristi, to je samo alat<br>
(za kriminal postoji policija)
* 5 Gubitak ili krađa ključeva (lozinke)
  - Ako želite potpuno starateljstvo nad novcem, prihvatite rizik, ali preduzmite sve mjere opreza
  - U suprotnom čuvajte rezervnu kopiju kod pouzdanih trećih strana ili podijelite ključeve s više subjekata ([MultiSig](https://www-coindesk-com.translate.goog/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"})
  - Slično je potrebno za skladištenje ključeva u svrhu nasljeđivanja
  - U dužem periodu ljudi će naučiti kako da ga čuvaju i imaće više mogućnosti za skladištenje
  - Kao što danas drže gotovinu ili imaju bankovni račun, obično oboje
* 6 Troši puno električne energije, previše zahtjevno
  - [Korišćenje energije](https://www-coindesk-com.translate.goog/business/2020/05/19/the-last-word-on-bitcoins-energy-consumption/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} nije loša stvar
  - Neophodno za sigurnost i decentralizaciju
  - Stvaranje (dobrog) novca ne može biti besplatno
  - Btc [upotreba energije nije problem](https://www-lynalden-com.translate.goog/bitcoin-energy/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} i [Potrošnja energije](https://www.youtube.com/watch?v=2T0OUIW89II){:target="_blank"}
  - Podsticaj je korišćenje najjeftinije energije, trenutno uglavnom iz [obnovljivih izvora](https://wintonark.medium.com/bitcoin-mining-impact-on-renewable-uptake-fc91c5aa9be0){:target="_blank"} ([solar](https://medium.com/blockchain-life-tech/rooftop-solar-and-crypto-mining-could-kick-off-a-green-power-revolution-ad91d523b35b){:target="_blank"})<br>
takođe sa udaljene lokacije koja je inače neupotrebljiva zbog velike udaljenosti (geo-nezavisno)
  - Može doprinijeti [stabilizaciji električne mreže](https://www-vaultelectricity-com.translate.goog/how-bitcoin-will-help-stabilize-the-texas-grid-and-lower-electricity-rates/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} pauziranje rudarenja na serverima u vršnim trenucima najveće potražnje
  - Koristi višak energije trenutnih elektrana, koja inače biva protraćena
  - Toplota proizvedena opremom za rudarenje bi se mogla koristiti za grijanje domova
  - Civilizacijski nivo tehnološkog napretka mjeri se količinom energije koja se može iskoristiti<br>
([Kardašev skala](https://sr.wikipedia.org/sr-el/Skala_Karda%C5%A1eva){:target="_blank"})
* 7 Pravedna distribucija?
  - U samom dizajnu je najpošteniji sistem koji je Satoši mogao osmisliti u to vrijeme
  - Istorijski [eksperiment bez presedana](https://coinmetrics-io.translate.goog/bitcoin-an-unprecedented-experiment-in-fair-distribution/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u [poštenoj distribuciji](https://danhedl.medium.com/bitcoins-distribution-was-fair-e2ef7bbbc892){:target="_blank"}
  - Ima fer mehanizam za kreiranje koina, rudari imaju potrebu da redistribuiraju nove novčiće
  - Neuporedivo bolje od centralizovanog vlasništva
  - Neujednačeno vlasništvo nije zbog nepoštene karakteristike, već zbog rizika koji su preuzeli rani korisnici<br>
Čak i danas, kada je rizik manji, mnogi se i dalje plaše da kupe. Kao što kažu *Ko ne riskira taj ne profitira!*
  - Nije bilo pred-rudarenja niti inicijalne ponude za prodaju
  - Tržišna dinamika je postepeno ujednačila distribuciju Bitkoina i nastaviće to činiti
  - Najpravednije kriptosredstvo koje postoji
  - Postaje više [ravnomjerno raspoređeno tokom vremena](https://blog-bitbeginner-com.translate.goog/p/70b13407-7a78-4e56-acd1-e1365b8adbd9?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp?s=r#footnote-anchor-11){:target="_blank"}
  - Teži normalnoj (Gausovoj) distribuciji, koja se naziva [*Bell* kriva](https://www-investopedia-com.translate.goog/terms/b/bell-curve.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([Bitkoin Bell  - Kriva](https://hassmccook.medium.com/the-bitcoin-bell-curve-a-long-term-solution-to-global-wealth-income-inequality-de995929e267){:target="_blank"})

**Postojeći problemi sa odgovarajućim rješenjima**
* 1 Ograničeni kapacitet - neefikasno, nedovoljno skalabilno<br>
(trenutno maksimalno oko 10 transakcija u sekundi što ih čini sporim i skupim)
  - [Blokčejn Trilema](https://www.gemini.com/cryptopedia/blockchain-trilemma-decentralization-scalability-definition){:target="_blank"} (otpornost naspram efikasnosti):<br>
/__\ 1. Decentralizacija, 2. Sigurnost, 3. Skalabilnost
  - Slojevita struktura<br>
L-1 osnovni sloj optimizuje sigurnost i robusnost, a takođe ga održava decentralizovanim<br>
L-2 poboljšava segment skalabilnosti i omogućava brze i jeftine transfere<br>
(*Lightning Network*, *Liquid*, bočni lanci, ...)
* 2 Nije potpuno privatno, samo poluanonimno / [fungibilnost](https://mises-org.translate.goog/wire/why-fungibility-important-understanding-money-and-crypto?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}
  - Postoje mikseri za postizanje veće privatnosti dok L2 uklanja individualnu potrošnju iz glavne mreže

**Budući potencijalni rizici**
* 1 Velika nepoznata greška bude pronađena koja obori mrežu
  - Nije vjerovatno jer se nije pojavio nijedan *bug* već 13 godina, a hakeri su pokušavali da ih pronađu
  - Izvorni Kod protokola zasnovan na formalnim matematičkim teoremama
* 2 Potpuni kolaps interneta
  - Malo vjerovatno s obzirom na njegovu decentralizovanu prirodu i svu redundanciju
  - Takođe bi slomio trenutni finansijski sistem jer e/mobilno bankarstvo koristi web servise
* 3 Globalni dugotrajni nestanak struje/zamračenje
  - Situacija moguća samo sa nekim apokaliptičnim događajem kada novac više ne bi ni bio važan
* 4 Proboj u kvantnom računarstvu implementacijom [Šorovog algoritma](https://quantum--computing-ibm-com.translate.goog/composer/docs/iqx/guide/shors-algorithm?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koji bi mogao razbiti asimetričnu kriptografiju
  - Ne u dogledno vrijeme, a algoritam je samo teoretski
  - Može uticati na privatnost svih trenutnih digitalnih sistema
  - Već postoje ideje za [kvantnu kriptografiju](https://www-techtarget-com.translate.goog/searchsecurity/definition/quantum-cryptography?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koje bi riješile problem

Neki kritičari bi osporili Bitkoin zbog njegove neinflatorne prirode, što je tema koja zaslužuje poseban paragraf.<br>

### 3.2 Deflacija [[C](#toc)]
{: #deflation }
-- To je smanjene / pad opšteg nivoa cijena roba i usluga. Nastaje kada stopa inflacije padne ispod 0%.
Često se koristi u ekonomskoj krizi kao zastrašujuća riječ vezana za recesiju i depresiju.<br>
Deflaciona spirala je situacija snižavanja cijena kao reakcija na ekonomsku krizu koja dovodi do manje proizvodnje, nižih plata, smanjene potražnje.<br>
-- Ali [deflatorna ekonomija](https://www-reddit-com.translate.goog/r/CryptoCurrency/comments/u0efbj/you_wouldnt_spend_a_deflationary_currency_bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} uopšte nije inherentno recesivno okruženje. U stvari, neki od najprosperitetnijih perioda rasta u istoriji bili su snažno deflacioni. Kako proizvodnja postaje efikasnija, prirodno je da cijene padaju. Takođe, Bitcoin nije formalno deflatoran, tehnički je programiran da bude **Dezinflatoran**, stopa inflacije se smanjuje svake 4 godine. Ovo kao rezult daje konstantnu monetarnu bazu bez promjena ponude.<br>

-- Da bi BTC mogao da se proširi, u početku je imao veću inflaciju koja se vremenom smanjivala. U dugom vremenu kada ga svi budu posjedovali i koristili cijena bi se stabilizovala, ali prethodno mora dosta rasti dok teži ka nultoj inflaciji. Problem je što živimo u sistemu koji je potpuno suprotan i zasnovan na dugovima. Taj dug mora vremenom pojeftiniti sa inflacijom, jer u suprotnom, sve države i kompanije bi bankrotirale. Problem nije deflacija sama po sebi, već tranzicija sa mjesta gdje smo sada, kada imamo preveliku zaduženost, u okruženje niske inflacije.<br>
-- Na kraju bi moglo doći do ravnoteže u kojoj bi vrijednost cjelokupne novčane mase odgovarala ukupnom ekonomskom proizvodu svijeta. Ovo omogućava svima da imaju dugačak vremenski horizont i planiraju na duži period, što je dobro i za ljude i za životnu sredinu. Ljudi bi kupovali kvalitetne dugotrajne stvari, umjesto da kupuju puno smeća koje brzo bude bačeno. Umjesto uskog posmatranja stvari, omogućava da se zauzme širi pogled, bude neustrašiv, i donese bolja odluka. Takođe u ovom hipotetičkom svijetu ne bi bilo ekstravagantnog gomilanja koina koje vodi u makroekonomsku recesiju. Umjesto toga, ljudi zarađuju u bitkoinima, ali i troše satošije u skladu sa svojim potrebama, planovima i željama.<br>
-- Kad su plate u pitanju, čak i ako malo padnu, cijena robe bi pala još više, čineći čovjeka bogatijim. Razlika između nominalnih i realnih plata je fundamentalna. Nema smisla povećavati samo nominalne plate, bitan je odnos inflacije/deflacije.<br>
U cjelini **koristi nadmašuju rizike** značajno.<br>

-- Na primjer, zamislite svijet sa nezavisnom globalnom valutom koja se ne može preduvati. U posljednjih 50 godina prosječan ekonomski rast je bio ~ 2%, dok se za narednih 50 godina procjenjuje da bi mogao biti do 3%. Uzmimo 2,5% kao srednju vrijednost, pa uz fiksnu ponudu novca, njegova vrijednost bi svake godine trebala rasti za 2,5%. U tom okruženju ne biste morali žuriti i trošiti novac, nego uzeti vremena da razmislite šta kupiti i gdje uložiti.<br>
-- Što se tiče kredita i zajmova / zaduživanja, nominalna kamatna stopa bi bila niska, ali efektivna bi bila nominalna + tih 2,5%. Dakle, kredit za kuću mogao bi imati nominalnu stopu od 1,5% (efektivna 4%). Dok bi ulaganja u posao, koja nose veći rizik, imala veću stopu prinosa ili vjerovatno neki udio kompanije.<br>
Istorijski podaci: američke kamatne stope u posljednjih [200 godina](https://advisor-visualcapitalist-com.translate.goog/us-interest-rates/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} i hipoteka na 30 godina od [1971-2022]( https://themortgagereports-com.translate.goog/61853/30-year-mortgage-rates-chart?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>
-- Postoji odlična knjiga *'[**Cijena sutrašnjice**](https://tylerahall-com.translate.goog/the-price-of-tomorrow-jeff-booth-summary/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} : Zašto je deflacija ključ bogate budućnosti'* od *Jeffa Boot*-a. On predlaže da se prestane boriti protiv deflacije (vođene tehnologijom), umjesto toga prihvatiti njen potencijal obilja. To bi bio sistem gdje potrošači pobjeđuju u vidu boljih cijena i usluga.

Bitkoin monetarna inflacija [izvor grafa](https://bashco.github.io/Bitcoin_Monetary_Inflation/){:target="_blank"}<br>
(geometrijski se spušta ka asimptotskom maksimumu od 21 mil. - [tačnije](https://academy-bit2me-com.translate.goog/en/cuantos-bitcoins-pueden-haber/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} 20.999.999,9993)<br>
![Btc Monetary Inflation](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/btc-monetary-inflation.png)<br>

### 3.3 Ostale kripto valute [[C](#toc)]
{: #other-cryptos }
-- U poređenju sa drugim kripto koinima, važne razlike su što **BTC** ima prednosti [**prvog pokretača**](https://corporatefinanceinstitute-com.translate.goog/resources/knowledge/strategy/first-mover-advantage/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([Poluistina](https://hbr-org.translate.goog/2005/04/the-half-truth-of-first-mover-advantage?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), takođe je najpoznatiji i skoro svi su već čuli za njega. On sam po sebi nema lidera pa ima veću decentralizaciju i **nikada nije hakovan**. Ipak, to ne znači da su svi ostali bezvrijedni, neki od njih mogu imati vrijedne dodatne karakteristike. Samo oni koji nisu u istom domenu kao BTC i ciljaju na drugačiji način upotrebe, bilo šta osim bazne monetarne imovine, mogu preživjeti. Naravno da je bilo, ima i biće mnogo onih koji su čista prevara, poput [OneCoin](https://technext-ng.translate.goog/2022/07/05/all-you-need-know-onecoin-crypto-scam/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, ili obmana sa manipulativnom šemom 'naduvaj i odbaci - *pump-and-dump*' (teorija Velike budale). Zatim tu je grupa loših sa besmislenom idejom. Obe vrste spadaju u kategoriju takozvanih 'shit'(kaka) tokeni bez vidne svrhe, još se nazivaju 'ship'coin - čamac tokeni, plove u zaborav. Ostaje mali broj koji bi mogao imati korisnu upotrebu, ali čak i mnogi od njih će propasti zbog loše implementacije. Samo nekolicina će preživjeti i napredovati i možda postati lider u određenom domenu. Ipak, BTC je trenutno jedini koji ima realne šanse da postane globalni monetarni sistem.<br>

-- Postoji nekoliko razloga zašto je on glavni, kripto kralj, a to su:<br>
1. Prava decentralizacija
   - ovo je od najveće važnosti i PoW sa svom svojom potrošnjom električne energije mu daje suštinsku vrijednost (korisnost) ukorijenjenu u fizičkom svijetu a istovremeno obezbjeđuje vremensku i prostornu sigurnost.
   - ne može se falsifikovati jer ima trošak energije.
   - dok kompanije i njihove mreže/platforme mogu biti cenzurisane, protokoli se ne mogu tako lako blokirati.<br>
2. Mrežni efekat
   - što ga više ljudi koristi, raste vjerovatnoća da će postati veći<br>
     (vrijednost raste s brojem korisnika)
3. Dodatna vrijednost
   - uz nove jedinstvene karakteristike i funkcionalnost
4. Pojednostavljen dizajn u svojoj srži
   - u skladu sa IT principom [***KISS***](https://www-techopedia-com.translate.goog/definition/20262/keep-it-simple-stupid-principle-kiss-principle?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
     (*Neka bude jednostavno, glupo*)
5. Ima samo jednu glavnu funkciju u osnovi
   - biti samo novac, ali radi to vrlo dobro

-- Neki AltKoini (Alternativni novčići - bilo koji drugi osim Bitcoina) mogu se smatrati startup-ima gdje je njihova kupovina slična ulaganju u tu kompaniju. Na primjer DeFi - *Decentralizovane finansije* (Kripto [Rječnik](https://www-forbes-com.translate.goog/uk/advisor/investing/cryptocurrency/crypto-glossary-of-terms-acronyms/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} i [Akronimi](https://www-coindesk-com.translate.goog/learn/from-btd-to-fud-to-wagmi-understanding-crypto-acronyms/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) su aplikacije koje replikuju određene bankarske usluge. Ulaganje u njih se često može uraditi sa [**ICO**](https://www-investopedia-com.translate.goog/terms/i/initial-coin-offering-ico.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Inicijalna ponuda koina*), analogno **IPO** (*Inicijalna javna ponuda*). To je kao balon Dot-com-a u 2000-im kada je bilo mnogo kompanija koje su imale web stranice, ali samo neke su opstale i porasle postale. Dok je većina drugih potpuno propala, a mi nikada nismo ni čuli za njih.<br>
Ipak samo se BTC posmatra kao **Imovina** (takođe [od strane SEC-a](https://www-reuters-com.translate.goog/legal/transactional/are-cryptocurrencies-securities-sec-is-answering-question-2022-03-21/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){: target="_blank"}), drugačije rečeno **Digitalna svojina**, dok su sve ostale kriptovalute opisane kao **Hartije od vrijednosti** (*Naredni Bitkoin je Bitkoin* i *Sve putanje vode ka Bitkoinu*). Bitcoin nije samo stvoren, već i [**otkriven**](https://www.citadel21.com/commodore-21){:target="_blank"}, baš kao vatra i točak ili [broj nula](https://breedlove22.medium.com/the-number-zero-and-bitcoin-4c193336db5b){:target="_blank"}, i kao takav to je jednokratni događaj. Njegovo porijeklo je bilo organsko i za njega se kaže da je imao [Bezgrešno začeće](https://www.bitrawr.com/bitcoin/bitcoins-immaculate-conception-explained){:target="_blank"} koje se ne može replikovati.  
Apsolutna matematička rijetkost (ograničena ukupna količina), postignuta konsenzusom u decentralizovanoj mreži, je [OTKRIĆE](https://www.reddit.com/r/Bitcoin/comments/19eby45/bitcoin_is_a_discovery/) ([Načelo jednog udarca - *The One Shot Principle*](https://www.reddit.com/r/Bitcoin/comments/19eby45/bitcoin_is_a_discovery/){:target="_blank"}){:target="_blank"}, dok je implementacija Bitkoina  kao peer-to-peer novčanog sistema bila izum tog [velikog otkrića](https://embracingdiscomfort.medium.com/bitcoin-is-the-greatest-discovery-since-fire-cd44a208e6ab){:target="_blank"}.  

-- Stabilni novčići su još jedna posebna kategorija novca, ali koji je uglavnom centralizovan, ima problema i vezan je za fiat valutu, obično USD. Njihova glavna prednost je što su digitalni i lako se mogu slati širom svijeta. Oni su na neki način moderni ekvivalent eurodolaru.

-- Postoje i NFT-ovi (Ne-Fungibilni Tokeni) koji su kao prestižni kolekcionarski predmeti (digitalna grafika i crteži umjetnika). Ali oni nisu u okviru ovog članka.

### 3.4 Dokaz o radu/ulogu (PoW/PoS) [[C](#toc)]
{: #pow-vs-pos }
-- Proof of Stake (PoS) protokoli su još jedna klasa algoritama za konsenzus koji su prvi put osmišljeni 2012. Oni rade tako što biraju validatore proporcionalno njihovoj količini udjela u kriptovaluti. Ovo je učinjeno kako bi se izbjegli veliki troškovi procesiranja rudarenja.
Ključna razlika je u tome što nisu dovoljno decentralizovani, [kvantifikovano](https://news.earn.com/quantifying-decentralization-e39db233c28e){:target="_blank"} prema [**Nakamoto koeficijentu**](https://crosstower.com/resources/education/nakamoto-coefficient/){:target="_blank"}, slično [Gini koeficijentu](https://www-investopedia-com.translate.goog/terms/g/gini-index.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} za mjeru nejednakosti. PoS nema podsticaje usklađene sa time, takođe distribucija je uvijek problem. Dakle, oni mogu biti samo vrijednosni kapital (aktiva koju izdaje tijelo), a ne kao roba(komoditi).<br>
-- [PoW je efikasan](https://danhedl.medium.com/pow-is-efficient-aa3d442754d3){:target="_blank"} i po svojoj prirodi različit i odvojen. PoW i PoS postavljeni jedan pored drugog nisu na istom nivou, bilo bi kao da poredite avion i voz. Za monetarni sistem PoW je u prednosti i neophodan je. Struja je fizička svojina Bitkoina. Takođe je mnogo sigurniji protiv [51% napada](https://braiins.com/blog/how-much-would-it-cost-to-51-attack-bitcoin){:target="_blank"} zbog oportunitetnog troška, preteško i preskupo.<br>
-- Hardver koji vrši računanje za rudarenje u početku je uključivao kućne računare pa čak i laptope. Kasnije su korišćene grafičke kartice (GPU), zbog više koprocesora, nakon čega se prešlo na namjenske serverske mašine zvane [ASIC](https://zipmex-com.translate.goog/learn/asic-miner/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} rudar (integrisani krug za specifičnu aplikaciju). Oni su mnogo efikasniji i učinili su obične računare zastarjelim za ovu svrhu. Iz tog razloga, algoritam ima funkciju pod nazivom **Podešavanje težine** koja se radi svake 2 sedmice. Ovo osigurava konstantno vrijeme za generisanje bloka od 10 minuta, bez obzira na brzinu obrade (Th/s). Što se više energije unese to je teže pronaći ispravno rješenje. Zato su podsticaji da bude rudara kada cijena raste, ali s druge strane polovljenje čini nagradu manjom. Stoga [nema problema sa skaliranjem energije](https://www-reddit-com.translate.goog/r/Bitcoin/comments/q769w4/how_does_bitcoins_energy_usage_scale/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} a kada se uspostavi ravnoteža, nagrada se smanjuje dok se očekuje porast vrijednosti. Pored toga, rudari dobijaju naknadu od svake transakcije. U budućnosti će provizije transakcija postati važnije od nagrade. Prema percepciji rudara [Murov zakon](https://www-investopedia-com.translate.goog/terms/m/mooreslaw.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je [ugrađen u strukturu podsticaja](https://hal.archives-ouvertes.fr/hal-03506522/document){:target="_blank"} i u posljednje vrijeme ASIC [evolucija usporava](https://minerdaily-com.translate.goog/2021/moores-law-vs-bitcoin-asics-and-network-growth/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>
![Hashrate](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/hashrate.png)
[Izvor grafikona](https://ycharts-com.translate.goog/indicators/bitcoin_network_hash_rate?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} i ostali podaci o rudarenju sa [informacijama o *hashrate*](https://www-blockchain-com.translate.goog/charts/hash-rate?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.

## <ins>4. Globalni efekti</ins>
{: #global-effects }
### 4.1 Ekonomski uticaj [[C](#toc)]
{: #economic-impact }
-- BTC daje više ekonomske slobode i čini *ŠTEDNJU novca jednostavnom* kakva i treba da bude. Donosi finansijske alate u svijet bez bankovnog poslovanja, s nedovoljno bankovnih usluga, dajući ljudima finansijske sisteme mimo banka u tradicionalnom smislu (svijet bez banke). Važan aspekt i jedan od razloga zašto je cijeli projekat bio uspješan je dobra [**Tokenomija**](https://www.coindesk.com/learn/what-is-tokenomics-and-why-is-it-important /){:target="_blank"} - finansijski podsticaji za rudarenje, kupovinu, korišćenje i držanje tokena.<br>
-- Vrijedni pomena su ekonomski ciklusi. Fenomen u kojem ekonomija prolazi kroz period buma i kraha koji se manifestuje sa tržištima bika ili medvjeda.
Postoji odlično objašnjenje poznatog menadžera investicionog fonda [*Ray Dalio*](https://www-principles-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u videu - [*Kako radi ekonomska mašina*](https://www.youtube.com/watch?v=PHe0bXAIuk0){:target="_blank"}<br>
U njemu je dao nekoliko jednostavnih savjeta, 3 osnovna pravila:<br>
&nbsp;1. Neka dug ne raste brže od prihoda<br>
&nbsp;2. Nemojte da dug raste brže od produktivnosti<br>
&nbsp;3. Učinite sve što možete da povećate svoju produktivnost<br>
![price history](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/economic-cycles.jpg)

-- Što se tiče ciklusa, nalazimo ih i u kratkoj istoriji bitkoina, od kojih svaki traje oko 4 godine, otprilike period polovljena. Svaki naredni ciklus je bio manje promjenljiv, budući da veća tržišna kapitalizacija otežava velike skokove cijene. Takođe je u određenim trenucima je bio i naduvan. U prethodnim periodima je bio u korelaciji sa *Nasdaq* berzanskim indeksom i još uvijek je djelimično. Međutim, u posljednje vrijeme [odvajanje od korelacije](https://biz-crast-net.translate.goog/how-stagflation-could-trigger-global-bitcoin-adoption/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} prema akcijama može ukazivati da se šire usvanjanje bitkoina ubrzava, dok stagflacija može biti osnovni faktor koji pokreće prihvatanje bitkoina.<br>

![price history](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/price-history.jpeg)

-- U posljednjih 10 godina mogli smo vidjeti da vrijednost raste (kao što prethodni [grafikon pokazuje](https://cdn-hackernoon-com.translate.goog/images/409e32dw.jpg?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) nekoliko redova veličine. Talase su stvarali ili veliki kitovi ili mali investitori kako sve više ljudi postaju Bitkoineri. Kitovima se smatraju oni koji imaju 1000 i više bitkoina. Drugi su se okupili oko online zajednice *WallSteetBets* (poznata [GameStop saga](https://abcnews-go-com.translate.goog/Business/gamestop-timeline-closer-saga-upended-wall-street/story?id=75617315?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target= "_blank"}) na *Reddit*-u, takozvani pokret majmuna.<br>
S druge strane pad je išao istim putem. Dodatno, nedavni krah je uzrokovan kolapsom prekomjernih i neregulisanih kompanija koje su investirale i posuđivale kriptovalute. Neke su bili izložene prema drugima i to je bilo kao zaraza stvorena kockanjem. Da istaknemo pojedine od njih: Tera-Luna, Anchor, 3 Arrow Capital, Celsius, Voyager. Ili su bankrotirali (finansijski stečaj) ili su likvidirani. Kripto tržište je ponovilo greške iz krize tokom 2008. godine. Ali ovdje je tržište očišćeno od loših igrača. I nije to bio prvi put, neki se možda sjećaju kako je [Mt.Gox](){:target="_blank"} propao, takođe [Coincheck](https://www-cnbc-com.translate.goog/2018/01/26/japanese-cryptocurrency-exchange-loses-more-than-500-million-to-hackers.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} hakovanja i [BitConnect](https://www-cointribune-com.translate.goog/en/crypto-guides/the-story-of-bitconnect-worlds-biggest-crypto-scam-yet/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} prevare.

-- Bitkoin kao nova klasa imovine stekao je nevjerovatnu popularnost. Kada je u pitanju ukupna tržišna kapitalizacija u jednom trenutku je bila 1 bilion dolara, dok je cijelo kripto tržište bilo oko 2 B. Google-u je trebalo 22 godine da postane 1 B kompanija, dok je Bitkoin to postigao za 12 godina. Tržište zlata kojim se može trgovati iznosi oko 5 biliona. Da bi se to sustiglo, značilo bi da vrijednost skoči 20 puta (informisano nagađanje) od trenutne cijene. Napomenimo da je cjelokupno tržište akcija oko 100 B, dok su nekretnine 300 B.<br>
Bitkoin je u prosjeku imao rast malo više od 100 % godišnje (dupliranej cijene svake godine) tokom decenije (2012-2022), tako da je bila imovina s najboljim učinkom.

### 4.2 Političke implikacije [[C](#toc)]
{: #political-implications }
-- Naduvavanje količine valute iskrivljuje novac i jednako je stvaranju imaginarnih proizvoda što negativno utiče na tržišta. Centralno planiranje (takođe novca) je protivno evoluciji, što je jedan od razloga zašto ono uvijek propadne.<br>
[Monetarizam](https://www-britannica-com.translate.goog/topic/monetarism?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} - naglašava ulogu vlade u kontroli količine novca u opticaju.<br>
Prije bitkoina nikada nismo imali nepotkupljivu monetarnu bazu. Svijetu je potrebna neutralna (rezervna) valuta, sada više nego ikad.<br>
-- Blokčejn može dati direktniju demokratiju. Tehnologija omogućava veću stopu učešća u glasanju, što olakšava i sprovođenja referenduma.

-- Gledajući u istoriju, [najgore hiperinflacije](https://www-cnbc-com.translate.goog/2011/02/14/The-Worst-Hyperinflation-Situations-of-All-Time.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank "}, svih vremena su bile tokom prošlog vijeka u:<br>
 -Mađarskoj, -Jugoslaviji, -Njemačkoj, -Grčkoj.<br>
Neki dobro poznati primjeri velike inflacije od 2000-ih:<br>
-Hiper: [Zimbabve](https://www-economicshelp-org.translate.goog/blog/390/inflation/hyper-inflation-in-zimbabwe/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([milion+](https://www.dallasfed.org/~/media/documents/institute/annual/2011/annual11b.pdf){:target="_blank"} %), [Venecuela](https://www.cnbc.com/2019/08/02/venecuela-inflation-at-10-million-percent-its-time-for-shock-therapy.html){:target="_blank"} (10,000 %), Gana, Etiopija, Šri Lanka, ...<br>
-Visoka: [Liban](https://www-thenationalnews-com.translate.goog/business/economy/2022/08/04/ponzi-scheme-run-by-lebanese-politicians-caused-economic-pain-to-people-world-bank-says/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}([200+](https://www.thenationalnews.com/business/economy/2022/08/31/lebanon-records-triple-digit-inflation-for-25th-conscutive-month/){:target="_blank"} %), [Argentina](https://tradingeconomics-com.translate.goog/argentina/inflation-cpi?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (70 %), [Turska](https://www-ft-com.translate.goog/content/0d217384-7815-44b1-9b3e-d45236342f9f?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (80 %), itd.<br>
-Umjerena: SAD, UK, EU i drugi<br>

-- Budući da je teško/nemoguće zabraniti bitkoin na globalnom nivou, zemlje ga mogu ignorisati ili pokušati da ga regulišu.
Neki zakoni ga prihvataju dok su drugi više ograničavajući.
Npr Kina ima [zabranu rudarenja](https://www-weforum-org.translate.goog/agenda/2022/01/what-s-behind-china-s-cryptocurrency-ban/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, jer bitkoin može ometati i ugroziti njihov centralni uticaj na stanovništvo.
Oni bi mogli biti prvi koji će implementirati [CBDC](https://www-investopedia-com.translate.goog/terms/c/central-bank-digital-currency-cbdc.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (digitalna valuta Centralne banke) što bi dalo još više moći državi nadzora. Ovo bi omogućilo lakše širenje [Sistema socijalnog kredita / bodovanja](https://www-businessinsider-com.translate.goog/china-social-credit-system-punishments-and-rewards-explained-2018-4?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, što je neprihvatljiva distopija. Dakle, Bitkoin može olakšati smanjenje sposobnosti vlade da prati i nadgleda svoje građane. Kao što je *David Chaum* rekao: *"[Privatnost u slanju poruka i plaćanju](https://decrypt-co.translate.goog/95109/david-chaum-from-inventing-digital-cash-to-pioneering-digital-privacy?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp), i slično, je fundamentalno za demokratiju."*<br>
-- S druge strane, demokratskije zemlje su ga prihvatile i učinile legalnim, ali zahtijevaju **KYC** (*Know Your Customer* - Upoznaj svog kupca) i **AML** (*Anti-Money Laundering* - sprječavanje pranja novca). Dakle, većina berzi mora biti u skladu sa ovim pravilima i tražiti od korisnika lična dokumenta. Ipak, postoje neke DEX (decentralizovane berze) gdje se mogu izbjeći ovi zahtjevi.<br>

-- U ovom trenutku zemlje imaju različite [stavove prema bitkoinu](https://www-investopedia-com.translate.goog/articles/forex/041515/countries-where-bitcoin-legal-illegal.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Više [prijateljski nastrojene](https://learn-bybit-com.translate.goog/investing/most-crypto-friendly-countries/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} su to legalizovale na način da bude ili prihvaćeno (SAD, EU ,...), ili neoporezivo (*Portugal* kao istaknut slučaj sa lakim [boravištem](https://rebase-co.translate.goog/portugal?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} za [Digitalne Nomade](https://govisafree-com.translate.goog/crypto-portugal/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} uključujući ['Bitkoin familiju'](https://www.cnbc.com/2022/02/06/bitcoin-family-moves-to-portugal-crypto -tax-haven.html){:target="_blank"}), ili čak zakonsko sredstvo plaćanja ([El Salvador](https://www.weforum.org/agenda/2021/09/el-salvador-officially-adopts -bitcoin-as-legal-tender-but-will-other-countries-follow){:target="_blank"} kao prvi; [El Zonte](https://www-npr-org.translate.goog/2022/03/27/1086851329/el-salvadors-leader-wants-to-go-in-even-bigger-on-bitcoin?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} - [Bitkoin plaža](https://www.cbsnews.com/news /bitcoin-beach-el-salvador-60-minutes-2022-04-10/){:target="_blank"}). Oba i Majami i New York sada imaju [gradonačelnike koji su naklonjeni bitkoinu](https://www-coindesk-com.translate.goog/policy/2022/03/16/bitcoin-friendly-mayors-view-blockchain-as-a-way-to-boost-equality-diversity/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. S druge strane su oni skeptičniji koji još uvijek čekaju da vide kako će se situacija dalje razvijati.<br>
-- Što se tiče zakonitosti, zanimljiv je segment Ustava SAD, [Člana I - Odjeljak 10](https://www.law.cornell.edu/constitution-conan/article-1/section-10/clause-1/ limits-on-issuing-legal-tender){:target="_blank"}, koji zabranjuje državama da izdaju novčanice (mjenice), ali se zlatni i srebrni novac može koristiti kao legalno sredstvo plaćanja. Dakle, ako bi se bitkoin smatrao analognim zlatu, mogao bi postati zakonsko sredstvo plaćanja i po već postojećoj regulativi ([razgovor sa advokatom *Aaron Daniel*-om](https://www.youtube.com/watch?v=sPh1a46SL4w){:target="_blank"}).<br>

-- BTC je nada za mnoge ljude koji su u očaju i marginalizovani. Jedan od slučajeva upotrebe je davanje slobode ljudima u zemljama pod nekim sankcijama kao što je [Kuba](https://www-coindesk-com.translate.goog/business/2022/03/08/you-would-understand-bitcoin-if-you-were-under-cubas-embargo/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, Iran, itd. Takođe može pomoći izbjeglicama da pobjegnu iz zona sukoba i odu (sa svojom ušteđevinom) iz Libije, Rusije, Ukrajine, Sirije, itd. Isto je istina za one koji bježe od opresivnih i tiranskih režima. Bitkoin i fantastična blokčejn tehnologija daju novu paradigmu ekonomije bez teritorije koja zamjenjuje regularne granice.<br>
-- Naredno napomenimo kako mnoge afričke zemlje imaju vrlo slabu valutu uz visoku inflaciju, u kojoj veliki broj osiromašenih ljudi nema pristup finansijskim uslugama. Neki čak koriste strani postkolonijalni novac, kao što je [CFA franak](https://cointelegraph.com/news/we-don-t-like-our-money-the-story-of-the-cfa-and-bitcoin-in-africa){:target="_blank"} koji je još uvijek pod kontrolom francuskog trezora. Dakle, otvoreni izvorni kod je i [borba protiv monetarnog kolonijalizma](https://bitcoinmagazine-com.translate.goog/culture/bitcoin-a-currency-of-decolonization?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, kao što je opisao [*Alex Gladstein*](https://hrf-org.translate.goog/team/alex-gladstein/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br >
-U El Salvadoru, gdje provizije za ino doznake i devizni kursevi mogu umanjiti transfer novca rodbini, Bitkoin je ponudio niže naknade i brže transakcije.<br>
-Na Kubi, nakon što je sistem dvostruke valute devalvirao pezos, oni koji su štedjeli u bitkoinu uspjeli su finansijski opstati.<br>
-U Nigeriji, aktivisti za ljudska prava zavise od Bitkoina za donacije nakon gušenja organizacije od strane autoritarnog režima.<br>

-- Sada je očigledno da nadmoć [petrodolarske ekonomije opada](https://moderndiplomacy-eu.translate.goog/2022/05/28/the-waning-supremacy-of-the-petrodollar-economy/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target=" _blank"} i hegemonija dolara se bliži kraju. Ovo će vjerovatno dovesti do decentralizovanog multipolarnog sistema sa više rezervnih valuta. Zanimljiva knjiga i još jedna video prezentacija je [*'Promjena svjetskog poretka'*](https://www.youtube.com/watch?v=xguam0TKMw8){:target="_blank"} od *Ray Dalio* gdje govori o ekonomskom usponu Kine. Ali Kina takođe dosta manipuliše valutom. Mogla bi se napraviti analogija od vojnog industrijskog kompleksa baziranog na fijatu do kripto industrijskog kompleksa baziranog na energiji.<br>
-- CB bi mogle nestati u svom sadašnjem obliku, čak bi i Fiat novac mogao biti potkovan bitkoinom ili centralna vlada smanjena u tom pogledu. U suštini uklanjanje monetarne moći i ostavljanje samo fiskalne politike. Prema *Tiersovom zakonu*: [*Dobar novac tjera loš*](https://nakamotoinstitute-org.translate.goog/mempool/speculative-attack/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (suprotno od [Grešamovog zakona](https://web.archive.org/web/20140813101718/http://www.columbia.edu/~ram15/grash.html){:target="_blank"}).<br>
-- [Politika bitkoina](https://blogs-lse-ac-uk.translate.goog/politicsandpolicy/the-politics-of-bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} podupire njegov društveni život.

### 4.3 Socijalna komponenta [[C](#toc)]
{: #social-component }
-- Kako je ekosistem rastao, mnoge različite podgrupe su se pridružile pokretu.
U početku je počelo sa krypto OG (Originali Gangster) - sleng za programera ili osnivača ranog kripto blokčejna.
Zatim su došli anonimusi, libertarijanci, konzervativci, progresivci, preduzetnici, investitori, rudari, trgovci, itd. To nije bio jedinstven etos, već je bilo mnogo heterogenih podzajednica u kojima su svi našli nešto što im odgovara. Bilo je to poput širokog pobunjeničkog saveza s ekstremnom raznolikošću. Neki se često nazivaju [*'Pravi Bitkoineri'*](https://theconversation-com.translate.goog/behind-the-crypto-hype-is-an-ideology-of-social-change-177981?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank "}, preteče pokreta i ideologije. Slično je terminu Bitkoin *Maksimalist* (Btc Maxi), što znači oni koji promovišu samo Bitkoin. Bilo je neke toksičnosti u javnom prostoru, koja se mogla filtrirati. Možda bi najbolja oznaka bila BTC Realista ili jednostavno samo **Bitkoiner (Bitkoinaš)**.  
Ipak treba imati na umu da 'Bitcoin nije glatki džez, [Bitcoin je pank rok](https://www.wired.com/story/mastering-bitcoin-andreas-m-antonopoulous-wired-money-2015/){:target="_blank"}: nosite se sa tim!', kako je objasnio Andreas Antonopulos. To znači da ne možete da ga kontrolišete, centralizujete, pretvorite njegove remetilačke elemente u nešto pogodno za salu izvršnog odbora, ili da ga preimenujete u 'blockchain' da biste ga učinili prijatnijim za usvajanje.  
-- U filozofskom smislu postoji i [Bitkoin minimalizam](https://danhedl.medium.com/bitcoin-minimalism-b3ed4b88e852){:target="_blank"} (Kreirajte više, trošite manje - kako je objasnio *Dan Held*). U političkoj areni pokret je okupio sve strane iz suprotnih tabora i smanjila se polarizacija. Osim toga, pošto je njegovo široko usvajanje tek počelo, svi oni koji još nemaju nikakvu količinu bitkoina ili su protivnici nazivaju se *Bez-Koineri*.<br>

-- Jedan od razloga zašto je potrebno vrijeme za usvajanje je taj što ljudi prvo to moraju naučiti i razumjeti. Većina škola vrlo malo uči o finansijama, a još manje o samom novcu. Vlade nemaju interes da u potpunosti obrazuju građane, lakše im je kada manje ljudi razumije da je inflacija indirektni porez.
A većina ljudi je i sama na neki način lijena i ne brine previše o monetarnom sistemu. Lakše je da prenesu odgovornost na Vladu, ali kao rezultat toga na kraju su zavisni i potpuno se oslanjaju na institucije.<br>
Ima onih koji kažu da je [Bitcoin filozofija kao religija](https://theconversation-com.translate.goog/why-are-people-calling-bitcoin-a-religion-175717?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (Jevanđelje proroka Satošija :), sa svim dobrim i lošim što pojam nosi uz sebe. Iako se može naći nešto sličnih elemenata, bitna razlika je u tome što nema dogmi i niko nije iznad kritike. Ono što je zajedničko je propovijed i praksa ljudi koji drže duh i etiku. Strastvene pristalice se ponekad nazivaju Bitkoin vjernicima/jevanđelistima jer su izrazito optimistični u pogledu uspjeha projekta. Oni čvrsto drže svoj stav i glasno iznose svoje mišljenje u javnost. Za neke predstavlja monetarno prosvetljenje i finansijsku renesansu skoro na duhovnom nivou (duhovno buđenje iz fiat sna).  
-- Ipak, mnogi na prvu mogu osjetiti [kognitivnu disonancu](https://coingeek.com/the-art-of-cognitive-dissonance-in-bitcoin){:target="_blank"}. To je neugodan mentalni sukob koji se javlja kod pojedinca kada su pretpostavke ili uvjerenja u suprotnosti sa novim informacijama. U ovom slučaju mehanizmi odbrane uključuju odbijanje tvrdnje ili u potpunosti ignorisanje novih informacija. Za svakoga ko je uključen u Bitkoin, usklađivanje ubjeđenja sa ponašanjem se redovno testira.<br>
-- Jednom kada čovjek dobije dovoljno informacija nakon nekog vremena mu to klikne u umu. Za to se koristi izraz:<br>
['*uzimanje narandžaste pilule*'](https://bitcoinmagazine-com.translate.goog/culture/bitcoin-orange-pill-theory-reality?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} analogija iz filma Matrix.

-- Današnje društvo prekomjerne potrošnje nije dugoročno održivo. Ulaganje u Bitkoin smanjuje kupovinu potrošne robe kratkog vijeka trajanja, koja završava na deponijama. Društvo bi trebalo promijeniti svoje kupovne navike jer resursi planete nisu neograničeni. Takođe, proizvodnja treba težiti trajnosti, a ne imati [planirano zastarjevanje](https://durabilitymatters-com.translate.goog/planned-obsolescence/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Problem nije u rastu, već u efikasnosti, kako dobiti više za manje. Ovo iz temelja mijenja način na koji naša ekonomija funkcioniše.<br>
-- Zbog narušenog monetarnog sistema, višak vrijednosti teče ka vrhu. To je jedan od razloga zašto ima mnogo milijardera dok drugi moraju da rade 60 sati sedmično samo da bi spojili kraj s krajem. Umjesto toga, veća produktivnost mogla bi većini ljudi omogućiti formalno radno vrijeme od 30 sati sedmično (automatizacija bi mogla osloboditi vrijeme za više ljudske kreativnosti).

## <ins>5. Pogled u budućnosti</ins>
{: #looking-forward }
### 5.1 Budući razvoj [[C](#toc)]
{: #future-development }
*Dalji plan*<br>
-- Pravo je čudo da je projekat opstao i zaživio. Već 13 godina radi bez prekida, bez zastoja ni na sekundu i stekao je veliku pažnju. U prvoj polovini prošle decenije bio je nepoznat široj javnosti, koristili su ga samo entuzijasti, a bio je i vrlo neizvjestan. Iako je još u ranoj i srednjoj fazi, možemo reći da su najveće prepreke iza. Radi besprijekorno i apsolutno je uspješan u usvajanju.
Kripto ekosistem možemo identifikovati kao novi kulturni i ekonomski trend koji je započeo sa foruma, širio se putem [Reddit-a](https://www.reddit.com/r/Bitcoin/){:target="_blank"} i [Twitter-a]( https://twitter.com/Bitcoin){:target="_blank"} u tkivo društvenih krugova. Ovo je stvorilo uslove pod kojima je došlo do šireg usvajanja.<br>
-- Evolucija interneta vodila je od čistih podataka i komunikacije do društvenih informacija i digitalne vrijednosti. U tom smislu, ovaj sljedeći korak naučne evolucije stoji na ramenima divova.<br>
-- Iako ima moć da poremeti bankarsku i monetarnu industriju, na njega više možemo gledati kao na transformativnu tehnologiju koja će je poboljšati i povećati. Samo vremenom će otključati svoj puni potencijal. Prvo, to je bio kul tehnološki skok, a poslije je postano kao investicija, neka vrsta digitalnog zlata – *Čuvar vrijednosti* i tu smo sada. Kasnije, ako bude univerzalno usvojen, postaće i *Sredstvo razmjene*. To bi vjerovatno dovelo do toga da služi i kao *Jedinica obračuna*. To bi bile [3 faze masovnog usvajanja Bitkoina](https://medium.com/swlh/the-3-phases-of-bitcoin-mass-adoption-dbd50d5eaca5){:target="_blank"}.

-- Dugoročno gledano, ideja je da to bude redovan servis svakodnevnog plaćanja, da u potpunosti realizuje funkciju *Sredstva razmjene* (ili metaforično Sredstvo Izražavanja). Da bi se to dogodilo potrebna je dobra integracija sa drugim slojem *Lightning* protokola radi skalabilnosti. Kada naraste dovoljno, postaće stabilan što mu omogućava da bude i obračunska jedinica. Ako se to dogodi, tada će vjerovatno postati sredstvo globalne rezerve, **Bitkoin Standard**, hipoteza objašnjena u knjizi [*'The Bitcoin Standard'*](https://www.resistance.money/research/library/to% 20be%20organised%20better/The%20Bitcoin%20Standard.pdf){:target="_blank"} od [*Saifedean Ammous*](https://saifedean-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br >
-- Kako ga ljudi budu usvojili u mnogim zemljama, uslijedit će regulativa koja bi ga smatrala kao stranu valuta, što znači da nema poreza na kapitalnu dobit. Kako ga niko ne kontroliše, lakše je i svim državama, uključujući i svetske velesile, da ga koriste za međunarodni kliring jer neće zavisiti od konkurencije. U tom slučaju njegova vrijednost bi mogla porasti na nekoliko stotina hiljada za nekoliko godina, čak i dostići milion za 10+ godina. Jeff Both to naziva [hiperbitkoinizacija](https://phemex-com.translate.goog/academy/what-is-hyperbitcoinization?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ili [Hiper-Bitkoinizovan svijet(YT)](https://www.youtube.com/watch?v=5JOkfN9Ll10){:target="_blank"}<br>

-- Kako se usvajanje povećava, volatilnost će opadati. Rasprostranjeno prihvatanje kriptovaluta je [podstaknuto od strane milenijalaca](https://nfn8-com.translate.goog/blog/millennials-will-push-widespread-crypto-adoption/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, mlađih generacija koje poznaju tehnologiju, a sada stasavaju u odrasle.<br>
Stopa usvajanja prati [S krivu](https://www.inbitcoinwetrust.net/bitcoin-on-the-same-adoption-s-curve-as-the-internet-some-thoughts-and-figures-8af18f01cceb){:target="_blank"} i [dobija brzinu](https://phemex-com.translate.goog/blogs/crypto-bitcoin-s-curve-adoption-curve?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (baš kao što bilo sa internetom):<br>
![s-curve](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/s-curve.jpg)

### 5.2 Šta dalje [[C](#toc)]
{: #what-lies-ahead }
-- Prvo, važno je naučiti što više i imati sveobuhvatno razumijevanje sistema. Pošto sistem nije prisilan već je dobrovoljan za **priključiti se** (slobodno birate da ga koristite i eventualno učinite svijet boljim) samo učenje o njemu je već doprinos. Zatim slijedi igranje s time i kasnije promovisanje ideje podučavanjem drugih oko sebe (vrlina je učiti ljude). Postoji poznati [meme - *'mim'*](https://medium.com/@sellthehype/bitcoin-is-a-meme-4dbee76683e2){:target="_blank"} (kulturni element koji se brzo širi): [**Laserske oči**](https://www-wealthsimple-com.translate.goog/en-ca/magazine/laser-eyes-crypto?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} - značajan fokus na važne stvari koje mogu napraviti promjenu.<br>
Drugo odlučite da li ga želite kupite, za sada kao investiciju, a kasnije kao štedni račun. Na ovaj način ćete i sami isprobati i naučiti nekoliko stvari. Instalirajte jedan ili više [preporučenih novčanika](https://academy-aax-com.translate.goog/en/introducing-the-4-best-lightning-network-wallets-for-sending-and-receiving-bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target ="_blank"} (kao što je *Phoenix, Breez, Muun, Blue Wallet*), registrujte se na berzi, prebacite sredstva u svoj novčanik (povucite sa berze).<br>

-- Kada se većina zemalja pridruži sistemu, čak će se takmičiti ko ima bolje usvajanje. Na kraju će i Centralne banke početi da nabavljaju Bitkoin kao dio svojih rezervi. Kada ga prva velika CB stekne, druge će biti primorani da ga isto uzmu zbog teorije igara. Privatne banke bi takođe posjedovale BTC kao rezervnu aktivu. Kako nastavi da sazrijeva, dobiće širu podršku, integrisati se u stvarni svijet i postati mejnstrim što bi moglo biti od koristi za sve.<br>
-- Procjenjuje se da trenutno 2022. oko 200 miliona ljudi (4% svjetske populacije) ima neku količinu bitkoina/satošija. Za svaku veliku promjenu potrebno je vrijeme, u ovom slučaju decenije. To nije nešto što se može dogoditi preko noći, jer ljudi to moraju naučiti i prihvatiti. Za većinu ljudi to je bilo izvan njihovog pogleda na svijet (mentalni model).<br>
-- Neka očekivanja su da će do 2030. milijarda ljudi imati Btc novčanike. U preko 100 zemalja to bi bilo regulisano kao devize (ino valute), dok bi barem u 10 bilo prihvaćeno kao zakonsko sredstvo plaćanja.

### 5.3 Praktični pristup [[C](#toc)]
{: #practical-approach }
-- U širem smislu investicioni plan uključuje prvo da se informišete, uradite svoj domaći zadatak. Drugo, odlučite koji iznos vam je na raspolaganju za ulaganje. Na kraju ga podijelite na osnovu vašeg apetita za rizikom na nekoliko klasa imovine. U ranoj fazi rizik je bio mnogo veći u skladu sa maksimom: *Investirajte samo ono što možete priuštiti da izgubite*. Sada je manje rizično nego u prošloj deceniji, ali se i dalje smatra relativno rizičnijom klasom, uglavnom zbog velikih kretanja cijene gore i dole. Ali sada postoji suprotna izreka: *Kupite Bitcoin s novcem koji ne želite izgubiti u dužem periodu*.<br>
Samo ako budete dovoljno uvjereni u Bitkoin priču, onda je dobra ideja investirati.<br>
--U praksi postoji nekoliko generalno korisnih strategija (može se koristiti jedna ili više):<br>
&nbsp;1. Premjestite (preusmjerite) dio svog [portfelja](https://docs.google.com/spreadsheets/d/1DAck82CsHSO5rKUTgm4cqGieA0DLBK5UtMyV09AH3Yk/edit?gid=0#gid=0){:target="_blank"} u Btc i držite ga dugoročno<br>
&nbsp; - veličina uloga može se kretati od 5 do 20 % zavisno od neto vrijednosti i sklonosti riziku<br>
&nbsp; - nemojte pogriješiti da ništa ne uložite kako ne biste imali FOMO (*Fear Of Missing Out* - strah od propuštanja)<br>
&nbsp; - odlučite kada ćete se pridružiti vozu i potencijalno izgraditi bogatstvo<br>
&nbsp;2. Napravite mjesečnu štednji u Bitkoin-u (na primjer 3 - 5 % vaše plate/prihoda)<br>
&nbsp; - akumulirajte polako s prosječnom cijenom ([uprosječavanje kupovine](https://intelligent-schwab-com.translate.goog/article/dollar-cost-averaging?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"})<br>
&nbsp;3. Nemojte prodavati kada tržište padne<br>
&nbsp; - čvrsto čuvajte tokom perioda FUD (*Fear, Uncertainty and Doubt* - strah, neizvjesnost i sumnja)<br>
&nbsp; - sretno HODLovanje(mim varijacija Hold) i nastavite skupljati Satošije<br>
&nbsp;4. Aktivno (dnevno) trgovanje ne bi bilo preporučljivo jer nije produktivna aktivnost<br>
&nbsp; - veoma je teško nadmašiti tržište, čak i uz tehničku analizu<br>

Dodatni načini doprinosa:<br>
-Razmislite o tome da počnete primati uplate u Bitcoin-u za posao/uslugu koju vi ili vaša kompanija pružate<br>
-Možete čak dati i neki mali popust kada neko plaća BTC-om, to će podstaći druge da ga koriste<br>
-U kasnijoj fazi koristite ga za plaćanja gdje god je to moguće<br>
-Promijenite mentalitet s kupovine i prodaje na zaradu/štednju i trošenje/korišćenje<br>

Prijedlozi:<br>
-- Održavajte gotovinske rezerve za hitne slučajeve, dovoljno da platite sve svoje račune za jednu punu godinu. Držanjem bitkoina i gotovine štitite se i od inflacije na duži rok i od volatilnosti u kratkom periodu.<br>
-- S druge strane, ako nemate gotovinsku ušteđevinu, ako koristite finansijsku polugu, ako pozajmljujete Bitkoin za kamatu, ako koristite Bitkoin kao kolateral za zajam, ako šortate Bitkoin, ili pokušavate tempirati tržište na bilo koji način, to je kockanje. Glupo je kockati se sa bilo kakvim očekivanjem da ćete pobijediti. I kako se kaže, budale i njihov novac se brzo rastaju. Ne kockajte se ako želite da postanete bogati. Umjesto toga, postanite strpljivi, hladnokrvni (neustrašivi) dugoročni vlasnik Bitkoina.<br>
-- Razmišljajte dugoročno, postanite mudar štediša i razborit investitor u ovaj prostor jer je to ultimativna tehnologija štednje. Tretirajte to kao svoj štedni račun.<br>
-- Čuvajte se, posebno u odjeljku komentara na YouTube-u ispod svakog video klipa koji se odnosi na kripto. Puni su takozvanih stručnjaka za strategiju trgovanja sa nekim lažnim imenom i *WhatsApp* brojem za kontakt (#Prevara - kloniti se)

-- Tržište bitkoina, po prirodi, nije visoko efikasno jer nemaju svi učesnici isto znanje. Ima zanimljivu teoriju igara za informacionu asimetriju.
Novi ljudi koji dolaze nemaju iste informacije kao oni koji su bili tu ranije. Različito igraju igru ekonomske koordinacije. Takođe [ljudsko ponašanje u finansijama](https://www-cnr-com.translate.goog/insights/article/white-paper-behavioral-finance-2018.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je često iracionalno i većina ljudi ne procijeni rizik ispravno. Oni imaju pristrasnost prema dobicima, ali još uvijek imaju [odbojnost prema gubitku](https://www-apa-org.translate.goog/science/about/psa/2015/01/gains-losses?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}:
*ljutnja zbog gubitku novca izgleda veća od zadovoljstva kada dobijete isti iznos*.<br>
Što se tiče onih koji su zainteresirani za trgovanje između ciklusa, imajte na umu [pravilo 80-20](https://alphachain-co-uk.translate.goog/blog/trading-80-20-using-the-pareto-rule-in-trading?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([Pareto princip](https://www-investopedia-com.translate.goog/terms/p/paretoprinciple.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"})

-- Popularne **[Berze](https://coinmarketcap-com.translate.goog/rankings/exchanges/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}** kriptovalutna (mjesta za kupovinu Bitkoina):<br>
*[Kraken](https://www.kraken.com/){:target="_blank"}, [Binance](https://www.binance.com/){:target="_blank"}, [Bitfinex](https://www.bitfinex.com/){:target="_blank"}, [Coinbase](https://www.coinbase.com/){:target="_blank"}, [Bitstamp](https://www.bitstamp.net/){:target="_blank"}, [Gemini](https://www.gemini.com/){:target="_blank"}, [KuCoin](https://www.kucoin.com/){:target="_blank"}, ...*<br>
-- Postoje i [decentralizovana](https://koinly-io.translate.goog/blog/top-no-kyc-crypto-exchanges/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} tržišta kao što su:<br>
*[Bisq](https://bisq.network/){:target="_blank"}, [HodlHodl](https://hodlhodl.com/){:target="_blank"}, [RoboSats](https://learn.robosats.com/){:target="_blank"}*  

-- Što se tiče predviđanja cijene bitkoina, postoje zanimljivi grafikoni prema kojima smo trenutno u dobrom periodu za kupovinu.<br>
(ali nemojte zaboraviti da je svaka pretpostavka o budućnosti opklada vjerovatnoće)<br>
-[Logaritamski graf cijena](https://www-tradingview-com.translate.goog/chart/BTCUSD/4dR4jhXx-How-I-see-Bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}:<br>
![price-chart](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/log-chart.jpg)
-[Dugin graf](https://www-blockchaincenter-net.translate.goog/en/bitcoin-rainbow-chart/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}:<br>
![rainbow-chart](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/rainbow-chart.jpg)

### 5.4 Rekapitulacija [[C](#toc)]
{: #recapitulation }
-- Novčani sistemi su se mijenjali kroz istoriju i sadašnji ima veliku manu, centralizovan je i ima previše moći na jednom mjestu. To neminovno dovodi do korupcije koja na kraju rezultuje visokom inflacijom, pa možemo reći da je pokvaren. Takođe, kao sistem za koji trebaju dozvole previše je kontrolisan. Razlog zašto je bio tolerisan je jer je bio najbolje što je postojalo u to vrijeme. Ali s novim vremenom dolazi i nova tehnologija koja je omogućila bolje sisteme. Iz perspektive skladištenja vrijednosti, trebalo bi da ima najnižu moguću inflaciju. U tom smislu Bitkoin je jednostavnim riječima bolji novac ([superiorni](https://medium.com/road-less-ventured/why-bitcoin-is-a-superior-store-of-value-e5464d5fd619){:target="_blank"} čuvar vrijednosti) i sveukupno dobar ako na njega primijenimo moralni i etički okvir.<br>
-- Hiperinflacija i [kolaps valute](https://ginifoundation-org.translate.goog/kb/fiat-currency-graveyard-a-history-of-monetary-folly/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} nisu izuzetno rijetki događaji. U stvari, prosječan životni vijek Fiat valute je samo oko 35 godina, što znači da se ovi događaji dešavaju dosta češće nego što mnogo ljudi misle. Gledano iz civilizacijske perspektive, želimo da vrijednost traje minimum koliko naš život, a bolje čak i duže za naslijeđe. Takođe, mnogi društveni problemi proizlaze iz novca, tako da bi popravljanje novca moglo poboljšati svijet, barem dijelom (mim: ***Bitkoin popravlja ovo!***). Novac bi trebao biti **Fiducijarni** sistem - zakonski i etički obavezan da djeluje u najboljem interesu klijenata/korisnika a prije vlastitog, dužnost očuvanja dobre namjere i povjerenja.<br>
-- Krajnji cilj bitkoina trebao bi biti da omogućiti svima da manje razmišljamo o novcu, a više o drugim stvarima koje nas zanimaju, kako bismo obogatili ljudsko iskustvo. U suprotnom bi svi morali biti investitori puno radno vrijeme ili špekulanti, ili jednostavno trošiti novac što je brže moguće.<br>
-- Kao zaključak, nadam se da ovaj sveobuhvatni pregled može pobuditi vašu radoznalost i podići kritičko razmišljanje. I pazite da ne zaglavite u eho komori, uvijek tražite više mišljenja.<br>

-- Ostavite **Komentar** (stručnu recenziju) i dajte svoje lično mišljenje.<br>
[**Forma za komentare**](https://docs.google.com/forms/d/e/1FAIpQLSfX6OicCuvvcd8ewY0_qqKlOzegljSMmSVX_KfGwtP89EF3AQ/viewform){:target="_blank"}<br>
(I pohvale i kritike su dobrodošle)<br>

-- Navedimo listu upućenih ljudi iz Bitkoin zajednice:<br>
Bitkoin i makro sistemi:<br>
&nbsp;- [Jeff Booth](https://www.jeffreybooth.com/){:target="_blank"},<br>
&nbsp;- [Luke Gromen](https://fftt-llc.com/about/){:target="_blank"},<br>
&nbsp;- [Lyn Alden](https://www.lynalden.com/){:target="_blank"},<br>
&nbsp;- [Nic Carter](https://niccarter.info/about/){:target="_blank"},<br>
Tech gurui:<br>
&nbsp;- [Andreas Antonopoulos](https://aantonop.com/){:target="_blank"} (strasteni zagovornik i autor),<br>
&nbsp;- [Jack Mallers](https://twitter.com/jackmallers){:target="_blank"} ([Strike](https://strike.me/){:target="_blank"}),<br>
&nbsp;- [Jameson Lopp](https://www.lopp.net/){:target="_blank"},<br>
&nbsp;- [Shinobi](https://bitcoinmagazine.com/authors/shinobi){:target="_blank"},<br>
Investitori:<br>
&nbsp;- [Michael Saylor](https://www.michael.com/){:target="_blank"} ([MicroStrategy](https://www.microstrategy.com/en){:target="_blank"}); ([Lex Podcast: Budućnost Novca](https://www.youtube.com/watch?v=mC43pZkpTec){:target="_blank"}),<br>
&nbsp;- [Jack Dorsey](https://twitter.com/jack/){:target="_blank"} ([Twitter](https://twitter.com/){:target="_blank"}, [Block](https://block.xyz/){:target="_blank"} [Square]),<br>
&nbsp;- [Elon Musk](https://www.forbes.com/profile/elon-musk/?sh=779e3e947999){:target="_blank"} ([Tesla](https://www.tesla.com/){:target="_blank"}),<br>
&nbsp;- [Cathie Wood](https://www.forbes.com/profile/cathie-wood/?sh=1e3081b47360){:target="_blank"} ([Ark Invest](https://ark-invest.com/){:target="_blank"}),<br>
Podkasteri:<br>
&nbsp;- [Peter McCormack](https://www.petermccormack.co.uk/){:target="_blank"} ([What Bitcoin Did](https://www.whatbitcoindid.com/){:target="_blank"});<br>
&nbsp;- [Matthew Kratter](https://www.bitcoinuniversity.com/about){:target="_blank"} ([Bitcoin University](https://www.youtube.com/@Bitcoin_University){:target="_blank"});<br>
&nbsp;- [Preston Pysh](https://twitter.com/PrestonPysh){:target="_blank"} ([Bitcoin's future global impact](https://www.youtube.com/@PrestonPysh){:target="_blank"});<br>
&nbsp;- [Natalie Brunell](https://twitter.com/natbrunell){:target="_blank"} ([Coin Stories](https://www.youtube.com/@nataliebrunell){:target="_blank"});<br>
&nbsp;- [Bram Kanstein](https://kanstein.co/){:target="_blank"} ([₿itcoin za Milenijce](https://www.youtube.com/@bramk){:target="_blank"});<br>
&nbsp;- [Robert Breedlove](https://twitter.com/Breedlove22){:target="_blank"} ([What is Money](https://www.youtube.com/playlist?list=PL2jAZ0x9H0bRvoNt1xNJWYa9_8_an03h0){:target="_blank"});<br>
&nbsp;- DVADESET JEDAN ([HUB 21 - The Belgrade Bitcoin Hub](https://www.youtube.com/@dvadesetjedan){:target="_blank"});<br>
&nbsp;- Galeb Nikačević ([Agelast - ECD (kriptovalute)](https://www.youtube.com/watch?v=l89maeYZAEE){:target="_blank"});<br>

-- Ostanite sa nama za naredne objave u vezi Marko i Lajtning mreži (*Lightning Network*).<br>
Poslije će biti i **Kviz** sa pitanjima. Za one koji daju sve tačne odgovore, nagrada će biti određena količina satoshi-ja putem *lightning* mreže.

 DODATAK<br>
**Odricanje odgovornosti**:<br>
-Mišljenja iznesena u ovoj publikaciji pripadaju isključivo autoru.<br>
-To ne predstavlja profesionalni finansijski savjet, više je kao istražni izvještaj.<br>
-Molimo uradite vlastito temeljno istraživanje uz dužnu pažnju (*due diligence*) prije donošenja bilo kakve finansijske odluke i nastavite s oprezom.<br>
**Otkrivanje**: Autor posjeduje nešto bitkoina.

**Reference** (izvor podatka ili dodatne info)<br>
-- Povezane su direktno u tekstu<br>
([**Lista svih web stranica**](https://docs.google.com/spreadsheets/d/e/2PACX-1vTMRkOg14mu8C1lofdZiV2Kvr6OWpi6spO5M8i7Km54-hgZnaYyhHuUK67F6pB4o3f3Mo0sBG_Kuts3/pubhtml?gid=0&single=true){:target="_blank"})<br>
-- Da izložimo često referencirane web stranice:<br>
[bitcoin.org](https://bitcoin.org/en){:target="_blank"}<br>
[bitcoinmagazine.com](https://bitcoinmagazine.com){:target="_blank"}<br>
[coinmarketcap.com](https://coinmarketcap.com){:target="_blank"}<br>
[wikipedia.org](https://en.wikipedia.org){:target="_blank"}<br>
[investopedia.com](https://investopedia.com){:target="_blank"}<br>
[mises.org](https://mises.org){:target="_blank"}<br>
[reddit.com](https://reddit.com){:target="_blank"}<br>
[youtube.com](https://youtube.com){:target="_blank"}<br>
[medium.com](https://medium.com){:target="_blank"}<br>
