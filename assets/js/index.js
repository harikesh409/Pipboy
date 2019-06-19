$(function () {
    let specials = [{
        "name": "strength",
        "description": "Strength is a measure of your raw physical power. It affects how much you can carry,and the damage of all melee attacks.",
        "image":"strength.png"
    },
    {
        "name": "perception",
        "description": "Perception is your environmental awareness and \"sixth sense\" and effects weapon accuracy in V. A. T. S.",
        "image":"perception.png"
    },
    {
        "name": "endurance",
        "description": "Endurance is a measure of your overall physical fitness. It affects your total Health and the Action Point drain from sprinting.",
        "image":"endurance.png"
    },
    {
        "name": "charisma",
        "description": "Charisma is your ability to charm and convince others. It affects your success to persuade in dialogue and prices when you barter.",
        "image":"charisma.png"
    },
    {
        "name": "intelligence",
        "description": "Intelligence is a measure of your overall mental acuity, and affects the number of Experience Points earned.",
        "image":"intelligence.png"
    },
    {
        "name": "agility",
        "description": "Agility is a measure of your overall finesse and reflexes. It affeccts the number of Action Points in V. A. T. S. and your ability to sneak.",
        "image":"agility.png"
    },
    {
        "name": "luck",
        "description": "Luck is a measure of your general good fortune, and affects the recharge rate of Critical Hits.",
        "image":"luck.png"
    }
    ];
    let perks = [{
        "name": "animal-friend",
        "description": "Commune with beasts! With your gun, aim at any animal below your level and gain a chance to pacify it.",
        "image":"animal_friend.png"
    },
    {
        "name": "big-leagues",
        "description": "Swing for the fences! Do 20% more melee weapon damage.",
        "image":"big_leagues.png"
    },
    {
        "name": "bloody-mess",
        "description": "+5% bonus damage means enimies will sometimes explode into a gory red paste. Watch out for flying eyeballs!",
        "image":"bloody_mess.gif"
    },
    {
        "name": "pickpocket",
        "description": "Your quick hands and sticky fingers make picking pockets 25% easier.",
        "image":"pickpocket.png"
    },
    {
        "name": "sniper",
        "description": "It's all about focus. You have improved control and can hold your breath longer when aiming with scopes.",
        "image":"sniper.png"
    }
    ];

    $(".item-specials a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(specials, (idx, obj) => {
            if (obj.name === current_item) {
                $("#special .items").html(`
                    <img src="assets/images/${obj.image}" alt="${obj.name}" class="img-fluid filter">
                    <p>${obj.description}</p>
                    `);
            }
        });
    });

    $(".item-perks a").on("click", e => {
        let current_item = $(e.currentTarget).attr('class').split(' ')[0];
        $.each(perks, (idx, obj) => {
            if (obj.name === current_item) {
                $("#perks .items").html(`
                    <img src="assets/images/${obj.image}" alt="${obj.name}" class="img-fluid filter">
                    <p>${obj.description}</p>
                    `);
            }
        });
    })
});