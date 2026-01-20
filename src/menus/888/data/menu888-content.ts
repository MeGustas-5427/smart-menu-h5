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
      lines: ['蔬菜沙拉 • 特色酱鸭'],
    },
    {
      title: '【 御 膳 】8 道',
      lines: [
        '文火炖牛腩 • 红焖走地鸡',
        '养生菌汤 • 石锅香芋',
        '清蒸鲈鱼 • 白灼基围虾',
        '腌辣椒炒腊味 • 炒时蔬',
      ],
    },
    {
      title: '【 美 点 】',
      lines: ['酒酿圆子 • 地锅馍'],
    },
    {
      title: '【 饮 料 】',
      lines: ['热饮 1 扎'],
    },
    {
      title: '【 礼 遇 赠 送 】',
      lines: ['精选啤酒 2 瓶 • 精选红酒 1 瓶'],
    },
  ],
  price: '888元 / 桌',
  priceNote: '(5 - 6 人)',
  footer: '南湖•和筵 诚意呈献',
}

export const dishPages: DishPage[] = [
  {
    page: 2,
    title: '— 前 菜 —',
    layout: 'wide-2',
    dishes: [
      { name: '特色酱鸭', desc: '浓油赤酱，骨酥肉烂，咸甜适中。' },
      { name: '蔬菜沙拉', desc: '清爽轻负担，自然原味，五彩缤纷的健康之选。' },
    ],
  },
  {
    page: 3,
    title: '— 御 膳 —',
    layout: 'wide-2',
    dishes: [
      { name: '文火炖黄牛肉', desc: '慢功细活，软烂入味，浓缩牛肉的每一丝肌理精华。' },
      {
        name: '红焖走地鸡',
        desc: '甄选山野散养走地鸡，慢火红焖入味。肉质筋道紧实，酱香透骨，每一口都能品味到纯粹的山野本真。',
      },
    ],
  },
  {
    page: 4,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '养生菌汤', desc: '多种森林野菌荟萃，清淡养生。' },
      { name: '石锅香芋', desc: '石锅氤氲出阵阵焦香，质地外糯里软，田园美味。' },
      { name: '清蒸鲈鱼', desc: '清蒸入神，肉质滑嫩，品味最纯粹的江鲜本真。' },
    ],
  },
  {
    page: 5,
    title: '— 御 膳 —',
    layout: 'grid-3',
    dishes: [
      { name: '白灼基围虾', desc: '虾膏丰腴，Q弹有力，满口尽是紧致鲜甜。' },
      { name: '腌辣椒炒腊味', desc: '咸鲜火辣，镬气十足，最是地道下饭的家乡烟火。' },
      { name: '炒时蔬', desc: '抢火秒出，翠绿欲滴，品味四季的轮替鲜嫩。' },
    ],
  },
  {
    page: 6,
    title: '— 美 点 —',
    layout: 'grid-2',
    dishes: [
      { name: '酒酿圆子', desc: '糯香酸甜，温润身心，萦绕鼻尖的淡淡酒香。' },
      { name: '地锅馍', desc: '贴锅焦脆，一面松软，吸足了汤汁的浓郁鲜香。' },
    ],
    footer: '南湖•和筵 恭祝阖家幸福',
  },
]
