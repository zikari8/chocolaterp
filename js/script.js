/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
	"choco": "Chocolate.png",
	"coupon": "Coupon.png",
	"saber_choco": "Saber Chocolates.jpg",
	"rider_choco": "Rider Chocolates.jpg",
	"perv_choco": "Berserker Chocolates.png",
	"alisha_choco": "Alisha Chocolates.jpg",
	"wallet": "Starkad Choco.jpg"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"Room": "Room.png",
	"Hall": "Hall.png",
	"Corridor": "Corridor.png",
	"Diner": "Diner.png",
	"Beach": "Beach_Night.png",
	"Alisha_Room": "Alisha_Room.png",
	"Bamboo": "Bamboo.png",
	"Garden": "Garden.png",
	"Field": "Field.png"
});


// Define the Characters
monogatari.characters ({
	'n': {
		name: ' ',
		color: '#5bcaff'
	},
	"b": {
		name: "Ben",
		color: "#ff3300",
		sprites : {
			IMG: "Ben.png"
		}
	},
	"la": {
		name: "Assassin",
		color: "#ff3399",
		sprites : {
			IMG: "Assassin.png"
		}
	},
	"ds": {
		name: 'Demonic Saber',
        color: '#99ccff', 
        sprites: {
            IMG: 'Demonic Saber.png',
		}
        
	},
	"dr": {
		name: 'Demonic Rider',
        color: '#ff9900', 
        sprites: {
            IMG: 'Demonic Rider.png',
		}
        
	},
	"al": {
		name: "Alisha",
		color: "#ffff00",
		sprites : {
			IMG: "Alisha.png"
		}
	},

	"pe": {
		name: "Berserker of Shang",
		color: "#e6e600",
		sprites : {
			IMG: "Pervzerker.png"
		}
	},

	"ll": {
		name: "Starkad",
		color: "#4d94ff",
		sprites : {
			IMG: "Starkad.png"
		}
	},

	// Chaldea Boys
	"ast": {
		sprites : {
			IMG: "Astolfo.png"
		}
	},

	"bart": {
		sprites : {
			IMG: "Bartholomew Roberts.png"
		}
	},

	"bed": {
		sprites : {
			IMG: "Bedivere.png"
		}
	},

	"lan": {
		sprites : {
			IMG: "Langling Wang.png"
		}
	},

});

