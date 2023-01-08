<template>
    <div class="social-logo">
        <nav class="nav-social-logo">
            <a href=""><i class="fa-brands fa-github"></i></a>
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-twitter"></i></a>
            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
        </nav>
    </div>
</template>

<style scoped lang="scss">
    @media screen and (max-width: 900px) {
        .social-logo {
            visibility: hidden;
        }
    }

    .social-logo {
        position: fixed;
        right: 5%;
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
</style>