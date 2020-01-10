(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var showList = this;
        showList.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

        showList.itemName = "";
        showList.itemQuantity = "";

        showList.boughtItem = function (itemIndex, item) {
            ShoppingListCheckOffService.boughtItem(itemIndex, item);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var list = this;
        list.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    function ShoppingListCheckOffService () {
        var service = this;

        var toBuyItems = [{
                            name: 'Cookies',
                            quantity: '10'
                        },
                        {
                            name: 'Soda',
                            quantity: '1'
                        },
                        {
                            name: 'Bread',
                            quantity: '10 kg'
                        },
                        {
                            name: 'Fruits',
                            quantity: '30 kg'
                        },
                        {
                            name: 'Rice',
                            quantity: '23 gr'
                        },
        ];

        var alreadyBoughtItems = [];

        service.boughtItem = function (itemIdex, item) {
            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIdex, 1);
        };

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtItems;
        };

    }
})();