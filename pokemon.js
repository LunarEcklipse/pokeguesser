class PokemonGender
{
    constructor(gender_rate, has_gender_differences)
    {
        this.has_gender_differences = has_gender_differences;
        switch(gender_rate)
        {
            case -1:
                this.has_gender = false;
                this.gender_rate = null;
                break;
            default:
                this.has_gender = true;
                this.gender_rate = gender_rate / 8;
                break;
        }
    }

    get_gender_string()
    {
        switch(this.has_gender)
        {
            case true:
                let female_chance = this.gender_rate * 100;
                let male_chance = 100 - female_chance;
                switch(female_chance)
                {
                    case 100:
                        if (Math.floor(Math.random() * 2) === 0) // We use some randomness here to vary the output.
                        {
                            return "This Pokémon can never be male.";
                        }
                        else
                        {
                            return "This Pokémon is always female.";
                        }
                        break;
                    case 0:
                        if (Math.floor(Math.random() * 2) === 0) // We use some randomness here to vary the output.
                        {
                            return "This Pokémon can never be female.";
                        }
                        else
                        {
                            return "This Pokémon is always male.";
                        }
                        break;
                    default:
                        if (Math.floor(Math.random() * 2) === 0) // We use some randomness here to vary the output.
                        {
                            return "This Pokémon has a " + String(male_chance) + "% chance of being male and a " + String(female_chance) + "% chance of being female.";
                        }
                        else
                        {
                            return "This Pokémon has a " + String(female_chance) + "% chance of being female and a " + String(male_chance) + "% chance of being male.";
                        }
                        
                }
                return "This pokemon has a " + String(this.gender_rate * 100) + "% chance of being female.";
                break;
            default:
                return "This Pokémon never has any gender.";
                break;
        }
    }

    get_gender_differences_string()
    {
        switch(this.has_gender_differences)
        {
            case true:
                return "This Pokémon has visible gender differences.";
                break;
            default:
                return "This Pokémon does not have visible gender differences.";
                break;
        }
    }
}

class PokemonBaseStats
{
    constructor(base_hp, base_atk, base_def, base_spatk, base_spdef, base_speed)
    {
        this.base_hp = base_hp;
        this.base_atk = base_atk;
        this.base_def = base_def;
        this.base_spatk = base_spatk;
        this.base_spdef = base_spdef;
        this.base_speed = base_speed;
    }

    get_highest_base_stat()
    {
        let highest_stat = Math.max(this.base_hp, this.base_atk, this.base_def, this.base_spatk, this.base_spdef, this.base_speed);
        switch(highest_stat)
        {
            case this.base_hp:
                return "HP";
                break;
            case this.base_atk:
                return "Attack";
                break;
            case this.base_def:
                return "Defense";
                break;
            case this.base_spatk:
                return "Special Attack";
                break;
            case this.base_spdef:
                return "Special Defense";
                break;
            case this.base_speed:
                return "Speed";
                break;
        }
    }
}

class PokemonTypes
{
    constructor(types)
    {
        switch(types.length)
        {
            case 1:
                this.type1 = types[0];
                this.type2 = null;
                break;
            case 2:
                this.type1 = types[0];
                this.type2 = types[1];
                break;
            default:
                this.type1 = null;
                this.type2 = null;
                break;
        }
    }

    get_type_string_both() // Gets the string for the type. If there is only one type, it will return that type. If there are two types, it will return both types separated by "and".
    {
        switch(this.type2)
        {
            case null:
                return print_type(this.type1);
                break;
            default:
                return print_type(this.type1) + " and " + print_type(this.type2);
                break;
        }
    }

    get_only_one_type() // For harder difficulties.
    {
        switch(this.type2)
        {
            case null:
                return print_type(this.type1);
                break;
            default:
                switch(Math.floor(Math.random() * 2))
                {
                    case 0:
                        return print_type(this.type1);
                        break;
                    case 1:
                        return print_type(this.type2);
                        break;
                }
                break;
        }
    }

    static print_type(type_string) // Capitalizes the string for printing when used in a Type
    {
        return type_string.charAt(0).toUpperCase() + type_string.slice(1);
    }
}

class PokemonSize
{
    constructor(height_cm, weight_kg)
    {
        this.height = height_cm;
        this.weight = weight_kg;
    }

    static convert_cm_to_inches(cm)
    {
        return cm / 2.54;
    }

    static convert_kg_to_lbs(kg)
    {
        return kg * 2.20462;
    }

    get_height_metric(difficulty_integer)
    {
        switch(difficulty_integer)
        {

        }
        return String(this.height) + " cm";
    }

    get_height_imperial(difficulty_integer)
    {
        switch(difficulty_integer)
        {

        }
        convert_cm_to_inches(this.height);
        const feet = Math.floor(inches / 12);
        const remainingInches = Math.round(inches % 12);
        return `${feet}'${remainingInches}"`;
    }

