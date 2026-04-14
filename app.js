const dimensionLabels = {
  E: "情绪表达",
  T: "技术掌控",
  S: "社交取向",
  M: "机动轻便",
  A: "仪式审美",
  R: "稳定保守",
  P: "人像情绪",
  ST: "街头日常",
  L: "风光旅行",
  W: "生态长焦",
  D: "静物细节",
  C: "混合创作",
};

const typeProfiles = [
  {
    id: "FUJI",
    name: "富士型",
    code: "CBTI-FJ",
    subtitle: "你不是在拍照，你是在收集今天的空气。",
    description:
      "你拍照讲究一种情绪到位、颜色对味、日常有诗意的感觉。拍摄对你来说不是硬任务，更像把生活里的光和心情留住。",
    topics: "人像情绪、街头日常、静物细节",
    traits: ["氛围感很强", "喜欢轻松出门", "在意色彩和天气", "更信感觉而不是参数"],
    strengths: ["很会捕捉日常里的情绪", "颜色和氛围感通常在线", "不容易把拍照拍成任务"],
    blindspots: ["容易被好天气决定心情", "过于相信直觉时会忽略稳定性", "有时会为了感觉牺牲信息量"],
    vibe: "你最像那种走着走着突然停下来，因为路边一束光刚好落在杯子和窗台上的人。",
    social: "朋友圈通常是九宫格里最有空气感的那位，文案不多，但别人一看就知道你最近过得很有味道。",
    scenes: "适合城市散步、朋友小聚、咖啡店、黄昏时刻和任何让情绪自己长出来的日常。",
    persona: { E: 5, T: 2, S: 3, M: 4, A: 5, R: 3 },
    topicsVector: { P: 5, ST: 4, L: 3, W: 1, D: 4, C: 2 },
  },
  {
    id: "CANON",
    name: "佳能型",
    code: "CBTI-CN",
    subtitle: "既然拍了，那就得好看。",
    description:
      "你追求稳妥、讨喜、出片率高，拍照时会天然站在观看者那边。你不一定最折腾，但你很容易拍出大家都愿意保存的照片。",
    topics: "人像情绪、旅行记录、家庭合影",
    traits: ["拍人友好", "观感优先", "很少翻车", "愿意为别人考虑"],
    strengths: ["人物状态容易拍得舒服", "出片率高", "适合需要稳定交付的场景"],
    blindspots: ["有时会偏保守", "过于求稳时个性会弱一点", "容易把自己放到服务型位置"],
    vibe: "你像局里最靠谱的摄影搭子，大家把相机交给你会很放心。",
    social: "你的相册是最容易被朋友保存和转发的类型，好看、自然、不会让人尴尬。",
    scenes: "适合朋友聚会、情侣拍摄、旅行合影、家庭记录，以及任何要拍得体面的场合。",
    persona: { E: 3, T: 3, S: 5, M: 3, A: 3, R: 5 },
    topicsVector: { P: 5, ST: 2, L: 4, W: 1, D: 2, C: 2 },
  },
  {
    id: "SONY",
    name: "索尼型",
    code: "CBTI-SY",
    subtitle: "你拍照像开项目，设备必须跟上。",
    description:
      "你重效率、重性能、重系统能力，愿意为了更高上限研究功能和流程。你看待拍照常常带一点工具理性和执行意识。",
    topics: "混合创作、城市题材、视频照片双修",
    traits: ["做功课很认真", "接受新功能快", "偏全能型", "希望一套打天下"],
    strengths: ["执行效率高", "设备和流程适应力强", "很适合混合创作"],
    blindspots: ["容易被参数拉走注意力", "偶尔会把创作变成流程管理", "对纯感性表达耐心不足"],
    vibe: "你像一个把创作当项目推进的人，开始之前脑子里已经有了流程图。",
    social: "你的账号像内容矩阵，有图有视频有切片，稳定输出是你最可怕的地方。",
    scenes: "适合城市创作、活动记录、内容生产、旅行 vlog 和多任务并行的拍摄环境。",
    persona: { E: 2, T: 5, S: 3, M: 3, A: 2, R: 4 },
    topicsVector: { P: 3, ST: 3, L: 3, W: 2, D: 2, C: 5 },
  },
  {
    id: "NIKON",
    name: "尼康型",
    code: "CBTI-NK",
    subtitle: "你不一定最会说，但大概率真的拍到了那只鸟。",
    description:
      "你偏扎实、可靠、认真，喜欢成熟稳定的拍摄方案。你不怎么爱虚头巴脑，重点是拍到、拍准、拍得住。",
    topics: "生态长焦、风光旅行、纪实记录",
    traits: ["拍到比花活重要", "稳定耐心", "目标意识强", "很适合长焦题材"],
    strengths: ["稳定和耐心都很强", "拍关键瞬间很靠谱", "适合需要专注力的题材"],
    blindspots: ["有时会显得不够轻松", "表达欲不一定强", "容易忽略社交传播感"],
    vibe: "你像那种一声不吭蹲很久，最后真的把画面带回来的人。",
    social: "你的照片不一定天天发，但一发常常是别人会认真看两遍的那种。",
    scenes: "适合拍鸟、远景、风光、纪实和所有需要耐心与稳定的拍摄任务。",
    persona: { E: 2, T: 4, S: 2, M: 2, A: 2, R: 5 },
    topicsVector: { P: 2, ST: 2, L: 4, W: 5, D: 1, C: 1 },
  },
  {
    id: "LEICA",
    name: "徕卡型",
    code: "CBTI-LC",
    subtitle: "你拍下的不是场面，是立场。",
    description:
      "你有明确的个人视角，偏好克制、慢速、观察式的拍摄节奏。你很在意怎么看世界，而不只是拍到什么。",
    topics: "街头日常、人文纪实、生活观察",
    traits: ["审美自觉", "拍摄有仪式感", "偏观察者", "重视个人表达"],
    strengths: ["观察力和审美判断很稳定", "画面有明确观点", "擅长把日常拍出立场"],
    blindspots: ["有时会显得距离感偏强", "不太追求讨喜时会牺牲大众接受度", "容易慢热"],
    vibe: "你更像是在城市里散步观察，而不是去完成一组必须交差的照片。",
    social: "你的图可能不吵，但总有一种我懂这张的人会很懂的劲儿。",
    scenes: "适合街头观察、人文纪实、旅行中的边角时刻，以及需要克制表达的题材。",
    persona: { E: 4, T: 2, S: 1, M: 4, A: 5, R: 2 },
    topicsVector: { P: 2, ST: 5, L: 2, W: 1, D: 2, C: 1 },
  },
  {
    id: "HASSELBLAD",
    name: "哈苏型",
    code: "CBTI-HS",
    subtitle: "你拍一张照片的架势，像别人做一套毕业设计。",
    description:
      "你在意质感、秩序和完成度，宁愿慢一点，也想让每一张更成立。对你来说，作品感比数量更重要。",
    topics: "人像大片、静物细节、风光作品",
    traits: ["出手谨慎", "注重层次和构图", "不爱草率记录", "喜欢高完成度"],
    strengths: ["作品完成度高", "构图和层次意识强", "很会营造高级感"],
    blindspots: ["节奏容易偏慢", "不太适合随手流创作", "有时会过于追求完美"],
    vibe: "你拍照像在布置一个会被放大观看的现场，每个细节都想摆正。",
    social: "你的主页像精修后的作品集，更新频率不一定高，但张张都不想输。",
    scenes: "适合大片人像、静物、品牌感拍摄、风光作品和一切需要高级质感的场合。",
    persona: { E: 3, T: 3, S: 1, M: 1, A: 5, R: 3 },
    topicsVector: { P: 4, ST: 1, L: 4, W: 1, D: 5, C: 1 },
  },
  {
    id: "OLYMPUS",
    name: "奥林巴斯型",
    code: "CBTI-OL",
    subtitle: "出门能带上，比参数赢了更重要。",
    description:
      "你喜欢轻装、灵活、随时可拍的状态，拍照最好自然融进生活，而不是让生活围着器材转。",
    topics: "旅行记录、扫街、小景和轻生态",
    traits: ["机动性很高", "很会把拍照融入日常", "不想被负重拖住", "适合边走边拍"],
    strengths: ["出门频率高", "随身拍摄成本低", "很擅长把拍照变成生活习惯"],
    blindspots: ["对极致画质不一定执着", "有时不想折腾会错过更大场面", "容易走轻快路线到底"],
    vibe: "你像那种已经把相机变成生活器官的人，顺手就能拍，完全不费力。",
    social: "你的相册里会有很多旅行、路上、小景和顺手留下的快乐证据。",
    scenes: "适合旅行、通勤、散步、轻徒步和任何说走就走的拍摄状态。",
    persona: { E: 3, T: 2, S: 3, M: 5, A: 3, R: 3 },
    topicsVector: { P: 3, ST: 3, L: 5, W: 3, D: 2, C: 2 },
  },
  {
    id: "RICOH",
    name: "理光型",
    code: "CBTI-RC",
    subtitle: "你像在随手一拍，实际上已经收走了今天最对味的一秒钟。",
    description:
      "你低调、反应快、偏爱城市里的微妙瞬间。你不喜欢大张旗鼓，更享受那种拿起就拍、拍完就走的轻巧节奏。",
    topics: "街头日常、城市切片、即时记录",
    traits: ["善于抓瞬间", "城市观察力强", "设备存在感低", "生活流气质浓"],
    strengths: ["抓瞬间的反应快", "城市日常题材命中率高", "很懂低存在感拍摄"],
    blindspots: ["对宏大叙事兴趣不高", "容易沉迷生活碎片", "有时不想停下来仔细经营画面"],
    vibe: "你像城市里那个没有很大动静，却总能带走最好瞬间的人。",
    social: "你的照片看似轻描淡写，但熟人会觉得特别像你看世界的方式。",
    scenes: "适合扫街、通勤、日常记录、城市观察和所有需要快速出手的时刻。",
    persona: { E: 4, T: 2, S: 1, M: 5, A: 4, R: 2 },
    topicsVector: { P: 2, ST: 5, L: 2, W: 1, D: 2, C: 1 },
  },
  {
    id: "APPLE",
    name: "苹果型",
    code: "CBTI-AP",
    subtitle: "你拍照的终点不是相册，是朋友圈和小红书首页。",
    description:
      "你对复杂摄影知识没那么执着，但对成片网感非常敏锐。好看、好发、有人看，是你判断照片价值的重要标准。",
    topics: "网感人像、社交场景、旅行打卡",
    traits: ["社交媒体友好", "很懂什么叫上镜", "拍人积极", "轻松拿捏分享感"],
    strengths: ["社交传播感强", "知道什么画面更容易被喜欢", "拍人和分享一条龙"],
    blindspots: ["容易被网感牵着走", "有时会更在意发出去的效果", "技术深挖动力不一定强"],
    vibe: "你天然懂什么叫好发、好看、好上首页，镜头感和分享欲都在线。",
    social: "你的图生来就带一点社交媒体滤镜，很适合朋友圈、小红书和各种出片场景。",
    scenes: "适合探店、旅行打卡、自拍互拍、聚会和任何需要立刻出片的场合。",
    persona: { E: 4, T: 1, S: 5, M: 5, A: 3, R: 4 },
    topicsVector: { P: 5, ST: 3, L: 4, W: 1, D: 2, C: 4 },
  },
  {
    id: "ANDROID",
    name: "安卓型",
    code: "CBTI-AN",
    subtitle: "你不是不会拍，你只是还没把拍照当成一件需要认真研究的事。",
    description:
      "你代表大量普通用户的真实状态。拍照对你来说是记录生活的实用功能，不一定有系统风格，但胜在没有心理负担。",
    topics: "生活记录、旅游留念、随手备忘",
    traits: ["对摄影知识门槛低敏感", "主要图个方便", "不会强行追求风格", "更像大多数人"],
    strengths: ["没有创作包袱", "记录生活很直接", "对普通用户很有代表性"],
    blindspots: ["风格辨识度不高", "不太会主动研究拍摄方法", "容易把好画面顺手放过"],
    vibe: "你拍照更像在留证据和留纪念，而不是构建一套自己的视觉体系。",
    social: "你的相册很真实，旅行、吃饭、朋友、截图都有，生活痕迹感很重。",
    scenes: "适合生活记录、旅游打卡、家庭留念和所有不想想太多只想记住的时刻。",
    persona: { E: 2, T: 1, S: 2, M: 5, A: 1, R: 3 },
    topicsVector: { P: 3, ST: 2, L: 4, W: 1, D: 1, C: 2 },
  },
  {
    id: "SIGMA",
    name: "适马型",
    code: "CBTI-SG",
    subtitle: "你拍的不是标准答案，是别人一眼认出来的劲儿。",
    description:
      "你对画风、质感和辨识度非常敏感，愿意为了独特表达接受一点不方便。稳定不是你唯一目标，个性才是。",
    topics: "静物细节、实验人像、特殊视角",
    traits: ["画面执念强", "有实验精神", "喜欢不那么常规的答案", "审美辨识度高"],
    strengths: ["风格辨识度高", "实验表达能力强", "对成像气质非常敏感"],
    blindspots: ["容易走向执念型创作", "有时不够稳", "可能为了个性牺牲效率"],
    vibe: "你拍照时总想再偏一点、怪一点、狠一点，直到它真的像你。",
    social: "你的图很容易被人记住，不一定人人都爱，但懂的人会收藏。",
    scenes: "适合实验人像、静物、特殊光线、个人项目和需要独特风格的视觉表达。",
    persona: { E: 4, T: 4, S: 2, M: 2, A: 4, R: 1 },
    topicsVector: { P: 3, ST: 2, L: 2, W: 1, D: 5, C: 3 },
  },
  {
    id: "XZLWC",
    name: "徐州老味菜型",
    code: "CBTI-XZ",
    subtitle: "你的摄影人格像一桌乱炖，但偏偏还挺有烟火气。",
    description:
      "你可能今天文艺、明天技术、后天摆烂，也可能只是做题时完全随缘。这个类型不是没结果，而是你的答案像一个高能拼盘。",
    topics: "完全随机，今天拍鸟明天拍奶茶后天拍脚后跟",
    traits: ["风格切换很快", "难以归类", "有一点混沌幽默", "适合当兜底彩蛋"],
    strengths: ["风格弹性很大", "不容易被固定套路束缚", "梗感和烟火气都很足"],
    blindspots: ["稳定性偏弱", "很难总结自己的主线", "别人很难预测你下一张要拍什么"],
    vibe: "你像一个摄影人格拼盘，今天像徕卡明天像苹果后天直接老味菜上桌。",
    social: "你的相册像随机刷新页，拍鸟、拍饭、拍朋友、拍脚后跟，全都可能突然出现。",
    scenes: "适合当彩蛋，或者适合一切完全不按常理出牌、主打开心和混沌的拍摄状态。",
    persona: { E: 3, T: 3, S: 3, M: 3, A: 3, R: 3 },
    topicsVector: { P: 3, ST: 3, L: 3, W: 3, D: 3, C: 3 },
  },
];

