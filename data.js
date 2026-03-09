// ══════════════════════════════════════════════════════
//  data.js — LawuProperty
//  Pusat data semua properti.
//  Ganti SHEET_URL dengan link Google Sheets kamu.
// ══════════════════════════════════════════════════════

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTsJ_jbhACTk4I-ox5nAKaz7mA4WXoxTtZN1zKLklBAe40ods8RWhFyenJDN3kU3tHTJ3jRCxJW7ija/pub?gid=1559182298&single=true&output=csv';

const DUMMY_DATA = [
  {
    id: 1, tipe: "Rumah", status: "jual", unggulan: true,
    nama: "Dijual Rumah Minimalis View Kebun Teh di Ngargoyoso",
    lokasi: "Ngargoyoso, Kemuning — Kab. Karanganyar",
    wilayah: "Ngargoyoso",
    harga: 850, hargaLabel: "Rp 850 Juta", hargaKet: "Harga",
    kt: 3, km: 2, lt: "180", lb: "120",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Siap Huni", garasi: "1 Mobil", listrik: "2200 Watt", air: "Sumur"
  },
  {
    id: 2, tipe: "Tanah", status: "jual", unggulan: true,
    nama: "Dijual Tanah Strategis Pinggir Jalan Wisata Ngargoyoso",
    lokasi: "Puntukrejo, Ngargoyoso — Kab. Karanganyar",
    wilayah: "Ngargoyoso",
    harga: 400, hargaLabel: "Rp 1,5 Juta/m²", hargaKet: "Harga/m²",
    kt: 0, km: 0, lt: "280", lb: "0",
    img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Tanah Kosong", garasi: "-", listrik: "-", air: "-"
  },
  {
    id: 3, tipe: "Villa", status: "jual", unggulan: true,
    nama: "Dijual Villa Mewah Private Pool View Gunung Lawu Tawangmangu",
    lokasi: "Tawangmangu — Kab. Karanganyar",
    wilayah: "Tawangmangu",
    harga: 3500, hargaLabel: "Rp 3,5 Miliar", hargaKet: "Harga",
    kt: 4, km: 4, lt: "600", lb: "320",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Siap Huni", garasi: "3 Mobil", listrik: "7700 Watt", air: "Sumur"
  },
  {
    id: 4, tipe: "Kebun", status: "jual", unggulan: false,
    nama: "Dijual Kebun Teh Produktif Kawasan Kemuning Ngargoyoso",
    lokasi: "Kemuning, Ngargoyoso — Kab. Karanganyar",
    wilayah: "Ngargoyoso",
    harga: 1200, hargaLabel: "Rp 1,2 Miliar", hargaKet: "Harga",
    kt: 0, km: 0, lt: "5000", lb: "0",
    img: "https://images.unsplash.com/photo-1558618047-f4e72b43285f?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Produktif", garasi: "-", listrik: "-", air: "Sumber Mata Air"
  },
  {
    id: 5, tipe: "Rumah", status: "jual", unggulan: false,
    nama: "Dijual Rumah Asri Udara Sejuk di Karangpandan Karanganyar",
    lokasi: "Karangpandan — Kab. Karanganyar",
    wilayah: "Karangpandan",
    harga: 650, hargaLabel: "Rp 650 Juta", hargaKet: "Harga",
    kt: 3, km: 2, lt: "200", lb: "140",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Siap Huni", garasi: "1 Mobil", listrik: "2200 Watt", air: "PDAM"
  },
  {
    id: 6, tipe: "Tanah", status: "jual", unggulan: false,
    nama: "Dijual Tanah Kavling Dekat Wisata Air Terjun Tawangmangu",
    lokasi: "Tawangmangu — Kab. Karanganyar",
    wilayah: "Tawangmangu",
    harga: 500, hargaLabel: "Rp 2 Juta/m²", hargaKet: "Harga/m²",
    kt: 0, km: 0, lt: "250", lb: "0",
    img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Tanah Kosong", garasi: "-", listrik: "-", air: "-"
  },
  {
    id: 7, tipe: "Villa", status: "sewa", unggulan: false,
    nama: "Disewa Villa Keluarga View Sawah Karangpandan, Fasilitas Lengkap",
    lokasi: "Karangpandan — Kab. Karanganyar",
    wilayah: "Karangpandan",
    harga: 80, hargaLabel: "Rp 80 Juta", hargaKet: "Per Tahun",
    kt: 3, km: 3, lt: "400", lb: "200",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Siap Huni", garasi: "2 Mobil", listrik: "4400 Watt", air: "Sumur"
  },
  {
    id: 8, tipe: "Rumah", status: "sewa", unggulan: false,
    nama: "Disewa Rumah Nyaman Dekat Pasar Tawangmangu",
    lokasi: "Tawangmangu — Kab. Karanganyar",
    wilayah: "Tawangmangu",
    harga: 18, hargaLabel: "Rp 18 Juta", hargaKet: "Per Tahun",
    kt: 2, km: 1, lt: "120", lb: "80",
    img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Siap Huni", garasi: "1 Motor", listrik: "1300 Watt", air: "PDAM"
  },
  {
    id: 9, tipe: "Kebun", status: "jual", unggulan: false,
    nama: "Dijual Lahan Pertanian Subur View Gunung Lawu Karangpandan",
    lokasi: "Karangpandan — Kab. Karanganyar",
    wilayah: "Karangpandan",
    harga: 750, hargaLabel: "Rp 750 Juta", hargaKet: "Harga",
    kt: 0, km: 0, lt: "3000", lb: "0",
    img: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Produktif", garasi: "-", listrik: "-", air: "Irigasi"
  },
  {
    id: 10, tipe: "Tanah", status: "jual", unggulan: false,
    nama: "Dijual Tanah SHM Luas Cocok untuk Villa / Homestay Ngargoyoso",
    lokasi: "Ngargoyoso — Kab. Karanganyar",
    wilayah: "Ngargoyoso",
    harga: 900, hargaLabel: "Rp 900 Juta", hargaKet: "Harga",
    kt: 0, km: 0, lt: "450", lb: "0",
    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&auto=format",
    sertifikat: "SHM", kondisi: "Tanah Kosong", garasi: "-", listrik: "-", air: "-"
  },
];

