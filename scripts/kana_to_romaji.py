import sys
import re

if len(sys.argv) != 2: 
  print('usage: python', sys.argv[0], 'filename.txt')
  exit(1)

fd = open(sys.argv[1])
lyrics = fd.read()

lyrics = re.sub(r'　', ' ', lyrics)
lyrics = re.sub(r'てぃ', 'thi', lyrics)
lyrics = re.sub(r'ティ', 'thi', lyrics)
lyrics = re.sub(r'でぃ', 'dhi', lyrics)
lyrics = re.sub(r'ディ', 'dhi', lyrics)
lyrics = re.sub(r'とぅ', 'tu', lyrics)
lyrics = re.sub(r'トゥ', 'tu', lyrics)
lyrics = re.sub(r'どぅ', 'du', lyrics)
lyrics = re.sub(r'ドゥ', 'du', lyrics)
lyrics = re.sub(r'ぐゎ', 'gwa', lyrics)
lyrics = re.sub(r'グヮ', 'gwa', lyrics)
lyrics = re.sub(r'ふぃ', 'fi', lyrics)
lyrics = re.sub(r'フィ', 'fi', lyrics)
lyrics = re.sub(r'ちぇ', 'che', lyrics)
lyrics = re.sub(r'チェ', 'che', lyrics)


lyrics = re.sub(r'きゃ', 'kya', lyrics)
lyrics = re.sub(r'きゅ', 'kyu', lyrics)
lyrics = re.sub(r'きょ', 'kyo', lyrics)
lyrics = re.sub(r'ぎゃ', 'gya', lyrics)
lyrics = re.sub(r'ぎゅ', 'gyu', lyrics)
lyrics = re.sub(r'ぎょ', 'gyo', lyrics)
lyrics = re.sub(r'しゃ', 'sha', lyrics)
lyrics = re.sub(r'しゅ', 'shu', lyrics)
lyrics = re.sub(r'しょ', 'sho', lyrics)
lyrics = re.sub(r'じゃ', 'jya', lyrics)
lyrics = re.sub(r'じゅ', 'jyu', lyrics)
lyrics = re.sub(r'じょ', 'jyo', lyrics)
lyrics = re.sub(r'ちゃ', 'cha', lyrics)
lyrics = re.sub(r'ちゅ', 'chu', lyrics)
lyrics = re.sub(r'ちょ', 'cho', lyrics)
lyrics = re.sub(r'ぢゃ', 'dya', lyrics)
lyrics = re.sub(r'ぢゅ', 'dyu', lyrics)
lyrics = re.sub(r'ぢょ', 'dyo', lyrics)
lyrics = re.sub(r'にゃ', 'nya', lyrics)
lyrics = re.sub(r'にゅ', 'nyu', lyrics)
lyrics = re.sub(r'にょ', 'nyo', lyrics)
lyrics = re.sub(r'ひゃ', 'hya', lyrics)
lyrics = re.sub(r'ひゅ', 'hyu', lyrics)
lyrics = re.sub(r'ひょ', 'hyo', lyrics)
lyrics = re.sub(r'びゃ', 'bya', lyrics)
lyrics = re.sub(r'びゅ', 'byu', lyrics)
lyrics = re.sub(r'びょ', 'byo', lyrics)
lyrics = re.sub(r'ぴゃ', 'pya', lyrics)
lyrics = re.sub(r'ぴゅ', 'pyu', lyrics)
lyrics = re.sub(r'ぴょ', 'pyo', lyrics)
lyrics = re.sub(r'みゃ', 'mya', lyrics)
lyrics = re.sub(r'みゅ', 'myu', lyrics)
lyrics = re.sub(r'みょ', 'myo', lyrics)
lyrics = re.sub(r'りゃ', 'rya', lyrics)
lyrics = re.sub(r'りゅ', 'ryu', lyrics)
lyrics = re.sub(r'りょ', 'ryo', lyrics)

