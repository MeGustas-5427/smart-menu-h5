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
        name: '特色酱鸭.webp',
        x: 0.095251,
        y: 0.109411,
        w: 0.809493,
        h: 0.321960,
      },
      {
        name: '蔬菜沙拉.webp',
        x: 0.095251,
        y: 0.545825,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 3,
    images: [
      {
        name: '文火炖黄牛肉.webp',
        x: 0.095251,
        y: 0.109453,
        w: 0.809493,
        h: 0.321960,
      },
      {
        name: '红焖走地鸡.webp',
        x: 0.095251,
        y: 0.545752,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 4,
    images: [
      {
        name: '养生菌汤.webp',
        x: 0.083490,
        y: 0.100808,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '石锅香芋.webp',
        x: 0.553966,
        y: 0.100808,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '清蒸鲈鱼.webp',
        x: 0.095251,
        y: 0.555707,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 5,
    images: [
      {
        name: '白灼基围虾.webp',
        x: 0.083490,
        y: 0.100820,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '腌辣椒炒腊味.webp',
        x: 0.553966,
        y: 0.100820,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: '炒时蔬.webp',
        x: 0.095251,
        y: 0.555691,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 6,
    images: [
      {
        name: '酒酿圆子.webp',
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
