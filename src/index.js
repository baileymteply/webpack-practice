import './styles/index.scss'

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironINgot: 1,
    refinedMoonstone: 4,
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoodnstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);