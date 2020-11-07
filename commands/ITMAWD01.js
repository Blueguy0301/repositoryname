   module.exports = {
      name: 'Schedule01',
      description: "This will help you guide with the bot I'm working on.",
      
      execute(message, args)
      {const today = new Date().getDay(); // returns a number from 0 to 6 (0=Sunday 1=Monday 2=Tuesday ...)

         switch (today) {
            case 0:
               message.channel.send (
                  'You have no class in Sundays');
         
               break;
            case 1:
               const Discord = require("discord.js");
               const Embed = new Discord.MessageEmbed();
               Embed.setDescription(
"[MEDIL](https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWIzZWQ0ZjktZGY1Mi00ZTNkLWJhNDUtYzViNzk2ODY0ODY4%40thread.v2/0?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22c8d03572-e09d-4548-bac7-728d73b7ee8a%22%7d) 8:00-8:30 \n  [General Math](https://teams.microsoft.com/l/meetup-join/19%3a97bfeca3c30c4faaa960d3e2b4a34259%40thread.tacv2/1600403149288?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22c6f2da9a-4e49-496c-a775-f5290546f2bf%22%7d) 11:30-12:00 \n Click the subject to join");
               message.channel.send(Embed);;
         
            break;
          case 2:            
          const Discord2 = require("discord.js");   
          const Embed2 = new Discord2.MessageEmbed();
             Embed2.setDescription(
"[literature](https://teams.microsoft.com/l/meetup-join/19%3a0c4897a4f2ec4a339f7a404d3f491e15%40thread.tacv2/1600139647443?context=%7b%22Tid%22%3a%2269587499-a807-43e6-b603-680dc411b8b1%22%2c%22Oid%22%3a%22309f5cec-8987-4ec5-b000-a9446bd7310e%22%7d) 10:30-11:00 \n Click the subject to join" );
               message.channel.send (Embed2);
         
            break;
          case 3:   
          message.channel.send (
                '**WEDNESDAY** \n **NONE**');
          
            break;
          case 4:
             const Discord3 = require("discord.js");   
             const Embed3 = new Discord3.MessageEmbed();
                Embed3.setDescription("Today is your exam day. Please refer to your assigned schedule [here](https://elms.sti.edu)");   
           message.channel.send (Embed3);
             break;
          case 5:
             const Discord4 = require("discord.js");   
             const Embed4 = new Discord4.MessageEmbed();
                Embed4.setDescription("Today is your exam day. Please refer to your assigned schedule [here](https://elms.sti.edu)");
              message.channel.send (
                 Embed4);
             break;
          case 6:
              message.channel.send (
                 'Today is your exam day. Please refer to your assigned schedule [here](https://elms.sti.edu)');
               break;
        }
    }
}