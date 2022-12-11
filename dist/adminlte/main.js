"use strict";
(self["webpackChunkadminlte"] = self["webpackChunkadminlte"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/main/main.component */ 8187);
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/blank/blank.component */ 7276);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/login/login.component */ 744);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/profile/profile.component */ 8220);
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/register/register.component */ 280);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_periode_periode_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/periode/periode.component */ 1162);
/* harmony import */ var _pages_jadwallist_jadwallist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/jadwallist/jadwallist.component */ 4358);
/* harmony import */ var _pages_jadwaldetail_jadwaldetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/jadwaldetail/jadwaldetail.component */ 9936);
/* harmony import */ var _pages_jadwaladd_jadwaladd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/jadwaladd/jadwaladd.component */ 1791);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @guards/auth.guard */ 5107);
/* harmony import */ var _guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @guards/non-auth.guard */ 6624);
/* harmony import */ var _modules_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @modules/forgot-password/forgot-password.component */ 1636);
/* harmony import */ var _modules_recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modules/recover-password/recover-password.component */ 4928);
/* harmony import */ var _modules_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/privacy-policy/privacy-policy.component */ 918);
/* harmony import */ var _pages_main_menu_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @pages/main-menu/sub-menu/sub-menu.component */ 3895);
/* harmony import */ var _pages_transaksilist_transaksilist_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @pages/transaksilist/transaksilist.component */ 8680);
/* harmony import */ var _pages_transaksidetail_transaksidetail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @pages/transaksidetail/transaksidetail.component */ 9271);
/* harmony import */ var _pages_transaksiadd_transaksiadd_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @pages/transaksiadd/transaksiadd.component */ 4518);
/* harmony import */ var _pages_bealist_bealist_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @pages/bealist/bealist.component */ 8896);
/* harmony import */ var _pages_beadetail_beadetail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @pages/beadetail/beadetail.component */ 4739);
/* harmony import */ var _pages_beatambah_beatambah_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @pages/beatambah/beatambah.component */ 540);
/* harmony import */ var _pages_transaksilanding_transaksilanding_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @pages/transaksilanding/transaksilanding.component */ 3805);
/* harmony import */ var _pages_bphlist_bphlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @pages/bphlist/bphlist.component */ 5872);
/* harmony import */ var _pages_bphdetail_bphdetail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @pages/bphdetail/bphdetail.component */ 5812);
/* harmony import */ var _pages_bphadd_bphadd_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @pages/bphadd/bphadd.component */ 4218);
/* harmony import */ var _pages_bealanding_bealanding_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @pages/bealanding/bealanding.component */ 8324);
/* harmony import */ var _pages_kslist_kslist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @pages/kslist/kslist.component */ 2301);
/* harmony import */ var _pages_ksdetail_ksdetail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @pages/ksdetail/ksdetail.component */ 971);
/* harmony import */ var _pages_ksadd_ksadd_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @pages/ksadd/ksadd.component */ 7147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2560);

































const routes = [
    {
        path: '',
        component: _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard],
        canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_10__.AuthGuard],
        children: [
            {
                path: 'profile',
                component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent
            },
            {
                path: 'blank',
                component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent
            },
            {
                path: 'sub-menu-1',
                component: _pages_main_menu_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_15__.SubMenuComponent
            },
            {
                path: 'sub-menu-2',
                component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_1__.BlankComponent
            },
            {
                path: '',
                component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent
            },
            {
                path: 'periode',
                component: _pages_periode_periode_component__WEBPACK_IMPORTED_MODULE_6__.PeriodeComponent
            },
            {
                path: 'jadwallist',
                component: _pages_jadwallist_jadwallist_component__WEBPACK_IMPORTED_MODULE_7__.JadwallistComponent
            },
            {
                path: 'jadwaldetail/:idperiode',
                component: _pages_jadwaldetail_jadwaldetail_component__WEBPACK_IMPORTED_MODULE_8__.JadwalDetailComponent
            },
            {
                path: 'jadwaladd/periode/:idperiode',
                component: _pages_jadwaladd_jadwaladd_component__WEBPACK_IMPORTED_MODULE_9__.JadwaladdComponent
            },
            {
                path: 'jadwaladd/preview/:idpreview',
                component: _pages_jadwaladd_jadwaladd_component__WEBPACK_IMPORTED_MODULE_9__.JadwaladdComponent
            },
            {
                path: 'jadwaladd/:id',
                component: _pages_jadwaladd_jadwaladd_component__WEBPACK_IMPORTED_MODULE_9__.JadwaladdComponent
            },
            {
                path: 'transaksi/:idperiode',
                component: _pages_transaksilanding_transaksilanding_component__WEBPACK_IMPORTED_MODULE_22__.TransaksilandingComponent
            },
            {
                path: 'transaksilist',
                component: _pages_transaksilist_transaksilist_component__WEBPACK_IMPORTED_MODULE_16__.TransaksilistComponent
            },
            {
                path: 'transaksidetail/:idperiode',
                component: _pages_transaksidetail_transaksidetail_component__WEBPACK_IMPORTED_MODULE_17__.TransaksidetailComponent
            },
            {
                path: 'transaksiadd/periode/:idperiode',
                component: _pages_transaksiadd_transaksiadd_component__WEBPACK_IMPORTED_MODULE_18__.TransaksiaddComponent
            },
            {
                path: 'transaksiadd/preview/:idpreview',
                component: _pages_transaksiadd_transaksiadd_component__WEBPACK_IMPORTED_MODULE_18__.TransaksiaddComponent
            },
            {
                path: 'transaksiadd/:id',
                component: _pages_transaksiadd_transaksiadd_component__WEBPACK_IMPORTED_MODULE_18__.TransaksiaddComponent
            },
            {
                path: 'bea/:idperiode',
                component: _pages_bealanding_bealanding_component__WEBPACK_IMPORTED_MODULE_26__.BealandingComponent
            },
            {
                path: 'bealist',
                component: _pages_bealist_bealist_component__WEBPACK_IMPORTED_MODULE_19__.BealistComponent
            },
            {
                path: 'beadetail/:idperiode',
                component: _pages_beadetail_beadetail_component__WEBPACK_IMPORTED_MODULE_20__.BeadetailComponent
            },
            {
                path: 'beatambah/periode/:idperiode',
                component: _pages_beatambah_beatambah_component__WEBPACK_IMPORTED_MODULE_21__.BeatambahComponent
            },
            {
                path: 'bphlist',
                component: _pages_bphlist_bphlist_component__WEBPACK_IMPORTED_MODULE_23__.BphlistComponent
            },
            {
                path: 'bphdetail/:idperiode',
                component: _pages_bphdetail_bphdetail_component__WEBPACK_IMPORTED_MODULE_24__.BphdetailComponent
            },
            {
                path: 'bphadd/periode/:idperiode',
                component: _pages_bphadd_bphadd_component__WEBPACK_IMPORTED_MODULE_25__.BphaddComponent
            },
            {
                path: 'kslist',
                component: _pages_kslist_kslist_component__WEBPACK_IMPORTED_MODULE_27__.KslistComponent
            },
            {
                path: 'ksdetail/:idperiode',
                component: _pages_ksdetail_ksdetail_component__WEBPACK_IMPORTED_MODULE_28__.KsdetailComponent
            },
            {
                path: 'ksadd/periode/:idperiode',
                component: _pages_ksadd_ksadd_component__WEBPACK_IMPORTED_MODULE_29__.KsaddComponent
            },
        ]
    },
    {
        path: 'login',
        component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent,
        canActivate: [_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__.NonAuthGuard]
    },
    {
        path: 'register',
        component: _modules_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
        canActivate: [_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__.NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: _modules_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__.ForgotPasswordComponent,
        canActivate: [_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__.NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: _modules_recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_13__.RecoverPasswordComponent,
        canActivate: [_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__.NonAuthGuard]
    },
    {
        path: 'privacy-policy',
        component: _modules_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_14__.PrivacyPolicyComponent,
        canActivate: [_guards_non_auth_guard__WEBPACK_IMPORTED_MODULE_11__.NonAuthGuard]
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 4132);



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet")(1, "app-spinner");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_0__.SpinnerComponent], styles: ["[_nghost-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/main/main.component */ 8187);
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/login/login.component */ 744);
/* harmony import */ var _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/main/header/header.component */ 5718);
/* harmony import */ var _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/main/footer/footer.component */ 5044);
/* harmony import */ var _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/main/menu-sidebar/menu-sidebar.component */ 6008);
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/blank/blank.component */ 7276);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/profile/profile.component */ 8220);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/register/register.component */ 280);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_periode_periode_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pages/periode/periode.component */ 1162);
/* harmony import */ var _pages_jadwallist_jadwallist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pages/jadwallist/jadwallist.component */ 4358);
/* harmony import */ var _pages_jadwaldetail_jadwaldetail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @pages/jadwaldetail/jadwaldetail.component */ 9936);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _modules_main_header_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modules/main/header/messages/messages.component */ 3649);
/* harmony import */ var _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @modules/main/header/notifications/notifications.component */ 125);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/button/button.component */ 1354);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common/locales/en */ 9137);
/* harmony import */ var _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/main/header/user/user.component */ 5112);
/* harmony import */ var _modules_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @modules/forgot-password/forgot-password.component */ 1636);
/* harmony import */ var _modules_recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/recover-password/recover-password.component */ 4928);
/* harmony import */ var _modules_main_header_language_language_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @modules/main/header/language/language.component */ 3081);
/* harmony import */ var _modules_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/privacy-policy/privacy-policy.component */ 918);
/* harmony import */ var _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/main-menu/main-menu.component */ 2917);
/* harmony import */ var _pages_main_menu_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/main-menu/sub-menu/sub-menu.component */ 3895);
/* harmony import */ var _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/menu-item/menu-item.component */ 1459);
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dropdown/dropdown.component */ 7888);
/* harmony import */ var _components_dropdown_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/dropdown/dropdown-menu/dropdown-menu.component */ 2778);
/* harmony import */ var _modules_main_control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/main/control-sidebar/control-sidebar.component */ 7269);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_auth_reducer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./store/auth/reducer */ 7590);
/* harmony import */ var _store_ui_reducer__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./store/ui/reducer */ 6555);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/select/select.component */ 5456);
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/checkbox/checkbox.component */ 6397);
/* harmony import */ var _pages_transaksilist_transaksilist_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/transaksilist/transaksilist.component */ 8680);
/* harmony import */ var _pages_transaksidetail_transaksidetail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/transaksidetail/transaksidetail.component */ 9271);
/* harmony import */ var _pages_transaksiadd_transaksiadd_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/transaksiadd/transaksiadd.component */ 4518);
/* harmony import */ var _pages_jadwaladd_jadwaladd_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @pages/jadwaladd/jadwaladd.component */ 1791);
/* harmony import */ var _pages_bealist_bealist_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/bealist/bealist.component */ 8896);
/* harmony import */ var _pages_beadetail_beadetail_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/beadetail/beadetail.component */ 4739);
/* harmony import */ var _pages_beatambah_beatambah_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/beatambah/beatambah.component */ 540);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 4132);
/* harmony import */ var _loading_interceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./loading.interceptor */ 3058);
/* harmony import */ var _pages_transaksilanding_transaksilanding_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/transaksilanding/transaksilanding.component */ 3805);
/* harmony import */ var _pages_bphlist_bphlist_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/bphlist/bphlist.component */ 5872);
/* harmony import */ var _pages_bphdetail_bphdetail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/bphdetail/bphdetail.component */ 5812);
/* harmony import */ var _pages_bphadd_bphadd_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/bphadd/bphadd.component */ 4218);
/* harmony import */ var _pages_bealanding_bealanding_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/bealanding/bealanding.component */ 8324);
/* harmony import */ var _pages_kslanding_kslanding_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/kslanding/kslanding.component */ 6218);
/* harmony import */ var _pages_kslist_kslist_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/kslist/kslist.component */ 2301);
/* harmony import */ var _pages_ksdetail_ksdetail_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/ksdetail/ksdetail.component */ 971);
/* harmony import */ var _pages_ksadd_ksadd_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/ksadd/ksadd.component */ 7147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/core */ 2560);





























































(0,_angular_common__WEBPACK_IMPORTED_MODULE_50__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_51__["default"], 'en-EN');
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_53__.HTTP_INTERCEPTORS, useClass: _loading_interceptor__WEBPACK_IMPORTED_MODULE_40__.LoadingInterceptor, multi: true
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.BrowserModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_55__.StoreModule.forRoot({ auth: _store_auth_reducer__WEBPACK_IMPORTED_MODULE_28__.authReducer, ui: _store_ui_reducer__WEBPACK_IMPORTED_MODULE_29__.uiReducer }),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_53__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_56__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_57__.BrowserAnimationsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_58__.ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        })] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_52__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _modules_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        _modules_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent,
        _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_6__.MenuSidebarComponent,
        _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_7__.BlankComponent,
        _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__.ProfileComponent,
        _modules_register_register_component__WEBPACK_IMPORTED_MODULE_9__.RegisterComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.DashboardComponent,
        _modules_main_header_messages_messages_component__WEBPACK_IMPORTED_MODULE_14__.MessagesComponent,
        _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_15__.NotificationsComponent,
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_16__.ButtonComponent,
        _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_17__.UserComponent,
        _modules_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_18__.ForgotPasswordComponent,
        _modules_recover_password_recover_password_component__WEBPACK_IMPORTED_MODULE_19__.RecoverPasswordComponent,
        _modules_main_header_language_language_component__WEBPACK_IMPORTED_MODULE_20__.LanguageComponent,
        _modules_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_21__.PrivacyPolicyComponent,
        _pages_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_22__.MainMenuComponent,
        _pages_main_menu_sub_menu_sub_menu_component__WEBPACK_IMPORTED_MODULE_23__.SubMenuComponent,
        _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_24__.MenuItemComponent,
        _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_25__.DropdownComponent,
        _components_dropdown_dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_26__.DropdownMenuComponent,
        _modules_main_control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_27__.ControlSidebarComponent,
        _components_select_select_component__WEBPACK_IMPORTED_MODULE_30__.SelectComponent,
        _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_31__.CheckboxComponent,
        _pages_jadwallist_jadwallist_component__WEBPACK_IMPORTED_MODULE_12__.JadwallistComponent, _pages_periode_periode_component__WEBPACK_IMPORTED_MODULE_11__.PeriodeComponent, _pages_jadwaldetail_jadwaldetail_component__WEBPACK_IMPORTED_MODULE_13__.JadwalDetailComponent, _pages_transaksilist_transaksilist_component__WEBPACK_IMPORTED_MODULE_32__.TransaksilistComponent, _pages_transaksidetail_transaksidetail_component__WEBPACK_IMPORTED_MODULE_33__.TransaksidetailComponent, _pages_transaksiadd_transaksiadd_component__WEBPACK_IMPORTED_MODULE_34__.TransaksiaddComponent, _pages_jadwaladd_jadwaladd_component__WEBPACK_IMPORTED_MODULE_35__.JadwaladdComponent, _pages_bealist_bealist_component__WEBPACK_IMPORTED_MODULE_36__.BealistComponent, _pages_beadetail_beadetail_component__WEBPACK_IMPORTED_MODULE_37__.BeadetailComponent, _pages_beatambah_beatambah_component__WEBPACK_IMPORTED_MODULE_38__.BeatambahComponent, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_39__.SpinnerComponent, _pages_transaksilanding_transaksilanding_component__WEBPACK_IMPORTED_MODULE_41__.TransaksilandingComponent, _pages_bphlist_bphlist_component__WEBPACK_IMPORTED_MODULE_42__.BphlistComponent, _pages_bphdetail_bphdetail_component__WEBPACK_IMPORTED_MODULE_43__.BphdetailComponent, _pages_bphadd_bphadd_component__WEBPACK_IMPORTED_MODULE_44__.BphaddComponent, _pages_bealanding_bealanding_component__WEBPACK_IMPORTED_MODULE_45__.BealandingComponent, _pages_kslanding_kslanding_component__WEBPACK_IMPORTED_MODULE_46__.KslandingComponent, _pages_kslist_kslist_component__WEBPACK_IMPORTED_MODULE_47__.KslistComponent, _pages_ksdetail_ksdetail_component__WEBPACK_IMPORTED_MODULE_48__.KsdetailComponent, _pages_ksadd_ksadd_component__WEBPACK_IMPORTED_MODULE_49__.KsaddComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_54__.BrowserModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_55__.StoreRootModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_53__.HttpClientModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_56__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_57__.BrowserAnimationsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_58__.ToastrModule] }); })();


/***/ }),

/***/ 1354:
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ButtonComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.icons[ctx_r0.icon]);
} }
function ButtonComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 4);
} }
const _c0 = function (a0) { return { "btn-block": a0 }; };
const _c1 = ["*"];
class ButtonComponent {
    constructor() {
        this.type = 'button';
        this.block = false;
        this.color = 'primary';
        this.disabled = false;
        this.loading = false;
        this.icon = null;
        this.icons = {
            facebook: 'fab fa-facebook',
            google: 'fab fa-google',
            googlePlus: 'fab fa-google-plus'
        };
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { type: "type", block: "block", color: "color", disabled: "disabled", loading: "loading", icon: "icon" }, ngContentSelectors: _c1, decls: 4, vars: 10, consts: [[3, "type", "ngClass", "disabled"], ["class", "mr-2", 3, "ngClass", 4, "ngIf"], ["class", "spinner-border spinner-border-sm ml-2", "role", "status", "aria-hidden", "true", 4, "ngIf"], [1, "mr-2", 3, "ngClass"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm", "ml-2"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ButtonComponent_i_1_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_span_3_Template, 1, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-", ctx.color, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.block))("disabled", ctx.disabled || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });


/***/ }),

/***/ 6397:
/*!***********************************************************!*\
  !*** ./src/app/components/checkbox/checkbox.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




const _c0 = function (a0, a1) { return { "form-check-input": a0, "custom-control-input": a1 }; };
const _c1 = function (a0, a1) { return { "form-check-label": a0, "custom-control-label": a1 }; };
const _c2 = ["*"];
class CheckboxComponent {
    constructor() {
        this.classes = '';
        this.type = 'default';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.ID = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
        this.classes = this.getClasses(this.type);
    }
    onValueChange(event) {
        console.log(event);
        this.valueChange.emit(event.target.checked);
    }
    getClasses(type) {
        if (type === 'icheck') {
            return 'icheck-primary';
        }
        if (type === 'default') {
            return 'form-check';
        }
        if (type === 'custom') {
            return 'custom-control custom-checkbox';
        }
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], hostVars: 2, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, inputs: { type: "type", value: "value" }, outputs: { valueChange: "valueChange" }, ngContentSelectors: _c2, decls: 3, vars: 11, consts: [["type", "checkbox", 3, "id", "ngClass", "checked", "change"], [3, "for", "ngClass"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_Template_input_change_0_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.ID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.type === "default", ctx.type === "custom"))("checked", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.ID)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c1, ctx.type === "default", ctx.type === "custom"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVja2JveC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2778:
/*!******************************************************************************!*\
  !*** ./src/app/components/dropdown/dropdown-menu/dropdown-menu.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenuComponent": () => (/* binding */ DropdownMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

const _c0 = ["*"];
class DropdownMenuComponent {
    constructor(dropdownMenuElement, renderer) {
        this.dropdownMenuElement = dropdownMenuElement;
        this.renderer = renderer;
        this.classes = 'dropdown-menu dropdown-menu-right';
        this.hasShow = true;
    }
    ngOnInit() {
        this.renderer.addClass(this.dropdownMenuElement.nativeElement, `dropdown-menu-${this.size}`);
    }
    ngAfterViewInit() {
        const style = this.fixStyles();
        this.renderer.setStyle(this.dropdownMenuElement.nativeElement, 'left', style.left);
        this.renderer.setStyle(this.dropdownMenuElement.nativeElement, 'right', style.right);
    }
    fixStyles() {
        if (this.dropdownMenuElement) {
            const windowWidth = window.innerWidth;
            const offsetLeft = this.dropdownMenuElement.nativeElement.getBoundingClientRect()
                .left;
            const offsetWidth = this.dropdownMenuElement.nativeElement.offsetWidth;
            const visiblePart = windowWidth - offsetLeft;
            if (offsetLeft < 0) {
                return {
                    left: 'inherit',
                    right: `${offsetLeft - 5}px`
                };
            }
            else if (visiblePart < offsetWidth) {
                return { left: 'inherit', right: `0px` };
            }
            return { left: 'inherit', right: `0px` };
        }
        return { left: 'inherit', right: `0px` };
    }
}
DropdownMenuComponent.ɵfac = function DropdownMenuComponent_Factory(t) { return new (t || DropdownMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
DropdownMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownMenuComponent, selectors: [["app-dropdown-menu"]], hostVars: 4, hostBindings: function DropdownMenuComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.hasShow);
    } }, inputs: { size: "size" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function DropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7888:
/*!***********************************************************!*\
  !*** ./src/app/components/dropdown/dropdown.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-menu/dropdown-menu.component */ 2778);



