<template>
    <article>
        <h1 id="title" class="text-eggshell bg-lightblue pt-2">X-Tourney : Team & Tournament Management Application</h1>
        <img src="@/assets/Projects/XTourney/TeamBrowse.gif" alt="image of home page including X logo, sidebar, navigation bar, and four large clickable buttons to create a profile, scout the opposition, manage a team, and host a tournament">

        <h2 id="description" class="text-eggshell bg-lightblue">Myself and three collaborators built X-Tourney to be a one-stop solution for ease-of-use creation, invitation, and management of teams and tournaments. Our priority was to allow user to browse anonymously and view upcoming opportunities, but also quickly create a profile and become more committed by adding content.</h2>
        <img id="bracket-image" src="@/assets/Projects/XTourney/Bracket.gif">
        <p for="bracket-image" class="text-eggshell bg-lightblue text-center">Scripts properly seed and match teams according to their win/loss history. A bracket is dynamically displayed based on tournament size, and allows viewers to easily identify which matches have been completed and are passing a winner onto the next round in real time.</p>
    </article>
</template>

<script>
export default {
    
}
</script>

<style scoped>

article > * {
    margin-top: 2vh;
}

h1 {
    font-size: 20px;
    box-shadow: 0px 0px 20px 10px #0488cc;
    width: 90vw;
    margin-left: 5vw;
    margin-top: 0px;

}

h2 {
    font-size: 14px;
    box-shadow: 0px 0px 20px 5px #0488cc;
    width: 90vw;
    margin-left: 5vw;
}

img {
    box-shadow: 0px 0px 10px 0px #0488cc;
    border-radius: 10px;
    width: 90vw;
}

p {
    width: 90vw;
    line-height: normal;
    margin-left: 5vw;
    box-shadow: 0px 0px 10px 10px #0488cc;    
}


</style>