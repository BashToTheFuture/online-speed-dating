<template>
    <div class="row">
        <div class="message">
            <img class="background" :src="background" alt="backgroundImage">
            {{ msg}}
        </div>
        <div id="profileColumn" class="col-md-2 col-sm-offset-1">
            <h1 id="username" >{{$route.params.id}}</h1>
            <div>
                <img id="profileImg" v-bind:src='profileImg'>
            <div>
                    <p id="profText">Gender: {{user.gender}}</p>
                </div>
                <div>
                    <p id="profText">Age: {{user.age}}</p>
                </div>
                <div>
                    <p id="profText">Location: {{user.location}}</p>
                </div>
                <div>
                    <p id="profText">Description: {{user.description}}</p>
                </div>
                <div id="editButton">
                    <span><button class="glyphicon glyphicon-cog" v-if='this.$store.state.user.username' v-on:click='editProfile'></button></span>
                </div>
            <div id="adminButton" v-if="admin">
                <button class="btn btn-primary" v-on:click='goToAdmin'>Admin</button></div>
            </div>
        </div>
        <div class="col-md-7 col-sm-offset-4">
            <div class="row" >
                <div v-if="match" id="eventColumn" class="col-md-7 col-md-offset-2">
                    <div>
                        <h2 class="overhead">Suggested Events:</h2>
                        <div class="suggested-events-list">
                            <ul v-for='event in allEvents'>
                                <div id="event" class="row">
                                    <a v-on:click="toDate(event)" id="clickEvent">
                                        <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                        <li id="eventDetails"> {{ event.eventName }} </li>
                                        <li id="eventDetails"> {{ event.eventType }} </li>
                                        <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass" v-on:click="toDate(event)"></button></li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <button class="btn btn-primary pull-right" v-on:click="goToEvents">See More</button>   <!-- redirectTo events page -->
                </div>

                <div v-else>
                    <div id="eventColumn" class="col-md-5">
                        <div>
                            <h2 class="overhead">Events:</h2>
                            <ul v-for='event in events'>
                                <div id="event" class="row">
                                    <a id="clickEvent">
                                        <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                        <li id="eventDetails"> {{ event.eventName }} </li>
                                        <li id="eventDetails"> {{ event.eventType }} </li>
                                        <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass"></button></li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div id='matchHorizon' class="col-md-5 col-md-offset-1">
                        <div>
                            <span>Matches:</span>
                            <ul v-for='match in matches'>
                                <ul> {{ match.profileImg }}</ul>
                                <ul> {{ match.name }} </ul>
                                <ul> {{ match.location }} </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div>*Place holder for matchs*</div>-->

        <div class="col-md-7 col-sm-offset-4">
            <br><br>
            <div class="row" >
                <div v-if="match" id="eventColumn" class="col-md-7 col-md-offset-2">
                    <div>
                        <h2 class="overhead">My Events:</h2>
                        <ul v-for='event in savedEvents'>
                            <div id="event" class="row">
                                <a v-on:click="toDate(event)" id="clickEvent">
                                    <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                    <li id="eventDetails"> {{ event.eventName }} </li>
                                    <li id="eventDetails"> {{ event.eventType }} </li>
                                    <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass" v-on:click="toDate(event)"></button></li>
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>
                <div v-else>
                    <div id="eventColumn" class="col-md-5">
                        <div>
                            <h2 class="overhead">My Events:</h2>
                            <ul v-for='event in events'>
                                <div id="event" class="row">
                                    <a id="clickEvent">
                                        <li id="eventDetails"> {{ moment(event.date).format('MMMM Do YYYY, h:mm:ss a') }} </li>
                                        <li id="eventDetails"> {{ event.eventName }} </li>
                                        <li id="eventDetails"> {{ event.eventType }} </li>
                                        <li id="eventDetails">Go on date<button id="eventButton" class="glyphicon glyphicon-menu-right glyphicon glyphicon-glass"></button></li>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div id='matchHorizon' class="col-md-5 col-md-offset-1">
                        <div>
                            <span>Matches:</span>
                            <ul v-for='match in matches'>
                                <ul> {{ match.profileImg }}</ul>
                                <ul> {{ match.name }} </ul>
                                <ul> {{ match.location }} </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
h2.overhead {
    color: #BDD4E6;
}
#profText {
    color: #75B2E1;
}
#clickEvent {
    display: block;
    width: 100%;
    height: 100%;
}
#eventDetails {
    list-style-type: none;
    padding-left: 30px;
}
#username {
    color: #75B2E1;
}
#profileColumn {
    border: 3px solid black;
    position: fixed;
    background-color: #5A666E;
}
#eventColumn, #myEvent {
    border: 3px solid #759CF8;
    background-color: #334D61;
}
#matchHorizon {
    border: 3px solid red;
}
#editButton {
    float: right;
    /*color:#75B2E1;*/
}
#profileImg {
    width: 100%;
    padding-bottom: 5px;
}
#event {
    border: 1px solid #E5C9B0;
    background-color: black;
    padding-top: 2  px;
    padding-bottom: 2px;
}
.suggested-events-list {
    height: 280px;
    overflow-y: auto;
}
/*#eventDetails:nth-child(even) {
    border: 1px solid tomato;
    background-color: white;
    padding-top: 2  px;
    padding-bottom: 2px;
}
#eventDetails:nth-child(odd) {
    border: 1px solid tomato;
    background-color: black;
    padding-top: 2  px;
    padding-bottom: 2px;
}*/
#eventButton {
    float: right;
    color: #75B2E1;
    padding-bottom: 3px;
}
.col-md-9 {
    padding-right: 0;
}

</style>