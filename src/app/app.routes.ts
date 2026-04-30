import { Routes } from '@angular/router';

import { DepartmentList } from './presentation/components/department/department-list/department-list';
import { OrganizationList } from './presentation/components/organization/organization-list/organization-list';
import { ServiceList } from './presentation/components/service/service-list/service-list';
import { OccupationList } from './presentation/components/occupation/occupation-list/occupation-list';
import { YearList } from './presentation/components/year/year-list/year-list';
import { MonthList } from './presentation/components/month/month-list/month-list';
import { PersonnelAttendanceList } from './presentation/components/personnel-attendance/personnel-attendance-list/personnel-attendance-list';
import { MedicalPerMonthList } from './presentation/components/medical-per-month/medical-per-month-list/medical-per-month-list';
import { MedicalMonthReport } from './presentation/components/medical-month-report/medical-month-report/medical-month-report';
import { PersonnelMonthReport } from './presentation/components/personnel-month-report/personnel-month-report/personnel-month-report';
import {RatioReport} from './presentation/components/ratio-report/ratio-report';
import {KeycloakGuard} from './services/keycloak-guard';

export const routes: Routes = [
  { path: 'departments', component: DepartmentList,canActivate: [KeycloakGuard], },
  { path: 'organizations', component: OrganizationList,canActivate: [KeycloakGuard], },
  { path: 'services', component: ServiceList,canActivate: [KeycloakGuard], },
  { path: 'occupations', component: OccupationList ,canActivate: [KeycloakGuard], },
  { path: 'years', component: YearList ,canActivate: [KeycloakGuard], },
  { path: 'months', component: MonthList ,canActivate: [KeycloakGuard], },
  { path: 'personnelAttendance', component: PersonnelAttendanceList ,canActivate: [KeycloakGuard], },
  { path: 'medicalPerMonth', component: MedicalPerMonthList, canActivate: [KeycloakGuard], },
  { path: 'medicalMonthReport', component: MedicalMonthReport,canActivate: [KeycloakGuard], },
  { path: 'personnelMonthReport', component: PersonnelMonthReport,canActivate: [KeycloakGuard], },
  { path: 'ratioServiceReport', component: RatioReport,canActivate: [KeycloakGuard], },
];