const questions = [
  {
    id: 1,
    category: "人格习惯",
    text: "出门散步时，你更像哪一种人？",
    options: [
      { label: "A", text: "相机最好随身，看到什么拍什么", scores: { M: 2, ST: 1 } },
      { label: "B", text: "先想好今天想拍什么再出门", scores: { T: 1, R: 2 } },
      { label: "C", text: "如果天气和光线对了，会很有拍照欲", scores: { E: 2, A: 1 } },
      { label: "D", text: "更想顺便拍点能发给朋友看的东西", scores: { S: 2, P: 1 } },
    ],
  },
  {
    id: 2,
    category: "人格习惯",
    text: "拍完一组照片后，你通常最在意什么？",
    options: [
      { label: "A", text: "有没有那种一下就对味的感觉", scores: { E: 2, A: 1 } },
      { label: "B", text: "主体清不清楚、拍没拍到", scores: { T: 1, R: 2 } },
      { label: "C", text: "有没有一张能直接发", scores: { S: 2, P: 1 } },
      { label: "D", text: "还有没有更好的调整空间", scores: { T: 2, A: 1 } },
    ],
  },
  {
    id: 3,
    category: "题材偏好",
    text: "如果周末完全自由，你最想拍什么？",
    options: [
      { label: "A", text: "路上遇到的人和城市小瞬间", scores: { ST: 3, M: 1 } },
      { label: "B", text: "好看的朋友或对象", scores: { P: 3, S: 1 } },
      { label: "C", text: "山、水、天、远方", scores: { L: 3, A: 1 } },
      { label: "D", text: "鸟、动物或者远处不太好拍到的东西", scores: { W: 3, T: 1 } },
    ],
  },
  {
    id: 4,
    category: "人格习惯",
    text: "你对后期修图的态度更接近哪种？",
    options: [
      { label: "A", text: "能不修就不修，感觉对就行", scores: { M: 1, R: 1 } },
      { label: "B", text: "简单调一调，让它更像当时的气氛", scores: { E: 1, A: 2 } },
      { label: "C", text: "该修就修，成片最重要", scores: { S: 1, T: 2 } },
      { label: "D", text: "我喜欢把细节打磨到自己满意", scores: { T: 1, A: 2 } },
    ],
  },
  {
    id: 5,
    category: "人格习惯",
    text: "看到一台很重但很强的设备，你会怎么想？",
    options: [
      { label: "A", text: "太麻烦了，还是轻便重要", scores: { M: 2, R: 1 } },
      { label: "B", text: "只要结果够好，重一点也可以", scores: { A: 1, R: 2 } },
      { label: "C", text: "如果它真能提升成功率，我会认真考虑", scores: { T: 2, R: 1 } },
      { label: "D", text: "看拍什么，工具应该服务目标", scores: { T: 1, C: 2 } },
    ],
  },
  {
    id: 6,
    category: "人格习惯",
    text: "你更容易被哪种画面打动？",
    options: [
      { label: "A", text: "有情绪、有颜色、有空气感", scores: { E: 2, A: 1 } },
      { label: "B", text: "干净、准确、信息明确", scores: { T: 1, R: 2 } },
      { label: "C", text: "像电影截图，完成度很高", scores: { A: 2, D: 1 } },
      { label: "D", text: "有点怪，但就是很有个性", scores: { E: 1, A: 1, R: -1 } },
    ],
  },
  {
    id: 7,
    category: "题材偏好",
    text: "如果只能长期拍一类东西，你更可能选？",
    options: [
      { label: "A", text: "人", scores: { P: 3, S: 1 } },
      { label: "B", text: "街头和日常", scores: { ST: 3, M: 1 } },
      { label: "C", text: "风景和旅行", scores: { L: 3, A: 1 } },
      { label: "D", text: "细节、物件和静物", scores: { D: 3, A: 1 } },
    ],
  },
  {
    id: 8,
    category: "混合题",
    text: "朋友找你帮忙拍照，你通常会？",
    options: [
      { label: "A", text: "先想办法把人拍好看", scores: { S: 2, P: 2 } },
      { label: "B", text: "随手记录真实状态", scores: { ST: 2, M: 1 } },
      { label: "C", text: "会认真找角度和环境，尽量拍得像作品", scores: { A: 2, D: 1 } },
      { label: "D", text: "边拍边想能不能顺手拍视频", scores: { C: 3, T: 1 } },
    ],
  },
  {
    id: 9,
    category: "人格习惯",
    text: "你更喜欢哪种拍摄节奏？",
    options: [
      { label: "A", text: "看到瞬间马上出手", scores: { M: 2, ST: 1 } },
      { label: "B", text: "慢慢看，等它自己成立", scores: { A: 2, ST: 1 } },
      { label: "C", text: "先做准备，再稳定完成", scores: { T: 1, R: 2 } },
      { label: "D", text: "一边拍一边试各种可能", scores: { E: 1, C: 2 } },
    ],
  },
  {
    id: 10,
    category: "人格习惯",
    text: "下面哪种评价最容易让你开心？",
    options: [
      { label: "A", text: "太有感觉了", scores: { E: 2, A: 1 } },
      { label: "B", text: "这张拍得真稳", scores: { R: 2, T: 1 } },
      { label: "C", text: "你把我拍得真好看", scores: { S: 2, P: 1 } },
      { label: "D", text: "这张一看就是你拍的", scores: { A: 2, E: 1 } },
    ],
  },
  {
    id: 11,
    category: "混合题",
    text: "去旅行时，你的拍摄状态更像？",
    options: [
      { label: "A", text: "把这次行程好好记录下来", scores: { L: 2, R: 1 } },
      { label: "B", text: "不赶景点，更想拍路上的偶遇", scores: { ST: 2, A: 1 } },
      { label: "C", text: "想拍到真正值得带回来的风景", scores: { L: 3, A: 1 } },
      { label: "D", text: "边走边拍，轻松别累就行", scores: { M: 2, L: 1 } },
    ],
  },
  {
    id: 12,
    category: "混合题",
    text: "你刷到器材内容时，更容易停在哪种视频上？",
    options: [
      { label: "A", text: "色彩和氛围很迷人的样片", scores: { E: 2, P: 1 } },
      { label: "B", text: "功能解析和性能对比", scores: { T: 3, R: 1 } },
      { label: "C", text: "街头随拍和真实记录", scores: { ST: 2, M: 1 } },
      { label: "D", text: "视频拍摄和创作 workflow", scores: { C: 3, T: 1 } },
    ],
  },
  {
    id: 13,
    category: "人格习惯",
    text: "遇到复杂场景时，你更倾向于？",
    options: [
      { label: "A", text: "先拍下来再说，别错过", scores: { M: 2, R: -1 } },
      { label: "B", text: "先观察一下，找最顺的一刻", scores: { A: 1, ST: 2 } },
      { label: "C", text: "调整到满意再按快门", scores: { T: 2, R: 1 } },
      { label: "D", text: "多试几种方式，看看能不能出惊喜", scores: { E: 1, C: 2 } },
    ],
  },
  {
    id: 14,
    category: "人格习惯",
    text: "你理想中的照片更接近哪种？",
    options: [
      { label: "A", text: "像生活里自然长出来的", scores: { ST: 1, E: 2 } },
      { label: "B", text: "像别人会夸的好看照片", scores: { S: 2, P: 1 } },
      { label: "C", text: "像可以放大细看的作品", scores: { A: 2, D: 1 } },
      { label: "D", text: "像有点脾气、有点性格的表达", scores: { E: 1, A: 2, R: -1 } },
    ],
  },
  {
    id: 15,
    category: "混合题",
    text: "如果路边突然飞来一只很少见的鸟，你第一反应是？",
    options: [
      { label: "A", text: "赶紧拍到再说", scores: { W: 2, M: 1 } },
      { label: "B", text: "有点兴奋，想稳稳记录下来", scores: { W: 2, R: 1 } },
      { label: "C", text: "算了，还是看眼前更有氛围的东西", scores: { E: 2, ST: 1 } },
      { label: "D", text: "我会先看自己手上的设备够不够用", scores: { T: 2, W: 1 } },
    ],
  },
  {
    id: 16,
    category: "题材偏好",
    text: "你更常拍哪种“看似没什么但你会想拍”的东西？",
    options: [
      { label: "A", text: "玻璃上的反光、桌上的杯子、墙角的光", scores: { D: 3, A: 1 } },
      { label: "B", text: "陌生人的背影和路边瞬间", scores: { ST: 3, M: 1 } },
      { label: "C", text: "同伴坐在窗边或者走在路上的样子", scores: { P: 3, S: 1 } },
      { label: "D", text: "天空、山、桥、远处的层次", scores: { L: 3, A: 1 } },
    ],
  },
  {
    id: 17,
    category: "人格习惯",
    text: "对你来说，拍照更像什么？",
    options: [
      { label: "A", text: "记录生活", scores: { ST: 1, R: 1 } },
      { label: "B", text: "表达自己", scores: { E: 2, A: 1 } },
      { label: "C", text: "完成一件作品", scores: { A: 2, D: 1 } },
      { label: "D", text: "研究和玩工具", scores: { T: 2, C: 1 } },
    ],
  },
  {
    id: 18,
    category: "人格习惯",
    text: "你会为了哪件事心甘情愿多花时间？",
    options: [
      { label: "A", text: "把一组照片修到更完整", scores: { A: 2, D: 1 } },
      { label: "B", text: "等一个刚刚好的瞬间", scores: { A: 2, ST: 1 } },
      { label: "C", text: "研究设置，让下次更稳", scores: { T: 2, R: 1 } },
      { label: "D", text: "走更久，只为了多遇到一点东西", scores: { M: 1, L: 2 } },
    ],
  },
  {
    id: 19,
    category: "人格习惯",
    text: "如果你的照片只能保留一种特点，你更希望是？",
    options: [
      { label: "A", text: "有氛围", scores: { E: 2, A: 1 } },
      { label: "B", text: "很准", scores: { T: 1, R: 2 } },
      { label: "C", text: "很好看", scores: { S: 2, P: 1 } },
      { label: "D", text: "很有个人味道", scores: { A: 2, R: -1 } },
    ],
  },
  {
    id: 20,
    category: "题材偏好",
    text: "下面哪种拍摄计划最吸引你？",
    options: [
      { label: "A", text: "和朋友约一场好看的人像", scores: { P: 3, S: 1 } },
      { label: "B", text: "一个人去街上乱逛半天", scores: { ST: 3, M: 1 } },
      { label: "C", text: "天气好时去追一场风景", scores: { L: 3, A: 1 } },
      { label: "D", text: "蹲一个可能会出现小动物的地方", scores: { W: 3, T: 1 } },
    ],
  },
  {
    id: 21,
    category: "人格习惯",
    text: "你更容易买单的理由是？",
    options: [
      { label: "A", text: "它让我更想出门拍", scores: { M: 2, E: 1 } },
      { label: "B", text: "它很稳，省心，不容易翻车", scores: { R: 2, T: 1 } },
      { label: "C", text: "它有独特味道，拍出来就是不一样", scores: { A: 2, E: 1 } },
      { label: "D", text: "它功能很全，后面能玩很多东西", scores: { T: 2, C: 1 } },
    ],
  },
  {
    id: 22,
    category: "题材偏好",
    text: "如果别人翻你的相册，你最可能出现什么？",
    options: [
      { label: "A", text: "朋友、对象、合影、情绪照", scores: { P: 3, S: 1 } },
      { label: "B", text: "街头、路牌、背影、城市碎片", scores: { ST: 3, M: 1 } },
      { label: "C", text: "山水、天空、路上风景", scores: { L: 3, R: 1 } },
      { label: "D", text: "杯子、食物、桌面、细节特写", scores: { D: 3, A: 1 } },
    ],
  },
  {
    id: 23,
    category: "人格习惯",
    text: "你更像哪类创作者？",
    options: [
      { label: "A", text: "抓住当下的人", scores: { ST: 1, M: 1, E: 1 } },
      { label: "B", text: "把人拍好看的人", scores: { S: 2, P: 1 } },
      { label: "C", text: "用设备和流程解决问题的人", scores: { T: 2, C: 1 } },
      { label: "D", text: "有自己审美脾气的人", scores: { A: 2, E: 1 } },
    ],
  },
  {
    id: 24,
    category: "彩蛋题",
    text: "做完测试如果结果特别离谱，你会觉得？",
    options: [
      { label: "A", text: "没事，梗对了就行", scores: { E: 1 }, chaos: 1 },
      { label: "B", text: "我要再测一次，看看是不是题没选好", scores: { R: 2, T: 1 } },
      { label: "C", text: "说明我可能本来就很混", scores: {}, chaos: 2 },
      { label: "D", text: "徐州老味菜也不是不能接受", scores: {}, chaos: 3 },
    ],
  },
];

