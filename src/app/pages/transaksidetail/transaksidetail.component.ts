import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-transaksidetail',
  templateUrl: './transaksidetail.component.html',
  styleUrls: ['./transaksidetail.component.scss']
})
export class TransaksidetailComponent implements OnInit {
  public listTrans: Array<any>
  public idjadwal: String
  public isempty: boolean = true
  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private api: ApiService) {

  }

  ngOnInit(): void {
    this.idjadwal = this.route.snapshot.params['idjadwal']
    this.loadTransaction()

  }
  loadTransaction() {
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.api.generateHeader()).subscribe((result: any) => {
      if (result.data) {
        this.listTrans = result.data.filter(trans => [this.idjadwal].includes(trans.jadwalLelangId))
        if (this.listTrans.length > 0) {
          this.isempty = false
        }
      }
      console.log(result)

    }, error => { });

  }
  formatStatus(status) {
    switch (status) {
      case 'Draft Permohonan': return 'Draft'; break;
      case 'Permohonan Dikirim': return 'Terkirim ke BO'; break;
    }
  }
  onKirim(idtrans) {
    if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
      console.log(idtrans);
      this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/Kirim?id=" + idtrans, null, this.api.generateHeader()).subscribe(data => {
        console.log("post ressult ", data);
        this.toastr.info("Transaksi Terkirim ke Back Office PPPK")
        this.loadTransaction()

      }, error => {
        this.toastr.error("Tidak dapat mengirim data, coba kembali nanti")
        console.log(error);
      });
    }
  }



}
