## Results.

<br />

- **URL** : [**https://gallerygrd.com**](https://gallerygrd.com)

<br />

## Structure.

<br />

├── 📂 **public** <br />
├── 📂 **src** <br />
│ ├── 📂 components <br />
│ │ ├── 📂 Places _(필터링 가능한 랜드마크 리스트)_ <br />
│ │ │ ├── 📄 index.tsx <br />
│ │ │ ├── 📄 style.ts <br />
│ │ │ ├── 📄 type.ts <br />
│ │ ├── 📂 Subscribe _(뉴스레터 구독 섹션)_ <br />
│ │ ├── 📂 Users _(사용자 리스트 )_ <br />
│ │ <br />
│ ├── 📂 styles <br />
│ ├── 📂 utils <br />
│ │ ├── 📄 placesHelper.ts _**(장소 목록 필터링 및 정렬 유틸 함수)**_ <br />
│ │ ├── 📄 shuffledUsers.ts _**(사용자 목록을 랜덤으로 섞는 유틸 함수)**_ <br />
│ │ ├── 📄 unsplashBg.ts _**(Unsplash API에서 배경 이미지를 가져오고 캐싱하는 유틸 함수)**_ <br />

<br />

## Used Skills

<div style={{display: 'flex'}}>
   <img src="https://img.shields.io/badge/TYPESCRIPT-bcbcbc?style=flat-square&logo=TYPESCRIPT&logoColor=white"/>
    <img src="https://img.shields.io/badge/REACT-bcbcbc?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/STYLED COMPONENTS-bcbcbc?style=flat-square&logo=styled-components&logoColor=white"/>
 <img src="https://img.shields.io/badge/Framer_Motion-bcbcbc?style=flat-square&logo=Framer-Motion Framer-Motion&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-bcbcbc?style=flat-square&logo=Amazon PM2&logoColor=white"/>   
</div>

<br />

## Key Focus Areas.

### **Seamless UI with Framer Motion**

- **단계적인 애니메이션 적용**으로 **컴포넌트는 자연스럽게 페이드 인되고, Place 카드 리스트는 슬라이드 인 효과로 직관적인 흐름을 제공**.

```ts
// styles/animation.ts
export const slideInFromRight = (index: number) => ({
  variants: {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: 'easeOut', delay: index * 0.1 },
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2, ease: 'easeIn' } },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
});
```

 <br />

### **Efficient Data Processing with Utilities**

- **유틸리티 함수**를 활용해 **데이터 처리, 정렬, 캐싱을 최적화하여 성능을 개선하고 코드의 재사용성을 극대화**.

```ts
// utils/placesHelper.ts
export const filterPlaces = (category: string, year: number | null) => {
  return places
    .filter(place => {
      const matchesCategory = category === 'All' || place.category === category;
      const matchesYear = year === null || place.year <= year;
      return matchesCategory && matchesYear;
    })
    .sort((a, b) => a.year - b.year);
};
```

<br />

## Getting Started.

<br />

### Executing program

- 아래 URL을 통해 접근

> [**https://gallerygrd.com**](https://gallerygrd.com/)

<br />

### Installing

```bash
cd dev-kmd
```

```bash
npm i
```

```bash
npm run dev
```

<br>

## Author.

- Made by [**@김민덕**](https://right-citrus-fbf.notion.site/19c45bf83a2180d38d75fc7983c313ab?pvs=4)
