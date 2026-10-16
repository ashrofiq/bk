var SUPABASE_URL = 'https://venqqfuaqtrzvdoshvln.supabase.co';
var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbnFxZnVhcXRyenZkb3NodmxuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE0MDQ2ODMsImV4cCI6MjEwNjk4MDY4M30.1gVFCGvN9w_y2iy4gb8K1vwF3PLTcHUUdVynwfOqrv8';
var SUPABASE_FN_URL = SUPABASE_URL + '/functions/v1/validate-wa';

var LOGO_URL = 'https://www.smanklirong.sch.id/storage/school-identity/01M1GX0S27524DBWJKADF8FMCA.jpg';

var DEFAULT_GOOGLE_CLIENT_ID = '';
var GOOGLE_SCOPE = 'https://www.googleapis.com/auth/drive.appdata';
var GDRIVE_FOLDER_NAME = 'BK_Klirong_Backups';

var HARI_LIBUR = {
  '2026-01-01': 'Tahun Baru 2026',
  '2026-03-19': 'Hari Raya Nyepi',
  '2026-03-20': 'Cuti Bersama Nyepi',
  '2026-04-03': 'Wafat Isa Al-Masih',
  '2026-05-01': 'Hari Buruh Internasional',
  '2026-05-14': 'Kenaikan Isa Al-Masih',
  '2026-06-01': 'Hari Lahir Pancasila',
  '2026-08-17': 'Hari Kemerdekaan RI',
  '2026-12-25': 'Hari Raya Natal'
};

var SH = {
  SETTING:'Setting', KELAS:'Kelas', GURUBK:'GuruBK', GURUPIKET:'GuruPiket', SISWA:'Siswa',
  IZIN:'Perizinan', TERLAMBAT:'Keterlambatan', HADIR:'Kehadiran',
  KLASIKAL:'BimbinganKlasikal', KELOMPOK:'BimbinganKelompok',
  KR:'KunjunganRumah', KONSELING:'KonselingIndividual',
  PANGGILAN:'PanggilanOT', KASUS:'CatatanKasus',
  JURNAL:'JurnalHarian',
  KONFERENSI:'KonferensiKasus', ALIHTANGAN:'AlihTanganKasus', ANEKDOT:'CatatanAnekdot',
  LAINLAIN:'LainLain', MUTASI:'Mutasi'
};

var TABLES = {
  Setting:'bk_setting', Kelas:'bk_kelas', GuruBK:'bk_gurubk', GuruPiket:'bk_gurupiket',
  Siswa:'bk_siswa', Perizinan:'bk_perizinan', Keterlambatan:'bk_keterlambatan',
  Kehadiran:'bk_kehadiran', BimbinganKlasikal:'bk_bimbingan_klasikal',
  BimbinganKelompok:'bk_bimbingan_kelompok', KunjunganRumah:'bk_kunjungan_rumah',
  KonselingIndividual:'bk_konseling_individual', PanggilanOT:'bk_panggilan_ot',
  CatatanKasus:'bk_catatan_kasus', JurnalHarian:'bk_jurnal_harian',
  KonferensiKasus:'bk_konferensi_kasus', AlihTanganKasus:'bk_alih_tangan_kasus',
  CatatanAnekdot:'bk_catatan_anekdot', LainLain:'bk_lain_lain', Mutasi:'bk_mutasi'
};

var FIELD_MAP = {
  Kelas:  { Nama:'nama' },
  GuruBK: { ID:'id', Nama:'nama', NIP:'nip', KelasAmpu:'kelas_ampu', Username:'username', Password:'password', TtdBK:'ttd_bk' },
  GuruPiket: { ID:'id', Nama:'nama', NIP:'nip', Username:'username', Password:'password' },
  Siswa:  { NIS:'nis', Nama:'nama', Kelas:'kelas', JK:'jk', TanggalLahir:'tanggal_lahir', NoHP:'no_hp',
            NamaAyah:'nama_ayah', NoHPAyah:'no_hp_ayah', NamaIbu:'nama_ibu', NoHPIbu:'no_hp_ibu',
            StatusWASiswa:'wa_status_siswa', StatusWAAyah:'wa_status_ayah', StatusWAIbu:'wa_status_ibu' },
  Perizinan: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', Alasan:'alasan',
               JamKeluar:'jam_keluar', JamKembali:'jam_kembali', StatusKembali:'status_kembali',
               Petugas:'petugas', Keterangan:'keterangan' },
  Keterlambatan: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', Alasan:'alasan',
                   JamDatang:'jam_datang', Petugas:'petugas', Keterangan:'keterangan' },
  Kehadiran: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', Status:'status',
               Keterangan:'keterangan', Petugas:'petugas' },
  BimbinganKlasikal: { ID:'id', Tanggal:'tanggal', JamKe:'jam_ke', Kelas:'kelas', Topik:'topik',
                       Tujuan:'tujuan', Metode:'metode', Media:'media', JumlahSiswa:'jumlah_siswa',
                       JumlahHadir:'jumlah_hadir', Catatan:'catatan' },
  BimbinganKelompok: { ID:'id', Tanggal:'tanggal', Topik:'topik', Tujuan:'tujuan', Anggota:'anggota',
                       Hasil:'hasil', Kelas:'kelas', JumlahAnggota:'jumlah_anggota',
                       JumlahHadir:'jumlah_hadir', JumlahTidakHadir:'jumlah_tidak_hadir', Petugas:'petugas' },
  KunjunganRumah: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas',
                    AlamatTujuan:'alamat_tujuan', Masalah:'masalah', Tujuan:'tujuan',
                    Petugas1:'petugas1', TTD1:'ttd1', Petugas2:'petugas2', TTD2:'ttd2',
                    NamaOrtu:'nama_ortu', TTD_Ortu:'ttd_ortu', Hasil:'hasil', Rencana:'rencana' },
  KonselingIndividual: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas',
                         JenisLayanan:'jenis_layanan', Masalah:'masalah', Tujuan:'tujuan',
                         Pendekatan:'pendekatan', Hasil:'hasil', Rencana:'rencana' },
  PanggilanOT: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', NamaOrtu:'nama_ortu',
                 HubunganOrtu:'hubungan_ortu', Masalah:'masalah', Tujuan:'tujuan', Hasil:'hasil',
                 Rencana:'rencana', TTD_Ortu:'ttd_ortu' },
  CatatanKasus: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', Deskripsi:'deskripsi',
                  Tindakan:'tindakan', TindakLanjut:'tindak_lanjut' },
  JurnalHarian: { ID:'id', Tanggal:'tanggal', Kegiatan:'kegiatan', Petugas:'petugas', Keterangan:'keterangan' },
  KonferensiKasus: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas',
                     JudulKasus:'judul_kasus', Deskripsi:'deskripsi', Peserta:'peserta', Hasil:'hasil',
                     Keputusan:'keputusan', TindakLanjut:'tindak_lanjut' },
  AlihTanganKasus: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', Alasan:'alasan',
                     TujuanAlih:'tujuan_alih', PihakPenerima:'pihak_penerima', Catatan:'catatan',
                     Status:'status', TindakLanjut:'tindak_lanjut' },
  CatatanAnekdot: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', Kelas:'kelas', Catatan:'catatan',
                    TindakLanjut:'tindak_lanjut', Keterangan:'keterangan' },
  LainLain: { ID:'id', Tanggal:'tanggal', Kegiatan:'judul', Anggota:'nama', Keterangan:'keterangan', Petugas:'petugas' },
  Mutasi: { ID:'id', Tanggal:'tanggal', NIS:'nis', Nama:'nama', KelasAsal:'kelas_asal',
            KelasTujuan:'kelas_tujuan', Jenis:'jenis', Alasan:'alasan', Keterangan:'keterangan', Petugas:'petugas' }
};

function pkOf(sheet){
  if(sheet === SH.KELAS)   return 'nama';
  if(sheet === SH.SISWA)   return 'nis';
  if(sheet === SH.SETTING) return 'key';
  return 'id';
}
function idOf(sheet, obj){
  obj = obj || {};
  if(sheet === SH.KELAS)   return String(obj.Nama || obj.nama || obj.ID || uid());
  if(sheet === SH.SISWA){
    var v = (obj.NIS !== undefined && obj.NIS !== null) ? obj.NIS : (obj.nis !== undefined && obj.nis !== null ? obj.nis : '');
    return String(v);
  }
  if(sheet === SH.SETTING) return String(obj.Key || obj.key || '');
  return obj.ID || uid();
}
function toRow(sheet, obj){
  var map = FIELD_MAP[sheet];
  var row = {};
  if(!map) return row;
  Object.keys(map).forEach(function(k){
    if(Object.prototype.hasOwnProperty.call(obj, k) && obj[k] !== undefined) row[map[k]] = obj[k];
  });
  return row;
}
function fromRow(sheet, row){
  if(!row) return null;
  var map = FIELD_MAP[sheet];
  if(!map){
    if(sheet === SH.SETTING) return { Key: row.key, Value: row.value };
    return Object.assign({}, row);
  }
  var obj = {};
  Object.keys(map).forEach(function(k){
    var col = map[k];
    if(row[col] !== undefined && row[col] !== null) obj[k] = row[col];
  });
  if(sheet === SH.KELAS){ obj.Nama = row.nama; obj.ID = row.nama; }
  if(sheet === SH.SETTING){ obj.Key = row.key; obj.Value = row.value; }
  return obj;
}

var _sbClient = null;
function sbClient(){
  if(!_sbClient){
    if(!window.supabase || !window.supabase.createClient){
      throw new Error('Supabase JS belum dimuat. Cek koneksi internet.');
    }
    _sbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: false, autoRefreshToken: false }
    });
  }
  return _sbClient;
}

function pesanErrorDatabase(e, konteks){
  var msg = String((e && (e.message || e.details || e.hint)) || e || 'Kesalahan tidak diketahui');
  var code = String((e && e.code) || '');
  if(code === '42501' || /row-level security|permission denied|not allowed/i.test(msg)){
    return 'Akses database ditolak oleh kebijakan/izin Supabase. Periksa RLS Policy untuk tabel yang digunakan. ('+msg+')';
  }
  if(code === '42P01' || code === 'PGRST205' || /could not find the table|relation .* does not exist|table .* not found/i.test(msg)){
    return 'Tabel database tidak ditemukan atau belum masuk schema cache Supabase. Periksa nama tabel: '+(konteks||'')+'. ('+msg+')';
  }
  if(code === '42703' || code === 'PGRST204' || /column .* does not exist|could not find the .* column/i.test(msg)){
    return 'Nama kolom database tidak cocok dengan script pada tabel '+(konteks||'')+'. ('+msg+')';
  }
  if(/fetch|failed to fetch|networkerror|load failed/i.test(msg)){
    return 'Gagal terhubung ke Supabase. Periksa internet, URL project, dan anon key. ('+msg+')';
  }
  if(code === '23505') return 'Data duplikat: nilai kunci utama/unik sudah digunakan. ('+msg+')';
  if(code === '22P02') return 'Format data tidak sesuai tipe kolom database (misalnya ID UUID atau tanggal). ('+msg+')';
  return msg;
}
function invalidasiCacheSetelahTulis(action, payload){
  payload = payload || {};
  var aksiTulis = {
    saveRecord:1, updateRecord:1, deleteRecord:1, saveKehadiranBulk:1,
    importAbsenBulanan:1, saveSiswa:1, deleteSiswa:1, importSiswa:1,
    addKelas:1, deleteKelas:1, importKelas:1, saveGuruBK:1, deleteGuruBK:1,
    saveGuruPiket:1, deleteGuruPiket:1, saveSetting:1, saveUserTamu:1,
    deleteUserTamu:1, saveKontakSiswa:1, setSiswaInputLock:1,
    setSiswaWaStatus:1, restoreAll:1
  };
  if(!aksiTulis[action]) return;
  ['lpAll','lp','rpAll','rp','jurnal_view','jurnal','view_izin','view_terlambat',
   'v_klasikal','v_kelompok','v_kr','v_konseling','v_panggilan','v_kasus',
   'v_konferensi','v_alihtangan','v_anekdot','v_lainlain'].forEach(function(k){
    ST.cache[k] = null; ST.cacheTTL[k] = 0;
  });
  Object.keys(ST.cache || {}).forEach(function(k){
    if(k.indexOf('HADIR|') === 0){ ST.cache[k] = null; ST.cacheTTL[k] = 0; }
  });
  _hadirLoading = {};
  if(payload.sheet){
    ST.cache[payload.sheet] = null;
    ST.cache['view_'+payload.sheet] = null;
    ST.cache['v_'+payload.sheet] = null;
  }
  if(['saveSiswa','deleteSiswa','importSiswa','addKelas','deleteKelas','importKelas',
      'saveGuruBK','deleteGuruBK','saveGuruPiket','deleteGuruPiket','saveSetting','restoreAll'].indexOf(action) >= 0){
    try{ localStorage.removeItem('bk_master'); }catch(e){}
  }
}
async function api(action, payload){
  payload = payload || {};
  try {
    var result = await _apiImpl(action, payload);
    invalidasiCacheSetelahTulis(action, payload);
    return result;
  }
  catch(e){
    console.error('[SB] error', action, e);
    var konteks = payload.sheet || payload.table || action;
    throw new Error(pesanErrorDatabase(e, konteks));
  }
}

async function fetchAllRowsPaginated(sb, table, opts){
  opts = opts || {};
  var pageSize = 1000;
  var from = 0;
  var allRows = [];
  while(true){
    var q = sb.from(table).select('*').range(from, from + pageSize - 1);
    if(opts.since) q = q.gte('tanggal', opts.since);
    if(opts.until) q = q.lte('tanggal', opts.until);
    if(opts.orderBy) q = q.order(opts.orderBy, { ascending: opts.asc !== false });
    var r = await q;
    if(r.error) throw r.error;
    var rows = r.data || [];
    allRows = allRows.concat(rows);
    if(rows.length < pageSize) break;
    from += pageSize;
  }
  return allRows;
}

async function _apiImpl(action, payload){
  var sb = sbClient();
  switch(action){

    case 'login': {
      var username = String(payload.username||'').trim().toLowerCase();
      var password = String(payload.password||'');
      var r = await sb.from('bk_users').select('*').eq('username', username).eq('password', password).maybeSingle();
      if(r.error) throw r.error;
      if(!r.data){
        var rs = await sb.from('bk_siswa').select('*').ilike('nama', username + '%');
        if(rs.error) throw rs.error;
        var siswaMatch = (rs.data || []).find(function(row){
          var namaLengkap = String(row.nama || '').trim();
          var namaDepan = (namaLengkap.split(/\s+/)[0] || '').toLowerCase();
          var tanggalLahir = String(row.tanggal_lahir || '').slice(0, 10);
          return namaDepan === username && tanggalLahir === password.trim();
        });
        if(siswaMatch){
          var siswaObj = fromRow(SH.SISWA, siswaMatch);
          return { token:'sb_'+uid(), role:'siswa', username: String(siswaMatch.nis || username),
                   siswa: siswaObj, guru_id:null, guru:null,
                   expiresAt: Date.now() + 30*24*60*60*1000 };
        }
        throw new Error('Login siswa gagal. Periksa nama depan dan tanggal lahir dengan format YYYY-MM-DD.');
      }
      var u = r.data, guru = null;
      if(u.role === 'gurubk' && u.guru_id){
        var g = await sb.from('bk_gurubk').select('*').eq('id', u.guru_id).maybeSingle();
        if(g.error) throw g.error;
        if(g.data) guru = fromRow(SH.GURUBK, g.data);
      } else if(u.role === 'gurupiket' && u.guru_id){
        var gp = await sb.from('bk_gurupiket').select('*').eq('id', u.guru_id).maybeSingle();
        if(gp.error) throw gp.error;
        if(gp.data) guru = fromRow(SH.GURUPIKET, gp.data);
      }
      return { token:'sb_'+uid(), role:u.role, username:u.username, guru_id:u.guru_id||null, guru:guru,
               expiresAt: Date.now() + 30*24*60*60*1000 };
    }
    case 'logout': return { ok:true };

    case 'refreshMyGuru': {
      if(!ST.user || !ST.user.guru_id) return null;
      if(ST.user.role === 'siswa') return null;
      var tblR = (ST.user.role === 'gurupiket') ? 'bk_gurupiket' : 'bk_gurubk';
      var shR  = (ST.user.role === 'gurupiket') ? SH.GURUPIKET : SH.GURUBK;
      var g2 = await sb.from(tblR).select('*').eq('id', ST.user.guru_id).maybeSingle();
      if(g2.error) throw g2.error;
      return g2.data ? fromRow(shR, g2.data) : null;
    }

    case 'getMySiswa': {
      if(!ST.user || ST.user.role !== 'siswa') return null;
      var nisMe = String(ST.user.username||'');
      if(!nisMe) return null;
      var rMy = await sb.from('bk_siswa').select('*').eq('nis', nisMe).maybeSingle();
      if(rMy.error) throw rMy.error;
      return rMy.data ? fromRow(SH.SISWA, rMy.data) : null;
    }

    case 'saveKontakSiswa': {
      if(!ST.user || ST.user.role !== 'siswa') throw new Error('Hanya siswa yang dapat menyimpan data ini');
      var lockCheck = await sb.from('bk_kontrol_siswa').select('input_terkunci').eq('id',1).maybeSingle();
      if(lockCheck.error) throw lockCheck.error;
      if(lockCheck.data && lockCheck.data.input_terkunci) throw new Error('Input data siswa sedang dikunci oleh Administrator. Anda hanya dapat melihat data.');
      var nisKS = String(payload.NIS||'').trim();
      if(!nisKS) throw new Error('NIS tidak valid');
      if(String(ST.user.username) !== nisKS) throw new Error('Akses ditolak');
      var recKS = {};
      if(payload.NoHP !== undefined){ recKS.no_hp = formatPhoneForDB(payload.NoHP); recKS.wa_status_siswa = null; }
      if(payload.NamaAyah !== undefined) recKS.nama_ayah  = String(payload.NamaAyah||'').trim();
      if(payload.NoHPAyah !== undefined){ recKS.no_hp_ayah = formatPhoneForDB(payload.NoHPAyah); recKS.wa_status_ayah = null; }
      if(payload.NamaIbu !== undefined)  recKS.nama_ibu   = String(payload.NamaIbu||'').trim();
      if(payload.NoHPIbu !== undefined){ recKS.no_hp_ibu = formatPhoneForDB(payload.NoHPIbu); recKS.wa_status_ibu = null; }
      var rKS = await sb.from('bk_siswa').update(recKS).eq('nis', nisKS);
      if(rKS.error) throw rKS.error;
      var curKS = await sb.from('bk_siswa').select('*').eq('nis', nisKS).maybeSingle();
      if(curKS.error) throw curKS.error;
      return { ok:true, siswa: curKS.data ? fromRow(SH.SISWA, curKS.data) : null };
    }

    case 'changeAdminPassword': {
      var oldPw = String(payload.oldPassword||'');
      var newPw = String(payload.newPassword||'');
      if(!newPw || newPw.length < 4) throw new Error('Password baru minimal 4 karakter');
      var cur = await sb.from('bk_users').select('*').eq('username','admin').maybeSingle();
      if(cur.error) throw cur.error;
      if(!cur.data || cur.data.password !== oldPw) throw new Error('Password lama salah');
      var upd = await sb.from('bk_users').update({ password:newPw }).eq('username','admin');
      if(upd.error) throw upd.error;
      return { ok:true };
    }

    case 'bootstrap': {
      var res = await Promise.all([
        sb.from('bk_kelas').select('*').order('nama'),
        sb.from('bk_gurubk').select('*'),
        sb.from('bk_siswa').select('*'),
        sb.from('bk_setting').select('*')
      ]);
      var coreNames = ['bk_kelas','bk_gurubk','bk_siswa','bk_setting'];
      res.forEach(function(r,i){ if(r.error) throw new Error(coreNames[i]+': '+pesanErrorDatabase(r.error, coreNames[i])); });
      var lockRes = {data:null,error:null};
      try {
        lockRes = await sb.from('bk_kontrol_siswa').select('input_terkunci').eq('id', 1).maybeSingle();
        if(lockRes.error) throw lockRes.error;
      } catch(lockErr) {
        console.warn('[DB] Tabel bk_kontrol_siswa tidak dapat dibaca; aplikasi utama tetap berjalan.', lockErr);
        lockRes = {data:null,error:lockErr};
      }
      var kelas  = (res[0].data||[]).map(function(r){ return r.nama; }).filter(Boolean);
      var gurubk = (res[1].data||[]).map(function(r){ return fromRow(SH.GURUBK, r); });
      var siswa  = (res[2].data||[]).map(function(r){ return fromRow(SH.SISWA, r); });
      var setting = {};
      (res[3].data||[]).forEach(function(r){ setting[r.key] = r.value; });
      setting.inputSiswaTerkunci = !!(lockRes.data && lockRes.data.input_terkunci);
      if(lockRes.error) setting._peringatanKontrolSiswa = 'Tabel bk_kontrol_siswa gagal dibaca; fitur kunci input siswa perlu diperiksa.';
      var gurupiket = [];
      try {
        var gpRes = await sb.from('bk_gurupiket').select('*');
        if(!gpRes.error) gurupiket = (gpRes.data||[]).map(function(r){ return fromRow(SH.GURUPIKET, r); });
      } catch(e){ gurupiket = []; }
      var guru = null;
      if(ST.user && ST.user.role === 'gurubk' && ST.user.guru_id){
        guru = gurubk.find(function(g){ return String(g.ID) === String(ST.user.guru_id); }) || null;
      } else if(ST.user && ST.user.role === 'gurupiket' && ST.user.guru_id){
        guru = gurupiket.find(function(g){ return String(g.ID) === String(ST.user.guru_id); }) || null;
      }
      return { kelas:kelas, gurubk:gurubk, gurupiket:gurupiket, setting:setting, siswa:siswa, guru:guru };
    }

    case 'getData': {
      var sheet = payload.sheet;
      var tname = TABLES[sheet];
      if(!tname) throw new Error('Sheet tidak dikenal: '+sheet);
      var rawRows = await fetchAllRowsPaginated(sb, tname, { since: payload.since, until: payload.until });
      var out = rawRows.map(function(r){ return fromRow(sheet, r); });
      if(sheet === SH.KELAS){ out = out.map(function(r){ return { ID:r.Nama, Nama:r.Nama }; }); }
      return out;
    }

    case 'batchGetData': {
      var sheets = payload.sheets || [];
      var filters = payload.filters || {};
      var result = {}, errors = {};
      await Promise.all(sheets.map(async function(s){
        var tn = TABLES[s];
        if(!tn){ result[s] = []; errors[s] = 'Nama tabel tidak dikenal.'; return; }
        var f = filters[s] || {};
        try{
          var rawR = await fetchAllRowsPaginated(sb, tn, { since:f.since, until:f.until });
          result[s] = rawR.map(function(r){ return fromRow(s, r); });
        }catch(e){
          console.error('[DB] batchGetData gagal pada '+s+' ('+tn+')', e);
          result[s] = [];
          errors[s] = 'Gagal memuat '+s+' ('+tn+'): '+pesanErrorDatabase(e, tn);
        }
      }));
      if(Object.keys(errors).length) result.__errors = errors;
      return result;
    }

    case 'getAllForBackup': {
      var outB = { stores: {}, users: [] };
      var keysB = Object.keys(TABLES);
      for(var iB=0; iB<keysB.length; iB++){
        var sheetB = keysB[iB];
        var tnameB = TABLES[sheetB];
        try{
          var rowsB = await fetchAllRowsPaginated(sb, tnameB);
          outB.stores[sheetB] = rowsB.map(function(r){ return fromRow(sheetB, r); });
        }catch(eB){
          console.warn('[Backup] gagal ambil '+sheetB, eB);
          outB.stores[sheetB] = [];
        }
      }
      try{
        var usersB = await fetchAllRowsPaginated(sb, 'bk_users');
        outB.users = usersB || [];
      }catch(eU){ outB.users = []; }
      return outB;
    }

    case 'saveRecord': {
      var shS = payload.sheet;
      var dS  = Object.assign({}, payload.data||{});
      var tS  = TABLES[shS];
      if(!tS) throw new Error('Sheet tidak dikenal: '+shS);
      var idS = idOf(shS, dS);
      if(shS === SH.KELAS) dS.Nama = dS.Nama || idS;
      if(shS === SH.SISWA) dS.NIS = String(dS.NIS != null ? dS.NIS : idS);
      if(shS === SH.SETTING) dS.Key = dS.Key || idS;
      if(shS !== SH.KELAS && shS !== SH.SISWA && shS !== SH.SETTING) dS.ID = dS.ID || idS;
      var rowS = toRow(shS, dS);
      if(shS === SH.KELAS) {
        rowS = { nama: idS };
      } else if(shS === SH.SISWA) {
        rowS.nis = idS;
        delete rowS.id;
      } else if(shS === SH.SETTING) {
        rowS = { key: idS, value: dS.Value };
      } else {
        rowS.id = idS;
      }
      var rS = await sb.from(tS).upsert(rowS, { onConflict: pkOf(shS) });
      if(rS.error) throw rS.error;
      return { ok:true, id:idS };
    }

    case 'updateRecord': {
      var shU = payload.sheet, idU = payload.id, patch = payload.data||{};
      var tU = TABLES[shU];
      if(!tU) throw new Error('Sheet tidak dikenal: '+shU);
      var pkU = pkOf(shU);
      var idValU = (shU === SH.SISWA) ? String(idU) : idU;
      var curU = await sb.from(tU).select('*').eq(pkU, idValU).maybeSingle();
      if(curU.error) throw curU.error;
      var merged = Object.assign({}, curU.data ? fromRow(shU, curU.data) : {}, patch);
      if(shU !== SH.SISWA && shU !== SH.KELAS && shU !== SH.SETTING) merged.ID = idU;
      var rowU = toRow(shU, merged);
      if(shU === SH.KELAS) {
        rowU = { nama: idU };
      } else if(shU === SH.SISWA) {
        rowU.nis = idValU;
        delete rowU.id;
      } else if(shU === SH.SETTING) {
        rowU = { key: idU, value: merged.Value };
      } else {
        rowU.id = idValU;
      }
      var rU = await sb.from(tU).upsert(rowU, { onConflict: pkU });
      if(rU.error) throw rU.error;
      return { ok:true };
    }

    case 'deleteRecord': {
      var shD = payload.sheet, tD = TABLES[shD];
      if(!tD) throw new Error('Sheet tidak dikenal: '+shD);
      var idD = (shD === SH.SISWA) ? String(payload.id) : payload.id;
      var rD = await sb.from(tD).delete().eq(pkOf(shD), idD);
      if(rD.error) throw rD.error;
      return { ok:true };
    }

    case 'saveKehadiranBulk': {
      var rows = payload.rows||[];
      if(payload.replaceDate && payload.replaceKelas){
        var del = await sb.from('bk_kehadiran').delete().eq('tanggal', payload.replaceDate).eq('kelas', payload.replaceKelas);
        if(del.error) throw del.error;
      }
      if(!rows.length) return { ok:true, count:0 };
      var payloadRows = rows.map(function(r){
        var rec = Object.assign({}, r);
        if(!rec.ID) rec.ID = uid();
        var row = toRow(SH.HADIR, rec);
        row.id = rec.ID;
        return row;
      });
      var CH = 500;
      for(var i=0;i<payloadRows.length;i+=CH){
        var chunk = payloadRows.slice(i, i+CH);
        var ins = await sb.from('bk_kehadiran').upsert(chunk, { onConflict:'id' });
        if(ins.error) throw ins.error;
      }
      return { ok:true, count: payloadRows.length };
    }

    case 'importAbsenBulanan': {
      var kelasIB = payload.kelas, bulanIB = payload.bulan, petugasIB = payload.petugas||'';
      var rowsIB = payload.rows||[];
      var partsIB = bulanIB.split('-');
      var lastDayIB = new Date(+partsIB[0], +partsIB[1], 0).getDate();
      var delIB = await sb.from('bk_kehadiran').delete().eq('kelas', kelasIB).gte('tanggal', bulanIB+'-01').lte('tanggal', bulanIB+'-'+pad2(lastDayIB));
      if(delIB.error) throw delIB.error;
      var toIns = [];
      rowsIB.forEach(function(sr){
        Object.keys(sr.statuses||{}).forEach(function(day){
          toIns.push({ id: uid(), tanggal: bulanIB+'-'+pad2(parseInt(day,10)), nis: String(sr.NIS), nama: sr.Nama, kelas: kelasIB, status: sr.statuses[day], keterangan: '', petugas: petugasIB });
        });
      });
      var inserted = 0;
      var CH2 = 500;
      for(var j=0;j<toIns.length;j+=CH2){
        var ch2 = toIns.slice(j, j+CH2);
        var rI = await sb.from('bk_kehadiran').insert(ch2);
        if(rI.error) throw rI.error;
        inserted += ch2.length;
      }
      return { inserted:inserted, deleted:0 };
    }

    case 'saveSiswa': {
      if(!ST.user || (ST.user.role !== 'admin' && ST.user.role !== 'gurubk')) throw new Error('Hanya Admin atau Guru BK yang dapat mengubah data siswa');
      var NIS = String(payload.NIS);
      var oldNis = payload._old ? String(payload._old) : null;
      var recSS = { nis: NIS };
      if(payload.Nama !== undefined)     recSS.nama       = payload.Nama || '';
      if(payload.Kelas !== undefined)    recSS.kelas      = payload.Kelas || '';
      if(payload.JK !== undefined)       recSS.jk         = payload.JK || '';
      if(payload.TanggalLahir !== undefined) recSS.tanggal_lahir = payload.TanggalLahir || null;
      if(payload.NoHP !== undefined){ recSS.no_hp = formatPhoneForDB(payload.NoHP); recSS.wa_status_siswa = null; }
      if(payload.NamaAyah !== undefined) recSS.nama_ayah  = payload.NamaAyah || '';
      if(payload.NoHPAyah !== undefined){ recSS.no_hp_ayah = formatPhoneForDB(payload.NoHPAyah); recSS.wa_status_ayah = null; }
      if(payload.NamaIbu !== undefined)  recSS.nama_ibu   = payload.NamaIbu || '';
      if(payload.NoHPIbu !== undefined){ recSS.no_hp_ibu = formatPhoneForDB(payload.NoHPIbu); recSS.wa_status_ibu = null; }
      var rSS = await sb.from('bk_siswa').upsert(recSS, { onConflict:'nis' });
      if(rSS.error) throw rSS.error;
      if(oldNis && oldNis !== NIS){
        var dOldAfterSave = await sb.from('bk_siswa').delete().eq('nis', oldNis);
        if(dOldAfterSave.error) throw dOldAfterSave.error;
      }
      return { ok:true };
    }

    case 'getSiswaInputLock': {
      var lockRead = await sb.from('bk_kontrol_siswa').select('input_terkunci').eq('id',1).maybeSingle();
      if(lockRead.error) throw lockRead.error;
      return !!(lockRead.data && lockRead.data.input_terkunci);
    }

    case 'setSiswaInputLock': {
      if(!ST.user || ST.user.role !== 'admin') throw new Error('Hanya Administrator yang dapat mengunci atau membuka input siswa');
      var lockValue = !!payload.locked;
      var lockSave = await sb.from('bk_kontrol_siswa').upsert({id:1,input_terkunci:lockValue}, {onConflict:'id'});
      if(lockSave.error) throw lockSave.error;
      return {ok:true,locked:lockValue};
    }

    case 'setSiswaWaStatus': {
      if(!ST.user || (ST.user.role !== 'admin' && ST.user.role !== 'gurubk')) throw new Error('Akses validasi WhatsApp ditolak');
      var fieldMapWa = {siswa:'wa_status_siswa',ayah:'wa_status_ayah',ibu:'wa_status_ibu'};
      var colWa = fieldMapWa[String(payload.target||'')];
      if(!colWa) throw new Error('Jenis nomor WhatsApp tidak dikenal');
      var statusWa = (payload.status === 'aktif' || payload.status === 'tidak_valid') ? payload.status : null;
      var qWa = await sb.from('bk_siswa').update((function(){var o={};o[colWa]=statusWa;return o;})()).eq('nis',String(payload.nis||''));
      if(qWa.error) throw qWa.error;
      return {ok:true};
    }

    case 'deleteSiswa': {
      var rDS = await sb.from('bk_siswa').delete().eq('nis', String(payload.nis));
      if(rDS.error) throw rDS.error;
      return { ok:true };
    }

    case 'importSiswa': {
      var rowsIS = (payload.rows||[]).map(function(r){
        return { nis:String(r.NIS), nama:r.Nama, kelas:r.Kelas||'', jk:r.JK||'', tanggal_lahir:r.TanggalLahir||null, no_hp:formatPhoneForDB(r.NoHP) };
      });
      var CH3 = 500;
      for(var k=0;k<rowsIS.length;k+=CH3){
        var ch3 = rowsIS.slice(k, k+CH3);
        var rIS = await sb.from('bk_siswa').upsert(ch3, { onConflict:'nis' });
        if(rIS.error) throw rIS.error;
      }
      return { msg: rowsIS.length+' siswa diimport' };
    }

    case 'addKelas': {
      var nama = String(payload.kelas||'').trim();
      if(!nama) throw new Error('Nama kelas kosong');
      var rAK = await sb.from('bk_kelas').upsert({ nama:nama }, { onConflict:'nama' });
      if(rAK.error) throw rAK.error;
      return { ok:true };
    }
    case 'deleteKelas': {
      var rDK = await sb.from('bk_kelas').delete().eq('nama', payload.kelas);
      if(rDK.error) throw rDK.error;
      return { ok:true };
    }
    case 'importKelas': {
      var rowsIK = (payload.rows||[]).map(function(r){
        var n = r.Nama || r.nama || r.kelas || '';
        return n ? { nama:n } : null;
      }).filter(Boolean);
      if(rowsIK.length){
        var rIK = await sb.from('bk_kelas').upsert(rowsIK, { onConflict:'nama' });
        if(rIK.error) throw rIK.error;
      }
      return { msg: rowsIK.length+' kelas diimport' };
    }

    case 'saveGuruBK': {
      var dGB = Object.assign({}, payload);
      var idGB = dGB.ID || uid();
      dGB.ID = idGB;
      var recGB = { id: idGB, nama: dGB.Nama || '', nip: dGB.NIP || '', kelas_ampu: dGB.KelasAmpu || '',
                    username: String(dGB.Username||'').toLowerCase().trim(), password: dGB.Password || '' };
      if(dGB.TtdBK) recGB.ttd_bk = dGB.TtdBK;
      else {
        var curGB = await sb.from('bk_gurubk').select('ttd_bk').eq('id', idGB).maybeSingle();
        if(curGB.data && curGB.data.ttd_bk) recGB.ttd_bk = curGB.data.ttd_bk;
      }
      var rGB = await sb.from('bk_gurubk').upsert(recGB, { onConflict:'id' });
      if(rGB.error) throw rGB.error;
      var rAcc = await sb.from('bk_users').upsert({
        username: recGB.username, password: recGB.password, role:'gurubk', guru_id: idGB
      }, { onConflict:'username' });
      if(rAcc.error) throw rAcc.error;
      return { ok:true };
    }

    case 'deleteGuruBK': {
      var idDGB = payload.id;
      var gD = await sb.from('bk_gurubk').select('username').eq('id', idDGB).maybeSingle();
      if(gD.data && gD.data.username){
        await sb.from('bk_users').delete().eq('username', String(gD.data.username).toLowerCase());
      }
      var rDGB = await sb.from('bk_gurubk').delete().eq('id', idDGB);
      if(rDGB.error) throw rDGB.error;
      return { ok:true };
    }

    case 'saveGuruPiket': {
      var dGP = Object.assign({}, payload);
      var idGP = dGP.ID || uid();
      dGP.ID = idGP;
      var recGP = { id: idGP, nama: dGP.Nama || '', nip: dGP.NIP || '',
                    username: String(dGP.Username||'').toLowerCase().trim(), password: dGP.Password || '' };
      var rGP = await sb.from('bk_gurupiket').upsert(recGP, { onConflict:'id' });
      if(rGP.error) throw rGP.error;
      var rAccP = await sb.from('bk_users').upsert({
        username: recGP.username, password: recGP.password, role:'gurupiket', guru_id: idGP
      }, { onConflict:'username' });
      if(rAccP.error) throw rAccP.error;
      return { ok:true };
    }

    case 'deleteGuruPiket': {
      var idDGP = payload.id;
      var gPD = await sb.from('bk_gurupiket').select('username').eq('id', idDGP).maybeSingle();
      if(gPD.data && gPD.data.username){
        await sb.from('bk_users').delete().eq('username', String(gPD.data.username).toLowerCase());
      }
      var rDGP = await sb.from('bk_gurupiket').delete().eq('id', idDGP);
      if(rDGP.error) throw rDGP.error;
      return { ok:true };
    }

    case 'saveUserTamu': {
      var usernameTamu = String(payload.username||'').toLowerCase().trim();
      if(!usernameTamu) throw new Error('Username wajib diisi');
      var passwordTamu = String(payload.password||'');
      if(!passwordTamu || passwordTamu.length < 4) throw new Error('Password minimal 4 karakter');
      var rTamu = await sb.from('bk_users').upsert({
        username: usernameTamu, password: passwordTamu, role:'tamu', guru_id: null
      }, { onConflict:'username' });
      if(rTamu.error) throw rTamu.error;
      return { ok:true };
    }

    case 'deleteUserTamu': {
      var unameDel = String(payload.username||'').toLowerCase();
      var rDelTamu = await sb.from('bk_users').delete().eq('username', unameDel);
      if(rDelTamu.error) throw rDelTamu.error;
      return { ok:true };
    }

    case 'listUserTamu': {
      var rListTamu = await sb.from('bk_users').select('username,password').eq('role', 'tamu');
      if(rListTamu.error) throw rListTamu.error;
      return (rListTamu.data || []).map(function(x){ return { username:x.username, password:x.password }; });
    }

    case 'saveSetting': {
      var entries = Object.keys(payload||{}).map(function(k){ return { key:k, value: payload[k] }; });
      if(!entries.length) return { ok:true };
      var rSet = await sb.from('bk_setting').upsert(entries, { onConflict:'key' });
      if(rSet.error) throw rSet.error;
      return { ok:true };
    }

    case 'restoreAll': {
      var backup = payload.backup || {};
      var stores = backup.stores || {};
      var allTables = Object.keys(TABLES).map(function(k){ return TABLES[k]; });
      for(var a=0;a<allTables.length;a++){
        var tN = allTables[a];
        var pk = (tN==='bk_kelas')?'nama':(tN==='bk_siswa')?'nis':(tN==='bk_setting')?'key':'id';
        try{
          var dResp = await sb.from(tN).delete().not(pk, 'is', null);
          if(dResp.error){
            if(tN === 'bk_gurupiket' || tN === 'bk_lain_lain' || tN === 'bk_mutasi') continue;
            throw dResp.error;
          }
        }catch(e){
          if(tN === 'bk_gurupiket' || tN === 'bk_lain_lain' || tN === 'bk_mutasi') continue;
          throw e;
        }
      }
      try{ await sb.from('bk_users').delete().neq('username', '__never__'); }catch(e){}
      var totalRestored = 0;
      var keysStore = Object.keys(TABLES);
      for(var kk=0; kk<keysStore.length; kk++){
        var sheetName = keysStore[kk];
        var rows = stores[sheetName] || [];
        if(!rows.length) continue;
        var tName = TABLES[sheetName];
        if(!tName) continue;
        var toInsert = [];
        rows.forEach(function(r){
          var rec = Object.assign({}, r);
          var pkv = idOf(sheetName, rec);
          if(!pkv) return;
          if(sheetName === SH.SETTING){
            toInsert.push({ key: rec.Key || rec.key || pkv, value: rec.Value !== undefined ? rec.Value : (rec.value !== undefined ? rec.value : '') });
          } else if(sheetName === SH.KELAS){
            toInsert.push({ nama: rec.Nama || rec.nama || pkv });
          } else if(sheetName === SH.SISWA){
            toInsert.push({
              nis:String(rec.NIS != null ? rec.NIS : pkv),
              nama:rec.Nama, kelas:rec.Kelas||'', jk:rec.JK||'',
              no_hp:      formatPhoneForDB(rec.NoHP),
              nama_ayah:  rec.NamaAyah||'',
              no_hp_ayah: formatPhoneForDB(rec.NoHPAyah),
              nama_ibu:   rec.NamaIbu||'',
              no_hp_ibu:  formatPhoneForDB(rec.NoHPIbu)
            });
          } else if(sheetName === SH.GURUBK){
            toInsert.push({
              id:pkv, nama:rec.Nama||'', nip:rec.NIP||'', kelas_ampu:rec.KelasAmpu||'',
              username:String(rec.Username||'').toLowerCase(), password:rec.Password||'', ttd_bk:rec.TtdBK||''
            });
          } else if(sheetName === SH.GURUPIKET){
            toInsert.push({
              id:pkv, nama:rec.Nama||'', nip:rec.NIP||'',
              username:String(rec.Username||'').toLowerCase(), password:rec.Password||''
            });
          } else {
            var rowI = toRow(sheetName, rec);
            rowI.id = pkv;
            toInsert.push(rowI);
          }
        });
        var CH4 = 500;
        for(var m=0;m<toInsert.length;m+=CH4){
          var ch4 = toInsert.slice(m, m+CH4);
          try{
            var rIns = await sb.from(tName).upsert(ch4, { onConflict: pkOf(sheetName) });
            if(rIns.error){
              if(tName === 'bk_gurupiket' || tName === 'bk_lain_lain' || tName === 'bk_mutasi') continue;
              throw rIns.error;
            }
          }catch(e){
            if(tName === 'bk_gurupiket' || tName === 'bk_lain_lain' || tName === 'bk_mutasi') continue;
            throw e;
          }
        }
        totalRestored += toInsert.length;
      }
      var usersBackup = stores.__users || backup.users || [];
      var userRows = [];
      if(usersBackup.length){
        usersBackup.forEach(function(u){
          if(!u || !u.username) return;
          userRows.push({ username: String(u.username).toLowerCase(), password: u.password || '', role: u.role || 'gurubk', guru_id: u.guru_id || null });
        });
      } else {
        var gurus = stores[SH.GURUBK] || [];
        gurus.forEach(function(g){
          if(!g || !g.Username) return;
          userRows.push({ username:String(g.Username).toLowerCase(), password:g.Password||'', role:'gurubk', guru_id:g.ID });
        });
        var pikets = stores[SH.GURUPIKET] || [];
        pikets.forEach(function(g){
          if(!g || !g.Username) return;
          userRows.push({ username:String(g.Username).toLowerCase(), password:g.Password||'', role:'gurupiket', guru_id:g.ID });
        });
      }
      var hasAdmin = userRows.some(function(u){ return u.username === 'admin'; });
      if(!hasAdmin) userRows.push({ username:'admin', password:'admin123', role:'admin', guru_id:null });
      if(userRows.length){
        var rU = await sb.from('bk_users').upsert(userRows, { onConflict:'username' });
        if(rU.error) throw rU.error;
      }
      return { total: totalRestored, users: userRows.length };
    }

    default:
      throw new Error('Aksi tidak dikenal: '+action);
  }
}
function uid(){
  if(typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') return crypto.randomUUID();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
    var r = Math.random()*16|0, v = c==='x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}
function fd(k, l, t, extra){
  return Object.assign({k:k, l:l, t:t || 'text'}, extra || {});
}
var FORMS = {
  izin: [
    fd('Tanggal','Tanggal Izin','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('Alasan','Alasan Izin','textarea',{req:true,full:true}),
    fd('JamKeluar','Jam Keluar','time',{req:true}), fd('JamKembali','Jam Kembali','time'),
    fd('StatusKembali','Status Kembali','select',{options:[['Belum','Belum Kembali'],['Kembali','Sudah Kembali']],def:'Belum'}),
    fd('Petugas','Petugas','hidden'), fd('Keterangan','Keterangan','textarea',{full:true})
  ],
  terlambat: [
    fd('Tanggal','Tanggal Terlambat','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('JamDatang','Jam Datang','time',{req:true}),
    fd('Alasan','Alasan Terlambat','textarea',{req:true,full:true}), fd('Petugas','Petugas','hidden'), fd('Keterangan','Keterangan','textarea',{full:true})
  ],
  jurnal: [
    fd('Tanggal','Tanggal Kegiatan','date',{req:true}), fd('Kegiatan','Kegiatan / Catatan','textarea',{req:true,full:true}),
    fd('Keterangan','Keterangan Tambahan','textarea',{full:true})
  ],
  klasikal: [
    fd('Tanggal','Tanggal Pelaksanaan','date',{req:true}), fd('JamKe','Jam Ke','text',{placeholder:'Contoh: 1–2'}),
    fd('Kelas','Kelas','kelas',{req:true}), fd('Topik','Topik / Materi','text',{req:true}),
    fd('Tujuan','Tujuan Layanan','textarea',{full:true}), fd('Metode','Metode','text'),
    fd('Media','Media','text'), fd('JumlahSiswa','Jumlah Siswa','number'),
    fd('JumlahHadir','Jumlah Hadir','number'), fd('Catatan','Catatan / Evaluasi','textarea',{full:true})
  ],
  kelompok: [
    fd('Tanggal','Tanggal Pelaksanaan','date',{req:true}), fd('Kelas','Filter Kelas Anggota','kelas'),
    fd('Topik','Topik Bimbingan','text',{req:true}), fd('Tujuan','Tujuan Layanan','textarea',{full:true}),
    fd('Anggota','Anggota Kelompok (centang siswa)','multisiswa',{req:true,full:true}),
    fd('Hasil','Hasil Bimbingan','textarea',{full:true}), fd('JumlahHadir','Jumlah Hadir','number'),
    fd('JumlahTidakHadir','Jumlah Tidak Hadir','number')
  ],
  kr: [
    fd('Tanggal','Tanggal Home Visit','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('AlamatTujuan','Alamat Tujuan','textarea',{full:true}),
    fd('Masalah','Masalah / Latar Belakang','textarea',{req:true,full:true}), fd('Tujuan','Tujuan Kunjungan','textarea',{full:true}),
    fd('Petugas1','Guru BK','text'), fd('TTD1','Tanda Tangan Guru BK','sig',{full:true}),
    fd('Petugas2','Guru / Wali Kelas','text'), fd('TTD2','Tanda Tangan Guru / Wali Kelas','sig',{full:true}),
    fd('NamaOrtu','Nama Orang Tua / Wali','text'), fd('TTD_Ortu','Tanda Tangan Orang Tua / Wali','sig',{full:true}),
    fd('Hasil','Hasil Kunjungan','textarea',{full:true}), fd('Rencana','Rencana Tindak Lanjut','textarea',{full:true})
  ],
  konseling: [
    fd('Tanggal','Tanggal Konseling','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}),
    fd('JenisLayanan','Jenis Layanan','select',{options:[['Konseling Individual','Konseling Individual'],['Konsultasi','Konsultasi'],['Mediasi','Mediasi'],['Lainnya','Lainnya']],def:'Konseling Individual'}),
    fd('Masalah','Masalah yang Dibahas','textarea',{req:true,full:true}), fd('Tujuan','Tujuan Konseling','textarea',{full:true}),
    fd('Pendekatan','Pendekatan / Teknik','textarea',{full:true}), fd('Hasil','Hasil Konseling','textarea',{full:true}),
    fd('Rencana','Rencana Tindak Lanjut','textarea',{full:true})
  ],
  panggilan: [
    fd('Tanggal','Tanggal Pertemuan','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('NamaOrtu','Nama Orang Tua / Wali','text',{req:true}),
    fd('HubunganOrtu','Hubungan dengan Siswa','select',{options:[['Ayah','Ayah'],['Ibu','Ibu'],['Wali','Wali'],['Lainnya','Lainnya']]}),
    fd('Masalah','Permasalahan','textarea',{req:true,full:true}), fd('Tujuan','Tujuan Pertemuan','textarea',{full:true}),
    fd('Hasil','Hasil Pertemuan','textarea',{full:true}), fd('Rencana','Rencana Tindak Lanjut','textarea',{full:true}),
    fd('TTD_Ortu','Tanda Tangan Orang Tua / Wali','sig',{full:true})
  ],
  kasus: [
    fd('Tanggal','Tanggal Pencatatan','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('Deskripsi','Deskripsi Kasus / Peristiwa','textarea',{req:true,full:true}),
    fd('Tindakan','Tindakan yang Dilakukan','textarea',{full:true}), fd('TindakLanjut','Tindak Lanjut','textarea',{full:true})
  ],
  konferensi: [
    fd('Tanggal','Tanggal Konferensi','date',{req:true}), fd('Kelas','Kelas','kelas'),
    fd('NIS','Siswa Terkait (opsional)','student'), fd('JudulKasus','Judul Kasus','text',{req:true}),
    fd('Deskripsi','Deskripsi / Latar Belakang','textarea',{req:true,full:true}), fd('Peserta','Peserta Konferensi','textarea',{full:true}),
    fd('Hasil','Hasil Pembahasan','textarea',{full:true}), fd('Keputusan','Keputusan Konferensi','textarea',{full:true}),
    fd('TindakLanjut','Tindak Lanjut','textarea',{full:true})
  ],
  alihtangan: [
    fd('Tanggal','Tanggal Alih Tangan','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('Alasan','Alasan Alih Tangan','textarea',{req:true,full:true}),
    fd('TujuanAlih','Tujuan / Unit Penerima','text',{req:true}), fd('PihakPenerima','Nama Pihak Penerima','text'),
    fd('Catatan','Catatan','textarea',{full:true}),
    fd('Status','Status Penanganan','select',{options:[['Direncanakan','Direncanakan'],['Diproses','Diproses'],['Selesai','Selesai']],def:'Direncanakan'}),
    fd('TindakLanjut','Tindak Lanjut','textarea',{full:true})
  ],
  anekdot: [
    fd('Tanggal','Tanggal Kejadian','date',{req:true}), fd('Kelas','Kelas','kelas',{req:true}),
    fd('NIS','Nama Siswa','student',{req:true}), fd('Catatan','Catatan Kejadian / Perilaku','textarea',{req:true,full:true}),
    fd('TindakLanjut','Tindak Lanjut','textarea',{full:true}), fd('Keterangan','Keterangan Tambahan','textarea',{full:true})
  ],
  lainlain: [
    fd('Tanggal','Tanggal Kegiatan','date',{req:true}), fd('Kegiatan','Nama Kegiatan','text',{req:true}),
    fd('Anggota','Peserta / Anggota Kegiatan','textarea',{full:true}), fd('Keterangan','Keterangan / Hasil','textarea',{full:true})
  ]
};

function colDef(k,l,kind){
  var c={k:k,l:l};
  if(kind==='date') c.f=function(v){ return esc(v ? tgl(v) : '-'); };
  else if(kind==='anggota') c.f=function(v){ var a=formatAnggotaKelompok(v); return esc(a.length ? a.join(', ') : (v||'-')); };
  else if(kind==='text') c.f=function(v){ return esc(v==null || v==='' ? '-' : String(v)); };
  return c;
}
var COLS = {
  klasikal:[colDef('Tanggal','Tanggal','date'),colDef('JamKe','Jam Ke'),colDef('Kelas','Kelas'),colDef('Topik','Topik'),colDef('Tujuan','Tujuan'),colDef('Metode','Metode'),colDef('Media','Media'),colDef('JumlahSiswa','Jumlah Siswa'),colDef('JumlahHadir','Jumlah Hadir'),colDef('Catatan','Catatan')],
  kelompok:[colDef('Tanggal','Tanggal','date'),colDef('Topik','Topik'),colDef('Kelas','Kelas'),colDef('Anggota','Anggota','anggota'),colDef('Tujuan','Tujuan'),colDef('Hasil','Hasil'),colDef('JumlahAnggota','Jml. Anggota'),colDef('JumlahHadir','Hadir'),colDef('JumlahTidakHadir','Tidak Hadir'),colDef('Petugas','Guru BK')],
  kr:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('AlamatTujuan','Alamat'),colDef('Masalah','Masalah'),colDef('Tujuan','Tujuan'),colDef('Petugas1','Guru BK'),colDef('Petugas2','Guru / Wali Kelas'),colDef('NamaOrtu','Orang Tua'),colDef('Hasil','Hasil'),colDef('Rencana','Tindak Lanjut')],
  konseling:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('JenisLayanan','Jenis Layanan'),colDef('Masalah','Masalah'),colDef('Tujuan','Tujuan'),colDef('Pendekatan','Pendekatan'),colDef('Hasil','Hasil'),colDef('Rencana','Tindak Lanjut')],
  panggilan:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('NamaOrtu','Orang Tua / Wali'),colDef('HubunganOrtu','Hubungan'),colDef('Masalah','Masalah'),colDef('Tujuan','Tujuan'),colDef('Hasil','Hasil'),colDef('Rencana','Tindak Lanjut')],
  kasus:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('Deskripsi','Deskripsi Kasus'),colDef('Tindakan','Tindakan'),colDef('TindakLanjut','Tindak Lanjut')],
  konferensi:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('JudulKasus','Judul Kasus'),colDef('Deskripsi','Deskripsi'),colDef('Peserta','Peserta'),colDef('Hasil','Hasil'),colDef('Keputusan','Keputusan'),colDef('TindakLanjut','Tindak Lanjut')],
  alihtangan:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('Alasan','Alasan'),colDef('TujuanAlih','Tujuan Alih'),colDef('PihakPenerima','Pihak Penerima'),colDef('Catatan','Catatan'),colDef('Status','Status'),colDef('TindakLanjut','Tindak Lanjut')],
  anekdot:[colDef('Tanggal','Tanggal','date'),colDef('NIS','NIS'),colDef('Nama','Nama Siswa'),colDef('Kelas','Kelas'),colDef('Catatan','Catatan'),colDef('TindakLanjut','Tindak Lanjut'),colDef('Keterangan','Keterangan')],
  lainlain:[colDef('Tanggal','Tanggal','date'),colDef('Kegiatan','Kegiatan'),colDef('Anggota','Peserta / Anggota'),colDef('Keterangan','Keterangan'),colDef('Petugas','Petugas')]
};
var COLS_PERSISWA = {
  anekdot:[colDef('Tanggal','Tanggal','date'),colDef('Catatan','Catatan'),colDef('TindakLanjut','Tindak Lanjut'),colDef('Keterangan','Keterangan')],
  konseling:[colDef('Tanggal','Tanggal','date'),colDef('JenisLayanan','Jenis Layanan'),colDef('Masalah','Masalah'),colDef('Tujuan','Tujuan'),colDef('Pendekatan','Pendekatan'),colDef('Hasil','Hasil'),colDef('Rencana','Tindak Lanjut')]
};
var COLS_PERSISWA_PRINT = {
  anekdot:[colDef('Tanggal','Tanggal','date'),colDef('Catatan','Catatan'),colDef('TindakLanjut','Tindak Lanjut'),colDef('Keterangan','Keterangan')],
  konseling:[colDef('Tanggal','Tanggal','date'),colDef('JenisLayanan','Jenis Layanan'),colDef('Masalah','Masalah'),colDef('Tujuan','Tujuan'),colDef('Pendekatan','Pendekatan'),colDef('Hasil','Hasil'),colDef('Rencana','Tindak Lanjut')]
};

function studentOptions(selected, kelas){
  var source = siswaSaya();
  if(!source || !source.length) source = (ST.user && ST.user.role==='admin') ? (ST.siswa||[]) : source;
  if(kelas) source = source.filter(function(s){ return String(s.Kelas)===String(kelas); });
  var seen = {};
  var out = '<option value="">-- Pilih Siswa --</option>';
  source.slice().sort(function(a,b){ return String(a.Nama||'').localeCompare(String(b.Nama||''),'id'); }).forEach(function(s){
    var nis=String(s.NIS||''); if(!nis || seen[nis]) return; seen[nis]=1;
    out += '<option value="'+esc(nis)+'"'+(String(selected||'')===nis?' selected':'')+'>'+esc(s.Nama||nis)+' ('+esc(nis)+')</option>';
  });
  if(selected && !seen[String(selected)]){
    var any=(ST.siswa||[]).find(function(s){return String(s.NIS)===String(selected);});
    if(any) out += '<option value="'+esc(any.NIS)+'" selected>'+esc(any.Nama||any.NIS)+' ('+esc(any.NIS)+')</option>';
  }
  return out;
}
function buildForm(key, data){
  data=data||{};
  var schema=FORMS[key];
  if(!schema) return '<div class="notif err">Form untuk menu ini belum dikonfigurasi ('+esc(key)+').</div>';
  var html='<div class="row r2" style="row-gap:4px">';
  schema.forEach(function(f){
    var value=data[f.k];
    if(value===undefined || value===null){
      if(f.k==='Petugas') value=currentPetugasName();
      else if(f.t==='date') value=today();
      else if(f.t==='time' && f.req) value=nowTime();
      else if(f.def!==undefined) value=f.def;
      else value='';
    }
    if(f.t==='hidden'){
      html += '<input type="hidden" id="f_'+f.k+'" value="'+esc(value)+'">';
      return;
    }
    var req=f.req?' <span style="color:#e74c3c">*</span>':'';
    var wide=f.full || ['textarea','multisiswa','sig'].indexOf(f.t)>=0;
    var wrap='<div class="fg"'+(wide?' style="grid-column:1/-1"':'')+'><label for="f_'+f.k+'">'+esc(f.l)+req+'</label>';
    if(f.t==='kelas'){
      var ks=kelasSaya().slice();
      if(value && ks.indexOf(String(value))<0) ks.push(String(value));
      wrap+='<select id="f_'+f.k+'" '+(f.req?'required':'')+' onchange="onKelasChange(this.value)"><option value="">-- '+(f.req?'Pilih':'Semua')+' Kelas --</option>'+ks.sort(function(a,b){return String(a).localeCompare(String(b),'id');}).map(function(k){return '<option value="'+esc(k)+'"'+(String(value)===String(k)?' selected':'')+'>'+esc(k)+'</option>';}).join('')+'</select>';
    } else if(f.t==='student'){
      wrap+='<select id="f_'+f.k+'" '+(f.req?'required':'')+'>'+studentOptions(value, data.Kelas||'')+'</select>';
    } else if(f.t==='select'){
      wrap+='<select id="f_'+f.k+'" '+(f.req?'required':'')+'><option value="">-- Pilih --</option>'+(f.options||[]).map(function(o){ var ov=Array.isArray(o)?o[0]:o.v; var ol=Array.isArray(o)?o[1]:o.l; return '<option value="'+esc(ov)+'"'+(String(value)===String(ov)?' selected':'')+'>'+esc(ol)+'</option>'; }).join('')+'</select>';
    } else if(f.t==='textarea'){
      wrap+='<textarea id="f_'+f.k+'" rows="3" '+(f.req?'required':'')+' placeholder="'+esc(f.placeholder||'')+'">'+esc(value)+'</textarea>';
    } else if(f.t==='sig'){
      wrap+='<div class="small" style="margin-bottom:4px">Gambar tanda tangan di kotak menggunakan mouse atau layar sentuh.</div><canvas class="sig" id="sigCanvas_'+f.k+'" data-sig-key="'+f.k+'"></canvas><input type="hidden" id="f_'+f.k+'" value="'+esc(value)+'"><div class="right" style="margin-top:5px"><button type="button" class="btn2 btn-sm" onclick="clearSigPad(\''+f.k+'\')">Hapus TTD</button></div>';
    } else if(f.t==='multisiswa'){
      wrap+='<input type="hidden" id="f_'+f.k+'" value="'+esc(value)+'"><div id="multi_'+f.k+'" class="mslist" style="max-height:220px"><div class="empty">Memuat daftar siswa…</div></div><div id="multiCount_'+f.k+'" class="hint">Belum ada siswa dipilih.</div>';
    } else {
      var type=f.t==='date'?'date':f.t==='time'?'time':f.t==='number'?'number':'text';
      wrap+='<input id="f_'+f.k+'" type="'+type+'" value="'+esc(value)+'" '+(f.req?'required':'')+(f.placeholder?' placeholder="'+esc(f.placeholder)+'"':'')+(f.t==='number'?' min="0" step="1"':'')+'>';
    }
    wrap+='</div>'; html+=wrap;
  });
  html+='</div>';
  return html;
}
function parseAnggotaSelected(value){
  var out={};
  String(value||'').split(';').map(function(x){return x.trim();}).filter(Boolean).forEach(function(x){
    var i=x.indexOf(' - '); var nis=(i>0?x.slice(0,i):x).trim(); if(nis) out[nis]=x;
  });
  return out;
}
function collectMultiSiswa(field){
  var hidden=document.getElementById('f_'+field); if(!hidden) return;
  var current=parseAnggotaSelected(hidden.value);
  var boxes=Array.prototype.slice.call(document.querySelectorAll('[data-multi-field="'+field+'"]'));
  boxes.forEach(function(box){
    var nis=String(box.value||'');
    if(box.checked){ current[nis]=box.getAttribute('data-anggota')||nis; }
    else { delete current[nis]; }
  });
  hidden.value=Object.keys(current).map(function(n){return current[n];}).join('; ');
  var count=document.getElementById('multiCount_'+field);
  if(count) count.textContent=Object.keys(current).length+' siswa dipilih.';
}
function updateMultiSiswa(field){
  var schema=null, key='';
  Object.keys(FORMS).some(function(k){ var found=FORMS[k].some(function(f){return f.k===field && f.t==='multisiswa';}); if(found){schema=FORMS[k].find(function(f){return f.k===field;}); key=k; return true;} return false; });
  var el=document.getElementById('multi_'+field), hidden=document.getElementById('f_'+field); if(!el||!hidden) return;
  var selected=parseAnggotaSelected(hidden.value);
  var classEl=document.getElementById('f_Kelas'); var kelas=classEl?classEl.value:'';
  var students=(siswaSaya()||[]).slice();
  if(!students.length && ST.user && ST.user.role==='admin') students=(ST.siswa||[]).slice();
  if(kelas) students=students.filter(function(s){return String(s.Kelas)===String(kelas);});
  students.sort(function(a,b){return String(a.Nama||'').localeCompare(String(b.Nama||''),'id');});
  if(!students.length){ el.innerHTML='<div class="empty">Tidak ada siswa pada kelas/filter ini.</div>'; return; }
  el.innerHTML=students.map(function(s){
    var nis=String(s.NIS||''); var full=nis+' - '+String(s.Nama||'');
    var pre=selected[nis]||'';
    return '<label style="display:flex;align-items:center;gap:7px;margin:0 0 5px;font-size:12px;font-weight:400"><input type="checkbox" data-multi-field="'+esc(field)+'" data-anggota="'+esc(full)+'" value="'+esc(nis)+'" '+(pre?'checked':'')+' onchange="collectMultiSiswa(\''+field+'\')" style="width:auto"> <span>'+esc(s.Nama||nis)+' <span class="small">('+esc(nis)+', '+esc(s.Kelas||'-')+')</span></span></label>';
  }).join('');
  var count=document.getElementById('multiCount_'+field);
  if(count) count.textContent=Object.keys(selected).length+' siswa dipilih.';
}
function onKelasChange(value){
  var sel=document.getElementById('f_NIS');
  if(sel){
    var old=sel.value;
    var oldRow=(ST.siswa||[]).find(function(s){return String(s.NIS)===String(old);});
    if(value && oldRow && String(oldRow.Kelas)!==String(value)) old='';
    sel.innerHTML=studentOptions(old,value||'');
    if(old) sel.value=old;
  }
  (function(){
    var keys=Object.keys(FORMS);
    keys.forEach(function(k){ FORMS[k].forEach(function(f){ if(f.t==='multisiswa') updateMultiSiswa(f.k); }); });
  })();
}
function collectForm(key){
  var schema=FORMS[key];
  if(!schema){ toast('Konfigurasi form tidak ditemukan: '+key,'er'); return null; }
  var out={};
  for(var i=0;i<schema.length;i++){
    var f=schema[i], el=document.getElementById('f_'+f.k);
    if(!el) continue;
    var val;
    if(f.t==='number') val=String(el.value||'').trim()===''?null:Number(el.value);
    else if(f.t==='date'||f.t==='time') val=String(el.value||'').trim()||null;
    else val=String(el.value==null?'':el.value).trim();
    if(f.req && (val===null || val==='')){ toast(f.l+' wajib diisi.','er'); if(el.focus) el.focus(); return null; }
    out[f.k]=val;
  }
  var petugas=document.getElementById('f_Petugas');
  if(petugas) out.Petugas=String(petugas.value||'').trim();
  if(['jurnal','kelompok','lainlain'].indexOf(key)>=0 && !out.Petugas) out.Petugas=currentPetugasName();
  if(out.NIS){
    var siswa=(ST.siswa||[]).find(function(s){return String(s.NIS)===String(out.NIS);});
    if(siswa){ out.Nama=siswa.Nama||''; if(!out.Kelas) out.Kelas=siswa.Kelas||''; }
  }
  if(key==='klasikal' && out.JumlahSiswa==null){ out.JumlahSiswa=(ST.siswa||[]).filter(function(s){return s.Kelas===out.Kelas;}).length; }
  if(key==='kelompok'){
    var count=parseAnggotaSelected(out.Anggota||'');
    out.JumlahAnggota=Object.keys(count).length;
  }
  return out;
}
var _sigPadHandlers={};
function initSigPads(){
  document.querySelectorAll('canvas[data-sig-key]').forEach(function(canvas){
    if(canvas.dataset.sigReady==='1') return;
    canvas.dataset.sigReady='1';
    var key=canvas.getAttribute('data-sig-key');
    var ctx=canvas.getContext('2d');
    function sizeCanvas(){
      var rect=canvas.getBoundingClientRect(); var ratio=window.devicePixelRatio||1;
      var w=Math.max(240,Math.floor(rect.width||canvas.clientWidth||500)); var h=130;
      var old=canvas.toDataURL();
      canvas.width=Math.floor(w*ratio); canvas.height=Math.floor(h*ratio);
      ctx=canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0); ctx.lineWidth=2; ctx.lineCap='round'; ctx.lineJoin='round'; ctx.strokeStyle='#111';
      var hidden=document.getElementById('f_'+key); var src=hidden&&hidden.value;
      if(src && /^data:image\//.test(src)){ var img=new Image(); img.onload=function(){ctx.drawImage(img,0,0,w,h);}; img.src=src; }
    }
    sizeCanvas();
    var drawing=false, moved=false;
    function point(ev){ var r=canvas.getBoundingClientRect(); return {x:ev.clientX-r.left,y:ev.clientY-r.top}; }
    canvas.addEventListener('pointerdown',function(ev){ drawing=true; moved=false; canvas.setPointerCapture&&canvas.setPointerCapture(ev.pointerId); var p=point(ev); ctx.beginPath(); ctx.moveTo(p.x,p.y); ev.preventDefault(); });
    canvas.addEventListener('pointermove',function(ev){ if(!drawing)return; var p=point(ev); ctx.lineTo(p.x,p.y); ctx.stroke(); moved=true; ev.preventDefault(); });
    function endDraw(){ if(!drawing)return; drawing=false; if(moved){var hidden=document.getElementById('f_'+key);if(hidden) hidden.value=canvas.toDataURL('image/png');} }
    canvas.addEventListener('pointerup',endDraw); canvas.addEventListener('pointercancel',endDraw); canvas.addEventListener('pointerleave',endDraw);
    _sigPadHandlers[key]={clear:function(){var r=canvas.getBoundingClientRect();ctx.clearRect(0,0,r.width,130);var hidden=document.getElementById('f_'+key);if(hidden)hidden.value='';}};
  });
}
function clearSigPad(key){ if(_sigPadHandlers[key]) _sigPadHandlers[key].clear(); }

function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function parseDate(s){ if(s instanceof Date) return s; var m = String(s||'').match(/^(\d{4})-(\d{2})-(\d{2})/); if(m) return new Date(+m[1], +m[2]-1, +m[3]); return new Date(s); }
function tgl(d){ if(!d) return ''; var dt = parseDate(d); if(isNaN(dt)) return String(d); return dt.toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}); }
function tglPanjang(s){ if(!s) return ''; var d = parseDate(s); if(isNaN(d)) return s; return gantiMingguKeAhad(d.toLocaleDateString('id-ID',{weekday:'long',day:'2-digit',month:'long',year:'numeric'})); }
function today(){ var d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
function nowTime(){ var d=new Date(); return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0'); }
function monthName(m){ var n=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember']; return n[m-1]||''; }
function pad2(n){ return String(n).padStart(2,'0'); }
function gantiMingguKeAhad(s){ return String(s==null?'':s).replace(/Minggu/g, 'Ahad'); }
function $(s){ return document.querySelector(s); }
function $$(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); }
function normPhone(n){ if(!n) return ''; var s=String(n).replace(/[^\d+]/g,'').replace(/^\+/,''); if(s.indexOf('0')===0) return '62'+s.substring(1); if(s.indexOf('62')===0) return s; if(s.indexOf('8')===0) return '62'+s; return s; }
function formatPhoneForDB(n){
  if(!n) return '';
  var s = String(n).replace(/[^\d]/g, '');
  if(!s) return '';
  if(s.indexOf('0') === 0) return '62' + s.substring(1);
  if(s.indexOf('62') === 0) return s;
  if(s.indexOf('8') === 0) return '62' + s;
  return s;
}
function waLink(nama, nomor, pesan){ var n=normPhone(nomor); if(!n) return ''; return 'https://wa.me/'+n+'?text='+encodeURIComponent(pesan||('Assalamualaikum '+(nama||'')+', ')); }
function waIconSVG(){ return '<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>'; }

/* ====== WA GATEWAY LOKAL ====== */
function defaultWaTemplate(){
  return "Assalamu'alaikum Bapak/Ibu {ortu},\n\n" +
         "Kami dari Bimbingan Konseling SMAN 1 Klirong memberitahukan bahwa anak Bapak/Ibu:\n\n" +
         "Nama   : *{nama}*\n" +
         "NIS    : {nis}\n" +
         "Kelas  : {kelas}\n" +
         "Tanggal: {tanggal}\n" +
         "Status : *{status}*\n" +
         "Ket.   : {keterangan}\n\n" +
         "Mohon konfirmasi kepada pihak sekolah. Terima kasih.\n\n" +
         "_Pesan otomatis dari Sistem BK SMAN 1 Klirong_";
}
function defaultWaTemplateTerlambat(){
  return "Assalamu'alaikum Bapak/Ibu {ortu},\n\n" +
         "Kami dari Bimbingan Konseling SMAN 1 Klirong memberitahukan bahwa anak Bapak/Ibu:\n\n" +
         "Nama       : *{nama}*\n" +
         "NIS        : {nis}\n" +
         "Kelas      : {kelas}\n" +
         "Tanggal    : {tanggal}\n" +
         "Jam Datang : *{jam}*\n" +
         "Alasan     : {alasan}\n\n" +
         "Ananda tercatat terlambat datang ke sekolah. Mohon perhatian dan bimbingan dari Bapak/Ibu.\n\n" +
         "Terima kasih.\n\n" +
         "_Pesan otomatis dari Sistem BK SMAN 1 Klirong_";
}
function getWAGatewayUrl(){ return String((ST.setting && ST.setting.waGatewayUrl) || '').replace(/\/+$/,''); }
function isWAAutoSend(){ return String((ST.setting && ST.setting.waAutoSend) || '0') === '1'; }
function isWAAutoSendTerlambat(){ return String((ST.setting && ST.setting.waAutoSendTerlambat) || '0') === '1'; }

async function cekStatusGatewayWA(){
  var url = getWAGatewayUrl();
  if(!url) return { ok:false, msg:'URL gateway belum diatur di Setting → WhatsApp Gateway.' };
  try{
    var r = await fetch(url + '/status', { method:'GET' });
    if(!r.ok) return { ok:false, msg:'Gateway merespon HTTP ' + r.status };
    var d = await r.json();
    if(d.state !== 'connected') return { ok:false, msg:'WhatsApp belum terhubung. Buka ' + url + '/qr untuk scan.', state:d.state };
    return { ok:true, state:d.state, me:d.me };
  }catch(e){
    return { ok:false, msg:'Tidak dapat menghubungi gateway (' + e.message + '). Pastikan server Node.js sudah dijalankan.' };
  }
}

function renderTemplateWA(tpl, vars){
  var out = String(tpl || '');
  Object.keys(vars).forEach(function(k){ out = out.split(k).join(vars[k]); });
  return out;
}

/* ====== LOG ANTI-DUPLIKAT ====== */
function waGetLog(){
  try{
    var raw = localStorage.getItem('bk_wa_log');
    if(!raw) return {};
    var obj = JSON.parse(raw);
    if(!obj || typeof obj !== 'object') return {};
    return obj;
  }catch(e){ return {}; }
}
function waSaveLog(log){
  try{ localStorage.setItem('bk_wa_log', JSON.stringify(log)); }catch(e){}
}
function waLogKey(tanggal, nis, target, kategori){
  kategori = kategori || 'presensi';
  if(kategori === 'presensi') return tanggal + '||' + String(nis) + '||' + target;
  return kategori.toUpperCase() + '||' + tanggal + '||' + String(nis) + '||' + target;
}
function waWasSent(tanggal, nis, target, currentStatus, kategori){
  var log = waGetLog();
  var entry = log[waLogKey(tanggal, nis, target, kategori)];
  if(!entry) return { sent: false };
  if(currentStatus && entry.status && entry.status !== currentStatus){
    return { sent: false, statusChanged: true, oldStatus: entry.status };
  }
  return { sent: true, entry: entry };
}
function waMarkSent(tanggal, nis, target, status, phone, extra, kategori){
  var log = waGetLog();
  log[waLogKey(tanggal, nis, target, kategori)] = Object.assign({
    ts: Date.now(),
    tanggal: tanggal,
    nis: String(nis),
    target: target,
    status: status || '',
    phone: phone || '',
    kategori: kategori || 'presensi'
  }, extra || {});
  waSaveLog(log);
}
function waGetLogForDate(tanggal){
  var log = waGetLog();
  var out = [];
  Object.keys(log).forEach(function(k){
    var kat = 'presensi';
    var tgl = '';
    var nis = '';
    var tgt = '';
    if(k.indexOf('TERLAMBAT||') === 0){
      var parts = k.split('||');
      kat = 'terlambat'; tgl = parts[1]; nis = parts[2]; tgt = parts[3];
    } else {
      var parts2 = k.split('||');
      kat = 'presensi'; tgl = parts2[0]; nis = parts2[1]; tgt = parts2[2];
    }
    if(tgl === tanggal){
      out.push(Object.assign({ nis: nis, target: tgt, kategori: kat }, log[k]));
    }
  });
  return out;
}
function waGetLogDates(){
  var log = waGetLog();
  var dates = {};
  Object.keys(log).forEach(function(k){
    var tgl = '';
    if(k.indexOf('TERLAMBAT||') === 0){ tgl = k.split('||')[1]; }
    else { tgl = k.split('||')[0]; }
    if(!tgl) return;
    if(!dates[tgl]) dates[tgl] = { tanggal: tgl, total: 0, presensi: 0, terlambat: 0 };
    dates[tgl].total++;
    if(k.indexOf('TERLAMBAT||') === 0) dates[tgl].terlambat++;
    else dates[tgl].presensi++;
  });
  return Object.keys(dates).sort().reverse().map(function(d){ return dates[d]; });
}
function waClearLogForDate(tanggal){
  var log = waGetLog();
  var removed = 0;
  Object.keys(log).forEach(function(k){
    var cocok = false;
    if(k.indexOf('TERLAMBAT||') === 0){ cocok = (k.split('||')[1] === tanggal); }
    else { cocok = (k.indexOf(tanggal + '||') === 0); }
    if(cocok){ delete log[k]; removed++; }
  });
  waSaveLog(log);
  return removed;
}
function waClearAllLog(){
  var count = Object.keys(waGetLog()).length;
  waSaveLog({});
  return count;
}

async function kirimNotifikasiWAPresensi(rows, tanggal, options){
  options = options || {};
  var gatewayUrl = getWAGatewayUrl();
  if(!gatewayUrl){
    if(!options.silent) toast('URL Gateway WhatsApp belum diatur di Setting','er');
    return { sent:0, failed:0, skipped:0 };
  }
  var targets = (rows||[]).filter(function(r){
    return ['S','I','A'].indexOf(String(r.Status||'').toUpperCase()) >= 0;
  });
  if(!targets.length){
    if(!options.silent) toast('Tidak ada siswa Sakit/Izin/Alpa untuk dikirim WA','inf');
    return { sent:0, failed:0, skipped:0, noTarget:true };
  }
  var tpl = (ST.setting && ST.setting.waTemplate) || defaultWaTemplate();
  var tglTxt = tglPanjang(tanggal);
  var siswaMap = {};
  (ST.siswa||[]).forEach(function(s){ siswaMap[String(s.NIS)] = s; });
  var allMessages = [];
  targets.forEach(function(r){
    var s = siswaMap[String(r.NIS)];
    if(!s) return;
    var stUp = String(r.Status||'').toUpperCase();
    var statusLabel = stUp==='S' ? 'Sakit' : stUp==='I' ? 'Izin' : 'Alpa';
    var base = {
      '{nama}': r.Nama || s.Nama || '',
      '{nis}': r.NIS || s.NIS || '',
      '{kelas}': r.Kelas || s.Kelas || '',
      '{tanggal}': tglTxt,
      '{status}': statusLabel,
      '{keterangan}': (r.Keterangan && r.Keterangan.trim()) ? r.Keterangan : 'tidak dicantumkan'
    };
    if(String(s.NoHPAyah||'').trim()){
      var vA = Object.assign({}, base, { '{ortu}': 'Ayah ' + (s.NamaAyah || '') });
      allMessages.push({ to:s.NoHPAyah, nis:r.NIS, target:'ayah', status:statusLabel,
        nama:r.Nama||s.Nama||'', tanggal:tanggal, message: renderTemplateWA(tpl, vA) });
    }
    if(String(s.NoHPIbu||'').trim()){
      var vI = Object.assign({}, base, { '{ortu}': 'Ibu ' + (s.NamaIbu || '') });
      allMessages.push({ to:s.NoHPIbu, nis:r.NIS, target:'ibu', status:statusLabel,
        nama:r.Nama||s.Nama||'', tanggal:tanggal, message: renderTemplateWA(tpl, vI) });
    }
  });
  if(!allMessages.length){
    if(!options.silent) toast('Tidak ada nomor orang tua yang terisi pada siswa S/I/A','inf');
    return { sent:0, failed:0, skipped:targets.length, noPhone:true };
  }
  var skipDup = options.skipDuplicates !== false;
  var alreadySent = 0, statusChanged = 0, forceResend = !!options.forceResend;
  var messages = [];
  allMessages.forEach(function(m){
    if(skipDup && !forceResend){
      var check = waWasSent(m.tanggal, m.nis, m.target, m.status, 'presensi');
      if(check.sent){ alreadySent++; return; }
      if(check.statusChanged) statusChanged++;
    }
    messages.push(m);
  });
  if(!messages.length){
    if(!options.silent){
      toast('✅ Semua ' + alreadySent + ' pesan sudah pernah terkirim. Tidak ada yang perlu dikirim ulang.', 'inf');
    }
    return { sent:0, failed:0, alreadySent:alreadySent, statusChanged:statusChanged,
             allDuplicate:true, total:allMessages.length };
  }
  var st = await cekStatusGatewayWA();
  if(!st.ok){
    if(!options.silent) toast('Gateway WA: ' + st.msg, 'er');
    return { sent:0, failed:0, error:st.msg, pending:messages.length, alreadySent:alreadySent };
  }
  var delayMs = parseInt((ST.setting && ST.setting.waDelayMs) || '3000', 10);
  if(isNaN(delayMs) || delayMs < 1000) delayMs = 3000;
  var result = { sent:0, failed:0, total:messages.length, alreadySent:alreadySent,
                 statusChanged:statusChanged, details:[] };
  for(var i=0; i<messages.length; i++){
    var m = messages[i];
    try{
      var res = await fetch(gatewayUrl + '/send', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ to:m.to, message:m.message })
      });
      if(res.ok){
        result.sent++;
        waMarkSent(m.tanggal, m.nis, m.target, m.status, m.to, { nama:m.nama }, 'presensi');
        result.details.push({ ok:true, nis:m.nis, target:m.target });
      } else {
        var errTxt = await res.text();
        result.failed++;
        result.details.push({ ok:false, nis:m.nis, target:m.target, error:errTxt });
      }
    }catch(e){
      result.failed++;
      result.details.push({ ok:false, nis:m.nis, target:m.target, error:e.message });
    }
    if(options.onProgress) options.onProgress(i+1, messages.length);
    if(i < messages.length-1) await new Promise(function(r){ setTimeout(r, delayMs); });
  }
  return result;
}

async function kirimNotifikasiWATerlambat(rows, options){
  options = options || {};
  var gatewayUrl = getWAGatewayUrl();
  if(!gatewayUrl){
    if(!options.silent) toast('URL Gateway WhatsApp belum diatur di Setting','er');
    return { sent:0, failed:0, skipped:0 };
  }
  var targets = (rows||[]).filter(function(r){ return String(r.Tanggal||'').trim(); });
  if(!targets.length){
    if(!options.silent) toast('Tidak ada data keterlambatan untuk dikirim WA','inf');
    return { sent:0, failed:0, skipped:0, noTarget:true };
  }
  var tpl = (ST.setting && ST.setting.waTemplateTerlambat) || defaultWaTemplateTerlambat();
  var siswaMap = {};
  (ST.siswa||[]).forEach(function(s){ siswaMap[String(s.NIS)] = s; });
  var allMessages = [];
  targets.forEach(function(r){
    var s = siswaMap[String(r.NIS)];
    if(!s) return;
    var tglTxt = tglPanjang(r.Tanggal);
    var jamDatang = String(r.JamDatang||'').trim() || '-';
    var alasan = String(r.Alasan||'').trim() || 'tidak dicantumkan';
    var base = {
      '{nama}': r.Nama || s.Nama || '',
      '{nis}': r.NIS || s.NIS || '',
      '{kelas}': r.Kelas || s.Kelas || '',
      '{tanggal}': tglTxt,
      '{jam}': jamDatang,
      '{jam_datang}': jamDatang,
      '{alasan}': alasan,
      '{status}': 'Terlambat',
      '{petugas}': r.Petugas || '-'
    };
    if(String(s.NoHPAyah||'').trim()){
      var vA = Object.assign({}, base, { '{ortu}': 'Ayah ' + (s.NamaAyah || '') });
      allMessages.push({ to:s.NoHPAyah, nis:r.NIS, target:'ayah', status:'Terlambat',
        nama:r.Nama||s.Nama||'', tanggal:r.Tanggal, message: renderTemplateWA(tpl, vA) });
    }
    if(String(s.NoHPIbu||'').trim()){
      var vI = Object.assign({}, base, { '{ortu}': 'Ibu ' + (s.NamaIbu || '') });
      allMessages.push({ to:s.NoHPIbu, nis:r.NIS, target:'ibu', status:'Terlambat',
        nama:r.Nama||s.Nama||'', tanggal:r.Tanggal, message: renderTemplateWA(tpl, vI) });
    }
  });
  if(!allMessages.length){
    if(!options.silent) toast('Tidak ada nomor orang tua yang terisi','inf');
    return { sent:0, failed:0, skipped:targets.length, noPhone:true };
  }
  var skipDup = options.skipDuplicates !== false;
  var alreadySent = 0, forceResend = !!options.forceResend;
  var messages = [];
  allMessages.forEach(function(m){
    if(skipDup && !forceResend){
      var check = waWasSent(m.tanggal, m.nis, m.target, m.status, 'terlambat');
      if(check.sent){ alreadySent++; return; }
    }
    messages.push(m);
  });
  if(!messages.length){
    if(!options.silent) toast('✅ Semua ' + alreadySent + ' pesan sudah pernah terkirim.', 'inf');
    return { sent:0, failed:0, alreadySent:alreadySent, allDuplicate:true, total:allMessages.length };
  }
  var st = await cekStatusGatewayWA();
  if(!st.ok){
    if(!options.silent) toast('Gateway WA: ' + st.msg, 'er');
    return { sent:0, failed:0, error:st.msg, pending:messages.length, alreadySent:alreadySent };
  }
  var delayMs = parseInt((ST.setting && ST.setting.waDelayMs) || '3000', 10);
  if(isNaN(delayMs) || delayMs < 1000) delayMs = 3000;
  var result = { sent:0, failed:0, total:messages.length, alreadySent:alreadySent, details:[] };
  for(var i=0; i<messages.length; i++){
    var m = messages[i];
    try{
      var res = await fetch(gatewayUrl + '/send', {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ to:m.to, message:m.message })
      });
      if(res.ok){
        result.sent++;
        waMarkSent(m.tanggal, m.nis, m.target, m.status, m.to, { nama:m.nama }, 'terlambat');
        result.details.push({ ok:true, nis:m.nis, target:m.target });
      } else {
        var errTxt = await res.text();
        result.failed++;
        result.details.push({ ok:false, nis:m.nis, target:m.target, error:errTxt });
      }
    }catch(e){
      result.failed++;
      result.details.push({ ok:false, nis:m.nis, target:m.target, error:e.message });
    }
    if(options.onProgress) options.onProgress(i+1, messages.length);
    if(i < messages.length-1) await new Promise(function(r){ setTimeout(r, delayMs); });
  }
  return result;
}

function kirimNotifikasiWAManual(){
  var tgl = ST.cache.khHarianTgl || today();
  var rows = (ST.cache.viewHadirHarian || []).filter(function(r){
    return String(r.Tanggal) === tgl;
  });
  var pool = rows.length ? rows : (ST.cache.viewHadir || []);
  var targets = pool.filter(function(r){
    return String(r.Tanggal)===tgl && ['S','I','A'].indexOf(String(r.Status).toUpperCase())>=0;
  });
  if(!targets.length){
    toast('Mengambil data presensi ' + tgl + '…','inf');
    getHadirRowsRange(tgl, tgl).then(function(data){
      var d = (data||[]).filter(function(r){ return ['S','I','A'].indexOf(String(r.Status).toUpperCase())>=0; });
      if(!d.length){ toast('Tidak ada siswa Sakit/Izin/Alpa pada tanggal ' + tgl, 'inf'); return; }
      _konfirmasiKirimWAManual(d, tgl);
    }).catch(function(e){ toast('Gagal: ' + e.message, 'er'); });
    return;
  }
  _konfirmasiKirimWAManual(targets, tgl);
}

function _konfirmasiKirimWAManual(targets, tgl){
  var totalNomor = 0, sudahKirim = 0, akanKirim = 0;
  var siswaMap = {};
  (ST.siswa||[]).forEach(function(s){ siswaMap[String(s.NIS)] = s; });
  targets.forEach(function(r){
    var s = siswaMap[String(r.NIS)];
    if(!s) return;
    var stUp = String(r.Status||'').toUpperCase();
    var statusLabel = stUp==='S'?'Sakit':stUp==='I'?'Izin':'Alpa';
    ['ayah','ibu'].forEach(function(tgt){
      var phone = tgt==='ayah' ? s.NoHPAyah : s.NoHPIbu;
      if(!String(phone||'').trim()) return;
      totalNomor++;
      var check = waWasSent(tgl, r.NIS, tgt, statusLabel, 'presensi');
      if(check.sent) sudahKirim++; else akanKirim++;
    });
  });
  var statHTML = '<div style="background:#f7fafd;border:1px solid #e8eff7;border-radius:10px;padding:14px;margin-bottom:14px">'+
    '<table style="min-width:auto;width:100%;font-size:13px">'+
      '<tr><td style="padding:3px 0">Tanggal</td><td style="padding:3px 0"><b>'+esc(tglPanjang(tgl))+'</b></td></tr>'+
      '<tr><td style="padding:3px 0">Jumlah siswa S/I/A</td><td style="padding:3px 0"><b>'+targets.length+'</b> siswa</td></tr>'+
      '<tr><td style="padding:3px 0">Total nomor WA orang tua</td><td style="padding:3px 0"><b>'+totalNomor+'</b> nomor</td></tr>'+
      '<tr><td style="padding:3px 0">✅ Sudah pernah terkirim</td><td style="padding:3px 0"><b style="color:#1e8449">'+sudahKirim+'</b></td></tr>'+
      '<tr><td style="padding:3px 0">📤 Akan dikirim sekarang</td><td style="padding:3px 0"><b style="color:#1a73e8">'+akanKirim+'</b></td></tr>'+
    '</table>'+
  '</div>';
  var infoHTML = '';
  if(akanKirim === 0){
    infoHTML = '<div class="notif new">✅ <b>Semua pesan sudah pernah terkirim.</b> Tidak ada yang perlu dikirim ulang. Gunakan tombol <b>Kirim Ulang Semua (Paksa)</b> jika ingin mengirim ulang.</div>';
  } else if(sudahKirim > 0){
    infoHTML = '<div class="notif info">🛡️ <b>Anti-duplikat aktif.</b> '+sudahKirim+' pesan akan dilewati (sudah pernah terkirim). '+akanKirim+' pesan baru akan dikirim.</div>';
  } else {
    infoHTML = '<div class="notif info">📤 Semua '+akanKirim+' pesan akan dikirim (belum ada yang terkirim untuk tanggal ini).</div>';
  }
  var footer = '<button class="btn2" onclick="closeModal()">Batal</button>';
  if(akanKirim > 0){
    footer += '<button class="btn" id="waKirimNormal">📤 Kirim '+akanKirim+' Pesan</button>';
  }
  footer += '<button class="btn5" id="waKirimPaksa" title="Mengabaikan anti-duplikat — kirim ulang ke SEMUA nomor">🔁 Kirim Ulang Semua (Paksa)</button>';
  openModal('📱 Konfirmasi Kirim WhatsApp — Presensi', statHTML + infoHTML, footer, true);
  var btnNormal = document.getElementById('waKirimNormal');
  if(btnNormal) btnNormal.onclick = function(){
    closeModal();
    jalankanKirimWAWithProgress(targets, tgl, { skipDuplicates: true });
  };
  document.getElementById('waKirimPaksa').onclick = function(){
    closeModal();
    confirmBox(
      '⚠️ KIRIM ULANG SEMUA (PAKSA)\n\n'+
      'Semua pesan akan dikirim ulang, TERMASUK yang sudah pernah terkirim.\n\n'+
      'Nomor orang tua akan menerima pesan DUPLIKAT. Lanjutkan?',
      function(){ jalankanKirimWAWithProgress(targets, tgl, { skipDuplicates: false, forceResend: true }); }
    );
  };
}

function kirimNotifikasiWATerlambatManual(){
  var dari = ST.cache['filter_terlambat_dari'] || today();
  var sampai = ST.cache['filter_terlambat_sampai'] || today();
  var pool = ST.cache.terlambat || ST.cache['view_terlambat'] || [];
  var targets = pool.filter(function(r){
    var t = String(r.Tanggal||'');
    return t >= dari && t <= sampai;
  });
  if(!targets.length){
    toast('Mengambil data keterlambatan…','inf');
    api('getData', { sheet: SH.TERLAMBAT, since: dari, until: sampai }).then(function(rows){
      var d = (rows||[]).filter(function(r){
        var t = String(r.Tanggal||'');
        return t >= dari && t <= sampai;
      });
      if(!d.length){ toast('Tidak ada data keterlambatan pada periode ' + tgl(dari) + ' — ' + tgl(sampai), 'inf'); return; }
      _konfirmasiKirimWATerlambat(d, dari, sampai);
    }).catch(function(e){ toast('Gagal: ' + e.message, 'er'); });
    return;
  }
  _konfirmasiKirimWATerlambat(targets, dari, sampai);
}

function _konfirmasiKirimWATerlambat(targets, dari, sampai){
  var periodeStr = dari === sampai ? tglPanjang(dari) : (tgl(dari) + ' — ' + tgl(sampai));
  var siswaMap = {};
  (ST.siswa||[]).forEach(function(s){ siswaMap[String(s.NIS)] = s; });
  var totalNomor=0, sudahKirim=0, akanKirim=0;
  var unikSiswa = {};
  targets.forEach(function(r){
    var s = siswaMap[String(r.NIS)];
    if(!s) return;
    unikSiswa[String(r.NIS)] = true;
    ['ayah','ibu'].forEach(function(tgt){
      var phone = tgt==='ayah' ? s.NoHPAyah : s.NoHPIbu;
      if(!String(phone||'').trim()) return;
      totalNomor++;
      var check = waWasSent(r.Tanggal, r.NIS, tgt, 'Terlambat', 'terlambat');
      if(check.sent) sudahKirim++; else akanKirim++;
    });
  });
  var statHTML = '<div style="background:#f7fafd;border:1px solid #e8eff7;border-radius:10px;padding:14px;margin-bottom:14px">'+
    '<table style="min-width:auto;width:100%;font-size:13px">'+
      '<tr><td style="padding:3px 0">Periode</td><td style="padding:3px 0"><b>'+esc(periodeStr)+'</b></td></tr>'+
      '<tr><td style="padding:3px 0">Jumlah kejadian terlambat</td><td style="padding:3px 0"><b>'+targets.length+'</b></td></tr>'+
      '<tr><td style="padding:3px 0">Jumlah siswa (unik)</td><td style="padding:3px 0"><b>'+Object.keys(unikSiswa).length+'</b></td></tr>'+
      '<tr><td style="padding:3px 0">Total nomor WA orang tua</td><td style="padding:3px 0"><b>'+totalNomor+'</b> nomor</td></tr>'+
      '<tr><td style="padding:3px 0">✅ Sudah pernah terkirim</td><td style="padding:3px 0"><b style="color:#1e8449">'+sudahKirim+'</b></td></tr>'+
      '<tr><td style="padding:3px 0">📤 Akan dikirim sekarang</td><td style="padding:3px 0"><b style="color:#1a73e8">'+akanKirim+'</b></td></tr>'+
    '</table>'+
  '</div>';
  var infoHTML = '';
  if(akanKirim === 0){
    infoHTML = '<div class="notif new">✅ <b>Semua pesan keterlambatan sudah pernah terkirim.</b> Gunakan tombol <b>Kirim Ulang Semua (Paksa)</b> jika ingin kirim ulang.</div>';
  } else if(sudahKirim > 0){
    infoHTML = '<div class="notif info">🛡️ <b>Anti-duplikat aktif.</b> '+sudahKirim+' pesan dilewati. '+akanKirim+' pesan baru akan dikirim.</div>';
  } else {
    infoHTML = '<div class="notif info">📤 Semua '+akanKirim+' pesan akan dikirim.</div>';
  }
  var footer = '<button class="btn2" onclick="closeModal()">Batal</button>';
  if(akanKirim > 0){
    footer += '<button class="btn" id="waKirimTltNormal">📤 Kirim '+akanKirim+' Pesan</button>';
  }
  footer += '<button class="btn5" id="waKirimTltPaksa" title="Mengabaikan anti-duplikat">🔁 Kirim Ulang Semua (Paksa)</button>';
  openModal('📱 Konfirmasi Kirim WA — Keterlambatan', statHTML + infoHTML, footer, true);
  var btnNormal = document.getElementById('waKirimTltNormal');
  if(btnNormal) btnNormal.onclick = function(){
    closeModal();
    jalankanKirimWATerlambatWithProgress(targets, { skipDuplicates: true });
  };
  document.getElementById('waKirimTltPaksa').onclick = function(){
    closeModal();
    confirmBox(
      '⚠️ KIRIM ULANG SEMUA (PAKSA)\n\n'+
      'Semua pesan keterlambatan akan dikirim ulang, TERMASUK yang sudah pernah terkirim.\n\n'+
      'Nomor orang tua akan menerima pesan DUPLIKAT. Lanjutkan?',
      function(){ jalankanKirimWATerlambatWithProgress(targets, { skipDuplicates: false, forceResend: true }); }
    );
  };
}

async function jalankanKirimWAWithProgress(targets, tgl, opts){
  opts = opts || {};
  var totalSiswa = targets.length;
  var progressId = 'waProg_' + Date.now();
  var panel = document.createElement('div');
  panel.id = progressId;
  panel.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;max-width:520px;margin:0 auto;background:#0f1720;color:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.5);z-index:9999;font-family:inherit;font-size:13px';
  panel.innerHTML =
    '<div style="font-weight:700;margin-bottom:8px">📤 Mengirim WhatsApp…'+(opts.forceResend?' <span style="color:#f5c97a">(paksa)</span>':'')+'</div>' +
    '<div style="background:#2a3a4a;height:8px;border-radius:4px;overflow:hidden;margin-bottom:10px"><div id="'+progressId+'_bar" style="background:#25D366;height:100%;width:0%;transition:.3s"></div></div>' +
    '<div id="'+progressId+'_txt" style="font-size:11.5px;opacity:.85">0 / 0</div>';
  document.body.appendChild(panel);
  var res = await kirimNotifikasiWAPresensi(targets, tgl, {
    skipDuplicates: opts.skipDuplicates !== false,
    forceResend: !!opts.forceResend,
    onProgress: function(done, total){
      var bar = document.getElementById(progressId+'_bar'); if(bar) bar.style.width = Math.round(done/total*100)+'%';
      var txt = document.getElementById(progressId+'_txt'); if(txt) txt.textContent = done + ' / ' + total + ' pesan';
    }
  });
  var summaryHTML = '';
  if(res.allDuplicate){
    summaryHTML = '<div style="color:#f5c97a;font-weight:700">⏭️ Semua pesan sudah pernah terkirim</div>'+
      '<div style="font-size:12.5px;margin-top:6px">Tidak ada pesan baru yang dikirim (anti-duplikat).</div>';
  } else {
    summaryHTML = '<div style="font-size:12.5px;line-height:1.8">' +
      'Target siswa: <b>'+totalSiswa+'</b><br>' +
      (res.alreadySent ? '⏭️ Dilewati (sudah terkirim): <b>'+res.alreadySent+'</b><br>' : '') +
      (res.statusChanged ? '🔄 Status berubah, dikirim ulang: <b>'+res.statusChanged+'</b><br>' : '') +
      '<span style="color:#4ade80">✓ Terkirim: <b>'+res.sent+'</b></span><br>' +
      (res.failed ? '<span style="color:#f59a8e">✗ Gagal: <b>'+res.failed+'</b></span>' : '') +
      (res.error ? '<div style="color:#f59a8e;margin-top:6px">'+esc(res.error)+'</div>' : '') +
    '</div>';
  }
  panel.innerHTML =
    '<div style="font-weight:700;margin-bottom:8px">'+(res.allDuplicate ? '⏭️ Selesai — Semua Duplikat' : '✅ Selesai mengirim WhatsApp')+'</div>' +
    summaryHTML +
    '<button style="margin-top:10px;background:#2a3a4a;color:#fff;padding:6px 14px;border-radius:6px" onclick="this.parentNode.remove()">Tutup</button>';
  setTimeout(function(){
    var el = document.getElementById(progressId);
    if(el && el.parentNode){ el.style.opacity='0'; el.style.transition='.6s'; setTimeout(function(){ el.remove(); }, 700); }
  }, 8000);
  if(res.allDuplicate){
    toast('⏭️ Anti-duplikat: semua pesan sudah pernah terkirim', 'inf');
  } else {
    toast('WA: ' + res.sent + ' terkirim' + (res.alreadySent ? ', ' + res.alreadySent + ' dilewati' : '') + (res.failed ? ', ' + res.failed + ' gagal' : ''));
  }
}

async function jalankanKirimWATerlambatWithProgress(targets, opts){
  opts = opts || {};
  var progressId = 'waTltProg_' + Date.now();
  var panel = document.createElement('div');
  panel.id = progressId;
  panel.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;max-width:520px;margin:0 auto;background:#0f1720;color:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.5);z-index:9999;font-family:inherit;font-size:13px';
  panel.innerHTML =
    '<div style="font-weight:700;margin-bottom:8px">📤 Mengirim WA Keterlambatan…'+(opts.forceResend?' <span style="color:#f5c97a">(paksa)</span>':'')+'</div>' +
    '<div style="background:#2a3a4a;height:8px;border-radius:4px;overflow:hidden;margin-bottom:10px"><div id="'+progressId+'_bar" style="background:#25D366;height:100%;width:0%;transition:.3s"></div></div>' +
    '<div id="'+progressId+'_txt" style="font-size:11.5px;opacity:.85">0 / 0</div>';
  document.body.appendChild(panel);
  var res = await kirimNotifikasiWATerlambat(targets, {
    skipDuplicates: opts.skipDuplicates !== false,
    forceResend: !!opts.forceResend,
    onProgress: function(done, total){
      var bar = document.getElementById(progressId+'_bar'); if(bar) bar.style.width = Math.round(done/total*100)+'%';
      var txt = document.getElementById(progressId+'_txt'); if(txt) txt.textContent = done + ' / ' + total + ' pesan';
    }
  });
  var summaryHTML = '';
  if(res.allDuplicate){
    summaryHTML = '<div style="color:#f5c97a;font-weight:700">⏭️ Semua pesan sudah pernah terkirim</div>';
  } else {
    summaryHTML = '<div style="font-size:12.5px;line-height:1.8">' +
      'Target kejadian: <b>'+targets.length+'</b><br>' +
      (res.alreadySent ? '⏭️ Dilewati: <b>'+res.alreadySent+'</b><br>' : '') +
      '<span style="color:#4ade80">✓ Terkirim: <b>'+res.sent+'</b></span><br>' +
      (res.failed ? '<span style="color:#f59a8e">✗ Gagal: <b>'+res.failed+'</b></span>' : '') +
    '</div>';
  }
  panel.innerHTML =
    '<div style="font-weight:700;margin-bottom:8px">'+(res.allDuplicate ? '⏭️ Selesai — Semua Duplikat' : '✅ Selesai')+'</div>' +
    summaryHTML +
    '<button style="margin-top:10px;background:#2a3a4a;color:#fff;padding:6px 14px;border-radius:6px" onclick="this.parentNode.remove()">Tutup</button>';
  setTimeout(function(){
    var el = document.getElementById(progressId);
    if(el && el.parentNode){ el.style.opacity='0'; el.style.transition='.6s'; setTimeout(function(){ el.remove(); }, 700); }
  }, 8000);
  toast(res.allDuplicate ? '⏭️ Semua sudah terkirim' : ('WA Keterlambatan: ' + res.sent + ' terkirim' + (res.failed ? ', ' + res.failed + ' gagal' : '')));
}

/* ====== UI LOG PENGIRIMAN ====== */
function showWALogDialog(){
  var dates = waGetLogDates();
  var allLog = waGetLog();
  var totalEntries = Object.keys(allLog).length;
  var html = '<div class="notif info" style="margin-bottom:12px">📋 <b>Log Pengiriman WhatsApp</b> — mencatat setiap pesan yang berhasil terkirim per (tanggal + siswa + target). Anti-duplikat akan melewati entri yang sudah tercatat di sini.</div>';
  if(!totalEntries){
    html += '<div class="empty" style="padding:30px">📭 Belum ada log pengiriman.<br><span class="hint">Log akan bertambah otomatis setelah ada pesan yang berhasil dikirim.</span></div>';
  } else {
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px">'+
      '<div style="font-weight:700;color:#0f4c81">📊 '+totalEntries+' pesan tercatat dari '+dates.length+' tanggal</div>'+
      '<button class="btn3 btn-sm" onclick="konfirmasiClearAllWALog()">🗑 Hapus Semua Log</button>'+
    '</div>';
    html += '<div class="preview-list" style="max-height:400px"><table style="min-width:auto;width:100%"><thead><tr><th>Tanggal</th><th style="text-align:center">Jumlah Pesan</th><th style="width:140px;text-align:center">Aksi</th></tr></thead><tbody>';
    dates.forEach(function(d){
      var detail = [];
      if((d.presensi||0)>0) detail.push('S/I/A: '+d.presensi);
      if((d.terlambat||0)>0) detail.push('Telat: '+d.terlambat);
      html += '<tr>'+
        '<td><b>'+esc(tglPanjang(d.tanggal))+'</b></td>'+
        '<td style="text-align:center">'+d.total+' pesan <span style="font-size:10px;color:#8494a4">'+(detail.length?'('+detail.join(', ')+')':'')+'</span></td>'+
        '<td style="text-align:center"><button class="btn2 btn-sm" onclick="lihatDetailLogTanggal(\''+d.tanggal+'\')">🔍 Detail</button> <button class="btn3 btn-sm" onclick="konfirmasiClearLogTanggal(\''+d.tanggal+'\')">🗑</button></td>'+
      '</tr>';
    });
    html += '</tbody></table></div>';
  }
  html += '<div class="notif edit" style="margin-top:14px">💡 <b>Cara pakai:</b> Jika Anda ingin <b>mengirim ulang</b> pesan untuk tanggal tertentu, hapus dulu log tanggal itu → kemudian kirim ulang seperti biasa.</div>';
  openModal('📋 Log Pengiriman WhatsApp', html,
    '<button class="btn2" onclick="closeModal()">Tutup</button>', true);
}

function lihatDetailLogTanggal(tanggal){
  var entries = waGetLogForDate(tanggal);
  if(!entries.length){ toast('Tidak ada log untuk tanggal ini','inf'); return; }
  var siswaMap = {};
  (ST.siswa||[]).forEach(function(s){ siswaMap[String(s.NIS)] = s; });
  var html = '<div class="notif info" style="margin-bottom:10px">📅 <b>'+esc(tglPanjang(tanggal))+'</b> — '+entries.length+' pesan terkirim</div>';
  html += '<div class="tw" style="max-height:400px;overflow-y:auto"><table><thead><tr>'+
    '<th style="width:36px">No</th><th>Nama Siswa</th><th>NIS</th><th>Kategori</th><th>Target</th><th>Status</th><th>Nomor</th><th>Waktu Kirim</th>'+
    '</tr></thead><tbody>';
  entries.sort(function(a,b){ return (a.nama||'').localeCompare(b.nama||''); });
  entries.forEach(function(e,i){
    var s = siswaMap[String(e.nis)] || {};
    var targetLabel = e.target==='ayah' ? '👨 Ayah' : e.target==='ibu' ? '👩 Ibu' : '👤 Siswa';
    var katLabel = e.kategori === 'terlambat'
      ? '<span class="tag ty">⏰ Terlambat</span>'
      : '<span class="tag tb">📋 Presensi</span>';
    var waktu = e.ts ? new Date(e.ts).toLocaleString('id-ID',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '-';
    html += '<tr>'+
      '<td>'+(i+1)+'</td>'+
      '<td><b>'+esc(s.Nama||e.nama||'-')+'</b></td>'+
      '<td>'+esc(e.nis||'-')+'</td>'+
      '<td>'+katLabel+'</td>'+
      '<td>'+targetLabel+'</td>'+
      '<td><span class="tag tg">'+esc(e.status||'-')+'</span></td>'+
      '<td>'+esc(e.phone||'-')+'</td>'+
      '<td style="font-size:11.5px">'+esc(waktu)+'</td>'+
    '</tr>';
  });
  html += '</tbody></table></div>';
  openModal('🔍 Detail Log — '+tglPanjang(tanggal), html,
    '<button class="btn2" onclick="showWALogDialog()">← Kembali</button>'+
    '<button class="btn3" onclick="konfirmasiClearLogTanggal(\''+tanggal+'\')">🗑 Hapus Log Tanggal Ini</button>', true);
}

function konfirmasiClearLogTanggal(tanggal){
  confirmBox(
    'Hapus log pengiriman untuk tanggal ' + tglPanjang(tanggal) + '?\n\n'+
    'Setelah dihapus, Anda bisa mengirim ulang WA untuk tanggal ini (anti-duplikat akan mengizinkan).',
    function(){
      var n = waClearLogForDate(tanggal);
      toast('✅ '+n+' log dihapus untuk tanggal '+tglPanjang(tanggal));
      showWALogDialog();
    }
  );
}
function konfirmasiClearAllWALog(){
  confirmBox(
    'Hapus SEMUA log pengiriman WhatsApp?\n\n'+
    'Setelah dihapus, Anda bisa mengirim ulang WA ke seluruh tanggal. Lanjutkan?',
    function(){
      var n = waClearAllLog();
      toast('✅ '+n+' log dihapus');
      showWALogDialog();
    }
  );
}

/* ====== END WA GATEWAY LOKAL ====== */

function toast(msg, type){
  var d = document.createElement('div');
  d.className = 'tst ' + (type==='er'?'er':type==='inf'?'inf':'ok');
  d.textContent = msg;
  $('#toast').appendChild(d);
  setTimeout(function(){ d.style.opacity='0'; d.style.transition='.3s'; setTimeout(function(){ d.remove(); },300); }, 3200);
}
function openModal(title, bodyHTML, footerHTML, wide){
  var m = $('#modal');
  m.className = 'modal' + (wide?' wide':'');
  m.innerHTML = '<div class="mh"><h3>'+esc(title)+'</h3><button class="x" onclick="closeModal()">&times;</button></div>'+
    '<div class="mb">'+bodyHTML+'</div>'+
    '<div class="mf">'+(footerHTML||'<button class="btn2" onclick="closeModal()">Tutup</button>')+'</div>';
  $('#ov').classList.add('on');
}
function closeModal(){ $('#ov').classList.remove('on'); $('#modal').innerHTML=''; }
function confirmBox(msg, cb){
  openModal('Konfirmasi', '<p style="font-size:14px;line-height:1.6;white-space:pre-wrap">'+esc(msg)+'</p>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn3" id="cfmYes">Ya, Lanjutkan</button>');
  $('#cfmYes').onclick = function(){ closeModal(); cb(); };
}
function isHariLibur(dateStr){
  if(!dateStr) return false;
  var d = parseDate(dateStr);
  if(isNaN(d)) return false;
  var dow = d.getDay();
  if(dow === 0 || dow === 6) return true;
  if(HARI_LIBUR[dateStr]) return true;
  return false;
}
function labelHariLibur(dateStr){
  var d = parseDate(dateStr);
  var namaHari = gantiMingguKeAhad(d.toLocaleDateString('id-ID',{weekday:'long'}));
  if(HARI_LIBUR[dateStr]) return namaHari + ' — ' + HARI_LIBUR[dateStr];
  return 'Hari ' + namaHari;
}
function cekHariEfektif(dateStr){
  if(!dateStr) return { ok:false, msg:'Tanggal wajib diisi terlebih dahulu.' };
  if(isHariLibur(dateStr)){
    return { ok:false, msg:'🔒 Tidak dapat menyimpan data pada ' + labelHariLibur(dateStr) + '. Hari Sabtu, Ahad, dan libur nasional tidak dapat diisi kegiatan.' };
  }
  return { ok:true };
}
function shiftDate(dateStr, delta){
  var d = parseDate(dateStr);
  d.setDate(d.getDate() + delta);
  return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());
}
function toProperCase(s){
  return String(s||'').toLowerCase().split(/\s+/).map(function(w){
    return w ? w.charAt(0).toUpperCase() + w.substring(1) : '';
  }).join(' ');
}

function applyTheme(){
  var dark = false;
  try{ dark = localStorage.getItem('bk_dark') === '1'; }catch(e){}
  if(dark) document.body.classList.add('dark');
  else document.body.classList.remove('dark');
  var b = document.getElementById('themeBtn');
  if(b) b.textContent = dark ? '☀️' : '🌙';
}
function toggleTheme(){
  var dark = !document.body.classList.contains('dark');
  document.body.classList.toggle('dark', dark);
  try{ localStorage.setItem('bk_dark', dark ? '1' : '0'); }catch(e){}
  var b = document.getElementById('themeBtn');
  if(b) b.textContent = dark ? '☀️' : '🌙';
}

function periodeGet(prefix){
  var mode = ST.cache['per_'+prefix+'_mode'] || 'bulan';
  var bulan = ST.cache['per_'+prefix+'_bulan'] || today().slice(0,7);
  var dari = ST.cache['per_'+prefix+'_dari'] || (bulan + '-01');
  var sampai = ST.cache['per_'+prefix+'_sampai'] || today();
  if(mode === 'bulan'){
    var parts = bulan.split('-');
    var yy = parseInt(parts[0],10), mm = parseInt(parts[1],10);
    if(!yy || !mm){ bulan = today().slice(0,7); parts = bulan.split('-'); yy = parseInt(parts[0],10); mm = parseInt(parts[1],10); }
    dari = bulan + '-01';
    sampai = bulan + '-' + pad2(new Date(yy, mm, 0).getDate());
  }
  if(dari > sampai){ var t = dari; dari = sampai; sampai = t; }
  var label;
  if(mode === 'bulan'){
    var pp = bulan.split('-');
    label = 'Bulan ' + monthName(parseInt(pp[1],10)) + ' ' + pp[0];
  } else {
    label = 'Rentang ' + tgl(dari) + ' s.d. ' + tgl(sampai);
  }
  return { mode:mode, bulan:bulan, dari:dari, sampai:sampai, label:label };
}
function periodeBarHTML(prefix){
  var p = periodeGet(prefix);
  var h = '<div class="fg" style="max-width:200px;flex:0 0 200px"><label>Mode Tampilan</label><select onchange="periodeSet(\''+prefix+'\',\'mode\',this.value)">'+
    '<option value="bulan"'+(p.mode==='bulan'?' selected':'')+'>📅 Bulanan</option>'+
    '<option value="rentang"'+(p.mode==='rentang'?' selected':'')+'>📆 Rentang Waktu</option></select></div>';
  if(p.mode === 'bulan'){
    h += '<div class="fg" style="max-width:200px"><label>Bulan</label><input type="month" value="'+esc(p.bulan)+'" onchange="periodeSet(\''+prefix+'\',\'bulan\',this.value)"></div>';
  } else {
    h += '<div class="fg"><label>Dari Tanggal</label><input type="date" value="'+esc(p.dari)+'" onchange="periodeSet(\''+prefix+'\',\'dari\',this.value)"></div>';
    h += '<div class="fg"><label>Sampai Tanggal</label><input type="date" value="'+esc(p.sampai)+'" onchange="periodeSet(\''+prefix+'\',\'sampai\',this.value)"></div>';
  }
  return h;
}
function periodeSet(prefix, key, val){
  if(key === 'mode'){
    ST.cache['per_'+prefix+'_mode'] = val;
    var cur = periodeGet(prefix);
    if(val === 'rentang'){
      var pp = (cur.bulan || today().slice(0,7)).split('-');
      ST.cache['per_'+prefix+'_dari'] = cur.bulan + '-01';
      ST.cache['per_'+prefix+'_sampai'] = cur.bulan + '-' + pad2(new Date(parseInt(pp[0],10), parseInt(pp[1],10), 0).getDate());
    } else {
      ST.cache['per_'+prefix+'_bulan'] = String(cur.dari || today()).slice(0,7);
    }
  } else {
    ST.cache['per_'+prefix+'_'+key] = val;
    if(key === 'dari' || key === 'sampai') ST.cache['per_'+prefix+'_mode'] = 'rentang';
    if(key === 'bulan') ST.cache['per_'+prefix+'_mode'] = 'bulan';
  }
  if(prefix === 'jurnal') renderJurnal();
  else renderKegiatan(prefix);
}
function periodeReset(prefix){
  ST.cache['per_'+prefix+'_mode'] = 'bulan';
  ST.cache['per_'+prefix+'_bulan'] = today().slice(0,7);
  ST.cache['per_'+prefix+'_dari'] = today().slice(0,7) + '-01';
  ST.cache['per_'+prefix+'_sampai'] = today();
  if(prefix === 'jurnal') renderJurnal();
  else renderKegiatan(prefix);
}

function layananKeyOf(key, r){
  var ident = String(r.NIS || r.Nama || '').trim().toLowerCase();
  var tglV = String(r.Tanggal || '').trim();
  var jam = (key === 'izin') ? String(r.JamKeluar || '').trim() : String(r.JamDatang || '').trim();
  return tglV + '||' + ident + '||' + jam;
}
function buildExistingKeySet(key, rows, excludeId){
  var set = {};
  (rows || []).forEach(function(r){
    if(excludeId && String(r.ID) === String(excludeId)) return;
    set[layananKeyOf(key, r)] = true;
  });
  return set;
}

function hitungPresensiKlasikal(tanggal, kelas){
  var rows = ST.cache.hadirKlasikal || [];
  if(!tanggal || !kelas) return {H:0,S:0,I:0,A:0,TH:0,total:0,hasData:false};
  var kelasArr = String(kelas||'').split(',').map(function(x){ return x.trim(); }).filter(Boolean);
  var filtered = rows.filter(function(r){
    if(String(r.Tanggal) !== String(tanggal)) return false;
    return kelasArr.indexOf(String(r.Kelas)) >= 0;
  });
  var H=0,S=0,I=0,A=0;
  filtered.forEach(function(r){
    if(r.Status === 'H') H++;
    else if(r.Status === 'S') S++;
    else if(r.Status === 'I') I++;
    else if(r.Status === 'A') A++;
  });
  return { H:H, S:S, I:I, A:A, TH:(S+I+A), total:(H+S+I+A), hasData: filtered.length > 0 };
}
function hitungPresensiKelompok(anggotaStr, tanggal){
  if(!anggotaStr || !tanggal) return {hadir:0,tidak:0,total:0,hasData:false};
  var list = String(anggotaStr||'').split(';').map(function(x){ return x.trim(); }).filter(Boolean);
  var nisList = list.map(function(x){ var idx = x.indexOf(' - '); return idx > 0 ? x.substring(0, idx).trim() : x.trim(); }).filter(Boolean);
  if(!nisList.length) return {hadir:0,tidak:0,total:0,hasData:false};
  var hadirRows = ST.cache.hadirKelompok || [];
  var map = {};
  hadirRows.forEach(function(r){
    if(String(r.Tanggal) !== String(tanggal)) return;
    if(nisList.indexOf(String(r.NIS)) >= 0) map[String(r.NIS)] = r.Status;
  });
  if(!Object.keys(map).length) return {hadir:0,tidak:0,total:nisList.length,hasData:false};
  var hadir = 0, tidak = 0;
  nisList.forEach(function(nis){
    var st = map[nis];
    if(st === 'H') hadir++;
    else if(st) tidak++;
  });
  return {hadir:hadir,tidak:tidak,total:nisList.length,hasData:true};
}
function formatAnggotaKelompok(anggotaStr){
  var list = String(anggotaStr||'').split(';').map(function(x){ return x.trim(); }).filter(Boolean);
  return list.map(function(x){
    var idx = x.indexOf(' - ');
    var nis = idx > 0 ? x.substring(0, idx).trim() : x.trim();
    var nama = idx > 0 ? x.substring(idx + 3).trim() : '';
    var s = (ST.siswa||[]).find(function(s){ return String(s.NIS) === String(nis); });
    var kelas = s ? s.Kelas : '';
    return (nama || nis) + (kelas ? ' ('+kelas+')' : '');
  });
}

function getGoogleClientId(){ return (ST.setting && ST.setting.googleClientId) || DEFAULT_GOOGLE_CLIENT_ID || ''; }
function loadGoogleGIS(){
  if(window._gsiLoading) return window._gsiLoading;
  window._gsiLoading = new Promise(function(resolve, reject){
    if(window.google && window.google.accounts && window.google.accounts.oauth2){ resolve(window.google); return; }
    var s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true; s.defer = true;
    s.onload = function(){
      if(window.google && window.google.accounts) resolve(window.google);
      else reject(new Error('Google Identity Services gagal dimuat'));
    };
    s.onerror = function(){ reject(new Error('Gagal memuat Google Identity Services. Cek koneksi internet.')); };
    document.head.appendChild(s);
  });
  return window._gsiLoading;
}
var _gTokenClient = null;
var _gTokenClientCid = '';
var _gAccessToken = null;
var _gTokenExpiry = 0;
var _gUserEmail = '';

async function googleSignIn(){
  var cid = getGoogleClientId();
  if(!cid){ throw new Error('Google Client ID belum diatur. Buka Setting → bagian Google Drive, isi Client ID lalu simpan.'); }
  await loadGoogleGIS();
  if(_gAccessToken && Date.now() < _gTokenExpiry - 60000) return _gAccessToken;
  if(!_gTokenClient || _gTokenClientCid !== cid){
    _gTokenClient = google.accounts.oauth2.initTokenClient({ client_id: cid, scope: GOOGLE_SCOPE, prompt: 'consent', callback: function(){} });
    _gTokenClientCid = cid;
  }
  return new Promise(function(resolve, reject){
    _gTokenClient.callback = function(resp){
      if(resp.error){ reject(new Error(resp.error_description || resp.error)); return; }
      _gAccessToken = resp.access_token;
      _gTokenExpiry = Date.now() + ((resp.expires_in || 3600) * 1000);
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', { headers: { Authorization: 'Bearer ' + _gAccessToken } })
        .then(function(r){ return r.ok ? r.json() : null; })
        .then(function(info){ if(info && info.email) _gUserEmail = info.email; })
        .catch(function(){});
      resolve(_gAccessToken);
    };
    try{ _gTokenClient.requestAccessToken({ prompt: '' }); }
    catch(e){ reject(e); }
  });
}
async function gdEnsureFolder(token){
  var q = "mimeType='application/vnd.google-apps.folder' and name='"+GDRIVE_FOLDER_NAME+"' and 'appDataFolder' in parents and trashed=false";
  var url = 'https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&fields=files(id,name)&q=' + encodeURIComponent(q);
  var r = await fetch(url, { headers: { Authorization: 'Bearer ' + token } });
  if(!r.ok) throw new Error('Gagal cek folder: ' + await r.text());
  var d = await r.json();
  if(d.files && d.files.length) return d.files[0].id;
  var body = { name:GDRIVE_FOLDER_NAME, mimeType:'application/vnd.google-apps.folder', parents:['appDataFolder'] };
  var cr = await fetch('https://www.googleapis.com/drive/v3/files?fields=id', {
    method:'POST', headers:{ Authorization:'Bearer ' + token, 'Content-Type':'application/json' }, body: JSON.stringify(body)
  });
  if(!cr.ok) throw new Error('Gagal buat folder: ' + await cr.text());
  var cd = await cr.json();
  return cd.id;
}
async function gdUpload(filename, content){
  var token = await googleSignIn();
  var folderId = await gdEnsureFolder(token);
  var metadata = { name:filename, mimeType:'application/json', parents:[folderId] };
  var boundary = '-------' + Math.random().toString(36).slice(2);
  var delimiter = '\r\n--' + boundary + '\r\n';
  var closeDelim = '\r\n--' + boundary + '--';
  var body = delimiter + 'Content-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify(metadata) + delimiter + 'Content-Type: application/json\r\n\r\n' + content + closeDelim;
  var r = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,size,createdTime', {
    method:'POST', headers:{ Authorization:'Bearer ' + token, 'Content-Type':'multipart/related; boundary="' + boundary + '"' }, body: body
  });
  if(!r.ok) throw new Error('Upload gagal: ' + await r.text());
  return await r.json();
}
async function gdList(){
  var token = await googleSignIn();
  var folderId = await gdEnsureFolder(token);
  var q = "'"+folderId+"' in parents and trashed=false";
  var url = 'https://www.googleapis.com/drive/v3/files?spaces=appDataFolder&orderBy=createdTime desc&pageSize=100&fields=files(id,name,size,createdTime)&q=' + encodeURIComponent(q);
  var r = await fetch(url, { headers:{ Authorization:'Bearer ' + token } });
  if(!r.ok) throw new Error('Gagal list: ' + await r.text());
  var d = await r.json();
  return d.files || [];
}
async function gdDownload(fileId){
  var token = await googleSignIn();
  var r = await fetch('https://www.googleapis.com/drive/v3/files/' + fileId + '?alt=media', { headers:{ Authorization:'Bearer ' + token } });
  if(!r.ok) throw new Error('Gagal unduh: ' + await r.text());
  return await r.text();
}
async function gdDelete(fileId){
  var token = await googleSignIn();
  var r = await fetch('https://www.googleapis.com/drive/v3/files/' + fileId, { method:'DELETE', headers:{ Authorization:'Bearer ' + token } });
  if(!r.ok && r.status !== 204) throw new Error('Gagal hapus: ' + await r.text());
}
async function buildBackupObject(){
  toast('Mengambil semua data dari server…','inf');
  var raw = await api('getAllForBackup', {});
  var data = { app:'bk_sman1_klirong', version:2, exportedAt:new Date().toISOString(), stores: raw.stores || {} };
  if(raw.users && raw.users.length) data.stores.__users = raw.users;
  return data;
}
function countBackupRows(data){
  var total = 0;
  Object.keys(data.stores || {}).forEach(function(k){ total += (data.stores[k] || []).length; });
  return total;
}
async function backupData(){
  try{
    var data = await buildBackupObject();
    var blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    var d = new Date();
    a.href = url;
    a.download = 'Backup_BK_Klirong_' + d.getFullYear() + pad2(d.getMonth()+1) + pad2(d.getDate()) + '_' + pad2(d.getHours()) + pad2(d.getMinutes()) + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 5000);
    toast('Backup berhasil — ' + countBackupRows(data) + ' data tersimpan');
  }catch(e){ console.error(e); toast('Backup gagal: ' + e.message, 'er'); }
}
async function backupToGoogleDrive(){
  try{
    toast('Menyiapkan data backup…','inf');
    var data = await buildBackupObject();
    var jsonStr = JSON.stringify(data, null, 2);
    var d = new Date();
    var filename = 'Backup_BK_Klirong_' + d.getFullYear() + pad2(d.getMonth()+1) + pad2(d.getDate()) + '_' + pad2(d.getHours()) + pad2(d.getMinutes()) + '.json';
    toast('Mengunggah ke Google Drive…','inf');
    await gdUpload(filename, jsonStr);
    toast('Backup berhasil diunggah ke Google Drive ('+countBackupRows(data)+' data)');
    var listEl = $('#gdListContainer'); if(listEl) gdRenderList();
  }catch(e){ console.error(e); toast('Backup GDrive gagal: ' + e.message, 'er'); }
}
async function gdRenderList(force){
  var el = $('#gdListContainer'); if(!el) return;
  el.innerHTML = '<div class="hint">⏳ Menghubungkan ke Google Drive…</div>';
  try{
    var files = await gdList();
    if(!files.length){
      el.innerHTML = '<div class="empty" style="padding:18px">📭 Belum ada file backup di Google Drive Anda.<br><span class="hint">Silakan lakukan backup terlebih dahulu.</span></div>';
      return;
    }
    var emailChip = _gUserEmail ? '<span class="acc-chip">👤 '+esc(_gUserEmail)+'</span>' : '';
    var head = '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:8px">'+
      '<div style="font-size:12.5px;font-weight:700;color:#0f4c81">📁 Daftar File Backup ('+files.length+' file) — Pilih salah satu untuk di-restore</div>'+ emailChip+'</div>';
    var items = files.map(function(f, idx){
      var sizeKB = f.size ? Math.round(parseInt(f.size,10)/1024)+' KB' : '-';
      var tglTxt = f.createdTime ? new Date(f.createdTime).toLocaleString('id-ID',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '';
      var isTerbaru = (idx === 0);
      return '<div class="gd-item" style="border-left:4px solid '+(isTerbaru?'#27ae60':'#8494a4')+'">'+
        '<div class="info"><b>'+esc(f.name)+'</b>'+(isTerbaru ? ' <span class="tag tg" style="margin-left:6px">Terbaru</span>' : '')+
          '<div class="meta">🕐 '+tglTxt+' • 💾 '+sizeKB+'</div></div>'+
        '<div style="display:flex;gap:6px;flex-wrap:wrap">'+
          '<button class="btn4 btn-sm" onclick="gdRestore(\''+f.id+'\',\''+esc(f.name).replace(/'/g,'')+'\')">📥 Restore Data Ini</button>'+
          '<button class="btn2 btn-sm" onclick="gdUnduh(\''+f.id+'\',\''+esc(f.name).replace(/'/g,'')+'\')">⬇ Unduh</button>'+
          '<button class="btn3 btn-sm" onclick="gdHapus(\''+f.id+'\')">🗑 Hapus</button>'+
        '</div></div>';
    }).join('');
    el.innerHTML = head + items +
      '<div class="hint" style="margin-top:10px;padding:9px 12px;background:#fdecea;border-left:4px solid #e74c3c;border-radius:6px;color:#c0392b;font-size:11.5px">'+
        '⚠️ <b>Peringatan:</b> Restore akan <b>mengganti seluruh data</b> di server dengan isi file backup. Sistem akan otomatis membuat backup pengaman sebelum restore dijalankan.</div>';
  }catch(e){
    el.innerHTML = '<div class="notif err">❌ Gagal memuat daftar: '+esc(e.message)+
      '<div style="margin-top:8px"><button class="btn2 btn-sm" onclick="gdRefreshList()">🔄 Coba Lagi</button></div></div>';
  }
}
async function gdRefreshList(){ _gAccessToken = null; _gTokenExpiry = 0; gdRenderList(); }
function gdDisconnect(){
  confirmBox('Putuskan akun Google saat ini? Anda dapat menghubungkan kembali kapan saja.', function(){
    _gAccessToken = null; _gTokenExpiry = 0; _gUserEmail = ''; _gTokenClient = null; _gTokenClientCid = '';
    toast('Akun Google terputus'); renderSetting();
  });
}
async function gdUnduh(fileId, fileName){
  try{
    toast('Mengunduh file…','inf');
    var txt = await gdDownload(fileId);
    var blob = new Blob([txt], { type:'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url; a.download = fileName || 'backup_bk.json';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function(){ URL.revokeObjectURL(url); }, 5000);
    toast('File backup berhasil diunduh');
  }catch(e){ toast('Gagal unduh: ' + e.message, 'er'); }
}
function gdHapus(fileId){
  confirmBox('Hapus file backup ini dari Google Drive?', function(){
    gdDelete(fileId).then(function(){ toast('File dihapus'); gdRenderList(); })
      .catch(function(e){ toast(e.message,'er'); });
  });
}
async function gdRestore(fileId, fileName){
  openModal('⚠️ Konfirmasi Restore dari Google Drive',
    '<div class="notif err"><b>PERHATIAN!</b> Anda akan memulihkan data dari file:<br><b style="font-size:13px">'+esc(fileName)+'</b></div>'+
    '<div class="notif edit">Tindakan ini akan <b>MENGGANTI SELURUH DATA</b> di server dengan isi file backup tersebut.</div>'+
    '<div class="notif info">💡 Sistem akan otomatis membuat backup pengaman data saat ini sebelum restore dijalankan.</div>'+
    '<label style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px;cursor:pointer;margin-top:10px">'+
      '<input type="checkbox" id="gdRestoreConfirm" style="width:auto"> Ya, saya mengerti dan ingin melanjutkan restore</label>',
    '<button class="btn2" onclick="closeModal()">Batal</button>'+
    '<button class="btn3" id="gdRestoreBtn" disabled onclick="gdRestoreExecute(\''+fileId+'\',\''+esc(fileName).replace(/'/g,'')+'\')">⬇ Restore Sekarang</button>', true);
  var chk = document.getElementById('gdRestoreConfirm');
  var btn = document.getElementById('gdRestoreBtn');
  if(chk && btn) chk.onchange = function(){ btn.disabled = !chk.checked; };
}
async function gdRestoreExecute(fileId, fileName){
  closeModal();
  try{
    toast('Mengunduh file dari Google Drive…','inf');
    var txt = await gdDownload(fileId);
    var data = JSON.parse(txt);
    if(!data || !data.stores) throw new Error('Format backup tidak dikenali');
    try{
      toast('Membuat backup pengaman data saat ini…','inf');
      var safety = await buildBackupObject();
      var safetyName = 'AUTO_SAFETY_BEFORE_RESTORE_' + new Date().getTime() + '.json';
      await gdUpload(safetyName, JSON.stringify(safety, null, 2));
      toast('Backup pengaman tersimpan di Google Drive','inf');
    }catch(safeErr){ console.warn('Gagal backup pengaman:', safeErr); toast('Peringatan: gagal membuat backup pengaman, melanjutkan restore…','inf'); }
    var total = countBackupRows(data);
    toast('Memulihkan '+total+' data ke server…','inf');
    var res = await api('restoreAll', { backup: data });
    toast('✅ Restore berhasil — '+(res.total||total)+' data dipulihkan');
    setTimeout(function(){ location.reload(); }, 1600);
  }catch(e){ console.error(e); toast('Restore gagal: ' + e.message, 'er'); }
}
function pilihFileRestore(){
  var inp = document.createElement('input');
  inp.type = 'file'; inp.accept = '.json,application/json';
  inp.onchange = function(){ if(inp.files[0]) restoreFromFile(inp.files[0]); };
  inp.click();
}
async function restoreFromFile(file){
  if(!file) return;
  if(!/\.json$/i.test(file.name||'')){ toast('File harus .json', 'er'); return; }
  var txt; try{ txt = await file.text(); }catch(e){ toast('Gagal baca file','er'); return; }
  var data; try{ data = JSON.parse(txt); }catch(e){ toast('File backup rusak','er'); return; }
  if(!data || !data.stores){ toast('Format backup tidak dikenali','er'); return; }
  await applyRestore(data);
}
async function applyRestore(data){
  var total = countBackupRows(data);
  return new Promise(function(resolve){
    confirmBox('Restore akan MENGGANTI seluruh data server dengan ' + total + ' data dari file backup. Lanjutkan?', async function(){
      try{
        var res = await api('restoreAll', { backup: data });
        toast('Restore berhasil — ' + (res.total||total) + ' data dipulihkan');
        setTimeout(function(){ location.reload(); }, 1200);
        resolve(true);
      }catch(e){ toast('Restore gagal: ' + e.message, 'er'); resolve(false); }
    });
  });
}

var ST = { token:null, user:null, guru:null, page:'dashboard',
  kelas:[], gurubk:[], gurupiket:[], siswa:[], setting:{}, cache:{}, history:[],
  cacheTTL:{}, khTab:'harian' };

var CACHE_TTL_MS = 30 * 60 * 1000;
function getCache(key, maxAgeMs){
  if(ST.cache[key] === undefined || ST.cache[key] === null) return null;
  var ts = ST.cacheTTL[key] || 0;
  if(Date.now() - ts > (maxAgeMs || CACHE_TTL_MS)) return null;
  return ST.cache[key];
}
function setCache(key, val){ ST.cache[key] = val; ST.cacheTTL[key] = Date.now(); }
function invalidateCache(key){ ST.cache[key] = null; ST.cacheTTL[key] = 0; }

var _hadirLoading = {};
function getHadirRowsRange(since, until, forceRefresh){
  var ck = 'HADIR|' + (since||'') + '|' + (until||'');
  if(forceRefresh){ ST.cache[ck] = null; ST.cacheTTL[ck] = 0; _hadirLoading[ck] = null; }
  var cached = getCache(ck);
  if(cached !== null) return Promise.resolve(cached);
  if(_hadirLoading[ck]) return _hadirLoading[ck];
  _hadirLoading[ck] = api('getData', { sheet: SH.HADIR, since: since, until: until })
    .then(function(rows){ setCache(ck, rows || []); _hadirLoading[ck] = null; return ST.cache[ck]; })
    .catch(function(e){ _hadirLoading[ck] = null; throw e; });
  return _hadirLoading[ck];
}
function getHadirRows(forceRefresh){
  var tglAkhir = today();
  var d = parseDate(tglAkhir); d.setDate(d.getDate() - 30);
  var tglAwal = d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());
  return getHadirRowsRange(tglAwal, tglAkhir, forceRefresh);
}

function penangananSering(jenis, n){
  if(jenis === 'izin' || jenis === 'terlambat'){
    if(n >= 10) return 'Tier 4 | Kunjungan rumah + surat peringatan tertulis + koordinasi Wali Kelas & Kepala Sekolah untuk tindakan disiplin';
    if(n >= 7)  return 'Tier 3 | Wali Kelas memfasilitasi Pertemuan orang tua + konseling intensif Guru BK + surat peringatan tertulis';
    if(n >= 5)  return 'Tier 2 | Wali Kelas berkoordinasi dengan Guru BK + konseling individual + Pertemuan orang tua ke sekolah';
    if(n >= 3)  return 'Tier 1 | Wali Kelas memberi teguran lisan dan pembinaan; Guru BK memantau perkembangan';
    return 'Pemantauan rutin Wali Kelas';
  }
  return '-';
}
function penangananRawan(A, total){
  if(A >= 10) return 'Tier 4 | Kunjungan rumah + surat peringatan tertulis + koordinasi Wali Kelas & Kepala Sekolah';
  if(A >= 5)  return 'Tier 3 | Wali Kelas memfasilitasi Pertemuan orang tua + konseling intensif Guru BK + home visit';
  if(A >= 3)  return 'Tier 2 | Wali Kelas berkoordinasi dengan Guru BK + konseling individual + home visit awal';
  if(total >= 5) return 'Tier 1 | Wali Kelas melakukan pembinaan; Guru BK memantau perkembangan';
  return 'Pemantauan rutin Wali Kelas';
}
function tierBadge(txt, range){
  var m = String(txt||'').match(/^Tier\s*(\d)/i);
  if(!m) return '<span class="reko">'+esc(txt)+'</span>';
  var t = m[1];
  var rangeHTML = range ? ' <span class="tier-range">'+esc(range)+'</span>' : '';
  return '<span class="tier tier-'+t+'">Tier '+t+rangeHTML+'</span> <span class="reko">'+esc(txt.replace(/^Tier\s*\d\s*\|\s*/i,''))+'</span>';
}
function tierNumFromPenanganan(txt){ var m = String(txt||'').match(/^Tier\s*(\d)/i); return m ? +m[1] : 1; }
function rawanRowClass(tier){ var t = Math.max(1, Math.min(4, +tier || 1)); return 'rawan-t' + t; }
function tierRangeInfo(jenis, tier){
  var t = +tier;
  if(jenis === 'izin' || jenis === 'terlambat'){
    if(t === 1) return '(3–4×)'; if(t === 2) return '(5–6×)'; if(t === 3) return '(7–9×)'; if(t === 4) return '(≥10×)';
  } else if(jenis === 'kehadiran' || jenis === 'rawan'){
    if(t === 1) return '(total ≥5)'; if(t === 2) return '(Alpa 3–4)'; if(t === 3) return '(Alpa 5–9)'; if(t === 4) return '(Alpa ≥10)';
  }
  return '';
}
function sortByRawanSering(list, jenis){
  return list.slice().sort(function(a, b){
    var ta = tierNumFromPenanganan(penangananSering(jenis, a.n));
    var tb = tierNumFromPenanganan(penangananSering(jenis, b.n));
    if(tb !== ta) return tb - ta;
    if(b.n !== a.n) return b.n - a.n;
    return String(a.Nama||'').localeCompare(String(b.Nama||''));
  });
}
function sortByRawanKehadiran(list){
  return list.slice().sort(function(a, b){
    var totalA = (a.t != null ? a.t : a.total); var totalB = (b.t != null ? b.t : b.total);
    var ta = tierNumFromPenanganan(penangananRawan(a.A, totalA));
    var tb = tierNumFromPenanganan(penangananRawan(b.A, totalB));
    if(tb !== ta) return tb - ta;
    if(b.A !== a.A) return b.A - a.A;
    if(totalB !== totalA) return totalB - totalA;
    return String(a.Nama||'').localeCompare(String(b.Nama||''));
  });
}
function filterRawanByJenis(list, jenis){
  if(!jenis) return list;
  return list.filter(function(x){
    if(jenis === 'S') return (x.S||0) > 0;
    if(jenis === 'I') return (x.I||0) > 0;
    if(jenis === 'A') return (x.A||0) > 0;
    return true;
  });
}
function sortRawanByJenis(list, jenis){
  if(!jenis) return sortByRawanKehadiran(list);
  return list.slice().sort(function(a, b){
    var va = (jenis === 'S') ? (a.S||0) : (jenis === 'I') ? (a.I||0) : (a.A||0);
    var vb = (jenis === 'S') ? (b.S||0) : (jenis === 'I') ? (b.I||0) : (b.A||0);
    if(vb !== va) return vb - va;
    var ta = (a.t != null ? a.t : a.total) || 0; var tb = (b.t != null ? b.t : b.total) || 0;
    if(tb !== ta) return tb - ta;
    return String(a.Nama||'').localeCompare(String(b.Nama||''));
  });
}
function jenisLabelOf(jenis){
  if(jenis === 'S') return 'Sakit'; if(jenis === 'I') return 'Izin'; if(jenis === 'A') return 'Alpa';
  return 'Semua Ketidakhadiran';
}
function getGuruBKNama(){ if(ST.guru && ST.guru.Nama) return ST.guru.Nama; if(ST.setting && ST.setting.guruBK) return ST.setting.guruBK; return ''; }
function getGuruBKNIP(){ if(ST.guru && ST.guru.NIP) return ST.guru.NIP; if(ST.setting && ST.setting.nipGuruBK) return ST.setting.nipGuruBK; return ''; }
function getGuruBKTTD(){ if(ST.guru && ST.guru.TtdBK) return ST.guru.TtdBK; if(ST.setting && ST.setting.ttdBK) return ST.setting.ttdBK; return ''; }
function currentPetugasName(){
  if((ST.user && ST.user.role === 'gurubk') && ST.guru && ST.guru.Nama) return ST.guru.Nama;
  if((ST.user && ST.user.role === 'gurupiket') && ST.guru && ST.guru.Nama) return ST.guru.Nama;
  if(ST.user && ST.user.role === 'admin') return 'Administrator';
  if(ST.user && ST.user.username) return ST.user.username;
  return '';
}
function isJurnalOwner(row){
  if(!row) return false;
  var owner = String(row.Petugas||'').trim();
  if(!owner) return true;
  if(ST.user && ST.user.role === 'admin') return true;
  if(ST.user && ST.user.role === 'gurubk') return owner === String(currentPetugasName()).trim();
  return true;
}
function isKegiatanOwner(row){
  if(!row) return false;
  var owner = String(row.Petugas||'').trim();
  if(!owner) return true;
  if(ST.user && ST.user.role === 'admin') return true;
  if(ST.user && ST.user.role === 'gurubk') return owner === String(currentPetugasName()).trim();
  return true;
}
function isKelompokOwner(row){ return isKegiatanOwner(row); }

function ttdGuruBKHTML(tanggalStr){
  var nama = getGuruBKNama(); var nip = getGuruBKNIP(); var ttdUrl = getGuruBKTTD();
  var ttdImg = ttdUrl ? '<img src="'+esc(ttdUrl)+'" style="max-height:75px;max-width:220px;object-fit:contain">' : '';
  var d; if(tanggalStr){ d = parseDate(tanggalStr); if(!d || isNaN(d)) d = new Date(); } else { d = new Date(); }
  var tglDisplay = 'Klirong, ' + d.toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'});
  return '<div style="margin-top:38px;display:flex;justify-content:flex-end"><div style="text-align:center;min-width:250px">'+
    '<div>'+tglDisplay+'</div><div>Guru BK,</div>'+
    '<div style="height:85px;padding-top:6px">'+ttdImg+'</div>'+
    '<div style="font-weight:700;text-decoration:underline">'+esc(nama||'................................')+'</div>'+
    '<div>NIP. '+esc(nip||'................................')+'</div></div></div>';
}
function ttdOrangTuaHTML(namaOrtu, ttdUrl){
  var ttdImg = ttdUrl ? '<img src="'+esc(ttdUrl)+'" style="max-height:75px;max-width:220px;object-fit:contain">' : '';
  return '<div style="text-align:center;min-width:250px">'+
    '<div>Orang Tua / Wali,</div>'+
    '<div style="height:85px;padding-top:6px">'+ttdImg+'</div>'+
    '<div style="font-weight:700;text-decoration:underline">'+esc(namaOrtu||'................................')+'</div></div>';
}
function ttdGuruWaliKelasHTML(nama, ttdUrl){
  var ttdImg = ttdUrl ? '<img src="'+esc(ttdUrl)+'" style="max-height:75px;max-width:220px;object-fit:contain">' : '';
  return '<div style="text-align:center;min-width:250px">'+
    '<div>Guru / Wali Kelas,</div>'+
    '<div style="height:85px;padding-top:6px">'+ttdImg+'</div>'+
    '<div style="font-weight:700;text-decoration:underline">'+esc(nama||'................................')+'</div></div>';
}

function doLogin(){
  var u = $('#lgUser').value.trim();
  var p = $('#lgPass').value;
  var e = $('#loginErr');
  e.style.display='none';
  if(!u || !p){ e.textContent='Username dan password wajib diisi.'; e.style.display='block'; return; }
  e.textContent = 'Memproses…'; e.style.display='block';
  api('login', { username:u, password:p }).then(function(data){
    ST.token = data.token; ST.user = data;
    if(data.role === 'siswa'){ ST.guru = null; }
    else if(data.role === 'gurubk' || data.role === 'gurupiket'){
      ST.guru = data.guru || null;
      if(!ST.guru){
        e.textContent = 'Data ' + (data.role === 'gurupiket' ? 'Guru Piket' : 'Guru BK') + ' tidak ditemukan.';
        e.style.display='block'; return;
      }
    } else ST.guru = null;
    e.style.display='none';
    try {
      localStorage.setItem('bk_session', JSON.stringify({
        token: ST.token, user: ST.user, guru: ST.guru,
        expiresAt: data.expiresAt || (Date.now() + 30*24*60*60*1000)
      }));
    } catch(err){}
    startApp();
  }).catch(function(err){
    e.textContent = 'Error: ' + (err && err.message ? err.message : err);
    e.style.display='block';
  });
}
async function logout(){
  try{ await api('logout', {}); }catch(e){}
  try{ localStorage.removeItem('bk_session'); localStorage.removeItem('bk_master'); }catch(e){}
  ST.token=null; ST.user=null; ST.guru=null;
  ST.cache={}; ST.cacheTTL={}; _hadirLoading={};
  ST.khTab='harian'; ST.history=[];
  _gAccessToken = null; _gTokenExpiry = 0; _gUserEmail = '';
  $('#app').style.display='none';
  $('#login').style.display='flex';
  $('#lgPass').value='';
}
function startApp(){
  $('#login').style.display='none';
  $('#app').style.display='block';
  if(ST.user.role === 'siswa'){
    var sMe = ST.user.siswa || {};
    $('#whoTxt').textContent = 'Siswa — ' + (sMe.Nama || ST.user.username);
    buildMenu();
    ST.history = [];
    api('getSiswaInputLock').then(function(locked){ ST.setting=ST.setting||{}; ST.setting.inputSiswaTerkunci=!!locked; if(ST.page==='inputhp') renderInputHP(); }).catch(function(){});
    go('inputhp');
    api('getMySiswa').then(function(me){
      if(me){
        ST.user.siswa = me;
        try{
          var sess = JSON.parse(localStorage.getItem('bk_session')||'null');
          if(sess){ sess.user = ST.user; localStorage.setItem('bk_session', JSON.stringify(sess)); }
        }catch(e){}
        if(ST.page === 'inputhp') renderInputHP();
      }
    }).catch(function(){});
    return;
  }
  var who = ST.user.role==='admin' ? 'Administrator'
          : ST.user.role==='guru' ? 'Guru'
          : ST.user.role==='tamu' ? 'Tamu'
          : ST.user.role==='gurupiket' ? 'Guru Piket' + (ST.guru ? ' — '+ST.guru.Nama : '')
          : 'Guru BK' + (ST.guru ? ' — '+ST.guru.Nama : '');
  $('#whoTxt').textContent = who;
  ST.history = [];
  loadMaster().then(function(){ buildMenu(); var targetPage = document.body.getAttribute('data-start-page') || new URLSearchParams(location.search).get('page') || 'dashboard'; go(targetPage); }).catch(function(e){ toast('Gagal memuat data awal: '+e.message,'er'); });
}

var MASTER_TTL_MS = 30 * 60 * 1000;
function loadMaster(force){
  if(!force){
    try{
      var c = JSON.parse(localStorage.getItem('bk_master') || 'null');
      if(c && c.ts && (Date.now() - c.ts) < MASTER_TTL_MS && c.role === (ST.user && ST.user.role)){
        ST.kelas = c.kelas || []; ST.gurubk = c.gurubk || []; ST.gurupiket = c.gurupiket || [];
        ST.setting = c.setting || {}; ST.siswa = c.siswa || [];
        if(c.guru) ST.guru = c.guru;
        return Promise.resolve();
      }
    }catch(e){}
  }
  return api('bootstrap').then(function(b){
    ST.kelas = b.kelas || []; ST.gurubk = b.gurubk || []; ST.gurupiket = b.gurupiket || [];
    ST.setting = b.setting || {}; ST.siswa = b.siswa || [];
    if(b.guru) ST.guru = b.guru;
    try{
      localStorage.setItem('bk_master', JSON.stringify({
        ts: Date.now(), role: ST.user && ST.user.role,
        kelas: ST.kelas, gurubk: ST.gurubk, gurupiket: ST.gurupiket,
        setting: ST.setting, siswa: ST.siswa, guru: ST.guru
      }));
    }catch(e){}
  });
}

function kelasSaya(){
  if(ST.user && ST.user.role === 'gurubk'){
    if(ST.guru && ST.guru.KelasAmpu){
      var arr = String(ST.guru.KelasAmpu).split(',').map(function(s){return s.trim();}).filter(Boolean);
      if(arr.length) return arr;
    }
    return [];
  }
  if(ST.user && ST.user.role === 'siswa') return [];
  return ST.kelas;
}
function siswaSaya(){
  if(ST.user && ST.user.role === 'siswa') return [];
  var ks = kelasSaya();
  if(!ks.length) return [];
  return ST.siswa.filter(function(s){ return ks.indexOf(s.Kelas) >= 0; });
}
function refreshMyGuru(){
  if(!ST.user || (ST.user.role !== 'gurubk' && ST.user.role !== 'gurupiket')) return;
  toast('Memuat ulang data…','inf');
  api('refreshMyGuru').then(function(g){ ST.guru = g; return loadMaster(true); })
    .then(function(){ toast('Data diperbarui'); go('dashboard'); })
    .catch(function(e){ toast(e.message,'er'); });
}

var MENU = [
  {id:'dashboard', l:'Dashboard', i:'🏠', sec:'Utama'},
  {id:'inputhp',   l:'Data Kontak Saya', i:'📱', sec:'Data Saya', roles:['siswa']},
  {id:'setting',   l:'Setting',   i:'⚙️', sec:'Pengaturan', roles:['admin']},
  {id:'izin',      l:'Perizinan', i:'🚪', sec:'Layanan', roles:['admin','gurubk','gurupiket']},
  {id:'terlambat', l:'Keterlambatan', i:'⏰', sec:'Layanan', roles:['admin','gurubk','gurupiket']},
  {id:'jurnal',    l:'Jurnal Harian', i:'📔', sec:'Layanan', roles:['admin','gurubk']},
  {id:'siswa',     l:'Daftar Siswa', i:'👥', sec:'Data', roles:['admin','gurubk']},
  {id:'kehadiran', l:'Presensi', i:'📋', sec:'Data', roles:['admin','gurubk']},
  {id:'klasikal',  l:'Bimbingan Klasikal', i:'🏫', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'kelompok',  l:'Bimbingan Kelompok', i:'👥', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'kr',        l:'Home Visit', i:'🏡', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'konseling', l:'Konseling Individual', i:'💬', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'panggilan', l:'Pertemuan OT', i:'📞', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'kasus',     l:'Catatan Kasus', i:'⚖️', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'konferensi',l:'Konferensi Kasus', i:'🤝', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'alihtangan',l:'Alih Tangan Kasus', i:'🔄', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'anekdot',   l:'Catatan Anekdot', i:'📝', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'lainlain',  l:'Lain-Lain', i:'📌', sec:'Layanan BK', roles:['admin','gurubk']},
  {id:'rekapitulasi', l:'Siswa Rawan', i:'📊', sec:'Pelaporan', roles:['admin','gurubk','tamu']},
  {id:'report',    l:'Report', i:'📑', sec:'Pelaporan', roles:['admin','gurubk','tamu']}
];
function buildMenu(){
  var role = ST.user.role; var html='', lastSec='';
  if(role === 'siswa'){
    html = '<div class="sec">Data Saya</div>'+
      '<a href="#" data-p="inputhp" onclick="go(\'inputhp\');return false;"><i>📱</i>Data Kontak Saya</a>';
    $('#side').innerHTML = html;
    return;
  }
  MENU.forEach(function(m){
    if(m.roles && m.roles.indexOf(role)<0) return;
    if(m.sec !== lastSec){ html += '<div class="sec">'+m.sec+'</div>'; lastSec=m.sec; }
    html += '<a href="#" data-p="'+m.id+'" onclick="go(\''+m.id+'\');return false;"><i>'+m.i+'</i>'+m.l+'</a>';
  });
  $('#side').innerHTML = html;
}
function go(page, _skipHistory){
  var menu = null;
  for(var i=0;i<MENU.length;i++){ if(MENU[i].id===page){ menu = MENU[i]; break; } }
  if(menu && menu.roles && menu.roles.indexOf(ST.user.role)<0){ toast('Tidak memiliki akses','er'); return; }
  if(ST.user.role === 'siswa' && page !== 'inputhp'){ page = 'inputhp'; }
  if(!_skipHistory && ST.page && ST.page !== page){
    ST.history.push(ST.page);
    if(ST.history.length > 50) ST.history.shift();
  }
  ST.page = page;
  $$('#side a').forEach(function(a){ a.classList.toggle('on', a.dataset.p===page); });
  $('#side').classList.remove('open');
  var R = {
    dashboard:renderDashboard, setting:renderSetting, inputhp:renderInputHP,
    izin:function(){ renderLayanan('izin'); }, terlambat:function(){ renderLayanan('terlambat'); },
    jurnal:function(){ renderJurnal(); }, siswa:renderSiswa, kehadiran:renderKehadiran,
    klasikal:function(){ renderKegiatan('klasikal'); }, kelompok:function(){ renderKegiatan('kelompok'); },
    kr:function(){ renderKegiatan('kr'); }, konseling:function(){ renderKegiatan('konseling'); },
    panggilan:function(){ renderKegiatan('panggilan'); }, kasus:function(){ renderKegiatan('kasus'); },
    konferensi:function(){ renderKegiatan('konferensi'); }, alihtangan:function(){ renderKegiatan('alihtangan'); },
    anekdot:function(){ renderKegiatan('anekdot'); }, lainlain:function(){ renderKegiatan('lainlain'); },
    rekapitulasi:renderRekapitulasi, report:renderReport
  };
  (R[page] || renderDashboard)();
  updateBackBtn();
}
function goBack(){
  if(!ST.history || !ST.history.length) return;
  var prev = ST.history.pop();
  go(prev, true);
}
function updateBackBtn(){
  var b = document.getElementById('backBtn');
  if(b){
    if(ST.history && ST.history.length > 0 && ST.user.role !== 'siswa') b.classList.add('on');
    else b.classList.remove('on');
  }
  var jb = document.getElementById('jurnalFloat');
  if(jb){
    var showJurnal = ST.page === 'dashboard' && ST.user && (ST.user.role === 'gurubk' || ST.user.role === 'admin');
    jb.classList.toggle('on', !!showJurnal);
  }
}

function renderInputHP(){
  var s = (ST.user && ST.user.siswa) || {};
  var inputTerkunci = !!(ST.setting && ST.setting.inputSiswaTerkunci);
  var roAttr = inputTerkunci ? ' readonly disabled' : ''; 
  var html = '<div class="hd"><div><h2>📱 Data Kontak Saya</h2><div class="sub">Lengkapi data kontak Anda dan orang tua / wali</div></div></div>';
  html += '<div class="card kontak-card">';
  html += inputTerkunci ? '<div class="notif edit" style="margin-bottom:14px">🔒 <b>Input data sedang dikunci Administrator.</b> Anda hanya dapat melihat data kontak dan tidak dapat mengubahnya.</div>' : '<div class="notif info" style="margin-bottom:14px">✍️ Isi data di bawah ini dengan <b>lengkap dan benar</b>. Data digunakan untuk keperluan komunikasi sekolah dengan siswa dan orang tua / wali.</div>';
  html += '<div class="kontak-info">';
  html += '<div class="ci"><div class="l">NIS</div><div class="v">'+esc(s.NIS||'-')+'</div></div>';
  html += '<div class="ci"><div class="l">Nama Siswa</div><div class="v">'+esc(s.Nama||'-')+'</div></div>';
  html += '<div class="ci"><div class="l">Kelas</div><div class="v">'+esc(s.Kelas||'-')+'</div></div>';
  html += '</div>';
  html += '<div class="kontak-section">';
  html += '<h3><span class="em">📱</span> Kontak Siswa</h3>';
  html += '<div class="fg"><label>No. HP Siswa / WhatsApp</label><input id="hpSiswa" value="'+esc(s.NoHP||'')+'" placeholder="Contoh: 08123456789" inputmode="tel"'+roAttr+'></div>';
  html += '</div>';
  html += '<div class="kontak-section" style="border-left-color:#f39c12">';
  html += '<h3><span class="em">👨</span> Data Ayah</h3>';
  html += '<div class="row r2">';
  html += '<div class="fg"><label>Nama Ayah</label><input id="hpNamaAyah" value="'+esc(s.NamaAyah||'')+'" placeholder="Nama lengkap ayah"'+roAttr+'></div>';
  html += '<div class="fg"><label>No. HP Ayah</label><input id="hpNoAyah" value="'+esc(s.NoHPAyah||'')+'" placeholder="Contoh: 08123456789" inputmode="tel"'+roAttr+'></div>';
  html += '</div></div>';
  html += '<div class="kontak-section" style="border-left-color:#e84393">';
  html += '<h3><span class="em">👩</span> Data Ibu</h3>';
  html += '<div class="row r2">';
  html += '<div class="fg"><label>Nama Ibu</label><input id="hpNamaIbu" value="'+esc(s.NamaIbu||'')+'" placeholder="Nama lengkap ibu"'+roAttr+'></div>';
  html += '<div class="fg"><label>No. HP Ibu</label><input id="hpNoIbu" value="'+esc(s.NoHPIbu||'')+'" placeholder="Contoh: 08123456789" inputmode="tel"'+roAttr+'></div>';
  html += '</div></div>';
  html += '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:8px">';
  html += inputTerkunci ? '' : '<button class="btn" onclick="simpanKontakSiswa()">💾 Simpan Data</button>';
  html += '<button class="btn2" onclick="renderInputHP()">↺ Muat Ulang</button>';
  html += '</div>';
  html += '<div class="hint" style="margin-top:14px;padding:9px 12px;background:#f7fafd;border-radius:8px;border-left:3px solid #1a73e8">🔒 Data Anda tersimpan aman dan hanya digunakan untuk komunikasi sekolah.</div>';
  html += '</div>';
  $('#main').innerHTML = html;
  updateBackBtn();
}
function simpanKontakSiswa(){
  if(ST.setting && ST.setting.inputSiswaTerkunci){ toast('Input data sedang dikunci Administrator','er'); return; }
  if(!ST.user || ST.user.role !== 'siswa'){ toast('Akses ditolak','er'); return; }
  var s = (ST.user && ST.user.siswa) || {};
  if(!s.NIS){ toast('Data siswa tidak ditemukan','er'); return; }
  var payload = {
    NIS: s.NIS,
    NoHP: ($('#hpSiswa').value||'').trim(),
    NamaAyah: ($('#hpNamaAyah').value||'').trim(),
    NoHPAyah: ($('#hpNoAyah').value||'').trim(),
    NamaIbu: ($('#hpNamaIbu').value||'').trim(),
    NoHPIbu: ($('#hpNoIbu').value||'').trim()
  };
  if(!payload.NoHP && !payload.NoHPAyah && !payload.NoHPIbu){ toast('Minimal isi salah satu nomor HP','er'); return; }
  api('saveKontakSiswa', payload).then(function(res){
    if(res && res.siswa){
      ST.user.siswa = res.siswa;
      try{
        var sess = JSON.parse(localStorage.getItem('bk_session')||'null');
        if(sess){ sess.user = ST.user; localStorage.setItem('bk_session', JSON.stringify(sess)); }
      }catch(e){}
    }
    toast('✅ Data kontak berhasil disimpan');
    renderInputHP();
  }).catch(function(e){ toast('Gagal simpan: ' + (e.message||e), 'er'); });
}

/* ================= DASHBOARD ================= */
function dashInputPresensi(kelas){
  if(kelas) formInputKehadiran(today(), kelas);
  else formInputKehadiran(today());
}
function dashInputJurnal(){ formJurnal(); }
function renderDashboard(){
  $('#main').innerHTML = '<div class="card"><div class="empty">Memuat data…</div></div>';
  var isPiket = (ST.user.role === 'gurupiket');
  var isTamu = (ST.user.role === 'tamu');
  var isGuruBK = (ST.user.role === 'gurubk');
  if(ST.user.role === 'gurubk'){
    if(!ST.guru){ $('#main').innerHTML = '<div class="card" style="border-left:4px solid #e74c3c"><h2>⚠️ Data Guru BK belum terdaftar</h2><div class="sub">Hubungi Administrator.</div><div style="margin-top:12px"><button class="btn" onclick="logout()">Keluar</button></div></div>'; return; }
    if(!ST.guru.KelasAmpu){ $('#main').innerHTML = '<div class="card" style="border-left:4px solid #f39c12"><h2>⚠️ Anda belum memiliki kelas ampu</h2><div style="margin-top:12px"><button class="btn2" onclick="refreshMyGuru()">🔄 Muat Ulang</button> <button class="btn" onclick="logout()">Keluar</button></div></div>'; return; }
  }
  if(isTamu){
    var htmlTamu = '';
    htmlTamu += '<div class="dash-head"><div class="who">Tamu</div><div class="d">'+tglPanjang(today())+'</div></div>';
    htmlTamu += '<div class="dash-card" style="text-align:center;padding:28px 16px">';
    htmlTamu += '<div style="font-size:14px;color:#5a6b7c;line-height:1.7">Selamat datang. Silakan pilih menu <b>Siswa Rawan</b> atau <b>Report</b> pada panel di samping untuk melihat data.</div>';
    htmlTamu += '</div>';
    $('#main').innerHTML = htmlTamu;
    updateBackBtn();
    return;
  }
  var ks = kelasSaya();
  function inKelas(r){ return ks.length === 0 ? true : ks.indexOf(r.Kelas) >= 0; }
  var tglHariIni = today();
  api('batchGetData', {
    sheets: [SH.IZIN, SH.TERLAMBAT, SH.HADIR, SH.JURNAL],
    filters: {
      [SH.IZIN]: { since: tglHariIni, until: tglHariIni },
      [SH.TERLAMBAT]: { since: tglHariIni, until: tglHariIni },
      [SH.HADIR]: { since: tglHariIni, until: tglHariIni },
      [SH.JURNAL]: { since: tglHariIni, until: tglHariIni }
    }
  }).then(function(batch){
    var izinAll = batch[SH.IZIN] || [];
    var telatAll = batch[SH.TERLAMBAT] || [];
    var hadirAll = batch[SH.HADIR] || [];
    var jurnalAll = (batch[SH.JURNAL] || []).filter(isJurnalOwner);
    var izin = izinAll.filter(inKelas);
    var telat = telatAll.filter(inKelas);
    var hadir = hadirAll.filter(inKelas);
    var jurnalHariIni = jurnalAll.filter(function(r){ return String(r.Tanggal) === tglHariIni; });
    var sakit = hadir.filter(function(r){ return r.Status === 'S'; }).length;
    var izinSiswa = hadir.filter(function(r){ return r.Status === 'I'; }).length;
    var alpa = hadir.filter(function(r){ return r.Status === 'A'; }).length;
    var ksAll = ks.slice().sort();
    var checkedMap = {};
    hadirAll.forEach(function(r){ if(String(r.Tanggal) === tglHariIni && r.Kelas) checkedMap[r.Kelas] = true; });
    var sudahN = ksAll.filter(function(k){ return !!checkedMap[k]; }).length;
    var html = '';
    if(batch.__errors && Object.keys(batch.__errors).length){
      var detailErrorDashboard = Object.keys(batch.__errors).map(function(k){ return k+': '+batch.__errors[k]; }).join(' | ');
      html += '<div class="notif err" style="margin-bottom:10px"><b>⚠️ Sebagian data dashboard gagal dimuat.</b> '+esc(detailErrorDashboard)+'<br>Periksa tabel, nama kolom, dan izin RLS Supabase.</div>';
    }
    var roleLabel = ST.user.role==='admin'?'Administrator':ST.user.role==='gurubk'?'Guru BK'+(ST.guru?' — '+ST.guru.Nama:''):ST.user.role==='gurupiket'?'Guru Piket'+(ST.guru?' — '+ST.guru.Nama:''):'Tamu';
    html += '<div class="dash-head"><div class="who">'+esc(roleLabel)+'</div><div class="d">'+tglPanjang(tglHariIni)+'</div></div>';
    if(!isPiket){
      html += '<div class="dash-card">';
      html += '<h2>📋 Cek List Presensi Kelas Hari Ini</h2>';
      html += '<div class="sub">'+sudahN+' / '+ksAll.length+' kelas sudah presensi — klik kelas untuk input / edit</div>';
      html += '<div class="presensi-checklist">';
      if(ksAll.length){
        ksAll.forEach(function(k){
          var ok = !!checkedMap[k];
          html += '<span class="presensi-chip '+(ok?'done':'pending')+'" onclick="dashInputPresensi(\''+esc(k)+'\')" title="'+(ok?'Klik untuk edit presensi':'Klik untuk input presensi')+'">'+esc(k)+' <span class="mark">'+(ok?'✓':'—')+'</span></span>';
        });
      } else { html += '<span class="hint">Belum ada kelas.</span>'; }
      html += '</div></div>';
    }
    html += '<div class="dash-stats">';
    html += '<div class="dash-stat y"><div class="n">'+izin.length+'</div><div class="l">Izin Keluar<br>Hari Ini</div></div>';
    html += '<div class="dash-stat r"><div class="n">'+telat.length+'</div><div class="l">Terlambat<br>Hari Ini</div></div>';
    if(!isPiket){
      html += '<div class="dash-stat" style="border-left-color:#b9770e"><div class="n">'+sakit+'</div><div class="l">Siswa<br>Sakit</div></div>';
      html += '<div class="dash-stat b"><div class="n">'+izinSiswa+'</div><div class="l">Siswa<br>Izin</div></div>';
      html += '<div class="dash-stat r"><div class="n">'+alpa+'</div><div class="l">Siswa<br>Alpa</div></div>';
    }
    html += '</div>';

    // ==== DAFTAR IZIN KELUAR BELUM KEMBALI (HANYA GURU PIKET) ====
    if(isPiket){
      var izinBelumKembali = izin.filter(function(r){ return r.StatusKembali !== 'Kembali'; });
      if(izinBelumKembali.length){
        html += '<div class="dash-card" style="border-left:4px solid #f39c12">';
        html += '<h2>🚪 Siswa Izin Keluar — Belum Kembali</h2>';
        html += '<div class="sub">'+izinBelumKembali.length+' siswa masih di luar sekolah pada '+tglPanjang(tglHariIni)+'</div>';
        html += '<div class="tw" style="margin-top:8px"><table style="min-width:auto;font-size:12px"><thead><tr>'+
          '<th style="width:32px">No</th><th>Nama Siswa</th><th style="width:70px">Kelas</th><th style="width:80px">Jam Keluar</th><th>Alasan</th><th style="width:100px;text-align:center">Aksi</th>'+
          '</tr></thead><tbody>';
        izinBelumKembali.sort(function(a,b){ return String(a.JamKeluar||'').localeCompare(String(b.JamKeluar||'')); });
        izinBelumKembali.forEach(function(r, i){
          html += '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td><b>'+esc(r.Nama||'-')+'</b></td>'+
            '<td>'+esc(r.Kelas||'-')+'</td>'+
            '<td>'+esc(r.JamKeluar||'-')+'</td>'+
            '<td style="white-space:pre-wrap">'+esc((r.Alasan||'-').slice(0,80))+'</td>'+
            '<td style="text-align:center"><button class="btn4 btn-sm" onclick="konfirmasiKembali(\''+r.ID+'\')" title="Konfirmasi siswa sudah kembali">✓ Kembali</button></td>'+
          '</tr>';
        });
        html += '</tbody></table></div>';
        html += '<div class="hint" style="margin-top:7px">💡 Klik tombol <b>✓ Kembali</b> saat siswa sudah kembali ke sekolah untuk mencatat jam kembali.</div>';
        html += '</div>';
      } else if(izin.length > 0){
        html += '<div class="dash-card" style="border-left:4px solid #27ae60">';
        html += '<h2>🚪 Izin Keluar Hari Ini</h2>';
        html += '<div class="sub">'+izin.length+' izin tercatat — <b>semua siswa sudah kembali</b> ke sekolah ✓</div>';
        html += '</div>';
      }
    }

    if(!isPiket){
      var tidakMasuk = hadir.filter(function(r){ return r.Status === 'S' || r.Status === 'I' || r.Status === 'A'; });
      html += '<div class="absent-card" style="border-left:4px solid '+(tidakMasuk.length?'#e74c3c':'#27ae60')+'">';
      html += '<h2>🚫 Siswa Tidak Masuk Hari Ini</h2>';
      html += '<div class="sub">'+tidakMasuk.length+' siswa total • dikelompokkan per kelas</div>';
      if(tidakMasuk.length){
        var byKelas = {};
        tidakMasuk.forEach(function(r){
          var k = String(r.Kelas||'').trim() || 'Tanpa Kelas';
          if(!byKelas[k]) byKelas[k] = {S:[], I:[], A:[], total:0};
          if(byKelas[k][r.Status]){ byKelas[k][r.Status].push(r); byKelas[k].total++; }
        });
        var kelasKeys = Object.keys(byKelas).sort();
        html += '<div class="absent-grid-cols">';
        kelasKeys.forEach(function(k){
          var data = byKelas[k];
          html += '<div class="absent-kelas-block">';
          html += '<div class="absent-kelas-head">'+esc(k)+' <span class="cnt">('+data.total+' siswa)</span></div>';
          ['S','I','A'].forEach(function(st){
            var list = data[st]; if(!list.length) return;
            list.sort(function(a,b){ return String(a.Nama||'').localeCompare(String(b.Nama||'')); });
            var names = list.map(function(r){ return toProperCase(String(r.Nama||'').trim()); }).join(', ');
            var cls = st === 'S' ? 'lbl-s' : st === 'I' ? 'lbl-i' : 'lbl-a';
            html += '<div class="absent-line"><span class="lbl '+cls+'">'+st+' ('+list.length+'):</span> <span class="names">'+esc(names)+'</span></div>';
          });
          html += '</div>';
        });
        html += '</div>';
      } else { html += '<div class="empty" style="padding:14px">Semua siswa hadir hari ini. 👍</div>'; }
      html += '</div>';
    }
    if(isGuruBK && jurnalHariIni.length && !isHariLibur(tglHariIni)){
      html += '<div class="dash-card" style="border-left:4px solid #27ae60">';
      html += '<h2>📔 Jurnal Harian Hari Ini</h2>';
      html += '<div class="sub">'+jurnalHariIni.length+' kegiatan tercatat (milik Anda)</div>';
      jurnalHariIni.slice(0, 4).forEach(function(j){
        html += '<div class="jurnal-auto" style="padding:8px 10px;margin-bottom:6px"><b>'+esc((j.Kegiatan||'').slice(0,80))+'</b>'+(j.Keterangan?' — '+esc(j.Keterangan):'')+'</div>';
      });
      if(jurnalHariIni.length > 4) html += '<div class="hint">dan '+(jurnalHariIni.length-4)+' kegiatan lainnya…</div>';
      html += '<button class="btn2 btn-sm" style="margin-top:8px" onclick="go(\'jurnal\')">Lihat Semua Jurnal</button>';
      html += '</div>';
    }
    $('#main').innerHTML = html;
    updateBackBtn();
  }).catch(function(e){ $('#main').innerHTML = '<div class="card"><div class="empty">Gagal memuat: '+esc(e.message)+'</div></div>'; updateBackBtn(); });
}

/* ================= SETTING ================= */
var SETTING_TAB = 'identitas';
function renderSetting(){
  var tabs = [
    {id:'identitas', label:'📋 Identitas Laporan'},
    {id:'kelas', label:'🏫 Daftar Kelas'},
    {id:'gurubk', label:'👨‍🏫 Guru BK'},
    {id:'gurupiket', label:'👮 Guru Piket'},
    {id:'tamu', label:'👤 User Tamu'},
    {id:'gdrive', label:'☁️ Backup Google Drive'},
    {id:'wa', label:'📱 WhatsApp Gateway'},
    {id:'backup', label:'💾 Backup / Restore'},
    {id:'password', label:'🔐 Ganti Password'}
  ];
  var html = '<div class="hd"><div><h2>⚙️ Pengaturan Aplikasi</h2><div class="sub">Konfigurasi umum</div></div></div>';
  html += '<div class="tabs">' + tabs.map(function(t){ return '<button class="tab '+(t.id===SETTING_TAB?'on':'')+'" onclick="settingTabGo(\''+t.id+'\')">'+t.label+'</button>'; }).join('') + '</div>';
  html += '<div id="settingContent"></div>';
  $('#main').innerHTML = html;
  settingTabGo(SETTING_TAB);
}
function settingTabGo(t){
  SETTING_TAB = t;
  $$('.tabs .tab').forEach(function(b){ b.classList.toggle('on', b.textContent.indexOf(({identitas:'Identitas',kelas:'Kelas',gurubk:'Guru BK',gurupiket:'Guru Piket',tamu:'User Tamu',gdrive:'Google Drive',wa:'WhatsApp',backup:'Backup',password:'Ganti Password'})[t]) >= 0); });
  var el = $('#settingContent');
  if(t === 'identitas') renderSetIdentitas(el);
  else if(t === 'kelas') renderSetKelas(el);
  else if(t === 'gurubk') renderSetGuruBK(el);
  else if(t === 'gurupiket') renderSetGuruPiket(el);
  else if(t === 'tamu') renderSetTamu(el);
  else if(t === 'gdrive') renderSetGDrive(el);
  else if(t === 'wa') renderSetWA(el);
  else if(t === 'backup') renderSetBackup(el);
  else if(t === 'password') renderSetPassword(el);
}
function renderSetIdentitas(el){
  var s = ST.setting || {};
  var kop = s.kop || ''; var ttdBK = s.ttdBK || '';
  el.innerHTML = '<div class="card"><h2>Identitas Laporan (Default)</h2>'+
    '<div class="row r2">'+
      '<div class="fg"><label>Kepala Sekolah</label><input id="setKepsek" value="'+esc(s.kepalaSekolah||'')+'"></div>'+
      '<div class="fg"><label>NIP Kepala Sekolah</label><input id="setNip" value="'+esc(s.nipKepsek||'')+'"></div>'+
      '<div class="fg"><label>Nama Guru BK (default)</label><input id="setGuruBK" value="'+esc(s.guruBK||'')+'"></div>'+
      '<div class="fg"><label>NIP Guru BK</label><input id="setNipGuruBK" value="'+esc(s.nipGuruBK||'')+'"></div>'+
    '</div>'+
    '<div class="row r2">'+
      '<div class="fg"><label>Gambar Kop Laporan</label><input type="file" id="setKop" accept="image/*">'+(kop ? '<img src="'+esc(kop)+'" class="kop" style="margin-top:8px">' : '<div class="hint" style="margin-top:8px">Belum ada.</div>')+'</div>'+
      '<div class="fg"><label>TTD Default Guru BK</label><input type="file" id="setTtd" accept="image/*">'+(ttdBK ? '<div style="margin-top:8px;text-align:center;border:1px solid #e3eaf2;border-radius:8px;padding:8px"><img src="'+esc(ttdBK)+'" style="max-height:80px;max-width:220px"></div>' : '<div class="hint" style="margin-top:8px">Belum ada.</div>')+'</div>'+
    '</div>'+
    '<button class="btn" onclick="simpanSetting()">💾 Simpan Pengaturan</button>'+
  '</div>';
}
function renderSetKelas(el){
  el.innerHTML = '<div class="card"><h2>Daftar Kelas</h2>'+
    '<div class="pick" style="max-width:520px;margin-bottom:12px">'+
      '<input id="newKelas" placeholder="Contoh: X IPA 1"><button class="btn" onclick="tambahKelas()">+ Tambah</button><button class="btn5" onclick="formImportKelas()">📥 Import Excel</button>'+
    '</div>'+
    '<div>'+(ST.kelas.length ? ST.kelas.map(function(k){ return '<span class="chip">'+esc(k)+' <b onclick="hapusKelas(\''+esc(k)+'\')">×</b></span>'; }).join('') : '<div class="hint">Belum ada kelas.</div>')+'</div>'+
  '</div>';
}
function renderSetGuruBK(el){
  el.innerHTML = '<div class="card"><h2>Guru BK & Akun Login</h2>'+
    '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="formGuruBK()">+ Tambah Guru BK</button><button class="btn2" onclick="reloadGuruBK()">🔄 Muat Ulang</button></div>'+
    '<div class="tw"><table><thead><tr><th>Nama</th><th>NIP</th><th>Kelas Ampu</th><th>Username</th><th>Password</th><th>TTD</th><th style="width:120px"></th></tr></thead><tbody>'+
    (ST.gurubk.length ? ST.gurubk.map(function(g){
      var ttdCell = g.TtdBK ? '<img src="'+esc(g.TtdBK)+'" style="max-height:34px;max-width:60px;object-fit:contain;border:1px solid #e3eaf2;border-radius:4px">' : '<span class="tag tgray">Belum</span>';
      return '<tr><td><b>'+esc(g.Nama)+'</b></td><td>'+esc(g.NIP||'-')+'</td>'+
        '<td>'+((g.KelasAmpu||'').split(',').filter(Boolean).map(function(k){ return '<span class="chip">'+esc(k.trim())+'</span>'; }).join('')||'<span class="tag ty">Belum diset</span>')+'</td>'+
        '<td>'+esc(g.Username||'-')+'</td><td>'+esc(g.Password||'-')+'</td><td style="text-align:center">'+ttdCell+'</td>'+
        '<td class="right"><button class="btn2 btn-sm" onclick="formGuruBK(\''+g.ID+'\')">Edit</button><button class="btn3 btn-sm" onclick="hapusGuruBK(\''+g.ID+'\')">Hapus</button></td></tr>';
    }).join('') : '<tr><td colspan="7" class="empty">Belum ada Guru BK</td></tr>')+
    '</tbody></table></div></div>';
}
function renderSetGuruPiket(el){
  el.innerHTML = '<div class="card"><h2>Guru Piket & Akun Login</h2>'+
    '<div class="sub">Akun untuk guru piket (pencatatan perizinan & keterlambatan)</div>'+
    '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap"><button class="btn" onclick="formGuruPiket()">+ Tambah Guru Piket</button><button class="btn2" onclick="reloadGuruPiket()">🔄 Muat Ulang</button></div>'+
    '<div class="tw"><table><thead><tr><th>Nama</th><th>NIP</th><th>Username</th><th>Password</th><th style="width:120px"></th></tr></thead><tbody>'+
    ((ST.gurupiket||[]).length ? ST.gurupiket.map(function(g){
      return '<tr><td><b>'+esc(g.Nama)+'</b></td><td>'+esc(g.NIP||'-')+'</td>'+
        '<td>'+esc(g.Username||'-')+'</td><td>'+esc(g.Password||'-')+'</td>'+
        '<td class="right"><button class="btn2 btn-sm" onclick="formGuruPiket(\''+g.ID+'\')">Edit</button><button class="btn3 btn-sm" onclick="hapusGuruPiket(\''+g.ID+'\')">Hapus</button></td></tr>';
    }).join('') : '<tr><td colspan="5" class="empty">Belum ada Guru Piket</td></tr>')+
    '</tbody></table></div></div>';
}
function renderSetTamu(el){
  el.innerHTML = '<div class="card"><h2>👤 User Tamu</h2>'+
    '<div class="sub">Akun tamu hanya bisa mengakses menu <b>Siswa Rawan</b> & <b>Report</b></div>'+
    '<div class="row r2">'+
      '<div class="fg"><label>Username Tamu</label><input id="tamuUser" placeholder="username"></div>'+
      '<div class="fg"><label>Password Tamu</label><input type="password" id="tamuPass" placeholder="min 4 karakter"></div>'+
    '</div>'+
    '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-bottom:12px">'+
      '<button class="btn" onclick="tambahUserTamu()">+ Tambah / Reset User Tamu</button>'+
      '<button class="btn2" onclick="muatDaftarTamu()">🔄 Muat Daftar</button>'+
    '</div>'+
    '<div id="tamuListContainer"><div class="hint">Klik "Muat Daftar" untuk melihat user tamu.</div></div>'+
  '</div>';
  muatDaftarTamu();
}
function renderSetGDrive(el){
  var clientId = (ST.setting && ST.setting.googleClientId) || DEFAULT_GOOGLE_CLIENT_ID || '';
  var statusConnected = _gAccessToken && Date.now() < _gTokenExpiry - 60000;
  var akunInfo = statusConnected ? '<span class="acc-chip">✓ Terhubung' + (_gUserEmail ? ' — ' + esc(_gUserEmail) : '') + '</span>' : '<span class="tag ty">Belum terhubung</span>';
  el.innerHTML = '<div class="card"><h2>☁️ Backup & Restore Google Drive</h2>'+
    '<div class="sub">Simpan & restore backup langsung dari akun Google Anda</div>'+
    '<div style="margin-bottom:12px">Status: '+akunInfo+'</div>'+
    '<div class="gdrive-box"><b>Cara mengaktifkan (sekali saja):</b>'+
      '<ol><li>Buka <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a> → buat project baru.</li>'+
        '<li><b>APIs & Services → Library</b> → aktifkan <b>Google Drive API</b>.</li>'+
        '<li><b>APIs & Services → OAuth consent screen</b> → pilih <i>External</i>.</li>'+
        '<li><b>Credentials → Create Credentials → OAuth client ID</b> → tipe <b>Web application</b>.</li>'+
        '<li>Copy <b>Client ID</b> dan tempel di bawah, lalu simpan.</li></ol>'+
    '</div>'+
    '<div class="fg" style="margin-top:14px"><label>Google OAuth Client ID</label>'+
      '<input id="setGClientId" value="'+esc(clientId)+'" placeholder="xxxxxxxxxxxx.apps.googleusercontent.com">'+
      '<div class="hint">Disimpan di pengaturan server.</div>'+
    '</div>'+
    '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-bottom:16px"><button class="btn" onclick="simpanGoogleClientId()">💾 Simpan Client ID</button></div>'+
    '<div style="background:#e6f7ee;border-left:4px solid #27ae60;padding:14px;border-radius:10px;margin-bottom:16px">'+
      '<div style="font-size:13px;font-weight:700;color:#1e8449;margin-bottom:8px">⬆️ BACKUP (Upload ke Google Drive)</div>'+
      '<button class="btn4" onclick="backupToGoogleDrive()">☁️ Backup Sekarang ke Google Drive</button>'+
    '</div>'+
    '<div style="background:#fff5e0;border-left:4px solid #f39c12;padding:14px;border-radius:10px">'+
      '<div style="font-size:13px;font-weight:700;color:#7a4a00;margin-bottom:8px">⬇️ RESTORE (Download dari Google Drive)</div>'+
      '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-bottom:10px">'+
        '<button class="btn5" onclick="gdRenderList(true)">🔄 Muat / Segarkan Daftar Backup</button>'+
        '<button class="btn2" onclick="gdDisconnect()">🔌 Putuskan Akun Google</button>'+
      '</div>'+
      '<div id="gdListContainer"><div class="hint">Memuat daftar backup…</div></div>'+
    '</div>'+
  '</div>';
  setTimeout(function(){ gdRenderList(); }, 100);
}

/* ====== RENDER SETTING WHATSAPP GATEWAY ====== */
function renderSetWA(el){
  var s = ST.setting || {};
  var url   = s.waGatewayUrl || 'http://localhost:3000';
  var auto  = String(s.waAutoSend || '0') === '1';
  var autoTlt = String(s.waAutoSendTerlambat || '0') === '1';
  var delay = s.waDelayMs || '3000';
  var tpl   = s.waTemplate || defaultWaTemplate();
  var tplTlt = s.waTemplateTerlambat || defaultWaTemplateTerlambat();
  var scope = s.waManualScope || 'all';

  el.innerHTML =
  '<div class="card"><h2>📱 WhatsApp Gateway (Lokal)</h2>' +
    '<div class="sub">Kirim notifikasi otomatis ke orang tua siswa Sakit/Izin/Alpa dan siswa Terlambat melalui gateway WhatsApp di laptop Anda.</div>' +

    '<div class="gdrive-box"><b>Persiapan di laptop Windows (sekali saja):</b>' +
      '<ol>' +
        '<li>Install <b>Node.js LTS</b> dari <a href="https://nodejs.org" target="_blank">nodejs.org</a>.</li>' +
        '<li>Buat folder misal <code>D:\\wa-gateway-bk</code>, isi file <code>package.json</code> &amp; <code>server.js</code> (sudah disediakan terpisah).</li>' +
        '<li>Buka CMD di folder itu, jalankan: <code>npm install</code> lalu <code>npm start</code>.</li>' +
        '<li>Buka browser <code>http://localhost:3000/qr</code> → scan pakai WhatsApp HP gateway.</li>' +
        '<li>Setelah tertulis <b>WA terhubung</b>, biarkan CMD tetap jalan (minimize).</li>' +
      '</ol>' +
      '<div style="margin-top:8px">💡 Untuk pemakaian dari HP/PC lain di jaringan yang sama, ganti URL ke IP laptop, contoh: <code>http://192.168.1.10:3000</code> dan izinkan port 3000 di Windows Firewall.</div>' +
    '</div>' +

    '<div class="fg" style="margin-top:14px"><label>URL Gateway WhatsApp</label>' +
      '<input id="setWaUrl" value="'+esc(url)+'" placeholder="http://localhost:3000">' +
      '<div class="hint">Alamat server Node.js WhatsApp gateway.</div>' +
    '</div>' +

    '<div class="fg"><label>Template Pesan — Presensi (S/I/A)</label>' +
      '<textarea id="setWaTpl" rows="9" placeholder="Gunakan placeholder di bawah">'+esc(tpl)+'</textarea>' +
      '<div class="hint">Placeholder: <code>{ortu}</code>, <code>{nama}</code>, <code>{nis}</code>, <code>{kelas}</code>, <code>{tanggal}</code>, <code>{status}</code>, <code>{keterangan}</code></div>' +
    '</div>' +

    '<div class="fg" style="background:#fff8ec;padding:12px;border-left:4px solid #f39c12;border-radius:8px">' +
      '<div style="font-size:13px;font-weight:700;color:#b9770e;margin-bottom:8px">⏰ Template WA Keterlambatan</div>' +
      '<textarea id="setWaTplTlt" rows="9" placeholder="Gunakan placeholder di bawah">'+esc(tplTlt)+'</textarea>' +
      '<div class="hint">Placeholder: <code>{ortu}</code>, <code>{nama}</code>, <code>{nis}</code>, <code>{kelas}</code>, <code>{tanggal}</code>, <code>{jam}</code>, <code>{alasan}</code>, <code>{petugas}</code></div>' +
    '</div>' +

    '<div class="fg"><label>Jeda Antar Pesan (ms)</label>' +
      '<input id="setWaDelay" type="number" min="1500" step="500" value="'+esc(delay)+'">' +
      '<div class="hint">Minimal 1500 ms. Disarankan 3000–5000 ms agar nomor tidak diblokir WA.</div>' +
    '</div>' +

    '<div class="row r2">' +
      '<div class="fg"><label>Kirim Otomatis Setelah Presensi (S/I/A)</label>' +
        '<select id="setWaAuto">' +
          '<option value="0"' + (!auto?' selected':'') + '>Tidak — kirim manual lewat tombol</option>' +
          '<option value="1"' + ( auto?' selected':'') + '>Ya — otomatis begitu presensi disimpan</option>' +
        '</select>' +
      '</div>' +
      '<div class="fg"><label>Kirim Otomatis Setelah Catat Keterlambatan</label>' +
        '<select id="setWaAutoTlt">' +
          '<option value="0"' + (!autoTlt?' selected':'') + '>Tidak — kirim manual lewat tombol</option>' +
          '<option value="1"' + ( autoTlt?' selected':'') + '>Ya — otomatis begitu data keterlambatan disimpan</option>' +
        '</select>' +
      '</div>' +
    '</div>' +

    '<div class="fg"><label>Mode Cakupan Kirim WA Manual (tombol 📤)</label>' +
      '<select id="setWaScope">' +
        '<option value="all"' + (scope==='all'?' selected':'') + '>🌐 Semua Kelas (rekomendasi — nomor BK shared)</option>' +
        '<option value="ampu"' + (scope==='ampu'?' selected':'') + '>👤 Hanya Kelas Ampu Saya</option>' +
      '</select>' +
      '<div class="hint">Karena nomor pengirim adalah nomor BK (bukan nomor pribadi guru), mode "Semua Kelas" lebih praktis. Pilih "Hanya Kelas Ampu" jika ingin setiap guru bertanggung jawab pada kelasnya masing-masing.</div>' +
    '</div>' +

    '<div style="display:flex;gap:9px;flex-wrap:wrap;margin-top:6px">' +
      '<button class="btn" onclick="simpanSettingWA()">💾 Simpan Pengaturan</button>' +
      '<button class="btn2" onclick="ujiKoneksiGatewayWA()">🔌 Uji Koneksi Gateway</button>' +
      '<button class="btn4" onclick="window.open((document.getElementById(\'setWaUrl\').value||\'\').replace(/\\/+$/,\'\')+\'/qr\',\'_blank\')">📷 Buka QR</button>' +
      '<button class="btn2" onclick="kirimPesanUjiWA()">✉️ Kirim Pesan Uji</button>' +
      '<button class="btn5" onclick="showWALogDialog()">📋 Lihat Log Pengiriman</button>' +
    '</div>' +

    '<div id="waStatusBox" style="margin-top:14px"></div>' +
  '</div>';
}

function simpanSettingWA(){
  var data = {
    waGatewayUrl:        (document.getElementById('setWaUrl').value||'').trim().replace(/\/+$/,''),
    waTemplate:          document.getElementById('setWaTpl').value || defaultWaTemplate(),
    waTemplateTerlambat: document.getElementById('setWaTplTlt').value || defaultWaTemplateTerlambat(),
    waDelayMs:           String(parseInt(document.getElementById('setWaDelay').value||'3000',10) || 3000),
    waAutoSend:          document.getElementById('setWaAuto').value === '1' ? '1' : '0',
    waAutoSendTerlambat: document.getElementById('setWaAutoTlt').value === '1' ? '1' : '0',
    waManualScope:       document.getElementById('setWaScope').value === 'ampu' ? 'ampu' : 'all'
  };
  api('saveSetting', data).then(function(){
    ST.setting = Object.assign(ST.setting||{}, data);
    try{
      var c = JSON.parse(localStorage.getItem('bk_master')||'null');
      if(c){ c.setting = ST.setting; localStorage.setItem('bk_master', JSON.stringify(c)); }
    }catch(e){}
    toast('Pengaturan WhatsApp disimpan');
  }).catch(function(e){ toast('Gagal: ' + e.message,'er'); });
}

async function ujiKoneksiGatewayWA(){
  var box = document.getElementById('waStatusBox'); if(!box) return;
  box.innerHTML = '<div class="hint">⏳ Menghubungi gateway…</div>';
  var st = await cekStatusGatewayWA();
  if(st.ok){
    box.innerHTML = '<div class="notif new">✅ Gateway terhubung. Akun: <b>'+esc((st.me && (st.me.name || st.me.id)) || 'WhatsApp')+'</b></div>';
  }else{
    box.innerHTML = '<div class="notif err">❌ '+esc(st.msg)+'</div>';
  }
}

function kirimPesanUjiWA(){
  var nomor = prompt('Masukkan nomor WhatsApp tujuan (contoh: 08123456789):');
  if(!nomor) return;
  var url = (document.getElementById('setWaUrl').value||'').trim().replace(/\/+$/,'');
  if(!url) return toast('URL gateway kosong','er');
  toast('Mengirim…','inf');
  fetch(url + '/send', {
    method:'POST',
    headers:{ 'Content-Type':'application/json' },
    body: JSON.stringify({ to: nomor, message: '✅ Uji coba dari Aplikasi BK SMAN 1 Klirong — gateway WA berjalan normal.' })
  }).then(function(r){ return r.json().then(function(d){ return { ok:r.ok, d:d }; }); })
   .then(function(x){
      if(x.ok) toast('✅ Pesan uji terkirim ke ' + nomor);
      else toast('❌ Gagal: ' + (x.d.error || 'unknown'), 'er');
   }).catch(function(e){ toast('❌ ' + e.message, 'er'); });
}
/* ====== END RENDER SETTING WHATSAPP GATEWAY ====== */

function renderSetBackup(el){
  el.innerHTML = '<div class="card"><h2>💾 Backup / Restore (File Lokal)</h2>'+
    '<div class="sub">Simpan/restore data server ke file .json di perangkat Anda</div>'+
    '<div style="display:flex;gap:9px;flex-wrap:wrap">'+
      '<button class="btn4" onclick="backupData()">⬇ Backup ke File (.json)</button>'+
      '<button class="btn5" onclick="pilihFileRestore()">📥 Restore dari File</button>'+
    '</div>'+
    '<div class="hint" style="margin-top:9px">💡 Backup mencakup <b>semua tabel</b> (termasuk akun login).</div>'+
  '</div>';
}
function renderSetPassword(el){
  el.innerHTML = '<div class="card"><h2>🔐 Ganti Password Admin</h2>'+
    '<div class="row r3">'+
      '<div class="fg"><label>Password Lama</label><input type="password" id="pwOld"></div>'+
      '<div class="fg"><label>Password Baru</label><input type="password" id="pwNew"></div>'+
      '<div class="fg"><label>Konfirmasi</label><input type="password" id="pwConfirm"></div>'+
    '</div>'+
    '<button class="btn" onclick="gantiPasswordAdmin()">🔐 Ganti Password</button>'+
  '</div>';
}
function simpanGoogleClientId(){
  var v = $('#setGClientId').value.trim();
  api('saveSetting', { googleClientId: v }).then(function(){
    ST.setting.googleClientId = v;
    try{
      var c = JSON.parse(localStorage.getItem('bk_master') || 'null');
      if(c){ c.setting = ST.setting; localStorage.setItem('bk_master', JSON.stringify(c)); }
    }catch(e){}
    _gAccessToken = null; _gTokenExpiry = 0; _gTokenClient = null; _gTokenClientCid = '';
    toast('Google Client ID disimpan');
  }).catch(function(e){ toast(e.message,'er'); });
}
function gantiPasswordAdmin(){
  var o = $('#pwOld').value, n = $('#pwNew').value, c = $('#pwConfirm').value;
  if(!o || !n || !c){ toast('Semua kolom wajib diisi','er'); return; }
  if(n !== c){ toast('Konfirmasi tidak cocok','er'); return; }
  api('changeAdminPassword', { oldPassword:o, newPassword:n }).then(function(){
    toast('Password admin berhasil diganti');
    $('#pwOld').value=''; $('#pwNew').value=''; $('#pwConfirm').value='';
  }).catch(function(e){ toast(e.message,'er'); });
}
function reloadGuruBK(){ loadMaster(true).then(function(){ renderSetting(); toast('Data dimuat ulang'); }).catch(function(e){ toast(e.message,'er'); }); }
function reloadGuruPiket(){ loadMaster(true).then(function(){ renderSetting(); toast('Data dimuat ulang'); }).catch(function(e){ toast(e.message,'er'); }); }
function muatDaftarTamu(){
  var el = $('#tamuListContainer'); if(!el) return;
  el.innerHTML = '<div class="hint">Memuat daftar user tamu…</div>';
  api('listUserTamu').then(function(list){
    if(!list.length){ el.innerHTML = '<div class="hint">Belum ada user tamu.</div>'; return; }
    el.innerHTML = '<div class="tw"><table><thead><tr><th>Username</th><th>Password</th><th style="width:120px">Aksi</th></tr></thead><tbody>'+
      list.map(function(u){
        return '<tr><td>'+esc(u.username)+'</td><td>'+esc(u.password)+'</td><td class="right"><button class="btn3 btn-sm" onclick="hapusUserTamu(\''+esc(u.username)+'\')">Hapus</button></td></tr>';
      }).join('')+'</tbody></table></div>';
  }).catch(function(e){ el.innerHTML = '<div class="notif err">'+esc(e.message)+'</div>'; });
}
function tambahUserTamu(){
  var u = $('#tamuUser').value.trim(); var p = $('#tamuPass').value.trim();
  if(!u){ toast('Username wajib diisi','er'); return; }
  if(!p || p.length < 4){ toast('Password minimal 4 karakter','er'); return; }
  api('saveUserTamu', { username:u, password:p }).then(function(){
    toast('User tamu disimpan');
    $('#tamuUser').value = ''; $('#tamuPass').value = '';
    muatDaftarTamu();
  }).catch(function(e){ toast(e.message,'er'); });
}
function hapusUserTamu(u){
  confirmBox('Hapus user tamu "'+u+'"?', function(){
    api('deleteUserTamu', { username:u }).then(function(){ toast('User tamu dihapus'); muatDaftarTamu(); })
      .catch(function(e){ toast(e.message,'er'); });
  });
}
function simpanSetting(){
  var data = { kepalaSekolah:$('#setKepsek').value.trim(), nipKepsek:$('#setNip').value.trim(), guruBK:$('#setGuruBK').value.trim(), nipGuruBK:$('#setNipGuruBK').value.trim() };
  var fKop = $('#setKop').files[0]; var fTtd = $('#setTtd').files[0];
  var jobs = [];
  if(fKop) jobs.push(fileToDataURL(fKop).then(function(b64){ data.kop = b64; }));
  if(fTtd) jobs.push(fileToDataURL(fTtd).then(function(b64){ data.ttdBK = b64; }));
  if(jobs.length) toast('Menyimpan gambar…','inf');
  Promise.all(jobs).then(function(){ return api('saveSetting', data); })
    .then(function(){ return loadMaster(true); })
    .then(function(){ toast('Pengaturan disimpan'); renderSetting(); })
    .catch(function(e){ toast(e.message,'er'); });
}
function fileToDataURL(file){ return new Promise(function(res,rej){ var r = new FileReader(); r.onload = function(){ res(r.result); }; r.onerror = rej; r.readAsDataURL(file); }); }
function tambahKelas(){ var k = $('#newKelas').value.trim(); if(!k) return toast('Nama kelas kosong','er'); api('addKelas',{kelas:k}).then(function(){ return loadMaster(true); }).then(function(){ toast('Kelas ditambahkan'); renderSetting(); }).catch(function(e){ toast(e.message,'er'); }); }
function hapusKelas(k){ confirmBox('Hapus kelas "'+k+'"?', function(){ api('deleteKelas',{kelas:k}).then(function(){ return loadMaster(true); }).then(function(){ toast('Kelas dihapus'); renderSetting(); }).catch(function(e){ toast(e.message,'er'); }); }); }
function formImportKelas(){
  openModal('Import Kelas', '<div class="fg"><label>Pilih File</label><input type="file" id="impKelasFile" accept=".csv,.txt,.xls,.xlsx"></div>'+
    '<div class="fg"><label>Atau tempel daftar kelas</label><textarea id="impKelasText" rows="7" placeholder="X IPA 1&#10;X IPA 2"></textarea></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="prosesImportKelas()">Import</button>');
}
function prosesImportKelas(){
  var f = $('#impKelasFile').files[0];
  var kirim = function(rows){
    if(!rows.length) return toast('Tidak ada data','er');
    api('importKelas',{rows:rows}).then(function(r){ return loadMaster(true).then(function(){ closeModal(); toast(r.msg); renderSetting(); }); }).catch(function(e){ toast(e.message,'er'); });
  };
  var parseText = function(txt){
    var lines = String(txt||'').split(/\r?\n/).map(function(l){ return l.trim(); }).filter(Boolean);
    if(!lines.length) return toast('Tidak ada data','er');
    var start = 0; if(/kelas|nama/i.test(lines[0]) && lines[0].length < 20) start = 1;
    var rows = []; for(var i=start;i<lines.length;i++){ var c = lines[i].split(/[,;\t]/)[0].trim().replace(/^"|"$/g,''); if(c) rows.push({Nama:c}); }
    kirim(rows);
  };
  if(f){
    var name = (f.name||'').toLowerCase();
    if(name.endsWith('.xlsx') || name.endsWith('.xls')){
      toast('Membaca…','inf');
      bacaFileMentah(f).then(function(arr){
        var start = 0; var first = String((arr[0]||[])[0]||'').toLowerCase();
        if(first.indexOf('kelas')>=0 || first.indexOf('nama')>=0) start = 1;
        var rows = []; for(var i=start;i<arr.length;i++){ var v = String((arr[i]||[])[0]||'').trim(); if(v) rows.push({Nama:v}); }
        kirim(rows);
      }).catch(function(e){ toast('Gagal baca: '+e.message,'er'); });
    } else { var rr = new FileReader(); rr.onload = function(){ parseText(rr.result); }; rr.readAsText(f, 'UTF-8'); }
  } else { var t = $('#impKelasText').value; if(!t.trim()) return toast('Pilih file/tempel','er'); parseText(t); }
}
function formGuruBK(id){
  var g = id ? (ST.gurubk||[]).find(function(x){ return String(x.ID)===String(id); }) : {};
  g = g || {}; var semuaKelas = ST.kelas;
  var ttdPreview = g.TtdBK ? '<img src="'+esc(g.TtdBK)+'" style="max-height:80px;max-width:220px;object-fit:contain;margin-top:8px;border:1px solid #e3eaf2;border-radius:6px">' : '';
  openModal(g.ID ? 'Edit Guru BK' : 'Tambah Guru BK',
    '<div class="fg"><label>Nama <span style="color:#e74c3c">*</span></label><input id="gNama" value="'+esc(g.Nama||'')+'"></div>'+
    '<div class="fg"><label>NIP</label><input id="gNip" value="'+esc(g.NIP||'')+'"></div>'+
    '<div class="row r2"><div class="fg"><label>Username <span style="color:#e74c3c">*</span></label><input id="gUser" value="'+esc(g.Username||'')+'" autocomplete="off"></div>'+
    '<div class="fg"><label>Password <span style="color:#e74c3c">*</span></label><input id="gPass" value="'+esc(g.Password||'')+'" autocomplete="off"></div></div>'+
    '<div class="fg"><label>TTD Digital (opsional)</label><input type="file" id="gTtd" accept="image/*">'+ttdPreview+'</div>'+
    '<div class="fg"><label>Kelas Ampu</label><div style="max-height:190px;overflow-y:auto;border:1px solid #e3eaf2;border-radius:8px;padding:11px">'+
      (semuaKelas.length ? semuaKelas.map(function(k){
        var on = (g.KelasAmpu||'').split(',').map(function(x){return x.trim();}).indexOf(k)>=0;
        return '<label style="display:inline-flex;align-items:center;gap:6px;margin:0 14px 8px 0;font-weight:500;font-size:13px"><input type="checkbox" class="gKelas" value="'+esc(k)+'" '+(on?'checked':'')+' style="width:auto"> '+esc(k)+'</label>';
      }).join('') : '<div class="hint">Belum ada kelas.</div>')+'</div></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanGuruBK(\''+(g.ID||'')+'\')">Simpan</button>');
}
function simpanGuruBK(id){
  var Nama = $('#gNama').value.trim(); var NIP = $('#gNip').value.trim();
  var Username = $('#gUser').value.trim().toLowerCase(); var Password = $('#gPass').value.trim();
  var KelasAmpu = $$('.gKelas').filter(function(c){ return c.checked; }).map(function(c){ return c.value; }).join(',');
  if(!Nama) return toast('Nama wajib','er');
  if(!Username) return toast('Username wajib','er');
  if(!Password) return toast('Password wajib','er');
  if(Password.length < 4) return toast('Password min 4 karakter','er');
  var fTtd = $('#gTtd').files[0];
  var doSave = function(ttdUrl){
    var payload = {ID:id, Nama:Nama, NIP:NIP, KelasAmpu:KelasAmpu, Username:Username, Password:Password};
    if(ttdUrl) payload.TtdBK = ttdUrl;
    api('saveGuruBK', payload).then(function(){ return loadMaster(true); }).then(function(){ closeModal(); toast('Data disimpan'); renderSetting(); }).catch(function(e){ toast(e.message,'er'); });
  };
  if(fTtd){ fileToDataURL(fTtd).then(function(b64){ doSave(b64); }).catch(function(e){ toast(e.message,'er'); }); }
  else doSave(null);
}
function hapusGuruBK(id){ confirmBox('Hapus Guru BK ini?', function(){ api('deleteGuruBK',{id:id}).then(function(){ return loadMaster(true); }).then(function(){ toast('Dihapus'); renderSetting(); }).catch(function(e){ toast(e.message,'er'); }); }); }
function formGuruPiket(id){
  var g = id ? ((ST.gurupiket||[]).find(function(x){ return String(x.ID)===String(id); })) : {};
  g = g || {};
  openModal(g.ID ? 'Edit Guru Piket' : 'Tambah Guru Piket',
    '<div class="fg"><label>Nama <span style="color:#e74c3c">*</span></label><input id="gpNama" value="'+esc(g.Nama||'')+'"></div>'+
    '<div class="fg"><label>NIP</label><input id="gpNip" value="'+esc(g.NIP||'')+'"></div>'+
    '<div class="row r2"><div class="fg"><label>Username <span style="color:#e74c3c">*</span></label><input id="gpUser" value="'+esc(g.Username||'')+'" autocomplete="off"></div>'+
    '<div class="fg"><label>Password <span style="color:#e74c3c">*</span></label><input id="gpPass" value="'+esc(g.Password||'')+'" autocomplete="off"></div></div>'+
    '<div class="notif info">Guru Piket akan login dan dapat mengakses <b>Dashboard, Perizinan,</b> dan <b>Keterlambatan</b>.</div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanGuruPiket(\''+(g.ID||'')+'\')">Simpan</button>');
}
function simpanGuruPiket(id){
  var Nama = $('#gpNama').value.trim(); var NIP = $('#gpNip').value.trim();
  var Username = $('#gpUser').value.trim().toLowerCase(); var Password = $('#gpPass').value.trim();
  if(!Nama) return toast('Nama wajib','er');
  if(!Username) return toast('Username wajib','er');
  if(!Password) return toast('Password wajib','er');
  if(Password.length < 4) return toast('Password min 4 karakter','er');
  api('saveGuruPiket', {ID:id, Nama:Nama, NIP:NIP, Username:Username, Password:Password})
    .then(function(){ return loadMaster(true); })
    .then(function(){ closeModal(); toast('Data disimpan'); renderSetting(); })
    .catch(function(e){ toast(e.message,'er'); });
}
function hapusGuruPiket(id){
  confirmBox('Hapus Guru Piket ini?', function(){
    api('deleteGuruPiket',{id:id}).then(function(){ return loadMaster(true); })
      .then(function(){ toast('Dihapus'); renderSetting(); })
      .catch(function(e){ toast(e.message,'er'); });
  });
}

/* ================= LAYANAN (IZIN / TERLAMBAT) ================= */
function renderLayanan(key){
  var isIzin = (key === 'izin');
  var judul = isIzin ? '🚪 Perizinan Keluar Sekolah' : '⏰ Keterlambatan Siswa';
  var sub = isIzin ? 'Pencatatan izin keluar sekolah — filter berdasarkan rentang tanggal' : 'Pencatatan siswa terlambat — filter berdasarkan rentang tanggal';
  var adminImportBtn = (ST.user && ST.user.role === 'admin') ? '<button class="btn5" onclick="formImportLayanan(\''+key+'\')">📥 Import Excel</button>' : '';
  var buatKelompokBtn = '';
  if(!isIzin && ST.user && (ST.user.role === 'gurubk' || ST.user.role === 'admin')){
    buatKelompokBtn = '<button class="btn4" onclick="buatKelompokDariTerlambat()" title="Centang siswa di tabel, lalu klik untuk membuat Bimbingan Kelompok">👥 Buat Bimbingan Kelompok</button>';
  }
  // Tombol kirim WA hanya untuk admin & guru BK (BUKAN guru piket)
  var waKirimBtn = '';
  if(!isIzin && ST.user && (ST.user.role === 'admin' || ST.user.role === 'gurubk')){
    waKirimBtn = '<button class="btn4" onclick="kirimNotifikasiWATerlambatManual()" title="Kirim WA ke orang tua siswa terlambat pada periode filter">📤 Kirim WA Orang Tua</button>';
  }
  $('#main').innerHTML = '<div class="hd"><div><h2>'+judul+'</h2><div class="sub">'+sub+'</div></div>'+
    '<div class="tools"><button class="btn" onclick="formLayanan(\''+key+'\')">+ Tambah Data</button>'+adminImportBtn+buatKelompokBtn+waKirimBtn+'<button class="btn2" onclick="cetakLayanan(\''+key+'\')">🖨 Cetak</button><button class="btn4" onclick="exportLayanan(\''+key+'\')">⬇ Export</button></div></div>'+
    '<div id="layContent"><div class="empty">Memuat…</div></div>';
  loadLayananData(key);
}
function loadLayananData(key){
  var ks = ST.kelas;
  var tglHariIni = today();
  var dari   = ST.cache['filter_'+key+'_dari']   || tglHariIni;
  var sampai = ST.cache['filter_'+key+'_sampai'] || tglHariIni;
  var kelas  = ST.cache['filter_'+key+'_kelas']  || '';
  var cari   = ST.cache['filter_'+key+'_cari']   || '';
  var el = $('#layContent'); if(!el) return;
  el.innerHTML = '<div class="card"><div class="fbar">'+
        '<div class="fg"><label>Dari Tanggal</label><input type="date" id="fDari" value="'+esc(dari)+'"></div>'+
        '<div class="fg"><label>Sampai Tanggal</label><input type="date" id="fSampai" value="'+esc(sampai)+'"></div>'+
        '<div class="fg"><label>Kelas</label><select id="fKelas"><option value="">Semua Kelas</option>'+ks.map(function(k){ return '<option '+(k===kelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
        '<div class="fg" style="flex:2;min-width:160px"><label>Cari (Nama / NIS)</label><input id="fCari" value="'+esc(cari)+'" placeholder="Ketik nama atau NIS…" onkeydown="if(event.key===\'Enter\'){filterLayanan(\''+key+'\');}"></div>'+
        '<button class="btn" onclick="filterLayanan(\''+key+'\')">🔍 Tampilkan</button>'+
        '<button class="btn2" onclick="resetFilterLayanan(\''+key+'\')">↺ Reset</button>'+
      '</div>'+
      '<div id="statLayanan"></div>'+
      '<div id="tblLayanan"><div class="empty">Memuat data…</div></div>'+
    '</div>';
  filterLayanan(key);
}
function resetFilterLayanan(key){
  ST.cache['filter_'+key+'_dari']   = today();
  ST.cache['filter_'+key+'_sampai'] = today();
  ST.cache['filter_'+key+'_kelas']  = '';
  ST.cache['filter_'+key+'_cari']   = '';
  loadLayananData(key);
}
function filterLayanan(key){
  var dari    = $('#fDari')   ? $('#fDari').value   : today();
  var sampai  = $('#fSampai') ? $('#fSampai').value : today();
  var kelas   = $('#fKelas')  ? $('#fKelas').value  : '';
  var cariVal = ($('#fCari')  ? $('#fCari').value   : '').toLowerCase().trim();
  if(!dari || !sampai){ toast('Tanggal awal dan tanggal akhir wajib diisi','er'); return; }
  if(dari > sampai){
    var tmp = dari; dari = sampai; sampai = tmp;
    if($('#fDari'))   $('#fDari').value   = dari;
    if($('#fSampai')) $('#fSampai').value = sampai;
  }
  ST.cache['filter_'+key+'_dari']   = dari;
  ST.cache['filter_'+key+'_sampai'] = sampai;
  ST.cache['filter_'+key+'_kelas']  = kelas;
  ST.cache['filter_'+key+'_cari']   = cariVal;
  var tblEl  = $('#tblLayanan'); var statEl = $('#statLayanan');
  if(tblEl)  tblEl.innerHTML  = '<div class="empty">Memuat data dari server…</div>';
  if(statEl) statEl.innerHTML = '';
  var sheet = (key === 'izin') ? SH.IZIN : SH.TERLAMBAT;
  var promises = [api('getData', { sheet: sheet, since: dari, until: sampai })];
  if(key === 'terlambat') promises.push(api('getData', { sheet: SH.TERLAMBAT }).catch(function(){ return []; }));
  Promise.all(promises).then(function(results){
    var rows = results[0] || [];
    var allTerlambatForFreq = (key === 'terlambat') ? (results[1] || []) : null;
    setCache(key, rows);
    var ks = ST.kelas;
    var filtered = rows.filter(function(r){ return ks.indexOf(r.Kelas) >= 0; });
    if(kelas)   filtered = filtered.filter(function(r){ return r.Kelas === kelas; });
    if(cariVal) filtered = filtered.filter(function(r){
      return (r.Nama||'').toLowerCase().indexOf(cariVal) >= 0 || String(r.NIS||'').toLowerCase().indexOf(cariVal) >= 0;
    });
    ST.cache['view_'+key] = filtered;
    if(statEl){
      var labelPeriode = (dari === sampai) ? tglPanjang(dari) : (tgl(dari) + ' — ' + tgl(sampai));
      var infoTambahan = '';
      if(key === 'izin'){
        var belum = filtered.filter(function(r){ return r.StatusKembali !== 'Kembali'; }).length;
        infoTambahan = '<div class="sc y"><div class="n">'+belum+'</div><div class="l">Belum Kembali</div></div>';
      } else {
        var siswaUnik = {};
        filtered.forEach(function(r){ siswaUnik[String(r.NIS||r.Nama||'')] = 1; });
        infoTambahan = '<div class="sc p"><div class="n">'+Object.keys(siswaUnik).length+'</div><div class="l">Siswa Unik</div></div>';
      }
      statEl.innerHTML = '<div class="stat">'+
          '<div class="sc"><div class="n">'+filtered.length+'</div><div class="l">Total Data</div></div>'+ infoTambahan+'</div>'+
        '<div class="hint" style="margin:-4px 0 12px;font-size:12px">📅 Periode: <b>'+esc(labelPeriode)+'</b>'+(kelas?' • Kelas: <b>'+esc(kelas)+'</b>':'')+(cariVal?' • Cari: <b>'+esc(cariVal)+'</b>':'')+'</div>';
    }
    if(tblEl) tblEl.innerHTML = tabelLayanan(key, filtered, key === 'izin', allTerlambatForFreq);
  }).catch(function(e){ if(tblEl) tblEl.innerHTML = '<div class="empty">Gagal memuat: '+esc(e.message)+'</div>'; });
}
function tabelLayanan(key, rows, isIzin, allRowsForFreq){
  if(!rows || !rows.length) return '<div class="empty">Tidak ada data pada periode ini.</div>';
  var canBulk = (!isIzin) && ST.user && (ST.user.role === 'gurubk' || ST.user.role === 'admin');
  if(key === 'terlambat'){
    var freqMap = {};
    var sourceRows = (allRowsForFreq && allRowsForFreq.length) ? allRowsForFreq : rows;
    sourceRows.forEach(function(r){ var nis = String(r.NIS||''); if(nis) freqMap[nis] = (freqMap[nis]||0) + 1; });
    rows = rows.map(function(r){ var copy = Object.assign({}, r); copy._freq = freqMap[String(r.NIS||'')] || 1; return copy; });
    rows.sort(function(a,b){ if(b._freq !== a._freq) return b._freq - a._freq; return String(b.Tanggal).localeCompare(String(a.Tanggal)); });
  } else { rows = rows.slice().sort(function(a,b){ return String(b.Tanggal).localeCompare(String(a.Tanggal)); }); }
  var chkHead = canBulk ? '<th style="width:40px;text-align:center"><input type="checkbox" id="chkAllTelat" onchange="toggleAllTelat(this.checked)" style="width:auto" title="Pilih semua"></th>' : '';
  var head = '<tr>'+chkHead+'<th>No</th><th>Tanggal</th><th>Jam</th><th>NIS</th><th>Nama</th><th>Kelas</th><th>Alasan</th>'+(isIzin?'<th>Kembali</th><th>Status</th>':'<th>Frekuensi</th><th>Petugas</th>')+'<th style="width:190px">Aksi</th></tr>';
  var body = rows.map(function(r,i){
    var jam = isIzin ? r.JamKeluar : r.JamDatang;
    var chkCell = canBulk ? '<td style="text-align:center"><input type="checkbox" class="chkTelat" value="'+esc(r.NIS)+'" data-nama="'+esc(r.Nama)+'" style="width:auto"></td>' : '';
    var kol = isIzin ? '<td>'+esc(r.JamKembali||'-')+'</td><td>'+(r.StatusKembali==='Kembali'?'<span class="tag tg">Kembali</span>':'<span class="tag ty">Belum</span>')+'</td>'
      : '<td style="text-align:center"><b style="color:#c0392b" title="Total keterlambatan sepanjang waktu">'+r._freq+'×</b></td><td>'+esc(r.Petugas||'-')+'</td>';
    var btnKembali = (isIzin && r.StatusKembali!=='Kembali') ? '<button class="btn4 btn-sm" onclick="konfirmasiKembali(\''+r.ID+'\')">Kembali</button>' : '';
    return '<tr>'+chkCell+'<td>'+(i+1)+'</td><td>'+tgl(r.Tanggal)+'</td><td>'+esc(jam||'-')+'</td><td>'+esc(r.NIS)+'</td><td>'+esc(r.Nama)+'</td><td>'+esc(r.Kelas)+'</td><td>'+esc(r.Alasan)+'</td>'+kol+
      '<td class="right">'+btnKembali+'<button class="btn2 btn-sm" onclick="formLayanan(\''+key+'\',\''+r.ID+'\')">Edit</button><button class="btn3 btn-sm" onclick="hapusLayanan(\''+key+'\',\''+r.ID+'\')">Hapus</button></td></tr>';
  }).join('');
  var footnote = isIzin ? '' : ' • <b>Frekuensi</b> = total keterlambatan siswa sepanjang waktu.';
  return '<div class="tw"><table><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>'+
    '<div class="hint" style="margin-top:9px">Total: <b>'+rows.length+'</b> baris data.'+(canBulk?' • Centang siswa untuk membuat Bimbingan Kelompok.':'')+footnote+'</div>';
}
function toggleAllTelat(v){ $$('.chkTelat').forEach(function(c){ c.checked = v; }); }
function buatKelompokDariTerlambat(){
  if(!ST.user || (ST.user.role !== 'gurubk' && ST.user.role !== 'admin')){ toast('Hanya Guru BK dan Admin yang dapat mengakses fitur ini','er'); return; }
  var checked = $$('.chkTelat').filter(function(c){ return c.checked; });
  if(!checked.length){ toast('Pilih minimal 1 siswa terlebih dahulu','er'); return; }
  var nisSet = {};
  checked.forEach(function(c){ if(!nisSet[c.value]) nisSet[c.value] = c.dataset.nama || ''; });
  var nisList = Object.keys(nisSet);
  if(!nisList.length){ toast('Tidak ada siswa terpilih','er'); return; }
  var anggotaStr = nisList.map(function(nis){ return nis + ' - ' + nisSet[nis]; }).join('; ');
  var preset = { Tanggal: today(), Topik: 'Penanganan Siswa Sering Terlambat', Tujuan: 'Membantu siswa mengurangi frekuensi keterlambatan melalui layanan bimbingan kelompok', Anggota: anggotaStr, Hasil: '' };
  formKegiatan('kelompok', null, preset);
}
function formLayanan(key, id){
  var data = id ? (ST.cache[key]||[]).find(function(r){ return r.ID===id; }) : null;
  var judul = (key==='izin'?'Perizinan':'Keterlambatan') + (data?' — Edit':' — Tambah');
  openModal(judul, buildForm(key, data),
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanLayanan(\''+key+'\',\''+(id||'')+'\')">💾 Simpan</button>', true);
  var kEl = document.getElementById('f_Kelas');
  if(kEl && kEl.value){ onKelasChange(kEl.value); if(data && data.NIS){ var s = document.getElementById('f_NIS'); if(s) s.value = data.NIS; } }
  initSigPads();
}
async function simpanLayanan(key, id){
  var d = collectForm(key); if(!d) return;
  d.ID = id || uid();
  if(key === 'izin' && !id) d.StatusKembali = 'Belum';
  if(!d.Tanggal){ toast('Tanggal wajib diisi','er'); return; }
  var cekHari = cekHariEfektif(d.Tanggal);
  if(!cekHari.ok){ toast(cekHari.msg, 'er'); return; }
  if(!d.Kelas){ toast('Kelas wajib diisi','er'); return; }
  if(!d.NIS){ toast('Siswa wajib dipilih','er'); return; }
  if(key === 'izin' && !d.JamKeluar){ toast('Jam Keluar wajib diisi','er'); return; }
  if(key === 'terlambat' && !d.JamDatang){ toast('Jam Datang wajib diisi','er'); return; }
  if(!d.Nama && d.NIS){ var s = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(d.NIS); }); if(s) d.Nama = s.Nama; }
  if(!d.Nama){ toast('Nama siswa tidak ditemukan','er'); return; }
  if(!Array.isArray(ST.cache[key])){
    try {
      var fresh = await api('getData', { sheet: key==='izin'?SH.IZIN:SH.TERLAMBAT });
      setCache(key, fresh || []);
    } catch(err) {
      toast('Data lama gagal dibaca; penyimpanan dibatalkan agar tidak terjadi duplikasi. '+err.message, 'er');
      return;
    }
  }
  var existingRows = ST.cache[key] || [];
  var keySet = buildExistingKeySet(key, existingRows, id || null);
  var newKey = layananKeyOf(key, d);
  if(keySet[newKey]){ toast('Data GANDA — siswa ini sudah tercatat pada tanggal & jam yang sama.','er'); return; }
  try { await api('saveRecord', { sheet: key==='izin'?SH.IZIN:SH.TERLAMBAT, data: d }); }
  catch(err){ console.error('[simpanLayanan] gagal', key, d, err); toast('Gagal simpan: ' + (err && err.message ? err.message : 'kesalahan tidak diketahui'), 'er'); return; }
  closeModal(); toast('Data disimpan');
  var arr = Array.isArray(ST.cache[key]) ? ST.cache[key] : [];
  var idx = -1;
  for(var i=0;i<arr.length;i++){ if(String(arr[i].ID) === String(d.ID)){ idx = i; break; } }
  if(idx >= 0) arr[idx] = d; else arr.push(d);
  setCache(key, arr);
  if($('#tblLayanan')) filterLayanan(key); else renderLayanan(key);

  // ==== AUTO-SEND WA KETERLAMBATAN ====
  // Hanya Admin & Guru BK yang boleh memicu WA otomatis (BUKAN guru piket)
  if(key === 'terlambat' && isWAAutoSendTerlambat() && !id
     && ST.user && (ST.user.role === 'admin' || ST.user.role === 'gurubk')){
    setTimeout(function(){
      jalankanKirimWATerlambatWithProgress([d], { skipDuplicates: true });
    }, 600);
  }
}
function hapusLayanan(key, id){
  confirmBox('Hapus data ini?', function(){
    api('deleteRecord',{sheet: key==='izin'?SH.IZIN:SH.TERLAMBAT, id:id}).then(function(){
      toast('Dihapus');
      var arr = ST.cache[key] || [];
      setCache(key, arr.filter(function(x){ return String(x.ID) !== String(id); }));
      if($('#tblLayanan')) filterLayanan(key); else renderLayanan(key);
    }).catch(function(e){ toast(e.message,'er'); });
  });
}
function konfirmasiKembali(id){
  openModal('Konfirmasi Kembali ke Sekolah',
    '<div class="fg"><label>Jam Kembali</label><input type="time" id="kJam" value="'+nowTime()+'"></div><div class="fg"><label>Keterangan</label><input id="kKet" placeholder="Opsional"></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn4" id="kOk">✔ Konfirmasi</button>');
  $('#kOk').onclick = function(){
    api('updateRecord',{sheet:SH.IZIN, id:id, data:{ JamKembali:$('#kJam').value, StatusKembali:'Kembali', Keterangan:$('#kKet').value.trim() }}).then(function(){
      closeModal(); toast('Siswa telah kembali'); invalidateCache('izin');
      if(ST.page==='dashboard') renderDashboard();
      else if(ST.page==='izin') filterLayanan('izin');
      else renderLayanan('izin');
    }).catch(function(e){ toast(e.message,'er'); });
  };
}
function exportLayanan(key){
  var rows = ST.cache['view_'+key] || ST.cache[key] || []; var isIzin = key==='izin';
  var head = ['No','Tanggal','Jam','NIS','Nama','Kelas','Alasan', isIzin?'Jam Kembali':'Petugas', isIzin?'Status':'Keterangan'];
  var body = rows.map(function(r,i){ return [i+1, r.Tanggal, isIzin?r.JamKeluar:r.JamDatang, r.NIS, r.Nama, r.Kelas, r.Alasan, isIzin?(r.JamKembali||'-'):(r.Petugas||'-'), isIzin?(r.StatusKembali||'Belum'):(r.Keterangan||'')]; });
  var dari = ST.cache['filter_'+key+'_dari'] || '';
  var sampai = ST.cache['filter_'+key+'_sampai'] || '';
  var namaFile = 'Laporan_'+(isIzin?'Perizinan':'Keterlambatan')+'_'+(dari&&sampai?(dari===sampai?dari:dari+'_sd_'+sampai):today());
  exportExcel(namaFile, head, body);
}
function cetakLayanan(key){
  var rows = ST.cache['view_'+key] || []; var isIzin = key==='izin';
  var dari   = ST.cache['filter_'+key+'_dari']   || today();
  var sampai = ST.cache['filter_'+key+'_sampai'] || today();
  var kelas  = ST.cache['filter_'+key+'_kelas']  || '';
  var head = ['No','Tanggal','NIS','Nama','Kelas','Alasan', isIzin?'Jam Keluar':'Jam Datang', isIzin?'Kembali':'Petugas'];
  var body = rows.map(function(r,i){ return [i+1, tgl(r.Tanggal), r.NIS, r.Nama, r.Kelas, r.Alasan, isIzin?r.JamKeluar:r.JamDatang, isIzin?(r.JamKembali||'-'):(r.Petugas||'-')]; });
  var subJudul = (dari===sampai ? 'Tanggal: '+tglPanjang(dari) : 'Periode: '+tgl(dari)+' s.d. '+tgl(sampai)) + (kelas ? ' • Kelas: '+kelas : '');
  printLaporan('Laporan ' + (isIzin?'Perizinan Keluar Sekolah':'Keterlambatan Siswa'), head, body, '', subJudul, ttdGuruBKHTML(sampai));
}

function normalizeTanggal(s){
  s = String(s||'').trim(); if(!s) return '';
  var m = s.match(/^(\d{4})[-\/.](\d{1,2})[-\/.](\d{1,2})$/);
  if(m) return m[1]+'-'+pad2(+m[2])+'-'+pad2(+m[3]);
  m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);
  if(m) return m[3]+'-'+pad2(+m[2])+'-'+pad2(+m[1]);
  m = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2})$/);
  if(m) return '20'+m[3]+'-'+pad2(+m[2])+'-'+pad2(+m[1]);
  var bulanNames = {januari:1,jan:1,februari:2,feb:2,maret:3,mar:3,april:4,apr:4,mei:5,may:5,juni:6,jun:6,juli:7,jul:7,agustus:8,agu:8,aug:8,september:9,sept:9,sep:9,oktober:10,okt:10,oct:10,november:11,nov:11,desember:12,des:12,dec:12};
  m = s.toLowerCase().match(/(\d{1,2})\s+([a-z]+)\s+(\d{4})/);
  if(m && bulanNames[m[2]]) return m[3]+'-'+pad2(bulanNames[m[2]])+'-'+pad2(+m[1]);
  var d = new Date(s);
  if(!isNaN(d.getTime())) return d.getFullYear()+'-'+pad2(d.getMonth()+1)+'-'+pad2(d.getDate());
  return '';
}
function parseLayananArray(arr, key){
  var result = { rows: [], unmatched: [], warnings: [] };
  if(!arr || !arr.length) throw new Error('File kosong');
  var header = (arr[0]||[]).map(function(x){ return String(x||'').trim().toLowerCase().replace(/[\s_]+/g,''); });
  function findCol(){ for(var i=0;i<arguments.length;i++){ for(var j=0;j<header.length;j++){ if(arguments[i].test(header[j])) return j; } } return -1; }
  var idxTanggal = findCol(/^(tanggal|tgl|date)$/);
  var idxNis = findCol(/^(nis|induk|noinduk)$/);
  var idxNama = findCol(/^nama/);
  var idxKelas = findCol(/^kelas/);
  var idxAlasan = findCol(/^(alasan|keperluan|keterangan|masalah)/);
  var idxJamKeluar = findCol(/jam.*keluar/);
  var idxJamDatang = findCol(/jam.*datang/);
  var idxJamKembali = findCol(/jam.*kembali/);
  var idxStatusKembali = findCol(/status.*kembali/);
  var idxPetugas = findCol(/^petugas/);
  var startRow;
  if(idxTanggal < 0 || (idxNama < 0 && idxNis < 0)){
    if(key === 'izin'){
      idxTanggal = 0; idxJamKeluar = 1; idxNis = 2; idxNama = 3; idxKelas = 4; idxAlasan = 5; idxJamKembali = 6; idxStatusKembali = 7; idxPetugas = 8;
    } else {
      idxTanggal = 0; idxJamDatang = 1; idxNis = 2; idxNama = 3; idxKelas = 4; idxAlasan = 5; idxPetugas = 6;
    }
    startRow = 0;
  } else { startRow = 1; }
  for(var i=startRow; i<arr.length; i++){
    var row = arr[i] || [];
    var hasAny = row.some(function(c){ return String(c||'').trim() !== ''; });
    if(!hasAny) continue;
    var tglRaw = idxTanggal >= 0 ? String(row[idxTanggal]||'').trim() : '';
    var tglN = normalizeTanggal(tglRaw);
    if(!tglN){ result.unmatched.push('Baris '+(i+1)+': tanggal kosong/tidak valid'); continue; }
    var nis = idxNis >= 0 ? String(row[idxNis]||'').trim() : '';
    var nama = idxNama >= 0 ? String(row[idxNama]||'').trim() : '';
    var siswa = null;
    if(nis) siswa = (ST.siswa||[]).find(function(x){ return String(x.NIS) === nis; });
    if(!siswa && nama){ var nm = nama.toLowerCase().trim(); siswa = (ST.siswa||[]).find(function(x){ return String(x.Nama||'').toLowerCase().trim() === nm; }); }
    if(siswa){ if(!nama) nama = siswa.Nama; if(!nis) nis = siswa.NIS; }
    if(!nama && !nis){ result.unmatched.push('Baris '+(i+1)+': NIS/Nama kosong'); continue; }
    var kelas = idxKelas >= 0 ? String(row[idxKelas]||'').trim() : '';
    if(!kelas && siswa) kelas = siswa.Kelas;
    var rec = { ID: uid(), Tanggal: tglN, NIS: nis, Nama: nama, Kelas: kelas, Alasan: idxAlasan >= 0 ? String(row[idxAlasan]||'').trim() : '' };
    if(key === 'izin'){
      rec.JamKeluar = idxJamKeluar >= 0 ? String(row[idxJamKeluar]||'').trim() : '';
      rec.JamKembali = idxJamKembali >= 0 ? String(row[idxJamKembali]||'').trim() : '';
      var st = idxStatusKembali >= 0 ? String(row[idxStatusKembali]||'').trim() : '';
      rec.StatusKembali = (/kembali/i.test(st) || rec.JamKembali) ? 'Kembali' : 'Belum';
      rec.Petugas = idxPetugas >= 0 ? String(row[idxPetugas]||'').trim() : (ST.guru ? ST.guru.Nama : 'Admin');
      rec.Keterangan = '';
    } else {
      rec.JamDatang = idxJamDatang >= 0 ? String(row[idxJamDatang]||'').trim() : '';
      rec.Petugas = idxPetugas >= 0 ? String(row[idxPetugas]||'').trim() : (ST.guru ? ST.guru.Nama : 'Admin');
      rec.Keterangan = '';
    }
    result.rows.push(rec);
  }
  return result;
}
function formImportLayanan(key){
  if(!ST.user || ST.user.role !== 'admin') return toast('Hanya admin yang bisa mengakses fitur ini','er');
  var isIzin = (key === 'izin');
  var contoh = isIzin ? 'Tanggal,JamKeluar,NIS,Nama,Kelas,Alasan,JamKembali,StatusKembali,Petugas' : 'Tanggal,JamDatang,NIS,Nama,Kelas,Alasan,Petugas';
  var contohRow = isIzin ? '2026-01-15,08:30,12345,Ahmad Fauzi,X IPA 1,Sakit,10:00,Kembali,Admin' : '2026-01-15,07:15,12345,Ahmad Fauzi,X IPA 1,Bangun kesiangan,Petugas Piket';
  openModal('📥 Import '+(isIzin?'Perizinan':'Keterlambatan')+' (Excel/CSV)',
    '<div class="notif info"><b>Format file:</b> .xlsx, .csv, .txt, .xls</div>'+
    '<div class="notif new">💡 Header kolom: <code>'+esc(contoh)+'</code></div>'+
    '<div class="notif edit">🚫 <b>Anti-duplikat:</b> Baris dengan <b>Tanggal + NIS/Nama + Jam</b> yang sudah ada ATAU muncul ganda di file akan <b>otomatis diabaikan</b>.</div>'+
    '<div class="fg"><label>Pilih File <span style="color:#e74c3c">*</span></label><input type="file" id="impLayFile" accept=".csv,.txt,.xls,.xlsx"></div>'+
    '<div class="fg"><label>Atau tempel data (CSV)</label><textarea id="impLayText" rows="6" placeholder="'+esc(contoh)+'&#10;'+esc(contohRow)+'"></textarea></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn4" onclick="prosesImportLayanan(\''+key+'\')">📥 Proses &amp; Pratinjau</button>', true);
}
function prosesImportLayanan(key){
  if(!ST.user || ST.user.role !== 'admin') return toast('Hanya admin','er');
  var f = $('#impLayFile').files[0];
  var txt = $('#impLayText').value;
  var parseAndGo = function(arr){
    var parsed;
    try { parsed = parseLayananArray(arr, key); } catch(e){ toast(e.message,'er'); return; }
    if(!parsed.rows.length){ toast('Tidak ada data valid','er'); return; }
    var existingSet = buildExistingKeySet(key, ST.cache[key] || []);
    var seenInFile = {};
    var uniqueRows = [], dupes = [];
    parsed.rows.forEach(function(r){
      var k = layananKeyOf(key, r);
      if(existingSet[k] || seenInFile[k]){ dupes.push(r); return; }
      seenInFile[k] = true;
      uniqueRows.push(r);
    });
    parsed.rows = uniqueRows; parsed.dupes = dupes;
    if(!uniqueRows.length){ toast('Semua '+parsed.dupes.length+' baris adalah duplikat.','inf'); return; }
    tampilkanPreviewImportLayanan(parsed, key);
  };
  var parseText = function(text){
    var lines = String(text||'').split(/\r?\n/).filter(function(l){ return l.trim(); });
    var arr = lines.map(function(l){
      var result = []; var cur = ''; var inQuote = false;
      for(var i=0;i<l.length;i++){
        var c = l[i];
        if(c === '"'){ if(inQuote && l[i+1] === '"'){ cur += '"'; i++; } else inQuote = !inQuote; }
        else if((c === ',' || c === ';' || c === '\t') && !inQuote){ result.push(cur.trim()); cur = ''; }
        else cur += c;
      }
      result.push(cur.trim()); return result;
    });
    parseAndGo(arr);
  };
  if(f){
    var name = (f.name||'').toLowerCase();
    if(name.endsWith('.xlsx') || name.endsWith('.xls')){
      toast('Membaca…','inf');
      bacaFileMentah(f).then(parseAndGo).catch(function(e){ toast('Gagal baca: '+e.message,'er'); });
    } else { var rr = new FileReader(); rr.onload = function(){ parseText(rr.result); }; rr.readAsText(f, 'UTF-8'); }
  } else if(txt.trim()){ parseText(txt); }
  else { toast('Pilih file atau tempel data','er'); }
}
function tampilkanPreviewImportLayanan(parsed, key){
  window._importLayCtx = { parsed: parsed, key: key };
  var previewList = parsed.rows.slice(0, 30).map(function(r){
    var extra = (key === 'izin') ? (r.JamKeluar ? ' • Keluar: '+esc(r.JamKeluar) : '') + (r.JamKembali ? ' • Kembali: '+esc(r.JamKembali) : '') : (r.JamDatang ? ' • Datang: '+esc(r.JamDatang) : '');
    return '<li><b>'+tgl(r.Tanggal)+'</b> — '+esc(r.Nama||'-')+' ('+esc(r.NIS||'-')+') • '+esc(r.Kelas||'-')+extra+(r.Alasan?' • '+esc(r.Alasan):'')+'</li>';
  }).join('');
  var dupes = parsed.dupes || [];
  var dupesList = dupes.slice(0, 12).map(function(r){
    return '<li><b>'+tgl(r.Tanggal)+'</b> — '+esc(r.Nama||'-')+' ('+esc(r.NIS||'-')+')'+(key==='izin'?(r.JamKeluar?' • '+esc(r.JamKeluar):''):(r.JamDatang?' • '+esc(r.JamDatang):''))+'</li>';
  }).join('');
  var body = '<div class="notif info"><b>Target sheet:</b> '+(key==='izin'?'Perizinan':'Keterlambatan')+'<br><b>Total baris valid (setelah filter duplikat):</b> '+parsed.rows.length+'</div>'+
    (dupes.length ? '<div class="notif edit"><b>🚫 '+dupes.length+' baris DUPLIKAT</b> akan diabaikan:<div class="preview-list" style="margin-top:6px;max-height:170px"><ul>'+dupesList+(dupes.length>12?'<li><i>… dan '+(dupes.length-12)+' lainnya</i></li>':'')+'</ul></div></div>' : '')+
    (parsed.unmatched.length ? '<div class="notif edit">⚠️ '+parsed.unmatched.length+' baris tidak valid:<br><span class="small">'+esc(parsed.unmatched.slice(0,8).join(' | '))+(parsed.unmatched.length>8?'…':'')+'</span></div>' : '')+
    '<div class="fg"><label>Pratinjau data yang akan direkam ('+Math.min(30,parsed.rows.length)+' dari '+parsed.rows.length+')</label><div class="preview-list"><ul>'+previewList+'</ul></div></div>';
  openModal('Konfirmasi Import '+(key==='izin'?'Perizinan':'Keterlambatan'), body,
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn4" id="cfmImpLayBtn" onclick="konfirmasiImportLayanan()">✅ Import '+parsed.rows.length+' Data</button>', true);
}
function konfirmasiImportLayanan(){
  var ctx = window._importLayCtx; if(!ctx) return;
  var btn = document.getElementById('cfmImpLayBtn');
  if(btn){ btn.disabled = true; btn.textContent = '⏳ Mengimport…'; }
  var rows = ctx.parsed.rows.slice();
  var dupes = ctx.parsed.dupes || [];
  var sheet = ctx.key === 'izin' ? SH.IZIN : SH.TERLAMBAT;
  var existingSet = buildExistingKeySet(ctx.key, ST.cache[ctx.key] || []);
  var finalRows = [];
  var skippedAtSave = 0;
  rows.forEach(function(r){
    var k = layananKeyOf(ctx.key, r);
    if(existingSet[k]){ skippedAtSave++; return; }
    existingSet[k] = true;
    finalRows.push(r);
  });
  var success = 0, failed = 0;
  var chain = Promise.resolve();
  finalRows.forEach(function(r){
    chain = chain.then(function(){
      return api('saveRecord', { sheet: sheet, data: r }).then(function(){ success++; }).catch(function(){ failed++; });
    });
  });
  chain.then(function(){
    invalidateCache(ctx.key);
    closeModal(); window._importLayCtx = null;
    var skipped = dupes.length + skippedAtSave;
    var msg = success+' data diimport';
    if(skipped) msg += ' • '+skipped+' duplikat diabaikan';
    if(failed) msg += ' • '+failed+' gagal';
    toast(msg);
    if($('#tblLayanan')) filterLayanan(ctx.key); else renderLayanan(ctx.key);
  }).catch(function(e){ toast('Gagal: '+e.message,'er'); if(btn){ btn.disabled = false; btn.textContent = '✅ Import'; } });
}

/* ================= SISWA ================= */
function renderSiswa(){
  var ksList = kelasSaya();
  var inputSiswaTerkunci = !!(ST.setting && ST.setting.inputSiswaTerkunci);
  var curKelas = ST.cache['siswa_kelas'];
  if(curKelas === undefined || curKelas === null){
    curKelas = ksList.length ? ksList[ksList.length - 1] : '';
    ST.cache['siswa_kelas'] = curKelas;
  }
  $('#main').innerHTML = '<div class="hd"><div><h2>👥 Daftar Siswa</h2><div class="sub">Kelola data identitas dan kelas siswa</div></div>'+
    '<div class="tools"><button class="btn" onclick="formSiswa()">+ Tambah</button><button class="btn5" onclick="formImportSiswa()">📥 Import Excel/CSV</button><button class="btn4" onclick="exportSiswa()">⬇ Export</button><button class="btn2" onclick="openMutasi()" title="Kelola siswa keluar / masuk (pindahan)">🔄 Mutasi Siswa</button><button class="btn5" onclick="popupValidasiWA()">📱 Validasi No. WA</button>'+(ST.user && ST.user.role === 'admin' ? '<button id="btnKunciInputSiswa" class="'+(inputSiswaTerkunci?'btn':'btn2')+'" onclick="ubahKunciInputSiswa()" title="'+(inputSiswaTerkunci?'Input terkunci. Klik untuk membuka input siswa.':'Input terbuka. Klik untuk mengunci input siswa.')+'">'+(inputSiswaTerkunci?'🔓 Buka Input Siswa':'🔒 Kunci Input Siswa')+'</button>' : '')+'</div></div>'+
    '<div class="stat" id="statSiswa"></div>'+
    '<div class="card"><div class="fbar">'+
      '<div class="fg"><label>Kelas</label><select id="sKelas" onchange="onSiswaKelasChange(this.value)">'+
        '<option value=""'+(curKelas===''?' selected':'')+'>Semua</option>'+
        ksList.map(function(k){ return '<option '+(k===curKelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+
      '</select></div>'+
      '<div class="fg" style="flex:2"><label>Cari (Nama / NIS)</label><input id="sCari" oninput="tabelSiswa()" placeholder="Ketik nama atau NIS…"></div>'+
    '</div><div id="tblSiswa"></div></div>';
  tabelSiswa();
  if(ST.user && ST.user.role === 'admin'){
    api('getSiswaInputLock').then(function(locked){
      perbaruiTombolKunciInputSiswa(locked);
    }).catch(function(e){ console.warn('Gagal membaca status kunci input siswa:', e); });
  }
}
function statusWACell(s, target, phone){
  if(!String(phone||'').trim()) return '<span title="Nomor HP belum diisi" style="font-weight:900;color:#dc2626;font-size:17px">−</span>';
  var st = target==='siswa' ? s.StatusWASiswa : target==='ayah' ? s.StatusWAAyah : s.StatusWAIbu;
  if(st === 'aktif') return '<span title="WhatsApp aktif/terhubung" style="font-weight:900;color:#16a34a;font-size:18px">✓</span>';
  if(st === 'checking') return '<span title="Sedang diperiksa" style="font-weight:800;color:#b9770e;font-size:15px">⏳</span>';
  return '<span title="Nomor terisi; WhatsApp belum/tidak terhubung atau belum diverifikasi" style="font-weight:900;color:#111827;font-size:18px">✓</span>';
}

function buildWACellHTML(s, target){
  var phone = target==='siswa' ? s.NoHP : target==='ayah' ? s.NoHPAyah : s.NoHPIbu;
  phone = String(phone||'').trim();
  var st = target==='siswa' ? s.StatusWASiswa : target==='ayah' ? s.StatusWAAyah : s.StatusWAIbu;
  if(!phone) return '<span title="Nomor HP belum diisi" style="font-weight:900;color:#dc2626;font-size:17px">−</span>';
  if(st === 'checking') return '<span title="Sedang diperiksa" style="font-weight:800;color:#b9770e;font-size:15px">⏳</span>';
  if(st === 'aktif') return '<span title="WhatsApp aktif/terhubung" style="font-weight:900;color:#16a34a;font-size:19px">✓</span>';
  return '<span title="Nomor terisi; WhatsApp belum/tidak terhubung atau belum diverifikasi" style="font-weight:900;color:#111827;font-size:19px">✓</span>';
}

function popupValidasiWA(){
  if(!ST.user || (ST.user.role!=='admin' && ST.user.role!=='gurubk')) return toast('Akses ditolak','er');
  var all = (siswaSaya()||[]).slice().sort(function(a,b){
    return String(a.Kelas||'').localeCompare(String(b.Kelas||'')) || String(a.Nama||'').localeCompare(String(b.Nama||''));
  });
  var grouped = {};
  all.forEach(function(s){ var k=s.Kelas||'Tanpa Kelas'; (grouped[k]||(grouped[k]=[])).push(s); });
  var kelasKeys = Object.keys(grouped).sort();
  if(ST.cache.waFilterKelas && kelasKeys.indexOf(ST.cache.waFilterKelas)<0) ST.cache.waFilterKelas='';

  function hitungProgress(){
    var hp=0, aktif=0, belum=0;
    all.forEach(function(s){
      [['siswa',s.NoHP,s.StatusWASiswa],['ayah',s.NoHPAyah,s.StatusWAAyah],['ibu',s.NoHPIbu,s.StatusWAIbu]].forEach(function(x){
        if(String(x[1]||'').trim()){
          hp++;
          if(x[2]==='aktif') aktif++; else belum++;
        }
      });
    });
    return { hp:hp, aktif:aktif, belum:belum };
  }

  function renderIsi(){
    var prog = hitungProgress();
    var selected = ST.cache.waFilterKelas || '';
    var filterLengkap = ST.cache.waFilterLengkap || '';
    var visibleKeys = selected ? kelasKeys.filter(function(k){ return k===selected; }) : kelasKeys;
    function kontakLengkap(s){ return [s.NoHP,s.NamaAyah,s.NoHPAyah,s.NamaIbu,s.NoHPIbu].every(function(v){return String(v||'').trim()!=='';}); }
    if(filterLengkap==='lengkap') visibleKeys = visibleKeys.filter(function(k){ return grouped[k].some(kontakLengkap); });
    if(filterLengkap==='belum') visibleKeys = visibleKeys.filter(function(k){ return grouped[k].some(function(s){return !kontakLengkap(s);}); });
    var html = '<style>.wa-compact{min-width:560px!important;font-size:11px!important}.wa-compact th{padding:5px 6px!important;font-size:10px!important}.wa-compact td{padding:3px 6px!important;vertical-align:middle!important}.wa-status-cell{text-align:center;width:68px}.wa-filter-bar{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:9px}.wa-class-title{display:flex;align-items:center;gap:7px;flex-wrap:wrap;font-size:12px;font-weight:700;color:#0f4c81}.wa-class-tools{display:flex;gap:5px;align-items:center;flex-wrap:wrap}.wa-mark-note{font-size:10.5px;line-height:1.5;color:#5a6b7c;margin-top:5px}</style>';
    html += '<div class="wa-filter-bar"><div style="min-width:180px;flex:1"><label style="margin-bottom:3px">Filter Kelas</label><select id="filterKelasWA" onchange="filterValidasiWAKelas(this.value)" style="padding:6px 8px;font-size:12px"><option value="">Semua kelas</option>'+
      kelasKeys.map(function(k){ return '<option value="'+esc(k)+'"'+(selected===k?' selected':'')+'>'+esc(k)+'</option>'; }).join('')+
      '</select></div><div style="min-width:180px;flex:1"><label style="margin-bottom:3px">Kelengkapan Data Siswa</label><select id="filterLengkapWA" onchange="filterValidasiWALengkap(this.value)" style="padding:6px 8px;font-size:12px"><option value=""'+(filterLengkap===''?' selected':'')+'>Semua siswa</option><option value="lengkap"'+(filterLengkap==='lengkap'?' selected':'')+'>Sudah lengkap</option><option value="belum"'+(filterLengkap==='belum'?' selected':'')+'>Belum lengkap</option></select></div><div class="small" style="align-self:flex-end;padding-bottom:7px">'+all.length+' siswa · '+prog.aktif+' WA aktif · '+prog.belum+' belum/tidak terhubung</div></div>';
    html += '<div class="wa-mark-note"><b>Penanda:</b> <span style="color:#dc2626;font-weight:900">−</span> nomor kosong &nbsp; <span style="color:#111827;font-weight:900">✓</span> nomor terisi, belum/tidak terhubung &nbsp; <span style="color:#16a34a;font-weight:900">✓</span> WhatsApp aktif &nbsp; ⏳ sedang diperiksa</div>';
    html += '<div style="display:flex;gap:5px;flex-wrap:wrap;margin:8px 0 10px">'+
      '<button class="btn5 btn-sm" onclick="pilihSemuaKelasWA(true)">☑ Pilih Semua</button>'+
      '<button class="btn2 btn-sm" onclick="pilihSemuaKelasWA(false)">☐ Kosongkan</button>'+
      '<button class="btn2 btn-sm" onclick="cetakKelasTerpilihWA()">🖨 Cetak Kelas Terpilih</button>'+
      '<button class="btn4 btn-sm" onclick="cekKelasTerpilihWA()">🔍 Cek Terpilih</button>'+
      '<button class="btn4 btn-sm" onclick="cekSemuaNomorWA()">🔍 Cek Semua Nomor</button></div>';

    if(!visibleKeys.length){
      html += '<div class="empty">Tidak ada data siswa pada filter kelas ini.</div>';
    }
    visibleKeys.forEach(function(k){
      var kelasList = grouped[k].filter(function(s){ return filterLengkap==='' || (filterLengkap==='lengkap' ? kontakLengkap(s) : !kontakLengkap(s)); });
      if(!kelasList.length) return;
      var hpKelas=0, aktifKelas=0, belumKelas=0;
      kelasList.forEach(function(s){
        [['siswa',s.NoHP,s.StatusWASiswa],['ayah',s.NoHPAyah,s.StatusWAAyah],['ibu',s.NoHPIbu,s.StatusWAIbu]].forEach(function(x){
          if(String(x[1]||'').trim()) { hpKelas++; if(x[2]==='aktif') aktifKelas++; else belumKelas++; }
        });
      });
      var pctKelas = hpKelas ? Math.round(aktifKelas/hpKelas*100) : 0;
      html += '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin:10px 0 4px;padding:7px 9px;background:#f7fafd;border-left:3px solid #1a73e8;border-radius:6px">'+
        '<div class="wa-class-title"><input type="checkbox" class="chkKelasWA" value="'+esc(k)+'" style="width:auto;margin:0"> Kelas '+esc(k)+' <span style="font-weight:400;color:#5a6b7c;font-size:10.5px">'+kelasList.length+' siswa · '+aktifKelas+'/'+hpKelas+' nomor aktif ('+pctKelas+'%)</span></div>'+
        '<div class="wa-class-tools"><button class="btn4 btn-sm" data-kelas="'+esc(k)+'" onclick="cekKelasWABtn(this)">🔍 Cek Kelas</button></div></div>';
      html += '<div class="tw" style="margin-bottom:9px"><table class="wa-compact" style="min-width:560px"><thead><tr><th style="width:35px">No</th><th style="width:85px">NIS</th><th>Nama Siswa</th><th class="wa-status-cell">WA Siswa</th><th class="wa-status-cell">WA Ayah</th><th class="wa-status-cell">WA Ibu</th><th style="width:74px;text-align:center">Cetak</th></tr></thead><tbody>';
      kelasList.forEach(function(s,i){
        html += '<tr><td>'+(i+1)+'</td><td>'+esc(s.NIS||'-')+'</td><td>'+esc(s.Nama||'-')+'</td>';
        ['siswa','ayah','ibu'].forEach(function(target){
          html += '<td id="waCell_'+esc(s.NIS)+'_'+target+'" class="wa-status-cell">'+buildWACellHTML(s,target)+'</td>';
        });
        if(i===0) html += '<td rowspan="'+kelasList.length+'" style="text-align:center;vertical-align:middle"><button class="btn2 btn-sm" data-kelas="'+esc(k)+'" onclick="cetakKelasWABtn(this)" title="Cetak daftar validasi kelas ini">🖨</button></td>';
        html += '</tr>';
      });
      html += '</tbody></table></div>';
    });
    var mb = document.querySelector('#modal .mb');
    if(mb) mb.innerHTML = html;
  }

  ST.cache._waPopupRefresh = renderIsi;
  openModal('📱 Validasi Nomor WhatsApp Siswa & Orang Tua', '<div id="waPopupBody"></div>', '<button class="btn2 btn-sm" onclick="closeModal()">Tutup</button>', true);
  renderIsi();
}
function filterValidasiWAKelas(kelas){
  ST.cache.waFilterKelas = kelas || '';
  if(typeof ST.cache._waPopupRefresh === 'function') ST.cache._waPopupRefresh();
}
function filterValidasiWALengkap(status){
  ST.cache.waFilterLengkap = status || '';
  if(typeof ST.cache._waPopupRefresh === 'function') ST.cache._waPopupRefresh();
}
function cekKelasWABtn(btn){ cekPerKelasWA(btn.getAttribute('data-kelas')||''); }
function cetakKelasWABtn(btn){ cetakValidasiWAKelas(btn.getAttribute('data-kelas')||''); }
function cetakValidasiWAKelas(kelas){
  cetakValidasiWABanyak([kelas]);
}
function cetakKelasTerpilihWA(){
  var pilihan = Array.prototype.slice.call(document.querySelectorAll('.chkKelasWA:checked'))
    .map(function(c){ return String(c.value); });
  if(!pilihan.length) return toast('Pilih minimal satu kelas yang akan dicetak. Gunakan filter Semua kelas untuk memilih beberapa kelas.','er');
  cetakValidasiWABanyak(pilihan);
}
function cetakValidasiWABanyak(kelasArr){
  var semuaSiswa = siswaSaya() || [];
  var unik = [];
  (kelasArr || []).forEach(function(k){
    k = String(k || 'Tanpa Kelas');
    if(unik.indexOf(k) < 0) unik.push(k);
  });
  unik.sort(function(a,b){ return a.localeCompare(b, 'id'); });
  if(!unik.length) return toast('Pilih minimal satu kelas yang akan dicetak.','er');

  var halaman = [];
  unik.forEach(function(kelas, pageIndex){
    var rows = semuaSiswa.filter(function(s){
      return String(s.Kelas || 'Tanpa Kelas') === kelas;
    }).sort(function(a,b){ return String(a.Nama||'').localeCompare(String(b.Nama||''), 'id'); });
    if(!rows.length) return;

    var fontPt = rows.length > 55 ? 5 : rows.length > 48 ? 5.5 : rows.length > 41 ? 6 : rows.length > 34 ? 6.5 : rows.length > 27 ? 7 : 8;
    var html = '<section class="wa-print-class" style="font-size:'+fontPt+'pt;">';
    html += '<h2>DAFTAR VALIDASI NOMOR WHATSAPP</h2>';
    html += '<div class="sub">Kelas: '+esc(kelas)+' &nbsp; | &nbsp; Tanggal: '+esc(tglPanjang(today()))+' &nbsp; | &nbsp; Jumlah siswa: '+rows.length+'</div>';
    html += '<table><thead><tr><th style="width:5%">No</th><th style="width:14%">NIS</th><th>Nama Siswa</th><th style="width:12%">WA Siswa</th><th style="width:12%">WA Ayah</th><th style="width:12%">WA Ibu</th></tr></thead><tbody>';
    rows.forEach(function(s,i){
      html += '<tr><td>'+(i+1)+'</td><td>'+esc(s.NIS||'-')+'</td><td>'+esc(s.Nama||'-')+'</td>';
      [['siswa',s.NoHP,s.StatusWASiswa],['ayah',s.NoHPAyah,s.StatusWAAyah],['ibu',s.NoHPIbu,s.StatusWAIbu]].forEach(function(x){
        var mark = !String(x[1]||'').trim()
          ? '<span class="missing">−</span>'
          : x[2]==='aktif' ? '<span class="active">✓</span>'
          : x[2]==='checking' ? '<span class="checking">⏳</span>'
          : '<span class="unknown">✓</span>';
        html += '<td class="center">'+mark+'</td>';
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    html += '<div class="legend"><span class="missing">−</span> Nomor kosong &nbsp; <span class="unknown">✓</span> Nomor terisi belum/tidak terhubung &nbsp; <span class="active">✓</span> WhatsApp aktif</div>';
    html += '</section>';
    halaman.push(html);
  });
  if(!halaman.length) return toast('Tidak ada data siswa pada kelas yang dipilih.','er');

  var w = window.open('', '_blank');
  if(!w) return toast('Popup cetak diblokir browser. Izinkan popup untuk mencetak.','er');
  var css = '@page{size:A4 landscape;margin:7mm}' +
    '*{box-sizing:border-box}' +
    'html,body{margin:0;padding:0;font-family:Arial,sans-serif;color:#111}' +
    'body{font-size:8pt;line-height:1.05}' +
    '.wa-print-class{width:100%;break-after:page;page-break-after:always;break-inside:avoid;page-break-inside:avoid}' +
    '.wa-print-class:last-child{break-after:auto;page-break-after:auto}' +
    'h2{text-align:center;font-size:12pt;margin:0 0 4px}' +
    '.sub{text-align:center;font-size:8pt;margin-bottom:7px}' +
    'table{width:100%;border-collapse:collapse;table-layout:fixed}' +
    'th,td{border:1px solid #555;padding:2px 3px;overflow-wrap:anywhere;vertical-align:middle}' +
    'th{text-align:center;background:#edf2f7;font-weight:bold}' +
    'td.center{text-align:center;font-size:1.25em}' +
    '.missing{color:#dc2626;font-weight:bold}.unknown{color:#111827;font-weight:bold}.active{color:#16803c;font-weight:bold}.checking{color:#b9770e}' +
    '.legend{font-size:8pt;margin-top:5px}' +
    'tr{break-inside:avoid;page-break-inside:avoid}' +
    '@media print{.wa-print-class{min-height:0}}';
  var title = 'Validasi WA - ' + unik.join(', ');
  w.document.write('<!DOCTYPE html><html lang="id"><head><meta charset="utf-8"><title>'+esc(title)+'</title><style>'+css+'</style></head><body>'+halaman.join('')+'<script>window.onload=function(){setTimeout(function(){window.print();},350);};<\/script></body></html>');
  w.document.close();
}

async function cekWABatch(numbers, progressCb){
  var CHUNK = 30;
  var results = [];
  for(var i=0; i<numbers.length; i+=CHUNK){
    var chunk = numbers.slice(i, i+CHUNK);
    try{
      var res = await fetch(SUPABASE_FN_URL, {
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization':'Bearer ' + SUPABASE_ANON_KEY,
          'apikey': SUPABASE_ANON_KEY
        },
        body: JSON.stringify({ numbers: chunk })
      });
      if(!res.ok){
        var errTxt = await res.text();
        throw new Error('HTTP '+res.status+' — '+errTxt.slice(0,120));
      }
      var data = await res.json();
      if(data && Array.isArray(data.results)) results = results.concat(data.results);
      else throw new Error(data && data.error ? data.error : 'Respon tidak valid');
    }catch(e){
      console.error('[cekWA] batch error:', e);
      chunk.forEach(function(c){ results.push({ nis:c.nis, target:c.target, phone:c.phone, valid:null, reason:e.message }); });
    }
    if(progressCb) progressCb(Math.min(i+CHUNK, numbers.length), numbers.length);
  }
  return results;
}

function pilihSemuaKelasWA(checked){
  document.querySelectorAll('.chkKelasWA').forEach(function(c){ c.checked = !!checked; });
}

function getTasksWAByKelas(kelasArr){
  var tasks = [];
  (siswaSaya()||[]).forEach(function(s){
    if(kelasArr.length && kelasArr.indexOf(String(s.Kelas)) < 0) return;
    if(String(s.NoHP||'').trim() && s.StatusWASiswa !== 'aktif' && s.StatusWASiswa !== 'tidak_valid')
      tasks.push({ nis:s.NIS, target:'siswa', phone:s.NoHP, nama:s.Nama, kelas:s.Kelas });
    if(String(s.NoHPAyah||'').trim() && s.StatusWAAyah !== 'aktif' && s.StatusWAAyah !== 'tidak_valid')
      tasks.push({ nis:s.NIS, target:'ayah', phone:s.NoHPAyah, nama:s.Nama, kelas:s.Kelas });
    if(String(s.NoHPIbu||'').trim() && s.StatusWAIbu !== 'aktif' && s.StatusWAIbu !== 'tidak_valid')
      tasks.push({ nis:s.NIS, target:'ibu', phone:s.NoHPIbu, nama:s.Nama, kelas:s.Kelas });
  });
  return tasks;
}

function cekPerKelasWA(kelas){
  var tasks = getTasksWAByKelas([kelas]);
  if(!tasks.length){ toast('Semua nomor di kelas '+kelas+' sudah terverifikasi 🎉', 'inf'); return; }
  confirmBox(
    '🔍 Cek Otomatis WhatsApp — Kelas '+kelas+'\n\n'+
    'Jumlah nomor: '+tasks.length+'\n'+
    'Perkiraan waktu: ± '+Math.ceil(tasks.length * 0.25)+' detik\n\n'+
    'Proses berjalan otomatis. Nomor yang terhubung WhatsApp akan bercentang hijau. Lanjutkan?',
    function(){ jalankanBatchWA(tasks, 'Kelas '+kelas); }
  );
}

function cekKelasTerpilihWA(){
  var checked = Array.prototype.slice.call(document.querySelectorAll('.chkKelasWA:checked')).map(function(c){ return c.value; });
  if(!checked.length){ toast('Pilih minimal 1 kelas terlebih dahulu','er'); return; }
  var tasks = getTasksWAByKelas(checked);
  if(!tasks.length){ toast('Semua nomor di kelas terpilih sudah terverifikasi 🎉', 'inf'); return; }
  confirmBox(
    '🔍 Cek Otomatis WhatsApp\n\n'+
    'Kelas: '+checked.join(', ')+'\n'+
    'Jumlah nomor: '+tasks.length+'\n'+
    'Perkiraan waktu: ± '+Math.ceil(tasks.length * 0.25)+' detik\n\nLanjutkan?',
    function(){ jalankanBatchWA(tasks, checked.length+' kelas'); }
  );
}

function cekSemuaNomorWA(){
  var tasks = getTasksWAByKelas([]);
  if(!tasks.length){ toast('Semua nomor sudah terverifikasi 🎉', 'inf'); return; }
  var cakupan = ST.user && ST.user.role==='gurubk' ? 'Seluruh Kelas Ampu' : 'Seluruh Sekolah';
  confirmBox(
    '🔍 Cek Otomatis WhatsApp — '+cakupan.toUpperCase()+'\n\n'+
    'Jumlah nomor: '+tasks.length+'\n'+
    'Perkiraan waktu: ± '+Math.ceil(tasks.length * 0.25)+' detik\n\nLanjutkan?',
    function(){ jalankanBatchWA(tasks, cakupan); }
  );
}

async function jalankanBatchWA(tasks, label){
  tasks.forEach(function(t){
    var cell = document.getElementById('waCell_'+t.nis+'_'+t.target);
    if(cell) cell.innerHTML = '<span title="Sedang diperiksa" style="font-size:15px;color:#b9770e">⏳</span>';
  });

  var panel = document.createElement('div');
  panel.id = 'waBatchPanel';
  panel.style.cssText = 'position:fixed;bottom:20px;left:20px;right:20px;max-width:520px;margin:0 auto;background:#0f1720;color:#fff;padding:16px 20px;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.5);z-index:9999;font-size:13px;font-family:inherit';
  panel.innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'+
      '<div style="font-weight:700">🔍 Cek WhatsApp — '+esc(label)+'</div>'+
      '<button id="waBatchClose" style="background:transparent;color:#8ba0b3;font-size:18px;padding:0 6px;line-height:1">×</button>'+
    '</div>'+
    '<div style="background:#2a3a4a;height:8px;border-radius:4px;overflow:hidden;margin-bottom:10px"><div id="waBulkFill" style="background:#27ae60;height:100%;width:0%;transition:.3s"></div></div>'+
    '<div id="waBulkTxt" style="font-size:11.5px;opacity:.85;line-height:1.5">0 / '+tasks.length+'</div>';
  document.body.appendChild(panel);
  document.getElementById('waBatchClose').onclick = function(){ panel.remove(); };

  var results = await cekWABatch(tasks, function(done, total){
    var pct = Math.round(done/total*100);
    var fill = document.getElementById('waBulkFill'); if(fill) fill.style.width = pct+'%';
    var txt = document.getElementById('waBulkTxt'); if(txt) txt.innerHTML = done+' / '+total+' ('+pct+'%)';
  });

  var ok=0, bad=0, unknown=0;
  var updatesToSave = [];

  for(var i=0; i<results.length; i++){
    var r = results[i];
    var s = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(r.nis); });
    if(!s) continue;
    var field = r.target==='siswa' ? 'StatusWASiswa' : r.target==='ayah' ? 'StatusWAAyah' : 'StatusWAIbu';

    if(r.valid === true){ s[field] = 'aktif'; ok++; updatesToSave.push({ nis:r.nis, target:r.target, status:'aktif' }); }
    else if(r.valid === false){ s[field] = 'tidak_valid'; bad++; updatesToSave.push({ nis:r.nis, target:r.target, status:'tidak_valid' }); }
    else { s[field] = null; unknown++; }

    var cell = document.getElementById('waCell_'+r.nis+'_'+r.target);
    if(cell) cell.innerHTML = buildWACellHTML(s, r.target);
  }

  var CH = 10;
  for(var j=0; j<updatesToSave.length; j+=CH){
    var slice = updatesToSave.slice(j, j+CH);
    await Promise.all(slice.map(function(u){
      return api('setSiswaWaStatus', { nis:u.nis, target:u.target, status:u.status }).catch(function(e){ console.warn('save error', u, e); });
    }));
  }

  try{ localStorage.removeItem('bk_master'); }catch(e){}

  panel.innerHTML =
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">'+
      '<div style="font-weight:700">✅ Selesai — '+esc(label)+'</div>'+
      '<button id="waBatchClose2" style="background:transparent;color:#8ba0b3;font-size:18px;padding:0 6px;line-height:1">×</button>'+
    '</div>'+
    '<div style="font-size:12.5px;line-height:1.8">'+
      'Total diperiksa: <b>'+results.length+'</b><br>'+
      '<span style="color:#4ade80">✓</span> Aktif: <b style="color:#4ade80">'+ok+'</b><br>'+
      '<span style="color:#f59a8e">✗</span> Tidak terdaftar: <b style="color:#f59a8e">'+bad+'</b><br>'+
      '<span style="color:#f5c97a">?</span> Tidak dapat diverifikasi: <b style="color:#f5c97a">'+unknown+'</b>'+
    '</div>';
  document.getElementById('waBatchClose2').onclick = function(){ panel.remove(); };
  setTimeout(function(){
    if(!panel.parentNode) return;
    panel.style.opacity='0'; panel.style.transition='.5s';
    setTimeout(function(){ panel.remove(); }, 600);
  }, 6000);

  toast('✅ '+label+': '+ok+' aktif, '+bad+' tidak terdaftar, '+unknown+' tidak diketahui');

  setTimeout(function(){
    if(typeof ST.cache._waPopupRefresh === 'function'){
      try{ ST.cache._waPopupRefresh(); }catch(e){}
    }
  }, 500);
}

function perbaruiTombolKunciInputSiswa(locked){
  ST.setting = ST.setting || {};
  ST.setting.inputSiswaTerkunci = !!locked;
  var btn = $('#btnKunciInputSiswa');
  if(!btn) return;
  btn.className = locked ? 'btn' : 'btn2';
  btn.textContent = locked ? '🔓 Buka Input Siswa' : '🔒 Kunci Input Siswa';
  btn.title = locked ? 'Input sedang terkunci. Klik untuk membuka input siswa.' : 'Input sedang terbuka. Klik untuk mengunci input siswa.';
}
function ubahKunciInputSiswa(){
  if(!ST.user || ST.user.role !== 'admin') return toast('Fitur ini hanya untuk Administrator','er');
  api('getSiswaInputLock').then(function(currentlyLocked){
    currentlyLocked = !!currentlyLocked;
    perbaruiTombolKunciInputSiswa(currentlyLocked);
    var nextLocked = !currentlyLocked;
    var prompt = currentlyLocked
      ? 'Input data siswa saat ini TERKUNCI. Buka kembali agar siswa dapat mengubah data kontak?'
      : 'Input data siswa saat ini TERBUKA. Kunci input agar siswa tidak dapat mengubah data kontak?';
    confirmBox(prompt, function(){
      api('setSiswaInputLock',{locked:nextLocked}).then(function(result){
        var locked = result && typeof result.locked === 'boolean' ? result.locked : nextLocked;
        perbaruiTombolKunciInputSiswa(locked);
        try{ localStorage.removeItem('bk_master'); }catch(e){}
        toast(locked ? 'Input data siswa berhasil dikunci' : 'Input data siswa berhasil dibuka');
        renderSiswa();
      }).catch(function(e){
        toast('Gagal mengubah kunci: '+e.message,'er');
        api('getSiswaInputLock').then(perbaruiTombolKunciInputSiswa).catch(function(){});
      });
    });
  }).catch(function(e){
    toast('Gagal membaca status kunci input siswa: '+e.message,'er');
  });
}

function onSiswaKelasChange(v){ ST.cache['siswa_kelas'] = v; tabelSiswa(); }

function tabelSiswa(){
  var k = $('#sKelas').value; var c = ($('#sCari').value||'').toLowerCase().trim();
  var el = $('#tblSiswa'); if(!el) return;
  var rows = siswaSaya();
  if(k) rows = rows.filter(function(s){ return s.Kelas===k; });
  if(c) rows = rows.filter(function(s){
    return (s.Nama||'').toLowerCase().indexOf(c) >= 0 || String(s.NIS||'').toLowerCase().indexOf(c) >= 0;
  });
  rows.sort(function(a,b){ return String(a.Kelas).localeCompare(String(b.Kelas)) || String(a.Nama).localeCompare(String(b.Nama)); });
  var total = rows.length;
  var totalL = rows.filter(function(s){ return String(s.JK||'').toUpperCase() === 'L'; }).length;
  var totalP = rows.filter(function(s){ return String(s.JK||'').toUpperCase() === 'P'; }).length;
  var belumJK = total - totalL - totalP;
  var totalHP = rows.filter(function(s){ return String(s.NoHP||'').trim() !== ''; }).length;
  var totalLengkap = rows.filter(function(s){ return s.NoHP && s.NamaAyah && s.NoHPAyah && s.NamaIbu && s.NoHPIbu; }).length;
  var statEl = $('#statSiswa');
  if(statEl){
    var judulStat = k ? 'Kelas '+k : 'Semua Kelas';
    statEl.innerHTML =
      '<div class="sc b"><div class="n">'+total+'</div><div class="l">'+esc(judulStat)+' — Total Siswa</div></div>'+
      '<div class="sc g"><div class="n">'+totalL+'</div><div class="l">Laki-laki (L)</div></div>'+
      '<div class="sc pk"><div class="n">'+totalP+'</div><div class="l">Perempuan (P)</div></div>'+
      '<div class="sc" style="border-left-color:#25D366"><div class="n">'+totalHP+'</div><div class="l">Memiliki Nomor HP</div></div>'+
      '<div class="sc" style="border-left-color:#8e44ad"><div class="n">'+totalLengkap+'</div><div class="l">Data Kontak Lengkap</div></div>'+
      (belumJK > 0 ? '<div class="sc y"><div class="n">'+belumJK+'</div><div class="l">Belum Diisi JK</div></div>' : '');
  }
  if(!rows.length){ el.innerHTML = '<div class="empty">Tidak ada data siswa.</div>'; return; }
  var infoAtas = (!k) ? '<div class="notif info" style="margin-bottom:10px">📊 <b>Informasi Semua Kelas:</b> Total <b>'+total+'</b> siswa — Laki-laki: <b>'+totalL+'</b>, Perempuan: <b>'+totalP+'</b>'+(belumJK>0?' , Belum diisi JK: <b>'+belumJK+'</b>':'')+'</div>' : '';
  var head = '<tr><th style="width:34px">No</th><th>NIS</th><th>Nama</th><th>Kelas</th><th style="width:42px">JK</th><th>Tanggal Lahir</th><th style="width:64px;text-align:center">Ceklis</th><th style="width:78px">Aksi</th></tr>';
  var body = rows.map(function(s,i){
    var jkLabel = s.JK === 'L' ? '<span class="tag tb">L</span>' : s.JK === 'P' ? '<span class="tag" style="background:#fde6f1;color:#c2185b">P</span>' : '<span class="tag tgray">-</span>';
    var fieldsKontak = [s.NoHP,s.NamaAyah,s.NoHPAyah,s.NamaIbu,s.NoHPIbu];
    var adaData = fieldsKontak.some(function(v){ return String(v||'').trim()!==''; });
    var lengkap = fieldsKontak.every(function(v){ return String(v||'').trim()!==''; });
    var ceklis = !adaData ? '<span title="Belum mengisi data sama sekali" style="color:#64748b;font-weight:800">−</span>' :
      lengkap ? '<span title="Data lengkap" style="color:#16a34a;font-size:18px;font-weight:900">✓</span>' :
      '<span title="Sudah mengisi, tetapi belum lengkap" style="color:#111827;font-size:18px;font-weight:900">✓</span>';
    return '<tr><td>'+(i+1)+'</td><td>'+esc(s.NIS)+'</td><td><b>'+esc(s.Nama)+'</b></td><td>'+esc(s.Kelas)+'</td><td>'+jkLabel+'</td><td>'+esc(s.TanggalLahir||'-')+'</td><td style="text-align:center">'+ceklis+'</td>'+
      '<td><button class="btn5 btn-sm" onclick="detailSiswa(\''+esc(s.NIS)+'\')" title="Lihat detail lengkap">Detail</button></td></tr>';
  }).join('');
  el.innerHTML = infoAtas + '<div class="tw siswa-table"><table><thead>'+head+'</thead><tbody>'+body+'</tbody></table></div>'+
    '<div class="hint" style="margin-top:9px">Total ditampilkan: <b>'+rows.length+'</b> siswa (L: <b>'+totalL+'</b>, P: <b>'+totalP+'</b>'+(belumJK>0?', belum diisi: <b>'+belumJK+'</b>':'')+')</div>';
}

function detailSiswa(nis){
  var s = (ST.siswa||[]).find(function(x){ return String(x.NIS)===String(nis); });
  if(!s){ toast('Data siswa tidak ditemukan','er'); return; }

  var jkLabel = s.JK === 'L' ? 'Laki-laki' : s.JK === 'P' ? 'Perempuan' : '-';

  function infoRow(label, value, opts){
    opts = opts || {};
    var displayVal = value ? esc(value) : '<span style="color:#9aa9b8">—</span>';
    var waBtn = '';
    if(opts.wa && value){
      waBtn = ' <a class="wa-btn" style="margin-left:8px;vertical-align:middle" href="'+esc(waLink(opts.waTo||'', value, ''))+'" target="_blank" rel="noopener" title="Kirim WhatsApp ke '+(opts.waTo||'')+'">'+waIconSVG()+' WhatsApp</a>';
    }
    return '<tr>'+
      '<td style="padding:8px 12px 8px 0;width:170px;font-weight:600;color:#5a6b7c;font-size:12.5px;border-bottom:1px solid #eef3f8;vertical-align:top">'+esc(label)+'</td>'+
      '<td style="padding:8px 0;font-size:13px;border-bottom:1px solid #eef3f8;color:#20303f">'+displayVal+waBtn+'</td>'+
    '</tr>';
  }

  var lengkap = (s.NoHP && s.NamaAyah && s.NoHPAyah && s.NamaIbu && s.NoHPIbu);
  var html = '';

  html += '<div style="background:linear-gradient(135deg,#0f4c81,#1a73e8);color:#fff;padding:18px 20px;border-radius:12px;margin-bottom:16px">';
  html += '<div style="font-size:11px;opacity:.85;letter-spacing:.6px;text-transform:uppercase;font-weight:600">Data Siswa</div>';
  html += '<div style="font-size:20px;font-weight:800;margin-top:5px;line-height:1.2">'+esc(s.Nama||'-')+'</div>';
  html += '<div style="font-size:12.5px;opacity:.9;margin-top:6px">NIS: <b>'+esc(s.NIS||'-')+'</b> &nbsp;•&nbsp; Kelas: <b>'+esc(s.Kelas||'-')+'</b></div>';
  html += '</div>';

  html += '<div class="notif '+(lengkap?'new':'edit')+'" style="margin-bottom:14px">'+
    (lengkap ? '✅ <b>Data kontak lengkap</b> — siswa &amp; orang tua sudah terdata semua.'
             : '⚠️ <b>Data kontak belum lengkap.</b> Siswa dapat melengkapi sendiri melalui akun siswa (login dengan nama depan dan tanggal lahir format YYYY-MM-DD).')+
  '</div>';

  html += '<div style="background:#f7fafd;border:1px solid #e8eff7;border-left:4px solid #1a73e8;border-radius:10px;padding:14px 16px;margin-bottom:12px">';
  html += '<div style="font-size:12.5px;font-weight:700;color:#0f4c81;margin-bottom:8px;letter-spacing:.3px">👤 IDENTITAS SISWA</div>';
  html += '<table style="width:100%;border-collapse:collapse">';
  html += infoRow('Nama Lengkap', s.Nama);
  html += infoRow('NIS', s.NIS);
  html += infoRow('Kelas', s.Kelas);
  html += infoRow('Jenis Kelamin', jkLabel);
  html += infoRow('Tanggal Lahir', s.TanggalLahir || '-');
  html += '</table></div>';

  html += '<div style="background:#eef6ff;border:1px solid #d4e4f7;border-left:4px solid #1a73e8;border-radius:10px;padding:14px 16px;margin-bottom:12px">';
  html += '<div style="font-size:12.5px;font-weight:700;color:#0f4c81;margin-bottom:8px;letter-spacing:.3px">📱 KONTAK SISWA</div>';
  html += '<table style="width:100%;border-collapse:collapse">';
  html += infoRow('No. HP / WhatsApp', s.NoHP, { wa:true, waTo:s.Nama });
  html += '</table></div>';

  html += '<div style="background:#fff8ec;border:1px solid #f5e3c4;border-left:4px solid #f39c12;border-radius:10px;padding:14px 16px;margin-bottom:12px">';
  html += '<div style="font-size:12.5px;font-weight:700;color:#b9770e;margin-bottom:8px;letter-spacing:.3px">👨 DATA AYAH</div>';
  html += '<table style="width:100%;border-collapse:collapse">';
  html += infoRow('Nama Ayah', s.NamaAyah);
  html += infoRow('No. HP Ayah', s.NoHPAyah, { wa:true, waTo:s.NamaAyah });
  html += '</table></div>';

  html += '<div style="background:#fdf1f7;border:1px solid #f5d4e3;border-left:4px solid #e84393;border-radius:10px;padding:14px 16px;margin-bottom:6px">';
  html += '<div style="font-size:12.5px;font-weight:700;color:#c2185b;margin-bottom:8px;letter-spacing:.3px">👩 DATA IBU</div>';
  html += '<table style="width:100%;border-collapse:collapse">';
  html += infoRow('Nama Ibu', s.NamaIbu);
  html += infoRow('No. HP Ibu', s.NoHPIbu, { wa:true, waTo:s.NamaIbu });
  html += '</table></div>';

  var footer = '<button class="btn2" onclick="closeModal()">Tutup</button>'+
    '<button class="btn" onclick="closeModal();formSiswa(\''+esc(s.NIS)+'\')">✏️ Edit Data</button>';

  openModal('👤 Detail Siswa', html, footer, true);
}

function formSiswa(nis){
  var s = nis ? (ST.siswa||[]).find(function(x){ return String(x.NIS)===String(nis); }) : {}; s = s || {};
  openModal(s && s.NIS ? 'Edit Siswa' : 'Tambah Siswa',
    '<div class="row r2">'+
      '<div class="fg"><label>NIS <span style="color:#e74c3c">*</span></label><input id="swNis" value="'+esc(s.NIS||'')+'" '+(s.NIS?'readonly':'')+'></div>'+
      '<div class="fg"><label>Nama <span style="color:#e74c3c">*</span></label><input id="swNama" value="'+esc(s.Nama||'')+'"></div>'+
      '<div class="fg"><label>Kelas <span style="color:#e74c3c">*</span></label><select id="swKelas"><option value="">-- Pilih --</option>'+kelasSaya().map(function(k){ return '<option '+(k===s.Kelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<div class="fg"><label>Jenis Kelamin</label><select id="swJk"><option value="">-</option><option '+(s.JK==='L'?'selected':'')+'>L</option><option '+(s.JK==='P'?'selected':'')+'>P</option></select></div>'+
      '<div class="fg"><label>Tanggal Lahir</label><input id="swTanggalLahir" type="date" value="'+esc(s.TanggalLahir||'')+'" max="'+today()+'"><div class="hint">Format tersimpan di Supabase: YYYY-MM-DD.</div></div>'+
      '<div class="fg" style="grid-column:1/-1"><label>No. HP / WhatsApp Siswa</label><input id="swHp" value="'+esc(s.NoHP||'')+'" placeholder="Contoh: 08123456789" inputmode="tel"><div class="hint">Siswa juga dapat mengisi sendiri melalui akun siswa (login dengan nama depan dan tanggal lahir YYYY-MM-DD).</div></div>'+
      '<div class="fg"><label>Nama Ayah</label><input id="swNamaAyah" value="'+esc(s.NamaAyah||'')+'" placeholder="Nama lengkap ayah"></div>'+
      '<div class="fg"><label>No. HP Ayah</label><input id="swNoAyah" value="'+esc(s.NoHPAyah||'')+'" placeholder="08123456789" inputmode="tel"></div>'+
      '<div class="fg"><label>Nama Ibu</label><input id="swNamaIbu" value="'+esc(s.NamaIbu||'')+'" placeholder="Nama lengkap ibu"></div>'+
      '<div class="fg"><label>No. HP Ibu</label><input id="swNoIbu" value="'+esc(s.NoHPIbu||'')+'" placeholder="08123456789" inputmode="tel"></div>'+
    '</div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanSiswa(\''+(s.NIS||'')+'\')">Simpan</button>', true);
}
function simpanSiswa(old){
  var NIS = $('#swNis').value.trim();
  var Nama = $('#swNama').value.trim();
  var Kelas = $('#swKelas').value;
  if(!NIS || !Nama || !Kelas) return toast('NIS, Nama, Kelas wajib','er');
  var hpEl = $('#swHp');
  var namaAyahEl = $('#swNamaAyah');
  var noAyahEl = $('#swNoAyah');
  var namaIbuEl = $('#swNamaIbu');
  var noIbuEl = $('#swNoIbu');
  var payload = {
    NIS: NIS, Nama: Nama, Kelas: Kelas, JK: $('#swJk').value,
    TanggalLahir: ($('#swTanggalLahir') ? $('#swTanggalLahir').value : ''),
    NoHP: (hpEl ? hpEl.value.trim() : ''),
    NamaAyah: (namaAyahEl ? namaAyahEl.value.trim() : ''),
    NoHPAyah: (noAyahEl ? noAyahEl.value.trim() : ''),
    NamaIbu: (namaIbuEl ? namaIbuEl.value.trim() : ''),
    NoHPIbu: (noIbuEl ? noIbuEl.value.trim() : ''),
    _old: old
  };
  api('saveSiswa', payload).then(function(){ return loadMaster(true); })
    .then(function(){ closeModal(); toast('Disimpan'); renderSiswa(); })
    .catch(function(e){ toast(e.message,'er'); });
}
function hapusSiswa(nis){ confirmBox('Hapus siswa ini?', function(){ api('deleteSiswa',{nis:nis}).then(function(){ return loadMaster(true); }).then(function(){ toast('Dihapus'); renderSiswa(); }).catch(function(e){ toast(e.message,'er'); }); }); }
function exportSiswa(){
  var rows = siswaSaya();
  exportExcel('Daftar_Siswa_'+today(),
    ['NIS','Nama','Kelas','JK','Tanggal Lahir','No HP','Nama Ayah','No HP Ayah','Nama Ibu','No HP Ibu'],
    rows.map(function(s){ return [s.NIS, s.Nama, s.Kelas, s.JK, s.TanggalLahir||'', s.NoHP||'', s.NamaAyah||'', s.NoHPAyah||'', s.NamaIbu||'', s.NoHPIbu||'']; }));
}
function formImportSiswa(){
  openModal('Import Siswa',
    '<div class="notif new">💡 Format kolom: <code>NIS, Nama, Kelas, JK, No HP</code></div>'+
    '<div class="fg"><label>Pilih File</label><input type="file" id="impFile" accept=".csv,.txt,.xls,.xlsx"></div>'+
    '<div class="fg"><label>Atau tempel data</label><textarea id="impText" rows="7" placeholder="12345, Ahmad Fauzi, X IPA 1, L, 08123456789"></textarea></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="prosesImportSiswa()">Import</button>');
}
function extractSiswaRows(arr){
  if(!arr.length) return [];
  var firstRow = (arr[0]||[]).map(function(x){ return String(x||'').toLowerCase(); });
  var nisIdx=-1, namaIdx=-1, kelasIdx=-1, jkIdx=-1, hpIdx=-1, lahirIdx=-1;
  firstRow.forEach(function(h, i){
    if(nisIdx<0 && /(^|\b)(nis|induk|noinduk|no_induk)\b/.test(h)) nisIdx = i;
    if(namaIdx<0 && /nama/.test(h)) namaIdx = i;
    if(kelasIdx<0 && /kelas/.test(h)) kelasIdx = i;
    if(jkIdx<0 && /(jenis|gender|jk|l\/p|laki|perempuan)/.test(h)) jkIdx = i;
    if(hpIdx<0 && /(handphone|ponsel|telepon|telp|whatsapp|no\.?\s*hp|no_?hp|hp|wa|kontak)/.test(h)) hpIdx = i;
    if(lahirIdx<0 && /(tanggal.?lahir|tgl.?lahir|date.?of.?birth|birth.?date)/.test(h)) lahirIdx = i;
  });
  var hasHeader = nisIdx >= 0 && namaIdx >= 0; var start = hasHeader ? 1 : 0;
  if(!hasHeader){ nisIdx = 0; namaIdx = 1; kelasIdx = 2; jkIdx = 3; hpIdx = 4; }
  var rows = [];
  for(var i=start;i<arr.length;i++){
    var row = arr[i] || [];
    var nis = String(row[nisIdx] || '').trim(); var nama = String(row[namaIdx] || '').trim();
    if(!nis || !nama) continue;
    rows.push({
      NIS: nis, Nama: nama,
      Kelas: String(row[kelasIdx]||'').trim(),
      JK: String(row[jkIdx]||'').trim(),
      NoHP: hpIdx >= 0 ? String(row[hpIdx]||'').trim() : '',
      TanggalLahir: lahirIdx >= 0 ? String(row[lahirIdx]||'').trim() : ''
    });
  }
  return rows;
}
function prosesImportSiswa(){
  var f = $('#impFile').files[0];
  var kirim = function(rows){ if(!rows.length) return toast('Tidak ada data','er'); api('importSiswa',{rows:rows}).then(function(r){ return loadMaster(true).then(function(){ closeModal(); toast(r.msg); renderSiswa(); }); }).catch(function(e){ toast(e.message,'er'); }); };
  var parseText = function(txt){
    var lines = String(txt||'').split(/\r?\n/).map(function(l){ return l.trim(); }).filter(Boolean);
    if(!lines.length) return toast('Tidak ada data','er');
    var arr = lines.map(function(l){ return l.split(/[,;\t]/).map(function(x){ return x.trim().replace(/^"|"$/g,''); }); });
    var rows = extractSiswaRows(arr); if(!rows.length) return toast('Format tidak dikenali','er'); kirim(rows);
  };
  if(f){
    var name = (f.name||'').toLowerCase();
    if(name.endsWith('.xlsx') || name.endsWith('.xls')){
      toast('Membaca…','inf');
      bacaFileMentah(f).then(function(arr){ var rows = extractSiswaRows(arr); if(!rows.length) return toast('Tidak ada data valid','er'); kirim(rows); }).catch(function(e){ toast('Gagal baca: '+e.message,'er'); });
    } else { var rr = new FileReader(); rr.onload = function(){ parseText(rr.result); }; rr.readAsText(f, 'UTF-8'); }
  } else { var t = $('#impText').value; if(!t.trim()) return toast('Pilih file/tempel','er'); parseText(t); }
}

/* ================= MUTASI SISWA ================= */
function openMutasi(){
  ST.cache['mutasi_tab'] = ST.cache['mutasi_tab'] || 'keluar';
  openModal('🔄 Mutasi Siswa', '<div id="mutasiWrap"><div class="empty">Memuat…</div></div>', '<button class="btn2" onclick="closeModal()">Tutup</button>', true);
  renderMutasiContent();
}
function renderMutasiContent(){
  var activeTab = ST.cache['mutasi_tab'] || 'keluar';
  var tabs = [
    {id:'keluar', label:'📤 Siswa Keluar'},
    {id:'masuk', label:'📥 Siswa Masuk / Pindahan'},
    {id:'riwayat', label:'📋 Riwayat Mutasi'}
  ];
  var html = '<div class="tabs">'+ tabs.map(function(t){ return '<button class="tab '+(t.id===activeTab?'on':'')+'" onclick="mutasiTabGo(\''+t.id+'\')">'+t.label+'</button>'; }).join('')+'</div>';
  html += '<div id="mutasiContent"></div>';
  var wrap = document.getElementById('mutasiWrap'); if(!wrap) return;
  wrap.innerHTML = html;
  if(activeTab === 'keluar') renderMutasiKeluar();
  else if(activeTab === 'masuk') renderMutasiMasuk();
  else renderMutasiRiwayat();
}
function mutasiTabGo(t){ ST.cache['mutasi_tab'] = t; renderMutasiContent(); }
function renderMutasiKeluar(){
  var ks = kelasSaya(); var el = document.getElementById('mutasiContent'); if(!el) return;
  var html = '<div class="notif edit">📤 Data siswa yang keluar akan <b>otomatis dihapus</b> dari daftar kelas dan tercatat di riwayat mutasi.</div>';
  html += '<div class="row r2">';
  html += '<div class="fg"><label>Tanggal Keluar <span style="color:#e74c3c">*</span></label><input type="date" id="mkTanggal" value="'+today()+'"></div>';
  html += '<div class="fg"><label>Kelas <span style="color:#e74c3c">*</span></label><select id="mkKelas" onchange="mkOnKelasChange()"><option value="">-- Pilih Kelas --</option>'+ ks.map(function(k){ return '<option>'+esc(k)+'</option>'; }).join('')+'</select></div>';
  html += '<div class="fg" style="grid-column:1/-1"><label>Siswa <span style="color:#e74c3c">*</span></label><select id="mkSiswa"><option value="">-- Pilih Kelas Dulu --</option></select></div>';
  html += '<div class="fg" style="grid-column:1/-1"><label>Alasan Keluar <span style="color:#e74c3c">*</span></label><textarea id="mkAlasan" rows="3" placeholder="Contoh: Pindah domisili / Mutasi ke sekolah lain"></textarea></div>';
  html += '<div class="fg" style="grid-column:1/-1"><label>Keterangan (opsional)</label><input id="mkKet" placeholder="Contoh: Nama sekolah tujuan"></div>';
  html += '</div>';
  html += '<div style="display:flex;gap:9px;justify-content:flex-end">';
  html += '<button class="btn2" onclick="mutasiTabGo(\'riwayat\')">Lihat Riwayat</button>';
  html += '<button class="btn3" id="mkSimpanBtn" onclick="simpanMutasiKeluar()">📤 Proses Siswa Keluar</button>';
  html += '</div>';
  el.innerHTML = html;
}
function mkOnKelasChange(){
  var k = document.getElementById('mkKelas').value;
  var sel = document.getElementById('mkSiswa'); if(!sel) return;
  if(!k){ sel.innerHTML = '<option value="">-- Pilih Kelas Dulu --</option>'; return; }
  var list = (ST.siswa||[]).filter(function(s){ return s.Kelas === k; }).sort(function(a,b){ return a.Nama.localeCompare(b.Nama); });
  if(!list.length){ sel.innerHTML = '<option value="">(Tidak ada siswa di kelas ini)</option>'; return; }
  sel.innerHTML = '<option value="">-- Pilih Siswa --</option>' + list.map(function(s){ return '<option value="'+esc(s.NIS)+'">'+esc(s.Nama)+' ('+esc(s.NIS)+')</option>'; }).join('');
}
async function simpanMutasiKeluar(){
  var tgl = (document.getElementById('mkTanggal').value||'').trim();
  var kelas = document.getElementById('mkKelas').value;
  var nis = document.getElementById('mkSiswa').value;
  var alasan = (document.getElementById('mkAlasan').value||'').trim();
  var ket = (document.getElementById('mkKet').value||'').trim();
  if(!tgl){ toast('Tanggal wajib diisi','er'); return; }
  if(!kelas){ toast('Kelas wajib dipilih','er'); return; }
  if(!nis){ toast('Siswa wajib dipilih','er'); return; }
  if(!alasan){ toast('Alasan keluar wajib diisi','er'); return; }
  var s = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(nis); });
  if(!s){ toast('Data siswa tidak ditemukan','er'); return; }
  var btn = document.getElementById('mkSimpanBtn');
  if(btn){ btn.disabled = true; btn.textContent = '⏳ Memproses…'; }
  try{
    var recMutasi = { ID: uid(), Tanggal: tgl, NIS: s.NIS, Nama: s.Nama, KelasAsal: s.Kelas, KelasTujuan: '', Jenis: 'keluar', Alasan: alasan, Keterangan: ket, Petugas: currentPetugasName() || 'Admin' };
    await api('saveRecord', { sheet: SH.MUTASI, data: recMutasi });
    await api('deleteSiswa', { nis: s.NIS });
    toast('Siswa '+s.Nama+' berhasil diproses keluar');
    await loadMaster(true);
    if(btn){ btn.disabled = false; btn.textContent = '📤 Proses Siswa Keluar'; }
    document.getElementById('mkSiswa').value = '';
    document.getElementById('mkAlasan').value = '';
    document.getElementById('mkKet').value = '';
    renderSiswa();
    ST.cache['mutasi_tab'] = 'riwayat';
    renderMutasiContent();
  }catch(e){
    console.error(e);
    toast('Gagal proses siswa keluar: ' + (e.message || e), 'er');
    if(btn){ btn.disabled = false; btn.textContent = '📤 Proses Siswa Keluar'; }
  }
}
function renderMutasiMasuk(){
  var ks = kelasSaya(); var el = document.getElementById('mutasiContent'); if(!el) return;
  var html = '<div class="notif new">📥 Data siswa baru / pindahan akan <b>otomatis ditambahkan</b> ke kelas yang dipilih dan tercatat di riwayat mutasi.</div>';
  html += '<div class="row r2">';
  html += '<div class="fg"><label>Tanggal Masuk <span style="color:#e74c3c">*</span></label><input type="date" id="mmTanggal" value="'+today()+'"></div>';
  html += '<div class="fg"><label>Kelas Tujuan <span style="color:#e74c3c">*</span></label><select id="mmKelas"><option value="">-- Pilih Kelas --</option>'+ ks.map(function(k){ return '<option>'+esc(k)+'</option>'; }).join('')+'</select></div>';
  html += '<div class="fg"><label>NIS <span style="color:#e74c3c">*</span></label><input id="mmNis" placeholder="Nomor Induk Siswa" autocomplete="off"></div>';
  html += '<div class="fg"><label>Nama Lengkap <span style="color:#e74c3c">*</span></label><input id="mmNama" placeholder="Nama siswa" autocomplete="off"></div>';
  html += '<div class="fg"><label>Jenis Kelamin</label><select id="mmJk"><option value="">-</option><option value="L">Laki-laki (L)</option><option value="P">Perempuan (P)</option></select></div>';
  html += '<div class="fg"><label>No. HP / WhatsApp</label><input id="mmHp" placeholder="08123456789" inputmode="tel"></div>';
  html += '<div class="fg" style="grid-column:1/-1"><label>Alasan Masuk / Pindahan <span style="color:#e74c3c">*</span></label><textarea id="mmAlasan" rows="3" placeholder="Contoh: Pindahan dari SMA Negeri X / Siswa baru"></textarea></div>';
  html += '<div class="fg" style="grid-column:1/-1"><label>Keterangan (opsional)</label><input id="mmKet" placeholder="Contoh: Nama sekolah asal"></div>';
  html += '</div>';
  html += '<div style="display:flex;gap:9px;justify-content:flex-end">';
  html += '<button class="btn2" onclick="mutasiTabGo(\'riwayat\')">Lihat Riwayat</button>';
  html += '<button class="btn4" id="mmSimpanBtn" onclick="simpanMutasiMasuk()">📥 Proses Siswa Masuk</button>';
  html += '</div>';
  el.innerHTML = html;
}
async function simpanMutasiMasuk(){
  var tgl = (document.getElementById('mmTanggal').value||'').trim();
  var kelas = document.getElementById('mmKelas').value;
  var nis = (document.getElementById('mmNis').value||'').trim();
  var nama = (document.getElementById('mmNama').value||'').trim();
  var jk = document.getElementById('mmJk').value;
  var hp = (document.getElementById('mmHp').value||'').trim();
  var alasan = (document.getElementById('mmAlasan').value||'').trim();
  var ket = (document.getElementById('mmKet').value||'').trim();
  if(!tgl){ toast('Tanggal wajib diisi','er'); return; }
  if(!kelas){ toast('Kelas tujuan wajib dipilih','er'); return; }
  if(!nis){ toast('NIS wajib diisi','er'); return; }
  if(!nama){ toast('Nama wajib diisi','er'); return; }
  if(!alasan){ toast('Alasan masuk wajib diisi','er'); return; }
  var exist = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(nis); });
  if(exist){ toast('NIS '+nis+' sudah terdaftar (nama: '+exist.Nama+').','er'); return; }
  var btn = document.getElementById('mmSimpanBtn');
  if(btn){ btn.disabled = true; btn.textContent = '⏳ Memproses…'; }
  try{
    await api('saveSiswa', { NIS: nis, Nama: nama, Kelas: kelas, JK: jk || '', NoHP: hp, _old: null });
    var recMutasi = { ID: uid(), Tanggal: tgl, NIS: nis, Nama: nama, KelasAsal: '', KelasTujuan: kelas, Jenis: 'masuk', Alasan: alasan, Keterangan: ket, Petugas: currentPetugasName() || 'Admin' };
    await api('saveRecord', { sheet: SH.MUTASI, data: recMutasi });
    toast('Siswa '+nama+' berhasil dimasukkan ke kelas '+kelas);
    await loadMaster(true);
    if(btn){ btn.disabled = false; btn.textContent = '📥 Proses Siswa Masuk'; }
    document.getElementById('mmNis').value = '';
    document.getElementById('mmNama').value = '';
    document.getElementById('mmJk').value = '';
    document.getElementById('mmHp').value = '';
    document.getElementById('mmAlasan').value = '';
    document.getElementById('mmKet').value = '';
    renderSiswa();
    ST.cache['mutasi_tab'] = 'riwayat';
    renderMutasiContent();
  }catch(e){ console.error(e); toast('Gagal proses siswa masuk: ' + (e.message || e), 'er'); if(btn){ btn.disabled = false; btn.textContent = '📥 Proses Siswa Masuk'; } }
}
function renderMutasiRiwayat(){
  var el = document.getElementById('mutasiContent'); if(!el) return;
  el.innerHTML = '<div class="empty">Memuat riwayat mutasi…</div>';
  api('getData', { sheet: SH.MUTASI }).then(function(rows){
    rows = rows || [];
    rows.sort(function(a,b){ return String(b.Tanggal||'').localeCompare(String(a.Tanggal||'')); });
    var totalKeluar = rows.filter(function(r){ return r.Jenis === 'keluar'; }).length;
    var totalMasuk = rows.filter(function(r){ return r.Jenis === 'masuk'; }).length;
    var stats = '<div class="stat" style="margin-bottom:12px">'+
      '<div class="sc r"><div class="n">'+totalKeluar+'</div><div class="l">Siswa Keluar</div></div>'+
      '<div class="sc g"><div class="n">'+totalMasuk+'</div><div class="l">Siswa Masuk</div></div>'+
      '<div class="sc"><div class="n">'+rows.length+'</div><div class="l">Total Mutasi</div></div>'+
    '</div>';
    var filterBar = '<div class="fbar" style="margin-bottom:10px">'+
      '<div class="fg" style="max-width:240px"><label>Jenis Mutasi</label>'+
      '<select id="mrwJenis" onchange="renderMutasiRiwayat()">'+
        '<option value="">Semua Jenis</option>'+
        '<option value="keluar">Siswa Keluar</option>'+
        '<option value="masuk">Siswa Masuk</option>'+
      '</select></div></div>';
    var jenisFilter = ST.cache['mrw_jenis'] || '';
    setTimeout(function(){ var sel = document.getElementById('mrwJenis'); if(sel) sel.value = jenisFilter; }, 0);
    var filtered = jenisFilter ? rows.filter(function(r){ return r.Jenis === jenisFilter; }) : rows;
    var html = stats + filterBar;
    if(!filtered.length){ html += '<div class="empty">Belum ada riwayat mutasi siswa.</div>'; }
    else {
      html += '<div class="tw"><table><thead><tr>'+
        '<th style="width:44px">No</th><th>Tanggal</th><th>Jenis</th><th>NIS</th><th>Nama</th>'+
        '<th>Kelas Asal</th><th>Kelas Tujuan</th><th>Alasan</th><th>Keterangan</th><th>Petugas</th>'+
        '<th style="width:80px">Aksi</th></tr></thead><tbody>';
      filtered.forEach(function(r,i){
        var jenisTag = r.Jenis === 'keluar' ? '<span class="tag tr">Keluar</span>' : '<span class="tag tg">Masuk</span>';
        html += '<tr>'+
          '<td>'+(i+1)+'</td><td>'+tgl(r.Tanggal)+'</td><td>'+jenisTag+'</td>'+
          '<td>'+esc(r.NIS||'-')+'</td><td><b>'+esc(r.Nama||'-')+'</b></td>'+
          '<td>'+esc(r.KelasAsal||'-')+'</td><td>'+esc(r.KelasTujuan||'-')+'</td>'+
          '<td style="white-space:pre-wrap">'+esc((r.Alasan||'-').slice(0,120))+'</td>'+
          '<td>'+esc((r.Keterangan||'-').slice(0,60))+'</td><td>'+esc(r.Petugas||'-')+'</td>'+
          '<td class="right"><button class="btn3 btn-sm" onclick="hapusMutasi(\''+r.ID+'\')">Hapus</button></td>'+
        '</tr>';
      });
      html += '</tbody></table></div>';
    }
    el.innerHTML = html;
    var sel = document.getElementById('mrwJenis');
    if(sel){ sel.onchange = function(){ ST.cache['mrw_jenis'] = this.value; renderMutasiRiwayat(); }; sel.value = jenisFilter; }
  }).catch(function(e){ console.error(e); el.innerHTML = '<div class="notif err">Gagal memuat riwayat: '+esc(e.message)+'</div>'; });
}
function hapusMutasi(id){
  confirmBox('Hapus data riwayat mutasi ini? (Data siswa tidak akan dikembalikan)', function(){
    api('deleteRecord', { sheet: SH.MUTASI, id: id }).then(function(){ toast('Riwayat mutasi dihapus'); renderMutasiRiwayat(); })
      .catch(function(e){ toast(e.message,'er'); });
  });
}

/* ================= JURNAL HARIAN ================= */
function renderJurnal(){
  if(!ST.cache['per_jurnal_mode']){
    ST.cache['per_jurnal_mode'] = 'rentang';
    var dEnd = new Date();
    var dStart = new Date(); dStart.setDate(dStart.getDate() - 2);
    ST.cache['per_jurnal_dari'] = dStart.getFullYear()+'-'+pad2(dStart.getMonth()+1)+'-'+pad2(dStart.getDate());
    ST.cache['per_jurnal_sampai'] = dEnd.getFullYear()+'-'+pad2(dEnd.getMonth()+1)+'-'+pad2(dEnd.getDate());
    ST.cache['per_jurnal_bulan'] = today().slice(0,7);
  }
  var p = periodeGet('jurnal');
  var scopeNote = (ST.user.role === 'gurubk') ? ' — menampilkan jurnal milik Anda sendiri' : ' — menampilkan jurnal semua Guru BK';
  $('#main').innerHTML = '<div class="hd"><div><h2>📔 Jurnal Harian Guru BK</h2><div class="sub">Catatan kegiatan harian — otomatis dari presensi & layanan BK. Hari Sabtu, Ahad, dan libur nasional tidak ditampilkan'+scopeNote+'</div></div>'+
    '<div class="tools"><button class="btn" onclick="formJurnal()">+ Tambah Catatan Manual</button><button class="btn2" onclick="cetakJurnal()">🖨 Cetak</button><button class="btn4" onclick="exportJurnal()">⬇ Export</button></div></div>'+
    '<div class="card"><div class="fbar">'+
      periodeBarHTML('jurnal')+
      '<button class="btn2" onclick="periodeReset(\'jurnal\')">↺ Reset</button>'+
    '</div><div id="jurnalView"><div class="empty">Memuat…</div></div></div>';
  filterJurnal();
}
function filterJurnal(){
  var p = periodeGet('jurnal');
  var dari = p.dari, sampai = p.sampai;
  ST.cache['jurnal_dari'] = dari;
  ST.cache['jurnal_sampai'] = sampai;
  ST.cache['jurnal_label'] = p.label;
  var vEl = $('#jurnalView'); if(!vEl) return;
  vEl.innerHTML = '<div class="empty">Memuat…</div>';
  var sheets = [SH.JURNAL, SH.HADIR, SH.KLASIKAL, SH.KELOMPOK, SH.KR, SH.KONSELING, SH.PANGGILAN, SH.KASUS, SH.KONFERENSI, SH.ALIHTANGAN, SH.ANEKDOT, SH.LAINLAIN];
  var filters = {};
  sheets.forEach(function(s){ filters[s] = { since: dari, until: sampai }; });
  api('batchGetData', { sheets: sheets, filters: filters }).then(function(all){
    var jurnalWarning = '';
    if(all.__errors && Object.keys(all.__errors).length){
      var detailJurnalError = Object.keys(all.__errors).map(function(k){ return k+': '+all.__errors[k]; }).join(' | ');
      jurnalWarning = '<div class="notif err">Sebagian sumber jurnal gagal dimuat: '+esc(detailJurnalError)+'. Catatan dari tabel yang berhasil tetap ditampilkan.</div>';
    }
    var eventsByDate = {};
    var ks = kelasSaya();
    var isAdmin = (ST.user.role === 'admin');
    var currentUser = currentPetugasName();
    ST.cache.jurnal = all[SH.JURNAL] || [];
    function ensureDate(tglKey){
      if(isHariLibur(tglKey)) return null;
      if(!eventsByDate[tglKey]) eventsByDate[tglKey] = { Tanggal: tglKey, Items: [], _ids: [] };
      return eventsByDate[tglKey];
    }
    (all[SH.JURNAL]||[]).forEach(function(r){
      var tglStr = String(r.Tanggal);
      if(tglStr < dari || tglStr > sampai) return;
      if(!isAdmin && ST.user.role === 'gurubk'){
        var owner = String(r.Petugas||'').trim();
        if(owner && owner !== String(currentUser).trim()) return;
      }
      var ev = ensureDate(tglStr); if(!ev) return;
      ev.Items.push({ kegiatan: r.Kegiatan||'', keterangan: r.Keterangan||'', manualId: r.ID, petugas: r.Petugas||'' });
      ev._ids.push(r.ID);
    });
    var hadirByDate = {};
    (all[SH.HADIR]||[]).forEach(function(r){
      var tglStr = String(r.Tanggal);
      if(tglStr < dari || tglStr > sampai) return;
      if(ks.indexOf(r.Kelas) < 0) return;
      if(isHariLibur(tglStr)) return;
      if(!hadirByDate[tglStr]) hadirByDate[tglStr] = { total:0, S:0, I:0, A:0 };
      hadirByDate[tglStr].total++;
      if(hadirByDate[tglStr][r.Status] != null) hadirByDate[tglStr][r.Status]++;
    });
    Object.keys(hadirByDate).forEach(function(tglKey){
      var h = hadirByDate[tglKey];
      var ev = ensureDate(tglKey); if(!ev) return;
      ev.Items.push({ kegiatan: 'Presensi Siswa (' + h.total + ' siswa) — S:'+h.S+' I:'+h.I+' A:'+h.A, keterangan: '' });
    });
    function pushLayanan(rows, jenisLabel, hideDetail){
      (rows||[]).forEach(function(r){
        var tglStr = String(r.Tanggal);
        if(tglStr < dari || tglStr > sampai) return;
        if(isHariLibur(tglStr)) return;
        var kelasRow = String(r.Kelas||'').split(',').map(function(x){ return x.trim(); }).filter(Boolean);
        if(!kelasRow.some(function(k){ return ks.indexOf(k) >= 0; })) return;
        var ev = ensureDate(tglStr); if(!ev) return;
        var info = jenisLabel + (r.Nama ? ' — ' + r.Nama : (r.Kelas ? ' — ' + r.Kelas : ''));
        var detail = '';
        if(!hideDetail){ detail = r.Topik || r.Masalah || r.Deskripsi || r.JudulKasus || r.Peristiwa || r.Alasan || r.Kegiatan || r.Judul || r.Catatan || ''; }
        ev.Items.push({ kegiatan: info + (detail ? ': ' + detail : ''), keterangan: '' });
      });
    }
    pushLayanan(all[SH.KLASIKAL], 'Bimbingan Klasikal');
    pushLayanan(all[SH.KELOMPOK], 'Bimbingan Kelompok');
    pushLayanan(all[SH.KR], 'Home Visit', true);
    pushLayanan(all[SH.KONSELING], 'Konseling Individual', true);
    pushLayanan(all[SH.PANGGILAN], 'Pertemuan OT', true);
    pushLayanan(all[SH.KASUS], 'Catatan Kasus');
    pushLayanan(all[SH.KONFERENSI], 'Konferensi Kasus', true);
    pushLayanan(all[SH.ALIHTANGAN], 'Alih Tangan Kasus', true);
    pushLayanan(all[SH.ANEKDOT], 'Catatan Anekdot');
    (all[SH.LAINLAIN]||[]).forEach(function(r){
      var tglStr = String(r.Tanggal);
      if(tglStr < dari || tglStr > sampai) return;
      if(isHariLibur(tglStr)) return;
      var ev = ensureDate(tglStr); if(!ev) return;
      var kegName = r.Kegiatan || r.Judul || 'Kegiatan';
      ev.Items.push({ kegiatan: kegName, keterangan: r.Keterangan || '' });
    });
    var dates = Object.keys(eventsByDate).sort(function(a,b){ return b.localeCompare(a); });
    ST.cache['jurnal_view'] = dates.map(function(d){ return eventsByDate[d]; });
    if(!dates.length){
      vEl.innerHTML = jurnalWarning + '<div class="hint" style="margin-bottom:9px">📅 Periode: <b>'+esc(p.label)+'</b></div>'+
        '<div class="empty">Tidak ada catatan jurnal pada periode ini.<br><span class="hint">Hari Sabtu, Ahad, dan libur nasional dikecualikan.</span></div>';
      return;
    }
    var totalItems = 0;
    dates.forEach(function(d){ totalItems += eventsByDate[d].Items.length; });
    var html = jurnalWarning + '<div class="stat" style="margin-bottom:14px">'+
      '<div class="sc g"><div class="n">'+dates.length+'</div><div class="l">Hari Tercatat</div></div>'+
      '<div class="sc b"><div class="n">'+totalItems+'</div><div class="l">Total Kegiatan</div></div>'+
    '</div>';
    html += '<div class="hint" style="margin-bottom:9px">📅 Periode: <b>'+esc(p.label)+'</b> ('+tgl(dari)+' — '+tgl(sampai)+') • Sabtu/Ahad/libur nasional dikecualikan'+(isAdmin?' • <b>Semua Guru BK</b>':' • <b>Milik saya sendiri</b>')+'</div>';
    dates.forEach(function(d, idx){
      var ev = eventsByDate[d];
      html += '<div class="jurnal-card">';
      html += '<div class="jhead"><div class="jdate">'+(idx+1)+'. '+tglPanjang(d)+'</div></div>';
      html += '<div class="jbody"><ol style="margin:0;padding-left:20px">';
      ev.Items.forEach(function(it){
        var line = it.kegiatan;
        if(it.keterangan) line += ' — ' + it.keterangan;
        var actions = '';
        if(it.manualId){
          actions = '<span style="display:inline-flex;gap:4px;vertical-align:middle;margin-left:6px">'+
            '<button class="btn2 jbtn" onclick="formJurnal(\''+it.manualId+'\')" title="Edit catatan manual">✏️ Edit</button>'+
            '<button class="btn3 jbtn" onclick="hapusJurnal(\''+it.manualId+'\')" title="Hapus catatan manual">🗑 Hapus</button>'+
            '</span>';
        }
        var ownerBadge = '';
        if(isAdmin && it.petugas){ ownerBadge = ' <span class="tag tb" style="font-size:10px">👤 '+esc(it.petugas)+'</span>'; }
        html += '<li style="margin-bottom:6px">'+esc(line)+ownerBadge+actions+'</li>';
      });
      html += '</ol></div></div>';
    });
    vEl.innerHTML = html;
  }).catch(function(e){ if(vEl) vEl.innerHTML = '<div class="empty">Gagal memuat: '+esc(e.message)+'</div>'; });
}
function formJurnal(id){
  var arr = ST.cache.jurnal || [];
  var data = id ? arr.find(function(r){ return String(r.ID)===String(id); }) : null;
  if(id && !data){
    var view = ST.cache['jurnal_view'] || [];
    for(var i=0;i<view.length;i++){
      var it = (view[i].Items||[]).find(function(x){ return x.manualId && String(x.manualId)===String(id); });
      if(it){ data = { ID: it.manualId, Tanggal: view[i].Tanggal, Kegiatan: it.kegiatan, Keterangan: it.keterangan, Petugas: it.petugas }; break; }
    }
  }
  var infoPetugas = id ? '' : '<div class="notif info">📝 Catatan akan tercatat atas nama <b>'+esc(currentPetugasName()||'(Anda)')+'</b>. Catatan hanya dapat dilihat oleh akun Anda sendiri.</div>';
  openModal((id?'Edit':'Tambah')+' Catatan Jurnal Harian',
    infoPetugas+
    '<div class="notif edit">⚠️ Catatan manual hanya dapat disimpan pada hari efektif (Senin–Jumat, bukan hari libur nasional).</div>'+
    buildForm('jurnal', data),
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanJurnal(\''+(id||'')+'\')">💾 Simpan</button>', true);
  initSigPads();
}
function simpanJurnal(id){
  var d = collectForm('jurnal'); if(!d) return;
  d.ID = id || uid();
  if(!d.Tanggal){ toast('Tanggal wajib','er'); return; }
  if(!d.Kegiatan){ toast('Kegiatan wajib','er'); return; }
  if(isHariLibur(d.Tanggal)){ toast('Tidak dapat menyimpan jurnal pada ' + labelHariLibur(d.Tanggal), 'er'); return; }
  if(id){
    var existing = (ST.cache.jurnal||[]).find(function(r){ return String(r.ID)===String(id); });
    if(existing && existing.Petugas) d.Petugas = existing.Petugas;
  }
  if(!d.Petugas) d.Petugas = currentPetugasName();
  api('saveRecord', { sheet: SH.JURNAL, data: d }).then(function(){
    closeModal(); toast('Catatan jurnal disimpan');
    invalidateCache('jurnal_view');
    if(ST.page === 'dashboard') renderDashboard(); else filterJurnal();
  }).catch(function(e){ toast(e.message,'er'); });
}
function hapusJurnal(id){
  confirmBox('Hapus catatan jurnal ini?', function(){
    api('deleteRecord', { sheet: SH.JURNAL, id: id }).then(function(){
      toast('Dihapus');
      if(ST.page === 'dashboard') renderDashboard(); else filterJurnal();
    }).catch(function(e){ toast(e.message,'er'); });
  });
}
function cetakJurnal(){
  var events = ST.cache['jurnal_view'] || [];
  var dari = ST.cache['jurnal_dari'] || today();
  var sampai = ST.cache['jurnal_sampai'] || today();
  var label = ST.cache['jurnal_label'] || ((dari === sampai) ? ('Tanggal: ' + tglPanjang(dari)) : ('Periode: ' + tgl(dari) + ' s.d. ' + tgl(sampai)));
  var isAdmin = (ST.user.role === 'admin');
  var scope = isAdmin ? ' • Semua Guru BK' : (' • Milik: ' + (currentPetugasName()||'-'));
  var subJudul = label + ' • ' + tgl(dari) + ' s.d. ' + tgl(sampai) + scope;
  var headCols = isAdmin ? ['No','Tanggal','Kegiatan','Petugas','Keterangan'] : ['No','Tanggal','Kegiatan','Keterangan'];
  var tbl = '<table class="rp"><thead><tr>'+headCols.map(function(h){ return '<th>'+h+'</th>'; }).join('')+'</tr></thead><tbody>';
  var totalRows = 0;
  events.forEach(function(ev){ totalRows += (ev.Items||[]).length; });
  if(!totalRows){
    tbl += '<tr><td colspan="'+headCols.length+'" style="text-align:center;padding:22px">Tidak ada data</td></tr>';
  } else {
    events.forEach(function(ev, idx){
      var items = ev.Items || []; if(!items.length) return;
      items.forEach(function(it, j){
        tbl += '<tr>';
        if(j === 0){
          tbl += '<td rowspan="'+items.length+'" style="text-align:center;vertical-align:top;font-weight:bold">'+(idx+1)+'</td>';
          tbl += '<td rowspan="'+items.length+'" style="vertical-align:top">'+esc(tglPanjang(ev.Tanggal))+'</td>';
        }
        tbl += '<td style="white-space:pre-wrap">'+esc(it.kegiatan||'')+'</td>';
        if(isAdmin) tbl += '<td>'+esc(it.petugas||'-')+'</td>';
        tbl += '<td style="white-space:pre-wrap">'+esc(it.keterangan||'')+'</td>';
        tbl += '</tr>';
      });
    });
  }
  tbl += '</tbody></table>';
  var content = '<h2 class="rptitle">JURNAL HARIAN GURU BK</h2>'+'<div class="rpsub">'+esc(subJudul)+'</div>'+tbl;
  printRaw('Jurnal Harian Guru BK', content, ttdGuruBKHTML(sampai));
}
function exportJurnal(){
  var events = ST.cache['jurnal_view'] || [];
  var isAdmin = (ST.user.role === 'admin');
  var head = isAdmin ? ['No','Tanggal','Kegiatan','Petugas','Keterangan'] : ['No','Tanggal','Kegiatan','Keterangan'];
  var body = [];
  events.forEach(function(ev, idx){
    (ev.Items || []).forEach(function(it){
      if(isAdmin) body.push([idx+1, ev.Tanggal, it.kegiatan||'', it.petugas||'', it.keterangan||'']);
      else body.push([idx+1, ev.Tanggal, it.kegiatan||'', it.keterangan||'']);
    });
  });
  var dari = ST.cache['jurnal_dari'] || today();
  var sampai = ST.cache['jurnal_sampai'] || today();
  exportExcel('Jurnal_Harian_BK_'+dari+'_sd_'+sampai, head, body);
}

/* ================= KEHADIRAN ================= */
function renderKehadiran(){
  var activeTab = ST.khTab || 'harian';
  var tabs = [
    {id:'harian', label:'📅 Harian'},
    {id:'matriks', label:'📊 Absen Bulanan'},
    {id:'daftar', label:'📋 Daftar Absensi Hari Ini'},
    {id:'laporan', label:'📈 Laporan'}
  ];
  $('#main').innerHTML = '<div class="hd"><div><h2>📋 Presensi</h2><div class="sub">Kelola presensi siswa</div></div>'+
    '<div class="tools">' +
      '<button class="btn" onclick="formInputKehadiran()">+ Input / Edit Presensi</button>' +
      '<button class="btn4" onclick="kirimNotifikasiWAManual()" title="Kirim WA ke orang tua siswa S/I/A hari ini">📤 Kirim WA Orang Tua</button>' +
    '</div></div>'+
    tabBar(activeTab, tabs, 'khTabGo') + '<div id="khContent"></div>';
  khTabGo(activeTab);
}
function tabBar(activeId, tabs, callbackFn){
  return '<div class="tabs">' + tabs.map(function(t){ return '<button class="tab '+(t.id===activeId?'on':'')+'" data-tab="'+t.id+'" onclick="'+callbackFn+'(\''+t.id+'\')">'+t.label+'</button>'; }).join('') + '</div>';
}
function khTabGo(t){
  ST.khTab = t;
  $$('.tabs .tab').forEach(function(b){ b.classList.toggle('on', b.dataset.tab === t); });
  if(t === 'harian') renderKhHarian();
  else if(t === 'matriks') renderKhMatriks();
  else if(t === 'daftar') renderKhDaftar();
  else if(t === 'laporan') renderKhLaporan();
}
function renderKhHarian(){
  var tglView = ST.cache.khHarianTgl || today();
  ST.cache.khHarianTgl = tglView;
  var d = parseDate(tglView);
  var namaHari = gantiMingguKeAhad(d.toLocaleDateString('id-ID',{weekday:'long'}));
  var isLibur = isHariLibur(tglView);
  var labelLibur = isLibur ? labelHariLibur(tglView) : '';
  var html = '<div class="card">';
  html += '<div class="nav-harian">';
  html += '<button class="btn2" onclick="khHarianNav(-1)">← Sebelumnya</button>';
  html += '<div class="tanggal">';
  html += '<div class="hari">'+esc(tglPanjang(tglView))+'</div>';
  if(isLibur){ html += '<div class="ket"><span class="tag ty" style="font-size:11px">🔒 '+esc(labelLibur)+'</span></div>'; }
  else { html += '<div class="ket">Hari efektif — presensi dapat diinput</div>'; }
  html += '</div>';
  html += '<button class="btn2" onclick="khHarianNav(1)">Berikutnya →</button>';
  html += '</div>';
  html += '<div style="text-align:center;margin-bottom:14px">';
  html += '<button class="btn" onclick="formInputKehadiran(\''+tglView+'\')" '+(isLibur?'disabled title="Hari libur"':'')+'>+ Input Presensi Tanggal Ini</button>';
  html += '</div>';
  html += '<div id="khHarianContent"><div class="empty">Memuat…</div></div>';
  html += '</div>';
  $('#khContent').innerHTML = html;
  loadKhHarian(tglView);
}
function khHarianNav(delta){
  var cur = ST.cache.khHarianTgl || today();
  ST.cache.khHarianTgl = shiftDate(cur, delta);
  renderKhHarian();
}
function loadKhHarian(tglView){
  var vEl = $('#khHarianContent'); if(!vEl) return;
  getHadirRowsRange(tglView, tglView).then(function(rows){
    rows = rows || [];
    var ks = kelasSaya().slice().sort();
    if(!ks.length){ vEl.innerHTML = '<div class="empty">Tidak ada kelas ampu.</div>'; return; }
    var byKelas = {};
    ks.forEach(function(k){ byKelas[k] = {H:0,S:0,I:0,A:0,total:0}; });
    rows.forEach(function(r){
      if(String(r.Tanggal) !== tglView) return;
      var k = r.Kelas; if(!byKelas[k]) return;
      if(byKelas[k][r.Status] != null) byKelas[k][r.Status]++;
      byKelas[k].total++;
    });
    var sudahCount = ks.filter(function(k){ return byKelas[k].total > 0; }).length;
    var html = '<div class="stat" style="margin-bottom:14px">';
    html += '<div class="sc g"><div class="n">'+sudahCount+' / '+ks.length+'</div><div class="l">Kelas Sudah Presensi</div></div>';
    html += '<div class="sc y"><div class="n">'+(ks.length - sudahCount)+'</div><div class="l">Kelas Belum Presensi</div></div>';
    html += '</div>';
    html += '<div class="tw"><table style="min-width:auto"><thead><tr>'+
      '<th style="width:44px">No</th><th>Kelas</th><th style="width:120px;text-align:center">Status</th>'+
      '<th style="width:70px;text-align:center">S</th><th style="width:70px;text-align:center">I</th><th style="width:70px;text-align:center">A</th>'+
      '<th style="width:140px">Aksi</th></tr></thead><tbody>';
    ks.forEach(function(k, i){
      var data = byKelas[k];
      var sudah = data.total > 0;
      var statusCell = sudah ? '<span class="tag tg" title="Sudah presensi">✓</span>' : '<span class="tag ty">Belum</span>';
      var dis = (!sudah && isHariLibur(tglView)) ? 'disabled title="Hari libur"' : '';
      var btnLabel = sudah ? '✏️ Edit' : '+ Input';
      var btnClass = sudah ? 'btn2' : 'btn4';
      html += '<tr'+(sudah?' style="background:#f6fdf9"':'')+'>';
      html += '<td>'+(i+1)+'</td>';
      html += '<td><b>'+esc(k)+'</b></td>';
      html += '<td style="text-align:center">'+statusCell+'</td>';
      html += '<td style="text-align:center">'+(sudah?'<b style="color:#b9770e">'+data.S+'</b>':'-')+'</td>';
      html += '<td style="text-align:center">'+(sudah?'<b style="color:#1a73e8">'+data.I+'</b>':'-')+'</td>';
      html += '<td style="text-align:center">'+(sudah?'<b style="color:#c0392b">'+data.A+'</b>':'-')+'</td>';
      html += '<td class="right">';
      html += '<button class="'+btnClass+' btn-sm" onclick="formInputKehadiran(\''+tglView+'\',\''+esc(k)+'\')" '+dis+'>'+btnLabel+'</button>';
      html += '</td></tr>';
    });
    html += '</tbody></table></div>';
    vEl.innerHTML = html;
  }).catch(function(e){ vEl.innerHTML = '<div class="empty">Gagal: '+esc(e.message)+'</div>'; });
}
function renderKhDaftar(){
  var ks = (kelasSaya()||[]).slice().sort();
  $('#khContent').innerHTML = '<div class="card"><div class="hd" style="margin-bottom:10px"><div><h2>📋 Daftar Absensi Hari Ini</h2><div class="sub">Siswa berstatus Sakit, Izin, atau Alpa pada '+esc(tglPanjang(today()))+'</div></div><div class="tools"><button class="btn2 btn-sm" onclick="loadKhDaftar(true)">↻ Perbarui</button></div></div>'+
    '<div class="fbar" style="padding:8px 10px;margin-bottom:10px"><div class="fg" style="max-width:300px"><label>Kelas</label><select id="khDaftarKelas" onchange="loadKhDaftar(false)"><option value="">Semua kelas</option>'+ks.map(function(k){ return '<option value="'+esc(k)+'">'+esc(k)+'</option>'; }).join('')+'</select></div></div>'+
    '<div id="khDaftarView"><div class="empty">Memuat daftar absensi hari ini…</div></div></div>';
  loadKhDaftar(true);
}
function loadKhDaftar(forceRefresh){
  var vEl = $('#khDaftarView'); if(!vEl) return;
  var tanggal = today();
  var filterKelas = $('#khDaftarKelas') ? $('#khDaftarKelas').value : '';
  vEl.innerHTML = '<div class="empty">Memuat daftar absensi hari ini…</div>';
  getHadirRowsRange(tanggal, tanggal, !!forceRefresh).then(function(rows){
    rows = (rows||[]).filter(function(r){
      var status = String(r.Status||'').toUpperCase();
      return String(r.Tanggal||'').slice(0,10)===tanggal && ['S','I','A'].indexOf(status)>=0;
    });
    var ks = kelasSaya()||[];
    rows = rows.filter(function(r){ return ks.indexOf(r.Kelas)>=0 && (!filterKelas || String(r.Kelas)===filterKelas); });
    rows.sort(function(a,b){ return String(a.Kelas||'').localeCompare(String(b.Kelas||'')) || String(a.Nama||'').localeCompare(String(b.Nama||'')); });
    var nS=rows.filter(function(r){return String(r.Status).toUpperCase()==='S';}).length;
    var nI=rows.filter(function(r){return String(r.Status).toUpperCase()==='I';}).length;
    var nA=rows.filter(function(r){return String(r.Status).toUpperCase()==='A';}).length;
    var html = '<div class="stat" style="grid-template-columns:repeat(3,minmax(90px,1fr));gap:7px;margin-bottom:10px">'+
      '<div class="sc y" style="padding:8px 11px"><div class="n" style="font-size:21px">'+nS+'</div><div class="l">Sakit</div></div>'+
      '<div class="sc b" style="padding:8px 11px"><div class="n" style="font-size:21px">'+nI+'</div><div class="l">Izin</div></div>'+
      '<div class="sc r" style="padding:8px 11px"><div class="n" style="font-size:21px">'+nA+'</div><div class="l">Alpa</div></div></div>';
    if(!rows.length){
      html += '<div class="empty">Tidak ada siswa dengan status Sakit, Izin, atau Alpa'+(filterKelas?' di kelas '+esc(filterKelas):'')+' yang tercatat hari ini.</div>';
      vEl.innerHTML = html; return;
    }
    html += '<div class="tw"><table style="min-width:760px"><thead><tr><th style="width:38px">No</th><th style="width:85px">Kelas</th><th style="width:90px">NIS</th><th>Nama Siswa</th><th style="width:80px">Status</th><th>Keterangan</th><th style="width:62px;text-align:center">WhatsApp</th></tr></thead><tbody>';
    rows.forEach(function(r,i){
      var siswa = (ST.siswa||[]).find(function(s){ return String(s.NIS)===String(r.NIS); }) || {};
      var status = String(r.Status||'').toUpperCase();
      var statusLabel = status==='S' ? '<span class="tag ty">Sakit</span>' : status==='I' ? '<span class="tag tb">Izin</span>' : '<span class="tag tr">Alpa</span>';
      var nama = r.Nama || siswa.Nama || '-';
      var ket = String(r.Keterangan||'').trim();
      var nomor = String(siswa.NoHP||'').trim();
      var labelStatus = status==='S' ? 'Sakit' : status==='I' ? 'Izin' : 'Alpa';
      var pesan = 'Assalamu’alaikum '+nama+'. Kami dari BK SMAN 1 Klirong menghubungi terkait presensi hari ini ('+tglPanjang(tanggal)+'). Status presensi Anda tercatat: '+labelStatus+'. Keterangan: '+(ket||'tidak dicantumkan')+'. Mohon konfirmasi kepada pihak sekolah. Terima kasih.';
      var wa = nomor ? '<a class="wa-btn kh-wa-icon" href="'+esc(waLink(nama,nomor,pesan))+'" target="_blank" rel="noopener" title="Hubungi '+esc(nama)+' melalui WhatsApp" aria-label="Hubungi melalui WhatsApp">'+waIconSVG()+'</a>' : '<span class="kh-wa-disabled" title="Nomor HP siswa belum diisi" aria-label="Nomor HP belum diisi">'+waIconSVG()+'</span>';
      html += '<tr><td>'+(i+1)+'</td><td>'+esc(r.Kelas||siswa.Kelas||'-')+'</td><td>'+esc(r.NIS||'-')+'</td><td><b>'+esc(nama)+'</b></td><td>'+statusLabel+'</td><td style="white-space:pre-wrap">'+esc(ket||'-')+'</td><td style="text-align:center">'+wa+'</td></tr>';
    });
    html += '</tbody></table></div><div class="hint" style="margin-top:7px">Total siswa tidak masuk: <b>'+rows.length+'</b>. Tombol WhatsApp membuka pesan yang sudah disiapkan dan tetap perlu dikirim oleh pengguna.</div>';
    vEl.innerHTML = html;
  }).catch(function(e){ vEl.innerHTML = '<div class="notif err">Gagal memuat daftar absensi: '+esc(e.message)+'</div>'; });
}

function renderKhMatriks(){
  $('#khContent').innerHTML = '<div class="card"><h2>📊 Absen Bulanan Per Kelas</h2><div class="fbar">'+
    '<div class="fg"><label>Bulan</label><input type="month" id="mxBulan" value="'+today().slice(0,7)+'"></div>'+
    '<div class="fg"><label>Kelas</label><select id="mxKelas"><option value="">-- Pilih --</option>'+kelasSaya().map(function(k){ return '<option>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
    '<button class="btn" onclick="loadMatrix()">🔍 Tampilkan</button><button class="btn2" onclick="cetakMatrix()">🖨 Cetak</button><button class="btn4" onclick="exportMatrix()">⬇ Export</button><button class="btn5" onclick="formImportAbsenBulanan()">📥 Import</button>'+
    '</div><div id="mxView"><div class="empty">Pilih bulan dan kelas.</div></div></div>';
}
function loadMatrix(){
  var bulan = $('#mxBulan').value, kelas = $('#mxKelas').value, vEl = $('#mxView');
  if(!bulan || !kelas){ vEl.innerHTML = '<div class="empty">Pilih bulan dan kelas.</div>'; return; }
  vEl.innerHTML = '<div class="empty">Memuat…</div>';
  var parts0 = bulan.split('-');
  var daysInMonth0 = new Date(+parts0[0], +parts0[1], 0).getDate();
  var tglMulai = bulan + '-01';
  var tglSelesai = bulan + '-' + pad2(daysInMonth0);
  getHadirRowsRange(tglMulai, tglSelesai, true).then(function(rows){
    rows = rows || [];
    var filtered = rows.filter(function(r){ return String(r.Kelas) === kelas; });
    var parts = bulan.split('-'); var year = +parts[0], month = +parts[1];
    var daysInMonth = new Date(year, month, 0).getDate();
    var statusMap = {};
    filtered.forEach(function(r){ var nis = String(r.NIS); var day = parseInt(String(r.Tanggal).slice(8,10), 10); statusMap[nis] = statusMap[nis] || {}; statusMap[nis][day] = r.Status; });
    var siswa = (ST.siswa||[]).filter(function(s){ return s.Kelas === kelas; }).sort(function(a,b){ return a.Nama.localeCompare(b.Nama); });
    if(!siswa.length){ vEl.innerHTML = '<div class="empty">Tidak ada siswa.</div>'; return; }
    var html = '<div class="hint" style="margin-bottom:9px"><b>Kelas:</b> '+esc(kelas)+' &nbsp;•&nbsp; <b>Bulan:</b> '+monthName(month)+' '+year+'<br>A=Alpa, S=Sakit, I=Izin, H=Hadir</div>';
    html += '<div class="tw"><table style="font-size:11px;min-width:auto"><thead><tr><th style="width:36px">No</th><th style="min-width:150px">Nama</th>';
    for(var d=1;d<=daysInMonth;d++) html += '<th style="text-align:center;width:26px;padding:5px 3px">'+pad2(d)+'</th>';
    html += '<th style="width:34px;text-align:center">S</th><th style="width:34px;text-align:center">I</th><th style="width:34px;text-align:center">A</th></tr></thead><tbody>';
    siswa.forEach(function(s,i){
      var st = statusMap[String(s.NIS)] || {};
      html += '<tr><td>'+(i+1)+'</td><td>'+esc(s.Nama)+'</td>';
      var cS=0,cI=0,cA=0;
      for(var d=1;d<=daysInMonth;d++){
        var v = st[d] || '';
        if(v==='S') cS++; else if(v==='I') cI++; else if(v==='A') cA++;
        var colorStyle = '';
        if(v==='A') colorStyle = 'color:#c0392b;font-weight:700';
        else if(v==='S') colorStyle = 'color:#b9770e';
        else if(v==='I') colorStyle = 'color:#1a73e8';
        else if(v==='H') colorStyle = 'color:#1e8449';
        html += '<td style="text-align:center;padding:5px 3px;'+colorStyle+'">'+esc(v||'')+'</td>';
      }
      html += '<td style="text-align:center">'+cS+'</td><td style="text-align:center">'+cI+'</td><td style="text-align:center;font-weight:700">'+cA+'</td></tr>';
    });
    html += '</tbody></table></div>';
    vEl.innerHTML = html;
    ST.cache.matrix = { bulan:bulan, kelas:kelas, year:year, month:month, daysInMonth:daysInMonth, siswa:siswa, statusMap:statusMap };
  }).catch(function(e){ toast('Gagal: ' + e.message,'er'); });
}
function cetakMatrix(){
  var d = ST.cache.matrix; if(!d) return toast('Tampilkan dulu','er');
  var html = '<h2 class="rptitle">DAFTAR ABSEN SISWA BULANAN</h2><div class="rpsub">Kelas '+esc(d.kelas)+' • '+monthName(d.month)+' '+d.year+'</div>';
  html += '<table class="rp" style="font-size:8pt"><thead><tr><th>No</th><th>Nama</th>';
  for(var i=1;i<=d.daysInMonth;i++) html += '<th>'+pad2(i)+'</th>';
  html += '<th>S</th><th>I</th><th>A</th></tr></thead><tbody>';
  d.siswa.forEach(function(s,idx){
    var st = d.statusMap[String(s.NIS)] || {};
    html += '<tr><td>'+(idx+1)+'</td><td>'+esc(s.Nama)+'</td>';
    for(var i=1;i<=d.daysInMonth;i++) html += '<td style="text-align:center">'+esc(st[i]||'')+'</td>';
    var cS=0,cI=0,cA=0;
    for(var i=1;i<=d.daysInMonth;i++){ if(st[i]==='S')cS++; else if(st[i]==='I')cI++; else if(st[i]==='A')cA++; }
    html += '<td>'+cS+'</td><td>'+cI+'</td><td>'+cA+'</td></tr>';
  });
  html += '</tbody></table>';
  printRaw('Daftar Absen Bulanan', html, ttdGuruBKHTML(d.year+'-'+pad2(d.month)+'-'+pad2(d.daysInMonth)));
}
function exportMatrix(){
  var d = ST.cache.matrix; if(!d) return toast('Tampilkan dulu','er');
  var head = ['No','NIS','Nama','Bulan'];
  for(var i=1;i<=d.daysInMonth;i++) head.push(pad2(i));
  head.push('S','I','A');
  var body = d.siswa.map(function(s,idx){
    var st = d.statusMap[String(s.NIS)] || {};
    var row = [idx+1, s.NIS, s.Nama, d.bulan];
    for(var i=1;i<=d.daysInMonth;i++) row.push(st[i]||'');
    var cS=0,cI=0,cA=0;
    for(var i=1;i<=d.daysInMonth;i++){ if(st[i]==='S')cS++; else if(st[i]==='I')cI++; else if(st[i]==='A')cA++; }
    row.push(cS,cI,cA); return row;
  });
  exportExcel('Absen_'+d.kelas.replace(/\s+/g,'_')+'_'+d.bulan, head, body);
}
function renderKhLaporan(){
  var mode = ST.cache.khLaporanMode || 'bulan';
  var bln = ST.cache.khLaporanBulan || today().slice(0,7);
  var dari = ST.cache.khLaporanDari || (today().slice(0,7)+'-01');
  var sampai = ST.cache.khLaporanSampai || today();
  var kelas = ST.cache.khLaporanKelas || '';
  var filterHTML = '';
  if(mode === 'bulan'){ filterHTML = '<div class="fg"><label>Bulan</label><input type="month" id="lpBulan" value="'+bln+'" onchange="loadKhLaporan()"></div>'; }
  else { filterHTML = '<div class="fg"><label>Dari</label><input type="date" id="lpDari" value="'+dari+'" onchange="loadKhLaporan()"></div><div class="fg"><label>Sampai</label><input type="date" id="lpSampai" value="'+sampai+'" onchange="loadKhLaporan()"></div>'; }
  $('#khContent').innerHTML = '<div class="card"><h2>📈 Laporan Presensi Siswa</h2><div class="sub">Total = Sakit + Izin + Alpa</div>'+
    '<div class="fbar">'+
      '<div class="fg" style="max-width:200px"><label>Mode</label><select id="lpMode" onchange="gantiModeLaporan(this.value)"><option value="bulan"'+(mode==='bulan'?' selected':'')+'>Perbulan</option><option value="rentang"'+(mode==='rentang'?' selected':'')+'>Rentang</option></select></div>'+
      filterHTML+
      '<div class="fg"><label>Kelas</label><select id="lpKelasKH" onchange="loadKhLaporan()"><option value="">Semua</option>'+kelasSaya().map(function(k){ return '<option '+(k===kelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<button class="btn2" onclick="cetakKhLaporan()">🖨 Cetak</button><button class="btn4" onclick="exportKhLaporan()">⬇ Export</button>'+
    '</div><div id="lpView"><div class="empty">Memuat…</div></div></div>';
  loadKhLaporan();
}
function gantiModeLaporan(m){ ST.cache.khLaporanMode = m; renderKhLaporan(); }
function loadKhLaporan(){
  var mode = $('#lpMode').value; ST.cache.khLaporanMode = mode;
  var kelas = $('#lpKelasKH').value; ST.cache.khLaporanKelas = kelas;
  var bulan = '', dari = '', sampai = '', label = '';
  if(mode === 'bulan'){
    bulan = $('#lpBulan').value; if(!bulan) return; ST.cache.khLaporanBulan = bulan;
    var parts = bulan.split('-'); label = 'Bulan ' + monthName(+parts[1]) + ' ' + parts[0];
    dari = bulan + '-01'; var lastDay = new Date(+parts[0], +parts[1], 0).getDate(); sampai = bulan + '-' + pad2(lastDay);
  } else {
    dari = $('#lpDari').value; sampai = $('#lpSampai').value; if(!dari || !sampai) return;
    ST.cache.khLaporanDari = dari; ST.cache.khLaporanSampai = sampai;
    if(dari > sampai){ var t = dari; dari = sampai; sampai = t; }
    label = 'Rentang ' + tgl(dari) + ' s.d. ' + tgl(sampai);
  }
  var vEl = $('#lpView'); vEl.innerHTML = '<div class="empty">Memuat…</div>';
  getHadirRowsRange(dari, sampai).then(function(rows){
    rows = rows || []; var ks = kelasSaya();
    var filtered = rows.filter(function(r){ return ks.indexOf(r.Kelas) >= 0; });
    if(kelas) filtered = filtered.filter(function(r){ return r.Kelas === kelas; });
    var siswa = (ST.siswa||[]).filter(function(s){ return ks.indexOf(s.Kelas) >= 0 && (!kelas || s.Kelas === kelas); });
    var agg = {};
    filtered.forEach(function(r){ var k = String(r.NIS||''); if(!k) return; agg[k] = agg[k] || {S:0,I:0,A:0,H:0}; if(agg[k][r.Status] != null) agg[k][r.Status]++; });
    var html = '<div class="hint" style="margin-bottom:9px"><b>Mode:</b> '+(mode==='bulan'?'Perbulan':'Rentang')+' • <b>Periode:</b> '+esc(label)+(kelas?' • <b>Kelas:</b> '+esc(kelas):' • <b>Kelas:</b> Semua')+'</div>';
    if(!siswa.length){ vEl.innerHTML = html + '<div class="empty">Tidak ada siswa.</div>'; return; }
    var byClass = {};
    siswa.forEach(function(s){ byClass[s.Kelas] = byClass[s.Kelas] || []; byClass[s.Kelas].push(s); });
    Object.keys(byClass).sort().forEach(function(kls){
      var list = byClass[kls].sort(function(a,b){ return a.Nama.localeCompare(b.Nama); });
      html += '<h3 style="margin:16px 0 8px;font-size:14px;color:#0f4c81">Kelas: '+esc(kls)+'</h3>';
      html += '<div class="tw"><table><thead><tr><th style="width:44px">No</th><th>NIS</th><th>Nama</th><th style="text-align:center">S</th><th style="text-align:center">I</th><th style="text-align:center">A</th><th style="text-align:center">Total</th><th style="text-align:center">%Hadir</th></tr></thead><tbody>';
      list.forEach(function(s,i){
        var a = agg[String(s.NIS)] || {S:0,I:0,A:0,H:0};
        var totalNonHadir = a.S + a.I + a.A;
        var totalAll = a.H + totalNonHadir;
        var pct = totalAll ? Math.round((a.H/totalAll)*100) : 0;
        var pctColor = pct >= 90 ? 'tg' : pct >= 75 ? 'ty' : 'tr';
        html += '<tr><td>'+(i+1)+'</td><td>'+esc(s.NIS)+'</td><td>'+esc(s.Nama)+'</td>'+
          '<td style="text-align:center;color:#b9770e">'+a.S+'</td><td style="text-align:center;color:#1a73e8">'+a.I+'</td><td style="text-align:center;color:#c0392b"><b>'+a.A+'</b></td>'+
          '<td style="text-align:center"><b>'+totalNonHadir+'</b></td><td style="text-align:center"><span class="tag '+pctColor+'">'+pct+'%</span></td></tr>';
      });
      html += '</tbody></table></div>';
    });
    vEl.innerHTML = html;
    ST.cache.khLaporan = { mode:mode, bulan:bulan, dari:dari, sampai:sampai, label:label, kelas:kelas, siswa:siswa, agg:agg, byClass:byClass };
  }).catch(function(e){ toast('Gagal: ' + e.message,'er'); });
}
function cetakKhLaporan(){
  var d = ST.cache.khLaporan; if(!d) return toast('Tampilkan dulu','er');
  var head = ['No','NIS','Nama','Kelas','Sakit','Izin','Alpa','Total (S+I+A)','%Hadir']; var body = []; var idx = 1;
  Object.keys(d.byClass).sort().forEach(function(kls){
    d.byClass[kls].slice().sort(function(a,b){ return a.Nama.localeCompare(b.Nama); }).forEach(function(s){
      var a = d.agg[String(s.NIS)] || {S:0,I:0,A:0,H:0};
      var totalNonHadir = a.S + a.I + a.A; var totalAll = a.H + totalNonHadir;
      var pct = totalAll ? Math.round((a.H/totalAll)*100) : 0;
      body.push([idx++, s.NIS, s.Nama, s.Kelas, a.S, a.I, a.A, totalNonHadir, pct+'%']);
    });
  });
  var sub = d.label + ' • Kelas: ' + (d.kelas || 'Semua');
  printLaporan('LAPORAN PRESENSI SISWA', head, body, '', sub, ttdGuruBKHTML(d.sampai || ''));
}
function exportKhLaporan(){
  var d = ST.cache.khLaporan; if(!d) return toast('Tampilkan dulu','er');
  var head = ['No','NIS','Nama','Kelas','Sakit','Izin','Alpa','Total (S+I+A)','%Hadir']; var body = []; var idx = 1;
  Object.keys(d.byClass).sort().forEach(function(kls){
    d.byClass[kls].forEach(function(s){
      var a = d.agg[String(s.NIS)] || {S:0,I:0,A:0,H:0};
      var totalNonHadir = a.S + a.I + a.A; var totalAll = a.H + totalNonHadir;
      var pct = totalAll ? Math.round((a.H/totalAll)*100) : 0;
      body.push([idx++, s.NIS, s.Nama, s.Kelas, a.S, a.I, a.A, totalNonHadir, pct+'%']);
    });
  });
  var fname = d.mode === 'bulan' ? 'Laporan_Presensi_'+d.bulan+(d.kelas?'_'+d.kelas:'_Semua') : 'Laporan_Presensi_'+d.dari+'_sd_'+d.sampai+(d.kelas?'_'+d.kelas:'_Semua');
  exportExcel(fname, head, body);
}
function hapusHadir(id){
  confirmBox('Hapus data presensi ini?', function(){
    api('deleteRecord',{sheet:SH.HADIR, id:id}).then(function(){
      invalidateCache(SH.HADIR); _hadirLoading = {};
      toast('Dihapus');
      if(ST.khTab === 'daftar') loadKhDaftar(true); else renderKehadiran();
    }).catch(function(e){ toast(e.message,'er'); });
  });
}
function exportKehadiran(){
  var r = ST.cache.viewHadir || [];
  exportExcel('Presensi_'+today(), ['Tanggal','NIS','Nama','Kelas','Status','Keterangan'], r.map(function(x){ return [x.Tanggal,x.NIS,x.Nama,x.Kelas,x.Status,x.Keterangan]; }));
}
function cetakKehadiran(){
  var r = ST.cache.viewHadir || [];
  printLaporan('Laporan Presensi Siswa', ['No','Tanggal','NIS','Nama','Kelas','Status','Keterangan'], r.map(function(x,i){ return [i+1, tgl(x.Tanggal), x.NIS, x.Nama, x.Kelas, x.Status, x.Keterangan||'-']; }), '', '', ttdGuruBKHTML());
}
function formInputKehadiran(tglDefault, kelasDefault){
  var kelasList = kelasSaya(); if(!kelasList.length) return toast('Anda belum memiliki kelas ampu.','er');
  window._khIsEdit = false;
  var tgl = tglDefault || today();
  openModal('Input / Edit Presensi Siswa',
    '<div class="notif new" id="khNotif">✔ Pilih tanggal & kelas. Jika data sudah ada → mode EDIT. Jika belum → semua siswa Hadir.</div>'+
    '<div class="row r2">'+
      '<div class="fg"><label>Tanggal <span style="color:#e74c3c">*</span></label><input type="date" id="khTgl" value="'+tgl+'" onchange="cekKehadiran()"></div>'+
      '<div class="fg"><label>Kelas <span style="color:#e74c3c">*</span></label><select id="khKelas" onchange="cekKehadiran()"><option value="">-- Pilih --</option>'+kelasList.map(function(k){ return '<option '+(k===kelasDefault?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
    '</div>'+
    '<div id="khList"><div class="empty">Pilih tanggal dan kelas.</div></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanKehadiran()">💾 Simpan</button>', true);
  if(kelasDefault){ setTimeout(function(){ cekKehadiran(); }, 20); }
}
function cekKehadiran(){
  var tglV = $('#khTgl').value, kelas = $('#khKelas').value, listEl = $('#khList'), notifEl = $('#khNotif');
  if(!tglV || !kelas){ listEl.innerHTML = '<div class="empty">Pilih tanggal dan kelas.</div>'; window._khIsEdit = false; return; }
  if(isHariLibur(tglV)){
    var lbl = labelHariLibur(tglV);
    if(notifEl){ notifEl.className = 'notif edit'; notifEl.innerHTML = '🔒 <b>'+esc(lbl)+'</b> — Tidak dapat menginput presensi pada hari libur.'; }
    listEl.innerHTML = '<div class="empty">Hari libur — presensi tidak dapat diinput.</div>';
    window._khIsEdit = false; return;
  }
  listEl.innerHTML = '<div class="empty">Memuat…</div>';
  getHadirRowsRange(tglV, tglV).then(function(rows){
    rows = rows || [];
    var existing = rows.filter(function(r){ return String(r.Tanggal) === tglV && String(r.Kelas) === kelas; });
    var statusMap = {}, ketMap = {};
    existing.forEach(function(r){ statusMap[String(r.NIS)] = r.Status; ketMap[String(r.NIS)] = r.Keterangan || ''; });
    var isEdit = existing.length > 0; window._khIsEdit = isEdit;
    if(notifEl){
      if(isEdit){ notifEl.className = 'notif edit'; notifEl.innerHTML = '⚠️ Data <b>'+esc(kelas)+'</b> pada <b>'+tgl(tglV)+'</b> sudah ada. Mode EDIT.'; }
      else { notifEl.className = 'notif new'; notifEl.innerHTML = '✔ Mode TAMBAH BARU — semua siswa otomatis Hadir.'; }
    }
    renderKehadiranTable(kelas, statusMap, ketMap, !isEdit);
  }).catch(function(e){ toast('Gagal: ' + e.message,'er'); if(listEl) listEl.innerHTML = '<div class="empty">Gagal memuat.</div>'; });
}
function renderKehadiranTable(kelas, statusMap, ketMap, autoHadir){
  var listEl = $('#khList'); if(!listEl) return;
  var list = (ST.siswa||[]).filter(function(s){ return s.Kelas===kelas; }).sort(function(a,b){ return a.Nama.localeCompare(b.Nama); });
  if(!list.length){ listEl.innerHTML = '<div class="empty">Tidak ada siswa.</div>'; return; }
  statusMap = statusMap || {}; ketMap = ketMap || {};
  listEl.innerHTML = '<div style="margin-bottom:9px"><button class="btn4 btn-sm" onclick="setAllHadir(\'H\')">Semua Hadir</button> <button class="btn2 btn-sm" onclick="setAllHadir(\'\')">Reset</button></div>'+
    '<div class="tw"><table><thead><tr><th style="width:44px">No</th><th>Nama Siswa</th><th style="width:280px">Status</th><th style="width:220px">Keterangan</th></tr></thead><tbody>'+
    list.map(function(s,i){
      var cur = statusMap[String(s.NIS)] || (autoHadir ? 'H' : ''); var ket = ketMap[String(s.NIS)] || '';
      return '<tr data-nis="'+esc(s.NIS)+'" data-nama="'+esc(s.Nama)+'" data-st="'+esc(cur)+'"><td>'+(i+1)+'</td><td>'+esc(s.Nama)+'</td>'+
        '<td>'+['H','S','I','A'].map(function(st){
          var checked = (cur === st) ? 'checked' : '';
          return '<label style="display:inline-flex;align-items:center;gap:3px;margin-right:11px;font-weight:500;font-size:12.5px"><input type="radio" name="st_'+i+'" value="'+st+'" '+checked+' onchange="this.closest(\'tr\').dataset.st=\''+st+'\'" style="width:auto"> '+st+'</label>';
        }).join('')+'</td>'+
        '<td><input class="ketIn" value="'+esc(ket)+'" style="padding:5px 8px;font-size:12px"></td></tr>';
    }).join('')+'</tbody></table></div>';
}
function setAllHadir(v){ $$('#khList tbody tr').forEach(function(tr){ tr.dataset.st = v || ''; var rads = tr.querySelectorAll('input[type=radio]'); for(var i=0;i<rads.length;i++) rads[i].checked = v ? (rads[i].value === v) : false; }); }
function simpanKehadiran(){
  var tglV = $('#khTgl').value, kelas = $('#khKelas').value;
  if(!tglV || !kelas) return toast('Tanggal dan kelas wajib dipilih','er');
  if(isHariLibur(tglV)) return toast('Tidak dapat input presensi pada hari libur: '+labelHariLibur(tglV),'er');
  var rows = []; var anySt = false;
  $$('#khList tbody tr').forEach(function(tr){
    var st = tr.dataset.st; if(!st) return; anySt = true;
    var ketEl = tr.querySelector('.ketIn');
    rows.push({ Tanggal:tglV, NIS:tr.dataset.nis, Nama:tr.dataset.nama, Kelas:kelas, Status:st, Keterangan: ketEl ? ketEl.value.trim() : '', Petugas: ST.guru ? ST.guru.Nama : 'Admin' });
  });
  if(!anySt) return toast('Belum ada status','er');
  var isEdit = !!window._khIsEdit;
  var doSave = function(){
    var payload = { rows: rows };
    if(isEdit){ payload.replaceDate = tglV; payload.replaceKelas = kelas; }
    api('saveKehadiranBulk', payload).then(function(){
      invalidateCache(SH.HADIR); _hadirLoading = {};
      closeModal();
      toast(rows.length + ' data ' + (isEdit ? 'diperbarui' : 'disimpan'));
      if(ST.page === 'dashboard') renderDashboard(); else renderKehadiran();

      // ==== AUTO-SEND WA SETELAH PRESENSI ====
      var targetsWA = rows.filter(function(r){
        return ['S','I','A'].indexOf(String(r.Status||'').toUpperCase()) >= 0;
      });
      if(targetsWA.length && isWAAutoSend()){
        setTimeout(function(){
          jalankanKirimWAWithProgress(targetsWA, tglV, { skipDuplicates: true });
        }, 600);
      }
    }).catch(function(e){ toast(e.message,'er'); });
  };
  if(isEdit) confirmBox('Ganti data presensi lama untuk '+kelas+' tanggal '+tglV+'?', doSave);
  else doSave();
}
function formImportAbsenBulanan(){
  var kelasList = kelasSaya(); if(!kelasList.length) return toast('Anda belum memiliki kelas ampu','er');
  var bln = today().slice(0,7);
  var contohHeader = 'No,NIS,Nama,Bulan,01,02,03,...,31';
  openModal('📥 Import Absen (Multi-Bulan)',
    '<div class="notif info"><b>Format file:</b> .xlsx, .csv, .txt, .xls</div>'+
    '<div class="notif edit">⚠️ Data absen lama untuk kelas &amp; bulan yang terdeteksi akan <b>diganti</b>.</div>'+
    '<div class="notif new">💡 <b>Multi-bulan:</b> Tambahkan kolom <b>Bulan</b> (contoh: <code>2026-01</code>).</div>'+
    '<div class="row r2">'+
      '<div class="fg"><label>Kelas <span style="color:#e74c3c">*</span></label><select id="iaKelas"><option value="">-- Pilih --</option>'+kelasList.map(function(k){ return '<option>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<div class="fg"><label>Bulan Default (opsional)</label><input type="month" id="iaBulan" value="'+bln+'"></div>'+
    '</div>'+
    '<div class="fg"><label>Pilih File <span style="color:#e74c3c">*</span></label><input type="file" id="iaFile" accept=".csv,.txt,.xls,.xlsx"><div class="hint">Header contoh: <code>'+esc(contohHeader)+'</code></div></div>',
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="prosesImportAbsenBulanan()">📥 Proses &amp; Pratinjau</button>', true);
}
function prosesImportAbsenBulanan(){
  var kelas = $('#iaKelas').value;
  var defaultBulan = $('#iaBulan').value || '';
  if(!kelas) return toast('Pilih kelas','er');
  var f = $('#iaFile').files[0];
  if(!f) return toast('Pilih file','er');
  toast('Membaca…','inf');
  bacaFileMentah(f).then(function(arr){
    var parsed = parseAbsenArray(arr, kelas, defaultBulan);
    if(!parsed.monthList.length){ toast('Tidak ada baris yang cocok','er'); return; }
    tampilkanPreviewImport(parsed, kelas);
  }).catch(function(e){ toast('Gagal: ' + e.message, 'er'); });
}
function tampilkanPreviewImport(parsed, kelas){
  window._importAbsenCtx = { parsed: parsed, kelas: kelas };
  var previewList = parsed.monthList.map(function(b){
    var rows = parsed.byMonth[b];
    var totalE = rows.reduce(function(a,r){ return a + Object.keys(r.statuses).length; }, 0);
    return '<li><b>'+esc(b)+'</b> — '+rows.length+' siswa • '+totalE+' entri</li>';
  }).join('');
  var body = '<div class="notif info"><b>Target kelas:</b> '+esc(kelas)+'<br><b>Bulan terdeteksi:</b> '+parsed.monthList.length+' bulan <span class="small">('+esc(parsed.monthList.join(', '))+')</span><br><b>Total entri:</b> '+parsed.totalEntries+'</div>'+
    '<div class="notif edit">⚠️ Data absen lama untuk kelas &amp; bulan yang terdeteksi akan diganti seluruhnya.</div>'+
    (parsed.unmatched.length ? '<div class="notif edit">⚠️ '+parsed.unmatched.length+' baris tidak cocok: <span class="small">'+esc(parsed.unmatched.slice(0,6).join(', '))+(parsed.unmatched.length>6?'…':'')+'</span></div>' : '')+
    '<div class="fg"><label>Rincian per Bulan</label><div class="preview-list"><ul>'+previewList+'</ul></div></div>';
  openModal('Konfirmasi Import Multi-Bulan', body,
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn4" id="cfmImportBtn" onclick="konfirmasiImportAbsen()">✅ Import</button>', true);
}
function konfirmasiImportAbsen(){
  var ctx = window._importAbsenCtx; if(!ctx) return;
  var petugas = ST.guru ? ST.guru.Nama : 'Admin';
  var months = ctx.parsed.monthList.slice();
  if(!months.length) return toast('Tidak ada bulan untuk diimport','er');
  var btn = document.getElementById('cfmImportBtn');
  if(btn){ btn.disabled = true; btn.textContent = '⏳ Mengimport…'; }
  var totalInserted = 0, totalDeleted = 0, done = 0;
  var chain = Promise.resolve();
  months.forEach(function(b){
    chain = chain.then(function(){
      return api('importAbsenBulanan', { kelas:ctx.kelas, bulan:b, petugas:petugas, rows: ctx.parsed.byMonth[b] })
        .then(function(res){ totalInserted += (res.inserted||0); totalDeleted += (res.deleted||0); done++; });
    });
  });
  chain.then(function(){
    invalidateCache(SH.HADIR); _hadirLoading = {};
    closeModal(); window._importAbsenCtx = null;
    toast(totalInserted+' entri diimport • '+months.length+' bulan'+(totalDeleted?' • '+totalDeleted+' entri lama dihapus':''));
    var mxKelasEl = $('#mxKelas'); var mxBulanEl = $('#mxBulan');
    if(mxKelasEl) mxKelasEl.value = ctx.kelas;
    if(mxBulanEl && months.length >= 1) mxBulanEl.value = months[0];
    loadMatrix();
  }).catch(function(e){ toast('Gagal di bulan ke-'+(done+1)+': ' + e.message, 'er'); if(btn){ btn.disabled = false; btn.textContent = '✅ Import'; } });
}

var KEG_CFG = {
  klasikal:{sheet:SH.KLASIKAL, judul:'🏫 Bimbingan Klasikal', sub:'Kegiatan bimbingan klasikal'},
  kelompok:{sheet:SH.KELOMPOK, judul:'👥 Bimbingan Kelompok', sub:'Kegiatan bimbingan kelompok'},
  kr:{sheet:SH.KR, judul:'🏡 Home Visit', sub:'Kunjungan rumah'},
  konseling:{sheet:SH.KONSELING, judul:'💬 Konseling Individual', sub:'Layanan konseling individual'},
  panggilan:{sheet:SH.PANGGILAN, judul:'📞 Pertemuan Orang Tua', sub:'Pertemuan Guru BK dengan orang tua'},
  kasus:{sheet:SH.KASUS, judul:'⚖️ Catatan Kasus', sub:'Pencatatan kasus siswa'},
  konferensi:{sheet:SH.KONFERENSI, judul:'🤝 Konferensi Kasus', sub:'Konferensi kasus untuk penanganan bersama'},
  alihtangan:{sheet:SH.ALIHTANGAN, judul:'🔄 Alih Tangan Kasus', sub:'Pengalihan penanganan kasus ke pihak lain'},
  anekdot:{sheet:SH.ANEKDOT, judul:'📝 Catatan Anekdot', sub:'Catatan kejadian khusus siswa'},
  lainlain:{sheet:SH.LAINLAIN, judul:'📌 Lain-Lain', sub:'Kegiatan BK lainnya'}
};
var KEG_TAB = { anekdot:'daftar', konseling:'daftar' };
function renderKegiatan(key){
  var cfg = KEG_CFG[key];
  if(!cfg){ $('#main').innerHTML = '<div class="card"><div class="empty">Jenis kegiatan tidak dikenal.</div></div>'; return; }
  if(key === 'anekdot' || key === 'konseling'){ renderKegiatanTabbed(key, cfg); return; }
  var p = periodeGet(key);
  var scopeNote = '';
  if(key === 'kelompok' && ST.user.role === 'gurubk') scopeNote = ' — hanya menampilkan kegiatan yang Anda input sendiri';
  else if(key === 'kelompok' && ST.user.role === 'admin') scopeNote = ' — menampilkan semua kegiatan bimbingan kelompok';
  else if(key === 'lainlain' && ST.user.role === 'gurubk') scopeNote = ' — hanya menampilkan kegiatan yang Anda input sendiri';
  else if(key === 'lainlain' && ST.user.role === 'admin') scopeNote = ' — menampilkan semua kegiatan lain-lain';
  $('#main').innerHTML = '<div class="hd"><div><h2>'+cfg.judul+'</h2><div class="sub">'+cfg.sub+' — tampil per bulan atau rentang waktu (Sabtu/Ahad/libur dikecualikan)'+scopeNote+'</div></div>'+
    '<div class="tools"><button class="btn" onclick="formKegiatan(\''+key+'\')">+ Tambah</button><button class="btn4" onclick="exportKegiatan(\''+key+'\')">⬇ Export</button></div></div>'+
    '<div class="card"><div class="fbar">'+
      periodeBarHTML(key)+
      '<div class="fg"><label>Kelas</label><select id="kKelas"><option value="">Semua</option>'+kelasSaya().map(function(k){ return '<option>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<button class="btn" onclick="filterKegiatan(\''+key+'\')">🔍 Tampilkan</button>'+
      '<button class="btn2" onclick="periodeReset(\''+key+'\')">↺ Reset</button>'+
      '<button class="btn2" onclick="cetakRekapKegiatan(\''+key+'\')">🖨 Cetak</button>'+
    '</div><div id="tblKeg"><div class="empty">Memuat…</div></div></div>';
  filterKegiatan(key);
}
function renderKegiatanTabbed(key, cfg){
  var activeTab = KEG_TAB[key] || 'daftar';
  var headerHTML = '<div class="hd"><div><h2>'+cfg.judul+'</h2><div class="sub">'+cfg.sub+'</div></div>'+
    '<div class="tools"><button class="btn" onclick="formKegiatan(\''+key+'\')">+ Tambah</button></div></div>';
  var tabsHTML = '<div class="tabs">'+
    '<button class="tab '+(activeTab==='daftar'?'on':'')+'" onclick="kegTabGo(\''+key+'\',\'daftar\')">📋 Daftar Kegiatan</button>'+
    '<button class="tab '+(activeTab==='persiswa'?'on':'')+'" onclick="kegTabGo(\''+key+'\',\'persiswa\')">👤 Riwayat Per Siswa</button>'+
  '</div>';
  var contentHTML = '';
  if(activeTab === 'daftar'){
    contentHTML = '<div class="card"><div class="fbar">'+
      periodeBarHTML(key)+
      '<div class="fg"><label>Kelas</label><select id="kKelas"><option value="">Semua</option>'+kelasSaya().map(function(k){ return '<option>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<button class="btn" onclick="filterKegiatan(\''+key+'\')">🔍 Tampilkan</button>'+
      '<button class="btn2" onclick="periodeReset(\''+key+'\')">↺ Reset</button>'+
      '<button class="btn2" onclick="cetakRekapKegiatan(\''+key+'\')">🖨 Cetak</button>'+
      '<button class="btn4" onclick="exportKegiatan(\''+key+'\')">⬇ Export</button>'+
    '</div><div id="tblKeg"><div class="empty">Memuat…</div></div></div>';
    $('#main').innerHTML = headerHTML + tabsHTML + contentHTML;
    filterKegiatan(key);
  } else {
    var psKelas = ST.cache['ps_'+key+'_kelas'] || '';
    var psNis = ST.cache['ps_'+key+'_siswa'] || '';
    contentHTML = '<div class="card">'+
      '<div class="fbar">'+
        '<div class="fg"><label>Kelas</label><select id="psKelas" onchange="loadPerSiswaSiswaList(\''+key+'\')"><option value="">-- Pilih Kelas --</option>'+kelasSaya().map(function(k){ return '<option '+(k===psKelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
        '<div class="fg" style="flex:2;min-width:220px"><label>Nama Siswa</label><select id="psSiswa" onchange="loadPerSiswaData(\''+key+'\')"><option value="">-- Pilih Kelas Dulu --</option></select></div>'+
        '<button class="btn" onclick="loadPerSiswaData(\''+key+'\')">🔍 Tampilkan</button>'+
        '<button class="btn2" onclick="cetakPerSiswa(\''+key+'\')">🖨 Cetak Riwayat</button>'+
      '</div>'+
      '<div id="psContent"><div class="empty">Pilih kelas dan siswa untuk menampilkan riwayat.</div></div>'+
    '</div>';
    $('#main').innerHTML = headerHTML + tabsHTML + contentHTML;
    if(psKelas){
      loadPerSiswaSiswaList(key);
      var sel = document.getElementById('psSiswa');
      if(sel && psNis){ sel.value = psNis; loadPerSiswaData(key); }
    }
  }
}
function kegTabGo(key, tab){ KEG_TAB[key] = tab; renderKegiatan(key); }
function loadPerSiswaSiswaList(key){
  var selKelas = document.getElementById('psKelas'); if(!selKelas) return;
  var kelas = selKelas.value;
  ST.cache['ps_'+key+'_kelas'] = kelas;
  var sel = document.getElementById('psSiswa'); if(!sel) return;
  if(!kelas){ sel.innerHTML = '<option value="">-- Pilih Kelas Dulu --</option>'; return; }
  var list = (ST.siswa||[]).filter(function(s){ return s.Kelas === kelas; }).sort(function(a,b){ return a.Nama.localeCompare(b.Nama); });
  sel.innerHTML = '<option value="">-- Pilih Siswa --</option>' + list.map(function(s){ return '<option value="'+esc(s.NIS)+'">'+esc(s.Nama)+' ('+esc(s.NIS)+')</option>'; }).join('');
}
function loadPerSiswaData(key){
  var sel = document.getElementById('psSiswa');
  var nis = sel ? sel.value : '';
  ST.cache['ps_'+key+'_siswa'] = nis;
  var el = document.getElementById('psContent'); if(!el) return;
  if(!nis){ el.innerHTML = '<div class="empty">Pilih siswa untuk menampilkan riwayat.</div>'; return; }
  el.innerHTML = '<div class="empty">Memuat…</div>';
  var sheet = KEG_CFG[key].sheet;
  api('getData', { sheet: sheet }).then(function(rows){
    rows = (rows||[]).filter(function(r){ return String(r.NIS) === String(nis); });
    rows.sort(function(a,b){ return String(b.Tanggal).localeCompare(String(a.Tanggal)); });
    ST.cache['ps_'+key+'_rows'] = rows;
    renderPerSiswaContent(key, nis, rows);
  }).catch(function(e){ el.innerHTML = '<div class="empty">Gagal: '+esc(e.message)+'</div>'; });
}
function renderPerSiswaContent(key, nis, rows){
  var s = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(nis); });
  var el = document.getElementById('psContent'); if(!el) return;
  if(!s){ el.innerHTML = '<div class="empty">Data siswa tidak ditemukan.</div>'; return; }
  var identityHTML = buildIdentitasSiswaHTML(s);
  var cols = COLS_PERSISWA[key];
  var judul = key === 'anekdot' ? 'Catatan Anekdot' : 'Riwayat Konseling';
  var tableHTML = '';
  if(!rows.length){ tableHTML = '<div class="empty">Belum ada '+judul.toLowerCase()+' untuk siswa ini.</div>'; }
  else {
    tableHTML = '<div class="tw"><table><thead><tr><th style="width:44px">No</th>'+cols.map(function(c){ return '<th>'+c.l+'</th>'; }).join('')+'<th style="width:140px;text-align:center">Aksi</th></tr></thead><tbody>'+
      rows.map(function(r,i){
        return '<tr><td>'+(i+1)+'</td>'+cols.map(function(c){ var v = c.f ? c.f(r[c.k], r) : esc(r[c.k]||'-'); return '<td>'+v+'</td>'; }).join('')+
        '<td style="text-align:center"><button class="btn5 btn-sm" onclick="cetakKegiatan(\''+key+'\',\''+r.ID+'\')" title="Cetak detail">🖨</button></td></tr>';
      }).join('')+'</tbody></table></div>';
  }
  el.innerHTML = '<div class="notif info" style="margin-bottom:12px">📊 Total <b>'+rows.length+'</b> '+judul.toLowerCase()+' tercatat untuk siswa ini.</div>'+ identityHTML + tableHTML;
}
function buildIdentitasSiswaHTML(s){
  var jkLabel = s.JK === 'L' ? 'Laki-laki' : s.JK === 'P' ? 'Perempuan' : '-';
  var rows = [['Nama Siswa', '<b>'+esc(s.Nama||'-')+'</b>'],['NIS', esc(s.NIS||'-')],['Kelas', esc(s.Kelas||'-')],['Jenis Kelamin', esc(jkLabel)]];
  if(s.NoHP) rows.push(['No. HP / WhatsApp', esc(s.NoHP)]);
  var html = '<div class="card" style="background:#f7fafd;border-left:4px solid #1a73e8;margin-bottom:12px;padding:14px 16px">'+
    '<div style="font-size:12px;font-weight:700;color:#0f4c81;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">👤 Identitas Siswa</div>'+
    '<table style="min-width:auto;width:100%"><tbody>';
  rows.forEach(function(r){
    html += '<tr><td style="padding:4px 8px 4px 0;width:170px;color:#5a6b7c;font-weight:600;font-size:12.5px;border:none">'+r[0]+'</td>'+
      '<td style="padding:4px 0;font-size:13px;border:none">'+r[1]+'</td></tr>';
  });
  html += '</tbody></table></div>';
  return html;
}
function buildIdentitasSiswaPrintHTML(s){
  var jkLabel = s.JK === 'L' ? 'Laki-laki' : s.JK === 'P' ? 'Perempuan' : '-';
  var rows = [['Nama Siswa', esc(s.Nama||'-')],['NIS', esc(s.NIS||'-')],['Kelas', esc(s.Kelas||'-')],['Jenis Kelamin', esc(jkLabel)]];
  if(s.NoHP) rows.push(['No. HP / WhatsApp', esc(s.NoHP)]);
  var html = '<table class="rp" style="margin-bottom:14px"><tbody>';
  rows.forEach(function(r){ html += '<tr><td style="width:200px;background:#f5f8fc;font-weight:bold">'+r[0]+'</td><td>'+r[1]+'</td></tr>'; });
  html += '</tbody></table>';
  return html;
}
function cetakPerSiswa(key){
  var sel = document.getElementById('psSiswa');
  var nis = sel ? sel.value : '';
  if(!nis) return toast('Pilih siswa terlebih dahulu','er');
  var rows = ST.cache['ps_'+key+'_rows'] || [];
  var s = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(nis); });
  if(!s) return toast('Data siswa tidak ditemukan','er');
  var judul = key === 'anekdot' ? 'CATATAN ANEKDOT SISWA' : 'RIWAYAT KONSELING INDIVIDUAL';
  var cols = COLS_PERSISWA_PRINT[key] || COLS_PERSISWA[key];
  var identHTML = buildIdentitasSiswaPrintHTML(s);
  var tglAkhir = rows.length ? rows[0].Tanggal : today();
  var tbl = '<table class="rp"><thead><tr><th style="width:36px">No</th>'+cols.map(function(c){ return '<th>'+c.l+'</th>'; }).join('')+'</tr></thead><tbody>';
  if(!rows.length){ tbl += '<tr><td colspan="'+(cols.length+1)+'" style="text-align:center;padding:22px">Belum ada catatan</td></tr>'; }
  else { rows.forEach(function(r,i){ tbl += '<tr><td>'+(i+1)+'</td>'+cols.map(function(c){ return '<td style="white-space:pre-wrap">'+esc(r[c.k]||'-')+'</td>'; }).join('')+'</tr>'; }); }
  tbl += '</tbody></table>';
  var content = '<h2 class="rptitle">'+esc(judul)+'</h2>'+ identHTML + tbl;
  printRaw(judul, content, ttdGuruBKHTML(tglAkhir));
}
function tabelKegiatan(key, rows){
  if(!rows || !rows.length) return '<div class="empty">Belum ada kegiatan pada periode ini.</div>';
  var cols = COLS[key];
  if(!cols) return '<div class="empty">Konfigurasi kolom tidak ditemukan.</div>';
  rows = rows.slice().sort(function(a,b){ return String(b.Tanggal).localeCompare(String(a.Tanggal)); });
  return '<div class="tw"><table><thead><tr><th>No</th>'+cols.map(function(c){ return '<th>'+c.l+'</th>'; }).join('')+'<th style="width:200px">Aksi</th></tr></thead><tbody>'+
    rows.map(function(r,i){
      return '<tr><td>'+(i+1)+'</td>'+cols.map(function(c){ var v = c.f ? c.f(r[c.k], r) : esc(r[c.k]||'-'); return '<td>'+v+'</td>'; }).join('')+
        '<td class="right">'+
          '<button class="btn2 btn-sm" onclick="detailKegiatan(\''+key+'\',\''+r.ID+'\')">Detail</button>'+
          '<button class="btn5 btn-sm" onclick="cetakKegiatan(\''+key+'\',\''+r.ID+'\')">🖨</button>'+
          '<button class="btn2 btn-sm" onclick="formKegiatan(\''+key+'\',\''+r.ID+'\')">Edit</button>'+
          '<button class="btn3 btn-sm" onclick="hapusKegiatan(\''+key+'\',\''+r.ID+'\')">Hapus</button>'+
        '</td></tr>';
    }).join('')+'</tbody></table></div>';
}
function formKegiatan(key, id, preset){
  var cfg = KEG_CFG[key];
  var data = id ? (ST.cache[key]||[]).find(function(r){ return r.ID===id; }) : null;
  if(!data && preset) data = preset;
  var formHTML = buildForm(key, data);
  if(key === 'kelompok' || key === 'lainlain'){
    if(ST.user && ST.user.role === 'admin'){
      var currentPetugas = (data && data.Petugas) || '';
      var gurubkNames = (ST.gurubk||[]).map(function(g){ return g.Nama; }).filter(Boolean);
      var label = key === 'lainlain' ? 'Guru BK Penginput' : 'Guru BK Pelaksana';
      var extra = '<div class="fg" style="margin-top:8px"><label>'+label+' <span style="color:#e74c3c">*</span></label>'+
        '<select id="f_Petugas"><option value="">-- Pilih Guru BK --</option>'+
        gurubkNames.map(function(n){ return '<option '+(n===currentPetugas?'selected':'')+'>'+esc(n)+'</option>'; }).join('')+
        '</select><div class="hint">Hanya Guru BK yang dipilih yang dapat melihat data ini.</div></div>';
      formHTML = formHTML + extra;
    } else {
      var ownerName = currentPetugasName() || '(Anda)';
      var info = '<div class="notif info" style="margin-top:8px">📝 Data akan tercatat atas nama <b>'+esc(ownerName)+'</b>.</div>';
      formHTML = formHTML + info;
    }
  }
  openModal((id?'Edit — ':'Tambah — ')+cfg.judul.replace(/^[^\w]+ /,''), formHTML,
    '<button class="btn2" onclick="closeModal()">Batal</button><button class="btn" onclick="simpanKegiatan(\''+key+'\',\''+(id||'')+'\')">💾 Simpan</button>', true);
  var kEl = document.getElementById('f_Kelas');
  if(kEl && kEl.value){ onKelasChange(kEl.value); if(data && data.NIS){ var s = document.getElementById('f_NIS'); if(s) s.value = data.NIS; } }
  if(FORMS[key]) FORMS[key].forEach(function(f){ if(f.t === 'multisiswa' || f.t === 'multisiswa-all') updateMultiSiswa(f.k); });
  initSigPads();
}
async function simpanKegiatan(key, id){
  var d = collectForm(key); if(!d) return;
  d.ID = id || uid();
  var cekHari = cekHariEfektif(d.Tanggal);
  if(!cekHari.ok){ toast(cekHari.msg, 'er'); return; }
  if(key === 'konseling' && !d.JenisLayanan) d.JenisLayanan = 'Konseling Individual';
  if(key === 'kelompok' || key === 'lainlain'){
    if(id){
      var existing = (ST.cache[key]||[]).find(function(r){ return String(r.ID)===String(id); });
      if(existing && existing.Petugas && !d.Petugas) d.Petugas = existing.Petugas;
    }
    if(!d.Petugas){
      if(ST.user && ST.user.role === 'admin'){ toast('Pilih Guru BK ' + (key === 'lainlain' ? 'Penginput' : 'Pelaksana') + ' terlebih dahulu','er'); return; }
      d.Petugas = currentPetugasName();
    }
    if(key === 'kelompok' && d.Anggota){
      var nisList = d.Anggota.split(';').map(function(s){ return s.trim().split(' - ')[0].trim(); }).filter(Boolean);
      var kelasSet = {};
      nisList.forEach(function(nis){ var s = ST.siswa.find(function(x){ return String(x.NIS) === nis; }); if(s && s.Kelas) kelasSet[s.Kelas] = 1; });
      d.Kelas = Object.keys(kelasSet).join(', '); d.JumlahAnggota = nisList.length;
      var st = hitungPresensiKelompok(d.Anggota, d.Tanggal);
      if(st.hasData){ d.JumlahHadir = st.hadir; d.JumlahTidakHadir = st.tidak; }
    }
  }
  try {
    await api('saveRecord',{sheet:KEG_CFG[key].sheet, data:d});
    closeModal(); toast('Disimpan');
    var arr = ST.cache[key] || [];
    var idx = -1;
    for(var i=0;i<arr.length;i++){ if(String(arr[i].ID) === String(d.ID)){ idx = i; break; } }
    if(idx >= 0) arr[idx] = d; else arr.push(d);
    setCache(key, arr);
    filterKegiatan(key);
  } catch(e){ console.error('[simpanKegiatan] gagal', key, d, e); toast('Gagal simpan: ' + (e && e.message ? e.message : 'kesalahan tidak diketahui'), 'er'); }
}
function hapusKegiatan(key, id){
  confirmBox('Hapus kegiatan ini?', function(){
    api('deleteRecord',{sheet:KEG_CFG[key].sheet, id:id}).then(function(){
      toast('Dihapus');
      var arr = ST.cache[key] || [];
      setCache(key, arr.filter(function(x){ return String(x.ID) !== String(id); }));
      filterKegiatan(key);
    }).catch(function(e){ toast(e.message,'er'); });
  });
}
function filterKegiatan(key){
  var p = periodeGet(key);
  var dari = p.dari, sampai = p.sampai;
  var kelas = $('#kKelas') ? $('#kKelas').value : '';
  var vEl = $('#tblKeg'); if(vEl) vEl.innerHTML = '<div class="empty">Memuat…</div>';
  var promises = [api('getData',{sheet:KEG_CFG[key].sheet, since:dari, until:sampai})];
  if(key === 'klasikal' || key === 'kelompok') promises.push(getHadirRowsRange(dari, sampai).catch(function(){ return []; }));
  Promise.all(promises).then(function(res){
    var rows = res[0] || [];
    if(key === 'kelompok' || key === 'lainlain') rows = rows.filter(isKegiatanOwner);
    setCache(key, rows);
    if(key === 'klasikal') ST.cache.hadirKlasikal = res[1] || [];
    if(key === 'kelompok') ST.cache.hadirKelompok = res[1] || [];
    var r = rows.filter(function(x){
      if(!x.Kelas) return true;
      var kelasRow = String(x.Kelas).split(',').map(function(y){ return y.trim(); });
      return kelasRow.some(function(k){ return kelasSaya().indexOf(k) >= 0; });
    });
    if(kelas) r = r.filter(function(x){ var kelasRow = String(x.Kelas||'').split(',').map(function(y){ return y.trim(); }); return kelasRow.indexOf(kelas) >= 0; });
    ST.cache['v_'+key] = r;
    if(vEl){
      var scopeInfo = '';
      if(key === 'kelompok' || key === 'lainlain') scopeInfo = (ST.user.role === 'admin') ? ' • <b>Semua Guru BK</b>' : ' • <b>Milik saya sendiri</b>';
      var info = '<div class="hint" style="margin-bottom:9px">📅 Periode: <b>'+esc(p.label)+'</b> ('+tgl(dari)+' — '+tgl(sampai)+') • Total: <b>'+r.length+'</b> kegiatan'+(kelas?' • Kelas: <b>'+esc(kelas)+'</b>':'')+scopeInfo+'</div>';
      vEl.innerHTML = info + tabelKegiatan(key, r);
    }
  }).catch(function(e){ if(vEl) vEl.innerHTML = '<div class="empty">'+esc(e.message)+'</div>'; });
}
function exportKegiatan(key){
  var rows = ST.cache['v_'+key] || []; var cols = COLS[key];
  if(!cols) return toast('Konfigurasi kolom tidak ditemukan','er');
  var p = periodeGet(key);
  exportExcel('Rekap_'+key+'_'+dariUntukNama(p), cols.map(function(c){ return c.l; }), rows.map(function(r){ return cols.map(function(c){ return r[c.k]; }); }));
}
function dariUntukNama(p){ if(p.mode === 'bulan') return p.bulan; return p.dari + '_sd_' + p.sampai; }
function detailKegiatan(key, id){
  var r = (ST.cache[key]||[]).find(function(x){ return x.ID===id; }); if(!r) return;
  var f = FORMS[key]; if(!f) return toast('Format detail tidak tersedia','er');
  var html = '<table style="min-width:auto;width:100%">';
  f.forEach(function(fd){
    if(fd.t==='sig') return;
    var v = r[fd.k];
    if(fd.t==='date') v = tglPanjang(v);
    if(fd.t==='multisiswa' || fd.t==='multisiswa-all'){
      var list = formatAnggotaKelompok(v);
      html += '<tr><th style="width:190px;background:#f5f8fc">'+fd.l+'</th><td>'+(list.length ? '<ul style="margin:0;padding-left:20px">'+list.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('')+'</ul>' : '-')+'</td></tr>';
      return;
    }
    if(!v) v = '-';
    html += '<tr><th style="width:190px;background:#f5f8fc">'+fd.l+'</th><td style="white-space:pre-wrap">'+esc(v)+'</td></tr>';
  });
  if(key === 'kelompok' || key === 'lainlain'){
    html += '<tr><th style="width:190px;background:#f5f8fc">Guru BK Pelaksana</th><td>'+(r.Petugas ? '<span class="tag tb">'+esc(r.Petugas)+'</span>' : '<span class="tag tgray">-</span>')+'</td></tr>';
    if(key === 'kelompok'){
      var st = hitungPresensiKelompok(r.Anggota, r.Tanggal);
      var hadirTxt, tidakTxt;
      if(st.hasData){ hadirTxt = st.hadir + ' siswa'; tidakTxt = st.tidak + ' siswa'; }
      else { hadirTxt = (r.JumlahHadir||0) + ' siswa'; tidakTxt = (r.JumlahTidakHadir||0) + ' siswa'; }
      html += '<tr><th style="width:190px;background:#f5f8fc">Jumlah Hadir</th><td style="color:#1e8449;font-weight:700">'+hadirTxt+'</td></tr>';
      html += '<tr><th style="width:190px;background:#f5f8fc">Jumlah Tidak Hadir</th><td style="color:#c0392b;font-weight:700">'+tidakTxt+'</td></tr>';
    }
  }
  if(key === 'kr'){
    html += '<tr><th style="background:#f5f8fc">TTD</th><td><div style="display:flex;gap:18px;flex-wrap:wrap">'+
      '<div><div class="small">Guru BK</div>'+(r.TTD1?'<img src="'+r.TTD1+'" style="max-height:60px">':'<div class="small">-</div>')+'</div>'+
      '<div><div class="small">Guru/Wali Kelas</div>'+(r.TTD2?'<img src="'+r.TTD2+'" style="max-height:60px">':'<div class="small">-</div>')+'</div>'+
      '<div><div class="small">Orang Tua</div>'+(r.TTD_Ortu?'<img src="'+r.TTD_Ortu+'" style="max-height:60px">':'<div class="small">-</div>')+'</div>'+
      '</div></td></tr>';
  }
  if(key==='panggilan'){ html += '<tr><th style="background:#f5f8fc">TTD Orang Tua/Wali</th><td>'+(r.TTD_Ortu?'<img src="'+r.TTD_Ortu+'" style="max-height:80px">':'<span class="small">-</span>')+'</td></tr>'; }
  html += '</table>';
  openModal('Detail Kegiatan', html, '<button class="btn2" onclick="closeModal()">Tutup</button><button class="btn" onclick="cetakKegiatan(\''+key+'\',\''+id+'\')">🖨 Cetak</button>', true);
}
function cetakKegiatan(key, id){
  var r = (ST.cache[key]||[]).find(function(x){ return x.ID===id; }); if(!r) return;
  var titleMap = {
    klasikal:'LAPORAN PELAKSANAAN BIMBINGAN KLASIKAL', kelompok:'LAPORAN PELAKSANAAN BIMBINGAN KELOMPOK',
    kr:'LAPORAN PELAKSANAAN HOME VISIT', konseling:'LAPORAN PELAKSANAAN KONSELING INDIVIDUAL',
    panggilan:'LAPORAN PERTEMUAN ORANG TUA / WALI', kasus:'CATATAN KASUS SISWA',
    konferensi:'LAPORAN KONFERENSI KASUS', alihtangan:'LAPORAN ALIH TANGAN KASUS',
    anekdot:'CATATAN ANEKDOT SISWA', lainlain:'LAPORAN KEGIATAN BK LAIN-LAIN'
  };
  var judul = titleMap[key] || 'LAPORAN KEGIATAN BK';
  function line(l,v){ return v ? '<tr><td style="width:200px;font-weight:600;background:#f7fafd">'+l+'</td><td style="white-space:pre-wrap">'+esc(v)+'</td></tr>' : ''; }
  function lineHTML(l, html){ return html ? '<tr><td style="width:200px;font-weight:600;background:#f7fafd">'+l+'</td><td>'+html+'</td></tr>' : ''; }
  var body = '<h2 class="rptitle">'+esc(judul)+'</h2>';
  if((key === 'anekdot' || key === 'konseling') && r.NIS){
    var sId = (ST.siswa||[]).find(function(x){ return String(x.NIS) === String(r.NIS); });
    if(sId){ body += buildIdentitasSiswaPrintHTML(sId); }
  }
  var tabelIsi = '';
  if(key==='klasikal'){
    var st = hitungPresensiKlasikal(r.Tanggal, r.Kelas);
    var hadirTxt, tidakTxt;
    if(st.hasData){ hadirTxt = st.H + ' siswa'; tidakTxt = st.TH + ' siswa  [S:'+st.S+' • I:'+st.I+' • A:'+st.A+']'; }
    else { hadirTxt = (r.JumlahHadir||0) + ' siswa (manual)'; var jml = r.JumlahSiswa || 0; tidakTxt = Math.max(jml - (r.JumlahHadir||0), 0) + ' siswa (manual)'; }
    tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Jam Ke-',r.JamKe)+line('Kelas',r.Kelas)+line('Topik / Materi',r.Topik)+line('Tujuan Layanan',r.Tujuan)+line('Metode',r.Metode)+line('Media',r.Media)+line('Jumlah Siswa',r.JumlahSiswa)+line('Jumlah Hadir',hadirTxt)+line('Jumlah Tidak Hadir',tidakTxt)+line('Catatan / Evaluasi',r.Catatan)+'</table>';
  } else if(key==='kelompok'){
    var anggotaList = formatAnggotaKelompok(r.Anggota);
    var anggotaHTML = anggotaList.length ? '<ol style="margin:0;padding-left:20px">'+anggotaList.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('')+'</ol>' : '-';
    var stK = hitungPresensiKelompok(r.Anggota, r.Tanggal);
    var hadirK = stK.hasData ? stK.hadir : (r.JumlahHadir||0);
    var tidakK = stK.hasData ? stK.tidak : (r.JumlahTidakHadir||0);
    tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Guru BK Pelaksana',r.Petugas)+line('Topik Bahasan',r.Topik)+line('Tujuan',r.Tujuan)+lineHTML('Anggota Kelompok ('+anggotaList.length+' siswa)', anggotaHTML)+line('Jumlah Hadir',hadirK+' siswa')+line('Jumlah Tidak Hadir',tidakK+' siswa')+line('Hasil / Kesimpulan',r.Hasil)+'</table>';
  } else if(key==='kr'){
    tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+line('Alamat Tujuan',r.AlamatTujuan)+line('Permasalahan',r.Masalah)+line('Tujuan Kunjungan',r.Tujuan)+line('Hasil Kunjungan',r.Hasil)+line('Rencana Tindak Lanjut',r.Rencana)+'</table>';
    var blokTTD = '<div style="margin-top:44px;display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:nowrap">';
    blokTTD += '<div style="flex:1;text-align:center;min-width:200px">'+ttdGuruWaliKelasHTML(r.Petugas2, r.TTD2)+'</div>';
    blokTTD += '<div style="flex:1;text-align:center;min-width:200px">'+ttdOrangTuaHTML(r.NamaOrtu, r.TTD_Ortu)+'</div>';
    blokTTD += '</div>';
    blokTTD += '<div style="margin-top:36px;display:flex;justify-content:flex-end"><div style="text-align:center;min-width:250px">'+
      '<div>Klirong, '+parseDate(r.Tanggal).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})+'</div>'+
      '<div>Guru Bimbingan dan Konseling,</div>'+
      '<div style="height:85px;padding-top:6px">'+(r.TTD1?'<img src="'+esc(r.TTD1)+'" style="max-height:75px;max-width:220px;object-fit:contain">':'')+'</div>'+
      '<div style="font-weight:700;text-decoration:underline">'+esc(r.Petugas1||'................................')+'</div></div></div>';
    printRaw(judul, body + tabelIsi + blokTTD, '');
    return;
  } else if(key==='konseling'){ tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+line('Permasalahan',r.Masalah)+line('Tujuan Konseling',r.Tujuan)+line('Pendekatan / Teknik',r.Pendekatan)+line('Hasil Konseling',r.Hasil)+line('Rencana Tindak Lanjut',r.Rencana)+'</table>'; }
  else if(key==='panggilan'){
    tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+line('Nama Orang Tua / Wali',r.NamaOrtu)+line('Hubungan',r.HubunganOrtu)+line('Permasalahan',r.Masalah)+line('Tujuan Pertemuan',r.Tujuan)+line('Hasil Pertemuan',r.Hasil)+line('Rencana Tindak Lanjut',r.Rencana)+'</table>';
    var blokTTDPang = '<div style="margin-top:44px;display:flex;justify-content:space-between;align-items:flex-start;gap:20px;flex-wrap:nowrap">';
    blokTTDPang += '<div style="flex:1;text-align:center;min-width:200px">'+ttdOrangTuaHTML(r.NamaOrtu, r.TTD_Ortu)+'</div>';
    blokTTDPang += '<div style="flex:1;text-align:center;min-width:200px">'+
      '<div>Klirong, '+parseDate(r.Tanggal).toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})+'</div>'+
      '<div>Guru Bimbingan dan Konseling,</div>'+
      '<div style="height:85px;padding-top:6px">'+(getGuruBKTTD()?'<img src="'+esc(getGuruBKTTD())+'" style="max-height:75px;max-width:220px;object-fit:contain">':'')+'</div>'+
      '<div style="font-weight:700;text-decoration:underline">'+esc(getGuruBKNama()||'................................')+'</div>'+
      '<div>NIP. '+esc(getGuruBKNIP()||'................................')+'</div></div>';
    blokTTDPang += '</div>';
    printRaw(judul, body + tabelIsi + blokTTDPang, '');
    return;
  }
  else if(key==='kasus'){ tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+line('Deskripsi Kasus',r.Deskripsi)+line('Tindakan Yang Dilakukan',r.Tindakan)+line('Tindak Lanjut',r.TindakLanjut)+'</table>'; }
  else if(key==='konferensi'){ tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+line('Judul Kasus',r.JudulKasus)+line('Deskripsi Kasus',r.Deskripsi)+line('Peserta Konferensi',r.Peserta)+line('Hasil Konferensi',r.Hasil)+line('Keputusan / Rekomendasi',r.Keputusan)+line('Tindak Lanjut',r.TindakLanjut)+'</table>'; }
  else if(key==='alihtangan'){ tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+line('Alasan Alih Tangan',r.Alasan)+line('Tujuan Alih Tangan',r.TujuanAlih)+line('Pihak Penerima',r.PihakPenerima)+line('Status',r.Status)+line('Catatan',r.Catatan)+line('Tindak Lanjut',r.TindakLanjut)+'</table>'; }
  else if(key==='anekdot'){ tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Catatan',r.Catatan)+line('Tindak Lanjut',r.TindakLanjut)+line('Keterangan',r.Keterangan)+'</table>'; }
  else if(key==='lainlain'){
    var anggotaListLL = formatAnggotaKelompok(r.Anggota);
    var anggotaHTMLLL = anggotaListLL.length ? '<ol style="margin:0;padding-left:20px">'+anggotaListLL.map(function(x){ return '<li>'+esc(x)+'</li>'; }).join('')+'</ol>' : '-';
    tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Guru BK Pelaksana',r.Petugas)+line('Kegiatan',r.Kegiatan||r.Judul)+lineHTML('Siswa ('+anggotaListLL.length+' orang)', anggotaHTMLLL)+line('Keterangan',r.Keterangan)+'</table>';
  }
  else { tabelIsi = '<table class="rp">'+line('Hari / Tanggal',tglPanjang(r.Tanggal))+line('Nama Siswa',r.Nama)+line('Kelas',r.Kelas)+'</table>'; }
  body += tabelIsi;
  var sig = ttdGuruBKHTML(r.Tanggal);
  printRaw(judul, body, sig);
}
function cetakRekapKegiatan(key){
  var rows = ST.cache['v_'+key] || [];
  var p = periodeGet(key);
  var tglAkhir = p.sampai;
  rows.forEach(function(r){ if(String(r.Tanggal||'') > tglAkhir) tglAkhir = String(r.Tanggal||''); });
  var scope = '';
  if(key === 'kelompok' || key === 'lainlain'){ scope = (ST.user.role === 'admin') ? ' • Semua Guru BK' : (' • Milik: ' + (currentPetugasName()||'-')); }
  var sub = p.label + (p.mode === 'rentang' ? ' ('+tgl(p.dari)+' s.d. '+tgl(p.sampai)+')' : '') + scope;
  if(key === 'lainlain'){
    var headL = ['No','Tanggal','Kegiatan','Guru BK','Siswa','Keterangan'];
    var bodyL = rows.map(function(r,i){
      var anggotaList = formatAnggotaKelompok(r.Anggota);
      return [i+1, tgl(r.Tanggal), r.Kegiatan||r.Judul||'-', r.Petugas||'-', anggotaList.length ? anggotaList.join(', ') : '-', r.Keterangan||'-'];
    });
    printLaporan('REKAPITULASI KEGIATAN BK LAIN-LAIN', headL, bodyL, '', sub, ttdGuruBKHTML(tglAkhir || ''));
    return;
  }
  var cols = COLS[key];
  if(!cols) return toast('Konfigurasi kolom tidak ditemukan','er');
  var titleMap = {
    klasikal:'REKAPITULASI BIMBINGAN KLASIKAL', kelompok:'REKAPITULASI BIMBINGAN KELOMPOK',
    kr:'REKAPITULASI HOME VISIT', konseling:'REKAPITULASI KONSELING INDIVIDUAL',
    panggilan:'REKAPITULASI PERTEMUAN ORANG TUA', kasus:'REKAPITULASI CATATAN KASUS',
    konferensi:'REKAPITULASI KONFERENSI KASUS', alihtangan:'REKAPITULASI ALIH TANGAN KASUS',
    anekdot:'REKAPITULASI CATATAN ANEKDOT', lainlain:'REKAPITULASI KEGIATAN BK LAIN-LAIN'
  };
  printLaporan(titleMap[key] || 'REKAPITULASI KEGIATAN BK', ['No'].concat(cols.map(function(c){ return c.l; })), rows.map(function(r,i){ return [i+1].concat(cols.map(function(c){ return r[c.k]||'-'; })); }), '', sub, ttdGuruBKHTML(tglAkhir || ''));
}

var REKAP_MENU = [
  {id:'perizinan',  label:'🚪 Perizinan', desc:'Siswa rawan izin + penanganan'},
  {id:'keterlambatan', label:'⏰ Keterlambatan', desc:'Siswa rawan terlambat + penanganan'},
  {id:'kehadiran',  label:'📋 Kehadiran', desc:'Siswa rawan ketidakhadiran + penanganan'},
  {id:'kasus',      label:'⚖️ Catatan Kasus', desc:'Rekap kasus + penanganan'}
];
function renderRekapitulasi(){
  var mode = ST.cache.lpMode || 'bulan';
  var kelas = ST.cache.lpKelas || '';
  var bulan = ST.cache.lpBulan || today().slice(0,7);
  var dari = ST.cache.lpDari || (today().slice(0,7)+'-01');
  var sampai = ST.cache.lpSampai || today();
  var jenis = ST.cache.lpJenis || '';
  var filterHTML = '';
  if(mode === 'bulan') filterHTML = '<div class="fg"><label>Bulan</label><input type="month" id="lpBulan" value="'+bulan+'" onchange="lpSetMode()"></div>';
  else filterHTML = '<div class="fg"><label>Dari</label><input type="date" id="lpDari" value="'+dari+'" onchange="lpSetMode()"></div><div class="fg"><label>Sampai</label><input type="date" id="lpSampai" value="'+sampai+'" onchange="lpSetMode()"></div>';
  var menuHTML = REKAP_MENU.map(function(m){ return '<button class="lp-btn '+(jenis===m.id?'on':'')+'" onclick="lpJenis(\''+m.id+'\')">'+m.label+'<small>'+m.desc+'</small></button>'; }).join('');
  $('#main').innerHTML = '<div class="hd"><div><h2>📊 Siswa Rawan</h2><div class="sub">Rekap data siswa rawan dan kegiatan BK</div></div></div>'+
    '<div class="card"><h2>Filter Periode</h2><div class="fbar">'+
      '<div class="fg" style="max-width:220px"><label>Mode</label><select id="lpMode" onchange="lpSetMode()"><option value="bulan"'+(mode==='bulan'?' selected':'')+'>Perbulan</option><option value="rentang"'+(mode==='rentang'?' selected':'')+'>Rentang</option></select></div>'+
      filterHTML+
      '<div class="fg"><label>Kelas</label><select id="lpKelas" onchange="lpSetMode()"><option value="">Semua</option>'+kelasSaya().map(function(k){ return '<option '+(k===kelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<button class="btn" onclick="lpRefresh()">🔄 Muat Ulang</button></div></div>'+
    '<div class="card"><h2>Pilih Jenis Rekapitulasi</h2><div class="lp-btn-grid">'+menuHTML+'</div></div>'+
    '<div class="card" id="lpPreview"><h2 id="lpTitle">Pratinjau</h2><div class="sub" id="lpSub">Pilih jenis rekapitulasi di atas.</div><div id="lpView"><div class="empty">Belum ada data.</div></div><div style="margin-top:12px;display:flex;gap:9px;flex-wrap:wrap" id="lpAksi"></div></div>';
}
function lpSetMode(){
  var newMode = $('#lpMode').value;
  var modeChanged = (ST.cache.lpMode !== newMode);
  ST.cache.lpKelas = $('#lpKelas').value;
  if(modeChanged){
    if(newMode === 'rentang'){ var b = ST.cache.lpBulan; if(b){ var parts = b.split('-'); ST.cache.lpDari = b + '-01'; ST.cache.lpSampai = b + '-' + pad2(new Date(+parts[0], +parts[1], 0).getDate()); } }
    else if(newMode === 'bulan'){ var d = ST.cache.lpDari; if(d) ST.cache.lpBulan = d.slice(0,7); }
    ST.cache.lpMode = newMode; renderRekapitulasi();
    if(ST.cache.lpJenis) setTimeout(function(){ lpJenis(ST.cache.lpJenis); }, 30);
    return;
  }
  ST.cache.lpMode = newMode;
  if(newMode === 'bulan'){ ST.cache.lpBulan = $('#lpBulan').value; }
  else { ST.cache.lpDari = $('#lpDari').value; ST.cache.lpSampai = $('#lpSampai').value; }
  if(ST.cache.lpJenis) lpJenis(ST.cache.lpJenis); else renderRekapitulasi();
}
function lpRefresh(){ ST.cache.lpAll = null; toast('Memuat ulang…','inf'); if(ST.cache.lpJenis) lpJenis(ST.cache.lpJenis); }
function ambilSemua(){
  if(ST.cache.lpAll) return Promise.resolve(ST.cache.lpAll);
  var sheets = [SH.IZIN,SH.TERLAMBAT,SH.HADIR,SH.KR,SH.KONSELING,SH.PANGGILAN,SH.KASUS,SH.KLASIKAL,SH.KELOMPOK,SH.KONFERENSI,SH.ALIHTANGAN,SH.ANEKDOT,SH.LAINLAIN];
  var p = { dari: today().slice(0,7)+'-01', sampai: today() };
  try { if (ST.cache.lpMode) p = lpPeriode(); else if (ST.cache.rpMode) p = rpPeriode(); } catch(e){}
  var filters = {};
  sheets.forEach(function(s){ filters[s] = { since: p.dari, until: p.sampai }; });
  return api('batchGetData', { sheets: sheets, filters: filters })
    .then(function(out){ sheets.forEach(function(s){ if(!out[s]) out[s] = []; }); ST.cache.lpAll = out; ST.cache.lpErrors = out.__errors || {}; return out; })
    .catch(function(e){
      console.warn('[BK] batchGetData gagal, fallback:', e.message);
      return Promise.all(sheets.map(function(s){
        return api('getData', { sheet: s, since: p.dari, until: p.sampai }).then(function(rows){ return { sheet: s, rows: rows||[] }; }).catch(function(){ return { sheet: s, rows: [] }; });
      })).then(function(results){
        var out = {}; results.forEach(function(r){ out[r.sheet] = r.rows; });
        ST.cache.lpAll = out; return out;
      });
    });
}
function lpPeriode(){
  var mode = ST.cache.lpMode || 'bulan'; var dari = '', sampai = '', label = '';
  if(mode === 'bulan'){
    var b = ST.cache.lpBulan || today().slice(0,7); var parts = b.split('-');
    label = 'Bulan ' + monthName(+parts[1]) + ' ' + parts[0]; dari = b + '-01';
    var lastDay = new Date(+parts[0], +parts[1], 0).getDate(); sampai = b + '-' + pad2(lastDay);
  } else {
    dari = ST.cache.lpDari || (today().slice(0,7)+'-01'); sampai = ST.cache.lpSampai || today();
    if(dari > sampai){ var t = dari; dari = sampai; sampai = t; }
    label = 'Rentang ' + tgl(dari) + ' s.d. ' + tgl(sampai);
  }
  return { mode:mode, dari:dari, sampai:sampai, label:label, kelas: ST.cache.lpKelas || '' };
}
function lpFilter(rows, p){
  return (rows || []).filter(function(r){
    var t = String(r.Tanggal||'');
    if(p.dari && t < p.dari) return false;
    if(p.sampai && t > p.sampai) return false;
    var kelasRow = String(r.Kelas||'').split(',').map(function(x){ return x.trim(); }).filter(Boolean);
    var ks = kelasSaya();
    if(kelasRow.length > 0 && !kelasRow.some(function(k){ return ks.indexOf(k) >= 0; })) return false;
    if(p.kelas && kelasRow.indexOf(p.kelas) < 0) return false;
    return true;
  });
}
function rawanRowClassFromFreq(jenis, n){ return rawanRowClass(tierNumFromPenanganan(penangananSering(jenis, n))); }
function rawanRowClassFromAlpa(alpa, total){ return rawanRowClass(tierNumFromPenanganan(penangananRawan(alpa, total))); }
function getPenangananSiswa(all, nis, p){
  var list = [];
  function ok(t){ return (!p.dari || t >= p.dari) && (!p.sampai || t <= p.sampai); }
  var nisStr = String(nis);
  (all[SH.KR]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push('Home Visit ('+tgl(r.Tanggal)+')'); });
  (all[SH.KONSELING]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push((r.JenisLayanan||'Konseling')+' ('+tgl(r.Tanggal)+')'); });
  (all[SH.PANGGILAN]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push('Pertemuan Orang Tua ('+tgl(r.Tanggal)+')'); });
  (all[SH.KASUS]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push('Catatan Kasus ('+tgl(r.Tanggal)+')'); });
  (all[SH.KONFERENSI]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push('Konferensi Kasus ('+tgl(r.Tanggal)+')'); });
  (all[SH.ALIHTANGAN]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push('Alih Tangan Kasus ('+tgl(r.Tanggal)+')'); });
  (all[SH.ANEKDOT]||[]).forEach(function(r){ if(String(r.NIS)!==nisStr) return; if(!ok(String(r.Tanggal||''))) return; list.push('Catatan Anekdot ('+tgl(r.Tanggal)+')'); });
  return list;
}
function lpKehadiranFilterChange(v){ ST.cache.lpJenisKehadiran = v || ''; lpJenis('kehadiran'); }
function lpJenis(jenis){
  ST.cache.lpJenis = jenis;
  $$('.lp-btn').forEach(function(b){ var oc = b.getAttribute('onclick')||''; b.classList.toggle('on', oc.indexOf("'"+jenis+"'") >= 0); });
  var p = lpPeriode();
  $('#lpView').innerHTML = '<div class="empty">Memuat…</div>';
  $('#lpTitle').textContent = (REKAP_MENU.find(function(x){ return x.id===jenis; })||{}).label || 'Pratinjau';
  $('#lpSub').textContent = p.label + ' • Kelas: ' + (p.kelas || 'Semua');
  $('#lpAksi').innerHTML = '';
  ambilSemua().then(function(all){
    var head = [], body = [], judul = ''; var stats = ''; var rowClasses = [];
    if(jenis === 'perizinan'){
      judul = 'DAFTAR SISWA RAWAN IZIN KELUAR SEKOLAH';
      var rs = lpFilter(all[SH.IZIN], p);
      var freq = {};
      rs.forEach(function(x){ var nis = String(x.NIS||''); if(!nis) return; freq[nis] = freq[nis] || {NIS:x.NIS, Nama:x.Nama, Kelas:x.Kelas, n:0}; freq[nis].n++; });
      var list = Object.keys(freq).map(function(k){ return freq[k]; }).filter(function(x){ return x.n >= 3; });
      list = sortByRawanSering(list, 'izin');
      head = ['No','NIS','Nama','Kelas','Frekuensi','Penanganan Berjenjang','Penanganan yang Telah Dilakukan'];
      body = list.map(function(x,i){ var pen = getPenangananSiswa(all, x.NIS, p); return [i+1, x.NIS, x.Nama, x.Kelas, x.n+' kali', penangananSering('izin', x.n), pen.length ? pen.join(', ') : '-']; });
      rowClasses = list.map(function(x){ return rawanRowClassFromFreq('izin', x.n); });
      stats = '<div class="stat"><div class="sc r"><div class="n">'+list.length+'</div><div class="l">Siswa Rawan (≥3×)</div></div><div class="sc y"><div class="n">'+rs.length+'</div><div class="l">Total Izin</div></div></div>';
    } else if(jenis === 'keterlambatan'){
      judul = 'DAFTAR SISWA RAWAN KETERLAMBATAN';
      var rs2 = lpFilter(all[SH.TERLAMBAT], p);
      var freq2 = {};
      rs2.forEach(function(x){ var nis = String(x.NIS||''); if(!nis) return; freq2[nis] = freq2[nis] || {NIS:x.NIS, Nama:x.Nama, Kelas:x.Kelas, n:0}; freq2[nis].n++; });
      var list2 = Object.keys(freq2).map(function(k){ return freq2[k]; }).filter(function(x){ return x.n >= 3; });
      list2 = sortByRawanSering(list2, 'terlambat');
      head = ['No','NIS','Nama','Kelas','Frekuensi','Penanganan Berjenjang','Penanganan yang Telah Dilakukan'];
      body = list2.map(function(x,i){ var pen = getPenangananSiswa(all, x.NIS, p); return [i+1, x.NIS, x.Nama, x.Kelas, x.n+' kali', penangananSering('terlambat', x.n), pen.length ? pen.join(', ') : '-']; });
      rowClasses = list2.map(function(x){ return rawanRowClassFromFreq('terlambat', x.n); });
      stats = '<div class="stat"><div class="sc r"><div class="n">'+list2.length+'</div><div class="l">Siswa Rawan (≥3×)</div></div><div class="sc y"><div class="n">'+rs2.length+'</div><div class="l">Total Terlambat</div></div></div>';
    } else if(jenis === 'kehadiran'){
      judul = 'DAFTAR SISWA RAWAN KETIDAKHADIRAN';
      var rs3 = lpFilter(all[SH.HADIR], p);
      var agg = {};
      rs3.filter(function(x){ return x.Status !== 'H'; }).forEach(function(x){ agg[x.NIS] = agg[x.NIS] || {NIS:x.NIS,Nama:x.Nama,Kelas:x.Kelas,S:0,I:0,A:0,t:0}; agg[x.NIS][x.Status] = (agg[x.NIS][x.Status]||0)+1; agg[x.NIS].t++; });
      var list3 = Object.keys(agg).map(function(k){ return agg[k]; });
      var jenisFilter = ST.cache.lpJenisKehadiran || '';
      list3 = filterRawanByJenis(list3, jenisFilter);
      list3 = sortRawanByJenis(list3, jenisFilter);
      head = ['No','NIS','Nama','Kelas','Sakit','Izin','Alpa','Total','Penanganan Berjenjang','Penanganan yang Telah Dilakukan'];
      body = list3.map(function(x,i){ var pen = getPenangananSiswa(all, x.NIS, p); return [i+1, x.NIS, x.Nama, x.Kelas, x.S, x.I, x.A, x.t, penangananRawan(x.A, x.t), pen.length ? pen.join(', ') : '-']; });
      rowClasses = list3.map(function(x){ return rawanRowClassFromAlpa(x.A, x.t); });
      var labelJenis = jenisFilter ? jenisLabelOf(jenisFilter) : '';
      var jumlahTerpilih = (jenisFilter === 'S') ? list3.reduce(function(a,b){ return a+b.S; }, 0) : (jenisFilter === 'I') ? list3.reduce(function(a,b){ return a+b.I; }, 0) : (jenisFilter === 'A') ? list3.reduce(function(a,b){ return a+b.A; }, 0) : list3.reduce(function(a,b){ return a+b.t; }, 0);
      var filterBar = '<div style="background:#f7fafd;padding:13px;border-radius:10px;border:1px solid #e8eff7;margin-bottom:12px;display:flex;gap:12px;align-items:flex-end;flex-wrap:wrap">'+
        '<div class="fg" style="margin:0;min-width:260px;flex:1"><label style="font-size:12px;font-weight:700;color:#42566b">🎯 Filter Jenis Ketidakhadiran</label>'+
        '<select id="lpJenisKehadiran" onchange="lpKehadiranFilterChange(this.value)">'+
          '<option value=""'+(jenisFilter===''?' selected':'')+'>Semua (Sakit + Izin + Alpa)</option>'+
          '<option value="S"'+(jenisFilter==='S'?' selected':'')+'>Sakit saja</option>'+
          '<option value="I"'+(jenisFilter==='I'?' selected':'')+'>Izin saja</option>'+
          '<option value="A"'+(jenisFilter==='A'?' selected':'')+'>Alpa saja</option>'+
        '</select></div>'+
        (jenisFilter ? '<div class="hint" style="margin:0;flex:2;padding:9px 12px;background:#e8f0fe;border-left:4px solid #1a73e8;border-radius:6px;font-size:12px;color:#0f4c81">Filter aktif: <b>'+esc(labelJenis)+'</b></div>' : '')+
      '</div>';
      stats = '<div class="stat"><div class="sc r"><div class="n">'+list3.length+'</div><div class="l">Siswa Rawan'+(jenisFilter?' ('+esc(labelJenis)+')':'')+'</div></div><div class="sc p"><div class="n">'+jumlahTerpilih+'</div><div class="l">'+(jenisFilter?'Total '+esc(labelJenis):'Total Ketidakhadiran')+'</div></div></div>'+filterBar;
    } else if(jenis === 'kasus'){
      judul = 'REKAPITULASI CATATAN KASUS';
      var dataK5 = lpFilter(all[SH.KASUS] || [], p);
      var cols5 = COLS['kasus'] || [];
      head = ['No'].concat(cols5.map(function(c){ return c.l; })).concat(['Penanganan yang Telah Dilakukan']);
      body = dataK5.map(function(x,i){ return [i+1].concat(cols5.map(function(c){ return x[c.k]||'-'; })).concat([x.Tindakan || '-']); });
      stats = '<div class="stat"><div class="sc"><div class="n">'+dataK5.length+'</div><div class="l">Total Kasus</div></div></div>';
    }
    ST.cache.lp = {judul:judul, head:head, body:body, sub:p.label + ' • Kelas: ' + (p.kelas || 'Semua'), jenis:jenis, tanggalPengesahan:p.sampai};
    var vEl = $('#lpView');
    if(!body.length){ vEl.innerHTML = stats + '<div class="empty">Tidak ada data pada periode ini.</div>'; return; }
    vEl.innerHTML = stats + '<div class="tw"><table><thead><tr>'+head.map(function(h){ var isPenanganan = /penanganan/i.test(h); return '<th'+(isPenanganan?' style="min-width:340px"':'')+'>'+h+'</th>'; }).join('')+'</tr></thead><tbody>'+
      body.slice(0,500).map(function(r, idx){
        var cls = (rowClasses && rowClasses[idx]) ? rowClasses[idx] : '';
        return '<tr'+(cls?' class="'+cls+'"':'')+'>'+r.map(function(c, j){
          var isPenanganan = /penanganan/i.test(head[j]);
          if(isPenanganan && typeof c === 'string' && /^Tier\s*\d/i.test(c)){
            var tierNum = tierNumFromPenanganan(c);
            var jenisForRange = (jenis === 'perizinan') ? 'izin' : (jenis === 'keterlambatan') ? 'terlambat' : (jenis === 'kehadiran') ? 'kehadiran' : jenis;
            return '<td>'+tierBadge(c, tierRangeInfo(jenisForRange, tierNum))+'</td>';
          }
          return '<td>'+esc(c)+'</td>';
        }).join('')+'</tr>';
      }).join('')+'</tbody></table></div>'+(body.length>500 ? '<div class="hint" style="margin-top:8px">Menampilkan 500 dari '+body.length+' data.</div>' : '');
    $('#lpAksi').innerHTML = '<button class="btn" onclick="lpCetak()">🖨 Cetak Rekapitulasi</button><button class="btn4" onclick="lpExport()">⬇ Export Excel</button>';
  }).catch(function(e){ $('#lpView').innerHTML = '<div class="empty">'+esc(e.message)+'</div>'; });
}
function lpCetak(){ var d = ST.cache.lp; if(!d) return; printLaporan(d.judul, d.head, d.body, '', d.sub, ttdGuruBKHTML(d.tanggalPengesahan || '')); }
function lpExport(){ var d = ST.cache.lp; if(!d) return; exportExcel(d.judul.replace(/\s+/g,'_')+'_'+today(), d.head, d.body); }

var REPORT_MENU_ALL = [
  {id:'rekap_kegiatan', label:'📋 Rekap Kegiatan', desc:'Daftar kegiatan BK dengan filter rentang waktu & jenis'},
  {id:'per_siswa', label:'👤 Rekap Layanan Per Siswa', desc:'Daftar siswa penerima layanan BK & jumlah layanannya'},
  {id:'laporan_makalah', label:'📄 Laporan', desc:'Laporan lengkap kegiatan BK sistematika makalah (BAB I–V)'}
];
function renderReport(){
  var isTamu = (ST.user.role === 'tamu');
  var REPORT_MENU = isTamu ? REPORT_MENU_ALL.filter(function(m){ return m.id !== 'laporan_makalah'; }) : REPORT_MENU_ALL;
  var mode = ST.cache.rpMode || 'bulan';
  var kelas = ST.cache.rpKelas || '';
  var bulan = ST.cache.rpBulan || today().slice(0,7);
  var dari = ST.cache.rpDari || (today().slice(0,7)+'-01');
  var sampai = ST.cache.rpSampai || today();
  var jenis = ST.cache.rpJenis || 'rekap_kegiatan';
  if(isTamu && jenis === 'laporan_makalah') jenis = 'rekap_kegiatan';
  var filterHTML = '';
  if(mode === 'bulan') filterHTML = '<div class="fg"><label>Bulan</label><input type="month" id="rpBulan" value="'+bulan+'" onchange="rpSetMode()"></div>';
  else filterHTML = '<div class="fg"><label>Dari</label><input type="date" id="rpDari" value="'+dari+'" onchange="rpSetMode()"></div><div class="fg"><label>Sampai</label><input type="date" id="rpSampai" value="'+sampai+'" onchange="rpSetMode()"></div>';
  var menuHTML = REPORT_MENU.map(function(m){ return '<button class="lp-btn '+(jenis===m.id?'on':'')+'" onclick="rpJenis(\''+m.id+'\')">'+m.label+'<small>'+m.desc+'</small></button>'; }).join('');
  $('#main').innerHTML = '<div class="hd"><div><h2>📑 Report</h2><div class="sub">Laporan lengkap layanan BK</div></div></div>'+
    '<div class="card"><h2>Filter Periode</h2><div class="fbar">'+
      '<div class="fg" style="max-width:220px"><label>Mode</label><select id="rpMode" onchange="rpSetMode()"><option value="bulan"'+(mode==='bulan'?' selected':'')+'>Perbulan</option><option value="rentang"'+(mode==='rentang'?' selected':'')+'>Rentang</option></select></div>'+
      filterHTML+
      '<div class="fg"><label>Kelas</label><select id="rpKelas" onchange="rpSetMode()"><option value="">Semua</option>'+kelasSaya().map(function(k){ return '<option '+(k===kelas?'selected':'')+'>'+esc(k)+'</option>'; }).join('')+'</select></div>'+
      '<button class="btn" onclick="rpRefresh()">🔄 Muat Ulang</button></div></div>'+
    '<div class="card"><h2>Pilih Jenis Report</h2><div class="lp-btn-grid">'+menuHTML+'</div></div>'+
    '<div class="card" id="rpPreview"><h2 id="rpTitle">Pratinjau</h2><div class="sub" id="rpSub">Pilih jenis report di atas.</div><div id="rpView"><div class="empty">Belum ada data.</div></div><div style="margin-top:12px;display:flex;gap:9px;flex-wrap:wrap" id="rpAksi"></div></div>';
  rpJenis(jenis);
}
function rpSetMode(){
  var newMode = $('#rpMode').value; var modeChanged = (ST.cache.rpMode !== newMode);
  ST.cache.rpKelas = $('#rpKelas').value;
  if(modeChanged){
    if(newMode === 'rentang'){ var b = ST.cache.rpBulan; if(b){ var parts = b.split('-'); ST.cache.rpDari = b+'-01'; ST.cache.rpSampai = b+'-'+pad2(new Date(+parts[0], +parts[1], 0).getDate()); } }
    else if(newMode === 'bulan'){ var d = ST.cache.rpDari; if(d) ST.cache.rpBulan = d.slice(0,7); }
    ST.cache.rpMode = newMode; renderReport(); return;
  }
  ST.cache.rpMode = newMode;
  if(newMode === 'bulan'){ ST.cache.rpBulan = $('#rpBulan').value; }
  else { ST.cache.rpDari = $('#rpDari').value; ST.cache.rpSampai = $('#rpSampai').value; }
  if(ST.cache.rpJenis) rpJenis(ST.cache.rpJenis); else renderReport();
}
function rpRefresh(){ ST.cache.lpAll = null; toast('Memuat ulang…','inf'); if(ST.cache.rpJenis) rpJenis(ST.cache.rpJenis); }
function rpPeriode(){
  var mode = ST.cache.rpMode || 'bulan'; var dari = '', sampai = '', label = '';
  if(mode === 'bulan'){ var b = ST.cache.rpBulan || today().slice(0,7); var parts = b.split('-'); label = 'Bulan ' + monthName(+parts[1]) + ' ' + parts[0]; dari = b+'-01'; var lastDay = new Date(+parts[0], +parts[1], 0).getDate(); sampai = b+'-'+pad2(lastDay); }
  else { dari = ST.cache.rpDari || (today().slice(0,7)+'-01'); sampai = ST.cache.rpSampai || today(); if(dari > sampai){ var t = dari; dari = sampai; sampai = t; } label = 'Rentang ' + tgl(dari) + ' s.d. ' + tgl(sampai); }
  return { mode:mode, dari:dari, sampai:sampai, label:label, kelas: ST.cache.rpKelas || '' };
}
function rpJenis(jenis){
  var isTamu = (ST.user && ST.user.role === 'tamu');
  if(isTamu && jenis === 'laporan_makalah') jenis = 'rekap_kegiatan';
  ST.cache.rpJenis = jenis;
  $$('.lp-btn').forEach(function(b){ var oc = b.getAttribute('onclick')||''; b.classList.toggle('on', oc.indexOf("'"+jenis+"'") >= 0); });
  var p = rpPeriode();
  $('#rpView').innerHTML = '<div class="empty">Memuat…</div>';
  var m = REPORT_MENU_ALL.find(function(x){ return x.id===jenis; });
  $('#rpTitle').textContent = (m||{}).label || 'Pratinjau';
  $('#rpSub').textContent = p.label + ' • Kelas: ' + (p.kelas || 'Semua');
  $('#rpAksi').innerHTML = '';
  ambilSemua().then(function(all){
    if(jenis === 'rekap_kegiatan'){ renderRekapKegiatanReport(all, p); }
    else if(jenis === 'per_siswa'){
      var data = rekapPerSiswaData(all, p);
      var totalSemua = data.reduce(function(a,b){ return a + b.total; }, 0);
      var stats = '<div class="stat"><div class="sc g"><div class="n">'+data.length+'</div><div class="l">Siswa Menerima Layanan</div></div><div class="sc"><div class="n">'+totalSemua+'</div><div class="l">Total Layanan</div></div></div>'+
        '<div class="hint" style="margin-bottom:12px">💡 Perizinan, Keterlambatan, dan Presensi tidak dihitung sebagai layanan BK.</div>';
      var head = ['No','NIS','Nama','Kelas','Jenis Layanan (Jumlah)','Total Layanan'];
      var body = data.map(function(x,i){ return [i+1, x.NIS, x.Nama, x.Kelas, x.detailStr, x.total]; });
      ST.cache.rp = {judul:'REKAP LAYANAN BK PER SISWA', head:head, body:body, sub:p.label + ' • Kelas: ' + (p.kelas||'Semua'), jenis:jenis, tanggalPengesahan:p.sampai};
      var vEl = $('#rpView');
      if(!body.length){ vEl.innerHTML = stats + '<div class="empty">Tidak ada siswa yang menerima layanan.</div>'; return; }
      vEl.innerHTML = stats + '<div class="tw"><table><thead><tr>'+head.map(function(h){ return '<th>'+h+'</th>'; }).join('')+'</tr></thead><tbody>'+
        body.slice(0,500).map(function(r){ return '<tr>'+r.map(function(c){ return '<td>'+esc(c)+'</td>'; }).join('')+'</tr>'; }).join('')+'</tbody></table></div>';
      $('#rpAksi').innerHTML = '<button class="btn" onclick="rpCetak()">🖨 Cetak</button><button class="btn4" onclick="rpExport()">⬇ Export Excel</button>';
    } else if(jenis === 'laporan_makalah'){
      if(isTamu){ $('#rpView').innerHTML = '<div class="empty">Menu laporan tidak tersedia untuk akun tamu.</div>'; return; }
      renderLaporanMakalah(all, p);
    }
  }).catch(function(e){ $('#rpView').innerHTML = '<div class="empty">'+esc(e.message)+'</div>'; });
}
function renderLaporanMakalah(all, p){
  var html = buildLaporanMakalah(all, p);
  var vEl = $('#rpView'); if(!vEl) return;
  vEl.innerHTML = '<div class="notif info" style="margin-bottom:10px">📄 Laporan lengkap dengan sistematika makalah. Klik <b>Cetak Laporan</b> untuk mencetak / simpan sebagai PDF.</div>'+
    '<div class="makalah-wrapper"><div class="makalah">'+html+'</div></div>';
  ST.cache.mkReport = { html:html, sub:p.label };
  $('#rpAksi').innerHTML = '<button class="btn" onclick="cetakLaporanMakalah()">🖨 Cetak Laporan</button>';
}
function buildLaporanMakalah(all, p){
  var s = ST.setting || {};
  var sekolah = 'SMA NEGERI 1 KLIRONG';
  var guruNama = getGuruBKNama() || '................................';
  var guruNIP = getGuruBKNIP() || '................................';
  var kepsek = s.kepalaSekolah || '................................';
  var nipKepsek = s.nipKepsek || '................................';
  var klasikal = lpFilter(all[SH.KLASIKAL] || [], p);
  var kelompok = lpFilter(all[SH.KELOMPOK] || [], p);
  var konseling = lpFilter(all[SH.KONSELING] || [], p);
  var kr = lpFilter(all[SH.KR] || [], p);
  var panggilan = lpFilter(all[SH.PANGGILAN] || [], p);
  var kasus = lpFilter(all[SH.KASUS] || [], p);
  var konferensi = lpFilter(all[SH.KONFERENSI] || [], p);
  var alihtangan = lpFilter(all[SH.ALIHTANGAN] || [], p);
  var anekdot = lpFilter(all[SH.ANEKDOT] || [], p);
  var lainlain = lpFilter(all[SH.LAINLAIN] || [], p);
  var izin = lpFilter(all[SH.IZIN] || [], p);
  var telat = lpFilter(all[SH.TERLAMBAT] || [], p);
  var hadir = lpFilter(all[SH.HADIR] || [], p);
  var totalKegiatan = klasikal.length + kelompok.length + konseling.length + kr.length + panggilan.length + kasus.length + konferensi.length + alihtangan.length + anekdot.length + lainlain.length;
  var hadirAgg = { H:0, S:0, I:0, A:0 };
  hadir.forEach(function(r){ if(hadirAgg[r.Status] != null) hadirAgg[r.Status]++; });
  function uniqTopics(rows){ var m={}; rows.forEach(function(r){ if(r.Topik) m[r.Topik]=1; }); return Object.keys(m); }
  var html = '';
  html += '<div class="cover-page">';
  html += '<div class="cover-logo"><img src="'+LOGO_URL+'" alt="Logo Sekolah" onerror="this.style.display=\'none\'"></div>';
  html += '<h1>LAPORAN KEGIATAN<br>BIMBINGAN DAN KONSELING<br>'+esc(sekolah)+'</h1>';
  html += '<div class="cover-periode">Periode: '+esc(p.label)+'</div>';
  html += '<div style="margin-top:60px;font-size:14px">Disusun oleh:</div>';
  html += '<div class="cover-identitas"><p>'+esc(guruNama)+'</p><p style="font-size:13px;font-weight:normal">NIP. '+esc(guruNIP)+'</p></div>';
  html += '<div style="margin-top:70px;font-size:14px;font-weight:bold">'+esc(sekolah)+'<br>TAHUN PELAJARAN 2026/2027</div>';
  html += '</div>';
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">KATA PENGANTAR</h2>';
  html += '<p>Puji syukur kami panjatkan ke hadirat Allah SWT, Tuhan Yang Maha Esa, atas limpahan rahmat, taufik, dan hidayah-Nya sehingga penyusunan Laporan Kegiatan Bimbingan dan Konseling di '+esc(sekolah)+' untuk periode <b>'+esc(p.label)+'</b> ini dapat diselesaikan dengan baik dan tepat waktu.</p>';
  html += '<p>Laporan ini disusun sebagai bentuk pertanggungjawaban profesional Guru Bimbingan dan Konseling dalam melaksanakan tugas pokok dan fungsi layanan bantuan kepada peserta didik.</p>';
  html += '<p>Kami menyampaikan terima kasih yang sebesar-besarnya kepada:</p>';
  html += '<ol><li>'+esc(kepsek)+', Kepala '+esc(sekolah)+'.</li><li>Wakil Kepala Sekolah beserta seluruh tenaga pendidik dan kependidikan.</li><li>Wali kelas dan guru mata pelajaran.</li><li>Orang tua / wali peserta didik.</li><li>Seluruh peserta didik.</li></ol>';
  html += '<p>Kami menyadari bahwa laporan ini masih jauh dari sempurna. Kritik dan saran yang membangun sangat kami harapkan.</p>';
  html += '<div style="margin-top:40px;display:flex;justify-content:flex-end"><div style="text-align:center;min-width:250px">'+
    '<div>Klirong, '+new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})+'</div>'+
    '<div>Guru Bimbingan dan Konseling</div>'+
    '<div style="height:70px;padding-top:6px">'+(getGuruBKTTD()?'<img src="'+esc(getGuruBKTTD())+'" style="max-height:60px;max-width:180px;object-fit:contain">':'')+'</div>'+
    '<div style="font-weight:bold;text-decoration:underline">'+esc(guruNama)+'</div>'+
    '<div>NIP. '+esc(guruNIP)+'</div></div></div>';
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">DAFTAR ISI</h2>';
  html += '<table class="toc-table">';
  function tocRow(label, page, cls){ return '<tr'+(cls?' class="'+cls+'"':'')+'><td>'+label+'</td><td>'+page+'</td></tr>'; }
  html += tocRow('Halaman Judul', 'i');
  html += tocRow('Kata Pengantar', 'ii');
  html += tocRow('Daftar Isi', 'iii');
  html += tocRow('BAB I PENDAHULUAN', '1', 'toc-bab');
  html += tocRow('A. Latar Belakang', '1', 'toc-sub');
  html += tocRow('B. Dasar Pelaksanaan', '2', 'toc-sub');
  html += tocRow('C. Tujuan Penyusunan Laporan', '2', 'toc-sub');
  html += tocRow('D. Ruang Lingkup', '3', 'toc-sub');
  html += tocRow('E. Sasaran Layanan', '3', 'toc-sub');
  html += tocRow('BAB II PROGRAM DAN PELAKSANAAN LAYANAN BIMBINGAN DAN KONSELING', '4', 'toc-bab');
  html += tocRow('A. Rekapitulasi Pelaksanaan Kegiatan', '4', 'toc-sub');
  html += tocRow('B. Bimbingan Klasikal', '5', 'toc-sub');
  html += tocRow('C. Bimbingan Kelompok', '5', 'toc-sub');
  html += tocRow('D. Konseling Individual', '6', 'toc-sub');
  html += tocRow('E. Kunjungan Rumah (Home Visit)', '6', 'toc-sub');
  html += tocRow('F. Pertemuan Orang Tua / Wali', '7', 'toc-sub');
  html += tocRow('G. Catatan Kasus', '7', 'toc-sub');
  html += tocRow('H. Konferensi Kasus', '8', 'toc-sub');
  html += tocRow('I. Alih Tangan Kasus', '8', 'toc-sub');
  html += tocRow('J. Catatan Anekdot', '9', 'toc-sub');
  html += tocRow('K. Kegiatan Lain-lain', '9', 'toc-sub');
  html += tocRow('BAB III DATA KEDISIPLINAN DAN PRESENSI SISWA', '10', 'toc-bab');
  html += tocRow('A. Perizinan Keluar Sekolah', '10', 'toc-sub');
  html += tocRow('B. Keterlambatan Siswa', '10', 'toc-sub');
  html += tocRow('C. Presensi Siswa', '11', 'toc-sub');
  html += tocRow('BAB IV HASIL DAN PEMBAHASAN', '12', 'toc-bab');
  html += tocRow('A. Capaian Pelaksanaan Program', '12', 'toc-sub');
  html += tocRow('B. Analisis Pelaksanaan', '13', 'toc-sub');
  html += tocRow('C. Faktor Pendukung dan Penghambat', '14', 'toc-sub');
  html += tocRow('D. Evaluasi Ketercapaian Program', '15', 'toc-sub');
  html += tocRow('E. Refleksi Pelaksanaan Layanan', '16', 'toc-sub');
  html += tocRow('F. Dampak Layanan terhadap Peserta Didik', '16', 'toc-sub');
  html += tocRow('BAB V PENUTUP', '17', 'toc-bab');
  html += tocRow('A. Kesimpulan', '17', 'toc-sub');
  html += tocRow('B. Saran', '17', 'toc-sub');
  html += tocRow('C. Rencana Tindak Lanjut', '18', 'toc-sub');
  html += tocRow('D. Penutup', '18', 'toc-sub');
  html += tocRow('Lampiran-lampiran', '19', 'toc-bab');
  html += '</table>';
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">BAB I<br>PENDAHULUAN</h2>';
  html += '<h3>A. Latar Belakang</h3>';
  html += '<p>Bimbingan dan konseling merupakan bagian integral dari sistem pendidikan nasional yang memiliki peran strategis dalam membantu peserta didik mencapai perkembangan optimal.</p>';
  html += '<p>Sebagai wujud pertanggungjawaban profesional, Guru Bimbingan dan Konseling menyusun laporan pelaksanaan layanan BK untuk periode <b>'+esc(p.label)+'</b>.</p>';
  html += '<h3>B. Dasar Pelaksanaan</h3>';
  html += '<ol><li>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional.</li><li>Permendikbud Nomor 111 Tahun 2014 tentang Bimbingan dan Konseling pada Pendidikan Dasar dan Menengah.</li><li>Program Kerja Bimbingan dan Konseling '+esc(sekolah)+' Tahun Pelajaran 2026/2027.</li></ol>';
  html += '<h3>C. Tujuan Penyusunan Laporan</h3>';
  html += '<ol><li>Mendokumentasikan seluruh kegiatan layanan BK yang telah dilaksanakan.</li><li>Mengukur tingkat ketercapaian program layanan BK.</li><li>Mengidentifikasi permasalahan, faktor pendukung, dan penghambat.</li><li>Menjadi bahan evaluasi dan dasar penyusunan program berikutnya.</li></ol>';
  html += '<h3>D. Ruang Lingkup</h3>';
  html += '<p>Laporan ini mencakup seluruh kegiatan layanan bimbingan dan konseling yang dilaksanakan pada periode <b>'+esc(p.label)+'</b>.</p>';
  html += '<h3>E. Sasaran Layanan</h3>';
  html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Kelas Ampu</th><th>Jumlah Siswa</th></tr></thead><tbody>';
  var kelasArr = kelasSaya();
  var totalSiswaAmpu = 0;
  kelasArr.forEach(function(k, i){
    var n = (ST.siswa||[]).filter(function(s){ return s.Kelas === k; }).length;
    totalSiswaAmpu += n;
    html += '<tr><td>'+(i+1)+'</td><td>'+esc(k)+'</td><td>'+n+' siswa</td></tr>';
  });
  if(!kelasArr.length) html += '<tr><td colspan="3" style="text-align:center">Tidak ada kelas ampu</td></tr>';
  else html += '<tr><th colspan="2" style="text-align:right">Total</th><th>'+totalSiswaAmpu+' siswa</th></tr>';
  html += '</tbody></table>';
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">BAB II<br>PROGRAM DAN PELAKSANAAN LAYANAN<br>BIMBINGAN DAN KONSELING</h2>';
  html += '<h3>A. Rekapitulasi Pelaksanaan Kegiatan</h3>';
  html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Jenis Kegiatan</th><th style="width:120px;text-align:center">Jumlah</th></tr></thead><tbody>';
  var rekapRows = [['Bimbingan Klasikal', klasikal.length],['Bimbingan Kelompok', kelompok.length],['Konseling Individual', konseling.length],['Home Visit', kr.length],['Pertemuan Orang Tua', panggilan.length],['Catatan Kasus', kasus.length],['Konferensi Kasus', konferensi.length],['Alih Tangan Kasus', alihtangan.length],['Catatan Anekdot', anekdot.length],['Kegiatan Lain-lain', lainlain.length]];
  rekapRows.forEach(function(r, i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(r[0])+'</td><td style="text-align:center">'+r[1]+'</td></tr>'; });
  html += '<tr><th colspan="2" style="text-align:right">TOTAL</th><th style="text-align:center">'+totalKegiatan+'</th></tr>';
  html += '</tbody></table>';
  html += '<h3>B. Bimbingan Klasikal</h3>';
  if(klasikal.length){
    html += '<p><b>Jumlah pelaksanaan:</b> '+klasikal.length+' kali pertemuan.</p>';
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Kelas</th><th>Topik / Materi</th><th>Metode</th></tr></thead><tbody>';
    klasikal.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Kelas||'-')+'</td><td>'+esc(r.Topik||'-')+'</td><td>'+esc(r.Metode||'-')+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan bimbingan klasikal pada periode ini.</p>'; }
  html += '<h3>C. Bimbingan Kelompok</h3>';
  if(kelompok.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Guru BK</th><th>Topik</th><th>Anggota</th><th>Hasil</th></tr></thead><tbody>';
    kelompok.forEach(function(r,i){ var anggota = String(r.Anggota||'').split(';').filter(function(x){ return x.trim(); }).length; html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Petugas||'-')+'</td><td>'+esc(r.Topik||'-')+'</td><td>'+anggota+' siswa</td><td>'+esc((r.Hasil||'-').slice(0,120))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan bimbingan kelompok pada periode ini.</p>'; }
  html += '<h3>D. Konseling Individual</h3>';
  if(konseling.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Kelas</th><th>Permasalahan</th></tr></thead><tbody>';
    konseling.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc(r.Kelas||'-')+'</td><td>'+esc((r.Masalah||'-').slice(0,150))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan konseling individual pada periode ini.</p>'; }
  html += '<h3>E. Kunjungan Rumah (Home Visit)</h3>';
  if(kr.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Kelas</th><th>Permasalahan</th><th>Hasil</th></tr></thead><tbody>';
    kr.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc(r.Kelas||'-')+'</td><td>'+esc((r.Masalah||'-').slice(0,100))+'</td><td>'+esc((r.Hasil||'-').slice(0,100))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan home visit pada periode ini.</p>'; }
  html += '<h3>F. Pertemuan Orang Tua / Wali</h3>';
  if(panggilan.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Kelas</th><th>Nama Orang Tua</th><th>Hasil</th></tr></thead><tbody>';
    panggilan.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc(r.Kelas||'-')+'</td><td>'+esc(r.NamaOrtu||'-')+'</td><td>'+esc((r.Hasil||'-').slice(0,120))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan Pertemuan orang tua pada periode ini.</p>'; }
  html += '<h3>G. Catatan Kasus</h3>';
  if(kasus.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Kelas</th><th>Deskripsi</th><th>Tindak Lanjut</th></tr></thead><tbody>';
    kasus.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc(r.Kelas||'-')+'</td><td>'+esc((r.Deskripsi||'-').slice(0,120))+'</td><td>'+esc((r.TindakLanjut||'-').slice(0,80))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat catatan kasus pada periode ini.</p>'; }
  html += '<h3>H. Konferensi Kasus</h3>';
  if(konferensi.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Judul Kasus</th><th>Hasil</th></tr></thead><tbody>';
    konferensi.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc(r.JudulKasus||'-')+'</td><td>'+esc((r.Hasil||'-').slice(0,120))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan konferensi kasus pada periode ini.</p>'; }
  html += '<h3>I. Alih Tangan Kasus</h3>';
  if(alihtangan.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Tujuan Alih</th><th>Pihak Penerima</th><th>Status</th></tr></thead><tbody>';
    alihtangan.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc(r.TujuanAlih||'-')+'</td><td>'+esc(r.PihakPenerima||'-')+'</td><td>'+esc(r.Status||'-')+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan alih tangan kasus pada periode ini.</p>'; }
  html += '<h3>J. Catatan Anekdot</h3>';
  if(anekdot.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Nama Siswa</th><th>Catatan</th><th>Tindak Lanjut</th></tr></thead><tbody>';
    anekdot.forEach(function(r,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Nama||'-')+'</td><td>'+esc((r.Catatan||'-').slice(0,180))+'</td><td>'+esc((r.TindakLanjut||'-').slice(0,120))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat catatan anekdot pada periode ini.</p>'; }
  html += '<h3>K. Kegiatan Lain-lain</h3>';
  if(lainlain.length){
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Kegiatan</th><th>Siswa</th><th>Keterangan</th></tr></thead><tbody>';
    lainlain.forEach(function(r,i){ var anggota = formatAnggotaKelompok(r.Anggota); html += '<tr><td>'+(i+1)+'</td><td>'+esc(tgl(r.Tanggal))+'</td><td>'+esc(r.Kegiatan||'-')+'</td><td>'+esc(anggota.join(', ').slice(0,100))+'</td><td>'+esc((r.Keterangan||'-').slice(0,100))+'</td></tr>'; });
    html += '</tbody></table>';
  } else { html += '<p>Tidak terdapat kegiatan lain-lain pada periode ini.</p>'; }
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">BAB III<br>DATA KEDISIPLINAN DAN PRESENSI SISWA</h2>';
  html += '<h3>A. Perizinan Keluar Sekolah</h3>';
  html += '<p>Total terdapat <b>'+izin.length+'</b> perizinan pada periode '+esc(p.label)+'.</p>';
  if(izin.length){
    var izinBySiswa = {};
    izin.forEach(function(r){ var k = String(r.NIS||''); izinBySiswa[k] = izinBySiswa[k] || {NIS:r.NIS, Nama:r.Nama, Kelas:r.Kelas, n:0}; izinBySiswa[k].n++; });
    var izinList = Object.keys(izinBySiswa).map(function(k){ return izinBySiswa[k]; }).sort(function(a,b){ return b.n - a.n; }).slice(0, 20);
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>NIS</th><th>Nama</th><th>Kelas</th><th style="text-align:center">Frekuensi</th></tr></thead><tbody>';
    izinList.forEach(function(x,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(x.NIS||'-')+'</td><td>'+esc(x.Nama||'-')+'</td><td>'+esc(x.Kelas||'-')+'</td><td style="text-align:center">'+x.n+'×</td></tr>'; });
    html += '</tbody></table>';
  }
  html += '<h3>B. Keterlambatan Siswa</h3>';
  html += '<p>Total terdapat <b>'+telat.length+'</b> kejadian keterlambatan pada periode ini.</p>';
  if(telat.length){
    var telatBySiswa = {};
    telat.forEach(function(r){ var k = String(r.NIS||''); telatBySiswa[k] = telatBySiswa[k] || {NIS:r.NIS, Nama:r.Nama, Kelas:r.Kelas, n:0}; telatBySiswa[k].n++; });
    var telatList = Object.keys(telatBySiswa).map(function(k){ return telatBySiswa[k]; }).sort(function(a,b){ return b.n - a.n; }).slice(0, 20);
    html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>NIS</th><th>Nama</th><th>Kelas</th><th style="text-align:center">Frekuensi</th></tr></thead><tbody>';
    telatList.forEach(function(x,i){ html += '<tr><td>'+(i+1)+'</td><td>'+esc(x.NIS||'-')+'</td><td>'+esc(x.Nama||'-')+'</td><td>'+esc(x.Kelas||'-')+'</td><td style="text-align:center">'+x.n+'×</td></tr>'; });
    html += '</tbody></table>';
  }
  html += '<h3>C. Presensi Siswa</h3>';
  html += '<table class="rp"><thead><tr><th style="width:44px">No</th><th>Status Kehadiran</th><th style="width:150px;text-align:center">Jumlah</th></tr></thead><tbody>';
  html += '<tr><td>1</td><td>Hadir (H)</td><td style="text-align:center">'+hadirAgg.H+'</td></tr>';
  html += '<tr><td>2</td><td>Sakit (S)</td><td style="text-align:center">'+hadirAgg.S+'</td></tr>';
  html += '<tr><td>3</td><td>Izin (I)</td><td style="text-align:center">'+hadirAgg.I+'</td></tr>';
  html += '<tr><td>4</td><td>Alpa (A)</td><td style="text-align:center">'+hadirAgg.A+'</td></tr>';
  html += '<tr><th colspan="2" style="text-align:right">Total Entri</th><th style="text-align:center">'+(hadirAgg.H+hadirAgg.S+hadirAgg.I+hadirAgg.A)+'</th></tr>';
  html += '</tbody></table>';
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">BAB IV<br>HASIL DAN PEMBAHASAN</h2>';
  html += '<h3>A. Capaian Pelaksanaan Program</h3>';
  html += '<p>Secara umum pelaksanaan layanan bimbingan dan konseling pada periode '+esc(p.label)+' telah berjalan sesuai program dengan total <b>'+totalKegiatan+'</b> kegiatan.</p>';
  html += '<h3>B. Analisis Pelaksanaan</h3>';
  html += '<ol>';
  html += '<li><b>Ketercapaian layanan dasar:</b> '+(klasikal.length + kelompok.length)+' sesi klasikal & kelompok.</li>';
  html += '<li><b>Penanganan kasus individual:</b> '+(konseling.length + kr.length + panggilan.length + kasus.length + konferensi.length + alihtangan.length)+' kegiatan responsif.</li>';
  html += '<li><b>Data kedisiplinan:</b> '+izin.length+' perizinan & '+telat.length+' keterlambatan.</li>';
  html += '<li><b>Presensi:</b> S:'+hadirAgg.S+' I:'+hadirAgg.I+' A:'+hadirAgg.A+'.</li>';
  html += '</ol>';
  html += '<h3>C. Faktor Pendukung dan Penghambat</h3>';
  html += '<p><b>Faktor Pendukung:</b></p><ul><li>Dukungan Kepala Sekolah dan seluruh tenaga pendidik.</li><li>Ketersediaan sarana dan prasarana.</li><li>Kerja sama Guru BK, wali kelas, dan orang tua.</li><li>Antusiasme peserta didik.</li></ul>';
  html += '<p><b>Faktor Penghambat:</b></p><ul><li>Keterbatasan waktu.</li><li>Keterbatasan jumlah Guru BK.</li><li>Sebagian siswa masih enggan berkonsultasi.</li></ul>';
  html += '<h3>D. Evaluasi Ketercapaian Program</h3>';
  html += '<ol>';
  html += '<li><b>Layanan Dasar:</b> '+((klasikal.length + kelompok.length) > 0 ? 'terlaksana' : 'belum terlaksana')+' dengan '+(klasikal.length + kelompok.length)+' kegiatan.</li>';
  html += '<li><b>Layanan Responsif:</b> '+(konseling.length + kr.length + panggilan.length)+' kegiatan.</li>';
  html += '<li><b>Layanan Perencanaan Individual:</b> '+(anekdot.length + konferensi.length + alihtangan.length + lainlain.length)+' kegiatan.</li>';
  html += '<li><b>Keterjangkauan:</b> '+kelasSaya().length+' kelas'+(kelasSaya().length?' ('+totalSiswaAmpu+' siswa)':'')+'.</li>';
  html += '</ol>';
  html += '<p>Tingkat ketercapaian program: <b>'+(totalKegiatan >= 20 ? 'sangat baik' : totalKegiatan >= 10 ? 'baik' : totalKegiatan >= 5 ? 'cukup' : 'perlu ditingkatkan')+'</b>.</p>';
  html += '<h3>E. Refleksi Pelaksanaan Layanan</h3>';
  html += '<ol>';
  html += '<li><b>Kekuatan:</b> Konsistensi Guru BK, responsif, dokumentasi rapi.</li>';
  html += '<li><b>Kelemahan:</b> Cakupan klasikal terbatas, media kurang variatif.</li>';
  html += '<li><b>Peluang:</b> Dukungan sekolah, kemajuan teknologi.</li>';
  html += '<li><b>Ancaman:</b> Pengaruh negatif lingkungan, gadget berlebihan.</li>';
  html += '</ol>';
  html += '<h3>F. Dampak Layanan terhadap Peserta Didik</h3>';
  html += '<ol><li><b>Akademik:</b> Pemahaman gaya belajar & peningkatan motivasi.</li><li><b>Sosial:</b> Kemampuan komunikasi & resolusi konflik.</li><li><b>Pribadi:</b> Pengenalan potensi diri & rasa percaya diri.</li><li><b>Karier:</b> Pemahaman pilihan karier & studi lanjut.</li><li><b>Kedisiplinan:</b> Penurunan pelanggaran tata tertib.</li></ol>';
  html += '<div class="page-break"></div>';
  html += '<h2 class="bab-title">BAB V<br>PENUTUP</h2>';
  html += '<h3>A. Kesimpulan</h3>';
  html += '<ol>';
  html += '<li>Pelaksanaan layanan BK periode '+esc(p.label)+' berjalan sesuai program dengan '+totalKegiatan+' kegiatan.</li>';
  html += '<li>Layanan klasikal, kelompok, dan konseling dilaksanakan terprogram.</li>';
  html += '<li>Penanganan kasus dilakukan melalui berbagai pendekatan.</li>';
  html += '<li>Data kedisiplinan & presensi menjadi bahan evaluasi.</li>';
  html += '<li>Layanan BK memberikan dampak positif bagi peserta didik.</li>';
  html += '</ol>';
  html += '<h3>B. Saran</h3>';
  html += '<p><b>1. Untuk Kepala Sekolah:</b></p><ul><li>Penambahan jumlah Guru BK.</li><li>Penyediaan ruang konseling representatif.</li></ul>';
  html += '<p><b>2. Untuk Guru BK:</b></p><ul><li>Peningkatan frekuensi layanan klasikal.</li><li>Pengembangan media layanan.</li></ul>';
  html += '<p><b>3. Untuk Wali Kelas & Guru Mapel:</b></p><ul><li>Kerja sama identifikasi siswa yang butuh layanan BK.</li></ul>';
  html += '<p><b>4. Untuk Peserta Didik:</b></p><ul><li>Memanfaatkan layanan BK secara proaktif.</li></ul>';
  html += '<p><b>5. Untuk Orang Tua:</b></p><ul><li>Mendukung program BK sekolah.</li></ul>';
  html += '<h3>C. Rencana Tindak Lanjut</h3>';
  html += '<ol>';
  html += '<li>Penyusunan program berbasis asesmen kebutuhan.</li>';
  html += '<li>Peningkatan frekuensi & kualitas layanan klasikal.</li>';
  html += '<li>Pengembangan media layanan variatif.</li>';
  html += '<li>Peningkatan koordinasi dengan wali kelas.</li>';
  html += '<li>Asesmen kebutuhan layanan minimal 1× per semester.</li>';
  html += '<li>Pemanfaatan teknologi informasi untuk dokumentasi.</li>';
  html += '</ol>';
  html += '<h3>D. Penutup</h3>';
  html += '<p>Demikian laporan kegiatan bimbingan dan konseling '+esc(sekolah)+' untuk periode <b>'+esc(p.label)+'</b> ini kami susun. Semoga memberikan manfaat bagi pengembangan layanan bimbingan dan konseling dan bagi kemajuan pendidikan pada umumnya.</p>';
  html += '<div style="margin-top:50px;display:flex;justify-content:space-between;page-break-inside:avoid">';
  html += '<div style="text-align:center"><div>Mengetahui,</div><div>Kepala '+esc(sekolah)+'</div><div style="height:75px"></div><div style="font-weight:bold;text-decoration:underline">'+esc(kepsek)+'</div><div>NIP. '+esc(nipKepsek)+'</div></div>';
  html += '<div style="text-align:center"><div>Klirong, '+new Date().toLocaleDateString('id-ID',{day:'numeric',month:'long',year:'numeric'})+'</div><div>Guru Bimbingan dan Konseling</div><div style="height:75px;padding-top:6px">'+(getGuruBKTTD()?'<img src="'+esc(getGuruBKTTD())+'" style="max-height:70px;max-width:180px;object-fit:contain">':'')+'</div><div style="font-weight:bold;text-decoration:underline">'+esc(guruNama)+'</div><div>NIP. '+esc(guruNIP)+'</div></div>';
  html += '</div>';
  return html;
}
function cetakLaporanMakalah(){
  var d = ST.cache.mkReport;
  if(!d || !d.html){ toast('Tampilkan dulu laporan','er'); return; }
  var w = window.open('', '_blank'); if(!w){ toast('Popup diblokir','er'); return; }
  var css = '@page{size:A4;margin:2cm 2.5cm}body{font-family:"Times New Roman",serif;color:#000;font-size:12pt;line-height:1.7}h1{text-align:center;font-size:16pt;margin:24px 0}h2.bab-title{text-align:center;font-size:14pt;margin:26px 0 16px;font-weight:bold}h2{font-size:13.5pt;font-weight:bold;text-align:center;text-transform:uppercase;margin:22px 0 12px}h3{font-size:12.5pt;font-weight:bold;margin:14px 0 8px}table.rp{width:100%;border-collapse:collapse;font-size:10.5pt;margin:8px 0 14px}table.rp th,table.rp td{border:1px solid #333;padding:5px 7px;vertical-align:top;text-align:left}table.rp th{background:#e8eef7;font-weight:bold;text-align:center}p{text-align:justify;margin:6px 0}ol,ul{margin:6px 0 10px 26px}.cover-page{text-align:center;padding-top:30px;page-break-after:always}.cover-page .cover-logo img{max-height:130px;max-width:130px}.cover-page h1{font-size:17pt;margin:50px 0;line-height:1.4}.cover-page .cover-periode{font-size:13pt;font-weight:600;margin:24px 0}.cover-page .cover-identitas{font-size:14pt;font-weight:bold;margin-top:50px}.page-break{page-break-before:always}table.toc-table{border:none;width:100%}table.toc-table td{border:none;padding:3px 0}table.toc-table td:last-child{text-align:right;width:70px;font-weight:600}table.toc-table .toc-bab{font-weight:bold;padding-top:10px}table.toc-table .toc-sub{padding-left:24px}';
  var content = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>Laporan BK</title><style>'+css+'</style></head><body>'+ d.html +'<scr'+'ipt>setTimeout(function(){window.print();},700);</scr'+'ipt></body></html>';
  w.document.write(content); w.document.close();
}
function renderRekapKegiatanReport(all, p){
  var jenisFilter = ST.cache.rpRekapJenis || '';
  var allEvts = gabunganSemuaKegiatan(all, p);
  var evts = jenisFilter ? allEvts.filter(function(e){ return e.jenis === jenisFilter; }) : allEvts;
  var jenisOptions = ['', 'Bimbingan Klasikal', 'Bimbingan Kelompok', 'Home Visit', 'Konseling Individual', 'Pertemuan OT', 'Kasus', 'Konferensi Kasus', 'Alih Tangan Kasus', 'Catatan Anekdot', 'Lain-Lain'];
  var filterBar = '<div class="fbar" style="margin-bottom:12px">'+
    '<div class="fg" style="max-width:300px"><label>Jenis Kegiatan</label>'+
    '<select id="rpRekapJenis" onchange="rpRekapJenisChange(this.value)">'+
    jenisOptions.map(function(j){ return '<option value="'+esc(j)+'"'+(j===jenisFilter?' selected':'')+'>'+(j||'Semua Jenis Kegiatan')+'</option>'; }).join('')+
    '</select></div></div>';
  var stats = '<div class="stat"><div class="sc"><div class="n">'+evts.length+'</div><div class="l">Total Kegiatan</div></div></div>';
  var vEl = $('#rpView');
  if(!evts.length){ vEl.innerHTML = stats + filterBar + '<div class="empty">Tidak ada kegiatan pada periode ini.</div>'; $('#rpAksi').innerHTML = ''; return; }
  var html = stats + filterBar + '<div class="tw"><table><thead><tr><th style="width:44px">No</th><th>Tanggal</th><th>Jenis Kegiatan</th><th>Kelas</th><th>Detail</th><th style="width:140px;text-align:center">Aksi</th></tr></thead><tbody>';
  evts.forEach(function(e,i){
    var btn = '<button class="btn" onclick="rpLihatLaporanKegiatan(\''+e.key+'\',\''+e.id+'\')">🖨 Lihat Laporan</button>';
    html += '<tr><td>'+(i+1)+'</td><td>'+tgl(e.tanggal)+'</td><td>'+esc(e.jenis)+'</td><td>'+esc(e.kelas)+'</td><td>'+esc(e.detail)+'</td><td style="text-align:center">'+btn+'</td></tr>';
  });
  html += '</tbody></table></div>';
  vEl.innerHTML = html;
  $('#rpAksi').innerHTML = '<button class="btn" onclick="rpRekapKegiatanCetak()">🖨 Cetak Rekap</button><button class="btn4" onclick="rpRekapKegiatanExport()">⬇ Export Excel</button>';
  ST.cache.rp = {judul:'REKAP KEGIATAN BK', head:['No','Tanggal','Jenis Kegiatan','Kelas','Detail'], body:evts.map(function(e,i){ return [i+1, tgl(e.tanggal), e.jenis, e.kelas, e.detail]; }), sub:p.label + ' • Kelas: ' + (p.kelas||'Semua'), jenis:'rekap_kegiatan', tanggalPengesahan:p.sampai};
}
function rpRekapJenisChange(v){ ST.cache.rpRekapJenis = v; rpJenis('rekap_kegiatan'); }
function rpLihatLaporanKegiatan(key, id){
  if(!key || !id) return toast('Data kegiatan tidak ditemukan','er');
  var row = (ST.cache[key]||[]).find(function(x){ return String(x.ID) === String(id); });
  if(!row){
    var cfg = KEG_CFG[key];
    if(!cfg) return toast('Jenis kegiatan tidak dikenal','er');
    api('getData', { sheet: cfg.sheet }).then(function(rows){
      setCache(key, rows || []);
      var found = (rows||[]).find(function(x){ return String(x.ID) === String(id); });
      if(!found) return toast('Data kegiatan tidak ditemukan','er');
      cetakKegiatan(key, id);
    }).catch(function(e){ toast(e.message,'er'); });
    return;
  }
  cetakKegiatan(key, id);
}
function rpRekapKegiatanCetak(){
  var d = ST.cache.rp; if(!d || d.jenis !== 'rekap_kegiatan') return toast('Tampilkan dulu','er');
  printLaporan(d.judul, d.head, d.body, '', d.sub, ttdGuruBKHTML(d.tanggalPengesahan || ''));
}
function rpRekapKegiatanExport(){
  var d = ST.cache.rp; if(!d || d.jenis !== 'rekap_kegiatan') return toast('Tampilkan dulu','er');
  exportExcel('Rekap_Kegiatan_BK_'+today(), d.head, d.body);
}
function rpCetak(){ var d = ST.cache.rp; if(!d) return; printLaporan(d.judul, d.head, d.body, '', d.sub, ttdGuruBKHTML(d.tanggalPengesahan || '')); }
function rpExport(){ var d = ST.cache.rp; if(!d) return; exportExcel(d.judul.replace(/\s+/g,'_')+'_'+today(), d.head, d.body); }
function rekapPerSiswaData(all, p){
  var ks = kelasSaya();
  var siswaFiltered = (ST.siswa||[]).filter(function(s){ return ks.indexOf(s.Kelas) >= 0 && (!p.kelas || s.Kelas === p.kelas); });
  var agg = {};
  siswaFiltered.forEach(function(s){ agg[String(s.NIS)] = { NIS:s.NIS, Nama:s.Nama, Kelas:s.Kelas, klasikal:0, kelompok:0, kr:0, konseling:0, panggilan:0, kasus:0, konferensi:0, alihtangan:0, anekdot:0, lainlain:0 }; });
  function ok(t){ return (!p.dari || t >= p.dari) && (!p.sampai || t <= p.sampai); }
  (all[SH.KLASIKAL]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var kelasRow = String(r.Kelas||'').split(',').map(function(x){ return x.trim(); }); Object.keys(agg).forEach(function(k){ if(kelasRow.indexOf(agg[k].Kelas) >= 0) agg[k].klasikal++; }); });
  (all[SH.KELOMPOK]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; String(r.Anggota||'').split(';').forEach(function(part){ var nis = String(part||'').trim().split(' - ')[0].trim(); if(nis && agg[nis]) agg[nis].kelompok++; }); });
  (all[SH.KR]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].kr++; });
  (all[SH.KONSELING]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].konseling++; });
  (all[SH.PANGGILAN]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].panggilan++; });
  (all[SH.KASUS]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].kasus++; });
  (all[SH.KONFERENSI]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].konferensi++; });
  (all[SH.ALIHTANGAN]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].alihtangan++; });
  (all[SH.ANEKDOT]||[]).forEach(function(r){ if(!ok(String(r.Tanggal||''))) return; var nis = String(r.NIS||''); if(agg[nis]) agg[nis].anekdot++; });
  (all[SH.LAINLAIN]||[]).forEach(function(r){
    if(!ok(String(r.Tanggal||''))) return;
    String(r.Anggota||'').split(';').forEach(function(part){
      var nis = String(part||'').trim().split(' - ')[0].trim();
      if(nis && agg[nis]) agg[nis].lainlain++;
    });
  });
  var arr = Object.keys(agg).map(function(k){
    var a = agg[k];
    var total = a.klasikal + a.kelompok + a.kr + a.konseling + a.panggilan + a.kasus + a.konferensi + a.alihtangan + a.anekdot + a.lainlain;
    var detail = [];
    if(a.klasikal) detail.push('Klasikal('+a.klasikal+')'); if(a.kelompok) detail.push('Kelompok('+a.kelompok+')');
    if(a.kr) detail.push('Home Visit('+a.kr+')'); if(a.konseling) detail.push('Konseling('+a.konseling+')');
    if(a.panggilan) detail.push('Panggilan OT('+a.panggilan+')'); if(a.kasus) detail.push('Kasus('+a.kasus+')');
    if(a.konferensi) detail.push('Konferensi('+a.konferensi+')'); if(a.alihtangan) detail.push('Alih Tangan('+a.alihtangan+')');
    if(a.anekdot) detail.push('Anekdot('+a.anekdot+')'); if(a.lainlain) detail.push('Lain-lain('+a.lainlain+')');
    return Object.assign(a, { total: total, detailStr: detail.length ? detail.join(', ') : '-' });
  });
  arr = arr.filter(function(x){ return x.total > 0; });
  arr.sort(function(a,b){ return b.total - a.total; });
  return arr;
}
function gabunganSemuaKegiatan(all, p){
  var evts = [];
  function push(tglStr, jenis, kelas, detail, key, id){
    if(!tglStr) return; if(p.dari && tglStr < p.dari) return; if(p.sampai && tglStr > p.sampai) return;
    var kelasRow = String(kelas||'').split(',').map(function(x){ return x.trim(); }).filter(Boolean);
    var ks = kelasSaya();
    if(kelasRow.length > 0 && !kelasRow.some(function(k){ return ks.indexOf(k) >= 0; })) return;
    if(p.kelas && kelasRow.indexOf(p.kelas) < 0) return;
    evts.push({ tanggal: tglStr, jenis: jenis, kelas: kelasRow.join(', '), detail: detail, key: key, id: id });
  }
  (all[SH.KLASIKAL]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Bimbingan Klasikal', r.Kelas, 'Kelas '+(r.Kelas||'-')+' | Topik: '+(r.Topik||'-'), 'klasikal', r.ID); });
  (all[SH.KELOMPOK]||[]).filter(isKegiatanOwner).forEach(function(r){ var anggota = String(r.Anggota||'').split(';').map(function(x){ return x.trim(); }).filter(Boolean); push(String(r.Tanggal||''), 'Bimbingan Kelompok', r.Kelas, 'Topik: '+(r.Topik||'-')+' | '+anggota.length+' siswa', 'kelompok', r.ID); });
  (all[SH.KR]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Home Visit', r.Kelas, (r.Nama||'')+' | '+(r.Masalah||'-'), 'kr', r.ID); });
  (all[SH.KONSELING]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Konseling Individual', r.Kelas, (r.Nama||'')+' | '+(r.Masalah||'-'), 'konseling', r.ID); });
  (all[SH.PANGGILAN]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Pertemuan OT', r.Kelas, (r.Nama||'')+' | '+(r.Masalah||'-'), 'panggilan', r.ID); });
  (all[SH.KASUS]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Kasus', r.Kelas, (r.Nama||'')+' | '+(r.Deskripsi||'-'), 'kasus', r.ID); });
  (all[SH.KONFERENSI]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Konferensi Kasus', r.Kelas, (r.Nama||'')+' | '+(r.JudulKasus||'-'), 'konferensi', r.ID); });
  (all[SH.ALIHTANGAN]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Alih Tangan Kasus', r.Kelas, (r.Nama||'')+' | '+(r.TujuanAlih||'-'), 'alihtangan', r.ID); });
  (all[SH.ANEKDOT]||[]).forEach(function(r){ push(String(r.Tanggal||''), 'Catatan Anekdot', r.Kelas, (r.Nama||'')+' | '+(r.Catatan||'-'), 'anekdot', r.ID); });
  (all[SH.LAINLAIN]||[]).filter(isKegiatanOwner).forEach(function(r){
    var anggota = formatAnggotaKelompok(r.Anggota);
    push(String(r.Tanggal||''), 'Lain-Lain', '', (r.Kegiatan||r.Judul||'-')+' | '+(anggota.length ? anggota.join(', ') : '-'), 'lainlain', r.ID);
  });
  evts.sort(function(a,b){ return String(b.tanggal).localeCompare(String(a.tanggal)); });
  return evts;
}
function kopHTML(){ var s = ST.setting || {}; var kop = s.kop ? '<img src="'+esc(s.kop)+'" style="width:100%;max-height:150px;object-fit:contain">' : ''; return kop ? '<div style="margin-bottom:8px;border-bottom:3px double #000;padding-bottom:6px">'+kop+'</div>' : ''; }
function printLaporan(judul, head, body, extraHTML, subJudul, signatureHTML){
  var tbl = '<table class="rp"><thead><tr>'+head.map(function(h){ return '<th>'+esc(h)+'</th>'; }).join('')+'</tr></thead><tbody>';
  if(!body.length) tbl += '<tr><td colspan="'+head.length+'" style="text-align:center;padding:22px">Tidak ada data</td></tr>';
  else body.forEach(function(r){ tbl += '<tr>'+r.map(function(c){ return '<td>'+esc(c==null?'':c)+'</td>'; }).join('')+'</tr>'; });
  tbl += '</tbody></table>';
  var content = '<h2 class="rptitle">'+esc(judul)+'</h2>'+(subJudul?'<div class="rpsub">'+esc(subJudul)+'</div>':'')+tbl+(extraHTML||'');
  if(signatureHTML === undefined) signatureHTML = ttdGuruBKHTML();
  printRaw(judul, content, signatureHTML);
}
function printRaw(judul, bodyHTML, signatureHTML){
  var w = window.open('', '_blank'); if(!w){ toast('Popup diblokir','er'); return; }
  var css = '@page{size:A4;margin:1.5cm}body{font-family:"Times New Roman",serif;color:#000;font-size:12.5pt;line-height:1.5}h2.rptitle{text-align:center;font-size:15pt;margin:14px 0 4px;text-transform:uppercase}.rpsub{text-align:center;font-size:11pt;margin-bottom:16px;color:#333}table.rp{width:100%;border-collapse:collapse;font-size:11pt;margin-top:10px}table.rp th,table.rp td{border:1px solid #000;padding:6px 8px;vertical-align:top;text-align:left}table.rp th{background:#e8eef7;font-weight:bold;text-align:center}table.rp td{white-space:pre-wrap}img{max-width:100%}';
  w.document.write('<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+esc(judul)+'</title><style>'+css+'</style></head><body>'+kopHTML()+bodyHTML+(signatureHTML||'')+'<scr'+'ipt>setTimeout(function(){window.print();},600);</scr'+'ipt></body></html>');
  w.document.close();
}
function exportExcel(filename, head, body){
  var html = '<html><head><meta charset="utf-8"></head><body><table border="1" style="font-family:Arial;font-size:11pt">';
  html += '<tr>'+head.map(function(h){ return '<th style="background:#1a73e8;color:#fff;padding:6px">'+esc(h)+'</th>'; }).join('')+'</tr>';
  if(!body.length) html += '<tr><td colspan="'+head.length+'">Tidak ada data</td></tr>';
  body.forEach(function(r){ html += '<tr>'+r.map(function(c){ return '<td style="padding:5px">'+esc(c==null?'':c)+'</td>'; }).join('')+'</tr>'; });
  html += '</table></body></html>';
  var blob = new Blob(['\ufeff' + html], {type:'application/vnd.ms-excel;charset=utf-8'});
  var a = document.createElement('a'); a.href = URL.createObjectURL(blob);
  a.download = filename.replace(/[^\w\-]+/g,'_') + '.xls';
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 4000);
  toast('File Excel berhasil diunduh');
}
function bacaFileMentah(file){
  return new Promise(function(resolve, reject){
    if(!file){ reject(new Error('Tidak ada file')); return; }
    var name = (file.name||'').toLowerCase();
    var reader = new FileReader();
    reader.onerror = function(){ reject(new Error('Gagal membaca file')); };
    reader.onload = function(ev){
      var result = ev.target.result;
      try{
        if(typeof result === 'string'){
          var txt = result.replace(/^\ufeff/, '');
          if(/<\s*table|<\s*html|<!DOCTYPE/i.test(txt)) resolve(parseHTMLTable(txt));
          else resolve(parseCSVText(txt));
          return;
        }
        var bytes = new Uint8Array(result);
        if(bytes.length === 0){ reject(new Error('File kosong')); return; }
        ensureXLSXLoaded().then(function(XLSX){
          try{
            var wb = XLSX.read(bytes, {type:'array'});
            if(!wb || !wb.SheetNames || !wb.SheetNames.length) return reject(new Error('Excel kosong'));
            var ws = wb.Sheets[wb.SheetNames[0]];
            resolve(XLSX.utils.sheet_to_json(ws, {header:1, raw:false, defval:''}));
          }catch(err){ reject(new Error('Format tidak dikenali')); }
        }).catch(reject);
      }catch(e){ reject(e); }
    };
    if(name.endsWith('.csv') || name.endsWith('.txt')) reader.readAsText(file, 'UTF-8');
    else reader.readAsArrayBuffer(file);
  });
}
function ensureXLSXLoaded(){
  if(window.XLSX) return Promise.resolve(window.XLSX);
  if(window._xlsxLoading) return window._xlsxLoading;
  window._xlsxLoading = new Promise(function(resolve, reject){
    var s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';
    s.onload = function(){ resolve(window.XLSX); };
    s.onerror = function(){ reject(new Error('Gagal memuat library Excel')); };
    document.head.appendChild(s);
  });
  return window._xlsxLoading;
}
function parseHTMLTable(html){
  var doc; try{ doc = new DOMParser().parseFromString(html, 'text/html'); }catch(e){ throw new Error('Gagal parsing HTML'); }
  var table = doc.querySelector('table'); if(!table) throw new Error('Tabel tidak ditemukan');
  var rows = []; var trs = table.querySelectorAll('tr');
  for(var i=0;i<trs.length;i++){
    var cells = trs[i].querySelectorAll('th, td'); var row = [];
    for(var j=0;j<cells.length;j++) row.push((cells[j].textContent||'').trim());
    if(row.length) rows.push(row);
  }
  return rows;
}
function parseCSVText(text){
  text = String(text||'').replace(/^\ufeff/, '');
  var lines = text.split(/\r?\n/).filter(function(l){ return l.trim(); });
  return lines.map(function(l){
    var result = []; var cur = ''; var inQuote = false;
    for(var i=0;i<l.length;i++){
      var c = l[i];
      if(c === '"'){ if(inQuote && l[i+1] === '"'){ cur += '"'; i++; } else inQuote = !inQuote; }
      else if((c === ',' || c === ';' || c === '\t') && !inQuote){ result.push(cur.trim()); cur = ''; }
      else cur += c;
    }
    result.push(cur.trim()); return result;
  });
}
function normalizeBulan(s){
  s = String(s||'').trim(); if(!s) return '';
  var m = s.match(/^(\d{4})[-\/.](\d{1,2})$/);
  if(m) return m[1]+'-'+pad2(+m[2]);
  m = s.match(/^(\d{1,2})[-\/.](\d{4})$/);
  if(m) return m[2]+'-'+pad2(+m[1]);
  m = s.match(/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/);
  if(m) return m[3]+'-'+pad2(+m[2]);
  var bulanNames = {januari:1,jan:1,februari:2,feb:2,maret:3,mar:3,april:4,apr:4,mei:5,may:5,juni:6,jun:6,juli:7,jul:7,agustus:8,agu:8,ags:8,aug:8,september:9,sept:9,sep:9,oktober:10,okt:10,oct:10,november:11,nov:11,desember:12,des:12,dec:12};
  var ml = s.toLowerCase().match(/([a-z]+)\s+(\d{4})/);
  if(ml && bulanNames[ml[1]]) return ml[2]+'-'+pad2(bulanNames[ml[1]]);
  ml = s.toLowerCase().match(/(\d{4})\s+([a-z]+)/);
  if(ml && bulanNames[ml[2]]) return ml[1]+'-'+pad2(bulanNames[ml[2]]);
  var d = new Date(s);
  if(!isNaN(d.getTime())) return d.getFullYear()+'-'+pad2(d.getMonth()+1);
  return '';
}
function parseAbsenArray(arr, kelas, defaultBulan){
  var result = { byMonth: {}, unmatched: [], totalEntries: 0, monthList: [] };
  defaultBulan = defaultBulan || '';
  if(!arr || !arr.length) throw new Error('File kosong');
  var header = (arr[0]||[]).map(function(x){ return String(x||'').trim(); });
  var headerLower = header.map(function(x){ return x.toLowerCase(); });
  var nisIdx = -1, namaIdx = -1, bulanIdx = -1;
  headerLower.forEach(function(h, i){
    if(nisIdx<0 && /(^|\b|_)(nis|induk|nomor\s*induk|no[\.\s_-]?induk)\b/.test(h)) nisIdx = i;
    if(namaIdx<0 && /nama/.test(h)) namaIdx = i;
    if(bulanIdx<0 && /^(bulan|periode|month)$/.test(h)) bulanIdx = i;
  });
  var dateCols = [];
  var skipHeaderRegex = /^(no|nomor|#|s|i|a|total|jumlah|sakit|izin|alpa|hadir|keterangan|ket|nis|nama|bulan|periode|month)$/i;
  header.forEach(function(h, i){
    var hh = String(h).trim();
    if(skipHeaderRegex.test(hh)) return;
    var m = hh.match(/(?:^|[^\d])(\d{1,2})(?:[^\d]|$)/);
    if(m){
      var n = parseInt(m[1], 10);
      if(n >= 1 && n <= 31){
        if(i === nisIdx || i === namaIdx || i === bulanIdx) return;
        if(!dateCols.some(function(dc){ return dc.day === n; })) dateCols.push({index:i, day:n});
      }
    }
  });
  dateCols.sort(function(a,b){ return a.day - b.day; });
  if(!dateCols.length) throw new Error('Kolom tanggal tidak terdeteksi');
  var siswaKelas = (ST.siswa||[]).filter(function(s){ return String(s.Kelas) === String(kelas); });
  if(!siswaKelas.length) throw new Error('Tidak ada siswa di kelas "'+kelas+'"');
  for(var i=1;i<arr.length;i++){
    var row = arr[i] || [];
    var hasAny = row.some(function(c){ return String(c||'').trim() !== ''; });
    if(!hasAny) continue;
    var nis = nisIdx >= 0 ? String(row[nisIdx]||'').trim() : '';
    var nama = namaIdx >= 0 ? String(row[namaIdx]||'').trim() : '';
    var siswa = null;
    if(nis) siswa = siswaKelas.find(function(s){ return String(s.NIS) === nis; });
    if(!siswa && nama){ var nm = nama.toLowerCase().trim(); siswa = siswaKelas.find(function(s){ return String(s.Nama||'').toLowerCase().trim() === nm; }); }
    if(!siswa){ result.unmatched.push((nama || nis || '(baris '+(i+1)+')')); continue; }
    var rowBulan = '';
    if(bulanIdx >= 0) rowBulan = normalizeBulan(String(row[bulanIdx]||'').trim());
    if(!rowBulan) rowBulan = defaultBulan;
    if(!rowBulan){ result.unmatched.push((nama || nis) + ' (bulan tidak diketahui)'); continue; }
    var statuses = {};
    dateCols.forEach(function(dc){
      var raw = String(row[dc.index]||'').trim().toUpperCase();
      var v = '';
      if(/^(H|HADIR|V|✓|√|Y|YA|1)$/.test(raw)) v = 'H';
      else if(/^(S|SAKIT|SAK)$/.test(raw)) v = 'S';
      else if(/^(I|IZIN|IDZIN)$/.test(raw)) v = 'I';
      else if(/^(A|ALPA|ALPHA|TK|X|-$)/.test(raw)) v = 'A';
      if(v) statuses[String(dc.day)] = v;
    });
    if(Object.keys(statuses).length){
      result.byMonth[rowBulan] = result.byMonth[rowBulan] || [];
      result.byMonth[rowBulan].push({ NIS: siswa.NIS, Nama: siswa.Nama, statuses: statuses });
      result.totalEntries += Object.keys(statuses).length;
      if(result.monthList.indexOf(rowBulan) < 0) result.monthList.push(rowBulan);
    }
  }
  result.monthList.sort();
  return result;
}

document.addEventListener('DOMContentLoaded', async function(){
  console.log('[BK] Supabase URL =', SUPABASE_URL);
  console.log('[BK] Edge Function URL =', SUPABASE_FN_URL);
  applyTheme();
  try{
    if(location.protocol.startsWith('http')){
      var manifest = { name:'Aplikasi Layanan BK', short_name:'BK Klirong', start_url:'.', scope:'.', display:'standalone', background_color:'#eef2f7', theme_color:'#1a73e8' };
      var blob = new Blob([JSON.stringify(manifest)], { type:'application/manifest+json' });
      var link = document.createElement('link'); link.rel = 'manifest'; link.href = URL.createObjectURL(blob);
      document.head.appendChild(link);
    }
  }catch(e){}
  try{
    var sess = JSON.parse(localStorage.getItem('bk_session') || 'null');
    if(sess && sess.token){
      if(sess.expiresAt && sess.expiresAt < Date.now()){ console.log('[BK] Sesi kadaluwarsa (lokal)'); try{ localStorage.removeItem('bk_session'); }catch(_){} }
      else {
        console.log('[BK] Restore sesi dari localStorage');
        ST.token = sess.token;
        ST.user = sess.user;
        ST.guru = sess.guru || null;
        startApp();
        return;
      }
    }
  }catch(e){ console.error('[BK] restore error', e); }
  var u = document.getElementById('lgUser'); if(u) u.focus();
  var p = document.getElementById('lgPass');
  if(p) p.addEventListener('keydown', function(e){ if(e.key === 'Enter') doLogin(); });
  var ov = document.getElementById('ov');
  if(ov) ov.addEventListener('click', function(e){ if(e.target.id === 'ov') closeModal(); });
});