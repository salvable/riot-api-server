// 챔피언 코드를 이미지를 받아오기 위한 영문과 한글로 변환

export function getEnNameByChampionId(championId: any) // 매개변수: 챔피언 id
{
    switch (championId) {
        case 266:
            championId = "Aatrox";break; // 챔피언 영어 이름
        case 412:
            championId ="Thresh";break;
        case 23:
            championId = "Tryndamere";break;
        case 79:
            championId = "Gragas";break;
        case 69:
            championId = "Cassiopeia";break;
        case  136:
            championId = "AurelionSol";break;
        case   13:
            championId = "Ryze";break;
        case   78:
            championId = "Poppy";break;
        case  14:
            championId = "Sion";break;
        case  1:
            championId = "Annie";break;
        case  202:
            championId = "Jhin";break;
        case 43:
            championId = "Karma";break;
        case  111:
            championId = "Nautilus";break;
        case 240:
            championId = "Kled";break;
        case   99:
            championId = "Lux";break;
        case  103:
            championId =  "Ahri";break;
        case   2:
            championId =  "Olaf";break;
        case   112:
            championId =  "Viktor";break;
        case  34:
            championId =  "Anivia";break;
        case   27:
            championId = "Singed";break;
        case   86:
            championId = "Garen";break;
        case   127:
            championId = "Lissandra";break;
        case  57:
            championId =    "Maokai";break;
        case  25:
            championId =  "Morgana";break;
        case    28:
            championId =  "Evelynn";break;
        case   105:
            championId =  "Fizz";break;
        case   74:
            championId =  "Heimerdinger";break;
        case   238:
            championId =  "Zed";break;
        case   68:
            championId =  "Rumble";break;
        case  82:
            championId =  "Mordekaiser";break;
        case  37:
            championId =  "Sona";break;
        case  96:
            championId =  "KogMaw";break;
        case  55:
            championId =  "Katarina";break;
        case  117:
            championId =  "Lulu";break;
        case  22:
            championId =  "Ashe";break;
        case  30:
            championId =  "Karthus";break;
        case  12:
            championId =  "Alistar";break;
        case  122:
            championId =  "Darius";break;
        case   67:
            championId = "Vayne";break;
        case  110:
            championId = "Varus";break;
        case  77:
            championId =  "Udyr";break;
        case  89:
            championId =  "Leona";break;
        case   126:
            championId = "Jayce";break;
        case   134:
            championId = "Syndra";break;
        case   80:
            championId =  "Pantheon";break;
        case  92:
            championId = "Riven";break;
        case  121:
            championId = "Khazix";break;
        case  42:
            championId =  "Corki";break;
        case  268:
            championId =   "Azir";break;
        case 51:
            championId =   "Caitlyn";break;
        case   76:
            championId =  "Nidalee";break;
        case 85:
            championId =  "Kennen";break;
        case 3:
            championId =  "Galio";break;
        case 45:
            championId =  "Veigar";break;
        case 432:
            championId =  "Bard";break;
        case 150:
            championId = "Gnar";break;
        case 90:
            championId =   "Malzahar";break;
        case   104:
            championId =  "Graves";break;
        case  254:
            championId =  "Vi";break;
        case  10:
            championId =  "Kayle";break;
        case  39:
            championId =  "Irelia";break;
        case  64:
            championId = "LeeSin";break;
        case  420:
            championId =   "Illaoi";break;
        case 60:
            championId =  "Elise";break;
        case  106:
            championId =  "Volibear";break;
        case 20:
            championId = "Nunu";break;
        case 4:
            championId =  "TwistedFate";break;
        case 24:
            championId =  "Jax";break;
        case  102:
            championId =  "Shyvana";break;
        case 429:
            championId =  "Kalista";break;
        case 36:
            championId =  "DrMundo";break;
        case 427:
            championId = "Ivern";break;
        case  131:
            championId = "Diana";break;
        case 63:
            championId = "Brand";break;
        case 113:
            championId = "Sejuani";break;
        case 8:
            championId =  "Vladimir";break;
        case  154:
            championId =  "Zac";break;
        case  421:
            championId = "RekSai";break;
        case  133:
            championId = "Quinn";break;
        case  84:
            championId =  "Akali";break;
        case  163:
            championId =  "Taliyah";break;
        case  18:
            championId =  "Tristana";break;
        case  120:
            championId =  "Hecarim";break;
        case  15:
            championId = "Sivir";break;
        case  236:
            championId =  "Lucian";break;
        case   107:
            championId = "Rengar";break;
        case  19:
            championId = "Warwick";break;
        case  72:
            championId =  "Skarner";break;
        case  54:
            championId = "Malphite";break;
        case  157:
            championId =  "Yasuo";break;
        case  101:
            championId = "Xerath";break;
        case   17:
            championId = "Teemo";break;
        case  75:
            championId =  "Nasus";break;
        case  58:
            championId =  "Renekton";break;
        case   119:
            championId =  "Draven";break;
        case  35:
            championId =  "Shaco";break;
        case  50:
            championId =  "Swain";break;
        case   91:
            championId =  "Talon";break;
        case  40:
            championId = "Janna";break;
        case   115:
            championId =  "Ziggs";break;
        case   245:
            championId =  "Ekko";break;
        case   61:
            championId =  "Orianna";break;
        case  114:
            championId = "Fiora";break;
        case  9:
            championId =  "Fiddlesticks";break;
        case  31:
            championId =  "Chogath";break;
        case  33:
            championId =  "Rammus";break;
        case  7:
            championId =  "Leblanc";break;
        case  16:
            championId =  "Soraka";break;
        case  26:
            championId =  "Zilean";break;
        case  56:
            championId = "Nocturne";break;
        case  222:
            championId =  "Jinx";break;
        case  83:
            championId = "Yorick";break;
        case  6:
            championId = "Urgot";break;
        case  203:
            championId =  "Kindred";break;
        case  21:
            championId =  "MissFortune";break;
        case  62:
            championId =  "MonkeyKing";break;
        case  53:
            championId = "Blitzcrank";break;
        case   98:
            championId =  "Shen";break;
        case  201:
            championId =   "Braum";break;
        case  5:
            championId = "XinZhao";break;
        case  29:
            championId = "Twitch";break;
        case  11:
            championId = "MasterYi";break;
        case  44:
            championId = "Taric";break;
        case  32:
            championId = "Amumu";break;
        case 41:
            championId =  "Gangplank";break;
        case  48:
            championId =  "Trundle";break;
        case   38:
            championId = "Kassadin";break;
        case   161:
            championId = "Velkoz";break;
        case   143:
            championId =  "Zyra";break;
        case  267:
            championId =  "Nami";break;
        case  59:
            championId =  "JarvanIV";break;
        case  81:
            championId =   "Ezreal";break;
        case    350:
            championId =   "Yuumi";break;
        case  145:
            championId =  "Kaisa";break;
        case   518:
            championId = "Neeko";break;
        case   142:
            championId =  "Zoe";break;
        case   498:
            championId =  "Xayah";break;
        case  517:
            championId =  "Sylas";break;
        case  141:
            championId =   "Kayn";break;
        case   516:
            championId =  "Ornn";break;
        case   555:
            championId =   "Pyke";break;
        case  164:
            championId =   "Camille";break;
        case   246:
            championId = "Qiyana";break;
        case   497:
            championId = "Rakan";break;
        case 777:
            championId =  "Yone";break;
        case 876:
            championId = "Lillia";break;
        case 235:
            championId = "Senna";break;
        case 875:
            championId = "Sett";break;
        case 523:
            championId = "Aphelios";break;
        case 223:
            championId = "TahmKench";break;
        case 360:
            championId = "Samira";break;
        case 147:
            championId = "Seraphine";break;
        case 526:
            championId = "Rell";break;
        case 234:
            championId = "Viego";break;
        case 887:
            championId = "Gwen";break;
        case 166:
            championId = "Akshan";break;
        case 711:
            championId = "Vex";break;


        default:
            championId = -1;break;

    }


    return championId;
}

