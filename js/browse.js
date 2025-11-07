const list = document.querySelector('.list');
const recipes_details = document.querySelector('.recipes-details');
// import { recipes } from './data';
const recipes = [
	{
		id: 1,
		image:
			'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcleananddelicious.com%2Fwp-content%2Fuploads%2F2022%2F07%2FMediterranean-Chickpea-Salad-F-scaled.jpg&f=1&nofb=1&ipt=75be1c27c7f93e012491a1387cff47bc66537abc3c463001cbedcf76e62dd7b6',
		title: 'Mediterranean Chickpea Salad',
		description:
			'A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '0 min',
		url: '/recipe/mediterranean-chickpea-salad',
	},
	{
		id: 2,
		image:
			'https://www.freepik.com/recipe-images/avocado-tomato-wholegrain-toast.jpg',
		title: 'Avocado & Tomato Wholegrain Toast',
		description:
			'Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.',
		servings: 1,
		prepTime: '5 mins',
		cookTime: '5 mins',
		url: '/recipe/avocado-tomato-wholegrain-toast',
	},
	{
		id: 3,
		image:
			'https://www.freepik.com/recipe-images/one-pan-lemon-garlic-salmon.jpg',
		title: 'One-Pan Lemon Garlic Salmon with Asparagus',
		description:
			'A 15-minute weeknight dinner of flaky salmon and tender asparagus.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '12 mins',
		url: '/recipe/one-pan-lemon-garlic-salmon',
	},
	{
		id: 4,
		image:
			'https://www.freepik.com/recipe-images/creamy-vegan-tomato-pasta.jpg',
		title: 'Creamy Vegan Tomato Pasta',
		description:
			'Rich and comforting pasta dish with a dairy-free tomato cream sauce.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/creamy-vegan-tomato-pasta',
	},
	{
		id: 5,
		image: 'https://www.freepik.com/recipe-images/quick-chicken-stir-fry.jpg',
		title: 'Quick Chicken Stir-Fry',
		description:
			'Flavorful chicken and mixed vegetables in a savory soy-ginger sauce.',
		servings: 3,
		prepTime: '15 mins',
		cookTime: '10 mins',
		url: '/recipe/quick-chicken-stir-fry',
	},
	{
		id: 6,
		image: 'https://www.freepik.com/recipe-images/spicy-black-bean-burgers.jpg',
		title: 'Spicy Black Bean Burgers',
		description:
			'Homemade veggie burgers with a kick, perfect for grilling or pan-frying.',
		servings: 4,
		prepTime: '15 mins',
		cookTime: '15 mins',
		url: '/recipe/spicy-black-bean-burgers',
	},
	{
		id: 7,
		image: 'https://www.freepik.com/recipe-images/easy-shrimp-tacos.jpg',
		title: 'Easy Shrimp Tacos with Slaw',
		description:
			'Fast and fresh shrimp tacos topped with a crisp cabbage slaw.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '8 mins',
		url: '/recipe/easy-shrimp-tacos',
	},
	{
		id: 8,
		image: 'https://www.freepik.com/recipe-images/spinach-feta-egg-muffins.jpg',
		title: 'Spinach & Feta Egg Muffins',
		description: 'Protein-packed breakfast or snack, great for meal prep.',
		servings: 6,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/spinach-feta-egg-muffins',
	},
	{
		id: 9,
		image: 'https://www.freepik.com/recipe-images/lentil-vegetable-soup.jpg',
		title: 'Hearty Lentil & Vegetable Soup',
		description:
			'Comforting and nutritious soup, packed with vegetables and protein.',
		servings: 6,
		prepTime: '15 mins',
		cookTime: '30 mins',
		url: '/recipe/lentil-vegetable-soup',
	},
	{
		id: 10,
		image:
			'https://www.freepik.com/recipe-images/quick-chicken-quesadillas.jpg',
		title: 'Quick Chicken Quesadillas',
		description:
			'Cheesy and satisfying quesadillas, perfect for a fast lunch or dinner.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '10 mins',
		url: '/recipe/quick-chicken-quesadillas',
	},
	{
		id: 11,
		image:
			'https://www.freepik.com/recipe-images/sweet-potato-black-bean-bowl.jpg',
		title: 'Sweet Potato & Black Bean Bowl',
		description:
			'A vibrant and flavorful plant-based bowl with creamy avocado.',
		servings: 2,
		prepTime: '15 mins',
		cookTime: '25 mins',
		url: '/recipe/sweet-potato-black-bean-bowl',
	},
	{
		id: 12,
		image: 'https://www.freepik.com/recipe-images/garlic-parmesan-broccoli.jpg',
		title: 'Garlic Parmesan Roasted Broccoli',
		description: 'Simple and delicious side dish, crispy and flavorful.',
		servings: 4,
		prepTime: '5 mins',
		cookTime: '15 mins',
		url: '/recipe/garlic-parmesan-broccoli',
	},
	{
		id: 13,
		image:
			'https://www.freepik.com/recipe-images/lemon-herb-chicken-breasts.jpg',
		title: 'Lemon Herb Baked Chicken Breasts',
		description:
			'Juicy and tender chicken breasts, seasoned with fresh herbs and lemon.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/lemon-herb-chicken-breasts',
	},
	{
		id: 14,
		image: 'https://www.freepik.com/recipe-images/caprese-pasta-salad.jpg',
		title: 'Quick Caprese Pasta Salad',
		description:
			'A fresh and light pasta salad with tomatoes, mozzarella, and basil.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/caprese-pasta-salad',
	},
	{
		id: 15,
		image: 'https://www.freepik.com/recipe-images/spicy-peanut-noodles.jpg',
		title: 'Spicy Peanut Noodles with Veggies',
		description: 'Easy and addictive noodles, great served hot or cold.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/spicy-peanut-noodles',
	},
	{
		id: 16,
		image: 'https://www.freepik.com/recipe-images/turkey-lettuce-wraps.jpg',
		title: 'Asian Turkey Lettuce Wraps',
		description:
			'Light and flavorful wraps, perfect for a healthy weeknight meal.',
		servings: 3,
		prepTime: '15 mins',
		cookTime: '10 mins',
		url: '/recipe/turkey-lettuce-wraps',
	},
	{
		id: 17,
		image: 'https://www.freepik.com/recipe-images/chickpea-spinach-curry.jpg',
		title: 'Simple Chickpea & Spinach Curry',
		description: 'A fragrant and hearty vegan curry, quick to make.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/chickpea-spinach-curry',
	},
	{
		id: 18,
		image: 'https://www.freepik.com/recipe-images/tuna-salad-sandwich.jpg',
		title: 'Classic Tuna Salad Sandwich',
		description:
			'A timeless favorite, perfect for a quick and satisfying lunch.',
		servings: 1,
		prepTime: '5 mins',
		cookTime: '0 min',
		url: '/recipe/tuna-salad-sandwich',
	},
	{
		id: 19,
		image: 'https://www.freepik.com/recipe-images/baked-chicken-tenders.jpg',
		title: 'Crispy Baked Chicken Tenders',
		description: 'Healthier take on a classic, great for kids and adults.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/baked-chicken-tenders',
	},
	{
		id: 20,
		image: 'https://www.freepik.com/recipe-images/cucumber-dill-yogurt-dip.jpg',
		title: 'Cucumber Dill Yogurt Dip',
		description: 'Refreshing and creamy dip, perfect with veggies or pita.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '0 min',
		url: '/recipe/cucumber-dill-yogurt-dip',
	},
	{
		id: 21,
		image:
			'https://www.freepik.com/recipe-images/quinoa-salad-with-roasted-veg.jpg',
		title: 'Quinoa Salad with Roasted Vegetables',
		description: 'Healthy and flavorful salad, excellent for meal prep.',
		servings: 4,
		prepTime: '15 mins',
		cookTime: '25 mins',
		url: '/recipe/quinoa-salad-with-roasted-veg',
	},
	{
		id: 22,
		image: 'https://www.freepik.com/recipe-images/breakfast-burrito.jpg',
		title: 'Loaded Breakfast Burrito',
		description:
			'A hearty way to start the day, customizable with your favorite fillings.',
		servings: 1,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/breakfast-burrito',
	},
	{
		id: 23,
		image: 'https://www.freepik.com/recipe-images/pan-seared-cod.jpg',
		title: 'Pan-Seared Cod with Lemon Butter Sauce',
		description: 'Flaky white fish, cooked to perfection with a bright sauce.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '10 mins',
		url: '/recipe/pan-seared-cod',
	},
	{
		id: 24,
		image:
			'https://www.freepik.com/recipe-images/garden-vegetable-omelette.jpg',
		title: 'Garden Vegetable Omelette',
		description: 'A fluffy omelette packed with fresh seasonal vegetables.',
		servings: 1,
		prepTime: '5 mins',
		cookTime: '8 mins',
		url: '/recipe/garden-vegetable-omelette',
	},
	{
		id: 25,
		image: 'https://www.freepik.com/recipe-images/pesto-chicken-sandwich.jpg',
		title: 'Pesto Chicken Sandwich',
		description: 'Grilled chicken with fresh pesto, tomato, and mozzarella.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/pesto-chicken-sandwich',
	},
	{
		id: 26,
		image: 'https://www.freepik.com/recipe-images/chickpea-tuna-salad.jpg',
		title: "Chickpea 'Tuna' Salad (Vegan)",
		description:
			'A plant-based take on tuna salad, great in sandwiches or wraps.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '0 min',
		url: '/recipe/chickpea-tuna-salad',
	},
	{
		id: 27,
		image: 'https://www.freepik.com/recipe-images/simple-pasta-marinara.jpg',
		title: 'Simple Pasta Marinara',
		description:
			'Classic tomato sauce with al dente pasta, a quick comfort meal.',
		servings: 4,
		prepTime: '5 mins',
		cookTime: '15 mins',
		url: '/recipe/simple-pasta-marinara',
	},
	{
		id: 28,
		image: 'https://www.freepik.com/recipe-images/halloumi-veggie-skewers.jpg',
		title: 'Grilled Halloumi & Veggie Skewers',
		description:
			'Salty halloumi cheese with colorful vegetables, perfect for grilling.',
		servings: 3,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/halloumi-veggie-skewers',
	},
	{
		id: 29,
		image: 'https://www.freepik.com/recipe-images/mango-salsa.jpg',
		title: 'Fresh Mango Salsa',
		description: 'Sweet and spicy salsa, excellent with chips or grilled fish.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '0 min',
		url: '/recipe/mango-salsa',
	},
	{
		id: 30,
		image: 'https://www.freepik.com/recipe-images/teriyaki-chicken-bowl.jpg',
		title: 'Quick Teriyaki Chicken Bowl',
		description:
			'Tender chicken in a sweet and savory teriyaki sauce, served over rice.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '15 mins',
		url: '/recipe/teriyaki-chicken-bowl',
	},
	{
		id: 31,
		image: 'https://www.freepik.com/recipe-images/spicy-cucumber-salad.jpg',
		title: 'Spicy Asian Cucumber Salad',
		description: 'Crisp and refreshing salad with a tangy, spicy dressing.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '0 min',
		url: '/recipe/spicy-cucumber-salad',
	},
	{
		id: 32,
		image:
			'https://www.freepik.com/recipe-images/pork-tenderloin-medallions.jpg',
		title: 'Pan-Seared Pork Tenderloin Medallions',
		description: 'Quick-cooking pork medallions with a simple pan sauce.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '15 mins',
		url: '/recipe/pork-tenderloin-medallions',
	},
	{
		id: 33,
		image: 'https://www.freepik.com/recipe-images/chocolate-chia-pudding.jpg',
		title: 'Chocolate Chia Seed Pudding',
		description:
			'Healthy and decadent dessert or breakfast, prepared overnight.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '0 min',
		url: '/recipe/chocolate-chia-pudding',
	},
	{
		id: 34,
		image: 'https://www.freepik.com/recipe-images/thai-green-curry.jpg',
		title: 'Vegetable Thai Green Curry',
		description:
			'A vibrant and aromatic curry, customizable with your favorite veggies.',
		servings: 4,
		prepTime: '15 mins',
		cookTime: '20 mins',
		url: '/recipe/thai-green-curry',
	},
	{
		id: 35,
		image: 'https://www.freepik.com/recipe-images/baked-sweet-potatoes.jpg',
		title: 'Baked Sweet Potatoes with Toppings',
		description:
			'Simple baked sweet potatoes, loaded with savory or sweet toppings.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '45 mins', // Longer cook time but minimal active
		url: '/recipe/baked-sweet-potatoes',
	},
	{
		id: 36,
		image: 'https://www.freepik.com/recipe-images/skillet-sausage-peppers.jpg',
		title: 'Skillet Sausage and Peppers',
		description:
			'An easy one-pan meal with savory sausage and colorful bell peppers.',
		servings: 3,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/skillet-sausage-peppers',
	},
	{
		id: 37,
		image: 'https://www.freepik.com/recipe-images/fruit-yogurt-parfait.jpg',
		title: 'Berry Yogurt Parfait',
		description: 'Layers of creamy yogurt, fresh berries, and crunchy granola.',
		servings: 1,
		prepTime: '5 mins',
		cookTime: '0 min',
		url: '/recipe/fruit-yogurt-parfait',
	},
	{
		id: 38,
		image:
			'https://www.freepik.com/recipe-images/mediterranean-couscous-salad.jpg',
		title: 'Mediterranean Couscous Salad',
		description:
			'Fluffy couscous mixed with fresh vegetables and a lemon dressing.',
		servings: 4,
		prepTime: '15 mins',
		cookTime: '5 mins',
		url: '/recipe/mediterranean-couscous-salad',
	},
	{
		id: 39,
		image: 'https://www.freepik.com/recipe-images/garlic-herb-mushrooms.jpg',
		title: 'Garlic Herb Sautéed Mushrooms',
		description: 'Quick and savory side dish, perfect for any main course.',
		servings: 2,
		prepTime: '5 mins',
		cookTime: '8 mins',
		url: '/recipe/garlic-herb-mushrooms',
	},
	{
		id: 40,
		image: 'https://www.freepik.com/recipe-images/eggplant-parmesan-stack.jpg',
		title: 'Quick Eggplant Parmesan Stacks',
		description: 'A lighter, faster version of the classic Italian dish.',
		servings: 2,
		prepTime: '15 mins',
		cookTime: '20 mins',
		url: '/recipe/eggplant-parmesan-stack',
	},
	{
		id: 41,
		image: 'https://www.freepik.com/recipe-images/spicy-chicken-wraps.jpg',
		title: 'Spicy Chicken & Avocado Wraps',
		description: 'Packed with flavor and satisfying, a great on-the-go meal.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/spicy-chicken-wraps',
	},
	{
		id: 42,
		image: 'https://www.freepik.com/recipe-images/vegetable-fried-rice.jpg',
		title: 'Easy Vegetable Fried Rice',
		description:
			'A quick way to use leftover rice and your favorite vegetables.',
		servings: 3,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/vegetable-fried-rice',
	},
	{
		id: 43,
		image: 'https://www.freepik.com/recipe-images/lemon-ricotta-pancakes.jpg',
		title: 'Lemon Ricotta Pancakes',
		description: 'Light and fluffy pancakes with a hint of lemon.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '15 mins',
		url: '/recipe/lemon-ricotta-pancakes',
	},
	{
		id: 44,
		image: 'https://www.freepik.com/recipe-images/roasted-red-pepper-soup.jpg',
		title: 'Creamy Roasted Red Pepper Soup',
		description: 'Rich and flavorful soup, perfect for a cozy evening.',
		servings: 4,
		prepTime: '10 mins',
		cookTime: '25 mins',
		url: '/recipe/roasted-red-pepper-soup',
	},
	{
		id: 45,
		image: 'https://www.freepik.com/recipe-images/chicken-caesar-salad.jpg',
		title: 'Quick Chicken Caesar Salad',
		description: 'A classic salad with tender chicken and a creamy dressing.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '10 mins',
		url: '/recipe/chicken-caesar-salad',
	},
	{
		id: 46,
		image: 'https://www.freepik.com/recipe-images/shakshuka.jpg',
		title: 'Simple Shakshuka',
		description:
			'Eggs poached in a flavorful tomato sauce, a vibrant breakfast or brunch.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '20 mins',
		url: '/recipe/shakshuka',
	},
	{
		id: 47,
		image: 'https://www.freepik.com/recipe-images/broccoli-cheddar-soup.jpg',
		title: 'Homemade Broccoli Cheddar Soup',
		description: 'A comforting and cheesy soup, surprisingly quick to make.',
		servings: 4,
		prepTime: '15 mins',
		cookTime: '20 mins',
		url: '/recipe/broccoli-cheddar-soup',
	},
	{
		id: 48,
		image: 'https://www.freepik.com/recipe-images/tahini-lemon-dressing.jpg',
		title: 'Creamy Tahini Lemon Dressing',
		description:
			'Versatile dressing perfect for salads, bowls, or roasted vegetables.',
		servings: 6, // for the dressing itself
		prepTime: '5 mins',
		cookTime: '0 min',
		url: '/recipe/tahini-lemon-dressing',
	},
	{
		id: 49,
		image: 'https://www.freepik.com/recipe-images/sheet-pan-fajitas.jpg',
		title: 'Sheet Pan Chicken Fajitas',
		description: 'Easy and delicious fajitas, all cooked on one baking sheet.',
		servings: 4,
		prepTime: '15 mins',
		cookTime: '25 mins',
		url: '/recipe/sheet-pan-fajitas',
	},
	{
		id: 50,
		image: 'https://www.freepik.com/recipe-images/strawberry-spinach-salad.jpg',
		title: 'Strawberry Spinach Salad with Poppy Seed Dressing',
		description:
			'A refreshing and vibrant salad, perfect for spring or summer.',
		servings: 2,
		prepTime: '10 mins',
		cookTime: '0 min',
		url: '/recipe/strawberry-spinach-salad',
	},
];

