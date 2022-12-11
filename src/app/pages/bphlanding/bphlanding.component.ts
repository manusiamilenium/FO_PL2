import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';

@Component({
  selector: 'app-bphlanding',
  templateUrl: './bphlanding.component.html',
  styleUrls: ['./bphlanding.component.scss']
})
export class BphlandingComponent implements OnInit {

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

      //this.listTrans = result.data
      this.listTrans = result.data.filter(trans => [this.idperiode].includes(trans.periodeLaporanId))
      this.listTrans = this.listTrans.filter(trans => ["Tanah","Tanah dan Bangunan"].includes(trans.tipeBarang))
      console.log(result)
      if (this.listTrans.length > 0) {
        this.isempty = false

      }
    }, error => { });
  } 

}
