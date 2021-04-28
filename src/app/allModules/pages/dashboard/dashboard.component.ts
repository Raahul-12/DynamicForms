import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
    MatIconRegistry,
    MatSnackBar,
    MatTableDataSource,
    MatPaginator,
    MatSort,
    MatTabChangeEvent
} from '@angular/material';
import { Router } from '@angular/router';
import { NotificationSnackBarComponent } from 'app/notifications/notification-snack-bar/notification-snack-bar.component';
import { SnackBarStatus } from 'app/notifications/notification-snack-bar/notification-snackbar-status-enum';
import { AuthenticationDetails } from 'app/models/master';
import { fuseAnimations } from '@fuse/animations';
import { DashboardService } from 'app/services/dashboard.service';
import { ShareParameterService } from 'app/services/share-parameters.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Guid } from 'guid-typescript';
import { PreviewService } from '../preview/preview.service';
import { Common } from 'app/models/project';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class DashboardComponent implements OnInit {
    abc: string;
    abc1: string;
    authenticationDetails: AuthenticationDetails;
    currentUserID: Guid;
    currentUserRole: string;
    MenuItems: string[];
    isProgressBarVisibile: boolean;
    notificationSnackBarComponent: NotificationSnackBarComponent;
    displayedColumns: string[] = [
        'INV_NO',
        'INV_DATE',
        'INV_TYPE',
        'PLANT',
        'VEHICLE_NO',
        'VEHICLE_CAPACITY',
        'FWD_AGENT',
        'CARRIER',
        'EWAYBILL_NO',
        'EWAYBILL_DATE',
        'PROPOSED_DELIVERY_DATE',
        'ACTUAL_DELIVERY_DATE'
    ];
    dataSource = new MatTableDataSource<any>();
    selection = new SelectionModel<any>(true, []);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(
        private _previewService: PreviewService,
        private _router: Router,
        private _dashboardService: DashboardService,
        private _shareParameterService: ShareParameterService,
        public snackBar: MatSnackBar
    ) {
        this.isProgressBarVisibile = false;
        this.notificationSnackBarComponent = new NotificationSnackBarComponent(this.snackBar);
    }

    ngOnInit(): void {
       
        //  Retrive authorizationData
        const retrievedObject = localStorage.getItem('authorizationData');
        const common=new Common()
         if (retrievedObject) {
             this.authenticationDetails = JSON.parse(retrievedObject) as AuthenticationDetails;
             this.abc = this.authenticationDetails.EmailAddress;
         }
         this.GetRoleWithEmail();
         
         
        //     this.currentUserRole = this.authenticationDetails.userRole;
        //     this.MenuItems = this.authenticationDetails.menuItemNames.split(',');
        //     if (this.MenuItems.indexOf('Dashboard') < 0) {
        //         this.notificationSnackBarComponent.openSnackBar('You do not have permission to visit this page', SnackBarStatus.danger
        //         );
        //         this._router.navigate(['/auth/login']);
        //     }
        // } else {
        //     this._router.navigate(['/auth/login']);
        // }
    }

    applyFilter(filterValue: string): void {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    PostEmailData(): void {
        const common = new Common()
        common.email1 = this.abc;
        common.email2 = this.abc1;
        this._previewService.PostEmailData(common).subscribe(
          (data) => {
            console.log(data);
            // this.dataarr2 = data;
            // console.log(this.dataarr2);
            // this.Functioncheck();
          },
          (err) => {
            console.error(err);
          }
        )
    
      }

      GetRoleWithEmail(): void {
        this._previewService.GetRoleWithEmail().subscribe(
          (data) => {
            console.log(data);
           
           this.abc1 = data[0];
           this.PostEmailData();
            // this.dataarr2 = data;
            // console.log(this.dataarr2);
            // this.Functioncheck();
          },
          (err) => {
            console.error(err);
          }
        )
    
      }


}
