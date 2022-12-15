import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Jadwal } from '@/type/jadwal';

import { v4 as uuidv4 } from 'uuid'
import { AlamatService } from '@services/alamat.service';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-transaksiadd',
  templateUrl: './transaksiadd.component.html',
  styleUrls: ['./transaksiadd.component.scss']
})
export class TransaksiaddComponent implements OnInit {

  public jadwal: any = {}

  public isAddMode: boolean
  public isEditMode: boolean
  public isPreview: boolean
  public idjadwal: any
  public idpreview: any

  public id: String
  public transaksiForm: UntypedFormGroup
  public isBatal: boolean = false
  public provinsi: any = []
  public kab: any = []
  public kec: any = []
  public kel: any = []
  public provinsi1: any = []
  public kab1: any = []
  public kec1: any = []
  public kel1: any = []
  public isUangJaminan: boolean = false
  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private alamatService: AlamatService,
    private http: HttpClient,
    private api: ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.idjadwal = this.route.snapshot.params['idjadwal'];
    this.idpreview = this.route.snapshot.params['idpreview'];
    this.isAddMode = this.idjadwal ? true : false;
    this.isPreview = this.idpreview ? true : false;
    this.isEditMode = this.id ? true : false;
    this.alamatService.getAllProvinsi().subscribe((r) => { this.provinsi = r; this.provinsi1 = r; })

    this.transaksiForm = new UntypedFormGroup({
      jadwalLelangId: new UntypedFormControl(null, Validators.required),
      status: new UntypedFormControl(null, Validators.required),
      nomorRisalahLelang: new UntypedFormControl(null, Validators.required),
      tanggalRisalahLelang: new UntypedFormControl(null, Validators.required),
      nikPenjual: new UntypedFormControl(null, Validators.required),
      alamatPenjual: new UntypedFormControl(null, Validators.required),
      rtPenjual: new UntypedFormControl(null, Validators.required),
      rwPenjual: new UntypedFormControl(null, Validators.required),
      provinsiPenjual: new UntypedFormControl(null, Validators.required),
      kabupatenKotaPenjual: new UntypedFormControl(null, Validators.required),
      kecamatanPenjual: new UntypedFormControl(null, Validators.required),
      kelurahanPenjual: new UntypedFormControl(null, Validators.required),
      kodeposPenjual: new UntypedFormControl(null, Validators.required),
      npwpPenjual: new UntypedFormControl(null, Validators.required),
      namaPembeli: new UntypedFormControl(null, Validators.required),
      nikPembeli: new UntypedFormControl(null, Validators.required),
      alamatPembeli: new UntypedFormControl(null, Validators.required),
      rtPembeli: new UntypedFormControl(null, Validators.required),
      rwPembeli: new UntypedFormControl(null, Validators.required),
      provinsiPembeli: new UntypedFormControl(null, Validators.required),
      kabupatenKotaPembeli: new UntypedFormControl(null, Validators.required),
      kecamatanPembeli: new UntypedFormControl(null, Validators.required),
      kelurahanPembeli: new UntypedFormControl(null, Validators.required),
      kodeposPembeli: new UntypedFormControl(null, Validators.required),
      npwpPembeli: new UntypedFormControl(null, Validators.required),
      jumlahPesertaLelang: new UntypedFormControl(null, Validators.required),
      sifatBarang: new UntypedFormControl(null, Validators.required),
      tipeBarang: new UntypedFormControl(null, Validators.required),
      uraianBarang: new UntypedFormControl(null, Validators.required),
      jaminanLelang: new UntypedFormControl(null, Validators.required),
      jaminanLelangBerupaUang: new UntypedFormControl(null, Validators.required),
      jaminanLelangBankGaransi: new UntypedFormControl(null, Validators.required),
      nilaiLimit: new UntypedFormControl(null, Validators.required),
      pokokLelang: new UntypedFormControl(null, Validators.required),
      beaLelangPenjual: new UntypedFormControl(null, Validators.required),
      beaLelangPembeli: new UntypedFormControl(null, Validators.required),
      tanggalPenyerahanKutipanRisalahLelang: new UntypedFormControl(null, Validators.required),
      imbalanJasa: new UntypedFormControl(null, Validators.required),
      keterangan: new UntypedFormControl(null, Validators.required),
      nomorRegisterPembatalan: new UntypedFormControl(null, Validators.required),
      beaLelangBatal: new UntypedFormControl(null, Validators.required),
      alasanPembatalan: new UntypedFormControl(null, Validators.required)
    })
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/" + this.idjadwal, this.api.generateHeader()).subscribe((result: any) => {

