export type ImageFrame = {
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

export type PageImages = {
  page: number;
  images: ImageFrame[];
};

export const pageSize = { width: 595.28, height: 841.89 } as const;

export const imageMap: PageImages[] = [
  {
    page: 1,
    images: [],
  },
  {
    page: 2,
    images: [
      {
        name: '酱椒皮蛋.webp',
        x: 0.095251,
        y: 0.109426,
        w: 0.809493,
        h: 0.321960,
      },
      {
        name: '蔬菜沙拉.webp',
        x: 0.095251,
        y: 0.545818,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 3,
    images: [
      {
        name: '爽口酱萝卜.webp',
        x: 0.095251,
        y: 0.109447,
        w: 0.809493,
        h: 0.321960,
      },
      {
        name: '特色酱鸭.webp',
        x: 0.095251,
        y: 0.545852,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 4,
    images: [
      {
        name: '清蒸多宝鱼.webp',
        x: 0.095251,
        y: 0.109505,
        w: 0.809493,
        h: 0.321960,
      },
      {
        name: '鲜肚炖猪蹄.webp',
        x: 0.095251,
        y: 0.545846,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 5,
    images: [
      {
        name: '信阳焖罐肉.webp',
        x: 0.083490,
        y: 0.100746,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '白灼基围虾.webp',
        x: 0.553966,
        y: 0.100746,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '文火炖黄牛肉.webp',
        x: 0.095251,
        y: 0.555673,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 6,
    images: [
      {
        name: '石锅香芋.webp',
        x: 0.083490,
        y: 0.100814,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '腌辣椒炒腊味.webp',
        x: 0.553966,
        y: 0.100814,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '农家腊肉炖腊排.webp',
        x: 0.095251,
        y: 0.555673,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 7,
    images: [
      {
        name: '红焖走地鸡.webp',
        x: 0.083490,
        y: 0.104066,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '农家窝窝头.webp',
        x: 0.553966,
        y: 0.104066,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '干锅鹿茸菌.webp',
        x: 0.083490,
        y: 0.548881,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '炒时蔬.webp',
        x: 0.553966,
        y: 0.548881,
        w: 0.362540,
        h: 0.343316,
      },
    ],
  },
  {
    page: 8,
    images: [
      {
        name: '手工水饺.webp',
        x: 0.083490,
        y: 0.172696,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '地锅馍.webp',
        x: 0.553966,
        y: 0.172696,
        w: 0.362540,
        h: 0.343316,
      },
    ],
  },
];
