# How to install chatGPT bot 
## by yuval11111111

## Installation

+ Install Node.js 
+ Create a folder for the project to be cloned and clone the project

```bash
git clone https://github.com/yuval11111111/chatgpt-bot
```
+ then install the needed packages by typing
 
```bash
npm i discord.js dotenv fs chatgpt path
```
## Making your own client
To use this program you first have to create a discord client 
## How to create your private discord client
+ go to https://discord.com/developers/applications/

+ login to your discord account

+ on the top right corner of the page you'll find a button labeled "new application" 
after pressing on the button you will create your own discord application but we need to turn this application into a discord client

+ on the left side you'll see a tab call bot 
going to this tab will take you to the bot control page but because this application isn't a bot you'll see a button says "add bot"

+ to the right of your screen you'll see a button "add bot"

pressing on this button will create your discord client 

+ after pressing the button it will change the page to the client control page

+ on the page are five abilities options for the client, turn on the last three options and turn off the first option (unless you want that everyone'll be able to invite the bot to their server)

now we want to invite our client to our server

+ above the bot the on the left you'll see the OAuth2 tab

entering this tab will unlock 2 more tabs

+ now enter the URL generator tab

+ on the scopes panel choose "bot" and "application.commands"

after selecting both options it will unlock the bot permissions panel

+ choose what permissions you want to give to your client

+ press generate URL and put the URL in the search bar

now you have a bot server invite

+ select the server you want your bot to join

now after we completed the first step lets get our own private OpenAI API key but don't close the bot's page (the invite page you can close)   
## getting your openAI API key
+ go to https://platform.openai.com/account/api-keys 

+ login to OpenAI

after you login you'll see a button labeled "create a new secret key" 

+ press the button

+ copy the API key and save it somewhere you can copy it later on your pc

## setting everything up
+ open a code editor that know how to edit .js and .env files like VScode 

+ open the .env file 

+ get the OpenAI key you saved 

+ paste the API key at TOKEN (its important not to put it at token2)

+ go back to the bot page at https://discord.com/developers/applications/

+ go to the bot tab and press copy token

+ go back to the .env file and paste your bot token at TOKEN2

we almost finished just last two settings

+ go to the index.js file and locate line 105

in this line you'll see two large numbers change the first one to your client id (if you having hard time finding the client id google can help you) and the second number change to the server id of the server you invite the bot to 

+ save all the changes 

+ open the powershell of the folder where you saved the bot's files

+ type node index

now you good to go