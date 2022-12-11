import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiService } from '@services/api.service';
 

@Component({
    selector: 'app-jadwaldetail',
    templateUrl: './jadwaldetail.component.html',
    styleUrls: ['./jadwaldetail.component.scss']
})
export class JadwalDetailComponent {
    public listJadwal: Array<any>
    public idperiode: String
    public isempty: boolean = true

    constructor(private toastr: ToastrService,
        private route: ActivatedRoute,
        private router: Router,
        private http: HttpClient,
        private api:ApiService) {

    }
    ngOnInit(): void {
        this.idperiode = this.route.snapshot.params['idperiode'];
       this.loadJadwal()
    }
    loadJadwal(){
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/AllPerPeriode/" + this.idperiode, this.api.generateHeader()).subscribe((result: any) => {

            this.listJadwal = result.data 
            console.log(result)
            if (this.listJadwal.length > 0) {
                this.isempty = false

            }
        }, error => { });
    }
   
    formatStatus(status){
        switch (status){
            case 'Draft Permohonan':return'Draft';break;
            case 'Permohonan Dikirim':return'Terkirim ke BO';break;
        }
    }
     
    onKirim(idjadwal) {
        console.log(idjadwal);
        if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
            console.log(idjadwal);
            const bodyreq = { id: idjadwal }
            this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/Kirim", null,this.api.generateHeaderWithParams(bodyreq)).subscribe(data => {
                console.log("post ressult ", data);
                this.toastr.info("Jadwal Terkirim ke P2PK")
                this.router.navigate(['/jadwaldetail/' + this.idperiode]);
                this.loadJadwal()

            }, error => {
                this.toastr.error("Tidak dapat mengirim data, Periksa kembali data Anda");
                console.log(error);
            });
        }
    }

}