    get_weight_metric(difficulty_integer)
    {
        return String(this.weight) + " kg";
    }

    get_weight_imperial(difficulty_integer)
    {
        return String(convert_kg_to_lbs(this.weight)) + " lbs";
    }
}

class Pokemon
{
    constructor(name, dex_number, color, egg_groups, gender_data, genera, original_generation, growth_rate, is_baby, is_legendary, is_mythical, shape, num_varieties, pokemon_size, official_artwork, base_stats, moves, pokemon_types, pokemon_abilities)
    {
        this.name = name;
        this.dex_num = dex_number, 
        this.color = color;
        this.egg_groups = egg_groups;
        this.gender_data = gender_data;
        this.genera = genera;
        this.original_generation = original_generation;
        this.growth_rate = growth_rate;
        this.is_baby = is_baby;
        this.is_legendary = is_legendary;
        this.is_mythical = is_mythical;
        this.shape = shape;
        this.num_varieties = num_varieties;
        this.pokemon_size = pokemon_size;
        this.official_artwork = official_artwork;
        this.base_stats = base_stats;
        this.pokemon_types = pokemon_types;
        this.moves = moves;
        this.pokemon_abilities = pokemon_abilities;
    }

    get_random_facts(difficulty_integer) // Generates the random fact pool for the pokemon.
    {
        fact_pool = []
        for (let i = 0; i < 12; ++i)
        {
            switch(i)
            {
                case 0: // Type
                    if (difficulty_integer < 2)
                    {
                        let type_string = this.pokemon_types.get_type_string();
                        fact_pool.push("This Pokémon is a " + type_string + " type.");
                        break;
                    }
                    else
                    {
                        let type_string = this.pokemon_types.get_only_one_type();
                        fact_pool.push("This Pokémon has the " + type_string + " type, and possibly one other type.");
                        break;
                    }
                    break;
                case 1: // Pokemon Generation
                    fact_pool.push("This Pokémon was introduced in Generation " + String(this.original_generation) + ".");
                    break;
                case 2: // Egg Groups
                    if (this.egg_groups.length === 0)
                    {
                        fact_pool.push("This Pokémon is not in any egg groups.");
                        break;
                    }
                    else
                    {
                        if (difficulty_integer < 2)
                        {
                            fact_pool.push("This Pokémon is in the " + this.egg_groups[Math.floor(Math.random() * this.egg_groups.length)] + " egg group and possibly one other egg group.");
                            break;
                        }
                        else
                        {
                            switch(this.egg_groups.length)
                            {
                                case 1:
                                    fact_pool.push("This Pokémon is in the " + this.egg_groups[0] + " egg group.");
                                    break;
                                case 2:
                                    fact_pool.push("This Pokémon is in the " + this.egg_groups[0] + " and " + this.egg_groups[1] + " egg groups.");
                                    break;
                            }
                        }
                    }
                    break;
                case 3: // Baby/Legendary/Mythical
                    switch(difficulty_integer)
                    {
                        case 1: // Easy
                            if (this.is_baby)
                            {
                                fact_pool.push("This Pokémon is a baby Pokémon.");
                                break;
                            }
                            else if (this.is_legendary)
                            {
                                fact_pool.push("This Pokémon is a legendary Pokémon.");
                                break;
                            }
                            else if (this.is_mythical)
                            {
                                fact_pool.push("This Pokémon is a mythical Pokémon.");
                                break;
                            }
                            else
                            {
                                fact_pool.push("This Pokémon is not a baby, legendary, or mythical Pokémon.");
                                break;
                            }
                            break;
                        case 2: // Medium
                            if (Math.floor(Math.random() * 3) === 0) // If this is true, we tell them what it isn't.
                            {
                                if (this.is_baby)
                                {
                                    fact_pool.push("This Pokémon is not a legendary or mythical Pokémon.");
                                    break;
                                }
                                else if (this.is_legendary)
                                {
                                    fact_pool.push("This Pokémon is not a baby or mythical Pokémon.");
                                    break;
                                }
                                else if (this.is_mythical)
                                {
                                    fact_pool.push("This Pokémon is not a baby or legendary Pokémon.");
                                    break;
                                }
                                else
                                {
                                    // The possible permutations are [1,2], [1,3], and [2,3]. For the sake of consistency, we always need to make sure these are in order.
                                    switch(Math.floor(Math.random() * 3))
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a legendary or mythical Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a baby or mythical Pokémon.");
                                            break;
                                        case 2:
                                            fact_pool.push("This Pokémon is not a baby or legendary Pokémon.");
                                            break;
                                    }
                                }
                            }
                            else
                            {
                                if (this.is_baby)
                                {
                                    fact_pool.push("This Pokémon is a baby Pokémon.");
                                    break;
                                }
                                else if (this.is_legendary)
                                {
                                    fact_pool.push("This Pokémon is a legendary Pokémon.");
                                    break;
                                }
                                else if (this.is_mythical)
                                {
                                    fact_pool.push("This Pokémon is a mythical Pokémon.");
                                    break;
                                }
                                else
                                {
                                    // The possible permutations are [1,2], [1,3], and [2,3]. For the sake of consistency, we always need to make sure these are in order.
                                    switch(Math.floor(Math.random() * 3))
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a legendary or mythical Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a baby or mythical Pokémon.");
                                            break;
                                        case 2:
                                            fact_pool.push("This Pokémon is not a baby or legendary Pokémon.");
                                            break;
                                    }
                                }
                            }
                            break;
                        case 3: // Hard
                            if (Math.floor(Math.random() * 3) === 0) // We tell them what it is.
                            {
                                if (this.is_baby)
                                {
                                    fact_pool.push("This Pokémon is a baby Pokémon.");
                                    break;
                                }
                                else if (this.is_legendary)
                                {
                                    fact_pool.push("This Pokémon is a legendary Pokémon.");
                                    break;
                                }
                                else if (this.is_mythical)
                                {
                                    fact_pool.push("This Pokémon is a mythical Pokémon.");
                                    break;
                                }
                                else
                                {
                                    switch(Math.floor(Math.random() * 3))
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a baby Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a legendary Pokémon.");
                                            break;
                                        case 2:
                                            fact_pool.push("This Pokémon is not a mythical Pokémon.");
                                            break;
                                    }
                                }
                            }
                            else // We tell them what it isn't.
                            {
                                if (this.is_baby)
                                {
                                    switch(Math.floor(Math.random()) * 2)
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a legendary Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a mythical Pokémon.");
                                            break;
                                    }
                                }
                                else if (this.is_legendary)
                                {
                                    switch(Math.floor(Math.random()) * 2)
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a baby Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a mythical Pokémon.");
                                            break;
                                    }
                                }
                                else if (this.is_mythical)
                                {
                                    switch(Math.floor(Math.random()) * 2)
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a baby Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a legendary Pokémon.");
                                            break;
                                    }
                                }
                                else
                                {
                                    // Pick one at random.
                                    switch(Math.floor(Math.random() * 3))
                                    {
                                        case 0:
                                            fact_pool.push("This Pokémon is not a baby Pokémon.");
                                            break;
                                        case 1:
                                            fact_pool.push("This Pokémon is not a legendary Pokémon.");
                                            break;
                                        case 2:
                                            fact_pool.push("This Pokémon is not a mythical Pokémon.");
                                            break;
                                    }
                                }
                            }
                            break;
                    }
                    break;
                case 4: // Base Color
                    fact_pool.push("This Pokemon's base color is " + this.color + ".");
                    break;
                case 5: // Genera Description
                    fact_pool.push("This Pokémon is known as the " + this.genera + ".");
                    break;
                case 6: // Number of Varieties. On easy and medium, specifies the number of varieties. On hard, specifies if there is only one variety or not.
                    switch(this.num_varieties)
                    {
                        case 1:
                            fact_pool.push("This Pokémon has only one variety.");
                            break;
                        default:
                            if (difficulty_integer < 2)
                            {
                                fact_pool.push("This Pokémon has " + String(this.num_varieties) + " varieties.");
                            }
                            else
                            {
                                fact_pool.push("This Pokémon has more than one variety.");
                            }
                            break;
                    }
                case 7: // Height: Exact on easy, +/- 25% on medium, +/- 50% on hard.
                    break;
                case 8: // Weight: Exact on easy, +/- 25% on medium, +/- 50% on hard.
                    break;
                case 9: // Base Stats
                    break;
                case 10: // Move Pool
                    break;
                case 11: // Gender data
                    break;
                case 12: // Growth rate
                    break;
                case 13: // Shape
                    break;
                case 14: // Abilities
                    break;
            }
        }
        
    }

    select_random_facts(num_facts, difficulty_integer)
    {
        /*
            7 on easy, 5 on medium, 3 on hard
            === POSSIBLE FACTS ===
            /- Type (Both on easy and medium, only one on hard)
            /- Original Generation
            /- Egg Groups (All on easy, only one one medium and hard)
            - Is a Baby
            - Is a Legendary
            - Is a Mythical
            - Base Color
            - Genera Description
            - The number of varieties this pokemon has
            - Height (Exact on easy, range on medium and hard)
            - Weight (Exact on easy, range on medium and hard)
            - 3/2/1 Base Stats (Based on difficulty)
            - Move pool (5 on easy, 4 on medium, 3 on hard)
            - Abilities (3 on easy, 2 on medium, 1 on hard)

        */
        let facts = [];
        for (let i = 0; i < num_facts; ++i)
        {

        }

    }
}