const state = {
  currentQuestionIndex: 0,
  answers: Array(questions.length).fill(null),
  started: false,
  lastResult: null,
};

const elements = {
  startButton: document.querySelector("#start-button"),
  quizPanel: document.querySelector("#quiz-panel"),
  resultPanel: document.querySelector("#result-panel"),
  questionTag: document.querySelector("#question-tag"),
  questionText: document.querySelector("#question-text"),
  optionList: document.querySelector("#option-list"),
  prevButton: document.querySelector("#prev-button"),
  nextButton: document.querySelector("#next-button"),
  progressText: document.querySelector("#progress-text"),
  progressPercent: document.querySelector("#progress-percent"),
  progressBar: document.querySelector("#progress-bar"),
  resultTitle: document.querySelector("#result-title"),
  resultSubtitle: document.querySelector("#result-subtitle"),
  resultDescription: document.querySelector("#result-description"),
  resultTopics: document.querySelector("#result-topics"),
  resultScore: document.querySelector("#result-score"),
  resultCode: document.querySelector("#result-code"),
  rankingList: document.querySelector("#ranking-list"),
  traitList: document.querySelector("#trait-list"),
  topicList: document.querySelector("#topic-list"),
  strengthList: document.querySelector("#strength-list"),
  blindspotList: document.querySelector("#blindspot-list"),
  resultVibe: document.querySelector("#result-vibe"),
  resultSocial: document.querySelector("#result-social"),
  resultScenes: document.querySelector("#result-scenes"),
  copyResultButton: document.querySelector("#copy-result-button"),
  copyLinkButton: document.querySelector("#copy-link-button"),
  shareButton: document.querySelector("#share-button"),
  shareFeedback: document.querySelector("#share-feedback"),
  restartButton: document.querySelector("#restart-button"),
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function resetApp() {
  state.currentQuestionIndex = 0;
  state.answers = Array(questions.length).fill(null);
  state.started = false;
  state.lastResult = null;
  elements.resultPanel.classList.add("is-hidden");
  elements.quizPanel.classList.add("is-hidden");
  elements.shareFeedback.classList.add("is-hidden");
  elements.shareFeedback.textContent = "";
  document.title = "CBTI 摄影人格测试";
}

function startQuiz() {
  state.started = true;
  elements.quizPanel.classList.remove("is-hidden");
  elements.resultPanel.classList.add("is-hidden");
  renderQuestion();
}

function renderQuestion() {
  const question = questions[state.currentQuestionIndex];
  const answerIndex = state.answers[state.currentQuestionIndex];
  const progressRatio = (state.currentQuestionIndex + 1) / questions.length;

  elements.questionTag.textContent = question.category;
  elements.questionText.textContent = question.text;
  elements.progressText.textContent = `第 ${state.currentQuestionIndex + 1} / ${questions.length} 题`;
  elements.progressPercent.textContent = `${Math.round(progressRatio * 100)}%`;
  elements.progressBar.style.width = `${progressRatio * 100}%`;
  elements.optionList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    if (answerIndex === index) {
      button.classList.add("is-selected");
    }
    button.innerHTML = `<span class="option-label">${option.label}</span><span class="option-text">${option.text}</span>`;
    button.addEventListener("click", () => {
      state.answers[state.currentQuestionIndex] = index;
      renderQuestion();
    });
    elements.optionList.appendChild(button);
  });

  elements.prevButton.disabled = state.currentQuestionIndex === 0;
  elements.nextButton.disabled = answerIndex === null;
  elements.nextButton.textContent =
    state.currentQuestionIndex === questions.length - 1 ? "查看结果" : "下一题";
}

