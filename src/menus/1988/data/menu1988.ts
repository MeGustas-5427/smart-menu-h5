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

export const pageSize = { width: 595.280029, height: 841.890015 } as const;

export const imageMap: PageImages[] = [
  {
    page: 1,
    images: [
    ],
  },
  {
    page: 2,
    images: [
      {
        name: 'page-2-img-1.png',
        x: 0.083490,
        y: 0.100755,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-2-img-2.png',
        x: 0.553966,
        y: 0.100755,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: 'page-2-img-3.png',
        x: 0.095251,
        y: 0.555639,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 3,
    images: [
      {
        name: 'page-3-img-1.png',
        x: 0.083490,
        y: 0.100707,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-3-img-2.png',
        x: 0.553966,
        y: 0.100707,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: 'page-3-img-3.png',
        x: 0.095251,
        y: 0.555639,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 4,
    images: [
      {
        name: 'page-4-img-1.png',
        x: 0.095254,
        y: 0.117257,
        w: 0.809488,
        h: 0.766566,
      },
    ],
  },
  {
    page: 5,
    images: [
      {
        name: 'page-5-img-1.png',
        x: 0.095251,
        y: 0.109453,
        w: 0.809493,
        h: 0.321960,
      },
      {
        name: 'page-5-img-2.png',
        x: 0.095251,
        y: 0.545787,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 6,
    images: [
      {
        name: 'page-6-img-1.png',
        x: 0.083490,
        y: 0.100813,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-6-img-2.png',
        x: 0.553966,
        y: 0.100813,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: 'page-6-img-3.png',
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
        name: 'page-7-img-1.png',
        x: 0.083490,
        y: 0.100811,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-7-img-2.png',
        x: 0.553966,
        y: 0.100811,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: 'page-7-img-3.png',
        x: 0.095251,
        y: 0.555673,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 8,
    images: [
      {
        name: 'page-8-img-1.png',
        x: 0.083490,
        y: 0.100750,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-8-img-2.png',
        x: 0.553966,
        y: 0.100750,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: 'page-8-img-3.png',
        x: 0.095251,
        y: 0.555639,
        w: 0.809493,
        h: 0.321960,
      },
    ],
  },
  {
    page: 9,
    images: [
      {
        name: 'page-9-img-1.png',
        x: 0.083490,
        y: 0.100234,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-9-img-2.png',
        x: 0.553966,
        y: 0.100234,
        w: 0.362540,
        h: 0.343316,
      },
      {
        name: 'page-9-img-3.png',
        x: 0.083490,
        y: 0.519994,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-9-img-4.png',
        x: 0.553966,
        y: 0.519994,
        w: 0.362540,
        h: 0.343316,
      },
    ],
  },
  {
    page: 10,
    images: [
      {
        name: 'page-10-img-1.png',
        x: 0.083490,
        y: 0.172696,
        w: 0.362539,
        h: 0.343316,
      },
      {
        name: 'page-10-img-2.png',
        x: 0.553966,
        y: 0.172696,
        w: 0.362540,
        h: 0.343316,
      },
    ],
  },
];