function DropdownComponent_app_dropdown_menu_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-dropdown-menu", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", ctx_r0.size);
} }
const _c0 = [[["", "dropdown-button", ""]], [["", "dropdown-menu", ""]]];
const _c1 = ["[dropdown-button]", "[dropdown-menu]"];
class DropdownComponent {
    constructor(dropdownElement) {
        this.dropdownElement = dropdownElement;
        this.isOpen = false;
        this.size = 'md';
        this.hasNavItem = true;
        this.hasDropdown = true;
    }
    clickout(event) {
        if (!this.dropdownElement.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
    }
    ngOnInit() { }
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
DropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["app-dropdown"]], hostVars: 4, hostBindings: function DropdownComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownComponent_click_HostBindingHandler($event) { return ctx.clickout($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("nav-item", ctx.hasNavItem)("dropdown", ctx.hasDropdown);
    } }, inputs: { size: "size" }, ngContentSelectors: _c1, decls: 3, vars: 1, consts: [[1, "nav-link", 3, "click"], [3, "size", 4, "ngIf"], [3, "size"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DropdownComponent_Template_a_click_0_listener() { return ctx.toggleDropdown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DropdownComponent_app_dropdown_menu_2_Template, 2, 1, "app-dropdown-menu", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _dropdown_menu_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_0__.DropdownMenuComponent], styles: ["[_nghost-%COMP%] {\n  display: inherit;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vRkUlMjBQZWxhcG9yYW4lMjBQTDIvc3JjL2FwcC9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBpbmhlcml0O1xufVxuXG4ubmF2LWxpbmsge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 5166:
/*!**************************************************************!*\
  !*** ./src/app/components/menu-item/menu-item.animations.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openCloseAnimation": () => (/* binding */ openCloseAnimation),
/* harmony export */   "rotateAnimation": () => (/* binding */ rotateAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 4851);

const TRANSITION_DURATION = 250;
const openCloseAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('openClose', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__.AUTO_STYLE })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ height: 0 })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${TRANSITION_DURATION}ms ease-in`))
]);
const rotateAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('rotate', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ transform: 'rotate(90deg)' })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('false <=> true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${TRANSITION_DURATION}ms ease-out`))
]);


/***/ }),

/***/ 1459:
/*!*************************************************************!*\
  !*** ./src/app/components/menu-item/menu-item.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItemComponent": () => (/* binding */ MenuItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var _menu_item_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.animations */ 5166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function MenuItemComponent_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rotate", ctx_r0.isMenuExtended);
} }
function MenuItemComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 4)(1, "li", 5)(2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx_r1.isMenuExtended);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r2.path)("routerLinkActive", "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("nav-icon ", item_r2.iconClasses, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
} }
const _c0 = function (a0) { return { active: a0 }; };
class MenuItemComponent {
    constructor(router) {
        this.router = router;
        this.menuItem = null;
        this.isExpandable = false;
        this.isNavItem = true;
        this.isMenuExtended = false;
        this.isMainActive = false;
        this.isOneOfChildrenActive = false;
    }
    ngOnInit() {
        if (this.menuItem &&
            this.menuItem.children &&
            this.menuItem.children.length > 0) {
            this.isExpandable = true;
        }
        this.calculateIsActive(this.router.url);
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd))
            .subscribe((event) => {
            this.calculateIsActive(event.url);
        });
    }
    handleMainMenuAction() {
        if (this.isExpandable) {
            this.toggleMenu();
            return;
        }
        this.router.navigate(this.menuItem.path);
    }
    toggleMenu() {
        this.isMenuExtended = !this.isMenuExtended;
    }
    calculateIsActive(url) {
        this.isMainActive = false;
        this.isOneOfChildrenActive = false;
        if (this.isExpandable) {
            this.menuItem.children.forEach((item) => {
                if (item.path[0] === url) {
                    this.isOneOfChildrenActive = true;
                    this.isMenuExtended = true;
                }
            });
        }
        else if (this.menuItem.path[0] === url) {
            this.isMainActive = true;
        }
        if (!this.isMainActive && !this.isOneOfChildrenActive) {
            this.isMenuExtended = false;
        }
    }
}
MenuItemComponent.ɵfac = function MenuItemComponent_Factory(t) { return new (t || MenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
MenuItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MenuItemComponent, selectors: [["app-menu-item"]], hostVars: 4, hostBindings: function MenuItemComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("nav-item", ctx.isNavItem)("menu-open", ctx.isMenuExtended);
    } }, inputs: { menuItem: "menuItem" }, decls: 6, vars: 9, consts: [[1, "nav-link", 3, "ngClass", "click"], ["class", "right fas fa-angle-right", 4, "ngIf"], ["class", "nav nav-treeview", 4, "ngFor", "ngForOf"], [1, "right", "fas", "fa-angle-right"], [1, "nav", "nav-treeview"], [1, "nav-item"], [1, "nav-link", 3, "routerLink", "routerLinkActive"]], template: function MenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MenuItemComponent_Template_a_click_0_listener() { return ctx.handleMainMenuAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MenuItemComponent_i_4_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MenuItemComponent_ul_5_Template, 6, 7, "ul", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.isMainActive || ctx.isOneOfChildrenActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("nav-icon ", ctx.menuItem.iconClasses, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.menuItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isExpandable && ctx.menuItem.children.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuItem.children);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvY29tcG9uZW50cy9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6Im1lbnUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCI6aG9zdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"], data: { animation: [_menu_item_animations__WEBPACK_IMPORTED_MODULE_0__.openCloseAnimation, _menu_item_animations__WEBPACK_IMPORTED_MODULE_0__.rotateAnimation] } });


/***/ }),

/***/ 5456:
/*!*******************************************************!*\
  !*** ./src/app/components/select/select.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





function SelectComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r1.value)("selected", ctx_r0.value === option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label, " ");
} }
const _c0 = function (a0, a1) { return { "form-control": a0, "custom-select": a1 }; };
const _c1 = ["*"];
class SelectComponent {
    constructor() {
        this.classes = 'form-group';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        this.ID = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
    onValueChange(event) {
        this.valueChange.emit(event.target.value);
    }
    isNoneSelected() {
        if (!this.value) {
            return true;
        }
        return this.options.some((option) => option.value === this.value);
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, inputs: { type: "type", disabled: "disabled", options: "options", value: "value" }, outputs: { valueChange: "valueChange" }, ngContentSelectors: _c1, decls: 6, vars: 10, consts: [[1, "select-label", 3, "for"], [3, "ngClass", "id", "name", "disabled", "change"], [3, "selected"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectComponent_Template_select_change_2_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_option_5_Template, 2, 3, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.ID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx.type === "default", ctx.type === "custom"))("id", ctx.ID)("name", ctx.ID)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.isNoneSelected());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .select-label[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvY29tcG9uZW50cy9zZWxlY3Qvc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKO0FEQUk7RUFDSSwyQkFBQTtBQ0VSIiwiZmlsZSI6InNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAuc2VsZWN0LWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCAuc2VsZWN0LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 4132:
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loader.service */ 8555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(loader) {
        this.loader = loader;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 1, vars: 1, consts: [["class", "cssload-container", 4, "ngIf"], [1, "cssload-container"], [1, "cssload-speeding-wheel"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader.getLoading());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1581:
/*!*************************************!*\
  !*** ./src/app/config/constants.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Constants": () => (/* binding */ Constants)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Constants {
}
Constants.API_ENDPOINT = ' https://pelaporanpliiapi.azurewebsites.net/api/';
Constants.API_MOCK_ENDPOINT = 'https://pelaporanpliiapi.azurewebsites.net/api/';
Constants.TitleOfSite = " Pelaporan PL2";
Constants.AUTH_LOGIN_PEMOHON = "/Users/login";
Constants.AUTH_REGISTER_PEMOHON = "api/Users/register";
Constants.ɵfac = function Constants_Factory(t) { return new (t || Constants)(); };
Constants.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Constants, factory: Constants.ɵfac });


/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth.service */ 7556);




class AuthGuard {
  constructor(router, AuthService) {
    this.router = router;
    this.AuthService = AuthService;
  }

  canActivate(next, state) {
    return this.getProfile();
  }

  canActivateChild(next, state) {
    return this.canActivate(next, state);
  }

  getProfile() {
    var _this = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.AuthService.user) {
        return true;
      }

      try {
        yield _this.AuthService.getProfile();
        return true;
      } catch (error) {
        return false;
      }
    })();
  }

}

AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};

AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6624:
/*!******************************************!*\
  !*** ./src/app/guards/non-auth.guard.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonAuthGuard": () => (/* binding */ NonAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NonAuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (!localStorage.getItem('token')) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
    canActivateChild(next, state) {
        return this.canActivate(next, state);
    }
}
NonAuthGuard.ɵfac = function NonAuthGuard_Factory(t) { return new (t || NonAuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
NonAuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NonAuthGuard, factory: NonAuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3058:
/*!****************************************!*\
  !*** ./src/app/loading.interceptor.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingInterceptor": () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/loader.service */ 8555);



class LoadingInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
        this.totalRequests = 0;
    }
    intercept(request, next) {
        console.log('caught');
        this.totalRequests++;
        this.loadingService.setLoading(true);
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
            this.totalRequests--;
            if (this.totalRequests == 0) {
                this.loadingService.setLoading(false);
            }
        }));
    }
}
LoadingInterceptor.ɵfac = function LoadingInterceptor_Factory(t) { return new (t || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoadingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoadingInterceptor, factory: LoadingInterceptor.ɵfac });


/***/ }),

/***/ 1636:
/*!**********************************************************************!*\
  !*** ./src/app/modules/forgot-password/forgot-password.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/login"]; };
//import {AppService} from '@services/app.service';
class ForgotPasswordComponent {
    constructor(renderer, toastr) {
        this.renderer = renderer;
        this.toastr = toastr;
        this.class = 'login-box';
        this.isAuthLoading = false;
    }
    ngOnInit() {
        this.renderer.addClass(document.querySelector('app-root'), 'login-page');
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
        });
    }
    forgotPassword() {
        if (this.forgotPasswordForm.valid) {
        }
        else {
            this.toastr.error('Hello world!', 'Toastr fun!');
        }
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], hostVars: 2, hostBindings: function ForgotPasswordComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.class);
    } }, decls: 22, vars: 7, consts: [[1, "card", "card-outline", "card-primary"], [1, "card-header", "text-center"], [1, "h1", 3, "routerLink"], [1, "card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], [1, "row"], [1, "col-12"], [3, "type", "block"], [1, "mt-3", "mb-1"], [3, "routerLink"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "LTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " You forgot your password? Here you can easily retrieve a new password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_9_listener() { return ctx.forgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Request new password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 14)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "submit")("block", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 744:
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);









const _c0 = function () {
  return ["/"];
};

const _c1 = function () {
  return ["/forgot-password"];
};

const _c2 = function () {
  return ["/register"];
};

class LoginComponent {
  constructor(renderer, toastr, AuthService) {
    this.renderer = renderer;
    this.toastr = toastr;
    this.AuthService = AuthService;
    this.class = 'login-box';
    this.isAuthLoading = false;
    this.isGoogleLoading = false;
    this.isFacebookLoading = false;
  }

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'login-page');
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
  }

  loginByAuth() {
    var _this = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.loginForm.valid) {
        _this.isAuthLoading = true;
        yield _this.AuthService.loginByAuth(_this.loginForm.value);
        _this.isAuthLoading = false;
      } else {
        _this.toastr.error('Gagal Login');
      }
    })();
  }

  loginByKemenkeu() {
    var _this2 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.AuthService.loginKemenkeu();
      _this2.isAuthLoading = false;
    })();
  }

  loginByPelaksana() {
    var _this3 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.AuthService.loginKemenkeu();
      _this3.isAuthLoading = false;
    })();
  }

  loginByKasubbid() {
    var _this4 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.AuthService.loginKasubbid();
      _this4.isAuthLoading = false;
    })();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
  }

}

LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};

LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  hostVars: 2,
  hostBindings: function LoginComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.class);
    }
  },
  decls: 38,
  vars: 14,
  consts: [[1, "card", "card-outline", "card-primary"], [1, "card-header", "text-center"], [1, "h1", 3, "routerLink"], [1, "card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], [1, "row"], [1, "col-7"], [1, "icheck-primary"], ["type", "checkbox", "id", "remember"], ["for", "remember"], [1, "col-5"], [3, "type", "block", "loading", "disabled"], [1, "social-auth-links", "text-center", "mb-3"], [1, "mb-1", 3, "block", "loading", "icon", "click"], [1, "mb-1"], [3, "routerLink"], [1, "mb-0"], [1, "text-center", 3, "routerLink"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Administrasi");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " PL2");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sign in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
        return ctx.loginByAuth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 13)(21, "div", 14)(22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " Remember Me ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 18)(27, "app-button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Masuk ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 20)(30, "app-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_app_button_click_30_listener() {
        return ctx.loginByKemenkeu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Masuk Sebagai Pelaksana ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 22)(33, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Lupa password");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "p", 24)(36, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, " Daftar Akun Perijinan PL2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("type", "submit")("block", true)("loading", ctx.isAuthLoading)("disabled", ctx.isFacebookLoading || ctx.isGoogleLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("block", true)("loading", ctx.isAuthLoading)("icon", "blank");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c2));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _components_button_button_component__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 7269:
/*!***************************************************************************!*\
  !*** ./src/app/modules/main/control-sidebar/control-sidebar.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlSidebarComponent": () => (/* binding */ ControlSidebarComponent)
/* harmony export */ });
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ui/actions */ 5728);
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/themes */ 7558);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _components_select_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/select/select.component */ 5456);
/* harmony import */ var _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/checkbox/checkbox.component */ 6397);






const _c0 = function () { return []; };
class ControlSidebarComponent {
    constructor(store) {
        this.store = store;
        this.classes = 'control-sidebar control-sidebar-dark';
        this.navbarLightVariants = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.NAVBAR_LIGHT_VARIANTS;
        this.navbarDarkVariants = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.NAVBAR_DARK_VARIANTS;
        this.darkSidebarSkins = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.SIDEBAR_DARK_SKINS;
        this.lightSidebarSkins = _utils_themes__WEBPACK_IMPORTED_MODULE_1__.SIDEBAR_LIGHT_SKINS;
    }
    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state) => {
            this.navbarVariant = state.navbarVariant;
            this.darkMode = state.darkMode;
            this.sidebarSkin = state.sidebarSkin;
        });
    }
    handleDarkModeChange(value) {
        this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleDarkMode());
    }
    onNavbarVariantChange(value) {
        this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.SetNavbarVariant(value));
    }
    onSidebarSkinChange(value) {
        this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.SetSidebarSkin(value));
    }
}
ControlSidebarComponent.ɵfac = function ControlSidebarComponent_Factory(t) { return new (t || ControlSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
ControlSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ControlSidebarComponent, selectors: [["app-control-sidebar"]], hostVars: 2, hostBindings: function ControlSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.classes);
    } }, decls: 18, vars: 12, consts: [[1, "mb-2"], [2, "padding", "8px 0"], [3, "valueChange"], ["type", "custom", 1, "mt-3", 3, "value", "options", "valueChange"], ["type", "custom", "disabled", "true", 1, "mt-3", 3, "options"]], template: function ControlSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Customize AdminLTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "hr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "app-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ControlSidebarComponent_Template_app_checkbox_valueChange_4_listener($event) { return ctx.handleDarkModeChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Dark mode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "app-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ControlSidebarComponent_Template_app_select_valueChange_6_listener($event) { return ctx.onNavbarVariantChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Light Navbar Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "app-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ControlSidebarComponent_Template_app_select_valueChange_8_listener($event) { return ctx.onNavbarVariantChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Dark Navbar Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Accent Color Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ControlSidebarComponent_Template_app_select_valueChange_12_listener($event) { return ctx.onSidebarSkinChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Light Sidebar Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "app-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function ControlSidebarComponent_Template_app_select_valueChange_14_listener($event) { return ctx.onSidebarSkinChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Dark Sidebar Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "app-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " Brand Logo Variants ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.navbarVariant)("options", ctx.navbarLightVariants);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.navbarVariant)("options", ctx.navbarDarkVariants);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.sidebarSkin)("options", ctx.lightSidebarSkins);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.sidebarSkin)("options", ctx.darkSidebarSkins);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
    } }, dependencies: [_components_select_select_component__WEBPACK_IMPORTED_MODULE_2__.SelectComponent, _components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_3__.CheckboxComponent], styles: ["[_nghost-%COMP%] {\n  padding: 16px;\n  padding-top: 73px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvbW9kdWxlcy9tYWluL2NvbnRyb2wtc2lkZWJhci9jb250cm9sLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsaUJBQUE7QUNBSiIsImZpbGUiOiJjb250cm9sLXNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogNzNweDtcbn1cbiIsIjpob3N0IHtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy10b3A6IDczcHg7XG59Il19 */"] });


/***/ }),

/***/ 5044:
/*!*********************************************************!*\
  !*** ./src/app/modules/main/footer/footer.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../package.json */ 4147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class FooterComponent {
    constructor() {
        this.classes = 'main-footer';
        this.appVersion = _package_json__WEBPACK_IMPORTED_MODULE_0__.version;
        this.currentYear = luxon__WEBPACK_IMPORTED_MODULE_1__.DateTime.now().toFormat('y');
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], hostVars: 2, hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classes);
    } }, decls: 13, vars: 2, consts: [[1, "float-right", "d-none", "d-sm-block"], ["href", "https://kemenkeu.go.id", "target", "_blank", "rel", "noopener noreferrer", 2, "margin", "0"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong")(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " PPPK Kemenkeu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.appVersion, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Hak Cipta \u00A9 ", ctx.currentYear, "");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvbW9kdWxlcy9tYWluL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"] });


/***/ }),

/***/ 5718:
/*!*********************************************************!*\
  !*** ./src/app/modules/main/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ui/actions */ 5728);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/auth.service */ 7556);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modules_main_header_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/main/header/messages/messages.component */ 3649);
/* harmony import */ var _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/main/header/notifications/notifications.component */ 125);
/* harmony import */ var _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/main/header/user/user.component */ 5112);











function HeaderComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 13)(4, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.searchForm);
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/blank"]; };
const BASE_CLASSES = 'main-header navbar navbar-expand';
class HeaderComponent {
    constructor(AuthService, store) {
        this.AuthService = AuthService;
        this.store = store;
        this.classes = BASE_CLASSES;
    }
    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state) => {
            this.classes = `${BASE_CLASSES} ${state.navbarVariant}`;
        });
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormGroup({
            search: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl(null)
        });
    }
    logout() {
        this.AuthService.logout();
    }
    onToggleMenuSidebar() {
        this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleSidebarMenu());
    }
    onToggleControlSidebar() {
        this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleControlSidebar());
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__.Store)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostVars: 2, hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.classes);
    } }, decls: 17, vars: 5, consts: [[1, "navbar-nav"], [1, "nav-item"], ["role", "button", 1, "nav-link", 3, "click"], [1, "fas", "fa-bars"], [1, "nav-item", "d-none", "d-sm-inline-block"], [1, "nav-link", 3, "routerLink"], ["class", "form-inline ml-3", 3, "formGroup", 4, "ngIf"], [1, "navbar-nav", "ml-auto"], [1, "nav-link", 3, "click"], [1, "fas", "fa-th-large"], [1, "form-inline", "ml-3", 3, "formGroup"], [1, "input-group", "input-group-sm"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "form-control-navbar"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-navbar"], [1, "fas", "fa-search"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 0)(1, "li", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.onToggleMenuSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "li", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HeaderComponent_form_9_Template, 6, 1, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "app-messages")(12, "app-notifications")(13, "app-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "li", 1)(15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() { return ctx.onToggleControlSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _modules_main_header_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__.MessagesComponent, _modules_main_header_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__.NotificationsComponent, _modules_main_header_user_user_component__WEBPACK_IMPORTED_MODULE_4__.UserComponent], styles: [".fa-bars[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]   button.nav-link[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvbW9kdWxlcy9tYWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FER0k7RUFDSSxlQUFBO0FDQVI7O0FESUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDRFIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhLWJhcnMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICAubmF2LWxpbmsge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLm5hdi1pdGVtIHtcbiAgICBidXR0b24ubmF2LWxpbmsge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cbiIsIi5mYS1iYXJzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW0gLm5hdi1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWl0ZW0gYnV0dG9uLm5hdi1saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0iXX0= */"] });


/***/ }),

/***/ 3081:
/*!********************************************************************!*\
  !*** ./src/app/modules/main/header/language/language.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/dropdown/dropdown.component */ 7888);