function navigateQuestion(step) {
  const nextIndex = state.currentQuestionIndex + step;
  if (nextIndex < 0 || nextIndex >= questions.length) {
    return;
  }
  state.currentQuestionIndex = nextIndex;
  renderQuestion();
}

function computeScores() {
  const totals = {
    E: 0,
    T: 0,
    S: 0,
    M: 0,
    A: 0,
    R: 0,
    P: 0,
    ST: 0,
    L: 0,
    W: 0,
    D: 0,
    C: 0,
  };

  let chaosPoints = 0;

  questions.forEach((question, questionIndex) => {
    const answerIndex = state.answers[questionIndex];
    if (answerIndex === null) {
      return;
    }
    const option = question.options[answerIndex];
    const questionWeight = 1 + questionIndex * 0.017;
    Object.entries(option.scores).forEach(([dimension, value]) => {
      totals[dimension] += value * questionWeight;
    });
    chaosPoints += option.chaos || 0;
  });

  return { totals, chaosPoints };
}

function normalizeDimensionScores(rawScores, keys) {
  const values = keys.map((key) => rawScores[key]);
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const spread = Math.max(max - min, 1);

  return keys.reduce((accumulator, key) => {
    const normalized = 1 + ((rawScores[key] - min) / spread) * 4;
    accumulator[key] = Number(normalized.toFixed(2));
    return accumulator;
  }, {});
}

