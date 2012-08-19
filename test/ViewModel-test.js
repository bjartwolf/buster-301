"use strict";
buster.testCase("The ViewModel", {
    "setUp": function () {
        this.vm = new ReservationsViewModel();
    },
    "total sum should be zero when initialized": function () {
        assert.same(this.vm.totalSurcharge(), 0);
    },
    "total number of seats should be two": function () {
        assert.same(this.vm.seats().length, 2);
    },
    "after adding a seat there should be three seats": function () {
        this.vm.addSeat();
        assert.same(this.vm.seats().length, 3);
    },
    "after remoivng a seat there should be one seat left": function () {
        var seatToRemove = this.vm.seats()[0];
        this.vm.removeSeat(seatToRemove);
        assert.same(this.vm.seats().length, 1);
    },
});
