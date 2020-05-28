import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { NbSidebarService, NbMenuService, NbThemeService, NbMediaBreakpointsService, NbIconConfig } from '@nebular/theme';
import { LayoutService } from 'src/app/@core/services';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'frusan-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly = false;
  user: Observable <any>;

  userMenu = [ { title: 'Mi perfil' }, { title: 'Log out', link: '/auth/login' } ];
  disabledIconConfig: NbIconConfig = { icon: 'settings-2-outline', pack: 'eva' };

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,
              private breakpointService: NbMediaBreakpointsService,
              /* private store: Store<AuthState> */) {
  }

  ngOnInit() {
    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService.onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$),
      )
      .subscribe((isLessThanXl: boolean) => this.userPictureOnly = isLessThanXl);
    /*   this.store.pipe(select(selectAuth)).subscribe((data) => {
        this.user = data;
      }); */
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

}
