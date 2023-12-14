function dropdown() {
axios.get("https://fakestoreapi.com/products")
    .then((response) => {
        console.log(response.data)
        function addCard() {
            response.data.forEach((item) => {
                // console.log(item.image)
                const template = document.getElementById('card-template').content.cloneNode(true);
                template.querySelector('.card-image').setAttribute("src", item.image);
                template.querySelector('.card-title').innerText = item.title;
                template.querySelector('.card-price').innerText = item.price;
                template.querySelector('.card-text').innerText = item.description;

                document.querySelector('#product-list').appendChild(template)
            })
        }

        function getData() {
            return new Promise(resolve => {
                setTimeout(function() {
                    resolve()
                }, 1000)
            })
        }

        // getData().then((data) => addCard(data))
        const mensLink = document.getElementById('mens-clothing')
        const womensLink = document.getElementById('womens-clothing')
        const jewelryLink = document.getElementById('jewelry')
        const electronicsLink = document.getElementById('electronics')
        console.log(mensLink)

        // const dropdownMenu = document.getElementById('dropdown-menu')
        // function dropdown() {
            response.data.forEach((item) => {
                if (item.category === "men's clothing" && mensLink) {
                    mens = item
                    console.log(item)
                    const template = document.getElementById('card-template').content.cloneNode(true);
                    template.querySelector('.card-image').setAttribute("src", item.image);
                    template.querySelector('.card-title').innerText = item.title;
                    template.querySelector('.card-price').innerText = item.price;
                    template.querySelector('.card-text').innerText = item.description;

                    
                    document.querySelector('#product-list').appendChild(template)
                    // getData().then((data) => addCard(data))
                } else if (item.category === "women's clothing" && womensLink) {
                    // console.log(item)
                    const template = document.getElementById('card-template').content.cloneNode(true);
                    template.querySelector('.card-image').setAttribute("src", item.image);
                    template.querySelector('.card-title').innerText = item.title;
                    template.querySelector('.card-price').innerText = item.price;
                    template.querySelector('.card-text').innerText = item.description;
                    // document.querySelector('#product-list').removeChild()
                    document.querySelector('#product-list').appendChild(template)
                }
                if (item.category === "jewelry" && jewelryLink) {
                    // console.log(item)
                    const template = document.getElementById('card-template').content.cloneNode(true);
                    template.querySelector('.card-image').setAttribute("src", item.image);
                    template.querySelector('.card-title').innerText = item.title;
                    template.querySelector('.card-price').innerText = item.price;
                    template.querySelector('.card-text').innerText = item.description;

                    document.querySelector('#product-list').appendChild(template)
                }
                if (item.category === "electronics" && electronicsLink) {
                    // console.log(item)
                    const template = document.getElementById('card-template').content.cloneNode(true);
                    template.querySelector('.card-image').setAttribute("src", item.image);
                    template.querySelector('.card-title').innerText = item.title;
                    template.querySelector('.card-price').innerText = item.price;
                    template.querySelector('.card-text').innerText = item.description;

                    document.querySelector('#product-list').appendChild(template)
                }
            })
        // }
        // dropdown()
        
    })

}
