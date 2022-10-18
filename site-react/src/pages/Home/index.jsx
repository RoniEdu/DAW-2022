import './style.class';

export function HomePage(){
    return(
        <div id="home-page">
            <div class="container">

<section id="banner">
    <div class="banner-content">
        <h1>Lugar exato para você realizar os seus sonhos</h1>
        <h3>Nós oferecemos um serviço completo de venda, locação e compra</h3>
    </div>
    <div class="banner-filter">
        <div class="filter-fields">
            
            <form>
                <select>
                    <option value="venda">Venda</option>
                    <option value="locacao">Locação</option>
                </select>

                <select>
                    <option>Tipo Imóvel</option>
                    <option value="apto">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="sobrado">Sobrado</option>
                    <option value="terreno">Terreno</option>
                </select>

                <select>
                    <option>Cidade</option>
                    <option value="coronel">Coronel Vivida</option>
                    <option value="beltrao">Francisco Beltrão</option>
                    <option value="pato">Pato Branco</option>
                    <option value="saudade">Saudade do Iguaçu</option>
                </select>

                <select>
                    <option>Bairro</option>
                    <option value="brasilia">Brasilia</option>
                    <option value="centro">Centro</option>
                    <option value="lasalle">La Salle</option>
                    <option value="pinheiro">Pinheiros</option>
                </select>
            </form>

        </div>

        <div class="filter-result">
            <p class="result-value">26</p>
            <p class="result-label">Imóveis</p>
            <button>Filtrar</button>
        </div>
    </div>
</section>

<section id="cards">
    <h2>Imóveis disponíveis</h2>

    <div class="cards-content">

        <div class="card">
            <img src="./assets/img/thumb1.png" alt="Casa 1" />
            <div class="card-content">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                    voluptates eligendi recusandae consequuntur non ullam fugiat.Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.</p>
                     
                <div class="card-price">
                   <p>R$ 900.000,00</p> 
                </div>
            </div>
        </div>

        <div class="card">
            <img src="./assets/img/thumb2.png" alt="Casa 2" />
            <div class="card-content">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                <div class="card-price">
                   <p>R$ 900.000,00</p> 
                </div>
            </div>
        </div>

        <div class="card">
            <img src="./assets/img/thumb3.png" alt="Casa 3" />
            <div class="card-content">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae.</p>
                <div class="card-price">
                   <p>R$ 900.000,00</p> 
                </div>
            </div>
        </div>

        <div class="card">
            <img src="./assets/img/thumb4.png" alt="Casa 4" />
            <div class="card-content">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                <div class="card-price">
                   <p>R$ 900.000,00</p> 
                </div>
            </div>
        </div>

        <div class="card">
            <img src="./assets/img/thumb5.png" alt="Casa 5" />
            <div class="card-content">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                <div class="card-price">
                   <p>R$ 900.000,00</p> 
                </div>
            </div>
        </div>

        <div class="card">
            <img src="./assets/img/thumb6.png" alt="Casa 6" />
            <div class="card-content">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Atque veniam explicabo qui eius? Aspernatur officiis sed nam quae. Mollitia itaque, facere corporis eaque
                    voluptates eligendi recusandae consequuntur non ullam fugiat.</p>
                <div class="card-price">
                   <p>R$ 900.000,00</p> 
                </div>
            </div>
        </div>

    </div>
</section>

<section id="reasons">
    <h2>Por que nos Escolher?</h2>

    <div class="reasons-content">

        <div class="reason">
            <p class="reason-value">+1000</p>
            <p class="reason-label">Imóveis</p>
        </div>

        <div class="reason">
            <p class="reason-value">+500</p>
            <p class="reason-label">Clientes Felizes</p>
        </div>

        <div class="reason">
            <p class="reason-value">+50</p>
            <p class="reason-label">Premiações</p>
        </div>

        <div class="reason">
            <p class="reason-value">+100</p>
            <p class="reason-label">Especialistas</p>
        </div>

    </div>
</section>

<section id="specialists">
    <h2>Converse com um Especialista</h2>
    <div class="specialists-content">
        
        <div class="specialist">
            <h5>Tutu Williams</h5>
            <p>London</p>
            <p class="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!</p>
        </div>

        <div class="specialist">
            <h5>Mark Zion</h5>
            <p>New York City</p>
            <p class="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!</p>
        </div>

        <div class="specialist">
            <h5>Essien Crest</h5>
            <p>Berlin</p>
            <p class="specialist-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium error, labore odio facilis quasi quaerat debitis qui fugit pariatur neque voluptatibus consequatur similique hic saepe perspiciatis tempore, delectus beatae eligendi!</p>
        </div>
        
    </div>
</section>

<section id="values">
    <h2>Que é a Imobiliária Unimater?</h2>

    <div class="values-container">
        <img src="./assets/img/place-company.png" alt="Foto da firma" />
        
        <div class="values-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos dolores necessitatibus, blanditiis corporis veritatis impedit velit temporibus mollitia hic sed fugit at vitae non exercitationem rem corrupti nostrum officia.</p>

            <p>Neque eveniet fugiat at deserunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero esse doloremque perferendis! Culpa earum reiciendis repudiandae, officiis magnam voluptate ex quas deleniti, enim ad excepturi.</p>

            <div class="value-detail">
                <div class="value">
                    <span>Alto Padrão</span>
                    <span>Agilidade</span>
                </div>

                <div class="value">
                    <span>Facilidade</span>
                    <span>Confiabilidade</span>
                </div>
            </div>
        </div>
    </div>
</section>
</div>
        </div>
    )
}