async function loadProperties() {
  if (SHEET_URL === 'GANTI_DENGAN_URL_GOOGLE_SHEETS_KAMU') {
    console.log('ℹ️ Pakai data dummy. Isi SHEET_URL untuk pakai Google Sheets.');
    return DUMMY_DATA;
  }
  try {
    const res = await fetch(SHEET_URL);
    const csv = await res.text();
    const parsed = parseCSV(csv);
    console.log(`✅ Berhasil load ${parsed.length} properti dari Google Sheets`);
    return parsed.length > 0 ? parsed : DUMMY_DATA;
  } catch (err) {
    console.warn('⚠️ Gagal load Google Sheets, pakai data dummy.', err);
    return DUMMY_DATA;
  }
}

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  if (lines.length < 2) return [];

  // Auto-detect baris header — skip baris judul/instruksi di atas
  let headerIdx = 0;
  for (let i = 0; i < Math.min(lines.length, 10); i++) {
    const cols = lines[i].split(',').map(h => h.trim().replace(/"/g, '').toLowerCase());
    if (cols.includes('tipe') && cols.includes('status') && cols.includes('nama')) {
      headerIdx = i;
      break;
    }
  }

  const headers = lines[headerIdx].split(',').map(h => h.trim().replace(/"/g, ''));
  return lines.slice(headerIdx + 1).map((line, idx) => {
    const values = splitCSVLine(line);
    const row = {};
    headers.forEach((h, i) => { row[h] = (values[i] || '').replace(/"/g, '').trim(); });
    return {
      id: parseInt(row.id) || idx + 1,
      tipe: row.tipe || 'Rumah',
      status: (row.status || 'jual').toLowerCase(),
      unggulan: row.unggulan === 'true' || row.unggulan === '1',
      nama: row.nama || '',
      lokasi: row.lokasi || '',
      wilayah: row.wilayah || '',
      harga: parseFloat(row.harga) || 0,
      hargaLabel: row.hargaLabel || '',
      hargaKet: row.hargaKet || 'Harga',
      kt: parseInt(row.kt) || 0,
      km: parseInt(row.km) || 0,
      lt: row.lt || '0',
      lb: row.lb || '0',
      img: row.img1 || row.img || 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600',
      imgs: [row.img1,row.img2,row.img3,row.img4,row.img5].filter(x => x && x.trim() !== ''),
      sertifikat: row.sertifikat || 'SHM',
      kondisi: row.kondisi || 'Siap Huni',
      garasi: row.garasi || '-',
      listrik: row.listrik || '-',
      air: row.air || '-',
    };
  }).filter(p => p.nama !== '');
}

function splitCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') { inQuotes = !inQuotes; }
    else if (line[i] === ',' && !inQuotes) { result.push(current); current = ''; }
    else { current += line[i]; }
  }
  result.push(current);
  return result;
}
