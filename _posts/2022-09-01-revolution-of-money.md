---
title: "(r)Evolucija Novca"
date: 2022-09-01T00:00:00-00:00
categories: [fintech]
tags: [finance, crypto]
classes: wide
image: "/assets/images/evolution-of-money.jpg"
excerpt: "Uspon Bitcoin-a sa pričom o kripto industriji"
---

(*Novac i platni sistem sutrašnjice*)<br>
Uspon **Bitcoin-a** sa pričom o kripto industriji

Verzije: [*Pdf*](https://drive.google.com/file/d/1LBisCmUagkHRkRq3gD-cPm8rPFZlp4HY/view){:target="_blank"}<br>
LANG(jezik):<br>
[Globalni](https://infopedia.io/revolution-of-money) (en-us) / Lokalni (sr-latn-ba)

![evolution-of-money](https://raw.githubusercontent.com/borisdj/sr-latn/main/assets/images/revolution-of-money/evolution-of-money.jpg)

<center>QR Link</center>
![QR Link](https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=https://infopedia.io/revolution-of-money/)

**Sadržaj [C]**
{% raw %}
<script>
  var likesCounter = 0;
  var counterUrl = 'https://script.google.com/macros/s/AKfycbzZHMD7Y8gp04hSipbZqj0K8ThiV7fxHf0jZboXcfvU1saESYdk5PjyN6XNwMMCj8uv/exec?type=';
  document.addEventListener("DOMContentLoaded", function() {
    fetch(counterUrl + 'get').then(res => res.json()).then(out => document.getElementById('counterCell').innerHTML=likesCounter=out);
  });
</script>
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
{% endraw %}
| [Uvod](#introduction) |
| ------------------------------------- |
| [**1. Monetarne Hronike**](#monetary-chronicles) |
| [1.1 Početak Novca](#beginning-of-money) |
| [1.2 Skorija istorija](#recent-history) |
| [1.3 Moderno doba](#modern-age) |
| [1.4 Dosadašnji sažetak](#sum-it-so-far) |
| [**2. Bitcoin objašnjenje**](#bitcoin-explanation) |
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
| [**5. Gledajući naprijed**](#looking-forward) |
| [5.1 Budući razvoj](#future-development) |
| [5.2 Šta dalje](#what-lies-ahead) |
| [5.3 Praktični pristup](#practical-approach) |
| [5.4 Rekapitulacija](#recapitulation) |

## Uvod [[ToC](#toc)]
{: #introduction }
-- U tekstu koji slijedi govori se o novčanim sistemima prošlosti, postojećim u sadašnjosti, ali i budućoj perspektivi i mogućnostima. U futurističkom kontekstu, prva riječ koju treba spomenuti je **[Bitcoin](https://bitcoin.org/sr/)** (Bitkoin), ili kratko **BTC (₿)**. Da bismo ga objasnili, postoji fraza koja kaže: *To je odgovor, a da vidimo sada šta je pitanje*. Za bolje razumijevanje moramo prvo da shvatimo istoriju novca i trenutne monetarne sisteme.<br>
-- Diskusija je poduža kao i priroda tematike, pa je podijeljena na segmente radi lakšeg razumijevanja.
Nemojte se obeshrabriti ako vam materijal izgleda stran. Većina ljudi, u zavisnosti od nivoa poznavanja materije, trebaće da ga pročita nekoliko puta, pošto obiluje različitim informacijama. Takođe najbolje je da čitanje rasporedite na više dana, prespavate ga, nakon čega će se pojaviti mnoga pitanja. Za njih imate prijatelje i forume za razgovor, kao i blogove, članke i YT kanale / podkaste za slušanje. Takođe možete ostaviti komentar ili pitanje na dnu. I što više znate, više želite da saznate, takozvano *'Pad niz (Bitcoin) Zečju rupu'* (metafora za avanturu u nepoznato iz *Alise u zemlji čuda*). To će vas natjerati na razmišljanje, ali istovremeno i proširiti vaše vidike.<br> 
-- Ono što je važno je shvatiti ideju i osnove, i kako im pristupiti. Ne moraju svi da znaju sve tehničke detalje da bi ga koristili. Ali za one koji želje dublje da se upute u materiju neka procjena je da je potrebno najmanje [100 sati učenja](https://crypto--telegraphs-com.translate.goog/2022/06/22/100-hours-of-study-needed-to-understand-how-bitcoin-works/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([100 sati analize](https://hannahdo.medium.com/a-summary-from-my-100-hours-of-learning-about-bitcoin-9d6da7b8feea){:target="_blank"}) da bi se uronilo u ovu stvar. Jedan komičar je čak rekao:<br>
*"To je sve što ne razumijete o novcu u kombinaciji sa svime što ne razumijete o računarima".*<br>
Ali kako počnete da učite, posljedično ćete steći znanje o ekonomiji, informatici, matematici, filozofiji, politici, istoriji, pa čak i fizici.<br>
PS<br>
Rad je još uvijek u toku i treba nešto konačnog refaktorisanja, nemojte zamjeriti ako naiđete na neke preostale greške.

## <ins>1 Monetarne hronike</ins>
{: #monetary-chronicles }
### 1.1 Početak novca [[C](#toc)]
{: #beginning-of-money }
-- Kada su ljudi prešli sa lovaca-sakupljača na poljoprivredu i stočarstvo prije otprilike 10.000 godina, to je dovelo do specijalizacije u radu, veće produktivnosti i akumulacije viškova proizvoda. Ovo je omogućilo stvaranje većih naselja, gradova i na kraju država. To je takođe značilo da su ljudi mogli razmjenjivati (trampa) višak stvari koje su nabavili ili napravili, na primjer žitarice ili životinje, ali nije bilo lako odrediti vrijednost svakog predmeta niti ga podijeliti. Kredit je vjerovatno bio najstarije sredstvo trgovine, a trampa se razvila kasnije. Veće zajednice značile su da morate trgovati sa strancima i bila je potrebna neka osnova za povjerenje ([Dunbarov broj](https://sr.wikipedia.org/sr-el/%D0%94%D0%B0%D0%BD%D0%B1%D0%B0%D1%80%D0%BE%D0%B2_%D0%B1%D1%80%D0%BE%D1%98){:target="_blank"} - može se održavati samo oko 150 bliskih veza). Trebao im je sistem koji bi olakšao trgovinu. Zato je novac izmišljen i kako je nastao.<br>
-- U ranim danima koristile su se brojne stvari kao što su školjke posebnog izgleda, rijetko kamenje, itd. Postoji zanimljiva priča o [afričkoj trgovini staklenim perlama](https://www-africanodyssey-co-uk.translate.goog/blog/a-brief-history-of-glass-beads-in-africa?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ([zloupotreba hiperinflacije za trgovinu robljem](https://www-afrikapital-org.translate.goog/p/akori-beads-hyper-inflation-and-ancient?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) i još jedna o velikom kamenju [Jap naroda](https://www-npr-org.translate.goog/sections/money/2011/02/15/131934618/the-island-of-stone-money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=sr&_x_tr_pto=wapp){:target="_blank"}. Kamenje je bio primitivni kreditni sistem. Kasnije su došli metali i metalne kovanice, od bronze, srebra ili zlata. Ako se neko pita zašto su ovi materijali odabrani, najbolje je prvo definisati osobine novca ([Projekat novca](https://money-visualcapitalist-com.translate.goog/infographic-the-properties-of-money/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target= "_blank"}) pošto je apstraktan koncept:

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
| 2 | Djeljiv        | može podijeliti na manje jedinice                   |
| 3 | Prijenosan     | lako se prenosi i transportuje                      |
| 4 | Prihvatljiv    | univerzalno prepoznatljiv                           |
| 5 | Ograničena kol.| rijetkost (oskudica) održava stabilnu vrijednost    |
| 6 | Uniforman      | jedinice sposobne za međusobnu zamjenu (zamjenljiv) |
 
-- Očigledno **Zlato** je imalo kvalitete da ispuni većinu ovih uloga, ali nije savršeno, samo najbolje u tom trenutku, ili takoreći najmanje loše. Neki od nedostataka su bili: nije lako za nošenje - skup transport (niska prenosivost), teško se dijeli (potrebno istopiti) i opasnost od krađe i pljačke.<br>
-- Zbog toga su neki trgovci, kasnije privatne banke pa centralne banke počele držati zlato za ljude a davali im **sertifikate** koliko zlata imaju. Ljudi su tada koristili te potvrde, kao Potraživanje za robu, za trgovinu i tako je nastao **papirni novac** odnosno **novčanice** (mjenice - [IOU](https://www-investopedia-com.translate.goog/terms/i/iou.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} akronim od *'I owe you (Dugujem ti)'*) ili kolokvijalno **gotovina**. Ali loša strana je bila uvođenje posrednika kojima vjerovati. A istorija je puna primjera gdje je to povjerenje iskorišćavano iz raznih razloga, obično stvaranjem više novčanica / banknota nego što je bilo zlata za pokriće. To je dovodilo do bankrota privatnih banaka ili hiperinflacije od strane centralnih banaka, što je u oba slučaja rezultiralo istim ishodom, ljudi su izgubili svoju štednju i kupovnu moć. Banke mogu biti sa punim rezervama ili sa frakcionim rezervama. Jedna od prvih centralnih banaka bila je [Banka Amsterdama](https://en-wikipedia-org.translate.goog/wiki/Bank_of_Amsterdam?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*'Amsterdamsche Wisselbank'*) koja je osnovana davne 1609. godine. Na kraju je većina zemalja preuzela potpunu monetarnu kontrolu i dalji razvoj novca je zaustavljen.<br>

-- **Novac** je jezik, lingvistički i društveni konstrukt, koji se koristi kao sredstvo komunikaciju vrijednosti jedni drugima. To je također kolektivna i donekle izmišljena priča o vrijednosti, uz saglasnost većine. Dakle, nije inherentno vrijedan, mi (subjektivno) odlučujemo da mu damo zasluge. Ljudski rad se još uvijek obično mjeri radnim vremenom, tako da je novac također [Vrijeme, najvrjednija valuta](https://drtownsend-com.translate.goog/time-valuable-currency/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (jedna izgubljena sekunda ne može se otkupiti).<br>
-- Prema [Informacionoj teoriji novca](https://medium.com/the-bitcoin-times/information-theory-of-money-36247aebdfe1){:target="_blank"} cijene i tržište su zamršeno isprepleteni. Cijene odražavaju informacije, dok je novac mjerni štap, a informacije su decentralizovane. Dakle, centralizovani sistemi imaju nerješiv problem podataka zbog nedostatka svih potrebnih znanja cijelo vrijeme, što za rezultat ima ogromnu pogrešnu alokaciju kapitala.

[YT - Finance: The History of Money](https://www.youtube.com/watch?v=YCN2aTlocOw){:target="_blank"}
  
### 1.2 Skorija istorija [[C](#toc)]
{: #recent-history }
-- Sve do 19. vijeka srebrne kovanice su se uglavnom koristile kao lokalna valuta, dok se zlato koristilo samo za velike vrijednosti ili međunarodne transakcije. Definicija **Valute**: Mjera u određeno vrijeme i mjesto, sredstvo razmjene i zakonsko sredstvo plaćanja (mora biti prihvaćeno za odloženo plaćanje duga) sa jakim mrežnim efektom. Oko 1870. godine došlo je do prelaska na zlato jer je srebra postalo u izobilju, a kada nije rijetko ne može biti dobar novac. Tako je nastao takozvani ***'zlatni standard'*** u kojem su papirne novčanice bile pokrivene fizičkim zlatom. To je bio jedan od najstabilnijih i [prosperitetnih perioda](https://www-forbes-com.translate.goog/sites/nathanlewis/2013/01/03/the-1870-1914-gold-standard-the-most-perfect-one-ever-created/?sh=175b993e4a6a?_x_tr_sl%3Den&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp&_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>
-- Privremeno je suspendovan tokom Prvog svjetskog rata kada su zemlje, da bi finansirale ratne napore, morale da štampaju više novca od dozvoljenog. Takođe, bilo je izuzetaka od toga tokom Velike depresije. Vrijedno je pomenuti da su SAD (Sjedinjene Američke Države) [1933. godine zaplijenile sve zlatne](https://theconversation-com.translate.goog/how-the-us-government-seized-all-citizens-gold-in-1930s-138467?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} poluge i novčiće svojih građana i natjerao ih da ih prodaju ispod tržišne cijene.
Opet, tokom Drugog svjetskog rata novac je prekomjerno štampan i zlatni standard je napušten. Zatim 1944. godine, malo prije kraja rata, postojao je [Bretton Woods sporazum](https://www-investopedia-com.translate.goog/terms/b/brettonwoodsagreement.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} gdje su se 44 saveznika zemlje su se složile da koriste **USD dolar (USD - $)** kao svjetsku rezervnu valutu i za međunarodnu trgovinu i poravnanje. Razlog zašto je to bio američki dolar je taj što su SAD bile dominantna sila u to vrijeme, kako ekonomski tako i vojno, što je značilo da su imale najveći uticaj na svijet. Imali su i najveće rezerve zlata, svoje i od savezničkih zemalja, koje je tamo otpremano tokom Drugog svjetskog rata na čuvanje.<br>
-- Kasnije su SAD skliznule u ogroman budžetski deficit, uzrokovan prekomjernom domaćom potrošnjom i ratom u Vijetnamu, pa je najlakše rješenje bilo štampati više novca nego što je bilo zlata da bi se to podržalo. To je konačno dovelo do 1971. kada je američka vlada s *Richard Nixon*-om kao predsjednikom odlučila [napustiti zlatni standard](https://www-theguardian-com.translate.goog/business/2021/aug/15/rise-of-cryptocurrencies-can-be-traced-to-nixon-abandoning-gold-in-1971?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, što је značilo da se dolari ne mogu zamijeniti za zlato iz američkih rezervi. Nakon toga 1975. SAD su sklopile dogovor sa zemljama koje su glavni proizvođači **Nafte**, [dogovor sa Saudijskom Arabijom](https://www.bloomberg.com/news/features/2016-05-30/the-untold-story-behind-saudi-arabia-s-41-year-u-s-debt-secret){:target="_blank"} na prvom mjestu, da prodaju primarnu energetsku robu u američkim dolarima. Zauzvrat, SAD će im pružiti vojnu zaštitu i osigurati da morski putevi budu sigurni za tankere, uz pomoć mornarice. Tako je nastao pojam **Petrodolari**, nezvanični sistem ili jednostavno globalna praksa u kojoj su dolari bili poželjni jer su se lako mogli zamijeniti za prijeko potrebne barele nafte. Neki bi rekli da su dolari podržani sirovom naftom, najvažnijim resursom 20. vijeka. U narednim decenijama SAD su izvozile inflaciju u ostatak svijeta dok su uvozile stvarnu robu.<br>
 
### 1.3 Modern age [[C](#toc)]
{: #modern-age }
-- U savremenom dobu novac je postao digitalniji, u suštini samo broj u računarima privatnih i centralnih banaka, kao i u **Svjetskoj banci** i **MMF** (*Međunarodnom monetarnom fondu*). Prva stvar je da se <ins>većina novca danas kreira kao **Dug**</ins> ([*Kreditna teorija novca*](https://en-wikipedia-org.translate.goog/wiki/Credit_theory_of_money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} - *Kreiranje kredita*). U suštini, kad god neko dobije kredit od banke za automobil ili kuću ili bilo šta drugo, banka samo ukuca taj iznos u kompjuter i stvara se novi novac dok se cjelokupna novčana masa povećava. Ipak, kada se dug otplati, taj novac se uništava ili u izvjesnom smislu briše.<br>
-- Dakle, u teoriji ovo bi moglo biti stabilno, tako da se ekonomska proizvodnja jedne zemlje mapira sa potražnjom za kreditima, dok se ponuda novca ispravno balansira. Međutim, u praksi nikada ne bude tako, već vještačko guranje kredita, tržišta novca, vladine agende, itd. ga čine nestabilnim i podložnim korupciji i krizama sa jedinim rješenjem uvijek da se naduva/poveća novčana masa. Iskušenje da koristi štampač novca je jednostavno neodoljivo.<br>
-- Čak i u [rimsko doba](https://www-worldhistory-org.translate.goog/Roman_Coinage/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} zlatni i srebrni novčići su, na zahtjev careva, povremeno obezvrijeđivani topljenjem i ostavljanjem manjih količina plemenitog metala. Na kraju bi novčići postali potpuno bezvrijedni, a [finansijska dekadencija](https://www-visualcapitalist-com.translate.goog/currency-and-the-collapse-of-the-roman-empire/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} bila je jedan od razloga zbog kojih se imperija urušila. Takođe, kovanice su se ponekad sjekle i grebale od strane lopova. Kako bi se spriječilo [odsjecanje](https://historyhouse-co-uk.translate.goog/articles/coin_clipping.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, savremene kovanice obično imaju rebraste ivice (usječene linije po obodu), što je praksa protiv falsifikovanja osmišljena od strane Isak Njutna (*Isaac Newton*) koji je u to vrijeme bio upravnik Kraljevske kovnice.<br>

**Primjeri krize:**<br>
&nbsp;**1.** Nedavni događaj koji je izazvao preštampavanje bila je [<ins>Ekonomska kriza 2008.</ins>](https://www-thebalancemoney-com.translate.goog/2008-financial-crisis-3305679#toc-how-it-could-happen-again?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koju su djelimično [kreirale banke](https://www-thebalancemoney-com.translate.goog/what-caused-2008-global-financial-crisis-3306176?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} dajući previše rizičnih kredita za nekretnine pokrivene samo hipotekama. A kada se sve srušilo, vlada je samo doštampala još novca da to pokrije. Izgovor je bio da bi puštanje svih tih banaka u propast urušilo cijelu ekonomiju i SADa i ostatka svijeta. Ali ipak su svi ljudi platili za loše ponašanje banke, dok su menadžeri tih banaka u isto vrijeme dobili [ogromne bonuse](https://www.nytimes.com/2009/07/31/business/31pay.html){:target="_blank"}. Korupcija na Wall Streetu je razotkrivena sa Plaćanje za tok naloga ([*Payment for Order Flow*](https://a16z-com.translate.goog/2021/02/17/payment-for-order-flow/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) ispod pulta i [šortanjem](https://www-investopedia-com.translate.goog/terms/s/shortselling.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u sivoj zoni - [*Short and Distort*](https://www-investopedia-com.translate.goog/articles/analyst/030102.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (Hedž fondovi [pod istragom](https://news-bloomberglaw-com.translate.goog/securities-law/hedge-funds-ensnared-in-expansive-doj-probe-into-short-selling?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}).<br>
Postoje zanimljivi filmovi o ovoj temi i vezi sa *Wall Street*-om kao što su: *Opklada vijeka* ([*The Big Short*](https://www-imdb-com.translate.goog/title/tt1596363/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) i *Poziv za marginu* ([*Margin Call*](https://www-imdb-com.translate.goog/title/tt1615147/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}). Oni objašnjavaju derivate kao što su [**CDO**](https://corporatefinanceinstitute-com.translate.goog/resources/knowledge/trading-investing/collateralized-debt-obligation-cdo/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Collateralized Debt Obligation* - Obveza sa zalogom duga) i [sintetičke](https://www-investopedia-com.translate.goog/terms/s/syntheticcdo.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} vrste, složeno strukturiran finansijski proizvod, sa obveznicama drugorazrednih hipoteka (rizični stambeni krediti dati pojedincima sa lošom ili nikakvom kreditnom istorijom) koji su korišćeni za klađenje.<br>
&nbsp;**2.** Drugi još veći primjer bila je <ins>Pandemija Covid-19</ins> tokom 2020/2021. godine koja je rezultirala štampanjem novog dodatnog [40% ukupnog novca](https://techstartups-com.translate.goog/2021/05/22/40-us-dollars-existence-printed-last-12-months-america-repeating-mistake-1921-weimar-germany/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} koji postoji. Kao rezultat toga, sada se suočavamo s prijetnjom [Stagflacije](https://www-cnbc-com.translate.goog/2022/06/21/what-stagflation-is-and-how-to-prepare-for-it.html?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){: target="_blank"}, stopa inflacije raste, a ekonomski rast i zaposlenost opadaju.<br>

-- U suštini postoje 2 vrste novca: zasnovanog na robi i zasnovanog na kreditu. **Fiducijarni medij** je novac koji izdaje treće lice, na primjer neka banka, i to je oblik kredita.<br>
-- Gotovo sav novac danas je [FIAT](https://www-britannica-com.translate.goog/topic/fiat-money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, proglašen vladinom uredbom i nije podržan fizičkom robom. Određuje ga autoritet, stvoren da bude zakonsko sredstvo plaćanja (sa njim se plaćaju porezi kao vrsta duga), a nameće se silom (Politika -> Policija). Zasnovano na **Povjerenju** koje je često izdano i podržano samo obećanjem, ponekad se naziva Fiat prevara. Fiat je vještački novac iz 'čekovne knjige' koji takođe ograničava stvarnu proizvodnju ([Ekonomija bez radosti](https://underconsumed-medium-com.translate.goog/the-joyless-economy-1976-tibor-scitovsky-17da683764ee?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} ).<br>
-- Neki smatraju da je štampanje novca ([*'fiat rudarenje'*](https://bitcoininfoqus.com/fiat-mining/){:target="_blank"}) [**UBI**](https://en-wikipedia-org.translate.goog/wiki/Universal_basic_income?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Univerzalni osnovni prihod*) ali za bogate. Pošto je novi novac rutinski prvo dostupan ljudima bliskim onima na vlasti ([Cantillon efekat](https://whatismoney-info.translate.goog/cantillon-effect-bitcoin/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) i onima koji ga već imaju jer mogu uzeti velike kredite i posjedovati imovinu osim gotovine koja je više otporna na inflaciju.<br>
-- Način na koji zemlja može dobiti više novca za budžetsku potrošnju je da Trezor izdaje obveznice, a **Centralna banka** (*CB*) štampa tu količinu novca i kupuje te obveznice. U američkom slučaju to je [**FED**](https://www-federalreserve-gov.translate.goog/aboutthefed/structure-federal-reserve-system.htm?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (*Sistem federalnih rezervi* - [istorija](https://www-federalreserveeducation-org.translate.goog/about-the-fed/archive-history/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), čije [osnivanje](https://www-stlouisfed-org.translate.goog/open-vault/2020/july/how-hamilton-laid-foundation-for-federal-reserve?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je postavio [Alexandar Hamilton](https://www-history-com.translate.goog/topics/american-revolution/alexander-hamilton?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}. Danas većina novca nije u obliku papirne gotovine već je digitalni. Stvaranje novog novca je jednostavno upisivanje cifara na računarima banaka koje se čuvaju u bazi podataka.<br>

-- Takođe, monetarni alati i sistemi su veoma složeni. Neki tvrde da je namjerno kako bi ga zamaglili i učinili manje transparentnim i nejasnim da bi što manje ljudi prigovaralo na sam sistemu. Jedan od mehanizama za štampanje je Kvantitativno popuštanje ([**QE-Quantitative Easing**](https://www-forbes-com.translate.goog/advisor/investing/quantitative-easing-qe/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), gdje banke imaju pravo na izdavanje kredita, odnosno štampanje novca, na osnovu depozita koje imaju, u omjeru 1:10 ili čak i više (Bankarstvo s frakcionim rezervama - [Fractional Reserve Banking](https://www-investopedia-com.translate.goog/terms/f/fractionalreservebanking.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}). Suprotna politika poznata je kao **Kvantitativno zatezanje**. Dok Fiat sistem CB-a stvara masivne produžene kredite sa užasnim posljedicama, Fractional Banking je različit i nije nužno loš. Definišimo i termin 'bazna tačka' (*base point*) koja iznosi 1/100 dio procenta ili 0,01 %, koji se često koristi kada se navode kamatne stope CBa.<br>
-- Nije samo centralna banka ta koja štampa novac već i komercijalne širom svijeta. Uvedimo sada pojam 'eurodolara' ([**Eurodollar**](https://www-investopedia-com.translate.goog/terms/e/eurodollar.asp?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}) - depozit u dolarima u stranim bankama ili filijalama američkih banaka izvan SAD (uglavnom u Evropi). Zaslužuju pažnju jer ne podliježu propisima niti obaveznim rezervama. U tom smislu, teško je čak i tačno znati ukupnu količinu novca koja postoji ([sav novac svijeta](https://www.visualcapitalist.com/all-of-the-worlds-money-i-tržišta-u-jednom-vizualizacija-2020/){:target="_blank"}).<br>
-- Osim toga, postoje različiti slojevi novca:<br>
-M1 = osnovni novac (gotovina u opticaju, tekući i štedni računi, čekovi)<br>
-M2 = M1 + fondovi tržišta novca<br>
-M3 = M2 + ostali finansijski instrumenti<br>

**Povjerenje**<br>
je pouzdan odnos s nepoznatim, društveni ljepak koje premošćuje jaz:<br>
`Poznato` <---> POVJERENJE <---> `Nepoznato`<br>
To je valuta interakcija.<br>
Način da se izgradi više povjerenja je da budete transparentniji i s vremenom postanete vjerodostojni (imati reputacijski kapital).<br>
U posljednje vrijeme mogli smo primijetiti [kršenje povjerenja](https://www-youtube-com.translate.goog/watch?v=GqGksNRYu8s?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u mnogim oblastima kao što su:<br>
&nbsp;1. [Hakovanje telefona News International](https://en-wikipedia-org.translate.goog/wiki/News_International_phone_hacking_scandal?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
&nbsp;2. [Globalna finansijska kriza dovela do zatvaranja samo jednog bankara](https://features-marketplace-org.translate.goog/why-no-ceo-went-jail-after-financial-crisis/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
&nbsp;3. [Skandal s emisijom Volkswagen-a](https://hbr-org.translate.goog/2015/09/what-vw-didnt-understand-about-trust?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}<br>
&nbsp;4. [Panamski dokumenti koji pokazuju kako moćni političari iskorištavaju offshore poreski režim](https://www-dw-com.translate.goog/en/panama-papers-reveal-how-the-rich-hide-money-offshore/a-19161658?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target= "_blank"<br>
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

-- Do nedavno, berze su bile jedan od načina zaštite od inflacije, ali i to je bilo samo za malu manjinu (samo oko 10% ljudi ima značajnu štednju u akcijama). Trenutno kripto valute - digitalni tokeni, tačnije BTC, smatraju se još jednim načinom zaštite ([protivotrov za inflaciju](https://www-bitira-com.translate.goog/bitcoin-antidote-inflation/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}), i bolji u određenim aspektima. Takođe, vremenski ja zahtjevno pratiti sve informacije o berzama, i obični ljudi teško mogu biti u toku sa raznim finansijskim instrumentima koje koriste profesionalni investitori.<br>
-- Zlato je bilo još jedno sigurno utočište, a neki su ga danas zagovornici istog, takozvane 'zlatne bube', uprkos njegovim nesavršenim karakteristikama. Tokom 2000-ih postojali su čak i elektronski sistemi zlata, poput ['e-zlata'](https://en-wikipedia-org.translate.goog/wiki/E-gold?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}, ali su bili centralizirani i na kraju zabranjeni od strane vlade. Zbog toga se BTC smatra **Digitalnim zlatom** ili **Zlatom 2.0** jer ima mnogo dobrih osobina zlata, ali istovremeno popravlja one loše. Zato je Bitcoin bio <ins>inovativno **Rješenje** problema</ins> kako imati **tvrd ili zdrav novac** koji se ne može preštampati i koji je takođe praktičan za upotrebu. Programiran je da oponaša stabilnu stopu inflacije zlata. Baš kao što se zlato ne mijenja mnogo, mreža bi trebala raditi nekoliko decenija bez suštinskih promjena.<br>
-- Priznati austrijski ekonomista [**Ludwig von Mises**](https://mises-org.translate.goog/profile/ludwig-von-mises?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} u svojoj knjizi *"Teorija novca i kredita " (1912.)* argumentuje da [**zdrav novac**](https://oll-libertyfund-org.translate.goog/quote/ludwig-von-mises-argues-that-sound-money-is-an-instrument-for-the-protection-of-civil-liberties-and-a-means-of-limiting-government-power-1912?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} je: *"instrument za zaštitu građanskih sloboda i sredstvo ograničavanje moći vlade. Takođe je uobičajeno korišćeno sredstvo razmjene i metoda za sprječavanje sklonosti vlade da se miješa u valutni sistem.*" Detaljnije objašnjenje možete pronaći u članku [Bitcoin i teorija novca](https://mises-org.translate.goog/wire/bitcoin-and-theory-money?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}.<br>

-- Drugo pitanje je cenzura koju vlade i banke mogu sprovesti. To se moglo primijetiti u nekim autokratskim ili autoritarnim zemljama za opoziciju, ali i u demokratskim. Na primjer [kanadske kamiondžije](https://www-nasdaq-com.translate.goog/articles/frozen-bitcoin-tied-to-canadian-protests-lands-at-coinbase-crypto.com?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} čiji bankovni računi su zamrznuti zbog protesta protiv pandemije, (politički korektan) način da se ućutka opozicija. **Kriptovaluta** rješava i ovo jer može raditi bez posrednika (bez povjerenja) i ne zahtijeva stranu od povjerenja (***Novac ne treba da se naoruža, nikada!***). Pored toga, omogućava besprijekorne transakcije preko granica. Sa liberalnim pogledom na svijet i djelimično [libertarijanskom filozofijom](https://www-coindesk-com.translate.goog/tech/2021/02/04/crypto-is-the-libertarian-cheat-code-in-the-final-battle-over-state-coercion/?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"} (eliminisati državnu prinudu) dio njegove misije je **razdvajanje novca i države**. Nikada nećemo imati pristojan novac prije nego što vladi oduzmemo monopol (učiniti vladu manjom, a ljude većima).<br>
-- Fiat je omogućio državama da vode rat sve dok im ne ponestane svo bogatstvo građana. Prije papirnih valuta, vlade bi ubrzo ostale bez borbenih kapaciteta jer bi se stanovništvo pobunilo protiv poreza zbog nepopularnih ratova. Ima onih koji smatraju da su razlozi zbog kojih je "mali rat u srednjoj Evropi" 1914. eksplodirao u "prvi globalni rat u ljudskoj istoriji" bili monetarni, a ne geopolitički ([Od fiat-a do kripta](https://link-springer-com.translate.goog/chapter/10.1007/978-3-030-71400-0_1?_x_tr_sl=en&_x_tr_tl=bs&_x_tr_hl=en&_x_tr_pto=wapp){:target="_blank"}).<br>
-- Sve u svemu, upravljanje novcem i intervencije od strane države u većini slučajeva su urađene na pogrešan način.<br>
Čak i oni s dobrim namjerama često su imali loše rezultate:<br>
&nbsp;-Pokušaju da se učini dobro, nesavršeno i često stvore više štete nego koristi<br>
&nbsp;&nbsp;(*"Vladno rješenje problema obično je jednako loše kao i problem"* - M. Friedman)<br>
&nbsp;-Kada je plaćano inflacijom, nenamjerno uruši valutu<br>
&nbsp;-Pogrešno odmjere obim monetarne politike dok podcijene troškove<br>

 ____ **DALJI PREVOD JOS U TOKU ...** ____
 
## <ins>2. Bitcoin objašnjenje</ins>
{: #bitcoin-explanation }
### 2.1 Kako je sve počelo [[C](#toc)]
{: #how-it-all-started } 
-- With the beginning of the Internet, information sharing via forums and mails also enabled global spread of ideas. Important movement in this regard was [*Crypto-anarchism*](https://en.wikipedia.org/wiki/Crypto-anarchism){:target="_blank"} as a political ideology ([ideological origin](https://fee.org/articles/the-ideological-origins-of-bitcoin/){:target="_blank"}) focusing on protection of privacy, political and economic freedom.<br>
-- [*'The Crypto Anarchist Manifesto'*](https://libinst.cz/wp-content/uploads/2020/08/havel.pdf){:target="_blank"} was one of the first written papers that articulated this idea, written by [*Timothy C. May*](https://nakamotoinstitute.org/authors/timothy-c-may/){:target="_blank"} in 1988 and shared at a Crypto conference ([*'Arise, you have nothing to lose..'*](https://groups.csail.mit.edu/mac/classes/6.805/articles/crypto/cypherpunks/may-crypto-manifesto.html){:target="_blank"}). Document introduced the basic principles of crypto-anarchism, encrypted exchanges ensuring total anonymity, absolute freedom of speech, and full freedom to trade. Another similar work at the time was [*'A Cypherpunk's Manifesto'*](https://www.activism.net/cypherpunk/manifesto.html){:target="_blank"} for privacy by mathematician [*Eric Hughes*](https://academy.bit2me.com/en/quien-es-eric-hughes/){:target="_blank"} ('cypher' derived from CYber and ciPHER). Later in 1992 a specific mail group called ***'Cypherpunks Mailing List'*** was started and by 1994 had around 1000 subscribers. They were considering using **cryptography** to make digital (virtual) **Decentralized** money.<br>
-- US Intelligence services like NSA (*National Security Agency*), because of their spying programs, even tried to limit use and export of cryptographic tools. Those attempts were known as [Crypto Wars](https://en.wikipedia.org/wiki/Crypto_Wars){:target="_blank"}, that privacy advocates opposed with Free speech rights.<br>
NSA still has systems like [PRISM](https://www.theverge.com/2013/7/17/4517480/nsa-spying-prism-surveillance-cheat-sheet){:target="_blank"} ([prism-break](https://prism-break.org/en/){:target="_blank"}), a worldwide surveillance programme, that was exposed by whistleblower Edward Snowden. Even [Julian Assange](https://theconversation.com/a-new-book-argues-julian-assange-is-being-tortured-will-our-new-pm-do-anything-about-it-183622){:target="_blank"}, the WikiLeaks founder, previously warned about such monitoring. And both of them had become most-wanted whistleblowers by the US government.<br>
-- Just like there were torrent (data stream) networks for P2P Peer-to-Peer file sharing (music, films e.g. [Napster](https://en.wikipedia.org/wiki/Napster){:target="_blank"}, [BitTorrent](https://en.wikipedia.org/wiki/BitTorrent){:target="_blank"}) this was imagined to be a network for digital value. Leading Big Tech companies are networks as well: Google - information; Facebook - social; There is also browser for privacy called [TOR](https://www.torproject.org/download/){:target="_blank"} abbreviation from [The Onion Rooting](https://en.wikipedia.org/wiki/Tor_(network)){:target="_blank"}.<br>

-- 2 remarkable economists, both Nobel laureate, even predicted the rise of Bitcoin:<br>
&nbsp;1. [**Friedrich A. Hayek**](https://en.wikipedia.org/wiki/Friedrich_Hayek){:target="_blank"} in his Book [*'The Denationalization of Money'*](https://www.sothebys.com/en/articles/the-economist-who-predicted-bitcoin){:target="_blank"} *(1976)* argued for the end of the government’s monopoly on currency, and in one [interview](https://www.youtube.com/watch?v=EYhEDxFwFRU&t=1118s){:target="_blank"} (first 3 min) in 1984 said:<br>
*"Govs mostly abuse money and have stop its improvement, also Monetary policy has done only harm. We can’t take it violently out of the hands of government. All we can do is by some sly, roundabout way introduce something they can’t stop."*<br>
-He was proponent of [Austrian School](https://en.wikipedia.org/wiki/Austrian_School){:target="_blank"} of economic thought (more free market, less government control).<br>
-On the [opposing pole](https://www.nytimes.com/2011/10/23/business/keynes-hayek-views-origins-of-an-economics-debate-review.html){:target="_blank"} was [John Maynard Keynes](https://en.wikipedia.org/wiki/John_Maynard_Keynes){:target="_blank"} who was flag bearer of vigorous government intervention in the markets. His view was widely followed throughout the 20th century by many countries ([Keynesian economy](https://www.imf.org/external/pubs/ft/fandd/2014/09/basics.htm){:target="_blank"}).<br>
&nbsp;2. [**Milton Friedman**](https://en.wikipedia.org/wiki/Milton_Friedman){:target="_blank"} in 1999 [stated](https://www.youtube.com/watch?v=j2mdYX1nF_Y){:target="_blank"}:<br>
*"Internet is going to be one of the major forces for reducing the role of government. The one thing that's missing, that will soon be developed, is the reliable e-cache"*.<br>

-- One of the pioneers in the field and outstanding cryptographer is *David Chaum*, called the godfather of crypto. He was first to propose a blockchain-like protocol in his 1982 dissertation *'Computer Systems Established, Maintained, and Trusted by Mutually Suspicious Groups'*. In 1995 his company DigiCash created the first electronic ***'eCash'*** system. DigiCash eventually failed because it entered the market before e-commerce was fully integrated within the Internet. Still some consider it partial predecessor of cryptocurrencies.<br>
-- Relevant person to mention here is [*Nick Szabo*](https://learn.saylor.org/mod/book/view.php?id=30735&chapterid=6704){:target="_blank"}, a computer engineer and legal scholar. In 1998 he designed a mechanism for a decentralized digital currency he called ***'BitGold'***. It was never implemented but has been called *'a direct precursor to the Bitcoin architecture'* since it was one of the earliest attempts at creating a decentralized virtual currency. In the [*Bit Gold*](https://coincentral.com/what-is-bit-gold-the-brainchild-of-blockchain-pioneer-nick-szabo/){:target="_blank"} architecture, a participant would dedicate computer power to solving cryptographic puzzles. He is also credited with pioneering the concept of **Smart Contracts**.<br>
-- Near the end of 2008 an anonymous person under the pseudonym of ***Satoshi Nakamoto*** published a White Paper named: [**BITCOIN: A Peer-To-Peer E-Cache System**](https://bitcoin.org/bitcoin.pdf){:target="_blank"} he designed. Definition of term **White Paper**: a report or guide that informs readers concisely about a complex issue and presents the issuing body's philosophy on the matter. The Paper itself references several other works written in decades before it, and it was first sent to the cypher mailing list.<br>

-- At the same time domain [*'bitcoin.org'*](https://bitcoin.org/){:target="_blank"} was registered through [*'anonymousspeech.com'*](https://www.businessinsider.com/swiss-software-developer-bitcoin-2014-4){:target="_blank"} using a prepaid card that can be bought with cash at any local store so it is untraceable. Decision to use an alias and hide his identity was done in order to be unknown to the government but also probably to keep the network decentralized, meaning there is no single founder. Majority of people involved consider not having a leader to be a feature, not a bug, since the main purpose of the network is to be decentralized.<br>
--In 2009 a post on the P2P foundation forum was written with additional explanation of the system. In the same year an [**Open Source**](https://www.redhat.com/en/topics/open-source/what-is-open-source){:target="_blank"} implementation of the protocol was made, written in [C++](https://www.w3schools.com/cpp/cpp_intro.asp){:target="_blank"} programming language, and source code is currently hosted on [**GitHub**](https://github.com/bitcoin/bitcoin){:target="_blank"} code repository. These events unfolded just after the [2008 Economic Crisis](https://www.businessinsider.com/personal-finance/what-caused-the-great-recession){:target="_blank"}, which seems to be the trigger. In first/genesis block there is encoded reference to London Times magazine article:<br>
*"[The Times 03/Jan/2009](https://cdn.codeforgeek.com/wp-content/uploads/image_01_01.jpeg.webp){:target="_blank"} - [Chancellor on brink of second bailout for banks](https://www.cityam.com/chancellor-on-the-brink-its-not-what-you-think/){:target="_blank"}".*<br>

| BTC [logo](https://cointelegraph.com/news/the-btc-origin-story-who-designed-the-bitcoin-logo){:target="_blank"} | 
![bitcoin_logo](https://raw.githubusercontent.com/borisdj/borisdj.github.io/master/assets/images/revolution-of-money/bitcoin_logo32.png) |

-- Receiver of the first BTC transaction and early contributor to the network was a computer scientist named *Hal Finney*. He was an American developer who worked for [**PGP**](https://www.openpgp.org){:target="_blank"} (*Pretty Good Privacy*) - first free implementations of public-private key encryption for (email) communication. He also ran the first cryptographically based anonymous remailer and was involved with the cypherpunks mailing list. Among notable cryptographers and programmers whose work was cited in the BTC paper were *Wei Dai* ([***B-money***](https://www.investopedia.com/terms/b/bmoney.asp){:target="_blank"}) and British *Adam Back* ([***Hashcash***](http://www.hashcash.org/){:target="_blank"}) who today is CEO of [**Blockstream**](https://blockstream.com){:target="_blank"}. All four of them were part of [The Cypherpunks](https://nakamoto.com/the-cypherpunks/){:target="_blank"} community and [movement](https://www.horizen.io/blockchain-academy/history/the-cypherpunk-movement/){:target="_blank"} and noteworthy members of the mail list, but also early contributors to the Bitcoin project.<br>
-- So Satoshi could be any of them or someone else, maybe even more than one person, small team. It might always [remain a mystery](https://academy.bit2me.com/en/quien-ha-creado-bitcoin/){:target="_blank"} but in the end it doesn't matter, the important thing is the result and the network itself. Initial improvements to the first website were done by [*Martti Malmi*](https://academy.bit2me.com/en/who-is-martti-malmi/){:target="_blank"}, a [student from Finland](https://www.theverge.com/2015/6/10/8751933/the-shy-college-student-who-helped-build-bitcoin-into-a-global){:target="_blank"}.
In the following years several persons were incorrectly suspected or falsely claimed to be Satoshi.<br>
-- Creator of BTC Satoshi, at the end of 2010, made the last post that stated: *There is more work to be done...*. and since then, he has not made any known contact. Today we see that the project continued, and it became a game-changing product on a global scale. In the meanwhile, contributor *Gavin Andresen* became the lead developer till 2014 when *Wladimir van der Laan* from Amsterdam took over.<br>
-- One peculiar note: First real-world Btc transaction was in May of 2010 for two large pizzas that were paid 10,000 BTC (consider current value of those - hundreds of millions $)<br>

[The history of the cypherpunks](https://www.coindesk.com/markets/2016/04/09/bitcoin-and-the-rise-of-the-cypherpunks/)<br>
![cypherpunks](https://raw.githubusercontent.com/borisdj/borisdj.github.io/master/assets/images/revolution-of-money/cypherpunks.jpg)

### 2.2 Prošireni opis [[C](#toc)]
{: #technical-background }
-- From an engineering aspect Bitcoin protocol is a masterpiece software. We could see that the compelling idea has been circulating for some time and several components of it already existed. But nevertheless, integrating it all into a functional unit was done ingeniously. Hats down to Satoshi whoever he / she or they be, for the first full implementation of the idea, while being a truly visionary. Also, the timing was just right. Firstly, the internet and cryptography were sufficiently developed. Secondly the political and economic situation was fertile as well, inspiration came from revolt. Also, to define a word **Bit** (binary digit) - the smallest unit of data that a computer can process and store, whose value can be 0 or 1. <br>
-- Let's jump to the point:<br>
Bitcoin has a **Ledger** of transactions, which is a list stored in a database that is not centralized in one server but distributed on multiple computers called **Nodes** around the world. Ledger essentially enables reliable spreadsheet with Balances. It's like immutable record that can't be counterfeited. New transactions, up to 2000 of them, are on average every 10 minutes grouped into a **Block** 1 MB in size that is added to the ledger. Each block is connected to previous ones by hash code that is not easy to find. That's why this structure is called **Blockchain**, multiple blocks connected in a line, and it's what underpins the system. It can be used for [solving other problems](https://101blockchains.com/problems-blockchain-solve/){:target="_blank"} as well.<br>
![Blockchain](https://raw.githubusercontent.com/borisdj/borisdj.github.io/master/assets/images/revolution-of-money/blockchain.jpg)

| PROPERTIES   | of BLOCKCHAIN (type of DLT - Distributed Ledger Technology)               |
| ------------ | ------------------------------------------------------------------------- |
| Programmable | i.e. Smart Contracts                                                      |
| Secure       | all records are individually encrypted                                    |
| Anonymous    | the identity of participants is unknown, either fully or pseudo hidden    |
| Unanimous    | most of network participants agree to the validity of each of the records |
| Distributed  | all participants have a copy of the ledger for complete transparency      |
| Immutable    | any validated records are irreversible and cannot be changed              |
| Time-stamped | a transaction timestamp is recorded on a block                            |

From functional viewpoint is can be defined as the Great Chain of being sure about things.
3 pillars of blockchain technology are: Decentralization, Transparency (Auditability), Immutability.

-- [**Hash**](https://en.wikipedia.org/wiki/Hash_function){:target="_blank"} is a cryptographic function that converts longer text into a relatively unique code of fixed length, but reverse cannot be done in any practical time. This characteristic is used to do the so-called **Mining**, virtual one of course, a term taken from the gold industry. That work consists of trying an enormous number of combinations to find one where hash begins with several [leading zeros](https://www.investopedia.com/tech/how-does-bitcoin-mining-work/#toc-the-mining-process){:target="_blank"} (000...). Some like to draw analogy with [Sudoku puzzle](https://steemit.com/bitcoin/@abhi3700/crypto-thoughts-ct-5-bitcoin-mining-analogy-sudoku-puzzle){:target="_blank"}. All miners are competing to find it and when one does then a new block is finished, synced across the network, and he also gets the reward of a certain amount of newly created coins.<br>
--In the long term based on statistics, every miner should get approximately equal sum, while on the other side they have spent electric power. Based on the number of participants, the algorithm adjusts the difficulty level to keep it always around 10 minutes. It's done in a way that when there are more miners leading to more hash power difficulty increases which makes it harder to find a solution. This process is called **PoW *(Proof of Work)***, the term is self-explanatory, that consists of defined rules. The [**Nakamoto Consensus**](https://medium.com/nakamo-to/nakamoto-consensus-21cd304f96ff){:target="_blank"} is a set of rules that verifies the authenticity of a blockchain network. It is using a combination of the proof-of-work [consensus algorithm](https://coinmarketcap.com/alexandria/article/what-is-the-nakamoto-consensus){:target="_blank"} (consensus rules) on a [**BFT**](https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft){:target="_blank"} peer-to-peer network (BFT - *Byzantine Fault Tolerance* that solves *Byzantine Generals Problem* a situation in which majority of actors must agree on a coordinated strategy).<br>
-- Another important thing to elaborate is [**PKI**](https://www.keyfactor.com/resources/what-is-pki){:target="_blank"} (*Public Key Infrastructure*), which is used here to sign digital info with a private key so others can confirm the signature using the public key, usually packed into a **Digital Certificate**. It ensures that no one can spend coins not belonging to them if they do not have the code aka private key. PKI is usually using [***RSA* algorithm**](https://www.geeksforgeeks.org/rsa-algorithm-cryptography/){:target="_blank"} which is based on mathematical inability for large number factorization, to effectively find Prime factors. RSA can be used for digital encryption (hidden data) or for digital signature (ensures data integrity, authentication, and non-repudiation). Others algorithms include *Diffie-Hellman* and *Elliptic curve* ([discrete logarithm problem](https://www.researchgate.net/publication/220784858_The_Elliptic_Curve_Discrete_Logarithm_Problem_State_of_the_Art){:target="_blank"}).<br>
![PKI](https://raw.githubusercontent.com/borisdj/borisdj.github.io/master/assets/images/revolution-of-money/pki.png)

-- Combination of these elements makes entire process quite intriguing and at the same time gives several positive consequences:<br>
&nbsp;1. Prevents double spending - Digital Scarcity for the first time<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (original in virtual realm that could not be copied, a groundbreaking innovation)<br>
&nbsp;2. Guaranties integrity and security<br>
&nbsp;3. Gives proper economic incentives to people using and maintaining the network<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Positive Feedback Loop: higher price, more attention, bigger demand)<br>
-- It also makes good distribution throughout time with descending inflation, since reward generated with mining is halved every 4 years. Maximum number of coins is limited to [**21 million**](https://decrypt.co/34876/why-is-bitcoins-supply-limit-set-to-21-million){:target="_blank"} (hard cap) that would be reached in **year 2140** according to estimates. Currently, in 2022 almost 19 million is already created, about 90 %. When reward of new coins shrinks, transaction fee will remain for the miners. Some coins in early adoption period were lost due to [owners losing key](https://www.businessinsider.com/james-howells-threw-away-bitcoin-dump-masterplan-get-back-2022-7){:target="_blank"} and Satoshi mined almost 1 million coins that were never moved from initial address. One estimate is that owners have misplaced almost 20 % of all existing tokens, which makes it even more scarce. Some have been wondering why specific amount of 21 million exactly was chosen for max number. The nominal quantity is not that important as long as it is defined and fixed. Reason being it is divisible, currently up to 8 decimals, and 1 BTC have 100 million satoshis (sats) as smallest fraction (up to 8 decimal places).<br>

-- Everybody should be aware that bitcoin is not anonymous, instead it is *Pseudo-Anonymous*, meaning transaction is public but it only has owner number. However, if someone ever connects that number to a person then it can be tracked. Ways to avoid being tracked are mentioned in paragraphs bellow.<br>
-- Coins can be stored offline in a digital Wallet or on an exchange. Wallet is a password protected application on mobile or computer, with recovery secret code stored at another location in digital manner or written on paper. It enables full **Self Custody**, in accordance with expression: ***Not Your Keys, Not Your Coins!*** One should not be escaping responsibility, so **Take custody** of your coins. Worth noting are Cold storage as an offline wallet and [hardware wallets](https://www.cryptovantage.com/news/ask-cryptovantage-do-i-really-need-a-hardware-wallet-to-store-bitcoin/){:target="_blank"} for those who desire [extra security](https://safehodl.github.io/hardware-wallets/){:target="_blank"} (recommended when having large value).<br>

-- Block infos:<br>
[BlockExplorer](https://blockexplorer.com/){:target="_blank"}; | [BlockStream](https://blockstream.info){:target="_blank"};<br>
BlockChain: [charts](https://blockchain.com/charts){:target="_blank"} & [blocks](https://blockchain.com/btc/blocks){:target="_blank"}; | [balance](https://bitref.com/){:target="_blank"};

### 2.3 Prošireni opis [[C](#toc)]
{: #extended-description }
-- As a new internet protocol [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin){:target="_blank"} enables transfer of value over communication channel. Other earlier application protocols include *https* (web page), *ftp* (file), *smtp* (mail), etc. With latest you can basically send gold coin like mail, any amount of value to anywhere in the world almost instantly. Without anyone being able to stop it or have control, it is **Censorship Resistant** and can't be easily confiscated.<br>
It is the first case where Greed and Altruistic incentives aligns. You can now make most selfish decision and also contribute to greater equality in the world when compared to the fiat system. As such it is very useful technological innovation that enables distributed consensus but can also be looked at from various angles. When trying to fully understand it one need to grasp its ***multitude of aspects*** (interdisciplinary):<br>
&nbsp;1. **Economic** (Monetary policy) - predefined and limited quantity (relatively fixed supply)<br>
&nbsp;2. **Technical** (Networking) - decentralization<br>
&nbsp;3. **Political** - reducing state monetary control<br>
&nbsp;4. **Ideological** - core value<br>
&nbsp;5. **Social**<br>

-- YT videos:<br>
[What is Bitcoin)](https://www.youtube.com/watch?v=Gc2en3nHxA4&t=34s){:target="_blank"}; | [Explained Simply](https://www.youtube.com/watch?v=41JCpzvnn_0&t=1s){:target="_blank"};<br>
[How bitcoin work](https://www.youtube.com/watch?v=bBC-nXj3Ng4&t=8s){:target="_blank"}; | [How blockchain work](https://www.youtube.com/watch?v=SSo_EIwHSd4){:target="_blank"};<br>
TED talks:<br>
-[Blockchain changing money and business](https://www.youtube.com/watch?v=Pl8OlkkwRpc&t=37s){:target="_blank"}<br>
-[Blockchain transform the economy](https://www.youtube.com/watch?v=RplnSVTzvnU&t=1s){:target="_blank"}<br>
-[The future of money](https://www.youtube.com/watch?v=pPgd7Hj3ABQ){:target="_blank"}<br>

[Bitcoin Governance](https://stanford-jblp.pubpub.org/pub/bitcoin-governance/release/2){:target="_blank"} is similar to 3-pronged (traditional) branches of Government. <br> 
[The Three Branches of Blockchain Governance](https://medium.com/digitalassetresearch/the-three-branches-of-blockchain-governance-75a29bf98880){:target="_blank"} (*Separation of powers* doctrine)

| **GOV**        | **BIT**    | Description               |
| -------------- | ---------- |-------------------------- |
| 1. Executive   | Full Nodes | can veto miners           |
| 2. Judicial    | Miners     | can veto devs             |
| 3. Legislative | Developers | help others bypass vetoes |

Legislative part also includes business and infrastructure analogous to Parliament (Representatives) while Devs are like Senate. If compared to enterprises best parallels can be drawn with IT (Information Technology) companies.<br>
-- Product is global monetary currency and payment system and at the same time the Coin represents owners or shareholders. On the other side are Developers and Miners, along with Nodes, like very wide Board of Directors, Management and Supervisory.<br>

**Pravila bitkoina:**<br>
&nbsp;1. No Confiscation<br>
&nbsp;2. No Censorship<br>
&nbsp;3. No Inflation<br>
&nbsp;4. Anyone can verify rules 1-3<br>
-- These rules are derived from protocol characteristic that make it exist in a **narrow design space**, its tiny niche. Delicate balance means that even a small alteration to one of coded parameters  can break some other important feature significantly. It can be compared to gravitational constant that is limited to narrow band, where even a slight change would destroy entire universe. This explains some critics about development going slowly (base chain must be little conservative). There is not much room for core changes, only fine-tuning improvements and building on top of it. Still there is no reason bitcoin could not adopt any fundamentally better technology improvement that keeps its core values.<br>
-- There have been push to force some risky core changes but those attempts failed - [**Block Size Wars**](https://www.bitrawr.com/bitcoin-block-size-debate-explained){:target="_blank"}. One of proposal was to simply increase the size of Block to 2, 4 or even 8 MB, which was rejected because it does not solve long term scalability for entire world. At the same time, it had bad effects on decentralization because it would drastically increase node memory requirements.
On the other hand updates that passed like [SegWit](https://www.investopedia.com/terms/s/segwit-segregated-witness.asp#toc-what-is-segregated-witness-segwit){:target="_blank"} (Segregated Witness) and [Taproot](https://cointelegraph.com/bitcoin-for-beginners/a-beginners-guide-to-the-bitcoin-taproot-upgrade){:target="_blank"} (with [Schnorr signature](https://cointelegraph.com/news/unpacking-schnorr-signatures-blockstreams-musig-to-improve-bitcoin-transactions){:target="_blank"}) were more in line with the vision and brought only improvements making it faster, more efficient and private. But they first had to be developed and then 95% of miners (an overwhelming majority) needed to signal support for those to activate it. They are called [BIP](https://cointelegraph.com/explained/what-are-bitcoin-improvement-proposals-bips-and-how-do-they-work){:target="_blank"} ([Bitcoin Improvement Proposal](https://river.com/learn/what-is-a-bitcoin-improvement-proposal-bip/){:target="_blank"}). No central command presents significant logistical challenges, but also that distinguishing feature ensures no central point of failure.<br>

-- Bitcoin as a whole represents a [Paradigm shift](https://www.nasdaq.com/articles/bitcoin-is-the-ultimate-paradigm-shift-2021-10-02){:target="_blank"} for [Embodiment of capital](https://www.barrons.com/articles/cryptocurrency-and-the-21st-century-paradigm-shift-51635556355){:target="_blank"} that changed each century:<br>
&nbsp;18th - farmland (agricultural age)<br>
&nbsp;19th - factories, machines, bonds (industrial age)<br>
&nbsp;20th - urban real estate, stocks (information age)<br>
&nbsp;21th - virtual asset (digital & distributed age)<br>
&nbsp; - also called [The Exponential Age](https://www.reddit.com/r/Bitcoin/comments/tuoh5f/im_all_in_bitcoin_the_exponential_age/){:target="_blank"}<br>
&nbsp;&nbsp;&nbsp; (Technology evolving the world at a rate faster than ever before)<br>
&nbsp; - Simply put, the world is moving at light speed<br>

**Dodatne neformale definicije:**<br>
* 1 Hard Asset (Trust-Minimized)
  - premium Commodity
  - inalienable digital Property<br>
* 2 Future-Proof Money (Internet Native)
  - most ubiquitous and omnipresent Cryptocurrency<br>
* 3 Distributed universal Ledger
  - open standard and API (Application Programming Interface)
  - consensually shared and synchronized database, one source of truth/validation<br>
* 4 Programmatic monetary policy, programmable money
  - narrow but powerful AI, financial singularity, unstoppable machine
* 5 First engineered monetary system in history of human race
  - monetary Technocracy in the digital age
  - unique Financial Invention, new phenomenon with special properties
* 6 [Triple-Entry Accounting](https://medium.com/uclcbt/is-bitcoin-really-triple-entry-accounting-df14e26ae3e7){:target="_blank"} - info stored with many third parties
  - analogy from [Double bookkeeping](https://en.wikipedia.org/wiki/Double-entry_bookkeeping){:target="_blank"}<br>
    (2 equal entries on opposite sides: Debit and Credit; accounts [Payable & Receivable](https://www.netsuite.com/portal/resource/articles/accounting/accounts-payable-accounts-receivable.shtml){:target="_blank"})
* 7 Superior Monetary Network - interoperable protocol to transport value
  - convenient online payment experience
  - solves economic calculation problem with continuous and instant market pricing
* 8 Diversified index of entire world economy
* 9 Productive brain power of Developers (Open Source project)
* 10 Peaceful resistance from currency Devaluation / Debasement<br>
* 11 Modern Declaration of (monetary) Independence / Denationalization
  - enables Sovereign individual (Self-Sufficient communities)
  - opt out from corrupt fiat system (Silent Revolution)
* 12 Financial Freedom technology and tool
  - stateless and permissionless public money
  - gives you power over money, and ultimate freedom to live on your own terms
* 13 New [Social Contract](https://iep.utm.edu/soc-cont/){:target="_blank"} (Novel form of Institution, [BTC-Social-Contract](https://medium.com/s/story/bitcoins-social-contract-1f8b05ee24a9){:target="_blank"})
  - complex sociotechnical system
  - decouples need for large institutions from the network
* 14 Pilot project on how to run society in less centralized way
* 15 Decentralized monetary system in network Topology but also Philosophy
  - alternative to hierarchical structure ([Bitcoin killed the King](https://www.nfx.com/post/network-effects-bitcoin){:target="_blank"})
  - new model with internal checks and balances (wisdom of the crowd)
* 16 New Global financial system
  - neutral form of money (not controlled by anyone)
  - the New Operating System of the Economy
* 17 Monetary / Economic energy
  - from [First Principles](https://fs.blog/first-principles/){:target="_blank"} Money is an exchange of energy (Econ 101)
  - reduction of Entropy ([Bitcoin Information Theory B.I.T.](https://bitcoinmagazine.com/culture/bitcoin-information-theory-bit){:target="_blank"})
* 18 A Weapon for [Peace, Not war](https://inbitcoinwetrust.substack.com/p/a-weapon-for-peace-not-war-bitcoin){:target="_blank"} (an Exit Strategy for Humans)
  - [war Deterrent](https://www.trustnodes.com/2021/08/14/bitcoin-is-a-war-deterrent-and-in-the-interest-of-us-national-security-says-space-force-engineer){:target="_blank"} - changes warfare from kinetic to electric energy
  - future war apparatus goal will be [highest rate of energy-delivery](https://bitcoinmagazine.com/culture/bitcoin-and-teslas-peaceful-energy-vision){:target="_blank"}<br>
    (Nikola Tesla envisioned peaceful energy)
* 19 Education vehicle, monetary curiosity
  - transcends pure money
* 20 Fintech for poor people (Instrument of economic empowerment)
  - technology bridge to abundant future
* 21 [Intellectual experiment](https://www.ccn.com/bitcoins-patient-zero-crypto-is-an-intellectual-experiment-that-may-fail-but-probably-wont/){:target="_blank"} (radical thought) not to have human in charge of money
  - persuasive idea that rewrites your mind, an inception
  - people are inspired to contemplate / speak / write about (this blog being proof)

## <ins>3. Komparativna prednost</ins>
{: #comparative-advantage }
### 3.1 SWOT analysis [[C](#toc)]
{: #swot-analysis }
Most **Strengths & Opportunities** it brings are already stated.<br>
So let's look at certain **Weaknesses & Threat** and their explanations:<br>

**Kritike** (neke su neosnovane):
* 1 The protocol can be copied since it's Open Source
  - Network effect keeps BTC at top, also mining makes it hard to duplicate all hardware and infrastructure
  - There are many copies and forks, both Hard and Soft, but they have little or no value and less liquidity
* 2 Not backed by anything
  - Backed by Electric Power (Intrinsic value from energy)
  - Money as abstract concept partly depends on belief<br>
    (agreement among people who think it's valuable)
* 3 [Ponzi scheme](https://constantinecannon.com/practice/whistleblower/whistleblower-types/financial-investment-fraud/ponzi-schemes/){:target="_blank"} (another [Tulip Mania](https://www.history.com/news/tulip-mania-financial-crash-holland){:target="_blank"})
  - Is Anti-Ponzi, no pyramidal structure, and no percentage for 'bringing' others
  - Everybody freely chooses to join
  - Does not 'promise' high nor any returns
  - Had speculative waves but not empty bubble, added value is digital transport of value
* 4 Used for criminal activities
  - Very small percentage of transaction are illegal ones
  - Cash is used for same purposes
  - It is not job of money to worry how it's being used, it's only a tool<br>
    (for crimes there is police)
* 5 Losing keys(password) or being stolen
  - If want full custody than accept the risk but take all measures of precaution
  - Otherwise keep backup with reliable third parties, or split keys with multiple subjects ([MultiSig](https://www.coindesk.com/tech/2020/11/10/multisignature-wallets-can-keep-your-coins-safer-if-you-use-them-right/){:target="_blank"})
  - Similar is needed with keys storage for Inheritance purposes
  - In the long period people will learn how to keep it safe and will have more options for storage
  - Just like today they keep cash or have a bank account, usually both
* 6 Consumes a lot of electricity, too demanding
  - [Utilizing energy](https://www.coindesk.com/business/2020/05/19/the-last-word-on-bitcoins-energy-consumption/){:target="_blank"} is not a bad thing
  - Necessary for security and decentralization
  - Creating (good) money cannot be free
  - Btc [energy usage isn’t a problem](https://www.lynalden.com/bitcoin-energy/){:target="_blank"} and [Energy Consumption](https://www.youtube.com/watch?v=2T0OUIW89II){:target="_blank"}
  - Incentive is to use cheapest energy, currently mostly from [renewables](https://wintonark.medium.com/bitcoin-mining-impact-on-renewable-uptake-fc91c5aa9be0){:target="_blank"} ([solar](https://medium.com/blockchain-life-tech/rooftop-solar-and-crypto-mining-could-kick-off-a-green-power-revolution-ad91d523b35b){:target="_blank"})<br>
    also from remote location otherwise unusable and wasted (Geo-independent)
  - Can contribute to [stabilizing electric grid](https://www.vaultelectricity.com/how-bitcoin-will-help-stabilize-the-texas-grid-and-lower-electricity-rates/){:target="_blank"} by reducing miners' consumption in peak times
  - Uses excess energy of current power plants that is otherwise just wasted
  - Generated heat by the mining rigs could be used for heating of homes
  - Civilization level of technological advancement is measured by amount of energy able to use<br>
    ([The Kardashev Scale](https://en.wikipedia.org/wiki/Kardashev_scale){:target="_blank"})
* 7 Distribution fairness?
  - In design it is the fairest system possible Satoshi could have come up at that time
  - Historically [Unprecedented experiment](https://coinmetrics.io/bitcoin-an-unprecedented-experiment-in-fair-distribution/){:target="_blank"} in [Fair Distribution](https://danhedl.medium.com/bitcoins-distribution-was-fair-e2ef7bbbc892){:target="_blank"}
  - Has fair-minded issuance mechanism, miners have need to redistribute new coins
  - Incomparably better then centralized ownership
  - Uneven ownership not because of dishonest or unfair feature but due to risk taken by early adopters<br>
    Even today, when risk is smaller, many still afraid to buy into. As they say *He Who Dares Wins!*
  - Had no premining and no initial sale
  - Market dynamics have gradually evened Bitcoin’s distribution and will continue to do so
  - Most equitable cryptoasset in existence
  - Becoming more [Evenly distributed over time](https://blog.bitbeginner.com/p/70b13407-7a78-4e56-acd1-e1365b8adbd9?s=r#footnote-anchor-11){:target="_blank"}
  - Tends towards Normal (Gaussian) distribution, referred as [Bell Curve](https://www.investopedia.com/terms/b/bell-curve.asp){:target="_blank"} ([The Bitcoin Bell-Curve](https://hassmccook.medium.com/the-bitcoin-bell-curve-a-long-term-solution-to-global-wealth-income-inequality-de995929e267){:target="_blank"})

**Postojeći problemi sa odgovarajućim rješenjima**
* 1 Limited capacity - Inefficient, not scalable enough<br>
  (currently max around 10 transaction per sec. making them slow and expensive)
  - [Blockchain Trilemma](https://www.gemini.com/cryptopedia/blockchain-trilemma-decentralization-scalability-definition){:target="_blank"} (resilience vs efficiency):<br>
    /__\ 1.Decentralisation, 2.Security, 3.Scalability
  - Layered structure<br>
    L-1 base layer optimizes around Security and Robustness, also keeps it Decentralized<br>
    L-2 improves Scalability segment and enables Fast and Cheap transfers<br>
    (Lightning Network, Liquid, Side Chains, ...)
* 2 Not fully private, only semi-anonymous / [fungibility](https://mises.org/wire/why-fungibility-important-understanding-money-and-crypto){:target="_blank"}
  - Mixers for getting more privacy while L2 removes individual spending from main net

**Budući potencijalni rizici**
 * 1 Some big unknown bug gets found that breaks the network
   - Not likely since it did not emerge for 13 years, and hackers have tried to find it
   - Code of protocol based on formal Math theorems
 * 2 Total collapse of Internet
   - Highly unlikely with its decentralized nature and all redundancy
   - Would also break current financial system since e/mobile-Banking is using web services
 * 3 Global long term Power outage / blackout
   - Situation possible only with some apocalyptic event when money would no longer be important
 * 4 Breakthrough in Quantum computing implementing [Shor's algorithm](https://quantum-computing.ibm.com/composer/docs/iqx/guide/shors-algorithm){:target="_blank"} that could break asymmetric cryptography
   - Not in foreseeable future, and algorithm is just theoretical
   - Could affect privacy of all current digital systems
   - Already there are ideas for [quantum cryptography](https://www.techtarget.com/searchsecurity/definition/quantum-cryptography){:target="_blank"} that would solve the problem

Some Critics would challenge Bitcoin on its Noninflationary nature, a subject that deserves separate paragraph.<br>

### 3.2 Deflacija [[C](#toc)]
{: #deflation }
-- It is a decrease / drop in the general price level of goods and services. It occurs when the inflation rate falls below 0 %.
Often used in Economic crisis as a scary word related to Recession and Depression, or combined as [Stagflation](https://www.investopedia.com/terms/s/stagflation.asp){:target="_blank"}.<br>
A Deflationary Spiral is a downward price reaction to an economic crisis leading to lower production, lower wages, decreased demand, and falling prices.<br>
-- But [Deflationary economy](https://www.reddit.com/r/CryptoCurrency/comments/u0efbj/you_wouldnt_spend_a_deflationary_currency_bitcoin/){:target="_blank"} isn’t inherently a recessionary environment at all. In fact, some of the most prosperous times of growth in history were strongly deflationary. As production becomes more efficient it is natural that prices go down. Also, Bitcoin is not formally deflationary, technically it's programmed to be **Disinflationary**, rate of inflation reduces every 4 years. This result in a constant monetary base without changes to the supply.<br>

-- In order to be able to spread BTC, in the beginning it had higher inflation which is reducing over time. In the long time when everybody owns and use it price would stabilize, but prior it has to rise a lot while gravitates towards zero-inflation. The problem is we live in a system that is completely opposite and based on debt. This debt must get cheaper over time with inflation, because if the opposite were true, all nations and companies would default. The issue isn’t so much deflation per se, it’s the transition from where we are now, being over leveraged, to a low-inflationary environment.<br>
-- Eventually it could come to equilibrium where the value of entire money supply would match the total Economic Output of world. This allows everybody to have long time horizon and plan on longer period, which is good both for humans and environment. People would buy quality long-lasting stuffs, instead of buying a lot of garbage that would soon be thrown away. Instead of framing things narrowly, it allows to take a broader view and make better decision. Also in this hypothetical world there wouldn't be extravagant hoarding that leads to macroeconomic recession. Instead, people earn in bitcoins but also spend sats according to their needs and plans.<br>
-- When it comes to wages even if they go down a little bit, price of goods would go down even more making person richer. The difference between nominal and real wages is fundamental. There is no point of rising nominal wages, what matters is net of inflation/deflation.<br>
On the whole **Benefits outweighs the Risks** significantly.<br>

-- For example, image a world with independent uninflatable global currency. In last 50 years average Economic Growth has been ~ 2%, while for the next 50 years estimates are it could be around 3%. Let us take 2.5% as middle value, and with fixed supply of money it's value should increase each year by 2.5%. In that environment you would not need to rush and spend money but can take time to think what to buy and where to invest.<br>
-- Regarding credits and loans / borrowing, nominal interest rate would be low but effective one would be nominal + that 2.5%. So, credit for house could have nominal rate of 1.5% (4% effective). While investments in business, bearing more risk, would have higher rate of return or probably some share of company.<br>
Historic data: US interest rates in the last [200 years](https://advisor.visualcapitalist.com/us-interest-rates/){:target="_blank"} and 30 year mortgage from [1971-2022](https://themortgagereports.com/61853/30-year-mortgage-rates-chart){:target="_blank"}.<br>
-- There is great book *'[**The Price of Tomorrow**](https://tylerahall.com/the-price-of-tomorrow-jeff-booth-summary/){:target="_blank"}: Why Deflation is the Key to an Abundant Future'* by Jeff Boot. He suggests to stop fighting (technology driven) deflation and accept it's potential of abundance. It would be a system where the consumers win in the form of better prices and services.

Bitcoin Monetary Inflation [chart source](https://bashco.github.io/){:target="_blank"}<br>
(declines geometrically to asymptotic max of 21 mil. - [more precisely](https://academy.bit2me.com/en/cuantos-bitcoins-pueden-haber/){:target="_blank"} 20.999.999,9993)<br>
![Btc Monetary Inflation](https://raw.githubusercontent.com/borisdj/borisdj.github.io/master/assets/images/revolution-of-money/btc-monetary-inflation.png)<br>


### 3.3 Ostale kripto valute [[C](#toc)]
{: #other-cryptos }
-- When compared to Others crypto coins, important differences are that **BTC** have [**First Mover**](https://corporatefinanceinstitute.com/resources/knowledge/strategy/first-mover-advantage/){:target="_blank"} advantage ([the Half-Truth](https://hbr.org/2005/04/the-half-truth-of-first-mover-advantage){:target="_blank"}), so is most known and almost everybody already heard about it. Then it has no leader per se so has higher decentralization and it was **never hacked**. Still, this does not mean that all others are worthless, some of them could have valuable additional features. Only those that are not in the same domain as BTC and  target totally different use case, anything else expect base treasury asset, can survive. Of course there were, are, and will be, a lot of those that are pure scam, like [OneCoin](https://technext.ng/2022/07/05/all-you-need-know-onecoin-crypto-scam/){:target="_blank"}, or deceptive with pump-and-dump manipulative scheme (Greater Fool theory). Then there is crap group with stupid idea. Both are in a so-called 'shit' coins category. What remains is small number that could have useful purpose but even many of those will fail because of poor implementation. Just a handful will survive and thrive and maybe become leader in some domain. Still BTC is at the moment only one that has real chance of becoming global monetary system.<br>
-- There are several reasons why it is main One, crypto King, which includes:<br>
&nbsp;1. True Decentralization - main innovation that only BTC has for real.<br>
&nbsp;This is of greatest importance and PoW with all its electricity consumption gives it intrinsic worth rooted in physical world and at same time ensures temporal and spatial security (across time and space)<br>
&nbsp;Can't be counterfeited because it has cost in energy.<br>
&nbsp;While companies and their networks/platforms can be censored protocols cannot be blocked so easily.<br>
&nbsp;2. Network effect - the more people use it, it's more likely to become bigger (value increases with number of users)<br>
&nbsp;3. Added value with new unique features and functionality<br>
&nbsp;4. Simplistic design in its core and in accordance to IT principle [***KISS***](https://www.techopedia.com/definition/20262/keep-it-simple-stupid-principle-kiss-principle){:target="_blank"} (*Keep IT Simple, Stupid*)<br>
&nbsp;5. Does only one main function in the base - being just money but does it very good.<br>

-- Some Altcoins (Alternative coins - any other then Bitcoin) could be viewed as startups where buying those is similar to investing in that company. For example DeFi - *Decentralized Finance* (Crypto [Glossary](https://www.forbes.com/uk/advisor/investing/cryptocurrency/crypto-glossary-of-terms-acronyms/){:target="_blank"} and [Acronyms](https://www.coindesk.com/learn/from-btd-to-fud-to-wagmi-understanding-crypto-acronyms/){:target="_blank"}) application that replicate certain bank services and others. With those investment can often be done with [**ICO**](https://www.investopedia.com/terms/i/initial-coin-offering-ico.asp){:target="_blank"} (*Initial Coin Offer*), analog to **IPO** (*Initial Public Offer*). It's like Dot-com bubble in the 2000s where there were many companies that had website but just a few grow to become Microsoft, Google, Apple, Amazon, etc. While bulk of others have completely failed and we never even heard about them.<br>
Still only BTC is considered (also [by the SEC](https://www.reuters.com/legal/transactional/are-cryptocurrencies-securities-sec-is-answering-question-2022-03-21/){:target="_blank"}) as **Asset** (other way phrasing it **Digital Property**) while all others cryptos are described as **Securities** (*The Next Bitcoin is Bitcoin*).

-- There are also NFTs (Non-Fungible Tokens) that act like prestige Collectibles (artist's digital graphics and drawing). But they are not in the scope of this article.

### 3.4 Dokaz o radu/ulogu (PoW/PoS) [[C](#toc)]
{: #pow-vs-pos }
-- Proof of Stake (PoS) protocols are another class of algorithms for consensus first invented in 2012. They work by selecting validators in proportion to their quantity of holdings in cryptocurrency. This is done to avoid the computational cost.
Key distinction is that they are not decentralized enough, [quantified](https://news.earn.com/quantifying-decentralization-e39db233c28e){:target="_blank"} by [**Nakamoto Coefficient**](https://crosstower.com/resources/education/nakamoto-coefficient/){:target="_blank"}, similar to Gini coefficient for inequality measure. PoS does not have incentives in line with it, also distribution is always an issue. So they can only ever be a Security equity (asset issued by body) and not a Commodity.<br>
-- [PoW is Efficient](https://danhedl.medium.com/pow-is-efficient-aa3d442754d3){:target="_blank"} and in its nature different and separate, like comparing plain and train. For monetary system PoW is advantages and necessary. Electricity is Bitcoin's physical property. It is also much safer against [51 % attack](https://braiins.com/blog/how-much-would-it-cost-to-51-attack-bitcoin){:target="_blank"} due to opportunity cost, too hard and too expensive.<br>
-- Hardware that is doing computation for mining initially included home desktops, even laptops, later GPU - Graphics cards, because of multiple coprocessor and eventually custom build server machines called [ASIC](https://zipmex.com/learn/asic-miner/){:target="_blank"} miner (Application-Specific Integrated Circuit). They are much more efficient and have made regular computers obsolete for this purpose. For this reason, the algorithm has a feature called **Difficulty Adjustment** that is done every 2 weeks. This ensures constant time for block generation of 10 minutes, regardless of processing Hashrate (Th/s). The more power is inputted the more difficult it becomes to find the correct solution. Therefore, incentives are to have more miners when price goes up but on the other side halving makes reward smaller. Therefore it has [no energy scaling issue](https://www.reddit.com/r/Bitcoin/comments/q769w4/how_does_bitcoins_energy_usage_scale/){:target="_blank"} and once equilibrium is established, reward shrinks while value is expected to rise. Additionally, miners receive a fee from each transaction. In future Transaction fees will become more important than reward. From miners' perception [Moore’s law](https://www.investopedia.com/terms/m/mooreslaw.asp){:target="_blank"} is [built into the incentive](https://hal.archives-ouvertes.fr/hal-03506522/document){:target="_blank"} structure and lately ASIC [evolution is stalling](https://minerdaily.com/2021/moores-law-vs-bitcoin-asics-and-network-growth/){:target="_blank"}.<br>
![Hashrate](https://raw.githubusercontent.com/borisdj/borisdj.github.io/master/assets/images/revolution-of-money/hashrate.png)
[Chart source](https://ycharts.com/indicators/bitcoin_network_hash_rate){:target="_blank"} and other mining data with [hashrate info](https://www.blockchain.com/charts/hash-rate){:target="_blank"}.

## <ins>4. Globalni efekti</ins>
{: #global-effects }
### 4.1 Ekonomski uticaj [[C](#toc)]
{: #economic-impact }
-- BTC gives more Economic freedom, and it makes money *SAVING simple* as it should be. It brings financial tools to unBanked, underBanked and underServiced world, allowing people to become almost Bankless in traditional sense (de-bank the world). Important aspect and one of reason why entire project was successful is because of good [**Tokenomics**](https://www.coindesk.com/learn/what-is-tokenomics-and-why-is-it-important/){:target="_blank"} - financial incentives to mine, buy, use and hold tokens.<br>
-- Worth mentioning are the Economic Cycles. A phenomenon where Economy goes through boom-and-bust period that are manifested with bullish and bearish markets.
There is excellent explanation by famous hedge fund manager [Ray Dalio](https://www.principles.com/){:target="_blank"} in a video - [*How the Economic machine works*](https://www.youtube.com/watch?v=PHe0bXAIuk0){:target="_blank"}<br>
In it he gave few simple advice, 3 rules of thumbs:<br>
&nbsp;1. Don't have Debt rise faster than Income<br>
&nbsp;2. Don't have Debt rise faster than Productivity<br>
&nbsp;3. Do all that you can to raise your Productivity<br>
![price history](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/economic-cycles.jpg)

-- Regarding the Cycles we find them also in Bitcoin short history, each lasting around 4 years, approximately halving period. Here each cycle has been less volatile, since larger market cap makes it harder to swing, and was also hyped in certain moments. In prior periods it was correlated with Nasdaq index and still is partially. However, lately [dissociation from correlation](https://biz.crast.net/how-stagflation-could-trigger-global-bitcoin-adoption/){:target="_blank"} with equities may indicate that widespread bitcoin adoption is accelerating, while stagflation may be the underlying fundamental factor driving bitcoin adoption.<br>

![price history](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/price-history.jpeg)

-- In the last 10 years we could see value goes up (as the previous [chart shows](https://cdn.hackernoon.com/images/409e32dw.jpg){:target="_blank"}) several times by order of magnitude. Waves were created either by big whales or small retail investors as more people become Bitcoiners. Whales are considered those who have 1000+ bitcoins. Others gathered around online community WallSteetBets (with famous [GameStop saga](https://abcnews.go.com/Business/gamestop-timeline-closer-saga-upended-wall-street/story?id=75617315){:target="_blank"}) on reddit, so called Ape movement.
On the other side it had gone down the same way. Additionally recent crash was caused by collapse of overleveraged and unregulated companies that were investing and lending cryptos. Some of them were exposed to others and it was like contagion created by gambling. To point out few of those: Tera-Luna, Anchor, 3 Arrow Capital, Celsius, Voyager. They either went bankruptcy (financial defaulted) or were liquidated. Crypto market has repeated mistakes from 2008 crisis. But here market was cleared of bad players. And it was not the first time, some might remember [Mt.Gox](){:target="_blank"} going under, also [Coincheck](https://www.cnbc.com/2018/01/26/japanese-cryptocurrency-exchange-loses-more-than-500-million-to-hackers.html){:target="_blank"} hack and [BitConnect](https://www.cointribune.com/en/crypto-guides/the-story-of-bitconnect-worlds-biggest-crypto-scam-yet/){:target="_blank"} scam.

-- Bitcoin as a new asset class gain incredible popularity. When it comes to total market cap at some point was 1 Trillion, while entire crypto market was around 2 T. It took Google 22 years to become 1 T company, While Bitcoin got there in 12 years. Tradeable Gold market is about 5 trillion. For it to catch up would mean value jumping 20 times (educated guess) from current price. Note that entire stock market is around 100 T, while real estates are 300 T.
Bitcoin in average had growth of 200 % yearly for a decade, it was the best performing asset.

### 4.2 Političke implikacije [[C](#toc)]
{: #political-implications }
-- Inflating currency supply distorts the money and equals creating more imaginary products which negatively affects the markets.
Central planning (of money also) goes against evolution, one of the reasons it always fails.
[Monetarism](https://www.britannica.com/topic/monetarism){:target="_blank"} - emphasizes the role of governments in controlling the amount of money in circulation.
Before bitcoin we have never had an incorruptible monetary base layer.
World needs a Neutral (reserve) currency, now more than ever.

Some well-known examples of big inflation since 2000s:<br>
-Hyper: Venezuela (10,000 %), Zimbabwe (1,000 %), Ghana, Ethiopia, Sri Lanka, ...<br>
-High: Argentina (70 %), Russia, Turkey, etc.<br>
-Moderate: USA, UK, EU, and others<br>

-- Since is it hard/impossible to ban bitcoin globally, countries can ignore it or try to regulate it.
Some laws are more accepting while other have restricting ones.
China has for example [ban mining](https://www.weforum.org/agenda/2022/01/what-s-behind-china-s-cryptocurrency-ban/){:target="_blank"}), as bitcoin can interfere and jeopardize their central influence on population.
They might be the first to implement [CBDC](https://www.investopedia.com/terms/c/central-bank-digital-currency-cbdc.asp){:target="_blank"} (Central Bank Digital Currency) which would give even more power to the Surveillance State. This would allow easier spread of [Social Credit System](https://www.businessinsider.com/china-social-credit-system-punishments-and-rewards-explained-2018-4){:target="_blank"}, an unacceptable dystopia. So, Bitcoin can facilitate reduction of government ability to track and monitor its citizens. As David Chaum said: *"[Privacy in messaging and payments](https://decrypt.co/95109/david-chaum-from-inventing-digital-cash-to-pioneering-digital-privacy), and the like, is so fundamental to democracy."*<br>
-- On the other side more democratic countries have embraced and made it legal but require **KYC** (Know Your Customer) and **AML** (Anti-Money Laundering).
So, most exchanges have to be in Compliance with these rules and ask user for Identity documents.
Still there are some DEXs (Decentralized exchanges) that can circumvent these requirements.<br>
-- At the moment countries have varying range of [attitudes towards bitcoin](https://www.investopedia.com/articles/forex/041515/countries-where-bitcoin-legal-illegal.asp){:target="_blank"}. Those more [friendly ones](https://learn.bybit.com/investing/most-crypto-friendly-countries/){:target="_blank"} have legalized it in a way to be either accepted (US, EU,...), or non taxable (*Portugal* as prominent with [residency](https://rebase.co/portugal){:target="_blank"} for [Digital Nomads](https://govisafree.com/crypto-portugal/){:target="_blank"} including ['Bitcoin family'](https://www.cnbc.com/2022/02/06/bitcoin-family-moves-to-portugal-crypto-tax-haven.html){:target="_blank"}), or even legal tender ([El Salvador](https://www.weforum.org/agenda/2021/09/el-salvador-officially-adopts-bitcoin-as-legal-tender-but-will-other-countries-follow){:target="_blank"} first one; [El Zonte](https://www.npr.org/2022/03/27/1086851329/el-salvadors-leader-wants-to-go-in-even-bigger-on-bitcoin){:target="_blank"} - [Bitcoin Beach](https://www.cbsnews.com/news/bitcoin-beach-el-salvador-60-minutes-2022-04-10/){:target="_blank"}). Both Miami and New York City now have [Bitcoin-friendly mayors](https://www.coindesk.com/policy/2022/03/16/bitcoin-friendly-mayors-view-blockchain-as-a-way-to-boost-equality-diversity/){:target="_blank"}. On the other side are more skeptical ones still waiting to see where it goes.<br>
-- Regarding legality ground there is interesting segment of the US Constitution, [Article I - Section 10](https://www.law.cornell.edu/constitution-conan/article-1/section-10/clause-1/limits-on-issuing-legal-tender){:target="_blank"}, whereit forbids states from issuing "bills" (promissory notes) but gold and silver coin can be used as legal "tender". So if bitcoin would be considered analog to gold it could become legal tender by default ([talk with attorney Aaron Daniel](https://www.youtube.com/watch?v=sPh1a46SL4w){:target="_blank"}).<br>

-- Btc is hope for many people who are in despair and marginalized. One of use cases is to give freedom to people in countries under some sanction like [Cuba](https://www.coindesk.com/business/2022/03/08/you-would-understand-bitcoin-if-you-were-under-cubas-embargo/){:target="_blank"}, Iran, etc. It can also help refugees escape conflict zones and leave (with their saving) from Libya, Russia, Ukraine, Syria, etc. Same is true for those fleeing oppressive and tyrannical regimes. Bitcoin and marvelous blockchain technology give a new paradigm of economy with no territory that supersedes regular borders.<br>
-- Next to mention that many African countries have very weak (high inflating) currency, in which a lot of impoverished people don't have access to financial services. Some are even using foreign issued post-colonial money, namely [CFA Franc](https://cointelegraph.com/news/we-don-t-like-our-money-the-story-of-the-cfa-and-bitcoin-in-africa){:target="_blank"} that is still controlled by the French treasury. So Open Source code is [fighting monetary colonialism](https://bitcoinmagazine.com/culture/bitcoin-a-currency-of-decolonization){:target="_blank"} as well, as described by Alex Gladstein.<br>
-In El Salvador, where remittance fees and exchange rates can eat away a money transfer to family, Bitcoin offered lower fees and faster transactions.<br>
-In Cuba, after a dual-currency system devalued the peso, those who saved in Bitcoin managed to stay afloat.<br>
-In Nigeria, human rights activists depend on Bitcoin for donations after crackdowns by authoritarian regimes.<br>

-- It's now obvious that Supremacy of the [Petrodollar Economy is Waning](https://moderndiplomacy.eu/2022/05/28/the-waning-supremacy-of-the-petrodollar-economy/){:target="_blank"} and its hegemony coming to an end. This will probably lead to decentralized multipolar multi-reserve system. Interesting book and another video presentation is *'Changing world order'* - by *Ray Dalio* where he talks about China economic rise. But China also manipulates currency a lot. One could make analogy from fiat based military industrial complex to crypto industrial complex based on energy.
-- CB could be gone in its current form, even fiat could be backed by Bitcoin or central government reduced in that regard. Essentially removing monetary power and leave only fiscal policy. According to *Thiers' Law*: [*Good Money Drives Out Bad*](https://nakamotoinstitute.org/mempool/speculative-attack/){:target="_blank"}.
-- [The politics of bitcoin](https://blogs.lse.ac.uk/politicsandpolicy/the-politics-of-bitcoin/){:target="_blank"} underpins its social life.

### 4.3 Socijalna komponenta [[C](#toc)]
{: #social-component }
-- As the ecosystem grew, many diverse subgroups have joined the movement.
Initially it started with crypto OG (Original Gangster) a slang for developer or founder of early crypto blockchain.
Then came anonymous, libertarians, conservatives, progressives, entrepreneurs, VCs (Venture Capitalist - investors), miners, traders, etc. It was not singular ethos but had many Subcommunities where everyone saw something of interest that suits them. Some are often referred as [*'True Bitcoiners'*](https://theconversation.com/behind-the-crypto-hype-is-an-ideology-of-social-change-177981){:target="_blank"}, a forerunners of movement and ideology. It is similar to term Bitcoin *Maximalist* (Btc Maxi), meaning those who promote only Bitcoin. There was some toxicity in the public space, that could be filtered.  Maybe best label would be BTC Realist or simple a **Bitcoiner**.<br>
-- In philosophic sense there is also [Bitcoin Minimalism](https://danhedl.medium.com/bitcoin-minimalism-b3ed4b88e852){:target="_blank"} (Create more, consume less - as explained by *Dan Held*). In political arena it had brought together all from opposite spectrum and reduced polarization. In addition, since its wide adoption has just started all those who don't have any amount of bitcoin yet are called *No-Coiners*.<br>

-- One of the reasons it takes time for adopting is that people first need to learn and understand it. Most schools teach very little about finances and even less about money itself. Governments have no interest to fully educate citizens, it's easier for them when less people see inflation as indirect tax.
And most people themselves are lazy in a way and don't care too much about monetary system. They've preferred way to outsource responsibility to the Government, but as result end up being dependent and completely relying on institutions.<br>
There are those who say [Bitcoin philosophy is like a Religion](https://theconversation.com/why-are-people-calling-bitcoin-a-religion-175717){:target="_blank"} (Gospel of prophet Satoshi :) ), for all good and bad that the term carries with it. Although one could find few similar elements, important distinction is that there are no dogmas, and nobody is above criticism. What is in common is preach and practice of people who keep spirit and ethos of it. Passionate supporters are sometimes called Bitcoin believers / evangelist for being optimistic about success of the project. They firmly hold their stance and vocally assert their opinion to the crowd.<br>
-- Yet many at first experience can feel [Cognitive dissonance](https://coingeek.com/the-art-of-cognitive-dissonance-in-bitcoin){:target="_blank"}. It is an unpleasant mental conflict that occurs for an individual when assumptions or beliefs are contradicted by new information. In this case defense mechanisms include rejecting the claim or ignoring the new information all together. For anyone involved in Bitcoin, alignment of beliefs to behaviors is tested regularly.<br>
-- Once a person gets enough information and after a while it clicks in the mind. There is an expression used to describe it:<br>
[*'Taking The Orange Pill'*](https://bitcoinmagazine.com/culture/bitcoin-orange-pill-theory-reality){:target="_blank"} analogy from movie Matrix.

-- Let's put up list of knowledgeable people:<br>
-Bitcoin and Macro: Luke Gromen, Lyn Alden, Nic Carter;<br>
-Tech gurus: Andreas Antonopoulos (advocate and author), Jameson Lopp, Adam Back, Nick Szabo, Shinobi, Jack Mallers (Strike);<br>
-Investors:  Michael Saylor(MicroStrategy), Jack Dorsey (Twitter, Block formerly Square), Elon Musk (Tesla), Cathie Wood(Ark Invest);<br>
-Podcasters:<br>
Peter McCormack ([What Bitcoin Did](https://www.whatbitcoindid.com/){:target="_blank"});<br>
Robert Breedlove ([What is Money](https://www.youtube.com/playlist?list=PL2jAZ0x9H0bRvoNt1xNJWYa9_8_an03h0){:target="_blank"});<br>
Anthony Pompliano ([The Pomp Podcast](https://www.youtube.com/c/AnthonyPompliano){:target="_blank"});<br>
Lex Fridman ([Lex Podcast with M.Saylor: the Future of Money](https://www.youtube.com/watch?v=mC43pZkpTec){:target="_blank"});<br>

-- Today's Overconsumption Society is not sustainable in the long run. Planet does not have unlimited resources. So, investing in Bitcoin is reducing consumptions of short lifetime consumer goods, that end up in landfills. Society should change its buying habits since planet resources are not unlimited. Also, production should aim for durability, and not have [planned obsolescence](https://durabilitymatters.com/planned-obsolescence/){:target="_blank"}. Issue in not about having growth, it's about efficiency, how to get more for less. This fundamentally changes how our economy functions.
-- Because of broken monetary system, excess value flows to top. That is one of the reasons there are many billionaires while others have to work 60h a week just to make ends meet. Instead, higher productivity could allow most people to have 30h week (automation could free time for more human creativity).

## <ins>5. Gledajući naprijed</ins>
{: #looking-forward }
### 5.1 Budući razvoj [[C](#toc)]
{: #future-development }
*Dalji plan*<br>
-- It is nothing less than a miracle that the project the survived and took off. Already 13 years in action uninterrupted, had not stopped for a second and it gained a lot of traction. In the first half of last decade, it was unknown to wide public, used only by enthusiasts, and also was very uncertain. Although still in early to mid-stage we can say that the biggest hurdles are behind. It is running flawlessly and is absolutely thriving in adoption.
We can identify Crypto ecosystem as new cultural and economic trend that started from forum, spread through [Reddit](https://www.reddit.com/r/Bitcoin/){:target="_blank"} and [Twitter](https://twitter.com/Bitcoin){:target="_blank"} into fabric of social circle. This created condition under which broader Adoption occurred.<br>
-- Internet evolution led from pure data and communication to social information and digital value. In that regard this next steep of scientific evolution is standing on the shoulders of giants.<br>
-- Although it has the power to disrupt banking and monetary industry, we can look at it more as a transformative technology that will improve and augment it. Only time will unlock its full potential. Firstly, it was a cool leapfrog technology, and later it became something like investment, sort of digital gold - Store of Value and that's where we are now. Later if it becomes universally adopted it will be Medium of Exchange. That would probably lead to also serving as Unit of Account. These would be [The 3 Phases of Bitcoin Mass Adoption](https://medium.com/swlh/the-3-phases-of-bitcoin-mass-adoption-dbd50d5eaca5){:target="_blank"}.

-- In the long run idea is for it to become regular everyday payment service, to fully realize function as Medium of Exchange. For this to happen it needs good integration with second layer lightning protocol for scalability. Once it grows large enough it will become stable which enables it then to be also Unit of Account. If this happens it will likely become Global Reserve Asset, **Bitcoin Standard**, a hypothesis explained in the book [*'The Bitcoin Standard'*](https://www.resistance.money/research/library/to%20be%20organised%20better/The%20Bitcoin%20Standard.pdf){:target="_blank"} by [*Saifedean Ammous*](https://saifedean.com/){:target="_blank"}.<br>
-- As people adopt it in many countries, regulatory will follow to make it like foreign currency, meaning no capital gain tax. Since nobody controls it, it is also easier for all countries, including world superpowers, to use for international clearing since they will not depend on the competition. In that case it's value could rise to few hundred thousand in several years, even reaching a million in 10+ years. Jeff Both calls that [hyperbitcoinization](https://phemex.com/academy/what-is-hyperbitcoinization){:target="_blank"} or a [Hyper-Bitcoinized World(YT)](https://www.youtube.com/watch?v=5JOkfN9Ll10){:target="_blank"}<br>

-- As Adoption increases, volatility will go down. Widespread crypto adoption is [pushed by millennials](https://nfn8.com/blog/millennials-will-push-widespread-crypto-adoption/){:target="_blank"}, a younger tech-savvy generations, that are turning into adults.<br>
Rate of adoption is following [S curve](https://www.inbitcoinwetrust.net/bitcoin-on-the-same-adoption-s-curve-as-the-internet-some-thoughts-and-figures-8af18f01cceb){:target="_blank"} and [gaining speed](https://phemex.com/blogs/crypto-bitcoin-s-curve-adoption-curve){:target="_blank"} (just like the internet did):<br>
![s-curve](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/s-curve.jpg)

### 5.2 Šta dalje [[C](#toc)]
{: #what-lies-ahead }
-- First, it's important to learn as much and have all-encompassing understanding of it all. Since this system is not forced but is **Opt-In** (freely choose to use it / be involved and possibly make better world) just learning about it is already a contribution. Next then comes playing with it and later promote the idea by teaching others around you (it's virtuous to teach people). There is a famous meme (rapidly spread cultural element): [**LaserEyes**](https://www.wealthsimple.com/en-ca/magazine/laser-eyes-crypto){:target="_blank"} - significant focus on important thing that can make a difference.<br>
Secondly decide if you want to buy some, for now as an investment and later as a Savings Accounts. This way you will try it yourself and learn a few things. Install one or few of [recommended wallets](https://academy.aax.com/en/introducing-the-4-best-lightning-network-wallets-for-sending-and-receiving-bitcoin/){:target="_blank"} (such as *Phoenix, Breez, Muun, Blue Wallet*), register on exchange, withdraw funds to your wallet (take off exchanges).<br>

-- When most countries join the system, they will even compete who has better adoption. Eventually their CBs will start acquiring Bitcoin as part of their reserves. Once first large CB acquires it others will be forced to follow it based on game theory. Private Banks would also own BTC as reserve asset. As it continues to mature it will gain wider support, integrate into the real world, and go Mainstream which could be beneficial for everyone.<br>
-- Currently in 2022 around 200 million people (4 % of world's population) are estimated to have same amount of bitcoin/sats. Every big change need time, in this case decades. It's not something that can happen overnight, as people have to learn and accept it. For most persons it was outside of their world view (mental model).<br>
-- Some expectation is that by 2030 1 billion people will have btc wallets. In over 100 countries it would be regulated like foreign currency, while in 10 at least accepted as legal tender.

### 5.3 Praktični pristup [[C](#toc)]
{: #practical-approach }
-- In broad sense Investment plan includes first to inform yourself, do your homework. Second to decide what amount is at your disposal for investing. Lastly to split it based on your risk appetite among several classes of asset. At an early-stage risk was much higher and in accordance with maxim: *Invest only what you are ready to lose*. Now it is less risky than in the last decade but still it is considered relatively riskier class, mainly because of large up and down swings.<br>
Only if you become convinced enough into the Bitcoin story is it good idea to invest.<br>
--In practice there are several generally useful strategies (one or more can be used):<br>
&nbsp;1. Move (reallocate) a part of your portfolio into Btc and keep it long term<br>
&nbsp; - size of part could range from 5 to 20 % depending on one's net worth and risk appetite
&nbsp; - don't made a mistake not investing anything in order not to have FOMO (Fear Of Missing Out)<br>
&nbsp; - decide when to join the train and potentially build generation wealth<br>
&nbsp;2. Make monthly savings into Bitcoin (for example 3 - 5 % of your salary / income)<br>
&nbsp; - accumulate slowly with average price ([dollar cost averaging](https://intelligent.schwab.com/article/dollar-cost-averaging){:target="_blank"})<br>
&nbsp;3. Do not sell in bear market when it falls down<br>
&nbsp; - hold tight during periods the FUD (Fear, Uncertainty and Doubt)<br>
&nbsp; - happy HODLing (meme variation of Hold) and keep Stacking Sats<br>
&nbsp;4. Active (daily) trading would not be advisable since it not productive activity<br>
&nbsp; - very hard to beat the market, even with technical analysis<br>

Additional ways to contribute:<br>
-Consider starting to accept payments in Bitcoin for the work/service you or your company provide<br>
-You can even give some small discount when someone pays with BTC, it will incentivize others to use it<br>
-In later stage use it for payments wherever possible<br>
-Change mentality from Buying and Selling to Earning/Saving and Spending/Using<br>

Suggestions:<br>
-- Maintain an emergency cash cushion, enough to pay all your bills for one full year. By holding bitcoin and cash you protect yourself both from inflation in the long term and from volatility in the short period.<br>
-- On the other hand, if you have no cash cushion, if you use leverage, if you lend Bitcoin for interest, if you use Bitcoin as loan collateral, if you short Bitcoin, or try to time the market in any way it's gambling. Gambling with any expectation of coming out ahead is foolish. And, as the saying goes: Fools and their money are soon parted. Don't gamble if you want to become wealthy. Instead, become a patient, cold-blooded (fearless) long term holder of Bitcoin.<br>
-- Think in long-term, become wise saver and prudent investor in crypto landscape since this is ultimate savings technology. Treat it like your savings account.<br>
-- Safeguard yourself, especially from YouTube comment section under every crypto related video clip. They are full of so-called trading strategy experts with some fake name and WhatsApp number for contact (#ScamAlert - stay away)

-- Bitcoin market, by nature, is not highly efficient because not all the stakeholders have same knowledge. It has interesting game theory Information asymmetry.
New people coming in don't have same information as those who have been here. They play the game of economic coordination differently.  Also [human behavior in finance](https://www.cnr.com/insights/article/white-paper-behavioral-finance-2018.html){:target="_blank"} is often irrational and most people do not evaluate risk correctly.<br>
As for those interested in tradign betweatn cycles be aware of [80-20 Rule](https://alphachain.co.uk/blog/trading-80-20-using-the-pareto-rule-in-trading){:target="_blank"} ([Pareto principle](https://www.investopedia.com/terms/p/paretoprinciple.asp){:target="_blank"})
They are bias towards gains but still have [Loss Aversion](https://www.apa.org/science/about/psa/2015/01/gains-losses){:target="_blank"}: 
*The aggravation in losing money seems greater than the pleasure of gaining the same amount*.

-- Popular crypto **[Exchanges](https://coinmarketcap.com/rankings/exchanges/){:target="_blank"}** (places to buy Bitcoin):<br>
*Kraken, Binance, FTX, Coinbase, Bitstamp, Gemini*<br>
-- There are also [decentralized ones](https://koinly.io/blog/top-no-kyc-crypto-exchanges/){:target="_blank"} and in person marketplaces like:<br>
*Bisq, KuCoin, LocalBicoins, LocalCryptos*

-- Concerning Bitcoin price prediction there are some interesting graphs, according to which we are currently in a good period to buy in.<br>
(but don't forget that every assumption about future is a probability bet)<br>
-[Logarithmic price chart](https://www.tradingview.com/chart/BTCUSD/4dR4jhXx-How-I-see-Bitcoin/){:target="_blank"}:<br>
![price-chart](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/log-chart.jpg)
-[Rainbow chart](https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/){:target="_blank"}:<br>
![rainbow-chart](https://raw.githubusercontent.com/borisdj/borisdj.github.io/main/assets/images/revolution-of-money/rainbow-chart.jpg)

### 5.4 Rekapitulacija [[C](#toc)]
{: #recapitulation }
-- Money systems have changed through history and current one has mayor flaw, it being centralized and having too much power in single place. That inevitable leads to corruption which ultimately results in high inflation, so we can say it is broken. Also, as permissioned system and it is over controlling. Reason it was tolerated is that it was the best that existed at the time. But with new time come new technology that enabled better systems. From Store of Value perspective, it should have lowest possible inflation. In this regard Bitcoin is in simple words just better money and overall good if we apply moral and ethical framework to it.<br>
-- Hyperinflation and [currency collapses](https://ginifoundation.org/kb/fiat-currency-graveyard-a-history-of-monetary-folly/){:target="_blank"} are not exceptionally rare events. In fact, the average lifespan of a fiat currency is only about 35 years, which means these events happen much more frequently than many people realize. When viewed from civilization perspective we want store to last minimum our lifetime, better even longer for inheritance. Also, many of societal problems arise from money, so fixing the money could improve the world, in part at least (meme: ***Bitcoin Fixes this!***). Money should be a **Fiduciary** system - legally and ethically bound to act in clients/users' best interest and ahead of their own, duty to preserve good faith and trust.<br>
-- As a Conclusion hope that this comprehensive review can arouse your curiosity and elevate critical thinking. And watch out from being stuck in echo chamber, always seek more opinions.<br>

-- Ostavite **Komentar** (stručnu recenziju) i dajte svoje lično mišljenje.<br>
[**Forma za komentare**](https://docs.google.com/forms/d/e/1FAIpQLSfX6OicCuvvcd8ewY0_qqKlOzegljSMmSVX_KfGwtP89EF3AQ/viewform){:target="_blank"}<br>
(I pohvale i kritike su dobrodošle)<br>
[**Vidi sve komentare**](https://docs.google.com/spreadsheets/d/e/2PACX-1vQYCQRmyTGP2q3GphttZcEae9GlXohAqYy77GIdvVsh5deOfzo-M8J_S_gworsgvkH2klOfLmBoHzQO/pubhtml){:target="_blank"}<br>

-- Ostanite sa nama za objavu o *Lightning Network* sljedećeg mjeseca.<br>
Uz to će biti i **Kviz** sa pitanjima. Za one koji daju sve tačne odgovore, nagrada će biti određena količina satoshi-ja putem *lightning* mreže.

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
[coinmarketcap.com](https://coinmarketcap.com){:target="_blank"}<br>
[coingecko.com](https://www.coingecko.com/){:target="_blank"}<br>
[bitcoinmagazine.com](https://bitcoinmagazine.com){:target="_blank"}<br>
[cointelegraph.com](https://cointelegraph.com){:target="_blank"}<br>
[coindesk.com](https://coindesk.com){:target="_blank"}<br>
[wikipedia.org](https://en.wikipedia.org){:target="_blank"}<br>
[investopedia.com](https://investopedia.com){:target="_blank"}<br>
[mises.org](https://mises.org){:target="_blank"}<br>
[reddit.com](https://reddit.com){:target="_blank"}<br>
[youtube.com](https://youtube.com){:target="_blank"}<br>
[medium.com](https://medium.com){:target="_blank"}<br>