function computeDimensionWeights(scoreMap, keys) {
  const values = keys.map((key) => Math.max(scoreMap[key], 0));
  const total = values.reduce((sum, value) => sum + value, 0) || 1;

  return keys.reduce((accumulator, key) => {
    const share = Math.max(scoreMap[key], 0) / total;
    accumulator[key] = 1 + share * 2.4;
    return accumulator;
  }, {});
}

function weightedCosineSimilarity(userVector, typeVector, keys, weights) {
  let dot = 0;
  let userNorm = 0;
  let typeNorm = 0;

  keys.forEach((key) => {
    const weight = weights[key] || 1;
    const userValue = userVector[key];
    const typeValue = typeVector[key];

    dot += userValue * typeValue * weight;
    userNorm += userValue * userValue * weight;
    typeNorm += typeValue * typeValue * weight;
  });

  if (!userNorm || !typeNorm) {
    return 0;
  }

  return (dot / (Math.sqrt(userNorm) * Math.sqrt(typeNorm))) * 100;
}

function weightedDistancePenalty(userVector, typeVector, keys, weights) {
  const distance = Math.sqrt(
    keys.reduce((sum, key) => {
      const weight = weights[key] || 1;
      return sum + (userVector[key] - typeVector[key]) ** 2 * weight;
    }, 0)
  );

  return clamp(100 - distance * 9.5, 0, 100);
}

