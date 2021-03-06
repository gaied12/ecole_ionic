import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),


  },
  {
    path: 'student-register',
    loadChildren: () => import('./student-register/student-register.module').then( m => m.StudentRegisterPageModule)
  },
  {
    path: 'consulter-stud',
    loadChildren: () => import('./consulter-stud/consulter-stud.module').then( m => m.ConsulterStudPageModule),
    canActivate: [AuthGuardService]

  },

  {
    path: 'upd-stud/:id',
    loadChildren: () => import('./upd-stud/upd-stud.module').then( m => m.UpdStudPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'consulter-class',
    loadChildren: () => import('./consulter-class/consulter-class.module').then( m => m.ConsulterClassPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'emp-class/:id',
    loadChildren: () => import('./emp/emp-class/emp-class.module').then( m => m.EmpClassPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'del-emp',
    loadChildren: () => import('./emp/del-emp/del-emp.module').then( m => m.DelEmpPageModule),
      canActivate: [AuthGuardService]

  },
  {
    path: 'consult-emp/:id',
    loadChildren: () => import('./emp/consult-emp/consult-emp.module').then( m => m.ConsultEmpPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'consult-notes',
    loadChildren: () => import('./notes-admin/consult-notes/consult-notes.module').then( m => m.ConsultNotesPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-note',
    loadChildren: () => import('./notes-admin/add-note/add-note.module').then( m => m.AddNotePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'note/:id',
    loadChildren: () => import('./notes-admin/note/note.module').then( m => m.NotePageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-class',
    loadChildren: () => import('./add-class/add-class.module').then( m => m.AddClassPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-abs/:id',
    loadChildren: () => import('./add-abs/add-abs.module').then( m => m.AddAbsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'all-abs/:id',
    loadChildren: () => import('./all-abs/all-abs.module').then( m => m.AllAbsPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'verify-compte/:id/:email',
    loadChildren: () => import('./verify-compte/verify-compte.module').then( m => m.VerifyComptePageModule)
  },
  {
    path: 'sanction',
    loadChildren: () => import('./sanction/sanction.module').then( m => m.SanctionPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-prof',
    loadChildren: () => import('./prof-admin/add-prof/add-prof.module').then( m => m.AddProfPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'consult-prof',
    loadChildren: () => import('./prof-admin/consult-prof/consult-prof.module').then( m => m.ConsultProfPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'home-parent',
    loadChildren: () => import('./home-parent/home-parent.module').then( m => m.HomeParentPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [AuthGuardService]

  },
  {
    path: 'emp-prof/:id',
    loadChildren: () => import('./emp-prof/emp-prof.module').then( m => m.EmpProfPageModule)
  },
  {
    path: 'add-fils',
    loadChildren: () => import('./add-fils/add-fils.module').then( m => m.AddFilsPageModule)
  },
  {
    path: 'consult-fils/:id',
    loadChildren: () => import('./consult-fils/consult-fils.module').then( m => m.ConsultFilsPageModule)
  },
  {
    path: 'sanction-stud/:id',
    loadChildren: () => import('./sanction-stud/sanction-stud.module').then( m => m.SanctionStudPageModule)
  },
  {
    path: 'absence-stud/:id',
    loadChildren: () => import('./absence-stud/absence-stud.module').then( m => m.AbsenceStudPageModule)
  },
  {
    path: 'info-stud/:id',
    loadChildren: () => import('./info-stud/info-stud.module').then( m => m.InfoStudPageModule)
  },
  {
    path: 'profil-stud/:id',
    loadChildren: () => import('./profil-stud/profil-stud.module').then( m => m.ProfilStudPageModule)
  },
  {
    path: 'metting-parent/:id/:studId',
    loadChildren: () => import('./metting-parent/metting-parent.module').then( m => m.MettingParentPageModule)
  },
  {
    path: 'note-parent',
    loadChildren: () => import('./note-parent/note-parent.module').then( m => m.NoteParentPageModule)
  },
  {
    path: 'parent-note/:id',
    loadChildren: () => import('./parent-note/parent-note.module').then( m => m.ParentNotePageModule)
  },
  {
    path: 'home-prof',
    loadChildren: () => import('./home-prof/home-prof.module').then( m => m.HomeProfPageModule)
  },
  {
    path: 'consult-emp-prof',
    loadChildren: () => import('./consult-emp-prof/consult-emp-prof.module').then( m => m.ConsultEmpProfPageModule)
  },
  {
    path: 'metting-prof/:idProf',
    loadChildren: () => import('./metting-prof/metting-prof.module').then( m => m.MettingProfPageModule)
  },
  {
    path: 'consult-metting-parent/:idParent',
    loadChildren: () => import('./consult-metting-parent/consult-metting-parent.module').then( m => m.ConsultMettingParentPageModule)
  },
  {
    path: 'parent-add-fils',
    loadChildren: () => import('./parent-add-fils/parent-add-fils.module').then( m => m.ParentAddFilsPageModule)
  },
  {
    path: 'fils-selection',
    loadChildren: () => import('./fils-selection/fils-selection.module').then( m => m.FilsSelectionPageModule)
  },
  {
    path: 'profil/:id',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'notif',
    loadChildren: () => import('./notif/notif.module').then( m => m.NotifPageModule)
  },
  {
    path: 'add-result/:id',
    loadChildren: () => import('./add-result/add-result.module').then( m => m.AddResultPageModule)
  },
  {
    path: 'all-result/:id',
    loadChildren: () => import('./all-result/all-result.module').then( m => m.AllResultPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./result/result.module').then( m => m.ResultPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule],
  providers: [AuthGuardService ]
})
export class AppRoutingModule { }
