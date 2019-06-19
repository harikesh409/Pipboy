$(function () {
	let stats = [
	{
		"name":"general",
		"Hours Slept":Math.floor((Math.random()*10)),
		"Caps Found":Math.floor((Math.random()*1000)),
		"Most Caps Carried":Math.floor((Math.random()*1000)),
		"Junk Collected":Math.floor((Math.random()*100))
	},
	{
		"name":"quest",
		"Quests Completed":Math.floor((Math.random()*100)),
		"Misc Objectives Completed":Math.floor((Math.random()*10)),
		"Main Quests Completed":Math.floor((Math.random()*100)),
		"Side Quests Completed":Math.floor((Math.random()*100))
	},
	{
		"name":"combat",
		"People Killed":Math.floor((Math.random()*100)),
		"Animals Killed":Math.floor((Math.random()*100)),
		"Creatures Killed":Math.floor((Math.random()*100)),
		"Sneak Attacks":Math.floor((Math.random()*10))
	},
	{
		"name":"crafting",
		"Weapon Mods Crafted":Math.floor((Math.random()*100)),
		"Armor Mods Crafted":Math.floor((Math.random()*100)),
		"Plants Harvested":Math.floor((Math.random()*100)),
		"Food Cooked":Math.floor((Math.random()*100))
	},
	{
		"name":"crime",
		"Locks Picked":Math.floor((Math.random()*100)),
		"Computers Hacked":Math.floor((Math.random()*100)),
		"Pockets Picked":Math.floor((Math.random()*100)),
		"Murders":Math.floor((Math.random()*100))
	}
	];
	let date = new Date();
	$(".time").html(date.toLocaleTimeString());
	$(".item-stats a").on("click", e => {
		let current_item = $(e.currentTarget).attr('class').split(' ')[0];
		$.each(stats, function (idx, obj) {
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