const base_url = "https://pokeapi.co/api/v2/"; // Base URL for the API. All calls will be appended to this URL.

function get_pokemon_count() // Gets the total number of pokemon available to select from the API. Used for random number generation.
{
    let count = 0;
    $.ajax({
        url: base_url + "pokemon-species/",
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data) {
            count = data.count;
        }
    });
    return count;
}

function get_list_of_all_pokemon_names(count) // Fetches all of the pokemon names into a list. This is used for the autocomplete feature.
{
    let pokemon_names = [];
    $.ajax({
        url: base_url + "pokemon-species/?limit=" + String(count),
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data) {
            data.results.forEach((pokemon) => {
                pokemon_names.push(pokemon.name);
            });
        }
    });
    return pokemon_names;
}

function get_random_pokemon(num_available)
{
    let dex_num = Math.ceil(Math.random() * num_available); // Picks a random number between 1 and whatever the pokemon is. Because it uses an API it should automatically update whenever more are made.
    let pokemon = undefined;
    $.ajax({
        url: base_url + "pokemon-species/" + String(dex_num),
        type: "GET",
        dataType: "json",
        async: false,
        success: function(species_data)
        {
            let name = species_data.name;
            let color = species_data.color.name;
            let egg_groups = [];
            species_data.egg_groups.forEach((egg_group) => {
                egg_groups.push(egg_group.name);
            });
            let gender_data = new PokemonGender(species_data.gender_rate, species_data.has_gender_differences)
            let genera = undefined;
            species_data.genera.forEach((genus) => {
                if (genus.language.name === "en")
                {
                    genera = genus.genus;
                }
            });
            let original_generation = get_pokemon_generation(species_data.generation.url);
            let growth_rate = species_data.growth_rate.name;
            let is_baby = species_data.is_baby;
            let is_legendary = species_data.is_legendary;
            let is_mythical = species_data.is_mythical;
            let shape = species_data.shape.name;
            let num_varieties = species_data.varieties.length;
            
            let game_data = get_pokemon_game_data(name);
            let abilities = [];
            game_data.abilities.forEach((ability) => {
                abilities.push(get_pokemon_ability(ability.ability.url));
            });
            let height_cm = game_data.height * 10; // Original measures in decameters, so we convert to cm.
            let weight_kg = game_data.weight / 10; // Original measures in hectograms, so we convert to kg.
            let pokemon_size = new PokemonSize(height_cm, weight_kg);
            let official_artwork = game_data.sprites.other["official-artwork"].front_default;
            let pokemon_types = [];
            game_data.types.forEach((type) => {
                pokemon_types.push(type.type.name);
            });
            pokemon_types = new PokemonTypes(pokemon_types);
            let base_stats = new PokemonBaseStats(game_data.stats[0].base_stat, game_data.stats[1].base_stat, game_data.stats[2].base_stat, game_data.stats[3].base_stat, game_data.stats[4].base_stat, game_data.stats[5].base_stat);
            let move_urls = []; // We only need to keep 3 moves at random as clues, so we only request those three.
            game_data.moves.forEach((move) => {
                move_urls.push(move.move.url);
            });
            move_urls = move_urls.sort(() => 0.5 - Math.random()).slice(0, 5); // Randomly sort the array and then take the first three elements.
            let pokemon_moves = [];
            move_urls.forEach((url) => {
                pokemon_moves.push(get_pokemon_move(url));
            });
            pokemon = new Pokemon(name, dex_num, color, egg_groups, gender_data, genera, original_generation, growth_rate, is_baby, is_legendary, is_mythical, shape, num_varieties, pokemon_size, official_artwork, base_stats, pokemon_moves, pokemon_types, abilities);
        }
    });
    return pokemon;
}

function get_pokemon_game_data(name) // Gets game-specific data of a pokemon. This includes the pokemon's abilities, types, and egg groups.
{   
    let out = undefined;
    $.ajax({
        url: base_url + "pokemon/" + name,
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data)
        {
            out = data;
        }
    });
    return out;
}

function get_pokemon_generation(url)
{
    let out = undefined;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data)
        {
            data.names.forEach((name) => {
                if (name.language.name === "en")
                {
                    out = name.name;
                }
            })
        }
    });
    return out;
}

function get_pokemon_ability(url) // Returns a string with the ability name
{
    let name_out = null;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data)
        {
            out = data;
            data.names.forEach((name) => {
                if (name.language.name === "en")
                {
                    name_out = name.name;
                }
            })
        }
    });
    return name_out;
}

function get_pokemon_move(url)
{
    let move_out = null;
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        async: false,
        success: function(data)
        {
            data.names.forEach((name) => {
                if (name.language.name === "en")
                {
                    move_out = name.name;
                }
            });
        }
    });
    return move_out;
}