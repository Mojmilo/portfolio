<template>
    <section class="about">
        <div class="container-about">
            <h3 class="title"><span class="secondaire">{{ "<" }}</span> <span class="principal">work</span> <span class="secondaire">{{ ">" }}</span></h3>
            <div class="container-global">
                <div class="info-about">
                    <p class="info">
                        Hello! My name is Brittany and I enjoy creating things that live on the internet.
                        My interest in web development started back in 2012 when I decided to try editing custom Tumblr
                        themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <div class="space" style="height: 30px;"></div>
                    <p class="info">
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up,
                        a huge corporation, and a student-led design studio. My main focus these days is building accessible,
                        inclusive products and digital experiences at Upstatement for a variety of clients.
                    </p>
                    <div class="space" style="height: 30px;"></div>
                    <p class="info">
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
                </div>
                <div class="img-about">
                    <img src="@/assets/moi.jpg" alt="" class="img-moi">
                    <div class="img-up"></div>
                </div>
            </div>
            <div class="button">
                <button class="download-cv" onclick="window.location.href='./CV.pdf';">Download my CV</button>
            </div>
            <h3 class="title"><span class="secondaire">{{ "<" }} /</span> <span class="principal">work</span> <span class="secondaire">{{ ">" }}</span></h3>
        </div>
    </section>
</template>

<style scoped lang="scss">
    .about {
        margin: 15% 15% 15% 15%;

        @media screen and (max-width: 1000px) {
            margin: 25% 10% 25% 10%;
        }

        @media screen and (max-width: 650px) {
            margin: 40% 10% 40% 10%;
        }

        .container-about {
            display: flex;
            flex-direction: column;

            .title {
                margin: 0;
                font-size: 25px;
                font-family: 'Jost', sans-serif;
            }

            .principal {
                color: var(--color-principal);
            }

            .secondaire {
                color: var(--color-secondaire);
            }

            .container-global {
                margin-top: 50px;
                margin-bottom: 50px;
                display: flex;
                flex-direction: row;
                padding-left: 50px;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 30px;

                .info-about {
                    display: flex;
                    flex-direction: column;

                    .info {
                        margin: 0;
                        font-size: var(--font-size-text);
                        color: var(--color-troisième);
                        font-family: 'Jost', sans-serif;
                        max-width: 550px;
                    }
                }

                .img-about {
                    position: relative;

                    .img-moi {
                        width: 300px;
                        border-radius: 10px;
                    }

                    .img-up {
                        position: absolute;
                        top: 0;
                        width: 100%;
                        height: 99%;
                        border-radius: 10px;
                        background-color: var(--color-secondaire);
                        opacity: 0.5;
                        transition: opacity 0.3s;
                    }
                }
                
                .img-about:hover .img-up {
                    opacity: 0;
                }
            }

            .button {
                .download-cv {
                    margin-bottom: 40px;
                    margin-left: 50px;
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

                .download-cv:hover {
                    background-color: var(--color-quatrième);
                }
            }
        }
    }
</style>