class LanguageComponent {
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(); };
LanguageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 19, vars: 0, consts: [["dropdown-button", ""], [1, "flag-icon", "flag-icon-tr"], ["dropdown-menu", ""], ["href", "#", 1, "dropdown-item", "active"], [1, "flag-icon", "flag-icon-tr", "mr-2"], ["href", "#", 1, "dropdown-item"], [1, "flag-icon", "flag-icon-us", "mr-2"], [1, "flag-icon", "flag-icon-de", "mr-2"], [1, "flag-icon", "flag-icon-fr", "mr-2"], [1, "flag-icon", "flag-icon-es", "mr-2"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-dropdown");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Turkish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " English ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " German ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " French ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Spanish ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3649:
/*!********************************************************************!*\
  !*** ./src/app/modules/main/header/messages/messages.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/dropdown/dropdown.component */ 7888);


class MessagesComponent {
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["app-messages"]], decls: 50, vars: 0, consts: [["size", "lg"], ["dropdown-button", ""], [1, "far", "fa-comments"], [1, "badge", "badge-danger", "navbar-badge"], ["dropdown-menu", ""], ["href", "#", 1, "dropdown-item"], [1, "media"], ["src", "assets/img/default-profile.png", "alt", "User Avatar", 1, "img-size-50", "mr-3", "img-circle"], [1, "media-body"], [1, "dropdown-item-title"], [1, "float-right", "text-sm", "text-danger"], [1, "fas", "fa-star"], [1, "text-sm"], [1, "text-sm", "text-muted"], [1, "far", "fa-clock", "mr-1"], [1, "dropdown-divider"], ["src", "assets/img/default-profile.png", "alt", "User Avatar", 1, "img-size-50", "img-circle", "mr-3"], [1, "float-right", "text-sm", "text-muted"], [1, "float-right", "text-sm", "text-warning"], ["href", "#", 1, "dropdown-item", "dropdown-footer"]], template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5)(7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Brad Diesel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Call me whenever you can...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " 4 Hours Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 5)(21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 8)(24, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " John Pierce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "I got your message bro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " 4 Hours Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 5)(35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 8)(38, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Nora Silvester ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "The subject goes here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " 4 Hours Ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "See All Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, dependencies: [_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 125:
/*!******************************************************************************!*\
  !*** ./src/app/modules/main/header/notifications/notifications.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsComponent": () => (/* binding */ NotificationsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../components/dropdown/dropdown.component */ 7888);


function NotificationsComponent_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " 4 new messages ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "3 mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 6);
} }
class NotificationsComponent {
}
NotificationsComponent.ɵfac = function NotificationsComponent_Factory(t) { return new (t || NotificationsComponent)(); };
NotificationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NotificationsComponent, selectors: [["app-notifications"]], decls: 31, vars: 0, consts: [["size", "lg"], ["dropdown-button", ""], [1, "far", "fa-bell"], [1, "badge", "badge-warning", "navbar-badge"], ["dropdown-menu", ""], [1, "dropdown-item", "dropdown-header"], [1, "dropdown-divider"], ["href", "#", 1, "dropdown-item"], [1, "fas", "fa-envelope", "mr-2"], [1, "float-right", "text-muted", "text-sm"], [1, "fas", "fa-users", "mr-2"], [1, "fas", "fa-file", "mr-2"], ["href", "#", 1, "dropdown-item", "dropdown-footer"], ["notification", ""]], template: function NotificationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "15");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "15 Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " 4 new messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "3 mins");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " 8 friend requests ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "12 hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " 3 new reports ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "2 days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "See All Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, NotificationsComponent_ng_template_29_Template, 6, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, dependencies: [_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5112:
/*!************************************************************!*\
  !*** ./src/app/modules/main/header/user/user.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/dropdown/dropdown.component */ 7888);





const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/profile"]; };
class UserComponent {
    constructor(appService) {
        this.appService = appService;
    }
    ngOnInit() {
        this.user = this.appService.user;
    }
    logout() {
        this.appService.logout();
    }
    formatDate(date) {
        return luxon__WEBPACK_IMPORTED_MODULE_2__.DateTime.fromISO(date).toFormat('dd LLL yyyy');
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 30, vars: 12, consts: [[1, "user-menu"], ["dropdown-button", ""], ["alt", "User Image", 1, "user-image", "img-circle", "elevation-2", 3, "src"], ["dropdown-menu", ""], [1, "user-header", "bg-primary"], ["alt", "User Image", 1, "img-circle", "elevation-2", 3, "src"], [1, "user-body"], [1, "row"], [1, "col-4", "text-center"], [3, "routerLink"], [1, "user-footer"], [1, "btn", "btn-default", "btn-flat", 3, "routerLink"], [1, "btn", "btn-default", "btn-flat", "float-right", 3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p")(7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "small")(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Member since\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 6)(15, "div", 7)(16, "div", 8)(17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8)(20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "li", 10)(26, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_Template_a_click_28_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.user.picture || "assets/img/default-profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.user.picture || "assets/img/default-profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.formatDate(ctx.user.createdAt));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.DropdownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8187:
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/ui/actions */ 5728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/main/header/header.component */ 5718);
/* harmony import */ var _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/main/footer/footer.component */ 5044);
/* harmony import */ var _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/main/menu-sidebar/menu-sidebar.component */ 6008);
/* harmony import */ var _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-sidebar/control-sidebar.component */ 7269);








class MainComponent {
    constructor(renderer, store) {
        this.renderer = renderer;
        this.store = store;
        this.class = 'wrapper';
    }
    ngOnInit() {
        this.ui = this.store.select('ui');
        this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
        this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
        this.renderer.addClass(document.querySelector('app-root'), 'layout-fixed');
        this.ui.subscribe(({ menuSidebarCollapsed, controlSidebarCollapsed, darkMode }) => {
            if (menuSidebarCollapsed) {
                this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-open');
                this.renderer.addClass(document.querySelector('app-root'), 'sidebar-collapse');
            }
            else {
                this.renderer.removeClass(document.querySelector('app-root'), 'sidebar-collapse');
                this.renderer.addClass(document.querySelector('app-root'), 'sidebar-open');
            }
            if (controlSidebarCollapsed) {
                this.renderer.removeClass(document.querySelector('app-root'), 'control-sidebar-slide-open');
            }
            else {
                this.renderer.addClass(document.querySelector('app-root'), 'control-sidebar-slide-open');
            }
            if (darkMode) {
                this.renderer.addClass(document.querySelector('app-root'), 'dark-mode');
            }
            else {
                this.renderer.removeClass(document.querySelector('app-root'), 'dark-mode');
            }
        });
    }
    onToggleMenuSidebar() {
        this.store.dispatch(new _store_ui_actions__WEBPACK_IMPORTED_MODULE_0__.ToggleSidebarMenu());
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], hostVars: 2, hostBindings: function MainComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.class);
    } }, decls: 7, vars: 0, consts: [[1, "sidebar-dark-primary"], [1, "content-wrapper"], ["id", "sidebar-overlay", 3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "app-menu-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "app-footer")(5, "app-control-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MainComponent_Template_div_click_6_listener() { return ctx.onToggleMenuSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _modules_main_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _modules_main_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent, _modules_main_menu_sidebar_menu_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.MenuSidebarComponent, _control_sidebar_control_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.ControlSidebarComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.content-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9GRSUyMFBlbGFwb3JhbiUyMFBMMi9zcmMvYXBwL21vZHVsZXMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50LXdyYXBwZXIgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jb250ZW50LXdyYXBwZXIgPiAqOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"] });


/***/ }),

/***/ 6008:
/*!*********************************************************************!*\
  !*** ./src/app/modules/main/menu-sidebar/menu-sidebar.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "MenuSidebarComponent": () => (/* binding */ MenuSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/auth.service */ 7556);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/menu-item/menu-item.component */ 1459);






function MenuSidebarComponent_app_menu_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-menu-item", 12);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("menuItem", item_r1);
} }
const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/profile"]; };
const BASE_CLASSES = 'main-sidebar elevation-4';
class MenuSidebarComponent {
    constructor(AuthService, store) {
        this.AuthService = AuthService;
        this.store = store;
        this.classes = BASE_CLASSES;
        this.menu = MENU;
    }
    ngOnInit() {
        this.ui = this.store.select('ui');
        this.ui.subscribe((state) => {
            this.classes = `${BASE_CLASSES} ${state.sidebarSkin}`;
        });
        this.user = this.AuthService.user;
        let role = this.AuthService.getRole();
        console.log(this.menu);
    }
}
MenuSidebarComponent.ɵfac = function MenuSidebarComponent_Factory(t) { return new (t || MenuSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store)); };
MenuSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MenuSidebarComponent, selectors: [["app-menu-sidebar"]], hostVars: 2, hostBindings: function MenuSidebarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.classes);
    } }, decls: 14, vars: 7, consts: [[1, "brand-link", 3, "routerLink"], ["src", "assets/img/logo.png", "alt", "AdminLTE Logo", 1, "brand-image", "img-circle", "elevation-3", 2, "opacity", "0.8"], [1, "brand-text", "font-weight-light"], [1, "sidebar"], [1, "user-panel", "mt-3", "pb-3", "mb-3", "d-flex"], [1, "image"], ["alt", "User Image", 1, "img-circle", "elevation-2", 3, "src"], [1, "info"], [1, "d-block", 3, "routerLink"], [1, "mt-2", 2, "overflow-y", "hidden"], ["data-widget", "treeview", "role", "menu", "data-accordion", "false", 1, "nav", "nav-pills", "nav-sidebar", "flex-column"], [3, "menuItem", 4, "ngFor", "ngForOf"], [3, "menuItem"]], template: function MenuSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Administrasi PL2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "nav", 9)(12, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, MenuSidebarComponent_app_menu_item_13_Template, 1, 1, "app-menu-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.user.picture || "assets/img/default-profile.png", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.user.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _components_menu_item_menu_item_component__WEBPACK_IMPORTED_MODULE_1__.MenuItemComponent], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL0ZFJTIwUGVsYXBvcmFuJTIwUEwyL3NyYy9hcHAvbW9kdWxlcy9tYWluL21lbnUtc2lkZWJhci9tZW51LXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0oiLCJmaWxlIjoibWVudS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn0iXX0= */"] });
const MENU = [
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


/***/ }),

/***/ 918:
/*!********************************************************************!*\
  !*** ./src/app/modules/privacy-policy/privacy-policy.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PrivacyPolicyComponent {
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(); };
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 79, vars: 0, consts: [["href", "https://www.facebook.com/about/privacy/update/printable", "target", "_blank", "rel", "noopener noreferrer"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Erdi K\u00F6se built the Admin LTE app as an Open Source app. This SERVICE is provided by Erdi K\u00F6se at no cost and is intended for use as is.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Admin LTE unless otherwise defined in this Privacy Policy.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p")(11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Information Collection and Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div")(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " The app does use third party services that may collect information used to identify you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Link to privacy policy of third party service providers used by the app ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul")(21, "li")(22, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p")(25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (\u201CIP\u201D) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p")(30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device`'`s internal memory.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " This Service does not use these \u201Ccookies\u201D explicitly. However, the app may use third party code and libraries that use \u201Ccookies\u201D to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p")(37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Service Providers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " I may employ third-party companies and individuals due to the following reasons:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul")(42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "To facilitate our Service;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "To provide the Service on our behalf;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "To perform Service-related services; or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "To assist us in analyzing how our Service is used.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p")(53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Security");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p")(58, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Links to Other Sites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p")(63, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Children\u2019s Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p")(68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Changes to This Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "This policy is effective as of 2020-04-19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p")(75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at erdikose8@gmail.com.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcml2YWN5LXBvbGljeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4928:
/*!************************************************************************!*\
  !*** ./src/app/modules/recover-password/recover-password.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverPasswordComponent": () => (/* binding */ RecoverPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/login"]; };
//import {AppService} from '@services/app.service';
class RecoverPasswordComponent {
    constructor(renderer, toastr) {
        this.renderer = renderer;
        this.toastr = toastr;
        this.class = 'login-box';
        this.isAuthLoading = false;
    }
    ngOnInit() {
        this.renderer.addClass(document.querySelector('app-root'), 'login-page');
        this.recoverPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required)
        });
    }
    recoverPassword() {
        if (this.recoverPasswordForm.valid) {
        }
        else {
            this.toastr.error('Hello world!', 'Toastr fun!');
        }
    }
    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('app-root'), 'login-page');
    }
}
RecoverPasswordComponent.ɵfac = function RecoverPasswordComponent_Factory(t) { return new (t || RecoverPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService)); };
RecoverPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RecoverPasswordComponent, selectors: [["app-recover-password"]], hostVars: 2, hostBindings: function RecoverPasswordComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.class);
    } }, decls: 27, vars: 7, consts: [[1, "card", "card-outline", "card-primary"], [1, "card-header", "text-center"], [1, "h1", 3, "routerLink"], [1, "card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "password", "type", "password", "placeholder", "Password", "autocomplete", "off", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-lock"], ["formControlName", "confirmPassword", "type", "password", "placeholder", "Confirm Password", "autocomplete", "off", 1, "form-control"], [1, "row"], [1, "col-12"], [3, "type", "block"], [1, "mt-3", "mb-1"], [3, "routerLink"]], template: function RecoverPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "LTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " You are only one step a way from your new password, recover your password now. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RecoverPasswordComponent_Template_form_ngSubmit_9_listener() { return ctx.recoverPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "app-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " Change password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 15)(25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.recoverPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", "submit")("block", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWNvdmVyLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 280:
/*!********************************************************!*\
  !*** ./src/app/modules/register/register.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);








const _c0 = function () {
  return ["/"];
};

const _c1 = function () {
  return ["/login"];
};

class RegisterComponent {
  constructor(renderer, toastr) {
    this.renderer = renderer;
    this.toastr = toastr;
    this.class = 'register-box';
    this.isAuthLoading = false;
    this.isGoogleLoading = false;
    this.isFacebookLoading = false;
  }

  ngOnInit() {
    this.renderer.addClass(document.querySelector('app-root'), 'register-page');
    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
      retypePassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
    });
  }

  registerByAuth() {
    var _this = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.registerForm.valid) {
        _this.isAuthLoading = true; //await this.appService.registerByAuth(this.registerForm.value);

        _this.isAuthLoading = false;
      } else {
        _this.toastr.error('Form is not valid!');
      }
    })();
  }

  registerByGoogle() {
    var _this2 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.isGoogleLoading = true; //await this.appService.registerByGoogle();

      _this2.isGoogleLoading = false;
    })();
  }

  registerByFacebook() {
    var _this3 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.isFacebookLoading = true; //await this.appService.registerByFacebook();

      _this3.isFacebookLoading = false;
    })();
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.querySelector('app-root'), 'register-page');
  }

}

RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
  return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService));
};

RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RegisterComponent,
  selectors: [["app-register"]],
  hostVars: 2,
  hostBindings: function RegisterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
    }
  },
  decls: 43,
  vars: 18,
  consts: [[1, "card", "card-outline", "card-primary"], [1, "card-header", "text-center"], [1, "h1", 3, "routerLink"], [1, "card-body"], [1, "login-box-msg"], [3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["formControlName", "email", "type", "email", "placeholder", "Email", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text"], [1, "fas", "fa-envelope"], ["formControlName", "password", "type", "password", "placeholder", "Password", 1, "form-control"], [1, "fas", "fa-lock"], ["formControlName", "retypePassword", "type", "password", "placeholder", "Retype password", 1, "form-control"], [1, "row"], [1, "col-7"], [1, "icheck-primary"], ["type", "checkbox", "id", "agreeTerms", "name", "terms", "value", "agree"], ["for", "agreeTerms"], ["href", "#"], [1, "col-5"], [3, "type", "block", "loading", "disabled"], [1, "social-auth-links", "text-center"], [1, "mb-2", 3, "block", "loading", "disabled", "icon", "click"], [3, "block", "loading", "disabled", "icon", "color", "click"], [1, "text-center", 3, "routerLink"]],
  template: function RegisterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "LTE");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Register a new membership");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "form", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_9_listener() {
        return ctx.registerByAuth();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8)(13, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 8)(18, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 8)(23, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 14)(26, "div", 15)(27, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " I agree to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "terms");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 20)(34, "app-button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 22)(37, "app-button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_app_button_click_37_listener() {
        return ctx.registerByFacebook();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Sign up using Facebook ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "app-button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_app_button_click_39_listener() {
        return ctx.registerByGoogle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Sign up using Google+ ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " I already have a membership");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "submit")("block", true)("loading", ctx.isAuthLoading)("disabled", ctx.isFacebookLoading || ctx.isGoogleLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("block", true)("loading", ctx.isFacebookLoading)("disabled", ctx.isAuthLoading || ctx.isGoogleLoading)("icon", "facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("block", true)("loading", ctx.isGoogleLoading)("disabled", ctx.isAuthLoading || ctx.isFacebookLoading)("icon", "google")("color", "danger");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1));
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4739:
/*!********************************************************!*\
  !*** ./src/app/pages/beadetail/beadetail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeadetailComponent": () => (/* binding */ BeadetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function BeadetailComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Data Bea Lelang kosong silahkan tambah data");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function BeadetailComponent_ng_template_57_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td")(20, "a", 26)(21, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 26)(24, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Kirim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 26)(27, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
function BeadetailComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BeadetailComponent_ng_template_57_tr_0_Template, 29, 14, "tr", 25);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listTrans);
} }
class BeadetailComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/LaporanPenyetoranBeaLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
            if (this.listTrans.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
BeadetailComponent.ɵfac = function BeadetailComponent_Factory(t) { return new (t || BeadetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BeadetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BeadetailComponent, selectors: [["app-beadetail"]], decls: 59, vars: 7, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "9", "align", "center"], [4, "ngFor", "ngForOf"], ["href", "/transaksiadd"], [1, "mb-1", 3, "block", "loading", "disabled", "icon"]], template: function BeadetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Bea Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "a", 12)(19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Tambah Data Bea ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "No. Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Jenis Transaksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "No. Transaksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "No. BPN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Kode Map");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pokok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Bea Penjual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Bea Pembeli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Tgl. Setor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Tgl. Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, BeadetailComponent_div_56_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, BeadetailComponent_ng_template_57_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/beatambah/periode/", ctx.idperiode, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWFkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8324:
/*!**********************************************************!*\
  !*** ./src/app/pages/bealanding/bealanding.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BealandingComponent": () => (/* binding */ BealandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function BealandingComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Data Transaksi kosong silahkan tambah transaksi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} }
