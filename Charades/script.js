const prompts = {
    animals: ["Cat", "Dog", "Elephant", "Monkey", "Butterfly", "Kangaroo", "Snake", "Lion", "Horse", "Penguin", "Frog", "Giraffe", "Duck", "Chicken", "Bear", "Tiger", "Rabbit", "Fish", "Cow", "Sheep"],
    people: ["Superhero", "Doctor", "Chef", "Pirate", "Princess", "Astronaut", "Magician", "Teacher", "Farmer", "Firefighter"],
    actions: ["Brushing teeth", "Eating ice cream", "Flying a kite", "Sleeping", "Jumping rope", "Swimming", "Washing hands", "Clapping hands", "Riding a bike", "Blowing up a balloon"],
    objects: ["Balloon", "Airplane", "Robot", "Teddy bear", "Backpack", "Toy car", "Umbrella", "Hat", "Sunglasses", "Microphone"],
    songs: ["Baby Shark", "Wheels on the Bus", "Head, Shoulders, Knees, and Toes", "Twinkle Twinkle Little Star", "Happy Birthday Song", "Dancing like a ballerina", "Playing air guitar", "Jumping like in a dance party", "Marching like a soldier", "Doing the chicken dance"],
    food: ["Eating a banana", "Drinking from a cup", "Licking a lollipop", "Cooking pancakes", "Cutting a watermelon", "Baking cookies", "Eating spaghetti", "Making a sandwich", "Peeling an orange", "Blowing on hot soup"],
    nature: ["Rainbow", "Raindrop falling", "Sun shining", "Blowing wind", "Snow falling", "Plant growing", "Picking flowers", "Digging a hole", "Splashing in puddles", "Looking at stars"],
    holidays: ["Opening a present", "Hanging stockings", "Decorating a tree", "Waving a flag", "Hunting for Easter eggs", "Wearing a Halloween costume", "Lighting fireworks", "Wrapping a gift", "Eating holiday cookies", "Playing with sparklers"],
    fantasy: ["Flying like a fairy", "Riding a dragon", "Waving a magic wand", "Sneaking like a ninja", "Roaring like a dragon", "Riding a unicorn", "Building a sandcastle", "Pretending to be invisible", "Shooting webs like Spider-Man", "Walking like a robot"]
};

function generatePrompt() {
    const category = document.getElementById("category").value;
    const options = prompts[category];
    const randomIndex = Math.floor(Math.random() * options.length);
    document.getElementById("prompt").innerText = options[randomIndex];
}