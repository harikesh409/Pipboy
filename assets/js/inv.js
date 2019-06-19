$(function () {
    let weapons = [{
        "name": "44_pistol",
        "damage": 48,
        "ammo": 12,
        "fire Rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {
        "name": "10mm_pistol",
        "damage": 18,
        "ammo": 15,
        "fire Rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {
        "name": "assault_rifle",
        "damage": 30,
        "ammo": 30,
        "fire Rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }
    ];

    let junk = [{
        "name":"baseball",
        "weight":0.5,
        "value":4
    },
    {
        "name":"desk_fan",
        "weight":3,
        "value":4
    },
    {
        "name":"ladle",
        "weight":0.5,
        "value":2
    }
    ];

    let ammo = [
    {
        "name":"5.56",
        "weight":0,
        "value":2
    },
    {
        "name":"5mm",
        "weight":0,
        "value":1
    },
    {
        "name":"shotgun",
        "weight":0,
        "value":3
    }
    ]

    $(".item-weapons a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(weapons, function (idx, obj) {
            if (obj.name === current_item) {
                $(".items>.row-highlight").html('');
                $.each(obj, function (key, value) {
                    if (key !== 'name')
                        $(".items>.row-highlight").append(`<div class="row">
                            <div class="col-12 text-capitalize">
                            ${key}
                            <span class="float-right">${value}</span>
                            </div>
                            </div>`);
                });
            }
        });
    });

    $(".item-junk a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(junk, function (idx, obj) {
            if (obj.name === current_item) {
                $(".items>.row-highlight").html('');
                $.each(obj, function (key, value) {
                    if (key !== 'name')
                        $(".items>.row-highlight").append(`<div class="row">
                            <div class="col-12 text-capitalize">
                            ${key}
                            <span class="float-right">${value}</span>
                            </div>
                            </div>`);
                });
            }
        });
    });

    $(".item-ammo a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(ammo, function (idx, obj) {
            if (obj.name === current_item) {
                $(".items>.row-highlight").html('');
                $.each(obj, function (key, value) {
                    if (key !== 'name')
                        $(".items>.row-highlight").append(`<div class="row">
                            <div class="col-12 text-capitalize">
                            ${key}
                            <span class="float-right">${value}</span>
                            </div>
                            </div>`);
                });
            }
        });
    });
});