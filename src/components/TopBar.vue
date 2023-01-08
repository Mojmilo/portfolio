<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
    <div class="top-bar">
        <router-link to="/" style="text-decoration: none;"><div class="logo">
            <i class="fa-solid fa-globe draw"></i>
            <a href="#" class="text">MV</a>
        </div></router-link>
        <nav class="nav-panel">
            <div class="panel">
                <router-link to="/about" style="text-decoration: none;"><a href="#" class="link-about"><span class="secondaire">.</span> <span class="principal">about</span> <span class="secondaire">()</span> <span class="principal menu">=></span> <span class="secondaire menu">{</span></a></router-link>
                <div class="panel-menu">
                    <nav class="nav-panel-menu">
                        <div class="space" style="height: 20px;"></div>
                        <a href="" class="nav-panel-menu-link"><span class="secondaire">this .</span> <span class="principal">cv</span> <span class="secondaire">;</span></a>
                        <div class="space" style="height: 20px;"></div>
                        <a href=""><span class="secondaire">}</span></a>
                    </nav>
                </div>
            </div>
            <div class="space" style="width: 30px;"></div>
            <div class="panel">
                <router-link to="/experience" style="text-decoration: none;"><a href="#"><span class="secondaire">.</span> <span class="principal">experience</span> <span class="secondaire">()</span> <span class="principal menu">=></span> <span class="secondaire menu">{</span></a></router-link>
                <div class="panel-menu">
                    <nav class="nav-panel-menu">
                        <div class="space" style="height: 20px;"></div>
                        <a href="" class="nav-panel-menu-link"><span class="secondaire">this .</span> <span class="principal">training</span> <span class="secondaire">;</span></a>
                        <a href="" class="nav-panel-menu-link"><span class="secondaire">this .</span> <span class="principal">profesionnal</span> <span class="secondaire">;</span></a>
                        <div class="space" style="height: 20px;"></div>
                        <a href=""><span class="secondaire">}</span></a>
                    </nav>
                </div>
            </div>
            <div class="space" style="width: 30px;"></div>
            <div class="panel">
                <router-link to="/work" style="text-decoration: none;"><a href="#"><span class="secondaire">.</span> <span class="principal">work</span> <span class="secondaire">()</span> <span class="principal menu">=></span> <span class="secondaire menu">{</span></a></router-link>
                <div class="panel-menu">
                    <nav class="nav-panel-menu">
                        <div class="space" style="height: 20px;"></div>
                        <a href="" class="nav-panel-menu-link"><span class="secondaire">this .</span> <span class="principal">projects</span> <span class="secondaire">;</span></a>
                        <div class="space" style="height: 20px;"></div>
                        <a href=""><span class="secondaire">}</span></a>
                    </nav>
                </div>
            </div>
            <div class="space" style="width: 30px;"></div>
            <div class="panel">
                <router-link to="/watch" style="text-decoration: none;"><a href="#"><span class="secondaire">.</span> <span class="principal">watch</span> <span class="secondaire">()</span> <span class="principal menu">=></span> <span class="secondaire menu">{</span></a></router-link>
                <div class="panel-menu">
                    <nav class="nav-panel-menu">
                        <div class="space" style="height: 20px;"></div>
                        <a href="" class="nav-panel-menu-link"><span class="secondaire">this .</span> <span class="principal">technological_watch</span> <span class="secondaire">;</span></a>
                        <a href="" class="nav-panel-menu-link"><span class="secondaire">this .</span> <span class="principal">economic_watch</span> <span class="secondaire">;</span></a>
                        <div class="space" style="height: 20px;"></div>
                        <a href=""><span class="secondaire">}</span></a>
                    </nav>
                </div>
            </div>
            <div class="space" style="width: 30px;"></div>
            <div class="panel">
                <router-link to="/contact" style="text-decoration: none;"><a href="#"><span class="secondaire">.</span> <span class="principal">contact</span> <span class="secondaire">()</span></a></router-link>
            </div>
            <i class="fa-solid fa-moon dark" onclick="{changeTheme(this)}"></i>
            <i class="fa-solid fa-sun light" onclick="{changeTheme(this)}"></i>
        </nav>
    </div>
