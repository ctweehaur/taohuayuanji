// ==========================================================================
// 📖 《桃花源记》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（第1段）</strong>" + U_TAG("东晋") + U_TAG("太元") + "年间，" + U_TAG("武陵") + "郡有个" + OMISSION_TAG("介词", "以") + "捕鱼为生计的人。有一天，" + OMISSION_TAG("主语", "他") + "沿着溪水划船前行，忘记了路程的远近。忽然遇到一片桃花林，在溪流两岸绵延几百步，林中没有别的树木，芳香的青草鲜艳美丽，飘落的花瓣繁多交错。渔人对此感到非常惊奇。" + OMISSION_TAG("主语", "他") + "又继续往前划，想要走到那片桃林的尽头。<br>" +
        "<strong>（第2段）</strong>桃林在溪水的源头走到尽头，便看见一座山。山上有个小洞口，洞里隐隐约约好像有亮光。" + OMISSION_TAG("主语", "渔人") + "便离开船只，从洞口走进去。起初洞道极其狭窄，仅容一人通过。" + OMISSION_TAG("主语", "他") + "又走了几十步，突然变得开阔敞亮。只见土地平坦宽广，房屋排列得整整齐齐，有肥沃的田地、美丽的池塘以及桑树、竹林这一类景物。田间小路交错相通，鸡鸣狗叫的声音彼此都能听见。那里面的人们来来往往耕种劳作，男女的穿戴打扮全都像桃源以外的世人。老人和小孩都悠闲愉快、自得其乐。<br>" +
        "<strong>（第3段）</strong>" + OMISSION_TAG("主语", "村人") + "看见渔人，竟然大吃一惊，询问" + OMISSION_TAG("宾语", "他") + "从哪里来。" + OMISSION_TAG("主语", "渔人") + "详尽地回答了他们。" + OMISSION_TAG("主语", "村人") + "便邀请" + OMISSION_TAG("宾语", "他") + "回到自己家里，替" + OMISSION_TAG("宾语", "他") + "摆酒杀鸡做饭菜。村里的人听说有这样一个人，全都赶来探问消息。他们自己说祖先为了躲避" + U_TAG("秦") + "朝的战乱，带领妻子儿女和同乡邻人来到这个与世隔绝的地方，不再从这里出去，于是就同外面的人断绝了往来。" + OMISSION_TAG("主语", "他们") + "问现在是什么朝代，竟然不知道有过" + U_TAG("汉") + "朝，更不必说" + U_TAG("魏") + "朝和" + U_TAG("晋") + "朝了。渔人逐一替" + OMISSION_TAG("宾语", "他们") + "详细说出自己所知道的外界世事，" + OMISSION_TAG("主语", "村人") + "听后都感叹惋惜。其余的村民又各自邀请" + OMISSION_TAG("宾语", "渔人") + "到自己家中做客，都拿出酒菜饭食款待他。" + OMISSION_TAG("主语", "渔人") + "逗留了几天，便告辞离开。桃源里的人叮嘱" + OMISSION_TAG("宾语", "他") + "说：“这里的事不值得对外面的人说啊。”<br>" +
        "<strong>（第4段）</strong>" + OMISSION_TAG("主语", "渔人") + "走出洞口以后，找到他的船，就沿着来时的路返回，" + OMISSION_TAG("主语", "他") + "在沿途处处都做了记号。到了" + U_TAG("武陵") + "郡城，去拜见太守，报告了这番经历。太守立即派人跟着他前往，寻找先前所做的记号，最终迷失了方向，再也找不到通往桃花源的路了。<br>" +
        "<strong>（第5段）</strong>" + U_TAG("南阳") + "人" + U_TAG("刘子骥") + "，是一位品德高尚的隐士，听说了这件事，高高兴兴地计划前往探访。但未能实现，不久就因病去世了。此后就再也没有探访桃花源的人了。" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第3–4页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《桃花源记》选自《陶渊明集》，约作于南朝宋永初二年（421年），原为《桃花源诗》前面的序文。作者" + U_TAG("陶渊明") + "（名潜，字元亮，世称靖节先生）因不满当时刘裕篡晋的黑暗政治与连年战乱，以<strong>“武陵渔人的行踪（发现桃源 → 进入桃源 → 做客离开 → 再寻迷路）”</strong>为线索，虚构了一个没有剥削、没有战乱、人人自食其力、和乐淳朴的理想社会（世外桃源），寄托了作者及广大百姓对和平美好生活的深切向往。</span>",

    paragraphs: {
        1: "<strong>【第1段：缘溪忘路，忽逢桃林（发现桃花源的前奏）】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("晋") + U_TAG("太元") + "中，" + U_TAG("武陵") + "人" + CARET + "捕鱼为业。[缘]溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草[鲜美]，[落英][缤纷]。渔人甚[异]之。复前行，欲[穷]其林。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("东晋") + U_TAG("太元") + "年间，" + U_TAG("武陵") + "郡有个人" + OMISSION_TAG("介词", "以") + "捕鱼为职业。" + OMISSION_TAG("主语", "他") + "[沿着]✓溪水划船，忘了路程的远近。忽然遇到一片桃花林，两岸绵延几百步，中间没有别的树，芳香的青草[鲜艳美丽]✓，[落花]✓[繁多交错]✓。渔人[对这景象感到非常惊奇]✓。又继续前行，想要[走完/穷尽]✓那片桃林。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("缘", "沿着、顺着（介词）", "缘故、缘分（名词）") +
                       ANCIENT_MODERN_TAG("鲜美", "鲜艳美丽", "（食物）味道好") +
                       ANCIENT_MODERN_TAG("穷", "穷尽、走到尽头（动词）", "贫穷、缺乏钱财") +
                       GRAMMAR_TAG("意动用法", "渔人甚异之 ＝ 以之为异（对它感到惊异）") +
                       GRAMMAR_TAG("课本阅读指引", "“忘”点出无意中接近；“忽”说明偶然引入奇境") +
                   "</div>" +
               "</div>" +
           "</div>",

        2: "<strong>【第2段：山口入洞，豁然开朗（桃源自然环境与宁静生活）】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "林尽" + CARET + "水源，便得一山。山有小口，[仿佛]若有光。" + CARET + "便[舍]船，从口入。初极狭，[才通人]。复行数十步，[豁然开朗]。土地平旷，屋[舍][俨然]，有良田、美池、桑竹之[属]。[阡陌][交通]，鸡犬相闻。其中往来种作，男女衣着，[悉]如[外人]。[黄发][垂髫]，[并]怡然自乐。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "桃林在溪水的源头走到尽头，便看见一座山。山上有个小洞口，[隐隐约约]✓好像有亮光。" + OMISSION_TAG("主语", "渔人") + "便[离开/舍弃]✓船，从洞口进去。起初极其狭窄，[仅容一人通过]✓。又走了几十步，突然变得[开阔敞亮]✓。土地平坦宽广，房[屋]✓[排列整齐]✓，有肥沃的田地、美丽的池塘、桑树竹林这一[类]✓。田间小路[交错相通]✓，鸡鸣狗叫彼此听见。里面的人来往耕种劳作，男女穿戴[全都]✓像[桃源以外的世人]✓。[老人]✓和[小孩]✓，[都]✓愉快地自得其乐。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("交通", "交错相通", "运输与通信事业") +
                       ANCIENT_MODERN_TAG("俨然", "整齐的样子", "形容很像") +
                       GRAMMAR_TAG("同形异音多义", "便舍(shě)船（离开） vs 屋舍(shè)俨然（房屋）") +
                       GRAMMAR_TAG("借代修辞", "黄发（老人） ／ 垂髫（儿童）") +
                   "</div>" +
               "</div>" +
           "</div>",

        3: "<strong>【第3段：村人款待，自述先世（桃源淳朴民风与避乱渊源）】</strong>" +
           "<div style='font-size:12.5px; color:var(--wrong-text); background:var(--wrong-bg); border:1px dashed var(--wrong-border); padding:6px 12px; border-radius:6px; margin-top:8px; font-weight:600;'>" +
               "💡 <strong>本段省略句极密集（UASA/SPM 翻译必考）：</strong>“见渔人”至“为设酒杀鸡作食”四句之内主语三次暗中转换（村人 → 渔人 → 村人），翻译时务必补全主语与介词宾语！" +
           "</div>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       CARET + "见渔人，乃大惊，问" + CARET + "所从来。" + CARET + "[具]答之。" + CARET + "便[要]" + CARET + "还家，为" + CARET + "设酒杀鸡作食。村中闻有此人，[咸]来[问讯]。自云先世避" + U_TAG("秦") + "时乱，率[妻子][邑人]来此[绝境]，不复出焉，遂与外人隔绝。" + CARET + "问今是何世，[乃]不知有" + U_TAG("汉") + "，[无论]" + U_TAG("魏") + U_TAG("晋") + "。此人一一为" + CARET + "[具言]所闻，" + CARET + "皆[叹惋]。余人各复[延]" + CARET + "至其家，皆出酒食。" + CARET + "停数日，辞去。此中人[语]云：“[不足]为外人道也。”" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "村人") + "看见渔人，竟大吃一惊，问" + OMISSION_TAG("宾语", "他") + "从哪里来。" + OMISSION_TAG("主语", "渔人") + "[详尽地]✓回答了他们。" + OMISSION_TAG("主语", "村人") + "便[邀请]✓" + OMISSION_TAG("宾语", "他") + "回家，替" + OMISSION_TAG("宾语", "他") + "摆酒杀鸡做饭。村里人听说有这个人，[全都]✓来[探问消息]✓。他们自己说祖先躲避" + U_TAG("秦") + "朝战乱，带领[妻子儿女]✓和[同乡人]✓来到这[与世隔绝的地方]✓，不再出去，于是与外人断绝往来。" + OMISSION_TAG("主语", "村人") + "问如今是什么朝代，[竟然]✓不知道有过" + U_TAG("汉") + "朝，[更不必说]✓" + U_TAG("魏") + "朝和" + U_TAG("晋") + "朝了。渔人逐一替" + OMISSION_TAG("宾语", "他们") + "[详细说出]✓所知道的事，" + OMISSION_TAG("主语", "村人") + "都[感叹惋惜]✓。其余的人又各自[邀请]✓" + OMISSION_TAG("宾语", "他") + "到自己家，都拿出酒食。" + OMISSION_TAG("主语", "渔人") + "住了几天，告辞离开。这里的人[告诉]✓他说：“[不值得/不必]✓对外面的人说啊。”" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("妻子", "妻子和儿女", "专指男子的配偶") +
                       ANCIENT_MODERN_TAG("绝境", "与人世隔绝的地方", "没有出路的境地") +
                       ANCIENT_MODERN_TAG("无论", "不要说、更不必说", "表条件的连词（不管）") +
                       ANCIENT_MODERN_TAG("不足", "不值得、不必", "不够、不充足") +
                       GRAMMAR_TAG("通假字与破音字", "要(yāo)＝通“邀”（邀请） ／ 语(yù)＝告诉") +
                   "</div>" +
               "</div>" +
           "</div>",

        4: "<strong>【第4段：处处志之，再寻迷路（理想与现实的阻隔）】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       CARET + "[既]出，得其船，便[扶][向路]，处处[志]之。[及]郡下，[诣]太守，说如此。太守即遣人随其往，[寻][向][所志]，遂迷，不复得路。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       OMISSION_TAG("主语", "渔人") + "[已经]✓走出洞口，找到他的船，便[沿着]✓[来时走的路]✓，处处[做记号]✓。[到了]✓郡城，[拜见]✓太守，讲述了这番经历。太守立即派人跟着他前往，[寻找]✓[先前]✓[所做的记号]✓，最终迷了路，再也找不到通往桃源的路了。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("扶", "沿着、顺着", "搀扶") +
                       ANCIENT_MODERN_TAG("向", "先前的、原来的", "方向、朝向") +
                       ANCIENT_MODERN_TAG("志", "做记号（动词）／记号", "志向、立志") +
                   "</div>" +
               "</div>" +
           "</div>",

        5: "<strong>【第5段：高士规往，后无问津（余韵悠长，点明乌托邦属性）】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       U_TAG("南阳") + U_TAG("刘子骥") + "，高尚士[也]，闻之，欣然[规往]。[未果]，[寻]病终。后遂无[问津]者。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       U_TAG("南阳") + "人" + U_TAG("刘子骥") + "，[是]✓一位品德高尚的隐士，听说了这件事，高高兴兴地[计划前往]✓。[没有实现]✓，[不久]✓就因病去世了。后来就再也没有[探访（询问渡口）]✓的人了。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("未果", "没有实现", "没有结果") +
                       ANCIENT_MODERN_TAG("寻（寻病终）", "不久、随即（副词）", "寻找（动词）") +
                       ANCIENT_MODERN_TAG("问津", "询问渡口，指寻访", "过问或尝试（无人问津）") +
                       GRAMMAR_TAG("判断句式", "南阳刘子骥，高尚士也（“……，……也”表判断）") +
                   "</div>" +
               "</div>" +
           "</div>"
    }
};
