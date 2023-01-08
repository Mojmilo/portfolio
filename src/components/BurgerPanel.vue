<template>
    <router-link to="/" style="text-decoration: none;"><div class="logo">
        <i class="fa-solid fa-globe draw"></i>
        <a href="#" class="text">MV</a>
    </div></router-link>
    <div class="left-panel">
        <i class="fa-solid fa-bars burger-active" v-on:click="showBurgerPanel"></i> 
        <i class="fa fa-close burger-desactive" v-on:click="dontShowBurgerPanel"></i>
        <div class="panel-row">
            <router-link to="/about" style="text-decoration: none;"><div class="button" v-on:click="dontShowBurgerPanel">
                <a href="#" class="link-about"><span class="principal">about</span></a>
                <div class="button-bar"></div>
            </div></router-link>
            <router-link to="/experience" style="text-decoration: none;"><div class="button" v-on:click="dontShowBurgerPanel">
                <a href="#" class="link-about"><span class="principal">experience</span></a>
                <div class="button-bar"></div>
            </div></router-link>
            <router-link to="/work" style="text-decoration: none;"><div class="button" v-on:click="dontShowBurgerPanel">
                <a href="#" class="link-about"><span class="principal">work</span></a>
                <div class="button-bar"></div>
            </div></router-link>
            <router-link to="/watch" style="text-decoration: none;"><div class="button" v-on:click="dontShowBurgerPanel">
                <a href="#" class="link-about"><span class="principal">watch</span></a>
                <div class="button-bar"></div>
            </div></router-link>
            <router-link to="/contact" style="text-decoration: none;"><div class="button" v-on:click="dontShowBurgerPanel">
                <a href="#" class="link-about"><span class="principal">contact</span></a>
                <div class="button-bar"></div>
            </div></router-link>
        </div>
        <div class="social-logo">
            <nav class="nav-social-logo">
                <a href=""><i class="fa-brands fa-github"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
            </nav>
        </div>
    </div>
    
</template>

<script>

export default {

    methods: {
        showBurgerPanel: function () {
            const BurgerActive = document.querySelector('.left-panel .burger-active')
            const BurgerDesactive = document.querySelector('.left-panel .burger-desactive')
            const LeftPanel = document.querySelector('.left-panel .panel-row')
            LeftPanel.style.width = '300px'
            LeftPanel.style.visibility = 'visible'
            BurgerActive.style.display = 'none'
            BurgerDesactive.style.display = 'inline'
        },
        dontShowBurgerPanel: function () {
            const BurgerActive = document.querySelector('.left-panel .burger-active')
            const BurgerDesactive = document.querySelector('.left-panel .burger-desactive')
            const LeftPanel = document.querySelector('.left-panel .panel-row')
            LeftPanel.style.width = '0'
            LeftPanel.style.visibility = 'hidden'
            BurgerActive.style.display = 'inline'
            BurgerDesactive.style.display = 'none'
        }
    }
}
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap');

    @media screen and (min-width: 900px) {
        .left-panel {
            visibility: hidden;
        }
    }

    .logo {
        position: inherit;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 5% 5% 5% 5%;

        @media screen and (min-width: 900px) {
            display: none;
        }

        .draw {
            color: var(--color-secondaire);
            font-size: var(--font-size-text);
            margin-right: 20px;
            transition: color 0.3s;
            cursor: pointer;
        }

        .text {
            color: var(--color-secondaire);
            text-decoration: none;
            font-size: var(--font-size-text);
            font-family: 'Jost', sans-serif;
            transition: color 0.3s;
        }
    }

    .left-panel {
        background-color: var(--bgd-color-secondaire);
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        width: auto;
        padding: 30px 15px 5% 15px;
        transition: right 0.3s;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 20px 0 0 20px;

        .burger-active {
            color: var(--color-principal);
            font-size: 20px; // var(--font-size-text)
            transition: color 0.3s;
            cursor: pointer;
            display: inline;
        }
        .burger-active:hover {
            color: var(--color-secondaire);
        }

        .burger-desactive {
            color: var(--color-principal);
            font-size: 20px; // var(--font-size-text)
            transition: color 0.3s;
            cursor: pointer;
            display: none;
        }
        .burger-desactive:hover {
            color: var(--color-secondaire);
        }

        .panel-row {
            margin-top: 15%;
            width: 0;
            visibility: hidden;
            transition: width 0.3s, visibility 0.1s;
            display: flex;
            flex-direction: column;

            .button {
                margin-bottom: 10%;
                width: 100%;
                height: 50px;
                background-color: var(--bgd-color-principal);
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                a {
                    text-decoration: none;
                    font-size: var(--font-size-text);
                    font-family: 'Jost', sans-serif;

                    .principal {
                        color: var(--color-principal);
                        transition: color 0.3s;
                    }
                }

                .button-bar {
                    top: 100%;
                    height: 2px;
                    width: 0;
                    background-color: var(--color-secondaire);
                    position: absolute;
                    transition: width 0.3s;
                }
            }
            .button:hover, .button:active {
                .button-bar {
                    width: 100%;
                }
            }
        }
        .social-logo {
            position: relative;
            bottom: 5%;

            .nav-social-logo {
                display: flex;
                flex-direction: column;

                a {
                    font-size: var(--font-size-text);
                    color: var(--color-principal);
                    margin-top: 30px;
                    transition: color 0.3s;
                }
                a:hover {
                    color: var(--color-secondaire);
                }
            }
        }
    }
</style>