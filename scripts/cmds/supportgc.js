module.exports = {
	config: {
		name: "supportgc",
aliases: ["sgc"],
		version: "1.2",
		author: "Loid Butter",
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "Add user to support group",
		},
		longDescription: {
			en: "This command adds the user to the admin support group.",
		},
		category: "supportgc",
		guide: {
			en: "╭━━━━━༺۝༻━━━━━╮\n\n𝐓𝐨 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐜𝐨𝐦𝐦𝐚𝐧𝐝, 𝐬𝐢𝐦𝐩𝐥𝐲 𝐭𝐲𝐩𝐞 /𝐬𝐮𝐩𝐩𝐨𝐫𝐭𝐠𝐜.\n\n╰━━━━━༺۝༻━━━━━╯",
		},
	},
 
	// onStart is a function that will be executed when the command is executed
	onStart: async function ({ api, args, message, event }) {
		const supportGroupId = "868152059025195"; // ID of the support group
 
		const threadID = event.threadID;
		const userID = event.senderID;
 
		// Check if the user is already in the support group
		const threadInfo = await api.getThreadInfo(supportGroupId);
		const participantIDs = threadInfo.participantIDs;
		if (participantIDs.includes(userID)) {
			// User is already in the support group
			api.sendMessage(
				"╭━━━━━༺۝༻━━━━━╮\n\n𝐘𝐨𝐮 𝐚𝐫𝐞 𝐚𝐥𝐫𝐞𝐚𝐝𝐲 𝐢𝐧 𝐭𝐡𝐞 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐠𝐫𝐨𝐮𝐩. 𝐈𝐟 𝐲𝐨𝐮 𝐝𝐢𝐝𝐧'𝐭 𝐟𝐢𝐧𝐝 𝐢𝐭, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐬 𝐨𝐫 𝐬𝐩𝐚𝐦 𝐛𝐨𝐱.\n\n╰━━━━━༺۝༻━━━━━╯",
				threadID
			);
		} else {
			// Add user to the support group
			api.addUserToGroup(userID, supportGroupId, (err) => {
				if (err) {
					console.error("╭━━━━━༺۝༻━━━━━╮\n\n𝐅𝐚𝐢𝐥𝐞𝐝 𝐭𝐨 𝐚𝐝𝐝 𝐮𝐬𝐞𝐫 𝐭𝐨 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐠𝐫𝐨𝐮𝐩\n\n╰━━━━━༺۝༻━━━━━╯", err);
					api.sendMessage("╭━━━━━༺۝༻━━━━━╮\n\n𝐈 𝐜𝐚𝐧'𝐭 𝐚𝐝𝐝 𝐲𝐨𝐮 𝐛𝐞𝐜𝐚𝐮𝐬𝐞 𝐲𝐨𝐮𝐫 𝐢𝐝 𝐢𝐬 𝐧𝐨𝐭 𝐚𝐥𝐥𝐨𝐰𝐞𝐝 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐫𝐞𝐪𝐮𝐞𝐬𝐭 𝐨𝐫 𝐲𝐨𝐮𝐫 𝐚𝐜𝐜𝐨𝐮𝐧𝐭 𝐢𝐬 𝐩𝐫𝐢𝐯𝐚𝐭𝐞. 𝐩𝐥𝐞𝐚𝐬𝐞 𝐚𝐝𝐝 𝐦𝐞 𝐭𝐡𝐞𝐧 𝐭𝐫𝐲 𝐚𝐠𝐚𝐢𝐧...\n\n╰━━━━━༺۝༻━━━━━╯", threadID);
				} else {
					api.sendMessage(
						"╭━━━━━༺۝༻━━━━━╮\n\n𝐘𝐨𝐮 𝐡𝐚𝐯𝐞 𝐛𝐞𝐞𝐧 𝐚𝐝𝐝𝐞𝐝 𝐭𝐨 𝐭𝐡𝐞 𝐚𝐝𝐦𝐢𝐧 𝐬𝐮𝐩𝐩𝐨𝐫𝐭 𝐠𝐫𝐨𝐮𝐩. 𝐈𝐟 𝐲𝐨𝐮 𝐝𝐢𝐝𝐧'𝐭 𝐟𝐢𝐧𝐝 𝐭𝐡𝐞 𝐛𝐨𝐱 𝐢𝐧 𝐲𝐨𝐮𝐫 𝐢𝐧𝐛𝐨𝐱, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐡𝐞𝐜𝐤 𝐲𝐨𝐮𝐫 𝐦𝐞𝐬𝐬𝐚𝐠𝐞 𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐬 𝐨𝐫 𝐬𝐩𝐚𝐦 𝐛𝐨𝐱.\n\n╰━━━━━༺۝༻━━━━━╯",
						threadID
					);
				}
			});
		}
	},
};