function BealandingComponent_ng_template_51_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td")(20, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.noRegisterLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.nomorRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.tanggalRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.namaPenjual);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r4.tanggalPenyerahanKutipanRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "/beadetail/", data_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BealandingComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BealandingComponent_ng_template_51_tr_0_Template, 23, 10, "tr", 23);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.listTrans);
} }
class BealandingComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
            if (this.listTrans.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    onKirim(idtrans) {
        if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
            console.log(idtrans);
            this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/Kirim?id=" + idtrans, this.generateHeader()).subscribe(data => {
                console.log("post ressult ", data);
                this.toastr.info("Jadwal Terkirim ke P2PK");
                this.router.navigate(['/jadwaldetail/' + this.idperiode]);
            }, error => {
                this.toastr.error("Tidak dapat mengirim data, Periksa kembali data Anda");
                console.log(error);
            });
        }
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
BealandingComponent.ɵfac = function BealandingComponent_Factory(t) { return new (t || BealandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
BealandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BealandingComponent, selectors: [["app-bealanding"]], decls: 53, vars: 2, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "9", "align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-s", 3, "href"], [1, "fas", "fa-inbox"]], template: function BealandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Daftar Transaksi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15)(23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18)(26, "table", 19)(27, "thead")(28, "tr")(29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "No Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Tgl. Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "No. Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tanggal Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Penjual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Tgl. Surat Penetapan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Tgl. Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, BealandingComponent_div_50_Template, 4, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, BealandingComponent_ng_template_51_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWFsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8896:
/*!****************************************************!*\
  !*** ./src/app/pages/bealist/bealist.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BealistComponent": () => (/* binding */ BealistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function BealistComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "a", 21)(13, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.tahun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/bea/", data_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
class BealistComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateHeader()).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
BealistComponent.ɵfac = function BealistComponent_Factory(t) { return new (t || BealistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BealistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BealistComponent, selectors: [["app-bealist"]], decls: 42, vars: 1, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"]], template: function BealistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Bea Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "table", 19)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Tahun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Jumlah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Penyetoran Bea");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Pokok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, BealistComponent_tr_41_Template, 15, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listJadwal);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWFsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 540:
/*!********************************************************!*\
  !*** ./src/app/pages/beatambah/beatambah.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeatambahComponent": () => (/* binding */ BeatambahComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_fileupload_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/fileupload.service */ 9458);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function BeatambahComponent_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", data_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", data_r3.nomorRisalahLelang, " - ", data_r3.namaPenjual, " ");
} }
function BeatambahComponent_a_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 44)(1, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Preview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.responseUpload ? ctx_r1.responseUpload.data : "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function BeatambahComponent_div_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx_r2.prog, "%");
} }
class BeatambahComponent {
    constructor(toastr, route, router, http, uploadService) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.uploadService = uploadService;
        this.trans = {};
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.idpreview = this.route.snapshot.params['idpreview'];
        this.isAddMode = this.idperiode ? true : false;
        this.isPreview = this.idpreview ? true : false;
        this.isEditMode = this.id ? true : false;
        //kurang
        this.beaForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
            tanggalLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            tanggalPenyerahanKutipanRisalahLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            beaLelangPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            beaLelangPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            transaksiLelangId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            pokokLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            jenisTransaksi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            nomorTransaksi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            fileJenisTransaksi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            nomorBPN: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            kodeMAP: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            tanggalPenyetoran: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required)
        });
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
        }, error => {
        });
    }
    onSelectRegister(id) {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/" + id, this.generateHeader()).subscribe((result) => {
            this.trans = result.data;
            console.log(this.trans);
        }, error => { });
    }
    savetransaksi() {
        if (confirm("Apakah anda sudah mengisi data dengan lengkap dan benar?")) {
            this.http.post("https://pelaporanpliiapi.azurewebsites.net/api/LaporanPenyetoranBeaLelang", this.generateBodyReq(this.beaForm.value), this.generateHeader()).subscribe(data => {
                console.log("post ressult ", data);
                this.toastr.info("Data Tersimpan");
                this.router.navigate(['/beadetail/' + this.idperiode]);
            }, error => {
                this.toastr.error("Tidak dapat menyimpan Bea lelang, Periksa kembali isian Anda");
                console.log(error);
            });
        }
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
    generateBodyReq(formValue) {
        let id = this.id === "" ? (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])() : this.id;
        let bodyreq = {
            transaksiLelangId: formValue.transaksiLelangId,
            pokokLelang: formValue.pokokLelang,
            jenisTransaksi: formValue.jenisTransaksi,
            nomorTransaksi: formValue.nomorTransaksi,
            fileJenisTransaksi: formValue.fileJenisTransaksi,
            nomorBPN: formValue.nomorBPN,
            kodeMAP: formValue.kodeMAP,
            tanggalPenyetoran: formValue.tanggalPenyetoran,
            keterangan: formValue.keterangan
        };
        console.log(formValue);
        return bodyreq;
    }
    submitFile() {
        this.uploadService.submitFile("https://pelaporanpliiapi.azurewebsites.net/api/LaporanPenyetoranBeaLelang/uploadDokumen", this.fileUpload).subscribe((r) => {
            this.prog = r[1];
            this.responseUpload = r[0];
        });
    }
    uploadFile(event) {
        const file = event.target.files ? event.target.files[0] : '';
        var blob = event.target.files[0].slice(0, event.target.files[0].size, file.type);
        const newFile = new File([blob], file.name, { type: file.type });
        console.log("file :", event.target.getAttribute('formControlName'));
        this.fileUpload = file;
        let control = event.target;
        this.beaForm.patchValue({
            fileUpload: file.name
        });
    }
}
BeatambahComponent.ɵfac = function BeatambahComponent_Factory(t) { return new (t || BeatambahComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fileupload_service__WEBPACK_IMPORTED_MODULE_0__.FileUploadService)); };
BeatambahComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BeatambahComponent, selectors: [["app-beatambah"]], decls: 97, vars: 9, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "formGroup"], [1, "card-body"], [1, "row"], [1, "form-group", "col-xl-6"], ["for", "exampleInputEmail1"], ["id", "sifat", "formControlName", "transaksiLelangId", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "jenisTransaksi", 1, "form-control"], ["value", "SSP"], ["value", "SSBP"], ["type", "text", "formControlName", "nomorTransaksi", 1, "form-control"], ["type", "text", "id", "suratttp", "formControlName", "nomorBPN", 1, "form-control"], ["type", "text", "formControlName", "kodeMAP", 1, "form-control"], ["type", "text", "disabled", "", "id", "tglsuratttp", 1, "form-control", 3, "value"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "disabled", "", "data-type", "currency", "id", "tglsuratttp", 1, "form-control", 3, "value"], ["type", "text", "id", "tglsuratttp", "disabled", "", 1, "form-control", 3, "value"], ["for", "tanggalSuratPenetapanJadwalLelang"], ["type", "text", "onClick", "showDatePicker(this);", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "onClick", "showDatePicker(this);", "formControlName", "tanggalPenyetoran", 1, "form-control"], ["type", "text", "formControlName", "keterangan", 1, "form-control"], [1, "form-group"], ["for", "exampleInputFile"], [1, "input-group"], ["type", "file", "formControlName", "fileJenisTransaksi", 1, "file-upload", 3, "change"], [1, "input-group-append"], [1, "btn-transparent", 3, "click"], [1, "input-group-text"], ["target", "_blank", "class", "btn-transparent", 3, "href", 4, "ngIf"], ["class", "progress form-group", 4, "ngIf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"], ["target", "_blank", 1, "btn-transparent", 3, "href"], [1, "progress", "form-group"], ["role", "progressbar", 1, "progress-bar", "progress-bar-striped", "bg-success"]], template: function BeatambahComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tambah Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tambah Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Tambah Bea Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nomor Risalah ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BeatambahComponent_Template_select_change_25_listener($event) { return ctx.onSelectRegister($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "-Pilih-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, BeatambahComponent_option_28_Template, 2, 3, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 15)(30, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Jenis Transaksi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "select", 19)(33, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "SSP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "SSBP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14)(38, "div", 15)(39, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Nomor Transaksi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15)(43, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Nomor BPN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 14)(47, "div", 15)(48, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Kode Map ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15)(52, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Pokok Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 14)(56, "div", 15)(57, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Bea Lelang Penjual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 15)(61, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Bea Lelang Pembeli ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14)(65, "div", 15)(66, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Tanggal Penyerahan Kutipan Risalah Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15)(70, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Tanggal Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 14)(74, "div", 15)(75, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Tanggal Setor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 15)(79, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Keterangan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 32)(83, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Upload Bukti Bea Lelang (<0.5 Mb)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 34)(86, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BeatambahComponent_Template_input_change_86_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 36)(88, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BeatambahComponent_Template_a_click_88_listener() { return ctx.submitFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, BeatambahComponent_a_92_Template, 3, 1, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, BeatambahComponent_div_93_Template, 2, 2, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 41)(95, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BeatambahComponent_Template_button_click_95_listener() { return ctx.savetransaksi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Tambah Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.beaForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listTrans);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.trans.pokokLelang ? ctx.trans.pokokLelang : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.trans.beaLelangPenjual ? ctx.trans.beaLelangPenjual : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.trans.beaLelangPembeli ? ctx.trans.beaLelangPembeli : "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.trans.beaLelangPembeli ? ctx.trans.beaLelangPembeli : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.trans.tanggalLelang ? ctx.trans.tanggalLelang : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.responseUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prog > 0);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiZWF0YW1iYWguY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7276:
/*!************************************************!*\
  !*** ./src/app/pages/blank/blank.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankComponent": () => (/* binding */ BlankComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class BlankComponent {
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 28, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFuay5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4218:
/*!**************************************************!*\
  !*** ./src/app/pages/bphadd/bphadd.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BphaddComponent": () => (/* binding */ BphaddComponent)
/* harmony export */ });
/* harmony import */ var _Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_alamat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/alamat.service */ 7657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);












function BphaddComponent_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", data_r5.nomorRisalahLelang, " - ", data_r5.namaPenjual, " ");
  }
}

function BphaddComponent_option_81_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r1.provinsi[i_r8].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.provinsi[i_r8].name, " ");
  }
}

function BphaddComponent_option_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.kab[i_r10].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.kab[i_r10].name, " ");
  }
}

function BphaddComponent_option_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r12 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r3.kec[i_r12].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.kec[i_r12].name, " ");
  }
}

function BphaddComponent_option_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r4.kel[i_r14].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.kel[i_r14].name, " ");
  }
}

class BphaddComponent {
  constructor(toastr, route, router, http, alamatService) {
    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.http = http;
    this.alamatService = alamatService;
    this.trans = {};
    this.provinsi = [];
    this.kab = [];
    this.kec = [];
    this.kel = [];
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.idperiode = this.route.snapshot.params['idperiode'];
    this.idpreview = this.route.snapshot.params['idpreview'];
    this.isAddMode = this.idperiode ? true : false;
    this.isPreview = this.idpreview ? true : false;
    this.isEditMode = this.id ? true : false;
    this.alamatService.getAllProvinsi().subscribe(r => {
      this.provinsi = r;
    });
    this.bphForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      transaksiLelangId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      lot: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      letaktanahBangunanLong: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      letaktanahBangunanLat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      statusHakAtasTanah: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      luasTanah: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      luasBangunan: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      njopnop: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      pokokLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nomorSSB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tanggalSSB: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nomorSSP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tanggalSSP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tanggalPenyampaianPetikanRisalahRapat: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe(result => {
      this.listTrans = result.data;
      console.log(result);
    }, error => {});
    /*
    "transaksiLelangId": "string",
    "lot": 0,
    "letaktanahBangunanLong": "string",
    "letaktanahBangunanLat": "string",
    "statusHakAtasTanah": "string",
    "luasTanah": 0,
    "luasBangunan": 0,
    "njopnop": 0,
    "pokokLelang": 0,
    "nomorSSB": 0,
    "tanggalSSB": "2022-12-08T20:26:30.318Z",
    "nomorSSP": 0,
    "tanggalSSP": "2022-12-08T20:26:30.318Z",
    "tanggalPenyampaianPetikanRisalahRapat": "2022-12-08T20:26:30.318Z",
    "keterangan": "string"
    */
  }

  savetransaksi() {
    if (confirm("Apakah anda sudah mengisi data dengan lengkap dan benar?")) {
      this.http.post("https://pelaporanpliiapi.azurewebsites.net/api/LaporanRisalahLelangPengenaanBPHTB", this.generateBodyReq(this.bphForm.value), this.generateHeader()).subscribe(data => {
        console.log("post ressult ", data);
        this.toastr.info("Data Tersimpan");
        this.router.navigate(['/bphdetail/' + this.idperiode]);
      }, error => {
        this.toastr.error("Tidak dapat menyimpan BPHTB, Periksa kembali isian Anda");
        console.log(error);
      });
    }
  }

  selectProvinsi(id) {
    var _this = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("provinsi:", id);

      _this.alamatService.selectProvinsi(id).subscribe(r => {
        _this.kab = r;
      });
    })();
  }

  selectKab(id) {
    var _this2 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("kab:", id);

      _this2.alamatService.selectKab(id).subscribe(r => {
        _this2.kec = r;
      });
    })();
  }

  selectKec(id) {
    var _this3 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("kec:", id);

      _this3.alamatService.selectKec(id).subscribe(r => {
        _this3.kel = r;
      });
    })();
  }

  generateHeader() {
    let token = localStorage.getItem('token').replace('"', '');
    let options = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: "Bearer " + token
      })
    };
    return options;
  }

  onSelectRegister(id) {
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/" + id, this.generateHeader()).subscribe(result => {
      this.trans = result.data;
      console.log(this.trans);
    }, error => {});
  }

  generateBodyReq(formValue) {
    let id = this.id === "" ? (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])() : this.id;
    let bodyreq = {
      transaksiLelangId: formValue.transaksiLelangId,
      lot: parseInt(formValue.lot),
      letaktanahBangunanLong: formValue.letaktanahBangunanLong,
      letaktanahBangunanLat: formValue.letaktanahBangunanLat,
      statusHakAtasTanah: formValue.statusHakAtasTanah,
      luasTanah: parseInt(formValue.luasTanah),
      luasBangunan: parseInt(formValue.luasBangunan),
      njopnop: Number(formValue.njopnop.replace(/[^0-9.-]+/g, "")),
      pokokLelang: Number(this.trans.pokokLelang),
      nomorSSB: Number(formValue.nomorSSB),
      tanggalSSB: formValue.tanggalSSB,
      nomorSSP: Number(formValue.nomorSSP),
      tanggalSSP: formValue.tanggalSSP,
      tanggalPenyampaianPetikanRisalahRapat: formValue.tanggalPenyampaianPetikanRisalahRapat,
      keterangan: formValue.keterangan
    };
    console.log(bodyreq);
    return bodyreq;
  }

}

BphaddComponent.ɵfac = function BphaddComponent_Factory(t) {
  return new (t || BphaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_alamat_service__WEBPACK_IMPORTED_MODULE_1__.AlamatService));
};

BphaddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BphaddComponent,
  selectors: [["app-bphadd"]],
  decls: 256,
  vars: 20,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "formGroup"], [1, "card-header", "p-0", "pt-1", "border-bottom-0"], ["id", "custom-tabs-three-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "custom-tabs-three-home-tab", "data-toggle", "pill", "href", "#custom-tabs-three-home", "role", "tab", "aria-controls", "custom-tabs-three-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "custom-tabs-three-profile-tab", "data-toggle", "pill", "href", "#custom-tabs-three-profile", "role", "tab", "aria-controls", "custom-tabs-three-profile", "aria-selected", "false", 1, "nav-link"], ["id", "custom-tabs-three-school-tab", "data-toggle", "pill", "href", "#custom-tabs-three-school", "role", "tab", "aria-controls", "custom-tabs-three-school", "aria-selected", "false", 1, "nav-link"], [1, "card-body"], ["id", "custom-tabs-three-tabContent", 1, "tab-content"], ["id", "custom-tabs-three-home", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-home-tab", 1, "tab-pane", "fade", "active", "show"], [1, "row"], [1, "form-group", "col-xl-6"], ["for", "exampleInputEmail1"], ["id", "sifat", "formControlName", "transaksiLelangId", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "formControlName", "letaktanahBangunanLat", 1, "form-control"], ["type", "text", "formControlName", "letaktanahBangunanLong", 1, "form-control"], ["formControlName", "statusHakAtasTanah", 1, "form-control"], ["value", "Hak Milik"], ["value", "HGB"], ["value", "HGU"], ["value", "Hak Pakai"], ["value", "SHRMS"], ["value", "Girik"], ["type", "text", 1, "form-control"], ["for", "provinsi"], ["id", "provinsi", 1, "form-control", 3, "change"], ["for", "kab"], ["id", "kab", 1, "form-control", 3, "change"], ["for", "kecamatan"], ["id", "kec", 1, "form-control", 3, "change"], ["for", "kelurahan"], ["id", "kel", 1, "form-control"], ["for", "rt"], ["type", "text", "id", "rt", "placeholder", "", 1, "form-control"], ["for", "rw"], ["type", "text", "id", "rw", "placeholder", "RW", 1, "form-control"], ["for", "kodepos"], ["type", "text", "id", "kodepos", 1, "form-control"], ["type", "text", "formControlName", "lot", 1, "form-control"], ["for", "luasTanah"], ["type", "text", "id", "luasTanah", "formControlName", "luasTanah", 1, "form-control"], ["type", "text", "formControlName", "luasBangunan", 1, "form-control"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "njopnop", 1, "form-control"], ["type", "text", "value", "", "data-type", "currency", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "formControlName", "nomorSSB", 1, "form-control"], ["type", "date", "formControlName", "tanggalSSB", 1, "form-control"], ["type", "text", "formControlName", "nomorSSP", 1, "form-control"], ["type", "date", "formControlName", "tanggalSSP", 1, "form-control"], ["type", "date", "formControlName", "tanggalPenyampaianPetikanRisalahRapat", 1, "form-control"], ["type", "text", "id", "keterangan", "formControlName", "keterangan", 1, "form-control"], ["id", "custom-tabs-three-profile", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-profile-tab", 1, "tab-pane", "fade"], ["type", "text", "id", "namapenjual", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "disabled", "", 1, "form-control"], ["id", "custom-tabs-three-school", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-school-tab", 1, "tab-pane", "fade"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"]],
  template: function BphaddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Risalah Lelang untuk Pengenaan BPHTB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Risalah BPHTB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Risalah BPHTB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "ul", 14)(22, "li", 15)(23, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Informasi BPHTB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 15)(26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Data Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li", 15)(29, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Data Pembeli");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19)(32, "div", 20)(33, "div", 21)(34, "div", 22)(35, "div", 23)(36, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Nomor Risalah Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BphaddComponent_Template_select_change_38_listener($event) {
        return ctx.onSelectRegister($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "-Pilih-");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, BphaddComponent_option_41_Template, 2, 3, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23)(43, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Tanggal Risalah Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 22)(47, "div", 23)(48, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Lattitude Tanah / Bangunan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 23)(52, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Longitude Tanah / Bangunan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 22)(56, "div", 23)(57, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Status Hak Atas Tanah ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "select", 30)(60, "option", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Hak Milik");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "HGB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "option", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "HGU");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "option", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Hak Pakai");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "option", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "SHRMS");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "option", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Girik");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 23)(73, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Alamat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 22)(77, "div", 23)(78, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Provinsi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "select", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BphaddComponent_Template_select_change_80_listener($event) {
        return ctx.selectProvinsi($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, BphaddComponent_option_81_Template, 2, 2, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 23)(83, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Kab/Kota");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "select", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BphaddComponent_Template_select_change_85_listener($event) {
        return ctx.selectKab($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](86, BphaddComponent_option_86_Template, 2, 2, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 22)(88, "div", 23)(89, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Kecamatan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "select", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function BphaddComponent_Template_select_change_91_listener($event) {
        return ctx.selectKec($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](92, BphaddComponent_option_92_Template, 2, 2, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 23)(94, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Kelurahan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "select", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, BphaddComponent_option_97_Template, 2, 2, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 22)(99, "div", 23)(100, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "RT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "input", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "div", 23)(104, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "RW");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](106, "input", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 22)(108, "div", 23)(109, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Kode Pos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "input", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 23)(113, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Lot");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "input", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "div", 22)(117, "div", 23)(118, "label", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Luas Tanah (m2)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "input", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 23)(122, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Luas Bangunan (m2)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 22)(126, "div", 23)(127, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "NJOP/NOP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "input", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 23)(131, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Pokok Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 22)(135, "div", 23)(136, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Nomor SSB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 23)(140, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Tanggal SSB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "div", 22)(144, "div", 23)(145, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "Nomor SSP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "input", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "div", 23)(149, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "Tanggal SSP ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 22)(153, "div", 23)(154, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](155, "Tanggal Penyampaian Petikan Risalah Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](156, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 23)(158, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Keterangan ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 64)(162, "div", 22)(163, "div", 23)(164, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Nama Penjual Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 23)(168, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Alamat Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 22)(172, "div", 23)(173, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Provinsi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 23)(177, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Kab/Kota");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 22)(181, "div", 23)(182, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Kecamatan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](184, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "div", 23)(186, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "Kelurahan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 22)(190, "div", 23)(191, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](192, "RT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](193, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 23)(195, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "RW");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 22)(199, "div", 23)(200, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](201, "Kode Pos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 23)(204, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "NPWP Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 67)(208, "div", 22)(209, "div", 23)(210, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](211, "Nama Pembeli");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](212, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 23)(214, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, "Alamat Pembeli");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "div", 22)(218, "div", 23)(219, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](220, "Provinsi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 23)(223, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Kab/Kota");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](225, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "div", 22)(227, "div", 23)(228, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Kecamatan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](230, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "div", 23)(232, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](233, "Kelurahan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](234, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "div", 22)(236, "div", 23)(237, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](238, "RT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "div", 23)(241, "label", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, "RW");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](243, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 22)(245, "div", 23)(246, "label", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Kode Pos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](248, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "div", 23)(250, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "NPWP Pembeli");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](252, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "div", 68)(254, "button", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BphaddComponent_Template_button_click_254_listener() {
        return ctx.savetransaksi();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, "Simpan Risalah BPHTB");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.bphForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listTrans);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.tanggalRisalahLelang ? ctx.trans.tanggalRisalahLelang : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.provinsi);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kab);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kel);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.pokokLelang ? ctx.trans.pokokLelang : "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.namaPenjual ? ctx.trans.namaPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.alamatPenjual ? ctx.trans.alamatPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.rtPenjual ? ctx.trans.rtPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.rwPenjual ? ctx.trans.rwPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.kodeposPenjual ? ctx.trans.kodeposPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.npwpPenjual ? ctx.trans.npwpPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.namaPembeli ? ctx.trans.namaPembeli : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.alamatPembeli ? ctx.trans.alamatPembeli : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.rtPembeli ? ctx.trans.rtPembeli : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.rwPembeli ? ctx.trans.rwPembeli : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.kodeposPembeli ? ctx.trans.kodeposPembeli : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.trans.npwpPembeli ? ctx.trans.npwpPembeli : "");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicGhhZGQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 5812:
/*!********************************************************!*\
  !*** ./src/app/pages/bphdetail/bphdetail.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BphdetailComponent": () => (/* binding */ BphdetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function BphdetailComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Data Transaksi kosong silahkan tambah risalah BPHTB");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function BphdetailComponent_ng_template_51_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "a", 26)(19, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 28)(22, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Kirim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 28)(25, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomerRegistrasi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalRegistrasi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomorRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.namaPenjual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
function BphdetailComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, BphdetailComponent_ng_template_51_tr_0_Template, 27, 20, "tr", 25);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listTrans);
} }
class BphdetailComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
            if (this.listTrans.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
BphdetailComponent.ɵfac = function BphdetailComponent_Factory(t) { return new (t || BphdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BphdetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BphdetailComponent, selectors: [["app-bphdetail"]], decls: 53, vars: 7, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "9", "align", "center"], [4, "ngFor", "ngForOf"], ["href", "/transaksiadd"], [1, "mb-1", 3, "block", "loading", "disabled", "icon"], ["href", "/bphadd"]], template: function BphdetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Risalah Lelang untuk Pengenaan BPHTB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Detail BPHTB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "a", 12)(19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Tambah BPHTB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "No Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Tgl. Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "No. Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Tanggal Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Penjual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tgl. Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, BphdetailComponent_div_50_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, BphdetailComponent_ng_template_51_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/bphadd/periode/", ctx.idperiode, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicGhkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5872:
/*!****************************************************!*\
  !*** ./src/app/pages/bphlist/bphlist.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BphlistComponent": () => (/* binding */ BphlistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function BphlistComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Rp. - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "a", 21)(13, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.tahun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/bphdetail/", data_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
class BphlistComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateHeader()).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
BphlistComponent.ɵfac = function BphlistComponent_Factory(t) { return new (t || BphlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
BphlistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BphlistComponent, selectors: [["app-bphlist"]], decls: 42, vars: 1, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"]], template: function BphlistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Risalah Lelang untuk Pengenaan BPHTB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Risalah Lelang untuk Pengenaan BPHTB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "table", 19)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Tahun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Jumlah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Jumlah Lelang Tanah dan Bangunan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Bea Pokok");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Petikan Risalah Tersampaikan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, BphlistComponent_tr_41_Template, 15, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listJadwal);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicGhsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _type_periode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/type/periode */ 7763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);






function DashboardComponent_tr_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.tahun);
} }
class DashboardComponent {
    constructor(periodeLaporan, http) {
        this.periodeLaporan = periodeLaporan;
        this.http = http;
    }
    ngOnInit() {
        this.listPeriode = JSON.parse(localStorage.getItem('periode'));
        console.log(this.listPeriode);
        if (!this.listPeriode) {
            this.listPeriode = [];
        }
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateHeader()).subscribe((result) => {
            this.listPeriode = result.data;
            console.log(result);
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_type_periode__WEBPACK_IMPORTED_MODULE_0__.Periode), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 67, vars: 5, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "m-0", "text-dark"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], ["href", "/periode"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], ["colspan", "2"], [4, "ngFor", "ngForOf"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "ol", 5)(8, "li", 6)(9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Pelaporan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 9)(14, "div", 1)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "a", 13)(19, "app-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Tambah Periode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 18)(25, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21)(28, "table", 22)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Tahun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Jadwal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Transaksi Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Bea Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "BPHTB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Tersimpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Terkirim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Tersimpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Terkirim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Tersimpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Terkirim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Tersimpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Terkirim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Tersimpan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Terkirim");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, DashboardComponent_tr_66_Template, 23, 1, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listPeriode);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1791:
/*!********************************************************!*\
  !*** ./src/app/pages/jadwaladd/jadwaladd.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JadwaladdComponent": () => (/* binding */ JadwaladdComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _type_periode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/type/periode */ 7763);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);










function JadwaladdComponent_button_92_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JadwaladdComponent_button_92_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Simpan Jadwal Lelang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class JadwaladdComponent {
    constructor(toastr, route, router, periodeLaporan, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.periodeLaporan = periodeLaporan;
        this.http = http;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.idpreview = this.route.snapshot.params['idpreview'];
        this.isAddMode = this.idperiode ? true : false;
        this.isPreview = this.idpreview ? true : false;
        this.isEditMode = this.id ? true : false;
        this.jadwalForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
            nomerRegistrasi: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            tanggalLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            namaPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            klasifikasiPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            nomorSuratPermohonan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            tanggalSuratPermohonan: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            tempatLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            sifatLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            nomorSuratPenetapanJadwalLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            tanggalSuratPenetapanJadwalLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
        });
        if (this.isEditMode || this.isPreview) {
            const idperiode = this.isEditMode ? this.id : this.idpreview;
            this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/" + idperiode, this.generateHeader()).subscribe((result) => {
                this.jadwal = result.data;
                console.log(result);
                this.idperiode = this.jadwal.periodeLaporanId;
                this.jadwalForm.patchValue({
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
                    tanggalSuratPenetapanJadwalLelang: this.jadwal.tanggalSuratPenetapanJadwalLelang
                });
            }, error => {
            });
            if (this.isPreview) {
                this.jadwalForm.disable();
            }
        }
    }
    savejadwal() {
        this.toastr.info("Tambah Jadwal Berhasil");
    }
    generateBodyReq(formValue) {
        let id = this.id === "" ? (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])() : this.id;
        let bodyreq = {
            id: this.id,
            periodeLaporanId: this.idperiode,
            nomerRegistrasi: formValue.nomerRegistrasi,
            tanggalRegistrasi: formValue.tanggalRegistrasi,
            tanggalLelang: formValue.tanggalLelang,
            namaPenjual: formValue.namaPenjual,
            klasifikasiPenjual: formValue.klasifikasiPenjual,
            nomorSuratPermohonan: formValue.nomorSuratPermohonan,
            tanggalSuratPermohonan: formValue.tanggalSuratPermohonan,
            tempatLelang: formValue.tempatLelang,
            sifatLelang: formValue.sifatLelang,
            nomorSuratPenetapanJadwalLelang: formValue.nomorSuratPenetapanJadwalLelang,
            tanggalSuratPenetapanJadwalLelang: formValue.tanggalSuratPenetapanJadwalLelang
        };
        console.log(bodyreq);
        return bodyreq;
    }
    onSubmit() {
        if (confirm("Apakah anda sudah mengisi data dengan lengkap dan benar?")) {
            if (this.isAddMode) {
                this.http.post("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang", this.generateBodyReq(this.jadwalForm.value), this.generateHeader()).subscribe(data => {
                    console.log("post ressult ", data);
                    this.toastr.info("Data Tersimpan");
                    this.router.navigate(['/jadwaldetail/' + this.idperiode]);
                }, error => {
                    this.toastr.error("Tidak dapat menyimpan jadwal, Periksa kembali isian Anda");
                    console.log(error);
                });
            }
            else {
                this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/" + this.id, this.generateBodyReq(this.jadwalForm.value), this.generateHeader()).subscribe(data => {
                    console.log("post ressult ", data);
                    this.toastr.info("Data Dirubah");
                    this.router.navigate(['/jadwaldetail/' + this.idperiode]);
                }, error => {
                    this.toastr.error("Tidak dapat menyimpan jadwal, Periksa kembali isian Anda");
                    console.log(error);
                });
            }
        }
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
JadwaladdComponent.ɵfac = function JadwaladdComponent_Factory(t) { return new (t || JadwaladdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_type_periode__WEBPACK_IMPORTED_MODULE_0__.Periode), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
JadwaladdComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JadwaladdComponent, selectors: [["app-jadwaladd"]], decls: 94, vars: 2, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "formGroup"], [1, "card-body"], [1, "row"], [1, "form-group", "col-xl-6"], ["for", "nomerRegistrasi"], ["type", "text", "formControlName", "nomerRegistrasi", 1, "form-control"], ["for", "tanggalLelang"], ["type", "text", "onClick", "showDatePicker(this);", "formControlName", "tanggalLelang", 1, "form-control"], ["for", "namaPenjual"], ["type", "text", "formControlName", "namaPenjual", 1, "form-control"], ["for", "klasifikasiPenjual"], ["formControlName", "klasifikasiPenjual", 1, "form-control"], ["value", "BUMN/D"], ["value", "Bank"], ["value", "Perwakilan Negara Asing"], ["value", "Perseorangan"], ["value", "Swasta"], ["for", "nomorSuratPermohonan"], ["type", "text", "formControlName", "nomorSuratPermohonan", 1, "form-control"], ["for", "tanggalSuratPermohonan"], ["type", "text", "onClick", "showDatePicker(this);", "formControlName", "tanggalSuratPermohonan", 1, "form-control"], ["for", "tempatLelang"], ["formControlName", "tempatLelang", 1, "form-control"], ["value", "Balai Lelang"], ["value", "Kantor PL II"], ["value", "Aplikasi"], ["for", "sifatLelang"], ["formControlName", "sifatLelang", 1, "form-control"], ["value", "Lisan"], ["value", "Tertulis dengan Kehadiran"], ["value", "Surat Elektronik"], ["value", "Closed Bidding"], ["value", "Open Bidding"], ["for", "nomorSuratPenetapanJadwalLelang"], ["type", "text", "formControlName", "nomorSuratPenetapanJadwalLelang", 1, "form-control"], ["for", "tanggalSuratPenetapanJadwalLelang"], ["type", "text", "onClick", "showDatePicker(this);", "formControlName", "tanggalSuratPenetapanJadwalLelang", 1, "form-control"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function JadwaladdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Jadwal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Jadwal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Jadwal Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "div", 14)(22, "div", 15)(23, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nomor Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 15)(27, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Rencana Tanggal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14)(31, "div", 15)(32, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Nama Penjual Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 15)(36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Klasifikasi Penjual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "select", 23)(39, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "BUMN/D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Bank");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Perwakilan Negara Asing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Perseorangan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Swasta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 14)(50, "div", 15)(51, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Nomor Surat Permohonan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 15)(55, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Tanggal Surat Permohonan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 14)(59, "div", 15)(60, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Tempat Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "select", 34)(63, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Balai Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Kantor PL II");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Aplikasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 15)(70, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Sifat Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "select", 39)(73, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Lisan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Tertulis dengan Kehadiran");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Surat Elektronik");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Closed Bidding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Open Bidding");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 14)(84, "div", 15)(85, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Nomor Surat Penetapan Jadwal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 15)(89, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Tanggal Surat Penetapan Jadwal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, JadwaladdComponent_button_92_Template, 2, 0, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.jadwalForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isPreview);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWR3YWxhZGQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9936:
/*!**************************************************************!*\
  !*** ./src/app/pages/jadwaldetail/jadwaldetail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JadwalDetailComponent": () => (/* binding */ JadwalDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function JadwalDetailComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Jadwal kosong silahkan tambah jadwal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function JadwalDetailComponent_ng_template_51_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JadwalDetailComponent_ng_template_51_tr_0_Template_a_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onKirim(data_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Kirim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomerRegistrasi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.namaPenjual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.sifatLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tempatLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomorSuratPenetapanJadwalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalSuratPenetapanJadwalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/jadwaladd/", data_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/jadwaladd/preview/", data_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function JadwalDetailComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, JadwalDetailComponent_ng_template_51_tr_0_Template, 27, 10, "tr", 25);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listJadwal);
} }
class JadwalDetailComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/AllPerPeriode/" + this.idperiode, this.generateHeader(1)).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
            if (this.listJadwal.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    generateHeader1() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        console.log(options);
        return options;
    }
    generateHeader(idjadwal) {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }), params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('id', idjadwal) };
        console.log(options);
        return options;
    }
    onKirim(idjadwal) {
        if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
            console.log(idjadwal);
            const body = { id: idjadwal };
            this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/Kirim?id=" + idjadwal, this.generateHeader1()).subscribe(data => {
                console.log("post ressult ", data);
                this.toastr.info("Jadwal Terkirim ke P2PK");
                this.router.navigate(['/jadwaldetail/' + this.idperiode]);
            }, error => {
                this.toastr.error("Tidak dapat mengirim data, Periksa kembali data Anda");
                console.log(error);
            });
        }
    }
}
JadwalDetailComponent.ɵfac = function JadwalDetailComponent_Factory(t) { return new (t || JadwalDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
JadwalDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JadwalDetailComponent, selectors: [["app-jadwaldetail"]], decls: 53, vars: 7, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "7", "align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-s", 3, "href"], [1, "fas", "fa-edit"], [1, "btn", "btn-s", 3, "click"], [1, "fas", "fa-envelope"], [1, "fas", "fa-inbox"]], template: function JadwalDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Jadwal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Jadwal Lelang Detail : 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "a", 12)(19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Tambah Jadwal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "No Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Rencana Tanggal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Penjual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Sifat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Tempat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "No. Surat Penetapan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tgl. Surat Penetapan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, JadwalDetailComponent_div_50_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, JadwalDetailComponent_ng_template_51_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/jadwaladd/periode/", ctx.idperiode, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWR3YWxkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4358:
/*!**********************************************************!*\
  !*** ./src/app/pages/jadwallist/jadwallist.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JadwallistComponent": () => (/* binding */ JadwallistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function JadwallistComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "a", 21)(13, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.tahun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/jadwaldetail/", data_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
class JadwallistComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateHeader()).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
JadwallistComponent.ɵfac = function JadwallistComponent_Factory(t) { return new (t || JadwallistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
JadwallistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JadwallistComponent, selectors: [["app-jadwallist"]], decls: 42, vars: 1, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"]], template: function JadwallistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Jadwal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Jadwal Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "table", 19)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Tahun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Mendatang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Terlaksana");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Batal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, JadwallistComponent_tr_41_Template, 15, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listJadwal);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqYWR3YWxsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7147:
/*!************************************************!*\
  !*** ./src/app/pages/ksadd/ksadd.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KsaddComponent": () => (/* binding */ KsaddComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








function KsaddComponent_option_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r5.nomorRisalahLelang, " - ", data_r5.namaPenjual, " ");
} }
function KsaddComponent_option_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r7.nomorRisalahLelang, " - ", data_r7.namaPenjual, " ");
} }
function KsaddComponent_option_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r9.nomorRisalahLelang, " - ", data_r9.namaPenjual, " ");
} }
function KsaddComponent_option_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r11.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r11.nomorRisalahLelang, " - ", data_r11.namaPenjual, " ");
} }
function KsaddComponent_option_196_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", data_r13.nomorRisalahLelang, " - ", data_r13.namaPenjual, " ");
} }
class KsaddComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.trans = {};
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.idpreview = this.route.snapshot.params['idpreview'];
        this.isAddMode = this.idperiode ? true : false;
        this.isPreview = this.idpreview ? true : false;
        this.isEditMode = this.id ? true : false;
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
        }, error => { });
    }
    savetransaksi() {
        if (confirm("Apakah anda sudah mengisi data dengan lengkap dan benar?")) {
            this.http.post("https://pelaporanpliiapi.azurewebsites.net/api//api/KertasSekuriti", this.generateBodyReq(this.bphForm.value), this.generateHeader()).subscribe(data => {
                console.log("post ressult ", data);
                this.toastr.info("Data Tersimpan");
                this.router.navigate(['/bphdetail/' + this.idperiode]);
            }, error => {
                this.toastr.error("Tidak dapat menyimpan Kertas Sekuriti, Periksa kembali isian Anda");
                console.log(error);
            });
        }
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
    onSelectRegister(id) {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/" + id, this.generateHeader()).subscribe((result) => {
            this.trans = result.data;
            console.log(this.trans);
        }, error => { });
    }
    generateBodyReq(formValue) {
        let id = this.id === "" ? (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])() : this.id;
        let bodyreq = {
            transaksiLelangId: formValue.transaksiLelangId,
            lot: parseInt(formValue.lot),
            letaktanahBangunanLong: formValue.letaktanahBangunanLong,
            letaktanahBangunanLat: formValue.letaktanahBangunanLat,
            statusHakAtasTanah: formValue.statusHakAtasTanah,
            luasTanah: parseInt(formValue.luasTanah),
            luasBangunan: parseInt(formValue.luasBangunan),
            njopnop: Number(formValue.njopnop.replace(/[^0-9.-]+/g, "")),
            pokokLelang: Number(this.trans.pokokLelang),
            nomorSSB: Number(formValue.nomorSSB),
            tanggalSSB: formValue.tanggalSSB,
            nomorSSP: Number(formValue.nomorSSP),
            tanggalSSP: formValue.tanggalSSP,
            tanggalPenyampaianPetikanRisalahRapat: formValue.tanggalPenyampaianPetikanRisalahRapat,
            keterangan: formValue.keterangan,
        };
        console.log(bodyreq);
        return bodyreq;
    }
}
KsaddComponent.ɵfac = function KsaddComponent_Factory(t) { return new (t || KsaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
KsaddComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KsaddComponent, selectors: [["app-ksadd"]], decls: 222, vars: 5, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-header", "p-0", "pt-1", "border-bottom-0"], ["id", "custom-tabs-three-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "custom-tabs-three-home-tab", "data-toggle", "pill", "href", "#custom-tabs-three-home", "role", "tab", "aria-controls", "custom-tabs-three-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "custom-tabs-three-profile-tab", "data-toggle", "pill", "href", "#custom-tabs-three-profile", "role", "tab", "aria-controls", "custom-tabs-three-profile", "aria-selected", "false", 1, "nav-link"], ["id", "custom-tabs-three-school-tab", "data-toggle", "pill", "href", "#custom-tabs-three-school", "role", "tab", "aria-controls", "custom-tabs-three-school", "aria-selected", "false", 1, "nav-link"], ["id", "custom-tabs-three-1-tab", "data-toggle", "pill", "href", "#custom-tabs-three-1", "role", "tab", "aria-controls", "custom-tabs-three-1", "aria-selected", "false", 1, "nav-link"], ["id", "custom-tabs-three-2-tab", "data-toggle", "pill", "href", "#custom-tabs-three-2", "role", "tab", "aria-controls", "custom-tabs-three-2", "aria-selected", "false", 1, "nav-link"], ["id", "custom-tabs-three-3-tab", "data-toggle", "pill", "href", "#custom-tabs-three-3", "role", "tab", "aria-controls", "custom-tabs-three-3", "aria-selected", "false", 1, "nav-link"], [1, "card-body"], ["id", "custom-tabs-three-tabContent", 1, "tab-content"], ["id", "custom-tabs-three-home", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-home-tab", 1, "tab-pane", "fade", "active", "show"], [1, "row"], [1, "form-group", "col-xl-6"], ["for", "exampleInputEmail1"], [1, "form-control"], ["value", "Pertama"], ["value", "Kedua"], ["value", "Ketiga"], ["value", "Keempat"], ["for", ""], ["type", "text", 1, "form-control"], ["id", "custom-tabs-three-profile", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-profile-tab", 1, "tab-pane", "fade"], ["id", "sifat", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", 1, "form-control"], ["id", "custom-tabs-three-school", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-school-tab", 1, "tab-pane", "fade"], ["id", "custom-tabs-three-1", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-1-tab", 1, "tab-pane", "fade"], ["id", "custom-tabs-three-2", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-2-tab", 1, "tab-pane", "fade"], ["id", "custom-tabs-three-3", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-3-tab", 1, "tab-pane", "fade"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [3, "value"]], template: function KsaddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form")(20, "div", 12)(21, "ul", 13)(22, "li", 14)(23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Informasi Kertas Sekuriti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 14)(26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Penambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 14)(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Penggunaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 14)(32, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Pengganti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 14)(35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Rusak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 14)(38, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Hilang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21)(41, "div", 22)(42, "div", 23)(43, "div", 24)(44, "div", 25)(45, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Triwulan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 27)(48, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Pertama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Kedua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Ketiga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Keempat ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25)(57, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Jumlah Awal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25)(61, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Jumlah Akhir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 34)(65, "div", 24)(66, "div", 25)(67, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Nomor Risalah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KsaddComponent_Template_select_change_69_listener($event) { return ctx.onSelectRegister($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "-Pilih-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, KsaddComponent_option_72_Template, 2, 3, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 25)(74, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24)(78, "div", 25)(79, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "No. Kertas Sekuriti Mulai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25)(83, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "No. Kertas Sekuriti Akhir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 24)(87, "div", 25)(88, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Tanggal Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25)(92, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Jumlah Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 38)(96, "div", 24)(97, "div", 25)(98, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Nomor Risalah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KsaddComponent_Template_select_change_100_listener($event) { return ctx.onSelectRegister($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "-Pilih-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, KsaddComponent_option_103_Template, 2, 3, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25)(105, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 24)(109, "div", 25)(110, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "No. Kertas Sekuriti Mulai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 25)(114, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "No. Kertas Sekuriti Akhir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 24)(118, "div", 25)(119, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Tanggal Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 25)(123, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Jumlah Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 39)(127, "div", 24)(128, "div", 25)(129, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Nomor Risalah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KsaddComponent_Template_select_change_131_listener($event) { return ctx.onSelectRegister($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "-Pilih-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, KsaddComponent_option_134_Template, 2, 3, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 25)(136, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 24)(140, "div", 25)(141, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "No. Kertas Sekuriti Mulai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 25)(145, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "No. Kertas Sekuriti Akhir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 24)(149, "div", 25)(150, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Tanggal Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 25)(154, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Jumlah Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 40)(158, "div", 24)(159, "div", 25)(160, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Nomor Risalah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KsaddComponent_Template_select_change_162_listener($event) { return ctx.onSelectRegister($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "-Pilih-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, KsaddComponent_option_165_Template, 2, 3, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 25)(167, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 24)(171, "div", 25)(172, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "No. Kertas Sekuriti Mulai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 25)(176, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "No. Kertas Sekuriti Akhir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 24)(180, "div", 25)(181, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Tanggal Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 25)(185, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Jumlah Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 41)(189, "div", 24)(190, "div", 25)(191, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Nomor Risalah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "select", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function KsaddComponent_Template_select_change_193_listener($event) { return ctx.onSelectRegister($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "-Pilih-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](196, KsaddComponent_option_196_Template, 2, 3, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 25)(198, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "Lot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 24)(202, "div", 25)(203, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "No. Kertas Sekuriti Mulai");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 25)(207, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "No. Kertas Sekuriti Akhir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 24)(211, "div", 25)(212, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Tanggal Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 25)(216, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Jumlah Mutasi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](218, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 42)(220, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KsaddComponent_Template_button_click_220_listener() { return ctx.savetransaksi(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "Simpan Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listTrans);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listTrans);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listTrans);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listTrans);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listTrans);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrc2FkZC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 971:
/*!******************************************************!*\
  !*** ./src/app/pages/ksdetail/ksdetail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KsdetailComponent": () => (/* binding */ KsdetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function KsdetailComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Data kosong silahkan tambah data kertas sekuriti");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function KsdetailComponent_ng_template_43_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td")(12, "a", 26)(13, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 28)(16, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Kirim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 28)(19, "app-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomerRegistrasi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomorRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
function KsdetailComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, KsdetailComponent_ng_template_43_tr_0_Template, 21, 17, "tr", 25);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listTrans);
} }
class KsdetailComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
            if (this.listTrans.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
KsdetailComponent.ɵfac = function KsdetailComponent_Factory(t) { return new (t || KsdetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
KsdetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KsdetailComponent, selectors: [["app-ksdetail"]], decls: 45, vars: 7, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "9", "align", "center"], [4, "ngFor", "ngForOf"], ["href", "/transaksiadd"], [1, "mb-1", 3, "block", "loading", "disabled", "icon"], ["href", "/ksadd"]], template: function KsdetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "a", 12)(19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Tambah Penggunaan Kertas Sekuriti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "No Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "No. Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, KsdetailComponent_div_42_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, KsdetailComponent_ng_template_43_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/ksadd/periode/", ctx.idperiode, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrc2RldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6218:
/*!********************************************************!*\
  !*** ./src/app/pages/kslanding/kslanding.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KslandingComponent": () => (/* binding */ KslandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class KslandingComponent {
    constructor() { }
    ngOnInit() {
    }
}
KslandingComponent.ɵfac = function KslandingComponent_Factory(t) { return new (t || KslandingComponent)(); };
KslandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KslandingComponent, selectors: [["app-kslanding"]], decls: 2, vars: 0, template: function KslandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kslanding works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrc2xhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2301:
/*!**************************************************!*\
  !*** ./src/app/pages/kslist/kslist.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KslistComponent": () => (/* binding */ KslistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function KslistComponent_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td")(14, "a", 21)(15, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.tahun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/ksdetail/", data_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
class KslistComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateHeader()).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
KslistComponent.ɵfac = function KslistComponent_Factory(t) { return new (t || KslistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
KslistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KslistComponent, selectors: [["app-kslist"]], decls: 44, vars: 1, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"]], template: function KslistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Penggunaan Kertas Sekuriti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Penggunaan Kertas Sekuriti ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "table", 19)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Periode ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Penambahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Penggunaan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Pengganti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Rusak");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Hilang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, KslistComponent_tr_43_Template, 17, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listJadwal);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrc2xpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2917:
/*!********************************************************!*\
  !*** ./src/app/pages/main-menu/main-menu.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuComponent": () => (/* binding */ MainMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MainMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) { return new (t || MainMenuComponent)(); };
MainMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainMenuComponent, selectors: [["app-main-menu"]], decls: 28, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]], template: function MainMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Main Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3895:
/*!****************************************************************!*\
  !*** ./src/app/pages/main-menu/sub-menu/sub-menu.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubMenuComponent": () => (/* binding */ SubMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SubMenuComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubMenuComponent.ɵfac = function SubMenuComponent_Factory(t) { return new (t || SubMenuComponent)(); };
SubMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubMenuComponent, selectors: [["app-sub-menu"]], decls: 28, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [1, "card-body"], [1, "card-footer"]], template: function SubMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sub Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Blank Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start creating your amazing application! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWItbWVudS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 1162:
/*!****************************************************!*\
  !*** ./src/app/pages/periode/periode.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeriodeComponent": () => (/* binding */ PeriodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _type_periode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/type/periode */ 7763);









class PeriodeComponent {
    constructor(toastr, route, router, periodeLaporan, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.periodeLaporan = periodeLaporan;
        this.http = http;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.isAddMode = !this.id;
        this.periodeForm = this.periodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
            periode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
        });
        this.listPeriode = JSON.parse(localStorage.getItem('periode'));
        if (!this.listPeriode) {
            this.listPeriode = [];
        }
    }
    getPeriode(tahun) {
        return JSON.parse(localStorage.getItem('periode'));
    }
    saveperiode() {
        this.periodeLaporan = this.periodeForm.value;
        //this.listPeriode.push(this.periodeLaporan)
        //console.log(this.listPeriode)
        //localStorage.setItem('periode', JSON.stringify(this.listPeriode))
        this.http.post("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateBodyReq(this.periodeLaporan), this.generateHeader()).subscribe(data => {
            console.log("post result ", data);
            this.toastr.info("Tambah Periode Berhasil");
            this.router.navigate(['/']);
        }, error => {
            this.toastr.error("Tidak dapat menambah periode");
            console.log(error);
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
    generateBodyReq(formValue) {
        let id = (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])();
        let bodyreq = {
            "id": id,
            "tahun": formValue.periode
        };
        console.log(bodyreq);
        return bodyreq;
    }
}
PeriodeComponent.ɵfac = function PeriodeComponent_Factory(t) { return new (t || PeriodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_type_periode__WEBPACK_IMPORTED_MODULE_0__.Periode), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
PeriodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PeriodeComponent, selectors: [["app-periode"]], decls: 47, vars: 1, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], ["type", "button", "data-widget", "collapse", "data-toggle", "tooltip", "title", "Collapse", 1, "btn", "btn-tool"], [1, "fa", "fa-minus"], ["type", "button", "data-widget", "remove", "data-toggle", "tooltip", "title", "Remove", 1, "btn", "btn-tool"], [1, "fa", "fa-times"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["formControlName", "periode", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], [1, "card-footer"]], template: function PeriodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Tambah Periode Pelaporan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Tambah Periode Pelaporan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Tambah Periode Laporan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 12)(20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function PeriodeComponent_Template_form_ngSubmit_24_listener() { return ctx.saveperiode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 18)(26, "div", 19)(27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Tahun Pelaporan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "select", 20)(30, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "2023");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "2024");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "2025");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "2026");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "2027");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "2028");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Tambah Periode");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.periodeForm);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJpb2RlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfileComponent {
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 234, vars: 0, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "row"], [1, "col-md-3"], [1, "card", "card-primary", "card-outline"], [1, "card-body", "box-profile"], [1, "text-center"], ["src", "assets/img/default-profile.png", "alt", "User profile picture", 1, "profile-user-img", "img-fluid", "img-circle"], [1, "profile-username", "text-center"], [1, "text-muted", "text-center"], [1, "list-group", "list-group-unbordered", "mb-3"], [1, "list-group-item"], [1, "float-right"], ["href", "#", 1, "btn", "btn-primary", "btn-block"], [1, "card", "card-primary"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "fas", "fa-book", "mr-1"], [1, "text-muted"], [1, "fas", "fa-map-marker-alt", "mr-1"], [1, "fas", "fa-pencil-alt", "mr-1"], [1, "tag", "tag-danger"], [1, "tag", "tag-success"], [1, "tag", "tag-info"], [1, "tag", "tag-warning"], [1, "tag", "tag-primary"], [1, "far", "fa-file-alt", "mr-1"], [1, "col-md-9"], [1, "card"], [1, "card-header", "p-2"], [1, "nav", "nav-pills"], [1, "nav-item"], ["href", "#activity", "data-toggle", "tab", 1, "nav-link", "active"], ["href", "#timeline", "data-toggle", "tab", 1, "nav-link"], ["href", "#settings", "data-toggle", "tab", 1, "nav-link"], [1, "tab-content"], ["id", "activity", 1, "active", "tab-pane"], [1, "post"], [1, "user-block"], ["src", "assets/img/default-profile.png", "alt", "user image", 1, "img-circle", "img-bordered-sm"], [1, "username"], ["href", "#", 1, "float-right", "btn-tool"], [1, "fas", "fa-times"], [1, "description"], ["href", "#", 1, "link-black", "text-sm", "mr-2"], [1, "fas", "fa-share", "mr-1"], ["href", "#", 1, "link-black", "text-sm"], [1, "far", "fa-thumbs-up", "mr-1"], [1, "far", "fa-comments", "mr-1"], ["type", "text", "placeholder", "Type a comment", 1, "form-control", "form-control-sm"], [1, "post", "clearfix"], ["src", "assets/img/default-profile.png", "alt", "User Image", 1, "img-circle", "img-bordered-sm"], [1, "row", "mb-3"], ["src", "assets/img/default-profile.png", "alt", "Photo", 1, "img-fluid"], ["src", "assets/img/default-profile.png", "alt", "Photo", 1, "img-fluid", "mb-3"], ["id", "timeline", 1, "tab-pane"], [1, "timeline", "timeline-inverse"], [1, "time-label"], [1, "bg-danger"], [1, "fas", "fa-envelope", "bg-primary"], [1, "timeline-item"], [1, "time"], [1, "far", "fa-clock"], [1, "timeline-header"], [1, "timeline-body"], [1, "timeline-footer"], ["href", "#", 1, "btn", "btn-primary", "btn-sm"], ["href", "#", 1, "btn", "btn-danger", "btn-sm"], [1, "fas", "fa-user", "bg-info"], [1, "timeline-header", "border-0"], [1, "fas", "fa-comments", "bg-warning"], ["href", "#", 1, "btn", "btn-warning", "btn-flat", "btn-sm"], [1, "bg-success"], [1, "fas", "fa-camera", "bg-purple"], ["src", "assets/img/default-profile.png", "alt", "..."], [1, "far", "fa-clock", "bg-gray"], ["id", "settings", 1, "tab-pane"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Nina Mcintire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Software Engineer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 17)(26, "li", 18)(27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1,322");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 18)(32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Following");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "543");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 18)(37, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "13,287");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20)(42, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Follow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21)(45, "div", 22)(46, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24)(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " B.S. in Computer Science from the University of Tennessee at Knoxville ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Malibu, California");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 26)(65, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "UI Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Coding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Javascript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "PHP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Node.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35)(82, "div", 36)(83, "div", 37)(84, "ul", 38)(85, "li", 39)(86, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "li", 39)(89, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li", 39)(92, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24)(95, "div", 43)(96, "div", 44)(97, "div", 45)(98, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 48)(101, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Jonathan Burke Jr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Shared publicly - 7:30 PM today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p")(110, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "span", 19)(117, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Comments (5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 58)(122, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 48)(125, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Sarah Ross");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Sent you a message - 3 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 45)(134, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span", 48)(137, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Adam Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Posted 5 photos - 5 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 60)(144, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 3)(147, "div", 9)(148, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 62)(150, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "img", 62)(153, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "p")(155, "a", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Like");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 19)(162, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Comments (5) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 63)(167, "div", 64)(168, "div", 65)(169, "span", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " 10 Feb. 2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 68)(174, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " 12:05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "h3", 71)(178, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Support Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " sent you an email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 73)(184, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 68)(191, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " 5 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "h3", 77)(195, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Sarah Young");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " accepted your friend request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 68)(201, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " 27 mins ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3", 71)(205, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Jay White");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " commented on your post ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, " Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 73)(211, "a", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "View comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 65)(214, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, " 3 Jan. 2014 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 68)(219, "span", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " 2 days ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "h3", 71)(223, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Mina Lee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, " uploaded new photos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 82)(228, "img", 82)(229, "img", 82)(230, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4518:
/*!**************************************************************!*\
  !*** ./src/app/pages/transaksiadd/transaksiadd.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksiaddComponent": () => (/* binding */ TransaksiaddComponent)
/* harmony export */ });
/* harmony import */ var _Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_alamat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/alamat.service */ 7657);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);












function TransaksiaddComponent_li_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 15)(1, "a", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Data Pembeli");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function TransaksiaddComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r13.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", data_r13.nomerRegistrasi, " - ", data_r13.namaPenjual, " ");
  }
}

function TransaksiaddComponent_div_136_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Uang Jaminan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function TransaksiaddComponent_div_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 87)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nama Bank Penyedia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function TransaksiaddComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Pokok Lelang ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function TransaksiaddComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Bea Lelang Penjual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23)(6, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bea Lelang Pembeli ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function TransaksiaddComponent_div_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nomor register pembatalan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23)(6, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Bea Lelang Batal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function TransaksiaddComponent_div_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Alasan Pembatalan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function TransaksiaddComponent_option_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r16 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r8.provinsi[i_r16].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.provinsi[i_r16].name, " ");
  }
}

function TransaksiaddComponent_option_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r18 = ctx.index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r9.kab[i_r18].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.kab[i_r18].name, " ");
  }
}

function TransaksiaddComponent_option_196_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r10.kec[i_r20].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.kec[i_r20].name, " ");
  }
}

function TransaksiaddComponent_option_201_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r22 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r11.kel[i_r22].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.kel[i_r22].name, " ");
  }
}

function TransaksiaddComponent_div_220_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Nama Pembeli");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function TransaksiaddComponent_div_220_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Nomor Identitas Pembeli");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23)(6, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Alamat Pembeli");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function TransaksiaddComponent_div_220_div_4_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r32 = ctx.index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r29.provinsi1[i_r32].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r29.provinsi[i_r32].name, " ");
  }
}

function TransaksiaddComponent_div_220_div_4_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r34 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r30.kab1[i_r34].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r30.kab[i_r34].name, " ");
  }
}

function TransaksiaddComponent_div_220_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Provinsi");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_div_220_div_4_Template_select_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r35.selectProvinsi($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TransaksiaddComponent_div_220_div_4_option_5_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23)(7, "label", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Kab/Kota");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "select", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_div_220_div_4_Template_select_change_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r37.selectKab($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TransaksiaddComponent_div_220_div_4_option_10_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.provinsi1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r25.kab1);
  }
}

function TransaksiaddComponent_div_220_div_5_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r41 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r38.kec[i_r41].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r38.kec[i_r41].name, " ");
  }
}

function TransaksiaddComponent_div_220_div_5_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r43 = ctx.index;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r39.kel[i_r43].id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r39.kel[i_r43].name, " ");
  }
}

function TransaksiaddComponent_div_220_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Kecamatan");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_div_220_div_5_Template_select_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.selectKec($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TransaksiaddComponent_div_220_div_5_option_5_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 23)(7, "label", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Kelurahan");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TransaksiaddComponent_div_220_div_5_option_10_Template, 2, 2, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.kec1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r26.kel1);
  }
}

function TransaksiaddComponent_div_220_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "RT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23)(6, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "RW");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}

function TransaksiaddComponent_div_220_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23)(1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "NPWP Pembeli");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function TransaksiaddComponent_div_220_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "div", 23)(2, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Kode Pos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TransaksiaddComponent_div_220_div_7_div_5_Template, 4, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r28.isBatal);
  }
}

function TransaksiaddComponent_div_220_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 96)(1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TransaksiaddComponent_div_220_div_2_Template, 4, 0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TransaksiaddComponent_div_220_div_3_Template, 9, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TransaksiaddComponent_div_220_div_4_Template, 11, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TransaksiaddComponent_div_220_div_5_Template, 11, 2, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TransaksiaddComponent_div_220_div_6_Template, 9, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TransaksiaddComponent_div_220_div_7_Template, 6, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.isBatal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.isBatal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.isBatal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.isBatal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.isBatal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.isBatal);
  }
}

class TransaksiaddComponent {
  constructor(toastr, route, router, alamatService, http) {
    this.toastr = toastr;
    this.route = route;
    this.router = router;
    this.alamatService = alamatService;
    this.http = http;
    this.jadwal = {};
    this.isBatal = false;
    this.provinsi = [];
    this.kab = [];
    this.kec = [];
    this.kel = [];
    this.provinsi1 = [];
    this.kab1 = [];
    this.kec1 = [];
    this.kel1 = [];
    this.isUangJaminan = false;
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.idperiode = this.route.snapshot.params['idperiode'];
    this.idpreview = this.route.snapshot.params['idpreview'];
    this.isAddMode = this.idperiode ? true : false;
    this.isPreview = this.idpreview ? true : false;
    this.isEditMode = this.id ? true : false;
    this.alamatService.getAllProvinsi().subscribe(r => {
      this.provinsi = r;
      this.provinsi1 = r;
    });
    this.transaksiForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormGroup({
      jadwalLelangId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nomorRisalahLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tanggalRisalahLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nikPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      alamatPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      rtPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      rwPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      provinsiPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kabupatenKotaPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kecamatanPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kelurahanPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kodeposPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      npwpPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      namaPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nikPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      alamatPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      rtPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      rwPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      provinsiPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kabupatenKotaPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kecamatanPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kelurahanPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      kodeposPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      npwpPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      jumlahPesertaLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      sifatBarang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tipeBarang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      uraianBarang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      jaminanLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      jaminanLelangBerupaUang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      jaminanLelangBankGaransi: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nilaiLimit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      pokokLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      beaLelangPenjual: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      beaLelangPembeli: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      tanggalPenyerahanKutipanRisalahLelang: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      imbalanJasa: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      keterangan: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      nomorRegisterPembatalan: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      beaLelangBatal: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      alasanPembatalan: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.UntypedFormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required)
    });
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/AllPerPeriode/" + this.idperiode, this.generateHeader()).subscribe(result => {
      this.listJadwal = result.data;
      console.log(result);
    }, error => {});

    if (this.isEditMode || this.isPreview) {
      const idperiode = this.isEditMode ? this.id : this.idpreview;
      this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/" + idperiode, this.generateHeader()).subscribe(result => {
        this.jadwal = result.data;
        console.log(result);
        this.idperiode = this.jadwal.periodeLaporanId;
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
          periodeLaporanId: this.idperiode,
          jadwalLelangId: this.jadwal.jadwalLelangId,
          status: this.jadwal.status,
          nomorRisalahLelang: isNaN(this.jadwal.nomorRisalahLelang) ? 0 : this.jadwal.nomorRisalahLelang,
          tanggalRisalahLelang: this.jadwal.tanggalRisalahLelang,
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
          jumlahPesertaLelang: isNaN(this.jadwal.jumlahPesertaLelang) ? 0 : this.jadwal.jumlahPesertaLelang,
          sifatBarang: this.jadwal.sifatBarang,
          tipeBarang: this.jadwal.tipeBarang,
          uraianBarang: this.jadwal.uraianBarang,
          jaminanLelang: this.jadwal.jaminanLelang,
          jaminanLelangBerupaUang: isNaN(this.jadwal.jaminanLelangBerupaUang) ? 0 : this.jadwal.jaminanLelangBerupaUang,
          jaminanLelangBankGaransi: this.jadwal.jaminanLelangBankGaransi,
          nilaiLimit: isNaN(this.jadwal.nilaiLimit) ? 0 : this.jadwal.nilaiLimit,
          pokokLelang: isNaN(this.jadwal.pokokLelang) ? 0 : this.jadwal.pokokLelang,
          beaLelangPenjual: isNaN(this.jadwal.beaLelangPenjual) ? 0 : this.jadwal.beaLelangPenjual,
          beaLelangPembeli: isNaN(this.jadwal.beaLelangPembeli) ? 0 : this.jadwal.beaLelangPembeli,
          tanggalPenyerahanKutipanRisalahLelang: this.jadwal.tanggalPenyerahanKutipanRisalahLelang,
          imbalanJasa: isNaN(this.jadwal.imbalanJasa) ? 0 : this.jadwal.imbalanJasa,
          keterangan: this.jadwal.keterangan,
          nomorRegisterPembatalan: isNaN(this.jadwal.nomorRegisterPembatalan) ? 0 : this.jadwal.nomorRegisterPembatalan,
          beaLelangBatal: this.jadwal.beaLelangBatal,
          alasanPembatalan: this.jadwal.alasanPembatalan
        });
      }, error => {});

      if (this.isPreview) {
        this.transaksiForm.disable();
      }
    }
  }

  selectProvinsi(id) {
    var _this = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("provinsi:", id);

      _this.alamatService.selectProvinsi(id).subscribe(r => {
        _this.kab = r;
        _this.kab1 = r;
      });
    })();
  }

  selectKab(id) {
    var _this2 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("kab:", id);

      _this2.alamatService.selectKab(id).subscribe(r => {
        _this2.kec = r;
        _this2.kec1 = r;
      });
    })();
  }

  selectKec(id) {
    var _this3 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("kec:", id);

      _this3.alamatService.selectKec(id).subscribe(r => {
        _this3.kel = r;
        _this3.kel1 = r;
      });
    })();
  }

  onBatal(value) {
    this.isBatal = value == "Batal" ? true : false;
  }

  onJaminan(value) {
    this.isUangJaminan = value == "Uang Jaminan" ? true : false;
  }

  onSelectRegister(id) {
    this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/" + id, this.generateHeader()).subscribe(result => {
      this.jadwal = result.data;
      console.log(this.jadwal);
    }, error => {});
  }

  generateHeader() {
    let token = localStorage.getItem('token').replace('"', '');
    console.log(token);
    let options = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        Authorization: "Bearer " + token
      })
    };
    console.log(options);
    return options;
  }

  savetransaksi() {
    if (confirm("Apakah anda sudah mengisi data dengan lengkap dan benar?")) {
      this.http.post("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateBodyReq(this.transaksiForm.value), this.generateHeader()).subscribe(data => {
        console.log("post ressult ", data);
        this.toastr.info("Data Tersimpan");
        this.router.navigate(['/transaksidetail/' + this.idperiode]);
      }, error => {
        this.toastr.error("Tidak dapat menyimpan transaksi, Periksa kembali isian Anda");
        console.log(error);
      });
    }
  }

  generateBodyReq(formValue) {
    let id = this.id === "" ? (0,uuid__WEBPACK_IMPORTED_MODULE_5__["default"])() : this.id;
    let bodyreq = {
      //id: this.id,
      periodeLaporanId: this.idperiode,
      jadwalLelangId: formValue.jadwalLelangId,
      status: formValue.status,
      nomorRisalahLelang: isNaN(formValue.nomorRisalahLelang) ? 0 : formValue.nomorRisalahLelang,
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
      jumlahPesertaLelang: isNaN(formValue.jumlahPesertaLelang) ? 0 : formValue.jumlahPesertaLelang,
      sifatBarang: formValue.sifatBarang,
      tipeBarang: formValue.tipeBarang,
      uraianBarang: formValue.uraianBarang,
      jaminanLelang: formValue.jaminanLelang,
      jaminanLelangBerupaUang: isNaN(formValue.jaminanLelangBerupaUang) ? 0 : formValue.jaminanLelangBerupaUang,
      jaminanLelangBankGaransi: formValue.jaminanLelangBankGaransi,
      nilaiLimit: isNaN(formValue.nilaiLimit) ? 0 : formValue.nilaiLimit,
      pokokLelang: isNaN(formValue.pokokLelang) ? 0 : formValue.pokokLelang,
      beaLelangPenjual: isNaN(formValue.beaLelangPenjual) ? 0 : formValue.beaLelangPenjual,
      beaLelangPembeli: isNaN(formValue.beaLelangPembeli) ? 0 : formValue.beaLelangPembeli,
      tanggalPenyerahanKutipanRisalahLelang: formValue.tanggalPenyerahanKutipanRisalahLelang,
      imbalanJasa: isNaN(formValue.imbalanJasa) ? 0 : formValue.imbalanJasa,
      keterangan: formValue.keterangan,
      nomorRegisterPembatalan: isNaN(formValue.nomorRegisterPembatalan) ? 0 : formValue.nomorRegisterPembatalan,
      beaLelangBatal: formValue.beaLelangBatal,
      alasanPembatalan: formValue.alasanPembatalan
    };
    console.log(formValue);
    return bodyreq;
  }

}

