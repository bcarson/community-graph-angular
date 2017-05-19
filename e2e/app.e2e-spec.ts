import { CommunityGraphStarterKitAngularPage } from './app.po';

describe('community-graph-starter-kit-angular App', () => {
  let page: CommunityGraphStarterKitAngularPage;

  beforeEach(() => {
    page = new CommunityGraphStarterKitAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
