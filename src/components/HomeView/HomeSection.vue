<template>
    <section class="home">
        <div class="container-home">
            <span class="text-greeting">Hi, my name is</span>
            <h1 class="name">Maxime Vozelle</h1>
            <h1 class="job">I'm A developer</h1>
            <p class="info">
                I started programming in 2020 for the creation
                of web sites and desktop applications. I’m more and more
                interested by the blockchain domain with the smart contract
                developement.
            </p>
            <div class="button">
                <router-link to="/contact"><button class="contact">Contact me</button></router-link>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .home {
        margin: 15% 25% 15% 25%;

        @media screen and (max-width: 1000px) {
            margin: 25% 10% 25% 10%;
        }

        @media screen and (max-width: 650px) {
            margin: 40% 10% 40% 10%;
        }

        .container-home {
            display: flex;
            flex-direction: column;

            .text-greeting {
                font-size: var(--font-size-text);
                color: var(--color-secondaire);
                font-family: 'Jost', sans-serif;
                margin-bottom: 20px;
            }

            .name {
                margin: 0;
                font-size: var(--font-size-title);
                color: var(--color-principal);
                font-family: 'Jost', sans-serif;
                @media screen and (max-width: 650px) {
                    font-size: 40px;
                }
            }

            .job {
                margin: 0;
                font-size: var(--font-size-title);
                color: var(--color-troisième);
                font-family: 'Jost', sans-serif;
                @media screen and (max-width: 650px) {
                    font-size: 40px;
                }
            }

            .info {
                margin: 0;
                font-size: var(--font-size-text);
                color: var(--color-troisième);
                font-family: 'Jost', sans-serif;
                margin-top: 20px;
                max-width: 550px;
            }

            .button {
                .contact {
                    margin-top: 40px;
                    font-size: var(--font-size-text);
                    color: var(--color-secondaire);
                    font-family: 'Jost', sans-serif;
                    background-color: inherit;
                    border: 1px solid var(--color-secondaire);
                    border-radius: 5px;
                    padding: 15px 30px;
                    background-color: inherit;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .contact:hover {
                    background-color: var(--color-quatrième);
                }
            }
        }
    }
</style>