</template>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Jost:wght@700&display=swap');

    // @media screen and (max-width: 900px) {
    //     .top-bar {
    //         .panel {
    //             display: none;
    //         }
    //     }
    // }
    @media screen and (max-width: 900px) {
        .top-bar {
            visibility: hidden;
        }
    }

    .top-bar {
        padding: 0 5%;
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        position: fixed;
        box-shadow: none;
        height: 70px;
        top: 2%;
        transition: top 0.3s, box-shadow 0.3s;
        backdrop-filter: blur(8px);
        z-index: 1;

        .logo {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

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

        .nav-panel {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .dark {
                color: var(--color-principal);
                font-size: var(--font-size-text);
                margin-left: 50px;
                display: none;
                transition: color 0.3s;
            }
            .dark:hover {
                color: var(--color-secondaire);
                cursor: pointer;
            }

            .light {
                color: var(--color-principal);
                font-size: var(--font-size-text);
                margin-left: 50px;
                display: inline;
                transition: color 0.3s;
            }
            .light:hover {
                color: var(--color-secondaire);
                cursor: pointer;
            }
        }

        .panel {
            a {
                text-decoration: none;
                font-size: var(--font-size-text);
                font-family: 'Jost', sans-serif;

                .principal {
                    color: var(--color-principal);
                    transition: color 0.3s;
                }

                .secondaire {
                    color: var(--color-secondaire);
                    transition: color 0.3s;
                }

                .menu {
                    opacity: 0;
                    transition: opacity 0.3s, color 0.3s;
                }
            }
            a:hover {
                .principal {
                    color: var(--color-secondaire);
                }

                .menu {
                    opacity: 1;
                }

                a {
                    .menu {
                        opacity: 1;
                    }
                }

                // .secondaire {
                //     color: var(--color-principal);
                // }
            }

            .panel-menu {
                position: absolute;
                transform: translateY(-3em);
                visibility: hidden;
                opacity: 0;
                z-index: -1;
                transition: transform 0.3s, visibility 0.3s, opacity 0.3s, z-index 0.1s;

                .nav-panel-menu {
                    display: flex;
                    flex-direction: column;

                    .nav-panel-menu-link {
                        padding-left: 30px;
                    }
                }
            }
        }
        .panel:hover .panel-menu {
            transform: translateY(0);
            visibility: visible;
            opacity: 1;
            z-index: 1;
            transition: transform 0.3s, visibility 0.3s, opacity 0.3s, z-index 0.7s;
        }
    }
</style>

<script>
    export default {
        name: 'TopBar',
        components: {
        },
        mounted() {
            const topBar = document.querySelector('.top-bar')
            let x = 0
            window.addEventListener('scroll', () => {
                if(window.scrollY > 0) {
                    if(x > window.scrollY) {
                        topBar.style.top = '0'
                        topBar.style.boxShadow = '0 0px 50px var(--bgd-color-secondaire)'
                    } else {
                        topBar.style.top = '-100px'
                        topBar.style.boxShadow = 'none'
                    }
                    x = window.scrollY
                } else {
                    topBar.style.top = '2%'
                    topBar.style.boxShadow = 'none'
                    x = window.scrollY
                }
            })
        },
        methods: {
        }
    }
    
    // const topBar = document.querySelector('.top-bar')
    // const goAbout = document.querySelector('.top-bar .nav-panel .panel .link-about')
    // const sectionAbout = document.querySelector('.about')
    // const goTop = document.querySelector('.top-button')
    // let x = 0

    // window.addEventListener('scroll', () => {
    //     if(window.scrollY > 0) {
    //         if(x > window.scrollY) {
    //             topBar.style.top = '0'
    //             topBar.style.boxShadow = '0 0px 50px var(--bgd-color-secondaire)'
    //         } else {
    //             topBar.style.top = '-100px'
    //             topBar.style.boxShadow = 'none'
    //         }
    //         // goTop.style.visibility = 'visible'
    //         goTop.style = `
    //             transform: translateY(0px);
    //             opacity: 1;
    //         `
    //         x = window.scrollY
    //     } else {
    //         topBar.style.top = '2%'
    //         topBar.style.boxShadow = 'none'
    //         goTop.style = `
    //             transform: translateY(15%);
    //             opacity: 0;
    //         `
    //         // goTop.style.visibility = 'hidden'
    //         x = window.scrollY
    //     }
    // })

    // // const root = document.querySelector(':root')
    // // const dark = document.querySelector('.dark')
    // // const light = document.querySelector('.light')

    // // function changeTheme(e) {
    // //     if(e.className == 'fa-solid fa-moon dark') {
    // //         root.style.setProperty('--bgd-color-principal', getComputedStyle(root).getPropertyValue('--bgd-color-principal-dark'))
    // //         root.style.setProperty('--bgd-color-secondaire' ,getComputedStyle(root).getPropertyValue('--bgd-color-secondaire-dark'))
    // //         root.style.setProperty('--color-principal', getComputedStyle(root).getPropertyValue('--color-principal-dark'))
    // //         root.style.setProperty('--color-secondaire', getComputedStyle(root).getPropertyValue('--color-secondaire-dark'))
    // //         dark.style.display = 'none'
    // //         light.style.display = 'inline'
    // //     } else if(e.className == 'fa-solid fa-sun light') {
    // //         root.style.setProperty('--bgd-color-principal', getComputedStyle(root).getPropertyValue('--bgd-color-principal-light'))
    // //         root.style.setProperty('--bgd-color-secondaire' ,getComputedStyle(root).getPropertyValue('--bgd-color-secondaire-light'))
    // //         root.style.setProperty('--color-principal', getComputedStyle(root).getPropertyValue('--color-principal-light'))
    // //         root.style.setProperty('--color-secondaire', getComputedStyle(root).getPropertyValue('--color-secondaire-light'))
    // //         light.style.display = 'none'
    // //         dark.style.display = 'inline'
    // //     }
    // // }

    // goAbout.addEventListener('click', () => {
    //     window.scroll(0, 0)
    //     window.scrollTo({
    //         top: sectionAbout.getBoundingClientRect().top,
    //         behavior: 'smooth'
    //     })
    // })

    // goTop.addEventListener('click', () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     })
    // })
</script>