export function getKrNameByChampionId(championId: any){ // 매개변수: 챔피언 id
    switch (championId) {
        case 266:
            championId = "아트록스";break; // 챔피언 한글 이름
        case 412:
            championId ="쓰레쉬";break;
        case 23:
            championId = "트린다미어";break;
        case 79:
            championId = "그라가스";break;
        case 69:
            championId = "카시오페아";break;
        case  136:
            championId = "아우렐리온 솔";break;
        case   13:
            championId = "라이즈";break;
        case   78:
            championId = "뽀삐";break;
        case  14:
            championId = "사이온";break;
        case  1:
            championId = "애니";break;
        case  202:
            championId = "진";break;
        case 43:
            championId = "카르마";break;
        case  111:
            championId = "노틸러스";break;
        case 240:
            championId = "클레드";break;
        case   99:
            championId = "럭스";break;
        case  103:
            championId =  "아리";break;
        case   2:
            championId =  "올라프";break;
        case   112:
            championId =  "빅토르";break;
        case  34:
            championId =  "애니비아";break;
        case   27:
            championId = "신지드";break;
        case   86:
            championId =        "가렌";break;
        case   127:
            championId =         "리산드라";break;
        case    57:
            championId =    "마오카이";break;
        case     25:
            championId =  "모르가나";break;
        case    28:
            championId =  "이블린";break;
        case   105:
            championId =  "피즈";break;
        case   74:
            championId =  "하이머딩거";break;
        case   238:
            championId =  "제드";break;
        case   68:
            championId =  "럼블";break;
        case  82:
            championId =  "모데카이저";break;
        case  37:
            championId =  "소나";break;
        case  96:
            championId =  "코그모";break;
        case  55:
            championId =  "카타리나";break;
        case  117:
            championId =  "룰루";break;
        case  22:
            championId =  "애쉬";break;
        case  30:
            championId =  "카서스";break;
        case  12:
            championId =  "알리스타";break;
        case  122:
            championId =  "다리우스";break;
        case   67:
            championId = "베인";break;
        case  110:
            championId = "바루스";break;
        case  77:
            championId =  "우디르";break;
        case  89:
            championId =  "레오나";break;
        case   126:
            championId = "제이스";break;
        case   134:
            championId = "신드라";break;
        case   80:
            championId =  "판테온";break;
        case  92:
            championId = "리븐";break;
        case  121:
            championId = "카직스";break;
        case  42:
            championId =  "코르키";break;
        case  268:
            championId =   "아지르";break;
        case 51:
            championId =   "케이틀린";break;
        case   76:
            championId =  "니달리";break;
        case 85:
            championId =  "케인";break;
        case 3:
            championId =  "갈리오";break;
        case 45:
            championId =  "베이가";break;
        case 432:
            championId =  "바드";break;
        case 150:
            championId = "나르";break;
        case 90:
            championId =   "말자하";break;
        case   104:
            championId =  "그레이브즈";break;
        case  254:
            championId =  "바이";break;
        case  10:
            championId =  "케일";break;
        case  39:
            championId =  "이렐리아";break;
        case  64:
            championId = "리 신";break;
        case  420:
            championId =   "일라오이";break;
        case 60:
            championId =  "엘리스";break;
        case  106:
            championId =  "볼리베어";break;
        case 20:
            championId = "누누";break;
        case 4:
            championId =  "트위스티드 페이트";break;
        case 24:
            championId =  "잭스";break;
        case  102:
            championId =  "쉬바나";break;
        case 429:
            championId =  "칼리스타";break;
        case 36:
            championId =  "문도 박사";break;
        case 427:
            championId = "아이번";break;
        case  131:
            championId = "다이애나";break;
        case 63:
            championId = "브랜드";break;
        case 113:
            championId = "세주아니";break;
        case 8:
            championId =  "블라디미르";break;
        case  154:
            championId =  "자크";break;
        case  421:
            championId = "렉사이";break;
        case  133:
            championId = "퀸";break;
        case  84:
            championId =  "아칼리";break;
        case  163:
            championId =  "탈리아";break;
        case  18:
            championId =  "트리스타나";break;
        case  120:
            championId =  "헤카림";break;
        case  15:
            championId = "시비르";break;
        case  236:
            championId =  "루시안";break;
        case   107:
            championId = "렝가";break;
        case  19:
            championId = "워윅";break;
        case  72:
            championId =  "스카너";break;
        case  54:
            championId = "말파이트";break;
        case  157:
            championId =  "야스오";break;
        case  101:
            championId = "제라스";break;
        case   17:
            championId = "티모";break;
        case  75:
            championId =  "나서스";break;
        case  58:
            championId =  "레넥톤";break;
        case   119:
            championId =  "드레이븐";break;
        case  35:
            championId =  "샤코";break;
        case  50:
            championId =  "스웨인";break;
        case   91:
            championId =  "탈론";break;
        case  40:
            championId = "잔나";break;
        case   115:
            championId =  "직스";break;
        case   245:
            championId =  "에코";break;
        case   61:
            championId =  "오리아나";break;
        case  114:
            championId = "피오라";break;
        case  9:
            championId =  "피들스틱";break;
        case  31:
            championId =  "초가스";break;
        case  33:
            championId =  "람머스";break;
        case  7:
            championId =  "르블랑";break;
        case  16:
            championId =  "소라카";break;
        case  26:
            championId =  "질리언";break;
        case  56:
            championId = "녹턴";break;
        case  222:
            championId =  "징크스";break;
        case  83:
            championId = "요릭";break;
        case  6:
            championId = "우르곳";break;
        case  203:
            championId =  "킨드레드";break;
        case  21:
            championId =  "미스 포츈";break;
        case  62:
            championId =  "오공";break;
        case  53:
            championId = "블리츠크랭크";break;
        case   98:
            championId =  "쉔";break;
        case  201:
            championId =   "브라움";break;
        case  5:
            championId = "신 짜오";break;
        case  29:
            championId = "트위치";break;
        case  11:
            championId = "마스터 이";break;
        case  44:
            championId = "타릭";break;
        case  32:
            championId = "아무무";break;
        case 41:
            championId =  "갱플랭";break;
        case  48:
            championId =  "트런들";break;
        case   38:
            championId = "카사딘";break;
        case   161:
            championId = "벨코즈";break;
        case   143:
            championId =  "자이라";break;
        case  267:
            championId =  "나미";break;
        case  59:
            championId =  "자르반 4세";break;
        case  81:
            championId =   "이즈리얼";break;
        case    350:
            championId =   "유미";break;
        case  145:
            championId =  "카이사";break;
        case   518:
            championId = "니코";break;
        case   142:
            championId =  "조이";break;
        case   498:
            championId =  "자야";break;
        case  517:
            championId =  "사일러스";break;
        case  141:
            championId =   "케인"; break;
        case   516:
            championId =  "오른";break;
        case   555:
            championId =   "파이크";break;
        case  164:
            championId =   "카멜";break;
        case   246:
            championId = "키아나";break;
        case   497:
            championId = "라칸";break;
        case 777:
            championId =  "요네";break;
        case 876:
            championId = "릴리아";break;
        case 235:
            championId = "세나";break;
        case 875:
            championId = "세트";break;
        case 523:
            championId = "아펠리오스";break;
        case 223:
            championId = "탐 켄치";break;
        case 360:
            championId = "사미라";break;
        case 147:
            championId = "세라핀";break;
        case 526:
            championId = "렐";break;
        case 234:
            championId = "비에고";break;
        case 887:
            championId = "그웬";break;
        case 166:
            championId = "아크샨";break;
        case 711:
            championId = "벡스";break;



        default:
            championId = -1;break;

    }


    return championId;
}
