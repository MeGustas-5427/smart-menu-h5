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
      lines: ['蔬菜沙拉 • 酱椒皮蛋', '特色酱鸭 • 爽口酱萝卜'],
    },
    {
      title: '【 御 膳 】12 道',
      lines: [
        '清蒸多宝鱼 • 鲜肚炖猪蹄 • 红焖走地鸡',
        '白灼基围虾 • 信阳焖罐肉 • 文火炖黄牛肉',
        '石锅香芋 • 腌辣椒炒腊味 • 农家腊肉炖腊排',
        '农家窝窝头 • 干锅鹿茸菌 • 炒时蔬',
      ],
    },
    {
      title: '【 美 点 】',
      lines: ['手工水饺 • 地锅馍'],
    },
    {
      title: '【 礼 遇 赠 送 】',
      lines: ['暖心热饮 2 扎 • 精选红酒 1 瓶'],
    },
  ],
  price: '1388元 / 桌',
  priceNote: '(10 - 12 人)',
  footer: '南湖•和筵 诚意呈献',
}

export const dishPages: DishPage[] = [
  {
    page: 2,
    title: '— 前 菜 —',
    layout: 'wide-2',
    dishes: [
      { name: '酱椒皮蛋', desc: '椒香浓郁，软滑Q弹，开胃生津的席间小食。' },
      { name: '蔬菜沙拉', desc: '清爽轻负担，自然原味，五彩缤纷的健康之选。' },
    ],
  },
  {
    page: 3,
    title: '— 前 菜 —',
    layout: 'wide-2',
    dishes: [
      { name: '爽口酱萝卜', desc: '秘制酱渍，清脆生津，席间解腻开胃首选。' },
      { name: '特色酱鸭', desc: '浓油赤酱，骨酥肉烂，咸甜适中。' },
    ],
  },
  {
    page: 4,
    title: '— 御 膳 —',
    layout: 'wide-2',
    dishes: [
      { name: '清蒸多宝鱼', desc: '鱼皮弹牙，肉质紧实，席间尊享的清鲜滋味。' },
      {
        name: '鲜肚炖猪蹄',
        desc: '精选鲜猪肚与丰腴猪蹄，慢火熬至汤白浓郁。肚片脆嫩，猪蹄软糯，每一口都是温润暖心的胶原精华。',
      },
    ],
  },
  {
    page: 5,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '信阳焖罐肉', desc: '地道乡土风味，慢煨出本真肉香。' },
      { name: '白灼基围虾', desc: '虾膏丰腴，Q弹有力，满口尽是紧致鲜甜。' },
      { name: '文火炖黄牛肉', desc: '慢功细活，软烂入味，浓缩牛肉的每一丝肌理精华。' },
    ],
  },
  {
    page: 6,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '石锅香芋', desc: '石锅氤氲出阵阵焦香，质地外糯里软，田园美味。' },
      { name: '腌辣椒炒腊味', desc: '咸鲜火辣，镬气十足，最是地道下饭的家乡烟火。' },
      { name: '农家腊肉炖腊排', desc: '烟熏陈香，肉质紧实，浓缩了岁月的农家风味。' },
    ],
  },
  {
    page: 7,
    title: '— 御 膳 —',
    layout: 'grid-4',
    dishes: [
      {
        name: '红焖走地鸡',
        desc: '走地鸡，慢火红焖入味，地道的家乡风味。',
      },
      { name: '农家窝窝头', desc: '五谷杂粮，粗纤健康，回味悠长的田园记忆。' },
      { name: '干锅鹿茸菌', desc: '山林珍味，口感爽脆，焦香扑鼻。' },
      { name: '炒时蔬', desc: '抢火秒出，翠绿欲滴，品味四季的轮替鲜嫩。' },
    ],
  },
  {
    page: 8,
    title: '— 美 点 —',
    layout: 'grid-2',
    dishes: [
      { name: '手工水饺', desc: '皮薄馅大，手作温情，地道美味。' },
      { name: '地锅馍', desc: '贴锅焦脆，一面松软，吸足了汤汁的浓郁鲜香。' },
    ],
    footer: '南湖•和筵 恭祝阖家幸福',
  },
]
