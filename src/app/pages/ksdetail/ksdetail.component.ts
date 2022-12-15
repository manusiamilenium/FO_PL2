import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';


@Component({
  selector: 'app-ksdetail',
  templateUrl: './ksdetail.component.html',
  styleUrls: ['./ksdetail.component.scss']
})
export class KsdetailComponent implements OnInit {

  public listTrans: Array<any>
  public idperiode: String
  public isempty: boolean = true
  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private api : ApiService) {

  }

  ngOnInit(): void {
    this.idperiode = this.route.snapshot.params['idperiode'];

    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.api.generateHeader()).subscribe((result: any) => {

      this.listTrans = result.data
      console.log(result)
      if (this.listTrans.length > 0) {
        this.isempty = false

      }
    }, error => {


    });
  } 
  onKirim(idjadwal) {
    console.log(idjadwal);
    if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
        console.log(idjadwal);
        const bodyreq = { id: idjadwal }
        this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/Kirim", null, this.api.generateHeaderWithParams(bodyreq)).subscribe(data => {
            console.log("post ressult ", data);
            this.toastr.info("Jadwal Terkirim ke P2PK")
            this.router.navigate(['/jadwaldetail/' + this.idperiode]);
            //this.loadJadwal()

        }, error => {
            this.toastr.error("Tidak dapat mengirim data, Periksa kembali data Anda");
            console.log(error);
        });
    }
}


}
