import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-bealanding',
  templateUrl: './bealanding.component.html',
  styleUrls: ['./bealanding.component.scss']
})
export class BealandingComponent implements OnInit {

  public listTrans: Array<any>
  public idperiode: String
  public isempty: boolean = true
  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private api: ApiService) {

  }

  ngOnInit(): void {
    this.idperiode = this.route.snapshot.params['idperiode']
    this.onLoadData()
  }
  onLoadData() {
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.api.generateHeader()).subscribe((result: any) => {
      //query are overrated
      this.listTrans = result.data.filter(trans => [this.idperiode].includes(trans.periodeLaporanId))
      this.listTrans = this.listTrans.filter(trans => ["Permohonan Dikirim"].includes(trans.statusPengiriman))
      console.log(result)
      if (this.listTrans.length > 0) {
        this.isempty = false

      }
    }, error => { });
  }
  onKirim(idtrans) {
    if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
      console.log(idtrans);
      this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/Kirim?id=" + idtrans, this.api.generateHeader()).subscribe(data => {
        console.log("post ressult ", data);
        this.toastr.info("Jadwal Terkirim ke P2PK")
        this.router.navigate(['/jadwaldetail/' + this.idperiode]);

      }, error => {
        this.toastr.error("Tidak dapat mengirim data, Periksa kembali data Anda");
        console.log(error);
      });
    }
  }



}
