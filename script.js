(function() { window.onload = function() {
    var styles = {
        body: {
            padding: '10px',
            background: 'black',
            color: 'white',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '1110px',
        },

        icon: {
            verticalAlign: 'middle',
            paddingRight:  '5px',
        },

        input: {
            color: 'black',
        },

        input_filled: {
//             outline: 'none',
            borderColor: 'rgb(237, 41, 41)',
            boxShadow: '0px 0px 10px rgb(195, 121, 124) ',
        },
        input_empty: {
            outline: 'none',
            border: '2px solid black',
            boxShadow: 'none',
            borderRadius: '2px',
        },

        float_left: { float: 'left' },
        float_right: { float: 'right' },
        race: {
//             textAlign: 'center',
            marginLeft: '10px',
            float: 'left',
        },

        race_select: {
            color: 'black',
            marginBottom: '18px',
        }
    };

    var body = document.body;
    Dom.node_apply_style(body, styles.body);

    var left_race  = Race(0, 'Human');
    var right_race = Race(1, 'Orc');

    Dom.node_push(body,
        left_race,
        right_race,
        Dom.clear_node()
    );

    function Race(id, name) {
        var race = document.createElement('div');
        var races = Races(function(new_race_name) {
            race.replaceChild(race_from_name(new_race_name), race.childNodes[1]);
        });
        races.options[id].selected = 'selected';
        Dom.node_apply_style(race, styles.race);
        Dom.node_push(race, races, race_from_name(name));

        return race;
    }

    function Races(on_change) {
        var races = ['Human', 'Orc', 'Undead', 'Nightelf'];
        var select = document.createElement('select');
        for (var race_index = 0; race_index < races.length; race_index++) {
            var option = document.createElement('option');
            option.textContent = races[race_index];
            Dom.node_push(select, option)
        }
        Dom.node_apply_style(select, styles.race_select);
        select.onchange = function() {
            var selected_option = select.options[select.selectedIndex].value;
            on_change(selected_option);
        };

        return select;
    }

    function race_from_name(name) {
        if (name === 'Human')    { return Human(); }
        if (name === 'Orc')      { return Orc(); }
        if (name === 'Undead')   { return Undead(); }
        if (name === 'Nightelf') { return Nightelf(); }
        throw 'Unknown Race: ' + name;
    }

    function Human() {
        var units = [
            Unit({ raw_code: 'htow', on_input: update_resources }),
                Unit({ raw_code: 'hkee', on_input: update_resources }),
                Unit({ raw_code: 'hcas', on_input: update_resources }),
                Unit({ raw_code: 'hpea', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hbar', on_input: update_resources }),
                Unit({ raw_code: 'hfoo', on_input: update_resources }),
                Unit({ raw_code: 'hrif', on_input: update_resources }),
                Unit({ raw_code: 'hkni', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hars', on_input: update_resources }),
                Unit({ raw_code: 'hmpr', on_input: update_resources }),
                Unit({ raw_code: 'hsor', on_input: update_resources }),
                Unit({ raw_code: 'hspt', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'harm', on_input: update_resources }),
                Unit({ raw_code: 'hmtm', on_input: update_resources }),
                Unit({ raw_code: 'hgyr', on_input: update_resources }),
                Unit({ raw_code: 'hmtt', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hgra', on_input: update_resources }),
                Unit({ raw_code: 'hdhw', on_input: update_resources }),
                Unit({ raw_code: 'hgry', on_input: update_resources }),
            br(), br(),

            Unit({ raw_code: 'halt', on_input: update_resources }),
            Unit({ raw_code: 'hhou', on_input: update_resources }),
            Unit({ raw_code: 'hvlt', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hwtw', on_input: update_resources }),
                Unit({ raw_code: 'hgtw', on_input: update_resources }),
                Unit({ raw_code: 'hatw', on_input: update_resources }),
                Unit({ raw_code: 'hctw', on_input: update_resources }),
            br(), br()
        ];

        var upgrades = [
            Unit({ raw_code: 'hbla', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhme', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhar', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhra', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhla', max_lvl: 3, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hlum', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhac', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhlh', max_lvl: 2, on_input: update_resources }),
//             Unit({ raw_code: 'htow', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhpm', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hbar', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhde', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhri', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhan', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hars', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhpt', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhst', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhss', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhse', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'harm', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhfc', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhgb', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhfs', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhfl', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhrt', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'hgra', on_input: update_resources }),
                Upgrade({ raw_code: 'Rhcd', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rhhb', max_lvl: 1, on_input: update_resources }),
            br(),
        ];

        var costables = [].concat(units, upgrades);

        var resource_gold   = Resource('ResourceGold.png');
        var resource_lumbre = Resource('ResourceLumber.png');
        var resource_food   = Resource('ResourceSupply.png');

        function update_resources() {
            var resources_used = calculate_costs(costables);
            resource_gold.$set_amount(resources_used.gold_cost);
            resource_lumbre.$set_amount(resources_used.lumber_cost);
            resource_food.$set_amount(resources_used.food_cost);
        }

        var root = document.createElement('div');
        Dom.node_push(root,
            units,
            upgrades,
            br(),
            resource_gold,
            br(),
            resource_lumbre,
            br(),
            resource_food
        );

        return root;
    }

    function Orc() {
        var units = [
            Unit({ raw_code: 'ogre', on_input: update_resources }),
                Unit({ raw_code: 'ostr', on_input: update_resources }),
                Unit({ raw_code: 'ofrt', on_input: update_resources }),
                Unit({ raw_code: 'opeo', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'obar', on_input: update_resources }),
                Unit({ raw_code: 'ogru', on_input: update_resources }),
                Unit({ raw_code: 'ohun', on_input: update_resources }),
                Unit({ raw_code: 'ocat', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'osld', on_input: update_resources }),
                Unit({ raw_code: 'oshm', on_input: update_resources }),
                Unit({ raw_code: 'odoc', on_input: update_resources }),
                Unit({ raw_code: 'ospw', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'obea', on_input: update_resources }),
                Unit({ raw_code: 'orai', on_input: update_resources }),
                Unit({ raw_code: 'okod', on_input: update_resources }),
                Unit({ raw_code: 'owyv', on_input: update_resources }),
                Unit({ raw_code: 'otbr', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'otto', on_input: update_resources }),
                Unit({ raw_code: 'otau', on_input: update_resources }),
            br(), br(),

            Unit({ raw_code: 'oalt', on_input: update_resources }),
            Unit({ raw_code: 'otrb', on_input: update_resources }),
            Unit({ raw_code: 'ovln', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'owtw', on_input: update_resources }),
            br(), br()
        ];

        var upgrades = [
            Unit({ raw_code: 'ofor', on_input: update_resources }),
                Upgrade({ raw_code: 'Rome', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rora', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Roar', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rosp', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rorb', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'ogre', on_input: update_resources }),
                Upgrade({ raw_code: 'Ropg', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Ropm', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'obar', on_input: update_resources }),
                Upgrade({ raw_code: 'Robs', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rotr', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Robk', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Robf', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'osld', on_input: update_resources }),
                Upgrade({ raw_code: 'Rowd', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Rost', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Rowt', max_lvl: 2, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'obea', on_input: update_resources }),
                Upgrade({ raw_code: 'Roen', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rovs', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rwdm', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rolf', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'otto', on_input: update_resources }),
                Upgrade({ raw_code: 'Rows', max_lvl: 1, on_input: update_resources }),
            br(),
        ];

        var costables = [].concat(units, upgrades);

        var resource_gold   = Resource('ResourceGold.png');
        var resource_lumbre = Resource('ResourceLumber.png');
        var resource_food   = Resource('ResourceSupply.png');

        function update_resources() {
            var resources_used = calculate_costs(costables);
            resource_gold.$set_amount(resources_used.gold_cost);
            resource_lumbre.$set_amount(resources_used.lumber_cost);
            resource_food.$set_amount(resources_used.food_cost);
        }

        var root = document.createElement('div');
        Dom.node_push(root,
            units,
            upgrades,
            br(),
            resource_gold,
            br(),
            resource_lumbre,
            br(),
            resource_food
        );

        return root;
    }

    function Undead() {
        var units = [
            Unit({ raw_code: 'unpl', on_input: update_resources }),
                Unit({ raw_code: 'unp1', on_input: update_resources }),
                Unit({ raw_code: 'unp2', on_input: update_resources }),
                Unit({ raw_code: 'uaco', on_input: update_resources }),
                Unit({ raw_code: 'ugol', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'usep', on_input: update_resources }),
                Unit({ raw_code: 'ugho', on_input: update_resources }),
                Unit({ raw_code: 'ucry', on_input: update_resources }),
                Unit({ raw_code: 'ugar', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'utod', on_input: update_resources }),
                Unit({ raw_code: 'unec', on_input: update_resources }),
                Unit({ raw_code: 'uban', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'uslh', on_input: update_resources }),
                Unit({ raw_code: 'umtw', on_input: update_resources }),
                Unit({ raw_code: 'uabo', on_input: update_resources }),
                Unit({ raw_code: 'uobs', on_input: update_resources }),
                Unit({ raw_code: 'ubsp', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'usap', on_input: update_resources }),
                Unit({ raw_code: 'ushd', on_input: update_resources }),
//             br(),

            Unit({ raw_code: 'ubon', on_input: update_resources }),
                Unit({ raw_code: 'ufro', on_input: update_resources }),
            br(), br(),            

            Unit({ raw_code: 'uaod', on_input: update_resources }),
            Unit({ raw_code: 'utom', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'uzig', on_input: update_resources }),
                Unit({ raw_code: 'uzg1', on_input: update_resources }),
                Unit({ raw_code: 'uzg2', on_input: update_resources }),
            br(), br()
        ];

        var upgrades = [
            Unit({ raw_code: 'ugrv', on_input: update_resources }),
                Upgrade({ raw_code: 'Rume', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Ruar', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rura', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rucr', max_lvl: 3, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'unpl', on_input: update_resources }),
                Upgrade({ raw_code: 'Rupm', max_lvl: 1, on_input: update_resources }), 
            br(),

            Unit({ raw_code: 'usep', on_input: update_resources }),
                Upgrade({ raw_code: 'Ruac', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rugf', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rubu', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Ruwb', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rusf', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'utod', on_input: update_resources }),
                Upgrade({ raw_code: 'Rune', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Ruba', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Rusm', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rusl', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'uslh', on_input: update_resources }),
                Upgrade({ raw_code: 'Ruex', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rupc', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rusp', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'ubon', on_input: update_resources }),
                Upgrade({ raw_code: 'Rufb', max_lvl: 1, on_input: update_resources }),
            br(),
        ];

        var costables = [].concat(units, upgrades);

        var resource_gold   = Resource('ResourceGold.png');
        var resource_lumbre = Resource('ResourceLumber.png');
        var resource_food   = Resource('ResourceSupply.png');

        function update_resources() {
            var resources_used = calculate_costs(costables);
            resource_gold.$set_amount(resources_used.gold_cost);
            resource_lumbre.$set_amount(resources_used.lumber_cost);
            resource_food.$set_amount(resources_used.food_cost);
        }

        var root = document.createElement('div');
        Dom.node_push(root,
            units,
            upgrades,
            br(),
            resource_gold,
            br(),
            resource_lumbre,
            br(),
            resource_food
        );

        return root;
    }

    function Nightelf() {
        var units = [
            Unit({ raw_code: 'etol', on_input: update_resources }),
                Unit({ raw_code: 'etoa', on_input: update_resources }),
                Unit({ raw_code: 'etoe', on_input: update_resources }),
                Unit({ raw_code: 'ewsp', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'eaom', on_input: update_resources }),
                Unit({ raw_code: 'earc', on_input: update_resources }),
                Unit({ raw_code: 'esen', on_input: update_resources }),
                Unit({ raw_code: 'ebal', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'eaow', on_input: update_resources }),
                Unit({ raw_code: 'edot', on_input: update_resources }),
                Unit({ raw_code: 'ehip', on_input: update_resources }),
                Unit({ raw_code: 'ehpr', on_input: update_resources }),
                Unit({ raw_code: 'efdr', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'eaoe', on_input: update_resources }),
                Unit({ raw_code: 'edry', on_input: update_resources }),
                Unit({ raw_code: 'edoc', on_input: update_resources }),
                Unit({ raw_code: 'emtg', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'edos', on_input: update_resources }),
                Unit({ raw_code: 'echm', on_input: update_resources }),
            br(), br(),

            Unit({ raw_code: 'eate', on_input: update_resources }),
            Unit({ raw_code: 'emow', on_input: update_resources }),
            Unit({ raw_code: 'eden', on_input: update_resources }),
            br(),

            Unit({ raw_code: 'etrp', on_input: update_resources }),
            br(), br()
        ];

        var upgrades = [
            Unit({ raw_code: 'edob', on_input: update_resources }),
                Upgrade({ raw_code: 'Resm', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rema', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Resw', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rerh', max_lvl: 3, on_input: update_resources }),
                Upgrade({ raw_code: 'Rews', max_lvl: 1, on_input: update_resources }),
//                 Upgrade({ raw_code: 'Reuv', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'etol', on_input: update_resources }),
                Upgrade({ raw_code: 'Renb', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Repm', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'eaom', on_input: update_resources }),
                Upgrade({ raw_code: 'Reib', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Remk', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Resc', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Remg', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Repb', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'eaow', on_input: update_resources }),
                Upgrade({ raw_code: 'Redt', max_lvl: 2, on_input: update_resources }),
                Upgrade({ raw_code: 'Reec', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Reht', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'eaoe', on_input: update_resources }),
                Upgrade({ raw_code: 'Resi', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Redc', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rers', max_lvl: 1, on_input: update_resources }),
                Upgrade({ raw_code: 'Rehs', max_lvl: 1, on_input: update_resources }),
            br(),

            Unit({ raw_code: 'edos', on_input: update_resources }),
                Upgrade({ raw_code: 'Recb', max_lvl: 1, on_input: update_resources }),
            br(),
        ];

        var costables = [].concat(units, upgrades);

        var resource_gold   = Resource('ResourceGold.png');
        var resource_lumbre = Resource('ResourceLumber.png');
        var resource_food   = Resource('ResourceSupply.png');

        function update_resources() {
            var resources_used = calculate_costs(costables);
            resource_gold.$set_amount(resources_used.gold_cost);
            resource_lumbre.$set_amount(resources_used.lumber_cost);
            resource_food.$set_amount(resources_used.food_cost);
        }

        var root = document.createElement('div');
        Dom.node_push(root,
            units,
            upgrades,
            br(),
            resource_gold,
            br(),
            resource_lumbre,
            br(),
            resource_food
        );

        return root;
    }    


    function Unit(args) {
        var image_extension = '.png';
        var image_size      = 48;

        var raw_code = args.raw_code;
        var on_input = args.on_input;

        var root = document.createElement('span');
        Dom.node_apply_style(root, {
            paddingRight: '5px',
        });

        var unit_img    = document.createElement('img');
        Dom.node_apply_style(unit_img, styles.icon);
        unit_img.src    = 'icons/' + raw_code + image_extension;
        unit_img.width  = image_size;
        unit_img.height = image_size;

        var unit_input = document.createElement('input');
        unit_input.$raw_code = raw_code;
        Dom.node_apply_style(unit_input, {
            width: '36px',
            textAlign: 'center',
        });
        Dom.node_apply_style(unit_input, styles.input);
        Dom.node_apply_style(unit_input, styles.input_empty);

//         unit_input.placeholder = '1-100';
        unit_input.oninput = function() {
            var value = unit_input.value;

            var max_unit_count = 100;
            var unit_count;
            if (!/^[1-9][0-9]*$/.test(value)) {
                unit_input.value = '';
                Dom.node_apply_style(unit_input, styles.input_empty);
                unit_count = 0;
            }
            else {
                Dom.node_apply_style(unit_input, styles.input_filled);
                unit_count = parseInt(value, 10);
                if (unit_count < 1) {
                    unit_count = 1;
                }
                if (unit_count > max_unit_count) {
                    unit_count = 100;
                }
                unit_input.value = unit_count;
            }

//             calculate_costs();
            on_input();
        };

        Dom.node_push(root, unit_img, unit_input);

        root.$type = 'Unit';
        return root;
    }

     function Upgrade(args) {
        var image_extension = '.png';
        var image_size      = 48;

        var raw_code = args.raw_code;
        var max_lvl = args.max_lvl;
        var on_input = args.on_input;

        var root = document.createElement('span');
        Dom.node_apply_style(root, {
            paddingRight: '5px',
        });
        root.$upgrade_id = raw_code;

        var upgrade_img     = document.createElement('img');
        upgrade_img.src     = 'icons/upgrades/' + raw_code + '-1' + image_extension;
        upgrade_img.width   = image_size;
        upgrade_img.height  = image_size;
        Dom.node_apply_style(upgrade_img, styles.icon);


        var upgrade_input = document.createElement('input');
        Dom.node_apply_style(upgrade_input, {
            width: '25px',
            textAlign: 'center',
        });
        Dom.node_apply_style(upgrade_input, styles.input);
        Dom.node_apply_style(upgrade_input, styles.input_empty);
        upgrade_input.placeholder = '1-' + max_lvl; //'int';

        var range = [];
        for (var i = 1; i <= max_lvl; i++) { range.push(i); }
        upgrade_input.title = 'upgrade : integer(' + range.join(', ') + ')';

        upgrade_input.oninput = function() {
            var value = upgrade_input.value;
            value = value.substr(upgrade_input.selectionStart - 1, 1);

            var upgrade_lvl;
            if (!/^[1-9][0-9]*$/.test(value)) {
                upgrade_input.value = '';
                Dom.node_apply_style(upgrade_input, styles.input_empty);
                upgrade_lvl = 1;
            }
            else {
                Dom.node_apply_style(upgrade_input, styles.input_filled);
                upgrade_lvl = parseInt(value, 10);
                if (! (1 <= upgrade_lvl && upgrade_lvl <= max_lvl) ) {
                    upgrade_input.value = '';
                    upgrade_lvl = 1;
                }
                else {
                    upgrade_input.value = value;
                }
            }
            upgrade_img.src = upgrade_img.src
                .replace(/-\d(.*)$/, '-' + upgrade_lvl + '$1');

//             calculate_costs();
            on_input();
        };

        Dom.node_push(root, upgrade_img, upgrade_input);

        root.$type = 'Upgrade';
        return root;
    }

    function Resource(icon) {
        var root = document.createElement('span');

        var resource_img  = document.createElement('img');
        resource_img.src  = 'icons/resources/' + icon;
        Dom.node_apply_style(resource_img, styles.icon);

        var resource_amount = document.createElement('span');
        resource_amount.textContent = '0';

        Dom.node_push(root, resource_img, resource_amount);

        root.$set_amount = function(amount) {
            resource_amount.textContent = ''+amount;
        };

        return root;
    }

    function calculate_costs(costables) {
        var gold_cost = 0;
        var lumber_cost = 0;
        var food_cost = 0;

        for (var costable_index = 0;
            costable_index < costables.length;
            costable_index++
            ) {
            var costable = costables[costable_index];
            if (costable.$type === 'Unit') {
                var unit = costable;
                var input = unit.childNodes[1];
                var unit_costs = wc3.unit[input.$raw_code];
                var unit_count = input_get_value(input);
                gold_cost   += unit_count * unit_costs.gold_cost;
                lumber_cost += unit_count * unit_costs.lumber_cost;
                food_cost   += unit_count * unit_costs.food_cost;
            }
            else if (costable.$type === 'Upgrade') {
                var upgrade = costable;
                if (upgrade.childNodes[1].value !== '') {
                    var upgrade_cost = upgrade_abs_cost_for_level(
                        upgrade.$upgrade_id,
                        parseInt(upgrade.childNodes[1].value, 10)
                    );
                    gold_cost += upgrade_cost.gold;
                    lumber_cost += upgrade_cost.lumber;
                }
            }
        }

        return {
            gold_cost: gold_cost,
            lumber_cost: lumber_cost,
            food_cost: food_cost
        };
    }

    function upgrade_cost_for_level(upgrade_id, level) {
        var upgrade = wc3.upgrade[upgrade_id];
        var res = {
            gold:   upgrade.gold_base   + (level - 1) * upgrade.gold_increment,
            lumber: upgrade.lumber_base + (level - 1) * upgrade.lumber_increment,
        };
        return res;
    }

    function upgrade_abs_cost_for_level(upgrade_id, level) {
        var cost_for_level = [NaN];
        for (var i = 1; i <= level; i++) {
            cost_for_level.push(upgrade_cost_for_level(upgrade_id, i));
        }

        var res = { gold: 0, lumber: 0 };
        for (var i = 1; i <= level; i++) {
            res.gold   += cost_for_level[i].gold;
            res.lumber += cost_for_level[i].lumber;
        }

        return res;
    }

    function input_get_value(input) {
//         if (!input_only_numbers(input)) {
//             input.value = '';
//             return 0;
//         }
        var n = parseInt(input.value, 10);
        n = isNaN(n) ? 0 : n;
//         n =    n < 0 ? 0 : n;
        return n;
    }

    function input_only_numbers(input) {
        if (/^[1-9][0-9]*$/.test(input.value)) {
            return true;
        }
        return false;
    }

    function br() { return document.createElement('br'); }

    console.log('THEND =)');
}}());