lyrics = re.sub(r'キャ', 'kya', lyrics)
lyrics = re.sub(r'キュ', 'kyu', lyrics)
lyrics = re.sub(r'キョ', 'kyo', lyrics)
lyrics = re.sub(r'ギャ', 'gya', lyrics)
lyrics = re.sub(r'ギュ', 'gyu', lyrics)
lyrics = re.sub(r'ギョ', 'gyo', lyrics)
lyrics = re.sub(r'シャ', 'sha', lyrics)
lyrics = re.sub(r'シュ', 'shu', lyrics)
lyrics = re.sub(r'ショ', 'sho', lyrics)
lyrics = re.sub(r'ジャ', 'jya', lyrics)
lyrics = re.sub(r'ジュ', 'jyu', lyrics)
lyrics = re.sub(r'ジョ', 'jyo', lyrics)
lyrics = re.sub(r'チャ', 'cha', lyrics)
lyrics = re.sub(r'チュ', 'chu', lyrics)
lyrics = re.sub(r'チョ', 'cho', lyrics)
lyrics = re.sub(r'ヂャ', 'dya', lyrics)
lyrics = re.sub(r'ヂュ', 'dyu', lyrics)
lyrics = re.sub(r'ヂョ', 'dyo', lyrics)
lyrics = re.sub(r'ニャ', 'nya', lyrics)
lyrics = re.sub(r'ニュ', 'nyu', lyrics)
lyrics = re.sub(r'ニョ', 'nyo', lyrics)
lyrics = re.sub(r'ヒャ', 'hya', lyrics)
lyrics = re.sub(r'ヒュ', 'hyu', lyrics)
lyrics = re.sub(r'ヒョ', 'hyo', lyrics)
lyrics = re.sub(r'ビャ', 'bya', lyrics)
lyrics = re.sub(r'ビュ', 'byu', lyrics)
lyrics = re.sub(r'ビョ', 'byo', lyrics)
lyrics = re.sub(r'ピャ', 'pya', lyrics)
lyrics = re.sub(r'ピュ', 'pyu', lyrics)
lyrics = re.sub(r'ピョ', 'pyo', lyrics)
lyrics = re.sub(r'ミャ', 'mya', lyrics)
lyrics = re.sub(r'ミュ', 'myu', lyrics)
lyrics = re.sub(r'ミョ', 'myo', lyrics)
lyrics = re.sub(r'リャ', 'rya', lyrics)
lyrics = re.sub(r'リュ', 'ryu', lyrics)
lyrics = re.sub(r'リョ', 'ryo', lyrics)

d = {
'あ':'a', 'い':'i', 'う':'u', 'え':'e', 'お':'o',
'か':'ka', 'き':'ki', 'く':'ku', 'け':'ke', 'こ':'ko',
'さ':'sa', 'し':'shi', 'す':'su', 'せ':'se', 'そ':'so',
'た':'ta', 'ち':'chi', 'つ':'tsu', 'て':'te', 'と':'to',
'な':'na', 'に':'ni', 'ぬ':'nu', 'ね':'ne', 'の':'no',
'は':'ha', 'ひ':'hi', 'ふ':'fu', 'へ':'he', 'ほ':'ho',
'ま':'ma', 'み':'mi', 'む':'mu', 'め':'me', 'も':'mo',
'や':'ya', 'ゆ':'yu', 'よ':'yo',
'ら':'ra', 'り':'ri', 'る':'ru', 'れ':'re', 'ろ':'ro',
'わ':'wa', 'を':'wo',
'ん':'n',
'が':'ga', 'ぎ':'gui', 'ぐ':'gu', 'げ':'gue', 'ご':'go',
'ざ':'za', 'じ':'ji', 'ず':'zu', 'ぜ':'ze', 'ぞ':'zo',
'だ':'da', 'ぢ':'di', 'づ':'zu', 'で':'de', 'ど':'do',
'ば':'ba', 'び':'bi', 'ぶ':'bu', 'べ':'be', 'ぼ':'bo',
'ぱ':'pa', 'ぴ':'pi', 'ぷ':'pu', 'ぺ':'pe', 'ぽ':'po',

'ア':'a', 'イ':'i', 'ウ':'u', 'エ':'e', 'オ':'o',
'カ':'ka', 'キ':'ki', 'ク':'ku', 'ケ':'ke', 'コ':'ko',
'サ':'sa', 'シ':'shi', 'ス':'su', 'セ':'se', 'ソ':'so',
'タ':'ta', 'チ':'chi', 'ツ':'tsu', 'テ':'te', 'ト':'to',
'ナ':'na', 'ニ':'ni', 'ヌ':'nu', 'ネ':'ne', 'ノ':'no',
'ハ':'ha', 'ヒ':'hi', 'フ':'fu', 'ヘ':'he', 'ホ':'ho',
'マ':'ma', 'ミ':'mi', 'ム':'mu', 'メ':'me', 'モ':'mo',
'ヤ':'ya', 'ユ':'yu', 'ヨ':'yo',
'ラ':'ra', 'リ':'ri', 'ル':'ru', 'レ':'re', 'ロ':'ro',
'ワ':'wa', 'ヲ':'wo',
'ン':'n',
'ガ':'ga', 'ギ':'gui', 'グ':'gu', 'ゲ':'gue', 'ゴ':'go',
'ザ':'za', 'ジ':'ji', 'ズ':'zu', 'ゼ':'ze', 'ゾ':'zo',
'ダ':'da', 'ヂ':'di', 'ヅ':'zu', 'デ':'de', 'ド':'do',
'バ':'ba', 'ビ':'bi', 'ブ':'bu', 'ベ':'be', 'ボ':'bo',
'パ':'pa', 'ピ':'pi', 'プ':'pu', 'ペ':'pe', 'ポ':'po'
}

romaji = ""
for c in lyrics:
  if c == "ー":
    romaji += romaji[-1]
  else:
    romaji += d.get(c, c)
print (romaji)
