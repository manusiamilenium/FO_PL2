import {AppState} from '@/store/state';
import {UiState} from '@/store/ui/state';
import {Component, HostBinding, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { AuthService } from '@services/auth.service';
import {Observable} from 'rxjs';

const BASE_CLASSES = 'main-sidebar elevation-4';
@Component({
    selector: 'app-menu-sidebar',
    templateUrl: './menu-sidebar.component.html',
    styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {
    @HostBinding('class') classes: string = BASE_CLASSES;
    public ui: Observable<UiState>;
    public user;
    public menu = MENU;

    constructor(
        public AuthService: AuthService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state: UiState) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.AuthService.user;
        let role = this.AuthService.getRole();
        console.log(this.menu, this.user)
        if (role.toString() == "UserPLII"){
            this.menu = [
                
                        {
                            name: 'Home',
                            iconClasses: 'fas fa-home',
                            path: ['/']
                        },
                         
                        {
                            name: 'Jadwal Lelang',
                            iconClasses: 'fas fa-calendar',
                            path: ['/jadwallist']
                        },
            
                        {
                            name: 'Transaksi Lelang',
                            iconClasses: 'fas fa-book',
                            path: ['/transaksilist']
                        },
                        {
                            name: 'Penyetoran Bea',
                            iconClasses: 'fas fa-credit-card',
                            path: ['/bealist']
                        },
                        {
                            name: 'Penyetoran BPHTB',
                            iconClasses: 'fas fa-building',
                            path: ['/bphlist']
                        },
                        {
                            name: 'Kertas Sekuriti',
                            iconClasses: 'fas fa-lock ',
                            path: ['/kslist']
                        }
            ]

        }else if (role.toString() == "P2PK"){
            this.menu = [ 
                        {
                            name: 'Back Office',
                            iconClasses: 'far fa-address-book',
                            path: ['/dash-bo']
                        }  
            ]
        }
        
        
    }
}

export const MENU = [
    {
        name: 'Perizinan dan Profil',
        iconClasses: 'fas fa-file',
        path: ['/blank1']
    },
    {
        name: 'Pelaporan Kegiatan',
        iconClasses: 'fas ffa-file',
        children: [
            {
                name: 'Dashboard',
                iconClasses: 'far fa-address-book',
                path: ['/']
            },
            {
                name: 'Back Office',
                iconClasses: 'far fa-address-book',
                path: ['/dash-bo']
            },
            {
                name: 'Jadwal Lelang',
                iconClasses: 'far fa-address-book',
                path: ['/jadwallist']
            },

            {
                name: 'Transaksi Lelang',
                iconClasses: 'fas fa-file',
                path: ['/transaksilist']
            },
            {
                name: 'Penyetoran Bea',
                iconClasses: 'fas fa-file',
                path: ['/bealist']
            },
            {
                name: 'Penyetoran BPHTB',
                iconClasses: 'fas fa-file',
                path: ['/bphlist']
            },
            {
                name: 'Kertas Sekuriti',
                iconClasses: 'fas fa-file',
                path: ['/kslist']
            }
        ]

    },
    {
        name: 'Pelaporan PPL',
        iconClasses: 'fas ffa-file',
        path: ['/b']
    },
     
];
