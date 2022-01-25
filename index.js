const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf('5143333481:AAHrMn4mD_1ZX8ZI3Do0qOtLHJ_askSsnII');

const intro = `
Hello, I am Bin-Node 
/bin to Check Bins
/botinfo to Get More Info about me
/version to Know Bot Version
/api to Know My Checking Api (Developer Use Only)
Bot Developed by @vinay_dev 
Language Used: NodeJS
`;

const binfo = `
Bin-Node is A Most accurate Bin Checking Bot.
Its Fast and Easy to Use..
Purely Made in NodeJS
Owned by @vinay_dev
Project of @cy_projects
`;

const apiinfo = `
Bin-Node API comming soon..
Owned by @vinay_dev
Project of @cy_projects
`;

const botversion = `
Bot Version: v1.4 
Last Updated: [01-25-2022]
`;

// developed by vinay chaudhary

bot.start((ctx) =>{
	ctx.reply(intro);
})
bot.command("botinfo",(ctx) =>{
	ctx.reply(binfo);
})
bot.command("api",(ctx) =>{
	ctx.reply(apiinfo);
})
bot.command("version",(ctx) =>{
	ctx.reply(botversion);
})

// bot.help((ctx) =>{
// 	ctx.reply("Wow it worked!")
// })
// bot.settings((ctx) =>{
// 	ctx.reply("Wow it worked!")
// })
// bot.command(["test", "Test" , "test1"], (ctx) => {
// 	ctx.reply("hello world");
// })
// bot.hears("cat",(ctx) =>{
// 	ctx.reply("meow");
// })
// bot.on("sticker",(ctx) =>{
// 	ctx.reply("sticker op");
// })
// bot.on("text",(ctx) =>{
// 	ctx.reply("sed");
// })


// bot.command(["bin", "Bin"], (ctx) => {
// 	axios.get('https://bins-su-api2-6h46uie3x-vinayofc.vercel.app/api/542111')
// 	.then(res => {
// 		//console.log(res.data.data);
// 		ctx.reply("Bin: "+ res.data.data.bin+"\n"+"Vendor: "+ res.data.data.vendor+"\n"+"Type: "+ res.data.data.type+"\n"+"Bank: "+ res.data.data.bank+"\n"+"Level: "+ res.data.data.level+"\n"+"Country: "+ res.data.data.country+res.data.data.countryInfo.emoji+"\n");
// 	}).catch(e =>{
// 		console.log(e);
// 	})
// 	// ctx.reply("hello world");
// })

bot.command("bin", (ctx) => {
	let input = ctx.message.text;
	let inputarray = input.split(" ");
	console.log(inputarray);
	if(inputarray.length == 1){
		message= "Enter Valid Bin";
	}else{
		inputarray.shift();
		message = inputarray.join();
		axios.get('https://bins-su-api2-6h46uie3x-vinayofc.vercel.app/api/'+message)
		.then(res => {
			//console.log(res.data.data);
			let msg = "Bin: "+ res.data.data.bin+"\n"+"Vendor: "+ res.data.data.vendor+"\n"+"Type: "+ res.data.data.type+"\n"+"Bank: "+ res.data.data.bank+"\n"+"Level: "+ res.data.data.level+"\n"+"Country: "+ res.data.data.country+res.data.data.countryInfo.emoji+"\n"+ "Checked By: " +ctx.from.first_name+"\n"+"Bot By: @vinay_dev"+"\n";
			ctx.reply(msg);
		}).catch(e =>{
			console.log(e);
		})

		
	}
	
})
bot.launch();