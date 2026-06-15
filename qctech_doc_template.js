/**
 * qctech_doc_template.js
 * Template condiviso per tutti i documenti Quantum Code Technologies Ltd
 * Preventivi, Contratti, Partnership, Proposte
 *
 * REGOLA ASSOLUTA: tutti i documenti QC Tech importano questo file.
 * Non duplicare mai header, footer, colori o funzioni row/secNum/art.
 * Ogni nuovo documento JS fa: const T = require('./qctech_doc_template');
 *
 * FIRMATARIO UFFICIALE: Vincenzo Sedita — Co-Founder & Commercial Director
 * MAI usare Alessandro Fiscella come firmatario nei documenti cliente
 * (né in tabella firme né nella sezione finale dei preventivi)
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  PageNumber, Header, Footer, ImageRun, LevelFormat
} = require('docx');
const fs = require('fs');
const path = require('path');

// ─── COSTANTI COLORI ───────────────────────────────────────────────
const NAVY  = "1A3A5C";   // sfondo sezioni, header tabelle, testo titoli
const GOLD  = "B8924A";   // accenti, linee separatrici, underline articoli
const GRAY  = "888888";   // testo secondario, footer, italic note
const DARK  = "1A1A2E";   // testo corpo principale
const LIGHT = "F5F7FA";   // sfondo righe alternate chiare
const WHITE = "FFFFFF";   // sfondo card, testo su sfondo scuro

// ─── BORDER HELPERS ────────────────────────────────────────────────
const nb  = () => ({ top:{style:BorderStyle.NONE}, bottom:{style:BorderStyle.NONE}, left:{style:BorderStyle.NONE}, right:{style:BorderStyle.NONE} });
const cb  = { style:BorderStyle.SINGLE, size:1, color:"DDDDDD" };
const brd = { top:cb, bottom:cb, left:cb, right:cb };

// ─── LOGO ──────────────────────────────────────────────────────────
// Logo standard (sfondo chiaro) — 676x369px RGBA
const LOGO_PATH   = path.join(__dirname, 'qctech_logo.png');
// Logo bianco (sfondo scuro) — 676x369px RGBA
const LOGO_WHITE_PATH = path.join(__dirname, 'qctech_logo_white.png');
const logo   = fs.readFileSync(LOGO_PATH);
const symbol = fs.readFileSync(LOGO_PATH); // simbolo = stesso logo ridotto

// Proporzioni logo 676x369 → scala mantenuta
const LOGO_W = 150, LOGO_H = Math.round(369/676*150); // ~82px
const LOGO_SM_W = 22, LOGO_SM_H = Math.round(369/676*22); // ~12px

// ─── HEADER ────────────────────────────────────────────────────────
const makeHeader = () => new Header({ children:[
  new Table({
    width:{size:9026,type:WidthType.DXA},
    borders:{top:{style:BorderStyle.NONE},bottom:{style:BorderStyle.NONE},left:{style:BorderStyle.NONE},right:{style:BorderStyle.NONE},insideH:{style:BorderStyle.NONE},insideV:{style:BorderStyle.NONE}},
    rows:[new TableRow({ height:{value:500}, children:[
      new TableCell({ width:{size:4500,type:WidthType.DXA}, borders:nb(), verticalAlign:VerticalAlign.CENTER,
        children:[new Paragraph({children:[new ImageRun({data:logo,transformation:{width:LOGO_W,height:LOGO_H},type:"png"})]})] }),
      new TableCell({ width:{size:4526,type:WidthType.DXA}, borders:nb(), children:[
        new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({text:"hello@qc-tech.co.uk  |  qc-tech.co.uk  |  +44 7754 812247 (WhatsApp)",color:GRAY,size:16,font:"Arial"})]}),
        new Paragraph({alignment:AlignmentType.RIGHT,children:[new TextRun({text:"Bishop\u2019s Stortford, Hertfordshire, England",color:GRAY,size:16,font:"Arial"})]})
      ]})
    ]})]
  }),
  new Paragraph({children:[],border:{bottom:{style:BorderStyle.SINGLE,size:8,color:GOLD,space:4}},spacing:{before:60}})
]});

// ─── FOOTER ────────────────────────────────────────────────────────
const makeFooter = () => new Footer({ children:[
  new Paragraph({children:[],border:{top:{style:BorderStyle.SINGLE,size:6,color:GOLD,space:4}},spacing:{before:60}}),
  new Table({
    width:{size:9026,type:WidthType.DXA},
    borders:{top:{style:BorderStyle.NONE},bottom:{style:BorderStyle.NONE},left:{style:BorderStyle.NONE},right:{style:BorderStyle.NONE},insideH:{style:BorderStyle.NONE},insideV:{style:BorderStyle.NONE}},
    rows:[new TableRow({children:[
      new TableCell({width:{size:500,type:WidthType.DXA},borders:nb(),verticalAlign:VerticalAlign.CENTER,
        children:[new Paragraph({children:[new ImageRun({data:symbol,transformation:{width:LOGO_SM_W,height:LOGO_SM_H},type:"png"})]})]}),
      new TableCell({width:{size:7526,type:WidthType.DXA},borders:nb(),
        children:[new Paragraph({children:[new TextRun({text:"Quantum Code Technologies Ltd \u2014 Registered in England and Wales \u2014 Company No. \u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014",color:GRAY,size:16,font:"Arial"})]})]}),
      new TableCell({width:{size:1000,type:WidthType.DXA},borders:nb(),
        children:[new Paragraph({alignment:AlignmentType.RIGHT,children:[
          new TextRun({text:"Pag. ",color:GRAY,size:16,font:"Arial"}),
          new TextRun({children:[PageNumber.CURRENT],color:GRAY,size:16,font:"Arial"})
        ]})]})
    ]})]
  })
]});

// ─── NUMBERING CONFIG ──────────────────────────────────────────────
const NUMBERING = {config:[{
  reference:"bullets",
  levels:[{level:0,format:LevelFormat.BULLET,text:"\u2022",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:360}}}}]
}]};

// ─── PAGE PROPERTIES ──────────────────────────────────────────────
const PAGE_A4 = {size:{width:11906,height:16838},margin:{top:1440,right:1440,bottom:1440,left:1440}};

// ─── HELPERS PARAGRAFO ─────────────────────────────────────────────
const sp = (before=160) => new Paragraph({children:[],spacing:{before}});

const bd = (text, opts={}) => new Paragraph({
  children:[new TextRun({text,color:DARK,size:21,font:"Arial",...opts})],
  spacing:{after:140}
});

const bl = (text) => new Paragraph({
  numbering:{reference:"bullets",level:0},
  children:[new TextRun({text,color:DARK,size:21,font:"Arial"})],
  spacing:{after:80}
});

const hline = () => new Paragraph({
  children:[],
  border:{bottom:{style:BorderStyle.SINGLE,size:8,color:GOLD,space:4}},
  spacing:{before:60,after:200}
});

// ─── SEZIONE BANNER NAVY ───────────────────────────────────────────
const secNum = (n, title) => new Paragraph({
  children:[new TextRun({text:`${n}. ${title.toUpperCase()}`,bold:true,color:WHITE,size:22,font:"Arial"})],
  spacing:{before:300,after:0},
  shading:{fill:NAVY,type:ShadingType.CLEAR},
  indent:{left:160,right:160}
});

const secLabel = (label, title) => new Paragraph({
  children:[new TextRun({text:`${label}. ${title.toUpperCase()}`,bold:true,color:WHITE,size:22,font:"Arial"})],
  spacing:{before:300,after:0},
  shading:{fill:NAVY,type:ShadingType.CLEAR},
  indent:{left:160,right:160}
});

// ─── ARTICOLO ─────────────────────────────────────────────────────
const art = (n, title) => new Paragraph({
  children:[new TextRun({text:`Art. ${n} \u2014 ${title}`,bold:true,color:NAVY,size:21,font:"Arial"})],
  spacing:{before:240,after:100},
  border:{bottom:{style:BorderStyle.SINGLE,size:4,color:GOLD,space:2}}
});

// ─── TITOLO SEZIONE (stile preventivo) ────────────────────────────
const sectionTitle = (text) => new Paragraph({
  children:[new TextRun({text,bold:true,color:NAVY,size:26,font:"Arial"})],
  spacing:{before:320,after:120},
  border:{bottom:{style:BorderStyle.SINGLE,size:6,color:GOLD,space:4}}
});

// ─── ROW TABELLA ───────────────────────────────────────────────────
// REGOLA CONTRASTO OBBLIGATORIA:
// Sfondo NAVY → testo BIANCO + bold
// Sfondo LIGHT/WHITE → testo DARK
// MAI testo scuro su sfondo scuro.
const row = (cells, isH=false) => new TableRow({
  children: cells.map(({t, w, a=AlignmentType.LEFT, s}) => {
    const darkBg = isH || s === NAVY;
    return new TableCell({
      width:{size:w,type:WidthType.DXA},
      borders:brd,
      shading: s ? {fill:s,type:ShadingType.CLEAR} : isH ? {fill:NAVY,type:ShadingType.CLEAR} : {fill:WHITE,type:ShadingType.CLEAR},
      margins:{top:100,bottom:100,left:140,right:140},
      children:[new Paragraph({
        alignment:a,
        children:[new TextRun({text:t,bold:darkBg,color:darkBg?WHITE:DARK,size:20,font:"Arial"})]
      })]
    });
  })
});

// ─── TABELLA PARTI ─────────────────────────────────────────────────
// SEMPRE affiancata 50/50 — MAI due tabelle verticali separate
const makePartiTable = (fornitoreRows, clienteRows) => new Table({
  width:{size:9026,type:WidthType.DXA},
  columnWidths:[4513,4513],
  rows:[
    row([{t:"FORNITORE",w:4513},{t:"CLIENTE",w:4513}],true),
    new TableRow({children:[
      new TableCell({width:{size:4513,type:WidthType.DXA},borders:brd,margins:{top:120,bottom:120,left:160,right:160},children:fornitoreRows}),
      new TableCell({width:{size:4513,type:WidthType.DXA},borders:brd,margins:{top:120,bottom:120,left:160,right:160},children:clienteRows}),
    ]})
  ]
});

const partiRow = (label, value) => new Paragraph({
  children:[
    new TextRun({text:`${label}: `,bold:true,color:DARK,size:20,font:"Arial"}),
    new TextRun({text:value,color:DARK,size:20,font:"Arial"})
  ],
  spacing:{after:60}
});

// ─── INTESTAZIONE DOCUMENTO ────────────────────────────────────────
const makeDocHeader = (title, subtitle, refString) => [
  sp(200),
  new Paragraph({children:[new TextRun({text:title,bold:true,color:NAVY,size:32,font:"Arial"})],spacing:{after:60}}),
  new Paragraph({children:[new TextRun({text:subtitle,bold:true,color:GOLD,size:24,font:"Arial"})],spacing:{after:60}}),
  new Paragraph({children:[new TextRun({text:"UK-based studio, worldwide reach",color:GRAY,size:18,font:"Arial",italics:true})],spacing:{after:60}}),
  new Paragraph({children:[new TextRun({text:refString,color:GRAY,size:20,font:"Arial"})],
    border:{bottom:{style:BorderStyle.SINGLE,size:8,color:GOLD,space:6}},spacing:{after:200}}),
];

// ─── NOTA EUR ──────────────────────────────────────────────────────
const notaEur = () => new Paragraph({
  children:[new TextRun({
    text:"* L\u2019importo in EUR \u00e8 orientativo al tasso di cambio del giorno di emissione (\u00a31 = \u20ac1,17) e non costituisce importo contrattualmente vincolante. L\u2019importo dovuto \u00e8 quello espresso in GBP (\u00a3). Pagamento tramite bonifico bancario SEPA alle coordinate comunicate da Quantum Code Technologies Ltd. Fatture con scadenza 14 giorni dalla data di emissione.",
    color:GRAY,size:18,font:"Arial",italics:true
  })],
  spacing:{after:120}
});

// ─── FIRME ─────────────────────────────────────────────────────────
// FIRMATARIO UFFICIALE QC TECH: Vincenzo Sedita — Co-Founder & Commercial Director
// MAI usare Alessandro Fiscella come firmatario
const makeFirme = (firmatarioQCTech, firmatarioCliente, ruoloCliente) => [
  new Table({
    width:{size:9026,type:WidthType.DXA},
    columnWidths:[4513,4513],
    rows:[new TableRow({children:[
      new TableCell({width:{size:4513,type:WidthType.DXA},borders:nb(),children:[
        new Paragraph({children:[new TextRun({text:"Per Quantum Code Technologies Ltd",bold:true,color:NAVY,size:21,font:"Arial"})],spacing:{after:160}}),
        new Paragraph({children:[new TextRun({text:firmatarioQCTech,color:DARK,size:20,font:"Arial"})],spacing:{after:200}}),
        new Paragraph({children:[new TextRun({text:"Firma: ___________________________",color:DARK,size:21,font:"Arial"})],spacing:{after:120}}),
        new Paragraph({children:[new TextRun({text:"Data: ____________________________",color:DARK,size:21,font:"Arial"})]}),
      ]}),
      new TableCell({width:{size:4513,type:WidthType.DXA},borders:nb(),children:[
        new Paragraph({children:[new TextRun({text:"Per il Cliente",bold:true,color:NAVY,size:21,font:"Arial"})],spacing:{after:160}}),
        new Paragraph({children:[new TextRun({text:`${firmatarioCliente} \u2014 ${ruoloCliente}`,color:DARK,size:20,font:"Arial"})],spacing:{after:200}}),
        new Paragraph({children:[new TextRun({text:"Firma: ___________________________",color:DARK,size:21,font:"Arial"})],spacing:{after:120}}),
        new Paragraph({children:[new TextRun({text:"Data: ____________________________",color:DARK,size:21,font:"Arial"})]}),
      ]}),
    ]})]
  }),
  sp(160),
  new Paragraph({children:[new TextRun({
    text:"Con la firma del presente contratto, le Parti dichiarano di aver letto, compreso e accettato integralmente tutte le clausole sopra riportate.",
    color:GRAY,size:18,font:"Arial",italics:true
  })],spacing:{after:0}})
];

// ─── CLAUSOLE STANDARD ─────────────────────────────────────────────
const clausolaIP = () => [
  bd("Tutto il codice sorgente, l\u2019architettura, i componenti software, il design system, le interfacce grafiche, i database, gli algoritmi, la documentazione tecnica e qualsiasi altro materiale digitale sviluppato da Quantum Code Technologies Ltd nell\u2019ambito del presente Contratto restano di propriet\u00e0 esclusiva e permanente di Quantum Code Technologies Ltd. Al Cliente \u00e8 concessa una licenza d\u2019uso personale, non esclusiva e non trasferibile, valida esclusivamente per la durata del contratto attivo. La licenza decade automaticamente alla rescissione, alla scadenza senza rinnovo o al mancato pagamento dei canoni dovuti."),
  bd("Alla cessazione del Contratto, Quantum Code Technologies Ltd proceder\u00e0 alla cancellazione definitiva di tutti i dati e asset forniti dal Cliente ai sensi dell\u2019Art. 17 e dell\u2019Art. 5, par. 1, lett. e) del Regolamento UE 2016/679 (GDPR), entro 30 giorni dalla data di cessazione, con conferma scritta.")
];

const clausolaHosting = () => [
  bd("Il provider di hosting, il registrar del dominio, la configurazione server e l\u2019infrastruttura tecnica adottata da Quantum Code Technologies Ltd sono informazioni operative riservate. Il Cliente prende atto che il prodotto sar\u00e0 ospitato su infrastruttura cloud gestita da Quantum Code Technologies Ltd per tutta la durata del Contratto. Il dominio sar\u00e0 registrato a nome del Cliente e trasferito al suo controllo al saldo completo di tutti i corrispettivi dovuti.")
];

const clausolaPenale = (descrizione) => [
  bd(`Il presente Contratto ha una durata minima di 36 mesi. Il Cliente pu\u00f2 recedere con preavviso scritto di 60 giorni a hello@qc-tech.co.uk. Nel caso in cui il Cliente rescinda prima del completamento del periodo minimo, tale rescissione costituir\u00e0 una violazione contrattuale (breach of contract). ${descrizione} Tale importo costituisce una stima genuina del danno subito (Cavendish Square Holdings BV v El Makdessi [2015] UKSC 67), esigibile entro 30 giorni dal recesso.`)
];

const clausolaLegge = () => [
  bd("Il presente Contratto \u00e8 regolato dalla legge di Inghilterra e Galles. Le Parti si impegnano a tentare una risoluzione amichevole entro 30 giorni dalla prima contestazione scritta. In mancanza di accordo, il foro esclusivamente competente \u00e8 quello di Hertfordshire (England and Wales), fatti salvi i diritti inderogabili del consumatore eventualmente previsti dalla normativa del paese del Cliente.")
];

const clausolaIVA = () =>
  bd("Il corrispettivo \u00e8 esente da IVA in quanto Quantum Code Technologies Ltd opera in regime di esenzione ai sensi della normativa sulla registrazione IVA nel Regno Unito (VAT threshold \u2014 HMRC).");

// ─── EXPORT ────────────────────────────────────────────────────────
module.exports = {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  PageNumber, Header, Footer, ImageRun, LevelFormat,
  NAVY, GOLD, GRAY, DARK, LIGHT, WHITE,
  nb, cb, brd,
  logo, symbol,
  NUMBERING, PAGE_A4,
  makeHeader, makeFooter, makePartiTable, partiRow, makeDocHeader, makeFirme,
  sp, bd, bl, hline, secNum, secLabel, art, sectionTitle, row, notaEur,
  clausolaIP, clausolaHosting, clausolaPenale, clausolaLegge, clausolaIVA,
};
