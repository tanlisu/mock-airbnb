import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './auth.service';
describe('AuthenticationService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthenticationService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth.service.spec.js.map