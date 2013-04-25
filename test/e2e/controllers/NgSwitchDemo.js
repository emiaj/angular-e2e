describe("NgSwichDemoCtrl e2e test",function(){
beforeEach(function() {
    browser().navigateTo('/app/#');
  });
  it('displays first message by default',function(){
    expect(element('.switchsample .results[data-ng-switch]').text()).toMatch(/First Option Selected/);
  });
  it('displays first message when first option is selected',function(){
    select('selection').option('1st');
    expect(element('.switchsample .results[data-ng-switch]').text()).toMatch(/First Option Selected/);
  });
  it('displays second message when second option is selected',function(){
    select('selection').option('2nd');
    expect(element('.switchsample .results[data-ng-switch]').text()).toMatch(/Second Option Selected/);
  });
  it('displays third message when third option is selected',function(){
    select('selection').option('3rd');    
    expect(element('.switchsample .results[data-ng-switch]').text()).toMatch(/Third Option Selected/);
  });
});