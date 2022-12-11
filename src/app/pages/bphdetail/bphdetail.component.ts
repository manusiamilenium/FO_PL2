import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-bphdetail',
  templateUrl: './bphdetail.component.html',
  styleUrls: ['./bphdetail.component.scss']
})
export class BphdetailComponent implements OnInit {

  public listTrans: Array<any>
  public idtrans: String
  public isempty: boolean = true
  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private api : ApiService) {

  }

  ngOnInit(): void {
    this.idtrans = this.route.snapshot.params['idtrans']
    this.onLoadData()
  }
  onLoadData(){
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/LaporanRisalahLelangPengenaanBPHTB", this.api.generateHeader()).subscribe((result: any) => {

      //this.listTrans = result.data
      this.listTrans = result.data.filter(trans => [this.idtrans].includes(trans.transaksiLelangId))
      console.log(result)
      if (this.listTrans.length > 0) {
        this.isempty = false

      }
    }, error => { });
  }
  onKirim(idtrans) {
    if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
      console.log(idtrans);
      this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/LaporanRisalahLelangPengenaanBPHTB/Kirim?id=" + idtrans, null, this.api.generateHeader()).subscribe(data => {
        console.log("post ressult ", data);
        this.toastr.info("Transaksi Terkirim ke Back Office PPPK")
        this.onLoadData()

      }, error => {
        this.toastr.error("Tidak dapat mengirim data, coba kembali nanti")
        console.log(error);
      });
    }
  }

}