function calculateRanking() {
  const { totals, chaosPoints } = computeScores();
  const personaKeys = ["E", "T", "S", "M", "A", "R"];
  const topicKeys = ["P", "ST", "L", "W", "D", "C"];
  const personaScores = normalizeDimensionScores(totals, personaKeys);
  const topicScores = normalizeDimensionScores(totals, topicKeys);
  const personaWeights = computeDimensionWeights(personaScores, personaKeys);
  const topicWeights = computeDimensionWeights(topicScores, topicKeys);

  const ranking = typeProfiles.map((typeProfile) => {
    const personaSimilarity =
      weightedCosineSimilarity(personaScores, typeProfile.persona, personaKeys, personaWeights) * 0.6 +
      weightedDistancePenalty(personaScores, typeProfile.persona, personaKeys, personaWeights) * 0.4;

    const topicSimilarity =
      weightedCosineSimilarity(topicScores, typeProfile.topicsVector, topicKeys, topicWeights) * 0.55 +
      weightedDistancePenalty(topicScores, typeProfile.topicsVector, topicKeys, topicWeights) * 0.45;

    let score = personaSimilarity * 0.72 + topicSimilarity * 0.28;

    const signatureBonus =
      personaKeys.reduce((sum, key) => sum + personaScores[key] * typeProfile.persona[key] * 0.018, 0) +
      topicKeys.reduce((sum, key) => sum + topicScores[key] * typeProfile.topicsVector[key] * 0.012, 0);

    score += signatureBonus;

    if (typeProfile.id === "XZLWC") {
      const variation = Math.max(...Object.values(personaScores)) - Math.min(...Object.values(personaScores));
      if (variation < 1.6) {
        score += 7;
      }
      score += chaosPoints * 2;
    }

    return {
      ...typeProfile,
      score,
      displayScore: Math.round(score),
      personaSimilarity: Number(personaSimilarity.toFixed(2)),
      topicSimilarity: Number(topicSimilarity.toFixed(2)),
    };
  });

  ranking.sort((left, right) => right.score - left.score);

  return { ranking, personaScores, topicScores };
}

