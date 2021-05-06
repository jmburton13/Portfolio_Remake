<template>
    <div class="navbar bg-light p-0 m-0">
        <img class="navbar-brand ms-2" src="../assets/Jacob Burton Orbit Logo Infinite.gif" alt="the name Jacob Burton accompanied by the phrase 'A Fresh Perspective'" />
        <nav>
            <div class="dropdown me-3">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Navigate
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link :to="{ name: 'about' }" class="text-lightblue p-0 m-0">About</router-link></li>
                    <li><router-link :to="{ name: 'projects' }" class="text-lightblue p-0 m-0">Projects</router-link></li>
                    <li><router-link :to="{ name: 'inspiration' }" class="text-lightblue p-0 m-0">Inspiration</router-link></li>
                    <li><router-link :to="{ name: 'contact' }" class="text-lightblue p-0 m-0">Contact</router-link></li>
                </ul>
            </div>
            <div class="text-nav">
                <router-link :to="{ name: 'about' }" class="text-lightblue p-0 m-0">About</router-link>
                <router-link :to="{ name: 'projects' }" class="text-lightblue p-0 m-0">Projects</router-link>
                <router-link :to="{ name: 'inspiration' }" class="text-lightblue p-0 m-0">Inspiration</router-link>
                <router-link :to="{ name: 'contact' }" class="text-lightblue p-0 m-0">Contact</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.navbar {
    border-bottom: solid 2px #5ffb72;
}

img {
    height: 100px;
}

a {
    font-size: 16px;
    text-decoration: none;
    color: #0488cc;
}

.text-nav {
    display: none;
}

@media (min-width: 767.98px) {
    .dropdown {
        display: none;
    }

    .text-nav {
        display: block;
    }

}

</style>