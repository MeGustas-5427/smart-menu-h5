export type Dish = {
  name: string
  desc: string
}

export type DishPage = {
  page: number
  title: string
  layout: 'grid-3' | 'grid-4' | 'grid-2' | 'wide-2' | 'single'
  dishes: Dish[]
  footer?: string
}

export const coverContent = {
  brand: '南湖 • 和筵',
  title: '除 夕 家 宴',
  subtitle: '二零二六 · 丙午马年',
  menuLabel: '— 呈 上 菜 单 —',
  sections: [
    {
      title: '【 前 菜 】',
      lines: [
        '蔬菜沙拉 • 酱椒皮蛋 • 爽口酱萝卜',
        '特色酱鸭 • 烧鸡 • 卤牛腱',
      ],
    },
    {
      title: '【 御 膳 】16 道',
      lines: [
        '土烧南湾大鱼头 配 大油条',
        '老虎斑 • 红焖黄盖大甲鱼',
        '京葱海参烩蹄筋 • 农家腊肉炖腊排',
        '荷叶饼扣肉 • 腌辣椒炒腊味 • 文火炖黄牛肉',
        '石锅香芋 • 干锅鹿茸菌 • 鲜肚炖猪蹄',
        '荠菜百叶卷 • 白灼基围虾 • 清汤羊肉',
        '干锅花菜 • 炒时蔬',
      ],
    },
    {
      title: '【 美 点 】',
      lines: ['地锅馍 • 手工水饺'],
    },
    {
      title: '【 礼 遇 赠 送 】',
      lines: ['暖心热饮 2 扎 • 精选红酒 1 瓶'],
    },
  ],
  price: '1988元 / 桌',
  priceNote: '(14 - 16 人)',
  footer: '南湖 • 和筵 诚意呈献',
}

export const dishPages: DishPage[] = [
  {
    page: 2,
    title: '— 前 菜 —',
    layout: 'grid-3',
    dishes: [
      { name: '爽口酱萝卜', desc: '秘制酱渍，清脆生津，席间解腻开胃首选。' },
      { name: '卤牛腱', desc: '匠心卤制，筋道有嚼劲，咸鲜醇厚的下酒好菜。' },
      { name: '蔬菜沙拉', desc: '清爽轻负担，自然原味，五彩缤纷的健康之选。' },
    ],
  },
  {
    page: 3,
    title: '— 前 菜 —',
    layout: 'grid-3',
    dishes: [
      { name: '烧鸡', desc: '皮爽肉嫩，骨髓入味，传统的鲜香诱惑。' },
      { name: '酱椒皮蛋', desc: '椒香浓郁，软滑Q弹，开胃生津的席间小食。' },
      { name: '特色酱鸭', desc: '浓油赤酱，骨酥肉烂，咸甜适中。' },
    ],
  },
  {
    page: 4,
    title: '— 镇 店 之 宝 —',
    layout: 'single',
    dishes: [
      {
        name: '土烧南湾大鱼头',
        desc: '源自南湖野生水域，古法酱焖，汤浓肉鲜。每一口都是湖水的馈赠，席间待客之首选。',
      },
    ],
  },
  {
    page: 5,
    title: '— 御 膳 —',
    layout: 'wide-2',
    dishes: [
      { name: '老虎斑', desc: '鱼皮弹牙，肉质紧实，席间尊享的清鲜滋味。' },
      { name: '红焖黄盖大甲鱼', desc: '裙边厚实，胶原满满，滋补首选。' },
    ],
  },
  {
    page: 6,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '京葱海参烩蹄筋', desc: '葱香浓郁，滑嫩软糯，尽显温润大气的本草滋补。' },
      { name: '白灼基围虾', desc: '虾膏丰腴，Q弹有力，满口尽是紧致鲜甜。' },
      { name: '农家腊肉炖腊排', desc: '烟熏陈香，肉质紧实，浓缩了岁月的农家风味。' },
    ],
  },
  {
    page: 7,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '荷叶饼扣肉', desc: '软烂红亮，肥而不腻，清香饼皮裹满脂香幸福。' },
      { name: '腌辣椒炒腊味', desc: '咸鲜火辣，镬气十足，最是地道下饭的家乡烟火。' },
      { name: '文火炖黄牛肉', desc: '慢功细活，软烂入味，浓缩牛肉的每一丝肌理精华。' },
    ],
  },
  {
    page: 8,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '石锅香芋', desc: '石锅氤氲出阵阵焦香，质地外糯里软，田园美味。' },
      { name: '清汤羊肉', desc: '原汁原味，清鲜不膻，暖心暖胃的淳朴滋味。' },
      {
        name: '鲜肚炖猪蹄',
        desc: '精选鲜猪肚与丰腴猪蹄，慢火熬至汤白浓郁。肚片脆嫩，猪蹄软糯，每一口都是温润暖心的胶原精华。',
      },
    ],
  },
  {
    page: 9,
    title: '— 御 膳 —',
    layout: 'grid-4',
    dishes: [
      { name: '荠菜百叶卷', desc: '春意满盈，清香扑鼻，素雅清淡。' },
      { name: '干锅花菜', desc: '镬气十足，爽脆入味，焦香四溢。' },
      { name: '干锅鹿茸菌', desc: '山林珍味，口感爽脆，焦香扑鼻。' },
      { name: '炒时蔬', desc: '抢火秒出，翠绿欲滴，品味四季的轮替鲜嫩。' },
    ],
  },
  {
    page: 10,
    title: '— 美 点 —',
    layout: 'grid-2',
    dishes: [
      { name: '手工水饺', desc: '皮薄馅大，手作温情，地道美味。' },
      { name: '地锅馍', desc: '贴锅焦脆，一面松软，吸足了汤汁的浓郁鲜香。' },
    ],
    footer: '南湖 • 和筵 恭祝阖家幸福',
  },
]