function topDimensions(scoreMap, count = 3) {
  return Object.entries(scoreMap)
    .sort((left, right) => right[1] - left[1])
    .slice(0, count)
    .map(([dimension, value]) => `${dimensionLabels[dimension]} ${value.toFixed(1)}`);
}

function buildShareText(typeProfile, ranking) {
  const runnerUp = ranking[1];
  const lines = [
    `我的 CBTI 结果是：${typeProfile.name} ${typeProfile.code}`,
    typeProfile.subtitle,
    `匹配度 ${typeProfile.displayScore}%`,
    `典型题材：${typeProfile.topics}`,
  ];

  if (runnerUp) {
    lines.push(`差一点点就会变成：${runnerUp.name}`);
  }

  lines.push("来测测你是哪种摄影人格。");
  return lines.join("\n");
}

async function copyText(text, successMessage) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const tempInput = document.createElement("textarea");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }
    elements.shareFeedback.textContent = successMessage;
    elements.shareFeedback.classList.remove("is-hidden");
  } catch (error) {
    elements.shareFeedback.textContent = "复制失败了，可以手动截图或手动复制链接。";
    elements.shareFeedback.classList.remove("is-hidden");
  }
}

function renderResults() {
  const { ranking, personaScores, topicScores } = calculateRanking();
  const topType = ranking[0];
  const shareText = buildShareText(topType, ranking);
  const shareUrl = window.location.href;

  elements.quizPanel.classList.add("is-hidden");
  elements.resultPanel.classList.remove("is-hidden");

  elements.resultTitle.textContent = `${topType.name}`;
  elements.resultSubtitle.textContent = topType.subtitle;
  elements.resultDescription.textContent = topType.description;
  elements.resultTopics.textContent = topType.topics;
  elements.resultScore.textContent = `${topType.displayScore}%`;
  elements.resultCode.textContent = topType.code;

  elements.rankingList.innerHTML = "";
  ranking.slice(0, 5).forEach((typeProfile, index) => {
    const item = document.createElement("div");
    item.className = "ranking-item";
    item.innerHTML = `
      <span>${index + 1}. ${typeProfile.name}</span>
      <div class="ranking-track"><div class="ranking-fill" style="width: ${clamp(typeProfile.score, 0, 100)}%"></div></div>
      <strong>${typeProfile.displayScore}%</strong>
    `;
    elements.rankingList.appendChild(item);
  });

  elements.traitList.innerHTML = "";
  topType.traits.forEach((trait) => {
    const item = document.createElement("li");
    item.textContent = trait;
    elements.traitList.appendChild(item);
  });

  elements.topicList.innerHTML = "";
  [...topDimensions(personaScores), ...topDimensions(topicScores)].forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    elements.topicList.appendChild(item);
  });

  elements.strengthList.innerHTML = "";
  topType.strengths.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    elements.strengthList.appendChild(item);
  });

  elements.blindspotList.innerHTML = "";
  topType.blindspots.forEach((entry) => {
    const item = document.createElement("li");
    item.textContent = entry;
    elements.blindspotList.appendChild(item);
  });

  elements.resultVibe.textContent = topType.vibe;
  elements.resultSocial.textContent = topType.social;
  elements.resultScenes.textContent = topType.scenes;
  elements.shareFeedback.classList.add("is-hidden");
  elements.shareFeedback.textContent = "";

  document.title = `${topType.name} | CBTI 摄影人格测试`;
  state.lastResult = {
    type: topType,
    ranking,
    shareText,
    shareUrl,
  };
}

