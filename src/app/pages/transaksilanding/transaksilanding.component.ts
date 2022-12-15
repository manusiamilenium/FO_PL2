import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-transaksilanding',
  templateUrl: './transaksilanding.component.html',
  styleUrls: ['./transaksilanding.component.scss']
})
export class TransaksilandingComponent implements OnInit {

  public listJadwal: Array<any>
  public idperiode: String
  public isempty: boolean = true
  public tahun : String

  constructor(private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private api : ApiService) {

  }
  ngOnInit(): void {
    this.idperiode = this.route.snapshot.params['idperiode'];
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan/" + this.idperiode, this.api.generateHeader()).subscribe((result: any) => { this.tahun = result.data.tahun }, error => { });
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/AllPerPeriode/" + this.idperiode, this.api.generateHeader()).subscribe((result: any) => {
      this.listJadwal = result.data
      this.listJadwal = result.data.filter(trans => ["Permohonan Dikirim"].includes(trans.statusPengiriman))
      console.log(result)
      if (this.listJadwal.length > 0) {
        this.isempty = false
      }
    }, error => {});

  } 
}
