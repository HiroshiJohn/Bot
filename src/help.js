const help = (prefix) => {
	return `> *Sticker Comandos* <
comando : *${prefix}sticker* ou *${prefix}stiker*
desc : converte image/gif/video em sticker
usar : responda image/gif/video, ou envie image/gif/video com legenda\n
comndo : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converte image para sticker e remove o fundo
usar : responda image, ou envie image com legenda\n
comaando : *${prefix}toimg*
desc : convert sticker to image
usar : responda um sticker\n
comando : *${prefix}tsticker* ou *${prefix}tstiker*
desc : converte texto para sticker
usar : *${prefix}tsticker texto aqui*\n
> *Meme Comandos* <
comando : *${prefix}meme*
desc : meme aleatório [english]
usar : apenas envie o comando\n
comando : *${prefix}memeindo*
desc : meme aleatório [indo]
usar : apenas envie o comando\n
> *Outros Comandos* <
comandos : *${prefix}gtts*
desc : converte texto para áudio
usar : *${prefix}gtts [cc] [texto]*\nexample : *${prefix}gtts pt teste*\n
comando : *${prefix}loli*
desc : imagem de loli aleatória
usar : apenas envie o comando\n
comando : *${prefix}nsfwloli*
desc : imagem nsfw loli aleatória
usar : apenas envie o comando\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
usar : *${prefix}url2img [tipo] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
usar : *${prefix}simi suamensagem*\n
comando : *${prefix}ocr*
desc : pega o texto da foto
usar : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : procure anime com imagem [ Qual anime é este ]
usar : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : substituir prefixo
usar : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
nota : Este comando só pode ser usado pelo proprietário do bot\n
> *Grupo Comandos* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
usar : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
usar : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
command : *${prefix}promote*
desc : make the group member as group admin
usage : *${prefix}promote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}demote*
desc : make the group admin as group member
usage : *${prefix}demote @tagmember*\n
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}linkgroup*
desc : take the group link
usage : just send the command
note : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
command : *${prefix}leave*
desc : Make bot leave the group
usage : just send the command
note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
desc : tags all group members including admins too
usage : just send the command
note : This command can be used if you are a group admin\n
command : *${prefix}simih*
desc : activate simi mode in the group
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : This command can be used if you are a group admin\n`
}

exports.help = help
