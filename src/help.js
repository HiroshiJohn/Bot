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
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
usar : *${prefix}kick @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
usar : *${prefix}promote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usar : *${prefix}demote @tagmember*\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
usar : apenas envie o comando
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
usar : apenas envie o comando
nota : Só pode ser usado por administradores de grupo e proprietário do bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usar : apenas envie o comando
nota : Este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
usar : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