monogatari.script ({
	// The game starts here.
	'Start': [
		'show scene #f7f6f6 with fadeIn',
		"wait 1000",
		{
			'Choice': {
				'Dialog': 'Choose a scene',
				'Assassin': {
					'Text': 'Lostbelt Assassin',
					'Do': 'jump Assassin_Choco'
				},
				'Saber': {
					'Text': 'Demonic Saber',
					'Do': 'jump Saber_Choco'
				},
				'Rider': {
					'Text': 'Demonic Rider',
					'Do': 'jump Rider_Choco'
				},
				'Berserker': {
					'Text': 'Berserker of Shang',
					'Do': 'jump Pervzerker_Choco'
				},
				'Starkad': {
					'Text': 'Starkad',
					'Do': 'jump Starkad_Choco'
				}
			}
		}
	],

	'Assassin_Choco': [
		'wait 1000',
		'show scene Room with fadeIn',
		'wait 1000',
		"n February 14th. Valentine's Day.",
		"n A day that anyone, man or woman, single or in a relationship, frets about. A day of love and romance.",
		"n As for me though, I have decided to spend this momentous day in the idle activity of curling up in my bed and waiting for the clock to strike midnight.",
		"show character la IMG with fadeInRight",
		"la Master, are you here?",
		"la What are you doing? It's already past noon. Shouldn't you be getting up already?",
		"b No. I'm taking a sick day today. Leave me alone.",
		"la Seriously? C'mon, Master, don't be like that. What's this about?",
		"b It's nothing. I just don't feel like waking up today. I'll do my best tomorrow, so let me sleep in today.",
		"la Master... don't tell me this is because it's Valentine's.",
		"b ...",
		"la Oh, dear. You must really not like the holiday.",
		"b N-not really. It's none of my business. Everyone else can go make kissy faces all day long for all I care. I'm just gonna stay here.",
		"la Even if you don't want anything to do with it, you still shouldn't just hide away. What if someone else wants to give you chocolate?",
		"b I don't care. Besides, it's not like anyone would want to give me chocolate, anyways. There's no way that could happen, so it doesn't matter.",
		"la Really? Cause I can think of a few candidates off the top of my head.",
		"b ...",
		"la Haahh... you're as stubborn as ever.",
		"la C'mon, Master. Isn't it about time you told me what this is really about?",
		"b Nothing much. It's just stupid, that's all.",
		"b It's the dumbest shit ever. Why do we even need a special day for people to just flaunt their relationships? What's even the point of giving chocolates? It's all just so stupid.",
		"b The whole thing's just a commercial holiday built on an outdated tradition of courtly love. Buying empty affection through expensive gifts and giant romantic gestures is way too antiquated. The only real benefit are all the companies lining their pockets with money better spent on better things than calories and colored paper.",
		"b I don't care what other people do, but I want no part of it. Just let me hide here for today.",
		"la Mnn, it's hard to scold you when you start ranting semi-logically like that.",
		"la In that case... tell me, Master. What do you think is the benefit of giving someone chocolate on Valentine's Day?",
		"b Huh, well...",
		"b ... there is none. There's no meaning at all to it.",
		"b Practically speaking, it'd be more effective to just gift money to the person that they could spend on their own chocolates. And homemade chocolates are almost always going to be of lesser quality and more expensive than just buying some. Overall, it's an exchange with a net loss of value.",
		"la Exactly. There isn't any good reason whatsoever. The tradition is completely empty. And because it's empty, it is able to carry feeling.",
		"la A gift has no great meaning. Its only object is to express a caring heart.",
		"la You of all people should know how hard it can be to express one's feelings. There are times where one feels that words and actions alone cannot properly demonstrate how one feels. And it is for that purpose, such a tradition exist.",
		"la When humans place importance and meaning into a tradition, we create a new language in which we can express our feelings. Whatever the circumstance, whatever the reason, a chocolate given today is proof of love. There is no mistaking it. There is no misunderstanding. And so, it is beautiful.",
		"la Well, Master? Are you the type of person who would reject another person's caring heart?",
		"b Mn...",
		"la I can understand why you might want to reject the custom. But that's all the more reason you shouldn't let the custom blind you to what's truly important.",
		"la Ignore the chocolate altogether if you must. Instead, focus on the person who's giving it to you and the feelings they're putting into it.",
		"la Something like that should be right up your alley, right?",
		"b B-but...",
		"b ... what am I supposed to say if someone gives me one?",
		"la Just thank them. Tell them that you're grateful.",
		"b Even if I don't deserve it?",
		"la Don't be conceited. That's not for you to decide, silly.",
		"la Well, if you're really worried about that... then how about this?",
		"la Do you know of the tradition caleld White Valentine's Day or just White Day?",
		"b N-not really.",
		"la It's a bit of a modern holiday that's mostly celebrated in certain countries of Asia such as Japan and China. Set on March 14th, it's meant to be a follow-up to Valentine's.",
		"la On that day, people who received a chocolate on Valentine's are meant to return the gift with one of their own. In some cases, it's even said that one should return the gift with one of thrice the value.",
		"la How about that? If you're feeling guilty about getting a chocolate you don't deserve, then just return a gift that's three times the value. That way, nobody can complain!",
		"b That's... I guess that could work.",
		"la Perfect. So then you're all set, right.",
		"b ... tch, dammit. I ended up getting fooled by you once again into doing stupid shit.",
		"la Ohoho~ Tis but the duty of a Servant, Master.",
		"la Now then, since you seem a little chipper, shall I be the first to give you a Valentine's Day gift?",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b Huh? What's this? It looks like a small coupon book.",
		"la Redeemable vouchers for sexual service from yours truly.",
		"b Don't mess with me.",
		"n I immediately rip them all to shreds.",
		"n And then I burn all the pieces into cinders.",
		"n For good measure, I ground the ashes into the floor and spit on them.",
		"la Pfft- Ahahahahahahaahahaha! As expected of Master!",
		"b Honestly, what did I do to deserve this type of harassment? Screw it, I'm leaving.",
		"b A-and don't think you're off the hook. For gifting me this nonsense, I'm definitely paying you back triple on White Day!",
		"la Oho? Well, then, I'm looking forward to it.",
		"la All right, Master. Good luck. I'm wishing you the best.",
		"la Happy Valentine's Day!",
		"hide character la with fadeOut duration 1s",
		"wait 1000",
		"show background rgb(0,0,0) with fadeIn",
		"wait 1000",
		"jump Assassin_CE"
	],

	'Assassin_CE': [
		"show image coupon with fadeIn duration 1s",
		"wait 500",
		"n Assassin's Valentine's Gift - Complementary Service",
		"n A set of handmade vouchers that can apparently be redeemed for sexual service from Assassin. There are more than a dozen varities of services which only get more and more lewd, ranging from hardcore to kinky. It seems as if nothing is off the table for the legendary courtesan.",
		"n It is unknown how serious she is about fulfilling them. Perhaps she only ever handed them out because she knew her Master would never use them? Either way, they have been burnt harder than a 70th copy of a 1-star CE, so the answer will never be known.",
		"hide image coupon with fadeOut duration 1s",
		"wait 2000",
		"jump Start"
	],

	'Saber_Choco': [
		'wait 1000',
		'show scene Hall with fadeIn',
		'wait 1000',
		"show character ds IMG with fadeIn",
		'ds Master, there you are.',
		"b Oh, Saber. What's up? Were you looking for me?",
		"ds Yes... I wanted to deliver this to you. Please accept it.",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b This is... a box of chocolates?",
		"ds Indeed. You are perceptive as always, Master.",
		"ds Miss Assassin informed me of the modern tradition known as Valentine's Day and I became aware of my obligation to gift some chocolates to you.",
		"ds I-I hope that the taste is to your liking. Please feel free to enjoy them at your lesiure.",
		"b Oh, w-wow. Umm... thanks, Saber.",
		"b Honestly, I wasn't even expecting to get any chocolates. I appreciate it.",
		"ds No... there's no need to thank me.",
		"b Well then, I guess I should appreciate them immediately and just dig in.",
		"ds Ah. N-now?",
		"b Is something wrong?",
		"ds N-no... nothing, Master.",
		"n For some reason, Saber seems uncharacteristically timid. Perhaps she's nervous about how the chocolates turned out?",
		"b Hmm... oh, these look really good. As expected of Saber, they look almost professionally made.",
		"ds ...",
		"b Well, then, I'll help myself. Nom nom nom...",
		"hide character ds IMG with fadeOut duration 0.5s",
		"n Hm, hm, mm, the moment I bite in, the chocolatey flavor floods through my mouth. I have no words to describe the out-of-this-world taste.",
		"n It's incredibly bitter and somehow kind of spicy with a strong, citrusy scent that entices the pallete into vomiting, not to mention the rock-hard, practically inedible shell and the sticky, icky slimy mystery substance in the center and...",
		"n Wait, this is actually terrible.",
		"n Eh? What the-? Did Saber make some sort of mistake? These chocolates are beyond awful.",
		"n I was pretty sure Saber was good at cooking, though. And I can't imagine her of all people making a careless error.",
		"show character ds IMG with fadeIn duration 0.5s",
		"wait 500",
		"ds H-how was it, Master? Were the chocolates to your liking?",
		"n Shit. What should I say? I don't want to lie to her, but I don't want to insult the chocolates she worked so hard on, either.",
		{
			'Choice': {
				'Dialog': 'What should you tell Saber?',
				'Honest': {
					'Text': 'Honestly tell her how bad her chocolate is',
					'Do': 'jump Saber_Choco_1'
				},
				'Lie': {
					'Text': 'Lie and say that her chocolate is delicious',
					'Do': 'jump Saber_Choco_2'
				}
			}
		}
	],

	'Saber_Choco_1': [
		"b W-well, that's...",
		"b To be completely honest... they weren't very good.",
		"ds I see... As I thought...",
		'jump Saber_Choco_3'
	],

	'Saber_Choco_2': [
		"b W-well, that's...",
		"b They were delicious! Thanks a lot, Saber! I'm so happy to get chocolates from you.",
		"ds ... Master, are you lying to me?",
		"b Geh! W-well, that's...",
		"ds Please, tell me honestly how you felt.",
		"b O-oh. S-sorry.",
		"b Well... to be honest, they weren't very good.",
		"ds I see... As I thought...",
		'jump Saber_Choco_3'
	],

	'Saber_Choco_3': [
		"b Oh, b-but that's okay. Don't worry about it. It's not that big of a deal. Everyone makes mistakes sometimes.",
		"ds ...",
		"b And, um, y'know what they say, it's the thought the counts. I'm already really grateful just receiving chocolates from you. So... y'know.",
		"ds No, it's fine, Master. There's no need to comfort me. It's my fault.",
		"ds I'm sorry for feeding you such filth. It was out of line of me to present to you such a vile offering.",
		"b H-hey, don't say that. It's okay. Like I said, everyone makes mistakes...",
		"ds ... and what if it wasn't a mistake?",
		"b Huh?",
		"ds I didn't make a mistake while cooking, Master. Those chocolates were deliberately made like that.",
		"ds I'm sorry! Because I put my self above your enjoyment, I ended up offending your pallete.",
		"ds Please punish me as you see fit, Master. As your Servant, I have done you a grave disservice and disobedience.",
		"b Hold on, hold on, I have no idea what you're talking about. What's going on?",
		"ds ...",
		"b Saber. Tell me what's wrong. You can't just leave me in the dark like this.",
		"ds I'm sorry. You're right. It is improper of me to hide my shame.",
		"ds I'll tell you everything, so please be patient with me..",
		"ds To begin with... you know that I am in love with you, right?",
		"b Eh? Ah, well... yeah, I am aware of that. Though, it's embarassing when you say it out loud...",
		"ds Yes. I am madly in love with you, Master. Of that, I am absolutely certain. You are the most important person to me. For you, I would be willing to do anything.", 
		"ds But... you are not the only man I have ever loved.",
		"ds In my former life, I have loved and slept with other men. At that time, I too thought that my feelings were absolute and that those men were people I would do anything for.",
		"ds And so, I asked myself: How is this time any different? If I could love another man and betray everyone I previously loved before on the drop of a coin, who's to say that I won't do it again?",
		"ds Of course, I don't doubt myself. I am absolutely certain I would never betray you, Master. But... to others, that's not how it would look right?",
		"ds If someone else were to call me a fickle, traitorous whore, then I could not honestly disagree with them. And... I feared that such a reputation would besmirch your name as well.",
		"b Saber...",
		"ds In truth, it would be easy for me to make good tasting chocolates. Even with the unfamiliar ingredients, my fundamentals are good enough that I could make decent tasting confectionaries with little effort.",
		"ds But I had to wonder... if I were to only make chocolates that tasted good, would there be any difference in the chocolate I make for you and the chocolate I would make for my ex-husband?",
		"ds Is there no difference between my love for you and my love for him? Is my love so cheap that it can be copy-pasted between different men? I didn't want to believe so...",
		"ds So that's why I couldn't just make chocolate that tasted good. I wanted to make a chocolate that I would only be able to make for you. A chocolate that showed how unique my love was.",
		"ds But in the end, I messed up. The chocolate I made turned out horrible yet I still gave it to you anyways, hoping that you might still like it.",
		"ds That's why my actions are despicable. I prioritized my own selfish sentiments over your benefit, Master. It is the height of disloyalty!",
		"ds Please punish me as you see fit! Punish this fool for her vile selfishness!",
		"b ...",
		"b So, you were worrying about all that, huh? I never knew...",
		"b In that case, there's only one thing I can do...",
		"n Nom Nom Nom!",
		"ds Eh? M-master, what are you doing? You shouldn't eat that.",
		"b Mmmn, as I thought, it's still terrible. Ugh, it's really hard to eat.",
		"ds Master! Please spit it out immediately. You'll get sick if you continue to eat something so bad.",
		"b Hmmm... that's what it is, huh. The strong citrusy fragrance was actually peony, right? The flower said to represent the hero, Hu Sanniang.",
		"ds Huh?",
		"b And the sweet, sticky stuff in the middle is honeysuckle nectar. You used it instead of sugar, which is why the chocolate ended up so bitter.",
		"b And, if I recall, honeysuckle in flower language stands for fidelity, devotion, and the bonds of love.",
		"b Finally, the spiciness is cinnamon, isn't it? You know I really like it, so you put in a bit too much.",
		"b Yup, this is definitely a chocolate meant only for me. And it's a chocolate that only you could've made. I'm certain that no where else in the world is there a chocolate that tastes like this.",
		"b So, don't worry, Saber. Your feelings definitely reached me.",
		"ds Master...",
		"b W-well, basically, what I'm saying is that I don't think it's that big of a deal. Sure it doesn't taste that good, but if I just wanted tasty chocolate, I'd buy some online.",
		"b But I got the privilege of getting to eat the chocolates you made just for me. That's something no amount of money can buy.",
		"b So, thank you, Saber. I really like these chocolates.",
		"ds ...",
		"ds ... you're welcome, Master. I'm glad you like them.",
		"hide character ds IMG with fadeOutLeft",
		"wait 750",
		"n Saber leaves with a light smile on her face. I guess everything turned out alright in the end.",
		"b ... phew.",
		"b Ugggh, what was that? Why did I try to act cool at the last second there? That was so lame...",
		"b But... I guess it turned out okay. Though, I do still have all this uneaten chocolate...",
		"b Can't be helped. I won't let a single one of your her feelings go to waste.",
		"n Tucking in my stomach, I dig in and eat every last one of Saber's chocolates.",
		'show scene rgb(0,0,0)',
		'wait 1000',
		'n In the end, I ended up getting a stomachache...',
		"wait 1000",
		"jump Saber_CE"
	],

	'Saber_CE': [
		"show image saber_choco with fadeIn duration 1s",
		"wait 500",
		"n Demonic Saber's Valentine's Gift - Stockholm Special",
		"n A box of horrible tasting assorted chocolates. Made with peony extract, honeysuckle nectar, and way too much cinnamon, the result is an ungodly taste that no sane man has ever attempted to challenge before.",
		"n These frankenstein sweets are the representation of Saber's unique love. Made solely with her beloved Master in mind, they are chocolates that cannot be found anywhere else in the world. In that sense, their value is beyond immesaurable.",
		"n When confronted with such special chocolates, a true man has no choice but to eat every last piece even if it means destroying their tastebuds. A pure maiden's love cannot be wasted!",
		"hide image saber_choco with fadeOut duration 1s",
		"wait 2000",
		"jump Start"
	],

	'Rider_Choco': [
		'show scene Diner with fadeIn',
		"wait 1000",
		'show character dr IMG with fadeIn',
		'wait 1000',
		"dr Haaaaaaaahhh...",
		"dr Another Valentine's alone.",
		"dr Christmas was one thing, but to be spending Valentine's as a single woman... it's quite sad, don't you think?",
		"b Hmmm... I guess it does seem quite sad when you put it like that.",
		"dr Ara ara~ Are you me calling pitiful, boy? What have I done to suffer this harassment?",
		"b Eh? Why are you getting mad? I was just agreeing with you!",
		"n As always, one never knows how to please the woman named Rider.",
		"b Well now, there's no need to be too upset. I'm sure there are advantages to being single on Valentine's.",
		"b Like not having to do anything fancy, or not spending money on expensive gifts or dinners, that kind of stuff.",
		"dr That's the kind of things only lonely losers say to console themselves when they're crying alone in their bed while all their friends are out on dates.",
		"b ... sorry.",
		"dr Haaaaahhh... I want a boyfriend...",
		"n She sure is sighing a lot today. If it gets any later in the day, she might start drinking.",
		"b How about we be proactive then? Instead of thinking about next year, let's aim for this year.",
		"dr Hm~? What are you proposing, boy?",
		"b Valentine's isn't just a day for established lovers. It's also a day for girls to give chocolates to the boy she likes. In that case, let's tackle it from that angle.",
		"dr Oh ho~ That's not a bad suggestion coming from you, boy. In other words, I should use Valentine's to try to give chocolates to some men as a way to get closer to them.",
		"b Exactly. It's the perfect excuse to flirt around and draw some attention to yourself.",
		"b Rider's really pretty, so I'm sure any guy who gets a chocolate from you will be proposing in no time.",
		"dr (Blush)",
		"dr Well, well, well, you've certainly learned a bit about flattering a lady. I'll give you a few points for that.",
		"dr In that case, I expect you're prepared to see this through with me. Let us proceed with this operation, post haste.",
		"b Of course. Let's both do our best.",

		"show scene rgb(0,0,0)",
		"wait 1000",
		"show scene Bamboo with fadeIn",
		"wait 1000",
		"n Sneak Sneak Sneak...",
		"b There he is. It looks like we haven't been noticed.",
		"show character lan IMG with fadeIn",
		"wait 500",
		"b Pretty Boy no.1, Gao Changgong.",
		"b Gentle in nature, valiant in battle, a man of impeccable character. Not to mention his famed good looks that put even the most gorgeous women to shame.",
		"b What do you think, Rider? Does he suit your fancy?",
		"dr The Prince of Lan Ling, huh. Certainly, he's very handsome and I get the feeling he'd be fun to tease.",
		"b Oh? That's surprisingly positive. Could it be he's your type?",
		"dr Well, the thing is... doesn't he seem like the overly anxious type?",
		"dr He seems like the type of guy who worries a lot about a lot of things. Y'know, the kind of guy who always wants to know where you are. I guess, from one angle, it means he's really caring, but I don't think it's for me.",
		"b Ah, certainly, I heard he has trust issues. I guess that kind of thing can cause a lot of unnecessary stress in a relationship.",
		"dr Mn, I have enough distrust in my line of work. I don't want to sleep with my eyes open when I'm at home.",
		"b So he's no good?",
		"dr Well... I'll put him on a maybe. For now, let's move on.",
		"n Sneak Sneak Sneak Away...",

		"show scene rgb(0,0,0)",
		"wait 1000",
		"show scene Garden with fadeIn",
		"wait 1000",
		"show character bed IMG with fadeIn",
		"wait 1000",
		"b Then, how about this one? Pretty Boy no.2, Sir Bedivere.",
		"b Delicate, loyal, and gentlemanly. The picture perfect portrait of handsome chivalry. Surely, any woman would be lucky to have him as their partner.",
		"dr Well, you're not wrong. Even I can't find any faults in his character.",
		"dr However... isn't it pretty much impossible?",
		"b What do you mean?",
		"dr That hunk of steel is basically the blond midget's lapdog, right? I get the feeling he'd never place any woman above her, even if she were his wife.",
		"dr My king this. My king that. Don't you get the feeling that's all he cares about?",
		"b Well, he does give off that impression.",
		"dr For me, I'm the type who'd want my man to be looking at me foremost. It's one thing if he glances at other women, but at the very least, I should be number one, don't you think?",
		"b Well, that's a pretty reasonable desire, I'd think. It'd be pretty annoying if your husband cared more about his boss than he did you, huh.",
		"dr Exactly. That'd just be a boor.",
		"b So... no good too?",
		"dr Let's move on.",
		"n Initiating Sneak Mode...",

		"show scene rgb(0,0,0)",
		"wait 1000",
		"show scene Corridor with fadeIn",
		"wait 1000",
		"b Okay, how about we move away from personality, and try for someone with common interests?",
		"show character bart IMG with fadeIn",
		"wait 500",
		"b Pretty Boy no.3, Bartholomew Roberts.",
		"dr The freak?",
		"b Wait, wait, don't run away yet! At least hear me out.",
		"b At the end of the day, you're both shrewd, rich pirates, right? Surely you have something in common. If you get to no each other, perhaps you'll find the other's not so bad. Doesn't that sound romantic?",
		"dr No.",
		"dr Do I need any further explanation?",
		"b ... no. Let's move on.",

		"show scene rgb(0,0,0)",
		"wait 1000",
		"show scene Field with fadeIn",
		"wait 1000",
		"show character ast IMG with fadeIn",
		"wait 500",
		"dr ...",
		"b ...",
		"dr ...",
		"b ...",
		"dr Do you have anything to say?",
		"b Yeah, okay, I'm honestly just out of ideas.",
		"n Surprisingly, the amount of eligible targets in Chaldea is actually rather low. Perhaps trying to find a date among other legendary heroes was a bad idea after all...",

		"show scene rgb(0,0,0)",
		"wait 1000",
		"show scene Beach with fadeIn",
		"wait 500",
		"show character dr IMG with fadeIn",
		"wait 500",
		"dr Haaahh... no good results.",
		"b We practically scouted every male Servant and none of them are any good, huh. Who would've thought...",
		"b What are you going to do, Rider? Who are you planning to give your chocolate to?",
		"dr Hmmm... I guess I'll have to give up for this year. Ufufu~ It just goes to show that love isn't something you can rush.",
		"dr Besides, thinking about it, it's rather uncouth for someone my age to be handing out chocolates like I'm still a young maiden.",
		"dr Us adults have our ways of courting affection, you know~",
		"b Okay, okay, I get what you mean, so stop flaunting your bust. Geez, that's not how a marriagable woman should act.",
		"dr Ufufu~ you're as innocent as ever, boy.",
		"dr If only there were another man like you, perhaps I'd already be wed by now. Ohoho~",
		"b You mean, someone else gullible enough to fall for your snares? If such a person existed, I'm sure they'd already be on their knees with a ring.",
		"dr I wonder~",
		"dr Well, it can't be helped. I'll give this to you.",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b Huh? Isn't this the chocolate you made? Are you sure it's okay to give it to me?",
		"dr Who else would I give it to? You just saw exactly what my options are. Better than letting it go to waste.",
		"dr Consider it thanks for accompanying me today, boy. I guess I dragged you around a lot.",
		"b No, no, I was just doing my job. I promised you I'd help out with this sort of stuff, didn't I?",
		"b Besides... it wasn't bad. If it's you, I guess I don't mind being dragged around a little.",
		"dr Hahaha~ You should be careful saying stuff like that.",
		"dr If you aren't, I might not be able to resist snatching you away from your cute girlfriend~",
		"b P-please, you're embarassing me. Don't make those kind of jokes.",
		"dr Ufufu~",
		"b Anyways, thanks for the chocolates, then. I'll definitely treasure them.",
		"b But just for this year, okay? Next year, I'm sure you'll have someone better to give your chocolates to.",
		"dr Well, well, we can only hope.",
		"b No. I'm sure it'll happen.",
		"hide character dr IMG with fadeOut",
		"wait 500",
		"n I say so, more to myself than to her. I make a promise that I'll definitely find a husband for Rider before next Valentine's.",
		"n But for this year alone, I'll take responsibilty and play my part with gutso.",
		"n And even when the next year comes, I'm sure I won't ever forget the one year I got the privilege of being Rider's Valentine...",
		"wait 1000",
		"show scene rgb(0,0,0) with fadeIn",
		"wait 1000",
		"jump Rider_CE"
	],

	'Rider_CE': [
		"show image rider_choco with fadeIn duration 1s",
		"wait 500",
		"n Demonic Rider's Valentine's Gift - Maiden's Appeal",
		"n Heart-shaped chocolates filled with youthful yearning. They are homemade and not spectularly so. The shape's a bit off and it's all a bit burnt in places. The whole thing screams of amateurish attempt that one would expect from a teenage girl trying to make chocolates for the first time in her life.",
		"n At first glance, no one would ever suspect that such clumsy chocolates belong to the always elegant and composed Rider. But perhaps it only makes sense that such a thing is the result when she isn't using her vast mountains of wealth.",
		"n This chocolate is nothing more and nothing less than the pure-hearted efforts of a maiden. No matter how pathetic the result, who on earth could possibly laugh at it?",
		"hide image rider_choco with fadeOut duration 1s",
		"wait 2000",
		"jump Start"
	],

	'Pervzerker_Choco': [
		'show scene Room with fadeIn',
		"wait 1000",
		"b Haahh... what a long day. I'm so tired.",
		"b Time to just relax and get some sleep...",
		"show character pe IMG with fadeInRight duration 0.5s",
		"pe Master! There you are!",
		"b ... nevermind. Guess I'm not allowed any peace.",
		"n I'm starting to think that locked doors are really useless in a place filled with Servants who can just phase through walls.",
		"b What is it, Berserker? This better be good.",
		"pe Listen to this. Something unbelievable has happened!",
		"pe You know what day today is, right?",
		"b February 14th, Valentine's Day, right?",
		"pe Exactly. Valentine's Day, the day in which one receives affection in the form of chocolates. For one such as I who have tasted all the pleasures of the world, it is no doubt a day practically tailored made for me.",
		"pe Though I personally was ready to give chocolates to all the lovely ladies around, I was told that it is more customary for the women to give chocolates today and for the men to return the gift a month later on White's Day.",
		"b Well, I heard that that's more of a modern custom only in certain countries, such as Japan or China, but yeah that sounds right.",
		"pe Indeed. So, because of that, I submitted myself to the customs and waited patiently for my chocolates to come in, ready to return the affections of all the women who would shower me with their love.",
		"pe And yet...",
		"show character pe IMG with shake",
		"pe WHY DIDN'T I GET ANY CHOCOLATES!?!?",
		"b ... that's really what you're worried about?",
		"pe I don't understand. How could I, the great King Zhou of Shang who had the most gorgeous and loving harem in all of Chinese History, not receive even a single chocolate? It makes no sense at all.",
		"pe Shouldn't it only be natural for every women to give me chocolates? That's only natural. I even prepared return gifts beforehand for all of them.",
		"b R-really? You were that confident every female would give you a chocolate?",
		"b I'm actually kind of amazed... by the way, what were these return gifts?",
		"pe Erotic Songs.",
		"b Eh?",
		"pe In return for their feminine affections, I have utilized my boundless linguistic talent to compose the most beautiful lyrics under the heavens with which to honor their beauty.",
		"pe Aha, you seem curious, Master. Very well, as a special gift, I'll allow you to take a peek at my artistic brilliance.",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b Oh, um, I guess I can take a little look...",
		"b ... oh, geez. It's worse than I thought. I don't know whether to blush or to vomit.",
		"n What Berserker has written on the pages he hands me are several, individualized songs praising the beauty of a specific girl through very lewd lyrics. The songs themselves aren't bad but the topic matter and the verbage is beyond degenerate. Crude, juvenile, and revolting, they are rather uncomfortable just to read, much less sing.",
		"b Yeah... if it meant receiving one of these, I can see why no girl would want to give you a chocolate.",
		"n Speaking of which, I recall such a thing from Berserker's legend. If I remember correctly, he had made one such song for the goddess Nu Wa. Offended and disgusted, the goddess sent Daji to seduce him into destroying the kingdom and bringing an end to the Shang Dynasty.",
		"b Didn't you learn your lesson with Nu Wa? You shouldn't write these kind of things.",
		"pe Hmm? What do you mean, Master?",
		"b I'm talking about your legend. You got punished by a goddess for lewding her, right? Shouldn't you have learned your lesson after that?",
		"pe What are you talking about? I was never punished by any goddess.",
		"b What about the whole thing with Da Ji? She was sent to you as punishment for your misdeeds and led you to lose everything, right? It's all because of your usual misconduct your kingdom was overthrown.",
		"pe Hmmm... I still don't get it, Master. Aren't you the one misunderstanding something? I mean...",
		"pe Meeting Da Ji and falling in love with her was the best thing to every happen to me. Why would that be a punishment?",
		"b Huh? That's... huh.",
		"pe I've told you before, haven't I? To me, a single night of divine pleasure is worth far more than all my kingdom and treasures.",
		"pe And if my songs were truly what allowed me to meet and sleep with Da Ji, then my talents must be truly extraordinary. I mean, who would've thought I would've been allowed to taste such unearthly pleasure. Just thinking about it still makes me beyond grateful.",
		"pe Yes, I can think of no better gift to give a woman who would give me their chocolate. For such lovely ladies, the only thing I can do is shower them with the praise that they deserve.",
		"b ... man, if you say it with such an earnest voice, I don't know how to react.",
		"n As always, it's hard to deal with Berserker in more ways than one. His sense of values are just way too wild.",
		"n But, I can't really say that I hate how resolute he is about his strange ideas. At the very least, I can't just write him off as an idiot.",
		"pe Hm, now that I think about it, perhaps my plan was wrong. I only got to meet Da Ji after making my song. So perhaps, I should give the women my gift first and then they'll give me their chocolates afterwards.",
		"b I'm not sure that's a good idea...",
		"show character la IMG at right with fadeInRight",
		"wait 500",
		"la Ah, there you are.",
		"pe Ah, my Mistress! How are you this lovely evening? It is an honor to be graced with your beauty once again.",
		"b Oi. Why is everyone just phasing through my door today? Do you guys not know what privacy is?",
		"la Berserker, I heard that you were harassing girls with lewd songs. What's this about?",
		"pe Oho, so you've heard, my Mistress. Indeed, I've used my genius to compose some divine, erotic hymns for my female peers in exchange for their chocolate offerings.",
		"pe Do not fear, Mistress. It may sound malevolent from rumors, but I assure you that my songs are only of the highest quality deserving of a goddess. There is absolutely nothing wrong with them—",
		"la That kind of stuff is bad. Please cut it out.",
		"pe To be completely honest, I am utterly disgusted with this kind of crude music. I cannot stand anything but the most sophisticated and wholesome of songs. This drivel is no more than filth, more worthless than toilet paper and far more dirty.",
		"b Oi, oi, oi.",
		"pe You may keep that horrible trash, Master. I have no need for it any longer. Such things will only dirty my soul.",
		"pe Now then, I am off to compose some truly beautiful poems about the values of innocence and pure love as an apology to any one I may have offended. Farewell!",
		"hide character pe IMG with fadeOutRight",
		"la Geez, you can never keep your eyes off that man. I hope he learns his lesson.",
		"la Sorry for the interruption, Master. Have a good night~",
		"hide character la IMG with fadeOutRight",
		"b ...",
		"b ...",
		"b ... I need to find a way to Servant-proof my walls.",
		"n For now, let's store these songs away where no one else will ever find them...",
		'show scene rgb(0,0,0)',
		'wait 1000',
		'jump Pervzerker_CE'
	],

	'Pervzerker_CE': [
		"show image perv_choco with fadeIn duration 1s",
		"wait 500",
		"n Berserker of Shang's Valentine's Gift - Offering to True Beauty",
		"n A collection of songs that explicitly extol the beauty of women through lewd lyrics. Meant to be return gifts for anyone who gave him chocolate, there is a staggering amount, supposedly one for each woman Berserker finds attractive.",
		"n The songs themselves are bad enough that they make one feel dirty just from reading them. Varying between worship and harassment, there is absolutely zero restraint in the descriptions of what Berserker finds attractive in the women and exactly what he wants to do with them. One would be hard pressed to find a single person who would be happy to have their name on one of these sheets.",
		"n According to Berserker, these songs were how he met Da Ji, so perhaps they can be used as a catalyst to summon the elusive fox girl? Could it be that Berserker actually wrote these because he wanted to reunite with his one true love?",
		"n Either way, it's probably best that they be locked away somewhere where they can never see the light of day again.",
		"hide image perv_choco with fadeOut duration 1s",
		"wait 2000",
		"jump Start"
	],

	'Starkad_Choco': [
		'show background Hall with fadeIn',
		"wait 1500",
		"show character ll IMG with fadeIn duration 0.5s",
		"ll Hello, there.",
		"b Woah! Starkad!?",
		"b Geez, you scared me, big guy. You need to stop suddenly coming out of spirit form like that.",
		"b Moreover, you're as huge as ever. For a second there, I thought I was being attacked by a monster.",
		"ll Sorry. I did not mean to frighten you.",
		"ll But that is beside the point. I did not approach you with the intentions of simply scaring you.",
		"b I figured. So, what's up? Did you need me for something?",
		"ll Yes, I would like to ask you for a favor.",
		"b A favor...? That's surprising.",
		"ll Are you aware of the holiday known as Valentine's Day?",
		"b Y-yeah, of course I am.",
		"ll What of the holiday known as White Day?",
		"b Yeah, I've heard of that too. It's when you're supposed to return a gift in exchange for the chocolate you receive on Valentine's, right?",
		"ll Yes. The favor I would like to ask for concerns these traditions.",
		"ll I would like to ask you if it would be possible to reverse the order of these events.",
		"b Reverse the order? You mean, give a gift first and get a chocolate in return?",
		"ll Precisely. If I gave you a gift now, would you be willing to return it with chocolate on Valentine's Day?",
		"b Ehh...? I mean... I guess?",
		"b Sorry, I'm still confused. Basically speaking, you're trying to get a Valentine's chocolate by giving me a gift, right?",
		"b Why do you want a chocolate from me so badly?",
		"ll It's not for me. It's for my Master.",
		"ll In exchange for the gift that I would give you now, I would like to arrange for you to give a Valentine's Chocolate to her. Of course, I would like you to do so without telling her of this prior arrangement.",
		"b Ah... I get it now.",
		"b You don't want Alisha to end up with no chocolates this year.",
		"ll Yes. Last year, she seemed upset that she received no chocolates apart from mine. I would like things to be different this year, but her popularity is as scarce as ever.",
		"ll If it means making her happy, I am willing to resort to more discreet methods.",
		"b Ever the loyal Servant, aren't you?",
		"ll Well? Will you accept my offer?",
		"b Hmmm.....",
		"b Okay. But only on one condition...",
		"hide character ll IMG with fadeOut duration 0.5s",
		"wait 500",
		"show scene Corridor with fadeIn duration 1s",
		"wait 1000",
		"n A few days later, February 14th.",
		"show character al IMG with fadeIn duration 0.5s",
		"wait 500",
		"b Yo, Alisha.",
		"al Hm? Hey, hey, Bengshan! What's up!?",
		"b Nothing much. I just came to give this to you.",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b Happy Valentine's Day.",
		"al Eh...? Th-this is for me?",
		"b Yeah. I figured I should give you something this year. Consider it thanks for everything.",
		"al S-seriously? Th-this isn't a joke!?",
		"b No need to shout. It's just a cheap chocolate bar I got at the store. If you don't want it, I can take it back.",
		"al No, no, no, no, no, I want it! I'll take it!",
		"al I-I mean... Ahem.",
		"al W-well, I guess I can take it off your hands. As your teacher, it would be rude of me not to accept my apprentice's gift. Yes, it's only right for you to give me something. You should continue to treasure your teacher more preciously.",
		"b That's big talk for someone clutching the candy bar like it's a baby.",
		"b Well, anyways, that's all I wanted to do. I'll see you later.",
		"al W-wait! Hold on!",
		"al It's Valentine's Day, y'know. We don't really have any work to do today. And I got this gift from you, so...",
		"al Do you wanna come to my room, for a bit?",
		"b ... huh?",
		"hide character al with fadeOut duration 0.5s",
		"wait 500",
		"show scene Alisha_Room with fadeIn duration 1s",
		"wait 1000",
		"b S-so, what are we doing here in your room?",
		"show character al IMG with fadeIn",
		"wait 500",
		"al H-here... please take this.",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b This is... a cake?",
		"al I-it's Raspberry White Chocolate Cake. F-for Valentine's...",
		"al D-don't get the wrong idea. I mean, yeah I made it just for you and all... b-but it's not like that!",
		"al I just thought you've been working really hard on your magecraft lately, so I thought I should reward you every now and then. Th-that's all.",
		"b I can't believe it...",
		"b You can cook!?!",
		"al That's what you're surprised about!?!?",
		"al Wh-what? Is there some problem with me being able to cook? I'll have you know that I have most of the essentials down pat.",
		"b N-no, just surprised, that's all. This is actually pretty well-made.",
		"al Well, of course. I used only the best ingredients and went through five different tries before I perfected the recipe.",
		"b You did all that for me?",
		"n Shit. Now I feel guilty for only giving her some countertop chocolate bar.",
		"al D-don't get the wrong idea. It's not like it's anything special. I mean, anything I do is guaranteed to only be the best.",
		"al Besides, since I'm giving you the highest quality of chocolate, I expect only the highest quality of performance from you.",
		"b Ah, so it's actually a trap to make me work harder. Tch, how clever.",
		"b Well, I don't intend to slack off either, so I guess I'll accept it whole-heartedly.",
		"b Thanks a lot, Alisha. I really appreciate it.",
		"al Hehehe, you're welcome.",
		"b But... to be honest, I don't think I can finish it all by myself. It's surprisingly large.",
		"al Really? I thought that was about standard serving size for guys.",
		"al I mean, Starkad seemed pretty satisfied with one.",
		"b Don't compare me to a giant! His stomach alone is bigger than my entire body!",
		"b Haah, c'mon. Let's just share it together.",
		"al Eh? T-together?",
		"b Yeah, we should be able to cut it down to size if we both dig in. You don't mind, do you?",
		"al ... only if you feed me.",
		"b Eh? Geez, how spoiled are you, princess? Fine, fine, I don't mind. Just take a seat.",
		"b Here. Say ahhhhhh.",
		"al Ahhhhhhhhhnnn~~~",
		"hide character al with fadeOut duration 1s",
		"wait 1000",
		"show scene Hall with fadeIn duration 1s",
		"wait 1000",
		"b Phew... that sure was filling. But it was pretty good, all things considered.",
		"b So? What do you think?",
		"show character ll IMG with fadeIn duration 1s",
		"wait 1000",
		"ll You were right. I'm impressed.",
		"b Sorry, but it looks like our deal is off. I won't be accepting your return gift after all.",
		"n The condition I gave Starkad was thus: I would only honor the terms of his condition if Alisha herself doesn't give me a chocolate this year.",
		"n Since I just got treated to a scrumptious chocolate cake, the deal's off.",
		"b After all, it wouldn't be fair if I got two things in exchange for just one chocolate, right? If I already got one from Alisha, there's no need to get something from you.",
		"b Look. I know that you're super protective, but you don't have to go so far. Alisha's not just a kid anymore. She can give and receive her own chocolates, without your help.",
		"ll I see. The scales have fallen from my eyes. It seems that I ended up underestimating my own Master.",
		"b Well, that's how it is. So I'll be calling off our agreement. There's no need for you to give me anything.",
		"ll Yes, you are quite right.",
		"ll In that case, please accept this.",
		"show image choco with fadeIn duration 1s",
		"wait 2000",
		"hide image choco with fadeOut duration 1s",
		"wait 1000",
		"b Huh? Oi, I said I didn't need a return gift.",
		"ll It is not a Valentine's return gift. Please consider it a simple token of my appreciation for your help on this matter.",
		"ll It seems that, even with my centuries of wisdom, there are still things that I can learn.",
		"b I see. In that case, I'll accept it gratefully.",
		"b Happy Valentine's Day, big guy.",
		"ll Yes. Happy Valentine's Day.",
		"hide character ll with fadeOut",
		"wait 500",
		"show scene rgb(0,0,0) with fadeIn duration 1s",
		"wait 1000",
		"jump Starkad_CE"
	],

	'Starkad_CE': [
		"show image wallet with fadeIn duration 1s",
		"wait 500",
		"n Starkad's Valentine's Gift - Modern Weapon",
		'n A sleak, black wallet for men. It has both a large carrying capacity and a light weight, perfect for taking around anywhere.',
		'n "Back in my day, I used to just hang my gold around my neck when I was wandering the world. But carrying 120 pounds of gold through the country was just asking for trouble. Compared to that, money has become a lot more portable in the modern era."',
		'n "I know it may sound like empty words from me, but money is important. If you wish to take care of your family, you would do well to guard the fortune you have. And of course, make sure to keep a good amount on you at all times, for any emergency. Nowadays, men need financial clout, not brute strength, in order to protect the ones they cherish."',
		'n "Also, there is a little transparent pocket inside that you can put a photo of your loved one in. It may just be me, but I think carrying around a reminder of who you are fighting for is a powerful idea."',
		'n As he says such, you sense a slightly melancholic tone from the hero who had in life an abundance or riches but no one to share it with. It seems that, in his eyes, a wallet is a modern weapon with which to protect the ones you treasure.',
		"hide image wallet with fadeOut duration 1s",
		"wait 1000",
		"jump Alisha_CE"
	],

	'Alisha_CE': [
		"show image alisha_choco with fadeIn duration 1s",
		"wait 500",
		"n Alisha's Valentine's Gift - Reward for a Troublesome Disciple",
		"n A raspberry white chocolate cake that's sweet enough to rot one's teeth. The creamy chocolate practically melts in one's mouth while the berry flavor adds a nice, tart punch to the sweetness. It was meant to be a personal cake for one, but it ended up being large enough to easily serve four.",
		"n In the end, it's almost surprising how normal it is. Or rather, the true surprise is the fact that Alisha's good at cooking. Since she worked so hard, it shouldn't be too much trouble to feed her some, right?",
		"hide image alisha_choco with fadeOut duration 1s",
		"wait 2000",
		"jump Start"
	]
});