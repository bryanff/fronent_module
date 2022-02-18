const template = document.createElement("template");
template.innerHTML = `
    <style>
        h1 {
            font-size: 18px;
            text-align: center;
            font-family: monospace;
        }
        .author-card {
            display:flex;
            flex-wrap: wrap;
            background-color: yellow;
            margin: 20px;
        }
        .author-card__photo{
            flex:1;
            // width:200px;
            // height:200px;
            background-color: blue;
        }
        .author-card__info{
            flex:2;
            background-color:#ffffff;
            text-align: center;
        }
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center center;
        }
        button {
            margin :10px;
        }
        .info {
            display:block;
            padding:15px;
            font-size: 12px;
            text-align:left;
        }
    </style>

    <div class="author-card">
        <div class="author-card__photo">
            <img src="">
        </div>
        <div class="author-card__info">
            <h1></h1>
            <slot name="info" class="info"></slot>
            <button id="see_posts">See posts</button>
        </div>
    </div>
`;

class AuthorCard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('photo');
    } 
    
    seePost(){
        alert('Redirecting to posts');
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#see_posts')
            .addEventListener('click', () => this.seePost());
    }
}

window.customElements.define('author-card', AuthorCard);
