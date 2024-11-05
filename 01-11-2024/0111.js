// Createing Header of the website.
const header = document.createElement('header')
header.style.textAlign = 'center'
header.style.padding = '30px'
header.style.backgroundColor = 'Black'
header.style.color = 'white'
header.innerHTML = 'E-COMMERCE WATCHES WEBSITE'
document.body.appendChild(header)

// Create Main Container for Cards 
const Container = document.createElement('div')
Container.style.display = 'flex'
Container.style.flexWrap = 'wrap'
Container.style.justifyContent = 'center'
Container.style.margin = '20px'
document.body.appendChild(Container)

// Product Data
const products = [
    {
        image: 'https://th.bing.com/th/id/OIP.75HkYXhxV0gpO8qwT0Wf7wHaHa?w=216&h=216&c=7&r=0&o=5&pid=1.7',
        title: 'WATCH 1',
        description: 'Diamond Ladies Watch Women Quartz Watches Silver',
        price: '$50.18'
    },
    {
        image: 'https://th.bing.com/th/id/OIP.KBRRbcOJOZi8q1CqKJG-5QHaHa?rs=1&pid=ImgDetMain',
        title: 'WATCH 2',
        description: 'Luxury Casual Women Quartz Watch',
        price: '$99.00'
    },
    {
        image: 'https://th.bing.com/th/id/OIP.oXJCP8sn9WivIOzw24l-lQAAAA?w=194&h=194&c=7&r=0&o=5&pid=1.7',
        title: 'WATCH 3',
        description: 'Diamond Women Watch Ladys Elegant Bracelet',
        price: '$79.99'
    },
    {
        image: 'https://th.bing.com/th/id/OIP.BiBUG0gz1w5cKuUA-1N6LgHaFj?rs=1&pid=ImgDetMain',
        title: 'WATCH 4',
        description: 'Sliver Diamond Women Watch Elegant Bracelet',
        price: '$69.99'
    }
]

products.forEach(product => {
    const card = document.createElement('div')
    
    card.style.border = '1px solid #ddd'
    card.style.borderRadius = '8px'
    card.style.width = '200px'
    card.style.margin = '10px'
    card.style.padding = '10px'
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'
    card.style.backgroundColor = '#fff'
    card.style.transition = 'transform 0.2s, box-shadow 0.2s'
    card.style.overflow = 'hidden'

    // Add hover effect
    card.onmouseover = function() {
        card.style.transform = 'scale(1.05)'
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
    }
    card.onmouseout = function() {
        card.style.transform = 'scale(1)'
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)'
    }

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width: 100%; border-radius: 8px 8px 0 0;">
        <h2 style="font-size: 1.5em; margin: 10px 0;">${product.title}</h2>
        <p style="font-size: 1em; color: #555;">${product.description}</p>
        <p style="font-weight: bold; color: #007bff;">${product.price}</p>
        <button style="
            background-color: #007bff; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            padding: 10px; 
            font-size: 1em; 
            transition: background-color 0.3s;">
            Buy Now
        </button>
    `

    // Add button hover effect
    const button = card.querySelector('button')
    button.onmouseover = function() {
        button.style.backgroundColor = 'lightblue'
    }
    button.onmouseout = function() {
        button.style.backgroundColor = 'blue'
    }

    Container.appendChild(card)
})

// Createing footer of the website.
const footer = document.createElement('footer')
footer.style.textAlign = 'center'
footer.style.padding = '20px'
footer.style.backgroundColor = 'Black'
footer.style.color = 'white'
footer.style.fontSize = '1em'
footer.innerHTML = '&copy; E-COMMERCE WATCHES WEBSITE - 2024 . All RIGHTS RESERVED.'
document.body.appendChild(footer)