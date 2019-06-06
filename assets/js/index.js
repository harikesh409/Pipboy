$(function () {
    let specials = [{
            "name": "strength",
            "description": "Strength is a measure of your raw physical power. It affects how much you can carry,and the damage of all melee attacks."
        },
        {
            "name": "perception",
            "description": "Perception is your environmental awareness and \"sixth sense\" and effects weapon accuracy in V. A. T. S."
        },
        {
            "name": "endurance",
            "description": "Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting."
        },
        {
            "name": "charisma",
            "description": "Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter."
        },
        {
            "name": "intelligence",
            "description": "Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned."
        },
        {
            "name": "agility",
            "description": "Agility is a measure of your overall finesse and reflexes. It affeccts the number of Action Points in V. A. T. S. and your ability to sneak."
        },
        {
            "name": "luck",
            "description": "Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits."
        }
    ];
    let perks = [{
            "name": "animal-friend",
            "description": "Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it."
        },
        {
            "name": "big-leagues",
            "description": "Swing for the fences! Do 20% more melee weapon damage."
        },
        {
            "name": "bloody-mess",
            "description": "+5% bonus damage means enimies will sometimes explode into a gory red paste. Watch out for flying eyeballs!"
        },
        {
            "name": "pickpocket",
            "description": "Your quick hands and sticky fingers make picking pockets 25% easier."
        },
        {
            "name": "sniper",
            "description": "It's all about focus. You have improved control and can hold your breath longer when aiming with scopes."
        }
    ];

    $(".item-specials a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(specials, (idx, obj) => {
            if (obj.name === current_item) {
                $("#special .items").html(`<p>${obj.description}</p>`);
            }
        });
    });

    $(".item-perks a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(perks, (idx, obj) => {
            if (obj.name === current_item) {
                $("#perks .items").html(`<p>${obj.description}</p>`);
            }
        });
    })
});