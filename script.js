// Random Number Generator
function randNumGenerator(num){
    return Math.floor(Math.random() * num);
}

//Arrays to iterate over
const breakfastLunchDinner = {
    breakfast: ['Cereal','Toast','Porridge','Sausages'],
    lunch: ['A Sandwich','Salad','Some Fries','A Burrito'],
    dinner: ['Curry','Pizza','Chinese','A Kebab','Pasta'],
}
//output as blank array
let planForTheDay = [];

//iterate over the array and return whichever item is at the randomly generated position, does this 3 times, once for each array.
for (let food in breakfastLunchDinner) {
    let foodItem = randNumGenerator(breakfastLunchDinner[food].length)

    switch(food) {
        case 'breakfast':
            planForTheDay.push(`For breakfast you should have "${breakfastLunchDinner[food][foodItem]}".`)
        break

        case 'lunch':
            planForTheDay.push(`For lunch you should have "${breakfastLunchDinner[food][foodItem]}." `)
        break

        case 'dinner':
            planForTheDay.push(`For dinner you should have "${breakfastLunchDinner[food][foodItem]}." `)
        break

        default:
            planForTheDay.push('Error')

    }

}
//joins it all together as one big string
    function joinBLD(plan){

        const formatted = planForTheDay.join('\n')
        console.log(formatted)

    }
//calls the join function which logs the output to the console.
joinBLD(planForTheDay);