function ListRecipes() {
	let card = '';
	recipes.forEach((data) => {
		card += `
        <div class="card-item">
					<img
						src="${data.image}"
					/>
					<h4>${data.title}</h4>
					<p>
						${data.description}
					</p>

					<div class="meta">
						<div class="info">
							<i class="fa-solid fa-user"></i>
							<span>servings: ${data.servings}</span>
						</div>
						<div class="info">
							<i class="fa-solid fa-user"></i>
							<span>Prep: ${data.prepTime}</span>
						</div>
						<div class="info">
							<i class="fa-solid fa-cookie"></i>
							<span>Cook: ${data.cookTime}</span>
						</div>
					</div>
					<a class="view" href="./details.html?id=${data.id}">View Recipe</a>
				</div>
				
        
        
        
        `;

		list.innerHTML = card;
	});
}

function showRecipe() {
	let card = '';
	const id = new URLSearchParams(window.location.search).get('id');
	console.log(id);
	const data = recipes.find((data) => data.id === Number(id));
	card = `
    
     <div class="card-item">
					<img
						src="${data.image}"
					/>
					<h4>${data.title}</h4>
					<p>
						${data.description}
					</p>

					<div class="meta">
						<div class="info">
							<i class="fa-solid fa-user"></i>
							<span>servings: ${data.servings}</span>
						</div>
						<div class="info">
							<i class="fa-solid fa-user"></i>
							<span>Prep: ${data.prepTime}</span>
						</div>
						<div class="info">
							<i class="fa-solid fa-cookie"></i>
							<span>Cook: ${data.cookTime}</span>
						</div>
					</div>
					<a class="view" href="./details.html?id=${data.id}">View Recipe</a>
				</div>
    `;

	recipes_details.innerHTML = card;
}

if (window.location.pathname === '/browse.html') {
	ListRecipes();
} else if (window.location.pathname === '/details.html') {
	showRecipe();
}