      this.jadwal = result.data
      console.log(this.jadwal)

    }, error => {


    });
    if (this.isEditMode || this.isPreview) {
      const idperiode = this.isEditMode ? this.id : this.idpreview
      this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/" + idperiode, this.api.generateHeader()).subscribe((result: any) => {

        this.jadwal = result.data
        console.log(result)
        this.idjadwal = this.jadwal.jadwalLelangId
        this.transaksiForm.patchValue({
          nomerRegistrasi: this.jadwal.nomerRegistrasi,
          tanggalRegistrasi: this.jadwal.tanggalRegistrasi,
          tanggalLelang: this.jadwal.tanggalLelang,
          namaPenjual: this.jadwal.namaPenjual,
          klasifikasiPenjual: this.jadwal.klasifikasiPenjual,
          nomorSuratPermohonan: this.jadwal.nomorSuratPermohonan,
          tanggalSuratPermohonan: this.jadwal.tanggalSuratPermohonan,
          tempatLelang: this.jadwal.tempatLelang,
          sifatLelang: this.jadwal.sifatLelang,
          nomorSuratPenetapanJadwalLelang: this.jadwal.nomorSuratPenetapanJadwalLelang,
          tanggalSuratPenetapanJadwalLelang: this.jadwal.tanggalSuratPenetapanJadwalLelang,
          jadwalLelangId: this.jadwal.jadwalLelangId,
          status: this.jadwal.status,
          nomorRisalahLelang: (isNaN(this.jadwal.nomorRisalahLelang)) ? 0 : this.jadwal.nomorRisalahLelang,
          tanggalRisalahLelang: this.jadwal.tanggalRisalahLelang.split('T')[0],
          nikPenjual: this.jadwal.nikPenjual,
          alamatPenjual: this.jadwal.alamatPenjual,
          rtPenjual: this.jadwal.rtPenjual,
          rwPenjual: this.jadwal.rwPenjual,
          provinsiPenjual: this.jadwal.provinsiPenjual,
          kabupatenKotaPenjual: this.jadwal.kabupatenKotaPenjual,
          kecamatanPenjual: this.jadwal.kecamatanPenjual,
          kelurahanPenjual: this.jadwal.kelurahanPenjual,
          kodeposPenjual: this.jadwal.kodeposPenjual,
          npwpPenjual: this.jadwal.npwpPenjual,
          namaPembeli: this.jadwal.namaPembeli,
          nikPembeli: this.jadwal.nikPembeli,
          alamatPembeli: this.jadwal.alamatPembeli,
          rtPembeli: this.jadwal.rtPembeli,
          rwPembeli: this.jadwal.rwPembeli,
          provinsiPembeli: this.jadwal.provinsiPembeli,
          kabupatenKotaPembeli: this.jadwal.kabupatenKotaPembeli,
          kecamatanPembeli: this.jadwal.kecamatanPembeli,
          kelurahanPembeli: this.jadwal.kelurahanPembeli,
          kodeposPembeli: this.jadwal.kodeposPembeli,
          npwpPembeli: this.jadwal.npwpPembeli,
          jumlahPesertaLelang: (isNaN(this.jadwal.jumlahPesertaLelang)) ? 0 : this.jadwal.jumlahPesertaLelang,
          sifatBarang: this.jadwal.sifatBarang,
          tipeBarang: this.jadwal.tipeBarang,
          uraianBarang: this.jadwal.uraianBarang,
          jaminanLelang: this.jadwal.jaminanLelang,
          jaminanLelangBerupaUang: (isNaN(this.jadwal.jaminanLelangBerupaUang)) ? 0 : this.jadwal.jaminanLelangBerupaUang,
          jaminanLelangBankGaransi: this.jadwal.jaminanLelangBankGaransi,
          nilaiLimit: (isNaN(this.jadwal.nilaiLimit)) ? 0 : this.jadwal.nilaiLimit,
          pokokLelang: (isNaN(this.jadwal.pokokLelang)) ? 0 : this.jadwal.pokokLelang,
          beaLelangPenjual: (isNaN(this.jadwal.beaLelangPenjual)) ? 0 : this.jadwal.beaLelangPenjual,
          beaLelangPembeli: (isNaN(this.jadwal.beaLelangPembeli)) ? 0 : this.jadwal.beaLelangPembeli,
          tanggalPenyerahanKutipanRisalahLelang: this.jadwal.tanggalPenyerahanKutipanRisalahLelang.split('T')[0],
          imbalanJasa: (isNaN(this.jadwal.imbalanJasa)) ? 0 : this.jadwal.imbalanJasa,
          keterangan: this.jadwal.keterangan,
          nomorRegisterPembatalan: (isNaN(this.jadwal.nomorRegisterPembatalan)) ? 0 : this.jadwal.nomorRegisterPembatalan,
          beaLelangBatal: this.jadwal.beaLelangBatal,
          alasanPembatalan: this.jadwal.alasanPembatalan


        })

      }, error => {

      });

      if (this.isPreview) {
        this.transaksiForm.disable()
      }
    }


  }
  async selectProvinsi(id) {
    console.log("provinsi:", id)
    this.alamatService.selectProvinsi(id).subscribe((r) => { this.kab = r; this.kab1 = r })
  }
  async selectKab(id) {
    console.log("kab:", id)
    this.alamatService.selectKab(id).subscribe((r) => { this.kec = r; this.kec1 = r })
  }
  async selectKec(id) {
    console.log("kec:", id)
    this.alamatService.selectKec(id).subscribe((r) => { this.kel = r; this.kel1 = r })
  }

  onBatal(value) {
    this.isBatal = value == "Batal" ? true : false

  }
  onJaminan(value) {
    this.isUangJaminan = value == "Uang Jaminan" ? true : false

  }


  savetransaksi() {
    if (confirm("Apakah anda sudah mengisi data dengan lengkap dan benar?")) {
      let url = "https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/" 
      if (this.isAddMode) {
        this.http.post(url, this.generateBodyReq(this.transaksiForm.value), this.api.generateHeader()).subscribe(data => {
          console.log("post ressult ", data);
          this.toastr.info("Data Tersimpan")
          this.router.navigate(['/transaksidetail/' + this.idjadwal]);

        }, error => {
          this.toastr.error("Tidak dapat menyimpan transaksi, Periksa kembali isian Anda");
          console.log(error);
        });
      } else {
        this.http.put(url + this.id, this.generateBodyReq(this.transaksiForm.value), this.api.generateHeader()).subscribe(data => {
          console.log("post ressult ", data);
          this.toastr.info("Data Dirubah")
          this.router.navigate(['/transaksidetail/' + this.idjadwal]);

        }, error => {
          this.toastr.error("Tidak dapat menyimpan transaksi, Periksa kembali isian Anda");
          console.log(error);
        });
      }

    }
  }
  formatDate(dtstring) {
    return dtstring.split('T')[0]
  }
  generateBodyReq(formValue: any) {
    let id = this.id === "" ? uuidv4() : this.id
    let bodyreq = {
      id: this.id,
      periodeLaporanId: this.jadwal.periodeLaporanId,
      jadwalLelangId: this.idjadwal,
      status: formValue.status,
      nomorRisalahLelang: (isNaN(formValue.nomorRisalahLelang)) ? 0 : formValue.nomorRisalahLelang,
      tanggalRisalahLelang: formValue.tanggalRisalahLelang,
      nikPenjual: formValue.nikPenjual,
      alamatPenjual: formValue.alamatPenjual,
      rtPenjual: formValue.rtPenjual,
      rwPenjual: formValue.rwPenjual,
      provinsiPenjual: formValue.provinsiPenjual,
      kabupatenKotaPenjual: formValue.kabupatenKotaPenjual,
      kecamatanPenjual: formValue.kecamatanPenjual,
      kelurahanPenjual: formValue.kelurahanPenjual,
      kodeposPenjual: formValue.kodeposPenjual,
      npwpPenjual: formValue.npwpPenjual,
      namaPembeli: formValue.namaPembeli,
      nikPembeli: formValue.nikPembeli,
      alamatPembeli: formValue.alamatPembeli,
      rtPembeli: formValue.rtPembeli,
      rwPembeli: formValue.rwPembeli,
      provinsiPembeli: formValue.provinsiPembeli,
      kabupatenKotaPembeli: formValue.kabupatenKotaPembeli,
      kecamatanPembeli: formValue.kecamatanPembeli,
      kelurahanPembeli: formValue.kelurahanPembeli,
      kodeposPembeli: formValue.kodeposPembeli,
      npwpPembeli: formValue.npwpPembeli,
      jumlahPesertaLelang: (isNaN(formValue.jumlahPesertaLelang)) ? 0 : formValue.jumlahPesertaLelang,
      sifatBarang: formValue.sifatBarang,
      tipeBarang: formValue.tipeBarang,
      uraianBarang: formValue.uraianBarang,
      jaminanLelang: formValue.jaminanLelang,
      jaminanLelangBerupaUang: Number(formValue.jaminanLelangBerupaUang),
      jaminanLelangBankGaransi: formValue.jaminanLelangBankGaransi,
      nilaiLimit: Number(formValue.nilaiLimit.replace(/[^0-9.-]+/g, "")),
      pokokLelang: Number(formValue.pokokLelang.replace(/[^0-9.-]+/g, "")),
      beaLelangPenjual: Number(formValue.beaLelangPenjual.replace(/[^0-9.-]+/g, "")),
      beaLelangPembeli: Number(formValue.beaLelangPembeli.replace(/[^0-9.-]+/g, "")),
      tanggalPenyerahanKutipanRisalahLelang: formValue.tanggalPenyerahanKutipanRisalahLelang,
      imbalanJasa: Number(formValue.imbalanJasa.replace(/[^0-9.-]+/g, "")),
      keterangan: formValue.keterangan,
      nomorRegisterPembatalan: (isNaN(formValue.nomorRegisterPembatalan)) ? 0 : formValue.nomorRegisterPembatalan,
      beaLelangBatal: formValue.beaLelangBatal,
      alasanPembatalan: formValue.alasanPembatalan



    }
    console.log(bodyreq)
    return bodyreq

  }

}
