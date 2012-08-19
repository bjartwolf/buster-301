"use strict";
buster.testCase("The ViewModel", {
    "total sum should be zero when initialized": function () {
        var vm = new ReservationsViewModel();
        assert.same(vm.totalSurcharge(), 0);
    }
});
