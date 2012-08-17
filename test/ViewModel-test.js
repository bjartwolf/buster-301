"use strict";
buster.testCase("The ViewModel", {
    "should update the fullname when firstname changes": function () {
        var vm = new ReservationsViewModel();
	buster.log(vm.totalSurcharge());
        assert.same(vm.totalSurcharge(), 0);
    }
});