TransaksiaddComponent.ɵfac = function TransaksiaddComponent_Factory(t) {
  return new (t || TransaksiaddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_alamat_service__WEBPACK_IMPORTED_MODULE_1__.AlamatService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};

TransaksiaddComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: TransaksiaddComponent,
  selectors: [["app-transaksiadd"]],
  decls: 224,
  vars: 20,
  consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "formGroup"], [1, "card-header", "p-0", "pt-1", "border-bottom-0"], ["id", "custom-tabs-three-tab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "custom-tabs-three-home-tab", "data-toggle", "pill", "href", "#custom-tabs-three-home", "role", "tab", "aria-controls", "custom-tabs-three-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "custom-tabs-three-profile-tab", "data-toggle", "pill", "href", "#custom-tabs-three-profile", "role", "tab", "aria-controls", "custom-tabs-three-profile", "aria-selected", "false", 1, "nav-link"], ["class", "nav-item", 4, "ngIf"], [1, "card-body"], ["id", "custom-tabs-three-tabContent", 1, "tab-content"], ["id", "custom-tabs-three-home", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-home-tab", 1, "tab-pane", "fade", "active", "show"], [1, "row"], [1, "form-group", "col-xl-6"], ["for", "exampleInputEmail1"], ["formControlName", "status", 1, "form-control", 3, "change"], ["value", "TAP"], ["value", "Laku"], ["value", "Ditahan"], ["value", "Wan Prestasi"], ["value", "Batal"], ["id", "sifat", "formControlName", "jadwalLelangId", 1, "form-control", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "onClick", "showDatePicker(this);", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "formControlName", "nomorRisalahLelang", 1, "form-control"], ["type", "text", "formControlName", "tanggalRisalahLelang", "onClick", "showDatePicker(this);", 1, "form-control"], ["type", "text", "id", "namapenjual", "onClick", "showDatePicker(this);", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "id", "namapenjual", "disabled", "", 1, "form-control", 3, "value"], ["type", "text", "formControlName", "jumlahPesertaLelang", "placeholder", "Masukkan Jumlah Peserta Lelang", 1, "form-control"], ["formControlName", "sifatBarang", 1, "form-control"], ["value", ""], ["value", "bergerak"], ["value", "tidak Bergerak"], ["formControlName", "tipeBarang", 1, "form-control"], ["value", "Tanah"], ["value", "Tanah dan Bangunan"], ["value", "Apartemen/ Rusun"], ["value", "Kapal"], ["value", "Alat Berat"], ["value", "Kendaraan Roda 4"], ["value", "Kendaraan Roda 2"], ["value", "Barang Inventari"], ["value", "Benda Seni"], ["type", "text", "formControlName", "uraianBarang", 1, "form-control"], ["formControlName", "jaminanLelang", 1, "form-control", 3, "change"], ["value", "Uang Jaminan"], ["value", "Bank Garansi Jaminan"], ["class", "form-group col-xl-3 ", 4, "ngIf"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "nilaiLimit", 1, "form-control"], ["class", "form-group col-xl-6 ", 4, "ngIf"], ["class", "row", 4, "ngIf"], ["type", "text", "id", "tglsuratttp", "onClick", "showDatePicker(this);", "formControlName", "tanggalPenyerahanKutipanRisalahLelang", 1, "form-control"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "data-type", "currency", "formControlName", "imbalanJasa", 1, "form-control"], ["type", "text", "id", "tglsuratttp", "formControlName", "keterangan", 1, "form-control"], ["id", "custom-tabs-three-profile", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-profile-tab", 1, "tab-pane", "fade"], ["type", "text", "formControlName", "nikPenjual", "placeholder", "Masukkan identitas penjual lelang", 1, "form-control"], ["type", "text", "formControlName", "alamatPenjual", "placeholder", "Masukkan alamat penjual lelang", 1, "form-control"], ["for", "provinsi"], ["id", "provinsi", "formControlName", "provinsiPenjual", 1, "form-control", 3, "change"], ["for", "kab"], ["id", "kab", "formControlName", "kabupatenKotaPenjual", 1, "form-control", 3, "change"], ["for", "kecamatan"], ["formControlName", "kecamatanPenjual", "id", "kec", 1, "form-control", 3, "change"], ["for", "kelurahan"], ["formControlName", "kelurahanPenjual", "id", "kel", 1, "form-control"], ["for", "rt"], ["type", "text", "formControlName", "rtPenjual", "id", "rt", "placeholder", "", 1, "form-control"], ["for", "rw"], ["type", "text", "formControlName", "rwPenjual", "id", "rw", "placeholder", "RW", 1, "form-control"], ["for", "kodepos"], ["type", "text", "formControlName", "kodeposPenjual", "id", "kodepos", "placeholder", "Masukkan kode pos", 1, "form-control"], ["type", "text", "formControlName", "npwpPenjual", "placeholder", "Masukkan NPWP Penjual", 1, "form-control"], ["class", "tab-pane fade", "id", "custom-tabs-three-school", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-school-tab", 4, "ngIf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "custom-tabs-three-school-tab", "data-toggle", "pill", "href", "#custom-tabs-three-school", "role", "tab", "aria-controls", "custom-tabs-three-school", "aria-selected", "false", 1, "nav-link"], [3, "value"], [1, "form-group", "col-xl-3"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "jaminanLelangBerupaUang", 1, "form-control"], ["type", "text", "formControlName", "jaminanLelangBerupaUang", 1, "form-control"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "pokokLelang", 1, "form-control"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "beaLelangPenjual", 1, "form-control"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "beaLelangPembeli", 1, "form-control"], ["type", "text", "formControlName", "nomorRegisterPembatalan", 1, "form-control"], ["type", "text", "pattern", "^\\$\\d{1,3}(,\\d{3})*(\\.\\d+)?$", "value", "", "data-type", "currency", "formControlName", "beaLelangBatal", 1, "form-control"], ["type", "text", "value", "", "formControlName", "alasanPembatalan", 1, "form-control"], ["id", "custom-tabs-three-school", "role", "tabpanel", "aria-labelledby", "custom-tabs-three-school-tab", 1, "tab-pane", "fade"], ["type", "text", "formControlName", "namaPembeli", "placeholder", "Masukkan Nama Pembeli", 1, "form-control"], ["type", "text", "formControlName", "nikPembeli", "placeholder", "Masukkan Nomor Identitas Pembeli", 1, "form-control"], ["type", "text", "formControlName", "alamatPembeli", "placeholder", "Masukkan Alamat Pembeli", 1, "form-control"], ["id", "provinsi", "formControlName", "provinsiPembeli", 1, "form-control", 3, "change"], ["id", "kab", "formControlName", "kabupatenKotaPembeli", 1, "form-control", 3, "change"], ["formControlName", "kecamatanPembeli", "id", "kec1", 1, "form-control", 3, "change"], ["formControlName", "kelurahanPembeli", "id", "kel1", 1, "form-control"], ["type", "text", "formControlName", "rtPembeli", "id", "rt", "placeholder", "", 1, "form-control"], ["type", "text", "formControlName", "rwPembeli", "id", "rw", "placeholder", "RW", 1, "form-control"], ["type", "text", "formControlName", "kodeposPembeli", "id", "kodepos", "placeholder", "Masukkan kode pos", 1, "form-control"], ["type", "text", "formControlName", "npwpPembeli", "placeholder", "Masukkan NPWP Penjual", 1, "form-control"]],
  template: function TransaksiaddComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tambah Transaksi Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Transaksi Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "h3", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Transaksi Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "form", 12)(20, "div", 13)(21, "ul", 14)(22, "li", 15)(23, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Informasi Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 15)(26, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Data Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, TransaksiaddComponent_li_28_Template, 3, 0, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 19)(30, "div", 20)(31, "div", 21)(32, "div", 22)(33, "div", 23)(34, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_Template_select_change_36_listener($event) {
        return ctx.onBatal($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "TAP");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Laku");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Ditahan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Wan Prestasi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "option", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Batal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 23)(48, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Nomor Register ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "select", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_Template_select_change_50_listener($event) {
        return ctx.onSelectRegister($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "-Pilih-");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, TransaksiaddComponent_option_53_Template, 2, 3, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 22)(55, "div", 23)(56, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Tanggal Register Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 23)(60, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Nomor Risalah Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 22)(64, "div", 23)(65, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "Tanggal Risalah Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 23)(69, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Tanggal Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "input", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 22)(73, "div", 23)(74, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Tempat Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 23)(78, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "Jumlah Peserta Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 22)(82, "div", 23)(83, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Sifat Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 23)(87, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Sifat Barang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "select", 39)(90, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "- Pilih -");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "option", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Bergerak");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "option", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Tidak Bergerak");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 22)(97, "div", 23)(98, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Tipe Barang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "select", 43)(101, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "- Pilih -");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "option", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Tanah");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "option", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Tanah dan Bangunan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "option", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Apartemen/ Rusun");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "option", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Kapal");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "option", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](112, "Alat Berat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "option", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Kendaraan Roda 4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "option", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "Kendaraan Roda 2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "option", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](118, "Barang Inventaris");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "option", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Benda Seni");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "div", 23)(122, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Uraian Barang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](124, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 22)(126, "div", 23)(127, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](128, "Jaminan Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "select", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_Template_select_change_129_listener($event) {
        return ctx.onJaminan($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "option", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "- Pilih -");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "option", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Uang Jaminan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "option", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Bank Garansi ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](136, TransaksiaddComponent_div_136_Template, 4, 0, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](137, TransaksiaddComponent_div_137_Template, 4, 0, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 22)(139, "div", 23)(140, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](141, "Nilai Limit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "input", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](143, TransaksiaddComponent_div_143_Template, 4, 0, "div", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](144, TransaksiaddComponent_div_144_Template, 9, 0, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 22)(146, "div", 23)(147, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](148, "Tanggal Penyerahan Kutipan Risalah Lelang ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "input", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "div", 23)(151, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](152, "Imbalan Jasa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](153, "input", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, TransaksiaddComponent_div_154_Template, 9, 0, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](155, TransaksiaddComponent_div_155_Template, 5, 0, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 22)(157, "div", 23)(158, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Keterangan ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](160, "input", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "div", 64)(162, "div", 22)(163, "div", 23)(164, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](165, "Nama Penjual Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 23)(168, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Nomor Identitas Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "input", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 22)(172, "div", 23)(173, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Kategori Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "div", 23)(177, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Alamat Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 22)(181, "div", 23)(182, "label", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](183, "Provinsi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "select", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_Template_select_change_184_listener($event) {
        return ctx.selectProvinsi($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](185, TransaksiaddComponent_option_185_Template, 2, 2, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 23)(187, "label", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Kab/Kota");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "select", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_Template_select_change_189_listener($event) {
        return ctx.selectKab($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](190, TransaksiaddComponent_option_190_Template, 2, 2, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 22)(192, "div", 23)(193, "label", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Kecamatan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "select", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function TransaksiaddComponent_Template_select_change_195_listener($event) {
        return ctx.selectKec($event.target.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](196, TransaksiaddComponent_option_196_Template, 2, 2, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 23)(198, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](199, "Kelurahan");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "select", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](201, TransaksiaddComponent_option_201_Template, 2, 2, "option", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 22)(203, "div", 23)(204, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "RT");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "input", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 23)(208, "label", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](209, "RW");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](210, "input", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 22)(212, "div", 23)(213, "label", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](214, "Kode Pos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](215, "input", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 23)(217, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](218, "NPWP Penjual");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](219, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](220, TransaksiaddComponent_div_220_Template, 8, 6, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](221, "div", 83)(222, "button", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TransaksiaddComponent_Template_button_click_222_listener() {
        return ctx.savetransaksi();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](223, "Simpan Transaksi Lelang");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.transaksiForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isBatal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.listJadwal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jadwal.tanggalLelang ? ctx.jadwal.tanggalLelang : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jadwal.tanggalLelang ? ctx.jadwal.tanggalLelang : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jadwal.tempatLelang ? ctx.jadwal.tempatLelang : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jadwal.sifatLelang ? ctx.jadwal.sifatLelang : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isUangJaminan);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isUangJaminan);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isBatal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isBatal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isBatal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isBatal);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jadwal.namaPenjual ? ctx.jadwal.namaPenjual : "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.jadwal.klasifikasiPenjual);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.provinsi);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kab);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kec);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.kel);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isBatal);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Frc2lhZGQuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 9271:
/*!********************************************************************!*\
  !*** ./src/app/pages/transaksidetail/transaksidetail.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksidetailComponent": () => (/* binding */ TransaksidetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function TransaksidetailComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Data Transaksi kosong silahkan tambah transaksi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function TransaksidetailComponent_ng_template_53_tr_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td")(20, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransaksidetailComponent_ng_template_53_tr_0_Template_a_click_23_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const data_r4 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.onKirim(data_r4.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Kirim ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.noRegisterLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomorRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.namaPenjual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalPenyerahanKutipanRisalahLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/transaksiadd/", data_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/transaksiadd/preview/", data_r4.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TransaksidetailComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TransaksidetailComponent_ng_template_53_tr_0_Template, 29, 11, "tr", 25);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listTrans);
} }
class TransaksidetailComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang", this.generateHeader()).subscribe((result) => {
            this.listTrans = result.data;
            console.log(result);
            if (this.listTrans.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    onKirim(idtrans) {
        if (confirm("Apakah anda yakin ingin mengirim data ke PPPK?")) {
            console.log(idtrans);
            this.http.put("https://pelaporanpliiapi.azurewebsites.net/api/TransaksiLelang/Kirim?id=" + idtrans, this.generateHeader()).subscribe(data => {
                console.log("post ressult ", data);
                this.toastr.info("Jadwal Terkirim ke P2PK");
                this.router.navigate(['/jadwaldetail/' + this.idperiode]);
            }, error => {
                this.toastr.error("Tidak dapat mengirim data, Periksa kembali data Anda");
                console.log(error);
            });
        }
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
TransaksidetailComponent.ɵfac = function TransaksidetailComponent_Factory(t) { return new (t || TransaksidetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TransaksidetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransaksidetailComponent, selectors: [["app-transaksidetail"]], decls: 55, vars: 7, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "9", "align", "center"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-s", 3, "href"], [1, "fas", "fa-edit"], [1, "btn", "btn-s", 3, "click"], [1, "fas", "fa-envelope"], [1, "fas", "fa-inbox"]], template: function TransaksidetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Transaksi Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Transaksi Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "a", 12)(19, "app-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Tambah Transaksi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 17)(25, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 20)(28, "table", 21)(29, "thead")(30, "tr")(31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "No Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Tgl. Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "No. Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Tanggal Risalah");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Penjual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tgl. Surat Penetapan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Tgl. Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, TransaksidetailComponent_div_52_Template, 4, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, TransaksidetailComponent_ng_template_53_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/transaksiadd/periode/", ctx.idperiode, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Frc2lkZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3805:
/*!**********************************************************************!*\
  !*** ./src/app/pages/transaksilanding/transaksilanding.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksilandingComponent": () => (/* binding */ TransaksilandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function TransaksilandingComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "tr")(2, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Jadwal kosong silahkan tambah jadwal di menu Jadwal Lelang");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} }
function TransaksilandingComponent_ng_template_49_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "a", 24)(19, "app-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Detail Transaksi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomerRegistrasi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.namaPenjual);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.sifatLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tempatLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.nomorSuratPenetapanJadwalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r4.tanggalSuratPenetapanJadwalLelang);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/transaksidetail/", ctx_r3.idperiode, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
function TransaksilandingComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TransaksilandingComponent_ng_template_49_tr_0_Template, 21, 13, "tr", 23);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.listJadwal);
} }
class TransaksilandingComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
        this.isempty = true;
    }
    ngOnInit() {
        this.idperiode = this.route.snapshot.params['idperiode'];
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/JadwalLelang/AllPerPeriode/" + this.idperiode, this.generateHeader()).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
            if (this.listJadwal.length > 0) {
                this.isempty = false;
            }
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        console.log(token);
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        console.log(options);
        return options;
    }
}
TransaksilandingComponent.ɵfac = function TransaksilandingComponent_Factory(t) { return new (t || TransaksilandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TransaksilandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransaksilandingComponent, selectors: [["app-transaksilanding"]], decls: 51, vars: 2, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngIf", "ngIfElse"], ["other_content", ""], ["colspan", "7", "align", "center"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "mb-1", 3, "block", "loading", "disabled", "icon"]], template: function TransaksilandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Transaksi Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Transaksi Lelang Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10)(17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Jadwal Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12)(20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 18)(26, "table", 19)(27, "thead")(28, "tr")(29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "No. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "No Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Rencana Tanggal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Penjual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Sifat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Tempat");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "No. Surat Penetapan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Tgl. Surat Penetapan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TransaksilandingComponent_div_48_Template, 4, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, TransaksilandingComponent_ng_template_49_Template, 1, 1, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isempty)("ngIfElse", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Frc2lsYW5kaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8680:
/*!****************************************************************!*\
  !*** ./src/app/pages/transaksilist/transaksilist.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransaksilistComponent": () => (/* binding */ TransaksilistComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/button/button.component */ 1354);







function TransaksilistComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td")(18, "a", 21)(19, "app-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Detail ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r1.tahun);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "/transaksi/", data_r1.id, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("block", true)("loading", false)("disabled", false)("icon", "blank");
} }
class TransaksilistComponent {
    constructor(toastr, route, router, http) {
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.http = http;
    }
    ngOnInit() {
        this.http.get("https://pelaporanpliiapi.azurewebsites.net/api/PeriodePelaporan", this.generateHeader()).subscribe((result) => {
            this.listJadwal = result.data;
            console.log(result);
        }, error => {
        });
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let options = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({ Authorization: "Bearer " + token }) };
        return options;
    }
}
TransaksilistComponent.ɵfac = function TransaksilistComponent_Factory(t) { return new (t || TransaksilistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TransaksilistComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TransaksilistComponent, selectors: [["app-transaksilist"]], decls: 48, vars: 1, consts: [[1, "content-header"], [1, "container-fluid"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "breadcrumb", "float-sm-right"], [1, "breadcrumb-item"], ["href", "#"], [1, "breadcrumb-item", "active"], [1, "content"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-tools"], [1, "input-group", "input-group-sm", 2, "width", "150px"], ["type", "text", "name", "table_search", "placeholder", "Cari", 1, "form-control", "float-right"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-default"], [1, "fas", "fa-search"], [1, "card-body", "table-responsive", "p-0"], [1, "table", "table-hover", "text-nowrap"], [4, "ngFor", "ngForOf"], [3, "href"], [1, "mb-2", 3, "block", "loading", "disabled", "icon"]], template: function TransaksilistComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Transaksi Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3)(7, "ol", 4)(8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Transaksi Lelang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "section", 8)(14, "div", 1)(15, "div", 9)(16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 15)(22, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18)(25, "table", 19)(26, "thead")(27, "tr")(28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Tahun ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Jumlah Lelang");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Laporan Transaksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Lisan");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Tertulis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Open");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Aksi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TransaksilistComponent_tr_47_Template, 21, 6, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listJadwal);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2Frc2lsaXN0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 7657:
/*!********************************************!*\
  !*** ./src/app/services/alamat.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlamatService": () => (/* binding */ AlamatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);



