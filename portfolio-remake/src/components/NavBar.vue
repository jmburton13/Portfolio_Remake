<template>
    <div class="navbar bg-eggshell p-0 m-0">
        <img class="navbar-brand ms-2" src="../assets/Jacob Burton Orbit Logo Infinite.gif" alt="the name Jacob Burton accompanied by the phrase 'A Fresh Perspective'" />
        <nav class="d-flex justify-content-between">
            <div class="dropdown me-3 mobile-only">
                <button class="btn btn-secondary dropdown-toggle bg-eggshell border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><router-link :to="{ name: 'about' }" class="text-lightblue p-0 m-0">About</router-link></li>
                    <li><router-link :to="{ name: 'projects' }" class="text-lightblue p-0 m-0">Projects</router-link></li>
                    <li><router-link :to="{ name: 'inspiration' }" class="text-lightblue p-0 m-0">Inspiration</router-link></li>
                    <li><router-link :to="{ name: 'contact' }" class="text-lightblue p-0 m-0">Contact</router-link></li>
                </ul>
            </div>
            <div class="dropdown me-3 mobile-only">
                <button class="btn btn-secondary dropdown-toggle bg-eggshell border-0" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    About
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><router-link :to="{ name: 'about' }" class="text-lightblue p-0 m-0">About</router-link></li>
                    <li><router-link :to="{ name: 'projects' }" class="text-lightblue p-0 m-0">Projects</router-link></li>
                    <li><router-link :to="{ name: 'inspiration' }" class="text-lightblue p-0 m-0">Inspiration</router-link></li>
                    <li><router-link :to="{ name: 'contact' }" class="text-lightblue p-0 m-0">Contact</router-link></li>
                </ul>
            </div>
            <div class="expanded-only">
                <router-link :to="{ name: 'about' }" class="text-lightblue p-0 m-0">About</router-link>
                <div class="dropdown" style="display: inline">
                    <button class="btn btn-secondary dropdown-toggle bg-eggshell border-0" type="button" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
                        <li><router-link :to="{ name: 'about' }" class="text-lightblue p-0 m-0">About</router-link></li>
                        <li><router-link :to="{ name: 'projects' }" class="text-lightblue p-0 m-0">Projects</router-link></li>
                        <li><router-link :to="{ name: 'inspiration' }" class="text-lightblue p-0 m-0">Inspiration</router-link></li>
                        <li><router-link :to="{ name: 'contact' }" class="text-lightblue p-0 m-0">Contact</router-link></li>
                    </ul>
                </div>
                <router-link :to="{ name: 'inspiration' }" class="text-lightblue p-0 m-0">Inspiration</router-link>
                <router-link :to="{ name: 'contact' }" class="text-lightblue p-0 m-0">Contact</router-link>
            </div>
        </nav>
        <div class="socials bg-darkblue w-100">
            SOCIALS
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.socials {
    height: 40px;
    border-bottom: solid 2px #5ffb72;
    border-top: solid 2px #5ffb72;
}

img {
    height: 100px;
}

a {
    font-size: 16px;
    text-decoration: none;
    color: #0488cc;
}

button {
    color: #0488cc;
}

button:click {
    color: #0488cc !important;

}


</style>