elements.startButton.addEventListener("click", startQuiz);
elements.prevButton.addEventListener("click", () => navigateQuestion(-1));
elements.nextButton.addEventListener("click", () => {
  if (state.currentQuestionIndex === questions.length - 1) {
    renderResults();
    return;
  }
  navigateQuestion(1);
});
elements.restartButton.addEventListener("click", () => {
  resetApp();
  startQuiz();
});
elements.copyResultButton.addEventListener("click", async () => {
  if (!state.lastResult) {
    return;
  }
  await copyText(state.lastResult.shareText, "结果文案已复制，可以直接发给朋友了。");
});
elements.copyLinkButton.addEventListener("click", async () => {
  await copyText(window.location.href, "链接已复制。");
});
elements.shareButton.addEventListener("click", async () => {
  if (!state.lastResult) {
    return;
  }

  if (navigator.share) {
    try {
      await navigator.share({
        title: `${state.lastResult.type.name} | CBTI 摄影人格测试`,
        text: state.lastResult.shareText,
        url: state.lastResult.shareUrl,
      });
      elements.shareFeedback.textContent = "分享面板已打开。";
      elements.shareFeedback.classList.remove("is-hidden");
      return;
    } catch (error) {
      if (error?.name === "AbortError") {
        return;
      }
    }
  }

  await copyText(
    `${state.lastResult.shareText}\n${state.lastResult.shareUrl}`,
    "当前设备不支持系统分享，已帮你复制分享文案和链接。"
  );
});

resetApp();
