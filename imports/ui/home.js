import { Template } from 'meteor/templating';

import './home.html';

$(document).ready(function(){
    $(".dropbtn").click(function(){
        $(".dropdown-content").toggle();
    });
});