class AlamatService {
    constructor(http) {
        this.http = http;
    }
    getAllProvinsi() {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.http.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json").subscribe((result) => {
            let d = result;
            subject.next(d);
        }, error => { });
        return subject.asObservable();
    }
    selectProvinsi(id) {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.http.get("http://www.emsifa.com/api-wilayah-indonesia/api/regencies/" + id + ".json").subscribe((result) => {
            let d = result;
            subject.next(d);
        }, error => {
        });
        return subject.asObservable();
    }
    selectKab(id) {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.http.get("http://www.emsifa.com/api-wilayah-indonesia/api/districts/" + id + ".json").subscribe((result) => {
            let d = result;
            subject.next(d);
        }, error => {
        });
        return subject.asObservable();
    }
    selectKec(id) {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.http.get("http://www.emsifa.com/api-wilayah-indonesia/api/villages/" + id + ".json").subscribe((result) => {
            let d = result;
            subject.next(d);
        }, error => {
        });
        return subject.asObservable();
    }
}
AlamatService.ɵfac = function AlamatService_Factory(t) { return new (t || AlamatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AlamatService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlamatService, factory: AlamatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/constants */ 1581);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ 9168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8798);







class AuthService {
  constructor(router, toastr, http) {
    this.router = router;
    this.toastr = toastr;
    this.http = http;
    this.user = null;
  }

  loginByAuth({
    email,
    password
  }) {
    var _this = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let bodyreq = {
          "emailAddress": email,
          "password": password
        }; //const token = await Gatekeeper.loginByAuth(email, password);
        //localStorage.setItem('token', token);

        console.log({
          email,
          password
        });

        _this.http.post(_config_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.API_ENDPOINT + _config_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.AUTH_LOGIN_PEMOHON, bodyreq).subscribe(result => {
          let d = result.data;
          localStorage.setItem('token', JSON.stringify(d).replace('"', '').replace('"', ''));
          console.log("token 1: ", localStorage.getItem('token'));
          let jwt = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(localStorage.getItem('token'));
          _this.user = jwt;
          console.log("jwt : ", jwt);

          _this.toastr.info("berhasil");

          if (_this.getRole() === "P2PK") {
            _this.router.navigate(['/dash-bo']);
          } else {
            _this.router.navigate(['/']);
          }
        }, error => {
          _this.toastr.error(error.error.message);

          console.log(error);
          /*
          let errors = error.error.responseException.exceptionMessage.errors
          console.log(errors);
          for (let key in errors) {
          let value = errors[key];
          console.log(value);
          this.toastr.error(value);
          // Use `key` and `value`
          }*/

          _this.router.navigate(['/login']);
        }); //this.router.navigate(['/']);

      } catch (error) {
        _this.toastr.error(error.message);
      }
    })();
  }

  registerByAuth({
    emailAddress,
    password,
    namaLengkapTanpaGelar,
    nomorAnggotaAsosiasi,
    role
  }) {
    var _this2 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // { emailAddress, password,namaLengkapTanpaGelar,nomorAnggotaAsosiasi,role }
      try {
        let bodyreq = {
          "emailAddress": emailAddress,
          "password": password,
          "namaLengkapTanpaGelar": namaLengkapTanpaGelar,
          "nomorAnggotaAsosiasi": nomorAnggotaAsosiasi,
          "role": role
        };
        console.log({
          emailAddress,
          password,
          namaLengkapTanpaGelar,
          nomorAnggotaAsosiasi,
          role
        });

        _this2.http.post(_config_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.API_ENDPOINT + _config_constants__WEBPACK_IMPORTED_MODULE_1__.Constants.AUTH_REGISTER_PEMOHON, bodyreq).subscribe(data => {
          console.log(data);
          localStorage.setItem('emailAddress', emailAddress);
          localStorage.setItem('namaLengkapTanpaGelar', namaLengkapTanpaGelar);
          localStorage.setItem('nomorAnggotaAsosiasi', nomorAnggotaAsosiasi);

          _this2.toastr.info("pendaftaran berhasil, mohon melakukan verifikasi email");

          _this2.router.navigate(['/login']);
        }, error => {
          _this2.toastr.error(error.error.message);

          console.log(error);
          let errors = error.error.responseException.exceptionMessage.errors;
          console.log(errors);

          for (let key in errors) {
            let value = errors[key];
            console.log(value);

            _this2.toastr.error(value); // Use `key` and `value`

          }
        });
      } catch (error) {
        _this2.toastr.error(error.message);
      }
    })();
  }

  getProfile() {
    var _this3 = this;

    return (0,_Users_panjimuttaqin_Documents_KEMENKEU_DEV_FE_Pelaporan_PL2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let jwt = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(localStorage.getItem('token'));
        _this3.user = jwt;

        if (_this3.user) {
          return true;
        } else {
          _this3.logout();
        }
      } catch (error) {
        _this3.logout();

        throw error;
      }
    })();
  }

  getRole() {
    try {
      let jwt = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(localStorage.getItem('token'));
      this.user = jwt;

      if (this.user) {
        return this.user['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      } else {
        this.logout();
      }
    } catch (error) {
      this.logout();
      throw error;
    }
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('gatekeeper_token');
    this.user = null;
    this.router.navigate(['/login']);
  }

  loginKemenkeu() {
    this.loginByAuth({
      email: "P2PK@AllPerizinan.com",
      password: "$Plendid123"
    });
    this.toastr.info("berhasil");
    this.router.navigate(['/dash-bo']);
  }

  loginKasubbid() {
    this.loginByAuth({
      email: "kasubbid@AllPerizinan.com",
      password: "$Plendid123"
    });
    this.toastr.info("berhasil");
    this.router.navigate(['/dash-bo']);
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9458:
/*!************************************************!*\
  !*** ./src/app/services/fileupload.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadService": () => (/* binding */ FileUploadService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 4817);








class FileUploadService {
    constructor(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    fileUpload(name, uploadFile, url) {
        var formData = new FormData();
        formData.append("pp", uploadFile);
        let header = this.generateHeader();
        return this.http.post(url, formData, {
            headers: header,
            reportProgress: true,
            observe: 'events'
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
            //console.log("error : ", error);
            this.toastr.error(error.error.message);
            return this.errorMgmt(error);
        }));
    }
    submitFile(url, file) {
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        let progressobj = [];
        this.fileUpload(" ", file, url).subscribe((event) => {
            progressobj[0] = event;
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Sent:
                    console.log('Request has been made!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.ResponseHeader:
                    console.log('Response header has been received!');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.UploadProgress:
                    var eventTotal = event.total ? event.total : 0;
                    progressobj[1] = Math.round(event.loaded / eventTotal * 100);
                    //console.log(`Uploaded! ${this.progress}%`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpEventType.Response:
                    console.log('Image Upload Successfully!', event.body);
                    progressobj[0] = event.body;
                    setTimeout(() => {
                        progressobj[1] = 0;
                    }, 1500);
                    this.toastr.info("Upload Berhasil");
                    break;
            }
            subject.next(progressobj);
        });
        return subject.asObservable();
    }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message}`;
            //console.log(error);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(errorMessage);
    }
    generateHeader() {
        let token = localStorage.getItem('token').replace('"', '');
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            "Authorization": "Bearer " + token,
            'Accept': 'application/json, text/plain, */*',
        });
        return header;
    }
}
FileUploadService.ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
FileUploadService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8555:
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoaderService {
    constructor() {
        this.loading = false;
    }
    setLoading(loading) {
        this.loading = loading;
    }
    getLoading() {
        return this.loading;
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8330:
/*!***************************************!*\
  !*** ./src/app/store/auth/actions.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOAD_USER": () => (/* binding */ LOAD_USER),
/* harmony export */   "LOGIN_USER": () => (/* binding */ LOGIN_USER),
/* harmony export */   "LOGOUT_USER": () => (/* binding */ LOGOUT_USER),
/* harmony export */   "LoginUser": () => (/* binding */ LoginUser)
/* harmony export */ });
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const LOAD_USER = 'LOAD_USER';
class LoginUser {
    constructor() {
        this.type = LOAD_USER;
    }
}


/***/ }),

/***/ 7590:
/*!***************************************!*\
  !*** ./src/app/store/auth/reducer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authReducer": () => (/* binding */ authReducer)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ 8330);

const initialState = {
    isLoggedIn: !!localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    currentUser: {
        email: 'mail@example.com',
        picture: null
    }
};
function authReducer(state = initialState, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__.LOGIN_USER:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload
            };
            break;
        case _actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_USER:
            break;
        case _actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_USER:
            break;
        default:
            return state;
    }
}


/***/ }),

/***/ 5728:
/*!*************************************!*\
  !*** ./src/app/store/ui/actions.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SET_NAVBAR_VARIANT": () => (/* binding */ SET_NAVBAR_VARIANT),
/* harmony export */   "SET_SIDEBAR_SKIN": () => (/* binding */ SET_SIDEBAR_SKIN),
/* harmony export */   "SET_WINDOWS_SIZE": () => (/* binding */ SET_WINDOWS_SIZE),
/* harmony export */   "SetNavbarVariant": () => (/* binding */ SetNavbarVariant),
/* harmony export */   "SetSidebarSkin": () => (/* binding */ SetSidebarSkin),
/* harmony export */   "SetWindowSize": () => (/* binding */ SetWindowSize),
/* harmony export */   "TOGGLE_CONTROL_SIDEBAR": () => (/* binding */ TOGGLE_CONTROL_SIDEBAR),
/* harmony export */   "TOGGLE_DARK_MODE": () => (/* binding */ TOGGLE_DARK_MODE),
/* harmony export */   "TOGGLE_SIDEBAR_MENU": () => (/* binding */ TOGGLE_SIDEBAR_MENU),
/* harmony export */   "ToggleControlSidebar": () => (/* binding */ ToggleControlSidebar),
/* harmony export */   "ToggleDarkMode": () => (/* binding */ ToggleDarkMode),
/* harmony export */   "ToggleSidebarMenu": () => (/* binding */ ToggleSidebarMenu)
/* harmony export */ });
const TOGGLE_SIDEBAR_MENU = 'TOGGLE_SIDEBAR_MENU';
const TOGGLE_CONTROL_SIDEBAR = 'TOGGLE_CONTROL_SIDEBAR';
const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
const SET_NAVBAR_VARIANT = 'SET_NAVBAR_VARIANT';
const SET_SIDEBAR_SKIN = 'SET_SIDEBAR_SKIN';
const SET_WINDOWS_SIZE = 'SET_WINDOWS_SIZE';
class ToggleSidebarMenu {
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_SIDEBAR_MENU;
    }
}
class ToggleControlSidebar {
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_CONTROL_SIDEBAR;
    }
}
class ToggleDarkMode {
    constructor(payload) {
        this.payload = payload;
        this.type = TOGGLE_DARK_MODE;
    }
}
class SetNavbarVariant {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_NAVBAR_VARIANT;
    }
}
class SetSidebarSkin {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_SIDEBAR_SKIN;
    }
}
class SetWindowSize {
    constructor(payload) {
        this.payload = payload;
        this.type = SET_WINDOWS_SIZE;
    }
}


/***/ }),

/***/ 6555:
/*!*************************************!*\
  !*** ./src/app/store/ui/reducer.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiReducer": () => (/* binding */ uiReducer)
/* harmony export */ });
/* harmony import */ var _utils_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/themes */ 7558);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ 5728);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ 187);



function uiReducer(state = _state__WEBPACK_IMPORTED_MODULE_2__["default"], action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_SIDEBAR_MENU:
            return {
                ...state,
                menuSidebarCollapsed: !state.menuSidebarCollapsed
            };
        case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_CONTROL_SIDEBAR:
            return {
                ...state,
                controlSidebarCollapsed: !state.controlSidebarCollapsed
            };
        case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_DARK_MODE:
            let variant;
            let skin;
            if (state.darkMode) {
                variant = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_LIGHT_VARIANTS[0].value;
                skin = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_LIGHT_SKINS[0].value;
            }
            else {
                variant = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_DARK_VARIANTS[0].value;
                skin = _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_DARK_SKINS[0].value;
            }
            return {
                ...state,
                navbarVariant: variant,
                sidebarSkin: skin,
                darkMode: !state.darkMode
            };
        case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_NAVBAR_VARIANT:
            let navbarVariant;
            if (state.darkMode) {
                navbarVariant = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_DARK_VARIANTS[0].value;
            }
            else {
                navbarVariant =
                    action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.NAVBAR_LIGHT_VARIANTS[0].value;
            }
            return {
                ...state,
                navbarVariant
            };
        case _actions__WEBPACK_IMPORTED_MODULE_1__.SET_SIDEBAR_SKIN:
            let sidebarSkin;
            if (state.darkMode) {
                sidebarSkin = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_DARK_SKINS[0].value;
            }
            else {
                sidebarSkin = action.payload || _utils_themes__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_LIGHT_SKINS[0].value;
            }
            return {
                ...state,
                sidebarSkin
            };
        default:
            return state;
    }
}


/***/ }),

/***/ 187:
/*!***********************************!*\
  !*** ./src/app/store/ui/state.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    darkMode: false,
    navbarVariant: 'navbar-light',
    sidebarSkin: 'sidebar-dark-primary',
    menuSidebarCollapsed: false,
    controlSidebarCollapsed: true
    // screenSize: calculateWindowSize(window.innerWidth)
});


/***/ }),

/***/ 7763:
/*!*********************************!*\
  !*** ./src/app/type/periode.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Periode": () => (/* binding */ Periode)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Periode {
}
Periode.ɵfac = function Periode_Factory(t) { return new (t || Periode)(); };
Periode.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Periode, factory: Periode.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7558:
/*!*********************************!*\
  !*** ./src/app/utils/themes.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAVBAR_DARK_VARIANTS": () => (/* binding */ NAVBAR_DARK_VARIANTS),
/* harmony export */   "NAVBAR_LIGHT_VARIANTS": () => (/* binding */ NAVBAR_LIGHT_VARIANTS),
/* harmony export */   "SIDEBAR_DARK_SKINS": () => (/* binding */ SIDEBAR_DARK_SKINS),
/* harmony export */   "SIDEBAR_LIGHT_SKINS": () => (/* binding */ SIDEBAR_LIGHT_SKINS)
/* harmony export */ });
const NAVBAR_LIGHT_VARIANTS = [
    { value: 'navbar-light', label: 'Light' },
    { value: 'navbar-warning navbar-light', label: 'Warning' },
    { value: 'navbar-white navbar-light', label: 'White' },
    { value: 'navbar-orange navbar-light', label: 'Orange' }
];
const NAVBAR_DARK_VARIANTS = [
    { value: 'navbar-dark', label: 'Dark' },
    { value: 'navbar-primary navbar-dark', label: 'Primary' },
    { value: 'navbar-secondary navbar-dark', label: 'Secondary' },
    { value: 'navbar-info navbar-dark', label: 'Info' },
    { value: 'navbar-success navbar-dark', label: 'Success' },
    { value: 'navbar-danger navbar-dark', label: 'Danger' },
    { value: 'navbar-indigo navbar-dark', label: 'Indigo' },
    { value: 'navbar-purple navbar-dark', label: 'Purple' },
    { value: 'navbar-pink navbar-dark', label: 'Pink' },
    { value: 'navbar-navy navbar-dark', label: 'Navy' },
    { value: 'navbar-lightblue navbar-dark', label: 'Light Blue' },
    { value: 'navbar-teal navbar-dark', label: 'Teal' },
    { value: 'navbar-cyan navbar-dark', label: 'Cyan' },
    { value: 'navbar-gray-dark navbar-dark', label: 'Gray Dark' },
    { value: 'navbar-gray navbar-dark', label: 'Gray' }
];
const SIDEBAR_DARK_SKINS = [
    { value: 'sidebar-dark-primary', label: 'Primary' },
    { value: 'sidebar-dark-warning', label: 'Warning' },
    { value: 'sidebar-dark-info', label: 'Info' },
    { value: 'sidebar-dark-danger', label: 'Danger' },
    { value: 'sidebar-dark-success', label: 'Success' },
    { value: 'sidebar-dark-indigo', label: 'Indigo' },
    { value: 'sidebar-dark-lightblue', label: 'Lightblue' },
    { value: 'sidebar-dark-navy', label: 'Navy' },
    { value: 'sidebar-dark-purple', label: 'Purple' },
    { value: 'sidebar-dark-fuchsia', label: 'Fuchsia' },
    { value: 'sidebar-dark-pink', label: 'Pink' },
    { value: 'sidebar-dark-maroon', label: 'Maroon' },
    { value: 'sidebar-dark-orange', label: 'Orange' },
    { value: 'sidebar-dark-lime', label: 'Lime' },
    { value: 'sidebar-dark-teal', label: 'Teal' },
    { value: 'sidebar-dark-olive', label: 'Olive' }
];
const SIDEBAR_LIGHT_SKINS = [
    { value: 'sidebar-light-primary', label: 'Primary' },
    { value: 'sidebar-light-warning', label: 'Warning' },
    { value: 'sidebar-light-info', label: 'Info' },
    { value: 'sidebar-light-danger', label: 'Danger' },
    { value: 'sidebar-light-success', label: 'Success' },
    { value: 'sidebar-light-indigo', label: 'Indigo' },
    { value: 'sidebar-light-lightblue', label: 'Lightblue' },
    { value: 'sidebar-light-navy', label: 'Navy' },
    { value: 'sidebar-light-purple', label: 'Purple' },
    { value: 'sidebar-light-fuchsia', label: 'Fuchsia' },
    { value: 'sidebar-light-pink', label: 'Pink' },
    { value: 'sidebar-light-maroon', label: 'Maroon' },
    { value: 'sidebar-light-orange', label: 'Orange' },
    { value: 'sidebar-light-lime', label: 'Lime' },
    { value: 'sidebar-light-teal', label: 'Teal' },
    { value: 'sidebar-light-olive', label: 'Olive' }
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var gatekeeper_client_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatekeeper-client-sdk */ 1920);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
gatekeeper_client_sdk__WEBPACK_IMPORTED_MODULE_0__.Gatekeeper.initialize('9966bf1b-5da5-4b55-9301-86f9f0c77aaf');
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 4147:
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"adminlte","version":"0.1.0","private":true,"scripts":{"start":"ng serve","build":"ng build --configuration production","test":"ng test","lint":"ng lint","e2e":"ng e2e","update":"ng update --force @angular/cli @angular/core","postinstall":"ngcc"},"lint-staged":{"src/**/*.{ts,tsx}":["prettier --write"]},"husky":{"hooks":{"pre-commit":"pretty-quick --staged && ng lint && lint-staged"}},"dependencies":{"@angular/animations":"14.0.0","@angular/common":"14.0.0","@angular/compiler":"14.0.0","@angular/core":"14.0.0","@angular/forms":"14.0.0","@angular/localize":"14.0.0","@angular/platform-browser":"14.0.0","@angular/platform-browser-dynamic":"14.0.0","@angular/router":"14.0.0","@ngrx/store":"14.0.0-beta.0","bootstrap":"4.6.1","core-js":"3.8.0","gatekeeper-client-sdk":"0.4.2","jwt-decode":"^3.1.2","luxon":"2.4.0","ngx-toastr":"14.3.0","process":"0.11.10","rxjs":"6.6.7","tslib":"2.4.0","uuid":"8.3.2","zone.js":"~0.11.5"},"devDependencies":{"@angular-devkit/build-angular":"14.0.0","@angular-eslint/builder":"13.2.1","@angular-eslint/eslint-plugin":"13.2.1","@angular-eslint/eslint-plugin-template":"13.2.1","@angular-eslint/schematics":"13.2.1","@angular-eslint/template-parser":"13.2.1","@angular/cli":"13.3.7","@angular/compiler-cli":"14.0.0","@angular/language-service":"14.0.0","@types/jasmine":"~4.0.3","@types/jasminewd2":"2.0.10","@types/node":"17.0.40","@typescript-eslint/eslint-plugin":"5.27.0","@typescript-eslint/parser":"5.27.0","admin-lte":"3.2.0","eslint":"8.1.0","fs-web":"1.0.1","husky":"8.0.1","jasmine-core":"~4.1.1","jasmine-spec-reporter":"~7.0.0","karma":"6.3.20","karma-chrome-launcher":"~3.1.1","karma-coverage-istanbul-reporter":"3.0.3","karma-jasmine":"~5.0.1","karma-jasmine-html-reporter":"2.0.0","lint-staged":"13.0.0","os-browserify":"0.3.0","path-browserify":"1.0.1","prettier":"2.6.2","pretty-quick":"3.1.3","protractor":"7.0.0","ts-node":"10.8.1","tslint-config-prettier":"1.18.0","tslint-plugin-prettier":"2.3.0","typescript":"4.7.3"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map