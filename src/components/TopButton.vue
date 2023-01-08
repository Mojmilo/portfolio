<template>
    <div class="top-button">
        <button class="button"><i class="fa-solid fa-chevron-up go-top"></i></button>
    </div>
</template>

<script>
    export default {
        name: 'TopButton',
        components: {
        },
        mounted() {
            const goTop = document.querySelector('.top-button')
            window.addEventListener('scroll', () => {
                if(window.scrollY > 0) {
                    goTop.style = `
                        transform: translateY(0px);
                        opacity: 1;
                    `
                } else {
                goTop.style = `
                    transform: translateY(15%);
                    opacity: 0;
                `
                }
            })

            goTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                })
            })
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    @media screen and (max-width: 900px) {
        .top-button {
            left: 1%;
        }
    }

    .top-button {
        position: fixed;
        right: 1%;
        bottom: 5%;
        transform: translateY(15%);
        opacity: 0;
        transition: transform 0.3s, opacity 0.3s;

        .button {
            padding: 20px;
            background-color: inherit;
            border: 1px solid var(--color-secondaire);
            border-radius: 50%;
            cursor: pointer;
            background-color: inherit;
            transition: background-color 0.3s;

            .go-top {
                font-size: var(--font-size-text);
                color: var(--color-secondaire);
            }
        }

        .button:hover {
            background-color: var(--color-quatrième);
        }
    }
</style>