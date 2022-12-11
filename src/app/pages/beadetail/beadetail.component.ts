import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-beadetail',
  templateUrl: './beadetail.component.html',
  styleUrls: ['./beadetail.component.scss']
})
export class BeadetailComponent implements OnInit {

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
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/LaporanPenyetoranBeaLelang", this.api.generateHeader()).subscribe((result: any) => {

      this.listTrans = result.data
      console.log(result)
      if (this.listTrans.length > 0) {
        this.isempty = false

      }
    }, error => { });
  }
}
